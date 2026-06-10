import type { CollectionEntry } from 'astro:content';

export const SITE = {
  name: 'Gama Logs',
  description: 'Notas tecnicas, pequenos experimentos e artigos',
  url: 'https://gamalogs.com',
  locale: 'pt-BR',
};

export type Language = 'pt' | 'en';

type PostRouteEntry = Pick<CollectionEntry<'posts'>, 'id' | 'data'> & { filePath?: string };
type GuideRouteEntry = Pick<CollectionEntry<'guides'>, 'id' | 'data'>;

export function homePath(language: Language = 'pt') {
  return `/${language}/`;
}

export function postPath(slug: string, language: Language = 'pt') {
  return `/${language}/posts/${slug}/`;
}

export function guidePath(slug: string, language: Language = 'pt') {
  return `/${language}/guides/${slug}/`;
}

export function guidesPath(language: Language = 'pt') {
  return `/${language}/guides/`;
}

export function getPostRouteSlug(post: PostRouteEntry) {
  const sourcePath = (post.filePath ?? post.id).replace(/\\/g, '/');
  const relativePath = sourcePath.replace(/^.*src\/content\/posts\//, '');
  const pathParts = relativePath.split('/');
  const parentSegments = pathParts.slice(0, -1).join('/');

  if (parentSegments) {
    return `${parentSegments}/${post.data.slug}`;
  }

  const year = String(post.data.publishDate.getUTCFullYear());
  const month = String(post.data.publishDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(post.data.publishDate.getUTCDate()).padStart(2, '0');

  return `${year}/${month}/${day}/${post.data.slug}`;
}

export function getPostPath(post: PostRouteEntry) {
  return postPath(getPostRouteSlug(post), post.data.language);
}

export function getGuidePath(guide: GuideRouteEntry) {
  return guidePath(guide.id, guide.data.language);
}

export function tagPath(slug: string, language: Language = 'pt') {
  return `/${language}/tags/${slug}/`;
}

export function archivePath(language: Language = 'pt') {
  return `/${language}/archive/`;
}

export function pagePath(slug: string, language: Language = 'pt') {
  return `/${language}/${slug}/`;
}

export function absoluteUrl(pathname: string, site = SITE.url) {
  return new URL(pathname, site).toString();
}

export function slugifyTag(tag: string) {
  return tag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
export function toggleLanguagePath(pathname: string) {
  if (pathname.startsWith('/en')) {
    if (pathname === '/en/' || pathname === '/en') return '/pt/';
    return pathname
      .replace('/en/about/', '/pt/sobre/')
      .replace('/en/', '/pt/');
  }

  if (pathname === '/pt/' || pathname === '/pt') return '/en/';
  return pathname
    .replace('/pt/sobre/', '/en/about/')
    .replace('/pt/', '/en/');
}
