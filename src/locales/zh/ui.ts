// Chinese UI strings — assembled for src/locales/zh/ui.ts
// = i18n-zh.ts (export ZH) + tool-ui-zh.ts (export TOOL_UI_ZH).
// Neither source has imports. HOME_ENTRY_ZH from i18n-zh.ts is NOT
// included here: it is already merged as TOOLS_REGISTRY_ZH[0] in
// src/locales/zh/tools.ts, mirroring the PT ui.ts (PT + TOOL_UI_PT only).

// Simplified Chinese (zh) UI strings for CompressMyPic — natural fluent Simplified Mandarin.
// Mirrors ~/workspace/compressmypic/ja-ko/i18n-ja.ts exactly: same 15
// sections, same keys within each section, same export shape.
// Source: English originals ONLY, read from the fresh clone /tmp/cmpic-zh
// (HEAD cf50185): Hero, FaqSection, EducationalContent,
// ToolsDirectorySection, ShareSection, Header, Footer, ToolPageLayout,
// UploadZone, ComparisonModal, CompressionControls, ResultsList, home entry
// in src/data/tools.ts, App.tsx guides section. The JA file was used as
// STRUCTURAL template only (keys/order) — no Japanese text copied, and
// nothing translated from any language other than English. The faqSection
// below is the CURRENT EN FaqSection.tsx set (20 FAQs).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com
// and format names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is.
// "ZIP" is kept as a file-format term. The English word for web-based use
// is ALWAYS rendered as 在线 in Chinese prose/SEO — its Latin form never
// appears in ZH values (brand/format names and URLs excepted). Placeholders: {name} = tool/file
// name, {max} = max size in MB, {year} = current year, {count} = number of
// extra errors, {current} = current theme, {progress} = ZIP progress %,
// {bytes} = byte size, {formats} = supported format list.
// NOTE on footer links: like ES/PT/DE/IT/ID/RU/JA, this dictionary keeps
// ENGLISH slugs in the footer (legal links /privacy, /terms, /about,
// /contact; directory links use English tool slugs); the app maps them to
// the current language via toLocalizedPath at render.
// NOTE on guidesSection cards: like ES/PT/DE/IT/ID/RU/JA, cards carry NO `link`
// key — the guide hrefs live in App.tsx.
// NOTE on header: the 11 language-switcher native names live in the app's
// SUPPORTED_LANGUAGES config, not in this dictionary — same as
// ES/PT/DE/IT/ID/RU/JA.
// NOTE on educational bullets: bullets are "Title: description" strings and
// the app splits them on the FIRST ASCII ': ' — so the separator in every
// bullet below is an ASCII colon + space, never a full-width colon.
// NOTE on real limits: main compressor 20 MB per image; format converters
// 25 MB per file; Background Remover 20 MB. No fake stats anywhere.

export const ZH = {
  header: {
    home: '首页', // 'Home'
    tools: '工具', // 'Tools'
    howItWorks: '使用方法', // 'How It Works'
    faq: '常见问题', // 'FAQ'
    about: '关于', // 'About'
    contact: '联系', // 'Contact'
    compressImages: '压缩图片', // 'Compress Images'
    themeLight: '浅色模式', // 'Light Mode'
    themeDark: '深色模式', // 'Dark Mode'
    themeSystem: '跟随系统', // 'System Default'
    languageLabel: '语言', // 'Language'
    homeAriaLabel: 'CompressMyPic – 免费在线图片压缩工具标志', // 'CompressMyPic – Free image compressor logo'
    themeLightShort: '浅色', // 'Light'
    themeDarkShort: '深色', // 'Dark'
    themeSystemShort: '系统', // 'System'
    themeHeading: '主题', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: '切换导航菜单', // 'Toggle navigation menu'
    themeAriaLabel: '更改颜色主题（当前：{current}）', // 'Change color theme (Current: {current})'
    themeTitle: '主题：{current}', // 'Theme: {current}'
    aboutUs: '关于我们', // 'About Us' (mobile drawer)
    contactUs: '联系我们', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      '快速、安全、私密的浏览器本地图片压缩。优化JPG、PNG和WebP图片，无需将您的数据上传到任何外部服务器。', // 'Fast, secure, and private browser-native image compression. Optimize JPG, PNG, and WebP images without uploading your data to any external server.'
    privacyNote: '100% 本地隐私保护', // '100% Client-Side Privacy'
    toolsHeading: '图片工具', // 'Image Tools'
    legalHeading: '信任与法律', // 'Trust & Legal'
    guidesHeading: '指南', // 'Guides'
    moreHeading: '更多实用工具', // 'More Utilities'
    directoryHeading: '高级压缩、编辑与开发者工具', // 'Advanced Compression, Editing & Developer Tools'
    processedLocally: '通过HTML5 Canvas在本地处理', // 'Processed locally via HTML5 Canvas'
    bottomRights:
      '© {year} CompressMyPic。保留所有权利。免费浏览器本地图片压缩工具。', // '© {year} CompressMyPic. All rights reserved. Free client-side image compression utility.'
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: '联系方式：bilalayyah@gmail.com', // 'Contact: bilalayyah@gmail.com'
    toolsLinks: [
      { slug: '/', label: '压缩图片' }, // 'Compress Images'
      { slug: '/image-resizer', label: '图片调整工具' }, // 'Image Resizer'
      { slug: '/image-converter', label: '图片转换工具' }, // 'Image Converter'
      { slug: '/rotate-flip-image', label: '旋转与翻转图片' }, // 'Rotate & Flip Image'
      { slug: '/image-to-pdf', label: '图片转PDF' }, // 'Image to PDF'
      { slug: '/remove-image-metadata', label: '删除元数据' }, // 'Remove Metadata'
      { slug: '/remove-background', label: '背景移除工具' }, // 'Background Remover'
    ],
    legalLinks: [
      { slug: '/privacy', label: '隐私政策' }, // 'Privacy Policy'
      { slug: '/terms', label: '服务条款' }, // 'Terms of Service'
      { slug: '/about', label: '关于我们' }, // 'About Us'
      { slug: '/contact', label: '联系客服' }, // 'Contact Support'
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: '如何在不损失画质的前提下为WhatsApp压缩图片', // 'How to compress images for WhatsApp without losing quality'
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP：应该选择哪种格式？', // 'JPG vs PNG vs WebP: Which Format Should You Use?'
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: '如何把图片大小减小到100KB（适用于网站和邮件）', // 'How to Reduce Image Size to 100KB for Web & Email'
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: '元数据与EXIF查看器' }, // 'Metadata & EXIF Viewer'
      { slug: '/favicon-generator', label: '网站图标生成工具' }, // 'Favicon Generator'
      { slug: '/image-color-picker', label: '图片取色器' }, // 'Image Color Picker'
      { slug: '/image-dimensions-checker', label: '图片尺寸检查工具' }, // 'Dimensions Checker'
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: '压缩到50KB' }, // 'Compress to 50KB'
      { slug: '/compress-image-to-100kb', label: '压缩到100KB' }, // 'Compress to 100KB'
      { slug: '/compress-image-to-200kb', label: '压缩到200KB' }, // 'Compress to 200KB'
      { slug: '/compress-image-to-500kb', label: '压缩到500KB' }, // 'Compress to 500KB'
      { slug: '/target-file-size-compressor', label: '目标文件大小压缩工具' }, // 'Target File Size Compressor'
      { slug: '/bulk-image-compressor', label: '批量图片压缩工具' }, // 'Bulk Image Compressor'
      { slug: '/bulk-image-resizer', label: '批量图片调整工具' }, // 'Bulk Image Resizer'
      { slug: '/bulk-image-converter', label: '批量图片转换工具' }, // 'Bulk Image Converter'
      { slug: '/web-image-optimizer', label: '网页图片优化工具' }, // 'Web Image Optimizer'
      { slug: '/gif-compressor', label: 'GIF压缩工具' }, // 'GIF Compressor'
      { slug: '/image-cropper', label: '图片裁剪工具' }, // 'Image Cropper'
      { slug: '/image-watermark', label: '图片水印工具' }, // 'Image Watermark'
      { slug: '/blur-pixelate-image', label: '模糊与马赛克' }, // 'Blur & Pixelate'
      { slug: '/add-text-to-image', label: '为图片添加文字' }, // 'Add Text to Image'
      { slug: '/image-border-generator', label: '边框生成工具' }, // 'Border Generator'
      { slug: '/round-image-corners', label: '圆角工具' }, // 'Round Corners'
      { slug: '/image-brightness-editor', label: '亮度编辑工具' }, // 'Brightness Editor'
      { slug: '/image-contrast-editor', label: '对比度编辑工具' }, // 'Contrast Editor'
      { slug: '/image-saturation-editor', label: '饱和度编辑工具' }, // 'Saturation Editor'
      { slug: '/image-filters', label: '图片滤镜' }, // 'Image Filters'
      { slug: '/add-background-to-image', label: '添加背景' }, // 'Add Background'
      { slug: '/image-splitter', label: '图片分割工具' }, // 'Image Splitter'
      { slug: '/image-dpi-changer', label: 'DPI修改工具' }, // 'DPI Changer'
      { slug: '/image-to-base64', label: '图片转Base64' }, // 'Image to Base64'
      { slug: '/base64-to-image', label: 'Base64转图片' }, // 'Base64 to Image'
      { slug: '/image-color-palette-extractor', label: '调色板提取工具' }, // 'Color Palette Extractor'
      { slug: '/gif-maker', label: 'GIF制作工具' }, // 'GIF Maker'
      { slug: '/image-collage-maker', label: '图片拼贴制作工具' }, // 'Image Collage Maker'
      { slug: '/heic-to-jpg', label: 'HEIC转JPG' }, // 'HEIC to JPG'
      { slug: '/jpg-to-png', label: 'JPG转PNG' }, // 'JPG to PNG'
      { slug: '/png-to-jpg', label: 'PNG转JPG' }, // 'PNG to JPG'
      { slug: '/jpg-to-webp', label: 'JPG转WebP' }, // 'JPG to WebP'
      { slug: '/webp-to-jpg', label: 'WebP转JPG' }, // 'WebP to JPG'
      { slug: '/png-to-webp', label: 'PNG转WebP' }, // 'PNG to WebP'
      { slug: '/webp-to-png', label: 'WebP转PNG' }, // 'WebP to PNG'
      { slug: '/svg-to-png', label: 'SVG转PNG' }, // 'SVG to PNG'
      { slug: '/avif-to-jpg', label: 'AVIF转JPG' }, // 'AVIF to JPG'
      { slug: '/bmp-to-jpg', label: 'BMP转JPG' }, // 'BMP to JPG'
    ],
  },
  hero: {
    pill: '100% 私密本地压缩 · 不上传服务器', // '100% Private Client-Side Compression · No Server Uploads'
    h1: '免费图片压缩工具 – 在线压缩图片，在不损失画质的前提下减小体积', // 'Free Image Compressor – Compress Images on the web & Reduce Size Without Losing Quality'
    sub: '在不损失肉眼可见画质的前提下减小图片文件体积。免费在线压缩图片，使用我们的免费图片压缩工具和照片压缩工具——一款支持JPG、PNG、WebP和HEIC的在线图片优化工具。快速、安全，无需注册、无水印，直接在浏览器中轻松压缩图片。', // 'Reduce image file sizes without sacrificing noticeable quality. Compress image on the web free with our free image compressor and photo compressor — an on the web image optimizer for JPG, PNG, WebP and HEIC. Fast, secure, no signup, no watermark, and easy image compression directly in your browser.'
    badge1: '您的图片永远不会离开您的设备', // 'Your images never leave your device'
    badge2: '浏览器即时处理', // 'Instant browser processing'
    badge3: '支持JPG、PNG、WebP和HEIC', // 'JPG, PNG, WebP & HEIC supported'
  },
  toolsDirectory: {
    heading: '更多免费图片处理工具', // 'More Free Image Processing Tools'
    subheading:
      '所有工具均100%在浏览器本地运行——不上传服务器、无需注册、无水印。', // 'Every tool runs 100% locally in your browser — no server uploads, no signup, no watermarks.'
    eyebrow: '全部为浏览器本地工具', // 'All Browser-Native Tools'
    allTools: '全部工具', // 'All Tools'
    openTool: '打开工具', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: '图片压缩是什么？', // 'What Is Image Compression?'
        body: '图片压缩是指在不把画面视觉质量降低到可接受水平以下的前提下，减小图片文件以字节计的大小。相机或智能手机保存照片时，会记录大量数据——其中很多数据在删除或简化后，人眼几乎察觉不到差别。CompressMyPic是一款免费的在线图片优化工具和图片体积缩小工具，也可作为照片压缩工具和照片体积缩小工具使用，支持JPG、PNG和WebP文件。\n\n通过分析这些规律，图片压缩算法会重新组织或有选择地丢弃冗余信息。得到的文件占用的存储空间大幅减少，通过互联网传输的速度也快得多。本指南将介绍如何使用CompressMyPic内置的画质滑块、预设和格式选择，在不损失画质的前提下压缩图片。', // 'Image compression is the process of reducing the file size of a graphics file in bytes without degrading the visual quality of the picture beyond an acceptable threshold. When a camera or smartphone saves a photo, it stores a huge amount of data — much of which the human eye cannot easily distinguish when removed or simplified. CompressMyPic is a free on the web image optimizer and image size reducer that works as a photo compressor and photo size reducer for JPG, PNG and WebP files.\n\nBy analyzing these patterns, image compression algorithms restructure or selectively discard redundant information. The resulting file requires significantly less storage capacity and transfers much faster across the internet. This guide shows you how to compress image without losing quality, using the quality slider, presets and format choice built into CompressMyPic.'
      },
      {
        heading: '为什么要压缩图片？', // 'Why Should You Compress Images?'
        body: '未经优化的图片是网站性能、存储负担和移动数据消耗的最大瓶颈之一。压缩图片能立刻带来实实在在的好处：', // 'Unoptimized images represent one of the single largest bottlenecks for website performance, storage overhead, and mobile data consumption. Compressing your images provides immediate tangible benefits:'
        bullets: [
          '网站加载更快: 使用压缩图片的页面加载速度最多可快70%，改善Google核心网页指标（最大内容绘制），并提升搜索引擎排名。把网站页面的图片体积减小后，访客停留更久、跳出更少。', // 'Faster Website Loading: Pages with compressed images render up to 70% faster, improving your Google Core Web Vitals (Largest Contentful Paint) and boosting search engine rankings. When you reduce image size for website pages, visitors stay longer and bounce less.'
          '存储负担更小: 保存经过优化的图片文件，而不是臃肿的原始文件，可以降低云托管、服务器磁盘占用和备份存储的成本。', // 'Reduced Storage Overhead: Cut down cloud hosting, server disk usage, and backup storage costs by storing streamlined image files instead of bloated originals.'
          '图片分享更轻松: 再也不会被严格的邮件附件大小限制或消息上传上限拦住。压缩后的照片即使在网速较慢的移动网络或流量有限的套餐下，也能立即附加并发送。', // 'Easier Image Sharing: Never get stopped by strict email attachment limits or messaging upload quotas. Compressed photos attach and send instantly, even on slow mobile connections or limited data plans.'
          '带宽消耗更少: 为用户节省移动数据费用，避免访客因加载缓慢而离开网站。文件越小，下载越快——在网速较慢的移动网络上尤其明显。', // 'Reduced Bandwidth Consumption: Save your users money on mobile data plans and prevent visitors from abandoning your site. Smaller files mean faster downloads — especially on slower mobile connections.'
        ],
      },
      {
        heading: '如何使用', // 'How It Works'
        body: '压缩照片只需几秒钟——无需账号、无需软件、无需上传。下面分三个简单步骤，介绍如何在不损失画质的前提下压缩图片。', // 'Compressing your photos takes seconds — no account, no software, no upload. Here is how to compress image without losing quality in three simple steps.'
        bullets: [
          '第1步 — 上传图片: 把JPG、PNG、WebP或HEIC图片拖放到上传区域，点击“选择文件”进行选择，或按Ctrl+V粘贴图片。可以一次上传多张图片，每张最大20MB。', // 'Step 1 — Upload your images: Drag and drop your JPG, PNG, WebP or HEIC images into the upload area, click Browse Files to select them, or paste an image with Ctrl+V. You can upload multiple images at once, up to 20 MB per image.'
          '第2步 — 调整画质并选择格式: 选择“低压缩”“均衡”或“高压缩”预设，或把画质滑块从10%拖到100%，并选择保留原始格式或转换为JPG、PNG或WebP。实时查看每张图片压缩前后的文件大小，并用交互式对比滑块检查视觉效果。', // 'Step 2 — Adjust quality and choose your format: Choose a Low, Balanced or High preset, or move the quality slider from 10% to 100%, and choose to keep the original format or convert to JPG, PNG or WebP. Watch the live before-and-after file size for every image and use the interactive comparison slider to check the visual result.'
          '第3步 — 下载压缩后的图片: 逐张下载压缩后的图片，或点击“全部下载（ZIP）”把整批图片打包成一个文件下载。图片直接在浏览器内压缩，无需等待，也无需上传。', // 'Step 3 — Download your compressed images: Download each compressed image individually, or click Download All (ZIP) to download the whole batch in one file. Your images are compressed right in your browser, so there is nothing to wait for and nothing to upload.'
        ],
      },
      {
        heading: '为什么使用这款免费图片压缩工具？', // 'Why Use This Free Image Compressor?'
        body: 'CompressMyPic是一款免费图片压缩工具，无需注册、无水印——专为日常照片、网站图片和社交媒体上传而打造。', // 'CompressMyPic is a free image compressor with no signup and no watermark — built for everyday photos, website images and social media uploads.'
        bullets: [
          '压缩JPG、PNG、WebP和HEIC: 一个图片压缩工具就能覆盖您实际使用的格式。压缩JPG和JPEG照片，在保留透明度的同时压缩PNG图片，并压缩WebP图片以获得最小的文件体积。', // 'Compress JPG, PNG, WebP & HEIC: A single image compressor for the formats you actually use. Compress JPG and JPEG photos, compress PNG graphics while keeping transparency, and compress WebP images for the smallest files.'
          '在不损失画质的前提下减小图片体积: 智能压缩会删除冗余数据和元数据，同时让图片看起来与原图几乎一模一样。“均衡”预设是最好的起点，压缩前后对比可以让您亲自验证画质。', // 'Reduce Image Size Without Losing Quality: Smart compression removes redundant data and metadata while keeping the picture looking virtually identical to the original. The Balanced preset is the best starting point, and the before-and-after comparison lets you verify the quality yourself.'
          '批量图片压缩工具——一次压缩多张图片: 使用这款批量图片压缩工具和批量图片压缩器，可以用相同设置一次压缩多张图片，然后通过“全部下载（ZIP）”按钮一起下载，无需逐个保存文件。', // 'Bulk Image Compressor – Compress Multiple Images at Once: This bulk image compressor and batch image compressor lets you compress multiple images at once with the same settings, then download them all together with the Download All (ZIP) button instead of saving files one by one.'
          '为WhatsApp、Instagram和Facebook压缩图片: 把照片变小，就能在WhatsApp上快速发送，并顺利上传到Instagram和Facebook。文件越小，移动数据用量越少，也更不容易因为太大而被拒绝。', // 'Compress Images for WhatsApp, Instagram & Facebook: Shrink photos so they send fast on WhatsApp and upload smoothly to Instagram and Facebook. Smaller files use less mobile data and are far less likely to be rejected for being too large.'
          '把图片体积减小到20KB、50KB、100KB或200KB: 逐步调低画质滑块，同时查看实时压缩前后大小，直到接近目标体积——200KB、100KB、50KB，甚至20KB。把输出格式切换为WebP，通常能在画质损失更小的前提下达到目标。', // 'Reduce Image Size to 20KB, 50KB, 100KB or 200KB: Lower the quality slider step by step and watch the live before-and-after size until you reach your target — 200KB, 100KB, 50KB or even 20KB. Switching the output format to WebP usually gets you there with less visible quality loss.'
        ],
      },
      {
        heading: '压缩JPG、PNG和WebP：应该选择哪种格式？', // 'Compress JPG, PNG and WebP: Which Format Should You Choose?'
        body: 'JPG、PNG和WebP各有不同的用途。了解各自的优势，有助于为您的具体项目做出最佳选择。\n\n对比视觉差异：不确定多大的压缩可以接受？请使用工具中的压缩前后对比功能。交互式滑块可以并排查看原图和压缩后的图片，在下载前发现任何视觉瑕疵或画质损失。', // 'JPG, PNG, and WebP each serve a different purpose. Understanding their strengths helps you make the best choice for your specific project.\n\nCompare the Visual Difference: Not sure how much compression is acceptable? Use the before-and-after comparison option in the tool. Our interactive slider tool lets you inspect the original image and the compressed version side-by-side to spot any visual artifacts or quality loss before you download.'
        bullets: [
          'JPG压缩工具——免费在线压缩JPG: 最适合网站、博客或作品集上的照片。免费在线压缩JPG，在查看实时大小的同时调低画质滑块，即可把JPEG压缩到100KB。JPEG压缩是有损压缩，会永久删除一些人眼难以察觉的视觉数据。因此，您可以把照片从几MB缩小到几KB，几乎看不出画质损失。', // 'JPG Compressor — Compress JPG on the web Free: Best for photographs on your website, blog, or portfolio. Compress JPG on the web free and compress JPEG to 100KB by lowering the quality slider while watching the live size. JPEG compression is lossy — it permanently removes some visual data that the human eye struggles to perceive. As a result, you can shrink a photo from megabytes to kilobytes with virtually no visible quality loss.'
          'PNG压缩工具——免费在线压缩PNG: 最适合图形、截图、标志，以及需要透明度的图片，例如标志、图标或插图。在这里免费在线压缩PNG，同时完整保留透明度，保持图形清晰、像素完美。把PNG转换为WebP后，文件通常会小得多。', // 'PNG Compressor — Compress PNG on the web Free: Best for graphics, screenshots, logos, and images that require transparency, such as logos, icons, or illustrations. Compress PNG on the web free here while keeping full transparency for sharp, pixel-perfect graphics. Converting a PNG to WebP often makes it much smaller.'
          '压缩WebP图片——现代格式: 最适合网页优化。WebP提供出色的有损和无损压缩，通常比JPEG或PNG小25–35%。压缩WebP图片文件可以在同等画质下获得最小的体积；如果想在不损失肉眼可见画质的前提下优化网页图片，WebP是大多数网站的最佳选择。', // 'Compress WebP Image — The Modern Format: Best for web optimisation. WebP offers excellent lossy and lossless compression that is typically 25-35% smaller than JPEG or PNG. Compress WebP image files for the smallest size at similar quality, and use WebP when you want to optimize images for web pages without visible quality loss. It is the best choice for most websites.'
        ],
      },
      {
        heading: '这款图片压缩工具可以用来做什么？', // 'What Can You Use This Image Compressor For?'
        body: '一款免费图片压缩工具，就能覆盖人们需要减小图片体积的最常见原因。', // 'One free image compressor covers the most common reasons people need to reduce image size.'
        bullets: [
          '为网页优化图片: 为网页优化图片，让页面加载更快，改善核心网页指标，提高排名。图片越小，页面越快，访客越满意，托管带宽也越省。', // 'Optimize images for web: Optimize images for web pages to load faster, improve Core Web Vitals and rank better. Smaller images mean faster pages, happier visitors and lower hosting bandwidth.'
          '为邮件附件压缩图片: 为邮件附件压缩图片，让照片符合附件大小限制。附加下载后的小文件，而不是体积庞大的原图，邮件就不会被退回。', // 'Compress images for email attachment: Compress images for an email attachment so your photos fit inside attachment size limits. Attach the smaller downloads instead of the large originals and your emails will send without bouncing.'
          '为网站压缩照片: 在上传到网站、博客、作品集或在线商店之前，先压缩照片。产品照片、横幅和博客图片保持清晰，同时在服务器上占用的空间大幅减少。', // 'Compress photo for website: Compress a photo for your website, blog, portfolio or on the web store before you upload it. Product photos, banners and blog images stay sharp while taking up far less space on your server.'
          '减小照片文件体积: 在分享、备份或打印之前，先减小手机或相机照片的文件体积。大照片变得发送迅速、易于存储、管理简单。', // 'Reduce photo file size: Reduce photo file size from a phone or camera before sharing, backing up or printing. Large photos become quick to send, easy to store and simple to manage.'
        ],
      },
      {
        heading: '为什么图片大小很重要', // 'Why Image Size Matters'
        body: '体积庞大、分辨率高的图片文件，是相机技术快速发展的结果——如今的图片比几年前大了2–3倍。减小网站页面的图片体积、为网页优化图片后，网站加载更快、带宽用量更少，在搜索结果中的排名也更好。\n\n在寻找一款好的压缩工具时，请检查以下三点：1）不牺牲画质，2）保护您的数据隐私（本地处理），3）无需把文件发送到遥远的服务器即可快速处理。这正是CompressMyPic的设计初衷。', // 'Large, high-resolution image files are the result of the rapid advancement in camera technology — images are now 2-3x larger than they were just a few years ago. When you reduce image size for website pages and optimize images for web use, your site loads faster, uses less bandwidth and ranks better in search results.\n\nWhen searching for a good compressor, look for one that: 1) does not compromise on quality, 2) keeps your data private (client-side processing), and 3) processes images fast without running your files through a distant server. That is exactly what CompressMyPic is built for.'
      },
      {
        heading: '优化技巧：在不损失画质的前提下减小图片体积', // 'Optimization Tips: Reduce Image Size Without Losing Quality'
        body: '',
        bullets: [
          '从“均衡”预设开始: “均衡”预设（70%画质）为大多数图片提供了最佳平衡——文件大幅变小，与原图的视觉差异却很小。', // 'Start with the Balanced Preset: The Balanced preset (70% quality) offers the optimal trade-off for most images — dramatically smaller files with great visual similarity to the original.'
          '选择合适的格式: 对于照片，JPG或WebP在文件体积上总是优于PNG。对于带透明度的标志和线条图形，请使用PNG。', // 'Choose the right format: For photographs, JPG or WebP will always outperform PNG in file size. For logos and line graphics with transparency, use PNG.'
          '设定目标体积: 网站使用时，力求图片小于200KB。邮件和消息使用时，保持在1MB以下，以确保快速送达。利用画质滑块和实时大小显示来达到目标体积。', // 'Aim for a target size: For website use, aim for images under 200 KB. For emails and messages, stay under 1 MB to ensure fast delivery. Use the quality slider and the live size display to reach your target size.'
          '找到最佳平衡点: 对于画质重要的主视觉图片，把画质滑块设为85–90%；一般网站使用时，70–80%通常是理想的平衡；缩略图或以体积为首要考虑时，50–60%更合适。', // 'Find the sweet spot: Set the quality slider to 85-90% for hero images where quality matters; 70-80% is typically the ideal balance for general website use; 50-60% is better for thumbnails or when size is the top priority.'
          '想要最小的文件，可以试试WebP: 把输出格式切换为WebP，通常能在同等画质下把JPG或PNG再缩小25–35%——这是在不损失画质的前提下减小图片体积的简单方法。', // 'Try WebP for the smallest files: Switching the output format to WebP usually shrinks a JPG or PNG by another 25-35% at similar quality — a simple way to reduce image size without losing quality.'
        ],
      },
    ],
  },
  faqSection: {
    heading: '常见问题', // 'Frequently Asked Questions'
    subheading:
      '关于使用CompressMyPic免费在线压缩图片，您需要了解的一切都在这里。', // 'Everything you need to know about compressing images on the web for free with CompressMyPic.'
    faqs: [
      {
        id: 'faq-1',
        question: '如何免费在线压缩图片？', // 'How can I compress an image on the web for free?'
        answer:
          '只需把图片文件拖放到CompressMyPic上，或点击“选择文件”。选择一个压缩预设（低压缩、均衡或高压缩），或调整画质滑块，然后立即下载优化后的图片。本工具100%免费，无需注册，也无需安装软件。', // 'Simply drag and drop your image files onto CompressMyPic or click "Browse Files". Choose a compression preset (Low, Balanced, or High) or adjust the quality slider, then download your optimized images instantly. The tool is 100% free with no sign-up or software installation required.'
      },
      {
        id: 'faq-2',
        question: '如何把图片压缩到100KB？', // 'How do I compress an image to 100KB?'
        answer:
          'CompressMyPic没有可以直接输入目标KB数的输入框，因此无法直接输入100KB。请改为上传图片，选择一个预设或调低画质滑块，并查看每张图片下方显示的实时压缩前后大小。调整画质，或把输出格式切换为WebP，直到压缩后的大小接近100KB，然后下载即可。', // 'CompressMyPic does not have an exact target-KB input box, so you cannot type in 100KB directly. Instead, upload your image, choose a preset or lower the quality slider, and watch the live before-and-after size shown for each image. Adjust the quality or switch the output format to WebP until the compressed size is close to 100KB, then download it.'
      },
      {
        id: 'faq-3',
        question: '如何在不损失画质的前提下减小图片体积？', // 'How can I reduce image size without losing quality?'
        answer:
          '请选择“均衡”预设（约70%画质）或85–90%的高画质设置，它会删除冗余数据和元数据，同时让图片看起来与原图几乎一模一样。使用交互式压缩前后对比检查结果，并保留原始格式，或选择WebP以获得最佳的画质与体积平衡。', // 'Choose the Balanced preset (around 70% quality) or a high quality setting of 85-90%, which removes redundant data and metadata while keeping the picture looking virtually identical to the original. Use the interactive before-and-after comparison to check the result, and keep the original format or choose WebP for the best quality-to-size balance.'
      },
      {
        id: 'faq-4',
        question: '如何把JPEG压缩到100KB？', // 'How do I compress a JPEG to 100KB?'
        answer:
          '要减小JPEG文件体积，请上传您的JPEG，选择JPEG作为输出格式，然后一边查看实时压缩大小，一边逐步调低画质滑块。由于没有可以直接输入目标KB数的输入框，请通过压缩前后大小显示来判断，在文件接近100KB时停止。', // 'To reduce JPEG file size, upload your JPEG, choose JPEG as the output format, then lower the quality slider step by step while watching the live compressed size. Because there is no exact target-KB box, use the before-and-after size display to stop when the file is close to 100KB.'
      },
      {
        id: 'faq-5',
        question: '如何把图片体积减小到20KB、50KB或200KB？', // 'How do I reduce image size to 20KB, 50KB or 200KB?'
        answer:
          '请上传图片，逐步调低画质滑块，每次调整后查看实时压缩前后大小，直到达到目标体积——200KB、50KB或20KB。20KB这样较小的目标通常需要更低的画质设置和WebP输出。同样的方法适用于任何目标体积，包括500KB，而且大小始终以KB显示，因此您可以准确看到图片体积减小了多少KB。', // 'Upload your image and lower the quality slider gradually, checking the live before-and-after size after each change, until you reach your target - 200KB, 50KB or 20KB. Smaller targets such as 20KB usually need a lower quality setting and WebP output. The same method works for any target, including 500KB, and the size is always shown in KB so you can see exactly how much you reduced the image size in KB.'
      },
      {
        id: 'faq-6',
        question: '如何免费在线压缩PNG？', // 'How do I compress a PNG on the web for free?'
        answer:
          '请把PNG上传到CompressMyPic，选择一个预设或调整画质滑块——在这里在线压缩PNG是免费的，无需注册。PNG和WebP输出都会保留透明度，把PNG转换为WebP后通常会小得多。', // 'Upload your PNG to CompressMyPic and choose a preset or adjust the quality slider - compressing a PNG on the web is free here, with no signup. Transparency is preserved for PNG and WebP output, and converting a PNG to WebP often makes it much smaller.'
      },
      {
        id: 'faq-7',
        question: '支持哪些图片格式？', // 'What image formats are supported?'
        answer:
          'CompressMyPic支持JPG（JPEG）、PNG、WebP和HEIC——包括在iPhone上拍摄的照片，iPhone照片默认保存为HEIC。您可以保留原始格式，也可以在格式之间转换——例如，把JPG文件按JPEG压缩，在保留透明度的同时压缩PNG文件，或转换为WebP以获得最小的文件体积。', // 'CompressMyPic supports JPG (JPEG), PNG, WebP and HEIC — including photos taken on iPhones, which save as HEIC by default. You can keep the original format or convert between them - for example, compress JPG files as JPEG, compress PNG files while keeping transparency, or convert to WebP for the smallest files.'
      },
      {
        id: 'faq-8',
        question: '可以一次压缩多张图片吗？', // 'Can I compress multiple images at once?'
        answer:
          '可以。这款批量图片压缩工具和批量图片压缩器支持一次上传几十张图片，用相同设置一次压缩多张图片，然后通过“全部下载（ZIP）”按钮一起下载，也可以逐张下载。', // 'Yes. This bulk image compressor and batch image compressor lets you upload dozens of images at once, compress multiple images at once with the same settings, and download them all together with the "Download All (ZIP)" button, or download each one individually.'
      },
      {
        id: 'faq-9',
        question: '如何为WhatsApp压缩图片？', // 'How do I compress an image for WhatsApp?'
        answer:
          '请上传照片，选择较低画质的预设或WebP输出，然后在WhatsApp上分享之前下载较小的文件。照片越小，发送越快，移动数据用量越少，也越不容易因为太大而被拒绝。', // 'Upload your photo, choose a lower quality preset or WebP output, and download the smaller file before sharing it on WhatsApp. Smaller photos send faster, use less mobile data, and are less likely to be rejected for being too large.'
      },
      {
        id: 'faq-10',
        question: '如何为Instagram或Facebook压缩图片？', // 'How do I compress an image for Instagram or Facebook?'
        answer:
          '请在这里上传照片，选择“均衡”预设，然后下载变小的JPG或WebP文件，即可为Instagram或Facebook压缩照片。缩小后的文件上传更快，同时为动态、快拍和头像保留足够的画质。', // 'Compress your photo for Instagram or Facebook by uploading it here, choosing the Balanced preset, and downloading the smaller JPG or WebP file. The reduced file uploads faster and keeps enough quality for feeds, stories and profile pictures.'
      },
      {
        id: 'faq-11',
        question: '可以为邮件附件压缩图片吗？', // 'Can I compress images for an email attachment?'
        answer:
          '可以。请用画质滑块把图片缩小，直到每个文件都符合您的邮件服务商的附件大小限制，然后把下载后的文件附加到邮件中，而不是体积庞大的原图，即可为邮件附件压缩图片。', // 'Yes. Compress images for an email attachment by reducing them with the quality slider until each file is small enough for your email provider attachment limit, then attach the downloaded files to your message instead of the large originals.'
      },
      {
        id: 'faq-12',
        question: 'CompressMyPic真的免费吗？', // 'Is CompressMyPic really free?'
        answer:
          '是的，CompressMyPic完全免费使用。没有任何费用、付费套餐、积分，也不限定您可以压缩的图片数量。', // 'Yes, CompressMyPic is completely free to use. There are no fees, no paid plans, no credits and no limits on how many images you can compress.'
      },
      {
        id: 'faq-13',
        question: 'CompressMyPic会添加水印吗？', // 'Does CompressMyPic add a watermark?'
        answer:
          '不会。CompressMyPic是一款无水印的免费图片压缩工具——您压缩后的图片是干净的，不会添加任何标志、文字或品牌标识。', // 'No. CompressMyPic is a free image compressor with no watermark - your compressed images are clean, with no logo, text or branding added.'
      },
      {
        id: 'faq-14',
        question: '使用CompressMyPic需要注册吗？', // 'Do I need to sign up to use CompressMyPic?'
        answer:
          '不需要。这是一款无需注册的免费图片压缩工具：不需要账号、电子邮箱或密码。只需打开网站，即可开始压缩。', // 'No. This is a free image compressor with no signup: there is no account, no email address and no password required. Just open the site and start compressing.'
      },
      {
        id: 'faq-15',
        question: '我的图片会被上传到服务器吗？', // 'Are my images uploaded to a server?'
        answer:
          '不会。所有压缩都在您的设备上、网页浏览器内完整进行，因此您的图片永远不会被上传到服务器、存储起来或被他人查看。它们只保留在浏览器内存中，刷新或关闭标签页后即被清除。', // 'No. All compression happens entirely on your own device inside your web browser, so your images are never uploaded to a server, stored or viewed by anyone else. They stay in your browser memory and are cleared when you refresh or close the tab.'
      },
      {
        id: 'faq-16',
        question: '有文件大小限制吗？', // 'Is there a file size limit?'
        answer:
          '有，限制为每张图片20MB，足以覆盖高分辨率相机照片和大型截图。由于处理在您的设备上进行，即使是大文件，压缩速度依然很快。', // 'Yes, the limit is 20 MB per image, which covers high-resolution camera photos and large screenshots. Because processing happens on your device, compression stays fast even for large files.'
      },
      {
        id: 'faq-17',
        question: '压缩图片会改变尺寸吗？', // 'Does compressing an image change its dimensions?'
        answer:
          '不会。CompressMyPic不会改变图片尺寸——只会减小文件体积。您的照片会保持与原图相同的宽度、高度和宽高比。', // 'No. CompressMyPic keeps your image dimensions unchanged - only the file size is reduced. Your photo keeps the same width, height and aspect ratio as the original.'
      },
      {
        id: 'faq-18',
        question: '可以在手机上压缩图片吗？', // 'Can I compress images on mobile?'
        answer:
          '可以。CompressMyPic支持iOS和Android上的移动浏览器，因此您可以从相机胶卷中选择照片，或拍摄新照片并上传到这里，在手机上压缩照片。', // 'Yes. CompressMyPic works on mobile browsers on iOS and Android, so you can compress a photo on your phone by picking it from your camera roll or taking a new picture and uploading it here.'
      },
      {
        id: 'faq-19',
        question: '画质滑块是如何工作的？', // 'How does the quality slider work?'
        answer:
          '画质滑块可以将压缩画质设置为10%到100%。数值越高，保留的细节越多，文件也越大；数值越低，文件越小。“低压缩”“均衡”和“高压缩”预设会为您设置滑块，实时压缩前后大小会显示每次调整的结果。', // 'The quality slider lets you set the compression quality from 10% to 100%. Higher values keep more detail and produce larger files, while lower values make files much smaller. The Low, Balanced and High presets set the slider for you, and the live before-and-after size shows the result of every change.'
      },
      {
        id: 'faq-20',
        question: '如何选择输出格式？', // 'How do I choose the output format?'
        answer:
          '上传图片后，请选择保留原始格式，或转换为JPG、PNG或WebP。WebP通常是优化网页图片的最佳选择，因为在同等画质下，它比JPEG小25–35%；而需要透明度时，PNG是最佳选择。', // 'After uploading an image, choose whether to keep the original format or convert to JPG, PNG or WebP. WebP is usually the best choice to optimize images for web pages because it is 25-35% smaller than JPEG at similar quality, while PNG is best when you need transparency.'
      },
    ],
  },
  guidesSection: {
    heading: '指南', // 'Guides'
    subheading:
      '一步步教你减小文件体积，同时不损失肉眼可见的画质。', // 'Step-by-step guides to get smaller files without losing visible quality.'
    cards: [
      {
        title: '如何在不损失画质的前提下为WhatsApp压缩图片', // 'How to compress images for WhatsApp without losing quality'
        desc: '发送前先缩小照片，保持清晰、发送更快。', // 'Shrink photos before sending so they stay sharp and send fast.'
        cta: '阅读指南 →', // 'Read guide →'
      },
      {
        title: 'JPG vs PNG vs WebP：应该选择哪种格式？', // 'JPG vs PNG vs WebP: Which Format Should You Use?'
        desc: '对比文件大小、画质和透明度，帮你选对格式。', // 'File size, quality and transparency compared, so you can pick the right format.'
        cta: '阅读指南 →', // 'Read guide →'
      },
      {
        title: '如何把图片大小减小到100KB（适用于网站和邮件）', // 'How to Reduce Image Size to 100KB for Web & Email'
        desc: '一步步操作：在不损失肉眼可见画质的前提下达到100KB。', // 'Step-by-step: hit 100KB without losing visible quality.'
        cta: '阅读指南 →', // 'Read guide →'
      },
    ],
  },
  shareSection: {
    heading: '与朋友分享CompressMyPic', // 'Share CompressMyPic with friends'
    text: '觉得这个工具有用吗？帮朋友也压缩一下图片吧——只需点一下。', // 'Found this tool useful? Help a friend compress their images too — it takes one tap.'
    shareText:
      '免费在线压缩图片——无需注册、无水印。试试CompressMyPic：', // 'Compress images on the web for free — no signup, no watermark. Try CompressMyPic:'
    siteUrl: 'https://compressmypic.online/',
    shareOn: '分享到{name}', // 'Share on {name}'
    copyLink: '复制链接', // 'Copy link'
    copied: '已复制！', // 'Copied!'
    share: '分享', // 'Share'
    emailSubject: '免费图片压缩工具 – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – 免费图片压缩工具', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: '首页', // 'Home'
    privacyPill: '100% 私密浏览器处理 · 文件永远不会离开您的设备', // '100% Private Browser Processing · Files Never Leave Your Device'
    noUploads: '不上传服务器', // 'No server uploads'
    freeNote: '免费 · 无需注册 · 无水印', // 'Free · No signup · No watermark'
    howToTitle: '如何使用{name}', // 'How to Use {name}'
    howToIntro:
      '按照这些简单步骤，直接在浏览器内完成任务。', // 'Follow these simple steps to complete your task — right inside your browser.'
    featuresTitle: '为什么使用CompressMyPic的{name}？', // 'Why Use CompressMyPic {name}?'
    faqTitle: '{name} — 常见问题', // '{name} — Frequently Asked Questions'
    relatedTitle: '相关免费图片工具', // 'Related Free Image Tools'
    commentsTitle: '评论',
    commentsNote: '分享您对这个工具的看法 — 只需写下您的名字即可发布，无需账号。',
    commentsNamePlaceholder: '您的名字',
    commentsTextPlaceholder: '写下您的评论…',
    commentsSubmit: '发布评论',
    commentsPosting: '发布中…',
    commentsEmpty: '成为第一个评论的人。',
    commentsPosted: '谢谢！您的评论已发布。',
    commentsLoadError: '无法加载评论，请重试。',
    commentsPostError: '无法发布评论，请重试。',
    commentsRetry: '重试',
    commentsLoading: '正在加载评论…',
  },
  uploadZone: {
    dropText: '将图片拖放到此处', // 'Drag & drop images here'
    browseButton: '选择文件', // 'browse files'
    browsePrefix: '或', // 'or'
    browseSuffix: '从您的电脑或手机', // 'from your computer or phone'
    orPaste: '支持粘贴（Ctrl+V）', // 'Paste (Ctrl+V) supported'
    hint: '每张图片最大{max}MB', // 'Max {max} MB per image'
    errorTooBig: '“{name}”超过了{max}MB的上限。', // '"{name}" exceeds the maximum limit of {max} MB.'
    errorBadType: '“{name}”是不支持的格式（{formats}）。', // '"{name}" is not a supported format ({formats}).'
    errorUnreadable: '“{name}”是空文件（0字节）。', // '"{name}" is an empty file (0 bytes).'
    errorMore: '（还有{count}个错误）', // '(+{count} more errors)'
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      '图片上传区域。拖放图片，或点击选择文件。', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: '文件已损坏或无法读取。', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: '画质对比', // 'Visual Quality Comparison'
    beforeLabel: '原图（压缩前）', // 'Original (Before)'
    afterLabel: '压缩后', // 'Compressed (After)'
    closeLabel: '关闭对比视图', // 'Close comparison view'
    instruction: '左右拖动滑块，检查像素级画质。', // 'Drag the slider handle left or right to inspect pixel quality.'
    sliderLabel: '滑块', // 'Slider'
    sideBySideLabel: '并排对比', // 'Side by Side'
    zoomInLabel: '放大', // 'Zoom in'
    zoomOutLabel: '缩小', // 'Zoom out'
    originalLabel: '原图：', // 'Original:'
    outputLabel: '输出：', // 'Output:'
    reductionLabel: '减小：', // 'Reduction:'
    sizeChangeLabel: '大小变化：', // 'Size Change:'
    qualityLabel: '画质设置：', // 'Quality Setting:'
    formatLabel: '格式：', // 'Format:'
    modalAriaLabel: '图片对比窗口', // 'Image comparison modal'
    altCompressed: '{name}的压缩版本', // 'Compressed version of {name}'
    altOriginal: '{name}的原始版本', // 'Original version of {name}'
    altProcessed: '{name}的处理后版本', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: '免费在线图片压缩工具 – 图片压缩到100KB', // 'Free Image Compressor on the web – Reduce Image Size to 100KB'
    seoDescription:
      '免费在线压缩图片，在不损失肉眼可见画质的前提下减小图片体积。支持JPG、PNG、WebP和HEIC，无需注册、无水印，直接在浏览器中处理，安全又快速。立即免费压缩您的照片和网站图片吧。无论是网站图片、社交媒体照片还是邮件附件，都能快速变小、保持清晰，几秒钟即可完成，无需安装任何软件。随时随地都能用。', // 'Compress image on the web free — reduce image size without losing quality. Compress JPG, PNG and WebP with no signup and no watermark, right in your browser.'
    h1: '免费在线图片压缩工具', // 'Free Image Compressor'
    subtitle: '直接在浏览器中减小JPG、PNG、WebP和HEIC的文件体积。', // 'Reduce JPG, PNG, WebP & HEIC file size directly in your browser.'
  },
  categories: {
    compress: '压缩', // 'Compress'
    resize: '调整尺寸', // 'Resize'
    convert: '转换', // 'Convert'
    'crop-edit': '裁剪与编辑', // 'Crop & Edit'
    'ai-tools': 'AI工具', // 'AI Tools'
    create: '创作', // 'Create'
    privacy: '隐私', // 'Privacy Tools'
    developer: '开发者工具', // 'Developer Tools'
  },
  compressionControls: {
    modeLabel: '压缩模式', // 'Compression Mode'
    presetLow: '低压缩（85%）', // 'Low Compression (85%)'
    presetBalanced: '均衡（70%）', // 'Balanced (70%)'
    presetHigh: '高压缩（50%）', // 'High Compression (50%)'
    presetCustom: '自定义', // 'Custom'
    formatLabel: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    qualityLabel: '画质目标：', // 'Quality Target:'
    qualityHigh: '高保真', // 'High Fidelity' (quality >= 80)
    qualityOptimal: '网页最佳平衡', // 'Optimal Web Balance' (60–79)
    qualityMax: '最大程度节省空间', // 'Max Space Savings' (< 60)
    qualityAriaLabel: '画质滑块，从10%到100%', // 'Quality slider from 10 to 100 percent'
    compressAll: '重新压缩全部', // 'Re-compress All'
    compressing: '压缩中…', // 'Compressing...'
    clearAll: '全部清除', // 'Clear All'
    clearAllTitle: '清除全部图片', // 'Clear all images'
    transparencyTitle: '转换为JPEG时的透明度提示', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'JPEG格式不支持透明度（Alpha通道）。透明背景将被替换为纯色背景（默认为白色）。如果想保留透明背景，请选择PNG或WebP。', // 'JPEG format does not support transparency (alpha channels). Transparent backgrounds will be replaced with a solid matte background (default white). Select PNG or WebP if you wish to retain transparent backgrounds.'
    pngTip:
      'PNG是无损格式，会忽略画质滑块，因此重新编码PNG有时会与原文件一样大，甚至更大。对于照片类PNG，选择WebP或JPG通常可以再小50–80%。', // 'PNG is a lossless format and ignores the quality slider, so re-encoding a PNG can sometimes match or exceed the original file size. For photo-like PNGs, selecting WebP or JPG usually produces 50–80% smaller files.'
  },
  resultsList: {
    summary: '压缩摘要', // 'Compression Summary'
    image: '图片', // 'Image' (count === 1)
    images: '图片', // 'Images' (count !== 1) — Chinese has no plural inflection
    totalOriginal: '原图总计：', // 'Total Original:'
    totalCompressed: '压缩后总计：', // 'Total Compressed:'
    totalSaved: '共节省：', // 'Total Saved:'
    processing: '处理中…', // 'Processing...'
    grewBy: '（增加了{bytes}）', // '(grew by {bytes})'
    reduction: '减小：', // 'Reduction:'
    sizeChange: '大小变化：', // 'Size Change:'
    downloadAll: '全部下载（ZIP）', // 'Download All (ZIP)'
    creatingZip: '正在创建ZIP（{progress}%）…', // 'Creating ZIP ({progress}%)...'
    compare: '对比', // 'Compare'
    compareTitle: '点击查看画质对比', // 'Click to inspect visual quality comparison'
    compareActionTitle: '对比压缩前后的视觉效果', // 'Compare visual before/after'
    download: '下载', // 'Download'
    retry: '重试', // 'Retry'
    removeTitle: '删除图片', // 'Remove image'
    removeAriaLabel: '删除{name}', // 'Remove {name}'
    keptOriginal: '保留原图（重新编码后更大）', // 'Kept original (re-encode was larger)'
    grewByStatus: '增加了{bytes}——重新编码后比原图更大', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: '压缩成功', // 'Compressed successfully'
    optimizing: '正在优化像素…', // 'Optimizing pixels...'
    compressionError: '压缩错误', // 'Compression error'
    original: '原图', // 'Original' (metric label)
    compressed: '压缩后', // 'Compressed' (metric label)
    output: '输出', // 'Output' (metric label when original kept)
    spaceSaved: '节省空间', // 'Space Saved'
    formatLabel: '格式：', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alpha', // 'Alpha' badge
    largerTitle: '输出比原图大{bytes}。', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      '无损PNG重新编码会忽略画质滑块；对于照片类PNG，WebP或JPG通常要小得多。', // 'Lossless PNG re-encoding ignores the quality slider; WebP or JPG is usually much smaller for photo-like PNGs.'
    largerNote:
      '这张图片在所选画质下已经压缩得很充分了。', // 'This image was already tightly compressed for the selected quality.'
    keepOriginal: '保留原图', // 'Keep original'
  },
} as const;

// Per-tool workspace UI strings in Chinese (Simplified Mandarin) — COMPLETE (all 48 tools).
// Assembled from tool-ui-zh-batch1.ts … tool-ui-zh-batch6.ts (coordinator merge).
// Target: merged into src/locales/zh/ui.ts as the TOOL_UI_ZH export.
// Chinese (Simplified Mandarin), natural Simplified Mandarin. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.
// NOTE: the '/image-metadata-viewer' gpsWarning string is split across JSX
// lines in the page file with an inline link button; gpsWarningLink
// carries that link's text. The '/target-file-size-compressor' table
// carries qualityLosslessPng (looked up by targetCompression.ts for
// the qualityLabel of PNG outputs) and uses the EN
// runtime placeholder names {bytes}/{qualityLabel}/{percent} — the
// only {size} left is maxSuffix, which the component replaces itself.

export const TOOL_UI_ZH = {

  '/image-resizer': {
    comparisonTitlePrefix: '调整尺寸对比', // 'Resize Comparison'
    comparisonAfterLabel: '调整后', // 'Resized (After)'
    presetInstagramPost: 'Instagram 帖子（1080×1080）', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Instagram 快拍（1080×1920）', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'YouTube 缩略图（1280×720）', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Facebook 封面（851×315）', // 'Facebook Cover (851×315)'
    presetXHeader: 'X 头图（1500×500）', // 'X Header (1500×500)'
    presetFullHd: '全高清（1920×1080）', // 'Full HD (1920×1080)'
    errorResizeFailed: '调整大小失败。', // 'Resize failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    resizeMode: '调整大小模式', // 'Resize Mode'
    modeByPixels: '按像素（宽 × 高）', // 'By Pixels (W × H)'
    modeByPercentage: '按百分比（%）', // 'By Percentage (%)'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: '宽度（px）', // 'Width (px)'
    heightLabel: '高度（px）', // 'Height (px)'
    placeholderAuto: '自动', // placeholder 'Auto'
    aspectRatioLocked: '已锁定宽高比', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: '已解锁（自定义）', // 'Unlocked (Custom)'
    fitModeLabel: '适配模式：', // 'Fit Mode:'
    fitContain: '完整显示（不裁剪）', // 'Contain (No Crop)'
    fitCover: '填满（居中裁剪）', // 'Cover (Center Crop)'
    fitStretchExact: '拉伸至精确尺寸', // 'Stretch Exact'
    quickPresets: '社交与网页快捷预设', // 'Quick Social & Web Presets'
    scalePercentage: '缩放比例：', // 'Scale Percentage:'
    outputQuality: '输出质量：', // 'Output Quality:'
    matteBg: '背景色：', // 'Matte BG:'
    resizing: '正在调整大小…', // 'Resizing...'
    resizeAll: '全部调整大小（{count} 张）', // 'Resize All ({count})'
    clear: '清空', // 'Clear'
    batchReady: '批量已就绪', // 'Batch Ready'
    batchReadySingular: '{count} 张已调整大小的图片可供下载', // '{count} resized image ready to download'
    batchReadyPlural: '{count} 张已调整大小的图片可供下载', // '{count} resized images ready to download'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    resizedStatus: '已调整大小（{original} → {converted}）', // 'Resized ({original} → {converted})'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: '格式转换对比', // 'Format Conversion Comparison'
    comparisonAfterLabel: '转换后', // 'Converted (After)'
    errorConversionFailed: '转换失败。', // 'Conversion failed.'
    errorUnsupportedFile: '不支持或已损坏的图片文件。', // 'Unsupported or corrupted image file.'
    convertToFormat: '转换为以下格式', // 'Convert To Format'
    formatWebp: 'WebP（网页上最小）', // 'WebP (Smallest Web)'
    formatJpg: 'JPG（通用）', // 'JPG (Universal)'
    formatPng: 'PNG（无损透明）', // 'PNG (Lossless Alpha)'
    transparencyFillColor: '透明填充颜色', // 'Transparency Fill Color'
    quality: '质量', // 'Quality'
    qualityLosslessPng: '无损 PNG', // 'Lossless PNG'
    converting: '正在转换…', // 'Converting...'
    convertAll: '全部转换（{count} 个）', // 'Convert All ({count})'
    clear: '清空', // 'Clear'
    conversionComplete: '转换完成', // 'Conversion Complete'
    filesConverted: '已将 {count} 个文件转换为 {format}', // '{count} files converted to {format}'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    convertedStatus: '已转换为 {ext}', // 'Converted to {ext}'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
  },
  '/rotate-flip-image': {
    quickRotateFlip: '快速旋转与翻转', // 'Quick Rotate & Flip'
    rotate90Left: '向左旋转 90°', // 'Rotate 90° Left'
    rotate90Right: '向右旋转 90°', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: '水平翻转', // 'Flip Horizontal'
    flipVertical: '垂直翻转', // 'Flip Vertical'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: '旋转角度：', // 'Rotation Angle:'
    resetTo0: '重置为 0°', // 'Reset to 0°'
    applyAngle: '应用角度', // 'Apply Angle'
    clear: '清空', // 'Clear'
    batchReady: '批量已就绪', // 'Batch Ready'
    transformedImagesReady: '{count} 张已变换的图片已就绪', // '{count} transformed images ready'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    rotatedBadge: '已旋转 {angle}°', // 'Rotated {angle}°'
    flippedH: ' · 已水平翻转', // ' · Flipped H'
    flippedV: ' · 已垂直翻转', // ' · Flipped V'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeItem: '删除 {name}', // 'Remove {name}' (aria-label)
    transformFailed: '变换失败。', // 'Transform failed.'
    corruptedImage: '图片已损坏或无法读取。', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: '旋转与翻转对比', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: '编辑后', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: '拖放图片以合并为 PDF', // 'Drop images to combine into PDF'
    couldNotRead: '无法读取“{filename}”。请确认它是一张有效的图片。', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'PDF 生成失败。', // 'PDF generation failed.'
    encodingPage: '正在编码第 {current}/{total} 页…', // 'Encoding page {current} of {total}...'
    generatingPdf: '正在生成 PDF…', // 'Generating PDF...'
    pageSize: '页面尺寸', // 'Page Size'
    pageSizeA4: 'A4（210 × 297 毫米）', // 'A4 (210 × 297 mm)'
    pageSizeLetter: '美国信纸（8.5 × 11 英寸）', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: '适配图片尺寸', // 'Fit to Image Size'
    orientation: '方向', // 'Orientation'
    orientationAuto: '自动（匹配照片）', // 'Auto (Match Photo)'
    orientationPortrait: '纵向', // 'Portrait'
    orientationLandscape: '横向', // 'Landscape'
    margin: '边距', // 'Margin'
    marginNone: '无边距（满版）', // 'No Margin (Full Bleed)'
    marginSmall: '小边距', // 'Small Margin'
    marginMedium: '中边距', // 'Medium Margin'
    imagePlacement: '图片放置方式', // 'Image Placement'
    placementContain: '完整显示（整张图片）', // 'Contain (Full Image)'
    placementCover: '填满页面', // 'Cover (Fill Page)'
    pdfFilename: 'PDF 文件名', // 'PDF Filename'
    pdfImageQuality: 'PDF 图片质量：', // 'PDF Image Quality:'
    createDownloadPdf: '创建并下载 PDF（{count} 页）', // 'Create & Download PDF ({count}p)'
    clear: '清空', // 'Clear'
    pdfReady: 'PDF 已就绪（{count} {pages} · {size}）', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: '页', // 'page'
    pagePlural: '页', // 'pages'
    downloadPdfAgain: '再次下载 PDF', // 'Download PDF Again'
    pageOrder: '页面顺序（{count} {pages}）', // 'Page Order ({count} {pages})'
    pageOrderSingular: '页', // 'Page' (in Page Order heading)
    pageOrderPlural: '页', // 'Pages' (in Page Order heading)
    movePageUp: '上移页面', // 'Move page up' (title)
    movePageDown: '下移页面', // 'Move page down' (title)
    removePage: '删除页面', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: '拖放图片以查看 EXIF 与元数据', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: '无法解析图片元数据。', // 'Unable to parse image metadata.'
    embeddedMetadataFound: '发现嵌入的元数据（{count} 种标签）', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: '未检测到 EXIF、GPS 或隐藏的相机标签', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: '删除元数据', // 'Strip Metadata'
    copyJson: '复制 JSON', // 'Copy JSON'
    copiedJson: '已复制 JSON', // 'Copied JSON'
    exportJson: '导出 JSON', // 'Export JSON'
    clear: '清空', // 'Clear' (title)
    gpsDetected: '检测到 GPS 位置坐标', // 'GPS Location Coordinates Detected'
    latitude: '纬度：', // 'Latitude:'
    longitude: '经度：', // 'Longitude:'
    gpsWarning:
      '按原样分享这张图片可能会暴露照片的拍摄地点。在发布到在线平台之前，请使用删除图片元数据。', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.' — split across JSX lines in the page, with an inline link button
    gpsWarningLink: '删除图片元数据', // inline link text inside the GPS warning: 'Remove Image Metadata' — extra key, not in the Spanish table
    extractedMetadata: '提取的元数据（{count} 个属性）', // 'Extracted Metadata ({count} properties)'
    privacyTag: '隐私标签', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: '拖放照片以删除 EXIF、GPS 与元数据', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: '删除元数据失败。', // 'Failed to strip metadata.'
    strippingMethod: '删除方式', // 'Stripping Method'
    losslessStrip: '无损二进制删除（JPG/PNG）', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: '完整画布重新编码', // 'Full Canvas Re-encode'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: '重新编码质量（用于 WebP/HEIC 或完整重新编码）：', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: '正在清理…', // 'Cleaning...'
    recleanAll: '全部重新清理', // 'Re-clean All'
    clear: '清空', // 'Clear'
    privacyVerified: '隐私已验证', // 'Privacy Verified'
    cleanImagesReady: '{count} 张已删除元数据的干净图片已就绪', // '{count} clean images ready with metadata stripped'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllCleanZip: '全部下载干净图片（ZIP）', // 'Download All Clean (ZIP)'
    strippedTags: '已删除 {before} 个元数据标签 → 剩余 {after} 个', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: '已验证为干净（0 个 EXIF/GPS 标签）', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: '无损二进制删除', // 'Lossless binary strip'
    cleanCanvasExport: '干净的画布导出', // 'Clean Canvas export'
    scrubbing: '正在清除 EXIF 与 GPS 头信息…', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: '下载干净图片', // 'Download Clean'
    removeItem: '删除 {name}', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: '将您的徽标或图标拖放到此处', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: '推荐正方形 PNG 或 SVG · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: '浏览文件', // 'browse file'
    errorGenerateFailed: '生成网站图标包失败。', // 'Failed to generate favicon package.'
    backgroundFill: '背景填充', // 'Background Fill'
    transparent: '透明', // 'Transparent'
    padding: '内边距', // 'Padding'
    cornerRadius: '圆角半径', // 'Corner Radius'
    tabPreviewAlt: '标签页预览', // alt 'Tab preview'
    myWebsite: '我的网站', // 'My Website'
    darkTabPreviewAlt: '深色标签页预览', // alt 'Dark tab preview'
    darkModeTab: '深色模式标签页', // 'Dark Mode Tab'
    packingZip: '正在打包 ZIP…', // 'Packing ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    clear: '清空', // title 'Clear'
    downloadFaviconIco: '下载 favicon.ico', // title 'Download favicon.ico'
    downloadFile: '下载 {filename}', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML <head> 代码片段', // 'HTML <head> Snippet'
    copied: '已复制！', // 'Copied!'
    copyHtml: '复制 HTML', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: '拖放图片或粘贴截图（Ctrl+V）', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    clickAnywhereToPin: '点击任意位置以固定颜色', // 'Click anywhere to pin a color'
    newImage: '新图片', // 'New Image'
    pixelInspector: '像素检查器', // 'Pixel Inspector'
    copyLabel: '复制 {label}', // title `Copy ${row.label}`
    pickedSwatches: '已选色板（{count} 个）', // 'Picked Swatches ({count})'
    exportCss: '导出 CSS', // 'Export CSS'
    clickPixelsHint: '点击图片上的像素，即可将颜色保存到色板。', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: '点击以选择并复制 {hex}', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: '拖放图片，查看精确尺寸和长宽比', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: '最小宽度检查（px）', // 'Min Width Check (px)'
    minHeightCheck: '最小高度检查（px）', // 'Min Height Check (px)'
    placeholderMinWidth: '例如：1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: '例如：630', // placeholder 'e.g. 630'
    exportCsv: '导出 CSV', // 'Export CSV'
    exportJson: '导出 JSON', // 'Export JSON'
    clear: '清除', // 'Clear'
    headerImage: '图片', // table header 'Image'
    headerDimensions: '尺寸', // table header 'Dimensions'
    headerAspectRatio: '长宽比', // table header 'Aspect Ratio'
    headerOrientation: '方向', // table header 'Orientation'
    headerSizeFormat: '大小 / 格式', // table header 'Size / Format'
    headerPrint300Dpi: '300 DPI 打印尺寸', // table header 'Print @300 DPI'
    headerSpecCheck: '规格检查', // table header 'Spec Check'
    orientationLandscape: '横向', // 'Landscape'
    orientationPortrait: '纵向', // 'Portrait'
    orientationSquare: '正方形', // 'Square'
    alphaTag: ' · Alpha', // ' · Alpha'
    specPass: '通过', // 'Pass'
    specBelowMin: '低于最小值', // 'Below Min'
    csvYes: '是', // CSV value 'Yes'
    csvNo: '否', // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: '拖放图片，交互式裁剪', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorCanvasContext: '无法初始化画布上下文。', // 'Unable to initialize canvas context.'
    errorCropExportFailed: '裁剪导出失败。', // 'Crop export failed.'
    aspectFree: '自由', // aspect preset 'Free'
    selection: '选区：', // 'Selection:'
    zoomOut: '缩小', // aria-label 'Zoom out'
    zoomIn: '放大', // aria-label 'Zoom in'
    removeImage: '删除图片', // aria-label 'Remove image'
    cropSourceAlt: '裁剪源图片', // alt 'Crop source'
    originalLabel: '原图：', // 'Original:'
    cropOptions: '裁剪选项', // 'Crop Options'
    selectFull: '全选', // 'Select Full'
    aspectRatioPreset: '长宽比预设', // 'Aspect Ratio Preset'
    cropWidth: '裁剪宽度', // 'Crop Width'
    cropHeight: '裁剪高度', // 'Crop Height'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原格式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    cropping: '裁剪中…', // 'Cropping...'
    cropAndDownload: '裁剪并下载', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: '拖放图片，添加文字或标志水印', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorUnableToLoadLogo: '无法加载标志图片。', // 'Unable to load logo image.'
    errorWatermarkExportFailed: '水印图片导出失败。', // 'Watermark export failed.'
    fallbackWatermarkText: '水印', // canvas fallback text 'Watermark'
    tiledPreview: '平铺预览', // 'Tiled Preview'
    dragToPosition: '在图片上拖动以定位', // 'Drag on Image to Position'
    changeImage: '更换图片', // 'Change Image'
    watermarkType: '水印类型', // 'Watermark Type'
    modeText: '文字水印', // 'Text Watermark'
    modeLogo: '标志图片', // 'Logo Image'
    watermarkTextLabel: '水印文字', // 'Watermark Text'
    placeholderBrand: '© 您的品牌', // placeholder '© Your Brand'
    textColor: '文字颜色', // 'Text Color'
    size: '大小', // 'Size'
    uploadLogo: '上传标志（PNG / SVG）', // 'Upload Logo (PNG / SVG)'
    changeLogo: '更换标志图片', // 'Change Logo Image'
    logoWidth: '标志宽度', // 'Logo Width'
    opacity: '不透明度', // 'Opacity'
    rotation: '旋转', // 'Rotation'
    tiledRepeatPattern: '平铺重复图案', // 'Tiled Repeat Pattern'
    tileSpacing: '平铺间距', // 'Tile Spacing'
    anchorPresets: '锚点预设（或在图片上拖动）', // 'Anchor Presets (or drag on image)'
    formatOrig: '原格式', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    exporting: '导出中…', // 'Exporting...'
    downloadWatermarked: '下载带水印的图片', // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: '拖放图片，模糊或马赛克局部区域', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '导出失败。', // 'Export failed.'
    paintOverAreasBlur: '涂抹需要模糊的区域', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: '涂抹需要打马赛克的区域', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: '整图预览', // 'Whole-Image Preview'
    undo: '撤销', // 'Undo'
    resetBrush: '重置画笔', // 'Reset Brush'
    removeImage: '删除图片', // aria-label 'Remove image'
    targetArea: '目标区域', // 'Target Area'
    brushArea: '画笔区域', // 'Brush Area'
    wholeImage: '整张图片', // 'Whole Image'
    effectStyle: '效果样式', // 'Effect Style'
    pixelateMosaic: '马赛克', // 'Pixelate Mosaic'
    smoothBlur: '平滑模糊', // 'Smooth Blur'
    blurRadius: '模糊半径', // 'Blur Radius'
    mosaicBlockSize: '马赛克块大小', // 'Mosaic Block Size'
    brushSize: '画笔大小', // 'Brush Size'
    brushHint: '直接在照片上点击拖动，即可隐藏人脸、文字或车牌。', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: '原格式', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    exporting: '导出中…', // 'Exporting...'
    downloadImage: '下载图片', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: '拖放图片，添加自定义文字', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '导出失败。', // 'Export failed.'
    dragAnyText: '直接在图片上拖动任意文字', // 'Drag Any Text Directly on Image'
    changeImage: '更换图片', // 'Change Image'
    textLayer: '文字 {index}', // tab `Text ${idx + 1}`
    add: '添加', // 'Add'
    deleteActiveTextLayer: '删除当前文字图层', // aria-label 'Delete active text layer'
    textContent: '文字内容（支持多行）', // 'Text Content (multi-line supported)'
    font: '字体', // 'Font'
    fontInter: 'Inter / 简洁无衬线', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / 表情包字体', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / 经典衬线', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / 等宽字体', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / 圆润无衬线', // font option 'Trebuchet / Rounded Sans'
    fill: '填充', // 'Fill'
    toggleBold: '切换加粗', // aria-label 'Toggle Bold'
    toggleItalic: '切换斜体', // aria-label 'Toggle Italic'
    size: '大小', // 'Size'
    rotation: '旋转', // 'Rotation'
    textOutline: '文字描边', // 'Text Outline'
    dropShadow: '投影', // 'Drop Shadow'
    defaultLayerText: '双击或编辑文字', // default layer text 'Double-tap or edit text'
    defaultCaption: '标题 {index}', // default layer text `Caption ${index + 1}`
    formatOrig: '原格式', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    exporting: '导出中…', // 'Exporting...'
    downloadImageWithText: '下载带文字的图片', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: '拖放图片，添加自定义边框或相框', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '导出失败。', // 'Export failed.'
    framedPreview: '带框预览', // 'Framed Preview'
    changeImage: '更换图片', // 'Change Image'
    quickFramePresets: '快捷相框预设', // 'Quick Frame Presets'
    presetClassicWhite: '经典白色', // preset 'Classic White'
    presetPolaroidFrame: '拍立得相框', // preset 'Polaroid Frame'
    presetDarkStudio: '深色影棚', // preset 'Dark Studio'
    presetGradientGlow: '渐变光晕', // preset 'Gradient Glow'
    borderStyle: '边框样式', // 'Border Style'
    borderStyleSolid: '纯色', // border type 'solid' (rendered capitalized)
    borderStyleGradient: '渐变', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: '拍立得', // border type 'polaroid' (rendered capitalized)
    borderColor: '边框颜色', // 'Border Color'
    startColor: '起始颜色', // 'Start Color'
    endColor: '结束颜色', // 'End Color'
    gradientAngle: '渐变角度', // 'Gradient Angle'
    borderSize: '边框粗细', // 'Border Size'
    frameRadius: '外框圆角', // 'Frame Radius'
    photoRadius: '照片圆角', // 'Photo Radius'
    dropShadow: '投影', // 'Drop Shadow'
    shadowNone: '无', // shadow level 'none' (rendered capitalized)
    shadowSoft: '柔和', // shadow level 'soft' (rendered capitalized)
    shadowMedium: '中等', // shadow level 'medium' (rendered capitalized)
    shadowDeep: '深', // shadow level 'deep' (rendered capitalized)
    exporting: '导出中…', // 'Exporting...'
    downloadFramedImage: '下载带框图片', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: '拖放图片，圆角化图片', // 'Drop an image to round its corners'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '导出圆角图片失败。', // 'Failed to export rounded image.'
    liveCornerPreview: '实时圆角预览', // 'Live Corner Preview'
    changeImage: '更换图片', // 'Change Image'
    cornerSettings: '圆角设置', // 'Corner Settings'
    fullCirclePill: '全圆 / 胶囊形', // 'Full Circle / Pill'
    individualPerCorner: '每个角单独控制', // 'Individual Per-Corner Control'
    allCornersRadius: '全部圆角半径', // 'All Corners Radius'
    cornerTopLeft: '左上', // per-corner label 'Top Left'
    cornerTopRight: '右上', // per-corner label 'Top Right'
    cornerBottomLeft: '左下', // per-corner label 'Bottom Left'
    cornerBottomRight: '右下', // per-corner label 'Bottom Right'
    outerCornerFill: '外角填充', // 'Outer Corner Fill'
    transparentPngWebp: '透明（PNG/WebP）', // 'Transparent (PNG/WebP)'
    solidColor: '纯色', // 'Solid Color'
    outputFormat: '输出格式', // 'Output Format'
    exporting: '导出中…', // 'Exporting...'
    downloadRoundedImage: '下载圆角图片', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: '拖放图片，调整亮度', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '导出调整后的图片失败。', // 'Failed to export adjusted image.'
    viewAfter: '之后', // view tab 'after' (rendered capitalized)
    viewBefore: '之前', // view tab 'before' (rendered capitalized)
    viewSplitCompare: '对比拆分', // view tab 'Split Compare'
    fullscreenCompare: '全屏对比', // 'Fullscreen Compare'
    removeImage: '删除图片', // title/aria-label 'Remove image'
    beforeLabel: '之前', // split slider label 'Before'
    afterLabel: '之后', // split slider label 'After'
    originalPreviewAlt: '原图预览', // alt 'Original preview'
    originalComparisonAlt: '原图对比', // alt 'Original comparison'
    brightnessControls: '亮度控制', // 'Brightness Controls'
    reset: '重置', // 'Reset'
    brightnessLevel: '亮度', // 'Brightness Level'
    minLabel: '-100% 更暗', // min label '-100% Darker'
    maxLabel: '+100% 更亮', // max label '+100% Brighter'
    quickPresets: '快捷预设', // 'Quick Presets'
    presetDark: '偏暗（-30%）', // preset 'Dark (-30%)'
    presetDim: '稍暗（-15%）', // preset 'Dim (-15%)'
    presetOriginal: '原图（0%）', // preset 'Original (0%)'
    presetBright: '明亮（+15%）', // preset 'Bright (+15%)'
    presetVibrant: '鲜艳（+30%）', // preset 'Vibrant (+30%)'
    presetHighKey: '高调（+50%）', // preset 'High Key (+50%)'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原格式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    exporting: '导出中…', // 'Exporting...'
    downloadEditedImage: '下载编辑后的图片', // 'Download Edited Image'
    comparisonTitlePrefix: '亮度对比', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: '编辑后', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: '拖放图片以调整对比度', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: '对比度比较', // 'Contrast Comparison'
    comparisonAfterLabel: '已编辑（调整后）', // 'Edited (After)'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '无法导出调整后的图片。', // 'Failed to export adjusted image.'
    tabAfter: '调整后', // tab 'after' (CSS-capitalized in code)
    tabBefore: '调整前', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: '分屏比较', // tab 'split' renders 'Split Compare'
    fullscreenCompare: '全屏比较', // 'Fullscreen Compare'
    removeImage: '删除图片', // title + aria-label 'Remove image'
    originalPreviewAlt: '原图预览', // alt 'Original preview'
    originalComparisonAlt: '原图对比', // alt 'Original comparison'
    splitBeforeLabel: '调整前', // split slider left label 'Before'
    splitAfterLabel: '调整后', // split slider right label 'After'
    controlsHeading: '对比度调整', // '{label} Controls' (contrast mode)
    reset: '重置', // 'Reset'
    levelLabel: '对比度级别', // '{label} Level' (contrast mode)
    minLabel: '-100% 平淡', // minLabel '-100% Flat'
    maxLabel: '+100% 高对比度', // maxLabel '+100% High Contrast'
    quickPresets: '快速预设', // 'Quick Presets'
    presetSoft: '柔和 (-25%)', // 'Soft (-25%)'
    presetMuted: '柔淡 (-10%)', // 'Muted (-10%)'
    presetOriginal: '原图 (0%)', // 'Original (0%)'
    presetCrisp: '清晰 (+20%)', // 'Crisp (+20%)'
    presetPunchy: '鲜明 (+40%)', // 'Punchy (+40%)'
    presetDramatic: '戏剧化 (+70%)', // 'Dramatic (+70%)'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    exporting: '正在导出…', // 'Exporting...'
    downloadEditedImage: '下载已编辑的图片', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: '拖放图片以调整饱和度', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: '饱和度比较', // 'Saturation Comparison'
    comparisonAfterLabel: '已编辑（调整后）', // 'Edited (After)'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '无法导出调整后的图片。', // 'Failed to export adjusted image.'
    tabAfter: '调整后', // tab 'after' (CSS-capitalized in code)
    tabBefore: '调整前', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: '分屏比较', // tab 'split' renders 'Split Compare'
    fullscreenCompare: '全屏比较', // 'Fullscreen Compare'
    removeImage: '删除图片', // title + aria-label 'Remove image'
    originalPreviewAlt: '原图预览', // alt 'Original preview'
    originalComparisonAlt: '原图对比', // alt 'Original comparison'
    splitBeforeLabel: '调整前', // split slider left label 'Before'
    splitAfterLabel: '调整后', // split slider right label 'After'
    controlsHeading: '饱和度调整', // '{label} Controls' (saturation mode)
    reset: '重置', // 'Reset'
    levelLabel: '饱和度级别', // '{label} Level' (saturation mode)
    minLabel: '-100% 灰度', // minLabel '-100% Grayscale'
    maxLabel: '+100% 鲜艳', // maxLabel '+100% Vivid'
    quickPresets: '快速预设', // 'Quick Presets'
    presetGrayscale: '灰度 (-100%)', // 'Grayscale (-100%)'
    presetMuted: '柔淡 (-40%)', // 'Muted (-40%)'
    presetOriginal: '原图 (0%)', // 'Original (0%)'
    presetRich: '浓郁 (+30%)', // 'Rich (+30%)'
    presetVivid: '鲜艳 (+60%)', // 'Vivid (+60%)'
    presetHyper: '超饱和 (+90%)', // 'Hyper (+90%)'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    exporting: '正在导出…', // 'Exporting...'
    downloadEditedImage: '下载已编辑的图片', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: '拖放图片以应用滤镜', // 'Drop an image to apply filters'
    comparisonTitlePrefix: '滤镜比较', // 'Filter Comparison'
    comparisonAfterLabel: '已应用滤镜', // 'Filtered'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '导出失败。', // 'Export failed.'
    filterPreview: '滤镜预览', // 'Filter Preview'
    holdToViewOriginal: '按住查看原图', // 'Hold to View Original'
    compare: '比较', // 'Compare'
    removeImage: '删除图片', // aria-label 'Remove image'
    originalBadge: '原图', // 'Original' badge
    filterPresets: '滤镜预设', // 'Filter Presets'
    reset: '重置', // 'Reset'
    presetOriginal: '原图', // preset 'Original'
    presetGrayscale: '灰度', // preset 'Grayscale'
    presetSepia: '棕褐色', // preset 'Sepia'
    presetVintage: '复古', // preset 'Vintage'
    presetWarm: '暖色', // preset 'Warm'
    presetCool: '冷色', // preset 'Cool'
    presetHighContrast: '高对比度', // preset 'High Contrast'
    presetMatteFade: '哑光褪色', // preset 'Matte Fade'
    presetDramatic: '戏剧化', // preset 'Dramatic'
    presetNoir: '黑白', // preset 'B&W Noir'
    presetGoldenHour: '黄金时刻', // preset 'Golden Hour'
    presetInvert: '反色', // preset 'Invert'
    filterIntensity: '滤镜强度', // 'Filter Intensity'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '画质', // 'Quality'
    rendering: '正在渲染…', // 'Rendering...'
    downloadFilteredImage: '下载已应用滤镜的图片', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: '拖放图片或透明 PNG 以添加背景', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorExportFailed: '导出失败。', // 'Export failed.'
    backgroundPreview: '背景预览', // 'Background Preview'
    changeImage: '更换图片', // 'Change Image'
    outputDimensionsPrefix: '输出：', // 'Output:' (before '{w}×{h}px')
    backgroundType: '背景类型', // 'Background Type'
    modeSolidColor: '纯色', // 'Solid Color'
    modeGradient: '渐变', // 'Gradient'
    modeBlurredPhoto: '模糊照片', // 'Blurred Photo'
    selectColor: '选择颜色 {color}', // aria-label `Select color ${c}`
    color1: '颜色 1', // 'Color 1'
    color2: '颜色 2', // 'Color 2'
    angle: '角度', // 'Angle'
    backdropBlurRadius: '背景模糊半径', // 'Backdrop Blur Radius'
    canvasAspectRatio: '画布宽高比', // 'Canvas Aspect Ratio'
    aspectOriginal: '原始', // 'Orig'
    imageScale: '图片缩放', // 'Image Scale'
    roundness: '圆角', // 'Roundness'
    dropShadowBehindImage: '图片后方阴影', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: '正在导出…', // 'Exporting...'
    downloadImage: '下载图片', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: '拖放图片以分割为网格图块或长条', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorSplitFailed: '分割图片失败。', // 'Failed to split image.'
    errorCanvasContext: '无法初始化画布上下文。', // 'Unable to initialize canvas context.'
    cutLinePreview: '裁切线预览（{rows} × {cols} = {tiles} 个图块）', // 'Cut-Line Preview ({rows} × {cols} = {tiles} tiles)'
    changeImage: '更换图片', // 'Change Image'
    splitGuideAlt: '分割参考线', // alt 'Split guide'
    splitLayout: '分割布局', // 'Split Layout'
    modeGrid: '网格 (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: '横向长条', // 'Horiz. Strips'
    modeVerticalStrips: '纵向长条', // 'Vert. Strips'
    rowsLabel: '行（横向裁切）', // 'Rows (Horizontal Cuts)'
    columnsLabel: '列（纵向裁切）', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 轮播图', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 长条', // preset '4×1 Strips'
    formatOriginal: '原始', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: '图块画质', // 'Tile Quality'
    splittingImage: '正在分割图片…', // 'Splitting Image...'
    splitIntoTiles: '分割为 {count} 个图块', // 'Split into {count} Tiles'
    splitComplete: '分割完成', // 'Split Complete'
    tilesGenerated: '已按全分辨率生成 {count} 个图片图块', // '{count} image tiles generated at full resolution'
    packagingZip: '正在打包 ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: '下载全部图块 (ZIP)', // 'Download All Tiles (ZIP)'
    download: '下载', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: '拖放 JPG 或 PNG 图片以更新 DPI 元数据', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: '更新 DPI 失败。', // 'Failed to update DPI.'
    targetDpiPresets: '目标 DPI 预设', // 'Target DPI Presets'
    preset72Screen: '72 DPI（屏幕）', // '72 DPI (Screen)'
    preset96Windows: '96 DPI（Windows）', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI（草稿打印）', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI（高质量打印）', // '300 DPI (High Print)'
    preset600Archival: '600 DPI（存档）', // '600 DPI (Archival)'
    customDpi: '自定义 DPI', // 'Custom DPI'
    applyDpi: '应用 {dpi} DPI', // 'Apply {dpi} DPI'
    clear: '清除', // 'Clear'
    batchReady: '批量已就绪', // 'Batch Ready'
    filesUpdatedToDpi: '已将 {count} 个文件更新为 {dpi} DPI', // '{count} files updated to {dpi} DPI'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载 (ZIP)', // 'Download All (ZIP)'
    beforeDpi: '之前：{dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: '之前：未设置', // 'Before: Not set'
    verifiedDpi: '已验证：{dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: '无损 JPEG 文件头更新', // 'Lossless JPEG Header Update'
    methodLosslessPng: '无损 PNG pHYs 更新', // 'Lossless PNG pHYs Update'
    methodConvertedPng: '已转换为带 pHYs DPI 的 PNG', // 'Converted to PNG with pHYs DPI'
    download: '下载', // 'Download'
    removeImage: '删除 {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: '拖放图片以编码为 Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: '无法编码文件。', // 'Could not encode file.'
    errorFailedToRead: '无法读取图片文件。', // 'Failed to read image file.'
    errorClipboardWriteFailed: '写入剪贴板失败——请在文本框中选择并复制。', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: '文件：', // 'File:' (summary card)
    outputLabel: '输出：', // 'Output:' (summary card)
    charsLabel: '字符', // 'chars' (summary card)
    encodeAnother: '编码另一张图片', // 'Encode Another'
    tabDataUrl: '数据 URL', // tab 'Data URL'
    tabRawBase64: '原始 Base64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: '已复制！', // 'Copied!'
    copyOutput: '复制输出', // 'Copy Output'
    saveTxt: '保存为 .TXT', // 'Save .TXT'
  },
  '/base64-to-image': {
    pasteLabel: '粘贴 Base64 字符串或数据 URL', // 'Paste Base64 String or Data URL'
    clear: '清除', // 'Clear'
    inputPlaceholder: '粘贴 data:image/png;base64,iVBORw0KGgo... 或原始 Base64 字节', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: '支持 PNG、JPG、WebP、GIF、SVG、BMP 和 ICO 的 Base64 数据', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: '正在解码…', // 'Decoding...'
    decodeImage: '解码图片', // 'Decode Image'
    decodingBytes: '正在解码 Base64 字节…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: '不支持的数据 URI 编码。需要 Base64 数据（`;base64,`）。', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: '输入包含无效的 Base64 字符。', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: '解码后的字节无法构成浏览器可读取的有效图片。', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: '无法解码 Base64 字符串。', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: '已解码 Base64 预览', // alt 'Decoded Base64 preview'
    validImageDecoded: '已解码有效图片', // 'Valid Image Decoded'
    detectedFormat: '检测到的格式', // 'Detected Format'
    binarySize: '二进制大小', // 'Binary Size'
    dimensions: '尺寸', // 'Dimensions'
    downloadFormat: '下载格式', // 'Download Format'
    formatOriginal: '原始', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: '下载图片文件', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: '拖入一张图片，提取其主色调色板', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: '无法加载图片。', // 'Unable to load image.'
    errorClipboardDenied: '剪贴板访问被拒绝。', // 'Clipboard permission denied.'
    extractedPalette: '提取的调色板（{count} 种颜色）', // 'Extracted Palette ({count} Colors)'
    sourceAlt: '原图', // alt 'Source'
    changeImage: '更换', // 'Change'
    numberOfColors: '颜色数量', // 'Number of Colors'
    colorsCount: '{count} 种颜色', // '{count} colors'
    copyCssVariables: '复制 CSS 变量', // 'Copy CSS Variables'
    copiedCss: '已复制 CSS！', // 'Copied CSS!'
    copyJson: '复制 JSON', // 'Copy JSON'
    copiedJson: '已复制 JSON！', // 'Copied JSON!'
    downloadPalettePng: '下载调色板 PNG', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: '拖入 2 张或更多图片，制作动态 GIF', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: '动态 GIF 编码失败。', // 'Failed to encode animated GIF.'
    skippedFile: '已跳过“{name}”：{error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: '已跳过“{name}”。', // 'Skipped "{name}".'
    generatedGif: '生成的 GIF（{width}×{height} 像素 · {size}）', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: '实时播放预览 · 第 {current}/{total} 帧', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: '生成的动态 GIF', // alt 'Generated animated GIF'
    pause: '暂停', // 'Pause'
    play: '播放', // 'Play'
    backToFrameEditor: '返回帧编辑器', // 'Back to Frame Editor'
    clearAllFrames: '清除所有帧', // aria-label 'Clear all frames'
    largeGifWarning: '大 GIF 警告（{size}）', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      '超过 5–15 MB 的 GIF 在聊天应用中上传可能很慢，也可能超出平台的严格限制。请尝试减小输出宽度/高度（例如 480 像素）、降低画质或删除帧。', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: '下载动态 GIF（{size}）', // 'Download Animated GIF ({size})'
    animationSettings: '动画设置', // 'Animation Settings'
    defaultFrameDuration: '默认帧间隔', // 'Default Frame Duration'
    frameDurationValue: '{ms} 毫秒（{fps} FPS）', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS（1000 毫秒）', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS（500 毫秒）', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS（200 毫秒）', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS（100 毫秒）', // '10 FPS (100ms)'
    loopBehavior: '循环方式', // 'Loop Behavior'
    loopForever: '无限循环', // 'Forever'
    loopSetLoops: '设置次数', // 'Set Loops'
    loopPlayOnce: '只播放一次', // 'Play Once'
    totalPlays: '总播放次数', // 'Total Plays'
    outputDimensions: '输出尺寸（像素）', // 'Output Dimensions (px)'
    ratioLocked: '锁定比例', // 'Ratio Locked'
    ratioUnlocked: '已解锁', // 'Unlocked'
    widthLabel: '宽度', // 'Width'
    heightLabel: '高度', // 'Height'
    sizePreset480: '480 像素', // '480px'
    sizePreset640: '640 像素', // '640px'
    sizePreset800: '800 像素', // '800px'
    sizePresetOriginal: '原始尺寸', // 'Original'
    frameFit: '帧适配', // 'Frame Fit'
    fitContain: '完整显示', // 'contain'
    fitCover: '填满画面', // 'cover'
    backgroundMatte: '背景底色', // 'Background Matte'
    colorPaletteQuality: '调色板画质', // 'Color Palette Quality'
    encodingGif: '正在编码 GIF（{progress}%）…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: '生成动态 GIF', // 'Generate Animated GIF'
    reEncodeAnimatedGif: '重新编码动态 GIF', // 'Re-Encode Animated GIF'
    framesHeading: '帧（{count}）— 拖动或使用箭头重新排序', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      '将每帧延迟留空，即使用全局帧间隔 {ms} 毫秒。', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: '添加帧', // 'Add Frames'
    delayMsLabel: '延迟（毫秒）：', // 'Delay (ms):'
    moveEarlier: '向前移动', // title 'Move earlier'
    moveLater: '向后移动', // title 'Move later'
    duplicateFrame: '复制帧', // title 'Duplicate frame'
    removeFrame: '删除帧', // title 'Remove frame'
    moveFrameEarlierAria: '将第 {n} 帧向前移动', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: '将第 {n} 帧向后移动', // aria-label `Move frame ${n} later`
    duplicateFrameAria: '复制第 {n} 帧', // aria-label `Duplicate frame ${n}`
    removeFrameAria: '删除第 {n} 帧', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: '拖入 2 至 9 张图片，制作照片拼贴', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: '拼贴导出失败。', // 'Failed to export collage.'
    couldNotLoadFile: '无法加载“{name}”：{error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: '无法加载“{name}”。', // 'Could not load "{name}".'
    collagePreview: '拼贴预览（{width}×{height} 像素）', // 'Collage Preview ({width}×{height}px)'
    clearAll: '全部清除', // 'Clear All'
    rearrangeCells: '重新排列单元格（拖动或点按两个单元格交换）', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      '将任意单元格卡片拖到另一个位置，即可立即重新排列照片。', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: '添加照片', // 'Add Photos'
    cellLabel: '单元格 {n}', // 'Cell {n}'
    slotLabel: '位置 {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: '将单元格 {n} 向后移动', // aria-label `Move cell ${n} back`
    moveCellForwardAria: '将单元格 {n} 向前移动', // aria-label `Move cell ${n} forward`
    clearCellAria: '清除单元格 {n}', // aria-label `Clear cell ${n}`
    addPhoto: '添加照片', // 'Add Photo'
    collageLayout: '拼贴布局', // 'Collage Layout'
    layout2x2: '2×2 网格', // '2×2 Grid'
    layout3x3: '3×3 网格', // '3×3 Grid'
    layoutVertical: '竖条', // 'Vertical Strip'
    layoutHorizontal: '横条', // 'Horizontal Strip'
    cellProportionsSpacing: '单元格比例与间距', // 'Cell Proportions & Spacing'
    equalCells: '均等单元格', // 'Equal Cells'
    colSplit: '列分割', // 'Col Split'
    centerCol: '中间列', // 'Center Col'
    rowSplit: '行分割', // 'Row Split'
    centerRow: '中间行', // 'Center Row'
    leadCellEmphasis: '主单元格强调', // 'Lead Cell Emphasis'
    gapSpacing: '间距', // 'Gap Spacing'
    cellRadius: '单元格圆角', // 'Cell Radius'
    backgroundColor: '背景颜色', // 'Background Color'
    backgroundSwatchAria: '背景 {color}', // aria-label `Background ${c}`
    imageFit: '图片适配', // 'Image Fit'
    fitCover: '填满画面', // 'cover'
    fitContain: '完整显示', // 'contain'
    outputSize: '输出尺寸（像素）', // 'Output Size (px)'
    widthLabel: '宽度', // 'Width'
    heightLabel: '高度', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG（无损）', // 'PNG (Lossless)'
    jpgQuality: 'JPG 画质', // 'JPG Quality'
    exportingCollage: '正在导出拼贴…', // 'Exporting Collage...'
    downloadCollage: '下载拼贴（{format}）', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    errorTargetFailed: '目标尺寸压缩失败。', // 'Target compression failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目标最大文件大小', // 'Target Maximum File Size'
    targetMaxSuffix: '（最多 {bytes}）', // '({bytes} max)'
    needDifferentTarget: '需要其他目标 KB 大小？', // 'Need a different target KB?'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '如果仅降低画质无法压缩到 {target} 以下，允许智能缩小尺寸', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    compressToTarget: '压缩到 {target}', // 'Compress to {target}'
    optimizing: '正在优化…', // 'Optimizing...'
    clear: '清除', // 'Clear'
    losslessPngSelected: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngTitle: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目标压缩汇总 · 目标 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '在 {total} 张{images}中，有 {achieved} 张达到了 {target} 目标', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '图片', // 'image'
    imagePlural: '图片', // 'images'
    summaryMissed: ' · {missed} 张无法真正压缩到目标大小（详情见下）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '总共节省：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '总共节省：{bytes}（增加了 {grew}）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（增加了 {grew}）', // '(grew by {grew})'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    metricOriginal: '原图', // 'Original' (metric label)
    metricOutput: '输出', // 'Output' (metric label)
    metricSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    metricReduction: '压缩率', // 'Reduction' (metric label)
    metricSizeChange: '大小变化', // 'Size Change' (metric label)
    columnOriginal: '原图', // 'Original' (metric label)
    columnOutput: '输出', // 'Output' (metric label)
    columnSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    columnReduction: '压缩率', // 'Reduction' (metric label)
    columnSizeChange: '大小变化', // 'Size Change' (metric label)
    underTarget: '低于 {target}（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '未达到目标 — {bytes}', // 'Target missed — {bytes}'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    grewBy: '增大了 {bytes}——重新编码后的文件比原文件更大。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '保留原文件', // 'Keep original'
    keptOriginalNote: '由于重新编码后文件变大，已保留原文件。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（保留透明度）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '原文件已低于 {target}，但重新编码后增大了 {bytes}。请使用“保留原文件”，或切换到 WebP/JPG 以获得更小的输出。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '已在完整分辨率 {width}×{height} 像素下达到目标（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '已缩小到 {width}×{height} 像素（{percent}%），按 {qualityLabel} 达到目标。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '无损 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 画质', // '{quality}% quality'
    statusCannotPng:
      '使用无损 PNG 无法达到 {target}（可达到的最小体积：{width}×{height} 像素时为 {bytes}）。请将输出格式切换为 JPG 或 WebP，以达到更小的体积。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '在完整尺寸 {width}×{height} 像素下无法达到 {target}（按画质计算的最小体积为 {bytes}）。请开启“允许尺寸缩放”以进一步缩小尺寸。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目标压缩（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '已压缩（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    errorTargetFailed: '目标尺寸压缩失败。', // 'Target compression failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目标最大文件大小', // 'Target Maximum File Size'
    targetMaxSuffix: '（最多 {bytes}）', // '({bytes} max)'
    needDifferentTarget: '需要其他目标 KB 大小？', // 'Need a different target KB?'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '如果仅降低画质无法压缩到 {target} 以下，允许智能缩小尺寸', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    compressToTarget: '压缩到 {target}', // 'Compress to {target}'
    optimizing: '正在优化…', // 'Optimizing...'
    clear: '清除', // 'Clear'
    losslessPngSelected: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngTitle: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目标压缩汇总 · 目标 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '在 {total} 张{images}中，有 {achieved} 张达到了 {target} 目标', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '图片', // 'image'
    imagePlural: '图片', // 'images'
    summaryMissed: ' · {missed} 张无法真正压缩到目标大小（详情见下）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '总共节省：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '总共节省：{bytes}（增加了 {grew}）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（增加了 {grew}）', // '(grew by {grew})'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    metricOriginal: '原图', // 'Original' (metric label)
    metricOutput: '输出', // 'Output' (metric label)
    metricSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    metricReduction: '压缩率', // 'Reduction' (metric label)
    metricSizeChange: '大小变化', // 'Size Change' (metric label)
    columnOriginal: '原图', // 'Original' (metric label)
    columnOutput: '输出', // 'Output' (metric label)
    columnSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    columnReduction: '压缩率', // 'Reduction' (metric label)
    columnSizeChange: '大小变化', // 'Size Change' (metric label)
    underTarget: '低于 {target}（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '未达到目标 — {bytes}', // 'Target missed — {bytes}'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    grewBy: '增大了 {bytes}——重新编码后的文件比原文件更大。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '保留原文件', // 'Keep original'
    keptOriginalNote: '由于重新编码后文件变大，已保留原文件。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（保留透明度）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '原文件已低于 {target}，但重新编码后增大了 {bytes}。请使用“保留原文件”，或切换到 WebP/JPG 以获得更小的输出。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '已在完整分辨率 {width}×{height} 像素下达到目标（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '已缩小到 {width}×{height} 像素（{percent}%），按 {qualityLabel} 达到目标。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '无损 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 画质', // '{quality}% quality'
    statusCannotPng:
      '使用无损 PNG 无法达到 {target}（可达到的最小体积：{width}×{height} 像素时为 {bytes}）。请将输出格式切换为 JPG 或 WebP，以达到更小的体积。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '在完整尺寸 {width}×{height} 像素下无法达到 {target}（按画质计算的最小体积为 {bytes}）。请开启“允许尺寸缩放”以进一步缩小尺寸。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目标压缩（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '已压缩（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    errorTargetFailed: '目标尺寸压缩失败。', // 'Target compression failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目标最大文件大小', // 'Target Maximum File Size'
    targetMaxSuffix: '（最多 {bytes}）', // '({bytes} max)'
    needDifferentTarget: '需要其他目标 KB 大小？', // 'Need a different target KB?'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '如果仅降低画质无法压缩到 {target} 以下，允许智能缩小尺寸', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    compressToTarget: '压缩到 {target}', // 'Compress to {target}'
    optimizing: '正在优化…', // 'Optimizing...'
    clear: '清除', // 'Clear'
    losslessPngSelected: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngTitle: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目标压缩汇总 · 目标 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '在 {total} 张{images}中，有 {achieved} 张达到了 {target} 目标', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '图片', // 'image'
    imagePlural: '图片', // 'images'
    summaryMissed: ' · {missed} 张无法真正压缩到目标大小（详情见下）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '总共节省：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '总共节省：{bytes}（增加了 {grew}）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（增加了 {grew}）', // '(grew by {grew})'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    metricOriginal: '原图', // 'Original' (metric label)
    metricOutput: '输出', // 'Output' (metric label)
    metricSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    metricReduction: '压缩率', // 'Reduction' (metric label)
    metricSizeChange: '大小变化', // 'Size Change' (metric label)
    columnOriginal: '原图', // 'Original' (metric label)
    columnOutput: '输出', // 'Output' (metric label)
    columnSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    columnReduction: '压缩率', // 'Reduction' (metric label)
    columnSizeChange: '大小变化', // 'Size Change' (metric label)
    underTarget: '低于 {target}（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '未达到目标 — {bytes}', // 'Target missed — {bytes}'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    grewBy: '增大了 {bytes}——重新编码后的文件比原文件更大。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '保留原文件', // 'Keep original'
    keptOriginalNote: '由于重新编码后文件变大，已保留原文件。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（保留透明度）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '原文件已低于 {target}，但重新编码后增大了 {bytes}。请使用“保留原文件”，或切换到 WebP/JPG 以获得更小的输出。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '已在完整分辨率 {width}×{height} 像素下达到目标（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '已缩小到 {width}×{height} 像素（{percent}%），按 {qualityLabel} 达到目标。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '无损 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 画质', // '{quality}% quality'
    statusCannotPng:
      '使用无损 PNG 无法达到 {target}（可达到的最小体积：{width}×{height} 像素时为 {bytes}）。请将输出格式切换为 JPG 或 WebP，以达到更小的体积。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '在完整尺寸 {width}×{height} 像素下无法达到 {target}（按画质计算的最小体积为 {bytes}）。请开启“允许尺寸缩放”以进一步缩小尺寸。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目标压缩（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '已压缩（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '拖入图片，压缩到 {target} 以下', // 'Drop images to compress under {target}'
    errorTargetFailed: '目标尺寸压缩失败。', // 'Target compression failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '目标最大文件大小', // 'Target Maximum File Size'
    targetMaxSuffix: '（最多 {bytes}）', // '({bytes} max)'
    needDifferentTarget: '需要其他目标 KB 大小？', // 'Need a different target KB?'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始格式', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '如果仅降低画质无法压缩到 {target} 以下，允许智能缩小尺寸', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '当无损 PNG 无法干净地压缩到 {target} 时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '透明 PNG 底色：', // 'Transparent PNG matte color:'
    compressToTarget: '压缩到 {target}', // 'Compress to {target}'
    optimizing: '正在优化…', // 'Optimizing...'
    clear: '清除', // 'Clear'
    losslessPngSelected: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngTitle: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG 会忽略画质滑块，因此减小体积只能靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，在保持清晰的同时达到严格的 KB 限制。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '目标压缩汇总 · 目标 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '在 {total} 张{images}中，有 {achieved} 张达到了 {target} 目标', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '图片', // 'image'
    imagePlural: '图片', // 'images'
    summaryMissed: ' · {missed} 张无法真正压缩到目标大小（详情见下）', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '总共节省：{bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '总共节省：{bytes}（增加了 {grew}）', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '（增加了 {grew}）', // '(grew by {grew})'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    metricOriginal: '原图', // 'Original' (metric label)
    metricOutput: '输出', // 'Output' (metric label)
    metricSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    metricReduction: '压缩率', // 'Reduction' (metric label)
    metricSizeChange: '大小变化', // 'Size Change' (metric label)
    columnOriginal: '原图', // 'Original' (metric label)
    columnOutput: '输出', // 'Output' (metric label)
    columnSpaceSaved: '节省空间', // 'Space Saved' (metric label)
    columnReduction: '压缩率', // 'Reduction' (metric label)
    columnSizeChange: '大小变化', // 'Size Change' (metric label)
    underTarget: '低于 {target}（{bytes}）', // 'Under {target} ({bytes})'
    targetMissed: '未达到目标 — {bytes}', // 'Target missed — {bytes}'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    grewBy: '增大了 {bytes}——重新编码后的文件比原文件更大。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '保留原文件', // 'Keep original'
    keptOriginalNote: '由于重新编码后文件变大，已保留原文件。', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '为在 {target} 以下保持更高分辨率，无损 PNG 已自动转换为 {format}。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP（保留透明度）', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '原文件已低于 {target}，但重新编码后增大了 {bytes}。请使用“保留原文件”，或切换到 WebP/JPG 以获得更小的输出。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '原文件已低于 {target}；已按 {quality}% 画质干净地导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '已在完整分辨率 {width}×{height} 像素下达到目标（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '已缩小到 {width}×{height} 像素（{percent}%），按 {qualityLabel} 达到目标。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '无损 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 画质', // '{quality}% quality'
    statusCannotPng:
      '使用无损 PNG 无法达到 {target}（可达到的最小体积：{width}×{height} 像素时为 {bytes}）。请将输出格式切换为 JPG 或 WebP，以达到更小的体积。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '在完整尺寸 {width}×{height} 像素下无法达到 {target}（按画质计算的最小体积为 {bytes}）。请开启“允许尺寸缩放”以进一步缩小尺寸。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '无法干净地达到所要求的 {target} 目标。最小的真实编码输出为 {bytes}（{width}×{height} 像素，{quality}% 画质）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '目标压缩（{target}）', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '已压缩（{bytes}）', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: '拖入几十张图片进行批量压缩', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: '压缩失败。', // 'Compression failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: '快速批量预设：', // 'Quick Batch Profiles:'
    profileWebFast: '网页快速（WebP 75%）', // 'Web Fast (WebP 75%)'
    profileEmailSharing: '邮件/分享（JPG 65%）', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: '高保真（85%）', // 'High Fidelity (85%)'
    compressingBatch: '正在本地批量压缩…', // 'Compressing batch locally...'
    // CompressionControls、ResultsList、ComparisonModal 中绘制的字符串
    // 来自共享 i18n-zh.ts 字典的相关部分（compressionControls、resultsList、
    // comparisonModal）——Batch 1 已翻译。
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: '拖放图片，将其压缩到{target}以下', // `Drop images to compress under ${targetLabel}`
    uploadTitle: '拖放图片，将其压缩到{target}以下', // 'Drop images to compress under {target}' — fallback key in TargetSizeCompressorTool
    targetMaxFileSize: '目标最大文件大小', // 'Target Maximum File Size'
    targetNumberAria: '目标文件大小数值', // aria-label 'Target file size number'
    maxSuffix: '（最大{size}）', // '({size})'
    targetMaxSuffix: '（{bytes}以内）', // '({bytes} max)' — fallback key in TargetSizeCompressorTool
    needDifferentTarget: '需要不同的目标 KB 吗？', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged (format name)
    formatPng: 'PNG', // 'PNG' — unchanged (format name)
    formatWebpTransparency: 'WebP（保留透明度）', // 'WebP (transparency preserved)'
    allowDownscale: '如果仅降低画质无法压缩到{target}以下，允许智能调整尺寸', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoSwitchPng: '当无损 PNG 无法干净地达到{target}时，自动将大 PNG 转换为 WebP/JPG', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatteColor: '透明 PNG 的填充色：', // 'Transparent PNG matte color:'
    transparentPngMatte: '透明 PNG 的填充色：', // 'Transparent PNG matte color:' — fallback key in TargetSizeCompressorTool
    losslessPngTitle: '已选择无损 PNG：', // 'Lossless PNG selected:'
    losslessPngSelected: '已选择无损 PNG：', // 'Lossless PNG selected:' — fallback key in TargetSizeCompressorTool
    losslessPngNote: 'PNG 会忽略画质滑块，因此减小体积只能依靠缩小像素尺寸。对于大照片，请选择 JPG 或 WebP，以便在保持清晰的同时达到严格的 KB 上限。', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    qualityPercent: '画质{quality}%', // '{quality}% quality'
    compressToTarget: '压缩到{target}', // 'Compress to {target}'
    optimizing: '正在优化…', // 'Optimizing...'
    clear: '清除', // 'Clear'
    targetSummary: '目标压缩汇总 · 目标 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '在{total}张{images}中，有{achieved}张达到了{target}目标', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '图片', // 'image'
    imagePlural: '图片', // 'images'
    summaryMissed: '· {missed}张确实无法达标（详情见下方）', // '{missed} could not honestly fit (details below)'
    totalSaved: '共节省：{bytes}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '（增大了{grew}）', // '(grew by {grew})'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    underTarget: '低于{target}（{bytes}）', // 'Under {target} ({formatBytes(compressedSize)})'
    targetMissed: '未达目标 — {bytes}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: '原始', // 'Original'
    columnOutput: '输出', // 'Output'
    columnSpaceSaved: '节省空间', // 'Space Saved'
    columnReduction: '压缩率', // 'Reduction'
    columnSizeChange: '大小变化', // 'Size Change'
    metricOriginal: '原始', // 'Original' — fallback key in TargetSizeCompressorTool
    metricOutput: '输出', // 'Output' — fallback key in TargetSizeCompressorTool
    metricSpaceSaved: '节省空间', // 'Space Saved' — fallback key in TargetSizeCompressorTool
    metricReduction: '压缩率', // 'Reduction' — fallback key in TargetSizeCompressorTool
    metricSizeChange: '大小变化', // 'Size Change' — fallback key in TargetSizeCompressorTool
    grewBy: '增大了{bytes} — 重新编码后比原始文件更大。', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngNote: '对于照片类 PNG，WebP 或 JPG 通常更小。', // 'WebP or JPG is usually smaller for photo-like PNGs.' — fallback key in TargetSizeCompressorTool
    keepOriginal: '保留原始文件', // 'Keep original'
    keptOriginalNote: '由于重新编码后文件变大，已保留原始文件。', // 'Kept original file because re-encoding made it larger.'
    qualityLosslessPng: '无损 PNG', // 'lossless PNG' — qualityLabel in src/utils/targetCompression.ts for PNG outputs (prevents an English leak)
    statusAlreadyUnder: '原始文件已在{target}以下，已按画质{quality}%干净导出。', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnderGrew: '原始文件已在{target}以下，但重新编码后增大了{bytes}。请使用“保留原始文件”，或切换到 WebP/JPG 以获得更小的输出。', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusMetFull: '以完整分辨率{width}×{height} px 达成目标（{qualityLabel}）。', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: '通过缩放到{width}×{height} px（{percent}%）达成目标（{qualityLabel}）。', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    statusCannotPng: '使用无损 PNG 无法达到{target}（可达到的最小尺寸：{width}×{height} px 时为{bytes}）。请将输出格式切换为 JPG 或 WebP 以获得更小的尺寸。', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: '以完整尺寸{width}×{height} px 无法达到{target}（最低画质时的大小为{bytes}）。请启用“允许尺寸缩放”以进一步缩小尺寸。', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: '无法干净地达到所要求的目标{target}。最小的真实编码输出为{bytes}（{width}×{height} px，画质{quality}%）。请尝试更大的目标尺寸。', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: '无损 PNG 已自动转换为{format}，以在{target}以下保留更高分辨率。', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    errorTargetFailed: '目标压缩失败。', // 'Target compression failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: '目标压缩（{target}）', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: '已压缩（{bytes}）', // `Compressed (${formatBytes(compressedSize)})`
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除{name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: '拖放多张图片进行批量调整大小', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: '批量调整大小策略', // 'Batch Resize Strategy'
    strategyBounding: '适配最大宽 × 高', // 'Fit Max W × H'
    strategyWidth: '统一宽度', // 'Uniform Width'
    strategyExact: '精确宽 × 高', // 'Exact W × H'
    strategyPercentage: '百分比（%）', // 'Percentage (%)'
    outputFormat: '输出格式', // 'Output Format'
    formatOriginal: '原始', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: '缩放所有图片：', // 'Scale All Images:'
    maxWidth: '最大宽度（px）', // 'Max Width (px)'
    targetWidth: '目标宽度（px）', // 'Target Width (px)'
    exactWidth: '精确宽度（px）', // 'Exact Width (px)'
    maxHeight: '最大高度（px）', // 'Max Height (px)'
    exactHeight: '精确高度（px）', // 'Exact Height (px)'
    doNotEnlarge: '不放大较小的图片', // 'Do not enlarge smaller images'
    fitMode: '适配模式', // 'Fit Mode'
    fitContain: '包含', // 'Contain'
    fitCover: '覆盖', // 'Cover'
    fitStretch: '拉伸', // 'Stretch'
    presetFullHd: '全高清 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: '博客 1200px', // 'Blog 1200px'
    presetEcommerce: '电商 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: '缩略图 600px', // 'Thumbnail 600px'
    quality: '画质：', // 'Quality:'
    matteBg: '填充背景：', // 'Matte BG:'
    resizingProgress: '正在调整大小（{processed}/{total}）…', // 'Resizing ({processed}/{total})...'
    bulkResize: '批量调整大小（{count}）', // 'Bulk Resize ({items.length})'
    clear: '清除', // 'Clear'
    bulkResizeComplete: '批量调整大小完成', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count}张图片已调整大小并就绪', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count}张图片已调整大小并就绪', // '{count} images resized and ready'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    errorResizeFailed: '批量调整大小失败。', // 'Batch resize failed.'
    errorCorruptedFile: '图片文件已损坏或无法读取。', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: '批量调整大小对比', // 'Bulk Resize Comparison'
    comparisonAfterLabel: '调整大小后', // 'Resized (After)'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除{name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: '拖放多张图片批量转换格式', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: '批量转换为格式', // 'Convert Batch To Format'
    formatWebp: 'WebP（最小的网页格式）', // 'WebP (Smallest Web)'
    formatJpg: 'JPG（通用）', // 'JPG (Universal)'
    formatPng: 'PNG（无损透明）', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: '可选文件后缀名', // 'Optional Filename Suffix'
    placeholderSuffix: '例如：_web', // placeholder 'e.g. _web'
    transparentFill: '透明填充', // 'Transparent Fill'
    qualityLosslessPng: '画质（无损 PNG）', // 'Quality (Lossless PNG)'
    qualityPercent: '画质（{quality}%）', // 'Quality ({quality}%)'
    convertingProgress: '正在转换（{processed}/{total}）…', // 'Converting ({processed}/{total})...'
    convertAll: '全部转换（{count}）', // 'Convert All ({items.length})'
    clear: '清除', // 'Clear'
    bulkConversionSummary: '批量转换汇总', // 'Bulk Conversion Summary'
    filesConvertedSummary: '已将{count}个文件转换为{format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    convertedTo: '已转换为{ext}', // 'Converted to {ext}'
    errorConversionFailed: '批量转换失败。', // 'Batch conversion failed.'
    errorUnsupportedFile: '图片文件不受支持或已损坏。', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: '批量格式转换', // 'Bulk Format Conversion'
    comparisonAfterLabel: '转换后', // 'Converted (After)'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除{name}', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: '拖放网站素材，针对 Core Web Vitals 进行优化', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: '网页性能预设', // 'Web Performance Presets'
    presetHero: '主视觉 / 横幅', // 'Hero / Banner'
    presetHeroDesc: '最大 1600px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: '电商商品', // 'E-Commerce Product'
    presetProductDesc: '最大 1200px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: '卡片 / 缩略图', // 'Card / Thumbnail'
    presetThumbDesc: '最大 640px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: '社交 OG / 邮件', // 'Social OG / Email'
    presetOgDesc: '最大 1200px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Retina 2 倍图', // 'Retina 2× Graphic'
    presetRetinaDesc: '最大 1920px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: '网页格式', // 'Web Format'
    maxDimension: '最大尺寸（长边）', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: '保持原始尺寸', // 'Keep Original Dimensions'
    max1920: '最大 1920px（Retina / 全高清）', // 'Max 1920px (Retina / Full HD)'
    max1600: '最大 1600px（主视觉 / 横幅）', // 'Max 1600px (Hero / Banner)'
    max1200: '最大 1200px（博客 / 商品）', // 'Max 1200px (Blog / Product)'
    max800: '最大 800px（正文内）', // 'Max 800px (In-Content)'
    max640: '最大 640px（缩略图）', // 'Max 640px (Thumbnails)'
    quality: '画质：', // 'Quality:'
    onlyDownscale: '仅缩小较大的图片（EXIF 和 GPS 元数据将自动清除）', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: '正在优化…', // 'Optimizing...'
    optimizeForWeb: '针对网页优化（{count}）', // 'Optimize for Web ({items.length})'
    clear: '清除', // 'Clear'
    webPerformanceSummary: '网页性能汇总', // 'Web Performance Summary'
    pageWeightSaved: '（轻了{percent}% · 页面体积节省{saved}）', // '({percent}% lighter · {saved} page weight saved)'
    pageWeightGrew: '（+{percent}% · 增大了{amount}）', // '(+{percent}% · grew by {amount})'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    webReady: '网页就绪（{percent}）', // 'Web-Ready ({formatPercent})'
    grewBy: '增大了{amount}（{percent}）', // 'Grew by {amount} ({percent})'
    copyImg: '复制 <img>', // 'Copy <img>'
    copiedHtml: '已复制 HTML', // 'Copied HTML'
    copyImgTitle: '复制带有明确宽高的响应式 HTML img 标签', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: '网页优化失败。', // 'Web optimization failed.'
    errorCorruptedFile: '图片已损坏或不受支持。', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: '网页优化对比', // 'Web Optimization Comparison'
    comparisonAfterLabel: '网页就绪（后）', // 'Web-Ready (After)'
    compare: '对比', // 'Compare'
    download: '下载', // 'Download'
    removeImage: '删除{name}', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: '拖放动画 GIF 进行压缩', // 'Drop an animated GIF to compress'
    decodingGif: '正在浏览器本地解码动画 GIF 帧…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: '帧', // 'frame'
    framePlural: '帧', // 'frames'
    presetLight: '轻度', // 'Light'
    presetBalanced: '均衡', // 'Balanced'
    presetMaxShrink: '最大压缩', // 'Max Shrink'
    colorPaletteLimit: '调色板颜色上限', // 'Color Palette Limit'
    colorsCount: '{count}色', // '{maxColors} colors'
    outputScale: '输出缩放', // 'Output Scale'
    scaleWithDims: '{percent}%（{width}×{height}）', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: '帧率优化', // 'Frame Rate Optimization'
    keepAllFrames: '保留所有帧', // 'Keep All Frames'
    dropEvery2nd: '每隔一帧丢弃（约小 50%）', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: '每 3 帧保留 1 帧', // 'Keep 1 of Every 3 Frames'
    compressingGif: '正在压缩 GIF（{progress}%）…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: '压缩 GIF', // 'Compress GIF'
    reset: '重置', // 'Reset'
    originalGif: '原始 GIF', // 'Original GIF'
    compressedGif: '压缩后 GIF', // 'Compressed GIF'
    sizeChange: '大小变化', // 'Size Change'
    sizeAndFrames: '{size} · {frames}帧', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: '下载压缩后 GIF', // 'Download Compressed GIF'
    notSmallerNotice: '该源 GIF 已经过高度优化，或使用的全帧调色板比输入数据更大。要将其缩小到{size}以下，请将调色板颜色降至 32–64 色，将输出缩放降至 75% 或 50%，或每隔一帧丢弃。', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: '已压缩{percent}%（节省{saved}），在浏览器内干净处理。', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: '原始（{width}×{height} px）', // 'Original ({width}×{height}px)'
    compressedLabel: '压缩后（{width}×{height} px）', // 'Compressed ({width}×{height}px)'
    altOriginalGif: '原始 GIF', // alt 'Original GIF'
    altCompressedGif: '压缩后 GIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIF 压缩失败。', // 'GIF compression failed.'
    errorDecodeFrames: '无法解码 GIF 帧。', // 'Could not decode GIF frames.'
    errorTooSmall: '文件太小，不是有效的 GIF。', // 'File is too small to be a valid GIF.'
    errorNotValidGif: '所选文件不是有效的 GIF87a 或 GIF89a 动画。', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF 画布尺寸为无效的 0×0。', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'GIF 全局调色板被截断。', // 'Truncated GIF Global Color Table.'
    errorNoFrames: '无法从该 GIF 文件解码任何图像帧。', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '无法初始化 2D 画布上下文。', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: '拖放 iPhone HEIC 或 HEIF 照片转换为 JPG', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: '使用客户端 WebAssembly（heic2any）在浏览器本地解码 Apple HEIC 和 HEIF 照片——您的照片绝不会离开设备。', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQuality: 'JPG 输出画质', // 'JPG Output Quality'
    outputQualityLabel: 'JPG 输出画质', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG 输出画质', // `${targetLabel} output quality`
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最多细节（100%）', // 'Max detail (100%)'
    losslessPngOutput: '无损 PNG 输出', // 'Lossless PNG Output'
    losslessPngEncoding: '无损 PNG 编码', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '无损 PNG 编码', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG 可保留锐利边缘、文字和透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG 可保留锐利边缘、文字和透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '透明背景填充色', // 'Transparent Background Matte Color'
    matteColorLabel: '透明背景填充色', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: '填充背景颜色', // 'Matte background color'
    matteWhite: '白色', // 'White'
    matteBlack: '黑色', // 'Black'
    matteLightGray: '浅灰色', // 'Light Gray'
    rasterExportScale: '栅格导出缩放', // 'Raster Export Scale'
    rasterExportScaleHint: '应用于 SVG 固有尺寸的倍数（上限 8000px）。更改缩放后，请点击“全部重新转换”。', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: '全部重新转换', // 'Re-convert All'
    converting: '正在转换…', // 'Converting...'
    clear: '清除', // 'Clear'
    batchSummary: 'HEIC → JPG：批量汇总', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count}{files}已转换 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: '个文件', // 'file'
    filePlural: '个文件', // 'files'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    columnChange: '变化', // 'Change'
    changeLabel: '变化', // 'Change' — primary key in FormatConverterTool
    compare: '对比', // 'Compare'
    downloadTarget: '下载 JPG', // 'Download JPG'
    removeImage: '删除{name}', // aria-label `Remove ${item.name}`
    errorDecodeHint: '无法解码该 HEIC/HEIF 文件。请确认它是有效的 iPhone/Apple HEIC 照片。', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '无法解码“{filename}”。请确认它是有效的 HEIC 图片。', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '无法将{name}转换为 JPG。', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: '拖放 JPG 或 JPEG 图片转换为无损 PNG', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQuality: 'PNG 输出画质', // 'PNG Output Quality'
    outputQualityLabel: 'PNG 输出画质', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'PNG 输出画质', // `${targetLabel} output quality`
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最多细节（100%）', // 'Max detail (100%)'
    losslessPngOutput: '无损 PNG 输出', // 'Lossless PNG Output'
    losslessPngEncoding: '无损 PNG 编码', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '无损 PNG 编码', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG 可保留锐利边缘、文字和透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG 可保留锐利边缘、文字和透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '透明背景填充色', // 'Transparent Background Matte Color'
    matteColorLabel: '透明背景填充色', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: '填充背景颜色', // 'Matte background color'
    matteWhite: '白色', // 'White'
    matteBlack: '黑色', // 'Black'
    matteLightGray: '浅灰色', // 'Light Gray'
    rasterExportScale: '栅格导出缩放', // 'Raster Export Scale'
    rasterExportScaleHint: '应用于 SVG 固有尺寸的倍数（上限 8000px）。更改缩放后，请点击“全部重新转换”。', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: '全部重新转换', // 'Re-convert All'
    converting: '正在转换…', // 'Converting...'
    clear: '清除', // 'Clear'
    batchSummary: 'JPG → PNG：批量汇总', // 'JPG → PNG Batch Summary'
    filesConverted: '{count}{files}已转换 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: '个文件', // 'file'
    filePlural: '个文件', // 'files'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    columnChange: '变化', // 'Change'
    changeLabel: '变化', // 'Change' — primary key in FormatConverterTool
    compare: '对比', // 'Compare'
    downloadTarget: '下载 PNG', // 'Download PNG'
    removeImage: '删除{name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: '无法解码“{filename}”。请确认它是有效的 JPG 图片。', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '无法将{name}转换为 PNG。', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG（{size}）', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: '拖放 PNG 文件转换为更小的 JPG', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQuality: 'JPG 输出画质', // 'JPG Output Quality'
    outputQualityLabel: 'JPG 输出画质', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG 输出画质', // `${targetLabel} output quality`
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最多细节（100%）', // 'Max detail (100%)'
    losslessPngOutput: '无损 PNG 输出', // 'Lossless PNG Output'
    losslessPngEncoding: '无损 PNG 编码', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '无损 PNG 编码', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG 可保留锐利边缘、文字和透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG 可保留锐利边缘、文字和透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '透明背景填充色', // 'Transparent Background Matte Color'
    matteColorLabel: '透明背景填充色', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: '填充背景颜色', // 'Matte background color'
    matteWhite: '白色', // 'White'
    matteBlack: '黑色', // 'Black'
    matteLightGray: '浅灰色', // 'Light Gray'
    matteNote: 'JPG 不支持透明度；透明区域将以该颜色干净填充。', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    rasterExportScale: '栅格导出缩放', // 'Raster Export Scale'
    rasterExportScaleHint: '应用于 SVG 固有尺寸的倍数（上限 8000px）。更改缩放后，请点击“全部重新转换”。', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: '全部重新转换', // 'Re-convert All'
    converting: '正在转换…', // 'Converting...'
    clear: '清除', // 'Clear'
    batchSummary: 'PNG → JPG：批量汇总', // 'PNG → JPG Batch Summary'
    filesConverted: '{count}{files}已转换 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: '个文件', // 'file'
    filePlural: '个文件', // 'files'
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    columnChange: '变化', // 'Change'
    changeLabel: '变化', // 'Change' — primary key in FormatConverterTool
    compare: '对比', // 'Compare'
    downloadTarget: '下载 JPG', // 'Download JPG'
    removeImage: '删除{name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: '无法解码“{filename}”。请确认它是有效的 PNG 图片。', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '无法将{name}转换为 JPG。', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: '拖放 JPG 图片，转换为轻量 WebP', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP 输出质量', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP 输出质量', // aria-label 'WebP output quality'
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最高细节（100%）', // 'Max detail (100%)'
    batchSummary: '{source} → {target} 批量转换汇总', // '{source} → {target} Batch Summary'
    fileSingular: '文件', // 'file'
    filePlural: '文件', // 'files'
    filesConvertedSuffix: '已转换', // 'converted' (in '{count} file(s) converted')
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    changeLabel: '变化', // 'Change'
    compare: '比较', // 'Compare'
    downloadTarget: '下载 WebP', // 'Download WebP'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    converting: '正在转换…', // 'Converting...'
    reconvertAll: '全部重新转换', // 'Re-convert All'
    clear: '清除', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '无法将 {name} 转换为 WebP。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '无法解码“{name}”。请确认它是一张有效的 JPG 图片。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: '拖放 WebP 图片，转换为通用 JPG', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG 输出质量', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG 输出质量', // aria-label 'JPG output quality'
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最高细节（100%）', // 'Max detail (100%)'
    matteColorLabel: '透明背景填充色', // 'Transparent Background Matte Color'
    matteAriaLabel: '填充背景色', // aria-label 'Matte background color'
    matteWhite: '白色', // 'White'
    matteBlack: '黑色', // 'Black'
    matteLightGray: '浅灰色', // 'Light Gray'
    matteHint: 'JPG 不支持透明度，透明区域将用此颜色干净地填充。', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} 批量转换汇总', // '{source} → {target} Batch Summary'
    fileSingular: '文件', // 'file'
    filePlural: '文件', // 'files'
    filesConvertedSuffix: '已转换', // 'converted' (in '{count} file(s) converted')
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    changeLabel: '变化', // 'Change'
    compare: '比较', // 'Compare'
    downloadTarget: '下载 JPG', // 'Download JPG'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    converting: '正在转换…', // 'Converting...'
    reconvertAll: '全部重新转换', // 'Re-convert All'
    clear: '清除', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '无法将 {name} 转换为 JPG。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '无法解码“{name}”。请确认它是一张有效的 WebP 图片。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: '拖放 PNG 文件，转换为透明 WebP', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP 输出质量', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP 输出质量', // aria-label 'WebP output quality'
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最高细节（100%）', // 'Max detail (100%)'
    batchSummary: '{source} → {target} 批量转换汇总', // '{source} → {target} Batch Summary'
    fileSingular: '文件', // 'file'
    filePlural: '文件', // 'files'
    filesConvertedSuffix: '已转换', // 'converted' (in '{count} file(s) converted')
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    changeLabel: '变化', // 'Change'
    compare: '比较', // 'Compare'
    downloadTarget: '下载 WebP', // 'Download WebP'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    converting: '正在转换…', // 'Converting...'
    reconvertAll: '全部重新转换', // 'Re-convert All'
    clear: '清除', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '无法将 {name} 转换为 WebP。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '无法解码“{name}”。请确认它是一张有效的 PNG 图片。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: '拖放 WebP 文件，转换为无损 PNG', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    losslessPngOutput: '无损 PNG 输出', // 'Lossless PNG Output'
    losslessPngEncodingTitle: '无损 PNG 编码', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG 可保留锐利的边缘、文字和 Alpha 透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: '{source} → {target} 批量转换汇总', // '{source} → {target} Batch Summary'
    fileSingular: '文件', // 'file'
    filePlural: '文件', // 'files'
    filesConvertedSuffix: '已转换', // 'converted' (in '{count} file(s) converted')
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    changeLabel: '变化', // 'Change'
    compare: '比较', // 'Compare'
    downloadTarget: '下载 PNG', // 'Download PNG'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    converting: '正在转换…', // 'Converting...'
    reconvertAll: '全部重新转换', // 'Re-convert All'
    clear: '清除', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '无法将 {name} 转换为 PNG。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '无法解码“{name}”。请确认它是一张有效的 WebP 图片。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: '拖放 SVG 矢量文件，光栅化为 PNG', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      '通过 HTML5 Canvas 在本地光栅化内联 SVG 图形，并保留透明背景。限制：SVG 中引用的外部 <image> URL、外部 CSS 样式表/网络字体或脚本，在独立的 Canvas 导出中可能无法渲染。', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    losslessPngOutput: '无损 PNG 输出', // 'Lossless PNG Output'
    losslessPngEncodingTitle: '无损 PNG 编码', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG 可保留锐利的边缘、文字和 Alpha 透明度，且没有任何有损压缩伪影。', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: '光栅导出倍率', // 'Raster Export Scale'
    rasterExportScaleHint: '应用于 SVG 原始尺寸的倍率（上限 8000px）。更改倍率后请点击“全部重新转换”。', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: '{source} → {target} 批量转换汇总', // '{source} → {target} Batch Summary'
    fileSingular: '文件', // 'file'
    filePlural: '文件', // 'files'
    filesConvertedSuffix: '已转换', // 'converted' (in '{count} file(s) converted')
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    changeLabel: '变化', // 'Change'
    compare: '比较', // 'Compare'
    downloadTarget: '下载 PNG', // 'Download PNG'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    converting: '正在转换…', // 'Converting...'
    reconvertAll: '全部重新转换', // 'Re-convert All'
    clear: '清除', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '无法将 {name} 转换为 PNG。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '无法光栅化此 SVG。请确认文件是有效的 XML 格式 SVG 标记，且没有语法错误。', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: '拖放 AVIF 图片，转换为通用 JPG', // 'Drop AVIF images to convert to universal JPG'
    notice:
      '使用浏览器内置的 AVIF 解码器（支持现代 Chrome、Edge、Firefox 和 Safari）在本地解码 AVIF 图片，并导出为标准 JPG 文件。', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG 输出质量', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG 输出质量', // aria-label 'JPG output quality'
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最高细节（100%）', // 'Max detail (100%)'
    matteColorLabel: '透明背景填充色', // 'Transparent Background Matte Color'
    matteAriaLabel: '填充背景色', // aria-label 'Matte background color'
    matteWhite: '白色', // 'White'
    matteBlack: '黑色', // 'Black'
    matteLightGray: '浅灰色', // 'Light Gray'
    matteHint: 'JPG 不支持透明度，透明区域将用此颜色干净地填充。', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} 批量转换汇总', // '{source} → {target} Batch Summary'
    fileSingular: '文件', // 'file'
    filePlural: '文件', // 'files'
    filesConvertedSuffix: '已转换', // 'converted' (in '{count} file(s) converted')
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    changeLabel: '变化', // 'Change'
    compare: '比较', // 'Compare'
    downloadTarget: '下载 JPG', // 'Download JPG'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    converting: '正在转换…', // 'Converting...'
    reconvertAll: '全部重新转换', // 'Re-convert All'
    clear: '清除', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '无法将 {name} 转换为 JPG。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '您的浏览器无法解码此 AVIF 图片。请确认文件是有效的 .avif 图片，并尝试使用现代 Chrome、Firefox、Edge 或 Safari 浏览器。', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: '拖放未压缩的 BMP 位图，转换为紧凑的 JPG', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: '转换流程：', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG 输出质量', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG 输出质量', // aria-label 'JPG output quality'
    smallerFile: '更小的文件（20%）', // 'Smaller file (20%)'
    balanced: '均衡（85%）', // 'Balanced (85%)'
    maxDetail: '最高细节（100%）', // 'Max detail (100%)'
    batchSummary: '{source} → {target} 批量转换汇总', // '{source} → {target} Batch Summary'
    fileSingular: '文件', // 'file'
    filePlural: '文件', // 'files'
    filesConvertedSuffix: '已转换', // 'converted' (in '{count} file(s) converted')
    creatingZip: '正在创建 ZIP…', // 'Creating ZIP...'
    downloadAllZip: '全部下载（ZIP）', // 'Download All (ZIP)'
    changeLabel: '变化', // 'Change'
    compare: '比较', // 'Compare'
    downloadTarget: '下载 JPG', // 'Download JPG'
    removeImage: '删除 {name}', // aria-label `Remove ${item.name}`
    converting: '正在转换…', // 'Converting...'
    reconvertAll: '全部重新转换', // 'Re-convert All'
    clear: '清除', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG（{size}）', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '无法将 {name} 转换为 JPG。', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '无法解码“{name}”。请确认它是一张有效的 BMP 图片。', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: '拖放照片，使用 AI 去除背景', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: '正在加载浏览器内 AI 模型（isnet_quint8）', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: '模型缓存', // 'Model Cache'
    progressWasm: '正在加载 WebAssembly AI 运行时…', // 'Loading WebAssembly AI runtime...'
    progressModel: '正在下载 AI 背景去除模型（约 35 MB，以后将使用缓存）…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: '正在浏览器内本地去除背景…', // 'Removing background locally in your browser...'
    progressPreparing: '正在准备浏览器内 AI 模型…', // 'Preparing in-browser AI model...'
    progressInitLibrary: '正在加载 AI 背景去除库…', // 'Loading AI background removal library...'
    progressInitModule: '正在初始化 AI 背景去除模块…', // 'Initializing AI background removal module...'
    errorModelInit: '无法初始化 AI 背景模型：{message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: '无法在此浏览器中初始化 AI 背景模型。', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: '无法解码透明 PNG 输出。', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: '在此浏览器中去除背景失败。请尝试另一张图片或重新加载页面。', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: '前后对比预览', // 'Before & After Preview'
    splitCompare: '分割比较', // 'Split Compare'
    newImage: '新图片', // 'New Image'
    originalLabel: '原图', // 'Original'
    transparentCutout: '透明抠图（PNG）', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: '纯色背景预览', // 'Solid Background Preview'
    waitingForResult: '等待结果…', // 'Waiting for result...'
    processingLocally: '正在本地处理…', // 'Processing locally...'
    cutoutStatus: '抠图状态', // 'Cutout Status'
    ready: '就绪', // 'Ready'
    backgroundFillOption: '背景填充选项', // 'Background Fill Option'
    bgTransparent: '透明', // 'Transparent'
    bgWhite: '白色', // 'White'
    bgBlack: '黑色', // 'Black'
    bgCustom: '自定义', // 'Custom'
    customBackgroundColor: '自定义背景色', // 'Custom Background Color'
    downloadTransparentPng: '下载透明 PNG', // 'Download Transparent PNG'
    downloadWithWhite: '下载白色背景版本', // 'Download with White Background'
    downloadWithBlack: '下载黑色背景版本', // 'Download with Black Background'
    downloadWithCustom: '下载 {color} 背景版本', // 'Download with {color} Background'
    rerunRemoval: '重新去除', // 'Re-run Removal'
    comparisonTitlePrefix: '背景去除对比', // 'Background Removal Comparison'
    comparisonAfterTransparent: '抠图（透明 PNG）', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: '抠图（纯色背景）', // 'Cutout (Solid BG)'
    altOriginal: '原图 {name}', // alt `Original ${sourceFile.name}`
    altCutout: '已去除背景的 {name}', // alt `Background removed ${sourceFile.name}`
  },
};
