// Client-side blog search — filters the current language's published
// articles by title/description as the user types. No routing, no
// indexable search URL (the input never changes the page URL).
import React, { useMemo, useState } from 'react';
import type { BlogArticle } from '../../types/blog';
import type { SupportedLang } from '../../locales/config';
import { getBlogArticleVersion } from '../../data/blogArticles';
import { useBlog } from './BlogContext';
import { BlogCard } from './BlogCard';
import { stripHtml } from './blogBody';

interface BlogSearchProps {
  articles: BlogArticle[];
  lang: SupportedLang;
  categories?: Array<{ id: string; label: string }>;
}

export function BlogSearch({ articles, lang, categories }: BlogSearchProps) {
  const { overrides, strings } = useBlog();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((a) => {
      const v = getBlogArticleVersion(a, lang, overrides);
      const haystack = `${v.title} ${v.description} ${stripHtml(v.body)}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, articles, lang, overrides]);

  return (
    <div>
      <label htmlFor="blog-search" className="sr-only">
        {strings.searchPlaceholder}
      </label>
      <input
        id="blog-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={strings.searchPlaceholder}
        className="w-full max-w-xl rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm shadow-[var(--shadow)] outline-none focus:border-[#7c3aed]/60"
      />
      {query.trim() && results.length === 0 ? (
        <p className="mt-6 text-sm text-[var(--ink-2)]">
          {strings.searchNoResults.replace('{query}', query.trim())}
        </p>
      ) : null}
      {query.trim() && results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((a) => (
            <BlogCard key={a.id} article={a} lang={lang} categories={categories} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
