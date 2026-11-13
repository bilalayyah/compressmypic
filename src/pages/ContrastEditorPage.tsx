import React from 'react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToneEditorTool } from '../components/ToneEditorTool';

interface ContrastEditorPageProps {
  onNavigate: (path: string) => void;
}

export const ContrastEditorPage: React.FC<ContrastEditorPageProps> = ({ onNavigate }) => {
  return (
    <ToneEditorTool
      tool={TOOL_BY_SLUG['/image-contrast-editor']}
      mode="contrast"
      onNavigate={onNavigate}
    />
  );
};
