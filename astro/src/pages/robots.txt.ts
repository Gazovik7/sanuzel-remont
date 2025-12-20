export const prerender = true;

export function GET({ site }: { site: URL }) {
  const baseUrl = site?.href ?? 'https://remont-sanuzlov.ru/';
  const sitemapUrl = new URL('sitemap.xml', baseUrl).href;
  const host = new URL(baseUrl).host;

  const body = `User-agent: Googlebot
Disallow: /spasibo/

User-agent: Yandex
Disallow: /spasibo/
Host: ${host}
Clean-param: utm_referrer&search_source&search_domain&source&lr /

User-agent: *
Allow: /
Disallow: /spasibo/

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
