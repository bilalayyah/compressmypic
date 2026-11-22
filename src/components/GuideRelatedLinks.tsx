// "Related tools" + "Related guides" link block for the 3 guide pages
// (internal-linking fix #2, 2026-11-21). The guide pages are 33 hand-written
// files (3 guides x 11 locales) whose navigation was <button
// onClick={onNavigate}> — invisible to crawlers, so each guide page passed
// ~no link equity onward. This shared block renders REAL <a href> links so
// crawlers follow the guide <-> tool <-> article graph. Tool names stay
// English (same convention as ToolPageLayout); tool URLs are localized via
// localizePath; article titles + URLs come from the blog registry (already
// localized per locale). Headings reuse the already-localized blog strings,
// so no new copy was written in any language.
import React from 'react';
import { TOOL_BY_SLUG } from '../data/tools';
import {
  getBlogArticlesForTool,
  getBlogArticleUrl,
  getBlogArticleVersion,
} from '../data/blogArticles';
import { localizePath, localizedHomePath } from '../locales/alternates';
import type { SupportedLang } from '../locales/config';
import { useBlog } from './blog/BlogContext';

export type GuideKey = '100kb' | 'formats' | 'whatsapp';

/** Tools linked from each guide (English slugs; URLs localized at render). */
const GUIDE_TOOLS: Record<GuideKey, string[]> = {
  '100kb': [
    '/compress-image-to-100kb',
    '/compress-image-to-200kb',
    '/compress-image-to-50kb',
    '/compress-image-to-500kb',
  ],
  formats: [
    '/image-converter',
    '/jpg-to-png',
    '/png-to-jpg',
    '/jpg-to-webp',
    '/webp-to-jpg',
  ],
  whatsapp: ['/', '/image-resizer', '/bulk-image-compressor', '/compress-image-to-100kb'],
};

/** The tool whose 3 blog articles are listed under each guide. */
const GUIDE_ARTICLE_TOOL: Record<GuideKey, string> = {
  '100kb': '/compress-image-to-100kb',
  formats: '/image-converter',
  whatsapp: '/image-resizer',
};

interface GuideRelatedLinksProps {
  guide: GuideKey;
  lang: SupportedLang;
  onNavigate: (path: string) => void;
}

export function GuideRelatedLinks({ guide, lang, onNavigate }: GuideRelatedLinksProps) {
  const { strings, overrides } = useBlog();
  const tools = GUIDE_TOOLS[guide]
    .map((slug) => ({ slug, def: TOOL_BY_SLUG[slug] }))
    .filter((t): t is { slug: string; def: (typeof TOOL_BY_SLUG)[string] } => Boolean(t.def));
  const articles = getBlogArticlesForTool(GUIDE_ARTICLE_TOOL[guide], lang);
  if (tools.length === 0 && articles.length === 0) return null;

  const spaLink = (href: string) => ({
    href,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onNavigate(href);
    },
  });

  return (
    <div className="mt-10 space-y-8">
      {tools.length > 0 && (
        <section className="space-y-3" aria-label={strings.relatedToolsHeading}>
          <h2 className="text-[1.35rem] font-bold text-[var(--ink-navy)]">
            {strings.relatedToolsHeading}
          </h2>
          <ul className="space-y-2">
            {tools.map(({ slug, def }) => {
              const href = slug === '/' ? localizedHomePath(lang) : localizePath(slug, lang);
              return (
                <li key={slug}>
                  <a
                    {...spaLink(href)}
                    className="font-semibold text-[#dc2626] hover:underline"
                  >
                    {def.name} →
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      )}
      {articles.length > 0 && (
        <section className="space-y-3" aria-label={strings.relatedArticlesHeading}>
          <h2 className="text-[1.35rem] font-bold text-[var(--ink-navy)]">
            {strings.relatedArticlesHeading}
          </h2>
          <ul className="space-y-2">
            {articles.map((a) => (
              <li key={a.id}>
                <a
                  {...spaLink(getBlogArticleUrl(a, lang))}
                  className="font-semibold text-[#dc2626] hover:underline"
                >
                  {getBlogArticleVersion(a, lang, overrides).title} →
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
