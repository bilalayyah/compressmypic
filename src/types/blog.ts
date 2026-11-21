// Blog types for the CompressMyPic multilingual SEO blog (Batch 2).
// The article registry lives in src/data/blogArticles.ts; per-locale content
// overrides live in src/locales/<lang>/blog.ts (loaded lazily with the
// locale — never statically imported, or the bodies would bloat the main
// bundle). Localized SLUGS live in each locale's slugs.ts
// ('/blog/<en-slug>' -> '/<lang>/blog/<slug>'), the single source of truth
// for routing, hreflang and the language switcher.

import type { ToolCategoryId } from '../data/tools';

export type BlogArticleType = 'guide' | 'howto' | 'advanced';
export type BlogArticleStatus = 'draft' | 'published';

export interface BlogArticleFaq {
  question: string;
  answer: string;
}

/**
 * One language version of an article. `slug` is the URL slug WITHOUT the
 * '/blog/' prefix (e.g. 'how-to-resize-image'). Bodies are trusted HTML,
 * injected verbatim — they MUST NOT contain an <h1> (the page title is the
 * one <h1>; the prerender fails the build if a second one appears) and H2/H3
 * headings need `id` attributes for the table of contents.
 *
 * ARTICLE STYLE RULE (user order, 2026-11-17): SHORT paragraphs only — a
 * blank line after every 2–3 lines, NO long paragraphs, in every language.
 * Style guide: ~/workspace/compressmypic/blog-project/article-style-guide.md
 * (Batch 3 workers must read it before writing any body).
 */
export interface BlogArticleLocaleVersion {
  slug: string;
  title: string;
  description: string;
  body: string;
  faqs: BlogArticleFaq[];
  readingMinutes: number;
}

/**
 * Per-locale content override — METADATA ONLY (perf split 2026-11-19).
 * No `slug` here — the localized slug lives in that locale's slugs.ts.
 * Bodies + FAQs live in per-article modules
 * (src/locales/<lang>/blog-bodies/<id>.ts) and load on demand through
 * src/data/blogBody.ts (loadBlogBodyLocale) — the same Tier B split the
 * English bodies got. Do NOT move bodies back here, or every blog route
 * in the language downloads all 144 articles' bodies (~660-954 KiB gzip).
 */
export interface BlogArticleLocaleOverride {
  title: string;
  description: string;
  readingMinutes: number;
}

/**
 * Article metadata — the registry entry (src/data/blogArticles.ts).
 * Bodies + FAQs live in per-article modules (src/data/blog-bodies/<id>.ts)
 * and load on demand (Tier B speed fix, 2026-11-19); the registry must
 * stay small because App.tsx imports it into the entry bundle.
 */
export interface BlogArticleMeta {
  /** Stable key, e.g. 'image-resizer-guide'. Translations link by this id. */
  id: string;
  /** Tool slug, e.g. '/image-resizer'. */
  toolSlug: string;
  categoryId: ToolCategoryId;
  type: BlogArticleType;
  status: BlogArticleStatus;
  /** ISO date, e.g. '2026-11-18'. Drives sitemap lastmod + published_time. */
  publishedAt: string;
  updatedAt?: string;
  /** The English version's metadata (slug/title/description/reading time).
   *  No body/faqs — see src/data/blogBody.ts. */
  en: {
    slug: string;
    title: string;
    description: string;
    readingMinutes: number;
  };
  /** Other tools worth linking from this article (slugs, e.g. '/image-converter'). */
  relatedToolSlugs: string[];
}

/** Resolved blog route for an EN path (parsePath normalizes every locale's
 *  URL back to its EN path first, so routing only ever sees EN paths). */
export type BlogRoute =
  | { kind: 'home' }
  | { kind: 'category'; categoryId: ToolCategoryId }
  | { kind: 'article'; articleId: string };

/** UI strings for the blog pages (one `blog` group per locale ui.ts). */
export interface BlogStrings {
  blog: string;
  homeHeading: string;
  homeSubheading: string;
  searchPlaceholder: string;
  searchNoResults: string; // contains {query}
  featuredHeading: string;
  latestHeading: string; // contains {count}
  categoriesHeading: string;
  emptyHeading: string;
  emptyText: string;
  readArticle: string;
  minRead: string; // contains {minutes}
  publishedOn: string; // contains {date}
  updatedOn: string; // contains {date}
  bylineAuthor: string;
  tableOfContents: string;
  faqHeading: string;
  relatedArticlesHeading: string;
  relatedToolsHeading: string;
  tryToolCta: string; // contains {tool}
  prevArticle: string;
  nextArticle: string;
  backToBlog: string;
  shareHeading: string;
  copyLink: string;
  copied: string;
  shareOnX: string;
  shareOnFacebook: string;
  shareOnWhatsApp: string;
  notAvailableHeading: string;
  notAvailableText: string;
  viewBlogHome: string;
  guidesHeading: string;
  categoryGuidesHeading: string; // contains {category}
  relatedArticlesForTool: string; // contains {tool}
}
