import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    summary: z.string().min(1),
    publishDate: z.coerce.date(),
    language: z.enum(['pt','en']),
    translationKey: z.string().min(1).optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    translationAvailable: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    publishDate: z.coerce.date(),
    language: z.enum(['pt','en']),
    translationKey: z.string().min(1),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    summary: z.string().optional(),
    language: z.enum(['pt','en']),
    kind: z.enum(['about', 'contact', 'generic']).default('generic'),
  }),
});

export const collections = { posts, pages, guides };
