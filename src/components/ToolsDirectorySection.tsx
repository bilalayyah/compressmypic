import React, { useState } from 'react';
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
  Crop,
  Stamp,
  Droplets,
  Type,
  Frame,
  Circle,
  Sun,
  Contrast,
  Palette,
  SlidersHorizontal,
  Layers,
  Grid,
  Printer,
  Code2,
  FileCode2,
  Film,
  LayoutGrid,
  Target,
  Gauge,
  Globe,
  Scaling,
} from 'lucide-react';
import { TOOLS_REGISTRY, TOOL_CATEGORIES, ToolCategoryId } from '../data/tools';

interface ToolsDirectorySectionProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
}

const TOOL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  '/': Minimize2,
  '/compress-image-to-50kb': Gauge,
  '/compress-image-to-100kb': Gauge,
  '/compress-image-to-200kb': Gauge,
  '/compress-image-to-500kb': Gauge,
  '/bulk-image-compressor': Layers,
  '/target-file-size-compressor': Target,
  '/bulk-image-resizer': Scaling,
  '/bulk-image-converter': RefreshCw,
  '/web-image-optimizer': Globe,
  '/gif-compressor': Film,
  '/image-resizer': Maximize2,
  '/image-converter': RefreshCw,
  '/rotate-flip-image': RotateCw,
  '/image-to-pdf': FileText,
  '/image-metadata-viewer': Eye,
  '/remove-image-metadata': ShieldOff,
  '/favicon-generator': Sparkles,
  '/image-color-picker': Pipette,
  '/image-dimensions-checker': Ruler,
  '/image-cropper': Crop,
  '/image-watermark': Stamp,
  '/blur-pixelate-image': Droplets,
  '/add-text-to-image': Type,
  '/image-border-generator': Frame,
  '/round-image-corners': Circle,
  '/image-brightness-editor': Sun,
  '/image-contrast-editor': Contrast,
  '/image-saturation-editor': Palette,
  '/image-filters': SlidersHorizontal,
  '/add-background-to-image': Layers,
  '/image-splitter': Grid,
  '/image-dpi-changer': Printer,
  '/image-to-base64': Code2,
  '/base64-to-image': FileCode2,
  '/image-color-palette-extractor': Palette,
  '/gif-maker': Film,
  '/image-collage-maker': LayoutGrid,
  '/heic-to-jpg': RefreshCw,
  '/jpg-to-png': RefreshCw,
  '/png-to-jpg': RefreshCw,
  '/jpg-to-webp': RefreshCw,
  '/webp-to-jpg': RefreshCw,
  '/png-to-webp': RefreshCw,
  '/webp-to-png': RefreshCw,
  '/svg-to-png': RefreshCw,
  '/avif-to-jpg': RefreshCw,
  '/bmp-to-jpg': RefreshCw,
};

export const ToolsDirectorySection: React.FC<ToolsDirectorySectionProps> = ({
  onNavigate,
  currentPath = '/',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ToolCategoryId>('all');

  const otherTools = TOOLS_REGISTRY.filter((t) => t.slug !== currentPath);
  const activeCategories = TOOL_CATEGORIES.filter((cat) =>
    otherTools.some((t) => t.category === cat.id)
  );
  const visibleTools =
    selectedCategory === 'all'
      ? otherTools
      : otherTools.filter((t) => t.category === selectedCategory);

  return (
    <section className="py-14 sm:py-18 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-7">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Tools ({otherTools.length})
          </button>
          {activeCategories.map((cat) => {
            const count = otherTools.filter((t) => t.category === cat.id).length;
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleTools.map((tool) => {
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
