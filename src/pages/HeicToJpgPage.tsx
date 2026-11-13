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

export const HeicToJpgPage: React.FC<Props> = ({
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
      slug="/heic-to-jpg"
      sourceLabel="HEIC"
      targetFormat="jpeg"
      accept="image/heic,image/heif,.heic,.heif"
      allowedMimeTypes={['image/heic', 'image/heif']}
      allowedExtensionsRegex={/\.(heic|heif)$/i}
      supportedFormatsLabel="HEIC, HEIF"
      uploadTitle={t('uploadTitle', 'Drop iPhone HEIC or HEIF photos to convert to JPG')}
      defaultQuality={90}
      notice={t(
        'notice',
        'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
      )}
      noticeTone="info"
      decodeErrorHint={t(
        'errorDecodeHint',
        'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
      )}
      onNavigate={onNavigate}
      lang={lang}
      tool={tool}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
      esStrings={esStrings}
    />
  );
};
