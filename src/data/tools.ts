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
    seoTitle: 'Free Online Image Resizer – Resize Photos by Pixel or %',
    seoDescription:
      'Use our free image resizer to scale photos by exact pixels, percentage, or social presets in your browser. Batch resize privately with instant ZIP download.',
    h1: 'Free Online Image Resizer',
    subtitle:
      'Our browser-based image resizer lets web designers, online sellers, bloggers, and everyday users scale photos to exact pixel dimensions or percentage ratios in seconds. Lock aspect ratio to avoid distortion, apply one-click social media presets, or process an entire folder locally with zero server uploads.',
    howToSteps: [
      {
        title: 'Upload one or multiple images',
        description:
          'Drag and drop JPG, PNG, WebP, HEIC, GIF, BMP, or SVG files up to 20 MB each into the upload area, browse from your device, or paste directly with Ctrl+V.',
      },
      {
        title: 'Pick Pixels or Percentage mode',
        description:
          'Switch between By Pixels (W × H) to enter exact dimensions up to 12,000 px, or By Percentage (%) to scale between 10% and 200% using the slider or quick buttons.',
      },
      {
        title: 'Set aspect lock, fit mode, or presets',
        description:
          'Keep Aspect Ratio Locked for proportional scaling, or unlock it to choose Contain, Cover, or Stretch Exact — or click a preset like Instagram Post, YouTube Thumb, or Full HD.',
      },
      {
        title: 'Choose output format and quality',
        description:
          'Select Original, JPG, PNG, or WebP output, adjust the Output Quality slider from 10% to 100%, and pick a Matte BG color if exporting as JPG.',
      },
      {
        title: 'Apply settings and compare visually',
        description:
          'Click Resize All to process your batch, then open the Compare view on any card to inspect sharpness and before-and-after byte savings side by side.',
      },
      {
        title: 'Download individual files or a ZIP archive',
        description:
          'Save each resized image with its Download button, or click Download All (ZIP) when resizing two or more files together.',
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
        question: 'How does By Pixels differ from By Percentage in the Image Resizer?',
        answer:
          'By Pixels lets you enter an exact width and height in pixels (up to 12,000 px) or apply social media presets directly. By Percentage scales every uploaded image proportionally between 10% and 200% using either the slider or the 25%, 50%, 75%, 150%, and 200% quick buttons.',
      },
      {
        question: 'What happens when Aspect Ratio Locked is turned on or off?',
        answer:
          'When Aspect Ratio Locked is enabled, typing a new width automatically updates the height in exact proportion to your first uploaded photo (and vice versa). Unlocking it lets you enter independent width and height values and reveals the Contain, Cover, and Stretch Exact fit options.',
      },
      {
        question: 'When should I choose Contain, Cover, or Stretch Exact?',
        answer:
          'Choose Contain (No Crop) when you want the entire subject kept inside your target box without trimming any edges. Choose Cover (Center Crop) to fill exact preset dimensions cleanly by trimming overflow, or Stretch Exact if matching fixed pixel bounds matters more than preserving proportion.',
      },
      {
        question: 'Which social media and screen presets are built in?',
        answer:
          'You get one-click presets for Instagram Post (1080×1080), Instagram Story (1080×1920), YouTube Thumb (1280×720), Facebook Cover (851×315), X Header (1500×500), and Full HD (1920×1080). Clicking any preset switches to By Pixels mode and fills in those exact dimensions.',
      },
      {
        question: 'Can I enlarge a small image beyond its original resolution?',
        answer:
          'Yes, you can enter larger pixel values or scale up to 200% in By Percentage mode using HTML5 Canvas interpolation. Keep in mind that enlarging low-resolution graphics significantly makes edges appear softer because Canvas stretches existing pixels rather than inventing new detail.',
      },
      {
        question: 'What is the maximum pixel dimension and file size allowed when resizing?',
        answer:
          'Each uploaded image can be up to 20 MB, and pixel inputs support widths and heights up to 12,000 px. Very large canvases can consume significant browser RAM on mobile devices, so staying within 4,000–6,000 px keeps processing quick.',
      },
      {
        question: 'Which input formats work in this image resizer?',
        answer:
          'You can upload JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG files. HEIC images are decoded locally in your browser before Canvas resizing, and you can export the results as Original, JPG, PNG, or WebP.',
      },
      {
        question: 'Does resizing preserve transparent backgrounds on PNG and WebP files?',
        answer:
          'Yes, transparency stays intact whenever you keep Original format (for PNG/WebP) or explicitly select PNG or WebP output. If you switch Output Format to JPG, transparent areas fill with your chosen Matte BG color (white by default).',
      },
      {
        question: 'How does batch resizing handle mixed landscape and portrait photos?',
        answer:
          'When you upload a batch in By Pixels mode with Aspect Ratio Locked, each photo preserves its own natural proportions using the width limit rather than warping portraits into landscape frames. If you want fixed identical dimensions across a batch, unlock aspect ratio and choose Contain or Cover.',
      },
      {
        question: 'Why does the first upload automatically fill in Width and Height?',
        answer:
          'When you drop your first photo into an empty queue, the resizer seeds Width at up to 1,200 px and computes the matching Height proportionally. You can override those numbers immediately and click Resize All to re-run every image in the list.',
      },
      {
        question: 'How do I inspect sharpness after shrinking a photo?',
        answer:
          'Click Compare on any finished result card or click its thumbnail to open the before-and-after comparison modal. It shows the original and resized dimensions, byte savings, and a split slider so you can check fine details before downloading.',
      },
      {
        question: 'Can I change output format and resize at the same time?',
        answer:
          'Yes, you can pick JPG, PNG, or WebP in the Output Format selector and adjust the Output Quality slider (10% to 100%) before clicking Resize All. This lets you shrink dimensions and convert to a lightweight web format in a single pass.',
      },
      {
        question: 'Are animated GIFs still animated after resizing here?',
        answer:
          'No, HTML5 Canvas renders the first frame of a GIF when resizing to static dimensions and exports a single-frame image. If you want to keep animations intact while reducing file weight, use our dedicated GIF Compressor tool instead.',
      },
      {
        question: 'Are my photos uploaded to an external server during resizing?',
        answer:
          'No, all resizing happens inside your browser tab using local HTML5 Canvas memory and JavaScript. Your original and resized images never travel across a network or touch any remote storage.',
      },
      {
        question: 'How do I download dozens of resized images without clicking one by one?',
        answer:
          'Whenever two or more images finish resizing, a Batch Ready bar appears above the list with a Download All (ZIP) button. Clicking it packages every resized file into a single resized_images_compressmypic.zip download.',
      },
      {
        question: 'Can I paste a screenshot from my clipboard to resize it?',
        answer:
          'Yes, press Ctrl+V (or Cmd+V on Mac) while on the page to drop a copied screenshot directly into the upload queue. It immediately loads dimensions and resizes using your current width, height, or percentage settings.',
      },
      {
        question: 'Why did my resized PNG become larger in bytes even at smaller pixels?',
        answer:
          'If you convert a compressed JPG into lossless PNG while resizing, PNG keeps raw lossless pixel encoding and can weigh more than the source JPEG. Switch Output Format to WebP or JPG at 80%–85% quality for much smaller web files.',
      },
      {
        question: 'What quality setting is best when exporting resized JPG or WebP images?',
        answer:
          'The default 85% setting balances crisp edges and clean gradients with small file sizes for websites, blog posts, and marketplaces. Drop quality toward 65%–75% if you need stricter kilobyte savings, or push to 95%–100% for print preparation.',
      },
      {
        question: 'Can I resize vector SVG graphics cleanly to high-resolution PNGs?',
        answer:
          'Yes, uploading an inline SVG lets you enter larger target pixel dimensions before rasterizing it onto Canvas. Self-contained SVGs with inline shapes and gradients scale sharply, though external font or image links inside SVGs are blocked by browser security.',
      },
      {
        question: 'Does this image resizer work offline or on mobile phones?',
        answer:
          'Yes, it works smoothly on iOS Safari, Android Chrome, and desktop browsers with touch-friendly sliders and presets. Because calculations run locally inside your browser once the page is loaded, nothing is bottlenecked by upload speed.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Image Converter',
    shortDescription: 'Convert JPG, PNG, WebP, HEIC, BMP, GIF & SVG in your browser.',
    category: 'convert',
    seoTitle: 'Free Online Image Converter – JPG, PNG, WebP & HEIC',
    seoDescription:
      'Fast browser image converter for JPG, PNG, WebP, HEIC, SVG, BMP, GIF, and AVIF. Convert batches privately on your device with quality control and ZIP export.',
    h1: 'Free Online Image Converter',
    subtitle:
      'Built for iPhone photographers, web developers, marketers, and office teams, this browser image converter switches seamlessly between JPG, PNG, WebP, HEIC, SVG, BMP, GIF, and AVIF. Adjust output quality, pick a matte fill for transparent cutouts, and convert whole batches locally without uploading files.',
    howToSteps: [
      {
        title: 'Add one or multiple image files',
        description:
          'Drop JPG, PNG, WebP, HEIC, SVG, BMP, GIF, or AVIF images (up to 20 MB each) into the upload zone, select files from disk, or paste via Ctrl+V.',
      },
      {
        title: 'Pick your output format',
        description:
          'Choose WebP (Smallest Web), JPG (Universal), or PNG (Lossless Alpha) under Convert To Format.',
      },
      {
        title: 'Set transparency fill for JPG output',
        description:
          'When converting transparent PNG, WebP, or SVG graphics to JPG, click the Transparency Fill Color swatch to choose white, black, or any hex backdrop.',
      },
      {
        title: 'Tune the quality slider if needed',
        description:
          'Drag the Quality slider between 10% and 100% for WebP or JPG outputs (the slider automatically disables for lossless PNG).',
      },
      {
        title: 'Convert and inspect results',
        description:
          'Click Convert All to re-encode your queue with updated settings, then click Compare on any item to check visual fidelity and byte change.',
      },
      {
        title: 'Download individual files or ZIP',
        description:
          'Save each converted file via its Download button, or click Download All (ZIP) to download the entire batch together.',
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
        question: 'Which input and output formats does this image converter support?',
        answer:
          'You can feed in JPG, PNG, WebP, iPhone HEIC/HEIF, SVG, BMP, GIF, and browser-decoded AVIF files up to 20 MB per image. Outputs export cleanly as WebP (Smallest Web), JPG (Universal), or PNG (Lossless Alpha).',
      },
      {
        question: 'How are Apple iPhone HEIC and HEIF photos converted without a server?',
        answer:
          'Our converter loads a client-side WebAssembly HEIC decoder directly inside your browser tab. It decodes the HEIC container locally on your CPU and renders the photo onto HTML5 Canvas to export standard JPG, PNG, or WebP files.',
      },
      {
        question: 'Why is the Quality slider disabled when PNG is selected?',
        answer:
          'PNG uses lossless DEFLATE compression, meaning it encodes every pixel accurately without throwing away visual detail at a percentage quality level. The slider becomes active as soon as you switch to WebP or JPG.',
      },
      {
        question: 'What happens to transparent areas when converting PNG or WebP to JPG?',
        answer:
          'Because JPG does not support an alpha transparency channel, transparent pixels must be flattened onto a solid backdrop. Use the Transparency Fill Color picker (white by default) to blend transparent edges cleanly onto any color.',
      },
      {
        question: 'Can I convert AVIF images saved from modern websites into JPG or PNG?',
        answer:
          'Yes, modern versions of Chrome, Edge, Firefox, and Safari decode AVIF files natively inside your browser. Once decoded, the tool exports them to universal JPG, PNG, or WebP without any external cloud service.',
      },
      {
        question: 'Are vector SVG logos preserved nicely when converted to PNG or WebP?',
        answer:
          'Yes, self-contained SVG files with inline paths, fills, and gradients rasterize cleanly at their intrinsic dimensions with transparent backgrounds preserved. Note that SVGs relying on external web fonts or remote image URLs are restricted by browser Canvas security.',
      },
      {
        question: 'Does converting a lossy JPG into PNG restore missing photo detail?',
        answer:
          'No, re-saving an already compressed JPG as PNG cannot recover detail discarded during original JPEG encoding, and it usually increases file size significantly. Choose PNG only if you need lossless storage before future multi-step editing.',
      },
      {
        question: 'Can I mix different formats in a single batch conversion?',
        answer:
          'Yes, you can drop HEIC photos, BMP screenshots, PNG logos, and AVIF downloads together into the same queue. Every valid file converts to your selected target format and downloads cleanly in one ZIP archive.',
      },
      {
        question: 'What happens if I upload an animated GIF to the general converter?',
        answer:
          'Canvas draws the initial frame of the GIF and converts that frame to a static WebP, JPG, or PNG file. If you want to shrink an animated GIF while keeping motion intact, switch to our GIF Compressor tool.',
      },
      {
        question: 'Why did WebP output cut my PNG screenshot size so dramatically?',
        answer:
          'Unlike lossless PNG, WebP at 85% quality combines modern predictive compression with full alpha transparency support. That commonly shrinks large UI screenshots and product cutouts while keeping crisp readability and smooth edges.',
      },
      {
        question: 'How do I check before-and-after quality before saving converted images?',
        answer:
          'Click Compare on any converted card (or click its thumbnail) to launch the interactive comparison modal. You can compare original vs converted byte sizes and drag the split handle across edges and text.',
      },
      {
        question: 'Are my photos or sensitive screenshots ever sent over the internet?',
        answer:
          'Never — all decoding, color flattening, and re-encoding happen strictly inside your local browser memory. Nothing is uploaded, stored on servers, or shared with third parties.',
      },
      {
        question: 'What quality setting is recommended for converting photos to WebP or JPG?',
        answer:
          'The default 85% works reliably for both WebP web assets and universal JPG sharing without noticeable compression blocking. You can raise it to 92%–95% for portfolio shots or lower it to 70%–75% for tight bandwidth limits.',
      },
      {
        question: 'How are output filenames generated after conversion?',
        answer:
          'Each converted file keeps your sanitized base filename and swaps in the new .webp, .jpg, or .png extension automatically. You can see the exact output filename and converted byte size on each card before downloading.',
      },
      {
        question: 'Can I convert BMP bitmaps from older Windows software to WebP or JPG?',
        answer:
          'Yes, uncompressed .bmp files decode natively in the browser and convert immediately to compact JPG or WebP files. Eliminating uncompressed bitmap headers routinely cuts storage weight dramatically.',
      },
      {
        question: 'What if one file in my batch is corrupted or unreadable?',
        answer:
          'Each image processes independently, so a single corrupted or unsupported file shows an inline error badge without halting the rest of your queue. All valid images still convert and package into your ZIP download.',
      },
      {
        question: 'Does converting via HTML5 Canvas strip hidden EXIF camera metadata?',
        answer:
          'Yes, drawing an image onto Canvas and encoding a fresh JPG, PNG, or WebP produces a clean bitmap without EXIF GPS tags or camera serial metadata. That protects privacy when sharing converted files online.',
      },
      {
        question: 'Can I convert images pasted directly from my clipboard?',
        answer:
          'Yes, copying an image or taking a screenshot and pressing Ctrl+V anywhere on the page adds it directly to the converter queue. It immediately encodes to your active target format.',
      },
      {
        question: 'Is there a daily cap or file count limit on batch conversions?',
        answer:
          'No, there are no accounts, watermarks, or daily conversion quotas. You are only bounded by the 20 MB per-file check and your device’s available browser RAM.',
      },
      {
        question: 'When should I choose Download All (ZIP) vs single-file Download?',
        answer:
          'Use the per-card Download button when saving a single converted photo quickly. Whenever two or more images finish converting, click Download All (ZIP) in the batch summary bar to bundle them into converted_images_compressmypic.zip.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Rotate & Flip Image',
    shortDescription: 'Rotate 90°, 180°, custom angles, and flip images horizontally or vertically.',
    category: 'crop-edit',
    seoTitle: 'Rotate Image Online Free – Turn 90°, Flip & Straighten',
    seoDescription:
      'Quickly rotate image files 90°, 180°, or any custom angle and flip horizontally or vertically in your browser. Batch process photos with instant ZIP download.',
    h1: 'Rotate & Flip Image Online',
    subtitle:
      'Fix sideways camera shots, mirror backwards selfies, and straighten tilted horizons when you rotate image files right in your browser. Ideal for photographers, students scanning documents, and content creators, everything transforms locally at full resolution with batch ZIP export.',
    howToSteps: [
      {
        title: 'Upload one or many images',
        description:
          'Drag and drop JPG, PNG, WebP, HEIC, GIF, BMP, or SVG files up to 20 MB each into the dropzone, or paste directly with Ctrl+V.',
      },
      {
        title: 'Use quick 90° and 180° turns',
        description:
          'Click Rotate 90° Left, Rotate 90° Right, or 180° under Quick Rotate & Flip to spin every image in the queue immediately.',
      },
      {
        title: 'Mirror horizontally or vertically',
        description:
          'Toggle Flip Horizontal to mirror left-to-right or Flip Vertical to invert top-to-bottom — combine either with any rotation angle.',
      },
      {
        title: 'Fine-tune custom angles (-180° to +180°)',
        description:
          'Drag the Rotation Angle slider to straighten crooked shots by exact degrees, then click Apply Angle (or Reset to 0° anytime).',
      },
      {
        title: 'Pick your Output Format',
        description:
          'Select Original, JPG, PNG, or WebP to match your destination workflow; changes re-render across your images immediately.',
      },
      {
        title: 'Compare visually and download',
        description:
          'Click Compare on any card to check before-and-after orientation, then click Download or Download All (ZIP) for batches.',
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
        question: 'Does rotating a photo at a custom angle like 15° chop off the corners?',
        answer:
          'No, the tool computes the expanded trigonometric bounding width and height automatically for non-90° angles. That expands the Canvas just enough so every pixel of your original corners stays inside the frame.',
      },
      {
        question: 'What fills the triangular corners created by a custom tilt angle?',
        answer:
          'If you keep Original format on a PNG/WebP or choose PNG/WebP output, those extra outer corners stay completely transparent. If your output resolves to JPG, which does not support alpha, the corners fill with clean solid white.',
      },
      {
        question: 'Can I rotate 90° and flip horizontally at the same time?',
        answer:
          'Yes, Flip Horizontal and Flip Vertical act as independent toggles alongside any rotation angle. Each result card badge displays your exact combined state, such as Rotated 90° · Flipped H.',
      },
      {
        question: 'Why does rotating by 90° or 270° swap pixel width and height?',
        answer:
          'Turning a 1920×1080 landscape image by 90° rotates its axes so it becomes a 1080×1920 portrait image. Keeping exact swapped bounds prevents stretching or cropping any side of your photo.',
      },
      {
        question: 'How do I fix a backwards selfie with mirrored text?',
        answer:
          'Upload the photo, click Reset to 0° if you do not want a 90° turn (the tool defaults to 90° on load), and enable Flip Horizontal. Text on shirts or signs flips back to normal reading direction immediately.',
      },
      {
        question: 'Why do images rotate 90° automatically right after upload?',
        answer:
          'The default Quick Rotate state starts at 90° so common sideways photos turn upright on drop. You can adjust with Rotate 90° Left, 180°, the angle slider, or click Reset to 0° whenever you only want to flip.',
      },
      {
        question: 'Which image formats can I rotate and flip here?',
        answer:
          'Upload JPG, PNG, WebP, HEIC/HEIF, GIF, BMP, or SVG files up to 20 MB each. Export options cover Original, JPG, PNG, and WebP via local HTML5 Canvas rendering.',
      },
      {
        question: 'Can I batch rotate a folder of sideways phone photos together?',
        answer:
          'Yes, drop as many photos as your browser handles cleanly, click your desired rotation or flip buttons once, and every item updates together. When multiple files finish, Download All (ZIP) exports rotated_images_compressmypic.zip.',
      },
      {
        question: 'Does rotating a transparent PNG keep its transparent background?',
        answer:
          'Yes, transparent regions remain transparent when Original (from PNG/WebP), PNG, or WebP output is selected. That works for both crisp 90° rotations and arbitrary tilt straightening.',
      },
      {
        question: 'How can I undo multiple turns without reloading the page?',
        answer:
          'Click Reset to 0° right above the Rotation Angle slider at any time. That immediately clears rotation back to 0° and turns off both Horizontal and Vertical flips across the queue.',
      },
      {
        question: 'Why might my file size change slightly after rotating a JPEG?',
        answer:
          'Rotating pixels inside HTML5 Canvas re-encodes the JPEG at 90% quality rather than modifying DCT blocks losslessly. Choosing PNG output preserves pixels losslessly if you want zero compression artifacts.',
      },
      {
        question: 'Is there an easy way to inspect before and after straightening?',
        answer:
          'Click Compare on any card (or click its thumbnail preview) to open the Rotate & Flip Comparison modal. You can inspect aligned edges with the interactive before/after slider before saving.',
      },
      {
        question: 'Does this tool respect iPhone photo orientation correctly?',
        answer:
          'Yes, modern browsers and our HEIC loader normalize EXIF orientation when decoding into Canvas before applying your selected angle. What you see on the card thumbnail matches the pixels inside your downloaded file.',
      },
      {
        question: 'Can I straighten a tilted document scan by small 1° increments?',
        answer:
          'Yes, drag the Rotation Angle slider between -180° and +180° (step 1°) and release to preview the straightened document. Click Apply Angle if you adjust it via keyboard arrows to apply across all queued files.',
      },
      {
        question: 'Are any of my documents or personal photos uploaded to a server?',
        answer:
          'No, rotation and flipping run 100% locally in your web browser via Canvas 2D transforms. Your images never leave your computer or smartphone.',
      },
      {
        question: 'What happens if I rotate an animated GIF?',
        answer:
          'Rotating a GIF extracts and transforms the first frame into a static image. Animated multi-frame rotation is not supported directly in this tool.',
      },
      {
        question: 'Can I mirror or rotate screenshots pasted straight from my clipboard?',
        answer:
          'Yes, press Ctrl+V (or Cmd+V) anywhere on the page after copying an image or screenshot. It joins the batch queue and applies your active rotation and flip settings immediately.',
      },
      {
        question: 'Is there any limit on file size or number of turns?',
        answer:
          'Individual uploads can be up to 20 MB per file so your browser stays responsive. Within that cap, you can rotate, flip, reset, and re-export as many photos as you need with no account, daily limit, or watermark.',
      },
      {
        question: 'Can I switch output format to WebP while rotating a batch of PNGs?',
        answer:
          'Yes, clicking WebP under Output Format immediately re-transforms and exports your batch as lightweight rotated WebP images. You can switch formats back and forth freely without re-uploading.',
      },
      {
        question: 'Does Rotate & Flip work cleanly on touchscreen phones and tablets?',
        answer:
          'Yes, all rotation buttons, flip toggles, and the touch-enabled angle slider work in mobile Safari and Android Chrome. You can also download single photos directly to your device camera roll or Downloads folder.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Image to PDF',
    shortDescription: 'Combine JPG, PNG, WebP & HEIC images into a multi-page PDF.',
    category: 'convert',
    seoTitle: 'Free Image to PDF Converter – Combine Photos to PDF',
    seoDescription:
      'Turn multiple photos into one document with our browser image to PDF converter. Reorder pages, pick A4 or Letter size, set margins, and save directly offline.',
    h1: 'Image to PDF Converter',
    subtitle:
      'Ideal for students, freelancers, accountants, and anyone submitting IDs or receipts, this private image to PDF converter merges multiple photos into one crisp multi-page PDF. Reorder pages freely, pick A4, US Letter, or Fit-to-Image dimensions, adjust margins and quality, and build your document locally with zero server uploads.',
    howToSteps: [
      {
        title: 'Drop images to include in your PDF',
        description:
          'Upload one or multiple JPG, PNG, WebP, HEIC, GIF, BMP, or SVG files up to 20 MB each (or paste with Ctrl+V). Each image becomes one page.',
      },
      {
        title: 'Arrange page order',
        description:
          'Review the Page Order list below the controls and use the Up, Down, or Remove buttons to sequence receipts, slides, or scans accurately.',
      },
      {
        title: 'Select Page Size and Orientation',
        description:
          'Pick A4 (210 × 297 mm), US Letter (8.5 × 11 in), or Fit to Image Size, and choose Auto (Match Photo), Portrait, or Landscape orientation.',
      },
      {
        title: 'Adjust Margins and Image Placement',
        description:
          'Choose No Margin (Full Bleed), Small Margin, or Medium Margin, and select Contain (Full Image) or Cover (Fill Page).',
      },
      {
        title: 'Set filename and PDF Image Quality',
        description:
          'Customize the PDF Filename (ending in .pdf) and slide PDF Image Quality between 40% and 98% to balance sharpness against total document size.',
      },
      {
        title: 'Create and download your PDF',
        description:
          'Click Create & Download PDF to generate the file locally; an emerald confirmation banner also lets you click Download PDF Again.',
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
        question: 'Is this image to PDF converter safe for passports, IDs, and tax receipts?',
        answer:
          'Yes, your documents never upload to any remote server or cloud queue. Our JavaScript PDF builder encodes every page inside your local browser RAM and writes the finished .pdf directly to your device.',
      },
      {
        question: 'What page size choices are supported?',
        answer:
          'You can standardize every page onto A4 (210 × 297 mm) or US Letter (8.5 × 11 in) for consistent printing and filing. Alternatively, choose Fit to Image Size so each PDF page matches its photo’s native dimensions and aspect ratio.',
      },
      {
        question: 'How does Auto Orientation work with mixed horizontal and vertical photos?',
        answer:
          'When Orientation is set to Auto (Match Photo), landscape images automatically receive landscape pages while portrait images receive portrait pages. You can lock every page to Portrait or Landscape whenever uniform printing layout is needed.',
      },
      {
        question: 'What is the difference between Contain and Cover placement?',
        answer:
          'Contain (Full Image) scales each photo proportionally so the entire picture fits inside your chosen margins with nothing cut off. Cover (Fill Page) enlarges the photo to fill the entire printable area edge-to-edge, trimming any overflow.',
      },
      {
        question: 'Why is the Orientation dropdown disabled when Fit to Image Size is picked?',
        answer:
          'Fit to Image Size sizes every individual PDF page dynamically to the exact aspect ratio of its photo, so portrait vs landscape override does not apply. Switch Page Size to A4 or US Letter if you want manual Portrait/Landscape control.',
      },
      {
        question: 'Can I reorder pages after uploading multiple files at once?',
        answer:
          'Yes, scroll to the Page Order section where every page shows a numbered badge, thumbnail, pixel dimensions, and file size. Use the Up and Down arrow buttons on any row to rearrange pages before clicking Create & Download PDF.',
      },
      {
        question: 'How does the PDF Image Quality slider affect file size?',
        answer:
          'Lowering PDF Image Quality toward 60%–75% compresses the embedded JPEG streams inside the PDF, keeping multi-page scans compact for strict email or portal upload caps. Pushing toward 90%–98% preserves sharper small text on dense documents.',
      },
      {
        question: 'Which image file formats can I combine into a PDF?',
        answer:
          'You can mix JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG images (up to 20 MB per file) inside a single PDF document. They are decoded locally in the browser and normalized smoothly onto PDF pages.',
      },
      {
        question: 'What happens to transparent PNG or WebP images inside a PDF?',
        answer:
          'Because standard PDF pages have a white paper canvas, transparent backgrounds composite cleanly onto solid white before embedding. That prevents unexpected dark artifacts behind logos or scanned signatures.',
      },
      {
        question: 'Can I customize the output filename before saving?',
        answer:
          'Yes, type any document title into the PDF Filename field (defaulting to compressmypic-document.pdf). If you leave off the .pdf suffix, the exporter appends .pdf automatically when downloading.',
      },
      {
        question: 'How many pages can I merge into one PDF document?',
        answer:
          'There is no artificial page-count limit—you can combine dozens of photos or receipts into one multi-page PDF. Practical capacity depends only on your device’s available browser memory and each image’s pixel resolution.',
      },
      {
        question: 'How do No Margin, Small Margin, and Medium Margin differ?',
        answer:
          'No Margin (Full Bleed) extends placement all the way to the paper borders, ideal for borderless artwork or Fit-to-Image exports. Small Margin and Medium Margin add clean white borders around each page for standard printing and readability.',
      },
      {
        question: 'Can I add more photos after already inspecting the Page Order list?',
        answer:
          'Yes, simply drop or browse additional files into the upload box at the top and they append to the end of your Page Order list. You can then reorder or delete individual pages before generating the updated PDF.',
      },
      {
        question: 'Does the tool add a footer logo, page stamp, or watermark to my PDF?',
        answer:
          'No, CompressMyPic produces completely clean PDF pages containing only your images inside your selected margins. No branding, headers, or watermarks are ever added.',
      },
      {
        question: 'Why does a progress message show Encoding page X of Y?',
        answer:
          'Multi-page PDFs encode each image sequentially in browser memory to avoid freezing your browser tab or spiking RAM usage. Once the final page encodes, the green confirmation bar displays total page count and exact PDF byte size.',
      },
      {
        question: 'What if I lose or close the automatic browser download dialog?',
        answer:
          'Keep the tab open—the emerald confirmation card stays visible with a Download PDF Again button. Clicking it re-triggers saving the exact generated Blob instantly without re-encoding.',
      },
      {
        question: 'Can I paste screenshots directly into the PDF builder?',
        answer:
          'Yes, press Ctrl+V (or Cmd+V on Mac) to append a clipboard screenshot straight into your Page Order queue. That makes bundling multiple bug screenshots or chat receipts into one PDF fast.',
      },
      {
        question: 'Does generating a PDF upload any metadata like EXIF GPS tags?',
        answer:
          'No, each page image is decoded and drawn onto HTML5 Canvas before being embedded into the PDF byte stream. As a result, original camera EXIF headers and GPS coordinates are excluded automatically during conversion.',
      },
      {
        question: 'Can I convert iPhone HEIC camera photos straight to PDF without converting to JPG first?',
        answer:
          'Yes, drop .heic or .heif photos directly into the upload zone and the browser decodes them locally on the fly. They appear right in your Page Order list ready to combine into A4 or Letter PDFs.',
      },
      {
        question: 'Does the Image to PDF tool work on smartphones and Chromebooks?',
        answer:
          'Yes, everything runs in standard browser JavaScript on iOS, Android, Windows, macOS, and ChromeOS. You do not need Adobe Acrobat, browser extensions, or desktop PDF software installed.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Image Metadata Viewer',
    shortDescription: 'Inspect EXIF camera settings, GPS coordinates, and PNG/WebP data.',
    category: 'privacy',
    seoTitle: 'Image Metadata Viewer – Inspect EXIF & GPS Data Free',
    seoDescription:
      'Inspect camera EXIF tags, GPS coordinates, timestamps, and PNG or WebP chunks with our private image metadata viewer. Copy or export full metadata JSON locally.',
    h1: 'Image Metadata & EXIF Viewer',
    subtitle:
      'Built for photographers checking lens settings, developers debugging headers, and anyone checking privacy before posting, our browser image metadata viewer inspects raw file bytes locally. Reveal hidden EXIF tags, GPS coordinates, timestamps, and PNG or WebP chunks without uploading a single pixel.',
    howToSteps: [
      {
        title: 'Drop or select an image to inspect',
        description:
          'Upload a JPG, PNG, WebP, HEIC, GIF, BMP, or SVG image up to 20 MB (or paste via Ctrl+V). Raw binary headers parse immediately on your device.',
      },
      {
        title: 'Check the Summary & Privacy Risk banner',
        description:
          'View detected container format, dimensions, file size, and whether sensitive embedded metadata tag types were found.',
      },
      {
        title: 'Review any GPS Location alert',
        description:
          'If GPSIFD tags exist, a warning box highlights the exact decoded Latitude and Longitude and offers a one-click jump to Remove Image Metadata.',
      },
      {
        title: 'Browse the Extracted Metadata table',
        description:
          'Scroll through grouped entries (Camera, EXIF, GPS, PNG/WebP chunks, File info) with amber Privacy Tag labels marking sensitive fields.',
      },
      {
        title: 'Copy or export JSON, or strip tags',
        description:
          'Click Copy JSON to copy the full report, Export JSON to save a .json file, or click Strip Metadata to scrub private tags cleanly.',
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
        question: 'What kind of hidden information can this image metadata viewer uncover?',
        answer:
          'Depending on the container format, our parser extracts TIFF IFD0, ExifIFD, and GPSIFD fields locally from your image headers. This reveals details like camera make and model, lens specs, shutter speed, ISO, aperture, timestamps, editing software, copyright notes, and decimal GPS coordinates.',
      },
      {
        question: 'Does it inspect PNG and WebP technical headers as well as JPEG EXIF?',
        answer:
          'Yes, beyond standard JPEG EXIF segments, the viewer reads technical chunks embedded inside PNG and WebP files. You can see PNG IHDR bit-depth, pHYs physical DPI density, tEXt/iTXt/tIME text chunks, PNG eXIf blocks, and WebP VP8X alpha or animation flags.',
      },
      {
        question: 'Why does a photo downloaded from WhatsApp or Instagram show zero EXIF tags?',
        answer:
          'Social networks and messaging apps strip EXIF, camera, and GPS headers automatically when you upload photos through their servers. Original files straight from your phone camera roll or DSLR retain full metadata.',
      },
      {
        question: 'How does the tool detect whether a photo reveals my location?',
        answer:
          'When GPSIFD rational tags exist in the image header, the viewer converts degrees, minutes, and seconds into decimal Latitude and Longitude automatically. Any detected coordinates trigger an amber GPS Location Coordinates Detected banner right above the properties table.',
      },
      {
        question: 'What do the amber Privacy Tag labels mean in the metadata table?',
        answer:
          'Entries flagged with an amber Privacy Tag badge contain personal or device-identifying information. Typical examples include GPS coordinates, exact capture timestamps, photographer/artist names, camera serial numbers, and device model strings.',
      },
      {
        question: 'Can I strip sensitive metadata right after inspecting an image?',
        answer:
          'Yes, whenever sensitive tags are detected, an orange Strip Metadata button appears in the summary bar (plus a link inside the GPS warning box). Clicking it takes you straight to our Remove Image Metadata tool.',
      },
      {
        question: 'How does JSON export work for developers or documentation?',
        answer:
          'Click Copy JSON in the summary bar to place the structured ImageMetadataReport onto your clipboard right away. If you need a file for audits or bug reports, click Export JSON to download <filename>_metadata.json locally.',
      },
      {
        question: 'Why are full binary EXIF chunks not extracted for some HEIC or GIF files?',
        answer:
          'Our deep binary chunk parser targets JPEG, PNG, and WebP containers natively in JavaScript. For HEIC, GIF, BMP, and SVG files, the viewer reports reliable container info, file size, and pixel dimensions accurately.',
      },
      {
        question: 'Are private photos with GPS location ever uploaded when I inspect them?',
        answer:
          'No, binary inspection runs 100% locally in your browser using File ArrayBuffer byte parsing. Sending private unstripped photos over the internet would defeat privacy, so zero bytes leave your computer or phone.',
      },
      {
        question: 'Does viewing metadata modify, compress, or delete anything in my file?',
        answer:
          'No, the Image Metadata Viewer is strictly read-only. It reads headers from browser memory to show you what is inside without changing your original file.',
      },
      {
        question: 'Can I inspect multiple files back to back without refreshing?',
        answer:
          'Yes, click the red trash icon (Clear) in the summary bar to reset back to the upload zone at any time. You can then drop or paste your next image to generate a fresh metadata report.',
      },
      {
        question: 'Why does pasting a screenshot with Ctrl+V usually show no camera tags?',
        answer:
          'Operating system clipboards pass raw raster bitmaps rather than original camera JPEG files. Because clipboard images lack camera headers, pasted screenshots show container dimensions and format info without EXIF or GPS blocks.',
      },
      {
        question: 'What is the maximum file size supported for metadata inspection?',
        answer:
          'You can inspect individual images up to 20 MB in size right in your browser. That ceiling easily covers full-resolution DSLR JPEGs, detailed PNG exports, and uncompressed BMP files.',
      },
      {
        question: 'How can I verify that another tool actually removed all EXIF tags from a photo?',
        answer:
          'Drop the cleaned output file back into this image metadata viewer to inspect its raw bytes. If scrubbing succeeded, the green status banner confirms No EXIF, GPS, or hidden camera tags detected and no GPS alert appears.',
      },
      {
        question: 'Does the viewer detect Adobe XMP or PNG text comments?',
        answer:
          'Yes, PNG tEXt and iTXt key-value text chunks—such as Software, Author, Comment, or Creation Time—are extracted cleanly into the metadata table. Any embedded PNG eXIf blocks and WebP EXIF chunks are decoded alongside them.',
      },
      {
        question: 'What does the pHYs chunk mean on PNG screenshots?',
        answer:
          'The PNG pHYs chunk stores physical pixel density (DPI / pixels per meter) intended for print or layout scaling. Our viewer reads and converts those values so you can see whether an image specifies 72 DPI, 96 DPI, or 300 DPI.',
      },
      {
        question: 'Why is the filename extension sometimes different from containerFormat?',
        answer:
          'Sometimes a PNG or WebP file gets renamed with a .jpg extension (or vice versa). Because our viewer inspects actual binary magic bytes rather than trusting the filename alone, it reports the true underlying container format.',
      },
      {
        question: 'Can I check image metadata on iPhone or Android mobile browsers?',
        answer:
          'Yes, open the page in mobile Safari or Chrome and pick a photo directly from your camera roll. You can check hidden GPS coordinates and camera details on your phone before posting pictures online.',
      },
      {
        question: 'Why did my DSLR photo show lens focal length and shutter speed?',
        answer:
          'Digital cameras record exposure telemetry inside the ExifIFD binary directory at the moment you press the shutter. Fields like ISO, F-Number, Exposure Time, Focal Length, Flash, and Metering Mode are decoded locally for you to read.',
      },
      {
        question: 'Is there any fee or signup required to inspect unlimited photos?',
        answer:
          'No, inspecting image metadata and exporting JSON reports is completely free with no accounts or paywalls. You can check as many photos up to 20 MB as you need with zero watermarks or daily caps.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Remove Image Metadata',
    shortDescription: 'Strip EXIF, GPS location, camera info & comments privately.',
    category: 'privacy',
    seoTitle: 'Remove Image Metadata Free – Strip EXIF & GPS Tags',
    seoDescription:
      'Safely remove image metadata including EXIF camera details and GPS location directly in your browser. Lossless binary stripping for JPG and PNG with ZIP export.',
    h1: 'Remove Image Metadata Online',
    subtitle:
      'Designed for marketplace sellers, journalists, parents, and privacy-conscious users, this tool lets you remove image metadata permanently before sharing photos online. Strip EXIF camera models, GPS coordinates, capture timestamps, and hidden text chunks locally in your browser using lossless binary removal or clean Canvas re-encoding.',
    howToSteps: [
      {
        title: 'Drop photos you want to scrub',
        description:
          'Upload one or many JPG, PNG, WebP, or HEIC images (up to 20 MB each) into the upload box, or paste with Ctrl+V.',
      },
      {
        title: 'Review automatic stripping and verification badges',
        description:
          'Files scrub immediately upon upload and re-scan automatically, showing how many metadata tags were stripped (e.g. → 0 remaining).',
      },
      {
        title: 'Choose Stripping Method if adjusting settings',
        description:
          'Keep Lossless Binary Strip (JPG/PNG) for zero pixel re-encoding on JPEGs and PNGs, or pick Full Canvas Re-encode to flatten pixels cleanly.',
      },
      {
        title: 'Optionally set Output Format and Quality',
        description:
          'Select Original, JPG, PNG, or WebP output, adjust Re-encode Quality (50%–100%) for WebP/HEIC/Canvas re-encode, and click Re-clean All.',
      },
      {
        title: 'Download clean files or a batch ZIP',
        description:
          'Click Download Clean on individual verified cards or click Download All Clean (ZIP) to save clean_images_no_metadata.zip.',
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
        question: 'How does Lossless Binary Strip work without hurting photo quality?',
        answer:
          'On JPEG and PNG files kept in their original format, our binary cleaner parses the container structure directly. It removes metadata segments (JPEG APP1–APP15/COM and PNG eXIf/tEXt/iTXt/tIME) without decoding or recompressing a single pixel.',
      },
      {
        question: 'What happens when I upload WebP or HEIC files to remove metadata?',
        answer:
          'Lossless binary segment stripping applies to JPG and PNG inputs. For HEIC or WebP inputs—or whenever you switch Output Format or pick Full Canvas Re-encode—the tool draws pixels onto a fresh HTML5 Canvas to guarantee all metadata headers are dropped.',
      },
      {
        question: 'How do I know for sure that GPS location and EXIF tags were removed?',
        answer:
          'After cleaning each image, our tool runs our metadata parser a second time on the output Blob and displays an emerald badge (for example, Stripped X metadata tags → 0 remaining or Verified clean). Nothing is guessed.',
      },
      {
        question: 'Which metadata types are targeted when cleaning photos?',
        answer:
          'The cleaner strips EXIF camera make, model, lens details, serial numbers, shutter settings, and capture timestamps. It also removes GPS latitude/longitude/altitude tags, Adobe XMP packets, IPTC fields, JPEG comments, and PNG text or time chunks.',
      },
      {
        question: 'When should I choose Full Canvas Re-encode instead of Lossless Binary Strip?',
        answer:
          'Pick Full Canvas Re-encode when you want a brand-new compressed bitmap with zero inherited binary segments whatsoever. It is also used automatically whenever you change Output Format or upload WebP and HEIC photos.',
      },
      {
        question: 'Which upload formats are accepted by Remove Image Metadata?',
        answer:
          'The upload dropzone accepts JPG (JPEG), PNG, WebP, and iPhone HEIC/HEIF files up to 20 MB per file. From there, you can export clean files in Original, JPG, PNG, or WebP format.',
      },
      {
        question: 'Does the Re-encode Quality slider affect Lossless Binary Strip files?',
        answer:
          'No, Lossless Binary Strip skips pixel re-encoding altogether so your JPEG/PNG visual bits remain untouched regardless of the slider. The Re-encode Quality slider (50%–100%) only applies to WebP/HEIC inputs or Full Canvas Re-encode exports.',
      },
      {
        question: 'Can I remove metadata from a whole folder of listing photos at once?',
        answer:
          'Yes, drop multiple photos together and wait a moment for the automatic verification badges to turn green across all cards. Then click Download All Clean (ZIP) to download clean_images_no_metadata.zip.',
      },
      {
        question: 'Are my uncleaned photos with GPS coordinates uploaded anywhere?',
        answer:
          'Never — scrubbing sensitive GPS and device headers only protects privacy when it happens locally. All binary byte slicing and Canvas exporting occur inside your own browser memory.',
      },
      {
        question: 'Why did a photo show Verified clean (0 EXIF/GPS tags) right after upload?',
        answer:
          'That means the source file already contained zero EXIF, GPS, or text metadata chunks (common for screenshots or images downloaded from messaging apps). Our cleaner still verifies the output cleanly.',
      },
      {
        question: 'Does stripping metadata reduce file size too?',
        answer:
          'Yes, camera photos often carry embedded EXIF preview thumbnails, Adobe XMP XML blocks, and color or comment segments. Stripping those in Lossless Binary Strip mode frequently trims tens of kilobytes with zero change in image sharpness.',
      },
      {
        question: 'Does Lossless Binary Strip preserve transparent PNG backgrounds?',
        answer:
          'Yes, PNG image data chunks (IDAT) and alpha transparency remain byte-for-byte untouched. Only ancillary text, EXIF, and timestamp chunks are excised from the file.',
      },
      {
        question: 'What happens if an iPhone photo was rotated via an EXIF Orientation tag?',
        answer:
          'Stripping the raw APP1 block losslessly deletes the Orientation flag, whereas Full Canvas Re-encode or HEIC decoding bakes upright pixel orientation directly into the exported canvas. If a vertical JPEG looks sideways after lossless stripping, switch to Full Canvas Re-encode and click Re-clean All.',
      },
      {
        question: 'Can I convert a clean PNG directly to WebP or JPG while removing metadata?',
        answer:
          'Yes, pick JPG or WebP under Output Format, set Re-encode Quality, and click Re-clean All. Each file re-encodes cleanly through Canvas with all metadata stripped and the chosen format applied.',
      },
      {
        question: 'Are my original files on disk altered or overwritten?',
        answer:
          'No, web browsers cannot overwrite files directly in your local folders. Clicking Download Clean saves a separate scrubbed copy while leaving your originals untouched.',
      },
      {
        question: 'Can I double-check the cleaned output in an independent inspector?',
        answer:
          'Yes, drop any downloaded file into our Image Metadata Viewer right after saving. It parses the raw binary headers independently so you can confirm zero GPS coordinates or camera tags remain.',
      },
      {
        question: 'Does the cleaner work on mobile phones before posting to marketplaces?',
        answer:
          'Yes, open the page in iOS Safari or Android Chrome and pick photos directly from your phone camera roll. Once the green verified badges appear, you can download clean copies straight to your device.',
      },
      {
        question: 'Can I paste a clipboard image into Remove Image Metadata?',
        answer:
          'Yes, press Ctrl+V (or Cmd+V on Mac) to drop a copied image or screenshot straight into the upload queue. It scrubs any residual chunks automatically and readies the clean download.',
      },
      {
        question: 'Why does the Re-clean All button exist if cleaning starts automatically?',
        answer:
          'Files scrub immediately upon drop using your active settings. If you later change Stripping Method, switch Output Format, or adjust Re-encode Quality, clicking Re-clean All applies those updated options across the entire batch.',
      },
      {
        question: 'Is there any limit on file count or cost to strip EXIF data?',
        answer:
          'Each uploaded file can be up to 20 MB so your browser memory stays smooth. Beyond that per-file cap, you can remove image metadata from unlimited photos with zero watermarks, signups, or fees.',
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
      'Use our free favicon generator to build a multi-size favicon.ico, Apple Touch, Android Chrome icons, site.webmanifest, and HTML snippet right in your browser.',
    h1: 'Free Online Favicon Generator',
    subtitle:
      'Designed for web developers, startup founders, bloggers, and indie makers, this free favicon generator turns any logo or graphic into a ready-to-deploy browser and mobile icon pack. Preview your icon on light and dark tabs, tune padding, corner radius, and background fill, and download everything locally with zero server uploads.',
    howToSteps: [
      {
        title: 'Upload your logo or icon graphic',
        description:
          'Drop a PNG, SVG, JPG, WebP, or HEIC image up to 20 MB (square PNG or SVG works best) or paste from your clipboard with Ctrl+V.',
      },
      {
        title: 'Choose Background Fill',
        description:
          'Keep the Transparent checkbox enabled for clean cut-out icons, or uncheck it to pick a solid hex backdrop color.',
      },
      {
        title: 'Adjust Padding and Corner Radius',
        description:
          'Slide Padding between 0% and 25% for breathing room and drag Corner Radius from 0% to 50% for rounded squares or circular badges.',
      },
      {
        title: 'Inspect the Browser Tab Previews',
        description:
          'Check the live 16×16 scale previews rendered inside both the light My Website tab and the Dark Mode Tab mockup.',
      },
      {
        title: 'Download individual files or the full ZIP',
        description:
          'Save individual icon sizes from the generated cards or click Download All (ZIP) to download favicon_package_compressmypic.zip.',
      },
      {
        title: 'Copy the HTML head snippet',
        description:
          'Click Copy HTML in the dark HTML <head> Snippet panel and paste the <link> tags directly into your website template.',
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
        question: 'Which exact icon sizes and files are packed inside the favicon ZIP?',
        answer:
          'Downloading the ZIP bundles a multi-frame favicon.ico (16×16, 32×32, and 48×48), separate favicon-16x16.png, favicon-32x32.png, and favicon-48x48.png files, apple-touch-icon.png (180×180), android-chrome-192x192.png, and android-chrome-512x512.png. It also generates a ready-to-upload site.webmanifest JSON file.',
      },
      {
        question: 'Is favicon.ico a genuine multi-frame ICO binary or a renamed PNG?',
        answer:
          'Our favicon generator writes a real Windows ICONDIR binary container with separate 32-bit RGBA PNG directory entries for 16×16, 32×32, and 48×48 frames. Older desktop browsers and Windows shortcuts pick the sharpest matching frame automatically without rendering artifacts.',
      },
      {
        question: 'What source dimensions and format work best for sharp browser tab icons?',
        answer:
          'Start with a clean square PNG or self-contained SVG at 512×512 pixels or larger so downscaling produces crisp edges at 16×16 and 512×512 alike. Tiny low-resolution sources stretched up to 512×512 PWA splash icons can appear soft.',
      },
      {
        question: 'What happens if I upload a rectangular logo instead of a square one?',
        answer:
          'Rectangular graphics are centered proportionally inside each square icon canvas without stretching or squashing your brand mark. Empty space on the top/bottom or left/right fills with either transparency or your selected background color.',
      },
      {
        question: 'Why does the generator show both light and dark browser tab previews?',
        answer:
          'Dark icons can vanish against Dark Mode browser tabs, while white logos disappear on light browser themes. Viewing both the light My Website tab and Dark Mode Tab side by side lets you add padding or a solid background pill before deploying.',
      },
      {
        question: 'How do Padding and Corner Radius work together on an app icon?',
        answer:
          'Padding (0% to 25%) shrinks your logo slightly inward from the square boundary so rounded corners do not clip graphic edges. Raising Corner Radius toward 20% creates iOS-style squircles, while 50% clips the entire icon into a full circle.',
      },
      {
        question: 'Should Apple Touch Icons use a solid background instead of transparent?',
        answer:
          'iOS Safari often composites transparent areas of apple-touch-icon.png onto black when users pin a site to their Home Screen. If your logo uses dark shapes, uncheck Transparent under Background Fill and choose white or your brand color.',
      },
      {
        question: 'What is included inside the generated site.webmanifest file?',
        answer:
          'The manifest JSON declares paths to /android-chrome-192x192.png and /android-chrome-512x512.png, sets display to standalone, and syncs theme_color and background_color with your chosen Background Fill. You can open it in any text editor to customize your site name.',
      },
      {
        question: 'Where should I upload the generated favicon files on my website?',
        answer:
          'Place favicon.ico, all generated PNG icons, and site.webmanifest in your site’s root public directory so URLs like /favicon.ico and /apple-touch-icon.png resolve cleanly. Then paste the copied HTML <head> Snippet inside your main HTML <head> section.',
      },
      {
        question: 'Can I download just favicon.ico or apple-touch-icon.png without the ZIP?',
        answer:
          'Yes, each icon size appears as its own preview card showing exact dimensions and byte size alongside a dedicated Download button. You can grab single assets individually or click Download All (ZIP) for the complete package.',
      },
      {
        question: 'Does uploading an SVG logo create crisp 16×16 icons?',
        answer:
          'Yes, inline SVG vectors rasterize directly inside the browser onto each target pixel grid from 16×16 up to 512×512. Just ensure your SVG uses embedded shapes and colors rather than external linked images or remote web fonts.',
      },
      {
        question: 'Can I convert an iPhone HEIC photo or WebP graphic into a site favicon?',
        answer:
          'Yes, the upload dropzone accepts PNG, SVG, JPG, WebP, GIF, BMP, and iPhone HEIC/HEIF files up to 20 MB. HEIC images decode locally in your browser before the icon package builds.',
      },
      {
        question: 'Are brand logos or unreleased app icons sent to external servers?',
        answer:
          'No, Canvas resizing, binary ICO packing, manifest generation, and ZIP archiving run strictly inside your own browser tab. Your unreleased brand marks never travel across any network.',
      },
      {
        question: 'Why did my old favicon still appear in Chrome after uploading new files?',
        answer:
          'Browsers cache favicons aggressively for days, even after you replace files on your server. Hard-refreshing with Ctrl+Shift+R (or opening an Incognito window) forces your browser to fetch the new favicon.ico and PNG icons.',
      },
      {
        question: 'Do changes to Padding, Corner Radius, or Background Fill update every size at once?',
        answer:
          'Yes, moving any slider or toggling Background Fill immediately rebuilds favicon.ico, all six PNG icon dimensions, the light/dark tab previews, and site.webmanifest together. You never need to re-upload your logo between tweaks.',
      },
      {
        question: 'Does the HTML <head> Snippet work with React, Next.js, or plain HTML sites?',
        answer:
          'Yes, the standard <link rel="icon">, <link rel="apple-touch-icon">, and <link rel="manifest"> tags work across static HTML sites, WordPress headers, Vite/React index.html, and server templates. Simply paste them inside <head> and place the files at your web root.',
      },
      {
        question: 'Can I create a circular favicon from a square avatar or badge?',
        answer:
          'Yes, keep Transparent checked under Background Fill and drag Corner Radius all the way to 50%. All PNG icons and the embedded favicon.ico frames clip cleanly into a smooth anti-aliased circle.',
      },
      {
        question: 'Why is 192×192 and 512×512 required alongside favicon.ico?',
        answer:
          'Modern Android Chrome and Progressive Web App install prompts look for 192×192 home-screen icons and 512×512 splash icons declared in site.webmanifest. Including both ensures mobile shortcuts look sharp alongside classic desktop browser tabs.',
      },
      {
        question: 'Can I paste a logo graphic straight from my clipboard into the favicon tool?',
        answer:
          'Yes, copy an image or screenshot to your clipboard and press Ctrl+V (or Cmd+V on Mac) on the page. It feeds immediately into the generator and renders the full icon set.',
      },
      {
        question: 'Is there any watermark, account requirement, or cost for generating favicon packs?',
        answer:
          'No, the favicon generator is 100% free for personal and commercial websites with no watermarks, accounts, or daily build limits. Only a 20 MB source file ceiling applies so browser memory stays fast.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Image Color Picker',
    shortDescription: 'Pick exact pixel colors from any image in HEX, RGB, HSL & CMYK.',
    category: 'developer',
    seoTitle: 'Image Color Picker – Extract HEX, RGB & HSL Codes Free',
    seoDescription:
      'Sample exact pixel colors with our online image color picker. Inspect HEX, RGB, HSL, and CMYK values with a live pixel loupe and export CSS variables locally.',
    h1: 'Free Online Image Color Picker',
    subtitle:
      'Built for web designers, frontend developers, brand stylists, and illustrators, our browser image color picker samples exact RGBA pixels from any photo, logo, or screenshot. Hover to inspect an 11×11 magnified loupe with live HEX readout, click pixels to save swatches, and export CSS custom properties without uploading your files.',
    howToSteps: [
      {
        title: 'Upload an image or paste a screenshot',
        description:
          'Drop a JPG, PNG, WebP, HEIC, SVG, BMP, or GIF file up to 20 MB, or press Ctrl+V to paste a screenshot straight from your clipboard.',
      },
      {
        title: 'Hover with the live Pixel Inspector loupe',
        description:
          'Move your cursor over the image canvas to see exact (x, y) pixel coordinates and an 11×11 zoomed crosshair grid updating the swatch in real time.',
      },
      {
        title: 'Click pixels to pin and build swatches',
        description:
          'Click any spot on the canvas to lock its color into the Pixel Inspector and add it to Picked Swatches (up to 24 unique colors).',
      },
      {
        title: 'Copy HEX, RGB, HSL, or CMYK values',
        description:
          'Click the copy icon next to HEX, RGB, HSL, or CMYK in the Pixel Inspector—or click any saved swatch pill—to copy the code immediately.',
      },
      {
        title: 'Export your palette as CSS variables',
        description:
          'Click Export CSS in the Picked Swatches card to download picked-colors.css with clean :root custom properties ready for your stylesheet.',
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
        question: 'Does this image color picker sample from the full-resolution file or a shrunk preview?',
        answer:
          'Every hover and click maps pointer coordinates proportionally onto an offscreen full-resolution HTML5 Canvas matching your image’s true naturalWidth × naturalHeight. Even if a large 4K photo scales down visually to fit your screen, getImageData reads the exact underlying pixel.',
      },
      {
        question: 'How does the 11×11 magnified loupe help target thin lines or small icons?',
        answer:
          'Moving across the canvas updates an 88×88 nearest-neighbor zoomed loupe displaying an 11×11 pixel grid around your cursor with a double-outlined crosshair on the exact active pixel. That prevents accidentally sampling anti-aliased border pixels next to crisp edges.',
      },
      {
        question: 'Which color code formats are calculated automatically for every picked pixel?',
        answer:
          'The Pixel Inspector converts the sampled RGB triplet simultaneously into uppercase HEX (#RRGGBB), CSS rgb(r, g, b), CSS hsl(h, s%, l%), and percentage CMYK values. Each row has its own one-click copy button.',
      },
      {
        question: 'How many colors can I collect in Picked Swatches at one time?',
        answer:
          'Clicking different parts of your photo stores up to 24 unique HEX swatches in chronological order (skipping duplicates automatically). Clicking any saved swatch pill restores it in the inspector and copies its HEX code straight to your clipboard.',
      },
      {
        question: 'What does the Export CSS button download?',
        answer:
          'Clicking Export CSS generates a picked-colors.css stylesheet containing a :root block with numbered custom properties (--color-1, --color-2, etc.) and inline RGB comments for every color in Picked Swatches. If you haven’t clicked multiple pixels yet, it exports your currently selected pixel.',
      },
      {
        question: 'Why is a color already displayed right when an image loads?',
        answer:
          'On initial load, the inspector automatically samples the exact center pixel of your uploaded image so you immediately see live HEX, RGB, HSL, and CMYK readouts before moving your mouse. Moving or clicking anywhere updates those readouts instantly.',
      },
      {
        question: 'Can I paste a screenshot directly with Ctrl+V to sample UI colors?',
        answer:
          'Yes, copy a webpage snippet, app UI, or design mockup to your clipboard and press Ctrl+V (or Cmd+V on Mac) while the upload area is open. It loads straight onto the sampling canvas without saving a temporary file first.',
      },
      {
        question: 'Which file types can I inspect with the eyedropper tool?',
        answer:
          'You can load JPG, PNG, WebP, iPhone HEIC/HEIF, SVG, BMP, and GIF images up to 20 MB each. Vector SVGs rasterize cleanly onto Canvas so you can sample exact rendered fill colors directly.',
      },
      {
        question: 'How accurate are the CMYK values shown in the Pixel Inspector?',
        answer:
          'CMYK percentages are computed mathematically from sRGB pixel values using standard RGB-to-CMYK conversion formulas. For commercial offset printing requiring strict ICC press profiles, treat them as helpful starting approximations rather than calibrated ink proofs.',
      },
      {
        question: 'What happens if I sample a transparent area on a PNG logo?',
        answer:
          'HTML5 Canvas reads red, green, and blue channels at that coordinate—fully transparent Canvas pixels default to 0, 0, 0 (#000000) when RGB channels are empty. Sample directly over opaque strokes or shapes to inspect your true artwork colors.',
      },
      {
        question: 'Are private UI mockups or client brand assets uploaded to any server?',
        answer:
          'No, pixel reading via Canvas getImageData runs strictly in your local browser memory. Unreleased designs, confidential screenshots, and personal photos never leave your computer or phone.',
      },
      {
        question: 'Does the color picker work on Chrome, Safari, and Firefox without browser extensions?',
        answer:
          'Yes, unlike the experimental EyeDropper browser API that only works in desktop Chromium, our HTML5 Canvas sampler runs across Firefox, Safari, Edge, and Chrome. No browser extensions, special permissions, or plugins are required.',
      },
      {
        question: 'How do I switch to a different photo after picking swatches?',
        answer:
          'Click the New Image button in the top-right corner of the canvas header at any time. That clears the active image, resets the Picked Swatches list cleanly, and returns you to the upload zone.',
      },
      {
        question: 'Can I inspect exact pixel coordinates alongside the color value?',
        answer:
          'Yes, the Pixel Inspector header displays live x and y coordinates (for example, x:412, y:198) in monospace type as you hover over the canvas. That helps you match specific pixels consistently across large assets.',
      },
      {
        question: 'Why does clicking a color inside a JPEG photo vary slightly between adjacent pixels?',
        answer:
          'JPEG compression uses chroma subsampling and block transforms that introduce slight pixel-to-pixel variations across flat surfaces. Using the 11×11 loupe lets you pick a clean representative pixel away from compressed edges.',
      },
      {
        question: 'Can I tap colors accurately on an iPad or smartphone touchscreen?',
        answer:
          'Yes, tapping any area of the canvas on mobile triggers the sampler at your tap location, pins the swatch, updates all four color formats, and adds the HEX code to Picked Swatches. You can also tap any saved swatch pill to copy it.',
      },
      {
        question: 'Does this tool replace my saved swatches if I click the same hex color twice?',
        answer:
          'No, Picked Swatches checks for matching HEX strings automatically and ignores duplicates. That keeps your collected palette tidy even if you sample the same background or brand color multiple times.',
      },
      {
        question: 'Why use HSL alongside HEX and RGB when styling websites?',
        answer:
          'HSL (Hue, Saturation, Lightness) makes it easy for CSS developers to derive lighter hover states or darker borders by adjusting only the lightness percentage while keeping hue constant. Having both HEX and HSL side by side saves manual conversion.',
      },
      {
        question: 'What is the maximum image file size allowed in the color picker?',
        answer:
          'Individual uploaded images can be up to 20 MB in file size. That ceiling easily handles high-megapixel camera photos, large Figma PNG exports, and full-page screenshots.',
      },
      {
        question: 'Is there any cost, account, or limit on how many colors I can sample?',
        answer:
          'No, the image color picker is completely free with no accounts or paywalls. You can upload unlimited images and export CSS color palettes with zero watermarks.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Image Dimensions Checker',
    shortDescription: 'Check width, height, aspect ratio, megapixels & print size.',
    category: 'developer',
    seoTitle: 'Image Dimensions Checker – Pixel Size & Aspect Ratio',
    seoDescription:
      'Use this free image dimensions checker to inspect pixel width, height, aspect ratio, megapixels, alpha, and 300 DPI print size across batches in your browser.',
    h1: 'Image Dimensions Checker & Ratio Tool',
    subtitle:
      'Ideal for e-commerce managers, ad buyers, UI developers, and print designers, our image dimensions checker reads pixel width, height, aspect ratio, megapixels, and 300 DPI print size in seconds. Drop entire batches of assets, validate minimum pixel requirements, and export clean CSV or JSON reports privately on your device.',
    howToSteps: [
      {
        title: 'Drop or select one or multiple images',
        description:
          'Upload JPG, PNG, WebP, HEIC, SVG, BMP, GIF, or AVIF files up to 20 MB each into the dropzone, or paste via Ctrl+V.',
      },
      {
        title: 'Inspect pixel dimensions and aspect ratios',
        description:
          'Review exact Width × Height (px), Megapixels, Orientation (Landscape, Portrait, Square), and simplified/decimal Aspect Ratio in the table.',
      },
      {
        title: 'Verify file weight, format, and Alpha channel',
        description:
          'Check Size / Format column values to spot true detected container types, byte counts, and whether transparent Alpha pixels exist.',
      },
      {
        title: 'Check estimated 300 DPI print size',
        description:
          'Look at the Print @300 DPI column to see maximum crisp physical print dimensions in inches (W" × H") before uploading to print labs.',
      },
      {
        title: 'Run minimum spec checks and export CSV or JSON',
        description:
          'Enter optional Min Width Check (px) and Min Height Check (px) rules to flag Pass or Below Min, then click Export CSV or Export JSON.',
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
        question: 'Does running this image dimensions checker alter or re-save my images?',
        answer:
          'No, the checker reads natural pixel dimensions, file bytes, and container properties purely in browser memory. Nothing is compressed, cropped, overwritten, or uploaded to external servers.',
      },
      {
        question: 'Which image file formats can I inspect in a batch?',
        answer:
          'You can drop JPG, PNG, WebP, iPhone HEIC/HEIF, SVG, BMP, GIF, and browser-supported AVIF images up to 20 MB per file. Mixed formats can be dropped together in the same batch table.',
      },
      {
        question: 'How does the Min Width Check and Min Height Check validator work?',
        answer:
          'Typing a pixel threshold into Min Width Check (px) or Min Height Check (px) adds a live Spec Check column to the table. Every row immediately displays a green Pass badge or an amber Below Min alert so undersized creatives stand out fast.',
      },
      {
        question: 'How are common aspect ratios like 16:9 or 4:5 matched vs exact ratios?',
        answer:
          'First, the calculator computes the mathematically reduced width:height ratio via greatest common divisor and decimal ratio (for example, 1.78:1). When an image matches or sits very close to standard frame ratios like 16:9, 4:3, 3:2, 1:1, 4:5, or 9:16, it displays that recognizable label directly.',
      },
      {
        question: 'How is the Print @300 DPI dimension calculated from pixels?',
        answer:
          'Print width and height in inches are computed by dividing pixel width and height by 300 pixels per inch (for example, 3000 × 2400 px equals 10.0" × 8.0" at 300 DPI). The exported JSON also retains 72 DPI screen-scale print equivalents.',
      },
      {
        question: 'What columns are included when I click Export CSV?',
        answer:
          'Clicking Export CSV downloads image-dimensions-report.csv with ten structured columns: Filename, Width (px), Height (px), Orientation, Aspect Ratio, Megapixels, File Size (Bytes), Format, Transparency, and Print Size @300DPI. Filenames containing commas or quotes are properly CSV-escaped.',
      },
      {
        question: 'What does Export JSON save compared to CSV?',
        answer:
          'Export JSON writes a formatted image-dimensions-report.json array containing clean metadata objects for every inspected row (omitting internal preview URLs and temporary row IDs). Developers and QA scripts can parse it straight into automated asset checks.',
      },
      {
        question: 'How does the checker detect whether a PNG or WebP actually has Alpha transparency?',
        answer:
          'Instead of guessing from the file extension, the loader scans pixel alpha bytes on Canvas to verify whether any pixel has opacity below 255. Images with true transparent regions show an Alpha tag right under their format.',
      },
      {
        question: 'Can I append additional folders or batches to an existing dimension table?',
        answer:
          'Yes, dropping or browsing more images adds new rows right onto the bottom of your existing table without wiping earlier entries. Click Clear anytime you want to reset the table for a fresh project.',
      },
      {
        question: 'Why do iPhone photos display Landscape vs Portrait accurately here?',
        answer:
          'Modern browsers normalize EXIF camera rotation automatically when decoding JPEG and HEIC images into natural dimensions. That guarantees a vertical smartphone shot reports Portrait orientation and tall pixel bounds correctly.',
      },
      {
        question: 'How are megapixels (MP) calculated for my images?',
        answer:
          'Megapixels equal (Width × Height) divided by 1,000,000, rounded to two decimal places (for instance, 1920 × 1080 = 2.07 MP). That matches standard camera sensor and print marketplace reporting.',
      },
      {
        question: 'What happens if I upload a file with a misleading extension, like a WebP named .jpg?',
        answer:
          'Our inspector reads the underlying binary type resolved during decoding rather than trusting the filename suffix blindly. You will see the true detected format alongside the exact byte weight in the Size / Format column.',
      },
      {
        question: 'Can I check intrinsic dimensions of SVG graphics as well?',
        answer:
          'Yes, self-contained SVG files with width/height attributes or a viewBox decode natively inside the browser. The dimensions table reads their rendered pixel width, height, and aspect ratio cleanly.',
      },
      {
        question: 'Are unreleased ad creatives or confidential product shots sent online?',
        answer:
          'Never — all image decoding, transparency detection, spec checking, and CSV/JSON generation execute inside your own browser tab. Zero bytes leave your device.',
      },
      {
        question: 'Can I paste a clipboard image directly to verify its pixel resolution?',
        answer:
          'Yes, press Ctrl+V (or Cmd+V on Mac) to append a copied screenshot or graphic straight into the dimensions table. You can immediately read its exact pixel size, megapixel count, and aspect ratio.',
      },
      {
        question: 'Why might an Amazon, Etsy, or Shopify product image fail Min Width Check?',
        answer:
          'Many marketplaces require at least 1000 px or 1200 px on the shortest or longest side to enable zoom previews. Entering 1200 into Min Width Check lets you audit an entire product catalog before uploading.',
      },
      {
        question: 'What happens if one unreadable file is mixed into a large batch drop?',
        answer:
          'If a file exceeds the 20 MB limit or fails browser decoding, UploadZone flags or skips that invalid item gracefully. Every valid image in the same drop still populates normally in your dimensions table.',
      },
      {
        question: 'Can I use this dimension checker on a phone or tablet?',
        answer:
          'Yes, open the tool in iOS Safari or Android Chrome, pick photos from your camera roll, and inspect exact pixel dimensions and megapixel sizes on the go. The table scrolls horizontally on narrow screens so no columns are clipped.',
      },
      {
        question: 'How can I fix an image that fails my minimum spec check or wrong aspect ratio?',
        answer:
          'Click the linked Image Resizer or Image Cropper cards in Related Free Image Tools below the guide. You can crop to an exact 16:9, 4:5, or 1:1 ratio or scale dimensions directly in your browser.',
      },
      {
        question: 'Is there any daily limit or fee for batch dimension reports?',
        answer:
          'No, inspecting unlimited batches of images up to 20 MB per file is completely free. You can download CSV and JSON reports as often as needed without accounts or watermarks.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: 'Image Cropper',
    shortDescription: 'Crop photos interactively with drag handles, aspect ratios & zoom.',
    category: 'crop-edit',
    seoTitle: 'Free Online Image Cropper – Crop Photos & Set Ratios',
    seoDescription:
      'Interactive browser image cropper with drag handles, 1:1 to 16:9 aspect presets, and zoom up to 300%. Crop JPG, PNG, WebP, and HEIC locally with zero uploads.',
    h1: 'Free Online Image Cropper',
    subtitle:
      'Built for social creators, designers, students, and e-commerce sellers, our interactive image cropper lets you frame and trim photos accurately right inside your browser. Lock popular ratios from 1:1 to 16:9, zoom up to 300% for tight edges, and export clean crops locally with zero uploads.',
    howToSteps: [
      {
        title: 'Upload an image to crop',
        description:
          'Drop a JPG, PNG, WebP, HEIC, GIF, BMP, or SVG image up to 20 MB into the dropzone, browse from your device, or paste with Ctrl+V.',
      },
      {
        title: 'Select an aspect ratio preset',
        description:
          'Keep Free for unrestricted trimming or click 1:1, 4:3, 16:9, 3:2, 4:5, or 9:16 under Aspect Ratio Preset to lock framing.',
      },
      {
        title: 'Drag the frame and resize handles',
        description:
          'Move the crop box over your subject using the rule-of-thirds grid and pull any of the 8 edge or corner handles while watching live Crop Width and Height.',
      },
      {
        title: 'Zoom in or reset full canvas',
        description:
          'Use the Zoom buttons (100% to 300% in 25% steps) for precise edge alignment, or click Select Full to reset to the entire image.',
      },
      {
        title: 'Pick output format and quality',
        description:
          'Choose Original, JPG, PNG, or WebP output, and adjust the Quality slider (10% to 100%) when saving lossy formats.',
      },
      {
        title: 'Crop and download your file',
        description:
          'Click Crop & Download to render the selected rectangle at full source resolution and save it with dimensions in the filename.',
      },
    ],
    features: [
      { title: 'Interactive Drag & Resize Handles', description: 'Smooth mouse and touch pointer handles let you crop any region down to exact pixels.' },
      { title: 'Aspect Ratio Presets', description: 'Switch between Freeform, 1:1 Square, 4:3, 16:9, 3:2, 4:5 Instagram, and 9:16 Story.' },
      { title: 'Zoom & Live Dimension Readout', description: 'Zoom in for tight framing and view exact output width × height in real time.' },
      { title: '100% Private Local Processing', description: 'Your photos are cropped on your device via HTML5 Canvas with zero server uploads.' },
    ],
    faqs: [
      {
        question: 'Does cropping cut away quality inside the selected rectangle?',
        answer:
          'No, the image cropper extracts your selected coordinates straight from the full original resolution stored in browser memory rather than the scaled preview box. When saving as lossless PNG, pixels inside your crop remain identical to the source.',
      },
      {
        question: 'What aspect ratio presets are built into the crop options?',
        answer:
          'You can switch between Free (any rectangle), 1:1 (square avatars), 4:3, 16:9 (widescreen/YouTube), 3:2 (DSLR standard), 4:5 (Instagram portrait), and 9:16 (Stories/Reels). Clicking a preset centers a matching frame automatically.',
      },
      {
        question: 'How do the 8 resize handles behave when an aspect ratio preset is active?',
        answer:
          'All four corner handles and edge handles maintain your selected proportion automatically while clamping cleanly inside the image borders. To adjust width and height independently again, simply click the Free preset.',
      },
      {
        question: 'What is the rule-of-thirds grid inside the selection box for?',
        answer:
          'The subtle 3×3 grid divides your crop frame into thirds so you can align horizons, eyes, or product centers accurately while dragging. It is purely a visual guide on screen and never appears in your exported image.',
      },
      {
        question: 'How far can I zoom in for detailed framing?',
        answer:
          'Use the Zoom In (+) and Zoom Out (-) buttons in the viewport bar to zoom smoothly from 100% up to 300% in 25% increments. When zoomed past 100%, scroll inside the preview stage to trim fine borders.',
      },
      {
        question: 'What does the Select Full button in Crop Options do?',
        answer:
          'Clicking Select Full switches Aspect Ratio back to Free, expands the crop box to cover 100% of your image width and height, and resets Zoom to 100%. It gives you a clean starting point without re-uploading.',
      },
      {
        question: 'Can I see exact output pixel dimensions before downloading?',
        answer:
          'Yes, both the Selection readout above the stage and the Crop Width / Crop Height cards in Crop Options update live in pixels as you drag. The exported filename also includes those exact cropped dimensions (for example, photo_1080x1080_cropped.jpg).',
      },
      {
        question: 'Does cropping work with finger gestures on phones and tablets?',
        answer:
          'Yes, the crop box and handles use touch-action-safe Pointer events designed for both desktop mice and mobile touchscreens. You can drag the frame and pull handles comfortably on iOS and Android.',
      },
      {
        question: 'Does cropping preserve transparent backgrounds on PNGs and WebPs?',
        answer:
          'Yes, keeping Original format (from PNG/WebP) or choosing PNG or WebP keeps full alpha transparency intact inside the cropped region. Choosing JPG flattens transparent pixels cleanly onto solid white.',
      },
      {
        question: 'Why does the Quality slider disappear when PNG is selected?',
        answer:
          'PNG uses lossless compression, so a lossy percentage quality setting does not apply. Switch Output Format to Original (for JPEGs), JPG, or WebP to reveal the 10%–100% Quality slider.',
      },
      {
        question: 'Can I crop multiple different images at once?',
        answer:
          'This interactive cropper handles one image at a time so you can inspect and frame each subject individually with drag handles and zoom. Once downloaded, click the trash icon to load your next photo immediately.',
      },
      {
        question: 'Which file formats can be uploaded into the cropper?',
        answer:
          'You can crop JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG images up to 20 MB per file. Note that animated GIFs crop their initial frame as a static output.',
      },
      {
        question: 'Are private portraits or IDs uploaded to a server when cropped?',
        answer:
          'No, the entire canvas draw and blob encoding execute locally inside your web browser. Nothing is transmitted over a network or saved externally.',
      },
      {
        question: 'Can I paste a screenshot straight from my clipboard to trim it?',
        answer:
          'Yes, take a screenshot and press Ctrl+V (or Cmd+V on Mac) on the page while no image is loaded. It opens straight inside the crop viewport ready to frame.',
      },
      {
        question: 'How do I crop a rectangular photo into a clean square profile avatar?',
        answer:
          'Click the 1:1 button under Aspect Ratio Preset, drag the white square over the face or logo, and adjust corner handles until satisfied. Then click Crop & Download to save an exact square image.',
      },
      {
        question: 'What quality setting is default when exporting JPG or WebP crops?',
        answer:
          'Quality defaults to 92% so cropped JPEGs and WebPs keep crisp photographic texture without bloated file weight. Slide down toward 75%–85% if you also want smaller upload size.',
      },
      {
        question: 'Does cropping strip embedded EXIF GPS location data too?',
        answer:
          'Yes, exporting the cropped region through a fresh HTML5 Canvas creates a clean bitmap without original JPEG EXIF or GPS tags. That helps protect your location and device privacy when sharing trimmed shots.',
      },
      {
        question: 'Why does the stage darken everything outside my selection box?',
        answer:
          'The semi-transparent dark overlay dims the regions that will be trimmed away. That visual contrast helps you judge composition and rule-of-thirds balance cleanly before clicking Crop & Download.',
      },
      {
        question: 'Can I replace the current photo quickly after downloading a crop?',
        answer:
          'Yes, click the red trash icon in the top-right corner of the crop viewport header at any time. That clears the active photo and returns cleanly to the upload zone for your next image.',
      },
      {
        question: 'Is there any cost, signup, or watermark on cropped exports?',
        answer:
          'No, the image cropper is completely free with no accounts or paywalls. Every cropped photo exports cleanly at full resolution with zero watermarks added.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: 'Image Watermark',
    shortDescription: 'Add custom text or logo watermarks, drag or tile across photos.',
    category: 'crop-edit',
    seoTitle: 'Add Image Watermark Free – Custom Text & Logo Tool',
    seoDescription:
      'Protect photos with an image watermark right in your browser. Add custom text or transparent PNG/SVG logos, drag to place or tile diagonally, and export safely.',
    h1: 'Free Online Image Watermark Tool',
    subtitle:
      'Designed for photographers, illustrators, Etsy sellers, and digital agencies, this private browser tool adds a crisp text or logo image watermark without server uploads. Drag your mark freely across the canvas, snap to 9 anchor presets, or repeat a tilted pattern across the whole photo.',
    howToSteps: [
      {
        title: 'Upload your base photo',
        description:
          'Drop a JPG, PNG, WebP, HEIC, GIF, BMP, or SVG image up to 20 MB into the dropzone, browse from disk, or paste via Ctrl+V.',
      },
      {
        title: 'Pick Text Watermark or Logo Image',
        description:
          'Choose Text Watermark to type custom brand text, pick color, and adjust Size (2%–20%), or choose Logo Image to upload a transparent PNG or SVG logo (5%–60% width).',
      },
      {
        title: 'Adjust Opacity and Rotation',
        description:
          'Set Opacity from subtle 5% up to solid 100%, and tilt Rotation anywhere from -180° to +180° in real time.',
      },
      {
        title: 'Position freely or enable Tiled Repeat Pattern',
        description:
          'Drag your watermark directly on the preview image, click a 9-point Anchor Preset (TL to BR), or toggle Tiled Repeat Pattern and adjust Tile Spacing (15%–60%).',
      },
      {
        title: 'Select output format and quality',
        description:
          'Choose Orig, JPG, PNG, or WebP output, and set Quality (10%–100%) when saving lossy formats.',
      },
      {
        title: 'Download your watermarked image',
        description:
          'Click Download Watermarked Image to composite the overlay at full original image resolution and save <name>_watermarked.',
      },
    ],
    features: [
      { title: 'Text & Logo Watermarks', description: 'Use crisp custom typography or upload your transparent PNG/SVG brand logo.' },
      { title: 'Drag-to-Position + 9 Anchor Presets', description: 'Place your mark in any corner, dead center, or drag it freely on the canvas.' },
      { title: 'Diagonal Tiled Protection', description: 'Enable Tiled Watermark to repeat your text or logo across the entire photo with adjustable spacing.' },
      { title: 'Client-Side Privacy', description: 'Watermark proofs and portfolio shots locally without sending originals to external servers.' },
    ],
    faqs: [
      {
        question: 'Can I use both custom text and my own transparent logo as an image watermark?',
        answer:
          'Yes, switch between Text Watermark and Logo Image at the top of the controls panel. Text mode supports custom phrasing, hex color, and size scaling, while Logo mode accepts transparent PNG, SVG, or any supported logo file.',
      },
      {
        question: 'How does the Tiled Repeat Pattern protect client proofs better than a single corner stamp?',
        answer:
          'Single corner marks can easily be cropped away, whereas enabling Tiled Repeat Pattern stamps your rotated text or logo in a staggered grid across the whole frame. Use the Tile Spacing slider (15% to 60%) to control grid density.',
      },
      {
        question: 'Why are Anchor Presets hidden when Tiled Repeat Pattern is turned on?',
        answer:
          'Anchor Presets and drag-to-position apply to placing a single watermark at specific coordinates (TL, TC, TR, ML, C, MR, BL, BC, BR). Turn off Tiled Repeat Pattern anytime you want to drag or snap a single stamp.',
      },
      {
        question: 'How is text size calculated across small thumbnails vs huge camera photos?',
        answer:
          'Font Size (2% to 20%) and Logo Width (5% to 60%) scale proportionally relative to your image width. That ensures your watermark looks consistent on both an 800 px product thumbnail and a 4000 px high-resolution proof.',
      },
      {
        question: 'Does the preview canvas downsample my downloaded output?',
        answer:
          'No, the interactive preview fits up to 900 px wide purely for responsive dragging on your screen. When you click Download Watermarked Image, the exporter builds a full-resolution canvas matching your original photo’s exact pixel dimensions.',
      },
      {
        question: 'Can I make white watermark text readable over light backgrounds?',
        answer:
          'Yes, Text Watermark automatically renders a subtle dark drop shadow behind your lettering. That keeps white or light-colored watermarks crisp and readable across bright skies, white product backdrops, and highlights.',
      },
      {
        question: 'What opacity and rotation ranges work best for unobtrusive proof protection?',
        answer:
          'For subtle corner branding, try 40%–65% Opacity at 0° rotation anchored to Bottom-Right (BR). For strong stock-proof protection, use Tiled Repeat Pattern at 25%–40% Opacity with a -25° or -35° diagonal angle.',
      },
      {
        question: 'How do I drag a single watermark into an exact custom spot?',
        answer:
          'With Tiled Repeat Pattern unchecked, click or press down directly anywhere on the preview canvas and drag your pointer. The watermark follows smoothly and clamps slightly inside edges so it never clips off.',
      },
      {
        question: 'Which image formats are supported for base photos and uploaded logos?',
        answer:
          'Both the main photo and logo upload support JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG up to 20 MB. Note that animated GIFs render as a single watermarked static frame.',
      },
      {
        question: 'Does exporting preserve transparency if my base image is a transparent PNG?',
        answer:
          'Yes, selecting Orig (from PNG/WebP), PNG, or WebP preserves full alpha transparency outside your artwork while compositing the watermark on top. Selecting JPG fills transparent areas with solid white.',
      },
      {
        question: 'Are unwatermarked original proofs ever uploaded to external servers?',
        answer:
          'No, keeping unwatermarked client proofs private is essential. Every canvas composite, tile pass, and final image export runs strictly inside your local browser memory with zero network uploads.',
      },
      {
        question: 'Can I upload a new base photo without losing my text, opacity, or angle settings?',
        answer:
          'Yes, click Change Image in the preview header whenever you want to stamp another photo. Your current watermark text, uploaded logo, opacity, rotation angle, and tiling layout stay configured automatically.',
      },
      {
        question: 'Can I replace the uploaded brand logo later without reloading the tool?',
        answer:
          'Yes, while Logo Image mode is selected, click Change Logo Image to pick a different PNG or SVG file at any time. Your existing base photo updates immediately.',
      },
      {
        question: 'Why does Quality disappear when PNG output is selected?',
        answer:
          'PNG outputs are lossless bitmaps, so percentage compression quality does not apply. Switch to Orig (for JPEG sources), JPG, or WebP to adjust the Quality slider between 10% and 100%.',
      },
      {
        question: 'Can I paste a photo directly from my clipboard to watermark it?',
        answer:
          'Yes, copy an image or screenshot and press Ctrl+V (or Cmd+V on Mac) when the upload zone is open. It loads directly into the watermark editor.',
      },
      {
        question: 'Is the watermark permanently flattened into the downloaded file?',
        answer:
          'Yes, the watermark is painted straight onto the output bitmap and saved as a flattened JPG, PNG, or WebP (<name>_watermarked). There are no editable layers left inside the exported image.',
      },
      {
        question: 'What happens if I leave the Watermark Text input blank?',
        answer:
          'If you clear the Watermark Text field completely, the renderer temporarily displays "Watermark" on the preview canvas. That prevents an invisible empty selection while you type a new label.',
      },
      {
        question: 'Can I position and export watermarked photos on a smartphone or iPad?',
        answer:
          'Yes, dragging across the preview canvas uses touch-friendly Pointer events alongside responsive sliders. You can easily stamp portfolio shots or proofs directly inside mobile Safari or Chrome.',
      },
      {
        question: 'Does watermarking strip camera EXIF GPS tags when exporting?',
        answer:
          'Yes, rendering onto a fresh HTML5 Canvas creates a clean output file without copying over camera EXIF headers. Your GPS location and device serial metadata stay excluded from the downloaded proof.',
      },
      {
        question: 'Does CompressMyPic add any extra badge next to my own watermark?',
        answer:
          'No, only the exact text or logo you configure is drawn onto your photo. We never add any external branding, corner badges, or site watermarks to your exports.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Blur & Pixelate Image',
    shortDescription: 'Blur or pixelate the whole photo or brush sensitive areas only.',
    category: 'crop-edit',
    seoTitle: 'Blur & Pixelate Image Free – Censor Faces & Text Online',
    seoDescription:
      'Easily blur or pixelate image areas online using a smooth censor brush or whole-frame mode. Hide faces, license plates, and private text right in your browser.',
    h1: 'Blur & Pixelate Image Online',
    subtitle:
      'Made for journalists, teachers, marketplace sellers, and everyday privacy users, this browser tool lets you blur or pixelate image details permanently before sharing online. Paint selectively over faces, license plates, or addresses with the interactive censor brush, or apply smooth blur and pixelation across the whole frame locally.',
    howToSteps: [
      {
        title: 'Upload a photo or screenshot',
        description:
          'Drop any JPG, PNG, WebP, HEIC, GIF, BMP, or SVG image up to 20 MB into the dropzone, or paste directly with Ctrl+V.',
      },
      {
        title: 'Pick Brush Area or Whole Image',
        description:
          'Keep Brush Area selected to censor only painted regions like faces and numbers, or switch to Whole Image to blur or pixelate the entire frame.',
      },
      {
        title: 'Choose Pixelate Mosaic or Smooth Blur',
        description:
          'Toggle between blocky Pixelate Mosaic tiles or Smooth Blur depending on the style you want.',
      },
      {
        title: 'Set strength and Brush Size',
        description:
          'Adjust Mosaic Block Size (4–60 px) or Blur Radius (2–50 px), and tune Brush Size (2%–20%) when painting selectively.',
      },
      {
        title: 'Paint over sensitive details',
        description:
          'Click and drag directly across faces, license plates, or private text on the preview canvas; click Undo or Reset Brush anytime.',
      },
      {
        title: 'Choose format and download',
        description:
          'Pick Orig, JPG, PNG, or WebP output, set Quality (10%–100%) for lossy formats, and click Download Image to save locally.',
      },
    ],
    features: [
      { title: 'Interactive Censor Brush', description: 'Paint over faces, addresses, or license plates with adjustable brush size and stroke undo.' },
      { title: 'Whole-Image Blur & Mosaic', description: 'Quickly blur backgrounds or create retro pixel-art mosaic effects across the whole frame.' },
      { title: 'Zero Server Upload', description: 'Because you are hiding sensitive details, nothing ever leaves your device.' },
      { title: 'Full-Resolution Export', description: 'Brush coordinates map accurately to full original image pixels for crisp exports.' },
    ],
    faqs: [
      {
        question: 'Can blurred or pixelated regions ever be unblurred or reversed from the downloaded file?',
        answer:
          'No, exporting flattens your strokes directly into a single flat raster bitmap (JPG, PNG, or WebP) with no hidden layers or undo history inside the image. Once downloaded, the original sharp pixels behind the censored mask are permanently gone.',
      },
      {
        question: 'Why is Pixelate Mosaic often safer than light Smooth Blur for hiding text?',
        answer:
          'Aggressive Mosaic Block Size (20 px to 60 px) merges characters into large solid color squares, destroying fine letter outlines completely. Very small blur radii can sometimes leave faint word shapes guessable, so using a higher Blur Radius or Pixelate Mosaic gives stronger redaction.',
      },
      {
        question: 'How does the Brush Area mode keep crisp areas outside my strokes untouched?',
        answer:
          'In Brush Area mode, your base image draws at full clarity while each painted stroke acts as an offscreen alpha mask compositing only the blurred or pixelated region on top. Unpainted parts of the photo stay completely sharp.',
      },
      {
        question: 'Can I mix both pixelated strokes and blurred strokes on the same image?',
        answer:
          'Yes, every stroke stores the Effect Style (Pixelate Mosaic or Smooth Blur), strength, and brush radius active when you painted it. You can pixelate a license plate first, switch to Smooth Blur, and brush a background face on the same photo.',
      },
      {
        question: 'Does painting on the scaled preview map accurately to huge camera photos?',
        answer:
          'Yes, all pointer coordinates save in normalized 0-to-1 ratios alongside proportional brush and effect scaling. When you click Download Image, the composite renders onto a full-resolution canvas matching your source dimensions.',
      },
      {
        question: 'How can I fix a slip while painting over a face or address?',
        answer:
          'Click the Undo button above the preview canvas to remove only your most recent stroke without clearing earlier redactions. If you want to start clean, click Reset Brush to erase every stroke immediately.',
      },
      {
        question: 'What does switching Target Area to Whole Image do?',
        answer:
          'Whole Image applies your active Smooth Blur radius or Pixelate Mosaic block size evenly across every pixel from edge to edge. It is handy for creating dreamy background plates, hero backdrops, or retro pixel-art textures without brushing.',
      },
      {
        question: 'Are unredacted photos with faces, IDs, or private addresses sent to any server?',
        answer:
          'Never — uploading uncensored sensitive images to a remote server would compromise privacy before you even hide anything. Every canvas mask, blur pass, and final download executes strictly inside your browser.',
      },
      {
        question: 'How big should I set Brush Size and Mosaic Block Size for small screenshots?',
        answer:
          'For chat screenshots or mobile captures, a Brush Size of 4%–8% targets single lines of text or usernames cleanly without smearing nearby messages. Setting Mosaic Block Size around 12–24 px usually obscures small text legibly.',
      },
      {
        question: 'Which image file formats can I blur or pixelate here?',
        answer:
          'You can upload JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG images up to 20 MB per file. Note that multi-frame animated GIFs censor and export their opening frame as a static file.',
      },
      {
        question: 'Can I censor sensitive parts of a screenshot pasted with Ctrl+V?',
        answer:
          'Yes, take a screenshot to your clipboard and press Ctrl+V (or Cmd+V on Mac) while the upload dropzone is visible. It opens directly in Brush Area mode ready to redact and save.',
      },
      {
        question: 'Does exporting preserve transparent backgrounds on PNG or WebP graphics?',
        answer:
          'Yes, keeping Orig (for PNG/WebP) or choosing PNG or WebP keeps alpha transparency intact around non-rectangular stickers or UI cutouts. Choosing JPG exports an opaque JPEG image.',
      },
      {
        question: 'Why are Undo and Reset Brush buttons only visible in Brush Area mode?',
        answer:
          'Those buttons manage individual painted brush strokes, so they hide automatically when you toggle to Whole Image mode. Switching back to Brush Area restores your saved strokes right where you left them.',
      },
      {
        question: 'Can I use my finger or Apple Pencil on a phone or tablet to paint censor strokes?',
        answer:
          'Yes, the canvas attaches touch-none Pointer events specifically built for mobile touchscreens and styluses. You can drag censor strokes across faces or text smoothly without accidentally scrolling the page.',
      },
      {
        question: 'Does censoring and exporting also strip EXIF camera GPS tags?',
        answer:
          'Yes, rendering the redacted composite through a fresh HTML5 Canvas omits original JPEG EXIF headers and GPS coordinates automatically. That protects both visual details and hidden file metadata.',
      },
      {
        question: 'Why does Quality hide when I choose PNG output?',
        answer:
          'PNG uses lossless pixel compression, so lossy quality percentages do not apply. Select Orig (when editing a JPEG), JPG, or WebP if you want to tune the 10%–100% Quality slider.',
      },
      {
        question: 'What filename is used when I save my blurred or pixelated photo?',
        answer:
          'The downloader keeps your sanitized base filename and appends _blur or _pixelate based on your active Effect Style. That lets you keep censored exports (like receipt_pixelate.png) cleanly organized next to originals.',
      },
      {
        question: 'What if I want to blur a whole portrait background cleanly without painting?',
        answer:
          'Use Whole Image mode when you want uniform background softening behind overlay graphics or UI cards. For isolating a subject on a clean backdrop, pair it with our Background Remover tool.',
      },
      {
        question: 'How strong can Smooth Blur and Pixelate Mosaic go?',
        answer:
          'Blur Radius ranges from subtle 2 px smoothing up to heavy 50 px Gaussian-style blurring. Mosaic Block Size spans fine 4 px tiles up to chunky 60 px blocks scaled proportionally to your source resolution.',
      },
      {
        question: 'Are there any watermarks, daily limits, or signups for censoring photos?',
        answer:
          'No, you can blur or pixelate photos up to 20 MB per file with zero watermarks or signups. All local processing stays completely free across unlimited exports.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Add Text to Image',
    shortDescription: 'Add draggable styled text overlays with fonts, outline & shadow.',
    category: 'crop-edit',
    seoTitle: 'Add Text to Image Free – Fonts, Outlines & Drag Layers',
    seoDescription:
      'Use our browser editor to add text to image files free with draggable layers, 5 fonts, bold/italic styles, outline strokes, shadows, and rotation—no watermark.',
    h1: 'Add Text to Image Online',
    subtitle:
      'Built for content creators, social media managers, teachers, and meme makers, this private tool makes it easy to add text to image files without heavyweight design apps. Layer multiple headlines or multi-line captions, customize fonts, outlines, shadows, and rotation, and export cleanly with zero watermarks.',
    howToSteps: [
      {
        title: 'Upload an image or paste from clipboard',
        description:
          'Drop a JPG, PNG, WebP, HEIC, GIF, BMP, or SVG photo up to 20 MB into the dropzone, or paste directly with Ctrl+V.',
      },
      {
        title: 'Type multi-line text and manage layers',
        description:
          'Edit your copy inside Text Content (Enter adds line breaks) and click Add to stack extra layers like Text 1, Text 2, or delete unwanted ones.',
      },
      {
        title: 'Pick font, fill color, Bold, and Italic',
        description:
          'Choose among Inter, Impact, Georgia, Courier, or Trebuchet, set your text Fill color picker, and toggle Bold or Italic styling.',
      },
      {
        title: 'Adjust Size, Rotation, Outline, and Shadow',
        description:
          'Slide Size (2%–22%) and Rotation (-180° to +180°), then customize Text Outline color and width (1–10) plus optional Drop Shadow.',
      },
      {
        title: 'Drag layers directly on the image',
        description:
          'Click and drag any text block straight on the preview canvas to position headlines, meme captions, or screenshot callouts precisely.',
      },
      {
        title: 'Choose output format and download',
        description:
          'Select Orig, JPG, PNG, or WebP output, set Quality (10%–100%) for lossy files, and click Download Image with Text.',
      },
    ],
    features: [
      { title: 'Multiple Draggable Text Layers', description: 'Add headlines, captions, and callouts and drag each one independently on the canvas.' },
      { title: 'Rich Typography Controls', description: 'Pick fonts, sizes, bold/italic weights, colors, stroke outlines, and drop shadows.' },
      { title: 'Angle & Alignment Control', description: 'Rotate any text layer smoothly from -180° to +180°.' },
      { title: 'Clean Full-Resolution Export', description: 'No watermarks added — download directly in JPG, PNG, or WebP.' },
    ],
    faqs: [
      {
        question: 'Can I add multiple separate headlines or top-and-bottom meme captions?',
        answer:
          'Yes, click the Add button next to the Text 1 tab to create Text 2, Text 3, and as many independent text layers as you need. Each layer keeps its own font, color, size, rotation, outline, and drag position on the image.',
      },
      {
        question: 'Which fonts are built into the Add Text to Image editor?',
        answer:
          'You can switch instantly between five reliable system-matched families: Inter / Clean Sans, Impact / Meme Display, Georgia / Classic Serif, Courier / Monospace, and Trebuchet / Rounded Sans. All five work reliably offline without waiting for external font downloads.',
      },
      {
        question: 'How do I create classic white meme text with a thick dark border?',
        answer:
          'Select Impact / Meme Display, leave Bold active and Fill set to white (#ffffff), and keep Text Outline checked with a dark outline color like #0f172a or black. Drag the outline thickness slider toward 6–10 for unmistakable contrast.',
      },
      {
        question: 'Does hitting Enter inside Text Content create multi-line captions?',
        answer:
          'Yes, Text Content supports full multi-line line breaks centered neatly with a 1.22 line-height multiplier. That makes stacking multi-line quotes, tutorial callouts, or long captions effortless without creating separate layers per line.',
      },
      {
        question: 'How do I select and move one specific layer when I have several on the photo?',
        answer:
          'Click a layer tab (Text 1, Text 2, etc.) in the right panel to switch active typography controls. You can also click directly near any text block on the canvas—the editor grabs whichever layer is closest to your pointer.',
      },
      {
        question: 'Can I tilt text diagonally at custom angles?',
        answer:
          'Yes, drag the Rotation slider anywhere between -180° and +180° for each active text layer. Each block pivots smoothly around its center coordinates for angled stamps, callouts, or playful captions.',
      },
      {
        question: 'How does text Size (2%–22%) scale on small vs 4K photos?',
        answer:
          'Font size scales as a percentage of your output image width (with a 12 px minimum floor). That keeps proportions consistent between the on-screen preview and full-resolution exported files.',
      },
      {
        question: 'Are screenshots or family photos uploaded anywhere when adding captions?',
        answer:
          'No, Canvas compositing renders every font glyph, stroke, shadow, and rotation locally inside your browser tab. Your base images and finished graphics never leave your device.',
      },
      {
        question: 'What happens to transparent PNG stickers if I export with text added?',
        answer:
          'Choosing Orig (from PNG/WebP), PNG, or WebP preserves transparent areas around your graphic cleanly. If you pick JPG output, transparent regions flatten smoothly onto a solid white backdrop.',
      },
      {
        question: 'How do I remove an extra text layer without clearing the whole image?',
        answer:
          'Select the layer tab you want to discard and click the trash icon next to the Add button. When only one layer remains, clearing its text box hides it temporarily without losing the editor.',
      },
      {
        question: 'Can I change the background photo without losing my styled text layers?',
        answer:
          'Click Change Image in the preview header to return to the dropzone and load another file. Your existing text layers and styling stay ready so you can reuse the same caption setup across photos.',
      },
      {
        question: 'Which image file formats can I open to add text?',
        answer:
          'The editor opens JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG files up to 20 MB each. Animated GIFs export as a single static captioned frame.',
      },
      {
        question: 'Can I drag and drop text layers using a smartphone touchscreen?',
        answer:
          'Yes, canvas dragging relies on touch-none Pointer events designed for fingers and styluses. You can reposition captions cleanly in iOS Safari and Android Chrome without scrolling the page.',
      },
      {
        question: 'How does Drop Shadow improve legibility alongside Text Outline?',
        answer:
          'Drop Shadow casts a soft dark blur scaled proportionally to your font size beneath the lettering. Enabling Drop Shadow without an outline creates clean editorial subtitles, while pairing both maximizes readability over busy textures.',
      },
      {
        question: 'Can I paste a screenshot via Ctrl+V to annotate it quickly?',
        answer:
          'Yes, copy any screenshot or slide and press Ctrl+V (or Cmd+V on Mac) on the page before loading a file. It loads right into the canvas ready for text callouts and clean export.',
      },
      {
        question: 'Why does the Quality slider disappear when PNG is chosen?',
        answer:
          'PNG encodes images losslessly without a compression quality percentage slider. Pick Orig (for JPEGs), JPG, or WebP if you want to adjust export Quality from 10% to 100%.',
      },
      {
        question: 'Does adding text via Canvas remove hidden camera EXIF GPS tags?',
        answer:
          'Yes, drawing onto a fresh HTML5 Canvas creates a brand-new bitmap without copying over EXIF headers. Your GPS location and camera metadata stay stripped from the saved export.',
      },
      {
        question: 'What filename is saved when downloading an annotated photo?',
        answer:
          'Downloaded files keep your sanitized base filename and append _text plus your chosen extension (such as meme_text.jpg). That avoids overwriting your original unannotated picture.',
      },
      {
        question: 'How is this different from the Image Watermark tool?',
        answer:
          'Image Watermark focuses on single or diagonal tiled brand stamps and uploaded PNG/SVG logos. Add Text to Image instead provides multiple independent draggable text layers, 5 fonts, bold/italic controls, and thick meme strokes.',
      },
      {
        question: 'Does CompressMyPic place any logo or watermark on images exported here?',
        answer:
          'No, your downloaded files contain only your image and the exact text layers you created. Everything runs free in your browser with zero watermarks and no signup.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Image Border Generator',
    shortDescription: 'Add solid or gradient borders, frames, rounded corners & shadows.',
    category: 'crop-edit',
    seoTitle: 'Image Border Generator Free – Solid, Gradient & Polaroid',
    seoDescription:
      'Frame photos fast with our free image border generator. Apply solid, linear gradient, or Polaroid frames, rounded corners, and drop shadows locally in browser.',
    h1: 'Free Image Border Generator',
    subtitle:
      'Crafted for photographers, Etsy shop owners, portfolio designers, and social creators, our free image border generator wraps any picture in crisp gallery mattes, two-color gradients, or classic Polaroid frames. Fine-tune border thickness, inner and outer corner radii, and elevation shadows right in your browser before exporting.',
    howToSteps: [
      {
        title: 'Drop or select an image to frame',
        description:
          'Upload any JPG, PNG, WebP, HEIC, GIF, BMP, or SVG photo up to 20 MB, or paste via Ctrl+V.',
      },
      {
        title: 'Pick a Quick Frame Preset or Border Style',
        description:
          'Click Classic White, Polaroid Frame, Dark Studio, or Gradient Glow presets, or switch manually between Solid, Gradient, and Polaroid styles.',
      },
      {
        title: 'Customize frame colors and gradient angle',
        description:
          'Set Border Color in Solid/Polaroid mode, or choose Start Color, End Color, and Gradient Angle (0°–360°) for linear gradient frames.',
      },
      {
        title: 'Adjust Border Size and corner radii',
        description:
          'Slide Border Size (1%–25%) along with independent Frame Radius (0%–30%) and Photo Radius (0%–30%) sliders.',
      },
      {
        title: 'Choose Drop Shadow and preview format',
        description:
          'Select none, soft, medium, or deep Drop Shadow and pick PNG, JPG, or WEBP output while checking the checkerboard preview.',
      },
      {
        title: 'Download your framed image',
        description:
          'Click Download Framed Image to render the border and shadow at full source resolution and save <name>_framed.',
      },
    ],
    features: [
      { title: 'Solid & Gradient Borders', description: 'Create clean gallery mattes or vibrant two-color linear gradient frames.' },
      { title: 'Preset Frame Styles', description: 'Apply instant Polaroid, Gallery White, Dark Studio, or Sunset Gradient looks.' },
      { title: 'Corner Radius & Drop Shadow', description: 'Round the inner photo or outer frame corners and add realistic elevation shadows.' },
      { title: 'Lossless PNG Support', description: 'Export PNG to preserve transparent outer corners around shadows and rounded frames.' },
    ],
    faqs: [
      {
        question: 'How does the Polaroid Border Style differ from a standard Solid border?',
        answer:
          'Solid borders wrap uniform padding around all four edges of your photo, whereas Polaroid adds 3.2× extra white frame height along the bottom edge to replicate classic instant film prints. Clicking the Polaroid Frame preset configures clean proportions in one click.',
      },
      {
        question: 'Why do Drop Shadows disappear when I switch output format to JPG?',
        answer:
          'JPG files do not support an alpha transparency channel for soft semi-transparent elevation shadows to fade cleanly onto page backgrounds. Our renderer preserves Drop Shadow padding in transparent PNG and WebP exports while keeping crisp border edges on solid-white JPGs.',
      },
      {
        question: 'What is the difference between Frame Radius and Photo Radius?',
        answer:
          'Frame Radius (0%–30%) curves the outer corners of the colored border itself, while Photo Radius (0%–30%) curves the inner corners of your photograph inside that matte. Matching or contrasting both lets you build sleek UI cards or sharp gallery mattes.',
      },
      {
        question: 'How does the Gradient Glow frame calculate angle and colors?',
        answer:
          'Selecting Gradient style reveals Start Color, End Color, and a 0°–360° Gradient Angle slider that draws a full diagonal or directional linear gradient behind your photo. You can click Gradient Glow under Quick Frame Presets for an instant blue-to-emerald card style.',
      },
      {
        question: 'Does adding a border crop any edge of my original photo?',
        answer:
          'No, the image border generator expands the canvas outward around your full original image width and height rather than covering your pixels. Only setting Photo Radius above 0% softly rounds the four inner image corners.',
      },
      {
        question: 'How is Border Size (1%–25%) calculated on tall vs wide photos?',
        answer:
          'Border thickness computes as a percentage of your image’s shorter dimension—min(width, height). That keeps top, bottom, and side margins evenly balanced on both 16:9 banners and 4:5 portraits.',
      },
      {
        question: 'What do the four Quick Frame Presets configure automatically?',
        answer:
          'Classic White sets a 10% white gallery matte with soft shadow, while Polaroid Frame adds an instant-print bottom margin. Dark Studio applies a slate frame, and Gradient Glow creates a 135° blue-to-emerald gradient border.',
      },
      {
        question: 'Why does the preview show a gray-and-white checkerboard around my frame?',
        answer:
          'That checkerboard visualizes true transparent pixels outside rounded frame corners and inside soft drop shadows. When exported as PNG or WebP, those checkerboard regions remain completely see-through on any website or presentation slide.',
      },
      {
        question: 'Does framing run locally without uploading my photography?',
        answer:
          'Yes, gradient painting, corner clipping, shadow rendering, and Blob exporting happen strictly inside HTML5 Canvas on your device. Nothing ever uploads to external servers.',
      },
      {
        question: 'Which image file formats can be loaded into the border generator?',
        answer:
          'You can drop JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG images up to 20 MB each. Animated GIFs export as a framed static first frame.',
      },
      {
        question: 'Can I change the frame color of a Quick Frame Preset after clicking it?',
        answer:
          'Yes, presets simply populate the Border Style, color, radius, and shadow controls for you. You can tweak Border Color, resize margins, or switch Drop Shadow immediately afterward.',
      },
      {
        question: 'How can I make a dark charcoal or pastel gallery frame with zero shadow?',
        answer:
          'Pick Solid style, click Border Color to select any custom hex shade, and drag both Frame Radius and Photo Radius to 0%. Then click none under Drop Shadow for crisp flat borders.',
      },
      {
        question: 'Will my downloaded framed image be full resolution?',
        answer:
          'Yes, the on-screen preview scales down purely to fit comfortably inside your layout. Clicking Download Framed Image builds a brand-new Canvas at your original photo’s exact pixel resolution plus the scaled frame and shadow.',
      },
      {
        question: 'Should I export PNG or WebP when keeping transparent rounded frame corners?',
        answer:
          'Choose PNG when you want lossless sharpness around thin borders and print assets. Pick WebP for fast, lightweight website cards that still preserve transparent outer corners and elevation shadows.',
      },
      {
        question: 'Can I paste a screenshot straight from my clipboard to wrap it in a card frame?',
        answer:
          'Yes, press Ctrl+V (or Cmd+V on Mac) on the upload zone right after taking a screenshot. Pairing a rounded border, gradient frame, and medium Drop Shadow turns raw screenshots into polished presentation visuals.',
      },
      {
        question: 'Does adding a border remove hidden camera EXIF GPS data?',
        answer:
          'Yes, compositing onto HTML5 Canvas creates a clean framed bitmap. Source camera EXIF headers and GPS coordinates are excluded automatically from your downloaded PNG, JPG, or WebP.',
      },
      {
        question: 'How do I load a second photo while testing frames?',
        answer:
          'Click Change Image in the top-right corner of the preview panel to pick another photo. All your active border colors, gradient angles, corner radii, and shadow choices stay intact.',
      },
      {
        question: 'What filename does the framed image save with?',
        answer:
          'Exports preserve your sanitized original filename with _framed appended before .png, .jpg, or .webp. For example, a file named portrait.jpg saves cleanly as portrait_framed.png.',
      },
      {
        question: 'Does the border generator work smoothly on mobile browsers?',
        answer:
          'Yes, every preset card, range slider, and color picker works cleanly in iOS Safari and Android Chrome. You can frame Polaroids or product shots right from your smartphone camera roll.',
      },
      {
        question: 'Are there any watermarks, paywalls, or signup limits on framed photos?',
        answer:
          'No, every framed photo downloads completely watermark-free and free of charge. Only the standard 20 MB per-file check applies to keep local browser memory smooth.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Round Image Corners',
    shortDescription: 'Round corners uniformly or per-corner with transparent PNG output.',
    category: 'crop-edit',
    seoTitle: 'Round Image Corners Free – Transparent PNG Corner Clipper',
    seoDescription:
      'Easily round image corners online for free with uniform or per-corner sliders, circle avatar preset, and transparent PNG or WebP export right in your browser.',
    h1: 'Round Image Corners Online',
    subtitle:
      'Designed for UI designers, newsletter authors, bloggers, and social users creating sleek cards or avatars, this browser tool lets you round image corners cleanly at full resolution. Curve all four corners uniformly, toggle individual per-corner sliders, or snap to a full circle with transparent PNG/WebP output.',
    howToSteps: [
      {
        title: 'Drop or choose your image',
        description:
          'Upload a JPG, PNG, WebP, HEIC, GIF, BMP, or SVG photo up to 20 MB into the dropzone, or paste via Ctrl+V.',
      },
      {
        title: 'Adjust All Corners Radius or click Full Circle / Pill',
        description:
          'Drag the All Corners Radius slider (0%–100%, showing exact pixel curvature) or click Full Circle / Pill to snap to 100%.',
      },
      {
        title: 'Optionally enable Individual Per-Corner Control',
        description:
          'Toggle Individual Per-Corner Control to style Top Left, Top Right, Bottom Left, and Bottom Right corners independently.',
      },
      {
        title: 'Pick Transparent or Solid Color outer fill',
        description:
          'Keep Transparent (PNG/WebP) active for see-through rounded corners, or switch to Solid Color and choose any hex backdrop.',
      },
      {
        title: 'Select output format (PNG, WebP, or JPG)',
        description:
          'Pick PNG for lossless alpha edges, WebP for lighter transparent web assets, or JPG for opaque solid-corner backgrounds.',
      },
      {
        title: 'Download your rounded image',
        description:
          'Inspect the checkerboard preview and click Download Rounded Image to export <name>_rounded at full original dimensions.',
      },
    ],
    features: [
      { title: 'Uniform & Per-Corner Radius', description: 'Round all corners evenly up to a pill/circle, or style each corner independently.' },
      { title: 'True Transparent Corners', description: 'Export PNG or WebP with clean anti-aliased alpha transparency outside the rounded mask.' },
      { title: 'Optional Solid Background', description: 'Fill outer corners with any custom hex color if exporting for JPG.' },
      { title: 'Full-Resolution Output', description: 'Keeps your exact original pixel dimensions while clipping the corners cleanly.' },
    ],
    faqs: [
      {
        question: 'Why must I use PNG or WebP to keep rounded corners see-through?',
        answer:
          'The JPEG format does not support an alpha transparency channel, so corners outside a rounded mask would always turn solid white or opaque. PNG and WebP preserve smooth 8-bit anti-aliased transparency so your rounded card or avatar blends seamlessly over any webpage or slide color.',
      },
      {
        question: 'How does the Full Circle / Pill shortcut work on square vs rectangular photos?',
        answer:
          'Clicking Full Circle / Pill sets All Corners Radius to 100% of half the shorter side—min(width, height) / 2. On a 1:1 square image, that cuts a perfect circle; on a wider banner, it forms a smooth stadium pill shape.',
      },
      {
        question: 'What happens if I want only the top two corners rounded for a blog card?',
        answer:
          'Check Individual Per-Corner Control to unlock four separate sliders for Top Left, Top Right, Bottom Left, and Bottom Right (each 0%–100%). Set Bottom Left and Bottom Right to 0% while rounding only the top corners.',
      },
      {
        question: 'How do I make a square portrait first if my photo is rectangular?',
        answer:
          'Open our Image Cropper tool (linked in Related Free Image Tools below), select the 1:1 aspect ratio preset, and download your square crop. Then drop that square file here and click Full Circle / Pill for a crisp circular avatar.',
      },
      {
        question: 'What does the live pixel readout next to All Corners Radius mean?',
        answer:
          'Alongside the 0%–100% slider, the label calculates the exact corner curve in true output pixels (for example, 120px (24%)) relative to your original image dimensions. That makes matching CSS border-radius values straightforward.',
      },
      {
        question: 'When should I choose Solid Color under Outer Corner Fill instead of Transparent?',
        answer:
          'Pick Solid Color when you plan to export a lightweight JPG, match a specific dark-mode card background, or upload to an app that replaces transparent PNG alpha with black. You can pick white or any exact hex code with the color swatch.',
      },
      {
        question: 'What happens automatically if I click Transparent (PNG/WebP) while JPG is selected?',
        answer:
          'JPG files cannot store alpha transparency in outer corners. Clicking Transparent (PNG/WebP) therefore switches Output Format to PNG automatically so your rounded corners stay see-through.',
      },
      {
        question: 'Does rounding corners shrink my photo’s width and height?',
        answer:
          'No, the exported image keeps your exact original width and height in pixels. Only the outer corner regions are clipped smoothly using quadratic corner curves.',
      },
      {
        question: 'Why do curved edges look smooth instead of jagged pixels?',
        answer:
          'HTML5 Canvas clips along vector quadratic Bézier paths with high-quality smoothing enabled. That creates soft sub-pixel anti-aliasing along curves that blends naturally against dark or light page backgrounds.',
      },
      {
        question: 'Are portraits or profile avatars uploaded to any server during corner clipping?',
        answer:
          'No, path clipping and PNG/WebP encoding run strictly inside your browser tab via HTML5 Canvas. Personal photos and brand logos never leave your device.',
      },
      {
        question: 'Which input formats can be rounded in this tool?',
        answer:
          'Drop JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, or SVG files up to 20 MB each. Animated GIFs export a rounded static first frame.',
      },
      {
        question: 'Can I paste a clipboard screenshot directly to round its corners?',
        answer:
          'Yes, take a screenshot and press Ctrl+V (or Cmd+V on Mac) when the upload zone is active. It opens straight inside the checkerboard preview ready for corner rounding.',
      },
      {
        question: 'What happens to my Individual Per-Corner values if I uncheck per-corner mode?',
        answer:
          'Unchecking Individual Per-Corner Control reverts the canvas to the single All Corners Radius slider so all four corners stay uniform. Re-checking it seeds all four corner sliders cleanly from your current uniform radius.',
      },
      {
        question: 'Does rounding corners also remove embedded EXIF GPS tags?',
        answer:
          'Yes, rendering pixels through a clean Canvas clip strips original JPEG EXIF and GPS headers automatically. That protects privacy whenever you share rounded avatars or product thumbnails online.',
      },
      {
        question: 'How do I replace the current image while keeping my corner radius setup?',
        answer:
          'Click Change Image above the preview stage to upload a new photo. Your uniform radius, per-corner values, fill mode, and output format remain active for fast repeat exports.',
      },
      {
        question: 'What filename is assigned to downloaded rounded images?',
        answer:
          'The downloader keeps your sanitized original filename and adds _rounded before .png, .webp, or .jpg. For example, avatar.jpg downloads cleanly as avatar_rounded.png.',
      },
      {
        question: 'Should I choose PNG or WebP when exporting rounded web graphics?',
        answer:
          'Pick PNG for maximum compatibility across older apps and lossless edge crispness. Pick WebP when you want substantially smaller website assets that still keep full alpha corner transparency.',
      },
      {
        question: 'Can I use Round Image Corners on iOS or Android mobile browsers?',
        answer:
          'Yes, all sliders, checkboxes, and format toggles adapt smoothly to mobile screens in Safari and Chrome. You can round corners on portraits directly from your phone camera roll.',
      },
      {
        question: 'How does this tool differ from Image Border Generator?',
        answer:
          'Round Image Corners clips your photo cleanly at its original dimensions without adding outer padding. Image Border Generator instead wraps colored mattes, gradients, or Polaroid frames around your picture.',
      },
      {
        question: 'Are there any watermarks, fees, or daily limits on rounded exports?',
        answer:
          'No, you can round corners on unlimited photos up to 20 MB per file completely free. No watermarks, accounts, or paywalls ever appear on downloads.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Image Brightness Editor',
    shortDescription: 'Brighten or darken photos with live before/after preview.',
    category: 'crop-edit',
    seoTitle: 'Image Brightness Editor Free – Lighten or Darken Photos',
    seoDescription:
      'Adjust photo lighting fast with our free image brightness editor. Slide from -100% to +100%, use quick presets, compare before and after, and export privately.',
    h1: 'Free Online Image Brightness Editor',
    subtitle:
      'Built for photographers fixing underexposed shots, real estate agents brightening rooms, and sellers polishing product photos, our browser image brightness editor adjusts illumination smoothly without uploading originals. Dial the slider from -100% to +100%, test instant lighting presets, and inspect results with live split comparison.',
    howToSteps: [
      {
        title: 'Drop or select a photo to brighten or darken',
        description:
          'Upload any JPG, PNG, WebP, HEIC, GIF, BMP, or SVG image up to 20 MB into the dropzone, or paste via Ctrl+V.',
      },
      {
        title: 'Adjust the Brightness Level slider or Quick Presets',
        description:
          'Move Brightness Level from -100% Darker to +100% Brighter, or click Dark (-30%), Dim (-15%), Original (0%), Bright (+15%), Vibrant (+30%), or High Key (+50%).',
      },
      {
        title: 'Compare After, Before, and Split Compare views',
        description:
          'Switch between After, Before, and Split Compare tabs—or launch Fullscreen Compare—to verify shadow and highlight detail.',
      },
      {
        title: 'Select Output Format and Quality',
        description:
          'Pick Original, JPG, PNG, or WEBP output and adjust the Quality slider (10%–100%) when saving lossy formats.',
      },
      {
        title: 'Download your edited image',
        description:
          'Click Download Edited Image to process the brightness curve at full original resolution and save <name>_brightness locally.',
      },
    ],
    features: [
      { title: 'Real-Time Pixel Adjustment', description: 'Instant preview across desktop and mobile browsers without server round-trips.' },
      { title: 'Quick Exposure Presets', description: 'Test Dark, Dim, Bright, Vibrant, and High Key presets in one click.' },
      { title: 'Before & After Inspection', description: 'Compare the edited photo side-by-side or with the interactive comparison slider.' },
      { title: 'Private Client-Side Processing', description: 'Your personal photos stay strictly inside your browser.' },
    ],
    faqs: [
      {
        question: 'How does the Brightness Level slider change pixels without washing out colors immediately?',
        answer:
          'Moving Brightness Level between -100% Darker and +100% Brighter adjusts luminance smoothly across the frame in real time inside HTML5 Canvas. Checking Split Compare or Fullscreen Compare lets you brighten dark shadows without clipping bright whites.',
      },
      {
        question: 'Why does my photo automatically preview at +15% right after uploading?',
        answer:
          'The editor initializes at Bright (+15%) so you immediately see a subtle exposure lift upon loading. Click Original (0%) or Reset in Brightness Controls anytime to compare from neutral baseline.',
      },
      {
        question: 'What Quick Presets are included for one-click exposure testing?',
        answer:
          'Six presets cover common adjustments: Dark (-30%), Dim (-15%), Original (0%), Bright (+15%), Vibrant (+30%), and High Key (+50%). Clicking any card snaps the slider immediately while still letting you fine-tune by 1% steps.',
      },
      {
        question: 'How do After, Before, Split Compare, and Fullscreen Compare differ?',
        answer:
          'After shows your edited canvas, Before reveals the untouched original image, and Split Compare adds an interactive Before/After slider directly inside the viewport. Clicking Fullscreen Compare renders a full-resolution Blob and opens the detailed comparison modal.',
      },
      {
        question: 'Does brightening a photo reduce its pixel resolution or dimensions?',
        answer:
          'No, the live preview scales up to 1000 px purely for smooth interactive slider response. Clicking Download Edited Image renders a full-resolution Canvas preserving your image’s exact original width and height.',
      },
      {
        question: 'When should I darken a photo using negative values like -15% or -30%?',
        answer:
          'Negative brightness values tone down overexposed phone shots and harsh window glare cleanly. Dimming a bright hero photograph also creates better contrast behind white overlay headlines.',
      },
      {
        question: 'Does the image brightness editor preserve transparent backgrounds on PNGs?',
        answer:
          'Yes, keeping Original (for PNG/WebP) or picking PNG or WebP preserves transparent areas cleanly against the checkerboard viewport. If you pick JPG output, transparent regions flatten smoothly onto solid white.',
      },
      {
        question: 'Are personal family photos or client proofs uploaded to external servers?',
        answer:
          'No, pixel brightness transforms and format encoding run locally in your browser using HTML5 Canvas. Your images never leave your computer or smartphone.',
      },
      {
        question: 'Which image file formats can I brighten or darken here?',
        answer:
          'You can open JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP, and SVG files up to 20 MB each. Animated GIFs export their brightened opening frame as a static image.',
      },
      {
        question: 'Can I paste a dark screenshot straight from my clipboard to lighten it?',
        answer:
          'Yes, press Ctrl+V (or Cmd+V on Mac) on the upload zone after copying a dark screenshot or slide. It loads straight into the live viewport ready to adjust and export.',
      },
      {
        question: 'What happens if I push brightness all the way to +100%?',
        answer:
          'Extreme positive settings brighten midtones strongly and push highlights toward pure white, which is useful for stylized high-key graphics but can clip highlight textures in portraits. Aim for +10% to +35% for natural exposure recovery.',
      },
      {
        question: 'Can I adjust contrast or color vibrancy after brightening an image?',
        answer:
          'Yes, download your brightened photo first, then click Image Contrast Editor or Image Saturation Editor in Related Free Image Tools below. Splitting adjustments across dedicated tools lets you fine-tune contrast punch or color richness precisely.',
      },
      {
        question: 'Why does Quality disappear when I select PNG under Output Format?',
        answer:
          'PNG uses lossless compression without a variable percentage quality level. Switch to Original (for JPEGs), JPG, or WebP to reveal and adjust the 10%–100% Quality slider (defaulting to 90%).',
      },
      {
        question: 'How do I undo all brightness changes quickly?',
        answer:
          'Click the blue Reset button in the top-right corner of Brightness Controls at any time. You can also click the Original (0%) preset card to return straight to zero adjustment.',
      },
      {
        question: 'Does exporting an edited photo strip camera EXIF GPS location tags?',
        answer:
          'Yes, drawing onto a fresh HTML5 Canvas builds a clean output bitmap without copying over EXIF camera data. Any GPS coordinates or device serial numbers are stripped automatically.',
      },
      {
        question: 'Can I load another photo right after exporting without refreshing the page?',
        answer:
          'Yes, click the red trash icon (Remove image) in the preview toolbar at any time. That clears the active photo cleanly and takes you straight back to the upload dropzone.',
      },
      {
        question: 'What filename is used when I click Download Edited Image?',
        answer:
          'The exporter keeps your sanitized original filename and appends _brightness plus your selected format extension. For example, kitchen.jpg saves cleanly as kitchen_brightness.jpg.',
      },
      {
        question: 'Does the editor work reliably on iPhone Safari and Android Chrome?',
        answer:
          'Yes, every preset card, range slider, and split comparison view works smoothly on mobile touchscreens. You can lighten dark camera-roll shots directly in Safari or Chrome on your phone.',
      },
      {
        question: 'Why might a dark compressed JPEG show faint block noise when brightened strongly?',
        answer:
          'Shadows in heavily compressed JPEGs often hold quantization artifacts hidden in darkness; lifting brightness by +40% or more makes existing shadow noise visible. Keeping adjustments moderate (+15% to +30%) maintains cleaner tones.',
      },
      {
        question: 'Is there any watermark, account signup, or limit on brightening photos?',
        answer:
          'No, the image brightness editor is completely free with zero watermarks or signups. You can brighten or darken unlimited photos up to 20 MB per file.',
      },
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
  {
    slug: '/remove-background',
    name: 'Background Remover',
    shortDescription: 'Remove image backgrounds with AI in-browser and export transparent PNGs.',
    category: 'ai-tools',
    seoTitle: 'Free Background Remover Online – Transparent PNG in Browser',
    seoDescription:
      'Remove image backgrounds online free with AI directly in your browser. Export transparent PNGs or apply white, black, or custom backgrounds — private, no signup.',
    h1: 'Free Online AI Background Remover',
    subtitle:
      'Remove backgrounds from portraits, product photos, logos, and stickers right inside your browser — download a transparent PNG or place your cutout on any solid background color.',
    howToSteps: [
      {
        title: 'Upload your photo',
        description: 'Drop a JPG, PNG, WebP, or HEIC photo from your phone or computer — nothing leaves your device.',
      },
      {
        title: 'Automatic AI cutout',
        description: 'The compact browser AI model loads on first use (~30–40 MB, cached afterward) and isolates your subject cleanly.',
      },
      {
        title: 'Download PNG or add solid background',
        description: 'Save the transparent PNG cutout or apply white, black, or any custom background color in one click.',
      },
    ],
    features: [
      {
        title: '100% Client-Side AI Segmentation',
        description: 'Powered by the lightweight isnet_quint8 ONNX model running locally in your browser — your photos are never uploaded to any server.',
      },
      {
        title: 'Instant Transparent PNG Export',
        description: 'Download crisp alpha-transparent PNG cutouts ready for e-commerce listings, thumbnails, slides, and design work.',
      },
      {
        title: 'Built-In Solid Background Switcher',
        description: 'Preview and export your cutout on pure white, jet black, or any custom hex background color without opening another app.',
      },
      {
        title: 'Free, No Signup & No Watermark',
        description: 'Full-resolution cutouts with zero daily limits, zero accounts, and zero watermarks.',
      },
    ],
    faqs: [
      {
        question: 'Are my photos uploaded to a server for background removal?',
        answer: 'No. On your first visit to this tool, your browser downloads the compact AI segmentation model (~30–40 MB) once and runs inference entirely on your device.',
      },
      {
        question: 'Why does the first image take a few extra seconds?',
        answer: 'The browser downloads and initializes the WebAssembly AI runtime and isnet_quint8 model weights the first time you open this page. Subsequent images process much faster from cache.',
      },
      {
        question: 'Can I put a white or colored background behind the cutout?',
        answer: 'Yes. After removing the background, you can download the transparent PNG directly or pick White, Black, or any custom color to download a finished solid-background image.',
      },
      {
        question: 'What image types work best?',
        answer: 'Clear subjects such as portraits, products, cars, pets, and logos in JPG, PNG, WebP, or HEIC produce the cleanest edges.',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];

export const TOOL_BY_SLUG: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY.map((t) => [t.slug, t])
);
