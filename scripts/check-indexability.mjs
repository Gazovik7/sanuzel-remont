#!/usr/bin/env node
/**
 * Pre-deploy SEO Indexability Check
 *
 * Проверяет, что критичный контент страниц доступен поисковым системам
 * и текстовым анализаторам (не скрыт внутри JS-островов).
 *
 * Также проверяет отсутствие null/control-байтов после сборки.
 *
 * Запуск:
 *   node scripts/check-indexability.mjs          # строгий режим
 *   node scripts/check-indexability.mjs --warn   # только предупреждения
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

const MIN_STATIC_CHARS = 2000;
const MIN_STATIC_RATIO = 0.4;
const MIN_MEANINGFUL_WORDS = 150;

// Критичные страницы и обязательные ключевые слова
const CRITICAL_PAGES = [
  '/',
  '/kapitalnyj-remont-v-vannoj/',
  '/kosmeticheskij-remont-vannoj/',
  '/remont-sovmeschennogo-sanuzla/',
  '/byudzhetnyy-remont-v-vannoy-komnate/',
  '/prajs-list-na-remont-sanuzlov/',
  '/portfolio/',
  '/contacts/',
  '/about-us/',
];

const REQUIRED_KEYWORDS = {
  '/': ['ремонт', 'ванн', 'санузел'],
  '/kapitalnyj-remont-v-vannoj/': ['капитальн', 'ремонт'],
  '/kosmeticheskij-remont-vannoj/': ['косметическ', 'ремонт'],
  '/remont-sovmeschennogo-sanuzla/': ['санузел', 'ремонт'],
  '/byudzhetnyy-remont-v-vannoy-komnate/': ['бюджетн', 'ремонт'],
  '/prajs-list-na-remont-sanuzlov/': ['прайс', 'цен'],
  '/portfolio/': ['портфолио'],
  '/contacts/': ['контакт'],
  '/about-us/': ['компани'],
};

// Русские стоп-слова
const RUSSIAN_STOPWORDS = new Set([
  'в', 'на', 'с', 'к', 'по', 'за', 'из', 'от', 'до', 'для', 'при', 'без',
  'о', 'об', 'про', 'под', 'над', 'между', 'через', 'перед', 'после',
  'и', 'а', 'но', 'или', 'что', 'как', 'когда', 'если', 'чтобы', 'хотя',
  'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они', 'это', 'то', 'все',
  'не', 'ни', 'бы', 'же', 'ли', 'вот', 'даже', 'лишь', 'только', 'уже',
  'быть', 'есть', 'был', 'была', 'было', 'были', 'будет', 'является',
  'так', 'там', 'тут', 'здесь', 'где', 'очень', 'можно', 'нужно',
  'свой', 'свои', 'свою', 'своей', 'своих', 'который', 'которая', 'которые',
  'наш', 'наши', 'наша', 'нашу', 'нашей', 'нашего', 'наших',
  'ваш', 'ваши', 'ваша', 'вашу', 'вашей', 'вашего', 'ваших',
  'этот', 'эта', 'эти', 'этого', 'этой', 'этих', 'этим',
  'тот', 'та', 'те', 'того', 'той', 'тех', 'тем',
  'его', 'её', 'их', 'ей', 'ему', 'им', 'ими', 'нас', 'нам', 'нами',
  'себя', 'себе', 'собой',
  'весь', 'вся', 'всё', 'всех', 'всем', 'всеми',
  'каждый', 'каждая', 'каждое', 'каждого', 'каждой',
  'такой', 'такая', 'такое', 'такие', 'такого', 'такой',
  'мой', 'моя', 'моё', 'мои', 'моего', 'моей', 'моих',
  'еще', 'ещё', 'тоже', 'также',
  'бы', 'да', 'нет', 'может', 'будут', 'более', 'менее',
]);

// ============================================================================
// FUNCTIONS
// ============================================================================

function extractTextFromHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function analyzeHtmlStructure(html) {
  const islandRegex = /<astro-island[^>]*>([\s\S]*?)<\/astro-island>/gi;
  let dynamicHtml = '';
  let match;

  while ((match = islandRegex.exec(html)) !== null) {
    dynamicHtml += match[1] + ' ';
  }

  const staticHtml = html.replace(islandRegex, ' ');
  const islandCount = (html.match(/<astro-island/gi) || []).length;

  const bodyMatch = staticHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : staticHtml;

  return {
    staticText: extractTextFromHtml(bodyHtml),
    dynamicText: extractTextFromHtml(dynamicHtml),
    islandCount,
  };
}

function countMeaningfulWords(text) {
  const words = text.toLowerCase().match(/[а-яёa-z]{2,}/gi) || [];
  const meaningful = words.filter((w) => !RUSSIAN_STOPWORDS.has(w));
  return { total: words.length, meaningful: meaningful.length };
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

function hasNullBytes(buffer) {
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] < 32 && buffer[i] !== 9 && buffer[i] !== 10 && buffer[i] !== 13) {
      return true;
    }
  }
  return false;
}

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

// ============================================================================
// NULL-BYTE CHECK (all build files)
// ============================================================================

function checkNullBytes(distDir) {
  const targetExts = new Set(['.html', '.xml', '.txt', '.js', '.mjs', '.css', '.json']);
  const infected = [];

  function walk(dir) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const absPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(absPath);
      } else if (targetExts.has(extname(entry.name).toLowerCase())) {
        const data = readFileSync(absPath);
        if (hasNullBytes(data)) {
          infected.push(relative(distDir, absPath));
        }
      }
    }
  }

  walk(distDir);
  return infected;
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  const WARN_ONLY = args.includes('--warn');

  console.log('\n\u{1F4CA} Indexability Report');
  console.log('='.repeat(60));

  if (!existsSync(DIST_DIR)) {
    console.error(`\n\u274C Build directory not found: ${DIST_DIR}`);
    console.error('   Run "npm run build" first.\n');
    process.exit(1);
  }

  // ── Null-byte check ──
  console.log('\n\u{1F50D} Checking for null/control bytes...');
  console.log('-'.repeat(60));

  const infectedFiles = checkNullBytes(DIST_DIR);
  if (infectedFiles.length > 0) {
    console.log(`\u274C Found control bytes in ${infectedFiles.length} file(s):`);
    for (const f of infectedFiles) {
      console.log(`   \u274C ${f}`);
    }
    if (!WARN_ONLY) {
      console.log('\n\u274C NULL BYTE CHECK FAILED\n');
      process.exit(1);
    }
    console.log('\u26A0\uFE0F  Continuing in --warn mode...\n');
  } else {
    console.log('\u2705 No control bytes found\n');
  }

  // ── Indexability check ──
  const htmlFiles = findHtmlFiles(DIST_DIR);
  console.log(`Found ${htmlFiles.length} pages\n`);

  const results = [];
  const failures = [];

  // Critical pages
  console.log('\u{1F3AF} Critical Pages:');
  console.log('-'.repeat(60));

  for (const filePath of htmlFiles) {
    const urlPath = filePathToUrlPath(filePath, DIST_DIR);
    const rawBuffer = readFileSync(filePath);
    const html = rawBuffer.toString('utf-8').replace(/\0/g, '');
    const { staticText, dynamicText, islandCount } = analyzeHtmlStructure(html);

    const staticChars = staticText.length;
    const dynamicChars = dynamicText.length;
    const totalChars = staticChars + dynamicChars;
    const staticRatio = totalChars > 0 ? staticChars / totalChars : 0;
    const wordStats = countMeaningfulWords(staticText);
    const title = extractTitle(html);
    const description = extractDescription(html);

    const isCritical = CRITICAL_PAGES.includes(urlPath);

    results.push({
      path: urlPath,
      staticChars,
      staticRatio,
      meaningfulWords: wordStats.meaningful,
      islandCount,
      isCritical,
      hasTitle: !!title,
      hasDescription: !!description,
    });

    if (isCritical) {
      const reasons = [];

      if (staticChars < MIN_STATIC_CHARS) reasons.push(`chars ${staticChars} < ${MIN_STATIC_CHARS}`);
      if (staticRatio < MIN_STATIC_RATIO) reasons.push(`ratio ${(staticRatio * 100).toFixed(0)}% < ${(MIN_STATIC_RATIO * 100).toFixed(0)}%`);
      if (wordStats.meaningful < MIN_MEANINGFUL_WORDS) reasons.push(`words ${wordStats.meaningful} < ${MIN_MEANINGFUL_WORDS}`);
      if (!title) reasons.push('missing <title>');
      if (!description) reasons.push('missing <meta description>');

      // Check required keywords
      const requiredKw = REQUIRED_KEYWORDS[urlPath] || [];
      const lowerStatic = staticText.toLowerCase();
      const missingKw = requiredKw.filter((kw) => !lowerStatic.includes(kw.toLowerCase()));
      if (missingKw.length > 0) reasons.push(`missing keywords: ${missingKw.join(', ')}`);

      const passed = reasons.length === 0;
      const icon = passed ? '\u2705' : '\u274C';

      console.log(`${icon} ${urlPath}`);
      console.log(`   Static: ${staticChars.toLocaleString()} chars (${(staticRatio * 100).toFixed(1)}%), ${wordStats.meaningful} words, ${islandCount} islands`);

      if (!passed) {
        console.log(`   \u274C FAILED: ${reasons.join(', ')}`);
        failures.push({ path: urlPath, reasons });
      } else if (requiredKw.length > 0) {
        console.log(`   \u2713 All keywords found: ${requiredKw.join(', ')}`);
      }
      console.log('');
    }
  }

  // Check for missing critical pages
  for (const cp of CRITICAL_PAGES) {
    if (!results.find((r) => r.path === cp)) {
      console.log(`\u274C ${cp} — PAGE NOT FOUND IN BUILD`);
      failures.push({ path: cp, reasons: ['page not found in build'] });
    }
  }

  // Non-critical pages with missing title/description
  const metaIssues = results.filter((r) => !r.isCritical && (!r.hasTitle || !r.hasDescription));
  if (metaIssues.length > 0) {
    console.log('\u26A0\uFE0F  Pages with missing meta:');
    for (const r of metaIssues.slice(0, 10)) {
      const missing = [];
      if (!r.hasTitle) missing.push('title');
      if (!r.hasDescription) missing.push('description');
      console.log(`   \u26A0\uFE0F  ${r.path} — missing: ${missing.join(', ')}`);
    }
    if (metaIssues.length > 10) {
      console.log(`   ... and ${metaIssues.length - 10} more`);
    }
    console.log('');
  }

  // Summary
  console.log('='.repeat(60));
  const avgRatio = results.length > 0 ? results.reduce((sum, r) => sum + r.staticRatio, 0) / results.length : 0;
  const criticalResults = results.filter((r) => r.isCritical);
  const criticalPassed = criticalResults.length - failures.length;

  console.log(`\u{1F4C8} Summary:`);
  console.log(`   Total pages: ${results.length}`);
  console.log(`   Critical pages: ${criticalResults.length}/${CRITICAL_PAGES.length}`);
  console.log(`   Critical passed: ${criticalPassed}`);
  console.log(`   Critical failed: ${failures.length}`);
  console.log(`   Average static ratio: ${(avgRatio * 100).toFixed(1)}%`);

  if (failures.length > 0) {
    if (WARN_ONLY) {
      console.log(`\n\u26A0\uFE0F  ${failures.length} warning(s) (--warn mode)\n`);
      process.exit(0);
    } else {
      console.log(`\n\u274C INDEXABILITY CHECK FAILED: ${failures.length} issue(s)\n`);
      process.exit(1);
    }
  } else {
    console.log('\n\u2705 All critical pages passed\n');
    process.exit(0);
  }
}

main();
