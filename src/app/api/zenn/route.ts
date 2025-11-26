import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Zenn RSS feed URL
    const rssUrl = 'https://zenn.dev/keitah0322/feed';

    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const rssText = await response.text();

    // Parse RSS XML to extract articles
    const articles = parseRSS(rssText);

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error fetching Zenn feed:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

function parseRSS(rssText: string) {
  const articles: Array<{
    title: string;
    link: string;
    pubDate: string;
    description: string;
  }> = [];

  // Simple XML parsing (for production, consider using a proper XML parser)
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const matches = rssText.matchAll(itemRegex);

  for (const match of matches) {
    const item = match[1];

    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const linkMatch = item.match(/<link>(.*?)<\/link>/);
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const descriptionMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);

    if (titleMatch && linkMatch) {
      articles.push({
        title: titleMatch[1],
        link: linkMatch[1],
        pubDate: pubDateMatch ? pubDateMatch[1] : '',
        description: descriptionMatch ? descriptionMatch[1].substring(0, 150) + '...' : ''
      });
    }
  }

  return articles.slice(0, 5); // Return only the 5 most recent articles
}
