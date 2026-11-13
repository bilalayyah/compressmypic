import React from 'react';
import { TargetSizeCompressorTool } from '../components/TargetSizeCompressorTool';
import type { PageEsStrings, PagePtStrings, PageFrStrings } from '../components/TargetSizeCompressorTool';
import type { SupportedLang } from '../locales/config';
import type { ToolDefinition } from '../data/tools';

interface Props {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
}

export const Compress500KbPage: React.FC<Props> = ({ onNavigate, lang, tool, toolRegistry, categoryLabels, esStrings, ptStrings, frStrings }) => (
  <TargetSizeCompressorTool
    slug="/compress-image-to-500kb"
    defaultTargetKb={500}
    onNavigate={onNavigate}
    lang={lang}
    tool={tool}
    toolRegistry={toolRegistry}
    categoryLabels={categoryLabels}
    esStrings={esStrings}
    ptStrings={ptStrings}
    frStrings={frStrings}
  />
);
