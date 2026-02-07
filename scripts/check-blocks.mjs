#!/usr/bin/env node
/**
 * Pre-deploy Block Validation
 *
 * Проверяет структурную целостность сборки:
 * - Наличие всех ожидаемых страниц
 * - Title и meta description на каждой странице
 * - FAQ JSON-LD schema (без дублирования)
 * - Canonical URL
 * - Null/control-байты
 *
 * Запуск:
 *   node scripts/check-blocks.mjs
 *   node scripts/check-blocks.mjs --warn
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================================================
// CONFIGURATION
// ============================================================================

const DIST_DIR = join(__dirname, '..', 'astro', 'dist');

// Страницы, которые ОБЯЗАТЕЛЬНО должны существовать в сборке
const EXPECTED_PAGES = [
  '/',
  '/kapitalnyj-remont-v-vannoj/',
  '/kosmeticheskij-remont-vannoj/',
  '/remont-sovmeschennogo-sanuzla/',
  '/byudzhetnyy-remont-v-vannoy-komnate/',
  '/demontazhnye-raboty/',
  '/prajs-list-na-remont-sanuzlov/',
  '/portfolio/',
  '/about-us/',
  '/contacts/',
  '/otzyvy-klientov/',
  '/spasibo/',
];

// Страницы, на которых ОБЯЗАТЕЛЬНО должен быть FAQ JSON-LD
const PAGES_WITH_FAQ = [
  '/',
  '/kapitalnyj-remont-v-vannoj/',
  '/kosmeticheskij-remont-vannoj/',
  '/remont-sovmeschennogo-sanuzla/',
  '/byudzhetnyy-remont-v-vannoy-komnate/',
  '/demontazhnye-raboty/',
];

// ============================================================================
// FUNCTIONS
// ============================================================================

function findHtmlFiles(dir, files = []) {
  if (!existsSync(dir)) return files;

  for (const item of readdirSync(dir)) {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (item === 'index.html') {
      files.push(fullPath);
    }
  }
  return files;
}

function filePathToUrlPath(filePath, distDir) {
  let urlPath = '/' + relative(distDir, filePath).replace(/\\/g, '/').replace(/index\.html$/, '');
  if (!urlPath.endsWith('/')) urlPath += '/';
  return urlPath === '//' ? '/' : urlPath;
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match ? match[1].trim() : '';
}

function extractDescription(html) {
  const match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  if (match) return match[1].trim();
  const match2 = html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  return match2 ? match2[1].trim() : '';
}

function hasCanonical(html) {
  return /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
}

function countFaqSchemas(html) {
  // Count JSON-LD FAQPage schemas
  const ldJsonBlocks = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  let faqPageCount = 0;

  for (const block of ldJsonBlocks) {
    const content = block.replace(/<\/?script[^>]*>/gi, '');
    try {
      const data = JSON.parse(content);
      if (data['@type'] === 'FAQPage') faqPageCount++;
    } catch {
      // skip invalid JSON
    }
  }

  // Count HTML microdata FAQPage
  const microdataCount = (html.match(/itemType=["']https?:\/\/schema\.org\/FAQPage["']/gi) || []).length;

  return { jsonLd: faqPageCount, microdata: microdataCount, total: faqPageCount + microdataCount };
}

function hasNullBytes(buffer) {
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] < 32 && buffer[i] !== 9 && buffer[i] !== 10 && buffer[i] !== 13) {
      return true;
    }
  }
  return false;
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  const WARN_ONLY = args.includes('--warn');

  console.log('\n\u{1F4E6} Block Validation Report');
  console.log('='.repeat(60));

  if (!existsSync(DIST_DIR)) {
    console.error(`\n\u274C Build directory not found: ${DIST_DIR}`);
    console.error('   Run "npm run build" first.\n');
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(DIST_DIR);
  const urlToPath = new Map();

  for (const filePath of htmlFiles) {
    const urlPath = filePathToUrlPath(filePath, DIST_DIR);
    urlToPath.set(urlPath, filePath);
  }

  console.log(`\nFound ${htmlFiles.length} pages\n`);

  const errors = [];
  const warnings = [];

  // ── 1. Check expected pages exist ──
  console.log('\u{1F50D} Checking expected pages...');
  console.log('-'.repeat(60));

  for (const expectedUrl of EXPECTED_PAGES) {
    if (urlToPath.has(expectedUrl)) {
      console.log(`\u2705 ${expectedUrl}`);
    } else {
      console.log(`\u274C ${expectedUrl} — NOT FOUND`);
      errors.push(`${expectedUrl}: page not found in build`);
    }
  }
  console.log('');

  // ── 2. Check title & description on all pages ──
  console.log('\u{1F4CB} Checking title & meta description...');
  console.log('-'.repeat(60));

  let metaOk = 0;
  let metaFail = 0;

  for (const [urlPath, filePath] of urlToPath) {
    const html = readFileSync(filePath, 'utf-8');
    const title = extractTitle(html);
    const desc = extractDescription(html);
    const missing = [];

    if (!title) missing.push('title');
    if (!desc) missing.push('description');

    if (missing.length > 0) {
      // Пропускаем служебные страницы
      if (urlPath === '/spasibo/' || urlPath.startsWith('/404')) {
        continue;
      }
      console.log(`\u26A0\uFE0F  ${urlPath} — missing: ${missing.join(', ')}`);
      warnings.push(`${urlPath}: missing ${missing.join(', ')}`);
      metaFail++;
    } else {
      metaOk++;
    }
  }

  console.log(`\u2705 ${metaOk} pages OK, \u26A0\uFE0F ${metaFail} with issues\n`);

  // ── 3. Check FAQ schema ──
  console.log('\u{1F4DD} Checking FAQ schema...');
  console.log('-'.repeat(60));

  for (const faqUrl of PAGES_WITH_FAQ) {
    const filePath = urlToPath.get(faqUrl);
    if (!filePath) {
      console.log(`\u26A0\uFE0F  ${faqUrl} — page not found (skipping FAQ check)`);
      continue;
    }

    const html = readFileSync(filePath, 'utf-8');
    const faqCounts = countFaqSchemas(html);

    if (faqCounts.jsonLd === 0 && faqCounts.microdata === 0) {
      console.log(`\u274C ${faqUrl} — NO FAQ schema found`);
      errors.push(`${faqUrl}: FAQ schema missing`);
    } else if (faqCounts.total > 1) {
      console.log(`\u26A0\uFE0F  ${faqUrl} — DUPLICATE FAQ: ${faqCounts.jsonLd} JSON-LD + ${faqCounts.microdata} Microdata`);
      warnings.push(`${faqUrl}: duplicate FAQ schema (${faqCounts.total} total)`);
    } else {
      console.log(`\u2705 ${faqUrl} — FAQ OK (${faqCounts.jsonLd} JSON-LD)`);
    }
  }
  console.log('');

  // ── 4. Check canonical URLs ──
  console.log('\u{1F517} Checking canonical URLs...');
  console.log('-'.repeat(60));

  let canonicalOk = 0;
  let canonicalMissing = 0;

  for (const [urlPath, filePath] of urlToPath) {
    if (urlPath === '/spasibo/' || urlPath.startsWith('/404')) continue;

    const html = readFileSync(filePath, 'utf-8');
    if (!hasCanonical(html)) {
      console.log(`\u26A0\uFE0F  ${urlPath} — missing canonical`);
      warnings.push(`${urlPath}: missing canonical URL`);
      canonicalMissing++;
    } else {
      canonicalOk++;
    }
  }

  console.log(`\u2705 ${canonicalOk} pages OK, \u26A0\uFE0F ${canonicalMissing} missing canonical\n`);

  // ── 5. Null-byte check ──
  console.log('\u{1F50D} Checking for null/control bytes...');
  console.log('-'.repeat(60));

  const targetExts = new Set(['.html', '.xml', '.txt', '.js', '.mjs', '.css', '.json']);
  let nullByteFiles = 0;

  function walkForNulls(dir) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const absPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walkForNulls(absPath);
      } else if (targetExts.has(extname(entry.name).toLowerCase())) {
        const data = readFileSync(absPath);
        if (hasNullBytes(data)) {
          console.log(`\u274C ${relative(DIST_DIR, absPath)} — contains control bytes`);
          nullByteFiles++;
        }
      }
    }
  }

  walkForNulls(DIST_DIR);

  if (nullByteFiles > 0) {
    errors.push(`${nullByteFiles} file(s) contain null/control bytes`);
    console.log(`\u274C ${nullByteFiles} file(s) with control bytes\n`);
  } else {
    console.log('\u2705 No control bytes found\n');
  }

  // ── Summary ──
  console.log('='.repeat(60));
  console.log(`\u{1F4C8} Summary:`);
  console.log(`   Total pages: ${htmlFiles.length}`);
  console.log(`   Expected pages found: ${EXPECTED_PAGES.filter((p) => urlToPath.has(p)).length}/${EXPECTED_PAGES.length}`);

  if (warnings.length > 0) {
    console.log(`\n\u26A0\uFE0F  Warnings (${warnings.length}):`);
    for (const w of warnings) {
      console.log(`   \u26A0\uFE0F  ${w}`);
    }
  }

  if (errors.length > 0) {
    console.log(`\n\u274C Errors (${errors.length}):`);
    for (const e of errors) {
      console.log(`   \u274C ${e}`);
    }
  }

  if (errors.length > 0) {
    if (WARN_ONLY) {
      console.log(`\n\u26A0\uFE0F  ${errors.length} error(s) (--warn mode)\n`);
      process.exit(0);
    } else {
      console.log(`\n\u274C BLOCK VALIDATION FAILED\n`);
      process.exit(1);
    }
  } else if (warnings.length > 0) {
    console.log(`\n\u26A0\uFE0F  Passed with ${warnings.length} warning(s)\n`);
    process.exit(0);
  } else {
    console.log('\n\u2705 All checks passed\n');
    process.exit(0);
  }
}

main();
