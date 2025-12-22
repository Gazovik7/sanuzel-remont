# Инструкция по адаптации проекта под новый сайт

Этот документ содержит пошаговую инструкцию по использованию текущего проекта как шаблона для создания нового сайта. Вся техническая инфраструктура (SEO, деплой, система контента) останется, а дизайн и контент будут заменены.

## Содержание

- [Общая концепция](#общая-концепция)
- [Шаг 1: Подготовка репозитория](#шаг-1-подготовка-репозитория)
- [Шаг 2: Настройка базовой информации](#шаг-2-настройка-базовой-информации)
- [Шаг 3: Адаптация SEO и микроразметки](#шаг-3-адаптация-seo-и-микроразметки)
- [Шаг 4: Замена дизайна и компонентов](#шаг-4-замена-дизайна-и-компонентов)
- [Шаг 5: Адаптация системы контента](#шаг-5-адаптация-системы-контента)
- [Шаг 6: Настройка форм и интеграций](#шаг-6-настройка-форм-и-интеграций)
- [Шаг 7: Настройка деплоя](#шаг-7-настройка-деплоя)
- [Чеклист миграции](#чеклист-миграции)
- [Промпты для Claude](#промпты-для-claude)

---

## Общая концепция

### Что остаётся неизменным (техническая база):
- ✅ Astro 5 SSG архитектура
- ✅ Islands architecture (React компоненты)
- ✅ Система data-driven контента (TypeScript объекты)
- ✅ Полная SEO инфраструктура (schema.org, OpenGraph, meta-теги)
- ✅ Система блога с shortcode-ами
- ✅ CI/CD скрипты (deploy, watch, optimize images)
- ✅ Интерактивные фичи (модальные окна, маскирование телефонов)
- ✅ Tailwind CSS конфигурация

### Что нужно заменить (контент и дизайн):
- ❌ Тексты, изображения, видео
- ❌ Визуальный дизайн компонентов
- ❌ Цветовая схема (Tailwind config)
- ❌ Специфичные блоки контента (для конкретной ниши)
- ❌ Данные организации (название, адрес, телефон)
- ❌ Интеграции (Telegram токен, Яндекс.Метрика ID)

---

## Шаг 1: Подготовка репозитория

### 1.1 Клонирование проекта

```bash
# Клонируем текущий проект как основу
git clone <current-repo-url> new-project-name
cd new-project-name

# Удаляем старую git историю и создаём новую
rm -rf .git
git init
git add .
git commit -m "Initial commit from template"

# Добавляем новый remote (опционально)
git remote add origin <new-repo-url>
git push -u origin main
```

### 1.2 Установка зависимостей

```bash
# Root зависимости
npm install

# Astro зависимости
cd astro
npm install
cd ..
```

### 1.3 Создание .env файлов

```bash
# Создаём .env.deploy для FTP
cp .env.deploy.example .env.deploy

# Редактируем .env.deploy
# FTP_HOST=new-site-ftp-host.com
# FTP_USER=new-username
# FTP_PASS=new-password
# FTP_DEST=/public_html/
```

---

## Шаг 2: Настройка базовой информации

### 2.1 Обновление package.json

**Файл:** `package.json` (root) и `astro/package.json`

```json
{
  "name": "new-project-name",
  "version": "1.0.0",
  "description": "Описание нового проекта",
  "author": "Ваше имя"
}
```

### 2.2 Astro конфигурация

**Файл:** `astro/astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://new-site.com',  // ИЗМЕНИТЬ: новый домен
  trailingSlash: 'always',
  output: 'static',
  // ... остальное остаётся
});
```

### 2.3 Tailwind конфигурация (цветовая схема)

**Файл:** `astro/tailwind.config.cjs`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // ИЗМЕНИТЬ: новые бренд-цвета
        primary: {
          50: '#eff6ff',
          // ... остальные оттенки
          900: '#1e3a8a',
        },
        // ... добавить другие цвета
      },
      fontFamily: {
        // ИЗМЕНИТЬ: новые шрифты (если нужно)
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

---

## Шаг 3: Адаптация SEO и микроразметки

### 3.1 Schema.org Organization

**Файл:** `astro/src/layouts/BaseLayout.astro` (строки 55-180)

Найти и обновить:

```javascript
// ИЗМЕНИТЬ: данные организации
const orgSchema = {
  "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${home}#organization`,
  name: "Новое название компании",          // ИЗМЕНИТЬ
  telephone: "+7 (XXX) XXX-XX-XX",          // ИЗМЕНИТЬ
  email: "info@new-site.com",               // ИЗМЕНИТЬ
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Новая, д. 1",       // ИЗМЕНИТЬ
    addressLocality: "Москва",              // ИЗМЕНИТЬ
    postalCode: "123456",                   // ИЗМЕНИТЬ
    addressCountry: "RU"
  },
  areaServed: [
    { "@type": "City", name: "Москва" },    // ИЗМЕНИТЬ
    // ... добавить другие города
  ],
  openingHoursSpecification: {
    // ИЗМЕНИТЬ: часы работы
    opens: "09:00",
    closes: "20:00"
  }
};
```

### 3.2 Meta-теги по умолчанию

**Файл:** `astro/src/layouts/BaseLayout.astro` (строки 23-54)

```astro
---
// ИЗМЕНИТЬ: дефолтные meta-теги
const defaultTitle = "Новый сайт - описание";
const defaultDescription = "Описание нового сайта для meta description";
const defaultImage = "/img/new-og-image.jpg";  // Создать новое OG изображение
---
```

### 3.3 Favicon и логотип

**Файлы для замены:**
- `astro/public/favicon.ico` - favicon
- `astro/public/img/logo.svg` (или .png) - логотип компании
- `astro/public/img/og-image.jpg` - изображение для Open Graph (1200x630px)

### 3.4 Верификация поисковых систем

**Файл:** `astro/src/layouts/BaseLayout.astro`

```astro
<!-- ИЗМЕНИТЬ: новые verification коды -->
<meta name="google-site-verification" content="новый-код-google" />
<meta name="yandex-verification" content="новый-код-yandex" />
```

---

## Шаг 4: Замена дизайна и компонентов

### 4.1 Header (шапка сайта)

**Файлы:**
- `astro/src/components/blocks/LegacyHeaderLanding.astro` - шапка главной страницы
- `astro/src/components/blocks/LegacyHeaderSolid.astro` - шапка остальных страниц

**Что менять:**
- Логотип и ссылку на главную
- Пункты навигации
- CTA кнопки
- Телефон

**Промпт для Claude:**
```
Адаптируй компонент Header под новый дизайн:
- Навигация: [список разделов]
- CTA кнопка: [текст кнопки]
- Телефон: [новый телефон]
- Сохрани все технические фичи: sticky, mobile menu, scroll behavior
```

### 4.2 Footer (подвал)

**Файл:** `astro/src/components/blocks/LegacyFooter.astro`

**Что менять:**
- Контактная информация
- Ссылки на разделы
- Соцсети
- Copyright

**Промпт для Claude:**
```
Обнови Footer с новыми данными:
- Название компании: [название]
- Адрес: [адрес]
- Телефон: [телефон]
- Email: [email]
- Соцсети: [список соцсетей с ссылками]
- Сохрани структуру и стили
```

### 4.3 Hero секция (главный экран)

**Файл:** `astro/src/legacy/components/LegacyHero.tsx`

**Что менять:**
- Заголовок и подзаголовок
- Изображение/фон
- CTA кнопки
- USP (уникальные предложения)

**Промпт для Claude:**
```
Создай новую Hero секцию с:
- Заголовок: [текст]
- Подзаголовок: [текст]
- CTA: [текст кнопки]
- Изображение: /img/new-hero-bg.jpg
- Сохрани layout и интерактивность (модальное окно при клике на CTA)
```

### 4.4 Цветовая схема

После обновления `tailwind.config.cjs`, пройтись по всем компонентам и заменить цвета:

```bash
# Поиск использований старых цветов
grep -r "bg-blue-600" astro/src/
grep -r "text-indigo-700" astro/src/

# Заменить на новые бренд-цвета
# bg-blue-600 → bg-primary-600
# text-indigo-700 → text-accent-700
```

**Промпт для Claude:**
```
Замени все цвета в проекте на новую цветовую схему:
- Основной цвет: primary (вместо blue)
- Акцентный цвет: accent (вместо indigo)
- Сохрани все варианты оттенков (50, 100, ..., 900)
```

---

## Шаг 5: Адаптация системы контента

### 5.1 Удаление старого контента

```bash
# Бэкап старого контента (на всякий случай)
mkdir _old_content
cp -r astro/src/data/services/pages _old_content/
cp -r astro/src/data/blog/pages _old_content/

# Удаление старых страниц услуг (оставить только home.ts как пример)
rm astro/src/data/services/pages/*.ts
# Создать новый home.ts или скопировать из примера
```

### 5.2 Обновление типов блоков (если нужны новые)

**Файл:** `astro/src/data/services/types.ts`

**Если нужны новые типы блоков для нового проекта:**

```typescript
// Добавить новые типы блоков
export interface NewBlockType {
  type: 'newBlock';
  variant: 'default' | 'alternative';
  config: {
    title: string;
    items: NewItem[];
  };
}

// Добавить в union type ServiceBlock
export type ServiceBlock =
  | HeroBlock
  | ComparisonBlock
  // ... остальные
  | NewBlockType;  // Новый блок
```

### 5.3 Обновление shared datasets

**Файл:** `astro/src/data/services/shared/datasets.ts`

```typescript
// ИЗМЕНИТЬ: новые данные команды
export const TEAM_MEMBERS = [
  {
    name: 'Новый специалист',
    role: 'Должность',
    avatar: '/img/team/person1.jpg',
    bio: 'Описание опыта',
  },
  // ... остальные
];

// ИЗМЕНИТЬ: новые пакеты/тарифы
export const PACKAGES = [
  {
    name: 'Базовый',
    price: '50 000 ₽',
    features: ['Фича 1', 'Фича 2'],
  },
  // ... остальные
];

// ИЗМЕНИТЬ: портфолио проектов
export const PORTFOLIO_ITEMS = [
  {
    title: 'Проект 1',
    before: '/img/portfolio/project1-before.jpg',
    after: '/img/portfolio/project1-after.jpg',
  },
  // ... остальные
];

// ИЗМЕНИТЬ: отзывы клиентов
export const REVIEWS = [
  {
    name: 'Клиент',
    text: 'Текст отзыва',
    rating: 5,
    date: '2024-01-15',
  },
  // ... остальные
];
```

### 5.4 Создание новых страниц контента

**Промпт для Claude:**
```
У меня есть контент из AI Studio для новой страницы:
[вставить дизайн/контент из AI Studio]

Создай новую страницу в формате ServicePage используя существующую систему блоков:
- Файл: astro/src/data/services/pages/new-page.ts
- Используй блоки из types.ts: hero, features, pricing, faq и т.д.
- Заполни SEO meta-теги
- Добавь в реестр PAGES в pages/index.ts
```

### 5.5 Обновление системы блога

**Файл:** `astro/src/data/blog/shared/datasets.ts`

```typescript
// ИЗМЕНИТЬ: новые авторы блога
export const BLOG_AUTHORS = {
  newAuthor: {
    name: 'Имя автора',
    role: 'Должность',
    avatar: '/img/authors/author.jpg',
    bio: 'Био автора',
  },
  // ... остальные
};
```

**Удаление старых постов блога:**
```bash
# Удалить старые посты (оставить 1-2 как примеры)
rm astro/src/data/blog/pages/*.ts
```

**Создание новых постов:**

**Промпт для Claude:**
```
Создай новый пост блога используя систему BlogPost:
- Контент: [текст статьи]
- Используй shortcode-ы: [!INSERT key="..."], [!CALLOUT variant="tip"]
- Автоматически добавь оглавление (h2/h3)
- Автор: [имя из BLOG_AUTHORS]
- Файл: astro/src/data/blog/pages/new-post.ts
```

---

## Шаг 6: Настройка форм и интеграций

### 6.1 Telegram Bot для приёма заявок

**Файл:** `astro/public/lead.php`

**Шаги:**
1. Создать нового Telegram бота через @BotFather
2. Получить токен бота
3. Создать группу/канал для получения заявок
4. Получить chat_id группы

**Обновить в lead.php:**
```php
// ИЗМЕНИТЬ: новые credentials
$TELEGRAM_BOT_TOKEN = 'новый-токен-бота';
$TELEGRAM_CHAT_ID = 'новый-chat-id';
```

**⚠️ ВАЖНО: Переместить токены в .env**

Лучше использовать переменные окружения:
```php
// В lead.php
$TELEGRAM_BOT_TOKEN = getenv('TELEGRAM_BOT_TOKEN');
$TELEGRAM_CHAT_ID = getenv('TELEGRAM_CHAT_ID');
```

### 6.2 Яндекс.Метрика

**Файл:** `astro/src/layouts/BaseLayout.astro`

Найти и заменить:
```javascript
// ИЗМЕНИТЬ: новый ID Яндекс.Метрики
const YM_COUNTER_ID = 'новый-ID-счётчика';
```

### 6.3 Обновление полей формы

**Файл:** `astro/src/components/islands/LeadModalHost.tsx`

Если нужны другие поля формы (не "тип ремонта"):

**Промпт для Claude:**
```
Адаптируй форму LeadModalHost под новую нишу:
- Изменить select "Тип ремонта" на [новое поле]
- Добавить новое поле: [описание]
- Сохранить всю логику отправки и валидации
```

---

## Шаг 7: Настройка деплоя

### 7.1 FTP конфигурация

**Файл:** `.env.deploy`

```env
FTP_HOST=new-site-ftp-host.com
FTP_USER=new-username
FTP_PASS=new-password
FTP_DEST=/public_html/
```

### 7.2 Тестовый деплой

```bash
# Проверить сборку
npm run build

# Проверить результат в astro/dist/
ls -la astro/dist/

# Тестовый деплой
npm run deploy

# Если всё ОК, настроить watch mode для автодеплоя
npm run deploy:watch
```

### 7.3 Оптимизация изображений

```bash
# Разместить новые изображения в astro/public/img/

# Оптимизировать JPEG/PNG
npm run optimize:images

# Создать WebP версии
npm run images:webp
```

---

## Чеклист миграции

### Базовая настройка
- [ ] Клонирован репозиторий
- [ ] Установлены зависимости
- [ ] Создан `.env.deploy`
- [ ] Обновлены `package.json` (название проекта)
- [ ] Обновлён `astro.config.mjs` (site URL)

### SEO и микроразметка
- [ ] Обновлена Organization schema (название, адрес, телефон)
- [ ] Заменены meta-теги по умолчанию
- [ ] Заменён favicon
- [ ] Создано OG изображение (1200x630px)
- [ ] Обновлены коды верификации (Google, Yandex)

### Дизайн и компоненты
- [ ] Обновлён Header (навигация, логотип, телефон)
- [ ] Обновлён Footer (контакты, соцсети)
- [ ] Адаптирована Hero секция
- [ ] Обновлена цветовая схема в `tailwind.config.cjs`
- [ ] Заменены все цвета в компонентах на новую палитру

### Контент
- [ ] Удалены старые страницы услуг
- [ ] Созданы новые страницы контента
- [ ] Обновлены TEAM_MEMBERS
- [ ] Обновлены PACKAGES
- [ ] Обновлены PORTFOLIO_ITEMS
- [ ] Обновлены REVIEWS
- [ ] Удалены старые посты блога
- [ ] Созданы новые посты блога
- [ ] Обновлены BLOG_AUTHORS

### Интеграции
- [ ] Создан новый Telegram бот
- [ ] Обновлён TELEGRAM_BOT_TOKEN и CHAT_ID
- [ ] Создан новый счётчик Яндекс.Метрики
- [ ] Обновлён YM_COUNTER_ID
- [ ] Адаптированы поля формы (если нужно)

### Деплой
- [ ] Настроен `.env.deploy` (FTP credentials)
- [ ] Выполнен тестовый деплой
- [ ] Оптимизированы изображения
- [ ] Проверена работа сайта на продакшене
- [ ] Проверена кодировка UTF-8 (заголовки не должны быть "???????")
- [ ] Проверен HTTP заголовок Content-Type: text/html; charset=UTF-8

---

## Промпты для Claude

### Общий промпт для адаптации контента

```
У меня есть проект на Astro с готовой технической инфраструктурой (SEO, микроразметка, система контента, деплой).

Мне нужно адаптировать его под новый сайт. Вот контент и дизайн из AI Studio:
[вставить контент/дизайн]

Прошу:
1. Сохранить ВСЮ техническую часть (schema.org, системы блоков, shortcode-ы, деплой)
2. Заменить контент (тексты, данные компании)
3. Адаптировать дизайн компонентов под новую цветовую схему: [цвета]
4. Создать новые страницы используя существующую систему ServicePage
5. НЕ УДАЛЯТЬ никакие технические решения

Начни с:
- Обновления BaseLayout.astro (schema.org с новыми данными компании)
- Адаптации Header/Footer
- Создания новой главной страницы (home.ts)
```

### Промпт для создания новой страницы

```
Создай новую страницу контента используя систему ServicePage:

Данные страницы:
- URL slug: [slug]
- Заголовок: [title]
- Описание: [description]
- Контент: [основной контент страницы]

Используй существующие блоки из types.ts:
- hero (главный экран с CTA)
- features/whyUs (преимущества)
- packages (тарифы/пакеты)
- faq (вопросы-ответы)
- reviews (отзывы)

Структура:
1. Создай файл astro/src/data/services/pages/[slug].ts
2. Заполни SEO meta-теги
3. Составь блоки используя buildBlocks([...])
4. Используй use() для переиспользования из SHARED_BLOCKS
5. Добавь страницу в PAGES реестр (pages/index.ts)
```

### Промпт для адаптации компонента

```
Адаптируй компонент [название компонента] под новый дизайн:

Текущий файл: [путь к файлу]

Что изменить:
- Цвета: [старые] → [новые]
- Тексты: [что заменить]
- Структура: [если нужно менять layout]

Что СОХРАНИТЬ:
- Всю логику и интерактивность
- Data attributes (data-lead-open, data-phone-mask и т.д.)
- Интеграции с другими компонентами
- TypeScript типы
```

### Промпт для создания поста блога

```
Создай новый пост блога используя систему BlogPost:

Данные поста:
- Заголовок: [title]
- Категория: [category]
- Автор: [author из BLOG_AUTHORS]
- Контент: [текст статьи с HTML]

Требования:
1. Используй shortcode-ы где уместно:
   - [!INSERT key="engineerTipDefault"] для советов
   - [!CALLOUT variant="tip"] для важной информации
   - [!CALLOUT variant="warning"] для предупреждений

2. Структурируй контент с h2/h3 для автогенерации оглавления

3. Автоматически вычисли readTime или укажи вручную

4. Создай файл: astro/src/data/blog/pages/[slug].ts

5. Добавь в BLOG_POSTS реестр (blog/pages/index.ts)
```

---

## Дополнительные рекомендации

### Работа с изображениями

1. **Структура директории:**
```
astro/public/img/
├── logo.svg              # Логотип
├── og-image.jpg          # OpenGraph изображение
├── hero/                 # Hero изображения
├── portfolio/            # Портфолио (до/после)
├── team/                 # Фото команды
├── blog/                 # Изображения для блога
└── icons/                # Иконки (если не используете lucide)
```

2. **Оптимизация:**
- Всегда создавайте WebP версии (`npm run images:webp`)
- Используйте responsive изображения (`srcset`)
- Lazy loading для изображений ниже fold

### Тестирование SEO

После миграции проверьте:
1. **Schema.org:** https://validator.schema.org/
2. **Open Graph:** https://www.opengraph.xyz/
3. **Meta-теги:** https://metatags.io/
4. **Lighthouse:** Chrome DevTools → Lighthouse (проверить SEO score)

### Проверка кодировки UTF-8

**Критически важно:** Убедитесь что кириллица отображается корректно.

1. **Проверка .htaccess:**
```apache
# В astro/public/.htaccess должно быть:
AddDefaultCharset UTF-8

<FilesMatch "\.(html|htm)$">
  AddType "text/html; charset=UTF-8" .html .htm
</FilesMatch>
```

2. **Проверка HTTP заголовков:**
```bash
curl -I https://your-new-site.com/
# Должно быть: Content-Type: text/html; charset=UTF-8
```

3. **Проверка в поисковых системах:**
- Google Search Console → URL Inspection → проверить заголовки
- Яндекс.Вебмастер → Проверка ответа сервера

**Если заголовки отображаются как "???????"** - смотри `ENCODING-FIX.md`

### Git workflow

```bash
# Создайте ветку для каждой крупной части миграции
git checkout -b feature/update-seo
# ... работа ...
git commit -m "Update SEO and schema.org"
git checkout main
git merge feature/update-seo

git checkout -b feature/new-content
# ... работа ...
git commit -m "Add new service pages"
```

---

## Частые проблемы и решения

### Проблема: Ошибки TypeScript после замены контента

**Решение:**
```bash
cd astro
npm run check
# Исправить все типы согласно ошибкам
```

### Проблема: Стили не применяются после изменения цветов

**Решение:**
```bash
# Пересобрать Tailwind
cd astro
rm -rf node_modules/.astro
npm run dev
```

### Проблема: Деплой не работает

**Решение:**
1. Проверить `.env.deploy` (правильные credentials)
2. Проверить доступность FTP сервера
3. Проверить права доступа к директории на сервере

```bash
# Тест FTP подключения
npm run deploy -- --test
```

### Проблема: Изображения не оптимизируются

**Решение:**
```bash
# Переустановить пакеты
npm install imagemin@9.0.0 imagemin-mozjpeg@10.0.0 sharp@0.33.5 --save-dev

# Повторить оптимизацию
npm run optimize:images
npm run images:webp
```

---

## Заключение

После выполнения всех шагов у вас будет полностью функциональный сайт с:
- ✅ Профессиональным SEO (schema.org, OpenGraph, breadcrumbs)
- ✅ Автоматическим деплоем
- ✅ Гибкой системой контента (data-driven)
- ✅ Системой блога с shortcode-ами
- ✅ Интеграциями (Telegram, Яндекс.Метрика)
- ✅ Оптимизацией производительности

Весь код чистый, типизированный и готов к масштабированию.

**Полезные ссылки:**
- Техническая документация: `README.md`
- Инструкции по деплою: `DEPLOY.md`
- Система services: `astro/src/data/services/README.md`
