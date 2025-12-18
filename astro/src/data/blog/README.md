# Блог: как редактировать статьи

## Где править контент

- **Авторы (глобально, для всех статей)**: `astro/src/data/blog/shared/datasets.ts`
- **Конкретная статья (заголовок/анонс/категория/контент HTML)**: `astro/src/data/blog/pages/<id>.ts`
  - пример: `astro/src/data/blog/pages/1.ts`

## Как добавить новую статью

1. Создай новый файл `astro/src/data/blog/pages/<id>.ts` по примеру `astro/src/data/blog/pages/1.ts`.
2. Добавь импорт и вставь пост в массив `BLOG_POSTS` в `astro/src/data/blog/pages/index.ts`.
3. URL статьи будет: `/article/<id>/` (генерируется `astro/src/pages/article/[id].astro`).

