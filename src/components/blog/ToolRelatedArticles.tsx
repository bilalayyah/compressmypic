// "Related guides" hook for tool pages — renders above the Related Tools
// section. Renders nothing until Batch 3 articles exist for this tool.
import React from 'react';
import type { SupportedLang } from '../../locales/config';
import { getBlogArticlesForTool } from '../../data/blogArticles';
import { useBlog } from './BlogContext';
import { BlogCard } from './BlogCard';

interface ToolRelatedArticlesProps {
  toolSlug: string;
  lang: SupportedLang;
  /** Localized tool name, for the section heading. */
  toolName: string;
  categories?: Array<{ id: string; label: string }>;
}

export function ToolRelatedArticles({ toolSlug, lang, toolName, categories }: ToolRelatedArticlesProps) {
  const { strings } = useBlog();
  const articles = getBlogArticlesForTool(toolSlug, lang);
  if (articles.length === 0) return null;

  return (
    <section aria-label={strings.relatedArticlesForTool.replace('{tool}', toolName)} className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        {strings.relatedArticlesForTool.replace('{tool}', toolName)}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <BlogCard key={a.id} article={a} lang={lang} categories={categories} />
        ))}
      </div>
    </section>
  );
}
