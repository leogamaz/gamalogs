import { getCollection, type CollectionEntry } from 'astro:content';

export interface TagBucket {
  name: string;
  slug: string;
  posts: CollectionEntry<'posts'>[];
}

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => data.language === 'pt' && !data.draft);
  return posts.sort((left, right) => right.data.publishDate.valueOf() - left.data.publishDate.valueOf());
}

export async function getSitePages() {
  return getCollection('pages', ({ data }) => data.language === 'pt');
}

export async function getTagMap() {
  const posts = await getPublishedPosts();
  const tags = new Map<string, TagBucket>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tag
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      if (!tags.has(slug)) {
        tags.set(slug, { name: tag, slug, posts: [] });
      }

      const bucket = tags.get(slug);

      if (bucket) {
        bucket.posts.push(post);
      }
    }
  }

  return tags;
}

export function estimateReadingMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
