import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const PngToJpgPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/png-to-jpg"
    sourceLabel="PNG"
    targetFormat="jpeg"
    accept="image/png,.png"
    allowedMimeTypes={['image/png']}
    allowedExtensionsRegex={/\.png$/i}
    supportedFormatsLabel="PNG"
    uploadTitle="Drop PNG files to convert to smaller JPG"
    defaultQuality={88}
    showBackgroundColor
    onNavigate={onNavigate}
  />
);
