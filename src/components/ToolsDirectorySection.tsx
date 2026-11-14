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
  Scissors,
  ZoomIn,
} from 'lucide-react';
import { TOOLS_REGISTRY, TOOL_CATEGORIES, ToolCategoryId, ToolDefinition } from '../data/tools';
import { getPastelTileClass } from '../utils/pastel';

interface ToolsDirectoryStrings {
  eyebrow: string;
  heading: string;
  subheading: string;
  allTools: string; // 'All Tools' filter label
  openTool: string; // 'Open tool' card link label
}

interface ToolsDirectorySectionProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
  toolsRegistry?: ToolDefinition[];
  categoryLabels?: Array<{ id: string; label: string }>;
  strings?: ToolsDirectoryStrings;
}

const DEFAULT_STRINGS: ToolsDirectoryStrings = {
  eyebrow: 'All Browser-Native Tools',
  heading: 'More Free Image Processing Tools',
  subheading: 'Every tool runs 100% locally in your browser — no server uploads, no signup, no watermarks.',
  allTools: 'All Tools',
  openTool: 'Open tool',
};

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
  '/remove-background': Scissors,
  '/image-upscaler': ZoomIn,
};

export const ToolsDirectorySection: React.FC<ToolsDirectorySectionProps> = ({
  onNavigate,
  currentPath = '/',
  toolsRegistry = TOOLS_REGISTRY,
  categoryLabels = TOOL_CATEGORIES,
  strings = DEFAULT_STRINGS,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ToolCategoryId>('all');

  const otherTools = toolsRegistry.filter((t) => t.slug !== '/' && t.slug !== currentPath);
  const activeCategories = categoryLabels.filter((cat) =>
    otherTools.some((t) => t.category === cat.id)
  );
  const visibleTools =
    selectedCategory === 'all'
      ? otherTools
      : otherTools.filter((t) => t.category === selectedCategory);

  return (
    <section id="tools-directory" className="py-16 sm:py-20 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c3aed] dark:text-[#c4b5fd]">
              {strings.eyebrow}
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              {strings.heading}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[var(--ink-3)]">
              {strings.subheading}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-[13px] font-semibold border transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'btn-purple-pill border-transparent shadow-xs'
                : 'rounded-full bg-[var(--surface)] text-[var(--ink-2)] border-[var(--line)] hover:border-[#7c3aed]/50 hover:text-[var(--ink)]'
            }`}
          >
            {strings.allTools} ({otherTools.length})
          </button>
          {activeCategories.map((cat) => {
            const count = otherTools.filter((t) => t.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as ToolCategoryId)}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleTools.map((tool, index) => {
            const Icon = TOOL_ICONS[tool.slug] || Sparkles;
            const cat = categoryLabels.find((c) => c.id === tool.category)?.label;
            const tileClass = getPastelTileClass(index);
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
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105 ${tileClass}`}
                    >
                      <Icon className="w-5 h-5" />
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
                  <p className="mt-1.5 text-sm text-[var(--ink-3)] leading-relaxed line-clamp-2">
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
      </div>
    </section>
  );
};
