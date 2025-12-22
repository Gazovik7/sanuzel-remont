# Quick Start - Шпаргалка для ИИ агентов

> Краткая инструкция для быстрой адаптации проекта под новый сайт

## 🎯 Цель
Использовать этот проект как шаблон: сохранить техническую инфраструктуру, заменить контент и дизайн.

## 📋 Чеклист из 5 шагов

### 1️⃣ Базовая настройка (5 мин)
```bash
# Клонировать и настроить
git clone <repo> new-project && cd new-project
npm install && cd astro && npm install && cd ..
cp .env.deploy.example .env.deploy
# Заполнить .env.deploy FTP credentials
```

**Файлы для изменения:**
- `astro/astro.config.mjs` → `site: 'https://new-site.com'`
- `package.json` (root и astro/) → название проекта
- `.env.deploy` → FTP настройки

---

### 2️⃣ SEO и Organization (10 мин)

**Файл:** `astro/src/layouts/BaseLayout.astro` (строки 55-180)

**Что заменить:**
```javascript
// Данные организации
name: "Новое название",
telephone: "+7 XXX XXX-XX-XX",
email: "info@new-site.com",
address: { streetAddress: "...", addressLocality: "...", ... },
areaServed: [{ name: "Город" }],
openingHours: "09:00-20:00"

// Meta по умолчанию (строки 23-54)
defaultTitle: "...",
defaultDescription: "...",
defaultImage: "/img/og-image.jpg"
```

**Файлы для замены:**
- `astro/public/favicon.ico`
- `astro/public/img/logo.svg`
- `astro/public/img/og-image.jpg` (1200x630px)

---

### 3️⃣ Цвета и дизайн (15 мин)

**Файл:** `astro/tailwind.config.cjs`

```javascript
theme: {
  extend: {
    colors: {
      primary: { 50: '...', ..., 900: '...' },  // Основной цвет
      accent: { 50: '...', ..., 900: '...' },   // Акцентный
    }
  }
}
```

**Компоненты для адаптации:**
1. `astro/src/components/blocks/LegacyHeaderLanding.astro` - шапка главной
2. `astro/src/components/blocks/LegacyHeaderSolid.astro` - шапка страниц
3. `astro/src/components/blocks/LegacyFooter.astro` - подвал
4. `astro/src/legacy/components/LegacyHero.tsx` - hero секция

---

### 4️⃣ Контент и страницы (30+ мин)

#### Удалить старый контент:
```bash
# Бэкап (опционально)
mkdir _old && cp -r astro/src/data/services/pages _old/

# Удалить старые страницы (оставить home.ts как пример)
rm astro/src/data/services/pages/*.ts
# кроме home.ts
```

#### Обновить shared данные:
**Файл:** `astro/src/data/services/shared/datasets.ts`
```typescript
TEAM_MEMBERS = [/* новая команда */]
PACKAGES = [/* новые пакеты */]
PORTFOLIO_ITEMS = [/* новые проекты */]
REVIEWS = [/* новые отзывы */]
```

#### Создать новые страницы:
**Шаблон:** `astro/src/data/services/pages/new-page.ts`
```typescript
import { buildBlocks, use, unique } from '../builder';
import type { ServicePage } from '../types';

export const page: ServicePage = {
  slug: 'new-page',
  path: '/new-page/',
  seo: {
    title: 'Title | Название сайта',
    description: 'Description...',
  },
  blocks: buildBlocks([
    unique({ type: 'hero', variant: 'default', config: {...} }),
    use('comparison'),           // Переиспользовать из shared
    use('portfolioDefault'),
    unique({ type: 'faq', items: [...] }),
  ]),
};
```

**Добавить в реестр:** `astro/src/data/services/pages/index.ts`
```typescript
import { page as newPage } from './new-page';
export const PAGES = {
  home,
  'new-page': newPage,  // Добавить
};
```

---

### 5️⃣ Интеграции и деплой (10 мин)

#### Telegram Bot:
**Файл:** `astro/public/lead.php`
```php
$TELEGRAM_BOT_TOKEN = 'новый-токен';
$TELEGRAM_CHAT_ID = 'новый-chat-id';
```

#### Яндекс.Метрика:
**Файл:** `astro/src/layouts/BaseLayout.astro`
```javascript
const YM_COUNTER_ID = 'новый-ID';
```

#### Деплой:
```bash
npm run build   # Проверка сборки
npm run deploy  # Загрузка на сервер
```

---

## 🚨 КРИТИЧЕСКИ ВАЖНО - НЕ ТРОГАТЬ

### Технические файлы (сохранить как есть):
- ✅ `astro/astro.config.mjs` - только site URL
- ✅ `astro/tailwind.config.cjs` - только colors
- ✅ `scripts/*` - все скрипты деплоя
- ✅ `astro/src/data/*/types.ts` - TypeScript типы
- ✅ `astro/src/data/*/builder/` - система builder
- ✅ `astro/src/data/blog/shared/shortcodes.ts` - парсер shortcode-ов
- ✅ `astro/src/data/blog/shared/articleUtils.ts` - генерация TOC
- ✅ `astro/src/layouts/BaseLayout.astro` - только данные Organization
- ✅ Все интерактивные фичи в BaseLayout (маскирование, parallax, reveal)

### Файлы для полной замены:
- ❌ `astro/src/data/services/pages/*.ts` - страницы контента
- ❌ `astro/src/data/services/shared/datasets.ts` - данные
- ❌ `astro/src/data/blog/pages/*.ts` - посты блога
- ❌ `astro/public/img/*` - все изображения
- ❌ Визуальная часть компонентов (Header, Footer, Hero)

---

## 📝 Готовые промпты

### Создать новую страницу
```
Создай новую страницу контента для [тема]:

Используй систему ServicePage:
- Файл: astro/src/data/services/pages/[slug].ts
- SEO: title="[title]", description="[description]"
- Блоки: hero, features/whyUs, packages, faq, reviews
- Добавь в PAGES реестр

Контент: [вставить контент]
```

### Адаптировать Header
```
Обнови Header компоненты:
- LegacyHeaderLanding.astro и LegacyHeaderSolid.astro
- Навигация: [разделы]
- Телефон: [телефон]
- CTA: [текст кнопки]
- Сохрани: sticky, mobile menu, scroll behavior, data-attributes
```

### Создать пост блога
```
Создай пост блога:
- Файл: astro/src/data/blog/pages/[id].ts
- Используй shortcode-ы: [!INSERT], [!CALLOUT variant="tip"]
- Автор: [имя из BLOG_AUTHORS]
- Добавь в BLOG_POSTS

Контент: [текст статьи]
```

---

## 🧪 Тестирование

```bash
# Локальная разработка
cd astro && npm run dev
# http://localhost:4321

# Проверка типов
npm run check

# Сборка
npm run build

# Результат в astro/dist/
```

---

## 📚 Полная документация

- **README.md** - полное техническое описание всех систем
- **MIGRATION.md** - детальная инструкция по миграции (7 шагов)
- **DEPLOY.md** - инструкции по деплою
- **astro/src/data/services/README.md** - система контента услуг
- **astro/src/data/blog/README.md** - система блога

---

## ⚡ TL;DR для ИИ агента

**Если пользователь дал контент из AI Studio:**

1. Обнови `BaseLayout.astro` → Organization schema (название, адрес, телефон)
2. Замени `datasets.ts` → новые данные (команда, пакеты, отзывы)
3. Создай страницы в `pages/*.ts` → используй `buildBlocks([...])`
4. Адаптируй Header/Footer → новая навигация, контакты
5. Обнови цвета в `tailwind.config.cjs` → новая палитра
6. Замени изображения в `public/img/`
7. Настрой интеграции → Telegram, Метрика
8. Деплой → `npm run deploy`

**Сохрани ВСЮ техническую инфраструктуру:** SEO, schema.org, builder систему, shortcode-ы, скрипты деплоя, интерактивные фичи.
