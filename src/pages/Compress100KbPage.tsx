import React from 'react';
import { TargetSizeCompressorTool } from '../components/TargetSizeCompressorTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const Compress100KbPage: React.FC<Props> = ({ onNavigate }) => (
  <TargetSizeCompressorTool
    slug="/compress-image-to-100kb"
    defaultTargetKb={100}
    onNavigate={onNavigate}
  />
);
