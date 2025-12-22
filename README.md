# Astro SSG Template - Техническая документация

Этот проект представляет собой многостраничный сайт на Astro с технологией SSG (Static Site Generation), включающий комплексную систему SEO, микроразметку, автоматический деплой и переиспользуемую архитектуру контента.

## Содержание

- [Технологический стек](#технологический-стек)
- [Структура проекта](#структура-проекта)
- [SEO и микроразметка](#seo-и-микроразметка)
- [Система контента](#система-контента)
- [Система блога](#система-блога)
- [Компонентная архитектура](#компонентная-архитектура)
- [CI/CD и деплой](#cicd-и-деплой)
- [Формы и лиды](#формы-и-лиды)
- [Интерактивные фичи](#интерактивные-фичи)
- [Запуск проекта](#запуск-проекта)

---

## Технологический стек

### Основа
- **Astro 5.0+** - SSG фреймворк
- **React 18.2** - для интерактивных компонентов (islands architecture)
- **TypeScript** - полная типизация контента и компонентов
- **Tailwind CSS 3.4+** - utility-first стили

### Библиотеки и инструменты
- **lucide-react** - иконки
- **react-before-after-slider-component** - слайдеры "до/после"
- **imagemin, sharp** - оптимизация изображений
- **basic-ftp** - деплой на сервер

### Интеграции
- Яндекс.Метрика (ID: 87695701)
- Telegram Bot для приёма заявок
- Google/Yandex Site Verification

---

## Структура проекта

```
sanuzel-remont/
├── astro/                          # Astro приложение
│   ├── src/
│   │   ├── components/             # Компоненты Astro и React
│   │   │   ├── blocks/            # Переиспользуемые блоки (Header, Footer)
│   │   │   ├── islands/           # React islands (модальные окна, формы)
│   │   │   └── seo/               # SEO компоненты (FaqSchema и т.д.)
│   │   ├── data/                   # Система контента
│   │   │   ├── services/          # Данные страниц услуг (82 страницы)
│   │   │   │   ├── pages/         # Конфигурации страниц
│   │   │   │   ├── shared/        # Общие данные (датасеты, блоки)
│   │   │   │   ├── builder/       # Система сборки блоков
│   │   │   │   └── types.ts       # TypeScript типы
│   │   │   └── blog/              # Данные блога
│   │   │       ├── pages/         # Статьи блога
│   │   │       └── shared/        # Shortcode-ы, авторы, утилиты
│   │   ├── layouts/                # Макеты страниц
│   │   │   └── BaseLayout.astro   # Базовый layout с SEO
│   │   ├── legacy/                 # Legacy React компоненты
│   │   │   └── components/        # ContentSections, Calculator и т.д.
│   │   ├── pages/                  # Роуты Astro
│   │   │   ├── blog/[slug].astro  # Динамические страницы блога
│   │   │   └── [service]/         # Страницы услуг
│   │   └── styles/
│   │       └── global.css         # Глобальные стили + Tailwind
│   ├── public/                     # Статические файлы
│   │   ├── img/                   # Изображения (WebP + JPEG fallback)
│   │   ├── lead.php               # Обработчик форм (отправка в Telegram)
│   │   └── .htaccess              # Apache конфигурация
│   ├── astro.config.mjs           # Конфигурация Astro
│   ├── tailwind.config.cjs        # Конфигурация Tailwind
│   └── package.json               # Зависимости Astro
├── scripts/                        # Скрипты автоматизации
│   ├── deploy-ftp.mjs             # FTP деплой
│   ├── deploy-watch.mjs           # Watch mode для автодеплоя
│   └── strip-nulls.mjs            # Удаление NUL байтов из HTML
├── .env.deploy                    # FTP credentials
├── DEPLOY.md                      # Инструкции по деплою
├── MIGRATION.md                   # Инструкция по адаптации под новый проект
└── package.json                   # Root dependencies (деплой, оптимизация)
```

---

## SEO и микроразметка

### JSON-LD Schema.org

Реализовано в `astro/src/layouts/BaseLayout.astro` через компонент `SchemaOrg`.

#### Структура @graph микроразметки:

1. **Organization** (`#organization`)
   - Название, телефон, email
   - Логотип (ImageObject)
   - Связь с LocalBusiness

2. **LocalBusiness + HomeAndConstructionBusiness** (`#localbusiness`)
   - Адрес: Москва, ул. Большой Саввинский пер., 9С1
   - География работы: Москва и Московская область
   - Часы работы: Пн-Вс 09:00-20:00
   - Связь с Organization

3. **WebSite** (`#website`)
   - URL, название, язык (ru-RU)
   - Издатель: Organization

4. **WebPage** (текущая страница)
   - Название, описание, canonical URL
   - Связь с WebSite и LocalBusiness

5. **BreadcrumbList** (для всех страниц кроме главной)
   - Хлебные крошки: Главная → Текущая страница
   - `itemListElement` с позициями

**Расположение:** `astro/src/layouts/BaseLayout.astro:55-180`

### FAQ Schema

Отдельный компонент для FAQ разметки:
```typescript
// astro/src/components/seo/FaqSchema.astro
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [/* вопросы-ответы */]
}
```

### Meta-теги

**Open Graph:**
- `og:type`, `og:title`, `og:description`, `og:url`, `og:image`
- `og:locale`: ru_RU

**Twitter:**
- `twitter:card`: summary_large_image
- `twitter:title`, `twitter:description`, `twitter:image`

**Canonical:**
- `<link rel="canonical" href="{полный URL}">`

**Верификация:**
- Google Site Verification
- Yandex Verification

### Производительность

**Preload/Preconnect:**
```html
<link rel="preload" href="/img/remont-vannoy-v-moskve.webp" as="image">
<link rel="preconnect" href="https://fonts.googleapis.com">
```

**Lazy loading:**
- Google Fonts загружаются асинхронно
- Изображения с `loading="lazy"`

**Расположение:** `astro/src/layouts/BaseLayout.astro:23-54`

---

## Система контента

### Архитектура data-driven

Весь контент хранится как TypeScript объекты в `astro/src/data/services/`.

### Структура страницы услуги

```typescript
// astro/src/data/services/types.ts
interface ServicePage {
  slug: string;           // URL slug
  path: string;           // Полный путь
  seo: {
    title: string;        // meta title
    description: string;  // meta description
  };
  blocks: ServiceBlock[]; // Массив блоков контента
}
```

### Типы блоков

- **hero** - главный экран с CTA
- **comparison** - сравнение с конкурентами
- **portfolio** - портфолио (до/после фото)
- **quality** - контроль качества с чеклистом
- **whyUs** - почему выбирают нас
- **materials** - используемые материалы
- **calculator** - калькулятор стоимости
- **packages** - пакеты услуг с прайсом
- **workflow** - процесс работы
- **included** - что входит в услугу
- **visualization** - визуализация
- **team** - команда
- **guarantee** - гарантии
- **reviews** - отзывы клиентов
- **seoText** - SEO текст
- **faq** - FAQ (с микроразметкой)
- **geography** - география работ
- **breadcrumb** - хлебные крошки

**Расположение типов:** `astro/src/data/services/types.ts`

### Система Builder

Используется для сборки блоков с переиспользованием:

```typescript
// astro/src/data/services/builder/index.ts
import { use, unique, off, buildBlocks } from './builder';

const blocks = buildBlocks([
  use('portfolioDefault'),           // Клонирует из SHARED_BLOCKS
  unique({ type: 'hero', ... }),     // Уникальный блок
  off(),                              // Исключается из итогового массива
]);
```

**API функций:**
- `use(key)` - deep clone блока из `SHARED_BLOCKS`
- `unique(block)` - создание уникального блока
- `off()` - возвращает null (исключается при сборке)
- `buildBlocks(items)` - фильтрует null и возвращает массив

### Общие данные (datasets)

```typescript
// astro/src/data/services/shared/datasets.ts
export const TEAM_MEMBERS = [/* массив членов команды */];
export const PORTFOLIO_ITEMS = [/* проекты */];
export const REVIEWS = [/* отзывы */];
export const PACKAGES = [/* пакеты услуг */];
```

### Пример страницы

```typescript
// astro/src/data/services/pages/home.ts
export const page: ServicePage = {
  slug: 'home',
  path: '/',
  seo: {
    title: 'Ремонт санузлов в Москве - качественно и недорого',
    description: '...',
  },
  blocks: buildBlocks([
    unique({ type: 'hero', variant: 'default', config: {...} }),
    use('comparison'),
    use('portfolioDefault'),
    unique({ type: 'quality', checklist: HOME_QUALITY_CHECKLIST }),
    unique({ type: 'faq', items: HOME_FAQ }),
  ])
};
```

### Реестр страниц

```typescript
// astro/src/data/services/pages/index.ts
export const PAGES = {
  home: page as ServicePage,
  'kapitalnyj-remont-v-vannoj': page,
  // ... 80+ страниц
};
```

**API для работы со страницами:**
```typescript
import { SERVICES, getServiceBySlug } from '@/data/services';

const service = getServiceBySlug('home');  // Возвращает ServicePage | undefined
```

---

## Система блога

### Структура данных

```typescript
// astro/src/data/blog/types.ts
interface BlogPost {
  id: string;           // Уникальный ID
  slug: string;         // URL slug
  title: string;        // Заголовок
  excerpt: string;      // Краткое описание
  description: string;  // Meta description
  category: string;     // Категория
  image: string;        // Путь к изображению
  date: string;         // Дата публикации (YYYY-MM-DD)
  readTime: string;     // "5 мин" (вычисляется автоматически)
  author: BlogAuthor;   // Автор
  reviewer?: BlogAuthor; // Рецензент (опционально)
  content: string;      // HTML контент
}
```

### Система Shortcode-ов

Shortcode-ы позволяют вставлять готовые блоки контента в статьи блога.

**Реализация:** `astro/src/data/blog/shared/shortcodes.ts`

#### Типы shortcode-ов:

**1. Именованные вставки (INSERT):**
```
[!INSERT key="engineerTipDefault"]
[!INSERT key="engineerTipDefault" title="Кастомный заголовок" body="Кастомный текст"]
[!INSERT key="warningBitumenMastic"]
[!INSERT key="sourcesAndStandardsDefault"]
[!INSERT key="calculatorCtaDefault"]
```

**2. Произвольные callout-ы:**
```
[!CALLOUT variant="tip" title="Совет эксперта"]
Текст совета с <strong>HTML разметкой</strong>
[/!CALLOUT]

[!CALLOUT variant="warning" title="Важно!"]
Предупреждение
[/!CALLOUT]
```

**3. CTA калькулятора:**
```
[!CTA_CALCULATOR
  title="Рассчитайте стоимость"
  description="Получите смету за 2 минуты"
  buttonText="Открыть калькулятор"
]
```

**4. Флаги управления:**
```
[!CTA_OFF]       <!-- Не добавлять CTA автоматически -->
[!SOURCES_OFF]   <!-- Не добавлять источники в конец статьи -->
```

#### Автоматическая обработка

Функция `renderArticleHtmlWithInserts(content)` автоматически:
1. Парсит shortcode-ы
2. Рендерит HTML для каждой вставки
3. Добавляет CTA калькулятора в конец (если нет `[!CTA_OFF]`)
4. Добавляет источники (если нет `[!SOURCES_OFF]`)

**Расположение:** `astro/src/data/blog/shared/shortcodes.ts:100-250`

### Генерация оглавления (TOC)

**Функция:** `extractTableOfContents(html)`

**Процесс:**
1. Парсит все `<h2>` и `<h3>` заголовки
2. Создаёт slug из текста (кириллица сохраняется)
3. Обеспечивает уникальность ID (добавляет -2, -3 и т.д.)
4. Возвращает массив `TocItem[]`

**Структура TocItem:**
```typescript
interface TocItem {
  id: string;      // "unique-slug-name"
  text: string;    // Текст заголовка
  level: number;   // 2 = h2, 3 = h3
}
```

**Функция:** `addIdsToHeadings(html, toc)`
- Вставляет `id` атрибуты в заголовки
- Сохраняет существующие атрибуты
- Не переписывает уже существующие ID

**Расположение:** `astro/src/data/blog/shared/articleUtils.ts`

### Вычисление времени чтения

```typescript
// Автоматически вычисляется для каждой статьи
calculateReadTime(html) // "5 мин" (200 слов/минуту для русского)
```

### Авторы блога

```typescript
// astro/src/data/blog/shared/datasets.ts
export const BLOG_AUTHORS = {
  alexei: {
    name: 'Алексей Смирнов',
    role: 'Главный инженер',
    avatar: '/img/team/alexei.jpg',
    bio: '15+ лет в ремонте санузлов',
  },
  elena: {
    name: 'Елена Волкова',
    role: 'Архитектор-дизайнер',
    // ...
  },
};
```

### Пример статьи

```typescript
// astro/src/data/blog/pages/gidroizolyatsiya-vannoy.ts
export const post: BlogPost = {
  id: 'gidroizolyatsiya-vannoy',
  slug: 'gidroizolyatsiya-vannoy',
  title: 'Гидроизоляция ванной комнаты',
  excerpt: 'Всё о современных методах гидроизоляции',
  category: 'Технологии ремонта',
  date: '2024-02-15',
  author: BLOG_AUTHORS.alexei,
  content: `
    <h2>Введение</h2>
    <p>Текст статьи...</p>

    [!INSERT key="engineerTipDefault"
      title="Совет профи"
      body="Используйте двухкомпонентную гидроизоляцию"]

    <h2>Виды гидроизоляции</h2>

    [!CALLOUT variant="warning" title="Важно!"]
    Не используйте битумную мастику в жилых помещениях
    [/!CALLOUT]
  `,
};
```

### Рендер статей

**Компонент:** `astro/src/legacy/components/ArticlePage.tsx`
- Обрабатывает shortcode-ы
- Генерирует TOC
- Добавляет ID к заголовкам
- Отображает sticky оглавление слева

**Страница:** `astro/src/pages/blog/[slug].astro`
- Использует `getStaticPaths()` для SSG
- Генерирует страницу для каждого поста из `BLOG_POSTS`

---

## Компонентная архитектура

### Islands Architecture

Astro использует "islands architecture" - React компоненты загружаются только там, где нужна интерактивность.

#### Директивы загрузки:

- `client:load` - загружается сразу при загрузке страницы
- `client:idle` - загружается когда браузер idle
- `client:visible` - загружается при появлении в viewport
- `client:media` - загружается при медиа-запросе

### Blocks (Astro компоненты)

**Расположение:** `astro/src/components/blocks/`

#### LegacyHeaderLanding.astro
- Прозрачная шапка для главной страницы
- При скролле становится solid белой (класс `.is-solid`)
- Навигация с dropdown-меню
- CTA кнопка "Рассчитать стоимость"

#### LegacyHeaderSolid.astro
- Белая шапка с blur-эффектом для всех страниц кроме главной
- Sticky positioning
- Адаптивное мобильное меню

#### LegacyFooter.astro
- Подвал с контактами
- Ссылки на соцсети
- Copyright

#### LegacyMobileStickyBar.astro
- Фиксированная панель внизу на мобильных
- Быстрый доступ к телефону и калькулятору

#### LegacyScrollTopButton.astro
- Кнопка "вверх" появляется после скролла
- Smooth scroll к началу страницы

### Islands (React компоненты)

**Расположение:** `astro/src/components/islands/`

#### LeadModalHost.tsx (`client:load`)
Глобальная модальная форма для заявок.

**API:**
```typescript
window.lead = {
  open: (type?: 'callback' | 'calculate') => void,
  close: () => void,
  success: () => void,  // Показать success message
  capture: () => void,  // Собрать данные для аналитики
};
```

**Поля формы:**
- `name` - имя клиента
- `phone` - телефон (с автоматической маской +7 (999) 000-00-00)
- `repairType` - тип ремонта (select)
- `replyTo` - способ связи: звонок/WhatsApp/Telegram/max (не важно)

**Процесс отправки:**
1. Валидация (имя и телефон обязательны)
2. Сбор метаданных:
   - Яндекс.Метрика client ID + user ID
   - UTM параметры из URL
   - Текущий URL
3. POST запрос на `/lead.php`
4. При успехе: редирект на `/spasibo/`
5. При ошибке: показ сообщения об ошибке

**Расположение:** `astro/src/components/islands/LeadModalHost.tsx`

#### ExitIntentModal.tsx (`client:idle`)
Модальное окно с exit-intent триггерами.

**Триггеры показа:**
1. Мышь вышла за верхнюю границу viewport
2. Время на странице ≥ 8 секунд
3. Скролл ≥ 200px
4. Случайный триггер при достижении 50-70% скролла

**НЕ показывается:**
- На странице `/spasibo/`
- Если уже показывался (sessionStorage)
- Если заявка уже отправлена (localStorage)

**Расположение:** `astro/src/components/islands/ExitIntentModal.tsx`

### Legacy Components (React)

**Расположение:** `astro/src/legacy/components/`

#### ContentSections.tsx
Набор компонентов для рендера блоков контента:
- `ComparisonSection` - таблица сравнения
- `QualityControlSection` - чеклист контроля качества
- `WhyUsSection` - преимущества (карточки с иконками)
- `MaterialsSection` - материалы (сетка карточек)
- `PackagesSection` - пакеты услуг с прайсом
- `WorkflowSection` - процесс работы (timeline)
- `IncludedSection` - что входит (список с галочками)
- `VisualizationSection` - визуализация
- `GuaranteeSection` - гарантии
- `SeoTextSection` - SEO текст (скрываемый/раскрываемый)

#### Calculator.tsx
Интерактивный калькулятор стоимости:
- Поля ввода: длина, ширина, высота ванной
- Выбор типа ремонта
- Автоматический расчёт площади
- 3 варианта цен: Эконом, Стандарт, Премиум
- Кнопка "Получить точную смету" (открывает LeadModal)

#### BeforeAfterSlider.tsx
Слайдер для портфолио:
- Библиотека: `react-before-after-slider-component`
- Показывает фото "до" и "после" ремонта
- Интерактивный ползунок

#### ReviewsPage.tsx
Страница с отзывами:
- Карточки отзывов с рейтингом
- Фото/аватары клиентов
- Дата отзыва

---

## CI/CD и деплой

### Команды

```bash
# Сборка проекта
npm run build                # Сборка Astro → astro/dist/

# Деплой
npm run deploy               # Полный цикл: build → strip-nulls → FTP upload
npm run deploy:watch         # Watch mode: автодеплой при изменении файлов

# Оптимизация изображений
npm run optimize:images      # Сжатие JPEG/PNG (imagemin + mozjpeg/pngquant)
npm run images:webp          # Генерация WebP версий (sharp)
```

### Процесс деплоя

**Команда:** `npm run deploy`

**Этапы:**
1. **Build** (`npm --prefix astro run build`)
   - Astro генерирует статические файлы в `astro/dist/`
   - Применяются все оптимизации (минификация HTML/CSS/JS)
   - Генерация sitemap.xml

2. **Strip NUL bytes** (`node scripts/strip-nulls.mjs`)
   - Ищет файлы: `*.html`, `*.xml`, `*.txt` в `astro/dist/`
   - Удаляет байты со значением 0 (могут вызывать проблемы на сервере)
   - Логирует количество обработанных файлов

3. **FTP Upload** (`node scripts/deploy-ftp.mjs`)
   - Читает конфигурацию из `.env.deploy`
   - Подключается к FTP серверу
   - Рекурсивно загружает все файлы из `astro/dist/`
   - Timeout: 15 секунд на файл
   - Retry при ошибках

**Расположение скриптов:** `scripts/deploy-*.mjs`

### Watch Mode (автодеплой)

**Команда:** `npm run deploy:watch`

**Что делает:**
- Отслеживает изменения в:
  - `astro/src/` (все исходники)
  - `astro/public/` (статические файлы)
  - `.env.deploy` (FTP конфигурация)
  - `astro/astro.config.mjs` (конфигурация Astro)
  - `astro/tailwind.config.cjs` (конфигурация Tailwind)

- При любом изменении:
  1. Debounce 1500ms (ждёт завершения серии изменений)
  2. Запускает `npm run deploy`
  3. Если деплой уже идёт → сохраняет флаг "rerun" для повтора после завершения

- Остановка: `Ctrl+C`

**Расположение:** `scripts/deploy-watch.mjs`

### Конфигурация FTP

**Файл:** `.env.deploy`

```env
FTP_HOST=your-ftp-host.com
FTP_USER=your-username
FTP_PASS=your-password
FTP_DEST=/public_html/
```

**Примечание:** `.env.deploy` должен быть в `.gitignore`

### Оптимизация изображений

#### Сжатие JPEG/PNG

**Команда:** `npm run optimize:images`

**Процесс:**
- Использует `imagemin`
- JPEG: mozjpeg плагин (качество 85%)
- PNG: pngquant плагин (качество 65-80%)
- Обрабатывает файлы in-place (перезаписывает оригиналы)

#### Генерация WebP

**Команда:** `npm run images:webp`

**Процесс:**
- Использует `sharp`
- Создаёт `.webp` версии для всех JPEG/PNG
- Качество: 80%
- Сохраняет оригиналы для fallback

**Использование в layout:**
```html
<picture>
  <source srcset="/img/photo.webp" type="image/webp">
  <img src="/img/photo.jpg" alt="Photo">
</picture>
```

---

## Формы и лиды

### Обработчик форм (lead.php)

**Расположение:** `astro/public/lead.php`

**Принимает:**
- `phone` (обязательно) - номер телефона клиента
- `name` (опционально) - имя клиента
- `message` (опционально) - сообщение
- `repair_type` (опционально) - тип ремонта
- `reply_to` (опционально) - способ связи
- `ym_client_id`, `ym_user_id` (опционально) - ID Яндекс.Метрики
- `utm_source`, `utm_medium`, etc. (опционально) - UTM параметры
- `page_url` (опционально) - URL страницы

**Процесс обработки:**
1. Валидация:
   - `phone` не пустой
   - Очистка телефона от всего кроме цифр

2. Сборка сообщения:
   ```
   📞 Новая заявка с сайта

   Имя: Иван Иванов
   Телефон: +7 999 123 45 67
   Тип ремонта: Капитальный
   Связаться через: WhatsApp

   Яндекс.Метрика ID: 123456789
   UTM Source: google
   Страница: https://site.com/услуги/
   ```

3. Отправка в Telegram:
   - HTTP POST запрос на `https://api.telegram.org/bot{TOKEN}/sendMessage`
   - `chat_id` из переменной окружения
   - `text` - собранное сообщение

4. Ответ:
   - Success: `{"success": true}`
   - Error: `{"success": false, "error": "описание ошибки"}`

**Безопасность:**
- ⚠️ ВАЖНО: В текущей версии токены Telegram хранятся в коде (нужно переместить в `.env`)

### JavaScript API (LeadModalHost)

**Глобальный объект `window.lead`:**

```typescript
// Открыть форму
window.lead.open('callback');   // Тип: обратный звонок
window.lead.open('calculate');  // Тип: расчёт стоимости

// Закрыть форму
window.lead.close();

// Показать success message
window.lead.success();

// Собрать данные для аналитики (без отправки)
window.lead.capture();
```

**Использование в HTML:**
```html
<button data-lead-open="callback">Заказать звонок</button>
<button data-lead-open="calculate">Рассчитать стоимость</button>
```

**Автоматическая инициализация:**
- При загрузке страницы ищутся все элементы с `data-lead-open`
- Добавляются обработчики click

---

## Интерактивные фичи

### Маскирование телефонов

**Автоматическая маска:** `+7 (999) 000-00-00`

**Процесс:**
1. Находит все `input[data-phone-mask="ru"]`
2. При вводе/paste:
   - Очищает от всех символов кроме цифр
   - Преобразует `8` → `7` (первая цифра)
   - Преобразует `9XX` → `79XX` (если начинается с 9)
   - Применяет маску
   - Ограничивает 11 цифрами

**HTML:**
```html
<input type="tel" data-phone-mask="ru" placeholder="+7 (___) ___-__-__">
```

**Расположение:** `astro/src/layouts/BaseLayout.astro:407-480`

### Reveal анимация (Intersection Observer)

**Класс:** `.reveal`

**Процесс:**
1. Элементы с классом `.reveal` изначально невидимы (`opacity: 0`)
2. `IntersectionObserver` отслеживает появление в viewport
3. При пересечении (threshold: 10%) добавляется класс `.active`
4. CSS transition плавно показывает элемент

**CSS:**
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

**Расположение:** `astro/src/layouts/BaseLayout.astro:483-506`

### Parallax эффект

**Атрибут:** `data-parallax`

**Эффекты:**
- **Scroll parallax:** Элемент двигается медленнее чем скролл (иллюзия глубины)
- **Mouse tilt:** При движении мыши элемент наклоняется (±4deg)

**CSS переменные:**
- `--parallax-y` - смещение по Y от скролла
- `--tilt-x` - поворот по оси X от мыши
- `--tilt-y` - поворот по оси Y от мыши

**Пример:**
```html
<div data-parallax style="
  transform:
    translate3d(0, var(--parallax-y), 0)
    perspective(1000px)
    rotateX(var(--tilt-x))
    rotateY(var(--tilt-y))
">
  Контент с parallax
</div>
```

**Расположение:** `astro/src/layouts/BaseLayout.astro:508-575`

### Smooth scroll с offset

**Настройка:**
```css
html {
  scroll-behavior: smooth;
}

.scroll-offset {
  scroll-margin-top: 100px;
}
```

**Использование:**
- Все ссылки вида `<a href="#section">` скроллят плавно
- Класс `.scroll-offset` добавляет отступ сверху (чтобы header не перекрывал контент)

### Мобильное меню

**Триггеры:**
- `data-mobile-menu-open` - открыть меню
- `data-mobile-menu-close` - закрыть меню

**Процесс:**
1. Click на trigger → меню slide-in справа (88% ширины)
2. Backdrop с blur и затемнением
3. Z-index: 60 (выше всего остального)
4. Escape key закрывает меню

**Расположение:** `astro/src/layouts/BaseLayout.astro:188-402`

---

## Запуск проекта

### Требования

- **Node.js** 18+ (рекомендуется 20+)
- **npm** 9+

### Установка

```bash
# 1. Клонировать репозиторий
git clone <repo-url>
cd sanuzel-remont

# 2. Установить зависимости (root)
npm install

# 3. Установить зависимости (Astro)
cd astro
npm install
cd ..

# 4. Создать .env.deploy (для деплоя)
cp .env.deploy.example .env.deploy
# Заполнить FTP credentials
```

### Разработка

```bash
# Запуск dev сервера
cd astro
npm run dev

# Сервер: http://localhost:4321
# Hot reload включен
```

### Сборка

```bash
# Из корня проекта
npm run build

# Или из astro/
cd astro
npm run build

# Результат: astro/dist/
```

### Деплой

```bash
# Полный деплой (build + strip + upload)
npm run deploy

# Watch mode (автодеплой при изменениях)
npm run deploy:watch
```

### Проверка типов

```bash
cd astro
npm run check

# TypeScript проверка без компиляции
```

---

## Полезные ссылки

- **Документация Astro:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React:** https://react.dev
- **Lucide Icons:** https://lucide.dev

---

## Дополнительная документация

- **Инструкция по деплою:** `DEPLOY.md`
- **Адаптация под новый проект:** `MIGRATION.md`
- **Система services:** `astro/src/data/services/README.md`

---

## Лицензия

Частный проект. Все права защищены.
