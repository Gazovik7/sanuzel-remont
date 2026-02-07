import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'astro', 'dist');
const targetExts = new Set(['.html', '.xml', '.txt', '.js', '.mjs', '.css', '.json']);

const files = [];
const walk = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(absPath);
      continue;
    }
    if (targetExts.has(path.extname(entry.name).toLowerCase())) {
      files.push(absPath);
    }
  }
};

if (!fs.existsSync(root)) {
  // Try parent directory if we are inside scripts/
  const altRoot = path.join(process.cwd(), '..', 'astro', 'dist');
  if (fs.existsSync(altRoot)) {
    walk(altRoot);
  } else {
    console.error(`Build folder not found: ${root}`);
    process.exitCode = 1;
  }
} else {
  walk(root);
}

if (files.length > 0) {
  let cleanedCount = 0;
  let totalNulls = 0;
  for (const file of files) {
    const data = fs.readFileSync(file);
    const hasControlChars = data.some(byte => byte < 32 && byte !== 9 && byte !== 10 && byte !== 13);
    if (!hasControlChars) continue;
    
    let fileNulls = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] < 32 && data[i] !== 9 && data[i] !== 10 && data[i] !== 13) fileNulls++;
    }
    
    const cleaned = Buffer.from(data.filter((byte) => byte >= 32 || byte === 9 || byte === 10 || byte === 13));
    fs.writeFileSync(file, cleaned);
    cleanedCount += 1;
    totalNulls += fileNulls;
    console.log(`Fixed: ${path.relative(process.cwd(), file)} (${fileNulls} control bytes removed)`);
  }
  if (cleanedCount) {
    console.log(`Successfully stripped ${totalNulls} control bytes from ${cleanedCount} file(s).`);
  } else {
    console.log('No control bytes found in build output.');
  }
}
