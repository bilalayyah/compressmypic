import React from 'react';
import { TargetSizeCompressorTool } from '../components/TargetSizeCompressorTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const TargetFileSizePage: React.FC<Props> = ({ onNavigate }) => (
  <TargetSizeCompressorTool
    slug="/target-file-size-compressor"
    defaultTargetKb={150}
    allowCustomTarget
    onNavigate={onNavigate}
  />
);
