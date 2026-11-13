import React from 'react';
import { TargetSizeCompressorTool } from '../components/TargetSizeCompressorTool';
import type { PageEsStrings } from '../components/TargetSizeCompressorTool';
import type { SupportedLang } from '../locales/config';
import type { ToolDefinition } from '../data/tools';

interface Props {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
}

export const Compress200KbPage: React.FC<Props> = ({ onNavigate, lang, tool, toolRegistry, categoryLabels, esStrings }) => (
  <TargetSizeCompressorTool
    slug="/compress-image-to-200kb"
    defaultTargetKb={200}
    onNavigate={onNavigate}
    lang={lang}
    tool={tool}
    toolRegistry={toolRegistry}
    categoryLabels={categoryLabels}
    esStrings={esStrings}
  />
);
