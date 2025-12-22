import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const targets = [
  'astro/src',
  'astro/public',
  'astro/astro.config.mjs',
  'astro/package.json',
  'astro/tailwind.config.cjs',
  '.env.deploy',
];

const watched = targets.filter((target) => existsSync(resolve(root, target)));
if (!watched.length) {
  console.error('No watch targets found. Check project paths.');
  process.exit(1);
}

let timer = null;
let running = false;
let rerun = false;

const runDeploy = () =>
  new Promise((resolvePromise, rejectPromise) => {
    const child = spawn('npm', ['run', 'deploy'], { cwd: root, stdio: 'inherit', shell: true });
    child.on('exit', (code) => {
      if (code === 0) resolvePromise();
      else rejectPromise(new Error(`deploy failed with code ${code}`));
    });
  });

const scheduleDeploy = () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(async () => {
    timer = null;
    if (running) {
      rerun = true;
      return;
    }
    running = true;
    try {
      console.log('[deploy:watch] Starting deploy...');
      await runDeploy();
      console.log('[deploy:watch] Deploy finished.');
    } catch (err) {
      console.error('[deploy:watch] Deploy error:', err?.message ?? err);
    } finally {
      running = false;
      if (rerun) {
        rerun = false;
        scheduleDeploy();
      }
    }
  }, 1500);
};

for (const target of watched) {
  const abs = resolve(root, target);
  try {
    watch(
      abs,
      { recursive: true },
      () => scheduleDeploy()
    );
  } catch (err) {
    console.warn(`[deploy:watch] Failed to watch ${target}:`, err?.message ?? err);
  }
}

console.log('[deploy:watch] Watching for changes...');
console.log(`[deploy:watch] Targets: ${watched.join(', ')}`);
