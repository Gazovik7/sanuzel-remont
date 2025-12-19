import { renderArticleHtmlWithInserts } from '../astro/src/data/blog/shared/shortcodes';
import { escapeHtml } from '../astro/src/data/blog/shared/inserts';

// Простой тест для проверки работы системы шаблонов
function testTemplateRendering() {
  console.log('Тестирование системы шаблонов для вставок...');
  
  // Тест 1: Простая вставка
  const simpleContent = '<p>Тестовый абзац</p>[!INSERT key="engineerTipDefault"]<p>Продолжение текста</p>';
  const result1 = renderArticleHtmlWithInserts(simpleContent);
  console.log('Тест 1 - Простая вставка:', result1.includes('Совет главного инженера') ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');
  
  // Тест 2: Цитата с автором
  const quoteContent = `[!TEMPLATE key="quote" author="Тестовый Автор" style="highlight"]
Это тестовая цитата
[/!TEMPLATE]`;
  const result2 = renderArticleHtmlWithInserts(quoteContent);
  console.log('Тест 2 - Цитата с автором:', result2.includes('Тестовый Автор') ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');
  
  // Тест 3: Сравнительный блок
  const comparisonContent = `[!TEMPLATE key="comparison" title="Тестовое сравнение"]
**Опция 1:** Описание
**Опция 2:** Описание
[/!TEMPLATE]`;
  const result3 = renderArticleHtmlWithInserts(comparisonContent);
  console.log('Тест 3 - Сравнительный блок:', result3.includes('Тестовое сравнение') ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');
  
  // Тест 4: Кастомизированный CTA
  const ctaContent = '[!TEMPLATE key="calculatorCta" title="Тестовый заголовок" description="Тестовое описание" buttonText="Тестовая кнопка"]';
  const result4 = renderArticleHtmlWithInserts(ctaContent);
  console.log('Тест 4 - Кастомизированный CTA:', result4.includes('Тестовый заголовок') ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');
  
  // Тест 5: Защита от XSS
  const xssContent = '[!TEMPLATE key="calculatorCta" title="<script>alert(1)</script>Плохой заголовок"]';
  const result5 = renderArticleHtmlWithInserts(xssContent);
  const hasScriptTag = result5.includes('<script>');
  console.log('Тест 5 - Защита от XSS:', !hasScriptTag ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');
  
  console.log('Тестирование завершено.');
}

// Запуск тестов
testTemplateRendering();

// Тестирование функции экранирования
console.log('\nТестирование функции экранирования:');
const testString = '<script>alert("XSS")</script>&"\'';
const escaped = escapeHtml(testString);
console.log('Оригинал:', testString);
console.log('Экранированный:', escaped);
console.log('Результат:', escaped === '<script>alert("XSS")<&#039;>&"&#039;' ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');

// --- Новый тест: рендер чек-листа ---
const checklistContent = `[!TEMPLATE key="checklist" title="Чек-лист подготовки"]
- Заключить договор
- Получить доступ к объекту
- Подготовить строительные материалы
[/!TEMPLATE]`;

const checklistResult = renderArticleHtmlWithInserts(checklistContent);
console.log('Тест - Рендер чек-листа:', checklistResult.includes('Чек-лист подготовки') && checklistResult.includes('Заключить договор') ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');

// --- Новый тест: экранирование атрибутов и тела ---
const xssChecklistContent = `[!TEMPLATE key="checklist" title="<script>alert(1)</script>Плохой"]<script>evil()</script>[/!TEMPLATE]`;
const xssChecklistResult = renderArticleHtmlWithInserts(xssChecklistContent);
const hasScript = xssChecklistResult.includes('<script>');
console.log('Тест - XSS в чек-листе экранируется:', !hasScript ? 'ПРОЙДЕН' : 'НЕ ПРОЙДЕН');