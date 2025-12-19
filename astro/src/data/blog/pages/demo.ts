import { BLOG_AUTHORS } from '../shared/datasets';
import type { BlogPost } from '../types';

export const post: BlogPost = {
  id: 'demo',
  slug: 'demo',
  title: 'Демонстрация гибкой вставки warningBitumenMastic',
  excerpt:
    'Пример использования настраиваемого блока warningBitumenMastic с разным текстом',
  category: 'Демонстрация',
  image: 'https://images.unsplash.com/photo-1565945887716-48784b4e769d?auto=format&fit=crop&q=80&w=1200',
  date: '19 декабря 2024',
  readTime: '3 мин',
  author: BLOG_AUTHORS.alexei,
  content: `
      <h2>Демонстрация гибкой вставки</h2>
      <p>В этой статье показано, как теперь можно использовать вставку warningBitumenMastic с настраиваемым текстом.</p>
      
      <h3>Пример 1: Стандартное использование</h3>
      <p>Блок с текстом по умолчанию:</p>
      [!INSERT key="warningBitumenMastic"]
      
      <h3>Пример 2: С настраиваемым заголовком</h3>
      <p>Блок с измененным заголовком:</p>
      [!INSERT key="warningBitumenMastic" title="Важно!"]
      
      <h3>Пример 3: С настраиваемым текстом</h3>
      <p>Блок с измененным содержимым:</p>
      [!INSERT key="warningBitumenMastic" body="Использование битумной мастики в квартирах может привести к серьезному ухудшению качества воздуха и проблемам со здоровьем."]
      
      <h3>Пример 4: С полностью настраиваемым содержимым</h3>
      <p>Блок с измененным заголовком и содержимым:</p>
      [!INSERT key="warningBitumenMastic" title="Внимание!" body="Битумные мастики выделяют вредные вещества в течение длительного времени, особенно при перепадах температур."]
    `,
};