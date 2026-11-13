import React from 'react';
import { TargetSizeCompressorTool } from '../components/TargetSizeCompressorTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const Compress200KbPage: React.FC<Props> = ({ onNavigate }) => (
  <TargetSizeCompressorTool
    slug="/compress-image-to-200kb"
    defaultTargetKb={200}
    onNavigate={onNavigate}
  />
);
