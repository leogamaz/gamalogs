import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? 'https://example.com';

export default defineConfig({
  output: 'static',
  site,
  integrations: [mdx(), sitemap()],
  redirects: {
    '/': '/pt/',
  },
});
