# ⚠️ КРИТИЧЕСКИ ВАЖНО - Что можно и нельзя менять

> Этот файл защищает техническую инфраструктуру проекта от случайного удаления/изменения

## 🔒 НЕ ТРОГАТЬ - Техническая инфраструктура

### Системные файлы и конфигурации

#### ✅ Полностью сохранить (0 изменений):
```
astro/src/data/services/builder/          # Система builder (use, unique, off, buildBlocks)
astro/src/data/services/types.ts          # TypeScript типы для ServicePage/ServiceBlock
astro/src/data/services/index.ts          # Публичный API (getServiceBySlug, SERVICES)
astro/src/data/blog/types.ts              # TypeScript типы для BlogPost
astro/src/data/blog/index.ts              # Публичный API блога
astro/src/data/blog/shared/shortcodes.ts  # Парсер shortcode-ов
astro/src/data/blog/shared/inserts.ts     # Готовые вставки для блога
astro/src/data/blog/shared/articleUtils.ts # TOC, readTime, addIdsToHeadings
scripts/deploy-ftp.mjs                    # FTP деплой
scripts/deploy-watch.mjs                  # Watch mode
scripts/strip-nulls.mjs                   # Удаление NUL байтов
.gitignore                                # Git конфигурация
```

#### ✅ Только минимальные изменения (указаны конкретные строки):
```
astro/astro.config.mjs
  → site: 'https://...'  (строка ~15)
  → redirects (если нужно добавить новые)

astro/tailwind.config.cjs
  → colors (только палитру)
  → fontFamily (если нужны другие шрифты)

package.json (root и astro/)
  → name, description, author
  → НЕ МЕНЯТЬ: dependencies, scripts

astro/tsconfig.json
  → НЕ МЕНЯТЬ (ничего)
```

---

### Компоненты с технической логикой

#### ✅ Сохранить логику, адаптировать только визуал:

**`astro/src/layouts/BaseLayout.astro`**
- 🔒 НЕ ТРОГАТЬ (строки 1-22): imports, interface Props
- 🔧 ИЗМЕНИТЬ (строки 23-54): defaultTitle, defaultDescription, defaultImage
- 🔒 НЕ ТРОГАТЬ (строки 55-180): Schema.org @graph структура
- 🔧 ИЗМЕНИТЬ внутри schema: name, telephone, email, address, areaServed, openingHours (ТОЛЬКО значения)
- 🔒 НЕ ТРОГАТЬ (строки 188-575): JavaScript (mobile menu, phone mask, reveal, parallax)

**`astro/src/components/islands/LeadModalHost.tsx`**
- 🔒 НЕ ТРОГАТЬ: вся логика (state, API window.lead, отправка на /lead.php)
- 🔧 ИЗМЕНИТЬ: тексты кнопок, labels, placeholder-ы
- 🔧 ИЗМЕНИТЬ (опционально): поле repairType → другой select (если другая ниша)
- 🔒 НЕ ТРОГАТЬ: data-lead-open атрибуты, валидация, сбор UTM/YM

**`astro/src/components/islands/ExitIntentModal.tsx`**
- 🔒 НЕ ТРОГАТЬ: логику триггеров (mouse leave, scroll, timeout)
- 🔧 ИЗМЕНИТЬ: тексты, дизайн модального окна
- 🔒 НЕ ТРОГАТЬ: проверки sessionStorage, localStorage

**`astro/src/components/seo/FaqSchema.astro`**
- 🔒 НЕ ТРОГАТЬ (всё) - это генератор schema.org для FAQ

---

### Legacy компоненты (React)

#### ✅ Можно адаптировать дизайн, сохранить структуру:

**`astro/src/legacy/components/ContentSections.tsx`**
- Все секции (ComparisonSection, QualityControlSection, и т.д.):
  - 🔧 ИЗМЕНИТЬ: цвета, шрифты, spacing
  - 🔒 НЕ ТРОГАТЬ: props интерфейсы, TypeScript типы
  - 🔒 НЕ ТРОГАТЬ: data-lead-open атрибуты (открывают модаль)

**`astro/src/legacy/components/Calculator.tsx`**
- 🔧 ИЗМЕНИТЬ: дизайн, тексты
- 🔒 НЕ ТРОГАТЬ: логику вычислений, state, интеграцию с LeadModal

**`astro/src/legacy/components/ArticlePage.tsx`**
- 🔒 НЕ ТРОГАТЬ: processArticleContent, renderArticleHtmlWithInserts
- 🔧 ИЗМЕНИТЬ: дизайн (стили TOC, article layout)

---

## 🔓 МОЖНО И НУЖНО МЕНЯТЬ - Контент и дизайн

### Контент (полная замена)

```
✅ astro/src/data/services/pages/*.ts       # Все страницы услуг
✅ astro/src/data/services/shared/datasets.ts  # Команда, пакеты, портфолио, отзывы
✅ astro/src/data/services/shared/blockContent.ts  # Тексты для блоков
✅ astro/src/data/services/shared/blocks.ts  # Реестр SHARED_BLOCKS (можно менять контент)
✅ astro/src/data/blog/pages/*.ts           # Все посты блога
✅ astro/src/data/blog/shared/datasets.ts   # Авторы блога
✅ astro/public/img/*                       # Все изображения
✅ astro/public/favicon.ico                 # Favicon
✅ astro/public/lead.php                    # Telegram токен и chat_id
```

### Визуальные компоненты (адаптация дизайна)

```
✅ astro/src/components/blocks/LegacyHeaderLanding.astro
✅ astro/src/components/blocks/LegacyHeaderSolid.astro
✅ astro/src/components/blocks/LegacyFooter.astro
✅ astro/src/components/blocks/LegacyMobileStickyBar.astro
✅ astro/src/components/blocks/LegacyScrollTopButton.astro
✅ astro/src/components/blocks/LegacyContactsSection.astro
✅ astro/src/legacy/components/LegacyHero.tsx
✅ astro/src/legacy/components/LegacyPortfolioSection.tsx
✅ astro/src/legacy/components/LegacyReviewsSection.tsx
✅ astro/src/legacy/components/LegacyFaqSection.tsx
✅ astro/src/legacy/components/LegacyGeographySection.tsx
✅ astro/src/legacy/components/LegacyTeamSection.tsx
```

**Что можно менять в этих файлах:**
- Цвета (Tailwind классы)
- Шрифты, размеры, spacing
- Тексты, labels
- Структуру HTML (с осторожностью)

**Что НЕ менять:**
- Imports и exports
- Props интерфейсы (TypeScript типы)
- data-* атрибуты (data-lead-open, data-phone-mask, data-parallax)
- client:load / client:idle директивы (Astro islands)

---

## 📐 Правила безопасного изменения компонентов

### ✅ ПРАВИЛЬНО:

```tsx
// Было
<button className="bg-blue-600 text-white">
  Заказать звонок
</button>

// Стало (изменили цвета и текст)
<button className="bg-primary-600 text-white">
  Оставить заявку
</button>
```

### ❌ НЕПРАВИЛЬНО:

```tsx
// Было
<button data-lead-open="callback" className="bg-blue-600">
  Заказать звонок
</button>

// Стало (УДАЛИЛИ data-lead-open - сломали интеграцию!)
<button className="bg-primary-600">
  Оставить заявку
</button>
```

---

## 🛡️ Критические data-атрибуты (НЕ УДАЛЯТЬ)

Эти атрибуты связывают компоненты друг с другом и обеспечивают работу интерактивности:

```html
<!-- Открытие модального окна заявки -->
<button data-lead-open="callback">...</button>
<button data-lead-open="calculate">...</button>

<!-- Маскирование телефонов -->
<input data-phone-mask="ru" type="tel">

<!-- Мобильное меню -->
<button data-mobile-menu-open>...</button>
<button data-mobile-menu-close>...</button>

<!-- Parallax эффект -->
<div data-parallax>...</div>
```

**Если удалишь эти атрибуты** → функциональность перестанет работать.

---

## 🎨 Tailwind классы - можно менять свободно

```
bg-blue-600     → bg-primary-600
text-indigo-700 → text-accent-700
font-sans       → font-heading
rounded-lg      → rounded-xl
p-6             → p-8
```

**НО:** если класс является частью интерактивности (например, `group-hover:`, `peer-checked:`) - меняй осторожно.

---

## 🔧 TypeScript типы - НЕ МЕНЯТЬ

```typescript
// НЕ ТРОГАТЬ
interface ServicePage {
  slug: string;
  path: string;
  seo: { title: string; description: string; };
  blocks: ServiceBlock[];
}

type ServiceBlock =
  | HeroBlock
  | ComparisonBlock
  // ... остальные

// Можно добавить НОВЫЙ тип блока, но не менять существующие
```

**Если нужен новый тип блока:**
1. Добавить интерфейс в `types.ts`
2. Добавить в union type `ServiceBlock`
3. Создать компонент для рендера
4. НЕ МЕНЯТЬ существующие типы

---

## ⚙️ Astro директивы - НЕ МЕНЯТЬ

```astro
<!-- НЕ ТРОГАТЬ -->
<LeadModalHost client:load />           <!-- Загружается сразу -->
<ExitIntentModal client:idle />         <!-- Загружается на idle -->
<Calculator client:visible />           <!-- Загружается при появлении -->

<!-- client:* директивы критичны для islands architecture -->
```

---

## 📋 Проверочный чеклист перед коммитом

После изменений проверь:

```bash
# 1. TypeScript типы
cd astro && npm run check
# Не должно быть ошибок

# 2. Сборка проекта
npm run build
# Должна завершиться успешно

# 3. Локальный запуск
npm run dev
# Открыть http://localhost:4321 и проверить:
```

- [ ] Модальное окно заявки открывается (кнопки с data-lead-open)
- [ ] Форма отправляется и показывает success message
- [ ] Телефонные поля маскируются автоматически (+7 (999) 000-00-00)
- [ ] Мобильное меню работает
- [ ] Exit-intent модальное окно появляется
- [ ] SEO schema.org валидна (https://validator.schema.org/)
- [ ] Все страницы генерируются (проверить astro/dist/)

---

## 🚨 Если что-то сломалось

### Признаки поломки технической части:

1. **TypeScript ошибки** → откатить изменения в types.ts
2. **Модальное окно не открывается** → проверить data-lead-open атрибуты
3. **Форма не отправляется** → проверить LeadModalHost.tsx, lead.php
4. **404 на страницах** → проверить PAGES реестр (pages/index.ts)
5. **Shortcode-ы не работают** → проверить shortcodes.ts

### Быстрое восстановление:

```bash
# Откатить последний коммит
git revert HEAD

# Или вернуться к рабочей версии
git checkout <working-commit-hash>

# Проверить что сломалось
git diff <working-commit> <broken-commit>
```

---

## 📞 Контрольные точки

**Перед началом работы:**
- [ ] Прочитал README.md (понимаю как всё устроено)
- [ ] Прочитал QUICKSTART.md (знаю что делать)
- [ ] Прочитал DO-NOT-TOUCH.md (знаю что не трогать)

**После каждого этапа:**
- [ ] npm run check (типы ОК)
- [ ] npm run build (сборка ОК)
- [ ] Визуально проверил в браузере

**Перед деплоем:**
- [ ] Все модальные окна работают
- [ ] Формы отправляются
- [ ] Schema.org валидна
- [ ] Новые страницы генерируются

---

## 🎓 Обучение

**Если не понимаешь зачем нужен файл/компонент:**
1. Открой **README.md** и найди описание
2. Посмотри как он используется (Find References в IDE)
3. Если всё ещё не ясно - НЕ ТРОГАЙ

**Если хочешь добавить новую фичу:**
1. Изучи существующий паттерн (как сделаны похожие фичи)
2. Создай НОВЫЙ компонент/файл (не меняй существующие)
3. Интегрируй через существующие API (use(), buildBlocks(), и т.д.)

---

## 💡 Золотое правило

> **Если не уверен - не трогай.** <br>
> Лучше создать новый компонент, чем сломать существующий.

Этот проект - шаблон с отработанной технической инфраструктурой. Твоя задача - адаптировать контент и дизайн, а не переписывать техническую часть с нуля.
