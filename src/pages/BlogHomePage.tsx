// Blog home page — /blog/ (and /<lang>/blog/). Hero, search, category nav,
// latest newest-first with count, the 3 existing guide
// pages, and an empty state while Batch 3 articles are still being written.
// Exactly one <h1> (the hero heading). SEO is set by App.tsx's head effect,
// not here.
import React from 'react';
import type { SupportedLang } from '../locales/config';
import { localizePath } from '../locales/alternates';
import type { ToolMeta } from '../data/toolsMeta';
import { getPublishedBlogArticles } from '../data/blogArticles';
import { useBlog } from '../components/blog/BlogContext';
import { BlogCard } from '../components/blog/BlogCard';
import { BlogSearch } from '../components/blog/BlogSearch';
import { BlogCategoryNav } from '../components/blog/BlogCategoryNav';

export interface BlogGuidesSectionStrings {
  heading: string;
  subheading: string;
  cards: ReadonlyArray<{ title: string; desc: string; cta: string }>;
}

/** The 3 existing guide pages, in the same order as the home page. */
const GUIDE_PATHS = [
  '/guides/compress-images-for-whatsapp',
  '/guides/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb',
] as const;

const EN_GUIDES_SECTION: BlogGuidesSectionStrings = {
  heading: 'Guides',
  subheading: 'Step-by-step guides to get smaller files without losing visible quality.',
  cards: [
    {
      title: 'How to compress images for WhatsApp without losing quality',
      desc: 'Shrink photos before sending so they stay sharp and send fast.',
      cta: 'Read guide →',
    },
    {
      title: 'JPG vs PNG vs WebP: Which Format Should You Use?',
      desc: 'File size, quality and transparency compared, so you can pick the right format.',
      cta: 'Read guide →',
    },
    {
      title: 'How to Reduce Image Size to 100KB for Web & Email',
      desc: 'Step-by-step: hit 100KB without losing visible quality.',
      cta: 'Read guide →',
    },
  ],
};

interface BlogHomePageProps {
  lang: SupportedLang;
  onNavigate: (path: string) => void;
  tools: ToolMeta[];
  categories: Array<{ id: string; label: string }>;
  /** Active locale's guides section (undefined for EN -> EN fallback). */
  guidesSection?: BlogGuidesSectionStrings;
}

export function BlogHomePage({ lang, onNavigate, tools, categories, guidesSection }: BlogHomePageProps) {
  const { strings } = useBlog();
  const articles = getPublishedBlogArticles(lang).sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
  const latest = articles;
  const guides = guidesSection ?? EN_GUIDES_SECTION;

  const toolNameFor = (toolSlug: string): string | undefined =>
    tools.find((t) => t.slug === `/${toolSlug}`)?.name;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{strings.homeHeading}</h1>
      <p className="mt-3 text-base sm:text-lg text-[var(--ink-2)] leading-relaxed max-w-3xl">
        {strings.homeSubheading}
      </p>

      {articles.length > 0 ? (
        <div className="mt-8">
          <BlogSearch articles={articles} lang={lang} categories={categories} />
        </div>
      ) : null}

      <div className="mt-8">
        <BlogCategoryNav lang={lang} activeCategoryId={null} categories={categories} />
      </div>

      {articles.length === 0 ? (
        <div className="mt-10 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 shadow-[var(--shadow)] text-center">
          <h2 className="text-xl font-bold">{strings.emptyHeading}</h2>
          <p className="mt-2 text-sm text-[var(--ink-2)] leading-relaxed max-w-xl mx-auto">
            {strings.emptyText}
          </p>
        </div>
      ) : (
        <>
          {latest.length > 0 ? (
            <section aria-label={strings.latestHeading.replace('{count}', String(articles.length))} className="mt-12">
              <h2 className="text-2xl font-bold mb-5">
                {strings.latestHeading.replace('{count}', String(articles.length))}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {latest.map((a) => (
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
            </section>
          ) : null}
        </>
      )}

      <section aria-label={guides.heading} className="mt-14">
        <h2 className="text-2xl font-bold">{guides.heading}</h2>
        <p className="mt-2 text-base text-[var(--ink-2)] leading-relaxed">{guides.subheading}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {guides.cards.map((card, i) => {
            const enPath = GUIDE_PATHS[i];
            const href = localizePath(enPath, lang);
            return (
              <a
                key={enPath}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(enPath);
                }}
                className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#dc2626]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold leading-snug group-hover:text-[#dc2626] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--ink-2)] leading-relaxed">{card.desc}</p>
                </div>
                <span className="mt-4 inline-block text-[13px] font-semibold text-[#dc2626]">
                  {card.cta}
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
