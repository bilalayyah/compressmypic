// Blog category hub page — /blog/category/:categorySlug/ (and localized
// equivalents). Header, article grid (newest first), empty state, category
// nav. Exactly one <h1> (the category label). SEO is set by App.tsx's head
// effect, not here. Cross-locale slug guard: App resolves the category
// through the slug maps before rendering, so a wrong-locale slug never
// reaches this page (it 404s instead).
import React from 'react';
import type { SupportedLang } from '../locales/config';
import type { ToolCategoryId, ToolMeta } from '../data/toolsMeta';
import {
  getBlogArticlesForCategory,
  getBlogCategoryLabel,
  getBlogHomeUrl,
} from '../data/blogArticles';
import { useBlog } from '../components/blog/BlogContext';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogCategoryNav } from '../components/blog/BlogCategoryNav';
import { localizePath, localizedHomePath } from '../locales/alternates';

interface BlogCategoryPageProps {
  lang: SupportedLang;
  categoryId: ToolCategoryId;
  onNavigate: (path: string) => void;
  tools: ToolMeta[];
  categories: Array<{ id: string; label: string; description?: string }>;
}

export function BlogCategoryPage({ lang, categoryId, onNavigate, tools, categories }: BlogCategoryPageProps) {
  const { strings } = useBlog();
  const articles = getBlogArticlesForCategory(categoryId, lang);
  const label = getBlogCategoryLabel(categoryId, categories);
  // Pillar hub (fix #3, 2026-11-21): the intro is the category's own
  // localized description (already human-translated in every locale — no
  // new copy written), and the hub links the category's tools, not just
  // its articles.
  const description = categories.find((c) => c.id === categoryId)?.description;
  const categoryTools = tools.filter((t) => t.category === categoryId);

  const toolNameFor = (toolSlug: string): string | undefined =>
    tools.find((t) => t.slug === `/${toolSlug}`)?.name;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-[var(--ink-3)]">
        <a href={lang === 'en' ? '/' : `/${lang}/`} className="hover:text-[#dc2626]">
          CompressMyPic
        </a>
        {' / '}
        <a href={getBlogHomeUrl(lang)} className="hover:text-[#dc2626]">
          {strings.blog}
        </a>
        {' / '}
        <span aria-current="page" className="text-[var(--ink-2)] font-semibold">
          {label}
        </span>
      </nav>

      <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">{label}</h1>
      <p className="mt-3 text-base sm:text-lg text-[var(--ink-2)] leading-relaxed max-w-3xl">
        {description ?? strings.categoryGuidesHeading.replace('{category}', label)}
      </p>

      <div className="mt-8">
        <BlogCategoryNav lang={lang} activeCategoryId={categoryId} categories={categories} />
      </div>

      {categoryTools.length > 0 && (
        <section aria-label={strings.relatedToolsHeading} className="mt-10">
          <h2 className="text-2xl font-bold mb-5">{strings.relatedToolsHeading}</h2>
          <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((t) => {
              const href = t.slug === '/' ? localizedHomePath(lang) : localizePath(t.slug, lang);
              return (
                <li key={t.slug}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(href);
                    }}
                    className="font-semibold text-[#dc2626] hover:underline"
                  >
                    {t.name} →
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <h2 className="mt-10 text-2xl font-bold mb-5">
        {strings.categoryGuidesHeading.replace('{category}', label)}
      </h2>

      {articles.length === 0 ? (
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 shadow-[var(--shadow)] text-center">
          <h2 className="text-xl font-bold">{strings.emptyHeading}</h2>
          <p className="mt-2 text-sm text-[var(--ink-2)] leading-relaxed max-w-xl mx-auto">
            {strings.emptyText}
          </p>
          <p className="mt-4">
            <a href={getBlogHomeUrl(lang)} className="font-semibold text-[#dc2626]">
              {strings.viewBlogHome} <span className="inline-block rtl:rotate-180">→</span>
            </a>
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <BlogCard
              key={a.id}
              article={a}
              lang={lang}
              toolName={toolNameFor(a.toolSlug)}
              categories={categories}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
