// Category navigation chips for the blog home and category hubs — one chip
// per tool category plus an "All" chip linking to the blog home.
import React from 'react';
import type { SupportedLang } from '../../locales/config';
import type { ToolCategoryId } from '../../data/tools';
import { getBlogCategories, getBlogCategoryLabel, getBlogCategoryUrl, getBlogHomeUrl } from '../../data/blogArticles';
import { useBlog } from './BlogContext';

interface BlogCategoryNavProps {
  lang: SupportedLang;
  /** Active category id, or null for the blog home ("All"). */
  activeCategoryId?: ToolCategoryId | null;
  categories?: Array<{ id: string; label: string }>;
}

export function BlogCategoryNav({ lang, activeCategoryId = null, categories }: BlogCategoryNavProps) {
  const { strings } = useBlog();
  const blogCats = getBlogCategories();

  const chip = (href: string, label: string, active: boolean) => (
    <a
      key={href}
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
        active
          ? 'bg-[#7c3aed] text-white border-[#7c3aed]'
          : 'bg-[var(--surface)] border-[var(--line)] text-[var(--ink-2)] hover:border-[#7c3aed]/40 hover:text-[#7c3aed]'
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav aria-label={strings.categoriesHeading} className="flex flex-wrap gap-2">
      {chip(getBlogHomeUrl(lang), strings.blog, activeCategoryId === null)}
      {blogCats.map((c) =>
        chip(
          getBlogCategoryUrl(c.id, lang),
          getBlogCategoryLabel(c.id, categories),
          activeCategoryId === c.id,
        ),
      )}
    </nav>
  );
}
