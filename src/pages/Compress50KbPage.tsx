import React from 'react';
import { TargetSizeCompressorTool } from '../components/TargetSizeCompressorTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const Compress50KbPage: React.FC<Props> = ({ onNavigate }) => (
  <TargetSizeCompressorTool
    slug="/compress-image-to-50kb"
    defaultTargetKb={50}
    onNavigate={onNavigate}
  />
);
