import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://salmon-island-097a9700f.7.azurestaticapps.net',
  integrations: [tailwind(), mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
