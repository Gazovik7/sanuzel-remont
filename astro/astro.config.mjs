import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const SITE_URL = process.env.SITE_URL || 'https://remont-sanuzlov.ru';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [react(), tailwind()],
  redirects: {
    '/remont-tualeta-pod-klyuch/': '/',
    '/remont-v-vannoy-komnate-s-materialami/': '/',
    '/sitemap/': '/',
    '/master-semerov-pavel-nikolaevich/': '/',
    '/master-veklovskiy-oleg-dmitrievich/': '/',
    '/master-stin-sergey-mihaylovich/': '/',
    '/master-bondarenko-yuriy-aleksandrovich/': '/',
    '/master-samoylov-sergey-ivanovich-2/': '/',
    '/master-po-remontu-vannov/': '/',
    '/master-samoylov-sergey-ivanovich/': '/',
    '/raznoe/': '/',
  },
});
