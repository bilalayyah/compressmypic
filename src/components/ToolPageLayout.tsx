import React, { useState } from 'react';
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

interface ToolPageLayoutProps {
  tool: ToolDefinition;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

export const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({
  tool,
  onNavigate,
  children,
}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const categoryLabel =
    TOOL_CATEGORIES.find((c) => c.id === tool.category)?.label || 'Tools';

  const relatedTools = tool.relatedSlugs
    .map((slug) => TOOL_BY_SLUG[slug])
    .filter((t): t is ToolDefinition => Boolean(t));

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero / Page Header */}
      <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 px-4 max-w-5xl mx-auto text-center">
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
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-600">{categoryLabel}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{tool.name}</span>
        </nav>

        {/* Privacy Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-5">
          <Lock className="w-3.5 h-3.5 text-blue-600" />
          <span>100% Private Browser Processing · Files Never Leave Your Device</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
          {tool.h1}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {tool.subtitle}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>No server uploads</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
            ·
          </span>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Free · No signup · No watermark</span>
          </div>
        </div>
      </section>

      {/* Main Tool Workspace */}
      <section className="max-w-5xl w-full mx-auto px-4 sm:px-6 pb-14">
        {children}
      </section>

      {/* Reserved Non-Intrusive Ad Slot (Below tool workspace, never over buttons/controls) */}
      <div className="px-4">
        <AdSlot slotId={`tool-${tool.slug.replace(/\//g, '')}-mid`} format="horizontal" />
      </div>

      {/* How to Use Section */}
      {tool.howToSteps.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How to Use {tool.name}
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Complete your task in three quick steps — right inside your browser.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {tool.howToSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs"
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
        <section className="py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Use CompressMyPic {tool.name}?
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tool.features.map((feat) => (
                <div
                  key={feat.title}
                  className="bg-slate-50/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-5"
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
        <section className="py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {tool.name} — Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-3">
              {tool.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
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
              Related Free Image Tools
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
                  className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all"
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
