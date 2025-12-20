import { BLOG_POSTS } from '../data/blog';

export const prerender = true;

type GlobEntry = Record<string, unknown>;

function buildPagePaths() {
  const pages = import.meta.glob('./**/*.astro', { eager: true }) as GlobEntry;
  return Object.keys(pages)
    .filter((path) => !path.includes('['))
    .map((path) =>
      path
        .replace(/^\.\//, '/')
        .replace(/\/index\.astro$/, '/')
        .replace(/\.astro$/, '/')
    );
}

function toSitemapEntry(url: string, lastmod: string) {
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

export function GET({ site }: { site: URL }) {
  const baseUrl = site?.href ?? 'https://remont-sanuzlov.ru/';
  const lastmod = new Date().toISOString();

  const staticPaths = buildPagePaths();
  const blogPaths = BLOG_POSTS.map((post) => `/blog/${post.slug}/`);
  const allPaths = Array.from(new Set([...staticPaths, ...blogPaths])).filter((path) => path !== '/spasibo/');

  const urls = allPaths
    .map((path) => new URL(path, baseUrl).href)
    .sort()
    .map((url) => toSitemapEntry(url, lastmod))
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls}\n` +
    `</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
