import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const WebpToPngPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/webp-to-png"
    sourceLabel="WebP"
    targetFormat="png"
    accept="image/webp,.webp"
    allowedMimeTypes={['image/webp']}
    allowedExtensionsRegex={/\.webp$/i}
    supportedFormatsLabel="WebP"
    uploadTitle="Drop WebP files to convert to lossless PNG"
    defaultQuality={92}
    onNavigate={onNavigate}
  />
);
