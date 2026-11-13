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

export interface PagePtStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageFrStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface WebpToJpgPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
}

export const WebpToJpgPage: React.FC<WebpToJpgPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
}) => {
  const t = (key: string, fallback: string) =>
    lang === 'pt' && ptStrings?.toolUi
      ? ((ptStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'fr' && frStrings?.toolUi
      ? ((frStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'es' && esStrings?.toolUi
      ? ((esStrings.toolUi[key] as string | undefined) ?? fallback)
      : fallback;
  return (
    <FormatConverterTool
    slug="/webp-to-jpg"
    sourceLabel="WebP"
    targetFormat="jpeg"
    accept="image/webp,.webp"
    allowedMimeTypes={['image/webp']}
    allowedExtensionsRegex={/\.webp$/i}
    supportedFormatsLabel="WebP"
    uploadTitle={t('uploadTitle', 'Drop WebP images to convert to universal JPG')}
    defaultQuality={88}
    showBackgroundColor
    lang={lang}
    tool={tool}
    toolRegistry={toolRegistry}
    categoryLabels={categoryLabels}
    esStrings={esStrings}
    ptStrings={ptStrings}
    frStrings={frStrings}
    onNavigate={onNavigate}
    />
  );
};
