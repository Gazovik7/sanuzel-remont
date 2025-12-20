import fs from 'node:fs';
import path from 'node:path';
import { Client } from 'basic-ftp';

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const env = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIndex = line.indexOf('=');
    if (eqIndex === -1) continue;
    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function requireEnv(env, key) {
  if (!env[key]) {
    throw new Error(`Missing required env: ${key}`);
  }
  return env[key];
}

const projectRoot = process.cwd();
const fileEnv = loadEnvFile(path.join(projectRoot, '.env.deploy'));
const env = { ...fileEnv, ...process.env };

const host = requireEnv(env, 'FTP_HOST');
const user = requireEnv(env, 'FTP_USER');
const password = requireEnv(env, 'FTP_PASS');
const port = Number(env.FTP_PORT || 21);
const remoteDir = requireEnv(env, 'FTP_DEST');
const localDir = env.LOCAL_DIR || path.join(projectRoot, 'astro', 'dist');
const secure = String(env.FTP_SECURE || '').toLowerCase() === 'true';

if (!fs.existsSync(localDir)) {
  throw new Error(`Local build folder not found: ${localDir}`);
}

const connectRetries = Number(env.FTP_RETRIES || 3);
const fileRetries = Number(env.FTP_FILE_RETRIES || 3);
const retryDelayMs = Number(env.FTP_RETRY_DELAY_MS || 2000);
const verbose = String(env.FTP_VERBOSE || '').toLowerCase() === 'true';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function listFiles(rootDir) {
  const files = [];
  const walk = (currentDir) => {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const absPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(absPath);
      } else {
        const relPath = path.relative(rootDir, absPath).split(path.sep).join('/');
        files.push({ absPath, relPath });
      }
    }
  };
  walk(rootDir);
  return files;
}

async function connectWithRetries() {
  let lastError = null;
  for (let attempt = 1; attempt <= connectRetries; attempt += 1) {
    const client = new Client();
    client.ftp.verbose = verbose;
    try {
      console.log(`Connecting to FTP... (attempt ${attempt}/${connectRetries})`);
      await client.access({
        host,
        user,
        password,
        port,
        secure,
      });
      await client.ensureDir(remoteDir);
      await client.cd(remoteDir);
      return client;
    } catch (error) {
      lastError = error;
      client.close();
      if (attempt < connectRetries) {
        console.log(`Retrying connection in ${retryDelayMs}ms...`);
        await sleep(retryDelayMs);
      }
    }
  }
  throw lastError;
}

async function uploadFile(client, file) {
  const relDir = path.posix.dirname(file.relPath);
  if (relDir !== '.') {
    await client.ensureDir(relDir);
  }
  await client.uploadFrom(file.absPath, path.posix.basename(file.relPath));
  if (relDir !== '.') {
    await client.cd(remoteDir);
  }
}

let success = false;
let client = null;
const files = listFiles(localDir);

try {
  client = await connectWithRetries();
  console.log(`Deploying ${localDir} -> ${remoteDir}`);
  await client.clearWorkingDir();

  for (const file of files) {
    let uploaded = false;
    for (let attempt = 1; attempt <= fileRetries; attempt += 1) {
      try {
        await uploadFile(client, file);
        uploaded = true;
        break;
      } catch (error) {
        console.error(`Upload failed (${file.relPath}):`, error?.message || error);
        if (attempt < fileRetries) {
          client.close();
          await sleep(retryDelayMs);
          client = await connectWithRetries();
        }
      }
    }
    if (!uploaded) {
      throw new Error(`Failed to upload ${file.relPath} after ${fileRetries} attempts.`);
    }
  }

  console.log('Deploy complete.');
  success = true;
} catch (error) {
  console.error('Deploy failed:', error?.message || error);
  process.exitCode = 1;
} finally {
  if (client) {
    client.close();
  }
}

if (!success) {
  process.exitCode = 1;
}
