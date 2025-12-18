import type { BlogAuthor } from '../types';

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  alexei: {
    name: 'Алексей Смирнов',
    role: 'Главный инженер / Прораб',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    bio: 'В строительстве 12 лет. Специализируется на сложных инженерных системах и гидроизоляции. Лично принял более 500 объектов.',
  },
  elena: {
    name: 'Елена Волкова',
    role: 'Архитектор-дизайнер',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    bio: 'Член Союза Дизайнеров. Эксперт по эргономике малых пространств и подбору материалов.',
  },
};

