// English tool directory page — /all-tools (audit P2-4).
// Follows the existing 10 locale hub pages (e.g. AllToolsPageEs):
// renders ALL tools from the registry, grouped by category, with
// working search + category filter. App.tsx passes the
// registry/categories as props so this component never imports a
// locale file directly. SEO (title/description/canonical/hreflang)
// is set by App.tsx's SEO effect for this route — not here.
// NOTE: the route itself is NOT wired yet — see blog-seo-notes.md
// (App.tsx lazy import + router branch + SEO effect + page map +
// sitemap entry are routing-worker work; this file is the page).

import React, { useState } from 'react';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import type { ToolMeta, ToolCategoryId } from '../data/toolsMeta';
import { CategoryGuides } from '../components/blog/CategoryGuides';
import { getPastelTileClass } from '../utils/pastel';
import { localizePath } from '../locales/alternates';

export interface AllToolsPageStrings {
  heading: string;
  subheading: string;
  searchPlaceholder: string;
  allLabel: string;
  noResults: string;
  openTool: string;
}

const EN_STRINGS: AllToolsPageStrings = {
  heading: 'All Image Tools',
  subheading:
    'All 47 free CompressMyPic tools to compress, convert, and edit images, right in your browser.',
  searchPlaceholder: 'Search tools…',
  allLabel: 'All',
  noResults: 'No tools found with that name.',
  openTool: 'Open tool',
};

interface AllToolsPageProps {
  onNavigate: (path: string) => void;
  /** Active-language tool registry values (in registry order). */
  tools: ToolMeta[];
  /** Active-language category list. */
  categories: Array<{ id: string; label: string }>;
  /** Page strings. Defaults to English. */
  strings?: AllToolsPageStrings;
}

export const AllToolsPage: React.FC<AllToolsPageProps> = ({
  onNavigate,
  tools,
  categories,
  strings = EN_STRINGS,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const q = query.trim().toLowerCase();
  const catalogTools = tools.filter((t) => t.slug !== '/');
  const visibleTools = catalogTools.filter((t) => {
    if (selectedCategory !== 'all' && t.category !== selectedCategory) return false;
    if (!q) return true;
    return (
      t.name.toLowerCase().includes(q) ||
      t.shortDescription.toLowerCase().includes(q)
    );
  });

  const activeCategories = categories.filter((cat) =>
    catalogTools.some((t) => t.category === cat.id)
  );

  return (
    <div className="bg-[var(--bg)]">
      <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight text-balance leading-tight">
          {strings.heading}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--ink-3)] max-w-2xl mx-auto leading-relaxed">
          {strings.subheading}
        </p>

        <div className="mt-6 max-w-xl mx-auto relative">
          <Search className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-[var(--ink-3)] pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={strings.searchPlaceholder}
            aria-label={strings.searchPlaceholder}
            className="w-full h-11 ps-10 pe-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] shadow-[var(--shadow)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
          />
        </div>

        <div id="categories" className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-[13px] font-semibold border transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'btn-purple-pill border-transparent shadow-xs'
                : 'rounded-full bg-[var(--surface)] text-[var(--ink-2)] border-[var(--line)] hover:border-[#dc2626]/50 hover:text-[var(--ink)]'
            }`}
          >
            {strings.allLabel} ({catalogTools.length})
          </button>
          {activeCategories.map((cat) => {
            const count = catalogTools.filter((t) => t.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[13px] font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'btn-purple-pill border-transparent shadow-xs'
                    : 'rounded-full bg-[var(--surface)] text-[var(--ink-2)] border-[var(--line)] hover:border-[#dc2626]/50 hover:text-[var(--ink)]'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        {visibleTools.length === 0 ? (
          <p className="text-center text-sm text-[var(--ink-2)] py-10">{strings.noResults}</p>
        ) : !q && selectedCategory === 'all' ? (
          <div className="space-y-10">
            {activeCategories.map((cat) => {
              const catTools = catalogTools.filter((t) => t.category === cat.id);
              if (catTools.length === 0) return null;
              return (
                <div key={cat.id}>
                  <h2 className="text-2xl font-sans font-bold text-[var(--ink-navy)] mb-5">
                    {cat.label} ({catTools.length})
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {catTools.map((tool) => {
                      const index = catalogTools.indexOf(tool);
                      const catLabel = categories.find((c) => c.id === tool.category)?.label;
                      return (
                        <a
                          key={tool.slug}
                          href={localizePath(tool.slug, 'en')}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(tool.slug);
                          }}
                          className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#dc2626]/40 transition-all duration-200 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3.5">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105 ${getPastelTileClass(index)}`}>
                                <Sparkles className="w-5 h-5" />
                              </div>
                              {catLabel && (
                                <span className="text-xs font-semibold text-[var(--ink-3)] bg-[var(--surface-2)] border border-[var(--line)] px-2.5 py-0.5 rounded-full">
                                  {catLabel}
                                </span>
                              )}
                            </div>
                            <h3 className="text-[17px] font-sans font-bold text-[var(--ink-navy)] group-hover:text-[#dc2626] dark:group-hover:text-[#fca5a5] transition-colors leading-snug">
                              {tool.name}
                            </h3>
                            <p className="mt-1.5 text-sm text-[var(--ink-3)] leading-relaxed">
                              {tool.shortDescription}
                            </p>
                          </div>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#dc2626] dark:text-[#fca5a5]">
                            <span>{strings.openTool}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:rotate-180 transition-transform" />
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleTools.map((tool) => {
              const index = catalogTools.indexOf(tool);
              const catLabel = categories.find((c) => c.id === tool.category)?.label;
              return (
                <a
                  key={tool.slug}
                  href={localizePath(tool.slug, 'en')}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(tool.slug);
                  }}
                  className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#dc2626]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105 ${getPastelTileClass(index)}`}>
                        <Sparkles className="w-5 h-5" />
                      </div>
                      {catLabel && (
                        <span className="text-xs font-semibold text-[var(--ink-3)] bg-[var(--surface-2)] border border-[var(--line)] px-2.5 py-0.5 rounded-full">
                          {catLabel}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[17px] font-sans font-bold text-[var(--ink-navy)] group-hover:text-[#dc2626] dark:group-hover:text-[#fca5a5] transition-colors leading-snug">
                      {tool.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-[var(--ink-3)] leading-relaxed">
                      {tool.shortDescription}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#dc2626] dark:text-[#fca5a5]">
                    <span>{strings.openTool}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:rotate-180 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        )}
        {selectedCategory !== 'all' ? (
          <CategoryGuides
            categoryId={selectedCategory as ToolCategoryId}
            lang="en"
            categories={categories}
          />
        ) : null}
      </section>
    </div>
  );
};
