import React from 'react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToneEditorTool } from '../components/ToneEditorTool';

interface SaturationEditorPageProps {
  onNavigate: (path: string) => void;
}

export const SaturationEditorPage: React.FC<SaturationEditorPageProps> = ({ onNavigate }) => {
  return (
    <ToneEditorTool
      tool={TOOL_BY_SLUG['/image-saturation-editor']}
      mode="saturation"
      onNavigate={onNavigate}
    />
  );
};
