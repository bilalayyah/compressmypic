import React from 'react';
import { FormatConverterTool } from '../components/FormatConverterTool';

interface Props {
  onNavigate: (path: string) => void;
}

export const SvgToPngPage: React.FC<Props> = ({ onNavigate }) => (
  <FormatConverterTool
    slug="/svg-to-png"
    sourceLabel="SVG"
    targetFormat="png"
    accept="image/svg+xml,.svg"
    allowedMimeTypes={['image/svg+xml']}
    allowedExtensionsRegex={/\.svg$/i}
    supportedFormatsLabel="SVG"
    uploadTitle="Drop SVG vector files to rasterize to PNG"
    defaultQuality={92}
    allowSvgScale
    notice="Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export."
    noticeTone="warning"
    decodeErrorHint="Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax."
    onNavigate={onNavigate}
  />
);
