import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const AvifToJpgPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/avif-to-jpg"
    sourceLabel="AVIF"
    targetFormat="jpeg"
    accept="image/avif,.avif"
    allowedMimeTypes={['image/avif']}
    allowedExtensionsRegex={/\.avif$/i}
    supportedFormatsLabel="AVIF"
    uploadTitle="Drop AVIF images to convert to universal JPG"
    defaultQuality={88}
    showBackgroundColor
    notice="Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files."
    noticeTone="info"
    decodeErrorHint="Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser."
    onNavigate={onNavigate}
  />
);
