import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const BmpToJpgPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/bmp-to-jpg"
    sourceLabel="BMP"
    targetFormat="jpeg"
    accept="image/bmp,image/x-ms-bmp,.bmp"
    allowedMimeTypes={['image/bmp', 'image/x-ms-bmp']}
    allowedExtensionsRegex={/\.bmp$/i}
    supportedFormatsLabel="BMP"
    uploadTitle="Drop uncompressed BMP bitmaps to convert to compact JPG"
    defaultQuality={88}
    onNavigate={onNavigate}
  />
);
