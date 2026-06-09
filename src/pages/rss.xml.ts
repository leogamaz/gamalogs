import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/content';
import { getPostPath, SITE } from '../lib/routes';

export const GET: APIRoute = async (context) => {
  const posts = await getPublishedPosts();

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.publishDate,
      link: getPostPath(post),
    })),
  });
};
