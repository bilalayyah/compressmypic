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

interface BmpToJpgPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
}

export const BmpToJpgPage: React.FC<BmpToJpgPageProps> = ({
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
    slug="/bmp-to-jpg"
    sourceLabel="BMP"
    targetFormat="jpeg"
    accept="image/bmp,image/x-ms-bmp,.bmp"
    allowedMimeTypes={['image/bmp', 'image/x-ms-bmp']}
    allowedExtensionsRegex={/\.bmp$/i}
    supportedFormatsLabel="BMP"
    uploadTitle={t('uploadTitle', 'Drop uncompressed BMP bitmaps to convert to compact JPG')}
    defaultQuality={88}
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
