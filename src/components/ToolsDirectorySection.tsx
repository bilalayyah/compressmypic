import React from 'react';
import {
  Maximize2,
  RefreshCw,
  RotateCw,
  FileText,
  Eye,
  ShieldOff,
  Sparkles,
  Pipette,
  Ruler,
  Minimize2,
  ArrowRight,
} from 'lucide-react';
import { TOOLS_REGISTRY, TOOL_CATEGORIES } from '../data/tools';

interface ToolsDirectorySectionProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
}

const TOOL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  '/': Minimize2,
  '/image-resizer': Maximize2,
  '/image-converter': RefreshCw,
  '/rotate-flip-image': RotateCw,
  '/image-to-pdf': FileText,
  '/image-metadata-viewer': Eye,
  '/remove-image-metadata': ShieldOff,
  '/favicon-generator': Sparkles,
  '/image-color-picker': Pipette,
  '/image-dimensions-checker': Ruler,
};

export const ToolsDirectorySection: React.FC<ToolsDirectorySectionProps> = ({
  onNavigate,
  currentPath = '/',
}) => {
  const otherTools = TOOLS_REGISTRY.filter((t) => t.slug !== currentPath);

  return (
    <section className="py-14 sm:py-18 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              All Browser-Native Tools
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              More Free Image Processing Tools
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Every tool runs 100% locally in your browser — no server uploads, no signup, no watermarks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherTools.map((tool) => {
            const Icon = TOOL_ICONS[tool.slug] || Sparkles;
            const cat = TOOL_CATEGORIES.find((c) => c.id === tool.category)?.label;
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
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
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
                  <span>Open tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
