// Blog article page — /blog/:articleSlug/ (and localized equivalents).
// Breadcrumbs, category chip, title (the one <h1>), lede, byline, TOC,
// trusted-HTML body, FAQ, tool CTA, related articles, related tools,
// prev/next, share, back-to-blog. When the article is not published in the
// active language yet, renders a notice + links (NOT a 404); App.tsx's head
// effect sets noIndex + the EN canonical for that case. SEO is set by
// App.tsx's head effect, not here.
import React, { useState } from 'react';
import type { BlogArticle } from '../types/blog';
import type { SupportedLang } from '../locales/config';
import { localizePath } from '../locales/alternates';
import type { ToolDefinition } from '../data/tools';
import {
  getBlogArticlePrevNext,
  getBlogArticleUrl,
  getBlogArticleVersion,
  getBlogCategoryLabel,
  getBlogCategoryUrl,
  getBlogHomeUrl,
  getRelatedBlogArticles,
  isBlogArticlePublishedIn,
} from '../data/blogArticles';
import { useBlog } from '../components/blog/BlogContext';
import { ArticleTOC } from '../components/blog/ArticleTOC';
import { RelatedArticles } from '../components/blog/RelatedArticles';
import { ensureHeadingIds, formatBlogDate } from '../components/blog/blogBody';

interface ArticlePageProps {
  lang: SupportedLang;
  article: BlogArticle;
  onNavigate: (path: string) => void;
  tools: ToolDefinition[];
  categories: Array<{ id: string; label: string }>;
}

export function ArticlePage({ lang, article, onNavigate, tools, categories }: ArticlePageProps) {
  const { overrides, strings } = useBlog();
  const [copied, setCopied] = useState(false);
  const publishedInLang = isBlogArticlePublishedIn(article, lang);
  const version = getBlogArticleVersion(article, lang, overrides);
  const body = ensureHeadingIds(version.body);
  const categoryLabel = getBlogCategoryLabel(article.categoryId, categories);
  const categoryUrl = getBlogCategoryUrl(article.categoryId, lang);
  const blogHomeUrl = getBlogHomeUrl(lang);
  const homeUrl = lang === 'en' ? '/' : `/${lang}/`;
  const articleUrl = getBlogArticleUrl(article, lang);
  const absoluteUrl = `https://compressmypic.online${articleUrl}`;
  const reading = strings.minRead.replace('{minutes}', String(version.readingMinutes));
  const published = strings.publishedOn.replace('{date}', formatBlogDate(article.publishedAt, lang));
  const updated = article.updatedAt
    ? strings.updatedOn.replace('{date}', formatBlogDate(article.updatedAt, lang))
    : null;

  const mainTool = tools.find((t) => t.slug === `/${article.toolSlug}`);
  const relatedTools = article.relatedToolSlugs
    .map((slug) => tools.find((t) => t.slug === `/${slug}`))
    .filter((t): t is ToolDefinition => Boolean(t));
  const related = getRelatedBlogArticles(article, lang);
  const { prev, next } = getBlogArticlePrevNext(article, lang);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (older browsers) — the link itself is shown below.
    }
  };

  const shareText = encodeURIComponent(version.title);
  const shareUrl = encodeURIComponent(absoluteUrl);

  if (!publishedInLang) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-[var(--ink-3)]">
          <a href={homeUrl} className="hover:text-[#7c3aed]">
            CompressMyPic
          </a>
          {' / '}
          <a href={blogHomeUrl} className="hover:text-[#7c3aed]">
            {strings.blog}
          </a>
        </nav>
        <div className="mt-8 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 shadow-[var(--shadow)] text-center">
          <h1 className="text-2xl font-bold">{strings.notAvailableHeading}</h1>
          <p className="mt-3 text-sm text-[var(--ink-2)] leading-relaxed max-w-xl mx-auto">
            {strings.notAvailableText}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={getBlogArticleUrl(article, 'en')}
              className="px-5 py-2.5 rounded-full bg-[#7c3aed] text-white text-sm font-semibold hover:bg-[#6d28d9] transition-colors"
            >
              {version.title} (English)
            </a>
            <a
              href={blogHomeUrl}
              className="px-5 py-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition-colors"
            >
              {strings.viewBlogHome} →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-[var(--ink-3)]">
        <a href={homeUrl} className="hover:text-[#7c3aed]">
          CompressMyPic
        </a>
        {' / '}
        <a href={blogHomeUrl} className="hover:text-[#7c3aed]">
          {strings.blog}
        </a>
        {' / '}
        <a href={categoryUrl} className="hover:text-[#7c3aed]">
          {categoryLabel}
        </a>
        {' / '}
        <span aria-current="page" className="text-[var(--ink-2)] font-semibold">
          {version.title}
        </span>
      </nav>

      <div className="mt-6">
        <a
          href={categoryUrl}
          className="inline-block text-xs font-semibold text-[#7c3aed] bg-[#7c3aed]/10 px-2.5 py-0.5 rounded-full"
        >
          {categoryLabel}
        </a>
      </div>

      <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
        {version.title}
      </h1>
      <p className="mt-4 text-lg text-[var(--ink-2)] leading-relaxed">{version.description}</p>
      <p className="mt-4 text-sm text-[var(--ink-3)]">
        {strings.bylineAuthor} · {published}
        {updated ? ` · ${updated}` : ''} · {reading}
      </p>

      <div className="mt-8">
        <ArticleTOC body={body} />
      </div>

      <div
        className="blog-body mt-8 text-base leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1.5 [&_a]:text-[#7c3aed] [&_a]:underline [&_strong]:font-bold [&_img]:rounded-2xl [&_img]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#7c3aed]/40 [&_blockquote]:pl-4 [&_blockquote]:my-4 [&_blockquote]:text-[var(--ink-2)] [&_code]:bg-[var(--surface-2)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      {version.faqs && version.faqs.length > 0 ? (
        <section aria-label={strings.faqHeading} className="mt-12">
          <h2 className="text-2xl font-bold mb-5">{strings.faqHeading}</h2>
          <div className="space-y-4">
            {version.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)]"
              >
                <h3 className="font-bold leading-snug">{faq.question}</h3>
                <div
                  className="mt-2 text-sm text-[var(--ink-2)] leading-relaxed [&_a]:text-[#7c3aed] [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {mainTool ? (
        <section aria-label={strings.relatedToolsHeading} className="mt-12">
          <h2 className="text-2xl font-bold mb-5">{strings.relatedToolsHeading}</h2>
          <a
            href={localizePath(mainTool.slug, lang)}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(mainTool.slug);
            }}
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#7c3aed]/40 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all"
          >
            <span>
              <span className="block font-bold group-hover:text-[#7c3aed] transition-colors">
                {mainTool.name}
              </span>
              <span className="block mt-1 text-sm text-[var(--ink-2)]">
                {strings.tryToolCta.replace('{tool}', mainTool.name)}
              </span>
            </span>
            <span aria-hidden="true" className="text-xl text-[#7c3aed]">
              →
            </span>
          </a>
        </section>
      ) : null}

      <RelatedArticles articles={related} lang={lang} categories={categories} />

      {relatedTools.length > 0 ? (
        <section aria-label={strings.relatedToolsHeading} className="mt-12">
          <h2 className="text-2xl font-bold mb-5">{strings.relatedToolsHeading}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedTools.map((t) => (
              <a
                key={t.slug}
                href={localizePath(t.slug, lang)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(t.slug);
                }}
                className="group flex items-center justify-between gap-4 p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#7c3aed]/40 hover:-translate-y-0.5 transition-all"
              >
                <span className="font-semibold group-hover:text-[#7c3aed] transition-colors">
                  {t.name}
                </span>
                <span aria-hidden="true" className="text-[#7c3aed]">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {prev || next ? (
        <nav aria-label="Article navigation" className="mt-12 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <a
              href={getBlogArticleUrl(prev, lang)}
              className="group p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#7c3aed]/40 transition-all"
            >
              <span className="block text-xs font-semibold text-[var(--ink-3)]">
                {strings.prevArticle}
              </span>
              <span className="block mt-1 font-bold group-hover:text-[#7c3aed] transition-colors">
                {getBlogArticleVersion(prev, lang, overrides).title}
              </span>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a
              href={getBlogArticleUrl(next, lang)}
              className="group p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#7c3aed]/40 transition-all text-right"
            >
              <span className="block text-xs font-semibold text-[var(--ink-3)]">
                {strings.nextArticle}
              </span>
              <span className="block mt-1 font-bold group-hover:text-[#7c3aed] transition-colors">
                {getBlogArticleVersion(next, lang, overrides).title}
              </span>
            </a>
          ) : null}
        </nav>
      ) : null}

      <section aria-label={strings.shareHeading} className="mt-12">
        <h2 className="text-lg font-bold mb-3">{strings.shareHeading}</h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyLink}
            className="px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition-colors"
          >
            {copied ? strings.copied : strings.copyLink}
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition-colors"
          >
            {strings.shareOnX}
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition-colors"
          >
            {strings.shareOnFacebook}
          </a>
        </div>
      </section>

      <p className="mt-10">
        <a href={blogHomeUrl} className="font-semibold text-[#7c3aed]">
          {strings.backToBlog}
        </a>
      </p>
    </div>
  );
}
