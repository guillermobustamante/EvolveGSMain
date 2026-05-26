import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.evolvegs.com',
  integrations: [tailwind(), mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
