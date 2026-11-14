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
import { getPastelCardClass, getPastelTileClass } from '../utils/pastel';

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
    <div className="bg-[var(--bg)]">
      {/* Left-Aligned Tool Page Header */}
      <section className="pt-8 pb-6 sm:pt-11 sm:pb-8 px-4 sm:px-6 max-w-[1180px] mx-auto text-left">
        {/* Grey Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-start gap-1.5 text-xs font-medium text-[var(--ink-3)] mb-4 flex-wrap"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="text-[var(--ink-3)] hover:text-[#7c3aed] transition-colors"
          >
            {ui.home}
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-3)]" />
          <span className="text-[var(--ink-3)]">{categoryLabel}</span>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-3)]" />
          <span className="text-[var(--ink-navy)] font-semibold">{tool.name}</span>
        </nav>

        {/* Category Pill + Runs Locally in Browser */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] dark:bg-[#7c3aed]/25 border border-[#ddd6fe] dark:border-[#8b5cf6]/35 text-[#6d28d9] dark:text-[#ddd6fe] text-xs font-semibold">
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--ink-3)]">
            <Lock className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#c4b5fd]" />
            <span>{ui.privacyPill}</span>
          </span>
        </div>

        {/* Left-Aligned Bold Near-Black Navy Sans H1 */}
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] text-balance leading-[1.12] max-w-4xl">
          {tool.h1}
        </h1>
        <p className="mt-3.5 text-base sm:text-lg text-[var(--ink-3)] max-w-3xl leading-relaxed">
          {tool.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-[var(--ink-3)] font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
            <span>{ui.noUploads}</span>
          </div>
          <span aria-hidden="true" className="text-[var(--line-strong)] hidden sm:inline">
            ·
          </span>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#7c3aed] dark:text-[#c4b5fd]" />
            <span>{ui.freeNote}</span>
          </div>
        </div>
      </section>

      {/* Main Tool Workspace */}
      <section className="max-w-[1180px] w-full mx-auto px-4 sm:px-6 pb-14">
        {children}
      </section>

      {/* Reserved Non-Intrusive Ad Slot */}
      <div className="px-4">
        <AdSlot slotId={`tool-${tool.slug.replace(/\//g, '')}-mid`} format="horizontal" />
      </div>

      {/* How to Use Section: Numbered Step Cards Cycling Pastel Palettes */}
      {tool.howToSteps.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-[var(--line)] bg-[var(--bg-soft)]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[var(--ink-navy)] tracking-[-0.02em]">
              {ui.howToTitle.replace('{name}', tool.name)}
            </h2>
            <p className="mt-2 text-base text-[var(--ink-3)] max-w-2xl">{ui.howToIntro}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {tool.howToSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`border rounded-2xl p-5 shadow-[var(--shadow)] flex flex-col gap-3 items-start ${getPastelCardClass(index * 2)}`}
                >
                  <span className="w-8 h-8 rounded-lg btn-purple-grad font-mono font-bold text-sm flex items-center justify-center shadow-xs shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-bold text-[var(--ink-navy)]">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-[var(--ink-2)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Capabilities & Privacy: Light Blue/Purple Pastel Cards with Purple Checkmarks */}
      {tool.features.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-[var(--line)] bg-[var(--bg)]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[var(--ink-navy)] tracking-[-0.02em]">
              {ui.featuresTitle.replace('{name}', tool.name)}
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tool.features.map((feat, idx) => (
                <div
                  key={feat.title}
                  className={`border rounded-2xl p-5 shadow-[var(--shadow)] ${idx % 2 === 0 ? 'pastel-card-0' : 'pastel-card-2'}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7c3aed] dark:text-[#c4b5fd] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-sans text-base font-bold text-[var(--ink-navy)]">{feat.title}</h3>
                      <p className="mt-1.5 text-sm text-[var(--ink-2)] leading-relaxed">
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

      {/* Tool-Specific FAQ Section: Full Cycling Pastel Gradient FAQ Cards */}
      {tool.faqs.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-[var(--line)] bg-[var(--bg-soft)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[var(--ink-navy)] tracking-[-0.02em]">
              {ui.faqTitle.replace('{name}', tool.name)}
            </h2>
            <div className="mt-6 space-y-3">
              {tool.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={faq.question}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-white/30 dark:hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
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

      {/* Related Tools: White Cards with Pastel Tile & Open tool link */}
      {relatedTools.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-[var(--line)] bg-[var(--bg)]">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
            <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-[var(--ink-navy)] tracking-[-0.02em]">
              {ui.relatedTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((rel, idx) => (
                <a
                  key={rel.slug}
                  href={rel.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(rel.slug);
                  }}
                  className="group flex items-start justify-between gap-4 p-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] hover:border-[#7c3aed]/40 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span className={`w-9 h-9 rounded-lg ${getPastelTileClass(idx * 2)} flex items-center justify-center shrink-0 text-xs font-bold`}>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-sans text-base font-bold text-[var(--ink-navy)] group-hover:text-[#7c3aed] dark:group-hover:text-[#c4b5fd] transition-colors">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-[var(--ink-3)] mt-1 leading-relaxed">{rel.shortDescription}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
