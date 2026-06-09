import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
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

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().optional(),
    language: z.enum(['pt','en']),
    kind: z.enum(['about', 'contact', 'generic']).default('generic'),
  }),
});

export const collections = { posts, pages };
