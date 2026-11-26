// Blog article card — used on the blog home, category hubs, search results
// and related-articles sections. Title is an <h3> (the page <h1> is the
// hero / article title; section headings are <h2>).
import React from 'react';
import type { BlogArticleMeta } from '../../types/blog';
import type { SupportedLang } from '../../locales/config';
import {
  getBlogArticleUrl,
  getBlogArticleVersion,
  getBlogCategoryLabel,
} from '../../data/blogArticles';
import { useBlog } from './BlogContext';
import { formatBlogDate } from './blogBody';

interface BlogCardProps {
  article: BlogArticleMeta;
  lang: SupportedLang;
  /** Localized tool name (shown as a chip when provided). */
  toolName?: string;
  categories?: Array<{ id: string; label: string }>;
  /** SPA navigation when provided; plain href otherwise (prerender-safe). */
  onNavigate?: (path: string) => void;
}

export function BlogCard({ article, lang, toolName, categories, onNavigate }: BlogCardProps) {
  const { overrides, strings } = useBlog();
  const version = getBlogArticleVersion(article, lang, overrides);
  const url = getBlogArticleUrl(article, lang);
  const categoryLabel = getBlogCategoryLabel(article.categoryId, categories);
  const dateStr = formatBlogDate(article.publishedAt, lang);
  const reading = strings.minRead.replace('{minutes}', String(version.readingMinutes));
  const linkProps = onNavigate
    ? {
        href: url,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          onNavigate(url);
        },
      }
    : { href: url };

  return (
    <article className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#dc2626]/40 transition-[transform,box-shadow,border-color] duration-200 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-[var(--ink-3)] bg-[var(--surface-2)] border border-[var(--line)] px-2.5 py-0.5 rounded-full">
          {categoryLabel}
        </span>
        {toolName ? (
          <span className="text-xs font-semibold text-[#b91c1c] bg-[#dc2626]/10 px-2.5 py-0.5 rounded-full">
            {toolName}
          </span>
        ) : null}
      </div>
      <h3 className="text-lg font-bold leading-snug">
        <a {...linkProps} className="group-hover:text-[#dc2626] transition-colors">
          {version.title}
        </a>
      </h3>
      <p className="text-sm text-[var(--ink-2)] leading-relaxed line-clamp-3">{version.description}</p>
      <div className="mt-auto flex items-center justify-between gap-2 pt-1 text-xs text-[var(--ink-3)]">
        <span>
          {dateStr} · {reading}
        </span>
        {/* Phase 2 (master audit 2026-11-26, WCAG 2.5.3): the accessible
            name must contain the visible link text. The old label was the
            bare article title, which does not contain "Read the guide →".
            The visible text (strings.readArticle, e.g. EN "Read the guide
            →", DE "Anleitung lesen →") is the label's head, with the arrow
            stripped, followed by the article title. */}
        <a
          {...linkProps}
          className="font-semibold text-[#dc2626] whitespace-nowrap"
          aria-label={`${strings.readArticle.replace(/\s*[→←]\s*$/, '')}: ${version.title}`}
        >
          {strings.readArticle}
        </a>
      </div>
    </article>
  );
}
