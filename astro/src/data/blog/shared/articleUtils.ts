export interface TocItem {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3
}

/**
 * Создает slug из текста заголовка для использования в качестве ID
 */
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\wа-яё\s-]/gi, '') // Убираем специальные символы, оставляем буквы, цифры, пробелы и дефисы
    .replace(/\s+/g, '-') // Заменяем пробелы на дефисы
    .replace(/-+/g, '-') // Убираем повторяющиеся дефисы
    .replace(/^-|-$/g, ''); // Убираем дефисы в начале и конце
}

/**
 * Извлекает текст из HTML строки (убирает теги)
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Парсит HTML контент и извлекает заголовки h2 и h3 для создания TOC
 */
export function extractTableOfContents(html: string): TocItem[] {
  const toc: TocItem[] = [];
  const headingRegex = /<h([23])[^>]*>(.*?)<\/h\1>/gi;
  const usedIds = new Set<string>();
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = stripHtml(match[2]);
    let id = createSlug(text);

    // Обеспечиваем уникальность ID
    let counter = 1;
    let uniqueId = id;
    while (usedIds.has(uniqueId)) {
      uniqueId = `${id}-${counter}`;
      counter++;
    }
    usedIds.add(uniqueId);

    toc.push({ id: uniqueId, text, level });
  }

  return toc;
}

/**
 * Добавляет ID к заголовкам h2 и h3 в HTML контенте
 */
export function addIdsToHeadings(html: string, toc: TocItem[]): string {
  let result = html;
  let tocIndex = 0;

  result = result.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, content) => {
    if (tocIndex < toc.length) {
      const item = toc[tocIndex];
      tocIndex++;

      // Проверяем, есть ли уже ID в атрибутах
      if (attrs.includes('id=')) {
        return match; // Не изменяем, если ID уже есть
      }

      return `<h${level}${attrs} id="${item.id}">${content}</h${level}>`;
    }
    return match;
  });

  return result;
}

/**
 * Подсчитывает количество слов в тексте (включая русские слова)
 */
function countWords(text: string): number {
  const plainText = stripHtml(text);
  const words = plainText.match(/[\wа-яё]+/gi);
  return words ? words.length : 0;
}

/**
 * Рассчитывает время чтения статьи в минутах
 * @param html - HTML контент статьи
 * @param wordsPerMinute - Среднее количество слов в минуту (по умолчанию 200 для русского языка)
 */
export function calculateReadTime(html: string, wordsPerMinute: number = 200): string {
  const wordCount = countWords(html);
  const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute));

  // Форматируем для русского языка
  if (minutes === 1) return '1 мин';
  if (minutes < 5) return `${minutes} мин`;
  return `${minutes} мин`;
}

/**
 * Обрабатывает контент статьи: добавляет ID к заголовкам
 */
export function processArticleContent(html: string): { processedHtml: string; toc: TocItem[] } {
  const toc = extractTableOfContents(html);
  const processedHtml = addIdsToHeadings(html, toc);
  return { processedHtml, toc };
}
