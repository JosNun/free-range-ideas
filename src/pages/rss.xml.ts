import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const ideas = await getCollection('ideas');
  
  // Sort by addedDate desc and limit to 20
  const sortedIdeas = ideas
    .sort((a, b) => new Date(b.data.addedDate).getTime() - new Date(a.data.addedDate).getTime())
    .slice(0, 20);

  // Helper function to create excerpt from description
  const createExcerpt = (description: string, maxLength = 250) => {
    if (description.length <= maxLength) return description;
    const truncated = description.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  };

  return rss({
    title: 'Free Range Projects',
    description: 'A public shelf of project ideas free for the taking',
    site: context.site!,
    items: sortedIdeas.map((idea) => ({
      title: idea.data.title,
      description: createExcerpt(idea.data.description),
      link: `/ideas/${idea.id}/`,
      pubDate: idea.data.addedDate,
      guid: `${context.site}/ideas/${idea.id}/`,
    })),
  });
}