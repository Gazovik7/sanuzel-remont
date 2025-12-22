import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'astro', 'dist');
const targetExts = new Set(['.html', '.xml', '.txt']);

const files = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(absPath);
      continue;
    }
    if (targetExts.has(path.extname(entry.name))) {
      files.push(absPath);
    }
  }
};

if (!fs.existsSync(root)) {
  console.error(`Build folder not found: ${root}`);
  process.exitCode = 1;
} else {
  walk(root);
  let cleanedCount = 0;
  for (const file of files) {
    const data = fs.readFileSync(file);
    if (!data.includes(0)) continue;
    const cleaned = Buffer.from(data.filter((byte) => byte !== 0));
    fs.writeFileSync(file, cleaned);
    cleanedCount += 1;
  }
  if (cleanedCount) {
    console.log(`Stripped NUL bytes from ${cleanedCount} file(s).`);
  }
}
