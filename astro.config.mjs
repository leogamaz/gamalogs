import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';

const site = process.env.PUBLIC_SITE_URL ?? 'https://gamalogs.com';

export default defineConfig({
  output: 'static',
  site,
  integrations: [
    mermaid({
      enableLog: false,
      mermaidConfig: {
        securityLevel: 'strict',
      },
    }),
    mdx(),
    sitemap(),
  ],
});
