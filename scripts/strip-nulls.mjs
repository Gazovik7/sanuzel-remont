import fs from 'fs';

const filePath = 'astro/src/components/landing/ServiceModernPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Удаляем BOM (Byte Order Mark) если он есть
content = content.replace(/^\uFEFF/, '');

// Удаляем все странные невидимые символы, кроме стандартных пробелов и переносов
// Оставляем только кириллицу, латиницу, цифры и стандартную пунктуацию
content = content.replace(/[^\x20-\x7E\u0400-\u04FF\s\n\r\t]/g, '');

// Перезаписываем файл в чистом UTF-8
fs.writeFileSync(filePath, content, 'utf8');
console.log('File sterilized successfully');