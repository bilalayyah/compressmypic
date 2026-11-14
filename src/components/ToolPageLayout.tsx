// ToolPageLayout — multilingual replacement.
// Target path in the repo: src/components/ToolPageLayout.tsx (REPLACE the whole file).
// Changes vs the English original:
//  - New optional props: lang, ui (layout chrome strings), canonicalPath (the actual
//    URL path of the page, e.g. '/es/redimensionar-imagenes'), alternates (hreflang
//    alternates computed by App.tsx), toolRegistry + categoryLabels (the active
//    language's registry, for related tools + category label). English behaviour is
//    unchanged when the new props are omitted.
//  - SEO effect: canonical / og:url / JSON-LD url use canonicalPath (self-referencing
//    per language — never canonicalize a localized page to English). hreflang
//    <link rel="alternate"> tags are written from `alternates` (incl. x-default) and
//    removed on cleanup. JSON-LD HowTo/FAQPage names use the localized templates.
//  - The tool's `slug` stays the ENGLISH slug in every language's registry (it is the
//    lookup key); App.tsx's handleNavigate translates English slugs to the current
//    language's slug when navigating (breadcrumb + related tools), so this component
//    keeps calling onNavigate with English slugs exactly as before.

import React, { useEffect, useState } from 'react';
import {
  ChevronRight,
  Lock,
  ShieldCheck,
  Zap,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ToolDefinition, TOOL_BY_SLUG, TOOL_CATEGORIES } from '../data/tools';
import { AdSlot } from './AdSlot';
import type { SupportedLang } from '../locales/config';
import { getOgLocale, getOgLocaleAlternates } from '../locales/alternates';

export interface ToolPageLayoutStrings {
  home: string;
  privacyPill: string;
  noUploads: string;
  freeNote: string;
  howToTitle: string; // contains {name}
  howToIntro: string;
  featuresTitle: string; // contains {name}
  faqTitle: string; // contains {name}
  relatedTitle: string;
}

const EN_STRINGS: ToolPageLayoutStrings = {
  home: 'Home',
  privacyPill: '100% Private Browser Processing · Files Never Leave Your Device',
  noUploads: 'No server uploads',
  freeNote: 'Free · No signup · No watermark',
  howToTitle: 'How to Use {name}',
  howToIntro: 'Follow these simple steps to complete your task — right inside your browser.',
  featuresTitle: 'Why Use CompressMyPic {name}?',
  faqTitle: '{name} — Frequently Asked Questions',
  relatedTitle: 'Related Free Image Tools',
};

export interface HreflangAlternate {
  lang: string; // 'en' | 'es' | 'pt' | ... | 'x-default'
  href: string; // absolute URL
}

interface ToolPageLayoutProps {
  tool: ToolDefinition;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
  /** Active language. Defaults to 'en'. */
  lang?: SupportedLang;
  /** Layout chrome strings for the active language. Defaults to English. */
  ui?: ToolPageLayoutStrings;
  /** Actual URL path of this page (localized slug when translated). Defaults to tool.slug. */
  canonicalPath?: string;
  /** hreflang alternates (all existing language versions + x-default), absolute URLs. */
  alternates?: HreflangAlternate[];
  /** Active language's tool registry (for related tools). Defaults to the English registry. */
  toolRegistry?: Record<string, ToolDefinition>;
  /** Active language's category list (for the breadcrumb label). Defaults to English. */
  categoryLabels?: Array<{ id: string; label: string }>;
}

export const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({
  tool,
  onNavigate,
  children,
  lang = 'en',
  ui = EN_STRINGS,
  canonicalPath,
  alternates,
  toolRegistry = TOOL_BY_SLUG,
  categoryLabels = TOOL_CATEGORIES,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const categoryLabel =
    categoryLabels.find((c) => c.id === tool.category)?.label || 'Tools';

  const relatedTools = tool.relatedSlugs
    .map((slug) => toolRegistry[slug])
    .filter((t): t is ToolDefinition => Boolean(t));

  const pagePath = canonicalPath ?? tool.slug;
  const canonicalUrl = `https://compressmypic.online${pagePath === '/' ? '/' : pagePath}`;

  useEffect(() => {
    const seoTitle = tool.seoTitle;
    const seoDescription = tool.seoDescription;

    const prevTitle = document.title;
    document.title = seoTitle;

    const restorableAttrs: Array<{ el: Element; attr: string; prev: string | null }> = [];
    const createdElements: Element[] = [];

    const setMetaTag = (
      selector: string,
      attrKey: 'name' | 'property',
      attrVal: string,
      content: string,
      preserveIfExists = false
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrVal);
        el.setAttribute('content', content);
        document.head.appendChild(el);
        createdElements.push(el);
      } else if (!preserveIfExists) {
        restorableAttrs.push({ el, attr: 'content', prev: el.getAttribute('content') });
        el.setAttribute('content', content);
      }
    };

    const setCanonicalLink = (href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        el.setAttribute('href', href);
        document.head.appendChild(el);
        createdElements.push(el);
      } else {
        restorableAttrs.push({ el, attr: 'href', prev: el.getAttribute('href') });
        el.setAttribute('href', href);
      }
    };

    const setHreflangLinks = (items: HreflangAlternate[]) => {
      for (const item of items) {
        let el = document.head.querySelector<HTMLLinkElement>(
          `link[rel="alternate"][hreflang="${item.lang}"]`
        );
        if (!el) {
          el = document.createElement('link');
          el.setAttribute('rel', 'alternate');
          el.setAttribute('hreflang', item.lang);
          el.setAttribute('href', item.href);
          document.head.appendChild(el);
          createdElements.push(el);
        } else {
          restorableAttrs.push({ el, attr: 'href', prev: el.getAttribute('href') });
          el.setAttribute('href', item.href);
        }
      }
    };

    // Phase 7 (F1): og:locale — UPDATE the existing tag, never duplicate it,
    // and replace the whole og:locale:alternate set (10 others). Same logic
    // as App.tsx; both use getOgLocale()/getOgLocaleAlternates().
    const setOgLocaleTags = (locale: string, alternateLocales: string[]) => {
      let el = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', 'og:locale');
        el.setAttribute('content', locale);
        document.head.appendChild(el);
        createdElements.push(el);
      } else {
        restorableAttrs.push({ el, attr: 'content', prev: el.getAttribute('content') });
        el.setAttribute('content', locale);
      }
      document
        .head
        .querySelectorAll('meta[property="og:locale:alternate"]')
        .forEach((old) => old.remove());
      for (const alt of alternateLocales) {
        const altEl = document.createElement('meta');
        altEl.setAttribute('property', 'og:locale:alternate');
        altEl.setAttribute('content', alt);
        document.head.appendChild(altEl);
        createdElements.push(altEl);
      }
    };

    setMetaTag('meta[name="description"]', 'name', 'description', seoDescription);
    setCanonicalLink(canonicalUrl);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', seoTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', seoDescription);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag(
      'meta[property="og:image"]',
      'property',
      'og:image',
      'https://compressmypic.online/og-image.png',
      true
    );
    // Phase 7 (F1+F3): per-language og:locale (+10 alternates) and localized
    // image alt text. The image stays the single shared branded og-image.png;
    // the alt is the page's localized seoTitle, never an English fallback.
    setOgLocaleTags(getOgLocale(lang), getOgLocaleAlternates(lang));
    setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', seoTitle);

    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image', true);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seoTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seoDescription);
    setMetaTag(
      'meta[name="twitter:image"]',
      'name',
      'twitter:image',
      'https://compressmypic.online/og-image.png',
      true
    );
    setMetaTag('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', seoTitle);

    if (alternates && alternates.length > 0) {
      setHreflangLinks(alternates);
    }

    return () => {
      document.title = prevTitle;
      for (const item of restorableAttrs) {
        if (item.prev === null) {
          item.el.removeAttribute(item.attr);
        } else {
          item.el.setAttribute(item.attr, item.prev);
        }
      }
      for (const el of createdElements) {
        el.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tool, canonicalUrl, alternates, lang]);

  useEffect(() => {
    const slugKey = pagePath.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'home';
    const scriptId = `tool-${slugKey}-jsonld`;

    const graph: Record<string, unknown>[] = [];
    if (tool.howToSteps.length > 0) {
      graph.push({
        '@type': 'HowTo',
        name: ui.howToTitle.replace('{name}', tool.name),
        description: tool.subtitle || tool.seoDescription,
        url: canonicalUrl,
        step: tool.howToSteps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.title,
          text: s.description,
        })),
      });
    }
    if (tool.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        name: ui.faqTitle.replace('{name}', tool.name),
        url: canonicalUrl,
        mainEntity: tool.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    if (graph.length === 0) return;

    const prev = document.getElementById(scriptId);
    if (prev) prev.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tool, canonicalUrl, pagePath, ui]);

  return (
    <div className="cmp-tool-page bg-white dark:bg-slate-950">
      {/* Hero / Page Header */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-12 px-4 max-w-6xl mx-auto text-center">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500 mb-5 flex-wrap"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="hover:text-violet-600 transition-colors"
          >
            {ui.home}
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-600">{categoryLabel}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{tool.name}</span>
        </nav>

        {/* Privacy Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs sm:text-sm font-semibold mb-7 shadow-[0_8px_28px_rgba(118,84,232,0.08)]">
          <Lock className="w-3.5 h-3.5 text-blue-600" />
          <span>{ui.privacyPill}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#21183d] via-[#6844d9] to-[#d45cce] bg-clip-text text-transparent tracking-[-0.04em] text-balance leading-[1.08]">
          {tool.h1}
        </h1>
        <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {tool.subtitle}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{ui.noUploads}</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
            ·
          </span>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>{ui.freeNote}</span>
          </div>
        </div>
      </section>

      {/* Main Tool Workspace */}
      <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 pb-16">
        <div className="cmp-tool-workspace relative isolate">
          {children}
        </div>
      </section>

      {/* Reserved Non-Intrusive Ad Slot (Below tool workspace, never over buttons/controls) */}
      <div className="px-4">
        <AdSlot slotId={`tool-${tool.slug.replace(/\//g, '')}-mid`} format="horizontal" />
      </div>

      {/* How to Use Section */}
      {tool.howToSteps.length > 0 && (
        <section className="py-16 sm:py-20 border-t border-violet-100 dark:border-slate-800 bg-[#faf9ff] dark:bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {ui.howToTitle.replace('{name}', tool.name)}
            </h2>
            <p className="mt-2 text-base text-slate-600">{ui.howToIntro}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {tool.howToSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-white border border-violet-100 rounded-2xl p-6 shadow-[0_10px_35px_rgba(40,20,90,0.05)]"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-sm font-extrabold mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Capabilities & Privacy */}
      {tool.features.length > 0 && (
        <section className="py-16 sm:py-20 border-t border-violet-100 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {ui.featuresTitle.replace('{name}', tool.name)}
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tool.features.map((feat) => (
                <div
                  key={feat.title}
                  className="bg-white dark:bg-slate-800/80 border border-violet-100 dark:border-slate-700 rounded-2xl p-6 shadow-[0_10px_35px_rgba(40,20,90,0.04)]"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tool-Specific FAQ Section */}
      {tool.faqs.length > 0 && (
        <section className="py-16 sm:py-20 border-t border-violet-100 dark:border-slate-800 bg-[#faf9ff] dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {ui.faqTitle.replace('{name}', tool.name)}
            </h2>
            <div className="mt-6 space-y-3">
              {tool.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-violet-100 rounded-2xl overflow-hidden bg-white shadow-[0_8px_28px_rgba(40,20,90,0.04)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-slate-50/50 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Tools Internal Linking */}
      {relatedTools.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {ui.relatedTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((rel) => (
                <a
                  key={rel.slug}
                  href={rel.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(rel.slug);
                  }}
                  className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-violet-100 bg-white hover:border-violet-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-2xl"
                >
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">{rel.shortDescription}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
