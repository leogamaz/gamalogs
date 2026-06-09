export const SITE = {
  name: 'Caderno de Frente',
  description: 'Notas tecnicas, pequenos experimentos e artigos front-end com leitura limpa e foco editorial.',
  url: 'https://example.com',
  locale: 'pt-BR',
};

export type Language = 'pt' | 'en';

export function homePath(language: Language = 'pt') {
  return `/${language}/`;
}

export function postPath(slug: string, language: Language = 'pt') {
  return `/${language}/posts/${slug}/`;
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