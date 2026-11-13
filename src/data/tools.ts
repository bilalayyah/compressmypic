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
];

export const TOOL_BY_SLUG: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY.map((t) => [t.slug, t])
);
