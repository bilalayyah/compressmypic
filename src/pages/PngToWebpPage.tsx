import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const PngToWebpPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/png-to-webp"
    sourceLabel="PNG"
    targetFormat="webp"
    accept="image/png,.png"
    allowedMimeTypes={['image/png']}
    allowedExtensionsRegex={/\.png$/i}
    supportedFormatsLabel="PNG"
    uploadTitle="Drop PNG files to convert to transparent WebP"
    defaultQuality={85}
    onNavigate={onNavigate}
  />
);
