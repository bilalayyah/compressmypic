import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const JpgToWebpPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/jpg-to-webp"
    sourceLabel="JPG"
    targetFormat="webp"
    accept="image/jpeg,image/jpg,.jpg,.jpeg"
    allowedMimeTypes={['image/jpeg', 'image/jpg']}
    allowedExtensionsRegex={/\.jpe?g$/i}
    supportedFormatsLabel="JPG, JPEG"
    uploadTitle="Drop JPG images to convert to lightweight WebP"
    defaultQuality={82}
    onNavigate={onNavigate}
  />
);
