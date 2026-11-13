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

interface Props {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
}

export const PngToJpgPage: React.FC<Props> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
}) => {
  const t = (key: string, fallback: string) =>
    lang === 'es' && esStrings?.toolUi ? (esStrings.toolUi[key] as string | undefined) ?? fallback : fallback;

  return (
    <FormatConverterTool
      slug="/png-to-jpg"
      sourceLabel="PNG"
      targetFormat="jpeg"
      accept="image/png,.png"
      allowedMimeTypes={['image/png']}
      allowedExtensionsRegex={/\.png$/i}
      supportedFormatsLabel="PNG"
      uploadTitle={t('uploadTitle', 'Drop PNG files to convert to smaller JPG')}
      defaultQuality={88}
      showBackgroundColor
      onNavigate={onNavigate}
      lang={lang}
      tool={tool}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
      esStrings={esStrings}
    />
  );
};
