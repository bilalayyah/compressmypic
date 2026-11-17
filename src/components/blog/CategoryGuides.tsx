// "Guides in this category" hook for directory pages (AllTools + the
// home tools directory). Renders nothing until Batch 3 articles exist in
// this category.
import React from 'react';
import type { SupportedLang } from '../../locales/config';
import type { ToolCategoryId } from '../../data/tools';
import { getBlogArticlesForCategory, getBlogCategoryLabel } from '../../data/blogArticles';
import { useBlog } from './BlogContext';
import { BlogCard } from './BlogCard';

interface CategoryGuidesProps {
  categoryId: ToolCategoryId;
  lang: SupportedLang;
  categories?: Array<{ id: string; label: string }>;
}

export function CategoryGuides({ categoryId, lang, categories }: CategoryGuidesProps) {
  const { strings } = useBlog();
  const articles = getBlogArticlesForCategory(categoryId, lang);
  if (articles.length === 0) return null;

  const label = getBlogCategoryLabel(categoryId, categories);
  return (
    <section aria-label={strings.categoryGuidesHeading.replace('{category}', label)} className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        {strings.categoryGuidesHeading.replace('{category}', label)}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <BlogCard key={a.id} article={a} lang={lang} categories={categories} />
        ))}
      </div>
    </section>
  );
}
