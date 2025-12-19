import { BLOG_AUTHORS } from '../shared/datasets';
import type { BlogPost } from '../types';

export const post: BlogPost = {
  id: "demo-shortcode",
  slug: "demo-shortcode",
  title: "Демо: Шорткод checklist",
  excerpt: "Пример статьи с использованием шорткода [!TEMPLATE key=\"checklist\" ...]",
  category: "Документация",
  image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=120",
  date: "19 декабря 2025",
  readTime: "2 мин",
  author: BLOG_AUTHORS.alexei,
  content: `
<p>Ниже пример вставки чек-листа через шорткод:</p>

[!TEMPLATE key="checklist" title="Чеклист подготовки к ремонту"]
- Заключить договор
- Получить доступ к объекту
- Подготовить строительные материалы
- Организовать вывоз мусора
[/!TEMPLATE]

<p>И ещё один абзац после шорт-кода.</p>
`
};