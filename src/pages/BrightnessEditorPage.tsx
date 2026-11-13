import React from 'react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToneEditorTool } from '../components/ToneEditorTool';

interface BrightnessEditorPageProps {
  onNavigate: (path: string) => void;
}

export const BrightnessEditorPage: React.FC<BrightnessEditorPageProps> = ({ onNavigate }) => {
  return (
    <ToneEditorTool
      tool={TOOL_BY_SLUG['/image-brightness-editor']}
      mode="brightness"
      onNavigate={onNavigate}
    />
  );
};
