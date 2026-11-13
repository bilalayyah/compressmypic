import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const WebpToJpgPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/webp-to-jpg"
    sourceLabel="WebP"
    targetFormat="jpeg"
    accept="image/webp,.webp"
    allowedMimeTypes={['image/webp']}
    allowedExtensionsRegex={/\.webp$/i}
    supportedFormatsLabel="WebP"
    uploadTitle="Drop WebP images to convert to universal JPG"
    defaultQuality={88}
    showBackgroundColor
    onNavigate={onNavigate}
  />
);
