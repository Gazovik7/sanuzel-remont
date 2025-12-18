import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const SITE_URL = process.env.SITE_URL || 'https://remont-sanuzlov.ru';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'never',
  },
  integrations: [react(), tailwind()],
});
