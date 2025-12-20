# Блог: как редактировать статьи

## Где править контент

- **Авторы (глобально, для всех статей)**: `astro/src/data/blog/shared/datasets.ts`
- **Конкретная статья (заголовок/анонс/категория/контент HTML)**: `astro/src/data/blog/pages/<id>.ts`
  - пример: `astro/src/data/blog/pages/1.ts`

## Вставки в тексте (shortcodes)

В HTML контенте можно использовать вставки вида `[!INSERT ...]`.

- **Заключение / callout (совет)**: `[!INSERT key="engineerTipDefault" title="Заключение" body="<p>...</p>"]`
- **Предупреждение (warning, как на скрине)**: `[!INSERT key="warningBitumenMastic" title="Внимание!" body="<p>...</p>"]`
- **Источники и стандарты**: `[!INSERT key="sourcesAndStandardsDefault" items='Источник 1||Источник 2||Источник 3']`
  - разделитель элементов: `||` (или перенос строки)
  - можно передать готовые `<li>...</li>` через `itemsHtml="..."` (для кастомной разметки)
- **CTA калькулятора (явно)**: `[!CTA_CALCULATOR title="..." description="..." buttonText="..."]`
- **Callout с произвольным телом**:
  - открывающий тег: `[!CALLOUT variant="tip|warning" title="..."]`
  - закрывающий тег: `[/!CALLOUT]`
  - пример: `[!CALLOUT variant="warning" title="Важно"]<p>...</p>[/!CALLOUT]`
- **Отключить автодовставку блока калькулятора**: `[!CTA_OFF]`
- **Отключить автодовставку блока источников**: `[!SOURCES_OFF]`

## Как добавить новую статью

1. Создай новый файл `astro/src/data/blog/pages/<id>.ts` по примеру `astro/src/data/blog/pages/1.ts`.
2. Добавь импорт и вставь пост в массив `BLOG_POSTS` в `astro/src/data/blog/pages/index.ts`.
3. URL статьи будет: `/blog/<slug>/` (генерируется `astro/src/pages/blog/[slug].astro`).
