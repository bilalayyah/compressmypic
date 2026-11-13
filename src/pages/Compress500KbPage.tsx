import React from 'react';
import { TargetSizeCompressorTool } from '../components/TargetSizeCompressorTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const Compress500KbPage: React.FC<Props> = ({ onNavigate }) => (
  <TargetSizeCompressorTool
    slug="/compress-image-to-500kb"
    defaultTargetKb={500}
    onNavigate={onNavigate}
  />
);
