'use client';

import { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function RecentPosts() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/zenn')
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch articles:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error || articles.length === 0) {
    return (
      <div className="border-l-4 border-blue-500 pl-4 py-2">
        <p className="text-slate-400 text-sm mb-1">Coming soon...</p>
        <p className="text-white font-semibold">Blog posts will be displayed here</p>
        <p className="text-slate-300 text-sm mt-2">Connect your Zenn, Qiita, or Medium feed</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <a
          key={index}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-l-4 border-blue-500 pl-4 py-2 hover:bg-slate-700/50 transition rounded-r"
        >
          <p className="text-slate-400 text-xs mb-1">
            {new Date(article.pubDate).toLocaleDateString('ja-JP')}
          </p>
          <p className="text-white font-semibold hover:text-blue-400 transition">
            {article.title}
          </p>
        </a>
      ))}
      <a
        href="https://zenn.dev/keitah0322"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition text-sm"
      >
        View all articles on Zenn →
      </a>
    </div>
  );
}
