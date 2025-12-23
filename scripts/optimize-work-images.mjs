import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const workDir = path.join(projectRoot, 'astro', 'public', 'img', 'work');

async function optimizeWorkImages() {
  try {
    const files = await fs.readdir(workDir);
    console.log(`Found ${files.length} files in ${workDir}`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;

      const baseName = path.basename(file, ext);
      const inputPath = path.join(workDir, file);
      const outputPath = path.join(workDir, `${baseName}.webp`);

      console.log(`Optimizing ${file}...`);

      // We'll create a temporary buffer to avoid issues if we're overwriting a webp file
      const buffer = await fs.readFile(inputPath);
      
      await sharp(buffer)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath + '.tmp');

      // If it was a PNG/JPG, we might want to delete the original after conversion
      // but for safety we'll just rename the tmp to final webp
      await fs.rename(outputPath + '.tmp', outputPath);
      
      if (ext !== '.webp') {
        await fs.unlink(inputPath);
        console.log(`Converted ${file} to webp and removed original.`);
      } else {
        console.log(`Optimized ${file} in-place as webp.`);
      }
    }
    console.log('All work images optimized.');
  } catch (err) {
    console.error('Error during optimization:', err);
  }
}

optimizeWorkImages();
