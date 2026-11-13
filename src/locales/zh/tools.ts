// Chinese (Simplified Mandarin) tool registry — COMPLETE (home + all 48 tools).
// Assembled from tools-zh-batch1.ts … tools-zh-batch6.ts (coordinator merge).
// Target path in the repo: src/locales/zh/tools.ts
// Chinese (Simplified Mandarin), natural Simplified Mandarin. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1: 8 tools; Batches 2–6: 8 tools each (40 tools); home entry from
// i18n-zh.ts (HOME_ENTRY_ZH). Translated from English — never from
// Spanish; Spanish files were used only as structural templates.

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_ZH: ToolCategoryMeta[] = [
  { id: 'compress', label: '压缩', description: '在不明显损失画质的前提下缩小图片文件体积' },
  { id: 'resize', label: '调整尺寸', description: '按像素修改尺寸或批量缩放图片' },
  { id: 'convert', label: '转换', description: '转换图片格式并生成 PDF' },
  { id: 'crop-edit', label: '裁剪与编辑', description: '旋转、翻转、裁剪和调整照片' },
  { id: 'ai-tools', label: 'AI工具', description: '可在浏览器中使用的智能图片处理工具' },
  { id: 'create', label: '创作', description: '制作网站图标、拼贴画和网页素材' },
  { id: 'privacy', label: '隐私', description: '查看和清除 EXIF、GPS 及隐藏元数据' },
  { id: 'developer', label: '开发者工具', description: '提取颜色、检查尺寸并生成网页素材' },
];

export const TOOLS_REGISTRY_ZH: ToolDefinition[] = [
  {
  slug: '/',
  name: '图片压缩器', // 'Image Compressor'
  shortDescription: '在不损失画质的前提下压缩JPG、PNG、WebP和HEIC图片。', // 'Compress JPG, PNG, WebP & HEIC images without losing quality.'
  category: 'compress',
  seoTitle: '免费在线图片压缩工具 – 图片压缩到100KB',
  seoDescription:
    '免费在线压缩图片，在不损失肉眼可见画质的前提下减小图片体积。支持JPG、PNG、WebP和HEIC，无需注册、无水印，直接在浏览器中处理，安全又快速。立即免费压缩您的照片和网站图片吧。无论是网站图片、社交媒体照片还是邮件附件，都能快速变小、保持清晰，几秒钟即可完成，无需安装任何软件。随时随地都能用。',
  h1: '免费在线图片压缩工具', // 'Free Image Compressor'
  subtitle: '直接在浏览器中减小JPG、PNG、WebP和HEIC的文件体积。', // 'Reduce JPG, PNG, WebP & HEIC file size directly in your browser.'
  howToSteps: [],
  features: [],
  faqs: [],
  relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
},
  {
    slug: '/image-resizer',
    name: '图片尺寸调整器',
    shortDescription: '按精确像素、百分比或社交媒体预设调整图片尺寸。',
    category: 'resize',
    seoTitle: '免费在线图片尺寸调整器 – 按像素或百分比缩放',
    seoDescription:
      '使用免费在线图片尺寸调整器，按精确像素、百分比或社交媒体预设在浏览器中缩放照片。锁定宽高比防止变形，支持 Instagram 与 YouTube 一键预设及批量处理，本地完成并可 ZIP 一键下载，全程无需上传服务器，无需注册，没有水印。让博客配图、电商产品图与社交媒体封面快速符合尺寸要求，操作简单，上手即用。',
    h1: '免费在线图片尺寸调整器',
    subtitle:
      '我们的浏览器图片尺寸调整器让网页设计师、在线卖家、博主与普通用户都能在几秒内把照片缩放为精确的像素尺寸或百分比比例。锁定宽高比以避免变形，一键应用社交媒体预设，或在本地批量处理整个文件夹，全程无需上传服务器。',
    howToSteps: [
      {
        title: '上传一张或多张图片',
        description:
          '把 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 文件（每张最大 20 MB）拖放到上传区，或从设备中选择，或用 Ctrl+V 直接粘贴。',
      },
      {
        title: '选择「按像素」或「按百分比」模式',
        description:
          '在「按像素（宽 × 高）」中输入最高 12,000 px 的精确尺寸，或在「按百分比（%）」中使用滑块或快捷按钮在 10% 至 200% 之间缩放。',
      },
      {
        title: '设置宽高比锁定、填充模式或预设',
        description:
          '保持「锁定宽高比」以按比例缩放，或取消锁定以选择「完整显示」「填充」或「精确拉伸」；也可以点击 Instagram 帖子、YouTube 缩略图或全高清等预设。',
      },
      {
        title: '选择输出格式与画质',
        description:
          '选择原始格式、JPG、PNG 或 WebP 输出，调节输出画质滑块（10% 至 100%），导出为 JPG 时可选择填充背景色。',
      },
      {
        title: '应用设置并直观比较',
        description:
          '点击「全部调整尺寸」处理批量图片，然后在任意卡片上打开「比较」视图，并排检查清晰度与前后字节节省量。',
      },
      {
        title: '单独下载文件或打包下载 ZIP',
        description:
          '使用每张调整后图片的「下载」按钮保存，或在同时调整两张或以上文件时点击「全部下载（ZIP）」。',
      },
    ],
    features: [
      {
        title: '精确像素与百分比缩放',
        description:
          '可调整为精确的像素宽高，或在 10% 至 200% 之间干净缩放，锁定时自动保持宽高比。',
      },
      {
        title: '智能填充模式（精确拉伸、完整显示、填充）',
        description:
          '选择图片如何适应固定预设尺寸：拉伸到精确尺寸、不裁剪完整显示，或居中裁剪填满。',
      },
      {
        title: '批量调整尺寸与 ZIP 下载',
        description:
          '一次处理几十张产品照片或博客缩略图，并打包进单个 ZIP 文件下载。',
      },
      {
        title: '100% 本地浏览器处理',
        description:
          '你的照片在你自己设备上的 HTML5 Canvas 中调整尺寸，绝不会上传到任何外部服务器。',
      },
    ],
    faqs: [
      {
        question: '图片尺寸调整器中的「按像素」与「按百分比」有什么区别？',
        answer:
          '「按像素」可输入精确的宽度与高度（最高 12,000 px），也可直接应用社交媒体预设。「按百分比」则通过滑块或 25%、50%、75%、150%、200% 快捷按钮，将上传的每张图片按比例在 10% 至 200% 之间缩放。',
      },
      {
        question: '开启或关闭「锁定宽高比」会发生什么？',
        answer:
          '开启后，输入新的宽度时，高度会按第一张上传照片的比例自动更新（反之亦然）。关闭后可以分别输入宽度与高度，并显示「完整显示」「填充」与「精确拉伸」三种填充选项。',
      },
      {
        question: '什么时候该选择「完整显示」「填充」或「精确拉伸」？',
        answer:
          '想把主体完整保留在目标框内、不裁剪任何边缘时，选择「完整显示（不裁剪）」。想通过裁剪多余部分来精确填满预设尺寸时，选择「填充（居中裁剪）」；如果固定像素尺寸比保持比例更重要，则选择「精确拉伸」。',
      },
      {
        question: '内置了哪些社交媒体与屏幕尺寸预设？',
        answer:
          '提供一键预设：Instagram 帖子（1080×1080）、Instagram 快拍（1080×1920）、YouTube 缩略图（1280×720）、Facebook 封面（851×315）、X 顶栏图片（1500×500）与全高清（1920×1080）。点击任意预设会切换到「按像素」模式并填入相应尺寸。',
      },
      {
        question: '可以把小图片放大到超过原始分辨率吗？',
        answer:
          '可以，输入更大的像素值，或在「按百分比」模式下最高放大到 200%，工具使用 HTML5 Canvas 插值实现。但请注意，大幅放大低分辨率图片会让边缘看起来更柔和，因为 Canvas 只是拉伸已有像素，而不会凭空生成细节。',
      },
      {
        question: '调整尺寸时允许的最大像素尺寸与文件大小是多少？',
        answer:
          '每张上传图片最大 20 MB，像素输入支持宽高最高 12,000 px。超大画布在手机上会占用大量浏览器内存，因此保持在 4,000–6,000 px 以内可以让处理更快。',
      },
      {
        question: '这款图片尺寸调整器支持哪些输入格式？',
        answer:
          '可以上传 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、GIF、BMP 与 SVG 文件。HEIC 图片会在 Canvas 调整前于浏览器本地解码，结果可导出为原始格式、JPG、PNG 或 WebP。',
      },
      {
        question: '调整尺寸后，PNG 与 WebP 文件的透明背景会保留吗？',
        answer:
          '会。保持原始格式（PNG/WebP）或明确选择 PNG、WebP 输出时，透明度都会完整保留。如果把输出格式切换为 JPG，透明区域会以你选择的填充背景色填充（默认为白色）。',
      },
      {
        question: '批量调整尺寸时，横向与纵向照片混在一起会怎样处理？',
        answer:
          '在「按像素」模式下开启宽高比锁定上传批量照片时，每张照片都会以宽度上限为基准保持各自的自然比例，不会把纵向照片拉伸成横向画面。如果想让整个批量获得完全相同的固定尺寸，请关闭宽高比锁定并选择「完整显示」或「填充」。',
      },
      {
        question: '为什么第一次上传后宽度与高度会自动填入数值？',
        answer:
          '把第一张照片拖入空队列时，调整器会把宽度预设为最高 1,200 px，并按比例计算出对应的高度。你可以立即修改这些数值，然后点击「全部调整尺寸」重新处理列表中的每张图片。',
      },
      {
        question: '缩小照片后如何检查清晰度？',
        answer:
          '点击任意已完成结果卡片上的「比较」，或点击其缩略图，即可打开前后对比弹窗。其中会显示原始尺寸与调整后尺寸、节省的字节数，并提供分割滑块，方便你在下载前检查细节。',
      },
      {
        question: '可以同时更改输出格式并调整尺寸吗？',
        answer:
          '可以，点击「全部调整尺寸」之前，在输出格式选择器中选择 JPG、PNG 或 WebP，并调节输出画质滑块（10% 至 100%）。这样一次操作即可完成缩小尺寸与转换为轻量网页格式。',
      },
      {
        question: '调整尺寸后，动态 GIF 还能保持动画吗？',
        answer:
          '不能。HTML5 Canvas 在把 GIF 调整为静态尺寸时只会渲染第一帧，并导出单帧图片。如果想在保持动画的同时减小文件体积，请改用专用的 GIF 压缩工具。',
      },
      {
        question: '调整尺寸时，我的照片会被上传到外部服务器吗？',
        answer:
          '不会，所有调整尺寸操作都在浏览器标签页内使用本地 HTML5 Canvas 内存与 JavaScript 完成。原始图片与调整后的图片都不会经过网络，也不会接触任何远程存储。',
      },
      {
        question: '如何不用一张一张点击就下载几十张调整尺寸后的图片？',
        answer:
          '当两张或以上图片完成调整尺寸后，列表上方会出现「批量就绪」栏，并显示「全部下载（ZIP）」按钮。点击后，所有调整尺寸后的文件会打包为单个 resized_images_compressmypic.zip 下载。',
      },
      {
        question: '可以从剪贴板粘贴截图来调整尺寸吗？',
        answer:
          '可以，在页面上按 Ctrl+V（Mac 上为 Cmd+V），即可把复制的截图直接放入上传队列。工具会立即读取尺寸，并按当前宽度、高度或百分比设置进行调整。',
      },
      {
        question: '为什么像素变小了，调整尺寸后的 PNG 反而更大了？',
        answer:
          '如果把已压缩的 JPG 转换为无损 PNG 并同时调整尺寸，PNG 会保留原始无损像素编码，体积可能比源 JPEG 更大。想获得更小的网页文件，请把输出格式切换为 WebP，或选择画质 80%–85% 的 JPG。',
      },
      {
        question: '导出调整尺寸后的 JPG 或 WebP 时，哪种画质设置最好？',
        answer:
          '默认的 85% 能在清晰边缘、平滑渐变与小文件体积之间取得良好平衡，适合网站、博客文章与电商平台。如果需要更严格地节省体积，可降到 65%–75%；为打印做准备时，可提高到 95%–100%。',
      },
      {
        question: '可以把矢量 SVG 图形干净地调整为高分辨率 PNG 吗？',
        answer:
          '可以，上传内联 SVG 后，输入更大的目标像素尺寸，再将其光栅化到 Canvas 上。包含内联形状与渐变的自包含 SVG 可以锐利放大，但 SVG 内的外部字体或图片链接会被浏览器安全机制阻止。',
      },
      {
        question: '这款图片尺寸调整器可以离线使用吗？支持手机吗？',
        answer:
          '可以，在 iOS Safari、Android Chrome 与桌面浏览器上都能流畅使用，配有触屏友好的滑块与预设。页面加载后，所有计算都在浏览器本地进行，不受上传速度影响。',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: '图片格式转换器',
    shortDescription: '在浏览器中转换 JPG、PNG、WebP、HEIC、BMP、GIF 与 SVG。',
    category: 'convert',
    seoTitle: '免费在线图片格式转换器 – 支持 JPG、PNG、WebP 与 HEIC',
    seoDescription:
      '使用高速浏览器图片格式转换器，在线转换 JPG、PNG、WebP、HEIC、SVG、BMP、GIF 与 AVIF。支持批量转换、透明度保留与画质调节，可 ZIP 导出，全程本地处理，不上传服务器，无需注册，没有水印，适合 iPhone 照片与网页素材。一次转换即可完成格式切换与体积优化，适合日常办公与网站建设。',
    h1: '免费在线图片格式转换器',
    subtitle:
      '专为 iPhone 摄影师、网页开发者、营销人员与办公团队打造，这款浏览器图片格式转换器可在 JPG、PNG、WebP、HEIC、SVG、BMP、GIF 与 AVIF 之间无缝切换。调整输出画质，为透明抠图选择填充背景，并可在本地批量转换整个文件夹，无需上传文件。',
    howToSteps: [
      {
        title: '添加一张或多张图片文件',
        description:
          '把 JPG、PNG、WebP、HEIC、SVG、BMP、GIF 或 AVIF 图片（每张最大 20 MB）拖入上传区、从磁盘选择，或用 Ctrl+V 粘贴。',
      },
      {
        title: '选择输出格式',
        description:
          '在「转换为以下格式」下选择 WebP（网页最小）、JPG（通用）或 PNG（无损透明）。',
      },
      {
        title: '为 JPG 输出设置透明填充色',
        description:
          '把透明 PNG、WebP 或 SVG 图形转换为 JPG 时，点击「透明填充颜色」色板，选择白色、黑色或任意十六进制背景色。',
      },
      {
        title: '按需调节画质滑块',
        description:
          '对 WebP 或 JPG 输出，把画质滑块拖到 10% 至 100% 之间（无损 PNG 会自动禁用滑块）。',
      },
      {
        title: '转换并检查结果',
        description:
          '点击「全部转换」，按更新后的设置重新编码队列，然后点击任意项目的「比较」，检查视觉保真度与字节变化。',
      },
      {
        title: '单独下载文件或打包下载 ZIP',
        description:
          '通过每张转换后文件的「下载」按钮保存，或点击「全部下载（ZIP）」一次性下载整个批量。',
      },
    ],
    features: [
      {
        title: '广泛的输入格式支持',
        description:
          '可在浏览器中直接转换 iPhone 的 HEIC/HEIF 照片、清晰的 SVG 矢量图形、旧版 BMP 文件、WebP 图片、PNG 与 JPEG。',
      },
      {
        title: '透明安全的转换',
        description:
          '转换为 PNG 或 WebP 时保留 Alpha 透明度，转换为 JPG 时可自定义填充背景色。',
      },
      {
        title: '批量转换与 ZIP 导出',
        description:
          '一次转换整个文件夹的图片，画质设置保持一致，一键下载。',
      },
      {
        title: '私密的客户端引擎',
        description:
          '即使 HEIC 解码也在浏览器内通过 WebAssembly 本地运行——零服务器上传，零水印。',
      },
    ],
    faqs: [
      {
        question: '这款图片格式转换器支持哪些输入与输出格式？',
        answer:
          '可输入 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、SVG、BMP、GIF 以及浏览器可解码的 AVIF 文件，每张图片最大 20 MB。输出可干净地导出为 WebP（网页最小）、JPG（通用）或 PNG（无损透明）。',
      },
      {
        question: 'iPhone 的 HEIC 与 HEIF 照片如何在没有服务器的情况下完成转换？',
        answer:
          '转换器会在浏览器标签页内直接加载客户端 WebAssembly HEIC 解码器。它在你的 CPU 上本地解码 HEIC 容器，再把照片渲染到 HTML5 Canvas 上，导出为标准 JPG、PNG 或 WebP 文件。',
      },
      {
        question: '选择 PNG 时为什么画质滑块会被禁用？',
        answer:
          'PNG 使用无损 DEFLATE 压缩，会精确编码每个像素，不会按百分比画质丢弃视觉细节。切换到 WebP 或 JPG 后，滑块会立即恢复可用。',
      },
      {
        question: '把 PNG 或 WebP 的透明区域转换为 JPG 时会发生什么？',
        answer:
          '由于 JPG 不支持 Alpha 透明通道，透明像素必须平坦化到纯色背景上。使用「透明填充颜色」选择器（默认为白色），可以把透明边缘干净地融合到任意颜色上。',
      },
      {
        question: '可以把从现代网站保存的 AVIF 图片转换为 JPG 或 PNG 吗？',
        answer:
          '可以，现代版本的 Chrome、Edge、Firefox 与 Safari 都能在浏览器内原生解码 AVIF 文件。解码后，工具无需任何外部云服务即可将其导出为通用 JPG、PNG 或 WebP。',
      },
      {
        question: '把矢量 SVG Logo 转换为 PNG 或 WebP 后，画质能保持清晰吗？',
        answer:
          '可以，包含内联路径、填充与渐变的自包含 SVG 文件，会按原始尺寸干净地光栅化，并保留透明背景。但请注意，依赖外部网络字体或远程图片 URL 的 SVG 会受到浏览器 Canvas 安全机制的限制。',
      },
      {
        question: '把有损 JPG 转换为 PNG 能恢复丢失的照片细节吗？',
        answer:
          '不能，把已压缩的 JPG 重新保存为 PNG，无法恢复原始 JPEG 编码时丢弃的细节，而且文件体积通常会显著增大。只有在未来多步骤编辑前需要无损保存时，才选择 PNG。',
      },
      {
        question: '可以在一次批量转换中混合不同的格式吗？',
        answer:
          '可以，把 HEIC 照片、BMP 截图、PNG Logo 与 AVIF 下载文件一起放入同一队列即可。每张有效文件都会转换为你选择的目标格式，并干净地打包进一个 ZIP 存档下载。',
      },
      {
        question: '把动态 GIF 上传到通用转换器会发生什么？',
        answer:
          'Canvas 会绘制 GIF 的第一帧，并将其转换为静态 WebP、JPG 或 PNG 文件。如果想在保持动态效果的同时压缩动态 GIF，请切换到 GIF 压缩工具。',
      },
      {
        question: '为什么 WebP 输出让我的 PNG 截图体积大幅缩小了？',
        answer:
          '与无损 PNG 不同，85% 画质的 WebP 结合了现代预测压缩与完整的 Alpha 透明支持。因此，大型界面截图与产品抠图通常能在保持清晰可读性与平滑边缘的同时大幅变轻。',
      },
      {
        question: '保存转换后的图片前，如何检查前后画质？',
        answer:
          '点击任意已转换卡片上的「比较」（或点击其缩略图），即可打开交互式对比弹窗。你可以比较转换前后的字节大小，并拖动分割手柄查看边缘与文字。',
      },
      {
        question: '转换时，我的照片或敏感截图会被发送到网上吗？',
        answer:
          '绝不会——所有解码、颜色平坦化与重新编码都在本地浏览器内存中严格进行。没有任何内容会被上传、存储在服务器上或分享给第三方。',
      },
      {
        question: '把照片转换为 WebP 或 JPG 时，推荐使用哪种画质设置？',
        answer:
          '默认的 85% 对 WebP 网页素材与通用 JPG 分享都很可靠，不会出现明显的压缩块。作品集照片可提高到 92%–95%，带宽紧张时可降低到 70%–75%。',
      },
      {
        question: '转换后如何生成输出文件名？',
        answer:
          '每个转换后的文件会保留你清理后的原始基本文件名，并自动把扩展名替换为 .webp、.jpg 或 .png。下载前，你可以在每张卡片上看到确切的输出文件名与转换后的字节大小。',
      },
      {
        question: '可以把旧版 Windows 软件的 BMP 位图转换为 WebP 或 JPG 吗？',
        answer:
          '可以，未压缩的 .bmp 文件可在浏览器中原生解码，并立即转换为紧凑的 JPG 或 WebP 文件。去掉未压缩的位图头信息后，存储体积通常会大幅减小。',
      },
      {
        question: '如果批量中有一张文件损坏或无法读取，会怎样？',
        answer:
          '每张图片都是独立处理的，因此单个损坏或不支持的文件只会显示内联错误标记，不会中断队列中的其他文件。所有有效图片仍会正常转换并打包进 ZIP 下载。',
      },
      {
        question: '通过 HTML5 Canvas 转换会清除隐藏的 EXIF 相机元数据吗？',
        answer:
          '会，把图片绘制到 Canvas 上再编码为全新的 JPG、PNG 或 WebP，会生成不含 EXIF GPS 标签或相机序列号元数据的干净位图。这有助于在网上分享转换后的文件时保护隐私。',
      },
      {
        question: '可以直接转换从剪贴板粘贴的图片吗？',
        answer:
          '可以，复制图片或截取屏幕后，在页面任意位置按 Ctrl+V，即可直接加入转换队列。工具会立即按当前目标格式进行编码。',
      },
      {
        question: '批量转换有每日上限或文件数量限制吗？',
        answer:
          '没有，不需要注册账号，没有水印，也没有每日转换次数限制。唯一的限制是每张文件 20 MB 的检查，以及你设备的浏览器可用内存。',
      },
      {
        question: '什么时候该用「全部下载（ZIP）」，什么时候用单个「下载」？',
        answer:
          '只需快速保存一张转换后的照片时，使用每张卡片上的「下载」按钮。当两张或以上图片完成转换后，点击批量汇总栏中的「全部下载（ZIP）」，即可打包为 converted_images_compressmypic.zip。',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: '图片旋转与翻转',
    shortDescription: '将图片旋转 90°、180° 或自定义角度，并可水平或垂直翻转。',
    category: 'crop-edit',
    seoTitle: '免费在线旋转图片 – 旋转 90°、翻转与矫正倾斜',
    seoDescription:
      '使用免费在线图片旋转工具，将图片旋转 90°、180° 或任意角度，并可水平或垂直翻转。支持倾斜矫正、透明背景保留与批量处理，全程在浏览器本地完成，可 ZIP 一键下载，无需注册，没有水印，适合手机照片与证件扫描件。让横向照片、镜像自拍与倾斜扫描件快速恢复正确方向，无需安装任何软件，随时随地都能用。',
    h1: '免费在线图片旋转与翻转',
    subtitle:
      '修复横向拍摄的相机照片、镜像左右颠倒的自拍、矫正倾斜的地平线——直接在浏览器中旋转图片文件即可。适合摄影师、扫描证件的学生与内容创作者，所有转换都在本地以全分辨率完成，并支持批量 ZIP 导出。',
    howToSteps: [
      {
        title: '上传一张或多张图片',
        description:
          '把 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 文件（每张最大 20 MB）拖放到上传区，或用 Ctrl+V 直接粘贴。',
      },
      {
        title: '使用 90° 与 180° 快捷旋转',
        description:
          '点击「快捷旋转与翻转」下的「向左旋转 90°」「向右旋转 90°」或「180°」，即可立即旋转队列中的每张图片。',
      },
      {
        title: '水平或垂直镜像翻转',
        description:
          '开启「水平翻转」可左右镜像，或开启「垂直翻转」可上下翻转——可与任意旋转角度组合使用。',
      },
      {
        title: '微调自定义角度（-180° 至 +180°）',
        description:
          '拖动旋转角度滑块，按精确度数矫正倾斜照片，然后点击「应用角度」（随时可点击「重置为 0°」）。',
      },
      {
        title: '选择输出格式',
        description:
          '选择原始格式、JPG、PNG 或 WebP，以匹配你的目标工作流程；更改后会立即重新渲染所有图片。',
      },
      {
        title: '直观比较并下载',
        description:
          '点击任意卡片上的「比较」，检查旋转前后的方向，然后点击「下载」或批量下载的「全部下载（ZIP）」。',
      },
    ],
    features: [
      {
        title: '90° 快捷旋转与自定义角度旋转',
        description:
          '以 90° 为步进干净旋转，或指定任意精确度数，画布边界会自动计算，边角绝不会被裁掉。',
      },
      {
        title: '一键镜像与翻转',
        description:
          '一键水平翻转图片（镜像自拍）或垂直翻转（上下颠倒的倒影）。',
      },
      {
        title: '批量转换',
        description:
          '对多张上传照片同时应用相同的旋转或翻转，并导出为 ZIP。',
      },
      {
        title: '损耗最小的输出',
        description:
          '选择原始格式、PNG 无损保留，或画质可调的 WebP/JPG。',
      },
    ],
    faqs: [
      {
        question: '以 15° 这样的自定义角度旋转照片会裁掉边角吗？',
        answer:
          '不会，对于非 90° 的角度，工具会自动用三角函数计算扩展后的边界宽度与高度。Canvas 会恰好扩大到所需尺寸，让原始边角的每个像素都保留在画面内。',
      },
      {
        question: '自定义倾斜角度产生的三角形边角会用什么填充？',
        answer:
          '如果保持 PNG/WebP 的原始格式，或选择 PNG/WebP 输出，这些多余的外侧边角会保持完全透明。如果输出为不支持 Alpha 的 JPG，边角会填充为干净的纯白色。',
      },
      {
        question: '可以同时旋转 90° 并水平翻转吗？',
        answer:
          '可以，「水平翻转」与「垂直翻转」是独立开关，可与任意旋转角度同时使用。每张结果卡片的标记会显示确切的组合状态，例如「已旋转 90° · 已水平翻转」。',
      },
      {
        question: '为什么旋转 90° 或 270° 后像素的宽度与高度会互换？',
        answer:
          '把 1920×1080 的横向图片旋转 90° 后，坐标轴随之旋转，图片会变成 1080×1920 的纵向图片。保持精确互换后的边界，可以避免拉伸或裁剪照片的任何一边。',
      },
      {
        question: '如何修复文字镜像的自拍照片？',
        answer:
          '上传照片后，如果不需要旋转 90°，请点击「重置为 0°」（工具加载时默认处于 90°），然后开启「水平翻转」。衣服或招牌上的文字会立即恢复为正常阅读方向。',
      },
      {
        question: '为什么图片上传后会自动旋转 90°？',
        answer:
          '快捷旋转的默认状态从 90° 开始，这样常见的横向照片一放入就会转为竖直方向。你可以用「向左旋转 90°」「180°」或角度滑块进行调整；如果只想翻转而不旋转，点击「重置为 0°」即可。',
      },
      {
        question: '这里可以旋转与翻转哪些格式的图片？',
        answer:
          '可以上传 JPG、PNG、WebP、HEIC/HEIF、GIF、BMP 或 SVG 文件，每张最大 20 MB。导出选项包括原始格式、JPG、PNG 与 WebP，均通过本地 HTML5 Canvas 渲染。',
      },
      {
        question: '可以批量旋转一整文件夹横向拍摄的手机照片吗？',
        answer:
          '可以，放入浏览器能顺畅处理的任意多张照片，点击一次所需的旋转或翻转按钮，所有项目会一起更新。多张文件处理完成后，点击「全部下载（ZIP）」即可导出 rotated_images_compressmypic.zip。',
      },
      {
        question: '旋转透明 PNG 会保留透明背景吗？',
        answer:
          '会，选择原始格式（来自 PNG/WebP）、PNG 或 WebP 输出时，透明区域都会保持透明。无论是清晰的 90° 旋转，还是任意角度的倾斜矫正，都是如此。',
      },
      {
        question: '不重新加载页面，如何撤销多次旋转？',
        answer:
          '随时点击旋转角度滑块正上方的「重置为 0°」。旋转会立即恢复为 0°，水平与垂直翻转也会在整个队列中关闭。',
      },
      {
        question: '为什么旋转 JPEG 后文件大小会略有变化？',
        answer:
          '在 HTML5 Canvas 内旋转像素时，JPEG 会以 90% 画质重新编码，而不是无损修改 DCT 数据块。如果想完全避免压缩痕迹，请选择 PNG 输出以无损保留像素。',
      },
      {
        question: '有没有简单的方法在矫正前后进行检查？',
        answer:
          '点击任意卡片上的「比较」（或点击其缩略图预览），即可打开「旋转与翻转对比」弹窗。保存前，你可以用交互式前后对比滑块检查对齐的边缘。',
      },
      {
        question: '这款工具能正确处理 iPhone 照片的方向吗？',
        answer:
          '可以，现代浏览器与我们的 HEIC 加载器会在解码到 Canvas 时规范化 EXIF 方向，然后再应用你选择的角度。卡片缩略图上看到的内容与下载文件中的像素一致。',
      },
      {
        question: '可以按 1° 的小幅度矫正倾斜的证件扫描件吗？',
        answer:
          '可以，把旋转角度滑块在 -180° 至 +180° 之间拖动（步进 1°），松开即可预览矫正后的证件。如果用键盘方向键调整角度，请点击「应用角度」，即可应用到队列中的所有文件。',
      },
      {
        question: '我的证件或个人照片会被上传到服务器吗？',
        answer:
          '不会，旋转与翻转通过 Canvas 2D 变换在网页浏览器内 100% 本地运行。你的图片永远不会离开电脑或手机。',
      },
      {
        question: '旋转动态 GIF 会发生什么？',
        answer:
          '旋转 GIF 时只会提取并转换第一帧，生成静态图片。这款工具不支持直接旋转多帧动态图。',
      },
      {
        question: '可以直接镜像或旋转从剪贴板粘贴的截图吗？',
        answer:
          '可以，复制图片或截图后，在页面任意位置按 Ctrl+V（Mac 上为 Cmd+V）。它会加入批量队列，并立即应用当前的旋转与翻转设置。',
      },
      {
        question: '文件大小或旋转次数有限制吗？',
        answer:
          '单个上传文件最大为 20 MB，以保持浏览器响应流畅。在此上限内，你可以无限制地旋转、翻转、重置与重新导出任意多张照片，无需账号，没有每日限制，也没有水印。',
      },
      {
        question: '旋转一批 PNG 的同时可以把输出格式切换为 WebP 吗？',
        answer:
          '可以，在「输出格式」下点击 WebP，批量图片会立即重新转换并导出为轻量的旋转后 WebP 图片。无需重新上传，即可自由切换格式。',
      },
      {
        question: '旋转与翻转工具在触屏手机与平板上能顺畅使用吗？',
        answer:
          '可以，所有旋转按钮、翻转开关与支持触摸的角度滑块都可在移动版 Safari 与 Android Chrome 中使用。你也可以把单张照片直接下载到设备相册或下载文件夹。',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: '图片转 PDF',
    shortDescription: '把 JPG、PNG、WebP 与 HEIC 图片合并为多页 PDF。',
    category: 'convert',
    seoTitle: '免费图片转 PDF 转换器 – 合并多张照片为 PDF',
    seoDescription:
      '使用浏览器图片转 PDF 转换器，把多张照片合并为一份文档。自由调整页面顺序，选择 A4 或 Letter 尺寸，设置边距、方向与画质，离线本地生成，无需上传服务器，没有水印，适合收据、证件与扫描件提交。把身份证件、收据与课堂笔记快速整理为一份清晰的 PDF，方便打印、归档与提交，随时随地都能用，上手简单。',
    h1: '图片转 PDF 转换器',
    subtitle:
      '适合学生、自由职业者、会计以及任何需要提交身份证件或收据的人，这款私密图片转 PDF 转换器可把多张照片合并为一份清晰的多页 PDF。自由调整页面顺序，选择 A4、US Letter 或适应图片尺寸，调整边距与画质，并在本地生成文档，全程零服务器上传。',
    howToSteps: [
      {
        title: '放入要加入 PDF 的图片',
        description:
          '上传一张或多张 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 文件（每张最大 20 MB，或用 Ctrl+V 粘贴）。每张图片成为一页。',
      },
      {
        title: '排列页面顺序',
        description:
          '查看控件下方的「页面顺序」列表，使用「上移」「下移」或「删除」按钮，准确排列收据、幻灯片或扫描件。',
      },
      {
        title: '选择页面尺寸与方向',
        description:
          '选择 A4（210 × 297 mm）、US Letter（8.5 × 11 英寸）或「适应图片尺寸」，并选择「自动（匹配照片）」、纵向或横向。',
      },
      {
        title: '调整边距与图片放置方式',
        description:
          '选择「无边距（全幅）」「小边距」或「中边距」，并选择「完整显示（完整图片）」或「填满页面」。',
      },
      {
        title: '设置文件名与 PDF 图片画质',
        description:
          '自定义 PDF 文件名（以 .pdf 结尾），并把 PDF 图片画质滑块在 40% 至 98% 之间滑动，在清晰度与文档总大小之间取得平衡。',
      },
      {
        title: '创建并下载 PDF',
        description:
          '点击「创建并下载 PDF」在本地生成文件；绿色确认横幅中还提供「再次下载 PDF」按钮。',
      },
    ],
    features: [
      {
        title: '多页排序',
        description:
          '生成 PDF 之前轻松重新排列上传图片的顺序，让收据、扫描件与幻灯片按你想要的顺序出现。',
      },
      {
        title: '灵活的页面尺寸与自动方向',
        description:
          '导出为标准 A4 或 US Letter，每页自动纵向/横向，或选择「适应图片」以匹配每张照片的确切宽高比。',
      },
      {
        title: '可调边距与 PDF 画质',
        description:
          '选择无、小或中边距，并控制内嵌图片画质，让 PDF 保持轻量，方便邮件发送。',
      },
      {
        title: '零服务器上传',
        description:
          '敏感身份证件、合同与扫描文档绝不会接触外部服务器——PDF 二进制文件在浏览器内存中本地构建。',
      },
    ],
    faqs: [
      {
        question: '这款图片转 PDF 转换器对护照、身份证与税务收据安全吗？',
        answer:
          '安全，你的证件不会上传到任何远程服务器或云端队列。我们的 JavaScript PDF 生成器会在本地浏览器内存中编码每一页，并把完成的 .pdf 文件直接写入你的设备。',
      },
      {
        question: '支持哪些页面尺寸？',
        answer:
          '你可以把所有页面统一为 A4（210 × 297 mm）或 US Letter（8.5 × 11 英寸），方便打印与归档。或者选择「适应图片尺寸」，让每个 PDF 页面与照片的原始尺寸及宽高比一致。',
      },
      {
        question: '横向与纵向照片混合时，自动方向如何工作？',
        answer:
          '把方向设为「自动（匹配照片）」后，横向图片会自动获得横向页面，纵向图片会自动获得纵向页面。如果需要统一的打印版式，也可以把所有页面锁定为纵向或横向。',
      },
      {
        question: '「完整显示」与「填满页面」有什么区别？',
        answer:
          '「完整显示（完整图片）」会按比例缩放每张照片，让整张图片完整显示在所选边距内，不裁剪任何内容。「填满页面」则会放大照片以从边缘到边缘填满整个可打印区域，并裁剪溢出部分。',
      },
      {
        question: '选择「适应图片尺寸」后，为什么方向下拉菜单会被禁用？',
        answer:
          '「适应图片尺寸」会根据每张照片的确切宽高比动态调整每个 PDF 页面的尺寸，因此纵向与横向的手动设置不再适用。如果想手动控制纵向/横向，请把页面尺寸切换为 A4 或 US Letter。',
      },
      {
        question: '一次上传多个文件后，还能重新排列页面顺序吗？',
        answer:
          '可以，滚动到「页面顺序」部分，每页都会显示编号标记、缩略图、像素尺寸与文件大小。点击任意行的向上与向下箭头按钮调整顺序，然后再点击「创建并下载 PDF」。',
      },
      {
        question: 'PDF 图片画质滑块如何影响文件大小？',
        answer:
          '把 PDF 图片画质降到 60%–75%，会压缩 PDF 内嵌的 JPEG 数据流，让多页扫描件保持紧凑，符合严格的邮件或门户上传上限。提高到 90%–98%，则能让文字密集的证件保持更清晰的小字。',
      },
      {
        question: '可以把哪些格式的图片合并为一个 PDF？',
        answer:
          '你可以在同一个 PDF 文档中混合使用 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、GIF、BMP 与 SVG 图片（每张最大 20 MB）。它们会在浏览器本地解码，并平滑地规范化到 PDF 页面上。',
      },
      {
        question: 'PDF 中的透明 PNG 或 WebP 图片会怎样处理？',
        answer:
          '由于标准 PDF 页面的画布为白色纸张，透明背景会在嵌入前干净地合成到纯白色上。这样可以避免 Logo 或扫描签名后面出现意外的深色瑕疵。',
      },
      {
        question: '保存前可以自定义输出文件名吗？',
        answer:
          '可以，在「PDF 文件名」字段中输入任意文档标题（默认为 compressmypic-document.pdf）。如果没有加上 .pdf 后缀，导出时会自动补上。',
      },
      {
        question: '一个 PDF 文档最多可以合并多少页？',
        answer:
          '没有人为设置的页数上限——你可以把几十张照片或收据合并为一个多页 PDF。实际容量只取决于你设备的浏览器可用内存与每张图片的像素分辨率。',
      },
      {
        question: '「无边距」「小边距」与「中边距」有什么区别？',
        answer:
          '「无边距（全幅）」会把内容延伸到纸张边缘，适合无边框图片或适应图片尺寸的导出。「小边距」与「中边距」会在每页周围加上干净的白色边框，适合标准打印与阅读。',
      },
      {
        question: '查看「页面顺序」列表后，还能添加更多照片吗？',
        answer:
          '可以，直接把更多文件拖入顶部上传框或从设备中选择，它们会追加到「页面顺序」列表的末尾。生成更新后的 PDF 之前，你可以重新排序或删除个别页面。',
      },
      {
        question: '工具会在我的 PDF 中添加页脚 Logo、页面印章或水印吗？',
        answer:
          '不会，CompressMyPic 生成的 PDF 页面完全干净，只包含你所选边距内的图片。绝不会添加任何品牌标识、页眉或水印。',
      },
      {
        question: '为什么会出现「正在编码第 X 页，共 Y 页」的进度提示？',
        answer:
          '多页 PDF 会在浏览器内存中逐页依次编码图片，避免冻结浏览器标签页或导致内存激增。最后一页编码完成后，绿色确认栏会显示总页数与 PDF 的确切字节大小。',
      },
      {
        question: '如果错过或关闭了自动浏览器下载对话框怎么办？',
        answer:
          '保持标签页打开即可——绿色确认卡片会一直显示，并带有「再次下载 PDF」按钮。点击后可立即重新保存完全相同的已生成文件，无需重新编码。',
      },
      {
        question: '可以直接把截图粘贴到 PDF 生成器中吗？',
        answer:
          '可以，按 Ctrl+V（Mac 上为 Cmd+V），即可把剪贴板截图直接追加到「页面顺序」队列中。这样可以快速把多个错误截图或聊天记录合并为一个 PDF。',
      },
      {
        question: '生成 PDF 会上传 EXIF GPS 标签等元数据吗？',
        answer:
          '不会，每页图片在嵌入 PDF 字节流之前，都会先解码并绘制到 HTML5 Canvas 上。因此，原始相机的 EXIF 标头与 GPS 坐标会在转换过程中自动排除。',
      },
      {
        question: '可以直接把 iPhone 的 HEIC 相机照片转成 PDF，无需先转换为 JPG 吗？',
        answer:
          '可以，直接把 .heic 或 .heif 照片拖入上传区，浏览器会在本地即时解码。它们会立即出现在「页面顺序」列表中，随时可以合并为 A4 或 Letter 尺寸的 PDF。',
      },
      {
        question: '图片转 PDF 工具支持智能手机与 Chromebook 吗？',
        answer:
          '支持，所有功能都在 iOS、Android、Windows、macOS 与 ChromeOS 的标准浏览器 JavaScript 中运行。无需安装 Adobe Acrobat、浏览器扩展或桌面 PDF 软件。',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: '图片元数据查看器',
    shortDescription: '检查 EXIF 相机参数、GPS 坐标以及 PNG/WebP 数据。',
    category: 'privacy',
    seoTitle: '图片元数据查看器 – 免费查看 EXIF 与 GPS 数据',
    seoDescription:
      '使用私密的图片元数据查看器，在线检查相机 EXIF 标签、GPS 坐标、时间戳以及 PNG 或 WebP 数据块。可一键复制或导出完整元数据 JSON 报告，全程本地解析，不上传照片，免费使用，无需注册，适合摄影师与开发者。在发布照片前快速确认是否泄露位置与设备信息，保护个人隐私安全，随时随地都能用。',
    h1: '图片元数据与 EXIF 查看器',
    subtitle:
      '专为检查镜头设置的摄影师、调试标头的开发者以及发布前检查隐私的任何人打造，我们的浏览器图片元数据查看器可在本地检查原始文件字节。揭示隐藏的 EXIF 标签、GPS 坐标、时间戳以及 PNG 或 WebP 数据块，无需上传任何像素。',
    howToSteps: [
      {
        title: '放入或选择要检查的图片',
        description:
          '上传 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 图片（最大 20 MB，或用 Ctrl+V 粘贴）。原始二进制标头会立即在你的设备上解析。',
      },
      {
        title: '查看摘要与隐私风险横幅',
        description:
          '查看检测到的容器格式、尺寸、文件大小，以及是否发现敏感内嵌元数据标签类型。',
      },
      {
        title: '查看 GPS 位置提醒',
        description:
          '如果存在 GPSIFD 标签，警告框会突出显示解码后的确切纬度与经度，并提供一键跳转到「删除图片元数据」工具。',
      },
      {
        title: '浏览提取的元数据表格',
        description:
          '滚动查看分组条目（相机、EXIF、GPS、PNG/WebP 数据块、文件信息），琥珀色「隐私标签」会标记敏感字段。',
      },
      {
        title: '复制或导出 JSON，或清除标签',
        description:
          '点击「复制 JSON」复制完整报告，点击「导出 JSON」保存 .json 文件，或点击「清除元数据」干净地清除隐私标签。',
      },
    ],
    features: [
      {
        title: '深度 EXIF 与 GPS 检测',
        description:
          '解析 JPEG、PNG eXIf 与 WebP EXIF 数据块中的 TIFF IFD0、ExifIFD 与 GPSIFD 二进制表，发现隐藏的位置与设备标签。',
      },
      {
        title: '隐私风险突出显示',
        description:
          '自动标记 GPS 纬度/经度、相机序列号、作者姓名与拍摄时间戳等敏感字段。',
      },
      {
        title: 'PNG 与 WebP 数据块检查',
        description:
          '读取 PNG 的 IHDR 色彩深度、pHYs 物理 DPI、tEXt/iTXt/tIME 数据块以及 WebP 的 VP8X Alpha/动画标志。',
      },
      {
        title: '导出 JSON 报告',
        description:
          '一键把所有解析出的元数据字段复制到剪贴板，或下载干净的 JSON 报告。',
      },
    ],
    faqs: [
      {
        question: '这款图片元数据查看器能发现哪些隐藏信息？',
        answer:
          '根据容器格式的不同，解析器会在本地从图片标头中提取 TIFF IFD0、ExifIFD 与 GPSIFD 字段。可以查看相机品牌与型号、镜头参数、快门速度、ISO、光圈、时间戳、编辑软件、版权说明与十进制 GPS 坐标等细节。',
      },
      {
        question: '除了 JPEG 的 EXIF，它也会检查 PNG 与 WebP 的技术标头吗？',
        answer:
          '会，除了标准 JPEG EXIF 段，查看器还会读取 PNG 与 WebP 文件内嵌的技术数据块。你可以看到 PNG 的 IHDR 位深、pHYs 物理 DPI 密度、tEXt/iTXt/tIME 文本块、PNG eXIf 数据块以及 WebP 的 VP8X Alpha 或动画标志。',
      },
      {
        question: '为什么从 WhatsApp 或 Instagram 下载的照片显示没有任何 EXIF 标签？',
        answer:
          '社交网络与聊天应用会在你通过其服务器上传照片时自动剥离 EXIF、相机与 GPS 标头。直接来自手机相册或单反相机的原始文件会保留完整元数据。',
      },
      {
        question: '工具如何检测照片是否泄露了我的位置？',
        answer:
          '如果图片标头中存在 GPSIFD 有理数标签，查看器会自动把度、分、秒换算为十进制纬度与经度。一旦检测到坐标，属性表格上方会立即出现琥珀色的「检测到 GPS 位置坐标」横幅。',
      },
      {
        question: '元数据表格中的琥珀色「隐私标签」是什么意思？',
        answer:
          '带有琥珀色「隐私标签」标记的条目包含个人或设备识别信息。典型例子包括 GPS 坐标、精确拍摄时间戳、摄影师/作者姓名、相机序列号与设备型号字符串。',
      },
      {
        question: '检查图片后可以直接清除敏感元数据吗？',
        answer:
          '可以，一旦检测到敏感标签，汇总栏中会出现橙色的「清除元数据」按钮（GPS 警告框内也有链接）。点击后会直接跳转到我们的「删除图片元数据」工具。',
      },
      {
        question: 'JSON 导出功能如何为开发者或文档工作服务？',
        answer:
          '点击汇总栏中的「复制 JSON」，即可立即把结构化的 ImageMetadataReport 复制到剪贴板。如果需要用于审计或错误报告的文件，点击「导出 JSON」即可在本地下载 <filename>_metadata.json。',
      },
      {
        question: '为什么某些 HEIC 或 GIF 文件没有提取完整的二进制 EXIF 数据块？',
        answer:
          '我们的深度二进制数据块解析器原生针对 JPEG、PNG 与 WebP 容器（使用 JavaScript 实现）。对于 HEIC、GIF、BMP 与 SVG 文件，查看器会准确报告容器信息、文件大小与像素尺寸。',
      },
      {
        question: '检查带 GPS 位置的隐私照片时会被上传吗？',
        answer:
          '不会，二进制检查完全在浏览器本地使用 File ArrayBuffer 字节解析完成。把未清除的隐私照片发送到网上会违背隐私保护的初衷，因此没有任何字节会离开你的电脑或手机。',
      },
      {
        question: '查看元数据会修改、压缩或删除文件中的任何内容吗？',
        answer:
          '不会，图片元数据查看器是严格只读的。它只从浏览器内存中读取标头，向你展示其中的内容，不会更改原始文件。',
      },
      {
        question: '不刷新页面可以连续检查多个文件吗？',
        answer:
          '可以，随时点击汇总栏中的红色垃圾桶图标（清除），即可重置回上传区。然后拖入或粘贴下一张图片，即可生成新的元数据报告。',
      },
      {
        question: '为什么用 Ctrl+V 粘贴的截图通常不显示相机标签？',
        answer:
          '操作系统剪贴板传递的是原始光栅位图，而不是原始相机 JPEG 文件。由于剪贴板图片没有相机标头，粘贴的截图只会显示容器尺寸与格式信息，不含 EXIF 或 GPS 数据块。',
      },
      {
        question: '元数据检查支持的最大文件大小是多少？',
        answer:
          '你可以在浏览器中直接检查最大 20 MB 的单张图片。这个上限足以覆盖全分辨率单反 JPEG、精细 PNG 导出与未压缩 BMP 文件。',
      },
      {
        question: '如何验证其他工具确实清除了照片中的所有 EXIF 标签？',
        answer:
          '把清理后的输出文件重新拖入这款图片元数据查看器，检查其原始字节。如果清除成功，绿色状态横幅会确认「未检测到 EXIF、GPS 或隐藏相机标签」，且不会出现 GPS 提醒。',
      },
      {
        question: '查看器能检测 Adobe XMP 或 PNG 文本注释吗？',
        answer:
          '可以，PNG 的 tEXt 与 iTXt 键值文本块（例如 Software、Author、Comment 或 Creation Time）会被干净地提取到元数据表格中。任何内嵌的 PNG eXIf 数据块与 WebP EXIF 数据块也会一并解码。',
      },
      {
        question: 'PNG 截图上的 pHYs 数据块是什么意思？',
        answer:
          'PNG 的 pHYs 数据块存储物理像素密度（DPI / 每米像素数），用于打印或版式缩放。查看器会读取并换算这些数值，让你看到图片指定的是 72 DPI、96 DPI 还是 300 DPI。',
      },
      {
        question: '为什么文件扩展名有时与 containerFormat 不同？',
        answer:
          '有时 PNG 或 WebP 文件会被改名为 .jpg 扩展名（反之亦然）。由于查看器检查的是实际二进制魔数，而非仅凭文件名判断，因此会报告真实的底层容器格式。',
      },
      {
        question: '可以在 iPhone 或 Android 手机浏览器上检查图片元数据吗？',
        answer:
          '可以，在移动版 Safari 或 Chrome 中打开页面，直接从相册中选择照片即可。在网上发布图片之前，你可以在手机上检查隐藏的 GPS 坐标与相机详情。',
      },
      {
        question: '为什么我的单反照片会显示镜头焦距与快门速度？',
        answer:
          '数码相机在按下快门的一瞬间，会把曝光遥测数据记录在 ExifIFD 二进制目录中。ISO、光圈值、曝光时间、焦距、闪光灯与测光模式等字段都会在本地解码供你查看。',
      },
      {
        question: '检查无限张照片需要付费或注册吗？',
        answer:
          '不需要，检查图片元数据与导出 JSON 报告完全免费，无需账号，也没有付费墙。你可以检查任意多张最大 20 MB 的照片，没有水印，也没有每日上限。',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: '删除图片元数据',
    shortDescription: '在本地私密清除 EXIF、GPS 位置、相机信息与注释。',
    category: 'privacy',
    seoTitle: '免费删除图片元数据 – 清除 EXIF 与 GPS 标签',
    seoDescription:
      '在浏览器中安全删除图片元数据，包括 EXIF 相机信息与 GPS 位置。支持 JPG 与 PNG 无损二进制清除，可批量处理并 ZIP 导出，全程本地完成，不上传服务器，免费使用，无需注册，适合电商卖家与注重隐私的用户。在发布照片前彻底清除位置与设备痕迹，随时随地都能用，让每次分享都更安心，简单又高效。',
    h1: '在线删除图片元数据',
    subtitle:
      '专为电商卖家、记者、家长与注重隐私的用户打造，这款工具可让你在网上分享照片之前永久删除图片元数据。在浏览器本地清除 EXIF 相机型号、GPS 坐标、拍摄时间戳与隐藏文本块，支持无损二进制删除或干净的 Canvas 重新编码。',
    howToSteps: [
      {
        title: '放入要清理的照片',
        description:
          '把一张或多张 JPG、PNG、WebP 或 HEIC 图片（每张最大 20 MB）上传到上传框，或用 Ctrl+V 粘贴。',
      },
      {
        title: '查看自动清除与验证标记',
        description:
          '文件上传后会立即清除并自动重新扫描，显示已清除的元数据标签数量（例如 → 剩余 0 个）。',
      },
      {
        title: '如需调整设置，请选择清除方法',
        description:
          '对 JPEG 与 PNG 保持「无损二进制清除」，实现零像素重新编码；或选择「完整 Canvas 重新编码」，干净地平坦化像素。',
      },
      {
        title: '（可选）设置输出格式与画质',
        description:
          '选择原始格式、JPG、PNG 或 WebP 输出，为 WebP/HEIC/Canvas 重新编码调节「重新编码画质」（50%–100%），然后点击「全部重新清理」。',
      },
      {
        title: '下载干净文件或批量 ZIP',
        description:
          '点击单个已验证卡片上的「下载干净文件」，或点击「全部下载干净文件（ZIP）」保存 clean_images_no_metadata.zip。',
      },
    ],
    features: [
      {
        title: '真正无损的 JPEG 与 PNG 清除',
        description:
          '在二进制层面删除 EXIF、XMP、IPTC、注释与 PNG tEXt/eXIf 数据块，零像素重新编码。',
      },
      {
        title: '已验证的干净输出',
        description:
          '每个输出文件都会由我们的元数据解析器自动重新扫描，验证剩余的敏感 EXIF/GPS 标签为 0 个。',
      },
      {
        title: '批量清理与 ZIP 导出',
        description:
          '在发布到电商平台、论坛或商品列表之前，清理整批照片，并一起下载为 ZIP。',
      },
      {
        title: '100% 设备端隐私',
        description:
          '隐私工具必须真正私密——带有 GPS 数据的原始照片绝不会离开你的浏览器。',
      },
    ],
    faqs: [
      {
        question: '无损二进制清除如何在不损害照片画质的情况下工作？',
        answer:
          '对于保持原始格式的 JPEG 与 PNG 文件，二进制清理器会直接解析容器结构，删除元数据段（JPEG 的 APP1–APP15/COM 与 PNG 的 eXIf/tEXt/iTXt/tIME），而无需解码或重新压缩任何像素。',
      },
      {
        question: '把 WebP 或 HEIC 文件上传到元数据清除工具时会发生什么？',
        answer:
          '无损二进制段清除适用于 JPG 与 PNG 输入。对于 HEIC 或 WebP 输入，或者当你切换输出格式或选择「完整 Canvas 重新编码」时，工具会把像素绘制到全新的 HTML5 Canvas 上，确保所有元数据标头都被丢弃。',
      },
      {
        question: '如何确认 GPS 位置与 EXIF 标签确实已被删除？',
        answer:
          '清理每张图片后，工具会对输出 Blob 再次运行元数据解析器，并显示绿色标记（例如「已清除 X 个元数据标签 → 剩余 0 个」或「已验证干净」）。没有任何内容是凭猜测得出的。',
      },
      {
        question: '清理照片时会针对哪些元数据类型？',
        answer:
          '清理器会清除 EXIF 相机品牌、型号、镜头详情、序列号、快门设置与拍摄时间戳，还会删除 GPS 纬度/经度/海拔标签、Adobe XMP 数据包、IPTC 字段、JPEG 注释以及 PNG 文本或时间数据块。',
      },
      {
        question: '什么时候该选择「完整 Canvas 重新编码」，而不是「无损二进制清除」？',
        answer:
          '当你想要一张全新的压缩位图、完全不继承任何二进制段时，选择「完整 Canvas 重新编码」。切换输出格式或上传 WebP 与 HEIC 照片时，工具也会自动使用这种方式。',
      },
      {
        question: '删除图片元数据工具接受哪些上传格式？',
        answer:
          '上传区接受 JPG（JPEG）、PNG、WebP 与 iPhone 的 HEIC/HEIF 文件，每张最大 20 MB。此后，你可以把干净文件导出为原始格式、JPG、PNG 或 WebP。',
      },
      {
        question: '「重新编码画质」滑块会影响无损二进制清除的文件吗？',
        answer:
          '不会，无损二进制清除完全跳过像素重新编码，因此无论滑块如何设置，JPEG/PNG 的视觉内容都不会改变。「重新编码画质」滑块（50%–100%）仅适用于 WebP/HEIC 输入或完整 Canvas 重新编码导出。',
      },
      {
        question: '可以一次清除整文件夹的上架照片元数据吗？',
        answer:
          '可以，把多张照片一起放入，稍等片刻，所有卡片上的自动验证标记都会变绿。然后点击「全部下载干净文件（ZIP）」，即可下载 clean_images_no_metadata.zip。',
      },
      {
        question: '未清理的带 GPS 坐标的照片会被上传到任何地方吗？',
        answer:
          '绝不会——只有在本地清除敏感 GPS 与设备标头，才能真正保护隐私。所有二进制字节切割与 Canvas 导出都在你自己的浏览器内存中进行。',
      },
      {
        question: '为什么照片上传后立即显示「已验证干净（0 个 EXIF/GPS 标签）」？',
        answer:
          '这表示源文件本身就不含任何 EXIF、GPS 或文本元数据块（截图或从聊天应用下载的图片很常见）。清理器仍会对输出进行干净验证。',
      },
      {
        question: '清除元数据也会减小文件体积吗？',
        answer:
          '会，相机照片通常内嵌 EXIF 预览缩略图、Adobe XMP XML 数据块以及颜色或注释段。在无损二进制清除模式下清除这些内容，通常能在完全不改变图片清晰度的情况下减少几十 KB。',
      },
      {
        question: '无损二进制清除会保留透明 PNG 背景吗？',
        answer:
          '会，PNG 图片数据块（IDAT）与 Alpha 透明度会逐字节完整保留，只有辅助文本、EXIF 与时间戳数据块会被删除。',
      },
      {
        question: '如果 iPhone 照片通过 EXIF 方向标签进行了旋转，会发生什么？',
        answer:
          '无损清除原始 APP1 数据块会删除方向标志，而完整 Canvas 重新编码或 HEIC 解码会把竖直的像素方向直接烘焙到导出的画布中。如果竖向 JPEG 在无损清除后看起来变横了，请切换到「完整 Canvas 重新编码」并点击「全部重新清理」。',
      },
      {
        question: '可以在清除元数据的同时把干净的 PNG 直接转换为 WebP 或 JPG 吗？',
        answer:
          '可以，在「输出格式」下选择 JPG 或 WebP，设置重新编码画质，然后点击「全部重新清理」。每张文件都会通过 Canvas 干净地重新编码，清除所有元数据并应用所选格式。',
      },
      {
        question: '我的磁盘上的原始文件会被修改或覆盖吗？',
        answer:
          '不会，网页浏览器无法直接覆盖本地文件夹中的文件。点击「下载干净文件」会保存一份单独的已清理副本，原始文件保持不变。',
      },
      {
        question: '可以在独立检查器中再次验证清理后的输出吗？',
        answer:
          '可以，保存后把任意下载的文件拖入我们的图片元数据查看器。它会独立解析原始二进制标头，让你确认其中不含 GPS 坐标或相机标签。',
      },
      {
        question: '在发布到电商平台之前，可以在手机上使用清理工具吗？',
        answer:
          '可以，在 iOS Safari 或 Android Chrome 中打开页面，直接从手机相册中选择照片。绿色验证标记出现后，你可以直接把干净副本下载到设备上。',
      },
      {
        question: '可以把剪贴板图片粘贴到删除图片元数据工具中吗？',
        answer:
          '可以，按 Ctrl+V（Mac 上为 Cmd+V），即可把复制的图片或截图直接放入上传队列。工具会自动清除其中残留的数据块，并准备好干净下载。',
      },
      {
        question: '既然清理会在上传时自动开始，为什么还需要「全部重新清理」按钮？',
        answer:
          '文件会在放入时立即按当前设置自动清除。如果你之后更改清除方法、切换输出格式或调整重新编码画质，点击「全部重新清理」即可把更新后的选项应用到整个批量。',
      },
      {
        question: '清除 EXIF 数据有文件数量限制或费用吗？',
        answer:
          '每张上传文件最大为 20 MB，以保持浏览器内存流畅。除此单文件上限外，你可以免费清除无限张照片的元数据，没有水印，无需注册，也无需付费。',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Favicon 生成器',
    shortDescription: '生成 favicon.ico、Apple Touch、Android 图标与 manifest 文件。',
    category: 'create',
    seoTitle: '免费 Favicon 生成器 – 制作 favicon.ico 与应用图标',
    seoDescription:
      '使用免费在线 Favicon 生成器，制作多尺寸 favicon.ico、Apple Touch 与 Android Chrome 图标、site.webmanifest 及 HTML 代码片段。可调节内边距、圆角与背景色，全程在浏览器本地完成，无需注册，没有水印。为个人博客、电商网站与创业项目打造专业统一的品牌图标。',
    h1: '免费在线 Favicon 生成器',
    subtitle:
      '专为网页开发者、创业创始人、博主与独立制作者打造，这款免费 Favicon 生成器可把任意 Logo 或图形转换为可直接部署的浏览器与移动图标包。在浅色与深色标签上预览图标，调节内边距、圆角半径与背景填充，并在本地下载全部内容，全程零服务器上传。',
    howToSteps: [
      {
        title: '上传 Logo 或图标图形',
        description:
          '放入 PNG、SVG、JPG、WebP 或 HEIC 图片（最大 20 MB，方形 PNG 或 SVG 效果最佳），或用 Ctrl+V 从剪贴板粘贴。',
      },
      {
        title: '选择背景填充',
        description:
          '保持勾选「透明」以获得干净的抠图图标，或取消勾选以选择纯色十六进制背景。',
      },
      {
        title: '调整内边距与圆角半径',
        description:
          '把内边距滑块在 0% 至 25% 之间滑动以留出呼吸空间，把圆角半径从 0% 拖到 50%，制作圆角方形或圆形徽章。',
      },
      {
        title: '检查浏览器标签预览',
        description:
          '查看在浅色「我的网站」标签与「深色模式标签」样机中以真实 16×16 比例渲染的实时预览。',
      },
      {
        title: '单独下载文件或下载完整 ZIP',
        description:
          '从生成的卡片中保存单个图标尺寸，或点击「全部下载（ZIP）」下载 favicon_package_compressmypic.zip。',
      },
      {
        title: '复制 HTML head 代码片段',
        description:
          '点击深色 HTML <head> 代码片段面板中的「复制 HTML」，把 <link> 标签直接粘贴到你的网站模板中。',
      },
    ],
    features: [
      {
        title: '真正的多尺寸 favicon.ico',
        description:
          '生成真正的二进制 .ico 文件，内嵌清晰的 16×16、32×32 与 48×48 帧——不是改名的 PNG。',
      },
      {
        title: '完整的网页与移动图标集',
        description:
          '生成 16×16、32×32、48×48、180×180（Apple Touch）、192×192 与 512×512（Android/PWA）图标，以及 site.webmanifest。',
      },
      {
        title: '实时浏览器标签预览',
        description:
          '下载前，在浅色与深色背景上以真实浏览器标签比例预览图标效果。',
      },
      {
        title: '可直接粘贴的 HTML 代码片段',
        description:
          '一键把干净的 HTML <link> 标签复制到 <head> 中。',
      },
    ],
    faqs: [
      {
        question: 'Favicon ZIP 包中包含哪些确切的图标尺寸与文件？',
        answer:
          '下载 ZIP 会打包多帧 favicon.ico（16×16、32×32 与 48×48）、单独的 favicon-16x16.png、favicon-32x32.png 与 favicon-48x48.png 文件、apple-touch-icon.png（180×180）、android-chrome-192x192.png 与 android-chrome-512x512.png，还会生成可直接上传的 site.webmanifest JSON 文件。',
      },
      {
        question: 'favicon.ico 是真正的多帧 ICO 二进制文件，还是改名的 PNG？',
        answer:
          '我们的 Favicon 生成器会写入真正的 Windows ICONDIR 二进制容器，其中包含 16×16、32×32 与 48×48 帧的独立 32 位 RGBA PNG 目录条目。旧版桌面浏览器与 Windows 快捷方式会自动选择最清晰的匹配帧，不会出现渲染瑕疵。',
      },
      {
        question: '什么样的源尺寸与格式最适合制作清晰的浏览器标签图标？',
        answer:
          '从干净的方形 PNG 或自包含 SVG 开始，尺寸为 512×512 像素或更大，这样无论缩小到 16×16 还是放大到 512×512，边缘都会保持清晰。把微小的低分辨率源图拉伸到 512×512 的 PWA 启动图标可能会显得模糊。',
      },
      {
        question: '如果上传的是长方形 Logo 而不是方形，会发生什么？',
        answer:
          '长方形图形会在每个方形图标画布内按比例居中放置，不会拉伸或压扁你的品牌标识。顶部/底部或左侧/右侧的空白区域会填充为透明，或使用你选择的背景颜色。',
      },
      {
        question: '为什么生成器同时显示浅色与深色浏览器标签预览？',
        answer:
          '深色图标在深色模式浏览器标签上可能看不见，而白色 Logo 在浅色浏览器主题上会消失。同时查看浅色的「我的网站」标签与深色模式标签，可以让你在部署前添加内边距或纯色背景。',
      },
      {
        question: '内边距与圆角半径在 App 图标上如何协同工作？',
        answer:
          '内边距（0% 至 25%）会让 Logo 从方形边界略微向内收缩，避免圆角裁剪图形边缘。把圆角半径提高到 20% 左右可制作 iOS 风格的圆角方形，提高到 50% 则会把整个图标裁剪为完整圆形。',
      },
      {
        question: 'Apple Touch 图标应该使用纯色背景而不是透明吗？',
        answer:
          'iOS Safari 在用户把网站固定到主屏幕时，常常会把 apple-touch-icon.png 的透明区域合成为黑色。如果你的 Logo 使用深色形状，请取消勾选「背景填充」下的「透明」，并选择白色或品牌颜色。',
      },
      {
        question: '生成的 site.webmanifest 文件中包含什么内容？',
        answer:
          'manifest JSON 会声明 /android-chrome-192x192.png 与 /android-chrome-512x512.png 的路径，把 display 设为 standalone，并让 theme_color 与 background_color 与你选择的背景填充色同步。你可以在任意文本编辑器中打开它来自定义网站名称。',
      },
      {
        question: '应该把生成的 Favicon 文件上传到网站的哪个位置？',
        answer:
          '把 favicon.ico、所有生成的 PNG 图标与 site.webmanifest 放在网站根公开目录中，这样 /favicon.ico 与 /apple-touch-icon.png 等 URL 才能正常解析。然后把复制的 HTML <head> 代码片段粘贴到主 HTML 的 <head> 部分。',
      },
      {
        question: '可以不下载 ZIP，只下载 favicon.ico 或 apple-touch-icon.png 吗？',
        answer:
          '可以，每种图标尺寸都会显示为独立预览卡片，标明确切尺寸与字节大小，并配有专用的下载按钮。你可以单独获取单个资源，也可以点击「全部下载（ZIP）」获取完整包。',
      },
      {
        question: '上传 SVG Logo 能生成清晰的 16×16 图标吗？',
        answer:
          '可以，内联 SVG 矢量会直接在浏览器内光栅化到每个目标像素网格上，从 16×16 到 512×512 都适用。请确保 SVG 使用内嵌形状与颜色，而不是外部链接图片或远程网络字体。',
      },
      {
        question: '可以把 iPhone 的 HEIC 照片或 WebP 图形转换为网站 Favicon 吗？',
        answer:
          '可以，上传区接受 PNG、SVG、JPG、WebP、GIF、BMP 与 iPhone 的 HEIC/HEIF 文件，每张最大 20 MB。HEIC 图片会在图标包生成前于浏览器本地解码。',
      },
      {
        question: '品牌 Logo 或未发布的 App 图标会被发送到外部服务器吗？',
        answer:
          '不会，Canvas 尺寸调整、二进制 ICO 打包、manifest 生成与 ZIP 归档都在你自己的浏览器标签页内严格运行。未发布的品牌标识不会经过任何网络传输。',
      },
      {
        question: '上传新文件后，为什么 Chrome 中仍显示旧的 Favicon？',
        answer:
          '浏览器会积极缓存 Favicon 数日，即使你替换了服务器上的文件也是如此。使用 Ctrl+Shift+R 强制刷新（或打开无痕窗口），即可强制浏览器获取新的 favicon.ico 与 PNG 图标。',
      },
      {
        question: '更改内边距、圆角半径或背景填充色会同时更新所有尺寸吗？',
        answer:
          '会，移动任意滑块或切换背景填充色，都会立即重建 favicon.ico、全部六种 PNG 图标尺寸、浅色/深色标签预览与 site.webmanifest。你无需在调整之间重新上传 Logo。',
      },
      {
        question: 'HTML <head> 代码片段适用于 React、Next.js 或纯 HTML 网站吗？',
        answer:
          '适用，标准的 <link rel="icon">、<link rel="apple-touch-icon"> 与 <link rel="manifest"> 标签适用于静态 HTML 网站、WordPress 页眉、Vite/React 的 index.html 与服务器模板。只需粘贴到 <head> 内，并把文件放在网站根目录即可。',
      },
      {
        question: '可以把方形头像或徽章制作成圆形 Favicon 吗？',
        answer:
          '可以，在「背景填充」下保持勾选「透明」，并把圆角半径一直拖到 50%。所有 PNG 图标与内嵌的 favicon.ico 帧都会干净地裁剪为平滑抗锯齿的圆形。',
      },
      {
        question: '为什么除了 favicon.ico，还需要 192×192 与 512×512 尺寸？',
        answer:
          '现代 Android Chrome 与渐进式 Web 应用安装提示会在 site.webmanifest 中查找 192×192 主屏幕图标与 512×512 启动图标。同时包含两者，可以确保移动快捷方式与经典桌面浏览器标签一样清晰。',
      },
      {
        question: '可以直接把剪贴板中的 Logo 图形粘贴到 Favicon 工具中吗？',
        answer:
          '可以，把图片或截图复制到剪贴板后，在页面上按 Ctrl+V（Mac 上为 Cmd+V）。它会立即进入生成器并渲染完整图标集。',
      },
      {
        question: '生成 Favicon 包有水印、账号要求或费用吗？',
        answer:
          '没有，Favicon 生成器对个人与商业网站 100% 免费，没有水印、账号或每日生成限制。唯一限制是 20 MB 的源文件上限，以保持浏览器内存快速运行。',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: '图片取色器',
    shortDescription: '从任意图片中精确取色，支持 HEX、RGB、HSL 与 CMYK。',
    category: 'developer',
    seoTitle: '图片取色器 – 免费提取 HEX、RGB 与 HSL 颜色代码',
    seoDescription:
      '使用在线图片取色器，精确采样任意像素颜色，查看 HEX、RGB、HSL 与 CMYK 数值。支持实时像素放大镜，可保存最多 24 个色板并导出 CSS 变量，全程本地处理，不上传文件，免费使用，无需注册。帮助设计师与开发者快速建立品牌配色方案，提高工作效率，让网页与品牌设计更轻松，随时随地都能用，上手简单。',
    h1: '免费在线图片取色器',
    subtitle:
      '专为网页设计师、前端开发者、品牌造型师与插画师打造，我们的浏览器图片取色器可从任意照片、Logo 或截图中采样精确的 RGBA 像素。悬停即可查看 11×11 放大镜与实时 HEX 读数，点击像素保存色板，并导出 CSS 自定义属性，无需上传文件。',
    howToSteps: [
      {
        title: '上传图片或粘贴截图',
        description:
          '放入 JPG、PNG、WebP、HEIC、SVG、BMP 或 GIF 文件（最大 20 MB），或按 Ctrl+V 直接从剪贴板粘贴截图。',
      },
      {
        title: '使用实时像素检查器放大镜悬停',
        description:
          '把光标移到图片画布上，查看确切的 (x, y) 像素坐标与 11×11 缩放十字准星网格，色板会实时更新。',
      },
      {
        title: '点击像素固定并建立色板',
        description:
          '点击画布上的任意位置，把颜色锁定到像素检查器中，并添加到「已取色板」（最多 24 种唯一颜色）。',
      },
      {
        title: '复制 HEX、RGB、HSL 或 CMYK 数值',
        description:
          '点击像素检查器中 HEX、RGB、HSL 或 CMYK 旁的复制图标，或点击任意已保存的色板，即可立即复制代码。',
      },
      {
        title: '把调色板导出为 CSS 变量',
        description:
          '点击「已取色板」卡片中的「导出 CSS」，下载 picked-colors.css，其中包含可直接用于样式表的干净 :root 自定义属性。',
      },
    ],
    features: [
      {
        title: '实时放大像素放大镜',
        description:
          '缩放十字准星网格让你在桌面鼠标与移动触屏上都能准确锁定目标像素。',
      },
      {
        title: '四种颜色格式即时显示',
        description:
          '同时显示 HEX、RGB、HSL 与 CMYK 表示，适合网页开发者与平面设计师。',
      },
      {
        title: '已保存色板历史与导出',
        description:
          '点击图片的多个区域建立自定义色板列表，并复制为 CSS 自定义属性或 JSON。',
      },
      {
        title: '100% 本地 Canvas 取色',
        description:
          '像素值通过 HTML5 Canvas getImageData 在本地读取——你的设计与截图完全私密。',
      },
    ],
    faqs: [
      {
        question: '这款图片取色器是从全分辨率文件取色，还是从缩小的预览图取色？',
        answer:
          '每次悬停与点击都会把指针坐标按比例映射到与图片真实 naturalWidth × naturalHeight 一致的离屏全分辨率 HTML5 Canvas 上。即使大型 4K 照片在视觉上缩小以适应屏幕，getImageData 读取的仍是确切的底层像素。',
      },
      {
        question: '11×11 放大镜如何帮助定位细线或小图标？',
        answer:
          '在画布上移动时，88×88 最近邻缩放放大镜会显示光标周围 11×11 像素网格，并用双线十字准星标出确切的当前像素。这样可以避免误采边缘旁抗锯齿像素的问题。',
      },
      {
        question: '每个取色像素会自动计算哪些颜色代码格式？',
        answer:
          '像素检查器会把采样的 RGB 三元组同时转换为大写 HEX（#RRGGBB）、CSS rgb(r, g, b)、CSS hsl(h, s%, l%) 与百分比 CMYK 数值。每行都有自己的一键复制按钮。',
      },
      {
        question: '一次可以在「已取色板」中收集多少种颜色？',
        answer:
          '点击照片的不同部位，最多可按时间顺序存储 24 个唯一的 HEX 色板（重复项会自动跳过）。点击任意已保存的色板，即可在检查器中恢复该颜色，并把 HEX 代码直接复制到剪贴板。',
      },
      {
        question: '「导出 CSS」按钮会下载什么内容？',
        answer:
          '点击「导出 CSS」会生成 picked-colors.css 样式表，其中包含一个 :root 块，带有编号自定义属性（--color-1、--color-2 等）以及每个颜色的内联 RGB 注释。如果你尚未点击多个像素，它会导出当前选中的像素。',
      },
      {
        question: '为什么图片加载后立即就显示了一种颜色？',
        answer:
          '初始加载时，检查器会自动采样上传图片正中心像素，因此在移动鼠标之前，你就能立即看到实时的 HEX、RGB、HSL 与 CMYK 读数。移动或点击任意位置后，这些读数会立即更新。',
      },
      {
        question: '可以直接用 Ctrl+V 粘贴截图来采样界面颜色吗？',
        answer:
          '可以，把网页片段、App 界面或设计稿复制到剪贴板后，在上传区打开时按 Ctrl+V（Mac 上为 Cmd+V）。它会直接加载到取色画布上，无需先保存临时文件。',
      },
      {
        question: '取色器支持检查哪些文件类型？',
        answer:
          '你可以加载 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、SVG、BMP 与 GIF 图片，每张最大 20 MB。矢量 SVG 会干净地光栅化到 Canvas 上，因此可以直接采样渲染后的精确填充颜色。',
      },
      {
        question: '像素检查器中显示的 CMYK 数值有多准确？',
        answer:
          'CMYK 百分比是使用标准 RGB 转 CMYK 换算公式，从 sRGB 像素值数学计算得出的。对于需要严格 ICC 印刷配置的商业胶印，请将其视为有用的起始近似值，而不是经过校准的油墨样张。',
      },
      {
        question: '如果在 PNG Logo 的透明区域取色会发生什么？',
        answer:
          'HTML5 Canvas 会读取该坐标处的红、绿、蓝通道——完全透明的 Canvas 像素在 RGB 通道为空时默认为 0, 0, 0（#000000）。请直接在不透明笔触或形状上取色，以检查真实的作品颜色。',
      },
      {
        question: '隐私 UI 原型或客户品牌素材会被上传到任何服务器吗？',
        answer:
          '不会，通过 Canvas getImageData 读取像素完全在本地浏览器内存中运行。未发布的设计、机密截图与个人照片永远不会离开你的电脑或手机。',
      },
      {
        question: '取色器可以在 Chrome、Safari 与 Firefox 中使用吗？需要浏览器扩展吗？',
        answer:
          '可以，与仅在桌面 Chromium 中可用的实验性 EyeDropper 浏览器 API 不同，我们的 HTML5 Canvas 取色器可在 Firefox、Safari、Edge 与 Chrome 中运行。无需浏览器扩展、特殊权限或插件。',
      },
      {
        question: '取色后如何切换到另一张照片？',
        answer:
          '随时点击画布标题右上角的「新图片」按钮。这会清除当前图片，干净地重置「已取色板」列表，并返回上传区。',
      },
      {
        question: '可以在查看颜色值的同时检查确切的像素坐标吗？',
        answer:
          '可以，像素检查器标题会以等宽字体实时显示悬停时的 x 与 y 坐标（例如 x:412, y:198）。这有助于在大型素材中持续匹配特定像素。',
      },
      {
        question: '为什么点击 JPEG 照片中的颜色时，相邻像素会略有差异？',
        answer:
          'JPEG 压缩使用色度子采样与块变换，会在平坦表面上引入轻微的逐像素差异。使用 11×11 放大镜可以选择远离压缩边缘的干净代表性像素。',
      },
      {
        question: '可以在 iPad 或智能手机触屏上准确取色吗？',
        answer:
          '可以，在移动设备上点按画布的任意区域，即可在点按位置触发取色器，固定色板，更新全部四种颜色格式，并把 HEX 代码添加到「已取色板」。你也可以点按任意已保存的色板进行复制。',
      },
      {
        question: '如果两次点击相同的十六进制颜色，工具会替换已保存的色板吗？',
        answer:
          '不会，「已取色板」会自动检查匹配的 HEX 字符串并忽略重复项。即使多次采样相同的背景色或品牌色，收集的调色板也能保持整洁。',
      },
      {
        question: '为网站设置样式时，为什么要在 HEX 与 RGB 之外使用 HSL？',
        answer:
          'HSL（色相、饱和度、明度）让 CSS 开发者只需调整明度百分比、保持色相不变，即可轻松衍生出更浅的悬停状态或更深的边框。HEX 与 HSL 并排显示可以节省手动换算的时间。',
      },
      {
        question: '取色器允许的最大图片文件大小是多少？',
        answer:
          '单张上传图片最大为 20 MB。这个上限足以处理高像素相机照片、大型 Figma PNG 导出与整页截图。',
      },
      {
        question: '取色有费用、账号或可采样颜色数量的限制吗？',
        answer:
          '没有，图片取色器完全免费，无需账号，也没有付费墙。你可以上传无限张图片并导出 CSS 颜色调色板，没有任何水印。',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: '图片尺寸检查器',
    shortDescription: '检查宽度、高度、宽高比、像素数和打印尺寸。',
    category: 'developer',
    seoTitle: '图片尺寸检查器在线免费 – 像素尺寸与宽高比',
    seoDescription:
      '使用这款免费的在线图片尺寸检查器，在浏览器中批量查看图片的像素宽高、宽高比、百万像素、透明通道与300 DPI打印尺寸。支持最小宽高规格校验，可导出CSV或JSON报告，支持JPG、PNG、WebP、HEIC与SVG，单个文件最大20MB，无需注册，无水印，图片全程本地处理，隐私安全，适合电商、广告与印刷设计。',
    h1: '图片尺寸检查器与宽高比工具',
    subtitle:
      '这款图片尺寸检查器非常适合电商运营、广告投放、界面开发与平面设计人员，可在几秒内读取图片的像素宽高、宽高比、百万像素与300 DPI打印尺寸。批量拖入整批素材，验证最小像素要求，并直接在设备上私密导出整洁的CSV或JSON报告。',
    howToSteps: [
      {
        title: '拖放或选择一张或多张图片',
        description:
          '将JPG、PNG、WebP、HEIC、SVG、BMP、GIF或AVIF图片（单个文件最大20MB）上传到拖放区，或按Ctrl+V粘贴。',
      },
      {
        title: '查看像素尺寸与宽高比',
        description:
          '在表格中查看精确的宽×高（像素）、百万像素、方向（横向、纵向、正方形），以及化简后与小数形式的宽高比。',
      },
      {
        title: '核对文件大小、格式与Alpha通道',
        description:
          '查看“大小/格式”列，确认实际检测到的容器类型、字节数，以及是否存在透明Alpha像素。',
      },
      {
        title: '查看300 DPI下的预估打印尺寸',
        description:
          '查看“300 DPI打印”列，在送往打印店之前了解图片能以多大的物理尺寸（英寸，宽″×高″）清晰打印。',
      },
      {
        title: '运行最小规格检查并导出CSV或JSON',
        description:
          '输入可选的“最小宽度检查（像素）”与“最小高度检查（像素）”规则，标记“通过”或“低于最小值”，然后点击“导出CSV”或“导出JSON”。',
      },
    ],
    features: [
      {
        title: '批量尺寸检查',
        description:
          '一次检查数十张素材，非常适合验证店铺商品图、广告创意或应用截图。',
      },
      {
        title: '精确比例与常见比例',
        description:
          '既计算数学化简后的比例，也匹配16:9、4:3、1:1、4:5等常见标准比例。',
      },
      {
        title: '自定义最小/最大验证器',
        description:
          '可设置最小或最大宽高规则，立即标出符合或不符合规格的图片。',
      },
      {
        title: 'CSV与JSON导出',
        description:
          '将所有已检查图片的尺寸下载为整洁的CSV表格或JSON摘要。',
      },
    ],
    faqs: [
      {
        question: '使用图片尺寸检查器会修改或重新保存我的图片吗？',
        answer:
          '不会。检查器仅在浏览器内存中读取图片的原始像素尺寸、文件字节数与容器属性，不会压缩、裁剪、覆盖图片，也不会上传到外部服务器。',
      },
      {
        question: '可以批量检查哪些图片文件格式？',
        answer:
          '可以拖放JPG、PNG、WebP、iPhone的HEIC/HEIF、SVG、BMP、GIF以及浏览器支持的AVIF图片，单个文件最大20MB。不同格式可以混在同一张批量表格中。',
      },
      {
        question: '“最小宽度检查”与“最小高度检查”验证器如何工作？',
        answer:
          '在“最小宽度检查（像素）”或“最小高度检查（像素）”中输入像素阈值，表格会实时新增一列“规格检查”。每一行会立即显示绿色的“通过”徽章或黄色的“低于最小值”提醒，让尺寸不足的创意一目了然。',
      },
      {
        question: '16:9或4:5等常见宽高比如何与精确比例匹配？',
        answer:
          '首先通过最大公约数计算数学化简后的宽:高比例与小数比例（例如1.78:1）。当图片与16:9、4:3、3:2、1:1、4:5或9:16等标准画幅比例一致或非常接近时，会直接显示对应的易懂标签。',
      },
      {
        question: '300 DPI打印尺寸如何由像素计算得出？',
        answer:
          '打印宽高（英寸）由像素宽高除以300（每英寸像素数）得出（例如3000×2400像素在300 DPI下正好是10.0″×8.0″）。导出的JSON还会保留72 DPI屏幕比例下的打印尺寸。',
      },
      {
        question: '点击“导出CSV”会包含哪些列？',
        answer:
          '点击“导出CSV”会下载image-dimensions-report.csv，包含十列结构化数据：文件名、宽度（像素）、高度（像素）、方向、宽高比、百万像素、文件大小（字节）、格式、透明度与300 DPI打印尺寸。含有逗号或引号的文件名会按CSV规范正确转义。',
      },
      {
        question: '与CSV相比，“导出JSON”会保存什么内容？',
        answer:
          '“导出JSON”会保存格式化的image-dimensions-report.json数组，其中包含每一行已检查图片的整洁元数据对象（不含内部预览链接与临时行ID）。开发人员与质检脚本可以直接将其用于自动化素材检查。',
      },
      {
        question: '检查器如何判断PNG或WebP是否真的含有Alpha透明通道？',
        answer:
          '加载器不会根据文件扩展名猜测，而是在画布上扫描像素的Alpha字节，验证是否存在不透明度低于255的像素。真正含有透明区域的图片会在格式下方显示“Alpha”标签。',
      },
      {
        question: '可以向已有的尺寸表追加更多文件夹或批次吗？',
        answer:
          '可以。拖放或浏览更多图片后，新行会直接追加到现有表格底部，不会清除此前的条目。如需为新项目重置表格，随时点击“清除”即可。',
      },
      {
        question: '为什么iPhone照片在这里能准确显示横向与纵向？',
        answer:
          '现代浏览器在将JPEG与HEIC图片解码为原始尺寸时，会自动规范EXIF相机旋转信息。因此竖拍的手机照片也能准确报告纵向方向与正确的像素尺寸。',
      },
      {
        question: '图片的百万像素（MP）如何计算？',
        answer:
          '百万像素等于（宽度×高度）除以1,000,000，并四舍五入到小数点后两位（例如1920×1080＝2.07 MP）。这与相机传感器与打印市场的标准表述一致。',
      },
      {
        question: '如果上传扩展名具有误导性的文件（例如扩展名为.jpg的WebP），会发生什么？',
        answer:
          '检查器不会盲目相信文件名后缀，而是读取解码过程中解析出的底层二进制类型。你会在“大小/格式”列中看到真实检测到的格式与精确的字节大小。',
      },
      {
        question: '也可以检查SVG图形的原始尺寸吗？',
        answer:
          '可以。带有宽高属性或viewBox的自包含SVG文件会在浏览器中原生解码，尺寸表可以清晰读取其渲染后的像素宽高与宽高比。',
      },
      {
        question: '未发布的广告素材或机密产品图片会被发送到网上吗？',
        answer:
          '绝不会。所有图片解码、透明度检测、规格检查与CSV/JSON生成都在你自己的浏览器标签页内执行，没有任何字节离开你的设备。',
      },
      {
        question: '可以直接粘贴剪贴板图片来验证其像素分辨率吗？',
        answer:
          '可以。按Ctrl+V（Mac上按Cmd+V），即可将复制的截图或图形直接追加到尺寸表中，立即读取其精确像素尺寸、百万像素数与宽高比。',
      },
      {
        question: '为什么亚马逊、Etsy或Shopify的产品图片可能无法通过“最小宽度检查”？',
        answer:
          '许多电商平台要求最短边或最长边至少为1000像素或1200像素，才能启用缩放预览。在“最小宽度检查”中输入1200，就能在上传前审核整个产品图库。',
      },
      {
        question: '如果大批量拖放中混入一个无法读取的文件，会发生什么？',
        answer:
          '如果某个文件超过20MB上限或浏览器无法解码，上传区会优雅地标记或跳过该无效项。同一批拖放中的所有有效图片仍会正常显示在尺寸表中。',
      },
      {
        question: '可以在手机或平板电脑上使用这款尺寸检查器吗？',
        answer:
          '可以。在iOS Safari或安卓Chrome中打开工具，从相机胶卷中选择照片，即可在外出时检查精确的像素尺寸与百万像素。表格在窄屏上可以横向滚动，不会裁掉任何列。',
      },
      {
        question: '如何修复未通过最小规格检查或宽高比错误的图片？',
        answer:
          '点击指南下方“相关免费图片工具”中的“图片尺寸调整器”或“图片裁剪器”卡片。你可以将图片裁剪为精确的16:9、4:5或1:1比例，或直接在浏览器中调整尺寸。',
      },
      {
        question: '批量尺寸报告有每日限额或费用吗？',
        answer:
          '没有。检查单个文件最大20MB的图片批次完全免费，不限数量。CSV与JSON报告可以随时下载，无需注册，也没有水印。',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: '图片裁剪工具',
    shortDescription: '使用拖动手柄、宽高比和缩放功能交互式裁剪照片。',
    category: 'crop-edit',
    seoTitle: '免费在线图片裁剪器 – 裁剪照片与设置比例',
    seoDescription:
      '这款交互式在线图片裁剪器支持拖拽手柄、1:1至16:9宽高比预设与最高300%缩放。JPG、PNG、WebP与HEIC图片均可在浏览器本地裁剪，无需上传，导出为全分辨率文件，免费使用。支持三分法网格辅助构图，导出文件名包含精确裁剪尺寸，支持手机与平板触屏操作，适合头像、社交封面与电商主图制作，无需注册。',
    h1: '免费在线图片裁剪器',
    subtitle:
      '这款交互式图片裁剪器专为社交创作者、设计师、学生与电商卖家打造，可直接在浏览器中精准构图并裁剪照片。锁定1:1至16:9的常用比例，最高放大300%以对齐精细边缘，并在本地干净导出裁剪结果，全程零上传。',
    howToSteps: [
      {
        title: '上传要裁剪的图片',
        description:
          '将JPG、PNG、WebP、HEIC、GIF、BMP或SVG图片（单个文件最大20MB）拖入拖放区，或从设备中选择，或按Ctrl+V粘贴。',
      },
      {
        title: '选择宽高比预设',
        description:
          '如需自由裁剪，保持“自由”不变；或在“宽高比预设”下点击1:1、4:3、16:9、3:2、4:5或9:16来锁定构图。',
      },
      {
        title: '拖动裁剪框与调整手柄',
        description:
          '借助三分法网格将裁剪框移动到主体上方，拖动8个边缘或角落手柄，同时查看实时显示的裁剪宽度与高度。',
      },
      {
        title: '放大或重置为完整画布',
        description:
          '使用缩放按钮（100%至300%，每次25%）进行精确边缘对齐，或点击“全选”恢复为整张图片。',
      },
      {
        title: '选择输出格式与画质',
        description:
          '选择“原始”、JPG、PNG或WebP输出格式，保存有损格式时可调整画质滑块（10%至100%）。',
      },
      {
        title: '裁剪并下载文件',
        description:
          '点击“裁剪并下载”，以原始全分辨率渲染所选矩形区域，并以包含尺寸的文件名保存。',
      },
    ],
    features: [
      {
        title: '交互式拖拽与调整手柄',
        description:
          '流畅的鼠标与触摸手柄让你将任意区域精确裁剪到像素级别。',
      },
      {
        title: '宽高比预设',
        description:
          '可在“自由”、1:1正方形、4:3、16:9、3:2、Instagram用的4:5与故事用的9:16之间切换。',
      },
      {
        title: '缩放与实时尺寸读数',
        description:
          '放大以进行精细构图，并实时查看精确的输出宽×高。',
      },
      {
        title: '100%私密本地处理',
        description:
          '照片通过HTML5画布在你的设备上裁剪，零服务器上传。',
      },
    ],
    faqs: [
      {
        question: '裁剪会降低所选矩形区域内的画质吗？',
        answer:
          '不会。图片裁剪器直接从浏览器内存中保存的原始全分辨率中提取所选坐标，而不是从缩放后的预览框中提取。以无损PNG保存时，裁剪区域内的像素与原图完全相同。',
      },
      {
        question: '裁剪选项中有哪些宽高比预设？',
        answer:
          '可以在“自由”（任意矩形）、1:1（正方形头像）、4:3、16:9（宽屏/YouTube）、3:2（单反标准）、4:5（Instagram竖图）与9:16（故事/短视频）之间切换。点击预设后，匹配的裁剪框会自动居中。',
      },
      {
        question: '启用宽高比预设时，8个调整手柄如何工作？',
        answer:
          '四个角手柄与边缘手柄都会在图片边界内整齐收纳的同时，自动保持所选比例。如需再次独立调整宽高，只需点击“自由”预设。',
      },
      {
        question: '选择框内的三分法网格有什么作用？',
        answer:
          '低调的3×3网格将裁剪框分为三等份，方便你在拖动时准确对齐地平线、眼睛或商品中心。它只是屏幕上的视觉参考，绝不会出现在导出的图片中。',
      },
      {
        question: '为了精细构图，最多可以放大到多少？',
        answer:
          '使用视口栏中的“放大（+）”与“缩小（−）”按钮，可以从100%平滑缩放到300%，每次25%。放大超过100%后，可以在预览舞台内滚动以裁剪精细边缘。',
      },
      {
        question: '裁剪选项中的“全选”按钮有什么作用？',
        answer:
          '点击“全选”后，宽高比会回到“自由”，裁剪框扩展为覆盖图片100%的宽高，缩放重置为100%。无需重新上传，即可获得一个干净的起点。',
      },
      {
        question: '下载前可以查看精确的输出像素尺寸吗？',
        answer:
          '可以。舞台上方的“选择范围”读数与裁剪选项中的“裁剪宽度/裁剪高度”卡片都会随着拖动实时以像素更新。导出文件名中也包含精确的裁剪尺寸（例如photo_1080x1080_cropped.jpg）。',
      },
      {
        question: '可以在手机与平板上用手指手势裁剪吗？',
        answer:
          '可以。裁剪框与手柄使用支持触摸操作的指针事件，兼顾桌面鼠标与移动触屏。在iOS与安卓上拖动裁剪框、拉动手柄都很顺畅。',
      },
      {
        question: '裁剪会保留PNG与WebP的透明背景吗？',
        answer:
          '会。保持“原始”格式（源自PNG/WebP）或选择PNG或WebP，裁剪区域内的完整Alpha透明度都会保留。选择JPG时，透明像素会干净地合并为纯白。',
      },
      {
        question: '选择PNG导出时为什么无法调整画质？',
        answer:
          'PNG使用无损压缩，因此不适用按百分比设置的有损画质。将输出格式切换为“原始”（针对JPEG）、JPG或WebP后，会显示10%至100%的画质滑块。',
      },
      {
        question: '可以一次裁剪多张不同的图片吗？',
        answer:
          '这款交互式裁剪器一次处理一张图片，以便你用拖拽手柄与缩放逐张检查并构图每个主体。下载完成后点击垃圾桶图标，即可立即加载下一张照片。',
      },
      {
        question: '裁剪器可以上传哪些文件格式？',
        answer:
          '可以裁剪JPG、PNG、WebP、iPhone的HEIC/HEIF、GIF、BMP与SVG图片，单个文件最大20MB。请注意，动画GIF会裁剪其首帧作为静态输出。',
      },
      {
        question: '裁剪私密肖像或证件时，图片会被上传到服务器吗？',
        answer:
          '不会。整个画布绘制与Blob编码都在你的浏览器本地执行，不会通过网络传输，也不会保存在外部。',
      },
      {
        question: '可以直接从剪贴板粘贴截图进行裁剪吗？',
        answer:
          '可以。截取屏幕截图后，在未加载图片时于页面上按Ctrl+V（Mac上按Cmd+V），截图会直接在裁剪视口中打开，随时可以构图。',
      },
      {
        question: '如何将横向照片裁剪为干净的正方形头像？',
        answer:
          '点击“宽高比预设”下的1:1按钮，将白色正方形拖到人脸或标志上方，调整角手柄直至满意，然后点击“裁剪并下载”，保存精确的正方形图片。',
      },
      {
        question: '导出JPG或WebP裁剪图时的默认画质是多少？',
        answer:
          '画质默认为92%，让裁剪后的JPEG与WebP在不增加文件体积的情况下保持清晰的照片质感。如果还想进一步减小上传体积，可以降至75%至85%。',
      },
      {
        question: '裁剪会同时删除嵌入的EXIF GPS位置数据吗？',
        answer:
          '会。通过全新的HTML5画布导出裁剪区域，会生成不含原始JPEG EXIF或GPS标签的干净位图，有助于在分享裁剪后的照片时保护位置与设备隐私。',
      },
      {
        question: '为什么舞台会将选择框以外的区域变暗？',
        answer:
          '半透明的深色遮罩会压暗将被裁掉的区域。这种视觉对比有助于你在点击“裁剪并下载”之前，清晰判断构图与三分法平衡。',
      },
      {
        question: '下载裁剪图后可以快速更换当前照片吗？',
        answer:
          '可以。随时点击裁剪视口标题右上角的红色垃圾桶图标，即可清除当前照片并干净地返回上传区，准备下一张图片。',
      },
      {
        question: '裁剪导出有费用、注册或水印吗？',
        answer:
          '没有。图片裁剪器完全免费，没有账号或付费墙。每张裁剪后的照片都以全分辨率干净导出，不添加任何水印。',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: '图片水印工具',
    shortDescription: '添加自定义文字或 Logo 水印，可拖动或平铺于照片之上。',
    category: 'crop-edit',
    seoTitle: '免费在线添加图片水印 – 自定义文字与标志',
    seoDescription:
      '使用这款免费的在线图片水印工具，在浏览器中为照片添加水印加以保护。支持自定义文字或透明PNG/SVG标志，可拖拽定位或斜向平铺导出，支持不透明度、旋转与9个锚点预设，原始图片绝不上传服务器。支持更换基础图片而不丢失水印设置，导出为扁平化图片，水印永久压入，适合摄影师与电商卖家，支持手机与平板触屏操作。',
    h1: '免费在线图片水印工具',
    subtitle:
      '这款私密的浏览器工具专为摄影师、插画师、Etsy卖家与数字代理机构打造，无需上传服务器，即可添加清晰的文字或标志图片水印。在画布上自由拖动水印，对齐9个锚点预设，或将倾斜图案重复铺满整张照片。',
    howToSteps: [
      {
        title: '上传基础照片',
        description:
          '将JPG、PNG、WebP、HEIC、GIF、BMP或SVG图片（单个文件最大20MB）拖入拖放区，或从磁盘选择，或按Ctrl+V粘贴。',
      },
      {
        title: '选择“文字水印”或“标志图片”',
        description:
          '选择“文字水印”可输入自定义品牌文字、选择颜色并调整大小（2%至20%）；选择“标志图片”可上传透明PNG或SVG标志（宽度5%至60%）。',
      },
      {
        title: '调整不透明度与旋转角度',
        description:
          '将不透明度从低调的5%设置到扎实的100%，并将旋转角度从−180°实时倾斜至+180°。',
      },
      {
        title: '自由定位或启用“平铺重复图案”',
        description:
          '直接在预览图上拖动水印，或点击9个锚点预设（左上至右下），或开启“平铺重复图案”并调整平铺间距（15%至60%）。',
      },
      {
        title: '选择输出格式与画质',
        description:
          '选择“原始”、JPG、PNG或WebP输出格式，保存有损格式时可设置画质（10%至100%）。',
      },
      {
        title: '下载带水印的图片',
        description:
          '点击“下载带水印的图片”，以原始图片分辨率合成水印图层，并保存为<name>_watermarked。',
      },
    ],
    features: [
      {
        title: '文字与标志水印',
        description:
          '可使用清晰的自定义字体，或上传透明PNG/SVG品牌标志。',
      },
      {
        title: '拖拽定位与9个锚点预设',
        description:
          '可将水印放在任意角落或正中央，也可在画布上自由拖动。',
      },
      {
        title: '斜向平铺保护',
        description:
          '启用“平铺水印”后，文字或标志会重复铺满整张照片，间距可调。',
      },
      {
        title: '浏览器内隐私保护',
        description:
          '为校样图与作品集照片添加水印时，原始图片无需发送到外部服务器，全部在本地完成。',
      },
    ],
    faqs: [
      {
        question: '可以将自定义文字与自己的透明标志同时用作图片水印吗？',
        answer:
          '可以。在控制面板顶部切换“文字水印”与“标志图片”即可。文字模式支持自定义文案、十六进制颜色与大小缩放；标志模式接受透明PNG、SVG或其他受支持的标志文件。',
      },
      {
        question: '“平铺重复图案”比单个角落印章更能保护客户校样图吗？',
        answer:
          '单个角落的水印很容易被裁掉，而启用“平铺重复图案”后，旋转后的文字或标志会以交错网格铺满整个画面。使用平铺间距滑块（15%至60%）可以控制网格密度。',
      },
      {
        question: '开启“平铺重复图案”后为什么锚点预设会隐藏？',
        answer:
          '锚点预设与拖拽定位用于将单个水印放置在特定坐标（左上、中上、右上、左中、中央、右中、左下、中下、右下）。如需拖动或对齐单个印章，请关闭“平铺重复图案”。',
      },
      {
        question: '小缩略图与大型相机照片上的文字大小如何计算？',
        answer:
          '字体大小（2%至20%）与标志宽度（5%至60%）按图片宽度等比缩放。因此无论是800像素的商品缩略图还是4000像素的高分辨率校样图，水印看起来都一致。',
      },
      {
        question: '预览画布会降低下载输出的画质吗？',
        answer:
          '不会。交互式预览仅为方便屏幕拖动而适配为最大900像素宽。点击“下载带水印的图片”后，导出器会构建与原始照片精确像素尺寸相符的全分辨率画布。',
      },
      {
        question: '如何让白色水印文字在浅色背景上也清晰可读？',
        answer:
          '可以。“文字水印”会在文字后自动绘制低调的深色投影，让白色或浅色水印在明亮天空、白色商品背景与高光区域上依然清晰可读。',
      },
      {
        question: '低调的校样保护适合使用多大的不透明度与旋转范围？',
        answer:
          '低调的角落品牌水印可尝试40%至65%不透明度、0°旋转，并锚定到右下角（BR）。如需更强的图库校样保护，可使用“平铺重复图案”，不透明度25%至40%，斜向角度−25°或−35°。',
      },
      {
        question: '如何将单个水印拖到精确的自定义位置？',
        answer:
          '在取消勾选“平铺重复图案”的状态下，直接在预览画布上任意位置点击或按住并拖动指针。水印会平滑跟随，并在边缘内侧略微收纳，绝不会溢出裁切。',
      },
      {
        question: '基础照片与上传的标志支持哪些图片格式？',
        answer:
          '主照片与标志上传均支持JPG、PNG、WebP、iPhone的HEIC/HEIF、GIF、BMP与SVG，单个文件最大20MB。请注意，动画GIF会渲染为单张带水印的静态帧。',
      },
      {
        question: '基础图片是透明PNG时，导出会保留透明度吗？',
        answer:
          '会。选择“原始”（源自PNG/WebP）、PNG或WebP时，作品之外的完整Alpha透明度得以保留，同时水印合成在上方。选择JPG时，透明区域会填充为纯白。',
      },
      {
        question: '未加水印的原始校样图会被上传到外部服务器吗？',
        answer:
          '不会。保护客户未加水印的校样图隐私至关重要。所有画布合成、平铺处理与最终图片导出都在本地浏览器内存中严格执行，绝不上传网络。',
      },
      {
        question: '上传新的基础照片时，会丢失文字、不透明度或角度设置吗？',
        answer:
          '不会。想为另一张照片加盖水印时，点击预览标题中的“更换图片”即可。当前的水印文字、已上传标志、不透明度、旋转角度与平铺布局会自动保留。',
      },
      {
        question: '可以稍后更换已上传的品牌标志，而无需重新加载工具吗？',
        answer:
          '可以。在选择“标志图片”模式的状态下点击“更换标志图片”，即可随时选择另一个PNG或SVG文件，现有基础照片会立即更新。',
      },
      {
        question: '选择PNG输出时为什么画质选项会消失？',
        answer:
          'PNG输出是无损位图，因此不适用按百分比设置的有损画质。切换到“原始”（针对JPEG来源）、JPG或WebP后，即可在10%至100%之间调整画质滑块。',
      },
      {
        question: '可以直接从剪贴板粘贴照片来加水印吗？',
        answer:
          '可以。复制图片或截图后，在上传区打开的状态下按Ctrl+V（Mac上按Cmd+V），图片会直接加载到水印编辑器中。',
      },
      {
        question: '水印会永久压入下载的文件吗？',
        answer:
          '会。水印直接绘制到输出位图上，并保存为扁平化的JPG、PNG或WebP（<name>_watermarked），导出图片中不保留可编辑图层。',
      },
      {
        question: '将“水印文字”输入留空会发生什么？',
        answer:
          '如果将“水印文字”字段完全清空，渲染器会在预览画布上临时显示“水印”二字，避免在你输入新标签期间出现看不见的空白选择状态。',
      },
      {
        question: '可以在智能手机或iPad上定位并导出带水印的照片吗？',
        answer:
          '可以。预览画布上的拖动使用支持触摸的指针事件，并配有响应式滑块。你可以直接在移动版Safari或Chrome内为作品集照片或校样图加盖水印。',
      },
      {
        question: '加水印会在导出时删除相机的EXIF GPS标签吗？',
        answer:
          '会。绘制到全新的HTML5画布上会生成不复制相机EXIF头的干净输出文件，GPS位置与设备序列号等元数据会从下载的校样图中排除。',
      },
      {
        question: 'CompressMyPic会在我的水印旁边添加额外的徽章吗？',
        answer:
          '不会。照片上只会绘制你设置的文字或标志，绝不会在导出中添加任何外部品牌、角落徽章或站点水印。',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: '图片模糊与马赛克',
    shortDescription: '对整张照片进行模糊或马赛克处理，或仅涂抹敏感区域。',
    category: 'crop-edit',
    seoTitle: '免费在线模糊与马赛克图片 – 遮挡人脸与文字',
    seoDescription:
      '使用流畅的遮挡画笔或整图模式，轻松在线模糊或马赛克图片。在浏览器中遮住人脸、车牌与私人文字，调整马赛克强度与画笔大小，并以全分辨率导出。仅涂抹的笔触会被模糊，其余部分保持清晰，还支持撤销。涂抹笔触会永久压入导出文件，无法恢复，支持手机与平板触屏绘制，单个文件最大20MB，完全免费，支持撤销与重置画笔。',
    h1: '在线模糊与马赛克图片',
    subtitle:
      '这款浏览器工具专为记者、教师、电商卖家与日常隐私用户打造，可在网上分享之前永久模糊或马赛克图片细节。用交互式遮挡画笔有选择地涂抹人脸、车牌或地址，或在本地对整个画面应用流畅模糊与马赛克。',
    howToSteps: [
      {
        title: '上传照片或截图',
        description:
          '将JPG、PNG、WebP、HEIC、GIF、BMP或SVG图片（单个文件最大20MB）拖入拖放区，或直接按Ctrl+V粘贴。',
      },
      {
        title: '选择“画笔区域”或“整张图片”',
        description:
          '仅对涂抹区域（如人脸与数字）进行遮挡时，保持“画笔区域”不变；如需对整个画面进行模糊或马赛克处理，切换到“整张图片”。',
      },
      {
        title: '选择“马赛克”或“平滑模糊”',
        description:
          '根据想要的风格，在块状“马赛克”图块与“平滑模糊”之间切换。',
      },
      {
        title: '设置强度与画笔大小',
        description:
          '调整“马赛克块大小”（4至60像素）或“模糊半径”（2至50像素），有选择地涂抹时调整“画笔大小”（2%至20%）。',
      },
      {
        title: '涂抹敏感细节',
        description:
          '直接在预览画布上点击并拖动，涂抹人脸、车牌或私人文字；随时可以使用“撤销”或“重置画笔”。',
      },
      {
        title: '选择格式并下载',
        description:
          '选择“原始”、JPG、PNG或WebP输出格式，有损格式可设置画质（10%至100%），然后点击“下载图片”保存到本地。',
      },
    ],
    features: [
      {
        title: '交互式遮挡画笔',
        description:
          '画笔大小可调并支持撤销笔触，可涂抹人脸、地址或车牌。',
      },
      {
        title: '整图模糊与马赛克',
        description:
          '可快速模糊背景，或在整个画面上制作复古像素艺术马赛克效果。',
      },
      {
        title: '零服务器上传',
        description:
          '这款工具用于隐藏敏感细节，因此设备上的任何内容都不会外发。',
      },
      {
        title: '全分辨率导出',
        description:
          '画笔坐标精确对应原始图片的全分辨率像素，导出清晰。',
      },
    ],
    faqs: [
      {
        question: '下载的文件中的模糊或马赛克区域可以恢复或撤销吗？',
        answer:
          '不可以。导出时会将笔触直接压入单张扁平光栅位图（JPG、PNG或WebP），图片内没有隐藏图层或撤销历史。下载后，遮挡蒙版后方原本清晰的像素将永久消失。',
      },
      {
        question: '为什么遮挡文字时，较强的马赛克往往比轻微的平滑模糊更安全？',
        answer:
          '较强的马赛克块大小（20像素至60像素）会将字符合并为大块纯色方块，彻底破坏精细的字母轮廓。模糊半径很小时，淡淡的字形仍可能被猜出，因此使用较高的模糊半径或马赛克能实现更强的遮挡。',
      },
      {
        question: '“画笔区域”模式如何保持笔触之外的清晰区域不受影响？',
        answer:
          '在“画笔区域”模式下，基础图片以完整清晰度绘制，每一笔涂抹作为离屏Alpha蒙版，仅将模糊或马赛克处理后的区域合成在上方。照片中未涂抹的部分保持完全清晰。',
      },
      {
        question: '可以在同一张图片上混合马赛克笔触与模糊笔触吗？',
        answer:
          '可以。每一笔都会保存绘制时生效的效果类型（马赛克或平滑模糊）、强度与画笔半径。你可以先对车牌进行马赛克处理，再切换到平滑模糊，在同一张照片上涂抹背景中的人脸。',
      },
      {
        question: '在缩放后的预览上绘画，能准确对应大型相机照片吗？',
        answer:
          '可以。所有指针坐标都以0到1的归一化比例保存，画笔与效果缩放也按比例保存。点击“下载图片”后，合成结果会绘制到与原始尺寸相符的全分辨率画布上。',
      },
      {
        question: '涂抹人脸或地址时失手了，如何修正？',
        answer:
          '点击预览画布上方的“撤销”按钮，仅删除最近一笔涂抹，此前的遮挡会保留。如需重新开始，点击“重置画笔”可立即清除所有笔触。',
      },
      {
        question: '将“目标区域”切换到“整张图片”会发生什么？',
        answer:
          '“整张图片”会将当前平滑模糊半径或马赛克块大小均匀应用于从边缘到边缘的每个像素。无需画笔即可制作梦幻背景板、主视觉背景或复古像素艺术纹理，非常方便。',
      },
      {
        question: '带有未遮挡人脸、证件或私人地址的照片会被发送到任何服务器吗？',
        answer:
          '绝不会。将未经遮挡的敏感图片上传到远程服务器，会在你隐藏内容之前就损害隐私。所有画布蒙版、模糊处理与最终下载都在浏览器内严格执行。',
      },
      {
        question: '小截图应将画笔大小与马赛克块大小设置多大？',
        answer:
          '对于聊天截图或手机截图，画笔大小4%至8%可以干净地瞄准单行文字或用户名，而不会晕染附近的消息。马赛克块大小设为12至24像素左右，通常足以让小文字无法辨认。',
      },
      {
        question: '可以在这里模糊或马赛克哪些图片文件格式？',
        answer:
          '可以上传JPG、PNG、WebP、iPhone的HEIC/HEIF、GIF、BMP与SVG图片，单个文件最大20MB。请注意，多帧动画GIF会将其首帧作为静态文件进行遮挡与导出。',
      },
      {
        question: '可以用Ctrl+V粘贴的截图遮挡敏感部分吗？',
        answer:
          '可以。将截图复制到剪贴板后，在上传拖放区可见的状态下按Ctrl+V（Mac上按Cmd+V），截图会直接以“画笔区域”模式打开，随时可以遮挡并保存。',
      },
      {
        question: '导出时会保留PNG或WebP图形的透明背景吗？',
        answer:
          '会。保持“原始”（针对PNG/WebP）或选择PNG或WebP，非矩形贴纸或界面裁剪周围的Alpha透明度都会保留。选择JPG会导出为不透明的JPEG图片。',
      },
      {
        question: '为什么“撤销”与“重置画笔”按钮仅在“画笔区域”模式下可见？',
        answer:
          '这些按钮用于管理逐笔绘制的画笔笔触，因此切换到“整张图片”模式时会自动隐藏。切换回“画笔区域”后，已保存的笔触会原样恢复。',
      },
      {
        question: '可以在手机或平板上用手指或Apple Pencil绘制遮挡笔触吗？',
        answer:
          '可以。画布专门为移动触屏与触控笔附加了touch-none指针事件，你可以平滑地拖动遮挡笔触划过人脸或文字，而不会意外滚动页面。',
      },
      {
        question: '遮挡并导出也会删除EXIF相机GPS标签吗？',
        answer:
          '会。通过全新的HTML5画布渲染遮挡后的合成图时，会自动省略原始JPEG EXIF头与GPS坐标。这既保护视觉细节，也保护隐藏的文件元数据。',
      },
      {
        question: '选择PNG输出时为什么画质选项会隐藏？',
        answer:
          'PNG使用无损像素压缩，因此不适用有损画质百分比。如需调整10%至100%的画质滑块，请选择“原始”（编辑JPEG时）、JPG或WebP。',
      },
      {
        question: '保存模糊或马赛克后的照片时使用什么文件名？',
        answer:
          '下载器会保留你经过清理的基础文件名，并根据当前效果类型追加_blur或_pixelate。这样遮挡后的导出文件（例如receipt_pixelate.png）可以与原图整齐地组织在一起。',
      },
      {
        question: '如果想干净地模糊整张人像背景而不涂抹，该怎么做？',
        answer:
          '如需在叠加图形或界面卡片后方均匀柔化背景，请使用“整张图片”模式。如需将主体隔离在干净背景上，可以搭配我们的背景移除工具使用。',
      },
      {
        question: '平滑模糊与马赛克最强可以到什么程度？',
        answer:
          '模糊半径从轻微的2像素平滑到强烈的50像素高斯风格模糊。马赛克块大小从精细的4像素图块到粗大的60像素块，并按原始分辨率等比缩放。',
      },
      {
        question: '遮挡照片有水印、每日限额或注册要求吗？',
        answer:
          '没有。单个文件最大20MB的照片可以零水印、零注册地进行模糊或马赛克处理，所有本地处理完全免费，导出次数不限。',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: '图片添加文字',
    shortDescription: '添加可拖动的样式文字叠加层，支持字体、描边和阴影。',
    category: 'crop-edit',
    seoTitle: '免费在线给图片添加文字 – 字体、描边与拖拽图层',
    seoDescription:
      '使用这款免费的在线图片文字编辑器，在浏览器中为图片添加文字：可拖拽图层、5种字体、粗体/斜体样式、描边、阴影与旋转，无水印。支持多行标题与表情包字幕，导出为JPG、PNG或WebP。支持多图层独立拖动与样式设置，文字大小按图片宽度等比缩放，支持手机触屏操作，适合表情包与社交海报制作，无需注册，零水印。',
    h1: '在线给图片添加文字',
    subtitle:
      '这款私密工具专为内容创作者、社媒运营、教师与表情包制作者打造，无需厚重的设计软件，即可轻松给图片添加文字。叠加多个标题或多行说明，自定义字体、描边、阴影与旋转，并干净导出，全程零水印。',
    howToSteps: [
      {
        title: '上传图片或从剪贴板粘贴',
        description:
          '将JPG、PNG、WebP、HEIC、GIF、BMP或SVG照片（单个文件最大20MB）拖入拖放区，或直接按Ctrl+V粘贴。',
      },
      {
        title: '输入多行文字并管理图层',
        description:
          '在“文字内容”中编辑文案（按回车换行），点击“添加”可叠加更多图层，如“文字1”“文字2”，或删除不需要的图层。',
      },
      {
        title: '选择字体、填充颜色、粗体与斜体',
        description:
          '在Inter、Impact、Georgia、Courier或Trebuchet中选择字体，设置文字填充颜色选择器，并切换粗体或斜体样式。',
      },
      {
        title: '调整大小、旋转、描边与阴影',
        description:
          '滑动调整大小（2%至22%）与旋转（−180°至+180°），再自定义文字描边颜色与宽度（1至10），以及可选的投影。',
      },
      {
        title: '直接在图片上拖动图层',
        description:
          '点击并拖动预览画布上的任意文字块，精确放置标题、表情包字幕或截图标注。',
      },
      {
        title: '选择输出格式并下载',
        description:
          '选择“原始”、JPG、PNG或WebP输出格式，有损文件可设置画质（10%至100%），然后点击“下载带文字的图片”。',
      },
    ],
    features: [
      {
        title: '多个可拖拽文字图层',
        description:
          '可添加标题、说明与标注，并在画布上独立拖动每一层。',
      },
      {
        title: '丰富的排版控制',
        description:
          '可选择字体、大小、粗体/斜体字重、颜色、描边轮廓与投影。',
      },
      {
        title: '角度与对齐控制',
        description:
          '可将任意文字图层从−180°平滑旋转至+180°。',
      },
      {
        title: '干净的全分辨率导出',
        description:
          '不添加水印，可直接下载为JPG、PNG或WebP。',
      },
    ],
    faqs: [
      {
        question: '可以添加多个独立的标题，或上下结构的表情包字幕吗？',
        answer:
          '可以。点击“文字1”标签旁的“添加”按钮，即可创建“文字2”“文字3”以及任意多个独立文字图层。每个图层都保留自己的字体、颜色、大小、旋转、描边与在图片上的拖动位置。',
      },
      {
        question: '图片文字编辑器内置了哪些字体？',
        answer:
          '可以在五种可靠的系统匹配字体之间即时切换：Inter/简洁无衬线、Impact/表情包展示体、Georgia/经典衬线、Courier/等宽字体与Trebuchet/圆润无衬线。五种字体均可离线可靠使用，无需等待外部字体下载。',
      },
      {
        question: '如何制作经典的白色表情包文字并带粗黑边框？',
        answer:
          '选择Impact/表情包展示体，保持粗体开启、填充设为白色（#ffffff），并保持“文字描边”勾选，描边颜色使用#0f172a或黑色等深色。将描边粗细滑块拖到6至10，即可获得鲜明的对比效果。',
      },
      {
        question: '在“文字内容”中按回车会创建多行字幕吗？',
        answer:
          '会。“文字内容”支持完整的多行换行，并以1.22倍行高整齐居中。这让堆叠多行引用、教程标注或长字幕变得毫不费力，无需为每一行创建单独图层。',
      },
      {
        question: '照片上有多个图层时，如何选择并移动其中某一层？',
        answer:
          '点击右侧面板中的图层标签（文字1、文字2等）可切换当前排版控制。你也可以直接点击画布上任意文字块附近，编辑器会抓取离指针最近的图层。',
      },
      {
        question: '可以将文字倾斜为自定义对角角度吗？',
        answer:
          '可以。将每个当前文字图层的旋转滑块拖到−180°至+180°之间的任意位置，每个文字块都会围绕其中心坐标平滑旋转，适合制作斜向印章、标注或俏皮字幕。',
      },
      {
        question: '文字大小（2%至22%）在小图与4K照片上如何缩放？',
        answer:
          '字体大小按输出图片宽度的百分比缩放（最低12像素）。这让屏幕预览与全分辨率导出文件之间的比例保持一致。',
      },
      {
        question: '添加字幕时，截图或家庭照片会被上传到任何地方吗？',
        answer:
          '不会。画布合成会在浏览器标签页本地渲染每个字体字形、描边、阴影与旋转，你的基础图片与完成图形绝不会离开你的设备。',
      },
      {
        question: '添加文字后导出，透明PNG贴纸会发生什么？',
        answer:
          '选择“原始”（源自PNG/WebP）、PNG或WebP时，图形周围的透明区域会干净保留。如果选择JPG输出，透明区域会平滑合并到纯白背景上。',
      },
      {
        question: '如何删除多余的文字图层而不清除整张图片？',
        answer:
          '选择要删除的图层标签，点击“添加”按钮旁的垃圾桶图标。当只剩一个图层时，清空其文本框会暂时隐藏它，而不会丢失编辑器。',
      },
      {
        question: '更换背景照片时，可以保留已设置样式的文字图层吗？',
        answer:
          '可以。点击预览标题中的“更换图片”可返回拖放区并加载另一个文件，现有的文字图层与样式会保留，方便你在多张照片上重复使用同一套字幕设置。',
      },
      {
        question: '可以打开哪些图片文件格式来添加文字？',
        answer:
          '编辑器可打开JPG、PNG、WebP、iPhone的HEIC/HEIF、GIF、BMP与SVG文件，单个文件最大20MB。动画GIF会导出为单张带字幕的静态帧。',
      },
      {
        question: '可以用智能手机触屏拖放文字图层吗？',
        answer:
          '可以。画布拖动依赖为手指与触控笔设计的touch-none指针事件，你可以在iOS Safari与安卓Chrome中干净地重新定位字幕，而不会滚动页面。',
      },
      {
        question: '投影如何与文字描边一起提升可读性？',
        answer:
          '投影会在文字下方投射与字体大小成比例的柔和深色模糊。不使用描边时启用投影可制作干净的编辑风格副标题；两者搭配则能在繁忙纹理上方最大化可读性。',
      },
      {
        question: '可以通过Ctrl+V粘贴截图来快速添加标注吗？',
        answer:
          '可以。复制任意截图或幻灯片后，在加载文件之前于页面上按Ctrl+V（Mac上按Cmd+V），截图会直接加载到画布中，随时可以添加文字标注并干净导出。',
      },
      {
        question: '选择PNG时为什么画质滑块会消失？',
        answer:
          'PNG以无损方式编码图片，没有压缩画质百分比滑块。如需将导出画质从10%调整到100%，请选择“原始”（针对JPEG）、JPG或WebP。',
      },
      {
        question: '通过画布添加文字会删除隐藏的相机EXIF GPS标签吗？',
        answer:
          '会。在全新的HTML5画布上绘制会创建全新的位图，不会复制EXIF头，你的GPS位置与相机元数据会从保存的导出文件中删除。',
      },
      {
        question: '下载已标注照片时保存的文件名是什么？',
        answer:
          '下载的文件会保留你经过清理的基础文件名，并追加_text与所选扩展名（例如meme_text.jpg），避免覆盖原始未标注图片。',
      },
      {
        question: '这款工具与图片水印工具有何不同？',
        answer:
          '图片水印工具专注于单个或斜向平铺的品牌印章以及上传的PNG/SVG标志。而给图片添加文字则提供多个独立可拖拽的文字图层、5种字体、粗体/斜体控制与粗表情包描边。',
      },
      {
        question: 'CompressMyPic会在这里导出的图片上放置任何标志或水印吗？',
        answer:
          '不会。下载的文件中只有你的图片与你创建的精确文字图层，所有操作都在浏览器中免费运行，零水印，无需注册。',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: '图片边框生成器',
    shortDescription: '添加纯色或渐变边框、画框、圆角和阴影。',
    category: 'crop-edit',
    seoTitle: '免费在线图片边框生成器 – 纯色、渐变与拍立得',
    seoDescription:
      '使用这款免费的在线图片边框生成器快速为照片加框。支持纯色、线性渐变或拍立得边框、圆角与投影，全部在浏览器本地完成。可调整边框粗细、内外圆角半径与阴影，导出为PNG、JPG或WebP。支持快速预设一键换框，边框粗细按图片较短边等比计算，导出文件名追加_framed，适合作品集与电商主图展示，无需注册，零水印。',
    h1: '免费图片边框生成器',
    subtitle:
      '这款免费图片边框生成器专为摄影师、Etsy店主、作品集设计师与社交创作者打造，可为任意图片包裹清晰的画廊衬边、双色渐变或经典拍立得边框。在导出前直接在浏览器中微调边框粗细、内外圆角半径与立体阴影。',
    howToSteps: [
      {
        title: '拖放或选择要加框的图片',
        description:
          '上传任意JPG、PNG、WebP、HEIC、GIF、BMP或SVG照片（单个文件最大20MB），或按Ctrl+V粘贴。',
      },
      {
        title: '选择快速边框预设或边框样式',
        description:
          '点击“经典白框”“拍立得边框”“深色工作室”或“渐变光晕”预设，或手动在纯色、渐变与拍立得样式之间切换。',
      },
      {
        title: '自定义边框颜色与渐变角度',
        description:
          '在纯色/拍立得模式下设置边框颜色，或为线性渐变边框选择起始颜色、结束颜色与渐变角度（0°至360°）。',
      },
      {
        title: '调整边框大小与圆角半径',
        description:
          '滑动调整边框大小（1%至25%），以及独立的边框圆角（0%至30%）与照片圆角（0%至30%）滑块。',
      },
      {
        title: '选择投影并预览格式',
        description:
          '选择无、柔和、中等或深投影，并选择PNG、JPG或WEBP输出，同时查看棋盘格预览。',
      },
      {
        title: '下载加框后的图片',
        description:
          '点击“下载加框图片”，以原始全分辨率渲染边框与阴影，并保存为<name>_framed。',
      },
    ],
    features: [
      {
        title: '纯色与渐变边框',
        description:
          '可创建干净的画廊衬边或鲜艳的双色线性渐变边框。',
      },
      {
        title: '预设边框样式',
        description:
          '可一键应用拍立得、画廊白框、深色工作室或日落渐变效果。',
      },
      {
        title: '圆角半径与投影',
        description:
          '可圆角处理内侧照片或外侧边框，并添加逼真的立体阴影。',
      },
      {
        title: '无损PNG支持',
        description:
          '导出PNG可在阴影与圆角边框周围保留透明的外角。',
      },
    ],
    faqs: [
      {
        question: '拍立得边框样式与标准纯色边框有何不同？',
        answer:
          '纯色边框会在照片四边包裹均匀的内边距，而拍立得边框会在底部边缘增加3.2倍的额外白色边框高度，以复刻经典即时成像照片。点击“拍立得边框”预设可一键配置干净的比例。',
      },
      {
        question: '切换到JPG输出格式后，为什么投影会消失？',
        answer:
          'JPG文件不支持Alpha透明通道，柔和的半透明立体阴影无法干净地淡入页面背景。我们的渲染器会在透明PNG与WebP导出中保留投影内边距，同时在纯白JPG上保持清晰的边框边缘。',
      },
      {
        question: '边框圆角与照片圆角有什么区别？',
        answer:
          '边框圆角（0%至30%）会弯曲彩色边框本身的外角，而照片圆角（0%至30%）会弯曲衬边内侧照片的内角。匹配或对比两者，可以打造时尚的界面卡片或锐利的画廊衬边。',
      },
      {
        question: '渐变光晕边框如何计算角度与颜色？',
        answer:
          '选择渐变样式后，会显示起始颜色、结束颜色与0°至360°的渐变角度滑块，在照片后方绘制完整对角或方向性线性渐变。你可以点击快速边框预设下的“渐变光晕”，一键获得蓝绿渐变卡片样式。',
      },
      {
        question: '添加边框会裁掉原始照片的任何边缘吗？',
        answer:
          '不会。图片边框生成器会向外扩展画布，包裹原始图片的完整宽高，而不是遮盖你的像素。只有将照片圆角设为大于0%时，四个内侧图片角才会被柔和地圆角处理。',
      },
      {
        question: '边框大小（1%至25%）在高图与宽图上如何计算？',
        answer:
          '边框粗细按图片较短边（宽高中的最小值）的百分比计算。这让16:9横幅与4:5竖图的上下与左右边距都保持均匀平衡。',
      },
      {
        question: '四个快速边框预设会自动配置什么？',
        answer:
          '“经典白框”设置10%的白色画廊衬边并带柔和阴影，“拍立得边框”增加即时成像风格的底部边距，“深色工作室”应用石板色边框，“渐变光晕”创建135°蓝绿渐变边框。',
      },
      {
        question: '为什么预览会在边框周围显示灰白棋盘格？',
        answer:
          '棋盘格用于可视化圆角边框外侧与柔和投影内的真实透明像素。导出为PNG或WebP后，这些棋盘格区域在任何网站或演示幻灯片上都保持完全透明。',
      },
      {
        question: '加框是否在本地运行而不上传我的照片？',
        answer:
          '是的。渐变绘制、圆角裁剪、阴影渲染与Blob导出都在你设备上的HTML5画布内严格执行，绝不会上传到外部服务器。',
      },
      {
        question: '边框生成器可以加载哪些图片文件格式？',
        answer:
          '可以拖放JPG、PNG、WebP、iPhone的HEIC/HEIF、GIF、BMP与SVG图片，单个文件最大20MB。动画GIF会导出为加框的静态首帧。',
      },
      {
        question: '点击快速边框预设后，还可以更改边框颜色吗？',
        answer:
          '可以。预设只是为你填充边框样式、颜色、圆角与阴影控制项，之后可以立即调整边框颜色、调整边距或切换投影。',
      },
      {
        question: '如何制作零阴影的深炭色或粉彩画廊边框？',
        answer:
          '选择纯色样式，点击边框颜色选择任意自定义十六进制色调，并将边框圆角与照片圆角都拖到0%。然后在投影下点击“无”，即可获得清晰的扁平边框。',
      },
      {
        question: '下载的加框图片会是全分辨率吗？',
        answer:
          '会。屏幕预览仅为适配布局而缩小显示。点击“下载加框图片”后，会以原始照片的精确像素分辨率加上缩放后的边框与阴影，构建全新的画布。',
      },
      {
        question: '保留透明圆角边框时，应导出PNG还是WebP？',
        answer:
          '如需在细边框与打印素材周围保持无损锐度，请选择PNG。如需快速轻量的网站卡片并保留透明外角与立体阴影，请选择WebP。',
      },
      {
        question: '可以直接从剪贴板粘贴截图并为其加卡片边框吗？',
        answer:
          '可以。截图后在上传区按Ctrl+V（Mac上按Cmd+V），搭配圆角边框、渐变边框与中等投影，即可将原始截图变为精致的演示视觉效果。',
      },
      {
        question: '添加边框会删除隐藏的相机EXIF GPS数据吗？',
        answer:
          '会。合成到HTML5画布上会创建干净的加框位图，原始相机EXIF头与GPS坐标会自动从下载的PNG、JPG或WebP中排除。',
      },
      {
        question: '测试边框时如何加载第二张照片？',
        answer:
          '点击预览面板右上角的“更换图片”可选择另一张照片，所有当前边框颜色、渐变角度、圆角半径与阴影选择都会保留。',
      },
      {
        question: '加框图片以什么文件名保存？',
        answer:
          '导出会保留你经过清理的原始文件名，并在.png、.jpg或.webp之前追加_framed。例如名为portrait.jpg的文件会干净地保存为portrait_framed.png。',
      },
      {
        question: '边框生成器在移动浏览器上运行流畅吗？',
        answer:
          '是的。每个预设卡片、范围滑块与颜色选择器在iOS Safari与安卓Chrome中都能干净运行，你可以直接从手机相机胶卷为拍立得或产品照片加框。',
      },
      {
        question: '加框照片有水印、付费墙或注册限制吗？',
        answer:
          '没有。每张加框照片都完全无水印、免费下载，仅适用标准的单个文件20MB检查，以保持本地浏览器内存流畅。',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: '图片圆角工具',
    shortDescription: '统一或按角设置圆角，输出透明 PNG。',
    category: 'crop-edit',
    seoTitle: '免费在线图片圆角工具 – 透明PNG圆角裁剪',
    seoDescription:
      '免费在线圆角处理图片：支持统一或逐角滑块、圆形头像预设，并可导出透明PNG或WebP，直接在浏览器中完成。保持原始像素尺寸，四个角可独立设置，圆角边缘平滑抗锯齿，完全免费。支持逐角独立设置与完整圆形预设，导出文件名追加_rounded，适合头像与界面卡片制作，支持手机与平板触屏操作，完全免费，无需注册。',
    h1: '在线图片圆角工具',
    subtitle:
      '这款浏览器工具专为界面设计师、简报作者、博主与制作时尚卡片或头像的社交用户打造，可在全分辨率下干净地圆角处理图片。统一弯曲四个角，切换独立的逐角滑块，或一键变为完整圆形，并以透明PNG/WebP输出。',
    howToSteps: [
      {
        title: '拖放或选择图片',
        description:
          '将JPG、PNG、WebP、HEIC、GIF、BMP或SVG照片（单个文件最大20MB）上传到拖放区，或按Ctrl+V粘贴。',
      },
      {
        title: '调整“全部圆角半径”或点击“完整圆形/胶囊”',
        description:
          '拖动“全部圆角半径”滑块（0%至100%，显示精确的像素曲率），或点击“完整圆形/胶囊”一键变为100%。',
      },
      {
        title: '可选：启用“独立逐角控制”',
        description:
          '切换“独立逐角控制”，可分别设置左上、右上、左下与右下四个角。',
      },
      {
        title: '选择透明或纯色外角填充',
        description:
          '保持“透明（PNG/WebP）”以获得透明圆角，或切换到“纯色”并选择任意十六进制背景色。',
      },
      {
        title: '选择输出格式（PNG、WebP或JPG）',
        description:
          '选择PNG以获得无损Alpha边缘，WebP以获得更轻量的透明网络素材，或JPG以获得不透明的纯色角背景。',
      },
      {
        title: '下载圆角图片',
        description:
          '检查棋盘格预览，点击“下载圆角图片”，以原始全尺寸导出<name>_rounded。',
      },
    ],
    features: [
      {
        title: '统一与逐角半径',
        description:
          '可将所有角均匀圆角处理至胶囊/圆形，或独立设置每个角。',
      },
      {
        title: '真正的透明圆角',
        description:
          '导出PNG或WebP时，圆角蒙版外侧具有干净抗锯齿的Alpha透明度。',
      },
      {
        title: '可选纯色背景',
        description:
          '导出JPG时，可用任意自定义十六进制颜色填充外角。',
      },
      {
        title: '全分辨率输出',
        description:
          '保持精确的原始像素尺寸，同时干净地裁剪圆角。',
      },
    ],
    faqs: [
      {
        question: '为什么要使用PNG或WebP才能让圆角保持透明？',
        answer:
          'JPEG格式不支持Alpha透明通道，因此圆角蒙版之外的角始终会变为纯白或不透明。PNG与WebP保留平滑的8位抗锯齿透明度，让你的圆角卡片或头像可以在任何网页或幻灯片颜色上无缝融合。',
      },
      {
        question: '“完整圆形/胶囊”快捷方式在正方形与矩形照片上如何工作？',
        answer:
          '点击“完整圆形/胶囊”会将“全部圆角半径”设为较短边一半的100%，即min(宽, 高)/2。在1:1正方形图片上会切出完美圆形；在较宽的横幅上会形成平滑的体育场胶囊形状。',
      },
      {
        question: '如果只想为博客卡片圆角处理上方两个角，该怎么做？',
        answer:
          '勾选“独立逐角控制”以解锁左上、右上、左下与右下四个独立滑块（每个0%至100%）。将左下与右下设为0%，仅圆角处理上方两个角。',
      },
      {
        question: '如何先将矩形照片裁剪为正方形，再制作圆形头像？',
        answer:
          '打开我们的图片裁剪器工具（见下方“相关免费图片工具”链接），选择1:1宽高比预设并下载正方形裁剪图，然后将该正方形文件拖到此处，点击“完整圆形/胶囊”，即可获得清晰的圆形头像。',
      },
      {
        question: '“全部圆角半径”旁边的实时像素读数是什么意思？',
        answer:
          '在0%至100%滑块旁边，标签会根据原始图片尺寸计算精确的圆角曲率（以真实输出像素表示，例如120px（24%））。这让匹配CSS border-radius值变得简单。',
      },
      {
        question: '何时应在“外角填充”下选择“纯色”而非“透明”？',
        answer:
          '当你计划导出轻量JPG、匹配特定深色模式卡片背景，或上传到会将透明PNG Alpha替换为黑色的应用时，请选择“纯色”。你可以用颜色选择器选择白色或任意精确的十六进制代码。',
      },
      {
        question: '选择JPG时点击“透明（PNG/WebP）”会自动发生什么？',
        answer:
          'JPG文件无法在外角存储Alpha透明度，因此点击“透明（PNG/WebP）”会自动将输出格式切换为PNG，让你的圆角保持透明。',
      },
      {
        question: '圆角处理会缩小照片的宽高吗？',
        answer:
          '不会。导出的图片保持精确的原始像素宽高，只有外角区域通过二次曲线平滑裁剪。',
      },
      {
        question: '为什么弯曲边缘看起来平滑而不是锯齿像素？',
        answer:
          'HTML5画布沿矢量二次贝塞尔路径裁剪，并启用高质量平滑。这会在曲线上产生柔和的亚像素抗锯齿效果，在深色或浅色页面背景上自然融合。',
      },
      {
        question: '裁剪圆角期间，肖像或头像会被上传到任何服务器吗？',
        answer:
          '不会。路径裁剪与PNG/WebP编码都在浏览器标签页内通过HTML5画布严格执行，个人照片与品牌标志绝不会离开你的设备。',
      },
      {
        question: '这款工具可以圆角处理哪些输入格式？',
        answer:
          '可以拖放JPG、PNG、WebP、iPhone的HEIC/HEIF、GIF、BMP或SVG文件，单个文件最大20MB。动画GIF会导出圆角处理的静态首帧。',
      },
      {
        question: '可以直接粘贴剪贴板截图来圆角处理吗？',
        answer:
          '可以。截取屏幕截图后，在上传区激活的状态下按Ctrl+V（Mac上按Cmd+V），截图会直接在棋盘格预览中打开，随时可以圆角处理。',
      },
      {
        question: '取消勾选逐角模式后，我的“独立逐角”值会发生什么？',
        answer:
          '取消勾选“独立逐角控制”后，画布会恢复为单个“全部圆角半径”滑块，所有四个角保持统一。重新勾选后，四个角滑块会从当前统一半径干净地重新设置。',
      },
      {
        question: '圆角处理也会删除嵌入的EXIF GPS标签吗？',
        answer:
          '会。通过干净的画布裁剪渲染像素时，会自动剥离原始JPEG EXIF与GPS头，在你分享圆角头像或产品缩略图时保护隐私。',
      },
      {
        question: '保留圆角半径设置的同时，如何更换当前图片？',
        answer:
          '点击预览舞台上方的“更换图片”可上传新照片，统一半径、逐角值、填充模式与输出格式都会保留，方便快速重复导出。',
      },
      {
        question: '下载的圆角图片使用什么文件名？',
        answer:
          '下载器会保留你经过清理的原始文件名，并在.png、.webp或.jpg之前添加_rounded。例如avatar.jpg会干净地下载为avatar_rounded.png。',
      },
      {
        question: '导出圆角网络图形时，应选择PNG还是WebP？',
        answer:
          '如需最大兼容性（覆盖旧应用）与无损边缘清晰度，请选择PNG。如需大幅缩小网站素材体积并保留完整的Alpha圆角透明度，请选择WebP。',
      },
      {
        question: '可以在iOS或安卓移动浏览器上使用图片圆角工具吗？',
        answer:
          '可以。所有滑块、复选框与格式切换都能平滑适配Safari与Chrome的移动屏幕，你可以直接从手机相机胶卷为肖像圆角处理。',
      },
      {
        question: '这款工具与图片边框生成器有何不同？',
        answer:
          '图片圆角工具以原始尺寸干净地裁剪照片，不添加外侧内边距。而图片边框生成器则会在图片周围包裹彩色衬边、渐变或拍立得边框。',
      },
      {
        question: '圆角导出有水印、费用或每日限额吗？',
        answer:
          '没有。单个文件最大20MB的照片可以无限圆角处理，完全免费，下载时绝不会出现水印、账号或付费墙。',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: '图片亮度调节',
    shortDescription: '实时对比预览，调亮或调暗照片。',
    category: 'crop-edit',
    seoTitle: '免费在线图片亮度编辑器 – 提亮或调暗照片',
    seoDescription:
      '使用这款免费的在线图片亮度编辑器快速调整照片光线。滑块从−100%到+100%，支持快速预设，对比前后效果，并可私密导出。适合修复曝光不足的照片、提亮房间与打磨产品图。支持分屏对比与全屏对比检查细节，导出文件名追加_brightness，支持手机触屏操作，完全免费，无需注册，适合摄影师、房产中介与电商卖家。',
    h1: '免费在线图片亮度编辑器',
    subtitle:
      '这款浏览器图片亮度编辑器专为修复曝光不足照片的摄影师、提亮房间的房产中介与打磨产品图的卖家打造，可平滑调整光照而无需上传原图。将滑块从−100%拨到+100%，测试即时光线预设，并通过实时分屏对比检查结果。',
    howToSteps: [
      {
        title: '拖放或选择要提亮或调暗的照片',
        description:
          '将任意JPG、PNG、WebP、HEIC、GIF、BMP或SVG图片（单个文件最大20MB）上传到拖放区，或按Ctrl+V粘贴。',
      },
      {
        title: '调整“亮度”滑块或快速预设',
        description:
          '将亮度从−100%（更暗）移动到+100%（更亮），或点击“暗（−30%）”“昏暗（−15%）”“原始（0%）”“明亮（+15%）”“鲜艳（+30%）”或“高调（+50%）”。',
      },
      {
        title: '比较“之后”“之前”与分屏对比视图',
        description:
          '在“之后”“之前”与“分屏对比”标签之间切换，或启动“全屏对比”，以验证阴影与高光细节。',
      },
      {
        title: '选择输出格式与画质',
        description:
          '选择“原始”、JPG、PNG或WEBP输出，并保存有损格式时调整画质滑块（10%至100%）。',
      },
      {
        title: '下载编辑后的图片',
        description:
          '点击“下载编辑后的图片”，以原始全分辨率处理亮度曲线，并保存为<name>_brightness到本地。',
      },
    ],
    features: [
      {
        title: '实时像素调整',
        description:
          '在桌面与移动浏览器上即时预览，无需服务器往返。',
      },
      {
        title: '快速曝光预设',
        description:
          '一键测试“暗”“昏暗”“明亮”“鲜艳”与“高调”预设。',
      },
      {
        title: '前后对比检查',
        description:
          '并排比较编辑后的照片，或使用交互式对比滑块。',
      },
      {
        title: '私密客户端处理',
        description:
          '你的个人照片严格保留在浏览器内。',
      },
    ],
    faqs: [
      {
        question: '亮度滑块如何在不立即冲淡颜色的情况下改变像素？',
        answer:
          '将亮度在−100%（更暗）与+100%（更亮）之间移动时，会在HTML5画布内实时平滑调整整帧的亮度。查看分屏对比或全屏对比，可以在不裁切明亮白色的情况下提亮暗部阴影。',
      },
      {
        question: '为什么我的照片上传后会自动以+15%预览？',
        answer:
          '编辑器初始化为“明亮（+15%）”，让你在加载时立即看到轻微的曝光提升。随时点击“原始（0%）”或亮度控制中的“重置”，即可从中性基线进行比较。',
      },
      {
        question: '一键曝光测试包含哪些快速预设？',
        answer:
          '六个预设覆盖常见调整：暗（−30%）、昏暗（−15%）、原始（0%）、明亮（+15%）、鲜艳（+30%）与高调（+50%）。点击任意卡片可立即吸附滑块，同时仍可按1%步长微调。',
      },
      {
        question: '“之后”“之前”“分屏对比”与“全屏对比”有何不同？',
        answer:
          '“之后”显示编辑后的画布，“之前”显示未经修改的原始图片，“分屏对比”在视口内直接添加交互式前后滑块。点击“全屏对比”会渲染全分辨率Blob并打开详细对比弹窗。',
      },
      {
        question: '提亮照片会降低像素分辨率或尺寸吗？',
        answer:
          '不会。实时预览仅为平滑的交互滑块响应而缩放至最大1000像素。点击“下载编辑后的图片”后，会渲染全分辨率画布，保留图片精确的原始宽高。',
      },
      {
        question: '何时应使用−15%或−30%等负值调暗照片？',
        answer:
          '负亮度值可以干净地压暗过度曝光的手机照片与刺眼的窗户眩光。调暗明亮的主视觉照片，还能在白色叠加标题后方形成更好的对比。',
      },
      {
        question: '图片亮度编辑器会保留PNG的透明背景吗？',
        answer:
          '会。保持“原始”（针对PNG/WebP）或选择PNG或WebP时，透明区域会在棋盘格视口中干净保留。如果选择JPG输出，透明区域会平滑合并到纯白上。',
      },
      {
        question: '个人家庭照片或客户校样图会被上传到外部服务器吗？',
        answer:
          '不会。像素亮度变换与格式编码都在浏览器中使用HTML5画布本地运行，你的图片绝不会离开电脑或智能手机。',
      },
      {
        question: '可以在这里提亮或调暗哪些图片文件格式？',
        answer:
          '可以打开JPG、PNG、WebP、iPhone的HEIC/HEIF、GIF、BMP与SVG文件，单个文件最大20MB。动画GIF会将其提亮后的首帧导出为静态图片。',
      },
      {
        question: '可以直接从剪贴板粘贴深色截图来提亮吗？',
        answer:
          '可以。复制深色截图或幻灯片后，在上传区按Ctrl+V（Mac上按Cmd+V），截图会直接加载到实时视口中，随时可以调整并导出。',
      },
      {
        question: '将亮度一路推到+100%会发生什么？',
        answer:
          '极端正值会强烈提亮中间调，并将高光推向纯白，适合风格化的高调图形，但可能裁切人像中的高光纹理。自然曝光恢复建议使用+10%至+35%。',
      },
      {
        question: '提亮图片后可以调整对比度或色彩鲜艳度吗？',
        answer:
          '可以。先下载提亮后的照片，再点击下方“相关免费图片工具”中的“图片对比度编辑器”或“图片饱和度编辑器”。将调整拆分到专用工具中，可以精确微调对比冲击力或色彩丰富度。',
      },
      {
        question: '在输出格式下选择PNG时为什么画质选项会消失？',
        answer:
          'PNG使用无损压缩，没有可变的百分比画质级别。切换到“原始”（针对JPEG）、JPG或WebP，即可显示并调整10%至100%的画质滑块（默认为90%）。',
      },
      {
        question: '如何快速撤销所有亮度更改？',
        answer:
          '随时点击亮度控制右上角的蓝色“重置”按钮，也可以点击“原始（0%）”预设卡片，直接回到零调整。',
      },
      {
        question: '导出编辑后的照片会删除相机EXIF GPS位置标签吗？',
        answer:
          '会。在全新的HTML5画布上绘制会构建干净的输出位图，不复制EXIF相机数据，任何GPS坐标或设备序列号都会自动删除。',
      },
      {
        question: '导出后可以不刷新页面直接加载另一张照片吗？',
        answer:
          '可以。随时点击预览工具栏中的红色垃圾桶图标（删除图片），即可干净地清除当前照片并直接返回上传拖放区。',
      },
      {
        question: '点击“下载编辑后的图片”时使用什么文件名？',
        answer:
          '导出器会保留你经过清理的原始文件名，并追加_brightness与所选格式扩展名。例如kitchen.jpg会干净地保存为kitchen_brightness.jpg。',
      },
      {
        question: '编辑器在iPhone Safari与安卓Chrome上运行可靠吗？',
        answer:
          '是的。每个预设卡片、范围滑块与分屏对比视图在移动触屏上都能流畅运行，你可以直接在手机的Safari或Chrome中提亮相机胶卷中的深色照片。',
      },
      {
        question: '为什么深色压缩JPEG在强烈提亮后会出现淡淡的块状噪点？',
        answer:
          '重度压缩JPEG的阴影中常藏有隐藏在黑暗中的量化伪影；将亮度提升+40%或更多会让现有的阴影噪点显现。保持适度调整（+15%至+30%）可以维持更干净的色调。',
      },
      {
        question: '提亮照片有水印、账号注册或限额吗？',
        answer:
          '没有。图片亮度编辑器完全免费，零水印，无需注册，单个文件最大20MB的照片可以无限提亮或调暗。',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: '图片对比度调节',
    shortDescription: '增强或柔化图片对比度，实时前后对比。',
    category: 'crop-edit',
    seoTitle: '在线图片对比度编辑器免费 – 调整照片对比度',
    seoDescription:
      '使用免费的在线图片对比度编辑器，自由调节阴影与高光的反差。从 -100% 到 +100% 滑动调节，试用 6 个预设，通过分屏对比查看效果，全部在浏览器本地完成，安全又私密。支持 JPG、PNG 与 WebP 格式，无水印。无需注册或安装，支持移动端与桌面端，随时随地免费使用。一键重置，随时回到原始效果。',
    h1: '免费在线图片对比度编辑器',
    subtitle:
      '专为摄影师、网店卖家和想要修复发灰、发平照片的设计师打造，这款浏览器图片对比度编辑器能在几秒内加深阴影、强化色调层次。选择一键预设，在分屏预览中检查效果，无需上传到服务器，即可在本地导出。',
    howToSteps: [
      {
        title: '拖放或选择图片',
        description:
          '将 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 照片（单文件最大 20MB）上传到编辑器拖放区，或从磁盘中选择，或按 Ctrl+V 直接粘贴。',
      },
      {
        title: '查看实时画布预览',
        description:
          '照片加载到自适应的画布预览中，初始对比度为 +20%，您可以立即看到轻微的反差提升如何影响色调层次。',
      },
      {
        title: '调节对比度滑块或使用预设',
        description:
          '将对比度滑块从 -100%（平淡）拖到 +100%（高对比），或点击柔和（-25%）、低调（-10%）、原始（0%）、清晰（+20%）、鲜明（+40%）或戏剧（+70%）。',
      },
      {
        title: '用对比工具检查细节',
        description:
          '在调整后、调整前和分屏对比（带竖直分隔滑块）之间切换，或点击全屏对比，近距离检查阴影与高光。',
      },
      {
        title: '选择格式、画质并下载',
        description:
          '在输出格式中选择原始格式、JPG、PNG 或 WebP，对有损格式调节画质（10%–100%），然后点击下载已编辑图片。',
      },
    ],
    features: [
      { title: '精准对比度曲线', description: '平滑地扩大或压缩色调范围，不会产生生硬的色彩偏移。' },
      { title: '一键预设', description: '立即试用柔和、低调、清晰、鲜明或戏剧预设。' },
      { title: '交互式调整前后对比窗口', description: '下载前仔细检查阴影与高光的细节。' },
      { title: '100% 本地处理', description: '在浏览器内快速处理，零上传、无水印。' },
    ],
    faqs: [
      {
        question: '把对比度滑块向正方向或负方向移动，画面会有什么变化？',
        answer:
          '滑到 0% 以上时，以中间调为中心，暗部更暗、亮部更亮，主体会从发灰的背景中凸显出来。滑到 0% 以下时，高光与阴影向中性灰靠拢，呈现柔和的哑光质感。',
      },
      {
        question: '对比度控制面板里有哪些快捷预设？',
        answer:
          '内置 6 个一键预设：柔和（-25%）、低调（-10%）、原始（0%）、清晰（+20%）、鲜明（+40%）和戏剧（+70%）。点击任意预设，滑块会立即定位，实时画布预览随之更新。',
      },
      {
        question: '为什么上传照片后对比度会从 +20% 开始？',
        answer:
          '编辑器初始设为清晰（+20%），让您第一眼就能看到色调改善的效果，而不是一张毫无变化的图片。随时点击原始（0%）或对比度控制面板顶部的重置，即可回到零调整。',
      },
      {
        question: '这款图片对比度编辑器如何计算像素变化？',
        answer:
          '它在 HTML5 画布上对 RGB 三个通道逐像素应用标准的线性对比度曲线，同时不触碰 Alpha 通道。直接在 ImageData 中计算，避免了 iOS Safari 和移动浏览器中 CSS 滤镜表现不一致的问题。',
      },
      {
        question: '怎样不靠猜测检查调整前后的阴影？',
        answer:
          '使用预览窗口正上方的调整后、调整前和分屏对比标签，在图片上将实时分隔线从 0% 拖到 100%。如需逐像素近距离检查，点击全屏对比打开并排对比窗口。',
      },
      {
        question: '提高对比度会让明亮的云过曝或让黑色阴影死黑吗？',
        answer:
          '把对比度大幅推到 +70% 到 +100% 时，接近白色的高光会趋向纯白 255，深阴影会趋向 0。用分屏对比留意亮色衬衫或深色头发的细腻质感，一旦出现裁切就调回 +15%–+40%。',
      },
      {
        question: '对比度编辑器可以打开哪些图片文件类型？',
        answer:
          '可以上传 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、GIF、BMP 和 SVG 文件，单文件最大 20MB。HEIC 照片会在浏览器内自动解码，然后再渲染到编辑画布上。',
      },
      {
        question: '对比度编辑后的透明背景 PNG 标志能原样保存吗？',
        answer:
          '可以。透明 PNG 保持原始格式输出，或选择 PNG、WebP 输出，都能完整保留 Alpha 透明度。只有把输出格式切换为 JPG 时，透明区域才会被填充为纯白背景。',
      },
      {
        question: '预览图缩小显示会影响最终下载图片的分辨率吗？',
        answer:
          '不会。屏幕上的预览为保证拖动滑块时即时响应，将最长边限制为 1000px 显示。点击下载已编辑图片时，同样的对比度算法会作用于原始像素尺寸的 100%。',
      },
      {
        question: '可以从剪贴板粘贴截图来修复发灰的屏幕截图吗？',
        answer:
          '可以。在上传界面任意位置按 Ctrl+V（Mac 上为 Cmd+V），剪贴板图片会直接载入编辑器。把对比度提高 +20% 到 +35%，能让模糊的图表线条或灰色界面文字更清晰。',
      },
      {
        question: '调节对比度会把彩色照片变成黑白吗？',
        answer:
          '不会。对比度按比例改变红、绿、蓝通道的亮度距离，并不去除色相信息。不过要注意，正向对比度较高时，色彩看起来会略微更鲜艳；负向对比度则会让色彩变淡。',
      },
      {
        question: '导出为 JPG 或 WebP 时，画质应该设为多少？',
        answer:
          '画质滑块默认为 90%，既能保持色调渐变平滑、无色带，又能控制文件体积。如需更小的网页上传文件，可降到 75%–80%；如需完全无损输出，请选择 PNG。',
      },
      {
        question: '编辑对比度后下载的文件叫什么名字？',
        answer:
          '保存的文件会在整理后的原始文件名前加上 _contrast，再加上所选格式的扩展名，例如 portrait_contrast.jpg。磁盘上的原始文件不会被修改或覆盖。',
      },
      {
        question: '这个工具能锐化模糊失焦的照片吗？',
        answer:
          '提高对比度会增大明暗交界处的分离度，让发灰或有雾的照片看起来明显更清晰。但它调节的是色调曲线，并非边缘卷积锐化，因此严重的运动模糊无法恢复。',
      },
      {
        question: '对比度处理会把照片上传到外部服务器吗？',
        answer:
          '不会。所有像素计算都在本地浏览器标签页内使用 HTML5 画布和 JavaScript 完成。个人肖像、扫描的证件、未发布的产品照片都不会离开您的电脑或手机。',
      },
      {
        question: '上传动态 GIF 调整对比度会发生什么？',
        answer:
          'HTML5 画布会渲染并调整 GIF 的第一帧，以所选格式导出一张静态图片。不支持多帧动态 GIF 的对比度调整。',
      },
      {
        question: '对比度调节与亮度调节有什么区别？',
        answer:
          '亮度是让所有像素整体一起变亮或变暗，而对比度是以中间灰为中心，拉大或缩小暗部阴影与亮部高光之间的差距。如果提亮后暗照片显得发白，接着用对比度工具收尾会更好。',
      },
      {
        question: '可以用负对比度柔化正午人像上的强烈阴影吗？',
        answer:
          '可以。选择柔和（-25%）或低调（-10%），能缓和阳光下的皮肤与暗部阴影之间的强烈过渡。如果是极端逆光或想要平淡的编辑氛围，可将滑块拖到 -30% 到 -50% 之间。',
      },
      {
        question: '不刷新浏览器标签页，如何载入一张新照片？',
        answer:
          '点击预览面板右上角的垃圾桶图标，即可清除当前图片并返回上传区。这样会释放临时浏览器内存，让画布为下一张图片做好准备。',
      },
      {
        question: '对比度编辑器在 iOS Safari 和 Android Chrome 上运行可靠吗？',
        answer:
          '可靠。色调计算在 JavaScript 的 ImageData 像素数组中显式执行，并不依赖在移动浏览器上表现不稳定的 CSS 画布滤镜。因此在 iPhone、Android、macOS 和 Windows 设备上，预览与最终下载的效果都保持一致。',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: '图片饱和度调节',
    shortDescription: '在浏览器中提升色彩鲜艳度或干净地降低饱和度。',
    category: 'crop-edit',
    seoTitle: '在线图片饱和度编辑器免费 – 调节色彩鲜艳度',
    seoDescription:
      '使用免费的在线图片饱和度编辑器，让暗淡的色彩更鲜艳，或一键转为黑白。在分屏对比中实时预览，在浏览器内安全导出。内置从灰度到高饱和的 6 个预设，支持 JPG、PNG 与 WebP，无水印。无需注册或安装，支持移动端与桌面端，随时随地免费使用，全部处理均在本地完成，照片不会上传到任何服务器，安全又私密。',
    h1: '免费在线图片饱和度编辑器',
    subtitle:
      '专为摄影师、社交创作者和需要平衡色彩强度的电商编辑打造，这款浏览器图片饱和度编辑器根据人眼感知的亮度调节色彩鲜艳度。从 -100% 的纯净灰度到 +100% 的生动色调平滑过渡，支持分屏对比与本地导出。',
    howToSteps: [
      {
        title: '把照片载入编辑器',
        description:
          '拖放任意 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 图片（单文件最大 20MB），或从设备中选择文件，或按 Ctrl+V 粘贴。',
      },
      {
        title: '预览初始的色彩提升',
        description:
          '编辑器以饱和度 +25% 载入，您可以在实时预览画布上立即看到暗淡的色彩变得更浓郁。',
      },
      {
        title: '微调饱和度或点击预设',
        description:
          '将滑块从 -100%（灰度）拖到 +100%（生动），或选择灰度（-100%）、低调（-40%）、原始（0%）、浓郁（+30%）、鲜艳（+60%）或超饱和（+90%）。',
      },
      {
        title: '用分屏对比检查肤色',
        description:
          '切换调整后、调整前或分屏对比并拖动擦除滑块，或点击全屏对比，确保红色与肤色看起来平衡，而不是过度饱和。',
      },
      {
        title: '选择输出格式并本地保存',
        description:
          '选择原始格式、JPG、PNG 或 WebP，非 PNG 格式可调节画质（10%–100%），然后点击下载已编辑图片。',
      },
    ],
    features: [
      { title: '保持亮度的饱和度调节', description: '根据感知亮度调节色彩强度，色调保持自然。' },
      { title: '从灰度到超高饱和', description: '滑到 -100% 即刻转为黑白，向正方向推则色彩浓郁鲜艳。' },
      { title: '实时调整前后预览', description: '切换或拖动对比视图，避免肤色过度饱和。' },
      { title: '私密且免费', description: '无上传、无账号、无水印。' },
    ],
    faqs: [
      {
        question: '这款图片饱和度编辑器如何保持感知亮度？',
        answer:
          '每个像素先按 ITU-R BT.709 权重（0.2126 R + 0.7152 G + 0.0722 B）计算感知亮度，再以该中性灰点为基准对 RGB 通道进行插值。因此降低饱和度时，鲜艳的红色和绿色不会变得异常明亮或发灰。',
      },
      {
        question: '饱和度控制面板内置了哪些一键预设？',
        answer:
          '共有 6 个预设：灰度（-100%）、低调（-40%）、原始（0%）、浓郁（+30%）、鲜艳（+60%）和超饱和（+90%）。点击任意按钮，预览会立即更新，之后还可以用滑块微调。',
      },
      {
        question: '可以一键把彩色人像转为干净的灰度图吗？',
        answer:
          '可以。点击灰度（-100%）预设，或把饱和度滑块一路拖到最左端的 -100%。由于采用标准亮度权重，肤色与绿色会转为自然的单色阶调，而不是简单的平均值。',
      },
      {
        question: '为什么文件刚载入时饱和度默认是 +25%？',
        answer:
          '从 +25% 开始，是为了在照片出现的第一时间就展示轻微的鲜艳度提升。如果您更喜欢从中性状态上下调节，随时点击原始（0%）或重置链接即可。',
      },
      {
        question: '提色时如何避免人像看起来发橙或像霓虹色？',
        answer:
          '拍人时保持在 +15% 到 +35% 之间，并切换到分屏对比标签，擦除比较原始肤色与提色后的画布。全屏对比也能让您在导出前近距离检查脸颊、嘴唇和产品标签。',
      },
      {
        question: '给本来就是单色或灰色的照片提高饱和度会怎样？',
        answer:
          '红、绿、蓝数值相等的像素正好位于亮度轴上，提高饱和度无法凭空创造不存在的色彩。但在棕褐色或暖调黑白图片上，正向饱和度会强化原有的色调倾向。',
      },
      {
        question: '饱和度编辑器支持透明 PNG 图标和 WebP 贴纸吗？',
        answer:
          '支持。像素调整只改变 RGB 色彩强度，不触碰 Alpha 透明通道。保持原始格式，或在输出格式中选择 PNG、WebP，即可干净地保留透明背景。',
      },
      {
        question: '把降低饱和度后的贴纸导出为 JPG，透明部分会怎样？',
        answer:
          '由于 JPG 不支持 Alpha 透明，透明像素会在 JPEG 编码前自动压平到纯白（#FFFFFF）画布上。如果需要保留透明，请选择 PNG 或 WebP。',
      },
      {
        question: '支持哪些上传格式，文件大小上限是多少？',
        answer:
          '可以上传 JPG、PNG、WebP、HEIC/HEIF、GIF、BMP 和 SVG 图片，单文件最大 20MB。动态 GIF 会把初始帧载入画布进行编辑，并导出为静态图片。',
      },
      {
        question: '预览清晰度与下载文件的分辨率有区别吗？',
        answer:
          '交互画布预览时最长边最多 1000px，让滑块调节感觉顺滑无延迟。导出时则按文件的原始宽高进行全分辨率画布处理。',
      },
      {
        question: '什么时候该用低调（-40%），而不是灰度（-100%）？',
        answer:
          '低调（-40%）能让过于明亮的霓虹灯、杂乱的房间背景或刺眼的产品灯光柔和下来，同时保留微妙的色彩线索。适合安静的博客主图或带文字的背景。',
      },
      {
        question: '可以直接从剪贴板粘贴图片到饱和度工具吗？',
        answer:
          '可以。把任意图片或截图复制到剪贴板，在上传提示界面按 Ctrl+V（Mac 上为 Cmd+V），图片会立即在编辑器中打开，等待调色。',
      },
      {
        question: '导出的文件名如何区分编辑后的照片与原图？',
        answer:
          '导出时会自动在整理后的原始文件名后加上 _saturation，例如 sunset_saturation.jpg。设备上的源图片保持原样。',
      },
      {
        question: '保存为原始格式、JPG 或 WebP 时，画质如何设置？',
        answer:
          'JPG 与 WebP 导出默认画质为 90%，下载前可在 10% 到 100% 之间调节。选择 PNG 时画质滑块会隐藏，因为 PNG 始终无损导出。',
      },
      {
        question: '上传的照片会被传到云端 GPU 或第三方服务器吗？',
        answer:
          '绝不会。所有像素计算都在本地浏览器标签页内、在您自己的设备硬件上执行。图片数据、预设或文件名都不会通过网络发送。',
      },
      {
        question: '在这里编辑饱和度会删除 EXIF GPS 或相机元数据吗？',
        answer:
          '会。绘制到 HTML5 画布并写入新的图片文件后，原始 EXIF 头信息（如相机序列号、GPS 位置标签）会被省略。这有助于保持分享的社交照片在隐私方面干净无痕。',
      },
      {
        question: '不重新加载照片，如何只重置饱和度滑块？',
        answer:
          '点击饱和度控制面板右上角的重置按钮，滑块会立即回到 0%。也可以点击滑块下方的原始（0%）快捷预设按钮，无需重新上传文件。',
      },
      {
        question: '用超饱和（+90%）提亮风景的绿叶与天空效果干净吗？',
        answer:
          '超饱和（+90%）会把色度差异平滑地加倍，直至 RGB 通道上限（0–255），呈现出戏剧性的旅行海报与产品效果。请在分屏对比中留意明亮的红色与蓝色，确保花瓣或织物纹理不会裁切。',
      },
      {
        question: '可以把彩色 PNG 图表调淡色彩，同时转为轻量 WebP 吗？',
        answer:
          '可以。设置好想要的饱和度，在输出格式中选择 WEBP，把画质调到 80%–90%。点击下载已编辑图片，一步即可生成色彩平衡的紧凑 WebP。',
      },
      {
        question: '页面加载后可以离线使用吗？在移动触屏上表现如何？',
        answer:
          '可以。滑块、预设按钮和分屏对比滑块在 iOS Safari 与 Android Chrome 的触屏手势下都能顺滑响应。由于处理完全不需要服务器请求，即使移动网络很慢，编辑也能正常进行。',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: '图片滤镜',
    shortDescription: '应用灰度、棕褐、复古、暖色、冷色和黑白预设，可调强度。',
    category: 'crop-edit',
    seoTitle: '在线图片滤镜免费 – 复古、棕褐与黑白',
    seoDescription:
      '使用免费的在线图片滤镜快速美化照片，包含复古、棕褐、黑白、暖色、冷色与哑光褪色等风格。在浏览器内调节滤镜强度，以全分辨率导出。11 种预设均可实时缩略图预览，支持 JPG、PNG 与 WebP，无水印。无需注册或安装，支持移动端与桌面端，随时随地免费使用。全部处理均在本地完成，照片不会上传，安全又私密。',
    h1: '免费在线图片滤镜',
    subtitle:
      '适合创作者、博主和想让日常快照呈现统一美感的任何人，这些免费在线图片滤镜提供 11 种精选色彩风格，均以实时缩略图呈现。用滤镜强度滑块平滑混合任意滤镜，直接在浏览器内保存全分辨率副本。',
    howToSteps: [
      {
        title: '拖放或选择图片',
        description:
          '上传任意 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 照片（单文件最大 20MB），或从磁盘选择文件，或按 Ctrl+V 直接粘贴。',
      },
      {
        title: '浏览实时滤镜缩略图',
        description:
          '查看由 12 张卡片组成的滤镜预设网格，展示原始图片加上 11 种风格化效果的真实迷你预览。',
      },
      {
        title: '选择一种预设风格',
        description:
          '点击灰度、棕褐、复古、暖色、冷色、高对比、哑光褪色、戏剧、黑白、黄金时刻或反色，将其应用到主画布。',
      },
      {
        title: '用滤镜强度混合效果',
        description:
          '将滤镜强度滑块在 0% 到 100% 之间拖动，把强烈的风格柔化为淡淡的色彩（或点击重置回到原始图片）。',
      },
      {
        title: '按住查看原图或打开对比窗口',
        description:
          '按住按住查看原图可即时闪现对比，或点击对比打开带交互式分屏滑块的检查窗口。',
      },
      {
        title: '选择输出格式并下载',
        description:
          '选择原始格式、JPG、PNG 或 WebP，必要时调节画质（10%–100%），然后点击下载滤镜图片。',
      },
    ],
    features: [
      { title: '11 种以上精选滤镜预设', description: '包括灰度、棕褐、复古、暖色、冷色、高对比、哑光褪色、戏剧、黑白、黄金时刻与反色。' },
      { title: '平滑强度滑块', description: '在 0% 到 100% 之间平滑混合任意滤镜，不会被生硬的默认值束缚。' },
      { title: '实时缩略图条', description: '选择前即可预览每种滤镜在您的实际照片上的效果。' },
      { title: '100% 本地画布', description: '在浏览器内运行，可离线使用，零服务器上传。' },
    ],
    faqs: [
      {
        question: '在线图片滤镜网格中可以预览哪 11 种滤镜风格？',
        answer:
          '除原始图片外，网格会为灰度、棕褐、复古、暖色、冷色、高对比、哑光褪色、戏剧、黑白、黄金时刻和反色生成实时缩略图。每个缩略图都直接由您上传的照片渲染，而非示例图标。',
      },
      {
        question: '滤镜强度滑块设在 0% 到 100% 之间时如何工作？',
        answer:
          '把滤镜强度设到 100% 以下时，滤镜处理后的 RGB 像素值会线性地向原始像素混合回去。例如把复古或黄金时刻设为 45%，能在不压过自然肤色的前提下呈现轻柔的胶片感。',
      },
      {
        question: '为什么刚拖入照片时工具会自动以 100% 强度选中复古？',
        answer:
          '默认以全强度选中复古，是为了让您在上传后立即在主画布上看到完成的效果。只需点击滤镜预设中的其他色块，或点击重置，即可回到原始图片。',
      },
      {
        question: '灰度滤镜与黑白滤镜有什么区别？',
        answer:
          '灰度按自然亮度权重把色彩转为平衡的黑白阶调，不改变对比度。黑白则在灰度转换的基础上再加 1.65 倍的陡峭对比度提升，暗部更紧实、高光更明亮，呈现电影感。',
      },
      {
        question: '棕褐、复古、哑光褪色和黄金时刻在视觉上有什么不同？',
        answer:
          '棕褐把整张图片变成经典的单色棕调；复古把暖棕褐色混入原始色彩，呈现淡淡的褪色暖意；哑光褪色把深黑提亮为柔和的石板灰；黄金时刻则强化暖红与暖黄，同时让阴影偏冷。',
      },
      {
        question: '按住查看原图按钮如何加快编辑？',
        answer:
          '用鼠标或手指按住按住查看原图，画布会临时回到未编辑的照片并显示原始标签。松开后立即恢复滤镜预览，可在毫秒间进行对比。',
      },
      {
        question: '保存前也可以查看并排分屏对比吗？',
        answer:
          '可以。点击按住查看原图旁边的对比按钮，即可打开完整的滤镜对比窗口，显示原始与滤镜处理后的字节大小，以及交互式分屏擦除滑块。',
      },
      {
        question: '下载的图片会和预设缩略图一样以低尺寸处理吗？',
        answer:
          '不会。预设网格为即时预览使用 120px 的小缩略图，主工作区为保证响应速度限制在 1000px。点击下载滤镜图片时，会在 HTML5 画布上按原始像素分辨率完整处理。',
      },
      {
        question: '这些照片滤镜支持哪些文件格式和最大尺寸？',
        answer:
          '可以上传 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、GIF、BMP 和 SVG 文件，单次上传最大 20MB。支持的输出为原始格式、JPG、PNG 和 WebP。',
      },
      {
        question: '对 PNG 标志应用暖色、冷色或反色时，透明区域会怎样？',
        answer:
          '所有像素滤镜计算只改变红、绿、蓝通道，不触碰 Alpha 透明度。保持原始格式、PNG 或 WebP 输出即可保留透明背景；选择 JPG 会把透明区域填充为纯白。',
      },
      {
        question: '反色滤镜最适合什么用途？',
        answer:
          '反色把每个 RGB 通道用 255 相减，生成图片精确的彩色负片。开发者用它把深色模式的图表反转为适合白色文档的版本，摄影师用它预览扫描的胶片底片。',
      },
      {
        question: '滤镜效果在 Chrome、Firefox 和 iPhone Safari 上显示一致吗？',
        answer:
          '一致。全部 11 种预设都在 JavaScript 的 ImageData 像素循环中直接计算，并不依赖 CSS 的 ctx.filter 字符串。因此在 iOS Safari、Android Chrome 和桌面浏览器上色彩完全相同。',
      },
      {
        question: '可以在同一张图片上叠加冷色加哑光褪色两种滤镜吗？',
        answer:
          '每个预设都直接从干净的原始图片单次计算，因此点击新的色块会干净地切换预设，不会降低画质。如需组合两种色调，先下载第一张滤镜处理后的 PNG，再拖回来进行第二次处理。',
      },
      {
        question: '导出文件名如何标注我用了哪种滤镜？',
        answer:
          '导出时会在整理后的基础文件名后加上预设 ID，例如 photo_golden-hour.jpg 或 photo_noir.webp。这样把两三种效果导出到同一文件夹也容易区分。',
      },
      {
        question: '上传照片应用滤镜会发送到外部服务器吗？',
        answer:
          '不会。缩略图、实时画布预览和最终导出全部在浏览器标签页内存内完成。照片不会传输到远程服务器，也不会存入云端日志。',
      },
      {
        question: '可以在从剪贴板粘贴的截图上使用冷色或高对比滤镜吗？',
        answer:
          '可以。在上传区按 Ctrl+V（Mac 上为 Cmd+V），即可立即载入复制的截图。高对比与黑白滤镜对提亮文档扫描件上模糊的文字尤其有效。',
      },
      {
        question: '上传动态 GIF 到图片滤镜工具会发生什么？',
        answer:
          'HTML5 画布会提取 GIF 的第一帧用于预览缩略图，并导出一张静态滤镜图片。本工具不对多帧动态 GIF 进行滤镜处理。',
      },
      {
        question: '导出滤镜处理后的 WebP 或 JPG 时，画质如何设置？',
        answer:
          '默认 90% 的设置能在不产生大文件的前提下，干净地保留细腻的胶片颗粒与哑光阴影。如需为进一步编辑做无损保存，请在输出格式中选择 PNG。',
      },
      {
        question: '应用滤镜会删除相机 EXIF 与 GPS 标签吗？',
        answer:
          '会。把滤镜处理后的像素绘制到新的 HTML5 画布上，会生成一张没有任何 EXIF 头信息的干净新图片。相机型号标签、时间戳和嵌入的 GPS 坐标会在下载时自动排除。',
      },
      {
        question: '下载滤镜照片后，如何快速换另一张照片？',
        answer:
          '点击滤镜预览面板右上角的垃圾桶图标，即可清除当前图片并返回拖放区。所有预览内存会立即释放，为下一张照片做好准备。',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: '图片添加背景',
    shortDescription: '将透明或带框图片置于纯色、渐变或模糊背景上。',
    category: 'create',
    seoTitle: '在线给图片添加背景免费 – 纯色、渐变与模糊',
    seoDescription:
      '在线免费给图片文件或透明 PNG 添加背景，可选纯色、双色渐变或模糊背景。以 1:1、16:9 或 4:5 画框导出，全部在浏览器内处理。支持图片缩放、圆角与投影调节，支持 JPG、PNG、WebP 与 HEIC，无水印。无需注册或安装，支持移动端与桌面端，随时随地免费使用，全部处理均在本地完成，安全又私密。',
    h1: '在线给图片添加背景',
    subtitle:
      '专为电商卖家、标志设计师和社交媒体发布者打造，这款工具让给图片上传内容或透明 PNG 抠图添加背景变得轻而易举。选择纯色色块、带角度的双色渐变或模糊照片背景，并适配正方形、快拍或宽屏帖子的尺寸。',
    howToSteps: [
      {
        title: '上传照片或透明 PNG',
        description:
          '将任意 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 图片（单文件最大 20MB）拖到上传区，或从磁盘选择，或按 Ctrl+V 粘贴。',
      },
      {
        title: '选择纯色、渐变或模糊照片',
        description:
          '选择带取色器和 6 个快捷色块的纯色，带两种颜色和 0°–360° 角度滑块的渐变，或带 4–50px 模糊半径的模糊照片。',
      },
      {
        title: '选择画布宽高比',
        description:
          '在画布宽高比中点击原始、1:1 正方形、16:9 宽屏、9:16 竖版快拍或 4:5 社交人像。',
      },
      {
        title: '调节图片缩放、圆角与投影',
        description:
          '拖动图片缩放（40%–100%）滑块控制主体周围的留白，调节圆角（0%–30%）获得柔和边角，并开关图片后方投影。',
      },
      {
        title: '选择输出格式并下载',
        description:
          '查看预览下方显示的精确输出像素尺寸，选择 PNG、JPG 或 WEBP，然后点击下载图片。',
      },
    ],
    features: [
      { title: '3 种背景模式', description: '选择纯色、双色渐变或模糊照片背景，最适合填充竖图或横图的留白。' },
      { title: '社交与网页宽高比', description: '把任意照片装入原始、1:1 正方形、16:9 宽屏、9:16 快拍或 4:5 人像画框。' },
      { title: '前景缩放、圆角与阴影', description: '在前景图片周围留出呼吸空间、圆角，并添加柔和投影。' },
      { title: '零上传', description: '通过 HTML5 画布本地渲染，即刻下载。' },
    ],
    faqs: [
      {
        question: '什么时候该用模糊照片模式给图片添加背景？',
        answer:
          '模糊照片模式会用您自己的照片放大并柔和模糊后的副本，加上淡淡的 12% 深灰色调，填充竖版手机照片周围的空白画布边距。这样可以把 9:16 竖图放入 16:9 的 YouTube 横幅或 1:1 正方形中，既没有难看的黑边，也无需裁剪。',
      },
      {
        question: '如何在透明 PNG 抠图后面加一个干净的白色影棚背景？',
        answer:
          '在背景类型中选择纯色，点击 #ffffff 白色色块（或输入任意十六进制颜色），如需在产品周围留白可调节图片缩放。轻量上传到电商平台可导出 JPG，需要锐利边缘则导出 PNG。',
      },
      {
        question: '可以在标志或应用截图后面自定义多角度线性渐变吗？',
        answer:
          '可以。把背景类型切换为渐变，通过颜色输入选择颜色 1 与颜色 2，再将角度滑块从 0° 拖到 360°。非常适合把普通的软件截图变成落地页用的精致主视觉卡片。',
      },
      {
        question: '社交帖子有哪些画布宽高比预设？',
        answer:
          '可以在原始（匹配照片尺寸）、1:1（正方形帖子与产品卡片）和 16:9（YouTube 缩略图与横幅）之间即时切换。还内置竖版预设 9:16（快拍与 Reels）和 4:5（Instagram 信息流人像）。',
      },
      {
        question: '改变宽高比时，最终输出像素尺寸如何确定？',
        answer:
          '导出时，输出画布的最长边会设为照片原始的最长边，或至少 1200px，再根据所选比例干净地算出较短边。例如在 800×600 的图标上选择 1:1，会输出一张锐利的 1200×1200 图片。',
      },
      {
        question: '图片缩放如何影响前景图片周围的边距？',
        answer:
          '图片缩放（40% 到 100%，默认为 85%）决定前景照片在保持比例的前提下，可在背景画布内占据的最大区域占比。设为 100% 时，若比例匹配会填满到边缘；设为 60%–80% 则会露出充足的背景画框。',
      },
      {
        question: '圆角适用于透明 PNG，还是只适用于矩形照片？',
        answer:
          '圆角（0%–30%）用二次曲线边角裁剪矩形前景放置区，能干净地把矩形截图与照片的边角变圆。对于主体位于图片边缘内侧较远的透明抠图，提高圆角不会影响内部抠图，只会让投影框的边角变圆。',
      },
      {
        question: '图片后方投影对透明标志与实心照片的表现有何不同？',
        answer:
          '对实心照片或截图，它会在圆角前景卡片后方投射与画布尺寸成比例的淡淡柔和立体阴影。对透明 Alpha 图片，它会在裁剪框内使用淡淡的 1% 底色填充，让前景在明亮或渐变背景上干净凸显。',
      },
      {
        question: '添加背景可以导入哪些图片文件类型？',
        answer:
          '可以上传 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、GIF、BMP 和 SVG 图片，单文件最大 20MB。动态 GIF 会把初始帧作为前景图层绘制。',
      },
      {
        question: '这个工具会自动先去除现有照片的背景吗？',
        answer:
          '不会。本编辑器是把您上传的图片（透明抠图、标志或完整照片）放到新的背景画布上，而不是运行 AI 抠图分割。如果您有一张背景杂乱的照片需要先擦除，请先用我们的背景移除工具处理，再把透明 PNG 拖到这里。',
      },
      {
        question: '支持哪些输出格式，压缩画质是多少？',
        answer:
          '可以将完成的合成图导出为 PNG、JPG 或 WEBP，画布导出画质为 92%（PNG 为无损编码）。精确的输出像素尺寸会在下载前显示在预览画布正下方。',
      },
      {
        question: '纯色模式内置了哪些快捷颜色色块？',
        answer:
          '除完整的原生取色器外，还有 6 个可一键试用的色块：纯白（#ffffff）、深石板色（#0f172a）、品牌蓝（#2563eb）、翠绿（#10b981）、暖奶油色（#fef3c7）和柔和灰（#f1f5f9）。点任意色块可即时预览，之后还能用颜色输入微调。',
      },
      {
        question: '模糊照片模式的背景模糊半径调节有多平滑？',
        answer:
          '背景模糊半径可在 4px（轻微柔化的背景纹理）到 50px（奶油般失焦的环境色）之间调节。模糊半径会动态缩放，以匹配全分辨率导出尺寸。',
      },
      {
        question: '可以直接从剪贴板粘贴截图，放在渐变背景上吗？',
        answer:
          '可以。复制截图或图片，在上传区按 Ctrl+V（Mac 上为 Cmd+V），即可直接载入背景画布。渐变背景搭配 85% 缩放、轻微圆角与投影，能让文档截图格外醒目。',
      },
      {
        question: '上传的标志、未发布的界面样机或个人肖像会被发送到服务器吗？',
        answer:
          '不会。背景生成、模糊滤镜、阴影与文件编码全部在浏览器内使用 HTML5 画布本地执行。没有任何内容通过互联网传输，也不会远程保留。',
      },
      {
        question: '带背景下载的文件如何命名？',
        answer:
          '导出的文件会保留整理后的基础文件名，并加上 _background 与所选格式的扩展名，例如 product-cutout_background.png 或 banner_background.webp。磁盘上的原始图片保持原样。',
      },
      {
        question: '带背景导出会删除相机照片的 EXIF 位置元数据吗？',
        answer:
          '会。把图层合成到新的 HTML5 画布并编码为新图片时，原始 EXIF 头信息会被自动排除。GPS 坐标、相机序列号与拍摄时间戳都不会带入下载文件。',
      },
      {
        question: '可以在小图标或 SVG 图片上预览模糊照片模式吗？',
        answer:
          '可以。自包含的内联 SVG 标志或小 PNG 图片会缩放到封面背景上，并在清晰的矢量前景后方获得平滑的高斯或多遍模糊。想把锐利的矢量边缘柔化为柔和的环境光晕时，可选择 25–45px 的模糊半径。',
      },
      {
        question: '为什么模糊照片模式会在模糊背景上加一层淡淡的色调？',
        answer:
          '在绘制前景主体之前，会直接在模糊背景层上涂一层 12% 不透明度的淡淡深石板色遮罩。这层微妙的对比面纱能让明亮边缘、白色标签与透明抠图在明亮天空或繁忙图案前保持可读。',
      },
      {
        question: '如何更换前景照片，同时保留我喜欢的设置？',
        answer:
          '点击背景预览面板右上角的更换图片，即可清除当前画布并上传另一张素材。由于本工具在桌面与移动浏览器上原生运行，切换图片只需片刻。',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: '图片分割工具',
    shortDescription: '将图片按 N×M 网格或条带分割，并打包为 ZIP 下载。',
    category: 'create',
    seoTitle: '在线图片分割器免费 – 网格切片与 ZIP 下载',
    seoDescription:
      '使用免费的在线图片分割器，把照片切成 N×M 网格切片、横向条带或竖向轮播条带。实时查看切割线，以 ZIP 文件下载。最多可切 10×10 个切片，全部在浏览器内处理，支持 JPG、PNG 与 WebP，无水印。无需注册或安装，支持移动端与桌面端，随时随地免费使用。全部处理均在本地完成，照片不会上传，安全又私密。',
    h1: '在线图片分割器',
    subtitle:
      '专为 Instagram 网格规划者、界面设计师和印刷制作者打造，这款浏览器图片分割器可把宽幅全景图或正方形照片精确切成最多 10×10 的切片或条带。实时查看带编号的切割线，把每个全分辨率切片单独保存，或一次打包成 ZIP 下载。',
    howToSteps: [
      {
        title: '拖入要切割的图片',
        description:
          '上传任意 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 照片（单文件最大 20MB），或按 Ctrl+V 粘贴。上传后会自动生成初始 3×3 分割切片。',
      },
      {
        title: '查看带编号的切割线预览',
        description:
          '检查左侧照片上叠加的虚线网格，在最终导出前确认精确的带编号切片边界（从 1 到 N）。',
      },
      {
        title: '选择分割布局或快捷预设',
        description:
          '选择网格（N×M）、横向条带或竖向条带，输入行数与列数（1 到 10），或点击 2×2、3×3 Instagram、1×3 轮播或 4×1 条带。',
      },
      {
        title: '选择输出格式与切片画质',
        description:
          '选择原始格式、JPG、PNG 或 WEBP，非 PNG 输出可调节切片画质（10%–100%，默认 92%）。',
      },
      {
        title: '生成全分辨率切片',
        description:
          '每次更新行数、列数或格式设置后，点击切分为 N 个切片，即可按精确的全分辨率像素边界重新切割所有切片。',
      },
      {
        title: '单独保存或打包 ZIP',
        description:
          '在下方任意带编号的行·列切片卡片上点击下载，或点击全部下载切片（ZIP），把整个带编号的网格一起下载。',
      },
    ],
    features: [
      { title: '灵活的网格与条带模式', description: '可切为自定义行 × 列网格、横向条带或竖向切片。' },
      { title: '实时切割线预览', description: '切割前即可在图片上看到带编号的切片边界。' },
      { title: '即时切片预览与 ZIP', description: '检查每个生成的切片，并以行列清晰命名的方式打包成一个 ZIP 下载。' },
      { title: '全分辨率切割', description: '每个切片都从全分辨率原始画布上干净切取。' },
    ],
    faqs: [
      {
        question: '图片分割器如何干净地制作 3×3 Instagram 个人主页网格？',
        answer:
          '点击 3×3 Instagram 预设按钮（或在网格模式下设置 3 行 3 列），再点击切分为 9 个切片。每个切片会按从左上第 1 行第 1 列到右下第 3 行第 3 列的顺序编号导出，因此按倒序上传即可拼成无缝的个人主页拼图。',
      },
      {
        question: '一次切割的最大网格尺寸是多少？',
        answer:
          '行数（横向切割）与列数（纵向切割）均可输入 1 到 10，最少切 2 片，最多可切 10×10 网格共 100 个切片。由于每个切片都按 Math.round 在原始图片上按比例取整像素边界，相邻切片边缘对齐，零缺失像素。',
      },
      {
        question: '横向条带与竖向条带和网格（N×M）模式有什么区别？',
        answer:
          '横向条带把列数锁定为 1，切出自上而下堆叠的全宽横向横幅，适合长网页截图或高信息图的分段。竖向条带把行数锁定为 1，把宽幅全景图并排切成无缝的 Instagram 或领英可滑动轮播幻灯片。',
      },
      {
        question: '包含哪些一键分割预设？',
        answer:
          '数字输入框正下方有 4 个预设按钮：2×2（4 个象限）、3×3 Instagram（9 个网格正方形）、1×3 轮播（3 条竖向滑动条带）和 4×1 条带（4 条横向条带）。点击任意预设，实时切割线预览会立即更新。',
      },
      {
        question: '生成的切片是缩小过的，还是按原始像素尺寸完整切割？',
        answer:
          '每个切片都在 HTML5 画布上直接从源图片的完整像素宽高切取，不做缩放。例如把 3000×1000 的全景图切成 1×3 轮播条带，会得到 3 张清晰的 1000×1000 切片。',
      },
      {
        question: '如果图片宽高不能被行数或列数整除会怎样？',
        answer:
          '切割坐标按 Math.round 在整个宽高上按比例计算，相邻切片共享精确的整数像素边界，既无缝隙也不重叠。切分奇数时（如 1000px 分 3 列：333、334、333），个别切片可能相差 1 像素。',
      },
      {
        question: '下载 ZIP 后还需要记住哪个切片放在哪里吗？',
        answer:
          '不需要。每个切片都会显示行列徽章（如 R1·C2），预览卡片下方还标注精确的像素尺寸。ZIP 压缩包内，文件名按阅读顺序为 <base>_r<行>_c<列>.<扩展名>，例如 panorama_r1_c1.jpg、panorama_r1_c2.jpg。',
      },
      {
        question: '更改行数、列数或格式后，生成的切片会自动更新吗？',
        answer:
          '首次上传文件时，切片会按当前布局设置自动生成。编辑行数、列数或输出格式后，切割线预览会立即更新，点击切分为 N 个切片即可重新生成可下载的切片卡片与 ZIP。',
      },
      {
        question: '图片分割器支持哪些输入格式？',
        answer:
          '可以上传 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、GIF、BMP 和 SVG 图片，单文件最大 20MB。在输出格式中选择原始格式可保留源格式（HEIC、SVG、BMP 会干净地转为标准 PNG 或 JPG）。',
      },
      {
        question: '切割透明 PNG 精灵图会保留透明背景吗？',
        answer:
          '会。切割透明 PNG 或 WebP 素材时，若输出格式为原始格式、PNG 或 WEBP，Alpha 透明度会完整保留。如果明确把输出格式切换为 JPG，切片画布会把透明部分填充为纯白（#FFFFFF）。',
      },
      {
        question: '可以粘贴长截图并切成可打印的几部分吗？',
        answer:
          '可以。在上传区按 Ctrl+V（Mac 上为 Cmd+V），即可把剪贴板截图直接放入分割器。选择横向条带并设置 3–6 行，就能把高聊天记录或网页截图切成易于管理的页面。',
      },
      {
        question: 'PNG 切片会显示切片画质滑块吗？',
        answer:
          '不会。PNG 切片始终无损编码，因此切片画质（10%–100%，默认 92%）只在解析后的格式为 JPG 或 WebP 时自动显示。这样能保证精灵图、界面样机与文字切割的边缘清晰。',
      },
      {
        question: '批量 ZIP 下载如何命名？',
        answer:
          '点击全部下载切片（ZIP），会把所有生成的切片打包进一个名为 <base>_<行>x<列>_tiles.zip 的压缩包，例如 hero_3x3_tiles.zip。也可以通过每张卡片上的下载按钮单独下载单个切片。',
      },
      {
        question: '网格切割期间照片会上传到外部服务器吗？',
        answer:
          '不会。切割计算、画布切割、切片预览与 ZIP 压缩全部在本地浏览器内存内完成。您的私人作品、图表与个人照片都不会离开设备。',
      },
      {
        question: '切割会删除 EXIF 相机标签与 GPS 位置元数据吗？',
        answer:
          '会。把矩形子区域切割到新的 HTML5 画布切片上，会生成不含 EXIF 头信息的干净图片文件。因此原始照片的相机详情与 GPS 坐标都不会复制到各个切片中。',
      },
      {
        question: '上传动态 GIF 切成网格切片会发生什么？',
        answer:
          'HTML5 画布会提取 GIF 的第一帧，切成所选输出格式的静态切片。不支持在保持动画的前提下切割多帧动态 GIF。',
      },
      {
        question: '为什么源照片不是正方形时，3×3 切片的宽高比会略有不同？',
        answer:
          '分割器按源图片现有的宽高按比例切割，不拉伸也不裁剪边缘。如果想要 Instagram 网格用的 1:1 正方形切片，请先在我们的图片裁剪工具中把图片裁为 1:1，再切 3×3。',
      },
      {
        question: '下载分割网格后如何更换图片？',
        answer:
          '点击切割线预览卡片右上角的更换图片，即可从内存中释放现有切片链接并载入新图片。无需重新加载页面。',
      },
      {
        question: '游戏开发者可以用这个工具切割图标表或图块集吗？',
        answer:
          '可以。按统一行列排布的精灵图只要设置匹配的行 × 列数量并保持 PNG 输出，就能精确切割。每个图标都会按行列坐标整齐地保存在 ZIP 内。',
      },
      {
        question: '图片分割器在 iPhone、iPad 与安卓手机上运行可靠吗？',
        answer:
          '可靠。响应式网格、数字行列输入与本地 ZIP 打包都直接在 iOS Safari 与 Android Chrome 中运行。在超高像素照片上做 10×10 大网格切割时，桌面或现代移动浏览器速度最快。',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: '图片 DPI 修改器',
    shortDescription: '无损修改 JPEG/PNG 的 DPI 元数据（72/150/300/自定义）。',
    category: 'developer',
    seoTitle: '在线图片 DPI 修改器免费 – 无损转换为 300 DPI',
    seoDescription:
      '使用免费的在线图片 DPI 修改器，更新 JPEG 的 JFIF/EXIF 与 PNG 的 pHYs 打印密度标签。可在浏览器内无损设置 72、150、300、600 或自定义 DPI，像素数据丝毫不动，并通过验证回读确认结果。无需注册或安装，支持移动端与桌面端，文件不会上传到任何服务器，安全又私密。',
    h1: '免费图片 DPI 修改器',
    subtitle:
      '专为设计师、印刷店、作者和为印刷平台准备文件的学生打造，这款无损图片 DPI 修改器可以更新 JPEG 与 PNG 的分辨率头信息，而不触碰像素数据。支持 72、96、150、300、600 或自定义 DPI 批量切换，并通过验证回读确认。',
    howToSteps: [
      {
        title: '先选择或调整目标 DPI（随时可改）',
        description:
          '点击预设——72 DPI（屏幕）、96 DPI（Windows）、150 DPI（草稿印刷）、300 DPI（高质量印刷）或 600 DPI（存档），或输入 1 到 2400 之间的任意自定义 DPI。',
      },
      {
        title: '上传一张或多张图片',
        description:
          '将 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 文件（单文件最大 20MB）拖入上传区（或按 Ctrl+V 粘贴）。文件会立即按您选择的 DPI 处理。',
      },
      {
        title: '查看修改前、验证后 DPI 与处理方式',
        description:
          '每张卡片显示原始 DPI 与验证后的输出 DPI，并附带徽章，确认是无损 JPEG 头更新、无损 PNG pHYs 更新，还是已转换为带 pHYs DPI 的 PNG。',
      },
      {
        title: '需要时动态更改队列中文件的 DPI',
        description:
          '点击另一个 DPI 预设，或输入新的自定义 DPI 并点击应用 DPI，队列中的每个文件都会自动重新处理。',
      },
      {
        title: '单独下载或打包 ZIP 下载',
        description:
          '点击单个结果卡片上的下载（文件名为 <base>_<dpi>dpi.<扩展名>），或在两个以上文件就绪时点击全部下载（ZIP）。',
      },
    ],
    features: [
      { title: '真正的无损 JPEG 与 PNG 头编辑', description: '更新 JPEG 的 JFIF APP0/EXIF 密度与 PNG 的 pHYs 区块（含有效 CRC32），不触碰图片像素。' },
      { title: '修改前后验证回读', description: '自动重新解析输出文件，让您看到文件中存储的确切验证后 DPI。' },
      { title: '批量 DPI 处理', description: '一次更新数十张可打印图片，并导出为 ZIP 压缩包。' },
      { title: 'WebP/HEIC 备用方案', description: '非 DPI 格式可干净地转为无损 PNG，并嵌入精确的 pHYs DPI 区块。' },
    ],
    faqs: [
      {
        question: '这款图片 DPI 修改器如何在不损失画质的情况下编辑 JPEG 与 PNG 文件？',
        answer:
          '它不是在画布上解码并重新压缩像素，而是直接修补二进制元数据段：更新或插入 JPEG 的 JFIF APP0 与 EXIF IFD0 分辨率标签，并在 PNG 中写入带有效 CRC32 校验和的 pHYs 区块。每个视觉像素与压缩块都 100% 保持原样。',
      },
      {
        question: '更改 DPI 会改变像素宽高或物理打印尺寸吗？',
        answer:
          '更改 DPI 时像素尺寸完全不变——例如 3000×2400 的照片仍是 3000×2400px。变化的是打印密度头信息，它告诉 Photoshop、InDesign 或印刷平台等发布应用：300 DPI 时按 10×8 英寸解读，而不是 72 DPI 时的 41.6×33.3 英寸。',
      },
      {
        question: '为什么上传的相机照片或截图经常显示修改前：未设置？',
        answer:
          '许多智能手机导出、截图与网页优化工具会剥离 JFIF/EXIF 分辨率字段，或省略可选的 PNG pHYs 区块，导致查看器只能假定 72 或 96 DPI 的默认值。本工具会注入标准头信息，让印刷验证器可靠地检测到 300 DPI。',
      },
      {
        question: '验证后 DPI 徽章如何确认更新确实生效？',
        answer:
          '构建更新后的二进制 Blob 后，工具会用二进制头解析器从头重新解析输出文件，读取新嵌入的 X/Y 密度。这能保证下载的文件通过自动化印刷平台与桌面检查器的核查。',
      },
      {
        question: '上传 WebP、HEIC、BMP、GIF 或 SVG 文件会怎样？',
        answer:
          '缺乏跨软件标准 DPI 头信息的格式（如 WebP 或 BMP）会在本地解码，并干净地转为无损 PNG，同时嵌入精确的 pHYs DPI 区块。这些卡片上会显示已转换为带 pHYs DPI 的 PNG 徽章。',
      },
      {
        question: '有哪些 DPI 预设，自定义 DPI 接受什么范围？',
        answer:
          '5 个快捷预设覆盖常见标准：72 DPI（屏幕）、96 DPI（Windows）、150 DPI（草稿印刷）、300 DPI（高质量印刷）和 600 DPI（存档）。自定义 DPI 可输入 1 到 2400 DPI 之间的任意整数。',
      },
      {
        question: '更新 JPEG 的 DPI 会保留相机现有的 EXIF 标签或 ICC 配置文件吗？',
        answer:
          '会。无损 JPEG 段复制器在更新 JFIF APP0 密度与 EXIF 的 XResolution/YResolution/ResolutionUnit（若存在 APP1 EXIF 段）时，会保留色彩配置文件、相机标签与图片扫描数据。如果原本没有 JFIF 头信息，它会在 SOI 后立即插入一个干净的 18 字节 APP0 JFIF 段。',
      },
      {
        question: '为什么 PNG 的 DPI 有时转换后回读为 299 或 300 DPI？',
        answer:
          '官方 PNG pHYs 规范以每米像素数而非每英寸点数存储分辨率，300 DPI 会换算为 11811 像素/米。把每米像素数换算回英寸时的四舍五入，几乎在每个预设值上都能干净地得到精确的 300 DPI。',
      },
      {
        question: '把低分辨率 400×400 网页缩略图改为 300 DPI，打印会变清晰吗？',
        answer:
          '不会。更新 DPI 只改变元数据指令，不改变像素数量——400×400px 的文件在 300 DPI 下只有 1.33×1.33 英寸才能清晰打印。要在 300 DPI 下干净覆盖更大的纸张尺寸，源作品需要更大的像素尺寸。',
      },
      {
        question: '可以批量把多张印刷素材更新为 300 DPI 并导出一个 ZIP 吗？',
        answer:
          '可以。拖入任意数量的 JPG 或 PNG 文件（单文件最大 20MB），它们会按顺序全部处理为您选择的 DPI。两个以上文件完成后会出现批量就绪栏，点击全部下载（ZIP）按钮即可生成 images_<dpi>dpi_compressmypic.zip。',
      },
      {
        question: '文件已按 300 DPI 处理后，还能改主意重新应用 600 DPI 吗？',
        answer:
          '可以。点击另一个目标 DPI 预设按钮，会立即从原始上传文件重新处理队列中的每个文件，而不会叠加编辑。如果在自定义 DPI 中输入数字，点击应用 DPI 即可按该自定义密度刷新所有项目。',
      },
      {
        question: '设置 300 DPI 会让 JPEG 或 PNG 文件显著变大吗？',
        answer:
          '不会。添加或修补 JFIF APP0 头（18 字节）或 PNG pHYs 区块（21 字节），对原生 JPEG 与 PNG 的总文件体积影响最多只有几十字节。只有非 DPI 格式转为无损 PNG 时，文件大小才会变化。',
      },
      {
        question: '机密校样、书籍封面或证件扫描件会被发送到外部服务器吗？',
        answer:
          '不会。二进制字节解析、CRC32 校验和计算与头修补全部在浏览器 ArrayBuffer 内本地执行。您的文件不会离开电脑或手机。',
      },
      {
        question: '为什么 Amazon KDP 或学术期刊等出版平台会拒绝 72 DPI 的文件？',
        answer:
          '许多自动化印刷预检平台会检查图片的 JFIF 或 PNG pHYs 分辨率标签，即使像素尺寸充足，也会拒绝低于 300 DPI 的投稿。把头标签更新为 300 DPI，即可在不重新压缩作品的前提下满足预检要求。',
      },
      {
        question: '单独保存或打包 ZIP 时，输出文件如何命名？',
        answer:
          '每个更新后的文件都会保留整理后的基础名称，并加上 _<目标>dpi 与扩展名，例如 poster_300dpi.jpg 或 diagram_600dpi.png。这样可以避免覆盖磁盘上的原始文件。',
      },
      {
        question: 'DPI 修改器支持原本使用每厘米点数而非每英寸点数的 JPEG 吗？',
        answer:
          '支持。读取器在显示修改前 DPI 时，能识别 JFIF 与 EXIF 标签中的 unit=1（每英寸点数）与 unit=2（每厘米点数，需乘以 2.54）。写入输出头信息时，会干净地统一为英寸单位（DPI），以保证通用兼容。',
      },
      {
        question: '可以删除或剥离 DPI 标签，而不是更改它们吗？',
        answer:
          '本工具始终嵌入或更新您选择的目标 DPI 头信息，以符合印刷或显示标准。如果想为隐私擦除所有 JFIF、EXIF 与 PNG 区块元数据，请改用我们的删除图片元数据工具处理文件。',
      },
      {
        question: '上传损坏的 JPEG 或不支持的格式会发生什么？',
        answer:
          '队列中的每个文件都在独立的错误处理程序内运行，因此单个无法读取的图片绝不会中断其余批次。失败的项目会显示清晰的内联红色提示，有效文件仍会正常完成并打包进 ZIP 下载。',
      },
      {
        question: '可以粘贴剪贴板截图并立即盖上 300 DPI 吗？',
        answer:
          '可以。在上传区按 Ctrl+V（Mac 上为 Cmd+V），剪贴板 PNG 会直接进入处理器，瞬间无损写入有效的 300 DPI pHYs 区块。',
      },
      {
        question: '这款无损 DPI 编辑器支持 Windows、Mac、Linux 与移动浏览器吗？',
        answer:
          '支持。标准的浏览器 ArrayBuffer 与 DataView API 在桌面 Chrome、Firefox、Edge、Safari 以及移动浏览器上都能干净运行。不需要桌面软件、插件或服务器上传。',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: '图片转 Base64',
    shortDescription: '将任意图片编码为 Base64 数据 URL、HTML img 或 CSS 代码片段。',
    category: 'developer',
    seoTitle: '在线图片转 Base64 免费 – 数据 URL、HTML 与 CSS',
    seoDescription:
      '使用免费的在线图片转 Base64 转换器，直接在浏览器内编码图片。生成数据 URL、原始 Base64 字符串、HTML img 标签与 CSS url() 代码片段，支持 JPG、PNG、WebP 与 SVG，复制与保存只需一键，无水印。无需注册或安装，支持移动端与桌面端，随时随地免费使用，安全又私密。',
    h1: '图片转 Base64 转换器',
    subtitle:
      '专为前端开发者、邮件模板编写者与技术作者打造，这款本地图片转 Base64 转换器一步即可把二进制图片素材变成可复制的文本字符串。在数据 URL、原始 Base64、HTML img 与 CSS url() 标签之间即时切换，无需上传专有图标。',
    howToSteps: [
      {
        title: '拖放、选择或粘贴图片',
        description:
          '将任意 JPG、PNG、WebP、SVG、GIF、BMP、ICO 或 AVIF 文件（单文件最大 15MB）上传到拖放区，或按 Ctrl+V 粘贴剪贴板图片。',
      },
      {
        title: '查看文件大小与字符开销',
        description:
          '查看顶部摘要卡片，显示图片缩略图、原始字节大小、自然尺寸（适用时）、精确的输出字符数与 Base64 开销百分比。',
      },
      {
        title: '切换 4 个开发者输出标签',
        description:
          '点击数据 URL、原始 Base64、HTML <img> 或 CSS url()，为 JSON 负载、HTML 内联图片或样式表格式化编码字符串。',
      },
      {
        title: '复制到剪贴板或保存为 .txt 文件',
        description:
          '点击复制输出（或点击代码框内全选）复制字符串，或点击保存 .TXT 以下载 <文件名>_<标签>.txt。',
      },
      {
        title: '点击编码另一张以更换文件',
        description:
          '准备好编码下一个图标或精灵图时，点击编码另一张即可清除输出并释放本地对象内存。',
      },
    ],
    features: [
      { title: '4 种开发者输出格式', description: '自动生成数据 URL、原始 Base64、HTML <img> 与 CSS 背景图片代码片段。' },
      { title: '精确的字节与字符指标', description: '立即比较原始二进制文件大小与编码后的 Base64 字符串长度。' },
      { title: '一键复制与 TXT 下载', description: '可靠地把超长 Base64 字符串复制到剪贴板，或保存为纯文本文件。' },
      { title: '100% 本地 FileReader 编码', description: '无需上传——编码在浏览器标签页内原生完成。' },
    ],
    faqs: [
      {
        question: '为什么图片转 Base64 转换器会让输出增大约 33%？',
        answer:
          'Base64 用 4 个可打印 ASCII 字符（每个 6 位）表示每 3 个二进制字节（24 位），末尾最多再加两个等号填充。因此 30KB 的图片编码后总会变成约 40KB 的 Base64 文本，摘要栏会自动跟踪这一变化。',
      },
      {
        question: '编码后可以生成哪四种输出格式？',
        answer:
          '代码框正上方有 4 个标签：数据 URL（完整 data:image/...;base64,... 链接）、原始 Base64（去掉前缀的纯负载）、HTML <img>（带清理后的 alt 与宽高属性的现成标签）和 CSS url()（background-image: url("..."); 规则）。',
      },
      {
        question: '编码会改变图片画质、剥离 SVG 代码或压平动态 GIF 吗？',
        answer:
          '不会。编码器通过浏览器 FileReader.readAsDataURL 直接读取原始二进制文件，不经过画布绘制。每个原始字节、矢量 SVG 的 XML 元素、ICO 帧与 GIF 动画帧都 100% 逐字节保持原样。',
      },
      {
        question: '支持哪些图片文件格式，上传大小上限是多少？',
        answer:
          '可以编码 JPG、PNG、WebP、SVG、GIF、BMP、ICO 收藏夹图标与 AVIF 图片，单文件最大 15MB。把 Base64 输入限制在 15MB 以内，可防止数兆字节的文本字符串冻结剪贴板或文本框渲染。',
      },
      {
        question: '开发者什么时候该内联 Base64 数据 URL，什么时候该引用常规图片文件？',
        answer:
          '把几 KB 以下的微小界面图标、加载动画、收藏夹图标或邮件签名徽章内联，可以省去额外的 HTTP 往返，并且在独立 HTML 文档中干净可用。对于大型主视觉照片，常规 WebP 或 JPG 图片链接更小，还能利用浏览器 HTTP 缓存。',
      },
      {
        question: '为什么 HTML <img> 标签会自动包含宽高属性？',
        answer:
          '浏览器加载临时对象预览并读取 naturalWidth 与 naturalHeight 后，这些像素尺寸会与根据基础文件名生成的 alt 标签一起填入 HTML 代码片段。包含尺寸有助于防止网页出现累积布局偏移（CLS）。',
      },
      {
        question: '复制长 Base64 输出不方便时，可以下载吗？',
        answer:
          '可以。点击复制输出旁边的保存 .TXT，即可把当前标签（数据 URL、原始 Base64、HTML 或 CSS）中显示的确切文本下载为 <base>_<tab>.txt。在 VS Code 或终端脚本中打开超长负载会轻松得多。',
      },
      {
        question: '点击复制输出时浏览器阻止了剪贴板权限怎么办？',
        answer:
          '如果 navigator.clipboard.writeText 被浏览器隐私设置阻止，页面内会出现提示，让您直接从代码框复制。点击深色等宽文本框或用 Tab 键定位后会自动选中整个字符串，再按 Ctrl+C / Cmd+C 即可干净复制全部内容。',
      },
      {
        question: '发送 API 的 JSON 负载时，原始 Base64 与数据 URL 有什么区别？',
        answer:
          '数据 URL 会在前面加上 data:<mime>;base64,，浏览器可以直接在 src 属性或 CSS url() 规则中渲染。API、移动数据库与服务器编码器通常只需要原始 Base64——切换到原始 Base64 标签会自动去掉头部。',
      },
      {
        question: '专有界面图标、机密图表或客户素材会被上传到任何地方吗？',
        answer:
          '绝不会。FileReader 严格在本地客户端浏览器内存内读取字节。图片文件或 Base64 字符串都不会传输到远程服务器。',
      },
      {
        question: '可以干净地编码 SVG 标志或 favicon.ico 文件吗？',
        answer:
          '可以。.svg 与 .ico 扩展名都在上传筛选器中明确支持，编码时会带上相应的 data:image/svg+xml 或 image/x-icon MIME 前缀。您也可以把文件放入转换器，再用我们的 Base64 转图片解码器往返验证。',
      },
      {
        question: '为什么 HTML <img> 与 CSS url() 标签的开销百分比略高？',
        answer:
          '除 33% 的 Base64 编码膨胀与数据 URL 的 MIME 头外，HTML 与 CSS 标签还包裹了额外的标记字符，如 <img src="..." alt="..." />。摘要计数器会在切换标签时实时重新计算字符数。',
      },
      {
        question: '可以直接从剪贴板粘贴截图快速获取数据 URL 吗？',
        answer:
          '可以。在上传界面任意位置按 Ctrl+V（Mac 上为 Cmd+V），即可直接捕获剪贴板中复制的图片。工具会即时把它编码为数据 URL、原始 Base64、HTML 与 CSS 格式，随时一键复制。',
      },
      {
        question: '原始 Base64 会保留标准的 + 与 / 字符及 = 填充吗？',
        answer:
          '会。浏览器 FileReader 输出的是标准 RFC 4648 Base64 字符串，使用 +、/ 与尾部 = 填充字符，而不是 URL 安全的 base64url 替代字符。这能保证与 HTML 数据 URI、MIME 邮件负载及标准后端解码器直接兼容。',
      },
      {
        question: '为什么邮件客户端有时会屏蔽内联 Base64 图片？',
        answer:
          '一些网页邮箱与企业垃圾邮件过滤器出于安全原因，会剥离 HTML 邮件中的 data:image 链接，即使浏览器能正常显示。Base64 最适合用于网页应用、单文件 HTML 文档、React/CSS 包与 JSON/SVG 模板。',
      },
      {
        question: 'Base64 编码前如何保留原始相机元数据或先行剥离？',
        answer:
          '由于本工具编码的是精确的原始字节，JPEG 内现有的 EXIF 元数据会保留在 Base64 字符串中。如果想要更小、无元数据的 Base64 字符串，请先用我们的删除图片元数据工具处理照片再编码。',
      },
      {
        question: '转换为 Base64 前应该先缩小大 PNG 或 JPG 吗？',
        answer:
          '应该。由于 Base64 会膨胀约 33%，先把 300KB 的 PNG 压缩为 40KB 的 WebP，就能在样式表或代码包中节省约 350KB 的 Base64 文本膨胀。处理前请先使用我们的图片压缩器或网页图片优化器，能省下不少体积。',
      },
      {
        question: '为什么某些不常见的 ICO 或损坏文件的尺寸会缺失？',
        answer:
          '如果浏览器无法把不寻常的多帧 ICO 或特殊头信息解码为 HTMLImageElement 预览，摘要中会干净地省略尺寸，而原始 Base64 编码仍会成功。标准 PNG、JPG、WebP、GIF、SVG、BMP 与 AVIF 都会显示精确的宽 × 高像素数。',
      },
      {
        question: '复制第一个代码片段后，如何编码另一张图片？',
        answer:
          '点击摘要卡片右上角的编码另一张，即可重置输出标签并清空文本框。它会立即释放临时预览内存，并恢复拖放区以便处理下一个素材。',
      },
      {
        question: 'Base64 编码器支持移动版 Safari 与 Chrome 浏览器吗？',
        answer:
          '支持。内置的 HTML5 FileReader 与剪贴板 API 在 iOS Safari、Android Chrome、Windows、macOS 与 Linux 上都运行可靠。由于编码在浏览器内存内本地执行，即使使用蜂窝数据也不会有任何服务器延迟。',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/base64-to-image',
    name: 'Base64 转图片',
    shortDescription: '将 Base64 数据 URL 或原始 Base64 字符串解码还原为图片。',
    category: 'developer',
    seoTitle: '在线 Base64 转图片解码器免费 – 预览与下载',
    seoDescription:
      '使用免费的在线 Base64 转图片解码器，把编码字符串还原为可查看的图片。自动检测 PNG、JPG、WebP、GIF 或 SVG 字节，并在本地保存。支持数据 URL 与原始 Base64，全部在浏览器内完成，安全私密。无需注册或安装，支持移动端与桌面端，随时随地免费使用，全部处理均在本地完成，安全又私密。',
    h1: 'Base64 转图片解码器',
    subtitle:
      '专为调试 API 负载的网页工程师、检查内联图标的邮件营销人员与 QA 测试人员打造，这款浏览器 Base64 转图片解码器可把数据 URL 与原始 Base64 字符串还原为可下载文件。在设备上私密查看检测到的 MIME 格式、像素尺寸与字节大小。',
    howToSteps: [
      {
        title: '粘贴 Base64 字符串或数据 URL',
        description:
          '在粘贴 Base64 字符串或数据 URL 输入框中，粘贴完整 data:image/...;base64,... 字符串或原始 Base64 字符。',
      },
      {
        title: '等待自动解码（或点击解码图片）',
        description:
          '解码器会在粘贴时立即解析空白字符、URL 安全字符与文件头魔数以验证图片（或在点击解码图片时执行）。',
      },
      {
        title: '检查预览、格式、大小与尺寸',
        description:
          '在透明棋盘格上查看解码后的图片，同时留意图片已成功解码徽章、检测到的格式、二进制大小与宽 × 高像素尺寸。',
      },
      {
        title: '选择下载格式',
        description:
          '选择原始格式以原样保存精确的解码二进制文件，或选择 PNG、JPG、WEBP 在导出时转换图片。',
      },
      {
        title: '下载解码后的图片文件',
        description:
          '点击下载图片文件，把 decoded_image.<扩展名> 直接保存到设备，或点击输入框上方的清空以测试下一个负载。',
      },
    ],
    features: [
      { title: '自动识别缺失的数据 URL 前缀', description: '即使是原始 Base64，也能自动识别 PNG、JPEG、GIF、WebP、BMP 与 SVG 的文件头魔数。' },
      { title: '即时验证与错误提示', description: '清晰捕获无效 Base64 字符或损坏的文件头。' },
      { title: '可选格式转换', description: '可下载精确的解码二进制文件，或重新导出为 PNG、JPG、WebP。' },
      { title: '私密的浏览器内解码', description: '内部令牌、邮件素材与专有界面图标都安全无忧。' },
    ],
    faqs: [
      {
        question: '这款 Base64 转图片解码器能读取省略 data:image/ 前缀的字符串吗？',
        answer:
          '可以。如果粘贴的原始 Base64 没有数据 URL 头，解码器会检查解码后二进制流开头的魔数签名，自动检测 PNG、JPEG、GIF、WebP、BMP、ICO 与内联 XML/SVG 标记。',
      },
      {
        question: '能处理 URL 安全 Base64 变体与意外的换行吗？',
        answer:
          '可以。调用 atob() 之前，解码器会自动剥离空白字符、空格与换行，并把 URL 安全的 - 与 _ 字符转回标准的 + 与 /。这样从 JSON 日志、终端输出或 JWT 负载中粘贴换行字符串也能干净处理。',
      },
      {
        question: '粘贴损坏或非图片的 Base64 负载会发生什么？',
        answer:
          '无效 Base64 字符会立即触发验证提示；有效 Base64 字节但无法形成浏览器可读图片时，会明确提示这些字节无法渲染。页面不会崩溃或卡住。',
      },
      {
        question: '字符串解码后提供哪些下载格式选项？',
        answer:
          '保存前可以选择原始格式、PNG、JPG 或 WEBP。选择原始格式会把精确的原始二进制字节原样保存为 decoded_image.<扩展名>，而 PNG、JPG 或 WEBP 会把解码后的图片重新渲染到 HTML5 画布上。',
      },
      {
        question: '把解码后的 PNG 或 SVG 重新导出为 JPG 时，透明区域会怎样？',
        answer:
          '在下载格式中选择 JPG 时，会在编码前自动用干净的纯白（#FFFFFF）背景填充画布，画质为 92%。保持原始格式、PNG 或 WEBP，则能在棋盘格预览上完整保留透明度。',
      },
      {
        question: '设为原始格式时，解码器会保留动态 GIF 与矢量 SVG 吗？',
        answer:
          '会。选择原始格式会直接从解码后的字节数组构建 Blob 并下载，SVG 矢量路径与多帧 GIF 动画都原样保留。注意：把下载格式切换为 PNG、JPG 或 WEBP 时，会通过画布把 SVG 或 GIF 首帧栅格化。',
      },
      {
        question: '解码后的图片预览旁会显示哪些指标？',
        answer:
          '验证通过后，右侧摘要面板会显示绿色的图片已成功解码状态徽章，以及检测到的格式（如 PNG、JPEG 或 SVG+XML）。下方可以直接查看精确的解码二进制大小（KB/MB）与像素自然尺寸。',
      },
      {
        question: '为什么不带 ;base64, 的 data:image/svg+xml 字符串会显示编码错误？',
        answer:
          '非 Base64 的数据 URI（如百分比编码的 SVG 字符串 data:image/svg+xml,%3Csvg...）是纯文本，而非 Base64 负载。本工具明确只验证标准 Base64 负载或带 ;base64, 的数据 URL，因此无效输入会清晰报错。',
      },
      {
        question: '在这里解码内部 API 响应、二维码令牌或私人图标有风险吗？',
        answer:
          '没有。字符串清理、atob() 字节解码、MIME 签名嗅探与图片渲染全部严格在浏览器标签页内存内运行。编码字符串不会通过网络传输，也不会触碰远程日志。',
      },
      {
        question: '棋盘格预览如何帮助检查解码后的图标？',
        answer:
          '预览框后方会渲染淡淡的浅灰棋盘格图案，让透明抠图、白色界面图标与柔和阴影立即凸显出来。没有棋盘格的话，白色透明标志会与空白面板融为一体、难以察觉。',
      },
      {
        question: '为什么解码后的二进制文件比粘贴的 Base64 文本小？',
        answer:
          'Base64 文本用每个 ASCII 字符 6 位来表示二进制数据，会使体积膨胀约 33%。转回原始图片字节后，即恢复为紧凑的原始二进制文件大小。',
      },
      {
        question: '粘贴前可以在字符串外包 HTML 引号或 CSS url("...") 吗？',
        answer:
          '为保证验证干净，请只粘贴数据 URL（data:image/...;base64,...）或 Base64 字符本身，不要包 HTML 标签或 CSS 引号。去掉周围的引号，才能让验证器读取纯 Base64。',
      },
      {
        question: '如何把解码后的旧版 BMP 或 ICO 收藏夹图标 Base64 字符串转为现代 WebP？',
        answer:
          '粘贴原始 Base64 或数据 URL，确认预览渲染干净，在下载格式选择器中点击 WEBP，再点击下载图片文件。画布导出器会立即输出一张压缩的 WebP 图片。',
      },
      {
        question: '解码多兆字节的 Base64 字符串有多快？',
        answer:
          '小图标与几 MB 以内的典型网页照片在本地 JavaScript 中几毫秒即可解码。粘贴超大字符串（几十 MB 文本）时，速度主要取决于浏览器的文本框粘贴速度。',
      },
      {
        question: '可以把 SVG+XML 的 Base64 字符串解码为清晰的栅格 PNG 文件吗？',
        answer:
          '可以。粘贴 Base64 编码的 SVG 数据 URL 或原始 SVG Base64 标记，解码器会通过 <svg 或 <?xml 文件头自动识别。然后把下载格式从原始格式切换为 PNG，即可按自然尺寸把矢量图栅格化到画布上。',
      },
      {
        question: '为什么输出文件总是下载为 decoded_image.<扩展名>？',
        answer:
          '标准 Base64 字符串与数据 URL 只编码原始图片字节与 MIME 类型，不携带原始文件名。为让所有输入的下载名称可预测，导出器统一把保存的文件命名为 decoded_image 加检测到或所选格式的扩展名。',
      },
      {
        question: '如何快速清空超长 Base64 字符串并检查下一个？',
        answer:
          '点击粘贴 Base64 字符串卡片右上角的清空，一键擦除文本框。这样会立即移除预览面板，并从浏览器内存中撤销临时对象链接。',
      },
      {
        question: '粘贴 Base64 字符串后会自动解码，无需点击解码图片吗？',
        answer:
          '会。文本一进入或改变输入框，解码就会自动触发，有效负载会在几毫秒内预览。如需手动重新运行验证，解码图片按钮随时可用。',
      },
      {
        question: '以后如何把下载的图片重新编码为 HTML 或 CSS 数据 URL？',
        answer:
          '滚动到下方的相关工具区，打开图片转 Base64 即可干净地切换方向。它能把任意 JPG、PNG、WebP、SVG、GIF、BMP 或 ICO 图片转回数据 URL、原始 Base64、HTML <img> 或 CSS url() 代码片段。',
      },
      {
        question: 'Base64 转图片解码器可以离线使用或在智能手机上使用吗？',
        answer:
          '可以。每项字符串检查、字节解码与画布格式转换都在内置浏览器 API 内运行，零网络请求。页面加载后，在 iOS Safari、Android Chrome、Windows、macOS 与 Linux 上都能顺畅运行。',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: '图片配色提取器',
    shortDescription: '从任意照片中提取主色，附带 HEX、RGB、HSL 色值并支持导出。',
    category: 'developer',
    seoTitle: '图片配色提取器在线免费｜提取图片主色调',
    seoDescription:
      '免费在线图片配色提取器，上传照片即可提取 3 至 12 种主色，查看每种颜色的占比，复制 HEX、RGB、HSL 色值，导出 CSS 变量、JSON 数据或 PNG 色卡，全程在浏览器本地处理，无需注册，支持 JPG、PNG、WebP 与 HEIC，单张图片最大 20MB，色板数量可调，支持一键复制与分享。',
    h1: '图片配色提取器',
    subtitle:
      '使用基于中位切分量化算法的浏览器内置图片配色提取器，发现任意照片、插画或界面截图的核心配色方案。它专为界面设计师、品牌策划人员和前端开发者打造，可生成 3 至 12 个带有占比的均衡色板，支持一键复制 HEX、RGB、HSL 色值，导出 CSS 自定义属性、JSON 数据和可分享的 PNG 色卡，全部在您的设备本地完成。',
    howToSteps: [
      {
        title: '上传源图片',
        description:
          '将任意 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 文件（单张最大 20MB）拖放到上传区域，也可以直接从剪贴板粘贴。',
      },
      {
        title: '设置颜色数量（3–12 种）',
        description:
          '拖动「颜色数量」滑块，在 3 种极简强调色到 12 种细致色板之间切换，配色会立即重新计算。',
      },
      {
        title: '查看按比例显示的颜色条',
        description:
          '查看色板卡片上方的横向按比例颜色条，了解每种颜色在整张图片中的视觉占比。',
      },
      {
        title: '复制色板的 HEX、RGB 或 HSL 色值',
        description:
          '点击色板卡片中的任意 HEX、RGB 或 HSL 标签，即可将该颜色值直接复制到剪贴板。',
      },
      {
        title: '导出 CSS 变量或 JSON',
        description:
          '点击「复制 CSS 变量」可获得可直接粘贴的 :root 代码块，点击「复制 JSON」可获得包含色板代码、占比和源图片尺寸的结构化数据。',
      },
      {
        title: '下载配色 PNG 卡片',
        description:
          '点击「下载配色 PNG」，即可保存一张简洁的白色展示卡片，上面同时呈现预览照片和提取出的色块。',
      },
    ],
    features: [
      { title: '中位切分颜色量化', description: '在毫秒内将图片中数百万个像素归纳为均衡、有代表性的主色色板。' },
      { title: 'HEX、RGB、HSL 与占比', description: '每个色板都显示精确的颜色代码，以及该颜色在图片中所占的比例。' },
      { title: '开发者导出与 PNG 卡片', description: '可导出为 CSS 自定义属性、JSON、Tailwind 代码片段，或可分享的 PNG 配色卡片。' },
      { title: '100% 浏览器本地处理', description: '在 HTML5 Canvas 上本地分析像素，无需上传图片。' },
    ],
    faqs: [
      {
        question: '中位切分量化是如何从照片中生成配色的？',
        answer:
          '中位切分会把采样像素归入三维 RGB 颜色桶，反复沿最宽的颜色通道按中位数切分，直到剩下指定数量的颜色桶。每个颜色桶按其中像素的数量加权平均，得到一个代表色板，从而呈现和谐的主色，而不是杂乱的离群像素。',
      },
      {
        question: '用这个图片配色提取器最多可以提取多少种颜色？',
        answer:
          '通过「颜色数量」滑块，可以提取 3 至 12 种主色。选择 3 至 5 种适合极简的品牌主题，选择 8 至 12 种则能看到细腻的阴影色调和次要强调色。',
      },
      {
        question: '每张颜色卡片上的百分比代表什么？',
        answer:
          '每个百分比表示在量化过程中分配给该色板的不透明采样像素所占的比例。按比例颜色条会按这些精确百分比直接放大显示每种颜色的色段。',
      },
      {
        question: '可以把提取出的全部色板一次性复制为 CSS 自定义属性吗？',
        answer:
          '可以。点击「复制 CSS 变量」，即可复制包含 --palette-1 至 --palette-N 全部十六进制颜色的完整 :root 代码块，直接粘贴到样式表中使用，之后也可以按设计规范重命名变量。',
      },
      {
        question: '点击「复制 JSON」会包含哪些数据？',
        answer:
          '「复制 JSON」会输出一个对象数组，包含每个色板的序号、十六进制值、RGB、HSL 和占比。开发者可以直接把这份数据用于主题配置文件、设计文档或自动化样式脚本。',
      },
      {
        question: '「下载配色 PNG」会生成什么？',
        answer:
          '「下载配色 PNG」会生成一张 1000 像素宽的简洁白色展示卡片，源图片居中显示在顶部，下方是标注了十六进制代码和占比的圆角色块。它会以 <文件名>_palette.png 的名称在本地下载，无水印。',
      },
      {
        question: '为什么配色提取器的结果和取色器不一样？',
        answer:
          '取色器只采样光标下方的一个像素，而配色提取会把整张图片归纳为整体的主色系。因此它更适合快速搭建协调统一的配色方案，而不是去匹配某一个微小的点。',
      },
      {
        question: '从 PNG 提取颜色时，透明背景如何处理？',
        answer:
          '透明度低于 50% 的像素会在量化开始前被跳过。这样可以防止标志或产品抠图周围的大片透明画布把配色拉向白色或黑色。',
      },
      {
        question: '提取器真的会检查一张 20MB 大照片的每一个像素吗？',
        answer:
          '为了让提取在浏览器中保持流畅，图片会在运行中位切分之前，先临时缩放到离屏画布上，最长边不超过 140 像素。在这个尺寸下，主色的比例几乎不变，因此配色几乎可以瞬间算出，不会卡住标签页。',
      },
      {
        question: '支持哪些图片文件格式和大小？',
        answer:
          '可以上传 JPG、PNG、WebP、iPhone 的 HEIC/HEIF、GIF、BMP 和 SVG 文件，单张最大 20MB。多帧动态 GIF 会从第一帧干净地提取颜色。',
      },
      {
        question: '为什么我的 12 色配色里出现了两个相似的色调？',
        answer:
          '日落、肤色或影棚背景这类包含大面积渐变的照片，有数百万像素聚集在色彩空间的同一区域。当色板数量较多（如 10 或 12 种）时，中位切分会自然地把这个密集区域细分为相近的高光和中间色。',
      },
      {
        question: '品牌方案、客户情绪板或截图会被发送到服务器吗？',
        answer:
          '不会。像素采样、颜色聚类、代码整理和 PNG 卡片渲染全部只在本地 HTML5 Canvas 的内存中进行，您的创意素材始终只留在自己的设备上。',
      },
      {
        question: '复制 CSS 之后，不用重新上传就能改色板数量吗？',
        answer:
          '可以。移动「颜色数量」滑块后，缓存的图片数据会在内存中即时重新聚类，导出前可以并排预览 4 色、6 色或 10 色的效果。',
      },
      {
        question: '为什么 4 色配色里看不到一个小小的霓虹强调色？',
        answer:
          '因为中位切分优先处理像素面积最大的颜色区域，一张大面积深色截图里只占 1% 的小强调色，在色板数量较少时会被并入更大的颜色桶。把颜色数量提高到 10 或 12，通常就能让小的强调色显现出来。',
      },
      {
        question: '在非常深或非常亮的颜色上，色板文字标签还看得清吗？',
        answer:
          '看得清。无论是页面上的实时卡片，还是导出的配色 PNG 卡片，都会根据每种颜色的感知亮度自动计算白色或深色文字，保证十六进制代码始终清晰易读。',
      },
      {
        question: '可以直接从剪贴板粘贴截图进行提取吗？',
        answer:
          '可以。在页面任意位置按 Windows/Linux 的 Ctrl+V 或 macOS 的 Cmd+V，即可把复制的截图或设计稿直接加载到颜色分析工具中。',
      },
      {
        question: 'HSL 和 RGB 的写法与 CSS 标准的吻合程度如何？',
        answer:
          '每个色板都会输出符合 CSS 标准的 rgb(r, g, b) 和 hsl(h, s%, l%) 写法，以及大写的六位 #RRGGBB 十六进制代码。复制的任何字符串都可以直接粘贴到 CSS、Figma 或浏览器开发者工具中使用。',
      },
      {
        question: '可以从 SVG 矢量标志中提取配色吗？',
        answer:
          '可以。拖放最大 20MB 的 SVG 文件后，浏览器会在统计颜色之前先把它干净地栅格化到 Canvas 上，因此矢量图也能即时得到色板和占比。',
      },
      {
        question: '上传一张新图片后，旧的色板会自动清除吗？',
        answer:
          '会的。拖放替换图片或点击「新图片」，都会干净地清除之前的配色状态，并对新图片重新量化。换照片时无需刷新页面。',
      },
      {
        question: '这个配色提取器能在 iOS、安卓和桌面浏览器上使用吗？',
        answer:
          '可以。响应式色板网格、滑块和复制按钮在手机 Safari、安卓 Chrome 和现代桌面浏览器中都能流畅运行，无需注册或安装。',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'GIF 动图制作器',
    shortDescription: '用 JPG、PNG 和 WebP 制作动态 GIF，可调节帧间隔与循环次数。',
    category: 'create',
    seoTitle: 'GIF 动图制作器在线免费｜图片制作动图',
    seoDescription:
      '免费在线 GIF 动图制作器，在浏览器中制作流畅动图：组合 JPG、PNG、WebP 与 HEIC 帧，设置每帧间隔，选择循环次数，无需注册，没有水印，单张图片最大 20MB，手机上也能顺畅使用，还能自由排序与复制帧，支持帧排序、复制与删除，自定义循环与输出尺寸，导出无水印动图，适合社交分享与教程制作。',
    h1: '免费 GIF 动图制作器',
    subtitle:
      '使用这款在浏览器中干净运行的免费 GIF 动图制作器，把照片、产品多角度图和界面操作步骤帧变成循环播放的动图。它非常适合社交创作者、教程作者和营销人员，支持重新排序、复制帧、单独设置每帧时长、选择循环次数、自定义帧适配方式和尺寸，并能私密编码无水印的 GIF89a 文件。',
    howToSteps: [
      {
        title: '上传两张或更多帧图片',
        description:
          '将 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 文件（单张最大 20MB）拖放到帧放置区，之后也可以用「添加帧」继续追加。',
      },
      {
        title: '重新排序、复制或删除帧',
        description:
          '拖动帧卡片上的手柄，或使用箭头按钮设置播放顺序，复制关键帧，或删除不需要的画面。',
      },
      {
        title: '设置整体速度和每帧延迟',
        description:
          '选择默认帧间隔滑块（50–3000 毫秒）或 1–10 FPS 预设，如有需要，还可以在单个帧上输入自定义延迟（毫秒）。',
      },
      {
        title: '设置循环方式和帧适配',
        description:
          '从「一直循环」「指定次数」（播放 2–50 次）或「仅播放一次」中选择，再配合背景底色选择「完整显示」或「铺满」适配方式。',
      },
      {
        title: '调整输出尺寸和调色板质量',
        description:
          '从 480 像素、640 像素、800 像素或「原始尺寸」预设中选择，也可以输入 16 至 2000 像素的宽高，并把调色板质量设为 10% 至 100%。',
      },
      {
        title: '生成并下载动态 GIF',
        description:
          '点击「生成动态 GIF」，即可通过实时播放预览效果，然后在本地编码并保存为 animated_compressmypic.gif。',
      },
    ],
    features: [
      { title: '真正的客户端 GIF89a 编码', description: '使用浏览器内置的快速颜色量化工具和 LZW GIF 编码器（按需延迟加载），没有任何外部接口调用或服务器上传。' },
      { title: '整体与单帧延迟', description: '以毫秒或 FPS 预设设置统一的帧速度，还可以单独覆盖关键帧的时长。' },
      { title: '灵活的循环与适配控制', description: '可选择无限循环、仅播放一次或精确的播放次数，帧适配还可选择「完整显示」或「铺满」。' },
      { title: '大文件体积提醒', description: '当编码后的 GIF 变得过重（超过 5–15MB）时会自动提醒，方便您为聊天应用优化尺寸或质量。' },
    ],
    faqs: [
      {
        question: '浏览器是如何在不上传的情况下把照片编码成动态 GIF 的？',
        answer:
          '点击「生成动态 GIF」后，页面会在浏览器标签页内直接延迟加载本地的 JavaScript GIF89a 编码器和颜色量化工具。每一帧都会按您选择的尺寸绘制到离屏画布上，并在本地用 LZW 压缩。',
      },
      {
        question: '实时播放预览和生成的 GIF 有什么区别？',
        answer:
          '编码前，左侧预览画布会按当前毫秒级延迟和适配设置实时播放您上传的图片，方便立即确认节奏。生成 GIF 后，这些设置会被固定为一份经过 256 色量化的真实 .gif 文件。',
      },
      {
        question: '可以让标题页或最后的行动号召帧停留更久吗？',
        answer:
          '可以。默认帧间隔设定整个序列的基础速度（50 毫秒至 3000 毫秒），而每张帧卡片都有一个可选的「延迟（毫秒）」输入框，接受 20 毫秒至 10000 毫秒，可以让特定幻灯片停留更久。',
      },
      {
        question: '1 FPS、2 FPS、5 FPS 和 10 FPS 快捷预设分别对应什么？',
        answer:
          '这些按钮会把每秒帧数换算为精确的毫秒间隔：1 FPS 对应 1000 毫秒，2 FPS 对应 500 毫秒，5 FPS 对应 200 毫秒，10 FPS 对应 100 毫秒。之后仍可以按 25 毫秒的步长微调滑块。',
      },
      {
        question: '完成的 GIF 有哪些循环设置？',
        answer:
          '在「循环方式」中选择「一直循环」可无限播放，选择「指定次数」可指定 2 至 50 次的播放次数，选择「仅播放一次」则会在最后一帧干净地停住。Netscape 扩展字节会根据您的选择自动写入。',
      },
      {
        question: '帧适配的「完整显示」和「铺满」该如何选择？',
        answer:
          '「完整显示」会把每张图片完整放进 GIF 帧内，多余的留白用背景底色填充。「铺满」会把每张照片略微放大，铺满整个画布，不留白边，超出边缘的部分会被裁剪。',
      },
      {
        question: '一张动图里图片宽高比不同，该怎么处理？',
        answer:
          '如果不想裁剪标志或竖版照片，就选「完整显示」，并把背景底色调整为与网站或深色模式背景一致。如果要把形状各异的随手照片拼成统一的满幅幻灯片，就选「铺满」。',
      },
      {
        question: '生成的 GIF 最小和最大像素尺寸是多少？',
        answer:
          '输出宽高可输入 16 像素至 2000 像素，快捷按钮有 480 像素、640 像素、800 像素和「原始尺寸」。按比例缩放某一边时，请保持「锁定比例」开启。',
      },
      {
        question: '为什么超过 5MB 或 15MB 会显示「GIF 过大提醒」？',
        answer:
          '因为 GIF 保存的是带 256 色限制的完整光栅帧，而不是现代视频的帧间压缩，所以宽幅高分辨率动图很容易变重。把宽度改为 480 像素或 640 像素，或降低调色板质量，都能大幅减轻文件体积，适合聊天和邮件应用。',
      },
      {
        question: '调色板质量滑块控制的是什么？',
        answer:
          '调色板质量（10% 至 100%，默认为 80%）控制量化工具在构建每个 256 色调色板时采样帧像素的精细程度。数值越高，颜色渐变保留得越平滑；数值越低，编码越快，文件也往往更小。',
      },
      {
        question: '在浏览器里做一张 GIF，组合多少张源帧比较合适？',
        answer:
          '帧队列没有严格的文件数量上限，不过在 480–800 像素宽时组合 2 至 40 帧，通常能在普通桌面和手机浏览器的内存中流畅运行。4K 图片的大集合可以按每张最大 20MB 分批添加。',
      },
      {
        question: '可以不重复上传同一文件就重复某一帧吗？',
        answer:
          '可以。点击任意帧卡片上的复制图标，即可把该幻灯片连同自定义延迟一起复制到原帧旁边，然后拖动或用箭头按钮把它移到时间轴的任意位置。',
      },
      {
        question: '必须一次全部上传，还是可以之后再添加帧？',
        answer:
          '随时都可以用帧标题栏里的「添加帧」按钮追加图片。当前的帧顺序、自定义延迟和输出尺寸在新帧追加后都会保持不变。',
      },
      {
        question: 'iPhone 的 HEIC 实况照片或连拍照片能用这个 GIF 制作器吗？',
        answer:
          '可以。选择多张最大 20MB 的 .heic 或 .heif 图片后，页面会在组装动图之前，通过 WebAssembly 在浏览器本地解码它们。',
      },
      {
        question: '生成 GIF 后再改设置会怎样？',
        answer:
          '点击完成 GIF 预览下方的「返回帧编辑器」，即可解锁时间轴和控制项。自由调整延迟、循环、尺寸或帧顺序，然后立即重新生成新文件。',
      },
      {
        question: '生成的 GIF 能干净地保留透明背景吗？',
        answer:
          '在 LZW 量化运行之前，每一帧都会干净地合成到您选择的背景底色上（默认为白色）。这样可以防止抗锯齿处理的 PNG 或 SVG 边缘出现生硬的黑色锯齿。',
      },
      {
        question: '上传 .gif 文件可以从已有 GIF 中提取单帧吗？',
        answer:
          '把 .gif 图片作为源帧拖放后，HTML5 Canvas 会像加载静帧照片一样把它的第一帧读入序列。如需重新编码已有动态 GIF，请使用图片分割工具或 GIF 压缩工具。',
      },
      {
        question: '下载的 GIF 上会加水印或推广结尾卡片吗？',
        answer:
          '绝不会。编码后的动态 GIF 只包含您选择的帧和设置，没有任何品牌标识、水印或使用限制。',
      },
      {
        question: '为什么编辑输出宽度时宽高比一直保持固定？',
        answer:
          '「锁定比例」默认开启，可防止帧按第一张幻灯片的尺寸被拉伸或压扁。如有需要，点击锁定开关即可独立输入自定义宽高。',
      },
      {
        question: '导出的 animated_compressmypic.gif 能在 Slack、Discord 和网站上播放吗？',
        answer:
          '可以。编码器输出的是带 Netscape 循环扩展的标准 GIF89a 二进制文件，因此在浏览器、聊天应用、博客和演示工具中都能广泛播放。',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: '图片拼图制作器',
    shortDescription: '把照片排成 2×2、3×3 网格或长条，拖动换位，支持导出。',
    category: 'create',
    seoTitle: '图片拼图制作器在线免费｜网格与长条拼图',
    seoDescription:
      '免费在线图片拼图制作器，在浏览器中制作照片网格：使用 2×2、3×3 或长条布局，拖动单元格换位，保存为 JPG 或 PNG，无需注册，没有水印，最高支持 4000 像素高清导出，手机上也能轻松制作，单元格可自由拖动换位，支持自定义间距、圆角与背景色，导出最高 4000 像素高清拼图，适合社交动态与家庭相册。',
    h1: '免费在线图片拼图制作器',
    subtitle:
      '使用这款直接在浏览器中运行的免费图片拼图制作器，拼出整齐的照片网格、前后对比长条和社交动态版式。它面向内容创作者、网店卖家和家庭用户，支持 2×2 和 3×3 网格以及竖向和横向长条，具备拖放换位、可调分割、圆角、自定义间距，以及最高 4000 像素、无水印的 JPG 或 PNG 导出。',
    howToSteps: [
      {
        title: '把照片上传到拼图工作室',
        description:
          '拖放 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 图片，单张最大 20MB；上传 5 张或更多会自动选择 3×3 网格，4 张或更少则选择 2×2 网格。',
      },
      {
        title: '选择网格或长条布局',
        description:
          '在「拼图布局」面板中自由切换 2×2 网格（4 格）、3×3 网格（9 格）、竖向长条或横向长条。',
      },
      {
        title: '重新排列或填满拼图格子',
        description:
          '把任意单元格拖到另一个单元格上即可换位，在触屏上依次点按两个格子，也可以使用左右箭头，或点击「添加照片」填满空格子。',
      },
      {
        title: '调整单元格比例、间距和圆角',
        description:
          '调整列分割、行分割或主图强调（或点击「等分单元格」重置），然后设置间距（0–80 像素）和单元格圆角（0–60 像素）。',
      },
      {
        title: '选择背景色、图片适配和输出尺寸',
        description:
          '选择「铺满」或「完整显示」的构图方式，挑选背景色色块或输入十六进制代码，再输入 200 至 4000 像素的尺寸（也可以使用 1200×1200、1920×1080 或 1080×1920 预设）。',
      },
      {
        title: '导出完成的拼图',
        description:
          '选择 JPG（带 10–100% 质量滑块）或 PNG（无损），点击「下载拼图」即可把全分辨率版式保存到本地。',
      },
    ],
    features: [
      { title: '4 种整洁的拼图布局', description: '可制作均衡的 2×2 方格、3×3 照片网格、竖向手机动态或宽幅横向对比长条。' },
      { title: '拖放换位单元格', description: '把任意照片单元格拖到另一个格子上即可立即换位，手机上点按两个单元格即可。' },
      { title: '自定义单元格比例与间距', description: '可精细调整列分割、行分割、主图强调、间距、圆角和背景色。' },
      { title: '高分辨率 JPG 与 PNG 导出', description: '直接在 HTML5 Canvas 上渲染最高 4000 像素的全分辨率拼图，零水印。' },
    ],
    faqs: [
      {
        question: '这个图片拼图制作器包含哪些布局？',
        answer:
          '可以在 2×2 网格（4 格）、3×3 网格（9 格）、竖向长条（自上而下的竖列）和横向长条（并排横行）之间即时切换。选择竖向或横向长条时，会自动设定方便的默认尺寸（1080×1920 或 1920×720），之后可以自由调整。',
      },
      {
        question: '在手机或平板上做拼图时，点按换位功能怎么用？',
        answer:
          '在拖动不方便的触屏上，只需点按「重新排列单元格」下方的第一个单元格进行高亮，再点按第二个格子，照片就会立即换位。每个格子下方还有左右箭头按钮。',
      },
      {
        question: '上传的照片少于 3×3 网格的格子数会怎样？',
        answer:
          '未填满的格子会在实时预览中显示为整洁的虚线「格子 N」占位符，方便您在添加剩余图片时查看版式。也可以直接点击空格子上的「+」按钮，或切换到 2×2 网格或长条布局来匹配实际图片数量。',
      },
      {
        question: '可以在网格或长条里把一张重点照片放得比其他照片大吗？',
        answer:
          '可以。在 2×2 网格中可以把列分割和行分割拖到 20% 至 80% 之间，在 3×3 网格中可以调整中间列和中间行的大小，在竖向或横向长条中可以把主图强调最高提升到 +100%。',
      },
      {
        question: '如何把不均匀的单元格滑块恢复为均匀网格？',
        answer:
          '点击「单元格比例与间距」部分的「等分单元格」按钮。它会一键把列分割、行分割和主图强调重置为均衡的等分状态。',
      },
      {
        question: '可以制作照片之间完全没有缝隙的无边框拼图吗？',
        answer:
          '可以。把间距和单元格圆角都降到 0 像素，相邻照片就会干净地边对边拼接，没有明显的接缝或圆角。',
      },
      {
        question: '什么时候该把图片适配从「铺满」切换为「完整显示」？',
        answer:
          '「铺满」会裁剪超出单元格宽高比的细微边缘，让每个矩形格子都铺满到边，非常适合统一的生活风网格。「完整显示」会把每张图片缩小到主体完整装进格子为止，空出的边距后方会显示背景色。',
      },
      {
        question: '单元格间距和圆角半径可以分别调整吗？',
        answer:
          '可以。间距可把外边距和沟槽宽度从 0 像素调到 80 像素，单元格圆角可把每个照片框的角从 0 像素平滑地圆角化到 60 像素。',
      },
      {
        question: '支持哪些快捷画布尺寸和预设比例？',
        answer:
          '可以为自定义印刷卡片或社交卡片输入每边 200 像素至 4000 像素的任意输出尺寸。还内置了 1200×1200 方形、1920×1080 横向和 1080×1920 动态尺寸的快捷按钮。',
      },
      {
        question: '默认显示哪些背景色预设？',
        answer:
          '有一键色块可选：纯白（#ffffff）、深石板色（#0f172a）和柔和中性灰（#f1f5f9）。旁边还有完整的原生取色器，需要精确的品牌十六进制值时可以使用。',
      },
      {
        question: '把 iPhone 的 HEIC、PNG 和 JPG 照片混在一起上传到一张拼图里可以吗？',
        answer:
          '可以。每张上传文件（包括 JPG、PNG、WebP、HEIC/HEIF、GIF、BMP 和 SVG，最大 20MB）都会在浏览器中私密解码，并绘制到同一张统一的 HTML5 Canvas 上。',
      },
      {
        question: '把透明 PNG 贴纸放进格子里，后面会显示什么？',
        answer:
          '每个格子在合成前景图片之前，都会先绘制在您选择的背景色之上。因此透明的 PNG 标志和抠图在白色、深石板色或自定义颜色上都能保持干净。',
      },
      {
        question: '完成的拼图应该保存为 JPG 还是 PNG（无损）？',
        answer:
          '用于 Instagram、WhatsApp 或邮件的轻量照片网格，请选择 85%–95% 质量的 JPG。如果组合的是清晰的界面截图、图表或文字图形，JPEG 压缩光晕会很显眼，这时请选择 PNG（无损）。',
      },
      {
        question: '导出的文件名能看出我用了哪些拼图设置吗？',
        answer:
          '每次下载的导出文件都会自动嵌入布局和像素尺寸，生成类似 collage_2x2_1200x1200.jpg 的名称。这种命名方式方便您整理多个宽高比版本，无需手动重命名。',
      },
      {
        question: '私人的家庭照片或客户的前后对比照会被上传到别处吗？',
        answer:
          '不会。图片解码、网格布局合成和高分辨率 Canvas 导出全部严格在浏览器标签页内进行，照片永远不会离开您的手机或电脑。',
      },
      {
        question: '拼图预览和 4000 像素的逐像素导出完全一致吗？',
        answer:
          '一致。实时舞台和最终导出使用完全相同的比例和圆角计算，间距和单元格圆角会随所选输出尺寸平滑缩放，因此导出的沟槽与所见效果一致。',
      },
      {
        question: '竖向或横向长条一次能放多少张照片？',
        answer:
          '竖向和横向长条根据加载的图片数量支持 2 至 6 个动态格子，方便干净地制作双图对比或多帧动态长条。',
      },
      {
        question: '可以只删除拼图里的一张照片而不从头开始吗？',
        answer:
          '可以。点击「重新排列单元格」下方任意格子卡片上的垃圾桶按钮，即可只删除那张照片，其他已上传图片、布局设置和自定义分割都保持不变。',
      },
      {
        question: '打印照片拼图时，最大可以导出到多少分辨率？',
        answer:
          '输出宽高都可以放大到 4000×4000 像素，呈现 1600 万像素的清晰细节。这个分辨率足以应对桌面照片打印、画册和高 DPI 幻灯片。',
      },
      {
        question: '制作或导出拼图的数量有限制吗？',
        answer:
          '没有。切换布局、调整颜色、导出拼图都可以无限次免费进行，没有账号、水印或每日导出上限。',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: '图片压缩到 50KB',
    shortDescription: '把 JPG、PNG 和 WebP 照片严格压缩到 50KB 以下，适用于表单提交。',
    category: 'compress',
    seoTitle: '图片压缩到 50KB 在线免费｜护照与表单适用',
    seoDescription:
      '免费在线把图片压缩到 50KB，适用于护照申请、签证表单和头像：浏览器内通过二分法搜索画质并智能缩放尺寸，全程本地安全处理，无需注册，支持最大 25MB 的 JPG、PNG、WebP 与 HEIC，可打包 ZIP 下载，对比视图可确认清晰度，支持批量处理与对比预览，文件绝不上传服务器，证件照提交更安心。',
    h1: '图片压缩到 50KB 在线',
    subtitle:
      '当您需要可靠地把图片压缩到 50KB 时，可以为护照照片、签证扫描件、手写签名和紧凑的个人头像准备符合严格门户限制的文件。它在浏览器中 100% 本地处理最大 25MB 的文件，结合二分法画质搜索与可选的像素缩放，敏感证件绝不会接触外部服务器。',
    howToSteps: [
      {
        title: '拖放图片或证件扫描件',
        description:
          '上传一张或多张 JPG、PNG、WebP 或 HEIC 文件，单张最大 25MB（也可以按 Ctrl+V 粘贴复制的照片）。',
      },
      {
        title: '选择输出格式（原图、JPG、WebP 或 PNG）',
        description:
          '针对严格的 50KB 照片限制请选择 JPG 或 WebP；针对较重的截图，请保持「原图」并开启 PNG 自动转换。',
      },
      {
        title: '确认缩放与自动转换开关',
        description:
          '高像素照片请保持智能尺寸缩放开启；如果门户要求精确的像素尺寸，请关闭它以保持尺寸不变。',
      },
      {
        title: '查看已验证的字节徽章和对比视图',
        description:
          '查看每张卡片上的绿色「低于 50KB」徽章，打开对比滑块，确认面部特征或签名线条仍然清晰易读。',
      },
      {
        title: '单独下载或打包 ZIP 下载',
        description:
          '逐个保存每个 <name>_50kb 文件；如果文件本身已经很小，请使用「保留原文件」；批量文件会打包进 compressmypic_50kb.zip。',
      },
    ],
    features: [
      { title: '二分法画质搜索 + 尺寸缩放', description: '先在原始像素下找到低于 50KB 的最高画质，如有需要再平滑缩小分辨率。' },
      { title: '诚实的结果报告', description: '绝不虚报输出大小——如果无损 PNG 或锁定分辨率无法压到 50KB 以下，会清楚说明原因。' },
      { title: '智能 PNG 转 WebP/JPG 备选', description: '可选择把较重的无损 PNG 转换为 WebP 或 JPG，在保持照片清晰的同时达到 50KB。' },
      { title: '私密的浏览器处理', description: '护照照片、证件照和个人表单永远不会离开您的设备。' },
    ],
    faqs: [
      {
        question: '哪些日常门户要求上传的图片严格低于 50KB？',
        answer:
          '政府签证申请、护照换发、公务员考试报名、大学入学申请和签名扫描栏经常设置 20KB–50KB 的严格上传上限。把文件保持在远低于 50KB 的水平，可以避免表单提交超时和上传被拒错误。',
      },
      {
        question: '为什么在这里缩小护照照片和证件扫描件是安全的？',
        answer:
          '从 HEIC 解码到二分法压缩搜索，再到 ZIP 打包，每一次像素操作都在您自己的浏览器标签页内本地执行。敏感的身份照片、签名和个人记录绝不会通过互联网上传。',
      },
      {
        question: '为什么把 1200 万像素的手机照片压到 50KB 通常需要缩放尺寸？',
        answer:
          '一张 4000×3000 像素的照片包含 1200 万像素，即使重度压缩，其 JPEG 基线编码数据通常也会超过 200KB。开启智能尺寸缩放后，优化器会平滑地逐步降低尺寸，让清晰的面部细节干净地装进 50KB 以下。',
      },
      {
        question: '向考试或政府门户提交低于 50KB 的图片时，该选 JPG 还是 WebP？',
        answer:
          '传统政府、护照、奖学金或银行表单请务必选择 JPG，因为许多验证脚本即使文件更小也会拒绝 .webp 上传。现代网页头像或个人网站更看重 50KB 下的最大清晰度时，请选择 WebP。',
      },
      {
        question: '这个工具如何把手写签名或扫描证件优化到 50KB 以下？',
        answer:
          '白纸黑墨的扫描件在干净地裁掉多余分辨率后，用 JPG 或 WebP 可以大幅压缩。查看对比弹窗可以确认墨水笔触保持干净，文字边缘没有出现模糊的压缩块。',
      },
      {
        question: '输入本来只有 32KB，为什么出现了红色「变大」提示？',
        answer:
          '如果已经很轻的 JPG 或 PNG 在 Canvas 上以高质量重新编码，新的字节流有时反而会变成 40KB，而不是继续缩小。只需点击该卡片上的「保留原文件」，即可原样保留精确的 32KB 源文件。',
      },
      {
        question: '签证门户同时要求固定 600×600 像素和最高 50KB，可以保持精确尺寸吗？',
        answer:
          '可以。取消勾选「允许智能尺寸缩放」，像素尺寸就会 100% 锁定，二分法会在精确尺寸下把 JPEG 或 WebP 画质测试到最低 5%。如果 600×600 的人像比较干净，不用调整尺寸也能轻松压到 50KB 以下。',
      },
      {
        question: '为什么把输出格式锁定为 PNG 时，50KB 下容易出现「未达目标」警告？',
        answer:
          '因为 PNG 使用忽略画质滑块的无损 DEFLATE 压缩，只有扁平图标或小缩略图才能以 PNG 压到 50KB 以下。把格式留在「原图」并开启自动转换，或直接切换到 JPG，照片类图片就能干净地达到 50KB。',
      },
      {
        question: '上传透明签名 PNG 并转换为 JPG 以压到 50KB 会怎样？',
        answer:
          '选择 JPG 后会显示透明 PNG 底色色块（默认为纯白 #ffffff）。所有透明背景区域会在 JPEG 编码前干净地填充为纯白，黑色墨水保持锐利，不会变成实心黑色。',
      },
      {
        question: '可以直接把一张 15MB 的 iPhone HEIC 自拍拖进来压到 50KB 以下吗？',
        answer:
          '可以。最大 25MB 的文件（包括 Apple HEIC/HEIF 照片）会在浏览器内通过 WebAssembly 自动解码，并一气呵成地向下压缩到 50KB。',
      },
      {
        question: '当 100% 尺寸超过 50KB 时，优化器会测试哪些缩放步骤？',
        answer:
          '当完整尺寸无法以可接受的画质通过 50KB 时，引擎会从 82% 开始逐步测试递减的缩放比例，最低到 10%（最小限制为 16 像素）。每一步都会重新运行画质二分法搜索，并在低于 50KB 的最大清晰尺寸处停止。',
      },
      {
        question: '把深色背景人像压到 50KB 以下会出现明显的色彩断层吗？',
        answer:
          '在激进的 50KB 目标下，如果尺寸保持很大，平滑的深色阴影可能出现轻微色块。允许尺寸缩放后，工具可以用稍小的尺寸以更高的 70%–85% 画质编码，渐变会比大尺寸低画质更平滑。',
      },
      {
        question: '50KB 压缩器会清除证件照里隐藏的 GPS 位置标签吗？',
        answer:
          '会的。把图片绘制到 HTML5 Canvas 上会清除 EXIF 元数据，如相机序列号、缩略图和 GPS 坐标，既保护隐私，也为可见的图片细节腾出额外的字节空间。',
      },
      {
        question: '工具如何判断是否显示「低于 50KB」徽章？',
        answer:
          '编码出最终文件后，它会把精确字节大小与 51,200 字节（50 × 1024）核对。只有严格等于或低于这个精确字节上限的文件，才会获得绿色的「低于 50KB」确认徽章。',
      },
      {
        question: '可以把一张人像照片和一张签名扫描件一起处理到 50KB 以下吗？',
        answer:
          '可以。把多张图片（单张最大 25MB）拖进队列，调整格式偏好，然后逐个下载，或打包进 compressmypic_50kb.zip。',
      },
      {
        question: '如果门户实际要求的是 20KB 或 30KB，而不是 50KB，该怎么办？',
        answer:
          '点击目标标题内的「需要其他目标 KB？」链接，即可直接跳转到自定义目标文件大小压缩器，在那里输入 20KB 或 30KB 等任意自定义上限。',
      },
      {
        question: '50KB 压缩器最多可以拖入多大的文件？',
        answer:
          '支持单张最大 25MB 的 JPG、PNG、WebP、HEIC/HEIF、GIF、BMP 和 SVG 格式输入。动态 GIF 输入会把第一帧导出为低于 50KB 的静态优化帧。',
      },
      {
        question: '为什么工具的目标是略低于 50KB（约 48–49.9KB），而不是停在 25KB？',
        answer:
          '它的二分法搜索会进行最多 7 次迭代，尽可能落在 50KB 上限的 96%–100% 区间内。这样可以利用上限下几乎全部可用的字节，最大化视觉清晰度。',
      },
      {
        question: '下载的文件名有清晰标记吗？会不会和原始高清文件混淆？',
        answer:
          '有。每个输出文件都会在扩展名前自动加上 _50kb，例如 portrait_50kb.jpg，原始文件在您的设备上安然无恙。',
      },
      {
        question: '可以在手机上先预览清晰度，再上传到表单门户吗？',
        answer:
          '可以。完整界面（包括交互式对比查看器）在手机 Safari 和安卓 Chrome 上都能流畅运行，让随时随地的表单提交快速可靠。',
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
    name: '图片压缩到 100KB',
    shortDescription: '把图片大小干净地压缩到 100KB 以下，没有明显模糊。',
    category: 'compress',
    seoTitle: '图片压缩到 100KB 在线免费｜清晰压缩照片',
    seoDescription:
      '免费在线把图片压缩到 100KB，适用于求职门户、简历和网页：在浏览器中通过智能画质搜索保持清晰细节，支持批量 ZIP 导出，无需注册，单张最大 25MB，支持 JPG、PNG、WebP 与 HEIC，处理全程本地完成，智能二分法搜索锁定最高画质，保留原始分辨率，支持批量处理，文件绝不上传服务器，使用更安心。',
    h1: '图片压缩到 100KB 在线',
    subtitle:
      '当您把图片压缩到 100KB 时，就抓住了网页和门户的黄金平衡点，同时不牺牲清晰度。它面向附加作品集证件照的求职者、准备快速文章缩略图的博主，以及附件上限严格的人事门户，在浏览器内测试画质设置和可选缩放，输入文件最大 25MB。',
    howToSteps: [
      {
        title: '添加照片或文章配图',
        description:
          '把一张或多张 JPG、PNG、WebP 或 HEIC 图片（单张最大 25MB）拖放到工作区。',
      },
      {
        title: '确认输出格式和备选行为',
        description:
          '保持「原图」（对过大的 PNG 自动用 WebP/JPG 备选），或明确指定 JPG 或 WebP 以获得一致的输出。',
      },
      {
        title: '选择是否允许像素缩放',
        description:
          '保持智能尺寸缩放开启，可获得清晰的 800–1400 像素结果；取消勾选则保持 100% 原始像素宽高。',
      },
      {
        title: '与原图对比视觉清晰度',
        description:
          '查看节省百分比和精确的输出 KB 徽章，然后打开任意卡片的对比功能，并排检查边缘清晰度。',
      },
      {
        title: '单独下载文件或批量打包 ZIP',
        description:
          '立即保存单个 <name>_100kb 文件，或点击「全部下载（ZIP）」，一键下载 compressmypic_100kb.zip。',
      },
    ],
    features: [
      { title: '100KB 以下的最高画质', description: '不使用任意设定的低画质滑块，二分法搜索会锁定低于 100KB 的最高画质。' },
      { title: '尽可能保留原始分辨率', description: '只要仅靠画质调整就能达到 100KB 上限，就保持 100% 原始像素宽高。' },
      { title: '透明的限制提醒', description: '如果锁定的 PNG 或未缩放的 4K 设置无法达到 100KB，会明确提醒您。' },
      { title: '100% 本地隐私', description: '没有上传，没有水印，也无需注册。' },
    ],
    faqs: [
      {
        question: '为什么 100KB 被认为是简历、求职门户和网站的黄金平衡点？',
        answer:
          '约 100KB 时，一张 1000 至 1400 像素的典型照片即使在 3G 移动网络下也能快速加载，同时保留细腻的面部细节、清晰的文字和自然的色彩深度。大多数招聘系统和 PDF 简历生成器都能轻松接受低于 100KB 的素材，不会裁剪或拦截。',
      },
      {
        question: '1920×1080 全高清网页横幅缩小到 100KB 后还能保持完整尺寸吗？',
        answer:
          '很多情况下可以，尤其是干净的产品照、界面插画或柔和虚化的背景，用 WebP 或 JPG 压缩时更是如此。如果繁忙的风景场景在 35% 画质下仍超过 100KB，可选缩放会平滑地把宽度下调（如 82% 或 68%），保护清晰度。',
      },
      {
        question: '自动画质二分法搜索如何让我的 100KB 文件尽可能清晰？',
        answer:
          '引擎不会猜一个 40% 这样的固定低压缩值，而是在最多 7 个二分步骤中测试画质的上下界，停在 102,400 字节以下 96%–100% 的区间内，为精确的文件大小预算最大化像素保真度。',
      },
      {
        question: '瞄准 100KB 时，什么时候该取消勾选「自动转换大 PNG」？',
        answer:
          '如果扁平信息图、界面图标或双色图表必须严格保持无损 PNG，而且本身已经干净地小于 100KB，保留「原图」或选择 PNG 效果很好。但对于照片类 PNG，保持自动转换开启会把不透明图片切换为 JPG、透明图片切换为 WebP，让您在 100KB 以下保持锐利像素。',
      },
      {
        question: '压到 100KB 时自动转换会让透明 PNG 标志失去透明度吗？',
        answer:
          '不会。在「原图」模式下从过大的 PNG 备选转换之前，压缩器会检测文件的透明通道，如果存在透明像素，会自动选择保留完整透明度的 WebP，而不是 JPG。',
      },
      {
        question: '压缩到 100KB 对核心网页指标和页面体积有什么影响？',
        answer:
          '把 2MB 的主图缩略图或 800KB 的文章头图缩减到 95KB，可以大幅削减页面负载，而不会在视觉上降低版式卡片的质量。更轻的图片能直接改善手机和桌面访客的最大内容绘制（LCP）表现。',
      },
      {
        question: '可以把邮件通讯图片缩小到 100KB 以下，让收件箱渲染更快吗？',
        answer:
          '可以。选择 JPG 输出可以在 Outlook、Apple Mail 和 Gmail 等主流邮件客户端中保持广泛支持，同时确保多图通讯保持快速轻量，低于垃圾邮件过滤的体积阈值。',
      },
      {
        question: '上传的文件本来只有 65KB 时会发生什么？',
        answer:
          '压缩器会注意到您的文件已经低于 100KB，并生成一份干净的全分辨率导出文件。如果 HTML5 Canvas 重新编码后恰好比 65KB 略大，红色提示会让您立即点击「保留原文件」。',
      },
      {
        question: '把图片收紧到 100KB 时，对比弹窗有什么帮助？',
        answer:
          '通过分屏前后对比帘幕，可以确认细发、织物纹理或微小截图文字在压缩后是否依然干净。如果锁定分辨率后出现伪影，从 JPG 切换到 WebP 通常能在同样的 100KB 预算内消除它们。',
      },
      {
        question: '这个 100KB 缩小工具会自动删除相机的 EXIF 标签吗？',
        answer:
          '会的。绘制到 HTML5 Canvas 上会清除内嵌的相机缩略图、Lightroom XMP 数据块和 GPS 坐标，仅这一项在视觉压缩开始前往往就能节省 20KB–60KB。',
      },
      {
        question: '可以把一整个文件夹的博客缩略图拖进来，全部压缩到 100KB 吗？',
        answer:
          '可以。一次上传多张最大 25MB 的文件，在浏览器中依次处理每张图片只需几秒，然后把全部内容保存进 compressmypic_100kb.zip。',
      },
      {
        question: '如果简历门户允许最大 100KB 的 JPG，但拒绝 WebP 文件怎么办？',
        answer:
          '请在上传前后于「输出格式」中选择 JPG，而不是留在「原图」。压缩器会把每张图片严格重新处理为低于 100KB 的标准 .jpg，并把您选择的底色应用到所有透明区域。',
      },
      {
        question: '为什么我的 3000×2000 PNG 截图缩放到 68% 后，在 100KB 下干净地缩小了？',
        answer:
          '无损 PNG 的文件大小与总像素数和信息熵密切相关。适度缩放一张巨大的截图，再搭配 WebP 或 JPG，可以把字节体积从几兆字节降到 100KB 以下，同时文字依然清晰易读。',
      },
      {
        question: '机密简历、建筑预览图或保密协议样稿会被上传到别处吗？',
        answer:
          '绝不会。所有压缩步骤、二分迭代和 ZIP 归档生成都在浏览器标签页内的本地 JavaScript 和 Canvas 中严格执行。',
      },
      {
        question: '100KB 压缩器可以输入哪些文件类型？',
        answer:
          '可以拖放 JPG、PNG、WebP、iPhone HEIC/HEIF、GIF、BMP 和 SVG 文件，单张最大 25MB。请注意，动态 GIF 输入会把第一帧压缩为静态输出。',
      },
      {
        question: '可以从这个页面选择 80KB 或 120KB 这样的自定义目标吗？',
        answer:
          '可以，点击目标尺寸面板中的「需要其他目标 KB？」链接，即可直接跳转到灵活的目标文件大小压缩器，输入任意自定义 KB 或 MB 数值。',
      },
      {
        question: '为什么锁定 PNG 的目标即使缩小后，在 100KB 下仍可能失败？',
        answer:
          '当明确强制使用 PNG 且禁用缩放时，嘈杂的照片会保留数百万种独特颜色，无法无损装进 100KB。重新启用尺寸缩放或切换到 WebP，即可立即解决。',
      },
      {
        question: '批量完成后更改设置会自动重新压缩我的文件吗？',
        answer:
          '会的。切换输出格式、尺寸缩放、PNG 自动转换或 JPG 底色后，会自动按 100KB 目标重新处理队列中的图片，方便您轻松比较结果。',
      },
      {
        question: 'Windows、macOS 和 iOS 能原生打开下载的 _100kb.jpg 和 _100kb.webp 文件吗？',
        answer:
          '可以。标准 JPEG 在所有地方都能通用打开，现代 WebP 在所有当前桌面浏览器、macOS 预览、Windows 照片、安卓和 iOS 中都能原生打开。',
      },
      {
        question: '100KB 工具有每日配额或文件数量限制吗？',
        answer:
          '没有。只要浏览器内存能处理，就可以把任意数量的图片压缩到 100KB 以下，零水印、无账号提示、无付费墙。',
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
    name: '图片压缩到 200KB',
    shortDescription: '把照片优化到 200KB 以下，适用于博客、内容管理系统上传和各类门户。',
    category: 'compress',
    seoTitle: '图片压缩到 200KB 在线免费｜博客与电商适用',
    seoDescription:
      '免费在线把图片压缩到 200KB，适用于 WordPress、Shopify 和博客横幅：通过二分法画质搜索在本地保留清晰细节，支持 ZIP 导出，无需注册，单张最大 25MB，支持 JPG、PNG、WebP 与 HEIC，适合电商与博客使用，优先保留原始尺寸，支持批量处理与 ZIP 导出，文件绝不上传服务器。',
    h1: '图片压缩到 200KB 在线',
    subtitle:
      '当您把图片压缩到 200KB 且不产生臃肿体积时，可以准备好清晰的店铺产品摄影、博客头图和商家列表。它面向 WordPress 编辑、Shopify 商家和数字营销人员，优先保持 100% 原始尺寸，在最大 25MB 的文件上完全本地运行，零服务器传输。',
    howToSteps: [
      {
        title: '上传店铺或博客图片',
        description:
          '把单个或整批 JPG、PNG、WebP 或 HEIC 图片（单张最大 25MB）拖放到工作区。',
      },
      {
        title: '选择 WebP、JPG、原图或 PNG 输出',
        description:
          '现代内容管理系统追求速度时选 WebP，通用电商兼容性选 JPG，只想自动转换较重 PNG 时选「原图」。',
      },
      {
        title: '切换完整尺寸与备选缩放',
        description:
          '2400 万像素的相机照片请保持智能缩放开启；如果产品模板严格要求原始像素尺寸，请取消勾选。',
      },
      {
        title: '检查节省量和并排细节',
        description:
          '确认绿色的「低于 200KB」指示，拖动对比滑块查看标签、织物纹理或精细界面边缘。',
      },
      {
        title: '保存单个素材或全部下载（ZIP）',
        description:
          '直接下载单个 <name>_200kb 图片，或把整个店铺图库打包进 compressmypic_200kb.zip。',
      },
    ],
    features: [
      { title: '内容管理系统与电商就绪', description: '非常适合 Shopify、WooCommerce、WordPress 和 Google 商家资料上传。' },
      { title: '智能备选缩放', description: '如果 2400 万像素的相机照片在完整尺寸下无法压到 200KB 以下，尺寸缩放会干净地介入。' },
      { title: '精确的 KB 验证', description: '在原始字节数和节省百分比旁边显示经过验证的输出字节数。' },
      { title: '零服务器上传', description: '直接在您的电脑或手机上进行快速 HTML5 Canvas 处理。' },
    ],
    faqs: [
      {
        question: '为什么 WordPress 机构和 Shopify 店铺把产品照片统一在 200KB 左右？',
        answer:
          '200KB 的上限为清晰的缝线、金属光泽和可读的产品标签留出了足够的码率，同时让商品集合网格在手机购物者面前保持快速。低于 200KB 也能满足 Google 商家资料或 WooCommerce 媒体规则等严格的内容管理系统和目录限制。',
      },
      {
        question: '1200 万像素或 2400 万像素的相机照片能干净地达到 200KB 吗？',
        answer:
          '可以。如果完整 4000×3000 像素尺寸即使在 35% 画质下仍超过 200KB，智能尺寸缩放会按比例逐步下调，通常在清晰的 75%–85% 画质下落在约 2200 像素或 1800 像素宽。',
      },
      {
        question: '在 200KB 下，什么时候该取消勾选「允许智能尺寸缩放」来锁定尺寸？',
        answer:
          '当电商平台或印刷门户强制要求精确像素宽度（如 1600×1600 像素的方形产品位）时，请取消勾选缩放。优化器会在完整尺寸下把有损画质最低降到 5%，如果不调整尺寸无法达到 200KB，会如实报告。',
      },
      {
        question: '在 200KB 目标下，电商照片用 WebP 和 JPG 相比如何？',
        answer:
          '在同样的 200KB 预算内，WebP 通常比 JPG 呈现出明显更干净的影棚阴影和更锐利的小包装文字，大致相当于高 10%–15% 的画质系数。只有较老的电商后台仍拒绝 .webp 上传时，才选择 JPG。',
      },
      {
        question: '上传带透明背景的影棚 PNG 产品抠图会怎样？',
        answer:
          '格式留在「原图」且开启自动转换时，任何过大的透明 PNG 在 PNG 单独无法干净达到 200KB 时，都会干净地切换为透明 WebP。如果明确选择 JPG，透明区域会融合到您选择的透明 PNG 底色上。',
      },
      {
        question: '为什么优化器在缩小像素尺寸之前，优先保持 100% 分辨率？',
        answer:
          '缩小尺寸会永久丢弃像素网格细节，而适度调整有损画质可以在完整宽度下保留锐利边缘。先在完整尺寸下测试 35%–94% 画质，可以确保桌面主图尽可能保持全尺寸。',
      },
      {
        question: '可以一次把整个季节性图库批量优化到 200KB 以下吗？',
        answer:
          '可以。把几十张产品照片（单张最大 25MB）拖进队列，让工具在本地逐张检查，然后在 compressmypic_200kb.zip 里一次取走所有优化后的素材。',
      },
      {
        question: '把透明背景转换为白色 JPG 底色，有助于满足亚马逊或 Etsy 的 200KB 要求吗？',
        answer:
          '有帮助。纯白（#ffffff）背景在 JPEG 中压缩效率极高，同时符合电商平台的白色背景规范，可以在 200KB 内为中央的实际产品腾出更多字节。',
      },
      {
        question: '为什么我 140KB 的 WebP 上传后重新处理却显示「变大」提醒？',
        answer:
          '如果一张已经低于 200KB 且优化良好的文件按 Canvas 默认高质量重新编码，可能会落在 165KB 附近，而不是继续缩小。点击「保留原文件」即可立即恢复未改动的 140KB 源文件。',
      },
      {
        question: '未发布的产品原型或客户活动横幅会被保存在外部服务器上吗？',
        answer:
          '不会。每一次像素解码、缩放和 ZIP 创建都在本地浏览器会话中私密进行，因此适合保密发布和保密协议客户项目。',
      },
      {
        question: '200KB 压缩器支持新款 iPhone 拍摄的 Apple HEIC/HEIF 照片吗？',
        answer:
          '支持。客户端 WebAssembly 会直接在浏览器标签页内解码 iPhone 的 HEIC 文件，无需事先转换。',
      },
      {
        question: '为什么 200KB 常常比 50KB 更适合细节丰富的信息图或菜单板？',
        answer:
          '餐厅菜单、房地产平面图或软件界面截图里的小字如果塞进 50KB 以下会很快变模糊。200KB 目标给 WebP 和 JPG 四倍的字节空间，精细标签才能保持清晰。',
      },
      {
        question: '二分法画质搜索通常能多接近 200KB？',
        answer:
          '在给定缩放比例下找到可行的画质范围后，最多 7 次二分法搜索迭代会瞄准 204,800 字节的 96% 至 100%。文件通常落在 192KB 至 199KB 之间，让您在限制内获得最大清晰度。',
      },
      {
        question: '200KB 压缩过程中会清除内嵌的单反色彩配置文件和相机 GPS 标签吗？',
        answer:
          '会的。通过 HTML5 Canvas 写入图片会清除 EXIF 元数据块和内嵌预览缩略图，既改善隐私，也消除了 WordPress 和 CDN 服务器上浪费的字节。',
      },
      {
        question: '如果一张过大的无损 PNG 只有缩放到 35% 才能以 PNG 保持在 200KB 以下，该怎么办？',
        answer:
          '格式设为「原图」且开启 PNG 自动转换后，任何被强制缩放到 65% 以下的无损 PNG 都会自动切换为 WebP 或 JPG。这样可以在保持更锐利像素尺寸的同时，轻松通过 200KB 限制。',
      },
      {
        question: '下载 200KB 文件之前，可以预览精细织物或珠宝细节吗？',
        answer:
          '可以。点击任意已完成结果卡片上的「对比」，即可打开交互式分屏滑块，直接对比未压缩的原始像素和压缩后的输出。',
      },
      {
        question: '把 SVG 矢量横幅拖进 200KB 压缩器会怎样？',
        answer:
          '浏览器会把 SVG 栅格化到 Canvas 上，并按您选择的格式优化为低于 200KB 的 PNG、WebP 或 JPG。当电商平台或内容管理系统门户拒绝原始 .svg 上传时，这非常方便。',
      },
      {
        question: '这里每张图片接受的最大源文件大小是多少？',
        answer:
          '每张上传的 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 最大可达 25MB。这个空间足以直接处理 Lightroom 或现代手机导出的重型相机文件，无需预先缩小。',
      },
      {
        question: '输出文件如何命名，才能与我的主产品文件夹区分开？',
        answer:
          '每个保存的副本都会保留您清理后的基础文件名，并在扩展名前加上 _200kb，生成如 sneaker_side_200kb.webp 这样清晰的名称。原始高分辨率母版在磁盘上完全不受影响。',
      },
      {
        question: '如果门户改了规则，可以跳转到 150KB 或 300KB 这样的其他精确阈值吗？',
        answer:
          '可以。使用控制区顶部的「需要其他目标 KB？」链接，打开自定义目标文件大小压缩器，输入任意精确的 KB 或 MB 数值。',
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
    name: '图片压缩到 500KB',
    shortDescription: '把多兆字节的照片压缩到 500KB 以下，画质超高。',
    category: 'compress',
    seoTitle: '图片压缩到 500KB 在线免费｜高清照片压缩',
    seoDescription:
      '免费在线把图片压缩到 500KB，且不损失高分辨率清晰度：把大型 JPG、PNG、WebP 与 HEIC 文件变成快速的作品集素材，全程本地处理，无需注册，单张最大 25MB，适合摄影师与作品集使用，二分法搜索锁定最高画质，优先保留原始分辨率，支持批量处理与 ZIP 导出，文件绝不上传服务器，使用更安心。',
    h1: '图片压缩到 500KB 在线',
    subtitle:
      '当您在浏览器本地把图片压缩到 500KB 时，可以把 5MB 至 18MB 的笨重单反照片、手机 RAW 导出图和高分辨率截图变成清晰素材。它非常适合向客户交付样片的摄影师、制作轻量路演幻灯片的创始人，以及提交作品集画廊的机构，尽可能在单张最大 25MB 的范围内保留完整高分辨率像素尺寸。',
    howToSteps: [
      {
        title: '拖放全分辨率相机或设计文件',
        description:
          '上传一张或多张 JPG、PNG、WebP 或 HEIC 图片，单张最大 25MB，无需事先调整尺寸。',
      },
      {
        title: '为高分辨率交付选择输出格式',
        description:
          '保持「原图」可无缝处理，客户幻灯片和打印样片选 JPG，超锐利作品集画廊选 WebP。',
      },
      {
        title: '确认缩放与 PNG 备选偏好',
        description:
          '4000 万像素以上的照片请保持智能尺寸缩放开启；如果要保留严格的 4K 以上尺寸并优化画质，请取消勾选。',
      },
      {
        title: '在对比模式中并排检查细节',
        description:
          '查看每个「低于 500KB」确认徽章，在分屏前后对比查看器中检查枝叶、皮肤纹理或排版。',
      },
      {
        title: '单独下载文件或打包 ZIP',
        description:
          '立即保存每个 <name>_500kb 输出，或把大型照片集合干净地导出为 compressmypic_500kb.zip。',
      },
    ],
    features: [
      { title: '接近无损的 500KB 压缩', description: '500KB 有充足空间，让 1920–4000 像素的大图在视觉上与原图几乎没有区别。' },
      { title: '自动 HEIC 解码', description: '通过客户端 WebAssembly 在本地支持 iPhone HEIC/HEIF 照片。' },
      { title: '无需猜测画质', description: '不用再手动拖动百分比滑块——让二分法搜索在 500KB 以下最大化画质。' },
      { title: '100% 浏览器私密处理', description: '没有任何内容上传到远程服务器。' },
    ],
    faqs: [
      {
        question: '为什么 500KB 能在 4K 和 1200 万像素照片上保留接近原始的视觉质量？',
        answer:
          '半兆字节（512,000 字节）为全幅 1920 至 4000 像素照片上的细腻微反差、微妙胶片颗粒和平滑天空渐变提供了充足空间。大多数图片在完全不缩小尺寸的情况下，以 75%–92% 的高画质就能干净地达到 500KB。',
      },
      {
        question: '用在路演幻灯片、Keynote 和 PowerPoint 附件上效果如何？',
        answer:
          '把 6MB 的 PNG 截图和影棚样片缩小到 500KB 以下的 JPG 或 WebP，可以大幅削减整个演示文稿的体积。一份 30 页的幻灯片在邮件发送和云同步时依然快速，在会议投影仪上看起来依然锐利。',
      },
      {
        question: '把 2400 万像素单反照片压缩到 500KB 时，能保持 100% 原始分辨率吗？',
        answer:
          '取消勾选「允许智能尺寸缩放」可以强制保持 100% 原始像素尺寸，必要时让画质二分法搜索最低降到 5%。对于大多数 6000×4000 像素的相机 JPEG，JPG 画质在 40%–65% 左右就已经能通过 500KB，无需缩小任何像素。',
      },
      {
        question: '为什么一张 15MB 的 iPhone HEIC 人像导出为 JPG 或 WebP 后，能在 500KB 以下保持全分辨率？',
        answer:
          '现代手机的 HEIC 照片虽然色彩数据深、像素高，但重新编码为 80% 以上画质的 JPG 或 WebP 后，体积仍在 450–495KB 左右。人像虚化和细腻的皮肤渐变在整张图片上依然平滑。',
      },
      {
        question: '上传一张 10MB 的无损 PNG 软件仪表盘样稿会怎样？',
        answer:
          '全屏视网膜 PNG 很少能在不大幅缩小像素的情况下无损装进 500KB。格式保持「原图」并开启 PNG 自动转换后，它会自动切换为接近无损的高质量 WebP 或清晰 JPG，让界面文字在全屏尺寸下依然易读。',
      },
      {
        question: '为什么 500KB 在 Behance、Dribbble 和机构作品集提交中很流行？',
        answer:
          '作品集平台和招标供应商门户经常把案例研究媒体限制为每张图片 500KB，以保持多项目页面的流畅。压缩到略低于 500KB 既能满足上传验证，又不会触发服务器端粗暴的二次压缩。',
      },
      {
        question: '如果批量里有一张文件本来只有 320KB，工具会怎么处理？',
        answer:
          '压缩器会检测到 320KB 已经满足 500KB 要求，并处理一份干净的全分辨率副本。如果重新编码后文件略有变重，会出现「变大」警告，您可以点击「保留原文件」，保留 320KB 的原文件。',
      },
      {
        question: '摄影师在这里会失去知识产权控制或泄露客户拍摄内容吗？',
        answer:
          '绝不会。无论是准备婚礼预览、商业建筑拍摄还是未发布的原型，每张图片都在本地浏览器标签页内解码和压缩，零服务器传输。',
      },
      {
        question: '在 500KB 下，哪种格式能保留更锐利的排版和细矢量线条？',
        answer:
          'WebP 在 500KB 上限内对深色底白字的锐利排版、图表和示意图的表现优于 JPG。它的预测块编码能最大限度减少高对比界面和图表周围的杂乱光晕。',
      },
      {
        question: '瞄准 500KB 的 JPG 时，可以把透明产品 PNG 压到深炭色而不是白色上吗？',
        answer:
          '可以。选择 JPG 后会显示透明 PNG 底色选择器，可以输入白色、深石板色或任意自定义品牌十六进制颜色，实现透明边缘的无缝融合。',
      },
      {
        question: 'Canvas 压缩会保留相机镜头型号、快门速度和 GPS 坐标吗？',
        answer:
          '不会，HTML5 Canvas 会自动清除 EXIF 元数据，从而消除内嵌的相机缩略图和位置数据。这样既保护了客户样片的隐私，也把每个字节都用于可见像素。',
      },
      {
        question: '触发「低于 500KB」确认徽章的精确字节上限是多少？',
        answer:
          '工具会把最终编码文件与 512,000 字节（500 × 1024）核对。严格等于或低于 512,000 字节的文件会显示绿色的「低于 500KB」状态徽章和精确的节省空间。',
      },
      {
        question: '可以一次把二十张 10MB 的照片批量缩小到 500KB 吗？',
        answer:
          '可以。把全部二十张图片（单张最大 25MB）拖进队列，让浏览器依次处理每张照片，然后一起导出到 compressmypic_500kb.zip 中。',
      },
      {
        question: '为什么强制无损 PNG 且禁用缩放时，在 500KB 下会显示「未达目标」？',
        answer:
          '无损 PNG 压缩会忽略画质滑块，意味着一个同时锁定 PNG 格式和完整尺寸的复杂高分辨率场景无法低于其原始 DEFLATE 下限。启用尺寸缩放或选择 WebP/JPG，即可干净地通过 500KB。',
      },
      {
        question: '保存前可以缩放平移，或并排对比原图和 500KB 版本吗？',
        answer:
          '可以。点击任意已完成卡片上的「对比」，即可打开全宽前后分屏帘幕，直接对照原文件检查眼睛、发丝或小标签。',
      },
      {
        question: '如果一张图片需要轻微缩放尺寸才能达到 500KB，调整幅度有多大？',
        answer:
          '缩放器从原始尺寸的 82% 开始，再尝试更大幅度的步骤。因为 500KB 比较宽裕，巨大的 5000 万像素影棚导出图通常在 82% 或 68% 这一步就能干净地通过目标，同时保留高清打印锐度。',
      },
      {
        question: '工具支持最大 25MB 的旧版 BMP 位图或 SVG 图表吗？',
        answer:
          '支持。未压缩的 BMP 归档和矢量 SVG 插画最大 25MB 都可以直接加载到 Canvas 上，并以您选择的栅格格式干净地导出到 500KB 以下。',
      },
      {
        question: '下载压缩后的 500KB 副本时，文件名会怎么变？',
        answer:
          '每张处理后的图片都会在扩展名前自动加上 _500kb，生成如 architectural_proof_500kb.jpg 这样清晰的名称。文件名中保留这个标记，可以确保压缩后的交付文件永远不会覆盖原始母版。',
      },
      {
        question: '如果电商门户设置的是 1MB 或 250KB 限制，而不是 500KB，该怎么办？',
        answer:
          '点击格式按钮上方的「需要其他目标 KB？」快捷方式，打开自定义目标文件大小压缩器，输入任意自定义 KB 或 MB 阈值。',
      },
      {
        question: '可以直接在 iPad 或安卓平板上压缩 500KB 素材吗？',
        answer:
          '可以。触屏友好的格式控制、对比滑块和 ZIP 导出在现代平板和手机浏览器中都能干净运行，无需桌面软件。',
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
    name: '批量图片压缩器',
    shortDescription: '一次批量压缩几十张图片，导出为单个 ZIP。',
    category: 'compress',
    seoTitle: '批量图片压缩器在线免费｜批量缩小并打包 ZIP',
    seoDescription:
      '免费在线批量图片压缩器，在浏览器中一次缩小几十个文件：应用网页快速、邮件或高保真配置文件，查看节省的总 MB 数，下载单个 ZIP，无需注册，没有水印，单张最大 25MB，全程本地处理，一键应用快捷配置文件，实时查看进度与节省量，支持逐文件对比，批量处理高效省时，适合电商团队使用，文件绝不上传服务器。',
    h1: '免费批量图片压缩器',
    subtitle:
      '使用这款直接在浏览器中运行的免费批量图片压缩器，同时缩小整文件夹的产品照片、相机胶卷备份和网站素材。它面向电商团队、摄影师和处理大批量的开发者，搭配一键快捷批量配置文件和自定义画质滑块，提供实时进度跟踪、逐文件视觉对比和即时单个 ZIP 下载。',
    howToSteps: [
      {
        title: '拖放整个图片批次',
        description:
          '选择或拖动多张 JPG、PNG、WebP 或 HEIC 图片（单张最大 25MB）到批量放置区，之后随时可以继续添加。',
      },
      {
        title: '点击快捷批量配置文件或自定义设置',
        description:
          '选择「网页快速」（WebP 75%）、「邮件 / 分享」（JPG 65%）或「高保真」（85%），也可以调整画质滑块、输出格式和底色。',
      },
      {
        title: '监控批量压缩的实时进度',
        description:
          '查看逐文件的实时进度条完成情况，并查看汇总横幅显示的总文件数、节省的 MB 数和总体缩小百分比。',
      },
      {
        title: '检查单个卡片和前后画质',
        description:
          '在样本文件上打开对比弹窗；如果任何已经很小的文件反而变大了，点击「保留原文件」；也可以用调整后的设置单独重新处理文件。',
      },
      {
        title: '如有需要，调整并重新压缩全部',
        description:
          '随时更改配置文件、画质百分比或目标格式，一键重新处理整个队列，无需重新上传。',
      },
      {
        title: '单独下载文件或全部下载（ZIP）',
        description:
          '直接从卡片上保存单个优化图片，或点击「全部下载（ZIP）」，下载 bulk_compressed_compressmypic.zip。',
      },
    ],
    features: [
      { title: '批量进度与节省总计', description: '显示逐文件的实时进度，以及整个批次累计节省的总 MB 数和百分比。' },
      { title: '一键快捷批量配置文件', description: '即时为每个文件应用 WebP、邮件/JPG 或高保真预设。' },
      { title: '逐文件对比弹窗', description: '下载前可以把任意单张压缩照片与原图对照检查。' },
      { title: '零批量限制', description: '只要设备内存允许，就可以压缩任意数量的图片，没有付费层级或服务器排队。' },
    ],
    faqs: [
      {
        question: '三个快捷批量配置文件会改变队列中图片的哪些设置？',
        answer:
          '「网页快速」把输出格式切换为 WebP、画质 75%，适合轻量网站；「邮件 / 分享」把批次转换为 65% 的 JPG，附件更小；「高保真」保持原始格式、画质 85%。点击任意配置文件都会自动更新设置，并重新压缩已加载的文件。',
      },
      {
        question: '没有联网上传也能在笔记本或手机上批量压缩图片吗？',
        answer:
          '工具页面加载完成后，所有批量压缩、解码和 ZIP 创建都在浏览器本地使用 HTML5 Canvas 和 WebAssembly 进行。您的照片绝不会进入远程处理队列，也不会离开设备。',
      },
      {
        question: '批量汇总如何报告总节省量？',
        answer:
          '文件逐个处理完成后，汇总栏会把所有项目的原始字节总数与压缩结果对比，显示累计节省的兆字节数和总体缩小百分比。如果某个文件反而变大了，可以在导出 ZIP 之前点击该卡片上的「保留原文件」。',
      },
      {
        question: '把 PNG 截图、iPhone HEIC 和 JPG 照片混在一个批次里会怎样？',
        answer:
          '输出格式设为「原图」时，每张图片会编码为对应的网页格式（通过 WebAssembly 把 HEIC 干净地解码为 JPG/PNG）。另外，选择 WebP 或 JPG 可以把整个混合文件夹统一为一种输出扩展名。',
      },
      {
        question: '批量图片压缩器中每个文件允许的最大大小是多少？',
        answer:
          '支持单张最大 25MB 的 JPG、PNG、WebP、HEIC/HEIF、GIF、BMP 和 SVG 输入。没有固定的数量上限，只受设备可用浏览器内存的限制。',
      },
      {
        question: '为什么工具用实时进度条处理批次，而不是让标签页卡住？',
        answer:
          '文件以受控的浏览器分批方式运行，进度更新（X / Y）会实时显示。这样可以保持页面响应，让您即使面对 30 或 50 张高分辨率照片的批次，也能清楚监控完成情况。',
      },
      {
        question: '点击「全部下载（ZIP）」后，导出的 ZIP 文件叫什么名字？',
        answer:
          '点击「全部下载（ZIP）」会把每个已完成输出干净地打包进 bulk_compressed_compressmypic.zip。整个 ZIP 归档直接在浏览器内存中构建，不经过云存储服务器中转。',
      },
      {
        question: '第一批已经压缩完成后，还能再向队列添加照片吗？',
        answer:
          '可以。再拖放图片会干净地加入现有批次列表，方便把旧文件和新拖放的文件一起打包进最终的 ZIP。',
      },
      {
        question: '压缩控制里的「均衡」「更小文件」和「高质量」预设有什么区别？',
        answer:
          '快捷批量配置文件是针对网页速度或邮件附件等常见目标的格式加画质快捷方式。同时，压缩控制里的「均衡」「更小文件」「高质量」选项和 10%–100% 画质滑块，可以让您在点击「重新压缩全部」之前精细调整确切的有损强度。',
      },
      {
        question: '批量把透明 PNG 图标转换为 JPG 时，它们的背景会是什么颜色？',
        answer:
          '每当输出格式为 JPG（包括通过「邮件 / 分享」配置文件），「底色背景」选择器都会自动出现。它会把透明通道干净地填充为纯白（#ffffff）或您选择的任意自定义十六进制颜色，图标绝不会变黑。',
      },
      {
        question: '批量图片压缩器会调整图片像素尺寸，还是保持原始宽高？',
        answer:
          '批量图片压缩器会让每张文件保持 100% 的原始像素宽高，同时通过画质编码减小字节大小。如果还需要批量缩小几十张照片的尺寸，请搭配批量图片尺寸调整器使用。',
      },
      {
        question: '为什么批次里一张已经压缩过的 PNG 显示「重新编码后变大」警告？',
        answer:
          '使用激进调色板量化导出的 PNG 文件，在 HTML5 Canvas 上重新保存为完整 24 位无损 PNG 时可能会略微变大。点击该卡片上的「保留原文件」可以在批量 ZIP 中保留更小的原文件，或切换格式为 WebP/JPG 进一步缩小。',
      },
      {
        question: '可以只重新压缩一张顽固图片，而不用重新运行整个文件夹吗？',
        answer:
          '可以。每张已完成的结果卡片在「对比」和「下载」旁边都有自己的「重新压缩」和「删除」按钮，方便干净地调整或丢弃异常项。',
      },
      {
        question: '批量压缩会自动清除旅行相册里的相机 GPS 坐标和 EXIF 标签吗？',
        answer:
          '会的。因为每张图片在压缩过程中都会绘制到 HTML5 Canvas 上，ZIP 中每个文件的内嵌 EXIF 标签、相机序列号和 GPS 位置都会被干净地清除。',
      },
      {
        question: '什么时候该选批量图片压缩器，而不是目标文件大小或网页图片优化器？',
        answer:
          '当您想在完整像素尺寸下，对几十张照片快速实现统一的基于画质的节省时，请使用批量图片压缩器。当每张文件都需要低于严格的 KB 上限时，请选择目标文件大小；需要预设网页像素上限加响应式 HTML 标签时，请选择网页图片优化器。',
      },
      {
        question: '下载完整 ZIP 之前，可以检查批次中单个项目的视觉质量吗？',
        answer:
          '可以。点击任意卡片上的「对比」，即可打开并排分屏滑块，在完整细节下对比原图和压缩版本。',
      },
      {
        question: '默认 70% 画质起点在一般照片库上的表现如何？',
        answer:
          '70% 的有损画质通常能在高分辨率 JPEG 上实现 50%–75% 的大幅字节缩减，同时在典型网页屏幕和邮件分享中保持视觉干净。对于重要的作品集工作，请在「高保真」下提高到 85%。',
      },
      {
        question: '在内存有限的手机上上传 100 张照片的超大文件夹会怎样？',
        answer:
          '因为解码和 Canvas 缓冲区都驻留在设备内存中，手机标签页在处理极端单一批次时可能会变慢。每批处理 15 至 30 张高像素照片，并在各组之间清空已完成列表，可以让智能手机浏览器保持流畅。',
      },
      {
        question: '批量 ZIP 导出会强制加水印、每日文件上限或付费升级提示吗？',
        answer:
          '绝不会。单个文件下载和「全部下载（ZIP）」打包都能干净导出，零水印、无需注册账号、无文件数量付费墙。',
      },
      {
        question: '可以把动态 GIF 拖进批量压缩批次吗？',
        answer:
          '动态 GIF 输入在这里只会提取并压缩第一帧作为静态文件。如果需要在保持动态的同时缩小多帧动态 GIF，请使用专用的 GIF 压缩工具。',
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
    name: '目标文件大小压缩器',
    shortDescription: '将任意图片压缩到您指定的精确 KB 或 MB 上限。',
    category: 'compress',
    seoTitle: '目标文件大小压缩器在线免费 – 精确压缩到指定 KB 或 MB',
    seoDescription:
      '使用目标文件大小压缩器在线版，在浏览器中精确命中各类上传上限。输入任意 KB 或 MB 数值，工具会通过二分法画质搜索与智能像素缩放，在您的设备本地完成优化。支持批量处理与 ZIP 打包，无需注册、无水印，图片全程不出设备，证件照与求职门户的严苛上限也能轻松应对。支持证件照、求职申请与电商上传等各类场景。',
    h1: '目标文件大小图片压缩器',
    subtitle:
      '输入任意精确的 KB 或 MB 上传上限——例如证件照的 35 KB、网站主图的 150 KB 或附件的 2 MB——使用在浏览器中直接运行的目标文件大小压缩器即可轻松实现。本工具专为设计师、开发者以及需要应对非标准门户规则的申请人打造，将二分法画质搜索与可选的像素缩放结合在一起，在您自己的设备上干净利落地处理最大 25 MB 的文件。',
    howToSteps: [
      {
        title: '输入自定义 KB 或 MB 上限',
        description:
          '输入 1 KB 到 10,240 KB 之间的任意数值目标（或切换到 MB，最高 20 MB），也可以点按 20 KB、50 KB、100 KB、200 KB、500 KB 或 1 MB 等快捷预设。',
      },
      {
        title: '拖入一张或多张最大 25 MB 的图片',
        description:
          '将 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 文件上传到拖放区，即可立即开始自动目标优化。',
      },
      {
        title: '选择输出格式与备用控制项',
        description:
          '选择原始格式、JPG、WebP 或 PNG；如果高分辨率文件需要缩小像素，请保持智能尺寸缩放开启，并为较重的图形启用 PNG 自动转换。',
      },
      {
        title: '查看目标诊断并对比画质',
        description:
          '在目标压缩摘要中查看已达标与未达标的项目，使用对比功能并排检查清晰度；如果某张小图反而变大了，点击保留原图即可。',
      },
      {
        title: '随时调整目标或下载 ZIP',
        description:
          '调整自定义阈值并点击“压缩到[目标]”重新处理整个队列，然后保存单个文件或点击全部下载（ZIP）。',
      },
    ],
    features: [
      {
        title: '自定义 KB 与 MB 目标',
        description: '从小到 10 KB 的头像，到数 MB 的打印上传，任意目标大小都能精确设定。',
      },
      {
        title: '画质与缩放两阶段引擎',
        description:
          '先在完整分辨率下测试各级画质，只有在确实需要时才智能地逐步缩小尺寸。',
      },
      {
        title: '诚实的未达标诊断',
        description:
          '当无损 PNG 或关闭缩放导致无法达到严格的大小限制时，会清楚地说明原因。',
      },
      {
        title: '支持批量 ZIP 打包',
        description: '将多个文件压缩到同一 KB 目标，一次性打包下载为一个 ZIP 文件。',
      },
    ],
    faqs: [
      {
        question: '这款目标文件大小压缩器可以输入多大的自定义 KB 与 MB 范围？',
        answer:
          '在 KB 模式下可以输入 1 KB 到 10,240 KB（10 MB）之间的任意整数，页面打开时默认值为 150 KB。将单位切换到 MB 后，目标范围为 1 MB 到 20 MB，还可一键使用 20 KB、50 KB、100 KB、200 KB、500 KB 和 1 MB 快捷填充。',
      },
      {
        question: '在 KB 与 MB 单位之间切换时，当前数值会如何重新计算？',
        answer:
          '点击 MB 会将当前 KB 目标除以 1,024 并四舍五入到至少 1 MB，因此不会因为误操作而从 KB 跌落到极小的字节上限。切回 KB 时则乘以 1,024，最高不超过 10,240 KB，换算干净准确。',
      },
      {
        question: '为什么优化器要先在 100% 分辨率下用二分法搜索画质，而不是先缩小尺寸？',
        answer:
          '许多图片在 150 KB、300 KB 或 1.5 MB 等适度限制下，只需削减 JPEG 或 WebP 的压缩开销就能达标，无需丢弃像素。先在完整尺寸下尝试 35% 到 94% 的画质，可以尽可能保留图片的原始宽高。',
      },
      {
        question: '智能尺寸缩放会在什么时候自动介入？',
        answer:
          '如果即使在完整宽度下使用 35% 的有损画质也无法把图片压到字节阈值以下，并且已勾选允许智能尺寸缩放，引擎会从 82% 向 10% 逐步降低缩放比例。每一步都会重新搜索画质，并挑选能满足精确上限的最高分辨率。',
      },
      {
        question: '如果门户既要求极严格的 KB 上限，又不允许调整尺寸，该怎么办？',
        answer:
          '取消勾选允许智能尺寸缩放，即可将宽高锁定在 100%。此时压缩器会在完整尺寸下把 JPG 或 WebP 画质一路压低到 5%，如果图片本身的复杂度确实无法塞进所要求的 KB，还会如实告知。',
      },
      {
        question: '为什么 2 KB 或 3 KB 这类不可能达到的上限会触发诚实的未达标提示？',
        answer:
          '每一个有效的 JPEG、WebP 或 PNG 文件都包含必需的文件头、霍夫曼表和颜色量化块，即使是很小的图片也会占用几百字节。本工具不会崩溃，也不会编造数字，而是直接显示实际可达到的最小编码体积，并给出可行的建议。',
      },
      {
        question: '格式保持原始时，PNG 自动转换开关有什么作用？',
        answer:
          '无损 PNG 文件不受画质滑块影响，只能通过缩小尺寸来压缩，在严格的 KB 上限下可能让截图或产品图变模糊。开启自动转换后，当 PNG 单独无法达标或缩放比例跌破 65% 时，不透明的 PNG 会转为 JPG，透明的 PNG 会转为 WebP。',
      },
      {
        question: '可以将混合照片批量压缩到同一个自定义 KB 阈值吗？',
        answer:
          '可以。将 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 图片混合拖入队列（每个文件最大 25 MB），每个文件都会按照当前生效的 KB 或 MB 目标独立优化。',
      },
      {
        question: '目标压缩摘要如何记录批量处理的部分成功情况？',
        answer:
          '在对多文件批次应用严格的自定义上限时，深色摘要横幅会精确统计有多少文件通过了目标、多少文件确实无法达标，同时显示总共节省的字节数。每张卡片还会说明最终的画质百分比与缩放比例。',
      },
      {
        question: '自定义目标下载与批量 ZIP 的文件名是怎样的？',
        answer:
          '单个文件下载时会附加目标 KB 标签，例如 brochure_150kb.jpg；多文件 ZIP 导出则保存为 compressmypic_<数值><单位>.zip。您未动过的原始文件会安全地保留在磁盘上。',
      },
      {
        question: '如果为严格的自定义 KB 限制选择 JPG，透明背景会如何处理？',
        answer:
          '选择 JPG 后会出现透明 PNG 底色选择器（默认为纯白 #ffffff）。在 JPEG 压缩开始之前，所有半透明区域都会用您选择的背景色干净地填充，避免出现纯黑边框。',
      },
      {
        question: '为什么比自定义目标还小的文件会显示“变大了”警告？',
        answer:
          '如果您对一张原本只有 180 KB 的图片要求 300 KB 的上限，将其解码到 HTML5 Canvas 再以高质量重新保存，可能会膨胀到 240 KB。点击该卡片上的保留原图，即可保留更轻的 180 KB 源文件。',
      },
      {
        question: '自定义目标压缩会清除证件或照片中的敏感 EXIF 元数据吗？',
        answer:
          '会。通过 HTML5 Canvas 渲染像素时，会自动清除内嵌的相机预览、快门元数据和 GPS 坐标，既保护个人文件隐私，又把每一 KB 都用在画面清晰度上。',
      },
      {
        question: '图片处理完成后，不用重新上传就能更改自定义 KB 值吗？',
        answer:
          '可以。随时编辑数字目标或点按其他预设，再点击“压缩到[目标]”按钮，即可在内存中立即重新优化整个已加载列表。',
      },
      {
        question: '最终字节数相对于二进制 KB 限制有多精确？',
        answer:
          '引擎将 KB 按二进制字节换算（KB × 1024），并把您的输入视为严格上限，除非在锁定约束下物理上确实无法达到，否则绝不会超出。二分法搜索通常会在上限的 96% 到 100% 之间停止，以保留最多的细节。',
      },
      {
        question: '在目标计算过程中，私人客户样张、合同或医疗扫描件会被上传吗？',
        answer:
          '不会。二分法搜索迭代、图片缩放、WebAssembly 解码 HEIC 以及 ZIP 打包全部严格在您的浏览器会话内运行，没有任何外部网络传输。',
      },
      {
        question: '保存之前可以在自定义 KB 限制下预览精细文字或细节吗？',
        answer:
          '可以。点击任意已完成结果卡片上的对比，即可打开交互式前后对比滑帘，直接对照原始上传图片检查锐利边缘。',
      },
      {
        question: '什么时候应该用 50 KB 或 100 KB 这类固定工具，而不是这款自定义工具？',
        answer:
          '如果您的工作流程总是针对 50 KB 护照照片或 200 KB 的 Shopify 上传等标准门户指标，请使用固定页面。当表单要求 30 KB、75 KB、250 KB 或 1.5 MB 这类特殊上限时，请打开这款自定义目标文件大小压缩器。',
      },
      {
        question: '如果上传动态 GIF 并设定 400 KB 的目标，会发生什么？',
        answer:
          '由于基于 Canvas 的 KB 目标处理针对静态光栅帧，动态 GIF 上传后只会优化并导出首帧静态图。如果需要干净地缩小循环多帧动画，请使用我们专用的 GIF 压缩器。',
      },
      {
        question: '如果给 1 MB 的图片设定 5 MB 这样较高的 MB 目标，会发生什么？',
        answer:
          '任何已经低于自定义 MB 上限的图片都会在最高画质、完整尺寸的第一轮直接通过。如果重新编码反而让文件不必要地变大，可以直接点击卡片上的保留原图，保留更轻的源文件。',
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
    name: '批量图片尺寸调整器',
    shortDescription: '按最大尺寸、宽度或百分比批量调整数十张图片，并打包为 ZIP。',
    category: 'resize',
    seoTitle: '批量图片尺寸调整器在线免费 – 批量调整尺寸并打包 ZIP',
    seoDescription:
      '使用免费的批量图片尺寸调整器在线版，直接在浏览器中批量缩放数十张照片。可选择最大宽高适配、统一宽度、精确像素或百分比缩放，支持 JPG、PNG、WebP 与 HEIC，单文件最大 25 MB。处理完成后一键打包 ZIP 下载，无需注册、无水印，照片不出设备，EXIF 信息自动清除。适合电商、博客与摄影团队使用。',
    h1: '免费在线批量图片尺寸调整器',
    subtitle:
      '使用在浏览器中本地运行的免费批量图片尺寸调整器，统一整个产品拍摄、博客文件夹与相册的像素尺寸。本工具专为电商卖家、内容团队与摄影师打造，可通过最大宽高适配、统一宽度、精确宽高或百分比缩放处理横竖方向混合的批次，单文件最大 25 MB，并支持即时 ZIP 导出。',
    howToSteps: [
      {
        title: '将多张图片拖入批量队列',
        description:
          '从电脑或手机上传 JPG、PNG、WebP、HEIC、GIF、BMP 或 SVG 混合文件，每个文件最大 25 MB。',
      },
      {
        title: '选择批量调整策略',
        description:
          '方向混合时选择最大宽高适配，固定栏布局选择统一宽度，严格网格选择精确宽高，均匀缩放选择百分比（%）。',
      },
      {
        title: '设置目标尺寸或快捷尺寸预设',
        description:
          '输入 1 到 12,000 px 的像素值（或点击全高清 1920px、博客 1200px、电商 1000×1000 或缩略图 600px），或将缩放滑块拖到 10% 到 200%。',
      },
      {
        title: '配置防放大保护与适配方式',
        description:
          '保持勾选不放大较小图片以保护小图标，或在选择精确宽高时挑选适应、填充或拉伸。',
      },
      {
        title: '选择输出格式、画质与底色',
        description:
          '保持原始格式，或将输出转换为 JPG、PNG、WebP，同时调节 10% 到 100% 的画质滑块，并为 JPG 设置自定义底色。',
      },
      {
        title: '运行批量调整并全部下载（ZIP）',
        description:
          '查看每张卡片上调整前后的像素尺寸，点击全部下载（ZIP），将 bulk_resized_compressmypic.zip 保存到本地。',
      },
    ],
    features: [
      {
        title: '最大边界框适配模式',
        description:
          '将宽幅风景与高挑人像安全地收进例如 1200×1200px 的范围，不裁剪、不变形。',
      },
      {
        title: '防放大保护',
        description:
          '保持勾选“不放大较小图片”，小素材就不会被拉伸，始终保持清晰。',
      },
      {
        title: '格式与画质控制',
        description: '在调整尺寸的同时，可选择将输出转换为 WebP 或 JPG。',
      },
      {
        title: '一键 ZIP 打包',
        description: '将数十张调整后的图片整齐命名后打包进一个 ZIP 文件下载。',
      },
    ],
    faqs: [
      {
        question: '最大宽高适配如何处理横向风景与竖向人像混合的文件夹？',
        answer:
          '最大宽高适配会把您输入的宽高（默认 1200×1200 px）当作一个无形的边界框，同时保留每张照片的自然宽高比。4000×2000 的风景会变成 1200×600，2000×4000 的人像会变成 600×1200，全程零裁剪、零拉伸。',
      },
      {
        question: '什么时候统一宽度比最大宽高适配更好用？',
        answer:
          '当您制作竖版通讯、CMS 文章栏或响应式图库，需要所有图片共享完全相同的横向宽度时，请选择统一宽度。每张照片的高度都会按比例缩放，不会被拉伸或裁剪。',
      },
      {
        question: '精确宽高模式下的适应、填充与拉伸分别有什么作用？',
        answer:
          '适应会把整张图片放进精确像素框并留出干净的边距；填充会通过居中裁剪超出部分，让图片填满每一个像素边缘；拉伸则会直接把宽高比不匹配的图片强制拉到目标像素。',
      },
      {
        question: '百分比（%）批量缩放是如何工作的？',
        answer:
          '百分比模式会把每张上传图片自身的原始宽高乘以您选择的滑块系数（10% 到 200%，另有 25%、50%、75%、100% 和 150% 快捷按钮）。选择 50% 后，4000×3000 的照片会变成 2000×1500，1000×800 的图标会变成 500×400，同一轮全部完成。',
      },
      {
        question: '为什么混合批次中要保持开启不放大较小图片？',
        answer:
          '如果文件夹里既有 4000 px 的单反照片，又有 400 px 的徽章，把小徽章强行放大到 1200 px 会拉伸像素并产生模糊。保持开启不放大后，大照片会被干净地缩小，小文件则保持原有的清晰尺寸。',
      },
      {
        question: '四个快捷像素预设按钮分别会设置什么数值？',
        answer:
          '点按全高清 1920px 会填入 1920×1080，博客 1200px 会设为 1200×1200，电商 1000×1000 会设为 1000×1000，缩略图 600px 会设为 600×600。之后仍可手动将任一像素字段调整到 12,000 px。',
      },
      {
        question: '批量调整尺寸的同时，能把整个文件夹转换为 WebP 或 JPG 吗？',
        answer:
          '可以。在点击批量调整（N）之前，将输出格式从原始切换为 WebP、JPG 或 PNG，就能在一次 Canvas 处理中同时改变像素尺寸并更新文件格式。',
      },
      {
        question: '输出格式设为 JPG 时，透明 PNG 标志会怎么样？',
        answer:
          '选择 JPG 后会出现底色选择器（默认为白色 #ffffff）。任何透明背景或柔和的阴影都会在 JPEG 编码之前，干净地渲染到您选择的底色上。',
      },
      {
        question: '输出格式保持 PNG 时，批量调整会保留透明度吗？',
        answer:
          '会。导出为 PNG 时，透明背景与柔和的透明边缘会在每一张调整后的图片中完整保留。输出格式保持原始时，PNG 与 WebP 上传的透明度同样会被保留。',
      },
      {
        question: '下载 ZIP 之前，如何确认调整后的照片依然清晰？',
        answer:
          '点击任意缩略图卡片或已完成项目上的对比按钮，即可打开交互式前后对比查看器。拖动分隔线并排验证锐利边缘，确认无误后再导出批次。',
      },
      {
        question: '批量图片尺寸调整器对每张图片的文件大小与像素上限是多少？',
        answer:
          '每张上传图片最大 25 MB，像素输入范围为每边 1 px 到 12,000 px。请注意，跨数十张图片导出 10,000 px 以上的巨大画布时，取决于您设备的浏览器可用内存。',
      },
      {
        question: 'iPhone 的 HEIC 与矢量 SVG 文件能在同一个调整队列中使用吗？',
        answer:
          '可以。HEIC/HEIF 照片通过客户端 WebAssembly 在本地解码，SVG 图形则平滑地光栅化到 HTML5 Canvas 上，再与标准的 JPG、PNG、WebP、GIF、BMP 上传一起缩放。',
      },
      {
        question: '不重新拖入文件，能调整设置后重新处理整个批次吗？',
        answer:
          '可以。随时调整策略、像素上限、格式或 10% 到 100% 的画质滑块，再点击批量调整（N），即可在浏览器内存中立即重新处理队列中的所有图片。',
      },
      {
        question: '实时进度计数器会显示大文件夹的处理进度吗？',
        answer:
          '会。处理运行时，操作按钮会显示“调整中（X/Y）…”，同时缩略图会转动，让您随时了解批次的精确进度。',
      },
      {
        question: '机密客户目录或家庭相册会被发送到云服务器进行调整吗？',
        answer:
          '绝不会。每一次尺寸计算、Canvas 绘制步骤与 ZIP 打包都在您的设备本地执行，私人摄影与未发布的商品图片 100% 留在设备上。',
      },
      {
        question: '批量图片尺寸调整器会清除 EXIF 相机信息与 GPS 坐标吗？',
        answer:
          '会。由于 HTML5 Canvas 会把像素数据重绘到目标尺寸，而不会复制原始 EXIF 头信息，位置标签与相机序列号都会自动清除。',
      },
      {
        question: '下载的 ZIP 压缩包叫什么名字？',
        answer:
          '点击全部下载（ZIP）后，会在浏览器本地生成 bulk_resized_compressmypic.zip，将队列中所有调整成功的图片干净地打包进一个压缩包。',
      },
      {
        question: '导出 ZIP 之前，能从 20 张图片的批次中删除一张误加的文件吗？',
        answer:
          '可以。点击任意单张卡片上的垃圾桶图标，只会删除那一张图片，不会影响其余 19 张调整结果。',
      },
      {
        question: '批量图片尺寸调整器与批量图片压缩器有什么区别？',
        answer:
          '批量图片压缩器保持原始像素宽高不变，只通过有损压缩减小文件体积。相比之下，这款批量图片尺寸调整器会主动改变批量图片的像素尺寸与边界框，并可同时设置格式与画质。',
      },
      {
        question: '已经完成的调整批次还能再添加照片吗？',
        answer:
          '可以。随时将更多文件拖到上传拖放区，它们会用当前生效的调整策略自动处理，并加入最终的全部下载（ZIP）汇总。',
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
    name: '批量图片转换器',
    shortDescription: '一次转换多个 JPG、PNG、HEIC、SVG 和 BMP 文件，并打包为 ZIP。',
    category: 'convert',
    seoTitle: '批量图片转换器免费在线 – 批量更换格式并打包 ZIP',
    seoDescription:
      '使用免费的批量图片转换器在线版，在浏览器中统一转换混合格式文件夹。将 HEIC、PNG、SVG、AVIF 与 BMP 批量转为 WebP、JPG 或 PNG，可自定义文件名后缀与透明填充色。单文件最大 25 MB，支持 ZIP 导出，无需注册，文件全程在本地处理，隐私有保障。适合开发者与内容团队统一素材库。',
    h1: '免费批量图片转换器',
    subtitle:
      '使用免费的批量图片转换器，一次统一混合文件夹中的苹果 HEIC 照片、AVIF 网页下载、SVG 图标、透明 PNG 与旧版 BMP 位图。本工具专为开发者、内容管理员以及需要标准化整个素材库的用户打造，可在本地干净地将单文件最大 25 MB 的批次转换为 WebP、JPG 或 PNG，支持可选文件名后缀与单次 ZIP 下载。',
    howToSteps: [
      {
        title: '拖入混合格式的图片批次',
        description:
          '将 JPG、PNG、WebP、HEIC、SVG、BMP、GIF 或 AVIF 任意组合上传到拖放区，每个文件最大 25 MB。',
      },
      {
        title: '选择目标格式：WebP、JPG 或 PNG',
        description:
          '追求网站速度选 WebP（网页最小），广泛分享选 JPG（通用），清晰图形选 PNG（无损透明）。',
      },
      {
        title: '可选文件名后缀与透明填充',
        description:
          '输入 _web 这类可选文件名后缀（留空也可以），如果将透明图片转为 JPG，请选择透明填充底色。',
      },
      {
        title: '设置输出画质百分比',
        description:
          '为 WebP 或 JPG 导出调节 10% 到 100% 的画质滑块（选择无损 PNG 时会自动禁用）。',
      },
      {
        title: '查看批次总计与视觉对比',
        description:
          '检查每个文件的字节变化与批量转换摘要横幅，并在示例项目上打开对比以验证清晰度。',
      },
      {
        title: '保存单个文件或全部下载（ZIP）',
        description:
          '点击单张卡片上的下载，或点击全部下载（ZIP）导出 bulk_converted_webp.zip、bulk_converted_jpg.zip 或 bulk_converted_png.zip。',
      },
    ],
    features: [
      {
        title: '混合输入批量处理',
        description: '将 HEIC、PNG、SVG 与 JPEG 一起拖入同一批次，统一转换为一种格式。',
      },
      {
        title: '透明底色与后缀选项',
        description: '自定义白色或彩色 JPG 底色背景，并干净地添加可选文件名后缀。',
      },
      {
        title: '批次体积汇总',
        description: '查看整个批次转换前后的总体积对比。',
      },
      {
        title: '100% 本地 WebAssembly 与 Canvas',
        description: '文件永远不会被上传——就连 iPhone 的 HEIC 转换也在您的设备上运行。',
      },
    ],
    faqs: [
      {
        question: '可以在同一个批量图片转换器队列中混合不同类型的文件吗？',
        answer:
          '可以。您可以把苹果 HEIC、现代 AVIF、透明 PNG、矢量 SVG、旧版 BMP、GIF、WebP 与 JPG 文件拖入同一次上传，整个合集都能以一种统一格式导出。',
      },
      {
        question: '批量转换时，可选文件名后缀有什么用？',
        answer:
          '输入 _web 或 _v2 这类标签后，后缀会加在新扩展名之前，生成 hero_web.webp 这样干净的文件名。这样可以防止新转换的素材与共享项目文件夹中同名的源文件冲突。',
      },
      {
        question: '批量转换摘要如何计算整个批次的影响？',
        answer:
          '文件处理完成后，深色摘要横幅会汇总所有已转换文件的原始字节数，并在旁边显示转换后的总字节数，让您立即了解整个文件夹的存储或带宽变化。',
      },
      {
        question: '把透明 PNG 与 SVG 统一为 JPG 格式会发生什么？',
        answer:
          '选择 JPG（通用）后会出现透明填充颜色选择器（默认为白色 #ffffff）。PNG 或 SVG 中的半透明区域会平滑地融合到您选择的背景色上，而不是变成纯黑。',
      },
      {
        question: '为什么选择 PNG（无损透明）时画质滑块会被禁用？',
        answer:
          'PNG 使用无损 DEFLATE 编码，会逐像素完整保留解码后的每一个像素，没有有损画质等级的概念。只要选择 WebP 或 JPG，10% 到 100% 的画质滑块就会立即解锁。',
      },
      {
        question: '不用重新上传，能把一文件夹混合照片先转 WebP 再转 JPG 吗？',
        answer:
          '可以。随时将“批量转换格式”从 WebP 切换到 JPG，也可以更新文件名后缀，再点击全部转换（N），即可在内存中重新处理已缓存的文件，拿到第二个 ZIP。',
      },
      {
        question: 'ZIP 文件名能看出我导出了哪种目标格式吗？',
        answer:
          '点击全部下载（ZIP）后，会直接在浏览器中生成 bulk_converted_webp.zip、bulk_converted_jpg.zip 或 bulk_converted_png.zip。文件名中带有格式信息，下载文件夹里多个格式的导出也很容易区分。',
      },
      {
        question: '全部统一为 WebP 后，PNG 标志与 SVG 图标的透明度能保留吗？',
        answer:
          '可以。WebP（网页最小）与 PNG（无损透明）都能干净地保留透明 PNG、WebP 与独立 SVG 文件的完整 8 位透明度。',
      },
      {
        question: '如果旧浏览器无法解码批次中的混合 AVIF 文件，会怎么样？',
        answer:
          '如果某个文件使用的编解码器是您的浏览器不支持的（例如旧浏览器上的 AVIF），只有那张卡片会显示明确的错误提示。同一批次中的其他 JPG、PNG 或 HEIC 项目都会正常完成。',
      },
      {
        question: 'iPhone 的 HEIC 批次是在远程云服务器上转换的吗？',
        answer:
          '不是。就连苹果 HEIC 与 HEIF 的解码也是在 HTML5 Canvas 编码您选择的输出格式之前，通过客户端 WebAssembly 在您的浏览器标签页内本地运行。',
      },
      {
        question: '批量图片转换器中单个文件最大可以有多大？',
        answer:
          '批次队列中的每张图片最大 25 MB。这个上限足以容纳高像素相机照片、分层 PNG 导出与未压缩的 BMP 档案。',
      },
      {
        question: '批量转换文件夹中包含动态 GIF 会怎么样？',
        answer:
          'HTML5 Canvas 会把上传的 .gif 首帧光栅化为清晰的静态 WebP、JPG 或 PNG 文件，同时完整保留宽高。如果想保留循环帧动画，请使用 GIF 压缩器。',
      },
      {
        question: '批量格式转换会改变原始图片的宽高吗？',
        answer:
          '不会。所有输出都会 100% 保留原始像素宽高，不做任何改动。如果同时需要调整尺寸或设置尺寸上限，请改用批量图片尺寸调整器。',
      },
      {
        question: '为什么把压缩过的 JPEG 转为 PNG 后，批次摘要总计看起来变大了？',
        answer:
          '无损 PNG 每个照片像素存储的数据远多于有损 JPEG。除非工作流程严格要求 .png，否则把混合网页批次以 85% 的 WebP 转换，通常能在保持清晰画质的同时大幅节省空间。',
      },
      {
        question: '转换混合文件夹后，内嵌的 EXIF 相机标签还会保留吗？',
        answer:
          '不会。通过 HTML5 Canvas 渲染图片时，会干净地清除所有转换文件中的 EXIF 元数据块、相机序列号与 GPS 标签。',
      },
      {
        question: '导出 ZIP 之前，能在单张卡片上对比原始与转换后的像素吗？',
        answer:
          '可以。点击任意已完成文件卡片上的对比，即可在分屏对比查看器中并排检查精细边缘与颜色。',
      },
      {
        question: '转换完第一批文件后再添加文件会怎么样？',
        answer:
          '新拖入的文件会用当前选择的目标格式、画质、后缀与底色自动转换，然后干净地合并到当前队列与共享 ZIP 汇总中。',
      },
      {
        question: 'SVG 文件中的外部网络字体或链接远程图片会包含在批量转换中吗？',
        answer:
          '出于浏览器安全考虑，HTML5 Canvas 会对独立 SVG 进行沙箱隔离，阻止获取远程 URL 或外部网络字体。包含路径、渐变与内联 CSS 的自包含 SVG 可以干净地转换。',
      },
      {
        question: '可以从已转换列表中只删除一张失败或不需要的图片吗？',
        answer:
          '可以。点击卡片上的垃圾桶按钮，即可将该图片从列表中排除，并根据剩余文件重建摘要与 ZIP 下载。',
      },
      {
        question: '什么时候应该选这款批量转换器，而不是 HEIC 转 JPG 这类单格式转换工具？',
        answer:
          '单格式工具会为某一条特定迁移路径预先设置严格的文件过滤与默认值。当文件夹中混有多种不同扩展名，且全部需要一次转为 WebP、JPG 或 PNG 时，请打开这款批量图片转换器。',
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
    name: '网页图片优化器',
    shortDescription: '为 Core Web Vitals 速度优化主图、商品图与卡片图。',
    category: 'compress',
    seoTitle: '网页图片优化器免费在线 – 提升 Core Web Vitals 速度',
    seoDescription:
      '使用免费的网页图片优化器在线版，在浏览器中为网站提速。提供 WebP 预设，可按主图、商品图与卡片图自动调整尺寸与画质，自动清除 EXIF 标签，并生成响应式 HTML img 代码。支持 ZIP 打包下载，助力改善 Core Web Vitals，图片全程不出设备。适合前端开发者、电商商家与技术 SEO 团队。',
    h1: '网页图片优化器（Core Web Vitals 就绪）',
    subtitle:
      '使用在浏览器中直接运行的免费网页图片优化器，准备为 Core Web Vitals（LCP 与 CLS）打造的快速加载网站图形。本工具专为前端开发者、Shopify 商家与技术 SEO 打造，将经过验证的 WebP 与 JPG 位置预设（单文件最大 25 MB）与自动 EXIF 清除、可复制的 HTML <img> 标签以及单次 ZIP 下载结合在一起。',
    howToSteps: [
      {
        title: '从 5 个网页性能预设中选择一个',
        description:
          '选择主图/横幅（1600px WebP 80%）、电商商品（1200px WebP 82%）、卡片/缩略图（640px WebP 75%）、社交 OG/邮件（1200px JPG 82%）或视网膜 2 倍图（1920px WebP 88%）。',
      },
      {
        title: '自定义网页格式、最大尺寸或画质',
        description:
          '在 WebP、JPG 或 PNG 之间切换，将最大尺寸（长边）从 640 px 调到 1920 px（或保持原始尺寸），并将画质调到 20% 到 95%。',
      },
      {
        title: '将原始网站素材拖入上传区',
        description:
          '上传 JPG、PNG、WebP、HEIC、SVG、BMP、GIF 或 AVIF 图片，每个文件最大 25 MB，并勾选仅缩小较大图片，避免小图标膨胀。',
      },
      {
        title: '查看页面体积节省并对比画质',
        description:
          '在网页性能摘要中查看总共节省的页面体积，检查每张卡片的网页就绪徽章，并通过对比并排检查边缘。',
      },
      {
        title: '复制响应式 <img> HTML 代码片段',
        description:
          '点击任意已完成卡片上的复制 <img>，即可获得包含宽度、高度、loading="lazy" 与 decoding="async" 的可粘贴标记。',
      },
      {
        title: '下载单个 -web 素材或 ZIP 包',
        description:
          '保存单个 <名称>-web 文件，或点击全部下载（ZIP），干净地下载 web_optimized_compressmypic.zip。',
      },
    ],
    features: [
      {
        title: '网页就绪预设',
        description:
          '针对 LCP 与 PageSpeed Insights 预先配置的尺寸上限与 WebP/JPG 画质最佳点。',
      },
      {
        title: '可复制的 <img> HTML 代码片段',
        description:
          '生成响应式 width、height、loading="lazy" 与 decoding="async" 属性，防止布局偏移（CLS）。',
      },
      {
        title: '自动清除 EXIF 与防放大保护',
        description: '清除臃肿的相机元数据，避免无谓地放大较小的图标。',
      },
      {
        title: '交互式前后对比检查器',
        description: '部署到生产环境之前，并排验证视觉清晰度。',
      },
    ],
    faqs: [
      {
        question: '5 个网页性能预设如何对应真实的网站位置？',
        answer:
          '主图/横幅上限为 1600 px WebP（80%），电商商品上限为 1200 px WebP（82%），卡片/缩略图上限为 640 px WebP（75%），社交 OG/邮件为兼容爬虫输出 1200 px JPG（82%），视网膜 2 倍图保留最高 1920 px WebP（88%）。点击任意预设后，已加载的文件也会自动重新优化。',
      },
      {
        question: '复制 <img> 按钮如何帮助提升 Core Web Vitals 分数？',
        answer:
          '点击复制 <img> 会复制一段语义化 HTML 标签，其中包含精确的输出宽高属性，以及 loading="lazy" 与 decoding="async"。明确的尺寸能让浏览器在页面布局时预留精确空间，从而消除累积布局偏移（CLS）。',
      },
      {
        question: '复制 HTML 标签后，首屏主图上应该保留 loading="lazy" 吗？',
        answer:
          '对于卡片与首屏以下的图片，loading="lazy" 是理想选择。对于加载时立即可见的唯一一张顶部主图/横幅 LCP 图片，请在代码中删除 loading="lazy"（或设为 fetchpriority="high"），让浏览器立即获取它。',
      },
      {
        question: '为什么社交 OG/邮件预设会把网页格式从 WebP 切换为 JPG？',
        answer:
          '一些社交链接爬虫、旧版 Slack/Outlook 与新闻通讯平台仍然无法可靠地渲染 WebP 的 OpenGraph 预览。选择 1200 px、82% 的 JPG，既能快速加载，又能在任何地方都稳定显示预览卡片。',
      },
      {
        question: '为什么仅缩小较大图片可以保护 UI 图标与小缩略图？',
        answer:
          '勾选该复选框后，即使选择了电商商品（最大 1200px），上传 400×400 px 的作者头像时，头像也会保持 400×400 px，而不是被模糊地放大到 1200 px。取消勾选后，较小素材会在严格需要时放大到所选长边。',
      },
      {
        question: '清除 EXIF 与 GPS 元数据如何减少网页体积？',
        answer:
          '相机导出文件常在 EXIF 块内嵌 30 KB 到 150 KB 的缩略图预览、Lightroom 编辑历史与 GPS 坐标。通过 HTML5 Canvas 重新编码后，部署前所有非像素开销都会被干净地清除。',
      },
      {
        question: '为什么下载的文件名会自动加上 -web？',
        answer:
          '每个输出都会在扩展名之前加上 -web，生成 sneaker-web.webp 这样干净的文件名。开发者可以将生产素材放入公开文件夹，而不会覆盖原始高分辨率母版。',
      },
      {
        question: '复制 <img> 中的 alt 属性是如何生成的？',
        answer:
          '代码片段会自动去掉原始文件名的扩展名，并把连字符与下划线转换为易读的空格，放入 alt="..." 中。粘贴到生产 HTML 时，请务必将其完善为描述性的人类语言。',
      },
      {
        question: '为什么网页图片优化器默认使用电商商品（最大 1200px · WebP 82%）？',
        answer:
          '1200 px 宽、82% 的 WebP 在视网膜手机与标准笔记本上都能提供清晰的产品缩放画质，同时能把数 MB 的单反文件缩小 80% 到 95%。既避免了 640 px 裁剪过软，也避免了 4000 px 原图的臃肿。',
      },
      {
        question: '网页格式为 PNG 时，为什么已经压缩过的小 PNG 会变红并显示“变大了”警告？',
        answer:
          '通过全彩 HTML5 Canvas 重新编码一个微小的调色板索引 PNG 时，如果不改变尺寸，可能会生成稍重的无损 PNG。请将网页格式切换为 WebP，以极小的字节体积保留透明度。',
      },
      {
        question: '可以一键批量优化 30 张原始博客图片以提升 Lighthouse 速度吗？',
        answer:
          '可以。每个文件最大 25 MB，拖入整个博客媒体集，查看网页性能摘要中总共节省的页面体积；当 2 个或更多文件完成时，即可下载 web_optimized_compressmypic.zip。',
      },
      {
        question: '为什么画质滑块上限是 20% 到 95%，而不是 100%？',
        answer:
          '以 100% 画质保存 WebP 或 JPG 时，字节体积会指数级膨胀，而在网页显示上几乎看不到差别，还会损害最大内容绘制（LCP）。上限 95% 能让视网膜 2 倍图保持极其锐利，又不会意外产生 10 MB 的负载。',
      },
      {
        question: 'WebP 输出会保留上传的 PNG 与 SVG 的透明背景吗？',
        answer:
          '会。只要网页格式设为 WEBP 或 PNG，完整的透明度都会完好保留；而选择 JPG 时，透明区域会合成到干净的白色（#ffffff）上。',
      },
      {
        question: '预发布网站截图或未发布的产品上线图会被上传到外部服务器吗？',
        answer:
          '不会。预设调整尺寸、WebP 编码、EXIF 清除与 HTML 标签生成全部严格在您的浏览器标签页内运行，未公开的营销图形始终保密。',
      },
      {
        question: '点击网页性能预设后，还能自定义组合设置吗？',
        answer:
          '可以。手动更改网页格式、最大尺寸或画质后，当前预设指示会干净地切换为自定义，然后您就可以点击网页优化（N），使用自己精确定制的方案。',
      },
      {
        question: '直接上传苹果 iPhone 的 HEIC 照片用于博客会怎么样？',
        answer:
          '客户端 WebAssembly 会在浏览器标签页内原生解码最大 25 MB 的 HEIC 与 HEIF 照片。随后浏览器会将其调整到您选择的最大尺寸，并编码为可直接发布的轻量 WebP 或 JPG 素材。',
      },
      {
        question: '卡片/缩略图预设与视网膜 2 倍图相比如何？',
        answer:
          '卡片/缩略图把长边上限设为 640 px、75% WebP，让多卡片存档网格保持超轻量。相比之下，视网膜 2 倍图允许最高 1920 px、88% WebP，让高 DPI 展示截图保持极其锐利。',
      },
      {
        question: '选择保持原始尺寸后，是否仍会压缩并清除 EXIF 元数据？',
        answer:
          '会。选择保持原始尺寸后，像素宽高保持不变，同时仍会转换为您选择的网页格式、应用画质滑块，并清除隐藏的 EXIF 标签。',
      },
      {
        question: '发布到文档之前，能直观验证截图中的 UI 文字是否清晰吗？',
        answer:
          '可以。点击任意卡片上的对比，即可打开并排对比查看器，在部署前检查文字清晰度。',
      },
      {
        question: '什么时候应该用这款网页图片优化器，而不是批量图片压缩器？',
        answer:
          '当您希望在混合存档中保留原始尺寸时，请使用批量图片压缩器。当您要构建生产网页，并希望利用响应式尺寸上限、WebP 预设、EXIF 清除与可复制的 <img> HTML 标签时，请选择这款网页图片优化器。',
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
    name: 'GIF 压缩器',
    shortDescription: '通过减少调色板颜色、缩放尺寸与删减帧来压缩动态 GIF。',
    category: 'compress',
    seoTitle: 'GIF 压缩器在线免费 – 缩小动态 GIF 体积',
    seoDescription:
      '使用免费的 GIF 压缩器在线版，在浏览器中缩小循环动图体积。通过降低调色板颜色、缩放尺寸或删减冗余帧来压缩动画，并提供实时并排预览。支持最大 30 MB 的 GIF 文件，无需上传服务器、无水印，动画时序与循环次数完整保留。适合 Slack、Discord、邮件营销与文档作者使用，画质与体积可自由平衡。',
    h1: '免费在线动态 GIF 压缩器',
    subtitle:
      '使用免费的动态 GIF 压缩器，直接在浏览器内干净地缩小臃肿的循环 GIF87a 与 GIF89a 动画，不会把它变成静态图片。本工具专为 Slack、Discord、邮件营销人员与文档作者打造，可处理最大 30 MB 的文件，将三个真正的压缩手段——调色板颜色限制、输出缩放与帧率优化——与实时并排动态播放结合在一起。',
    howToSteps: [
      {
        title: '拖入最大 30 MB 的动态或静态 GIF',
        description:
          '将任意 .gif 文件（最大 30 MB）上传到拖放区，在本地解码其帧、尺寸、处置方式与时间延迟。',
      },
      {
        title: '选择快捷预设或手动微调',
        description:
          '点击轻度（192 色、100%）、均衡（96 色、85%）或最大压缩（64 色、75%、每隔一帧删除一帧），也可以手动调整每个参数。',
      },
      {
        title: '降低调色板颜色限制（16–256 色）',
        description:
          '将调色板颜色限制滑块从 256 色一路拖向 32 色或 16 色（或点击 256、128、64、32 快捷按钮），缩小 LZW 颜色表。',
      },
      {
        title: '调整输出缩放与帧率优化',
        description:
          '选择输出缩放预设（100%、85%、75%、50% 或 25%），也可以选择每隔一帧或每三帧保留一帧，播放速度会自动保持真实。',
      },
      {
        title: '运行压缩 GIF 并对比实时动画',
        description:
          '并排观看原始与压缩后的实时动态预览，查看精确字节数、帧数与节省百分比。',
      },
      {
        title: '下载压缩后的 GIF',
        description:
          '点击下载压缩后的 GIF，将 <文件名>_compressed.gif 保存到本地，全程零服务器往返、无水印。',
      },
    ],
    features: [
      {
        title: '真正的客户端 GIF 重新编码',
        description:
          '在本地解码 GIF 帧、处置方式与循环次数，再用按需加载的颜色量化重新编码——零服务器上传。',
      },
      {
        title: '3 个压缩手段',
        description:
          '通过减少调色板颜色（256 色降至 32 色）、缩放尺寸（100% 降至 25%）与智能跳帧来缩小体积。',
      },
      {
        title: '保持时序的跳帧',
        description:
          '删除每隔一帧或每隔两帧时，保留帧的延迟会自动合并，播放速度保持自然。',
      },
      {
        title: '诚实的字节对比',
        description:
          '显示压缩前后的精确文件大小与帧数——并在需要更强调色板或缩放缩减时明确告知。',
      },
    ],
    faqs: [
      {
        question: '这款 GIF 压缩器会完整保留动画时序、循环次数与动作吗？',
        answer:
          '会。它会在本地解码每一帧 GIF、每帧毫秒延迟、处置方式与循环元数据，然后重新编码为真正的动态 GIF89a 文件，而不是把它压平成静态图片。',
      },
      {
        question: '删除帧之后，动画速度如何保持自然，而不是快进播放？',
        answer:
          '当您选择每隔一帧删除或每三帧保留一帧时，压缩器会把被跳过帧的毫秒时长累加到保留帧上。总循环时长保持准确，帧数据总量则减少一半到三分之二。',
      },
      {
        question: '轻度、均衡与最大压缩分别会应用哪些精确设置？',
        answer:
          '轻度设为 192 色调色板、100% 缩放并保留全部帧；均衡降至 96 色、85% 缩放并保留全部帧。最大压缩则结合 64 色、75% 缩放与每隔一帧删除，适合 Discord 或 Slack 的严格文件上限。',
      },
      {
        question: '为什么初次用均衡或 128 色压缩后，结果比原有的小 GIF 还稍大？',
        answer:
          '桌面工具制作的精良 GIF 常常依赖帧与帧之间的微小脏矩形补丁，而 Canvas 重新编码会构建干净的量化完整帧。如果出现琥珀色提示，请把调色板颜色限制降到 64 色或 32 色，把输出缩放降到 75% 或 50%，或每隔一帧删除一帧。',
      },
      {
        question: '哪个手段能在不毁掉屏幕录制的前提下最快削减动态 GIF 文件体积？',
        answer:
          '把输出缩放从 100% 降到 75% 或 50%，像素面积会立即减少 44% 到 75%，同时 UI 文字保持可读。75% 缩放搭配 64 到 96 色调色板，对文档截屏尤其有效。',
      },
      {
        question: '为什么 1 帧或 2 帧 GIF 的帧率优化按钮会被禁用？',
        answer:
          '对只有 1 帧或 2 帧的文件每隔一帧或每隔两帧删除一帧，会让动画完全失去动作。因此只要解码后的 GIF 帧数不超过 2 帧，这些跳帧按钮就会自动锁定。',
      },
      {
        question: 'GIF 压缩器支持的最大动态 GIF 文件有多大？',
        answer:
          '您可以上传最大 30 MB 的 GIF87a 或 GIF89a 动画。浏览器逐帧量化并重新编码时，进度会干净地显示为“压缩 GIF（X%）…”。',
      },
      {
        question: '把调色板颜色限制降到 64 色以下，对照片类反应 GIF 与 UI 截屏的影响一样吗？',
        answer:
          '不一样。品牌颜色有限的扁平软件 UI 动画在 32 色或 64 色下依然清晰；而带有肤色渐变的真人视频片段在极低调色板下会出现色带——因此对电影片段来说，稍微降低缩放或帧率往往更干净。',
      },
      {
        question: '下载之前可以并排预览原始与压缩后的动画吗？',
        answer:
          '可以。深色字节汇总条下方有两个实时动态播放器，同时显示原始 GIF 与压缩后 GIF，并标注精确像素尺寸与文件大小，让您立即发现任何卡顿或色带。',
      },
      {
        question: '在小贴纸 GIF 上选择 25% 输出缩放时，最小输出分辨率是多少？',
        answer:
          '输出尺寸会被安全地限制在每边最小 16×16 像素。这样即使选择 25% 缩放，微小的反应 GIF 也不会坍缩成无效的零像素文件。',
      },
      {
        question: '不用刷新，能对同一张上传 GIF 多次测试压缩吗？',
        answer:
          '可以。解码后的帧缓冲会保留在内存中，您可以自由调整调色板颜色限制（16–256）、输出缩放或帧率优化，再点击压缩 GIF，几秒内就能再次完成。',
      },
      {
        question: 'GIF 压缩器如何在不把大动画上传到服务器的情况下在浏览器内运行？',
        answer:
          '它直接从上传的 ArrayBuffer 中用 JavaScript 解码帧，并按需延迟加载轻量 LZW GIF 编码器与颜色量化器。私人的 Slack 截屏、缺陷报告与产品演示永远不会离开您的设备。',
      },
      {
        question: '为什么同样片段的 GIF 比 MP4 视频压缩得少得多？',
        answer:
          'GIF 是 1989 年的无损 LZW、256 色帧格式，没有现代的帧间运动补偿。结合适度缩小（75% 到 50%）、较低调色板（64 到 96 色）与 2 倍跳帧，可以在标准 .gif 规范内获得最佳字节节省。',
      },
      {
        question: '压缩带有透明像素的动态 GIF 时，背景透明度会保留吗？',
        answer:
          '会。在浏览器重新编码过程中，会跨帧跟踪源 GIF 中解码出的透明索引与帧处置方式。',
      },
      {
        question: '保存优化后的动画时使用什么文件名？',
        answer:
          '点击下载压缩后的 GIF 后，会导出以 _compressed.gif 结尾的规范文件名，例如 demo_walkthrough_compressed.gif。您的原始母版动画在磁盘上完全不受影响。',
      },
      {
        question: '可以把 GIF 缩小到符合 Discord 8 MB/10 MB 或 Slack 上传限制吗？',
        answer:
          '可以。拖入最大 30 MB 的动画，测试均衡或最大压缩，在汇总卡片顶部查看实时压缩后大小读数；如果还需要进一步减重，把输出缩放调到 50% 即可。',
      },
      {
        question: '点击重置会干净地清除所有缓存的帧内存吗？',
        answer:
          '会。点击重置会撤销活动的 Blob URL 并清除浏览器内存中的解码帧缓冲，让您可以顺畅地加载下一张大 GIF。',
      },
      {
        question: 'GIF 压缩器与 GIF 制作器有什么区别？',
        answer:
          'GIF 制作器用单独的 JPG、PNG 或 WebP 静帧创建全新的动画。相比之下，这款 GIF 压缩器接收已有的臃肿 .gif 动画，通过调色板、缩放与删帧来缩小文件体积。',
      },
      {
        question: '也可以上传静态单帧 .gif 文件吗？',
        answer:
          '可以。静态单帧 GIF 会加载为 1 帧文件，您可以通过输出缩放缩小尺寸，并把调色板颜色限制一路降到 16 色，干净利落地压缩。',
      },
      {
        question: '压缩后的 GIF 会加水印、帧数上限或服务器排队吗？',
        answer:
          '不会。压缩以浏览器全速在本地执行，零水印、零注册、无限次重复运行。',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'HEIC 转 JPG',
    shortDescription: '在浏览器中将苹果 iPhone 的 HEIC/HEIF 照片转换为通用 JPG。',
    category: 'convert',
    seoTitle: 'HEIC 转 JPG 转换器免费在线 – 转换 iPhone 照片',
    seoDescription:
      '使用免费的 HEIC 转 JPG 转换器在线版，将苹果照片转为通用文件。本地 WebAssembly 解码技术可在浏览器中私密转换 iPhone 照片，支持批量处理与 ZIP 导出，画质可调。单文件最大 25 MB，无需注册，照片全程不出设备。适合 Windows 用户与求职申请人，画质 20% 到 100% 可调。',
    h1: '免费在线 HEIC 转 JPG 转换器',
    subtitle:
      '使用在浏览器中本地运行的免费 HEIC 转 JPG 转换器，将苹果 iPhone 与 iPad 的 HEIC 或 HEIF 相册照片转换为通用可读的 .jpg 文件。本工具专为 Windows 用户、求职申请人以及拒绝苹果高效格式的照片冲印店打造，通过客户端 WebAssembly 解码单文件最大 25 MB 的照片，画质可调，并支持单次 ZIP 批量下载。',
    howToSteps: [
      {
        title: '拖入苹果 HEIC 或 HEIF 照片',
        description:
          '从 iPhone、Mac、云备份或 Windows 文件夹中选择或拖入一张或多张 .heic 或 .heif 图片（每张最大 25 MB）。',
      },
      {
        title: '等待本地 WebAssembly 解码完成',
        description:
          '页面会在您的浏览器标签页内直接加载客户端 WebAssembly（heic2any），私密解码苹果的 HEVC 图片容器。',
      },
      {
        title: '调整 JPG 输出画质（20%–100%）',
        description:
          '家庭人像与打印保留接近无损的 90% 默认值，或滑向 75%–85% 以获得更轻的邮件附件，然后点击全部重新转换。',
      },
      {
        title: '查看像素尺寸与大小对比',
        description:
          '在每张卡片上查看原始 HEIC 与输出 JPG 的字节数，并打开对比滑块验证清晰细节。',
      },
      {
        title: '下载 JPG 文件或全部下载（ZIP）',
        description:
          '直接保存单个 .jpg 照片，或点击全部下载（ZIP），一键下载 compressmypic_heic_to_jpg.zip。',
      },
    ],
    features: [
      {
        title: '客户端 WebAssembly 解码 HEIC',
        description: '在浏览器标签页内使用 heic2any，私人相册照片永远不会上传到外部服务器。',
      },
      {
        title: '批量转换与 ZIP 导出',
        description: '将整个文件夹的 iPhone HEIC 照片一次性转换为 JPG，并打包进一个 ZIP。',
      },
      {
        title: '自定义 JPG 画质滑块',
        description: '根据您更看重细节还是更小体积，将输出压缩微调到 20% 到 100%。',
      },
      {
        title: 'Canvas 清除 EXIF 隐私',
        description: 'Canvas 重新编码会自然清除隐藏的 GPS 坐标与相机序列元数据。',
      },
    ],
    faqs: [
      {
        question: '为什么 Windows 电脑、旧软件与上传表单会拒绝 iPhone 的 .heic 照片？',
        answer:
          '苹果从 iOS 11 开始采用 HEIC 容器（基于 HEVC 视频压缩）来节省 iPhone 与 iPad 的存储空间。由于许多 Windows 安装、政府门户、CMS 后台与桌面编辑器缺少授权的 HEVC 编解码器，把 HEIC 转换为标准 JPG 后，照片就能在任何地方立即打开。',
      },
      {
        question: '这款 HEIC 转 JPG 转换器如何在标准网页浏览器内解码苹果文件？',
        answer:
          '大多数浏览器无法在 Windows 或 Linux 的标准图片标签中原生渲染 HEIC 像素。本工具在您自己的标签页内运行客户端 heic2any WebAssembly 解码器，让浏览器把 HEIC 数据流干净地翻译为 RGB 像素，无需远程云服务器。',
      },
      {
        question: '转换过程中，个人相册照片、证件自拍或家庭度假照会被上传到任何地方吗？',
        answer:
          '绝不会。WebAssembly 解码 HEIC 的步骤与 HTML5 Canvas 编码 JPEG 的步骤都在您浏览器内存本地进行，个人照片永远不会离开您的电脑或手机。',
      },
      {
        question: '.heic 与 .heif 文件在这里有什么区别？',
        answer:
          'HEIF 是底层的高效图像文件标准，HEIC 则是苹果为 HEVC 编码的 HEIF 容器使用的文件扩展名。.heic 与 .heif 扩展名（以及对应的 MIME 类型）都会被接受，并无缝解码为 .jpg。',
      },
      {
        question: '为什么转换后的 JPG 文件常常比原始 HEIC 大几 MB？',
        answer:
          '苹果的 HEVC 编码在相似视觉画质下，数据密度大约是经典 JPEG 的两倍。把一张 1.8 MB 的 HEIC 展开为 90% 高细节 JPG，通常会得到 2.5 MB 到 3.5 MB 的文件——如果需要，把 JPG 输出画质调低到 80% 左右有助于把体积再压下来。',
      },
      {
        question: '为什么 iPhone 照片的默认 JPG 输出画质设为 90%？',
        answer:
          '在 90% 时，标准 JPEG 能保留细腻的皮肤纹理、发丝细节与人像模式背景虚化，看不到明显的压缩块。您可以在 20% 到 100% 之间任意滑动，随时点击全部重新转换。',
      },
      {
        question: '转换 iPhone 实况照片（.heic）会保留视频动作，还是导出静态 JPG？',
        answer:
          '当您上传 iPhone 实况照片中的 .heic 静态部分时，解码器会提取该高分辨率帧并导出为通用 .jpg 照片。配对 MOV 片段中的动作视频轨道不会打包进静态 JPEG。',
      },
      {
        question: '可以拖入整个度假相册的 HEIC 文件并下载一个 ZIP 吗？',
        answer:
          '可以。一次性选择数十个 .heic 或 .heif 文件（每张最大 25 MB），等待浏览器在本地逐张解码，然后点击全部下载（ZIP）保存 compressmypic_heic_to_jpg.zip。',
      },
      {
        question: '导出的 JPG 中会保留苹果 iPhone 的 GPS 坐标与位置标签吗？',
        answer:
          '不会。通过 HTML5 Canvas 编码时，会自动清除内嵌的 EXIF GPS 位置、相机序列号与时间戳——在您把转换后的 JPG 发布到网上之前，多了一层隐私保护。',
      },
      {
        question: '为什么解码 1200 万或 4800 万像素的 iPhone ProRAW/HEIC 每张要花一两秒？',
        answer:
          'WebAssembly 中的 HEVC 解压比标准 JPEG 解码需要更重的 CPU 运算，尤其是在 2400 万或 4800 万像素的 iPhone Pro 照片上。由于批次在本地处理，转换速度取决于您的设备处理器，而不是上传带宽。',
      },
      {
        question: 'HEIC 转 JPG 转换过程中，竖拍与横拍的 iPhone 相机方向会如何处理？',
        answer:
          '现代浏览器在把图片解码到 Canvas 上时会读取内嵌的方向标志，确保竖向自拍与横向照片都能正向导出，不会侧向旋转。',
      },
      {
        question: '为什么名为 image.heic 的文件会提示无效 HEIC 错误？',
        answer:
          '有时第三方消息应用会保存损坏的容器，或把错误标签的文件存为 .heic 扩展名，也可能超过了 25 MB 上限。尝试通过隔空投送、iCloud 照片或苹果文件导出的原始副本，即可解决损坏的封装头问题。',
      },
      {
        question: '这里接受的每张 HEIC 或 HEIF 照片最大是多少？',
        answer:
          '队列中支持单文件最大 25 MB。这个上限轻松覆盖标准的 1200 万、2400 万与 4800 万像素 iPhone HEIC 相机拍摄。',
      },
      {
        question: '保存之前可以直观对比解码后的 JPG 与原始 HEIC 预览吗？',
        answer:
          '可以。点击任意结果缩略图或对比按钮，即可在交互式对比弹窗中并排验证清晰度。',
      },
      {
        question: 'iPhone 的 Display P3 广色域在转为 JPG 后颜色还准确吗？',
        answer:
          '在浏览器 Canvas 渲染过程中，广色域颜色会干净地映射到标准 sRGB JPEG 空间。因此颜色在 Windows 显示器、网页浏览器与照片打印终端上都能一致呈现，不会出现泛白偏移。',
      },
      {
        question: '如何让以后的 iPhone 照片不再保存为 HEIC，而是 JPG？',
        answer:
          '在 iPhone 上打开设置，进入相机，点按格式，选择最兼容，即可让新照片保存为 JPG。不过保持高效格式大约能节省一半手机存储——您随时可以在这里批量转换特定的 HEIC。',
      },
      {
        question: '把 4032×3024 的 HEIC 转为 JPG 会损失像素分辨率吗？',
        answer:
          '不会。输出的 JPG 会 100% 保留解码后的像素宽高，不做任何改动，除非您之后另外选择调整尺寸。',
      },
      {
        question: '可以在安卓、Chromebook、Linux 或 Windows 浏览器中粘贴或转换 HEIC 文件吗？',
        answer:
          '可以。由于 heic2any WebAssembly 在 Chrome、Firefox、Edge 与 Safari 中运行，与操作系统无关，因此即使在 Linux 或 Windows 电脑上，无需安装扩展也能干净地打开并转换 iPhone 的 .heic 附件。',
      },
      {
        question: '如果需要把新转换的 JPG 压到 100 KB 以下用于求职门户，该怎么办？',
        answer:
          '可以直接在这里降低 JPG 输出画质并点击全部重新转换，快速减小文件体积。如果仍需要严格的字节级目标，请通过相关工具直接跳转到压缩图片至 100KB。',
      },
      {
        question: '这款转换器也接受 JPG 或 PNG 文件，还是只接受 HEIC 与 HEIF？',
        answer:
          '本页面有意只过滤 .heic 与 .heif 输入，让苹果照片批次保持干净。如果您的文件夹同时混有 PNG、WebP 与 BMP 文件，请使用批量图片转换器。',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'JPG 转 PNG',
    shortDescription: '在浏览器中将 JPG/JPEG 照片转换为无损 PNG 图片。',
    category: 'convert',
    seoTitle: 'JPG 转 PNG 转换器免费在线 – 无损图片转换',
    seoDescription:
      '使用免费的 JPG 转 PNG 转换器在线版，在浏览器中将 JPEG 照片转为无损文件。单张或批量转换均可，像素完整保留，支持 ZIP 导出。单文件最大 25 MB，无需注册、无水印，图片在本地处理，适合打印、设计与严格要求 PNG 格式的上传表单。转换过程完全在本地完成，像素宽高 100% 保留，适合反复编辑使用。',
    h1: '免费在线 JPG 转 PNG 转换器',
    subtitle:
      '使用在浏览器内直接运行的免费 JPG 转 PNG 转换器，将标准 .jpg 与 .jpeg 照片干净地转换为无损 .png 文件。本工具专为打印店、图形编辑与严格要求 PNG 上传的网络表单打造，可锁定已有像素，避免额外的有损压缩损伤，批量处理单文件最大 25 MB 的图片，并即时导出 ZIP。',
    howToSteps: [
      {
        title: '拖入每张最大 25 MB 的 JPG 或 JPEG 照片',
        description:
          '将一张或多张 .jpg 或 .jpeg 图片从电脑、手机或相机卡上传到上传拖放区。',
      },
      {
        title: '确认无损 PNG 编码模式',
        description:
          '注意画质滑块会自动隐藏并显示无损 PNG 编码面板，因为 PNG 永远不会引入有损压缩伪影。',
      },
      {
        title: '检查原始 JPG 与转换后 PNG 的大小',
        description:
          '查看每张文件卡片上的像素尺寸与字节数，并打开对比，并排验证像素保真度。',
      },
      {
        title: '随时添加更多 JPEG 文件或删除个别文件',
        description:
          '向当前会话中拖入更多 .jpg 文件，或在打包前用垃圾桶按钮删除单张卡片。',
      },
      {
        title: '下载单个 PNG 或全部下载（ZIP）',
        description:
          '点击任意结果卡片上的下载 PNG，或点击全部下载（ZIP），将 compressmypic_jpg_to_png.zip 保存到本地。',
      },
    ],
    features: [
      {
        title: '真正的无损 PNG 输出',
        description: '为进一步编辑或存档准备图片时，防止额外的有损代际损伤。',
      },
      {
        title: '批量队列与 ZIP 打包',
        description: '同时将多张 JPEG 转换为 PNG，并导出为一个整齐的 ZIP。',
      },
      {
        title: '零水印、无需注册',
        description: '直接在 Chrome、Firefox、Safari 或 Edge 中无限转换，无需创建账号。',
      },
      {
        title: '100% 本地处理',
        description: '图片留在您的浏览器标签页内——绝不接触远程服务器。',
      },
    ],
    faqs: [
      {
        question: '为什么这款 JPG 转 PNG 转换器的画质滑块会消失？',
        answer:
          '与 JPEG 或 WebP 不同，PNG 使用无损 DEFLATE 压缩，每个像素都会以相同方式编码，不存在画质百分比的权衡。用无损 PNG 编码卡片替代滑块，可以避免误导性的猜测。',
      },
      {
        question: 'JPG 转 PNG 既然是无损的，为什么不能消除已有的模糊 JPEG 方块？',
        answer:
          '无损 PNG 会冻结 JPEG 内当前存储的精确像素，因此之后编辑、裁剪或重新保存时不会产生额外的代际损失。但是，它无法神奇地重建原始相机照片保存为 JPG 时已经丢弃的精细纹理。',
      },
      {
        question: '为什么一张 300 KB 的 JPG 转换后常常膨胀为 1.5 MB 到 3 MB 的 PNG？',
        answer:
          'JPEG 会丢弃 8×8 像素块之间的细微颜色变化以保持小巧，而 PNG 会在整个画面上记录精确的无损 RGB 像素数据。连续色调的照片在无损 PNG 中自然比压缩 JPG 需要多得多的字节。',
      },
      {
        question: '尽管文件更大，什么时候把 JPG 转为 PNG 才是真正有用的？',
        answer:
          '当打印供应商、软件 UI 导入器、徽章门户或像素画编辑器严格要求 .png 文件时，转换为 PNG 必不可少。如果您计划叠加清晰文字并反复编辑，它也能防止每次重新保存 JPEG 时不断累积的压缩伪影。',
      },
      {
        question: '把白色背景的 JPG 转为 PNG 后，背景会变成透明吗？',
        answer:
          '不会。标准 JPEG 文件不存储任何透明度信息，因此 JPG 转 PNG 会生成完全不透明的 .png 图片，保留白色背景。如果需要透明抠图，请之后搭配使用背景移除工具。',
      },
      {
        question: '为什么不能直接把 .jpg 文件扩展名手动改成 .png？',
        answer:
          '只改文件名后缀会让原始 JPEG 二进制字节留在文件里，导致严格的上传验证器、HTML Canvas 加载器与打印软件拒绝或无法打开文件。通过真实的 Canvas 解码与 PNG 重新编码，才能写入有效的 PNG 数据块与文件头。',
      },
      {
        question: '转换后的 PNG 文件会保留原始 JPEG 的精确像素宽高吗？',
        answer:
          '会。每个导出的 .png 都会 100% 保持源 JPG 的自然宽高，零裁剪、零自动调整。',
      },
      {
        question: '可以批量转换 20 张 JPG 扫描件为 PNG 并保存为一个 ZIP 吗？',
        answer:
          '可以。将多张 .jpg 或 .jpeg 文件（每张最大 25 MB）一起拖入，等待浏览器在本地逐张编码 PNG，再点击全部下载（ZIP）下载 compressmypic_jpg_to_png.zip。',
      },
      {
        question: 'JPG 转 PNG 会清除隐藏的相机 EXIF 标签与 GPS 元数据吗？',
        answer:
          '会。将 JPEG 解码到 HTML5 Canvas 并写入全新 PNG 时，会自动丢弃 JPEG 的 EXIF 头、相机型号与 GPS 坐标。',
      },
      {
        question: 'PNG 转换过程中，扫描的证件、收据或个人肖像会被发送到外部服务器吗？',
        answer:
          '绝不会。JPEG 解码、Canvas 渲染、PNG DEFLATE 编码与 ZIP 打包全部严格在您电脑或手机的本地浏览器内存中运行。',
      },
      {
        question: '如果输入的是用 CMYK 印刷颜色保存的 JPEG，会发生什么？',
        answer:
          '现代浏览器在把 JPEG 像素流绘制到 HTML5 Canvas 上时，会将其转换为标准的 8 位 sRGB RGBA 颜色空间。这保证输出的 .png 能在网页浏览器、幻灯片与手机屏幕上准确渲染。',
      },
      {
        question: '“变化”一栏如何干净地显示文件体积增长？',
        answer:
          '把压缩过的 JPG 转为无损 PNG 几乎总是会增加字节体积。因此，每张卡片的“变化”单元格会如实报告精确的正向 +X% 差异，并同时列出原始 JPG 与最终 PNG 的字节大小。',
      },
      {
        question: '可以用对比查看器确认 JPG 与 PNG 之间零色彩偏移吗？',
        answer:
          '可以。点击任意卡片缩略图或对比按钮，即可在下载前于交互式分屏滑帘中并排检查像素。',
      },
      {
        question: '为什么转换后的 PNG 有助于多轮标注或文字叠加？',
        answer:
          '反复重新保存 JPEG 时，每次有损量化都会让边缘轻微劣化。先把源素材转换一次为 PNG，就能得到一个无损中间母版，干净地承受反复图形编辑。',
      },
      {
        question: '.jpg 与 .jpeg 扩展名都能无缝接受吗？',
        answer:
          '可以。上传区同时接受 .jpg 与 .jpeg 扩展名，并输出标准化的 .png 文件，保留您原始文件名的规范化基本名。',
      },
      {
        question: '这个特定页面也能转换 PNG、WebP 或 HEIC 图片吗？',
        answer:
          '本页面有意只接受 JPG/JPEG 输入，以实现干净的一步转换为 PNG。如果您的源文件夹包含其他格式，请使用图片转换器或批量图片转换器。',
      },
      {
        question: '每张上传的 JPEG 最大允许是多少？',
        answer:
          '每张 .jpg 或 .jpeg 文件最大 25 MB。这个宽裕的上限轻松覆盖高分辨率相机导出、单反照片与宽幅数字艺术作品。',
      },
      {
        question: '为什么相机侧拍的人像照片保存为 .jpg 后，导出时却能正向显示？',
        answer:
          '现代浏览器在把解码后的 JPEG 绘制到 HTML5 Canvas 上时，会自动读取内嵌的 EXIF 方向标签。这会把正向永久烘焙进新的 PNG 像素中，让它在每个应用里都正向显示。',
      },
      {
        question: '导出的 PNG 能在 Photoshop、Illustrator、Figma、Canva 与 PowerPoint 中打开吗？',
        answer:
          '可以。HTML5 Canvas 生成的标准 8 位 RGBA .png 文件，在所有桌面设计应用、办公套件、浏览器与移动操作系统中都通用兼容。',
      },
      {
        question: '基于浏览器的 JPG 转 PNG 与云端转换器相比有多快？',
        answer:
          '由于多 MB 照片无需上传或下载等待，本地 Canvas 转换直接在您自己的 CPU 上每张只需毫秒级完成。批次无需在远程服务器队列中等待，就能快速完成。',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'PNG 转 JPG',
    shortDescription: '将臃肿的 PNG 转换为轻量 JPG，并可自定义背景底色。',
    category: 'convert',
    seoTitle: 'PNG 转 JPG 转换器免费在线 – 缩小 PNG 并自选底色',
    seoDescription:
      '使用免费的 PNG 转 JPG 转换器在线版，将臃肿的 PNG 文件转为轻量照片。可为透明区域自选底色，调节画质，支持批量转换与 ZIP 保存。单文件最大 25 MB，无需注册，图片全程在浏览器本地处理，截图与设计稿的隐私有保障。适合博主、营销人员与邮件发送者处理超大 PNG 附件，透明区域再也不会变成纯黑。',
    h1: '免费在线 PNG 转 JPG 转换器',
    subtitle:
      '使用在浏览器中运行的免费 PNG 转 JPG 转换器，把臃肿的 PNG 截图、视网膜截图与图形导出缩小为快速轻量的 .jpg 文件。本工具专为博主、营销人员与处理超大 PNG 附件（每张最大 25 MB）的邮件发送者打造，将画质滑块与自定义透明背景底色选择器结合在一起，让透明区域永远不会变成纯黑。',
    howToSteps: [
      {
        title: '拖入每张最大 25 MB 的 PNG 图片',
        description:
          '将一张或多张 .png 截图、产品渲染图或透明抠图上传到拖放区。',
      },
      {
        title: '选择透明背景底色',
        description:
          '点击白色（#ffffff）、黑色（#000000）、浅灰（#f8fafc）或原生取色器，控制透明像素在不透明主体后方的融合方式。',
      },
      {
        title: '设置 JPG 输出画质（20%–100%）',
        description:
          '保持清晰的 88% 默认值，或在 20%（极小文件）与 100%（最多细节）之间拖动，然后点击全部重新转换。',
      },
      {
        title: '通过对比验证字节节省与锐利边缘',
        description:
          '查看每张卡片节省的百分比，并在交互式前后对比查看器中检查文字或产品边缘。',
      },
      {
        title: '下载 JPG 文件或全部下载（ZIP）',
        description:
          '立即保存单个转换后的 .jpg 照片，或把批次一起打包进 compressmypic_png_to_jpg.zip。',
      },
    ],
    features: [
      {
        title: '自定义透明底色填充',
        description: '透明 PNG 区域会干净地融合到白色、黑色或任意自定义背景色上，而不是变成纯黑。',
      },
      {
        title: '大幅减小文件体积',
        description: '把照片类 PNG 转为 85% JPG 后，文件重量常常能立即缩小 60% 到 85%。',
      },
      {
        title: '前后视觉检查器',
        description: '下载前并排验证清晰度，确保文字与边缘保持锐利。',
      },
      {
        title: '浏览器内私密执行',
        description: '机密截图与文档安全地留在您自己的电脑上。',
      },
    ],
    faqs: [
      {
        question: '为什么 macOS 与 Windows 截图会保存为数 MB 的 PNG，转为 JPG 后却大幅缩小？',
        answer:
          '桌面操作系统默认用无损 PNG 保存截图，忠实存储数百万未压缩的视网膜屏幕像素，每张常常超过 3 MB 到 8 MB。把照片类或丰富 UI 的 PNG 转为 85% 到 90% 的 JPG，通常能为快速邮件与 Slack 分享削减 60% 到 85% 的文件重量。',
      },
      {
        question: '透明背景底色选择器如何防止出现难看的黑框？',
        answer:
          '由于 JPEG 规范没有透明通道，粗糙的转换器常常把空白透明像素默认设为 #000000 黑色，毁掉深色标志或带阴影的抠图。先在画布上涂上您选择的底色（默认为白色，另有黑色、浅灰或任意自定义十六进制值），半透明边缘就能干净地融合。',
      },
      {
        question: '保存 JPG 之前，能为透明 PNG 标志选择深炭色或特定网站品牌色作为背景吗？',
        answer:
          '可以。点击白色、黑色与浅灰快捷按钮旁边的颜色输入框，选择任意精确的十六进制值，再点击全部重新转换即可预览与导出。',
      },
      {
        question: '多高的 JPG 输出画质能让截图文字保持清晰又不臃肿？',
        answer:
          '把 JPG 输出画质保持在 88%（默认值）到 95% 左右，能让软件 UI 文字与图表周围的锐利边缘保持干净。降到 70% 以下时，由于 JPEG 色度抽样，高对比度的红蓝字母周围可能出现轻微的蚊式噪声。',
      },
      {
        question: '为什么一张微小的 20 KB 纯色单色 PNG 图标转为 88% JPG 后反而稍稍变大？',
        answer:
          '索引调色板 PNG 擅长处理带锐利纯色区域的扁平双色图形，而 JPEG 的 8×8 余弦块会在小标志上增加开销。请务必查看“变化”一栏——对于网站用的扁平透明图标，WebP 或保留 PNG 通常比 JPG 更小。',
      },
      {
        question: '应该如何选择 PNG 转 JPG 还是 PNG 转 WebP？',
        answer:
          '当附件必须在 Microsoft Word、PDF 构建器、旧版邮件程序、打印实验室或拒绝 WebP 的门户中打开，或者您有意需要纯白背景时，请选择 PNG 转 JPG。当素材要部署到网站，且保留透明度与最高速度很重要时，请选择 PNG 转 WebP。',
      },
      {
        question: '把透明产品抠图放到白色 #ffffff 底色上，有助于电商平台上架吗？',
        answer:
          '有帮助。亚马逊与 eBay 等平台通常更喜欢主产品缩略图使用清晰不透明的白底 JPG，而不是带透明通道的 PNG，而且白色在 JPEG 内部压缩效率很高。',
      },
      {
        question: '可以一次把 25 张视网膜 PNG 截图全部转换为 JPG 吗？',
        answer:
          '可以。将多张 .png 文件（每张最大 25 MB）拖入队列，选择画质与底色，然后一起下载 compressmypic_png_to_jpg.zip。',
      },
      {
        question: '透明 PNG 窗口截图周围的柔和阴影在压平为 JPG 后会怎么样？',
        answer:
          '带透明渐变的阴影会自然地合成到您选择的底色上，而不是裁成生硬的锯齿轮廓。这样可以在白色或有色背景上呈现平滑干净的阴影，适合幻灯片与文章。',
      },
      {
        question: '机密仪表盘、收据或设计稿会被上传到云端 API 吗？',
        answer:
          '不会。Canvas 底色合成、JPEG 压缩与 ZIP 生成全部在您的浏览器标签页本地执行，敏感截图永远不会离开您的电脑。',
      },
      {
        question: 'PNG 转 JPG 会改变像素宽高吗？',
        answer:
          '不会。每张转换后的 .jpg 都会 100% 保留原始 PNG 的精确宽高。如果还想把视网膜截图缩小到 1 倍尺寸，请使用图片尺寸调整器或批量图片尺寸调整器。',
      },
      {
        question: '为什么画质滑块范围是 20% 到 100%？',
        answer:
          '拖向 20% 可以看到超小文件为强制要求时压缩有多激进，而 85% 到 90% 是照片与幻灯片视觉上的最佳点。选择 100% 时，只要字节重量次要，就能获得最大的 JPEG 细节。',
      },
      {
        question: '看到首次转换结果后，还能更改底色或画质吗？',
        answer:
          '可以。随时选择不同的底色或移动滑块，再点击全部重新转换，无需重新上传即可重新生成所有已加载文件。',
      },
      {
        question: 'PNG 转 JPG 会清除内嵌的 PNG 文本块，例如制作软件或注释吗？',
        answer:
          '会。把像素绘制到 HTML5 Canvas 上时，会清除内嵌的 tEXt、iTXt 与 ICC 配置块，让输出的 JPG 保持精简干净。',
      },
      {
        question: '下载之前能验证转换后 UI 截图的前后边缘锐度吗？',
        answer:
          '可以。点击任意卡片上的对比，即可在分屏查看器中对照无损 PNG 原图拖动检查文字标签与图标。',
      },
      {
        question: '这款专用 PNG 转 JPG 页面接受哪些文件类型？',
        answer:
          '它只过滤 .png 文件（每张最大 25 MB），让您不会意外压平非 PNG 输入。如果混合批次包含 WebP 或 BMP 文件，请尝试批量图片转换器。',
      },
      {
        question: '转换器支持透明隔行（Adam7）PNG 吗？',
        answer:
          '支持。浏览器原生图片解码器在绘制到 Canvas 底色之前，会干净地读取标准与隔行两种 PNG 数据流。',
      },
      {
        question: 'Windows 照片、macOS 预览、WhatsApp 与旧打印机能打开导出的 JPG 吗？',
        answer:
          '可以。标准基线 RGB .jpg 输出在手机、浏览器、办公套件与打印终端上拥有所有数字图片格式中最广泛的兼容性。',
      },
      {
        question: '单个文件下载名与批量 ZIP 文件名分别是什么？',
        answer:
          '单个文件下载会保留您原始文件名的规范化基本名并加上 .jpg 扩展名。2 个或更多文件的批次会整齐地打包进 compressmypic_png_to_jpg.zip。',
      },
      {
        question: '可以在移动端 iOS 或安卓浏览器中干净地转换 PNG 截图吗？',
        answer:
          '可以。底色选择、画质滑块、视觉对比检查器与 ZIP 导出在 iOS 的 Safari 与安卓的 Chrome 中都能直接使用，无需下载应用。',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'JPG 转 WebP',
    shortDescription: '将 JPG 照片转换为新一代 WebP，让网站加载更快、更利于 SEO。',
    category: 'convert',
    seoTitle: 'JPG转WebP在线转换器免费 — 图片更小网站更快',
    seoDescription:
      '免费在线将JPG照片转换为现代WebP格式，无需上传，全部在浏览器内完成。文件更小、页面加载更快、Core Web Vitals得分更高，支持画质滑块（20%–100%）与批量ZIP下载，默认画质82%，一次可转换多个文件，适合博客与网店图片使用，转换前后还能分屏对比清晰度，EXIF隐私数据也会一并清除。',
    h1: '免费在线JPG转WebP转换器',
    subtitle:
      '使用免费的JPG转WebP转换器，把日常JPG照片变成轻量现代的WebP图片，全部在浏览器内完成。为博主、网店店主和开发者打造，页面加载更快、Core Web Vitals得分更高；每个文件最大25 MB，画质可自由选择（默认82%），支持批量处理与一键ZIP下载，图片绝不上传。',
    howToSteps: [
      {
        title: '拖入JPG照片，每个最大25 MB',
        description:
          '将博客、网店或相机胶卷中的一张或多张.jpg/.jpeg照片拖到上传区。',
      },
      {
        title: '设置WebP输出画质（20%–100%）',
        description:
          '照片建议保留默认的82%画质；滑块向20%移动文件更小，向100%移动细节保留最多，设置后点击“全部重新转换”。',
      },
      {
        title: '在每张卡片上查看节省的体积',
        description:
          '每张结果卡片都会显示原始JPG大小、转换后的WebP大小和节省百分比，瘦身效果一目了然。',
      },
      {
        title: '并排对比清晰度',
        description:
          '点击任意卡片上的“对比”，打开分屏视图，检查在所选画质下文字、人脸和边缘是否依然清晰。',
      },
      {
        title: '下载WebP文件或全部下载（ZIP）',
        description:
          '逐个保存.webp文件，或将整个批次打包为compressmypic_jpg_to_webp.zip一键下载。',
      },
    ],
    features: [
      {
        title: 'PageSpeed与LCP得分更快',
        description: 'WebP是Lighthouse和现代浏览器推荐的新一代网页格式。',
      },
      {
        title: '画质自由调节',
        description: '压缩率可在20%至100%之间调节，结果即时预览。',
      },
      {
        title: '批量导出为ZIP',
        description: '整个博客或电商图片文件夹都能在本地几秒内完成优化。',
      },
      {
        title: '零服务器往返',
        description: '使用浏览器内置的WebP编码器，速度快、支持离线、使用更私密。',
      },
    ],
    faqs: [
      {
        question: '同一张照片存为WebP比存为JPG能小多少？',
        answer:
          '在视觉质量相近的情况下，WebP文件通常比同一张照片存为JPG小25%到35%，因为WebP压缩预测像素的方式更高效。具体能省多少取决于照片本身：细节丰富的风景照省得少一些，平滑的天空和影棚照片省得更多。',
      },
      {
        question: '为什么Google推荐用WebP来加快网站速度、改善Core Web Vitals？',
        answer:
          'Google的Lighthouse和PageSpeed工具指出，图片过重是导致最大内容绘制（LCP）得分变慢的主要原因之一。把同一张照片以更轻的WebP形式提供，可以缩短慢速网络下的下载时间，直接改善LCP以及Google用作排名信号的体验得分。',
      },
      {
        question: '哪些浏览器可以直接打开WebP文件，无需安装任何软件？',
        answer:
          '所有现代浏览器都能原生打开WebP：桌面端的Chrome、Edge、Firefox、Safari，以及安卓上的Chrome和iOS上的Safari。无需插件或专用查看器，WebP图片可以直接显示在网页、聊天窗口和大多数现代图片查看器中。',
      },
      {
        question: '网站上的照片从JPG转WebP，画质设置多少最合适？',
        answer:
          '网站照片用80%到85%是最合适的平衡点：看起来与JPG原图几乎没有差别，文件却小得多。本工具默认82%正是出于这个原因；对于细节至关重要的主图，可以提高到90%或更高。',
      },
      {
        question: '把JPG转换为WebP会改变照片尺寸吗？',
        answer:
          '不会。转换只改变文件容器和压缩方式，导出的WebP会100%保留原始JPG的像素宽高。如果还想缩小像素尺寸，转换后请使用图片尺寸调整器指定精确的像素大小。',
      },
      {
        question: 'JPG照片转成WebP后还能保留透明部分吗？',
        answer:
          '不能，因为标准JPG文件没有可以保留的透明通道——JPG里的每个像素都是完全不透明的。如果源图形有透明背景，请改从PNG开始，使用我们的PNG转WebP转换器，它可以完整保留Alpha通道。',
      },
      {
        question: '转换过程中我的JPG照片会被上传到服务器吗？',
        answer:
          '绝不会。转换在你自己的浏览器标签页内的HTML5 Canvas上进行，照片只在本地编码，绝不会离开你的电脑或手机。关闭标签页后，它们就会从浏览器内存中清除。',
      },
      {
        question: '可以一次把整个博客图片文件夹的JPG都转成WebP吗？',
        answer:
          '可以。将多个最大25 MB的.jpg或.jpeg文件拖入队列，为整个批次选择一个画质设置，然后打包为compressmypic_jpg_to_webp.zip一起下载。每个文件独立转换，一个有问题的文件不会拖住其余文件。',
      },
      {
        question: 'JPG变成WebP后，EXIF相机信息和GPS标签会怎样？',
        answer:
          '把像素绘制到HTML5 Canvas上时，内嵌的EXIF数据（包括GPS坐标、相机型号和拍摄时间）会被清除。这样输出的WebP文件更轻巧，在网上发布照片前也能保护你的隐私。',
      },
      {
        question: '为什么转换后的WebP有时比原始JPG还大？',
        answer:
          '非常小或已经高度压缩的JPG重新编码后可能略微变大，尤其是在100%画质下，因为WebP本身也有容器开销。如果文件变大了，把画质降到80%左右，或者保留原始JPG——每张卡片上的“变化”栏会如实显示结果。',
      },
      {
        question: '转换后的WebP文件能在WordPress、Shopify或Wix上使用吗？',
        answer:
          '可以。WordPress、Shopify、Wix、Squarespace和大多数现代建站工具都直接接受WebP上传，浏览器也无需额外设置即可显示。如果遇到非常老旧的主题或插件拒绝WebP，可以用我们的WebP转JPG工具转回去。',
      },
      {
        question: '这里接受的JPG文件最大是多大？',
        answer:
          '每个JPG或JPEG文件最大25 MB，足以容纳高分辨率相机照片和大型截图。由于转换在你的设备上进行，大文件按本地CPU速度处理，没有上传等待时间。',
      },
      {
        question: '在手机浏览器上也能转换WebP吗？',
        answer:
          '可以。画质滑块、批量队列、对比视图和ZIP下载在iOS的Safari和安卓的Chrome上都能使用，无需安装应用。在手机上，非常大的批次只是处理时间稍长一些，因为工作是在手机处理器上完成的。',
      },
      {
        question: '下载前如何确认转换后的WebP依然清晰？',
        answer:
          '点击任意结果卡片上的“对比”，打开分屏视图，拖动查看照片，对照原始JPG检查人脸、文字和边缘。如果哪里看起来发软，提高画质滑块并点击“全部重新转换”。',
      },
      {
        question: '第一次转换后，不用重新上传就能改画质吗？',
        answer:
          '可以。随时把画质滑块移到新数值，点击“全部重新转换”，即可用新设置重新生成所有已加载的文件。已上传的文件仍在队列中，无需再次拖入。',
      },
      {
        question: '网店商品照片用WebP好还是JPG好？',
        answer:
          '对于网站上展示的商品照片，WebP更好：80%到85%的WebP看起来与JPG一样，加载速度却明显更快，这对购物者和搜索排名都有好处。只有在交易平台、印刷厂或买家明确要求JPG时，才保留JPG。',
      },
      {
        question: '下载的WebP文件会保留什么文件名？',
        answer:
          '单个文件下载时，会保留你整理过的原始文件名，只把扩展名改为.webp，例如photo_01.jpg会变成photo_01.webp。两个或更多文件的批次会打包为compressmypic_jpg_to_webp.zip导出。',
      },
      {
        question: '带文字的JPG截图转成WebP后文字会变模糊吗？',
        answer:
          '不会，在85%到90%画质下，截图文字依然清晰，因为WebP能很好地保留锐利的高对比边缘。降到70%以下可能会让小字变软，请用对比视图检查，文字发软时就提高画质。',
      },
      {
        question: '页面加载后，这个转换器能离线使用吗？',
        answer:
          '可以。页面在浏览器中加载完成后，转换完全在本地JavaScript和HTML5 Canvas中进行，没有任何服务器调用。只有加载页面本身或下载完成的文件时才需要联网。',
      },
      {
        question: '什么时候应该保留JPG，而不是转成WebP？',
        answer:
          '当文件必须在老旧软件、邮件附件、印刷厂或仍拒绝WebP的上传平台中打开时，保留JPG。对于发布在现代网站上的任何内容，WebP是更好的选择——而且随时可以用WebP转JPG工具转回去。',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'WebP 转 JPG',
    shortDescription: '将下载的 WebP 图片转换回通用 JPG 文件。',
    category: 'convert',
    seoTitle: 'WebP转JPG在线转换器免费 — 哪里都能打开',
    seoDescription:
      '免费在线将WebP图片转换为通用JPG格式，全程在浏览器内完成。可为透明区域选择白色、黑色或自定义填充色，自由调节画质，批量打包ZIP下载。无需上传，文件不会离开你的设备，邮件附件、Office文档、打印店和老旧软件都能直接使用，通用性极广，随时可转回WebP，下载前可用分屏视图检查效果，转换后还能随时改色重转。',
    h1: '免费在线WebP转JPG转换器',
    subtitle:
      '使用免费的WebP转JPG转换器，把下载的.webp图片变成任何应用、网站或打印机都能打开的经典.jpg文件，全程在浏览器内完成。专为收到网站或聊天软件发来的WebP文件、却被编辑器、办公套件或上传表单拒绝的人打造；每个文件最大25 MB，默认画质88%，支持透明区域填充色选择与批量ZIP导出。',
    howToSteps: [
      {
        title: '拖入WebP图片，每个最大25 MB',
        description:
          '将从网站、聊天窗口或下载文件夹保存的一个或多个.webp文件拖到上传区。',
      },
      {
        title: '为透明区域选择填充色',
        description:
          '选择白色（#ffffff）、黑色（#000000）、浅灰色（#f8fafc）或任意自定义十六进制颜色，因为JPG无法存储透明度。',
      },
      {
        title: '设置JPG输出画质（20%–100%）',
        description:
          '保留默认的88%清晰画质，或把滑块向20%移动得到更小的文件、向100%移动保留最多细节，然后点击“全部重新转换”。',
      },
      {
        title: '把JPG与原始WebP对比',
        description:
          '点击任意卡片上的“对比”，在保存前于分屏视图中检查边缘和文字。',
      },
      {
        title: '下载JPG文件或全部下载（ZIP）',
        description:
          '逐个保存.jpg文件，或将整个批次打包为compressmypic_webp_to_jpg.zip一键下载。',
      },
    ],
    features: [
      {
        title: '解决老旧软件拒绝打开的问题',
        description: '轻松转换WebP图片，供只接受JPG的网站、打印机或老旧应用使用。',
      },
      {
        title: '透明区域安全填充底色',
        description: '透明WebP可以平滑地填充为白色、黑色或任意十六进制背景色。',
      },
      {
        title: '高画质重新编码',
        description: '默认88%画质，在文件体积几乎不增加的情况下保持细节清晰。',
      },
      {
        title: '100%浏览器原生隐私保护',
        description: '没有云端队列或服务器上传——直接在你的设备上即时运行。',
      },
    ],
    faqs: [
      {
        question: '为什么有些应用、打印机和上传表单拒绝.webp文件？',
        answer:
          'WebP是较新的格式，许多老旧桌面程序、打印终端、Microsoft Office版本和政府上传表单都是在WebP出现之前开发的，因此只识别JPG和PNG。把WebP转成JPG，图片立刻可以在任何地方打开，无需让任何人安装软件。',
      },
      {
        question: 'WebP的透明部分变成JPG后会怎样？',
        answer:
          'JPG没有Alpha透明通道，转换时透明像素必须用纯色填充。本工具会用你选择的填充色（默认为白色）填充，因此标志和贴纸会得到干净的纯色背景，而不是黑框。',
      },
      {
        question: '透明WebP贴纸背后的背景色可以自己选吗？',
        answer:
          '可以。在“透明背景填充色”中选择白色、黑色或浅灰色，也可以点击色块输入任意自定义十六进制值。选择在点击“全部重新转换”时生效，因此下载前可以试试不同的背景。',
      },
      {
        question: '把WebP转成JPG会损失画质吗？',
        answer:
          '一定程度的损失不可避免，因为JPG会用有损压缩重新编码像素。不过在默认的88%画质下，照片和截图的差别几乎看不出来。如果原始WebP本身画质已经很低，转换也无法恢复原本就没有的细节。',
      },
      {
        question: '转换后的JPG会保留WebP的像素尺寸吗？',
        answer:
          '会。每个转换后的.jpg都会100%保留原始WebP的精确宽高，不会裁剪或缩放。如果还想缩小像素尺寸，转换后请使用图片尺寸调整器。',
      },
      {
        question: '动态WebP在这里会怎么处理？',
        answer:
          '动态WebP会导出为静态JPG，因为JPG格式无法存储动态画面。你会得到动画中某一帧的清晰静止图，适合用作缩略图和文档——如果需要动态版本，请保留原始WebP文件。',
      },
      {
        question: '转换过程中我的WebP文件会被上传到别处吗？',
        answer:
          '不会。整个转换都在你自己的浏览器标签页内的HTML5 Canvas上进行，图片绝不会发送到服务器、被存储或被他人查看。关闭标签页后，它们就会从浏览器内存中清除。',
      },
      {
        question: '可以一次把多个下载的WebP批量转成JPG吗？',
        answer:
          '可以。将多个最大25 MB的.webp文件拖入队列，为整个批次选择一个填充色和画质，然后打包为compressmypic_webp_to_jpg.zip一起下载。每个文件独立转换。',
      },
      {
        question: '这个转换器接受的最大WebP文件是多大？',
        answer:
          '每个WebP文件最大25 MB，足以容纳高分辨率下载内容和大型截图。转换在你的设备上进行，大文件按本地CPU速度处理，没有上传等待时间。',
      },
      {
        question: '怎样才能让标志背后是纯白背景，而不是黑框？',
        answer:
          '转换前，在“透明背景填充色”中选择白色（#ffffff）——白色是默认设置，因此大多数标志本来就会干净地输出。如果文件用了错误的颜色转换，只需更换色块并点击“全部重新转换”即可重新生成。',
      },
      {
        question: '为什么JPG文件有时比原始WebP还大？',
        answer:
          'WebP的压缩效率高于JPG，因此小体积WebP以88%画质重新编码为JPG后，可能会比源文件大。这是正常现象：你用一点点文件体积换取了通用兼容性。把画质降到75%左右，通常就能让JPG回到原始大小以下。',
      },
      {
        question: '转换后的JPG能在Microsoft Word、PowerPoint或Photoshop中打开吗？',
        answer:
          '可以。标准的基线RGB格式.jpg输出几乎可以在所有办公套件、编辑器、浏览器和打印流程中打开，包括从未支持WebP的老版本。这种通用性正是转换的主要原因。',
      },
      {
        question: '这个转换器会清除WebP文件的元数据吗？',
        answer:
          '会。把像素绘制到HTML5 Canvas上时，内嵌的EXIF、XMP和ICC配置文件数据会被清除，因此输出的JPG更轻巧，也不包含隐藏的位置或相机信息。',
      },
      {
        question: '下载前如何检查JPG看起来是否正确？',
        answer:
          '点击任意结果卡片上的“对比”，打开分屏视图，拖动查看图片，对照原始WebP检查边缘、文字和颜色。每张卡片还会显示原始大小和转换后的大小，因此保存前就能发现意外情况。',
      },
      {
        question: '转换后还能改填充色或画质吗？',
        answer:
          '可以。随时选择另一个填充色色块或移动画质滑块，点击“全部重新转换”，即可在不重新上传的情况下用新设置重新生成所有已加载的文件。原始WebP文件会一直留在队列中，直到你清除它们。',
      },
      {
        question: '下载的JPG文件会保留什么文件名？',
        answer:
          '单个文件下载时，会保留你整理过的原始文件名，只把扩展名改为.jpg，例如banner.webp会变成banner.jpg。两个或更多文件的批次会打包为compressmypic_webp_to_jpg.zip导出。',
      },
      {
        question: 'WebP转JPG能在iPhone和安卓浏览器上使用吗？',
        answer:
          '可以。填充色选择器、画质滑块、对比视图和ZIP下载在iOS的Safari和安卓的Chrome上都能使用，无需安装应用。大型批次在手机处理器上只是处理时间稍长一些。',
      },
      {
        question: '什么时候该选WebP转JPG，而不是WebP转PNG？',
        answer:
          '当你需要体积最小、兼容性最广的文件——用于邮件附件、Office文档、上传平台和打印机时，选择JPG。当必须保留透明度，或编辑时需要像素级完美的无损画质时，选择PNG。',
      },
      {
        question: '为什么带清晰文字的WebP截图转换后看起来稍微软了一点？',
        answer:
          'JPEG使用色度子采样，会让白底红字或蓝字这类高对比边缘略微变软。把画质提高到92%或95%，截图文字就能保持清晰，对比视图可以在下载前确认效果。',
      },
      {
        question: '网站保存的没有扩展名的WebP图片能转换吗？',
        answer:
          '不能直接转换——本页面按.webp扩展名和WebP MIME类型筛选输入，因此请先把文件名改为以.webp结尾。如果文件实际上是网站误标的JPG或PNG，请改用对应的转换器。',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'PNG 转 WebP',
    shortDescription: '将透明 PNG 图片转换为体积更小的透明 WebP。',
    category: 'convert',
    seoTitle: 'PNG转WebP在线转换器免费 — 透明完整保留',
    seoDescription:
      '免费在线将PNG转换为WebP，透明度完整保留。直接在浏览器内压缩标志、图标和截图，支持画质滑块与批量ZIP导出。无需上传，文件不会离开你的设备，网站加载更快，也有助于SEO，透明区域以棋盘格预览呈现，半透明边缘与阴影都原样保留，每个文件最大25 MB，画质默认85%，一次可处理整套图标，无需安装任何应用。',
    h1: '免费在线PNG转WebP转换器',
    subtitle:
      '使用免费的PNG转WebP转换器，把沉重的透明PNG标志、图标和截图压缩成小巧的WebP文件，全程在浏览器内完成。专为需要快速加载透明图形的网页开发者和设计师打造；每个文件最大25 MB，默认画质85%，完整保留Alpha通道，支持批量处理与ZIP下载。',
    howToSteps: [
      {
        title: '拖入PNG图形，每个最大25 MB',
        description:
          '将透明的.png标志、图标、截图或产品抠图拖到上传区。',
      },
      {
        title: '设置WebP输出画质（20%–100%）',
        description:
          '清晰的透明图形建议保留默认的85%画质；滑块向20%移动文件更小，向100%移动细节保留最多，然后点击“全部重新转换”。',
      },
      {
        title: '检查透明度与节省的体积',
        description:
          '每张卡片都会显示原始PNG大小、新的WebP大小和节省百分比，透明度则以棋盘格预览呈现。',
      },
      {
        title: '并排对比边缘与阴影',
        description:
          '点击任意卡片上的“对比”，在分屏视图中检查半透明边缘、渐变和投影。',
      },
      {
        title: '下载WebP文件或全部下载（ZIP）',
        description:
          '逐个保存.webp文件，或将整个批次打包为compressmypic_png_to_webp.zip一键下载。',
      },
    ],
    features: [
      {
        title: '完整保留Alpha透明度',
        description: '与JPG不同，WebP会保留PNG干净的半透明边缘和投影。',
      },
      {
        title: '素材最多缩小70%',
        description: '把数MB的PNG主图和抠图换成轻巧的WebP文件，让网站更快。',
      },
      {
        title: '转换前后分屏视图',
        description: '下载前并排检查抗锯齿边缘和渐变效果。',
      },
      {
        title: '批量处理与ZIP打包',
        description: '整套图标和产品图片都可以在本地转换，没有上传限制。',
      },
    ],
    faqs: [
      {
        question: 'PNG转WebP真的能保留透明背景吗？',
        answer:
          '真的可以。HTML5 Canvas的WebP编码会完整保留8位Alpha通道，因此完全透明的像素保持透明，半透明边缘、柔和阴影和抗锯齿曲线也能保持平滑融合。结果预览会以棋盘格显示透明度，方便你即时确认。',
      },
      {
        question: '同一张图片，WebP比PNG能小多少？',
        answer:
          '取决于视觉复杂度，把PNG转为85%画质的WebP，通常能把文件体积削减50%到80%。照片类PNG和大型截图节省最多，而颜色很少的小型扁平图标节省较少——每张卡片上的“变化”栏会显示精确结果。',
      },
      {
        question: '半透明阴影和柔和边缘在转换后还能保留吗？',
        answer:
          '可以。WebP存储的8位Alpha值与PNG完全相同，因此投影、光晕和羽化边缘的合成效果与原图完全一致。请用对比视图放大边缘，下载前确认柔和程度看起来相同。',
      },
      {
        question: '透明PNG标志最适合用多少画质？',
        answer:
          '默认的85%对大多数标志和图标最合适：边缘保持清晰，文件却大幅缩小。对于印刷级作品或非常精细的线条图，可以把画质提高到90%或95%；降到70%以下可能会让细线和小字变粗糙。',
      },
      {
        question: '怎样一次把整套PNG图标转成WebP？',
        answer:
          '将多个最大25 MB的.png文件拖入队列，为整个批次选择一个画质设置，然后打包为compressmypic_png_to_webp.zip一起下载。每个图标独立转换，一个有问题的文件不会拖住其余文件。',
      },
      {
        question: '把PNG转成WebP时，PNG文件会被上传到服务器吗？',
        answer:
          '不会。转换在你自己的浏览器标签页内的HTML5 Canvas上进行，你的标志、截图和设计素材绝不会离开你的电脑。关闭标签页后，它们就会从浏览器内存中清除。',
      },
      {
        question: '把PNG转成WebP会改变图片尺寸吗？',
        answer:
          '不会。导出的WebP会100%保留原始PNG的像素宽高，只有文件格式和压缩方式改变。如果还想缩小网页用的像素尺寸，转换后请使用图片尺寸调整器。',
      },
      {
        question: '这里接受的PNG文件最大是多大？',
        answer:
          '每个PNG文件最大25 MB，足以容纳大型截图、Retina截图和高分辨率产品渲染图。由于转换在你的设备上进行，大文件按本地CPU速度处理，没有上传等待时间。',
      },
      {
        question: '为什么转换后的WebP比原始PNG还大？',
        answer:
          '颜色很少的小型扁平PNG（比如双色图标）本身已经非常高效，有损WebP编码反而可能增加体积。如果文件变大了，请查看“变化”栏，把这份素材保留为原始PNG；WebP胜出的是照片类和复杂图形。',
      },
      {
        question: '转换后的WebP文件可以直接用在网站上吗？',
        answer:
          '可以。所有现代浏览器都原生显示WebP，WordPress、Shopify、Wix和大多数建站工具都接受WebP上传。透明WebP标志在页眉、按钮和产品图库中的表现与透明PNG完全一样。',
      },
      {
        question: '转换过程中PNG的元数据和文本块会怎样？',
        answer:
          '把像素绘制到HTML5 Canvas上时，内嵌的PNG文本块、创作软件备注和ICC配置文件会被清除。输出的WebP文件保持轻巧，没有隐藏元数据，非常适合在网上发布素材。',
      },
      {
        question: '下载前如何确认透明度得到了保留？',
        answer:
          '结果缩略图会以棋盘格显示透明区域，点击“对比”按钮打开分屏视图，拖动图片即可确认边缘融合是否平滑。如果背景看起来是纯色而不是棋盘格，说明源PNG本身没有透明度。',
      },
      {
        question: '转换后不用重新上传就能改画质吗？',
        answer:
          '可以。随时把画质滑块移到新数值，点击“全部重新转换”，即可用新设置重新生成所有已加载的文件。已上传的PNG仍在队列中，无需再次拖入。',
      },
      {
        question: '网站主图用WebP好还是PNG好？',
        answer:
          '对于照片类或复杂的主图，WebP更好：85%的WebP看起来与PNG一样，加载速度却快得多。PNG胜出的是小型扁平图标、像素画，或任何对数学意义上的无损画质有硬性要求的素材。',
      },
      {
        question: 'PNG转WebP能在手机浏览器上使用吗？',
        answer:
          '可以。画质滑块、批量队列、对比视图和ZIP下载在iOS的Safari和安卓的Chrome上都能使用，无需安装应用。大型批次在手机处理器上只是处理时间稍长一些。',
      },
      {
        question: '转换后的WebP文件会得到什么文件名？',
        answer:
          '单个文件下载时，会保留你整理过的原始文件名，只把扩展名改为.webp，例如logo.png会变成logo.webp。两个或更多文件的批次会打包为compressmypic_png_to_webp.zip导出。',
      },
      {
        question: '带文字的PNG截图转成WebP后文字会变模糊吗？',
        answer:
          '不会，在85%到90%画质下，截图文字依然清晰，因为WebP能很好地保留高对比边缘。降到70%以下可能会让小字变软，请用对比视图检查，文字发软时就提高画质。',
      },
      {
        question: '这个工具会把PNG的颜色配置文件（ICC）带到WebP里吗？',
        answer:
          '不会。Canvas重新编码时会丢弃内嵌的ICC配置文件，颜色按浏览器网页显示使用的标准sRGB渲染。对于大多数屏幕图形，肉眼差别可以忽略；但对印刷有严格颜色要求的作品，请保留原始格式。',
      },
      {
        question: '什么时候该选PNG转WebP，而不是PNG转JPG？',
        answer:
          '当图片必须保持透明，或需要在网站上快速加载时，选择WebP。只有当目标位置（邮件客户端、Office文档或老旧上传平台）无法打开WebP，并且你愿意用纯色背景换取兼容性时，才选择JPG。',
      },
      {
        question: '隔行扫描的PNG也能在这里转成WebP吗？',
        answer:
          '可以。浏览器内置的图片解码器可以干净地读取标准PNG流和隔行扫描（Adam7）PNG流，然后绘制到Canvas上再转换，因此隔行扫描文件与普通PNG的转换方式完全相同。',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'WebP 转 PNG',
    shortDescription: '将 WebP 图片转换为无损 PNG，保留透明度。',
    category: 'convert',
    seoTitle: 'WebP转PNG在线转换器免费 — 无损且透明',
    seoDescription:
      '免费在线将WebP转换为无损PNG，全程在浏览器内完成。透明度完整保留，像素尺寸绝不改变，支持批量ZIP导出。无需上传，文件不会离开你的设备，可在Photoshop、Figma、Canva和PowerPoint中打开，设计、编辑与打印场景都适用，动画WebP取首帧导出，每个文件最大25 MB，无需安装应用。',
    h1: '免费在线WebP转PNG转换器',
    subtitle:
      '使用免费的WebP转PNG转换器，把下载的WebP变成通用无损PNG文件，全程在浏览器内完成。专为应用或印刷店拒绝WebP的设计师和编辑打造；每个文件最大25 MB，零画质损失、完整保留Alpha透明度，支持批量处理与ZIP下载。',
    howToSteps: [
      {
        title: '拖入WebP文件，每个最大25 MB',
        description:
          '将从下载文件夹、聊天窗口或网站保存的一个或多个.webp图片拖到上传区。',
      },
      {
        title: '等待无损PNG转换完成',
        description:
          '每个WebP都会渲染到透明画布上并自动导出为无损PNG——PNG是无损格式，因此没有画质滑块。',
      },
      {
        title: '在预览中检查透明度',
        description:
          '透明区域会显示为棋盘格背景，每张卡片还会列出原始文件大小和转换后的文件大小。',
      },
      {
        title: '把PNG与原始WebP对比',
        description:
          '点击任意卡片上的“对比”，在分屏视图中检查边缘、文字和透明度。',
      },
      {
        title: '下载PNG文件或全部下载（ZIP）',
        description:
          '逐个保存.png文件，或将整个批次打包为compressmypic_webp_to_png.zip一键下载。',
      },
    ],
    features: [
      {
        title: 'Alpha透明度原样保留',
        description: '透明WebP标志和贴纸在转换后的PNG中依然干净透明。',
      },
      {
        title: '任何编辑软件都支持',
        description: '转换后的PNG可以在任何设计工具、演示文稿或上传平台中打开，没有WebP兼容性问题。',
      },
      {
        title: '支持批量队列',
        description: '一次点击把多个下载的WebP转成PNG，导出为单个ZIP。',
      },
      {
        title: '设备端处理，保护隐私',
        description: '文件绝不会离开你的设备——转换在本地浏览器内存中进行。',
      },
    ],
    faqs: [
      {
        question: '把WebP转成PNG真的完全无损吗？',
        answer:
          '真的完全无损。PNG会把浏览器从WebP中解码出的每个像素原样保存，不再产生任何压缩损失。唯一的画质上限就是原始WebP本身已经应用的压缩——本工具绝不会再叠加一轮有损损伤。',
      },
      {
        question: '透明WebP标志转成PNG后还会透明吗？',
        answer:
          '会。整个Alpha通道都会保留下来，因此透明像素保持透明，半透明边缘也保持平滑融合。结果缩略图会以棋盘格显示透明度，下载前可以确认。',
      },
      {
        question: '为什么PNG输出比我上传的WebP大？',
        answer:
          'PNG使用无损DEFLATE压缩，而WebP使用积极得多的现代压缩方式，因此同样的像素存为PNG就是需要更多字节。文件变大是为了换取通用兼容性和零进一步画质损失，这是诚实的代价。',
      },
      {
        question: '可以把动态WebP转成PNG吗？',
        answer:
          '动态WebP会导出为首帧的静态PNG，因为PNG无法存储动态画面。这张静止图很适合用作缩略图、文档和贴纸——如果需要动态版本，请保留原始WebP文件。',
      },
      {
        question: '转换后的PNG会保留WebP的宽高吗？',
        answer:
          '会。每个转换后的.png都会100%保留原始WebP的精确像素尺寸，不会裁剪或缩放。如果还想缩小像素尺寸，转换后请使用图片尺寸调整器。',
      },
      {
        question: '转换过程中WebP文件会被上传到服务器吗？',
        answer:
          '不会。转换在你自己的浏览器标签页内的HTML5 Canvas上进行，图片绝不会发送到服务器、被存储或被他人查看。关闭标签页后，它们就会从浏览器内存中清除。',
      },
      {
        question: '可以一次批量把WebP图片转成PNG吗？',
        answer:
          '可以。将多个最大25 MB的.webp文件拖入队列，然后打包为compressmypic_webp_to_png.zip一起下载。每个文件独立转换，一个有问题的文件不会拖住其余文件。',
      },
      {
        question: '这里单个WebP文件最大可以多大？',
        answer:
          '每个WebP文件最大25 MB，足以容纳高分辨率下载内容和大型截图。由于转换在你的设备上进行，大文件按本地CPU速度处理，没有上传等待时间。',
      },
      {
        question: 'WebP转PNG有画质滑块吗？',
        answer:
          '没有，也不需要：PNG是无损格式，因此没有画质与体积之间的取舍可以调节。工具会显示“无损PNG编码”提示来代替滑块，每个像素都会精确保存。',
      },
      {
        question: '转换后的PNG文件可以用在哪里？',
        answer:
          '任何接受PNG的地方：Photoshop、Figma、Canva、PowerPoint、Word、印刷店，以及拒绝WebP的上传平台。PNG是最通用的可编辑光栅格式，这正是这个转换存在的意义。',
      },
      {
        question: '转换器会保留WebP的EXIF等元数据吗？',
        answer:
          '不会。把像素绘制到HTML5 Canvas上时，内嵌的EXIF、XMP和ICC配置文件数据会被清除，因此输出的PNG更轻巧，也不包含隐藏的位置或相机信息。',
      },
      {
        question: '下载前如何确认透明度保留下来了？',
        answer:
          '结果缩略图会以棋盘格背景显示透明区域，点击“对比”按钮打开分屏视图，拖动图片即可确认边缘融合是否平滑。如果背景看起来是纯色，说明源WebP没有透明度。',
      },
      {
        question: '带文字的WebP截图转成PNG会损失画质吗？',
        answer:
          '不会。因为PNG是无损格式，截图文字、界面标签和细线都会保持像素级完美，比任何JPG重新编码都更锐利。这正是截图需要后续编辑或打印时正确的选择。',
      },
      {
        question: '下载的PNG会保留什么文件名？',
        answer:
          '单个文件下载时，会保留你整理过的原始文件名，只把扩展名改为.png，例如sticker.webp会变成sticker.png。两个或更多文件的批次会打包为compressmypic_webp_to_png.zip导出。',
      },
      {
        question: 'WebP转PNG能在手机上使用吗？',
        answer:
          '可以。上传区、批量队列、对比视图和ZIP下载在iOS的Safari和安卓的Chrome上都能使用，无需安装应用。大型批次在手机处理器上只是处理时间稍长一些。',
      },
      {
        question: '什么时候该选WebP转PNG，而不是WebP转JPG？',
        answer:
          '当必须保留透明度，或编辑、设计、打印时需要像素级完美的无损画质，选择PNG。当需要体积最小、兼容性最广的文件，并且可以接受纯色背景和轻微压缩损失时，选择JPG。',
      },
      {
        question: '没有扩展名的WebP文件能转换吗？',
        answer:
          '不能直接转换——本页面按.webp扩展名和WebP MIME类型筛选输入，因此请先把文件名改为以.webp结尾。如果文件实际上是网站误标的JPG或PNG，请改用对应的转换器。',
      },
      {
        question: '设计师为什么需要PNG而不是WebP？',
        answer:
          '设计工具、基于图层的编辑器和打印流程常常需要PNG来处理蒙版、选区和透明叠加，而WebP无法在这些流程中提供同样的支持。PNG还能保证每一次后续编辑都从精确的像素开始，而不是从有损解码开始。',
      },
      {
        question: '这个工具支持无损编码的WebP文件吗？',
        answer:
          '支持。无损WebP文件可以在浏览器中干净地解码，并重新编码为无损PNG，每个像素都得到保留。无论源WebP是有损还是无损，PNG输出都不会再增加画质损失。',
      },
      {
        question: '如果WebP文件损坏或根本不是真正的WebP会怎样？',
        answer:
          '该文件会显示一条清晰的单文件错误信息，说明它无法解码，而批次中的其他文件仍会正常转换。重新从来源处下载原始WebP，通常可以修复截断或误标的文件。',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'SVG 转 PNG',
    shortDescription: '将 SVG 矢量图栅格化为清晰的 1×–4× 透明 PNG。',
    category: 'convert',
    seoTitle: 'SVG转PNG在线转换器免费 — 1倍至4倍高清',
    seoDescription:
      '免费在线将SVG矢量图转换为透明PNG，全程在浏览器内完成。可导出1倍、2倍、3倍或4倍高清PNG，最长边上限8000像素，本地处理，并如实说明外部图片、样式表与网络字体的限制，支持批量转换与ZIP下载，幻灯片与应用商店截图都适用，每个文件最大25 MB，支持整套图标包一次转换，在手机浏览器上也能使用。',
    h1: '免费在线SVG转PNG转换器',
    subtitle:
      '使用免费的SVG转PNG转换器，把SVG标志、图标和插画栅格化为清晰的透明PNG，全程在浏览器内完成。专为需要高清导出用于幻灯片、文档和应用商店的设计师与开发者打造；支持1倍、2倍、3倍或4倍缩放（最长边上限8000像素），支持批量处理与ZIP下载。',
    howToSteps: [
      {
        title: '拖入SVG文件，每个最大25 MB',
        description:
          '上传一个或多个包含内联形状、路径、渐变或样式的.svg矢量文件。',
      },
      {
        title: '选择栅格导出倍率（1倍–4倍）',
        description:
          '选择1倍以获得SVG的原始尺寸，或选择2倍至4倍以导出清晰的Retina与高清PNG。',
      },
      {
        title: '改完倍率后点击“全部重新转换”',
        description:
          '倍率更改在重新转换时生效，因此预览和下载结果与你选择的尺寸一致。',
      },
      {
        title: '留意关于外部资源的提示',
        description:
          'SVG内的外部图片、样式表和网络字体会被浏览器画布安全机制拦截，不会出现在PNG中。',
      },
      {
        title: '对比栅格化后的PNG',
        description:
          '点击任意卡片上的“对比”，在分屏视图中检查清晰的边缘和透明度。',
      },
      {
        title: '下载PNG文件或全部下载（ZIP）',
        description:
          '逐个保存.png文件，或将整个批次打包为compressmypic_svg_to_png.zip一键下载。',
      },
    ],
    features: [
      {
        title: '1倍、2倍、3倍与4倍高清导出',
        description: '把24像素小图标或100像素标志干净地放大到4倍分辨率再栅格化。',
      },
      {
        title: '保留透明背景',
        description: '导出带Alpha通道的清晰PNG，可直接用于幻灯片、网页页眉和设计稿。',
      },
      {
        title: '如实说明独立画布的适用范围',
        description: '明确说明：SVG内的内联矢量形状与样式可以干净渲染，而外部图片链接或外部网络字体可能被浏览器Canvas沙箱拦截。',
      },
      {
        title: '批量SVG栅格化',
        description: '一次转换整套图标包为PNG并下载ZIP。',
      },
    ],
    faqs: [
      {
        question: '我的SVG用了链接的图片，为什么PNG里没有它？',
        answer:
          '出于安全考虑，浏览器会对渲染到HTML5 Canvas上的SVG文件进行沙箱隔离，拦截外部<image>链接的加载，因此任何从网上链接的图片都无法在栅格化过程中加载。请把图片直接内嵌到SVG文件中，或改用内联矢量形状，PNG就能完整渲染。',
      },
      {
        question: 'SVG里可以使用网络字体导出PNG吗？',
        answer:
          '通过链接引用的外部网络字体会被同样的画布沙箱拦截，因此用远程字体设置的文字会回退到系统字体或消失。请使用系统字体、在编辑器中把文字转为轮廓，或把字体数据直接内嵌到SVG文件中。',
      },
      {
        question: '把24像素图标变成清晰的96像素PNG，该选多少倍率？',
        answer:
          '在“栅格导出倍率”下选择4倍并点击“全部重新转换”：24像素图标会变成清晰的96像素PNG，因为矢量是在更大的尺寸下重新渲染，而不是拉伸像素。选择2倍可导出48像素；请记住最长边的输出上限是8000像素。',
      },
      {
        question: 'SVG在这里能生成的最大PNG是多大？',
        answer:
          '导出倍率的最长边上限为8000像素，因此非常大的SVG在4倍下会在这个上限处停止。对大多数图标和标志来说，这个上限无关紧要——100像素标志在4倍下也只有400像素，远低于上限。',
      },
      {
        question: 'SVG转PNG会保留透明背景吗？',
        answer:
          '会。除非SVG本身绘制了背景矩形，否则导出的PNG会保留干净的Alpha透明背景，可直接用于幻灯片、页眉和设计稿。预览会以棋盘格显示透明度。',
      },
      {
        question: 'SVG文件会被上传到服务器吗？',
        answer:
          '不会。栅格化在你自己的浏览器标签页内的HTML5 Canvas上进行，你的矢量文件绝不会离开你的电脑。关闭标签页后，它们就会从浏览器内存中清除。',
      },
      {
        question: '可以一次转换整套SVG图标吗？',
        answer:
          '可以。将多个最大25 MB的.svg文件拖入队列，为整个批次选择一个倍率，然后打包为compressmypic_svg_to_png.zip一起下载。每个图标独立栅格化。',
      },
      {
        question: '什么原因会导致SVG栅格化失败并报错？',
        answer:
          '最常见的原因是XML无效：未闭合的标签、格式错误的属性，或文件根本不是SVG标记。在文本编辑器或矢量编辑器中打开文件，修复语法错误后重试——错误信息按文件逐个显示，因此其他SVG仍会转换。',
      },
      {
        question: 'SVG里的渐变和不透明度能正确渲染吗？',
        answer:
          '可以。SVG内定义的内联线性渐变、径向渐变、不透明度属性和混合式填充都能干净地渲染到Canvas上。只有从文件外部加载的资源——外部图片、样式表和字体——会被拦截。',
      },
      {
        question: 'SVG里的文字导出后会是清晰的PNG文字吗？',
        answer:
          '会，只要文字使用你设备上安装的系统字体，它在任何倍率下都能锐利栅格化。使用外部网络字体的文字会回退到默认字体，因此请在Illustrator、Figma或Inkscape中把文字转为轮廓，以保证效果。',
      },
      {
        question: '可以转换引用了外部CSS文件的SVG吗？',
        answer:
          '不可以。外部样式表会被浏览器画布安全机制拦截，因此链接的.css文件中定义的类不会生效，形状可能以无样式状态渲染。请把样式以内联style属性或SVG内的<style>块形式移入文件本身。',
      },
      {
        question: 'PNG输出是无损的吗？',
        answer:
          '是。栅格化后的像素会保存为无损PNG，因此边缘、文字和纯色在导出尺寸下保持像素级完美。如果需要更多细节，请以更高倍率重新导出——PNG没有有损步骤，因此没有画质滑块。',
      },
      {
        question: '1倍缩放时PNG是多大？',
        answer:
          '在1倍下，PNG与SVG的原始尺寸一致，取自其宽高属性或viewBox。24×24图标导出为24×24像素，而没有原始尺寸的SVG会使用其viewBox尺寸。',
      },
      {
        question: '可以在手机上转换SVG文件吗？',
        answer:
          '可以。上传区、倍率选择器、对比视图和ZIP下载在iOS的Safari和安卓的Chrome上都能使用，无需安装应用。大型图标包在手机处理器上只是处理时间稍长一些。',
      },
      {
        question: '导出的PNG会保留什么文件名？',
        answer:
          '单个文件下载时，会保留你整理过的原始文件名，只把扩展名改为.png，例如logo.svg会变成logo.png。两个或更多文件的批次会打包为compressmypic_svg_to_png.zip导出。',
      },
      {
        question: '转换器支持SVG动画（SMIL/CSS）吗？',
        answer:
          '不支持。栅格化只捕获SVG的单个静态帧，因此SMIL和CSS动画不会带入PNG。如果需要动态效果，请改用设计工具把动画导出为视频或GIF。',
      },
      {
        question: '可以栅格化以data URI内嵌图片的SVG吗？',
        answer:
          '通常可以。以base64 data URI直接内嵌在文件中的图片属于SVG本身，不需要从外部加载，因此一般可以正常渲染。会被画布安全机制拦截的是带有http链接的图片。',
      },
      {
        question: '什么时候该用SVG转PNG，而不是保留SVG？',
        answer:
          '当目标位置需要光栅图片时使用PNG：PowerPoint、Word、社交帖子、应用商店截图，或任何无法打开SVG的工具。当图形必须在网站上保持无限缩放时，保留SVG。',
      },
      {
        question: '把SVG转成PNG会改变颜色吗？',
        answer:
          '颜色按SVG中定义的方式渲染，输出为标准sRGB PNG。Canvas会清除内嵌的ICC配置文件，因此对印刷有严格颜色匹配要求的作品应保留原始矢量文件——对于屏幕显示，肉眼差别可以忽略。',
      },
      {
        question: '接受的SVG文件最大是多大？',
        answer:
          '每个SVG文件最大25 MB，足以容纳即使包含数千条路径的大型插画文件。非常复杂的SVG只是在你的设备上栅格化时多花一两秒。',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'AVIF 转 JPG',
    shortDescription: '通过浏览器解码器将 AVIF 图片转换为通用 JPG。',
    category: 'convert',
    seoTitle: 'AVIF转JPG在线转换器免费 — 哪里都能打开',
    seoDescription:
      '免费在线将AVIF图片转换为通用JPG格式，全程在浏览器内完成。使用浏览器原生AVIF解码，支持透明区域填充色选择、画质调节与批量ZIP导出。无需上传，文件不会离开你的设备，老旧编辑器、办公软件和上传表单都能打开，像素尺寸完整保留，每个文件最大25 MB，支持批量处理，手机浏览器也能使用，无需安装应用。',
    h1: '免费在线AVIF转JPG转换器',
    subtitle:
      '使用免费的AVIF转JPG转换器，借助浏览器内置的AVIF解码器，把现代.avif图片变成通用支持的.jpg文件。专为下载了AVIF文件、却发现编辑器、办公应用或上传表单打不开的人打造；每个文件最大25 MB，默认画质88%，支持填充色选择与批量ZIP导出，图片绝不上传。',
    howToSteps: [
      {
        title: '拖入AVIF图片，每个最大25 MB',
        description:
          '在支持原生AVIF解码的现代浏览器（Chrome、Edge、Firefox或Safari）中上传.avif文件。',
      },
      {
        title: '为透明区域选择填充色',
        description:
          '选择白色（#ffffff）、黑色（#000000）、浅灰色（#f8fafc）或任意自定义十六进制颜色，因为JPG无法存储透明度。',
      },
      {
        title: '设置JPG输出画质（20%–100%）',
        description:
          '保留默认的88%清晰画质，或把滑块向20%移动得到更小的文件、向100%移动保留最多细节，然后点击“全部重新转换”。',
      },
      {
        title: '把JPG与原始AVIF对比',
        description:
          '点击任意卡片上的“对比”，在保存前于分屏视图中检查细节、颜色和边缘。',
      },
      {
        title: '下载JPG文件或全部下载（ZIP）',
        description:
          '逐个保存.jpg文件，或将整个批次打包为compressmypic_avif_to_jpg.zip一键下载。',
      },
    ],
    features: [
      {
        title: '浏览器原生AVIF解码',
        description: '利用现代浏览器本地的硬件/软件AVIF解码器，零服务器往返。',
      },
      {
        title: '如实的格式兼容性',
        description: '严格用于把AVIF解码为通用JPG（其他格式请使用JPG/PNG/WebP工具——本站不提供AVIF编码/输出）。',
      },
      {
        title: '透明填充色选择器',
        description: '透明AVIF区域可以干净地融合到白色或你自定义的十六进制背景上。',
      },
      {
        title: '批量ZIP导出',
        description: '在一个浏览器会话中把多个下载的AVIF转成JPG。',
      },
    ],
    faqs: [
      {
        question: '什么是AVIF，为什么有些应用打不开它？',
        answer:
          'AVIF是基于AV1视频压缩的现代图片格式，以比JPG小得多的体积存储照片。因为它比较新，许多老旧编辑器、办公套件、打印机和上传平台从未添加AVIF解码器，因此转成JPG是让图片在任何地方都能使用的最快方法。',
      },
      {
        question: '哪些浏览器可以解码AVIF并在这里转换？',
        answer:
          '现代Chrome、Edge、Firefox和Safari都可以在浏览器内原生解码AVIF，本工具使用的正是这一点。如果你在非常老旧的浏览器中打开本页面，每个文件会显示清晰的错误而不是转换——更新浏览器即可解决。',
      },
      {
        question: '如果我的浏览器无法解码AVIF文件会怎样？',
        answer:
          '该文件会显示一条明确的单文件错误信息，说明你的浏览器无法解码它，而批次中的其他文件仍会正常转换。换用当前版本的Chrome、Firefox、Edge或Safari，几乎在所有情况下都能解决。',
      },
      {
        question: '把AVIF转成JPG会损失画质吗？',
        answer:
          '一定程度的损失不可避免，因为JPG会用有损压缩重新编码像素，而AVIF在同样画质下高效得多。在默认的88%画质下，照片的差别几乎看不出来；只有在极端放大查看精细纹理时才能发现轻微变软。',
      },
      {
        question: '透明的AVIF区域在JPG里会变黑吗？',
        answer:
          '不会。透明区域会用你选择的填充色填充——默认为白色，因此标志和抠图会得到干净的纯色背景，而不是黑框。转换前可以选择黑色、浅灰色或任意自定义十六进制颜色。',
      },
      {
        question: '可以干净地把带透明度的AVIF图片转成JPG吗？',
        answer:
          '可以。填充色选择器会把半透明边缘平滑地融合到你选择的背景上，因此柔和阴影和抗锯齿曲线看起来自然，不会裁切成硬轮廓。请用对比视图确认融合效果。',
      },
      {
        question: 'AVIF文件会被上传到服务器吗？',
        answer:
          '不会。解码和重新编码都在本地进行，使用浏览器原生AVIF解码器和HTML5 Canvas，因此图片绝不会离开你的设备。关闭标签页后，它们就会从浏览器内存中清除。',
      },
      {
        question: '怎样一次转换多个下载的AVIF文件？',
        answer:
          '将多个最大25 MB的.avif文件拖入队列，为整个批次选择一个填充色和画质，然后打包为compressmypic_avif_to_jpg.zip一起下载。每个文件独立转换。',
      },
      {
        question: '接受的最大AVIF文件是多大？',
        answer:
          '每个AVIF文件最大25 MB，足以容纳高分辨率下载内容和相机拍摄的照片。由于解码在你的设备上运行，大文件按本地CPU速度处理，没有上传等待时间。',
      },
      {
        question: '这里能把JPG转成AVIF吗？',
        answer:
          '不能。HTML5 Canvas无法在所有浏览器中通用编码AVIF，因此本站只把AVIF解码为可靠的JPG、PNG和WebP输出。如果需要AVIF输出，你需要专用的桌面编码器。',
      },
      {
        question: 'JPG会保留AVIF的像素尺寸吗？',
        answer:
          '会。每个转换后的.jpg都会100%保留原始AVIF的精确宽高，不会裁剪或缩放。如果还想缩小像素尺寸，转换后请使用图片尺寸调整器。',
      },
      {
        question: 'AVIF照片最适合用多少画质？',
        answer:
          '默认的88%对大多数照片最合适：细节保持清晰，文件依然小巧。对于细节非常丰富的照片或打算进一步编辑的图片，可以把画质提高到92%或95%；快速分享时，80%通常就够了。',
      },
      {
        question: 'HDR或广色域AVIF照片转换后看起来如何？',
        answer:
          '它们会导出为标准sRGB JPG，因此极端的HDR高光会被映射到正常显示范围，非常饱和的广色域颜色会略微向sRGB偏移。对于日常照片，结果看起来自然；对于颜色要求严格的工作，请保留原始AVIF。',
      },
      {
        question: '下载前可以检查转换后的JPG吗？',
        answer:
          '可以。点击任意结果卡片上的“对比”，打开分屏视图，拖动查看图片，对照原始AVIF检查细节、颜色和边缘。每张卡片还会显示原始大小和转换后的大小。',
      },
      {
        question: '第一次结果不满意，可以调整设置再试一次吗？',
        answer:
          '可以。随时选择另一个填充色色块或移动画质滑块，点击“全部重新转换”，即可在不重新上传的情况下用新设置重新生成所有已加载的文件。原始AVIF文件会一直留在队列中，直到你清除它们。',
      },
      {
        question: '下载的JPG会保留什么文件名？',
        answer:
          '单个文件下载时，会保留你整理过的原始文件名，只把扩展名改为.jpg，例如photo.avif会变成photo.jpg。两个或更多文件的批次会打包为compressmypic_avif_to_jpg.zip导出。',
      },
      {
        question: 'AVIF转JPG能在手机浏览器上使用吗？',
        answer:
          '可以，在支持原生AVIF解码的现代手机浏览器中即可使用，例如当前版本的安卓Chrome和iOS Safari。填充色选择器、画质滑块和ZIP下载都能使用，无需安装应用。',
      },
      {
        question: '什么时候该把AVIF转成JPG，而不是转成PNG？',
        answer:
          '当你需要体积小、通用兼容的文件用于邮件、Office或上传平台时，选择JPG。当必须保留透明度，或编辑时需要像素级完美的无损画质时，选择PNG——不过要注意PNG文件会大得多。',
      },
      {
        question: '为什么JPG有时比AVIF还大？',
        answer:
          'AVIF的压缩效率远高于JPG，因此小体积AVIF以88%画质重新编码为JPG后，很容易比源文件大。这是正常现象：你在用文件体积换取通用兼容性。把画质降到75%左右，通常就能让JPG重新变小。',
      },
      {
        question: '转换器会清除AVIF元数据吗？',
        answer:
          '会。把像素绘制到HTML5 Canvas上时，内嵌的EXIF、XMP和ICC配置文件数据会被清除，因此输出的JPG更轻巧，也不包含隐藏的位置或相机信息。',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'BMP 转 JPG',
    shortDescription: '将体积庞大的未压缩 BMP 位图转换为小巧的 JPG 文件。',
    category: 'convert',
    seoTitle: 'BMP转JPG在线转换器免费 — 巨型位图瘦身',
    seoDescription:
      '免费在线将未压缩的BMP位图转换为小巧的JPG格式，全程在浏览器内完成。私密处理，体积通常缩小85%–95%，支持画质滑块与批量ZIP下载，邮件和网页分享都更方便，是清理旧式截图、扫描件与画图导出文件的利器，像素尺寸保持不变，每个文件最大25 MB，支持批量处理与一键ZIP打包，在手机浏览器上也能使用，无需安装应用。',
    h1: '免费在线BMP转JPG转换器',
    subtitle:
      '使用免费的BMP转JPG转换器，把庞大的未压缩Windows BMP位图变成轻量易分享的JPG文件，全程在浏览器内完成。专为清理成堆旧式.bmp截图、扫描件或画图导出文件的人打造；每个文件最大25 MB，默认画质88%，通常可缩小85%–95%，支持批量处理与ZIP下载。',
    howToSteps: [
      {
        title: '拖入BMP位图，每个最大25 MB',
        description:
          '将Windows截图、扫描件或旧文件夹中的一个或多个.bmp文件拖到上传区。',
      },
      {
        title: '设置JPG输出画质（20%–100%）',
        description:
          '保留默认的88%清晰画质，或把滑块向20%移动得到更小的文件、向100%移动保留最多细节，然后点击“全部重新转换”。',
      },
      {
        title: '在每张卡片上查看节省的体积',
        description:
          '每张结果都会显示庞大的原始BMP大小、小巧的JPG大小和节省百分比。',
      },
      {
        title: '把JPG与原始BMP对比',
        description:
          '点击任意卡片上的“对比”，在分屏视图中确认文字和细节依然清晰。',
      },
      {
        title: '下载JPG文件或全部下载（ZIP）',
        description:
          '逐个保存.jpg文件，或将整个批次打包为compressmypic_bmp_to_jpg.zip一键下载。',
      },
    ],
    features: [
      {
        title: '体积通常缩小90%以上',
        description: '未压缩的BMP位图存储的是原始像素数据；JPG压缩可以大幅缩小体积，方便邮件和网页使用。',
      },
      {
        title: '保留像素尺寸',
        description: '在更新容器格式的同时，保持原始宽高精确不变。',
      },
      {
        title: '批量队列与ZIP下载',
        description: '一次快速清理整文件夹的旧式.bmp截图或扫描件。',
      },
      {
        title: '100%客户端隐私保护',
        description: '零上传——转换完全在你的电脑本地进行。',
      },
    ],
    faqs: [
      {
        question: '为什么BMP文件比JPG大那么多？',
        answer:
          'BMP是未压缩格式：它几乎把每个像素都以原始颜色数据存储，几乎没有压缩，因此一张截图就可能重达几十MB。JPG使用智能有损压缩，丢弃人眼几乎察觉不到的数据，这就是同一张图片大幅缩小的原因。',
      },
      {
        question: '把BMP转成JPG预计能节省多少体积？',
        answer:
          '由于BMP文件通常未压缩，转为88%画质的JPG后，体积常常能削减85%到95%——10 MB的位图往往会变成500 KB到1.5 MB的JPG。照片类扫描件节省最多，而纯色扁平图形节省略少。',
      },
      {
        question: '把BMP转成JPG会改变图片尺寸吗？',
        answer:
          '不会。每个转换后的.jpg都会100%保留原始BMP的精确像素宽高，不会裁剪或缩放。如果还想缩小像素尺寸，转换后请使用图片尺寸调整器。',
      },
      {
        question: '什么画质设置能让BMP截图保持可读？',
        answer:
          '默认的88%可以在去除大部分位图臃肿的同时，保持截图文字和界面细节清晰。对于带有精细印刷文字或小字体的扫描件，可以把画质提高到92%或95%；快速分享时，80%通常就够了。',
      },
      {
        question: 'BMP文件会被上传到服务器吗？',
        answer:
          '不会。转换在你自己的浏览器标签页内的HTML5 Canvas上进行，你的截图和扫描件绝不会离开你的电脑。关闭标签页后，它们就会从浏览器内存中清除。',
      },
      {
        question: '怎样批量转换一整文件夹的BMP扫描件？',
        answer:
          '将多个最大25 MB的.bmp文件拖入队列，为整个批次选择一个画质设置，然后打包为compressmypic_bmp_to_jpg.zip一起下载。每个文件独立转换。',
      },
      {
        question: '接受的最大BMP文件是多大？',
        answer:
          '每个BMP文件最大25 MB，足以容纳大型截图和高分辨率扫描件。由于转换在你的设备上进行，大文件按本地CPU速度处理，没有上传等待时间。',
      },
      {
        question: '页面打开后，没有网络也能转换BMP文件吗？',
        answer:
          '可以。页面在浏览器中加载完成后，转换完全在本地JavaScript和HTML5 Canvas中进行，没有任何服务器调用。只有加载页面本身或下载完成的文件时才需要联网。',
      },
      {
        question: '转换后的JPG能在任何程序中打开吗？',
        answer:
          '可以。标准的基线RGB格式.jpg输出几乎可以在所有查看器、编辑器、浏览器、邮件客户端和打印机中打开——比BMP的兼容范围广得多，许多现代应用和网站已不再接受BMP。',
      },
      {
        question: '转换器会保留BMP的透明度吗？',
        answer:
          'BMP文件很少带有可用的Alpha通道，而JPG完全不支持透明度，因此输出的JPG始终不透明。如果图形需要透明度，请改用PNG或WebP转换，它们可以保留Alpha通道。',
      },
      {
        question: '转换过程中BMP的颜色深度会怎样？',
        answer:
          '浏览器解码BMP后，通过标准画布颜色路径渲染，导出为正常的sRGB JPG。高颜色深度的BMP可以保留肉眼可见的颜色；只有极特殊的索引色或1位变体可能需要先在编辑器中重新保存。',
      },
      {
        question: '下载前可以检查画质吗？',
        answer:
          '可以。点击任意结果卡片上的“对比”，打开分屏视图，拖动查看图片，对照原始BMP检查文字、线条和细节。每张卡片还会显示精确节省的体积。',
      },
      {
        question: '第一次转换后可以调整画质滑块吗？',
        answer:
          '可以。随时把画质滑块移到新数值，点击“全部重新转换”，即可在不重新上传的情况下重新生成所有已加载的文件。原始BMP文件会一直留在队列中，直到你清除它们。',
      },
      {
        question: '转换后的JPG文件会用什么文件名保存？',
        answer:
          '单个文件下载时，会保留你整理过的原始文件名，只把扩展名改为.jpg，例如scan.bmp会变成scan.jpg。两个或更多文件的批次会打包为compressmypic_bmp_to_jpg.zip导出。',
      },
      {
        question: 'BMP转JPG能在手机浏览器上使用吗？',
        answer:
          '可以。上传区、画质滑块、对比视图和ZIP下载在iOS的Safari和安卓的Chrome上都能使用，无需安装应用。大型批次在手机处理器上只是处理时间稍长一些。',
      },
      {
        question: '什么时候BMP转JPG比BMP转PNG更好？',
        answer:
          '当你需要体积最小的可分享文件用于邮件、网页或即时通讯时，选择JPG。当需要无损存档画质或打算进一步编辑图片时，选择PNG，不过要注意PNG文件会比JPG大得多。',
      },
      {
        question: '旧的1位或8位BMP文件能转换吗？',
        answer:
          '大多数标准的1位、8位、24位和32位BMP文件都可以在现代浏览器中干净解码。非常特殊的变体，例如RLE压缩或OS/2格式的BMP，可能会显示单文件错误——在画图或编辑器中重新保存为24位BMP即可修复。',
      },
      {
        question: '为什么扫描的BMP文件转成JPG后压缩效果这么好？',
        answer:
          '扫描件包含平滑渐变、纸张纹理和照片细节，JPEG的余弦压缩处理这些内容非常高效。纯色扁平区域的压缩效果甚至更好，这就是10 MB扫描件在88%画质下降到1 MB以下的原因。',
      },
      {
        question: '把BMP转成JPG会清除元数据吗？',
        answer:
          '会。把像素绘制到HTML5 Canvas上时，任何内嵌的元数据块都会被清除，因此输出的JPG更轻巧，也不包含隐藏信息。BMP文件本身原本就很少携带元数据。',
      },
      {
        question: '可以直接转换数码相机或扫描仪的BMP文件吗？',
        answer:
          '可以，只要文件保存为.bmp——大多数扫描仪和老式相机都提供BMP作为导出选项。现代相机通常直接保存JPG，因此请先检查文件扩展名，如果不是位图，请使用对应的转换器。',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
  {
    slug: '/remove-background',
    name: '背景去除工具',
    shortDescription: '使用 AI 在浏览器中去除图片背景，导出透明 PNG。',
    category: 'ai-tools',
    seoTitle: '免费在线AI抠图去背景 — 无需注册',
    seoDescription:
      '免费在线用浏览器内AI去除图片背景。下载透明PNG，或加上白色、黑色或自定义背景。私密处理，无需注册，没有水印，一次处理一张照片，最大20 MB，首次加载约35 MB模型后缓存，人像、产品与宠物抠图都干净利落，支持分屏对比边缘，导出图片保持原始分辨率，可直接用于Canva与PowerPoint，手机浏览器同样支持。',
    h1: '免费在线AI背景去除工具',
    subtitle:
      '使用免费的AI背景去除工具，去除人像、产品照片、宠物和标志的背景，全程在浏览器内运行。专为需要快速干净抠图的卖家、创作者和设计师打造；只需加载一次小巧的AI模型（约35 MB，之后会缓存），一次处理一张最大20 MB的照片，导出透明PNG，或把抠图放在白色、黑色或自定义背景上。',
    howToSteps: [
      {
        title: '等待AI模型加载',
        description:
          '首次使用时，页面会下载一次小巧的isnet_quint8模型（约35 MB）并缓存在你的浏览器中；之后访问会立即启动。',
      },
      {
        title: '拖入一张最大20 MB的照片',
        description:
          '上传一张JPG、PNG、WebP、HEIC、BMP或AVIF照片——一次一张——到上传区。',
      },
      {
        title: '让AI抠出主体',
        description:
          '模型在你的浏览器本地分离主体，并在原图旁边显示透明抠图。',
      },
      {
        title: '把抠图与原图对比',
        description:
          '点击“分屏对比”，拖动查看前后对比，检查头发、毛发和精细细节周围的边缘。',
      },
      {
        title: '选择透明、白色、黑色或自定义背景',
        description:
          '保留透明PNG，或在下载前切换到白色、黑色或自定义颜色背景。',
      },
      {
        title: '下载你的抠图',
        description:
          '保存透明PNG（以你的照片名加_no_bg命名）或纯色背景版本，然后点击“新建图片”处理下一张照片。',
      },
    ],
    features: [
      {
        title: '100%客户端AI分割',
        description: '由轻量级isnet_quint8 ONNX模型驱动，在你的浏览器本地运行——照片绝不会上传到任何服务器。',
      },
      {
        title: '即时导出透明PNG',
        description: '下载清晰的Alpha透明PNG抠图，可直接用于电商商品图、缩略图、幻灯片和设计工作。',
      },
      {
        title: '内置纯色背景切换',
        description: '无需打开其他应用，即可预览抠图在纯白、纯黑或任意自定义十六进制背景上的效果并导出。',
      },
      {
        title: '免费、无需注册、没有水印',
        description: '全分辨率抠图，零每日限额、零账号、零水印。',
      },
    ],
    faqs: [
      {
        question: '去除背景会把我的照片发送到服务器吗？',
        answer:
          '不会。AI模型下载到你的浏览器后，推理完全在你的设备上进行，因此照片绝不会被上传、存储或被他人查看。关闭标签页后，所有内容都会从浏览器内存中清除。',
      },
      {
        question: '为什么第一次抠图比之后慢？',
        answer:
          '首次访问时，浏览器需要下载小巧的isnet_quint8模型（约35 MB）并初始化WebAssembly AI运行环境，这会多花几秒钟。之后模型会被缓存，因此后续照片处理得快得多。',
      },
      {
        question: '浏览器下载的AI模型有多大？',
        answer:
          '约35 MB，首次使用时下载一次，之后由浏览器缓存。正是这个小巧的量化isnet_quint8模型，让浏览器内去除背景成为可能，无需服务器——更大的云端模型需要上传和付费API。',
      },
      {
        question: '第一次加载后，没有网络也能用背景去除工具吗？',
        answer:
          '基本可以：模型缓存后，实际的去除过程完全在浏览器内离线运行。首次加载页面本身仍然需要联网；如果浏览器清除了网站数据，缓存的模型也可能被清除。',
      },
      {
        question: '哪种照片能抠出最干净的边缘？',
        answer:
          '主体清晰、与背景对比明显的照片效果最好——人像、产品照、宠物、汽车和轮廓锐利的标志。光线均匀、背景简单时，模型的工作最轻松。',
      },
      {
        question: '背景杂乱的照片能去除背景吗？',
        answer:
          '可以，但边缘会更柔和：当主体融入杂乱背景时，小巧的设备端模型必须猜测主体在哪里结束。更干净的背景、更好的光线，或上传前把主体裁得更近，都能让抠图效果明显更好。',
      },
      {
        question: '细碎的头发、毛发或半透明边缘会怎样？',
        answer:
          '细碎发丝和蓬松毛发是小巧量化模型最难处理的情况，因此那里的边缘可能略微发软，或丢失几根发丝。请查看“分屏对比”视图——对大多数人像和产品照来说，结果是干净的，但像素级完美的发丝抠图是一个已知的局限。',
      },
      {
        question: '怎样把抠图放在纯白背景上，用于亚马逊或eBay？',
        answer:
          '抠图完成后，在“背景填充选项”中选择白色，然后点击“下载白色背景版本”。交易平台更喜欢主图缩略图使用清晰不透明的白色背景JPG和PNG，而本工具导出的正是这种效果。',
      },
      {
        question: '可以上传哪些格式的文件？',
        answer:
          'JPG、PNG、WebP、HEIC、BMP和AVIF——本工具接受与本站其他工具相同的扩展图片格式。iPhone的HEIC照片在模型运行前会自动转换为可解码的图片。',
      },
      {
        question: '照片最大可以多大？',
        answer:
          '每张照片最大20 MB，一次处理一张。这足以容纳高分辨率手机和相机拍摄的照片；非常大的文件只是处理时间稍长一些，因为模型在你的设备上运行。',
      },
      {
        question: '可以一次去除多张照片的背景吗？',
        answer:
          '不可以，本工具一次处理一张照片，让AI模型可以把全部设备内存集中在一张干净的抠图上。每次下载后点击“新建图片”即可处理下一张照片——没有每日限额。',
      },
      {
        question: '抠图会保留原始照片的分辨率吗？',
        answer:
          '会。导出的透明PNG会100%保留原始照片的像素宽高，因此4000像素的产品照片仍然是4000像素。如果需要更小的网页版本，之后请使用图片尺寸调整器。',
      },
      {
        question: '为什么透明PNG比原始照片还大？',
        answer:
          'PNG会无损存储抠图的每个像素，而原始JPG经过了重度压缩——因此大型精细抠图很容易比小型JPG源文件更重。这是正常现象：你在用文件体积换取透明度和像素级完美的边缘。',
      },
      {
        question: '可以对同一张照片重新执行去除吗？',
        answer:
          '可以。点击“重新去除”可以对同一张照片再次处理——如果第一次把阴影误认为主体的一部分，或想对比结果，这很有用。模型是确定性的，因此除非输入改变，结果通常完全相同。',
      },
      {
        question: '如果抠图里缺失了主体的一部分该怎么办？',
        answer:
          '首先查看“分屏对比”视图，准确了解哪里被裁掉了。与背景融为一体的主体——同色衣服、玻璃或迷彩——会让模型困惑；请尝试主体与背景对比更强的照片，或上传前把主体裁得更近。',
      },
      {
        question: '下载的PNG上有水印吗？',
        answer:
          '没有。下载的是全分辨率抠图，没有水印、没有标志、没有添加任何品牌标识。也无需注册、无需账号，去除背景的照片数量没有每日限额。',
      },
      {
        question: '背景去除能在手机浏览器上使用吗？',
        answer:
          '可以。模型可以在iOS的Safari和安卓的Chrome中下载并运行，上传、对比和下载控件都相同。在手机上，大照片处理时间更长，因为AI在手机处理器上运行——首次下载模型时使用Wi-Fi会更快。',
      },
      {
        question: '这个工具与remove.bg等付费工具有什么不同？',
        answer:
          '本工具免费、私密，完全在你的浏览器内运行，无需上传、无需账号，而付费云端工具会在它们的服务器上处理你的照片。代价是棘手边缘的画质：小巧的设备端模型对清晰主体表现出色，但在精细发丝或杂乱场景上无法与大型云端模型媲美。',
      },
      {
        question: '可以在Canva、Photoshop或PowerPoint中使用抠图吗？',
        answer:
          '可以。导出的透明PNG可以直接在Canva、Photoshop、Figma、PowerPoint和Google Slides中打开，放在任何背景、幻灯片或设计上。纯色背景下载版本同样适用于需要不透明图片的应用。',
      },
      {
        question: '关闭标签页后我的照片会怎样？',
        answer:
          '什么都不会留下：处理在浏览器内存中进行，照片从未上传，关闭标签页后图片和抠图都会被清除。只有缓存的AI模型会留在浏览器中，供下次更快使用。',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];


export const TOOL_BY_SLUG_ZH: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_ZH.map((t) => [t.slug, t])
);
