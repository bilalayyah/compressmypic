import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';

export interface PageEsStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface SvgToPngPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
}

export const SvgToPngPage: React.FC<SvgToPngPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
}) => {
  const t = (key: string, fallback: string) =>
    lang === 'es' && esStrings?.toolUi
      ? ((esStrings.toolUi[key] as string | undefined) ?? fallback)
      : fallback;
  return (
    <FormatConverterTool
    slug="/svg-to-png"
    sourceLabel="SVG"
    targetFormat="png"
    accept="image/svg+xml,.svg"
    allowedMimeTypes={['image/svg+xml']}
    allowedExtensionsRegex={/\.svg$/i}
    supportedFormatsLabel="SVG"
    uploadTitle={t('uploadTitle', 'Drop SVG vector files to rasterize to PNG')}
    defaultQuality={92}
    allowSvgScale
    notice={t('notice', 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.')}
    noticeTone="warning"
    decodeErrorHint={t('errorCouldNotDecode', 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.')}
    lang={lang}
    tool={tool}
    toolRegistry={toolRegistry}
    categoryLabels={categoryLabels}
    esStrings={esStrings}
    onNavigate={onNavigate}
    />
  );
};
