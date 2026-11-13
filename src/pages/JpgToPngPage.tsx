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

export const JpgToPngPage: React.FC<Props> = ({
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
      slug="/jpg-to-png"
      sourceLabel="JPG"
      targetFormat="png"
      accept="image/jpeg,image/jpg,.jpg,.jpeg"
      allowedMimeTypes={['image/jpeg', 'image/jpg']}
      allowedExtensionsRegex={/\.jpe?g$/i}
      supportedFormatsLabel="JPG, JPEG"
      uploadTitle={t('uploadTitle', 'Drop JPG or JPEG images to convert to lossless PNG')}
      defaultQuality={92}
      onNavigate={onNavigate}
      lang={lang}
      tool={tool}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
      esStrings={esStrings}
    />
  );
};
