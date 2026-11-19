// Client-side blog search — filters the current language's published
// articles by title/description/body as the user types. No routing, no
// indexable search URL (the input never changes the page URL).
import React, { useEffect, useMemo, useState } from 'react';
import type { BlogArticleMeta } from '../../types/blog';
import type { SupportedLang } from '../../locales/config';
import { BLOG_ARTICLES, getBlogArticleVersion } from '../../data/blogArticles';
import { getBlogBody, preloadAllBlogBodies } from '../../data/blogBody';
import { useBlog } from './BlogContext';
import { BlogCard } from './BlogCard';
import { stripHtml } from './blogBody';

interface BlogSearchProps {
  articles: BlogArticleMeta[];
  lang: SupportedLang;
  categories?: Array<{ id: string; label: string }>;
}

export function BlogSearch({ articles, lang, categories }: BlogSearchProps) {
  const { overrides, strings } = useBlog();
  const [query, setQuery] = useState('');
  // Tier B: bodies are no longer in the entry bundle, so full-text search
  // loads them in the background once the browser is idle (never blocking
  // LCP); results refresh as each body lands. Title/description search
  // works immediately, before any body arrives.
  const [bodyVersion, setBodyVersion] = useState(0);
  useEffect(() => {
    const kick = () =>
      preloadAllBlogBodies(
        BLOG_ARTICLES.map((a) => a.id),
        () => setBodyVersion((v) => v + 1),
      );
    // requestIdleCallback is not in this project's DOM lib, so read it
    // through a cast instead of an `in` check (which narrows window to never).
    const idle = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (idle.requestIdleCallback) {
      const id = idle.requestIdleCallback(kick, { timeout: 5000 });
      return () => idle.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(kick, 1000);
    return () => window.clearTimeout(t);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((a) => {
      const v = getBlogArticleVersion(a, lang, overrides, getBlogBody(a.id));
      const haystack = `${v.title} ${v.description} ${stripHtml(v.body)}`.toLowerCase();
      return haystack.includes(q);
    });
    // bodyVersion: recompute as background-loaded bodies arrive.
  }, [query, articles, lang, overrides, bodyVersion]);

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
