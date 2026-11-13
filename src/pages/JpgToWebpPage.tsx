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
export interface PageDeStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageItStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}


interface JpgToWebpPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
  deStrings?: PageDeStrings;
  itStrings?: PageItStrings;
}

export const JpgToWebpPage: React.FC<JpgToWebpPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
  deStrings,
  itStrings,
}) => {
  const t = (key: string, fallback: string) =>
    lang === 'de' && deStrings?.toolUi
      ? ((deStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'it' && itStrings?.toolUi
      ? ((itStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'pt' && ptStrings?.toolUi
      ? ((ptStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'fr' && frStrings?.toolUi
      ? ((frStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'es' && esStrings?.toolUi
      ? ((esStrings.toolUi[key] as string | undefined) ?? fallback)
      : fallback;
  return (
    <FormatConverterTool
    slug="/jpg-to-webp"
    sourceLabel="JPG"
    targetFormat="webp"
    accept="image/jpeg,image/jpg,.jpg,.jpeg"
    allowedMimeTypes={['image/jpeg', 'image/jpg']}
    allowedExtensionsRegex={/\.jpe?g$/i}
    supportedFormatsLabel="JPG, JPEG"
    uploadTitle={t('uploadTitle', 'Drop JPG images to convert to lightweight WebP')}
    defaultQuality={82}
    lang={lang}
    tool={tool}
    toolRegistry={toolRegistry}
    categoryLabels={categoryLabels}
    esStrings={esStrings}
    ptStrings={ptStrings}
    frStrings={frStrings}
    deStrings={deStrings}
    itStrings={itStrings}
    onNavigate={onNavigate}
    />
  );
};
