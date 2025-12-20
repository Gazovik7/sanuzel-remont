import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const imgDir = path.join(projectRoot, 'astro', 'public', 'img');

const targets = [
  { input: 'remont-vannoy-v-moskve.png', output: 'remont-vannoy-v-moskve.webp', quality: 75 },
  { input: 'materials.jpg', output: 'materials.webp', quality: 75 },
];

for (const target of targets) {
  const inputPath = path.join(imgDir, target.input);
  const outputPath = path.join(imgDir, target.output);
  await sharp(inputPath, { failOn: 'none' })
    .webp({ quality: target.quality })
    .toFile(outputPath);
}

console.log('WebP files generated.');
