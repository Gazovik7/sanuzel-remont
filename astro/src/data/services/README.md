# Услуги: как редактировать и добавлять страницы

Этот модуль хранит **контент и конфигурацию секций** для страниц услуг (SSG). Вёрстка/компоненты лежат в `astro/src/pages/**/index.astro` и `astro/src/legacy/components/*` — здесь меняются только данные.

## Где что лежит

- `astro/src/data/services/pages/*.ts` — контент **конкретной страницы** (hero/seo/faq и любые локальные переопределения).
- `astro/src/data/services/shared/*` — **общий контент** (используется на всех страницах, где подключён).
  - `datasets.ts` — общие наборы данных (команда, пакеты, портфолио, отзывы и т.п.).
  - `blockContent.ts` — общие конфиги секций (`*_BLOCK_CONTENT`, тексты/настройки секций).
  - `blocks.ts` — реестр `SHARED_BLOCKS` (ключ → готовый `ServiceBlock`).
- `astro/src/data/services/builder/index.ts` — конструктор блоков (`use/unique/off/buildBlocks`).
- `astro/src/data/services/pages/index.ts` — реестр страниц `PAGES`.
- `astro/src/data/services/index.ts` — публичный API: `SERVICES`, `getServiceBySlug`, `getServiceByPath`, `getAllServicePaths`, `getService`.

## Как устроены секции (blocks)

На каждой странице есть массив `blocks`, собранный через builder:

```ts
import { buildBlocks, unique, use, off } from '../builder';

blocks: buildBlocks([
  unique({ type: 'hero', ... }),   // уникальный блок (правится в файле страницы)
  use('comparison'),               // общий блок из SHARED_BLOCKS (правится глобально)
  off(),                           // выключить секцию на этой странице
]);
```

Правила:
- `use('key')` — берёт **шаблонный** блок из `astro/src/data/services/shared/blocks.ts` (влияние на все страницы, где он подключён).
- `unique(block)` — блок, описанный прямо в файле страницы (влияние только на эту страницу).
- `off()` — возвращает `null`, `buildBlocks()` выкинет его из списка.

## Как редактировать текущую страницу услуги

Открой файл страницы, например:
- `astro/src/data/services/pages/byudzhetnyy-remont-v-vannoy-komnate.ts`

Дальше меняй прямо в этом файле:

1) **SEO meta (title/description)** — поле `seo` в `export const page`.
2) **Hero** — блок `unique({ type: 'hero', ... })` внутри `buildBlocks([...])`:
   - текст “бейджа” обычно в `config.badgeText`
   - подзаголовки/строки — `config.subtitleLines`
   - пункты/офферы (если есть) — `config.offers`
3) **SEO-текст (контент секции на странице)** — константа вида `*_SEO_TEXT_BLOCK_CONTENT` и блок:
   - `unique({ type: 'seoText', config: *_SEO_TEXT_BLOCK_CONTENT })`
4) **FAQ** — константа `*_FAQ` и блок:
   - `unique({ type: 'faq', ..., items: *_FAQ })`
5) **Стандарты качества (подблоки)** — константа `*_QUALITY_CHECKLIST` и переопределение блока `quality`:
   - `unique({ ...use('quality'), checklist: *_QUALITY_CHECKLIST })`
6) **Прайс-лист на странице (“Посмотреть подробный прайс-лист”)** — в блоке `packages`:
   - `*_PRICE_TABLE_BLOCK_CONTENT` (тексты CTA/заглушки/кнопки)
   - `*_PRICE_TABLE_CATEGORIES` (весь список работ и цен)
7) **“Что входит в стоимость ремонта”** — можно редактировать прямо в файле страницы:
   - список работ: `*_INCLUDED_WORKS`
   - тексты секции: `*_INCLUDED_BLOCK_CONTENT`
   - подключение:
     - `unique({ ...use('included'), config: *_INCLUDED_BLOCK_CONTENT, works: *_INCLUDED_WORKS })`
8) **География работ: только текст (без городов)** — `*_GEOGRAPHY_SEO_TEXT_HTML` и переопределение блока `geography`:
   - `unique({ ...use('geography'), config: { ...use('geography').config, seoTextHtml: *_GEOGRAPHY_SEO_TEXT_HTML } })`

## Как выключить секцию на конкретной странице

В файле страницы замени `use('key')` на `off()` или просто убери блок из списка:

```ts
blocks: buildBlocks([
  use('comparison'),
  off(), // вместо use('reviews')
]);
```

## Как изменить секцию “глобально на всех страницах”

Если секция подключается через `use('...')`, правь её источники в `shared/*`:

- Реестр ключей: `astro/src/data/services/shared/blocks.ts`
- Данные: `astro/src/data/services/shared/datasets.ts`
- Общие тексты/настройки секций: `astro/src/data/services/shared/blockContent.ts`

## Как добавить новую страницу услуги (контент + URL)

1) Создай файл `astro/src/data/services/pages/<slug>.ts` и экспортируй:

```ts
import { buildBlocks, unique, use } from '../builder';
import type { ServicePage } from '../types';

export const page: ServicePage = {
  slug: '<slug>',
  path: '/<slug>/', // важно: со слешем в конце
  seo: { title: '...', description: '...' },
  blocks: buildBlocks([
    unique({ type: 'hero', /* ... */ }),
    use('comparison'),
    // ...
  ]),
};
```

2) Добавь импорт и страницу в `astro/src/data/services/pages/index.ts` (массив `PAGES`).

3) Создай роут (чтобы URL реально работал): папку и файл
   - `astro/src/pages/<slug>/index.astro`
   - самый простой вариант — тонкая обёртка на общий шаблон:
     - `import ServicePageTemplate from '../../components/pages/ServicePageTemplate.astro'`
     - `<ServicePageTemplate slug={'<slug>'} />`
   - при необходимости можно делать кастомный `index.astro` и собирать блоки вручную, как в `astro/src/pages/byudzhetnyy-remont-v-vannoy-komnate/index.astro`.
