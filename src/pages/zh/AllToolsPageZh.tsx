// Simplified Chinese (zh) tool directory page — /zh/all-tools.
// Mirrors AllToolsPageJa.tsx exactly (same component shape, same props):
// App.tsx passes the active-language registry (ZH tool names +
// shortDescriptions) and categories as props, so this component never
// imports a locale file directly (keeps locale files lazy-loaded).
// Expected ZH category labels (8): 压缩 (compress), 调整尺寸 (resize),
// 转换 (convert), 裁剪与编辑 (crop-edit), AI工具 (ai-tools), 创作 (create),
// 隐私 (privacy), 开发者工具 (developer). The registry holds all 48 tools
// (home '/' excluded — it is the compressor itself).
// Search filters by Chinese tool name / shortDescription.
// 在线 is used consistently throughout the Chinese prose.

import React, { useEffect, useState } from 'react';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import type { ToolDefinition } from '../../data/tools';
import { getPastelTileClass } from '../../utils/pastel';

export interface AllToolsPageZhStrings {
  heading: string;
  subheading: string;
  searchPlaceholder: string;
  allLabel: string;
  noResults: string;
  openTool: string;
}

const ZH_STRINGS: AllToolsPageZhStrings = {
  heading: '全部工具',
  subheading:
    '使用 CompressMyPic 的 48 款免费工具，在浏览器中直接压缩、转换和编辑图片。',
  searchPlaceholder: '搜索工具…',
  allLabel: '全部',
  noResults: '没有找到同名工具。',
  openTool: '打开工具',
};

interface AllToolsPageZhProps {
  onNavigate: (path: string) => void;
  /** Active-language tool registry values (in registry order). */
  tools: ToolDefinition[];
  /** Active-language category list. */
  categories: Array<{ id: string; label: string }>;
  /** Page strings. Defaults to Chinese. */
  strings?: AllToolsPageZhStrings;
}

export const AllToolsPageZh: React.FC<AllToolsPageZhProps> = ({
  onNavigate,
  tools,
  categories,
  strings = ZH_STRINGS,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    document.title = '全部工具 – 免费在线图片工具 | CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'CompressMyPic 免费图片工具共 48 款：在线压缩、转换、裁剪与编辑图片，无需注册。');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--ink-3)] pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={strings.searchPlaceholder}
            aria-label={strings.searchPlaceholder}
            className="w-full h-11 pl-10 pr-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] shadow-[var(--shadow)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-[13px] font-semibold border transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'btn-purple-pill border-transparent shadow-xs'
                : 'rounded-full bg-[var(--surface)] text-[var(--ink-2)] border-[var(--line)] hover:border-[#7c3aed]/50 hover:text-[var(--ink)]'
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
                    : 'rounded-full bg-[var(--surface)] text-[var(--ink-2)] border-[var(--line)] hover:border-[#7c3aed]/50 hover:text-[var(--ink)]'
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleTools.map((tool, index) => {
              const cat = categories.find((c) => c.id === tool.category)?.label;
              return (
                <a
                  key={tool.slug}
                  href={tool.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(tool.slug);
                  }}
                  className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#7c3aed]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105 ${getPastelTileClass(index)}`}>
                        <Sparkles className="w-5 h-5" />
                      </div>
                      {cat && (
                        <span className="text-[11px] font-semibold text-[var(--ink-3)] bg-[var(--surface-2)] border border-[var(--line)] px-2.5 py-0.5 rounded-full">
                          {cat}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[17px] font-sans font-bold text-[var(--ink-navy)] group-hover:text-[#7c3aed] dark:group-hover:text-[#c4b5fd] transition-colors leading-snug">
                      {tool.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-[var(--ink-3)] leading-relaxed">
                      {tool.shortDescription}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7c3aed] dark:text-[#c4b5fd]">
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
