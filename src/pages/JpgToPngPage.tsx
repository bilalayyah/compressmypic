import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const JpgToPngPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/jpg-to-png"
    sourceLabel="JPG"
    targetFormat="png"
    accept="image/jpeg,image/jpg,.jpg,.jpeg"
    allowedMimeTypes={['image/jpeg', 'image/jpg']}
    allowedExtensionsRegex={/\.jpe?g$/i}
    supportedFormatsLabel="JPG, JPEG"
    uploadTitle="Drop JPG or JPEG images to convert to lossless PNG"
    defaultQuality={92}
    onNavigate={onNavigate}
  />
);
