// Blog article page — /blog/:articleSlug/ (and localized equivalents).
// Breadcrumbs, category chip, title (the one <h1>), lede, byline, TOC,
// trusted-HTML body, FAQ, tool CTA, related articles, related tools,
// prev/next, share, back-to-blog. When the article is not published in the
// active language yet, renders a notice + links (NOT a 404); App.tsx's head
// effect sets noIndex + the EN canonical for that case. SEO is set by
// App.tsx's head effect, not here.
import React, { useEffect, useState } from 'react';
import type { BlogArticleMeta } from '../types/blog';
import type { SupportedLang } from '../locales/config';
import { localizePath } from '../locales/alternates';
import type { ToolMeta } from '../data/toolsMeta';
import { getBlogBody, getBlogBodyLocale, loadBlogBody, loadBlogBodyLocale } from '../data/blogBody';
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
import { ShareButtons } from '../components/ShareButtons';
import { ensureHeadingIds, formatBlogDate } from '../components/blog/blogBody';

interface ArticlePageProps {
  lang: SupportedLang;
  article: BlogArticleMeta;
  onNavigate: (path: string) => void;
  tools: ToolMeta[];
  categories: Array<{ id: string; label: string }>;
}

export function ArticlePage({ lang, article, onNavigate, tools, categories }: ArticlePageProps) {
  const { overrides, strings } = useBlog();
  const publishedInLang = isBlogArticlePublishedIn(article, lang);
  // Tier B: the body comes from the per-article body cache. main.tsx
  // preloads it before first render on article routes (direct loads and
  // the prerender); on client-side navigation it loads here instead, and
  // the page shows a loading state until it lands.
  const cachedBody = getBlogBody(article.id);
  // Perf split 2026-11-19: the locale body comes from the per-article
  // locale module. main.tsx preloads it before first render on article
  // routes (direct loads and the prerender), like the EN body; on
  // client-side navigation it loads here instead, and the page shows a
  // loading state until it lands.
  const cachedLocaleBody = lang === 'en' ? undefined : getBlogBodyLocale(lang, article.id);
  const [, setBodyTick] = useState(0);
  useEffect(() => {
    if (cachedBody && (lang === 'en' || cachedLocaleBody)) return;
    let cancelled = false;
    const jobs: Promise<unknown>[] = [];
    if (!cachedBody) jobs.push(loadBlogBody(article.id));
    if (lang !== 'en' && !cachedLocaleBody) jobs.push(loadBlogBodyLocale(lang, article.id));
    void Promise.allSettled(jobs).then(() => {
      if (!cancelled) setBodyTick((t) => t + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [article.id, cachedBody, cachedLocaleBody, lang]);
  const version = getBlogArticleVersion(article, lang, overrides, cachedBody, cachedLocaleBody);
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
    .filter((t): t is ToolMeta => Boolean(t));
  const related = getRelatedBlogArticles(article, lang);
  const { prev, next } = getBlogArticlePrevNext(article, lang);

  if (!publishedInLang) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-[var(--ink-3)]">
          <a href={homeUrl} className="hover:text-[#dc2626]">
            CompressMyPic
          </a>
          {' / '}
          <a href={blogHomeUrl} className="hover:text-[#dc2626]">
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
              className="px-5 py-2.5 rounded-full bg-[#dc2626] text-white text-sm font-semibold hover:bg-[#b91c1c] transition-colors"
            >
              {version.title} (English)
            </a>
            <a
              href={blogHomeUrl}
              className="px-5 py-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold hover:border-[#dc2626]/40 hover:text-[#dc2626] transition-colors"
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
        <a href={homeUrl} className="hover:text-[#dc2626]">
          CompressMyPic
        </a>
        {' / '}
        <a href={blogHomeUrl} className="hover:text-[#dc2626]">
          {strings.blog}
        </a>
        {' / '}
        <a href={categoryUrl} className="hover:text-[#dc2626]">
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
          className="inline-block text-xs font-semibold text-[#b91c1c] bg-[#dc2626]/10 px-2.5 py-0.5 rounded-full"
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

      {/* Per-article hero image (article-images batch): the same branded
          1200x630 card as og:image, visible in the article. width/height
          are set to avoid CLS; fetchPriority high because it is above the
          fold and may become the LCP element (user chose this knowing the
          speed cost). Only renders for articles published in this language
          (this branch is the published-in-lang path). */}
      <figure className="mt-8">
        <img
          src={`/blog-images/${article.id}-${lang}.png`}
          width={1200}
          height={630}
          alt={version.title}
          fetchPriority="high"
          className="w-full h-auto rounded-2xl shadow-[var(--shadow)]"
        />
      </figure>

      {cachedBody ? (
        <>
      <div className="mt-8">
        <ArticleTOC body={body} />
      </div>

      <div
        className="blog-body mt-8 text-base leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:ps-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:ps-6 [&_li]:mb-1.5 [&_a]:text-[#dc2626] [&_a]:underline [&_strong]:font-bold [&_img]:rounded-2xl [&_img]:my-6 [&_blockquote]:border-s-4 [&_blockquote]:border-[#dc2626]/40 [&_blockquote]:ps-4 [&_blockquote]:my-4 [&_blockquote]:text-[var(--ink-2)] [&_code]:bg-[var(--surface-2)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_table]:block [&_table]:overflow-x-auto [&_table]:max-w-full [&_table]:my-6 [&_table]:text-sm [&_table]:border-collapse [&_th]:text-start [&_th]:font-bold [&_th]:px-3 [&_th]:py-2 [&_th]:border [&_th]:border-[var(--line)] [&_th]:bg-[var(--surface-2)] [&_th]:whitespace-normal [&_td]:px-3 [&_td]:py-2 [&_td]:border [&_td]:border-[var(--line)] [&_td]:whitespace-normal [&_td]:break-words"
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
                  className="mt-2 text-sm text-[var(--ink-2)] leading-relaxed [&_a]:text-[#dc2626] [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
        </>
      ) : (
        <p className="mt-8 text-sm text-[var(--ink-2)]">Loading…</p>
      )}

      {mainTool ? (
        <section aria-label={strings.relatedToolsHeading} className="mt-12">
          <h2 className="text-2xl font-bold mb-5">{strings.relatedToolsHeading}</h2>
          <a
            href={localizePath(mainTool.slug, lang)}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(mainTool.slug);
            }}
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#dc2626]/40 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-[transform,box-shadow,border-color]"
          >
            <span>
              <span className="block font-bold group-hover:text-[#dc2626] transition-colors">
                {mainTool.name}
              </span>
              <span className="block mt-1 text-sm text-[var(--ink-2)]">
                {strings.tryToolCta.replace('{tool}', mainTool.name)}
              </span>
            </span>
            <span aria-hidden="true" className="text-xl text-[#dc2626]">
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
                className="group flex items-center justify-between gap-4 p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#dc2626]/40 hover:-translate-y-0.5 transition-[transform,border-color]"
              >
                <span className="font-semibold group-hover:text-[#dc2626] transition-colors">
                  {t.name}
                </span>
                <span aria-hidden="true" className="text-[#dc2626]">
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
              className="group p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#dc2626]/40 transition-[border-color]"
            >
              <span className="block text-xs font-semibold text-[var(--ink-3)]">
                {strings.prevArticle}
              </span>
              <span className="block mt-1 font-bold group-hover:text-[#dc2626] transition-colors">
                {getBlogArticleVersion(prev, lang, overrides).title}
              </span>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a
              href={getBlogArticleUrl(next, lang)}
              className="group p-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#dc2626]/40 transition-[border-color] text-end"
            >
              <span className="block text-xs font-semibold text-[var(--ink-3)]">
                {strings.nextArticle}
              </span>
              <span className="block mt-1 font-bold group-hover:text-[#dc2626] transition-colors">
                {getBlogArticleVersion(next, lang, overrides).title}
              </span>
            </a>
          ) : null}
        </nav>
      ) : null}

      {/* Share this guide: red share buttons (redesign 2026-11-21) */}
      <ShareButtons
        title={version.title}
        url={absoluteUrl}
        labels={{
          heading: strings.shareHeading,
          copyLink: strings.copyLink,
          copied: strings.copied,
          onX: strings.shareOnX,
          onFacebook: strings.shareOnFacebook,
          onWhatsApp: strings.shareOnWhatsApp,
        }}
        networks={['copy', 'x', 'facebook', 'whatsapp']}
      />

      <p className="mt-10">
        <a href={blogHomeUrl} className="font-semibold text-[#dc2626]">
          {strings.backToBlog}
        </a>
      </p>
    </div>
  );
}
