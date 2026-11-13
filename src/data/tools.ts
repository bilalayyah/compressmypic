export type ToolCategoryId =
  | 'compress'
  | 'resize'
  | 'convert'
  | 'crop-edit'
  | 'ai-tools'
  | 'create'
  | 'privacy'
  | 'developer';

export interface ToolCategoryMeta {
  id: ToolCategoryId;
  label: string;
  description: string;
}

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolStep {
  title: string;
  description: string;
}

export interface ToolDefinition {
  slug: string; // root-level path e.g. '/image-resizer'
  name: string;
  shortDescription: string;
  category: ToolCategoryId;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  subtitle: string;
  howToSteps: ToolStep[];
  features: { title: string; description: string }[];
  faqs: ToolFaq[];
  relatedSlugs: string[];
}

export const TOOL_CATEGORIES: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Compress', description: 'Shrink image file sizes without visible quality loss' },
  { id: 'resize', label: 'Resize', description: 'Change pixel dimensions or scale images in bulk' },
  { id: 'convert', label: 'Convert', description: 'Convert between image formats and generate PDFs' },
  { id: 'crop-edit', label: 'Crop & Edit', description: 'Rotate, flip, crop, and adjust your photos' },
  { id: 'ai-tools', label: 'AI Tools', description: 'Browser-based smart image processing tools' },
  { id: 'create', label: 'Create', description: 'Build favicons, collages, and web assets' },
  { id: 'privacy', label: 'Privacy Tools', description: 'Inspect and strip EXIF, GPS, and hidden metadata' },
  { id: 'developer', label: 'Developer Tools', description: 'Pick colors, inspect dimensions, and generate web assets' },
];

export const TOOLS_REGISTRY: ToolDefinition[] = [
  {
    slug: '/',
    name: 'Image Compressor',
    shortDescription: 'Compress JPG, PNG, WebP & HEIC images without losing quality.',
    category: 'compress',
    seoTitle: 'Free Image Compressor Online – Reduce Image Size to 100KB',
    seoDescription:
      'Compress image online free — reduce image size without losing quality. Compress JPG, PNG and WebP with no signup and no watermark, right in your browser.',
    h1: 'Free Image Compressor',
    subtitle: 'Reduce JPG, PNG, WebP & HEIC file size directly in your browser.',
    howToSteps: [],
    features: [],
    faqs: [],
    relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-resizer',
    name: 'Image Resizer',
    shortDescription: 'Resize images by exact pixels, percentage, or social presets.',
    category: 'resize',
    seoTitle: 'Free Online Image Resizer – Resize JPG, PNG & WebP in Browser',
    seoDescription:
      'Resize images online free by exact pixels, percentage, or social media presets. Batch resize JPG, PNG, WebP and HEIC privately in your browser with ZIP download.',
    h1: 'Free Online Image Resizer',
    subtitle:
      'Resize single or multiple images by exact width and height, percentage scale, or ready-made social media presets — 100% private in your browser.',
    howToSteps: [
      {
        title: 'Upload your images',
        description:
          'Drag and drop one or many JPG, PNG, WebP, HEIC, GIF, BMP, or SVG images, or paste directly with Ctrl+V.',
      },
      {
        title: 'Choose dimensions or preset',
        description:
          'Enter custom pixel dimensions with aspect-ratio lock, pick a percentage scale, or select an Instagram, YouTube, or HD preset.',
      },
      {
        title: 'Resize & download',
        description:
          'Click Resize All, inspect the before-and-after comparison, and download files individually or together as a ZIP archive.',
      },
    ],
    features: [
      {
        title: 'Exact Pixels & Percentage Scaling',
        description:
          'Resize to exact pixel width and height or scale cleanly from 10% to 200% while automatically preserving aspect ratio when locked.',
      },
      {
        title: 'Smart Fit Modes (Exact, Contain, Cover)',
        description:
          'Choose how images fit fixed preset dimensions — stretch to exact size, fit inside without cropping, or center-crop to fill.',
      },
      {
        title: 'Batch Resize + ZIP Download',
        description:
          'Process dozens of product photos or blog thumbnails in one batch and download them all inside a single ZIP file.',
      },
      {
        title: '100% Local Browser Processing',
        description:
          'Your photos are resized using HTML5 Canvas on your own device and are never uploaded to any external server.',
      },
    ],
    faqs: [
      {
        question: 'Does resizing an image reduce its quality?',
        answer:
          'Downscaling an image uses high-quality bicubic Canvas smoothing to keep edges sharp. Upscaling slightly is supported, though enlarging small photos significantly can appear softer.',
      },
      {
        question: 'How do I keep the aspect ratio when resizing?',
        answer:
          'Keep the Lock Aspect Ratio toggle enabled. When you enter a new width, the height updates automatically in proportion (and vice versa).',
      },
      {
        question: 'Can I resize multiple images to the same dimensions at once?',
        answer:
          'Yes. Upload multiple files, enter your target dimensions or preset, and click Resize All to process the entire batch and download as a ZIP.',
      },
      {
        question: 'Are my photos uploaded to a server?',
        answer:
          'No. Everything runs inside your browser tab using local HTML5 Canvas memory, so your images never leave your device.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Image Converter',
    shortDescription: 'Convert JPG, PNG, WebP, HEIC, BMP, GIF & SVG in your browser.',
    category: 'convert',
    seoTitle: 'Free Online Image Converter – Convert JPG, PNG, WebP & HEIC',
    seoDescription:
      'Convert images between JPG, PNG, and WebP free online. Supports HEIC, SVG, BMP, GIF, and AVIF input with batch conversion and ZIP download in your browser.',
    h1: 'Free Online Image Converter',
    subtitle:
      'Convert JPG, PNG, WebP, HEIC, SVG, BMP, GIF, and AVIF images to clean JPG, PNG, or WebP files locally in your browser — no upload required.',
    howToSteps: [
      {
        title: 'Add files to convert',
        description:
          'Drop JPG, PNG, WebP, HEIC, SVG, BMP, GIF, or AVIF images into the upload zone (up to 20 MB per file).',
      },
      {
        title: 'Pick target format & quality',
        description:
          'Select JPG, PNG, or WebP output, adjust quality for lossy formats, and pick a background color if flattening transparent images to JPG.',
      },
      {
        title: 'Download converted files',
        description:
          'Preview the converted output size and download each file or package the whole batch as a ZIP archive.',
      },
    ],
    features: [
      {
        title: 'Wide Format Input Support',
        description:
          'Converts iPhone HEIC/HEIF photos, crisp SVG vector graphics, legacy BMP files, WebP images, PNGs, and JPEGs right in your browser.',
      },
      {
        title: 'Transparency-Safe Conversion',
        description:
          'Preserves alpha transparency when converting to PNG or WebP, and lets you customize the matte background color when converting to JPG.',
      },
      {
        title: 'Batch Conversion & ZIP Export',
        description:
          'Convert entire folders of images at once with consistent quality settings and download them in one click.',
      },
      {
        title: 'Private Client-Side Engine',
        description:
          'Even HEIC decoding runs locally via WebAssembly in your browser — zero server uploads and zero watermarks.',
      },
    ],
    faqs: [
      {
        question: 'Can I convert iPhone HEIC photos to JPG or PNG?',
        answer:
          'Yes. CompressMyPic automatically detects HEIC and HEIF files and decodes them locally in your browser before converting them to JPG, PNG, or WebP.',
      },
      {
        question: 'Which output format should I choose: JPG, PNG, or WebP?',
        answer:
          'Choose WebP for the smallest web files with transparency support, JPG for maximum compatibility with photos, and PNG for lossless graphics and logos.',
      },
      {
        question: 'What happens to transparent backgrounds when converting PNG to JPG?',
        answer:
          'Because JPG does not support transparency, transparent pixels are filled with your chosen matte background color (white by default).',
      },
      {
        question: 'Does the converter add watermarks or limit file counts?',
        answer:
          'No. Conversion is completely free with no watermarks, no signup, and no daily limits.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Rotate & Flip Image',
    shortDescription: 'Rotate 90°, 180°, custom angles, and flip images horizontally or vertically.',
    category: 'crop-edit',
    seoTitle: 'Rotate & Flip Image Online Free – Mirror & Straighten Photos',
    seoDescription:
      'Rotate images 90°, 180°, or any custom angle and flip horizontally or vertically online for free. Batch edit JPG, PNG, WebP & HEIC privately in your browser.',
    h1: 'Rotate & Flip Image Online',
    subtitle:
      'Fix sideways photos, mirror images horizontally or vertically, or straighten tilted shots with custom angle rotation — processed instantly on your device.',
    howToSteps: [
      {
        title: 'Upload one or more photos',
        description:
          'Drag and drop JPG, PNG, WebP, HEIC, or other images you want to rotate or mirror.',
      },
      {
        title: 'Rotate or flip',
        description:
          'Use quick 90° left/right/180° buttons, fine-tune with the custom angle slider (-180° to +180°), and toggle horizontal or vertical flip.',
      },
      {
        title: 'Preview & download',
        description:
          'Inspect the live transformed result and download individual images or a single ZIP archive.',
      },
    ],
    features: [
      {
        title: 'Quick 90° & Custom Angle Rotation',
        description:
          'Rotate cleanly in 90° steps or dial in any exact degree angle with automatic canvas bounds calculation so corners are never cut off.',
      },
      {
        title: 'Instant Mirror & Flip',
        description:
          'Flip images horizontally (mirror selfie) or vertically (upside-down reflection) in a single click.',
      },
      {
        title: 'Batch Transformation',
        description:
          'Apply the same rotation or flip across multiple uploaded photos simultaneously and export all as a ZIP.',
      },
      {
        title: 'Loss-Minimized Output',
        description:
          'Choose Original format, PNG for lossless preservation, or WebP/JPG with adjustable quality.',
      },
    ],
    faqs: [
      {
        question: 'Will rotating a photo 90 degrees crop the edges?',
        answer:
          'No. The canvas automatically swaps width and height for 90°/270° rotations and expands bounding dimensions for custom angles so your entire image stays intact.',
      },
      {
        question: 'Can I flip and rotate the same image together?',
        answer:
          'Yes. You can combine any rotation angle with horizontal and/or vertical flipping and see the live preview update immediately.',
      },
      {
        question: 'Is transparency preserved when rotating a PNG?',
        answer:
          'Yes. When outputting PNG or WebP, transparent backgrounds remain transparent even when rotating at custom angles.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Image to PDF',
    shortDescription: 'Combine JPG, PNG, WebP & HEIC images into a multi-page PDF.',
    category: 'convert',
    seoTitle: 'Image to PDF Converter Free – Combine Photos to PDF Online',
    seoDescription:
      'Convert JPG, PNG, WebP, and HEIC images into a single multi-page PDF free in your browser. Reorder pages, set A4/Letter size, margins, and download privately.',
    h1: 'Image to PDF Converter',
    subtitle:
      'Combine one or many images into a clean, multi-page PDF document right in your browser. Reorder pages, choose A4, Letter, or Fit-to-Image, and download instantly.',
    howToSteps: [
      {
        title: 'Upload your images',
        description:
          'Select or drop JPG, PNG, WebP, HEIC, GIF, BMP, or SVG files. Each image becomes a page in your PDF.',
      },
      {
        title: 'Reorder & configure layout',
        description:
          'Arrange image order with move up/down controls, then pick Page Size (A4, US Letter, or Fit to Image), orientation, margins, and quality.',
      },
      {
        title: 'Generate & download PDF',
        description:
          'Click Create PDF to build your PDF locally in milliseconds and save it straight to your device.',
      },
    ],
    features: [
      {
        title: 'Multi-Page Ordering',
        description:
          'Easily reorder uploaded images before generating your PDF so receipts, scans, and slides appear in the exact sequence you want.',
      },
      {
        title: 'Flexible Page Sizes & Auto Orientation',
        description:
          'Export to standard A4 or US Letter with Auto Portrait/Landscape per page, or choose Fit to Image to match each photo’s exact aspect ratio.',
      },
      {
        title: 'Adjustable Margins & PDF Quality',
        description:
          'Choose None, Small, or Medium margins and control embedded image quality to keep your PDF lightweight for email.',
      },
      {
        title: 'Zero Server Uploads',
        description:
          'Sensitive IDs, contracts, and scanned documents never touch an external server — the PDF binary is constructed locally in browser memory.',
      },
    ],
    faqs: [
      {
        question: 'Is it safe to convert personal documents or IDs to PDF here?',
        answer:
          'Yes. Unlike server-based PDF converters, CompressMyPic builds the PDF file directly inside your browser. Your files never leave your computer or phone.',
      },
      {
        question: 'How many images can I combine into one PDF?',
        answer:
          'You can combine dozens of images into a single multi-page PDF, limited only by your device’s browser memory.',
      },
      {
        question: 'Can I keep the original photo orientation on each page?',
        answer:
          'Yes. Leave Orientation set to Auto and landscape photos will get landscape pages while portrait photos get portrait pages.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Image Metadata Viewer',
    shortDescription: 'Inspect EXIF camera settings, GPS coordinates, and PNG/WebP data.',
    category: 'privacy',
    seoTitle: 'Free Image Metadata & EXIF Viewer – Inspect Photo Details',
    seoDescription:
      'View hidden EXIF metadata, camera model, exposure settings, GPS coordinates, and PNG/WebP chunks locally in your browser without uploading photos.',
    h1: 'Image Metadata & EXIF Viewer',
    subtitle:
      'Inspect hidden EXIF tags, camera settings, timestamps, GPS coordinates, and PNG/WebP headers directly in your browser without uploading private photos.',
    howToSteps: [
      {
        title: 'Drop an image to inspect',
        description:
          'Upload any JPG, PNG, WebP, HEIC, or other image file. Inspection runs instantaneously on the raw local bytes.',
      },
      {
        title: 'Review EXIF, Camera & GPS tags',
        description:
          'See file properties, camera make/model, lens, shutter speed, ISO, timestamps, and any embedded GPS location coordinates.',
      },
      {
        title: 'Export report or strip privacy tags',
        description:
          'Copy or download the metadata as JSON, or jump straight to Remove Image Metadata to scrub sensitive data before sharing.',
      },
    ],
    features: [
      {
        title: 'Deep EXIF & GPS Detection',
        description:
          'Parses TIFF IFD0, ExifIFD, and GPSIFD binary tables in JPEG, PNG eXIf, and WebP EXIF chunks to uncover hidden location and device tags.',
      },
      {
        title: 'Privacy Risk Highlighting',
        description:
          'Automatically flags sensitive fields such as GPS latitude/longitude, camera serial numbers, artist names, and capture timestamps.',
      },
      {
        title: 'PNG & WebP Chunk Inspection',
        description:
          'Reads PNG IHDR color depth, pHYs physical DPI, tEXt/iTXt/tIME chunks, and WebP VP8X alpha/animation flags.',
      },
      {
        title: 'Export JSON Report',
        description:
          'Copy all parsed metadata fields to your clipboard or download a clean JSON report with one click.',
      },
    ],
    faqs: [
      {
        question: 'Why does my photo show no EXIF data?',
        answer:
          'Messaging apps (like WhatsApp), social platforms, and images already exported by web editors often strip EXIF metadata before you save them.',
      },
      {
        question: 'Can this tool read GPS coordinates from smartphone photos?',
        answer:
          'Yes. Original JPEG photos taken with location services enabled include GPSIFD tags that our parser decodes into decimal latitude and longitude locally.',
      },
      {
        question: 'What about iPhone HEIC files?',
        answer:
          'File info and pixel dimensions are inspected for HEIC files; JPEG, PNG, and WebP support full binary chunk and EXIF tag extraction in the browser.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Remove Image Metadata',
    shortDescription: 'Strip EXIF, GPS location, camera info & comments privately.',
    category: 'privacy',
    seoTitle: 'Remove Image Metadata & EXIF Online Free – Strip GPS Data',
    seoDescription:
      'Remove EXIF metadata, GPS location, camera model, and hidden tags from JPG, PNG, WebP, and HEIC images privately in your browser with lossless stripping.',
    h1: 'Remove Image Metadata (EXIF & GPS Stripper)',
    subtitle:
      'Protect your privacy before sharing photos online. Permanently strip EXIF camera details, GPS coordinates, timestamps, and hidden text chunks locally in your browser.',
    howToSteps: [
      {
        title: 'Upload photos to clean',
        description:
          'Drag and drop one or multiple JPG, PNG, WebP, or HEIC images — nothing is uploaded to any server.',
      },
      {
        title: 'Choose Lossless Strip or Clean Re-encode',
        description:
          'Lossless mode strips JPEG APP1-APP15/COM segments and PNG text/eXIf chunks without recompressing a single pixel.',
      },
      {
        title: 'Verify & download clean images',
        description:
          'See the exact count of metadata tags removed (verified to 0) and download individually or as a ZIP.',
      },
    ],
    features: [
      {
        title: 'True Lossless JPEG & PNG Stripping',
        description:
          'Removes EXIF, XMP, IPTC, comments, and PNG tEXt/eXIf chunks at the binary level with zero pixel re-encoding.',
      },
      {
        title: 'Verified Clean Output',
        description:
          'Every output file is automatically re-scanned by our metadata parser to verify that 0 sensitive EXIF/GPS tags remain.',
      },
      {
        title: 'Batch Cleaning + ZIP Export',
        description:
          'Clean an entire batch of photos before posting to marketplaces, forums, or listings and download them together as a ZIP.',
      },
      {
        title: '100% On-Device Privacy',
        description:
          'Privacy tools must be private — your original photos with GPS data never leave your browser.',
      },
    ],
    faqs: [
      {
        question: 'Does lossless metadata removal reduce image quality?',
        answer:
          'No! When Lossless Strip is used on JPG or PNG files, only the metadata segments are removed while the compressed pixel data stays byte-for-byte untouched.',
      },
      {
        question: 'What metadata is removed?',
        answer:
          'EXIF camera make/model, lens details, capture date/time, GPS latitude/longitude/altitude, XMP Adobe packets, IPTC tags, JPEG comments, and PNG text/time/eXIf chunks.',
      },
      {
        question: 'How can I confirm the metadata is really gone?',
        answer:
          'The tool automatically re-scans each cleaned file and displays the before/after tag counts, and you can also inspect the downloaded file in our Image Metadata Viewer.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Favicon Generator',
    shortDescription: 'Generate favicon.ico, Apple Touch, Android & manifest files.',
    category: 'create',
    seoTitle: 'Free Favicon Generator – Create favicon.ico & App Icons',
    seoDescription:
      'Generate a complete website favicon package (favicon.ico, 16x16, 32x32, Apple Touch 180x180, Android 192/512, and site.webmanifest) free in your browser.',
    h1: 'Free Online Favicon Generator',
    subtitle:
      'Turn any logo or image into a complete favicon package — including multi-size favicon.ico, Apple Touch Icon, Android Chrome icons, site.webmanifest, and copyable HTML.',
    howToSteps: [
      {
        title: 'Upload your logo or icon',
        description:
          'Upload a PNG, SVG, JPG, or WebP image. Square logos with transparent backgrounds give the sharpest results.',
      },
      {
        title: 'Customize padding, shape & background',
        description:
          'Adjust inner padding, add rounded corners or a circular mask, and choose transparent or solid background fill.',
      },
      {
        title: 'Download your Favicon ZIP',
        description:
          'Download individual sizes or grab the full ZIP containing favicon.ico, all PNG sizes, site.webmanifest, and copy the HTML snippet.',
      },
    ],
    features: [
      {
        title: 'Real Multi-Size favicon.ico',
        description:
          'Builds a genuine binary .ico file embedding crisp 16×16, 32×32, and 48×48 frames — not a renamed PNG.',
      },
      {
        title: 'Complete Web & Mobile Icon Set',
        description:
          'Generates 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 and 512×512 (Android/PWA) icons plus site.webmanifest.',
      },
      {
        title: 'Live Browser Tab Preview',
        description:
          'Preview how your icon looks at real browser tab scale on light and dark backgrounds before downloading.',
      },
      {
        title: 'Ready-to-Paste HTML Snippet',
        description:
          'Copy the clean HTML <link> tags directly into your <head> with one click.',
      },
    ],
    faqs: [
      {
        question: 'What files are included in the downloaded Favicon ZIP?',
        answer:
          'The ZIP includes favicon.ico (16×16, 32×32, 48×48), favicon-16x16.png, favicon-32x32.png, favicon-48x48.png, apple-touch-icon.png (180×180), android-chrome-192x192.png, android-chrome-512x512.png, and site.webmanifest.',
      },
      {
        question: 'What image size should I upload?',
        answer:
          'For best results, upload a square PNG or SVG at least 512×512 pixels. Non-square logos are centered automatically without stretching.',
      },
      {
        question: 'Can I make a rounded or circular favicon?',
        answer:
          'Yes. Use the Corner Radius slider (up to 50% for a full circle) and optional padding/background color controls.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Image Color Picker',
    shortDescription: 'Pick exact pixel colors from any image in HEX, RGB, HSL & CMYK.',
    category: 'developer',
    seoTitle: 'Image Color Picker Online – Get HEX, RGB & HSL from Any Image',
    seoDescription:
      'Pick exact colors from any JPG, PNG, WebP, or SVG image online. Interactive pixel magnifier shows HEX, RGB, HSL, and CMYK values with one-click copy.',
    h1: 'Image Color Picker (Eyedropper Tool)',
    subtitle:
      'Hover or tap anywhere on an image to inspect exact pixel colors with a live magnifier loupe. Get instant HEX, RGB, HSL, and CMYK codes with one-click copy.',
    howToSteps: [
      {
        title: 'Upload or paste an image',
        description:
          'Drop a screenshot, logo, or photo, or press Ctrl+V to paste directly from your clipboard.',
      },
      {
        title: 'Hover & click to pick pixels',
        description:
          'Move across the canvas to see the magnified pixel grid and click or tap to save colors to your palette.',
      },
      {
        title: 'Copy HEX, RGB, HSL or CSS',
        description:
          'Copy any color format in one click or export your collected swatches as CSS variables or JSON.',
      },
    ],
    features: [
      {
        title: 'Live Magnified Pixel Loupe',
        description:
          'Zoomed crosshair grid lets you target exact pixels accurately on both desktop mice and mobile touchscreens.',
      },
      {
        title: '4 Color Formats Instantly',
        description:
          'Displays HEX, RGB, HSL, and CMYK representations simultaneously for web developers and graphic designers.',
      },
      {
        title: 'Saved Swatch History & Export',
        description:
          'Click multiple areas of your image to build a custom swatch list and copy it as CSS custom properties or JSON.',
      },
      {
        title: '100% Local Canvas Sampling',
        description:
          'Pixel values are read locally via HTML5 Canvas getImageData — your designs and screenshots stay completely private.',
      },
    ],
    faqs: [
      {
        question: 'How accurate is the color picker?',
        answer:
          'It reads the exact 8-bit RGBA pixel values directly from the full-resolution image canvas, not a downscaled thumbnail.',
      },
      {
        question: 'Can I paste a screenshot directly into the color picker?',
        answer:
          'Yes! Take a screenshot and press Ctrl+V (or Cmd+V on Mac) anywhere on the page to load it instantly.',
      },
      {
        question: 'What color formats can I copy?',
        answer:
          'You can copy HEX (#2563EB), RGB (rgb(37, 99, 235)), HSL, CMYK, or export your saved palette as CSS variables or JSON.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Image Dimensions Checker',
    shortDescription: 'Check width, height, aspect ratio, megapixels & print size.',
    category: 'developer',
    seoTitle: 'Image Dimensions Checker – Check Pixel Size & Aspect Ratio',
    seoDescription:
      'Check exact image width, height, aspect ratio, orientation, megapixels, transparency, and print size for multiple images instantly in your browser.',
    h1: 'Image Dimensions & Aspect Ratio Checker',
    subtitle:
      'Instantly inspect exact pixel dimensions, simplified aspect ratios, megapixels, orientation, transparency, and 300 DPI print sizes for one or dozens of images.',
    howToSteps: [
      {
        title: 'Upload images to inspect',
        description:
          'Drop one or more JPG, PNG, WebP, HEIC, GIF, BMP, SVG, or AVIF images into the dropzone.',
      },
      {
        title: 'Review dimensions & ratios',
        description:
          'View exact width × height, orientation, simplified aspect ratio (e.g. 16:9), megapixels, file size, and print dimensions.',
      },
      {
        title: 'Validate rules or export report',
        description:
          'Optionally check images against minimum/maximum dimension rules and export the table as CSV or JSON.',
      },
    ],
    features: [
      {
        title: 'Batch Dimension Inspection',
        description:
          'Check dozens of assets at once — ideal for verifying store product images, ad creatives, or app screenshots.',
      },
      {
        title: 'Exact & Common Aspect Ratios',
        description:
          'Calculates both the mathematically simplified ratio and matches common standards like 16:9, 4:3, 1:1, and 4:5.',
      },
      {
        title: 'Custom Min/Max Validator',
        description:
          'Set optional minimum or maximum width/height rules to instantly highlight images that pass or fail your spec.',
      },
      {
        title: 'CSV & JSON Export',
        description:
          'Download a clean CSV spreadsheet or JSON summary of all inspected image dimensions.',
      },
    ],
    faqs: [
      {
        question: 'Does checking dimensions modify or compress my images?',
        answer:
          'No. The tool only reads image dimensions and properties in your browser memory without altering any files.',
      },
      {
        question: 'What print size does the checker calculate?',
        answer:
          'It estimates physical print width and height in inches and centimeters at standard 300 DPI (high-quality print) and 72 DPI (screen).',
      },
      {
        question: 'Can I check SVG and HEIC image dimensions too?',
        answer:
          'Yes. It supports JPG, PNG, WebP, HEIC, GIF, BMP, SVG, and AVIF files right in your browser.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: 'Image Cropper',
    shortDescription: 'Crop photos interactively with drag handles, aspect ratios & zoom.',
    category: 'crop-edit',
    seoTitle: 'Free Online Image Cropper – Crop JPG, PNG & WebP in Browser',
    seoDescription:
      'Crop images online free with an interactive drag-and-resize crop box, aspect ratio presets (1:1, 4:3, 16:9), zoom, and instant download in your browser.',
    h1: 'Free Online Image Cropper',
    subtitle:
      'Drag and resize the crop frame directly over your photo, lock popular aspect ratios like 1:1, 4:3, or 16:9, zoom in for precision, and export locally.',
    howToSteps: [
      { title: 'Upload an image', description: 'Drop or browse any JPG, PNG, WebP, HEIC, or SVG image.' },
      { title: 'Adjust crop area & ratio', description: 'Drag the crop box or corner handles, choose Free or a preset aspect ratio, and zoom if needed.' },
      { title: 'Crop & download', description: 'Pick JPG, PNG, or WebP output and download your cropped image immediately.' },
    ],
    features: [
      { title: 'Interactive Drag & Resize Handles', description: 'Smooth mouse and touch pointer handles let you crop any region down to exact pixels.' },
      { title: 'Aspect Ratio Presets', description: 'Switch between Freeform, 1:1 Square, 4:3, 16:9, 3:2, 4:5 Instagram, and 9:16 Story.' },
      { title: 'Zoom & Live Dimension Readout', description: 'Zoom in for tight framing and view exact output width × height in real time.' },
      { title: '100% Private Local Processing', description: 'Your photos are cropped on your device via HTML5 Canvas with zero server uploads.' },
    ],
    faqs: [
      { question: 'Does cropping reduce image quality outside the cropped area?', answer: 'No. The cropped region is extracted at full original resolution from your uploaded image.' },
      { question: 'Can I crop a photo to an exact 1:1 square for a profile picture?', answer: 'Yes. Select the 1:1 aspect ratio preset and drag the handles to frame your subject cleanly.' },
      { question: 'Does the cropper work on mobile touchscreens?', answer: 'Yes. Pointer events support both mouse dragging and finger touch gestures on iOS and Android.' },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: 'Image Watermark',
    shortDescription: 'Add custom text or logo watermarks, drag or tile across photos.',
    category: 'crop-edit',
    seoTitle: 'Add Watermark to Image Free – Text & Logo Watermark Online',
    seoDescription:
      'Add custom text or logo watermarks to images online free. Adjust font size, opacity, rotation, drag position, or tile across the whole photo in your browser.',
    h1: 'Add Watermark to Image Online',
    subtitle:
      'Protect your photos and artwork with customizable text or logo watermarks. Drag to position, use corner presets, or tile diagonally across the entire image.',
    howToSteps: [
      { title: 'Upload your main photo', description: 'Drop the JPG, PNG, WebP, or HEIC image you want to watermark.' },
      { title: 'Customize text or logo watermark', description: 'Enter watermark text or upload a logo PNG, then adjust size, opacity, rotation, or enable Tiled mode.' },
      { title: 'Position & download', description: 'Drag the watermark directly on the preview or pick a 9-grid anchor, then download your file.' },
    ],
    features: [
      { title: 'Text & Logo Watermarks', description: 'Use crisp custom typography or upload your transparent PNG/SVG brand logo.' },
      { title: 'Drag-to-Position + 9 Anchor Presets', description: 'Place your mark in any corner, dead center, or drag it freely on the canvas.' },
      { title: 'Diagonal Tiled Protection', description: 'Enable Tiled Watermark to repeat your text or logo across the entire photo with adjustable spacing.' },
      { title: 'Client-Side Privacy', description: 'Watermark proofs and portfolio shots locally without sending originals to external servers.' },
    ],
    faqs: [
      { question: 'Can I make a subtle semi-transparent watermark?', answer: 'Yes. Use the Opacity slider (from 5% to 100%) to make your watermark subtle or bold.' },
      { question: 'Can I use my own transparent PNG logo as a watermark?', answer: 'Yes. Switch to Logo Watermark mode and upload any PNG or SVG logo.' },
      { question: 'Does tiled mode work with rotation?', answer: 'Yes. Both single and tiled watermarks support custom rotation angles.' },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Blur & Pixelate Image',
    shortDescription: 'Blur or pixelate the whole photo or brush sensitive areas only.',
    category: 'crop-edit',
    seoTitle: 'Blur & Pixelate Image Online Free – Censor Faces & Text',
    seoDescription:
      'Blur or pixelate an entire image or paint with a censor brush to hide faces, license plates, and sensitive details privately in your browser.',
    h1: 'Blur & Pixelate Image Online',
    subtitle:
      'Apply smooth blur or mosaic pixelation to an entire photo, or paint directly over faces, license plates, and private text with the interactive censor brush.',
    howToSteps: [
      { title: 'Upload your image', description: 'Drop any JPG, PNG, WebP, or HEIC photo to edit privately.' },
      { title: 'Choose Whole Image or Brush Area', description: 'Pick Blur or Pixelate, adjust strength, and either apply globally or brush specific regions.' },
      { title: 'Download censored image', description: 'Inspect the result and download clean JPG, PNG, or WebP output.' },
    ],
    features: [
      { title: 'Interactive Censor Brush', description: 'Paint over faces, addresses, or license plates with adjustable brush size and stroke undo.' },
      { title: 'Whole-Image Blur & Mosaic', description: 'Quickly blur backgrounds or create retro pixel-art mosaic effects across the whole frame.' },
      { title: 'Zero Server Upload', description: 'Because you are hiding sensitive details, nothing ever leaves your device.' },
      { title: 'Full-Resolution Export', description: 'Brush coordinates map accurately to full original image pixels for crisp exports.' },
    ],
    faqs: [
      { question: 'Is the blurred or pixelated data permanently removed in the download?', answer: 'Yes. The exported image flattens the blurred or pixelated pixels into a new bitmap with no reversible layers.' },
      { question: 'Can I undo brush strokes if I make a mistake?', answer: 'Yes. Use Undo Stroke or Clear Strokes at any time before downloading.' },
      { question: 'Can I combine whole-image blur and brush pixelation?', answer: 'You can switch between Blur and Pixelate modes and adjust strength before exporting.' },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Add Text to Image',
    shortDescription: 'Add draggable styled text overlays with fonts, outline & shadow.',
    category: 'crop-edit',
    seoTitle: 'Add Text to Image Online Free – Custom Fonts, Outline & Shadow',
    seoDescription:
      'Add custom text overlays to JPG, PNG, and WebP images online free. Drag to position, change fonts, colors, bold/italic, rotation, outline, and shadow.',
    h1: 'Add Text to Image Online',
    subtitle:
      'Create memes, social captions, or annotated screenshots with draggable text layers, custom fonts, bold/italic styles, rotation, outlines, and drop shadows.',
    howToSteps: [
      { title: 'Upload an image', description: 'Select any photo or screenshot from your device or paste with Ctrl+V.' },
      { title: 'Add & style text layers', description: 'Type your text, choose font, size, color, bold/italic, outline, shadow, and rotation.' },
      { title: 'Drag to position & download', description: 'Drag text layers directly on the image and export your finished graphic.' },
    ],
    features: [
      { title: 'Multiple Draggable Text Layers', description: 'Add headlines, captions, and callouts and drag each one independently on the canvas.' },
      { title: 'Rich Typography Controls', description: 'Pick fonts, sizes, bold/italic weights, colors, stroke outlines, and drop shadows.' },
      { title: 'Angle & Alignment Control', description: 'Rotate any text layer smoothly from -180° to +180°.' },
      { title: 'Clean Full-Resolution Export', description: 'No watermarks added — download directly in JPG, PNG, or WebP.' },
    ],
    faqs: [
      { question: 'Can I add more than one text block to a photo?', answer: 'Yes. Click Add Text Layer to place multiple independent text overlays anywhere on the image.' },
      { question: 'How do I make white text readable on bright photos?', answer: 'Enable Text Outline (with a dark stroke color) and/or Drop Shadow for crisp contrast.' },
      { question: 'Are my photos uploaded anywhere?', answer: 'No. Text rendering and export happen 100% locally in your browser.' },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Image Border Generator',
    shortDescription: 'Add solid or gradient borders, frames, rounded corners & shadows.',
    category: 'crop-edit',
    seoTitle: 'Image Border & Frame Generator Online Free – Solid & Gradient',
    seoDescription:
      'Add solid or gradient borders, Polaroid frames, rounded corners, and drop shadows to images free in your browser. Instant preview and download.',
    h1: 'Image Border & Frame Generator',
    subtitle:
      'Frame photos with solid colors, custom gradients, Polaroid-style borders, rounded corners, and soft drop shadows — processed locally at full resolution.',
    howToSteps: [
      { title: 'Upload your image', description: 'Drop any JPG, PNG, WebP, or HEIC image.' },
      { title: 'Pick frame style & border size', description: 'Choose Solid, Gradient, or Polaroid styles, set border thickness, corner radius, and shadow.' },
      { title: 'Export framed image', description: 'Download your bordered image in PNG, JPG, or WebP.' },
    ],
    features: [
      { title: 'Solid & Gradient Borders', description: 'Create clean gallery mattes or vibrant two-color linear gradient frames.' },
      { title: 'Preset Frame Styles', description: 'Apply instant Polaroid, Gallery White, Dark Studio, or Sunset Gradient looks.' },
      { title: 'Corner Radius & Drop Shadow', description: 'Round the inner photo or outer frame corners and add realistic elevation shadows.' },
      { title: 'Lossless PNG Support', description: 'Export PNG to preserve transparent outer corners around shadows and rounded frames.' },
    ],
    faqs: [
      { question: 'Can I make a Polaroid-style photo border?', answer: 'Yes. Choose the Polaroid preset for a classic white frame with extra space along the bottom edge.' },
      { question: 'How do I keep the area outside a rounded border transparent?', answer: 'Select PNG or WebP as the output format so outer corners and drop shadows stay transparent.' },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Round Image Corners',
    shortDescription: 'Round corners uniformly or per-corner with transparent PNG output.',
    category: 'crop-edit',
    seoTitle: 'Round Image Corners Online Free – Transparent PNG Corner Clipper',
    seoDescription:
      'Round image corners online free with uniform or per-corner radius sliders and transparent PNG or solid background output directly in your browser.',
    h1: 'Round Image Corners Online',
    subtitle:
      'Create smooth rounded corners or circular avatars from any photo. Control all four corners together or individually with crisp transparent PNG export.',
    howToSteps: [
      { title: 'Upload your image', description: 'Drop a JPG, PNG, WebP, HEIC, or SVG image.' },
      { title: 'Set corner radius', description: 'Drag the uniform radius slider or toggle Per-Corner mode to customize Top-Left, Top-Right, Bottom-Right, and Bottom-Left.' },
      { title: 'Download PNG or WebP', description: 'Keep transparent corners with PNG/WebP or pick a solid background fill.' },
    ],
    features: [
      { title: 'Uniform & Per-Corner Radius', description: 'Round all corners evenly up to a pill/circle, or style each corner independently.' },
      { title: 'True Transparent Corners', description: 'Export PNG or WebP with clean anti-aliased alpha transparency outside the rounded mask.' },
      { title: 'Optional Solid Background', description: 'Fill outer corners with any custom hex color if exporting for JPG.' },
      { title: 'Full-Resolution Output', description: 'Keeps your exact original pixel dimensions while clipping the corners cleanly.' },
    ],
    faqs: [
      { question: 'Why should I choose PNG or WebP for rounded corners?', answer: 'JPG does not support transparency, so PNG or WebP is needed if you want invisible corners on any website background.' },
      { question: 'Can I turn a square photo into a circle?', answer: 'Yes. Set the corner radius to 50% on a square image (or use our Image Cropper first for 1:1).' },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Image Brightness Editor',
    shortDescription: 'Brighten or darken photos with live before/after preview.',
    category: 'crop-edit',
    seoTitle: 'Image Brightness Editor Online Free – Lighten Dark Photos',
    seoDescription:
      'Adjust photo brightness online free from -100% to +100% with quick presets, live before-and-after comparison, and private browser export.',
    h1: 'Online Image Brightness Editor',
    subtitle:
      'Brighten underexposed photos or tone down overly bright shots using real-time pixel adjustment and before/after comparison — right in your browser.',
    howToSteps: [
      { title: 'Upload your photo', description: 'Select any JPG, PNG, WebP, or HEIC image.' },
      { title: 'Adjust brightness or pick a preset', description: 'Move the Brightness slider from -100% to +100% or click a preset while comparing before and after.' },
      { title: 'Download adjusted image', description: 'Export at full original resolution in your preferred format.' },
    ],
    features: [
      { title: 'Real-Time Pixel Adjustment', description: 'Instant preview across desktop and mobile browsers without server round-trips.' },
      { title: 'Quick Exposure Presets', description: 'Test Dark, Dim, Bright, Vibrant, and High Key presets in one click.' },
      { title: 'Before & After Inspection', description: 'Compare the edited photo side-by-side or with the interactive comparison slider.' },
      { title: 'Private Client-Side Processing', description: 'Your personal photos stay strictly inside your browser.' },
    ],
    faqs: [
      { question: 'Does adjusting brightness change my image dimensions?', answer: 'No. Your photo keeps its exact original width and height.' },
      { question: 'Which format should I download?', answer: 'Keep Original format for simplicity, or choose WebP/JPG for smaller web files.' },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Image Contrast Editor',
    shortDescription: 'Boost or soften image contrast with live before/after comparison.',
    category: 'crop-edit',
    seoTitle: 'Image Contrast Editor Online Free – Adjust Photo Contrast',
    seoDescription:
      'Increase or soften photo contrast online free with presets, live before/after comparison, and private browser-side export.',
    h1: 'Online Image Contrast Editor',
    subtitle:
      'Make flat photos pop with crisp contrast or create a soft, low-contrast matte look with instant presets and before/after comparison.',
    howToSteps: [
      { title: 'Upload your photo', description: 'Drop any JPG, PNG, WebP, or HEIC file.' },
      { title: 'Fine-tune contrast', description: 'Slide from -100% (flat/soft) to +100% (high contrast) or pick a quick preset.' },
      { title: 'Compare & download', description: 'Verify the before/after difference and save your enhanced photo.' },
    ],
    features: [
      { title: 'Precision Contrast Curve', description: 'Smoothly expands or compresses tonal range without harsh color shifts.' },
      { title: 'One-Click Presets', description: 'Try Soft, Muted, Crisp, Punchy, or Dramatic presets immediately.' },
      { title: 'Interactive Before/After Modal', description: 'Inspect fine shadow and highlight detail before downloading.' },
      { title: '100% Client-Side', description: 'Fast browser processing with zero uploads or watermarks.' },
    ],
    faqs: [
      { question: 'What happens when I increase contrast?', answer: 'Dark tones become deeper and bright tones become brighter, making subjects stand out more clearly.' },
      { question: 'Can I soften harsh shadows with this tool?', answer: 'Yes. Move the slider below 0% (such as -15% or -25%) to flatten and soften harsh contrast.' },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Image Saturation Editor',
    shortDescription: 'Boost color vibrancy or desaturate photos cleanly in browser.',
    category: 'crop-edit',
    seoTitle: 'Image Saturation Editor Online Free – Adjust Color Vibrancy',
    seoDescription:
      'Adjust image color saturation online free from -100% grayscale to +100% vivid colors with presets and live before/after comparison.',
    h1: 'Online Image Saturation Editor',
    subtitle:
      'Make dull colors vibrant, mute loud backgrounds, or convert photos to clean grayscale using luminance-accurate saturation controls.',
    howToSteps: [
      { title: 'Upload an image', description: 'Drop or select any JPG, PNG, WebP, or HEIC photo.' },
      { title: 'Adjust color saturation', description: 'Drag the saturation slider (-100% to +100%) or select a preset like Muted, Vivid, or Pop.' },
      { title: 'Download your photo', description: 'Compare before and after and save directly to your device.' },
    ],
    features: [
      { title: 'Luminance-Preserving Saturation', description: 'Adjusts color intensity relative to perceived brightness so tones stay natural.' },
      { title: 'Grayscale to Hyper-Vivid', description: 'Slide to -100% for instant black-and-white or push positive for rich, vibrant colors.' },
      { title: 'Live Before/After Preview', description: 'Toggle or drag the comparison view to avoid oversaturating skin tones.' },
      { title: 'Private & Free', description: 'No uploads, no accounts, and no watermarks.' },
    ],
    faqs: [
      { question: 'How do I make an image black and white?', answer: 'Set the Saturation slider to -100% (or click the Grayscale preset) and download.' },
      { question: 'Does saturation editing work on transparent PNGs?', answer: 'Yes. Alpha transparency is preserved when exporting as PNG or WebP.' },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Image Filters',
    shortDescription: 'Apply grayscale, sepia, vintage, warm, cool & noir presets with intensity.',
    category: 'crop-edit',
    seoTitle: 'Free Online Image Filters – Vintage, Sepia, Noir & Warm Effects',
    seoDescription:
      'Apply photo filters online free: Grayscale, Sepia, Vintage, Warm, Cool, High Contrast, Matte Fade, and B&W Noir with adjustable intensity in your browser.',
    h1: 'Free Online Image Filters',
    subtitle:
      'Transform photos instantly with 11 curated color filters — from Vintage and Golden Hour to B&W Noir — with an Intensity slider to dial in the exact look.',
    howToSteps: [
      { title: 'Upload a photo', description: 'Drop any JPG, PNG, WebP, or HEIC file.' },
      { title: 'Pick a filter & intensity', description: 'Click any live filter thumbnail and blend from 0% to 100% intensity.' },
      { title: 'Download filtered photo', description: 'Compare before and after, choose output format, and save.' },
    ],
    features: [
      { title: '11+ Curated Filter Presets', description: 'Includes Grayscale, Sepia, Vintage, Warm, Cool, High Contrast, Matte Fade, Dramatic, B&W Noir, Golden Hour, and Invert.' },
      { title: 'Smooth Intensity Slider', description: 'Blend any filter smoothly between 0% and 100% instead of being stuck with harsh defaults.' },
      { title: 'Live Thumbnail Strip', description: 'Preview how every filter looks on your actual photo before picking one.' },
      { title: '100% Client-Side Canvas', description: 'Works offline-ready in your browser with zero server uploads.' },
    ],
    faqs: [
      { question: 'Can I control how strong a filter looks?', answer: 'Yes. Use the Filter Intensity slider (0%–100%) to dial back strong effects like Vintage or Noir.' },
      { question: 'Are filter effects applied at full image resolution?', answer: 'Yes. While preview thumbnails render fast, your final download is processed at full original pixel dimensions.' },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Add Background to Image',
    shortDescription: 'Place transparent or framed images on solid, gradient, or blur backdrops.',
    category: 'create',
    seoTitle: 'Add Background to Image Free – Solid, Gradient & Blur Backdrops',
    seoDescription:
      'Add a solid color, gradient, or blurred backdrop behind transparent PNGs or photos free in your browser. Set 1:1, 16:9, or 4:5 aspect ratios and download.',
    h1: 'Add Background to Image Online',
    subtitle:
      'Place transparent PNG logos or photos onto a solid color, custom gradient, or stylish blurred backdrop — ideal for 1:1 product listings, 16:9 banners, and 9:16 stories.',
    howToSteps: [
      { title: 'Upload your image or PNG', description: 'Drop a transparent PNG, logo, or photo.' },
      { title: 'Choose background & framing', description: 'Select Solid Color, Linear Gradient, or Blurred Image Backdrop, then pick aspect ratio, scale, corner radius, and shadow.' },
      { title: 'Download finished graphic', description: 'Export crisp PNG, JPG, or WebP ready for web or social media.' },
    ],
    features: [
      { title: '3 Background Modes', description: 'Choose Solid Color, Two-Color Gradient, or Blurred Photo Backdrop for pillarboxed vertical/horizontal shots.' },
      { title: 'Social & Web Aspect Ratios', description: 'Fit any photo into Original, 1:1 Square, 16:9 Widescreen, 9:16 Story, or 4:5 Portrait frames.' },
      { title: 'Foreground Scale, Radius & Shadow', description: 'Add breathing room, rounded corners, and soft drop shadows around your foreground image.' },
      { title: 'Zero Uploads', description: 'Renders locally via HTML5 Canvas with instant download.' },
    ],
    faqs: [
      { question: 'How does Blurred Background mode work?', answer: 'It places a scaled, softly blurred version of your own photo behind the sharp foreground image — ideal for turning vertical phone photos into 16:9 or 1:1 posts without cropping.' },
      { question: 'Can I use this to put a white background behind a transparent PNG?', answer: 'Yes. Select Solid Color, pick #FFFFFF, and export as JPG or PNG.' },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Image Splitter',
    shortDescription: 'Split images into N×M grid tiles or strips and download as ZIP.',
    category: 'create',
    seoTitle: 'Online Image Splitter – Split Photo into Grid Tiles & Download ZIP',
    seoDescription:
      'Split an image into N x M grid tiles, horizontal strips, or vertical strips free in your browser. Preview every slice and download all tiles in a ZIP.',
    h1: 'Online Image Splitter (Grid & Strip Slicer)',
    subtitle:
      'Slice any image into exact grid tiles (e.g. 3×3 for Instagram grids), horizontal strips, or vertical columns — preview every cut line and download all tiles as a ZIP.',
    howToSteps: [
      { title: 'Upload an image to split', description: 'Drop any JPG, PNG, WebP, HEIC, or SVG image.' },
      { title: 'Choose Grid or Strip layout', description: 'Set Rows × Columns (up to 10×10), or switch to Horizontal Strips or Vertical Strips.' },
      { title: 'Preview tiles & download ZIP', description: 'Download individual tiles or click Download All Tiles (ZIP).' },
    ],
    features: [
      { title: 'Flexible Grid & Strip Modes', description: 'Split into custom Rows × Columns grids, horizontal rows, or vertical slices.' },
      { title: 'Live Cut-Line Preview', description: 'See numbered tile boundaries overlaid on your image before splitting.' },
      { title: 'Instant Tile Previews & ZIP', description: 'Inspect every generated tile and download all pieces cleanly named (`row_col`) in one ZIP.' },
      { title: 'Full-Resolution Slicing', description: 'Each tile is sliced cleanly from the full-resolution original canvas.' },
    ],
    faqs: [
      { question: 'How do I make a 3×3 Instagram grid from one photo?', answer: 'Choose Grid mode, set 3 Rows and 3 Columns, click Split Image, and download the ZIP of 9 numbered tiles.' },
      { question: 'Are tiles numbered in order?', answer: 'Yes. Tiles are named sequentially (`_r1_c1`, `_r1_c2`, etc.) from top-left to bottom-right.' },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Image DPI Changer',
    shortDescription: 'Change JPEG/PNG DPI metadata (72/150/300/custom) losslessly.',
    category: 'developer',
    seoTitle: 'Image DPI Changer Online Free – Convert to 300 DPI Losslessly',
    seoDescription:
      'Change image DPI metadata (72, 150, 300, 600, or custom DPI) in JPEG and PNG files without recompressing pixels. Runs locally in your browser.',
    h1: 'Image DPI Changer (Lossless Metadata Update)',
    subtitle:
      'Update the DPI (dots per inch) value stored in JPEG JFIF/EXIF and PNG pHYs headers — such as 72 DPI for web or 300 DPI for print — without recompressing a single pixel.',
    howToSteps: [
      { title: 'Upload JPG or PNG images', description: 'Drop one or multiple images to inspect their current DPI metadata.' },
      { title: 'Select target DPI', description: 'Choose 72, 96, 150, 300, 600 DPI or enter any custom value.' },
      { title: 'Update & verify DPI', description: 'Download the updated file with verified before/after DPI values — lossless for JPG and PNG.' },
    ],
    features: [
      { title: 'True Lossless JPEG & PNG Header Edit', description: 'Updates JFIF APP0/EXIF density in JPEGs and pHYs chunks (with valid CRC32) in PNGs without touching image pixels.' },
      { title: 'Verified Before & After Readback', description: 'Re-parses the output file automatically so you see the exact verified DPI stored in the file.' },
      { title: 'Batch DPI Processing', description: 'Update dozens of print-ready graphics at once and export them in a ZIP archive.' },
      { title: 'WebP/HEIC Fallback', description: 'Non-DPI formats can be cleanly converted to lossless PNG with the exact pHYs DPI chunk embedded.' },
    ],
    faqs: [
      { question: 'Does changing DPI change pixel dimensions or image quality?', answer: 'No! Changing DPI only updates the physical print-density tag in JPEG or PNG metadata. Pixel width, height, and pixel quality stay 100% untouched.' },
      { question: 'Why did my file say "Not specified" before changing DPI?', answer: 'Many cameras, screenshots, and web exports omit the JFIF/pHYs DPI tag. This tool writes a clean standard DPI header.' },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Image to Base64',
    shortDescription: 'Encode any image into a Base64 Data URL, HTML img, or CSS snippet.',
    category: 'developer',
    seoTitle: 'Image to Base64 Converter Online Free – Data URL & CSS Generator',
    seoDescription:
      'Convert JPG, PNG, WebP, SVG, GIF, or ICO images to Base64 Data URLs, raw Base64, HTML img tags, and CSS background snippets locally in your browser.',
    h1: 'Image to Base64 Converter',
    subtitle:
      'Encode any image into a ready-to-use Base64 Data URL, raw Base64 string, HTML <img> tag, or CSS background-image snippet — instantaneously on your device.',
    howToSteps: [
      { title: 'Upload or paste an image', description: 'Drop any JPG, PNG, WebP, SVG, GIF, BMP, or ICO image.' },
      { title: 'Pick output format', description: 'Switch between Data URL, Raw Base64, HTML <img> tag, or CSS url(...) snippet.' },
      { title: 'Copy or download', description: 'Copy the Base64 string in one click or download it as a .txt file.' },
    ],
    features: [
      { title: '4 Developer Output Formats', description: 'Generate Data URL, Raw Base64, HTML <img>, and CSS background-image snippets automatically.' },
      { title: 'Exact Byte & Character Metrics', description: 'Compare original binary file size vs encoded Base64 string length immediately.' },
      { title: 'One-Click Copy & TXT Download', description: 'Copy huge Base64 strings reliably to clipboard or save as a plain text file.' },
      { title: '100% Local FileReader Encoding', description: 'No uploads — encoding happens natively inside your browser tab.' },
    ],
    faqs: [
      { question: 'Why is the Base64 string ~33% larger than the original image file?', answer: 'Base64 encodes every 3 binary bytes into 4 ASCII characters, which adds roughly 33% size overhead.' },
      { question: 'Does it preserve SVG and animated GIF bytes?', answer: 'Yes. It encodes the exact raw file bytes using FileReader.readAsDataURL without altering the image.' },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/base64-to-image',
    name: 'Base64 to Image',
    shortDescription: 'Decode a Base64 Data URL or raw Base64 string back into an image.',
    category: 'developer',
    seoTitle: 'Base64 to Image Decoder Online Free – Preview & Download',
    seoDescription:
      'Decode Base64 strings or Data URLs back into PNG, JPG, WebP, GIF, or SVG images free in your browser. Instant preview, dimensions check, and download.',
    h1: 'Base64 to Image Decoder',
    subtitle:
      'Paste any Base64 Data URL (`data:image/...;base64,...`) or raw Base64 image string to decode, inspect dimensions, preview, and download as a real image file.',
    howToSteps: [
      { title: 'Paste your Base64 string', description: 'Paste either a full Data URL or raw Base64 bytes (MIME type is auto-detected from magic bytes).' },
      { title: 'Preview decoded image', description: 'See the live decoded image, detected format, pixel dimensions, and binary file size.' },
      { title: 'Download decoded file', description: 'Save directly in the decoded format or convert to PNG, JPG, or WebP.' },
    ],
    features: [
      { title: 'Auto-Detects Missing Data URL Prefix', description: 'Automatically identifies PNG, JPEG, GIF, WebP, BMP, and SVG magic headers even from raw Base64.' },
      { title: 'Instant Validation & Error Messages', description: 'Catches invalid Base64 characters or corrupted headers clearly.' },
      { title: 'Optional Format Conversion', description: 'Download the exact decoded binary or re-export as PNG, JPG, or WebP.' },
      { title: 'Private In-Browser Decoding', description: 'Safe for internal tokens, email assets, and proprietary UI icons.' },
    ],
    faqs: [
      { question: 'Do I need to include "data:image/png;base64," at the start?', answer: 'No! You can paste a full Data URL or just the raw Base64 string — the decoder inspects the first bytes to detect PNG, JPG, GIF, WebP, or SVG.' },
      { question: 'Can I convert a decoded WebP or GIF Base64 into a PNG?', answer: 'Yes. Choose PNG, JPG, or WebP in the download format selector.' },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Image Color Palette Extractor',
    shortDescription: 'Extract dominant colors from any photo with HEX, RGB, HSL & export.',
    category: 'developer',
    seoTitle: 'Image Color Palette Extractor – Get Dominant Colors from Photos',
    seoDescription:
      'Extract dominant color palettes from any image free in your browser. View 3–12 color swatches with HEX, RGB, HSL, percentage share, and CSS/JSON export.',
    h1: 'Image Color Palette Extractor',
    subtitle:
      'Automatically extract the dominant color palette from any photo, illustration, or UI screenshot using client-side Median-Cut quantization — with instant CSS, Tailwind, and JSON export.',
    howToSteps: [
      { title: 'Upload an image', description: 'Drop any JPG, PNG, WebP, HEIC, or SVG image.' },
      { title: 'Choose palette size (3–12 colors)', description: 'Adjust the color count slider to extract minimalist or rich palettes instantly.' },
      { title: 'Copy swatches or export palette', description: 'Copy any HEX, RGB, or HSL code or download CSS variables, JSON, or a PNG palette card.' },
    ],
    features: [
      { title: 'Median-Cut Color Quantization', description: 'Groups millions of image pixels into balanced, representative dominant swatches in milliseconds.' },
      { title: 'HEX, RGB, HSL & Dominance %', description: 'Every swatch shows exact color codes and how much of the image it occupies.' },
      { title: 'Developer Exports + PNG Card', description: 'Export as CSS custom properties, JSON, Tailwind snippet, or a shareable PNG palette card.' },
      { title: '100% Browser-Native', description: 'Analyzes pixels locally on HTML5 Canvas without uploading images.' },
    ],
    faqs: [
      { question: 'How many colors can I extract from an image?', answer: 'Use the Palette Size slider to extract anywhere from 3 to 12 dominant colors.' },
      { question: 'What is the difference between Color Picker and Palette Extractor?', answer: 'Color Picker lets you sample an exact single pixel with a magnifier, while Palette Extractor analyzes the entire image to find its dominant color scheme.' },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
];

export const TOOL_BY_SLUG: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY.map((t) => [t.slug, t])
);
