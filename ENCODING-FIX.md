# Проблема кодировки UTF-8 и её решение

## 🐛 Проблема

**Симптомы:**
- Заголовки страниц отображаются как "??????????????????????" вместо кириллицы
- Русский текст в title, meta description показывается как знаки вопроса
- Проблема видна в Google Search Console, Яндекс.Вебмастере
- В браузере может отображаться корректно, но в поисковых системах - нет

**Причина:**
Сервер Apache не указывает правильную кодировку UTF-8 в HTTP заголовках, из-за чего поисковые боты и некоторые браузеры неправильно интерпретируют кириллицу.

---

## ✅ Решение

### 1. Добавлено в `.htaccess`

**Файл:** `astro/public/.htaccess`

```apache
# ==========================================
# UTF-8 Encoding
# ==========================================
# Указываем кодировку UTF-8 по умолчанию для всех текстовых файлов
# Это гарантирует корректное отображение кириллицы и других unicode символов
AddDefaultCharset UTF-8

# Явное указание charset для HTML файлов
<FilesMatch "\.(html|htm)$">
  AddType "text/html; charset=UTF-8" .html .htm
</FilesMatch>
```

**Что это делает:**
1. `AddDefaultCharset UTF-8` - указывает Apache отдавать все текстовые файлы с charset=UTF-8 в HTTP заголовке
2. `AddType "text/html; charset=UTF-8"` - явно устанавливает Content-Type с UTF-8 для HTML файлов

### 2. Проверка HTML (уже было правильно)

**Файл:** `astro/src/layouts/BaseLayout.astro`

```html
<html lang="ru" class="scroll-smooth">
  <head>
    <meta charset="utf-8" />
    <!-- ... остальные meta теги -->
  </head>
```

Это уже было правильно настроено, но без указания в `.htaccess` сервер не отдавал нужный HTTP заголовок.

---

## 🔍 Как проверить что проблема решена

### Метод 1: Проверка HTTP заголовков

```bash
# В терминале (или онлайн на httpstatus.io)
curl -I https://your-site.com/

# Должно быть:
# Content-Type: text/html; charset=UTF-8
```

### Метод 2: Chrome DevTools

1. Открыть сайт в Chrome
2. F12 → Network → обновить страницу
3. Кликнуть на HTML документ
4. Вкладка Headers → Response Headers
5. Найти `Content-Type: text/html; charset=UTF-8`

### Метод 3: Google Search Console

1. URL Inspection Tool
2. Проверить "Crawled page" → HTML
3. Должна отображаться кириллица корректно

### Метод 4: Яндекс.Вебмастер

1. Инструменты → Проверка ответа сервера
2. Ввести URL страницы
3. Проверить что кириллица отображается корректно

---

## 📋 Checklist для новых проектов

При создании нового сайта на базе этого шаблона:

- [ ] Убедиться что `.htaccess` содержит `AddDefaultCharset UTF-8`
- [ ] Проверить что в `BaseLayout.astro` есть `<meta charset="utf-8" />`
- [ ] После деплоя проверить HTTP заголовки (curl -I)
- [ ] Проверить в Google Search Console что заголовки отображаются корректно
- [ ] Все файлы исходников сохранены в UTF-8 (настройка IDE)

---

## 🛠️ Настройка редактора (VS Code)

Убедитесь что все файлы сохраняются в UTF-8:

**Файл:** `.vscode/settings.json`

```json
{
  "files.encoding": "utf8",
  "files.autoGuessEncoding": false
}
```

Или глобально в настройках VS Code:
1. File → Preferences → Settings
2. Поиск: "encoding"
3. Files: Encoding → `utf8`

---

## 🚨 Если проблема осталась

### 1. Проверьте что файлы сохранены в UTF-8

```bash
# В терминале (Linux/Mac)
file -bi astro/dist/index.html

# Должно быть: text/html; charset=utf-8
```

### 2. Проверьте Astro конфигурацию

**Файл:** `astro/astro.config.mjs`

```javascript
export default defineConfig({
  // ... другие настройки
  vite: {
    // Если проблемы с кодировкой в dev режиме
    server: {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
    },
  },
});
```

### 3. Очистка кеша

```bash
# Удалить сгенерированные файлы
rm -rf astro/dist/
rm -rf astro/.astro/
rm -rf astro/node_modules/.astro/

# Пересобрать
npm run build
```

### 4. Проверка на сервере

Если проблема только на сервере (локально всё ОК):

1. Проверить что `.htaccess` загрузился на сервер
2. Проверить что на хостинге включен `mod_mime` (для AddType)
3. Проверить логи Apache на ошибки

---

## 📊 Технические детали

### Как браузер определяет кодировку:

1. **HTTP заголовок** (наивысший приоритет)
   ```
   Content-Type: text/html; charset=UTF-8
   ```

2. **Meta тег в HTML**
   ```html
   <meta charset="utf-8" />
   ```

3. **BOM (Byte Order Mark)** в начале файла

4. **Автоопределение** (ненадёжно)

**Без HTTP заголовка** браузер полагается только на meta тег, но:
- Поисковые боты могут не дождаться парсинга HTML
- Некоторые старые браузеры игнорируют meta charset
- Прокси-серверы могут изменить контент

**Поэтому критически важно** указывать charset в `.htaccess`!

---

## 🔗 Связанные файлы

- `astro/public/.htaccess` - серверная конфигурация Apache
- `astro/src/layouts/BaseLayout.astro` - HTML meta теги
- `.vscode/settings.json` - кодировка файлов в редакторе

---

## 📝 История изменений

**2024-12-22:** Восстановлены корректные заголовки и описания на 5 страницах, где кириллица отображалась как "???????". Заменены общие placeholder-тайтлы на уникальные SEO-оптимизированные заголовки для каждой страницы:
- `astro/src/pages/blog/index.astro`
- `astro/src/pages/portfolio/index.astro`
- `astro/src/pages/about-us/index.astro`
- `astro/src/pages/contacts/index.astro`
- `astro/src/pages/otzyvy-klientov/index.astro`

**2024-XX-XX:** Добавлено `AddDefaultCharset UTF-8` в `.htaccess` для решения проблемы отображения кириллицы как "???????" в поисковых системах.

---

## 💡 Best Practices

### Всегда используйте UTF-8

- ✅ Все исходники в UTF-8
- ✅ .htaccess с AddDefaultCharset UTF-8
- ✅ Meta charset в HTML
- ✅ БД в utf8mb4 (если используется)

### Не используйте другие кодировки

- ❌ Windows-1251 (устаревшая)
- ❌ KOI8-R (устаревшая)
- ❌ ISO-8859-5 (устаревшая)

UTF-8 - стандарт для веба с 2008 года и единственная правильная кодировка для современных сайтов.

---

## 🎓 Дополнительные ресурсы

- [MDN: Character encoding](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#charset)
- [Apache: AddDefaultCharset](https://httpd.apache.org/docs/2.4/mod/core.html#adddefaultcharset)
- [W3C: Character encodings](https://www.w3.org/International/questions/qa-html-encoding-declarations)
