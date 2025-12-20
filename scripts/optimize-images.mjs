import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const args = new Set(process.argv.slice(2));
const inPlace = args.has('--in-place');
const useImagemin = args.has('--imagemin');

const projectRoot = process.cwd();
const inputDir = path.join(projectRoot, 'astro', 'public', 'img');
const outputDir = inPlace ? inputDir : path.join(projectRoot, 'astro', 'public', 'img-optimized');

const resizeWidths = new Map([
  ['do1.jpg', 640],
  ['do2.jpg', 640],
  ['do3.jpg', 640],
  ['do4.jpg', 640],
  ['posle1.jpg', 640],
  ['posle2.jpg', 640],
  ['posle3.jpg', 640],
  ['posle4.jpg', 640],
  ['remont-vannoy-v-moskve.png', 1800],
  ['materials.jpg', 640],
  ['moscow-area.png', 900],
  ['direktor.png', 80],
  ['logo.png', 96],
]);

const allowedExts = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!allowedExts.has(ext)) return null;

  const relative = path.relative(inputDir, filePath);
  const outputPath = inPlace ? `${filePath}.tmp` : path.join(outputDir, relative);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const baseName = path.basename(filePath);
  const resizeWidth = resizeWidths.get(baseName);

  let pipeline = sharp(filePath, { failOn: 'none' });
  if (resizeWidth) {
    pipeline = pipeline.resize({ width: resizeWidth, withoutEnlargement: true });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  }

  await pipeline.toFile(outputPath);

  if (useImagemin && (ext === '.jpg' || ext === '.jpeg' || ext === '.png')) {
    const buffer = await fs.readFile(outputPath);
    const optimized = await imagemin.buffer(buffer, {
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.65, 0.8] }),
      ],
    });
    await fs.writeFile(outputPath, optimized);
  }

  const beforeStat = await fs.stat(filePath);

  if (inPlace) {
    await fs.rename(outputPath, filePath);
  }

  const afterStat = await fs.stat(inPlace ? filePath : outputPath);

  return {
    relative,
    before: beforeStat.size,
    after: afterStat.size,
  };
}

const files = await walk(inputDir);
const results = [];
for (const file of files) {
  const result = await optimizeFile(file);
  if (result) results.push(result);
}

const totalBefore = results.reduce((sum, item) => sum + item.before, 0);
const totalAfter = results.reduce((sum, item) => sum + item.after, 0);

console.log(`Processed: ${results.length} images`);
console.log(`Before: ${formatSize(totalBefore)}`);
console.log(`After: ${formatSize(totalAfter)}`);
if (!inPlace) {
  console.log(`Output: ${outputDir}`);
  console.log('Run with --in-place to overwrite originals.');
}
