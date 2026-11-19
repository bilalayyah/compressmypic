// Related-articles grid (article page + category fallback). Renders
// nothing when there are no related articles.
import React from 'react';
import type { BlogArticleMeta } from '../../types/blog';
import type { SupportedLang } from '../../locales/config';
import { useBlog } from './BlogContext';
import { BlogCard } from './BlogCard';

interface RelatedArticlesProps {
  articles: BlogArticleMeta[];
  lang: SupportedLang;
  heading?: string;
  categories?: Array<{ id: string; label: string }>;
}

export function RelatedArticles({ articles, lang, heading, categories }: RelatedArticlesProps) {
  const { strings } = useBlog();
  if (articles.length === 0) return null;

  return (
    <section aria-label={heading ?? strings.relatedArticlesHeading} className="mt-12">
      <h2 className="text-2xl font-bold mb-5">{heading ?? strings.relatedArticlesHeading}</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <BlogCard key={a.id} article={a} lang={lang} categories={categories} />
        ))}
      </div>
    </section>
  );
}
