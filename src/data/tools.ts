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
  {
    slug: '/gif-maker',
    name: 'GIF Maker',
    shortDescription: 'Create animated GIFs from JPG, PNG & WebP with frame delay & loop control.',
    category: 'create',
    seoTitle: 'Free Animated GIF Maker Online – Create GIF from Images in Browser',
    seoDescription:
      'Turn JPG, PNG, WebP, and HEIC images into an animated GIF right in your browser. Reorder frames, set global or per-frame delay, loop count, size, and quality.',
    h1: 'Free Online Animated GIF Maker',
    subtitle:
      'Combine photos and screenshots into smooth animated GIFs completely inside your browser — reorder frames, customize global or per-frame delays, loop count, and size with zero watermarks.',
    howToSteps: [
      {
        title: 'Upload frames',
        description:
          'Drop two or more JPG, PNG, WebP, HEIC, BMP, or SVG images into the upload zone and drag frames into sequence.',
      },
      {
        title: 'Set timing, loop & dimensions',
        description:
          'Adjust global frame duration or custom per-frame delays, choose Forever, Set Loops, or Play Once, and pick output width, height, and quality.',
      },
      {
        title: 'Generate, preview & download',
        description:
          'Click Generate Animated GIF to encode locally in your browser, watch the live animation preview, and download your .gif file.',
      },
    ],
    features: [
      {
        title: 'Real Client-Side GIF89a Encoding',
        description:
          'Uses a fast in-browser color quantizer and LZW GIF encoder (lazy-loaded on demand) — zero external API calls or server uploads.',
      },
      {
        title: 'Global & Per-Frame Delays',
        description:
          'Set a uniform frame speed in milliseconds or FPS presets, and optionally override timing on individual key frames.',
      },
      {
        title: 'Flexible Loop & Fit Controls',
        description:
          'Choose Forever looping, Play Once, or an exact play count, plus Contain or Cover frame fitting.',
      },
      {
        title: 'Large File Size Warning',
        description:
          'Automatically warns you when an encoded GIF becomes heavy (over 5–15 MB) so you can optimize dimensions or quality for chat apps.',
      },
    ],
    faqs: [
      {
        question: 'Are my photos uploaded to a server to create the GIF?',
        answer:
          'No. The GIF encoder runs 100% locally inside your browser tab, so your images and animations never leave your device.',
      },
      {
        question: 'Can I give different frames different durations?',
        answer:
          'Yes. Each frame card includes an optional custom Delay (ms) field so you can pause longer on a title or final frame.',
      },
      {
        question: 'Why did a large GIF warning appear?',
        answer:
          'GIF is an uncompressed-frame palette format that grows fast at high resolutions. Lowering width/height to 480px–640px or slightly reducing quality shrinks file size dramatically.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Image Collage Maker',
    shortDescription: 'Arrange photos in 2×2, 3×3 grids or strips with drag swap & export.',
    category: 'create',
    seoTitle: 'Free Online Photo Collage Maker – Grid & Strip Collage Generator',
    seoDescription:
      'Create photo collages online free with 2x2 grid, 3x3 grid, vertical strip, and horizontal strip layouts. Drag cells to rearrange, customize gaps, and export JPG or PNG.',
    h1: 'Free Online Image Collage Maker',
    subtitle:
      'Combine multiple photos into clean 2×2 grids, 3×3 grids, or vertical and horizontal strips — drag cells to rearrange, customize gap spacing, proportions, and background color, and export as JPG or PNG.',
    howToSteps: [
      {
        title: 'Upload your photos',
        description:
          'Drop multiple JPG, PNG, WebP, HEIC, or SVG images into the collage studio.',
      },
      {
        title: 'Pick layout & rearrange cells',
        description:
          'Switch between 2×2 Grid, 3×3 Grid, Vertical Strip, or Horizontal Strip, and drag cells (or tap to swap) into the order you want.',
      },
      {
        title: 'Customize spacing & download',
        description:
          'Adjust gap size, cell proportions, rounded corners, background color, and output dimensions, then export JPG or PNG.',
      },
    ],
    features: [
      {
        title: '4 Clean Collage Layouts',
        description:
          'Build balanced 2×2 squares, 3×3 photo grids, vertical mobile stories, or wide horizontal comparison strips.',
      },
      {
        title: 'Drag-and-Drop Cell Rearrangement',
        description:
          'Drag any photo cell onto another slot to swap positions immediately, or tap two cells on mobile.',
      },
      {
        title: 'Custom Cell Proportions & Gaps',
        description:
          'Fine-tune column splits, row splits, lead-cell emphasis, gap spacing, corner roundness, and background color.',
      },
      {
        title: 'High-Resolution JPG & PNG Export',
        description:
          'Render full-resolution collages up to 4000px directly on HTML5 Canvas with zero watermarks.',
      },
    ],
    faqs: [
      {
        question: 'Can I drag photos between collage cells after uploading?',
        answer:
          'Yes. Drag any cell card over another cell in the grid (or tap two cells one after another on a touchscreen) to swap their positions.',
      },
      {
        question: 'Can I make the cells different sizes instead of equal squares?',
        answer:
          'Yes. Use the Column Split, Row Split, or Lead Cell Emphasis sliders to resize cell proportions live.',
      },
      {
        question: 'Should I download my collage as JPG or PNG?',
        answer:
          'Choose JPG for smaller photo files ideal for social sharing, or PNG for lossless crispness on screenshots and graphic layouts.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Compress Image to 50KB',
    shortDescription: 'Shrink JPG, PNG & WebP photos strictly under 50KB for forms.',
    category: 'compress',
    seoTitle: 'Compress Image to 50KB Online Free – Exact Size Reducer',
    seoDescription:
      'Compress JPG, PNG, WebP, or HEIC images to 50KB or less right in your browser. Automatic quality binary search and dimension scaling with honest output size.',
    h1: 'Compress Image to 50KB Online',
    subtitle:
      'Shrink photos, ID scans, and signatures under 50KB for government portals, passport applications, and strict upload forms — 100% locally in your browser.',
    howToSteps: [
      {
        title: 'Upload your image',
        description: 'Drop JPG, PNG, WebP, or HEIC images up to 25 MB (or paste with Ctrl+V).',
      },
      {
        title: 'Auto-optimize toward 50KB',
        description:
          'Binary quality search and optional dimension scaling automatically find the sharpest output under 50KB.',
      },
      {
        title: 'Verify & download',
        description:
          'Check the verified output size badge and before/after comparison, then download individually or as a ZIP.',
      },
    ],
    features: [
      {
        title: 'Binary Quality Search + Dimension Scaling',
        description:
          'Finds the highest visual quality under 50KB first at original pixels, then scales resolution smoothly if needed.',
      },
      {
        title: 'Honest Result Reporting',
        description:
          'Never fakes output size — if a lossless PNG or locked resolution cannot fit under 50KB, it explains why clearly.',
      },
      {
        title: 'Smart PNG to WebP/JPG Fallback',
        description:
          'Optionally converts heavy lossless PNGs to WebP or JPG so photos stay sharp while hitting 50KB.',
      },
      {
        title: 'Private Browser Processing',
        description: 'Passports, ID photos, and personal forms never leave your device.',
      },
    ],
    faqs: [
      {
        question: 'How does Compress Image to 50KB reach such a small file size?',
        answer:
          'It runs a fast binary search across JPEG/WebP quality levels and progressively scales pixel dimensions only when quality reduction alone is not enough.',
      },
      {
        question: 'Why did my PNG not reach 50KB when PNG format was locked?',
        answer:
          'PNG is lossless and ignores quality sliders. Switch format to JPG or WebP (or leave Format on Original with Auto-convert enabled) to easily hit 50KB.',
      },
      {
        question: 'Can I compress multiple photos under 50KB at once?',
        answer: 'Yes. Drop a batch of images and download them all together in one ZIP file.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/image-resizer',
    ],
  },
  {
    slug: '/compress-image-to-100kb',
    name: 'Compress Image to 100KB',
    shortDescription: 'Reduce image size under 100KB cleanly without visible blur.',
    category: 'compress',
    seoTitle: 'Compress Image to 100KB Online Free – Reduce Photo Size',
    seoDescription:
      'Reduce JPG, PNG, WebP, or HEIC images under 100KB free in your browser. Smart quality search and optional dimension scaling keep photos sharp for web & email.',
    h1: 'Compress Image to 100KB Online',
    subtitle:
      'Hit the sweet spot for websites, job applications, and email attachments — automatically compress images below 100KB while maximizing visual sharpness.',
    howToSteps: [
      {
        title: 'Upload photos',
        description: 'Drag and drop one or many JPG, PNG, WebP, or HEIC images.',
      },
      {
        title: 'Smart 100KB optimization',
        description:
          'The compressor searches for the highest quality setting and resolution that stays under 100KB.',
      },
      {
        title: 'Compare & download',
        description:
          'Inspect side-by-side quality and exact byte count before downloading.',
      },
    ],
    features: [
      {
        title: 'Max Quality Under 100KB',
        description:
          'Instead of using an arbitrary low quality slider, binary search locks onto the highest quality below 100KB.',
      },
      {
        title: 'Preserves Resolution When Possible',
        description:
          'Keeps 100% original pixel width and height whenever quality adjustment alone meets the 100KB cap.',
      },
      {
        title: 'Transparent Limitation Alerts',
        description:
          'Clearly notifies you if locked PNG or unscaled 4K settings prevent reaching 100KB.',
      },
      {
        title: '100% Local Privacy',
        description: 'No uploads, no watermarks, and no registration required.',
      },
    ],
    faqs: [
      {
        question: 'Will a 100KB image still look sharp on a website?',
        answer:
          'Yes! At standard web widths (800px–1400px), modern WebP and JPG photos under 100KB retain crisp detail with virtually no visible artifacts.',
      },
      {
        question: 'Does this also strip heavy camera EXIF metadata?',
        answer:
          'Yes. Re-encoding via HTML5 Canvas automatically strips embedded thumbnails and EXIF blocks, leaving more bytes for actual image pixels.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-200kb',
      '/web-image-optimizer',
      '/target-file-size-compressor',
    ],
  },
  {
    slug: '/compress-image-to-200kb',
    name: 'Compress Image to 200KB',
    shortDescription: 'Optimize photos under 200KB for blogs, CMS uploads & portals.',
    category: 'compress',
    seoTitle: 'Compress Image to 200KB Online Free – Web & CMS Optimizer',
    seoDescription:
      'Compress large photos to 200KB or less free in your browser. Ideal for WordPress, Shopify, and online portals with full resolution retention whenever possible.',
    h1: 'Compress Image to 200KB Online',
    subtitle:
      'Keep high-resolution product shots and blog banners crisp while strictly staying below 200KB for WordPress, Shopify, and CMS upload caps.',
    howToSteps: [
      {
        title: 'Add your images',
        description: 'Upload one or multiple high-res JPG, PNG, WebP, or HEIC files.',
      },
      {
        title: 'Optimize to 200KB',
        description:
          'Automatic binary search finds the ideal quality/scale balance just beneath 200KB.',
      },
      {
        title: 'Inspect & save',
        description: 'Compare before and after pixels and download individually or as ZIP.',
      },
    ],
    features: [
      {
        title: 'CMS & Marketplace Ready',
        description: 'Great for Shopify, WooCommerce, WordPress, and Google Business uploads.',
      },
      {
        title: 'Smart Fallback Scaling',
        description:
          'If a 24MP camera photo cannot fit under 200KB at full size, dimension scaling kicks in cleanly.',
      },
      {
        title: 'Exact KB Verification',
        description: 'Displays verified output bytes alongside original bytes and % reduction.',
      },
      {
        title: 'Zero Server Uploads',
        description: 'Fast HTML5 Canvas processing directly on your computer or phone.',
      },
    ],
    faqs: [
      {
        question: 'Can a 4K smartphone photo be compressed to 200KB?',
        answer:
          'Yes. With intelligent dimension scaling enabled, 12MP–24MP photos compress smoothly under 200KB while looking crisp on desktop and mobile screens.',
      },
      {
        question: 'What if I want to prevent resizing?',
        answer:
          'Uncheck "Allow intelligent dimension scaling". If minimum quality still exceeds 200KB, the tool will honestly display the smallest size achievable at original dimensions.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-500kb',
      '/web-image-optimizer',
      '/bulk-image-compressor',
    ],
  },
  {
    slug: '/compress-image-to-500kb',
    name: 'Compress Image to 500KB',
    shortDescription: 'Shrink multi-megabyte photos under 500KB with ultra-high quality.',
    category: 'compress',
    seoTitle: 'Compress Image to 500KB Online Free – High-Resolution Shrinker',
    seoDescription:
      'Compress multi-megabyte camera photos and graphics under 500KB free in your browser without sacrificing clarity or full dimensions.',
    h1: 'Compress Image to 500KB Online',
    subtitle:
      'Turn 5MB–15MB DSLR or smartphone photos into crisp, sub-500KB files ready for portfolios, print proofs, and fast uploads — processed locally.',
    howToSteps: [
      {
        title: 'Drop large photos',
        description: 'Upload heavy JPG, PNG, WebP, or iPhone HEIC files up to 25 MB each.',
      },
      {
        title: 'Precision quality search',
        description:
          'Finds the highest JPEG/WebP quality factor below 500KB while preserving original dimensions.',
      },
      {
        title: 'Download optimized files',
        description: 'Save single files or package multiple results into a ZIP.',
      },
    ],
    features: [
      {
        title: 'Near-Lossless 500KB Compression',
        description:
          '500KB gives plenty of headroom to keep large 1920px–4000px images visually indistinguishable from the original.',
      },
      {
        title: 'Automatic HEIC Decoding',
        description: 'Supports iPhone HEIC/HEIF photos locally via client-side WebAssembly.',
      },
      {
        title: 'No Quality Guesswork',
        description: 'Stops sliding percentages manually — let binary search maximize quality under 500KB.',
      },
      {
        title: '100% Browser Private',
        description: 'Nothing is uploaded to remote servers.',
      },
    ],
    faqs: [
      {
        question: 'If my photo is already 300KB, what will happen?',
        answer:
          'The compressor detects that it is already below 500KB and exports a clean, high-quality copy at full resolution.',
      },
      {
        question: 'Which format preserves the most detail under 500KB?',
        answer:
          'WebP typically retains more fine texture per kilobyte than JPG, though both deliver sharp results at 500KB.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/bulk-image-compressor',
      '/',
    ],
  },
  {
    slug: '/bulk-image-compressor',
    name: 'Bulk Image Compressor',
    shortDescription: 'Batch compress dozens of images at once and export a single ZIP.',
    category: 'compress',
    seoTitle: 'Bulk Image Compressor Online Free – Batch Shrink & ZIP Download',
    seoDescription:
      'Bulk compress multiple JPG, PNG, WebP, and HEIC images free in your browser. Track batch progress, compare quality, and download all images in one ZIP file.',
    h1: 'Free Bulk Image Compressor',
    subtitle:
      'Compress entire folders of photos and web graphics simultaneously in your browser — review per-file savings, inspect before/after sliders, and export one clean ZIP.',
    howToSteps: [
      {
        title: 'Drop a batch of images',
        description: 'Select or drag dozens of JPG, PNG, WebP, or HEIC images into the dropzone.',
      },
      {
        title: 'Choose profile or custom quality',
        description:
          'Pick Web Fast (WebP 75%), Email Friendly (JPG 65%), High Fidelity (85%), or adjust the custom slider and output format.',
      },
      {
        title: 'Download All (ZIP)',
        description:
          'Review total MB saved across the batch and click Download All (ZIP) to save every optimized file together.',
      },
    ],
    features: [
      {
        title: 'Batch Progress & Savings Totals',
        description:
          'Shows live file-by-file progress plus aggregate total MB and percentage saved across your whole batch.',
      },
      {
        title: 'One-Click Quick Batch Profiles',
        description: 'Apply WebP, Email/JPG, or High-Fidelity presets across every file instantly.',
      },
      {
        title: 'Per-File Comparison Modal',
        description: 'Inspect any individual compressed photo against its original before downloading.',
      },
      {
        title: 'Zero Batch Limits',
        description: 'Compress as many images as your device memory allows with no paid tier or server queues.',
      },
    ],
    faqs: [
      {
        question: 'How many images can I bulk compress at once?',
        answer:
          'There is no artificial count cap — you can process 20, 50, or more photos in one session right inside your browser memory.',
      },
      {
        question: 'Can I convert the whole batch to WebP while compressing?',
        answer:
          'Yes. Select WebP in Output Format (or click the Web Fast quick profile) and click Re-compress All.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-resizer',
      '/bulk-image-converter',
      '/web-image-optimizer',
      '/',
    ],
  },
  {
    slug: '/target-file-size-compressor',
    name: 'Target File Size Compressor',
    shortDescription: 'Compress any image to your exact custom KB or MB limit.',
    category: 'compress',
    seoTitle: 'Target File Size Image Compressor – Compress to Exact KB or MB',
    seoDescription:
      'Compress any image to your exact target file size in KB or MB online free. Intelligent quality binary search and dimension scaling with honest results in your browser.',
    h1: 'Target File Size Image Compressor',
    subtitle:
      'Enter any custom KB or MB limit (like 30KB, 150KB, or 2MB) and let our binary quality + scaling optimizer hit your exact size target locally in your browser.',
    howToSteps: [
      {
        title: 'Set your exact KB or MB goal',
        description: 'Type any target file size or click quick presets like 20KB, 100KB, or 1MB.',
      },
      {
        title: 'Upload images',
        description: 'Drop one or many JPG, PNG, WebP, HEIC, BMP, or SVG files.',
      },
      {
        title: 'Inspect & download',
        description:
          'Verify whether each file hit the exact target, read honest notes if scaling/format limits apply, and download.',
      },
    ],
    features: [
      {
        title: 'Custom KB & MB Targets',
        description: 'Dial in any target size from tiny 10KB avatars to multi-megabyte print uploads.',
      },
      {
        title: 'Two-Stage Quality + Scale Engine',
        description:
          'Tests quality levels at full resolution first, then steps dimensions down intelligently only when required.',
      },
      {
        title: 'Honest Miss Diagnostics',
        description:
          'Explains clearly when a lossless PNG or disabled scaling prevents reaching a strict size limit.',
      },
      {
        title: 'Batch ZIP Support',
        description: 'Compress multiple files to the same KB target and download all in one ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Why couldn’t my image reach a tiny target like 5KB?',
        answer:
          'Every image file has minimum format headers and encoded block overhead. If 5KB is impossible without destroying readability, the tool reports the smallest honest size achieved.',
      },
      {
        question: 'Should I keep Allow Dimension Scaling enabled?',
        answer:
          'Yes, especially when compressing multi-megabyte photos below 200KB. Quality reduction alone on a 4000×3000px image often hits a floor around 250–400KB.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/compress-image-to-500kb',
    ],
  },
  {
    slug: '/bulk-image-resizer',
    name: 'Bulk Image Resizer',
    shortDescription: 'Resize dozens of images by max dimensions, width, or % + ZIP.',
    category: 'resize',
    seoTitle: 'Bulk Image Resizer Online Free – Batch Resize & ZIP Download',
    seoDescription:
      'Bulk resize multiple JPG, PNG, WebP, and HEIC images online free. Fit within max WxH, set uniform width, or scale by percentage with single ZIP download in browser.',
    h1: 'Free Online Bulk Image Resizer',
    subtitle:
      'Resize dozens of mixed-orientation photos in one pass — fit within a max bounding box, standardize column widths, or scale by percentage without enlarging smaller shots.',
    howToSteps: [
      {
        title: 'Upload multiple images',
        description: 'Drag and drop product photos, screenshots, or camera folders.',
      },
      {
        title: 'Pick batch resize strategy',
        description:
          'Choose Fit Max W×H (ideal for mixed landscape/portrait), Uniform Width, Exact W×H, or Percentage Scale.',
      },
      {
        title: 'Resize & export ZIP',
        description: 'Inspect before/after dimensions per file and download the full batch as a ZIP.',
      },
    ],
    features: [
      {
        title: 'Fit Max Bounding Box Mode',
        description:
          'Safely shrinks both wide landscapes and tall portraits inside e.g. 1200×1200px without cropping or distortion.',
      },
      {
        title: 'No-Upscale Protection',
        description:
          'Keep "Do not enlarge smaller images" checked so small assets stay crisp instead of getting stretched.',
      },
      {
        title: 'Format & Quality Controls',
        description: 'Optionally convert resized outputs to WebP or JPG at the same time.',
      },
      {
        title: 'One-Click ZIP Packaging',
        description: 'Download dozens of resized images cleanly named inside one ZIP file.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between Fit Max W×H and Exact W×H?',
        answer:
          'Fit Max W×H preserves each photo’s natural aspect ratio so its longest side stays within your limit. Exact W×H forces every output to identical pixel dimensions using Contain, Cover, or Stretch.',
      },
      {
        question: 'Can I avoid enlarging icons or small thumbnails in a mixed batch?',
        answer: 'Yes. Leave "Do not enlarge smaller images" checked.',
      },
    ],
    relatedSlugs: [
      '/image-resizer',
      '/bulk-image-compressor',
      '/bulk-image-converter',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/bulk-image-converter',
    name: 'Bulk Image Converter',
    shortDescription: 'Convert multiple JPG, PNG, HEIC, SVG & BMP files at once + ZIP.',
    category: 'convert',
    seoTitle: 'Bulk Image Converter Online Free – Batch Format Conversion + ZIP',
    seoDescription:
      'Bulk convert JPG, PNG, WebP, HEIC, SVG, BMP, and GIF images to WebP, JPG, or PNG in your browser. Batch progress, quality slider, and single ZIP download.',
    h1: 'Free Bulk Image Converter',
    subtitle:
      'Convert folders of mixed formats — including iPhone HEIC, transparent PNGs, SVGs, and legacy BMPs — cleanly into WebP, JPG, or PNG in one browser batch.',
    howToSteps: [
      {
        title: 'Drop mixed-format files',
        description: 'Upload JPG, PNG, WebP, HEIC, SVG, BMP, GIF, or AVIF files together.',
      },
      {
        title: 'Choose WebP, JPG, or PNG',
        description:
          'Set your output format, quality slider, optional filename suffix (like _web), and JPEG matte color.',
      },
      {
        title: 'Download all in ZIP',
        description:
          'Review each file’s output size and download individually or together as one ZIP archive.',
      },
    ],
    features: [
      {
        title: 'Mixed-Input Batch Pipeline',
        description: 'Drop HEICs, PNGs, SVGs, and JPEGs together in one batch and unify them into one format.',
      },
      {
        title: 'Transparency Matte & Suffix Options',
        description: 'Customize white or colored JPG matte backgrounds and add optional filename suffixes cleanly.',
      },
      {
        title: 'Batch Size Summary',
        description: 'See aggregate original size vs converted size across the entire batch.',
      },
      {
        title: '100% Local WebAssembly & Canvas',
        description: 'No files are ever uploaded — even iPhone HEIC conversion runs on your device.',
      },
    ],
    faqs: [
      {
        question: 'Can I batch convert dozens of iPhone HEIC photos to JPG?',
        answer:
          'Yes! Select all your .heic files, pick JPG, and click Download All (ZIP) — everything decodes privately on your device.',
      },
      {
        question: 'Does bulk converting to PNG or WebP keep transparency?',
        answer: 'Yes. Both PNG and WebP preserve full alpha transparency.',
      },
    ],
    relatedSlugs: [
      '/image-converter',
      '/bulk-image-compressor',
      '/bulk-image-resizer',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/web-image-optimizer',
    name: 'Web Image Optimizer',
    shortDescription: 'Optimize hero, product & card images for Core Web Vitals speed.',
    category: 'compress',
    seoTitle: 'Web Image Optimizer Free – Speed Up Websites & Core Web Vitals',
    seoDescription:
      'Optimize website images for fast loading and Core Web Vitals (LCP). One-click WebP presets for Hero banners, E-commerce products, thumbnails, and OG cards.',
    h1: 'Web Image Optimizer (Core Web Vitals Ready)',
    subtitle:
      'Turn heavy raw graphics into fast-loading WebP or JPG website assets using battle-tested dimension caps, EXIF stripping, and copyable responsive HTML tags.',
    howToSteps: [
      {
        title: 'Pick a web use-case preset',
        description:
          'Choose Hero Banner (1600px WebP), Product Photo (1200px WebP), Thumbnail (640px WebP), or customize settings.',
      },
      {
        title: 'Upload website images',
        description: 'Drop raw JPG, PNG, SVG, or HEIC assets — metadata is stripped automatically.',
      },
      {
        title: 'Download assets & copy HTML',
        description:
          'Compare before/after page weight, copy `<img width height loading="lazy" />` snippets, and download individual files or ZIP.',
      },
    ],
    features: [
      {
        title: 'Web-Ready Presets',
        description:
          'Pre-configured dimension caps and WebP/JPG quality sweet spots tailored for LCP and PageSpeed Insights.',
      },
      {
        title: 'Copyable <img> HTML Snippet',
        description:
          'Generates responsive `width`, `height`, `loading="lazy"`, and `decoding="async"` attributes to prevent layout shift (CLS).',
      },
      {
        title: 'Automatic EXIF Stripping & Upscale Guard',
        description: 'Strips bloated camera metadata and avoids needlessly upscaling smaller icons.',
      },
      {
        title: 'Interactive Before/After Inspector',
        description: 'Verify visual clarity side-by-side before deploying assets to production.',
      },
    ],
    faqs: [
      {
        question: 'Why does Web Image Optimizer default to WebP?',
        answer:
          'WebP typically cuts file weight by 25–35% compared to JPG and 70%+ compared to PNG while supporting transparency and universal modern browser compatibility.',
      },
      {
        question: 'Why include width and height attributes in the copied <img> tag?',
        answer:
          'Explicit width and height let browsers reserve exact aspect-ratio space before images finish loading, eliminating Cumulative Layout Shift (CLS).',
      },
    ],
    relatedSlugs: [
      '/bulk-image-compressor',
      '/compress-image-to-100kb',
      '/image-resizer',
      '/image-converter',
    ],
  },
  {
    slug: '/gif-compressor',
    name: 'GIF Compressor',
    shortDescription: 'Compress animated GIFs by reducing palette colors, scale & frames.',
    category: 'compress',
    seoTitle: 'Free Online GIF Compressor – Shrink Animated GIF Size in Browser',
    seoDescription:
      'Compress animated GIF files online free in your browser. Reduce palette colors, scale dimensions, or drop redundant frames while keeping smooth animation timing.',
    h1: 'Free Online Animated GIF Compressor',
    subtitle:
      'Shrink heavy animated GIFs right inside your browser by optimizing color palettes, scaling resolution, or reducing frame rate — with live before/after playback.',
    howToSteps: [
      {
        title: 'Upload your animated GIF',
        description: 'Drop any GIF87a or GIF89a animation up to 30 MB.',
      },
      {
        title: 'Tune colors, scale & frame rate',
        description:
          'Pick Light, Balanced, or Max Shrink presets, or dial in palette colors (16–256), scale percentage, and frame skipping.',
      },
      {
        title: 'Preview & download compressed GIF',
        description:
          'Watch both Original and Compressed animations side-by-side and download your lighter .gif.',
      },
    ],
    features: [
      {
        title: 'True Client-Side GIF Re-Encoding',
        description:
          'Decodes GIF frames, disposal methods, and loop counts locally, then re-encodes using lazy-loaded color quantization — zero server uploads.',
      },
      {
        title: '3 Compression Levers',
        description:
          'Shrink size via palette color reduction (256 → 32 colors), dimension scaling (100% → 25%), and smart frame skipping.',
      },
      {
        title: 'Timing-Preserving Frame Skipping',
        description:
          'When dropping every 2nd or 3rd frame, kept frame delays automatically combine so playback speed stays natural.',
      },
      {
        title: 'Honest Byte Comparison',
        description:
          'Displays exact before/after file size and frame counts — and tells you clearly when stronger palette or scale reduction is needed.',
      },
    ],
    faqs: [
      {
        question: 'Does GIF Compressor keep my GIF animated?',
        answer:
          'Yes! Every frame, timing delay, transparency mask, and loop setting is decoded and re-encoded into a genuine animated GIF.',
      },
      {
        question: 'Why did re-encoding at 100% scale and 128 colors not shrink my already-tiny GIF?',
        answer:
          'Some GIFs are already heavily palette-optimized with small delta rectangles. Lowering Colors (64 or 32), Scale (75% or 50%), or enabling Frame Dropping usually yields big reductions.',
      },
      {
        question: 'Are my GIFs uploaded anywhere?',
        answer: 'No. Decoding and re-encoding run 100% locally in your browser memory.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'HEIC to JPG',
    shortDescription: 'Convert Apple iPhone HEIC/HEIF photos to universal JPG in browser.',
    category: 'convert',
    seoTitle: 'HEIC to JPG Converter Free Online – Convert iPhone Photos Locally',
    seoDescription:
      'Convert HEIC and HEIF images to universal JPG online free. 100% browser-based via client-side WebAssembly decoding — private, batch ZIP, no server upload.',
    h1: 'Free Online HEIC to JPG Converter',
    subtitle:
      'Turn Apple iPhone HEIC and HEIF photos into universally compatible JPG files right inside your browser — private, fast, and supporting batch ZIP download.',
    howToSteps: [
      {
        title: 'Drop HEIC or HEIF photos',
        description: 'Select one or dozens of .heic / .heif images directly from your iPhone, Mac, or PC.',
      },
      {
        title: 'Adjust JPG quality',
        description: 'Keep the balanced 90% default for near-lossless photos or lower quality for smaller email attachments.',
      },
      {
        title: 'Download JPG or ZIP',
        description: 'Compare before and after visually and download individual JPGs or all files in a single ZIP archive.',
      },
    ],
    features: [
      {
        title: 'Client-Side WebAssembly HEIC Decoding',
        description: 'Uses heic2any inside your browser tab so private camera roll photos never get uploaded to external servers.',
      },
      {
        title: 'Batch Conversion + ZIP Export',
        description: 'Convert entire folders of iPhone HEIC shots to JPG in one queue and grab everything in one ZIP.',
      },
      {
        title: 'Custom JPG Quality Slider',
        description: 'Fine-tune output compression from 20% to 100% depending on whether you prioritize detail or tiny file size.',
      },
      {
        title: 'EXIF Privacy Stripped by Canvas',
        description: 'Canvas re-encoding naturally strips hidden GPS coordinates and camera serial metadata.',
      },
    ],
    faqs: [
      {
        question: 'Are my iPhone HEIC photos uploaded to a server?',
        answer: 'No. HEIC decoding and JPG encoding run 100% locally in your browser memory via WebAssembly and HTML5 Canvas.',
      },
      {
        question: 'Does it support both .heic and .heif extensions?',
        answer: 'Yes. Both .heic and .heif containers are decoded automatically and exported as standard .jpg files.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'JPG to PNG',
    shortDescription: 'Convert JPG/JPEG photos to lossless PNG images in your browser.',
    category: 'convert',
    seoTitle: 'JPG to PNG Converter Free Online – Lossless Browser Conversion',
    seoDescription:
      'Convert JPG and JPEG images to lossless PNG online free in your browser. Zero upload, batch ZIP download, sharp pixel fidelity, and instant visual comparison.',
    h1: 'Free Online JPG to PNG Converter',
    subtitle:
      'Convert JPG and JPEG images into lossless PNG files locally in your browser — ideal when workflows, print portals, or editors strictly require .png uploads.',
    howToSteps: [
      {
        title: 'Upload JPG files',
        description: 'Drag and drop one or multiple .jpg or .jpeg images from any device.',
      },
      {
        title: 'Automatic lossless conversion',
        description: 'Your browser decodes each JPEG and encodes a crisp, lossless PNG immediately.',
      },
      {
        title: 'Compare & download',
        description: 'Inspect the result in the before/after viewer and download individual PNGs or a batch ZIP.',
      },
    ],
    features: [
      {
        title: 'True Lossless PNG Output',
        description: 'Prevents additional lossy generation damage when preparing images for further editing or archiving.',
      },
      {
        title: 'Batch Queue & ZIP Packaging',
        description: 'Convert multiple JPEGs to PNG simultaneously and export them in one organized ZIP.',
      },
      {
        title: 'Zero Watermarks or Signups',
        description: 'Unlimited conversions directly in Chrome, Firefox, Safari, or Edge without creating an account.',
      },
      {
        title: '100% Local Processing',
        description: 'Images stay inside your browser tab — nothing touches a remote server.',
      },
    ],
    faqs: [
      {
        question: 'Why is the converted PNG larger than my original JPG?',
        answer: 'JPG uses lossy compression while PNG is lossless. Converting a photo to PNG preserves every pixel without adding JPEG artifacts, which naturally produces a larger file.',
      },
      {
        question: 'Will converting JPG to PNG automatically make the background transparent?',
        answer: 'No. Standard JPG files have no transparency channel. If you want a transparent background, pair conversion with an editor or add a custom backdrop.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'PNG to JPG',
    shortDescription: 'Convert heavy PNGs to lightweight JPG with custom background matte.',
    category: 'convert',
    seoTitle: 'PNG to JPG Converter Free Online – Shrink PNGs & Pick Background Color',
    seoDescription:
      'Convert PNG to smaller JPG online free in your browser. Choose a custom matte background color for transparent PNGs, adjust quality, and download batch ZIPs.',
    h1: 'Free Online PNG to JPG Converter',
    subtitle:
      'Shrink oversized PNG screenshots and graphics into fast, lightweight JPG files — with a custom matte color picker for transparent backgrounds.',
    howToSteps: [
      {
        title: 'Drop PNG images',
        description: 'Upload one or multiple .png screenshots, product photos, or graphics.',
      },
      {
        title: 'Set quality & matte color',
        description: 'Pick your JPG quality percentage and choose white, black, or any hex color for transparent pixels.',
      },
      {
        title: 'Download smaller JPGs',
        description: 'Check the byte savings and download each JPG or the full batch as a ZIP.',
      },
    ],
    features: [
      {
        title: 'Custom Transparency Matte Fill',
        description: 'Transparent PNG areas cleanly blend onto white, black, or any custom background color instead of turning solid black.',
      },
      {
        title: 'Massive File Size Reduction',
        description: 'Converting photographic PNGs to 85% JPG often shrinks file weight by 60–85% instantly.',
      },
      {
        title: 'Before/After Visual Inspector',
        description: 'Verify crispness side-by-side before downloading so text and edges stay sharp.',
      },
      {
        title: 'Private Browser Execution',
        description: 'Confidential screenshots and documents stay safely on your own computer.',
      },
    ],
    faqs: [
      {
        question: 'What happens to transparent areas when converting PNG to JPG?',
        answer: 'Because JPG does not support alpha transparency, transparent areas are filled cleanly using the Matte Background Color selector (white by default).',
      },
      {
        question: 'What quality setting is best for PNG to JPG?',
        answer: '85%–90% delivers virtually indistinguishable visual quality while dramatically reducing file size compared to PNG.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'JPG to WebP',
    shortDescription: 'Convert JPG photos to next-gen WebP for faster websites & SEO.',
    category: 'convert',
    seoTitle: 'JPG to WebP Converter Free Online – Smaller Faster Web Images',
    seoDescription:
      'Convert JPG to WebP online free in your browser. Cut image weight by 25–35% for faster websites and Core Web Vitals with adjustable quality and batch ZIP download.',
    h1: 'Free Online JPG to WebP Converter',
    subtitle:
      'Convert standard JPG photos into modern WebP images to shrink page weight by 25–35% and speed up Core Web Vitals (LCP) without uploading files.',
    howToSteps: [
      {
        title: 'Upload JPG photos',
        description: 'Drop single photos or batches of .jpg / .jpeg assets from your site or store.',
      },
      {
        title: 'Tune WebP quality',
        description: '80%–85% WebP typically looks as sharp as 90% JPG while saving significant bandwidth.',
      },
      {
        title: 'Download WebP files',
        description: 'Compare original JPG vs converted WebP byte sizes and download individually or as a ZIP.',
      },
    ],
    features: [
      {
        title: 'Faster PageSpeed & LCP Scores',
        description: 'WebP is the recommended next-gen web format by Lighthouse and modern browsers.',
      },
      {
        title: 'Adjustable Quality Control',
        description: 'Dial compression anywhere from 20% to 100% and preview results immediately.',
      },
      {
        title: 'Batch Export to ZIP',
        description: 'Optimize entire blog or e-commerce image folders locally in seconds.',
      },
      {
        title: 'Zero Server Round-Trips',
        description: 'Uses your browser’s built-in WebP encoder — fast, offline-friendly, and private.',
      },
    ],
    faqs: [
      {
        question: 'Do all modern browsers support WebP?',
        answer: 'Yes. Chrome, Safari, Firefox, Edge, iOS, and Android all natively support WebP.',
      },
      {
        question: 'What quality value works best for JPG to WebP?',
        answer: '80%–85% gives the strongest balance between crisp visual detail and 25–35% smaller file sizes.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'WebP to JPG',
    shortDescription: 'Convert WebP downloads back into universally accepted JPG files.',
    category: 'convert',
    seoTitle: 'WebP to JPG Converter Free Online – Universal Compatibility',
    seoDescription:
      'Convert WebP images to standard JPG online free in your browser. Pick background matte color for transparent WebPs, control quality, and download batch ZIPs.',
    h1: 'Free Online WebP to JPG Converter',
    subtitle:
      'Turn downloaded .webp images into classic .jpg files compatible with legacy CMS tools, Microsoft Office, Photoshop CS6, and email clients.',
    howToSteps: [
      {
        title: 'Drop WebP images',
        description: 'Select one or multiple .webp files saved from the web.',
      },
      {
        title: 'Customize quality & matte color',
        description: 'Set JPG quality (default 88%) and pick a background color if your WebP has transparent edges.',
      },
      {
        title: 'Download standard JPGs',
        description: 'Save individual .jpg files or package the whole batch in a ZIP.',
      },
    ],
    features: [
      {
        title: 'Fixes Legacy Software Rejections',
        description: 'Easily convert WebP images for portals, printers, or older apps that only accept JPG.',
      },
      {
        title: 'Transparency-Safe Matte Fill',
        description: 'Transparent WebPs flatten smoothly onto white, black, or any hex background color.',
      },
      {
        title: 'High-Quality Re-Encoding',
        description: 'Default 88% quality keeps details sharp with minimal file size bloat.',
      },
      {
        title: '100% Browser-Native Privacy',
        description: 'No cloud queues or server uploads — runs instantly on your device.',
      },
    ],
    faqs: [
      {
        question: 'Why can’t some apps open .webp files?',
        answer: 'Many older desktop programs, print kiosks, and government upload forms only recognize .jpg and .png. Converting WebP to JPG solves that immediately.',
      },
      {
        question: 'Can I convert transparent WebP stickers to JPG cleanly?',
        answer: 'Yes — use the Matte Background Color picker to set white or any preferred color behind transparent areas.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'PNG to WebP',
    shortDescription: 'Convert transparent PNG graphics to compact transparent WebP.',
    category: 'convert',
    seoTitle: 'PNG to WebP Converter Free Online – Keep Transparency, Cut Size',
    seoDescription:
      'Convert PNG to WebP online free while keeping full alpha transparency. Shrink transparent logos, UI screenshots, and icons in your browser with batch ZIP export.',
    h1: 'Free Online PNG to WebP Converter',
    subtitle:
      'Dramatically reduce the weight of transparent PNG logos, UI graphics, and product cutouts by converting them to transparent WebP right in your browser.',
    howToSteps: [
      {
        title: 'Upload PNG graphics',
        description: 'Drop transparent icons, logos, screenshots, or illustrations (.png).',
      },
      {
        title: 'Select WebP quality',
        description: 'Adjust the quality slider (default 85%) — alpha transparency stays preserved at every setting.',
      },
      {
        title: 'Download lightweight WebPs',
        description: 'Compare file size savings and download individual WebP files or a batch ZIP.',
      },
    ],
    features: [
      {
        title: 'Full Alpha Transparency Preserved',
        description: 'Unlike JPG, WebP retains clean semi-transparent edges and drop shadows from your PNGs.',
      },
      {
        title: 'Up to 70% Smaller Assets',
        description: 'Replace multi-megabyte PNG heroes and cutouts with sleek WebP files for faster websites.',
      },
      {
        title: 'Before/After Split View',
        description: 'Inspect anti-aliased edges and gradients side-by-side before downloading.',
      },
      {
        title: 'Batch Processing + ZIP',
        description: 'Convert entire icon and product sets locally with zero upload limits.',
      },
    ],
    faqs: [
      {
        question: 'Does PNG to WebP preserve transparent backgrounds?',
        answer: 'Yes. HTML5 Canvas WebP encoding preserves the full 8-bit alpha channel so logos and transparent cutouts stay transparent.',
      },
      {
        question: 'How much smaller is WebP compared to PNG?',
        answer: 'Depending on visual complexity, converting PNG to 85% WebP commonly cuts file size by 50% to 80%.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'WebP to PNG',
    shortDescription: 'Convert WebP images to lossless PNG with transparency intact.',
    category: 'convert',
    seoTitle: 'WebP to PNG Converter Free Online – Lossless & Transparent',
    seoDescription:
      'Convert WebP to lossless PNG online free in your browser. Preserves full alpha transparency cleanly with batch ZIP export and zero server uploads.',
    h1: 'Free Online WebP to PNG Converter',
    subtitle:
      'Convert transparent or opaque WebP images into universal, lossless PNG files locally — preserving every transparent pixel and sharp edge.',
    howToSteps: [
      {
        title: 'Drop WebP files',
        description: 'Upload one or multiple .webp images from any folder.',
      },
      {
        title: 'Lossless PNG conversion',
        description: 'Each WebP renders onto a transparent HTML5 Canvas and exports as lossless PNG.',
      },
      {
        title: 'Download PNGs or ZIP',
        description: 'Inspect the converted PNGs and download individually or all together as a ZIP.',
      },
    ],
    features: [
      {
        title: 'Keeps Alpha Transparency Intact',
        description: 'Transparent WebP logos and stickers remain cleanly transparent in the resulting PNG.',
      },
      {
        title: 'Universal Editor Support',
        description: 'Open converted PNGs in any design tool, presentation deck, or upload portal without WebP compatibility issues.',
      },
      {
        title: 'Batch Queue Support',
        description: 'Convert multiple WebP downloads to PNG in one click and export a single ZIP.',
      },
      {
        title: 'Private On-Device Processing',
        description: 'Files never leave your device — conversion happens in local browser memory.',
      },
    ],
    faqs: [
      {
        question: 'Does WebP to PNG keep transparent backgrounds?',
        answer: 'Yes. Transparent pixels in your WebP image remain transparent in the exported PNG.',
      },
      {
        question: 'Why is the output PNG file larger than the WebP?',
        answer: 'PNG uses lossless DEFLATE compression, whereas WebP often uses more aggressive compression. Exporting as PNG guarantees zero further quality loss.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'SVG to PNG',
    shortDescription: 'Rasterize SVG vector graphics into crisp 1×–4× transparent PNGs.',
    category: 'convert',
    seoTitle: 'SVG to PNG Converter Free Online – Export 1x, 2x, 3x & 4x PNGs',
    seoDescription:
      'Convert SVG vectors to transparent PNG online free in your browser. Export crisp 1x, 2x, 3x, or 4x high-DPI PNGs locally with honest standalone Canvas rendering.',
    h1: 'Free Online SVG to PNG Converter',
    subtitle:
      'Rasterize vector SVG logos, icons, and illustrations into crisp transparent PNGs at 1×, 2×, 3×, or 4× resolution — 100% locally in your browser.',
    howToSteps: [
      {
        title: 'Drop SVG vector files',
        description: 'Upload one or multiple .svg files containing shapes, paths, gradients, or inline styles.',
      },
      {
        title: 'Choose export scale (1× to 4×)',
        description: 'Select 1× for exact viewBox size, or 2×–4× for sharp Retina / high-DPI PNG exports, then click Re-convert All.',
      },
      {
        title: 'Download transparent PNGs',
        description: 'Verify crispness in the comparison modal and save your PNG or batch ZIP.',
      },
    ],
    features: [
      {
        title: '1×, 2×, 3× & 4× High-DPI Export',
        description: 'Scale small 24px icons or 100px logos cleanly up to 4× resolution before rasterization.',
      },
      {
        title: 'Transparent Background Preserved',
        description: 'Exports crisp alpha-channel PNGs ready for slides, web headers, and design decks.',
      },
      {
        title: 'Honest Standalone Canvas Scope',
        description: 'Clearly documents that inline SVG vector shapes/styles render cleanly, while external image URLs or external webfonts inside SVGs may be blocked by browser Canvas sandboxing.',
      },
      {
        title: 'Batch SVG Rasterization',
        description: 'Convert entire icon packs to PNG in one pass and download a ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Why didn’t an external font or linked image inside my SVG appear in the PNG?',
        answer: 'For security, browsers sandbox SVG files rendered onto HTML5 Canvas and block fetching external <image> URLs, external CSS files, or remote webfonts. Self-contained SVGs with inline paths, gradients, and system fonts rasterize reliably.',
      },
      {
        question: 'How do I export a larger PNG from a small SVG icon?',
        answer: 'Pick 2×, 3×, or 4× under Raster Export Scale and click Re-convert All — or use Image Resizer afterward for exact custom pixel dimensions.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'AVIF to JPG',
    shortDescription: 'Convert AVIF images to universal JPG via your browser decoder.',
    category: 'convert',
    seoTitle: 'AVIF to JPG Converter Free Online – Browser-Native Conversion',
    seoDescription:
      'Convert AVIF images to universal JPG online free in your browser. Uses native browser AVIF decoding with quality slider, matte color picker, and batch ZIP export.',
    h1: 'Free Online AVIF to JPG Converter',
    subtitle:
      'Convert modern .avif images into universally supported .jpg files using your browser’s built-in AVIF decoder — fast, private, and 100% client-side.',
    howToSteps: [
      {
        title: 'Drop AVIF images',
        description: 'Upload .avif files using a modern browser with native AVIF decode support (Chrome, Edge, Firefox, or Safari).',
      },
      {
        title: 'Set JPG quality & matte background',
        description: 'Pick output JPG quality and a background color if the AVIF includes transparency.',
      },
      {
        title: 'Download universal JPGs',
        description: 'Compare visually and save individual JPGs or a batch ZIP.',
      },
    ],
    features: [
      {
        title: 'Native Browser AVIF Decoding',
        description: 'Leverages your modern browser’s hardware/software AVIF decoder locally with zero server round-trips.',
      },
      {
        title: 'Honest Format Compatibility',
        description: 'Built strictly for decoding AVIF into universal JPG (or use JPG/PNG/WebP tools for other formats — AVIF encoding/output is not offered).',
      },
      {
        title: 'Transparency Matte Color Picker',
        description: 'Transparent AVIF areas blend cleanly onto white or your custom hex background.',
      },
      {
        title: 'Batch ZIP Export',
        description: 'Convert multiple AVIF downloads to JPG in one browser session.',
      },
    ],
    faqs: [
      {
        question: 'What browsers support AVIF to JPG conversion here?',
        answer: 'Modern Chrome, Edge, Firefox, and Safari decode AVIF natively in-browser. If a very old browser cannot decode AVIF, an explicit error message is shown per file.',
      },
      {
        question: 'Can I also convert JPG back to AVIF on this site?',
        answer: 'No — HTML5 Canvas does not universally support encoding AVIF across browsers, so we only offer reliable JPG, PNG, and WebP outputs.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'BMP to JPG',
    shortDescription: 'Convert huge uncompressed BMP bitmaps to compact JPG files.',
    category: 'convert',
    seoTitle: 'BMP to JPG Converter Free Online – Shrink Heavy Bitmaps',
    seoDescription:
      'Convert uncompressed BMP bitmap images to compact JPG online free in your browser. Cut file sizes by 85–95% privately with batch ZIP download.',
    h1: 'Free Online BMP to JPG Converter',
    subtitle:
      'Turn massive uncompressed Windows BMP bitmap images into lightweight, shareable JPG files — often shrinking file size by 90% right inside your browser.',
    howToSteps: [
      {
        title: 'Upload BMP images',
        description: 'Drag and drop one or multiple .bmp bitmap files.',
      },
      {
        title: 'Adjust JPG quality',
        description: '88% default keeps crisp detail while eliminating megabytes of uncompressed bitmap bloat.',
      },
      {
        title: 'Download compact JPGs',
        description: 'Review before/after size savings and download individual JPGs or one batch ZIP.',
      },
    ],
    features: [
      {
        title: '90%+ Typical Size Reduction',
        description: 'Uncompressed BMP bitmaps store raw pixels; JPG compression shrinks them dramatically for email and web.',
      },
      {
        title: 'Preserves Pixel Dimensions',
        description: 'Maintains exact original width and height while modernizing the container format.',
      },
      {
        title: 'Batch Queue + ZIP Download',
        description: 'Clean up folders of legacy .bmp screenshots or scans in one fast pass.',
      },
      {
        title: '100% Client-Side Privacy',
        description: 'Zero uploads — conversion happens locally on your computer.',
      },
    ],
    faqs: [
      {
        question: 'How much smaller is JPG compared to BMP?',
        answer: 'Because BMP files are typically uncompressed, converting BMP to 88% JPG routinely cuts file size by 85% to 95%.',
      },
      {
        question: 'Does BMP to JPG work offline after loading?',
        answer: 'Yes. Everything runs in browser JavaScript and HTML5 Canvas without sending files to a server.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
];

export const TOOL_BY_SLUG: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY.map((t) => [t.slug, t])
);
