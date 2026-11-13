import React from 'react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { ToneEditorTool } from '../components/ToneEditorTool';

export interface PageEsStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface SaturationEditorPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
}

export const SaturationEditorPage: React.FC<SaturationEditorPageProps> = ({ onNavigate, lang, tool, toolRegistry, categoryLabels, esStrings }) => {
  return (
    <ToneEditorTool
      tool={tool ?? TOOL_BY_SLUG['/image-saturation-editor']}
      mode="saturation"
      lang={lang}
      esStrings={esStrings}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
      onNavigate={onNavigate}
    />
  );
};
