export const SITE = {
  name: 'Caderno de Frente',
  description: 'Notas tecnicas, pequenos experimentos e artigos front-end com leitura limpa e foco editorial.',
  url: 'https://example.com',
  locale: 'pt-BR',
};

export function ptPath(pathname = '/') {
  return pathname.startsWith('/pt') ? pathname : `/pt${pathname === '/' ? '/' : pathname}`;
}

export function postPath(slug: string) {
  return `/pt/posts/${slug}/`;
}

export function tagPath(slug: string) {
  return `/pt/tags/${slug}/`;
}

export function archivePath() {
  return '/pt/archive/';
}

export function pagePath(slug: string) {
  return `/pt/${slug}/`;
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
