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

interface AvifToJpgPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
}

export const AvifToJpgPage: React.FC<AvifToJpgPageProps> = ({
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
    slug="/avif-to-jpg"
    sourceLabel="AVIF"
    targetFormat="jpeg"
    accept="image/avif,.avif"
    allowedMimeTypes={['image/avif']}
    allowedExtensionsRegex={/\.avif$/i}
    supportedFormatsLabel="AVIF"
    uploadTitle={t('uploadTitle', 'Drop AVIF images to convert to universal JPG')}
    defaultQuality={88}
    showBackgroundColor
    notice={t('notice', 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.')}
    noticeTone="info"
    decodeErrorHint={t('errorCouldNotDecode', 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.')}
    lang={lang}
    tool={tool}
    toolRegistry={toolRegistry}
    categoryLabels={categoryLabels}
    esStrings={esStrings}
    onNavigate={onNavigate}
    />
  );
};
