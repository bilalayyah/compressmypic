import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const HeicToJpgPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/heic-to-jpg"
    sourceLabel="HEIC"
    targetFormat="jpeg"
    accept="image/heic,image/heif,.heic,.heif"
    allowedMimeTypes={['image/heic', 'image/heif']}
    allowedExtensionsRegex={/\.(heic|heif)$/i}
    supportedFormatsLabel="HEIC, HEIF"
    uploadTitle="Drop iPhone HEIC or HEIF photos to convert to JPG"
    defaultQuality={90}
    notice="Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device."
    noticeTone="info"
    decodeErrorHint="Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo."
    onNavigate={onNavigate}
  />
);
