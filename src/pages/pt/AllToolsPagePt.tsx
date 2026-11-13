// Portuguese tool directory page — /pt/todas-as-ferramentas.
// Target path in the repo: src/pages/pt/AllToolsPagePt.tsx (NEW file).
// Renders ALL tools from the active-language registry (Portuguese names from
// TOOL_BY_SLUG_PT / TOOL_CATEGORIES_PT; English fallback names for any tool
// without a Portuguese entry until its translation lands), grouped by
// category, with working search + category filter. App.tsx passes the
// registry/categories as props so this component never imports a locale file
// directly (keeps locale files lazy-loaded). Strings default to Portuguese
// (this is the Portuguese directory page). SEO (title/description/canonical/
// hreflang) is set by App.tsx's SEO effect for this route — not here.

import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import type { ToolDefinition } from '../../data/tools';

export interface AllToolsPageStrings {
  heading: string;
  subheading: string;
  searchPlaceholder: string;
  allLabel: string;
  noResults: string;
  openTool: string;
}

const PT_STRINGS: AllToolsPageStrings = {
  heading: 'Todas as ferramentas',
  subheading:
    'As 48 ferramentas grátis do CompressMyPic para comprimir, converter e editar imagens, diretamente no seu navegador.',
  searchPlaceholder: 'Buscar ferramentas…',
  allLabel: 'Todas',
  noResults: 'Nenhuma ferramenta encontrada com esse nome.',
  openTool: 'Abrir ferramenta',
};

interface AllToolsPagePtProps {
  onNavigate: (path: string) => void;
  /** Active-language tool registry values (in registry order). */
  tools: ToolDefinition[];
  /** Active-language category list. */
  categories: Array<{ id: string; label: string }>;
  /** Page strings. Defaults to Portuguese. */
  strings?: AllToolsPageStrings;
}

export const AllToolsPagePt: React.FC<AllToolsPagePtProps> = ({
  onNavigate,
  tools,
  categories,
  strings = PT_STRINGS,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const q = query.trim().toLowerCase();
  const visibleTools = tools.filter((t) => {
    if (selectedCategory !== 'all' && t.category !== selectedCategory) return false;
    if (!q) return true;
    return (
      t.name.toLowerCase().includes(q) ||
      t.shortDescription.toLowerCase().includes(q)
    );
  });

  const activeCategories = categories.filter((cat) =>
    tools.some((t) => t.category === cat.id)
  );

  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
          {strings.heading}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {strings.subheading}
        </p>

        <div className="mt-6 max-w-xl mx-auto relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={strings.searchPlaceholder}
            aria-label={strings.searchPlaceholder}
            className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {strings.allLabel} ({tools.length})
          </button>
          {activeCategories.map((cat) => {
            const count = tools.filter((t) => t.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
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
          <p className="text-center text-sm text-slate-600 py-10">{strings.noResults}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleTools.map((tool) => {
              const cat = categories.find((c) => c.id === tool.category)?.label;
              return (
                <a
                  key={tool.slug}
                  href={tool.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(tool.slug);
                  }}
                  className="group bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {cat && (
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {cat}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-normal">
                      {tool.shortDescription}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                    <span>{strings.openTool}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
