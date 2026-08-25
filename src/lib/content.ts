import { getCollection, type CollectionEntry } from 'astro:content';
import { getGuidePath, getPostPath, homePath, type Language } from './routes';

export type { Language } from './routes';
export type PostEntry = CollectionEntry<'posts'>;
export type GuideEntry = CollectionEntry<'guides'>;

export interface TagBucket {
  name: string;
  slug: string;
  posts: CollectionEntry<'posts'>[];
}
// export async function getPublishedPosts() {
//   const posts = await getCollection('posts', ({ data }) => data.language === 'pt' && !data.draft);
//   console.log('Posts:', posts);
//   return posts.sort((left, right) => right.data.publishDate.valueOf() - left.data.publishDate.valueOf());
// }

export async function getPublishedPosts(language: Language = 'pt') {
  const posts = await getCollection('posts', ({ data }) => data.language === language && !data.draft);
  return posts.sort((left, right) => right.data.publishDate.valueOf() - left.data.publishDate.valueOf());
}

export async function getPublishedGuides(language: Language = 'pt') {
  const guides = await getCollection('guides', ({ data }) => data.language === language && !data.draft);
  return guides.sort((left, right) => right.data.publishDate.valueOf() - left.data.publishDate.valueOf());
}

export async function getPostTranslationPath(post: PostEntry, targetLanguage: Language) {
  const posts = await getCollection('posts', ({ data }) => data.language === targetLanguage && !data.draft);

  const translatedPost = post.data.translationAvailable
    ? post.data.translationKey
      ? posts.find(
          (candidate) =>
            candidate.data.translationAvailable && candidate.data.translationKey === post.data.translationKey
        )
      : posts.find((candidate) => candidate.data.translationAvailable && candidate.data.slug === post.data.slug)
    : undefined;

  return translatedPost ? getPostPath(translatedPost) : homePath(targetLanguage);
}

export async function getGuideTranslationPath(guide: GuideEntry, targetLanguage: Language) {
  const guides = await getCollection('guides', ({ data }) => data.language === targetLanguage && !data.draft);
  const translatedGuide = guides.find((candidate) => candidate.data.translationKey === guide.data.translationKey);

  return translatedGuide ? getGuidePath(translatedGuide) : homePath(targetLanguage);
}

export async function getSitePages(language: Language = 'pt') {
  return getCollection('pages', ({ data }) => data.language === language);
}

export async function getTagMap(language: Language = 'pt') {
  const posts = await getPublishedPosts(language);
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
