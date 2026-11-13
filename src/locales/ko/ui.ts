// Korean UI strings — assembled for src/locales/ko/ui.ts
// = i18n-ko.ts (export KO) + tool-ui-ko.ts (export TOOL_UI_KO).
// Neither source has imports. HOME_ENTRY_KO from i18n-ko.ts is NOT
// included here: it is already merged as TOOLS_REGISTRY_KO[0] in
// src/locales/ko/tools.ts, mirroring the RU ui.ts (RU + TOOL_UI_RU only).

// Korean (ko) UI strings for CompressMyPic — natural standard South Korean.
// Mirrors ~/workspace/compressmypic/id-ru/i18n-ru.ts exactly: same 15
// sections, same keys within each section, same export shape.
// Source: English originals in /tmp/cmpic-jako (Hero, FaqSection,
// EducationalContent, ToolsDirectorySection, ShareSection, Header, Footer,
// ToolPageLayout, UploadZone, ComparisonModal, CompressionControls,
// ResultsList, home entry in tools.ts, App.tsx guides section).
// The RU file was used as a structural template only — no RU text was copied.
// Every value was translated fresh from the CURRENT English source, including
// the faqSection (the DE dictionary translated an older EN FAQ set).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. "online" is rendered as 온라인 (Hangul) in all prose/SEO
// values — Latin "online" never appears in KO prose.
// Placeholders: {name} = tool/file name, {max} = max size in MB, {year} = current year,
// {count} = number of extra errors, {current} = current theme,
// {progress} = ZIP progress %, {bytes} = byte size, {formats} = supported format list.
// NOTE on footer links: like ES/PT/DE/IT/ID/RU, this dictionary keeps ENGLISH slugs in the
// footer (legal links /privacy, /terms, /about, /contact; directory links use
// English tool slugs); the app maps them to the current language via
// toLocalizedPath at render. Never put KO slugs in the dict.
// NOTE on guidesSection cards: like ES/PT/DE/IT/ID/RU, cards carry NO `link` key — the guide
// hrefs live in App.tsx.
// NOTE on header: the 11 language-switcher native names (English, Español,
// Português, Deutsch, Français, 日本語, Bahasa Indonesia, Italiano, Русский,
// 한국어, 简体中文) live in the app's SUPPORTED_LANGUAGES config, not in this
// dictionary — same as ES/PT/DE/IT/ID/RU.

export const KO = {
  header: {
    home: '홈', // 'Home'
    tools: '도구', // 'Tools'
    howItWorks: '사용 방법', // 'How It Works'
    faq: '자주 묻는 질문', // 'FAQ'
    about: '소개', // 'About'
    contact: '문의', // 'Contact'
    compressImages: '이미지 압축', // 'Compress Images'
    themeLight: '라이트 모드', // 'Light Mode'
    themeDark: '다크 모드', // 'Dark Mode'
    themeSystem: '시스템 기본값', // 'System Default'
    languageLabel: '언어', // 'Language'
    homeAriaLabel: 'CompressMyPic – 무료 온라인 이미지 압축기 로고', // 'CompressMyPic – Free online image compressor logo'
    themeLightShort: '라이트', // 'Light'
    themeDarkShort: '다크', // 'Dark'
    themeSystemShort: '시스템', // 'System'
    themeHeading: '테마', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: '탐색 메뉴 열기/닫기', // 'Toggle navigation menu'
    themeAriaLabel: '색상 테마 변경 (현재: {current})', // 'Change color theme (Current: {current})'
    themeTitle: '테마: {current}', // 'Theme: {current}'
    aboutUs: '회사 소개', // 'About Us' (mobile drawer)
    contactUs: '문의하기', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      '빠르고 안전하며 개인정보를 지키는 브라우저 기반 이미지 압축. 데이터를 외부 서버에 업로드하지 않고 JPG, PNG, WebP 이미지를 최적화하세요.', // 'Fast, secure, and private browser-native image compression. Optimize JPG, PNG, and WebP images without uploading your data to any external server.'
    privacyNote: '100% 기기 내 개인정보 보호', // '100% Client-Side Privacy'
    toolsHeading: '이미지 도구', // 'Image Tools'
    legalHeading: '신뢰 및 법률 정보', // 'Trust & Legal'
    guidesHeading: '가이드', // 'Guides'
    moreHeading: '기타 유틸리티', // 'More Utilities'
    directoryHeading: '고급 압축·편집·개발자 도구', // 'Advanced Compression, Editing & Developer Tools'
    processedLocally: 'HTML5 Canvas로 기기에서 처리', // 'Processed locally via HTML5 Canvas'
    bottomRights:
      '© {year} CompressMyPic. 모든 권리 보유. 무료 브라우저 기반 이미지 압축 유틸리티.', // '© {year} CompressMyPic. All rights reserved. Free client-side image compression utility.'
    contactLabel: '문의: bilalayyah@gmail.com', // 'Contact: bilalayyah@gmail.com'
    toolsLinks: [
      { slug: '/', label: '이미지 압축' }, // 'Compress Images'
      { slug: '/image-resizer', label: '이미지 크기 조절' }, // 'Image Resizer'
      { slug: '/image-converter', label: '이미지 변환' }, // 'Image Converter'
      { slug: '/rotate-flip-image', label: '이미지 회전 및 뒤집기' }, // 'Rotate & Flip Image'
      { slug: '/image-to-pdf', label: '이미지 PDF 변환' }, // 'Image to PDF'
      { slug: '/remove-image-metadata', label: '메타데이터 제거' }, // 'Remove Metadata'
      { slug: '/remove-background', label: '배경 제거' }, // 'Background Remover'
    ],
    legalLinks: [
      { slug: '/privacy', label: '개인정보처리방침' }, // 'Privacy Policy'
      { slug: '/terms', label: '이용약관' }, // 'Terms of Service'
      { slug: '/about', label: '회사 소개' }, // 'About Us'
      { slug: '/contact', label: '고객 지원 문의' }, // 'Contact Support'
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'WhatsApp용 이미지 화질 저하 없이 압축하는 방법', // 'How to compress images for WhatsApp without losing quality'
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP: 어떤 형식을 선택해야 할까요?', // 'JPG vs PNG vs WebP: Which Format Should You Use?'
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: '웹 및 이메일용 이미지 용량을 100KB까지 줄이는 방법', // 'How to Reduce Image Size to 100KB for Web & Email'
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: '메타데이터 및 EXIF 뷰어' }, // 'Metadata & EXIF Viewer'
      { slug: '/favicon-generator', label: '파비콘 생성기' }, // 'Favicon Generator'
      { slug: '/image-color-picker', label: '이미지 색상 추출기' }, // 'Image Color Picker'
      { slug: '/image-dimensions-checker', label: '이미지 크기 확인기' }, // 'Dimensions Checker'
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: '50KB로 압축' }, // 'Compress to 50KB'
      { slug: '/compress-image-to-100kb', label: '100KB로 압축' }, // 'Compress to 100KB'
      { slug: '/compress-image-to-200kb', label: '200KB로 압축' }, // 'Compress to 200KB'
      { slug: '/compress-image-to-500kb', label: '500KB로 압축' }, // 'Compress to 500KB'
      { slug: '/target-file-size-compressor', label: '목표 파일 크기 압축기' }, // 'Target File Size Compressor'
      { slug: '/bulk-image-compressor', label: '대량 이미지 압축기' }, // 'Bulk Image Compressor'
      { slug: '/bulk-image-resizer', label: '대량 이미지 크기 조절기' }, // 'Bulk Image Resizer'
      { slug: '/bulk-image-converter', label: '대량 이미지 변환기' }, // 'Bulk Image Converter'
      { slug: '/web-image-optimizer', label: '웹 이미지 최적화 도구' }, // 'Web Image Optimizer'
      { slug: '/gif-compressor', label: 'GIF 압축기' }, // 'GIF Compressor'
      { slug: '/image-cropper', label: '이미지 자르기' }, // 'Image Cropper'
      { slug: '/image-watermark', label: '이미지 워터마크' }, // 'Image Watermark'
      { slug: '/blur-pixelate-image', label: '흐림 및 픽셀화' }, // 'Blur & Pixelate'
      { slug: '/add-text-to-image', label: '이미지 텍스트 추가' }, // 'Add Text to Image'
      { slug: '/image-border-generator', label: '테두리 생성기' }, // 'Border Generator'
      { slug: '/round-image-corners', label: '모서리 둥글게' }, // 'Round Corners'
      { slug: '/image-brightness-editor', label: '밝기 편집기' }, // 'Brightness Editor'
      { slug: '/image-contrast-editor', label: '대비 편집기' }, // 'Contrast Editor'
      { slug: '/image-saturation-editor', label: '채도 편집기' }, // 'Saturation Editor'
      { slug: '/image-filters', label: '이미지 필터' }, // 'Image Filters'
      { slug: '/add-background-to-image', label: '배경 추가' }, // 'Add Background'
      { slug: '/image-splitter', label: '이미지 분할' }, // 'Image Splitter'
      { slug: '/image-dpi-changer', label: 'DPI 변경' }, // 'DPI Changer'
      { slug: '/image-to-base64', label: '이미지 Base64 변환' }, // 'Image to Base64'
      { slug: '/base64-to-image', label: 'Base64 이미지 변환' }, // 'Base64 to Image'
      { slug: '/image-color-palette-extractor', label: '색상 팔레트 추출기' }, // 'Color Palette Extractor'
      { slug: '/gif-maker', label: 'GIF 메이커' }, // 'GIF Maker'
      { slug: '/image-collage-maker', label: '이미지 콜라주 메이커' }, // 'Image Collage Maker'
      { slug: '/heic-to-jpg', label: 'HEIC를 JPG로' }, // 'HEIC to JPG'
      { slug: '/jpg-to-png', label: 'JPG를 PNG로' }, // 'JPG to PNG'
      { slug: '/png-to-jpg', label: 'PNG를 JPG로' }, // 'PNG to JPG'
      { slug: '/jpg-to-webp', label: 'JPG를 WebP로' }, // 'JPG to WebP'
      { slug: '/webp-to-jpg', label: 'WebP를 JPG로' }, // 'WebP to JPG'
      { slug: '/png-to-webp', label: 'PNG를 WebP로' }, // 'PNG to WebP'
      { slug: '/webp-to-png', label: 'WebP를 PNG로' }, // 'WebP to PNG'
      { slug: '/svg-to-png', label: 'SVG를 PNG로' }, // 'SVG to PNG'
      { slug: '/avif-to-jpg', label: 'AVIF를 JPG로' }, // 'AVIF to JPG'
      { slug: '/bmp-to-jpg', label: 'BMP를 JPG로' }, // 'BMP to JPG'
    ],
  },
  hero: {
    pill: '100% 개인정보 보호 기기 내 압축 · 서버 업로드 없음', // '100% Private Client-Side Compression · No Server Uploads'
    h1: '무료 이미지 압축기 – 온라인에서 화질 저하 없이 이미지 용량 줄이기', // 'Free Image Compressor – Compress Images Online & Reduce Size Without Losing Quality'
    sub: '눈에 띄는 화질 저하 없이 이미지 파일 용량을 줄이세요. 무료 이미지 압축기 및 사진 압축기로 온라인에서 이미지를 무료로 압축하세요. JPG, PNG, WebP, HEIC용 온라인 이미지 최적화 도구입니다. 빠르고 안전하며 가입도, 워터마크도 필요 없고 브라우저에서 바로 이미지를 압축할 수 있습니다.', // 'Reduce image file sizes without sacrificing noticeable quality. Compress image online free with our free image compressor and photo compressor — an online image optimizer for JPG, PNG, WebP and HEIC. Fast, secure, no signup, no watermark, and easy image compression directly in your browser.'
    badge1: '이미지가 기기를 절대 떠나지 않습니다', // 'Your images never leave your device'
    badge2: '브라우저에서 즉시 처리', // 'Instant browser processing'
    badge3: 'JPG, PNG, WebP, HEIC 지원', // 'JPG, PNG, WebP & HEIC supported'
  },
  toolsDirectory: {
    heading: '더 많은 무료 이미지 처리 도구', // 'More Free Image Processing Tools'
    subheading:
      '모든 도구는 브라우저에서 100% 로컬로 실행됩니다. 서버 업로드, 가입, 워터마크가 없습니다.', // 'Every tool runs 100% locally in your browser — no server uploads, no signup, no watermarks.'
    eyebrow: '모두 브라우저에서 실행되는 도구', // 'All Browser-Native Tools'
    allTools: '모든 도구', // 'All Tools'
    openTool: '도구 열기', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: '이미지 압축이란 무엇인가요?', // 'What Is Image Compression?'
        body: '이미지 압축이란 화질이 허용 가능한 수준을 넘어서 저하되지 않도록 하면서 그래픽 파일의 바이트 단위 파일 크기를 줄이는 과정입니다. 카메라나 스마트폰이 사진을 저장하면 엄청난 양의 데이터를 기록하는데, 그중 상당 부분은 제거하거나 단순화해도 사람의 눈이 쉽게 구분하지 못합니다. CompressMyPic은 JPG, PNG, WebP 파일을 위한 무료 온라인 이미지 최적화 도구이자 이미지 용량 축소 도구로, 사진 압축기이자 사진 용량 축소 도구로 동작합니다.\n\n이미지 압축 알고리즘은 이러한 패턴을 분석해 중복된 정보를 재구성하거나 선택적으로 제거합니다. 그 결과 파일은 저장 공간을 훨씬 적게 차지하고 인터넷 전송 속도도 훨씬 빨라집니다. 이 가이드에서는 CompressMyPic에 내장된 품질 슬라이더, 프리셋, 형식 선택 기능을 사용해 화질 저하 없이 이미지를 압축하는 방법을 알려드립니다.', // 'Image compression is the process of reducing the file size of a graphics file in bytes without degrading the visual quality of the picture beyond an acceptable threshold. When a camera or smartphone saves a photo, it stores a huge amount of data — much of which the human eye cannot easily distinguish when removed or simplified. CompressMyPic is a free online image optimizer and image size reducer that works as a photo compressor and photo size reducer for JPG, PNG and WebP files.\n\nBy analyzing these patterns, image compression algorithms restructure or selectively discard redundant information. The resulting file requires significantly less storage capacity and transfers much faster across the internet. This guide shows you how to compress image without losing quality, using the quality slider, presets and format choice built into CompressMyPic.'
      },
      {
        heading: '이미지를 압축해야 하는 이유', // 'Why Should You Compress Images?'
        body: '최적화되지 않은 이미지는 웹사이트 성능, 저장 공간, 모바일 데이터 사용량에 있어 가장 큰 병목 중 하나입니다. 이미지를 압축하면 즉각적이고 실질적인 이점이 있습니다.', // 'Unoptimized images represent one of the single largest bottlenecks for website performance, storage overhead, and mobile data consumption. Compressing your images provides immediate tangible benefits:'
        bullets: [
          '더 빠른 웹사이트 로딩: 압축된 이미지가 포함된 페이지는 최대 70% 더 빠르게 렌더링되어 Google Core Web Vitals(최대 콘텐츠풀 페인트)를 개선하고 검색 엔진 순위를 높입니다. 웹사이트 페이지의 이미지 용량을 줄이면 방문자가 더 오래 머물고 이탈률이 낮아집니다.', // 'Faster Website Loading: Pages with compressed images render up to 70% faster, improving your Google Core Web Vitals (Largest Contentful Paint) and boosting search engine rankings. When you reduce image size for website pages, visitors stay longer and bounce less.'
          '저장 공간 절감: 부풀려진 원본 대신 최적화된 이미지 파일을 저장해 클라우드 호스팅, 서버 디스크 사용량, 백업 저장 비용을 줄이세요.', // 'Reduced Storage Overhead: Cut down cloud hosting, server disk usage, and backup storage costs by storing streamlined image files instead of bloated originals.'
          '더 쉬운 이미지 공유: 엄격한 이메일 첨부 제한이나 메신저 업로드 용량 제한에 더 이상 막히지 않습니다. 압축된 사진은 느린 모바일 연결이나 제한된 데이터 요금제에서도 즉시 첨부되고 전송됩니다.', // 'Easier Image Sharing: Never get stopped by strict email attachment limits or messaging upload quotas. Compressed photos attach and send instantly, even on slow mobile connections or limited data plans.'
          '데이터 사용량 절감: 사용자의 모바일 데이터 요금을 절약하고 방문자가 사이트를 이탈하는 것을 막으세요. 파일이 작을수록 다운로드가 빨라집니다. 특히 느린 모바일 연결에서 더욱 그렇습니다.', // 'Reduced Bandwidth Consumption: Save your users money on mobile data plans and prevent visitors from abandoning your site. Smaller files mean faster downloads — especially on slower mobile connections.'
        ],
      },
      {
        heading: '사용 방법', // 'How It Works'
        body: '사진 압축은 몇 초면 충분합니다. 계정도, 소프트웨어도, 업로드도 필요 없습니다. 세 가지 간단한 단계로 화질 저하 없이 이미지를 압축하는 방법을 알려드립니다.', // 'Compressing your photos takes seconds — no account, no software, no upload. Here is how to compress image without losing quality in three simple steps.'
        bullets: [
          '1단계 – 이미지 업로드: JPG, PNG, WebP, HEIC 이미지를 업로드 영역으로 드래그 앤 드롭하거나 파일 선택을 클릭해 선택하거나 Ctrl+V로 이미지를 붙여넣으세요. 여러 이미지를 한 번에 업로드할 수 있으며, 이미지당 최대 20MB까지 가능합니다.', // 'Step 1 – Upload your images: Drag and drop your JPG, PNG, WebP or HEIC images into the upload area, click Browse Files to select them, or paste an image with Ctrl+V. You can upload multiple images at once, up to 20 MB per image.'
          '2단계 – 품질 조절 및 형식 선택: 낮음, 균형, 높음 프리셋 중 하나를 선택하거나 품질 슬라이더를 10%에서 100%까지 이동하고, 원본 형식을 유지하거나 JPG, PNG, WebP로 변환할지 선택하세요. 모든 이미지의 압축 전후 파일 크기를 실시간으로 확인하고, 대화형 비교 슬라이더로 시각적 결과를 확인하세요.', // 'Step 2 – Adjust quality and choose your format: Choose a Low, Balanced or High preset, or move the quality slider from 10% to 100%, and choose to keep the original format or convert to JPG, PNG or WebP. Watch the live before-and-after file size for every image and use the interactive comparison slider to check the visual result.'
          '3단계 – 압축된 이미지 다운로드: 압축된 이미지를 개별적으로 다운로드하거나 모두 다운로드(ZIP)를 클릭해 전체 배치를 하나의 파일로 다운로드하세요. 이미지는 브라우저에서 바로 압축되므로 기다릴 필요도, 업로드할 것도 없습니다.', // 'Step 3 – Download your compressed images: Download each compressed image individually, or click Download All (ZIP) to download the whole batch in one file. Your images are compressed right in your browser, so there is nothing to wait for and nothing to upload.'
        ],
      },
      {
        heading: '이 무료 이미지 압축기를 사용해야 하는 이유', // 'Why Use This Free Image Compressor?'
        body: 'CompressMyPic은 가입도, 워터마크도 없는 무료 이미지 압축기로, 일상적인 사진, 웹사이트 이미지, 소셜 미디어 업로드를 위해 만들어졌습니다.', // 'CompressMyPic is a free image compressor with no signup and no watermark — built for everyday photos, website images and social media uploads.'
        bullets: [
          'JPG, PNG, WebP, HEIC 압축: 실제로 사용하는 형식을 위한 하나의 이미지 압축기입니다. JPG 및 JPEG 사진을 압축하고, 투명도를 유지하면서 PNG 그래픽을 압축하며, 가장 작은 파일을 위해 WebP 이미지를 압축하세요.', // 'Compress JPG, PNG, WebP & HEIC: A single image compressor for the formats you actually use. Compress JPG and JPEG photos, compress PNG graphics while keeping transparency, and compress WebP images for the smallest files.'
          '화질 저하 없이 이미지 용량 줄이기: 스마트 압축은 중복 데이터와 메타데이터를 제거하면서도 사진이 원본과 거의 동일하게 보이도록 유지합니다. 균형 프리셋이 가장 좋은 시작점이며, 압축 전후 비교를 통해 품질을 직접 확인할 수 있습니다.', // 'Reduce Image Size Without Losing Quality: Smart compression removes redundant data and metadata while keeping the picture looking virtually identical to the original. The Balanced preset is the best starting point, and the before-and-after comparison lets you verify the quality yourself.'
          '대량 이미지 압축기 – 여러 이미지를 한 번에 압축: 이 대량 이미지 압축기 및 일괄 이미지 압축기를 사용하면 동일한 설정으로 여러 이미지를 한 번에 압축한 뒤, 파일을 하나씩 저장하는 대신 모두 다운로드(ZIP) 버튼으로 함께 다운로드할 수 있습니다.', // 'Bulk Image Compressor – Compress Multiple Images at Once: This bulk image compressor and batch image compressor lets you compress multiple images at once with the same settings, then download them all together with the Download All (ZIP) button instead of saving files one by one.'
          'WhatsApp, Instagram, Facebook용 이미지 압축: 사진을 줄여 WhatsApp에서 빠르게 전송하고 Instagram과 Facebook에 원활하게 업로드하세요. 파일이 작을수록 모바일 데이터를 적게 사용하고 용량이 너무 커서 거부될 가능성이 훨씬 낮아집니다.', // 'Compress Images for WhatsApp, Instagram & Facebook: Shrink photos so they send fast on WhatsApp and upload smoothly to Instagram and Facebook. Smaller files use less mobile data and are far less likely to be rejected for being too large.'
          '이미지 용량을 20KB, 50KB, 100KB, 200KB까지 줄이기: 품질 슬라이더를 단계적으로 낮추고 실시간 압축 전후 크기를 확인하면서 목표에 도달하세요. 200KB, 100KB, 50KB, 심지어 20KB까지 가능합니다. 출력 형식을 WebP로 바꾸면 눈에 띄는 화질 저하를 줄이면서 목표에 도달하는 경우가 많습니다.', // 'Reduce Image Size to 20KB, 50KB, 100KB or 200KB: Lower the quality slider step by step and watch the live before-and-after size until you reach your target — 200KB, 100KB, 50KB or even 20KB. Switching the output format to WebP usually gets you there with less visible quality loss.'
        ],
      },
      {
        heading: 'JPG, PNG, WebP 압축: 어떤 형식을 선택해야 할까요?', // 'Compress JPG, PNG and WebP: Which Format Should You Choose?'
        body: 'JPG, PNG, WebP는 각각 다른 용도로 사용됩니다. 각 형식의 강점을 이해하면 특정 프로젝트에 가장 적합한 선택을 할 수 있습니다.\n\n시각적 차이 비교하기: 어느 정도의 압축이 허용 가능한지 모르겠다면 도구에 있는 압축 전후 비교 기능을 사용하세요. 대화형 슬라이더 도구를 사용하면 원본 이미지와 압축된 버전을 나란히 살펴보며 다운로드 전에 시각적 아티팩트나 화질 저하가 있는지 확인할 수 있습니다.', // 'JPG, PNG, and WebP each serve a different purpose. Understanding their strengths helps you make the best choice for your specific project.\n\nCompare the Visual Difference: Not sure how much compression is acceptable? Use the before-and-after comparison option in the tool. Our interactive slider tool lets you inspect the original image and the compressed version side-by-side to spot any visual artifacts or quality loss before you download.'
        bullets: [
          'JPG 압축기 – JPG 온라인 무료 압축: 웹사이트, 블로그, 포트폴리오의 사진에 가장 적합합니다. JPG를 온라인에서 무료로 압축하고, 실시간 크기를 확인하면서 품질 슬라이더를 낮춰 JPEG를 100KB까지 압축하세요. JPEG 압축은 손실 압축으로, 사람의 눈이 인지하기 어려운 일부 시각 데이터를 영구적으로 제거합니다. 그 결과 화질 저하가 거의 없이 사진을 메가바이트에서 킬로바이트 단위로 줄일 수 있습니다.', // 'JPG Compressor — Compress JPG Online Free: Best for photographs on your website, blog, or portfolio. Compress JPG online free and compress JPEG to 100KB by lowering the quality slider while watching the live size. JPEG compression is lossy — it permanently removes some visual data that the human eye struggles to perceive. As a result, you can shrink a photo from megabytes to kilobytes with virtually no visible quality loss.'
          'PNG 압축기 – PNG 온라인 무료 압축: 로고, 아이콘, 일러스트 등 투명도가 필요한 그래픽, 스크린샷, 로고, 이미지에 가장 적합합니다. 여기에서 PNG를 온라인에서 무료로 압축하면서 선명하고 픽셀 단위로 정확한 그래픽을 위해 완전한 투명도를 유지하세요. PNG를 WebP로 변환하면 훨씬 작아지는 경우가 많습니다.', // 'PNG Compressor — Compress PNG Online Free: Best for graphics, screenshots, logos, and images that require transparency, such as logos, icons, or illustrations. Compress PNG online free here while keeping full transparency for sharp, pixel-perfect graphics. Converting a PNG to WebP often makes it much smaller.'
          'WebP 이미지 압축 – 최신 형식: 웹 최적화에 가장 적합합니다. WebP는 JPEG나 PNG보다 일반적으로 25~35% 더 작은 뛰어난 손실 및 무손실 압축을 제공합니다. 비슷한 화질에서 가장 작은 크기를 위해 WebP 이미지 파일을 압축하고, 눈에 보이는 화질 저하 없이 웹 페이지용 이미지를 최적화하고 싶을 때 WebP를 사용하세요. 대부분의 웹사이트에 가장 좋은 선택입니다.', // 'Compress WebP Image — The Modern Format: Best for web optimisation. WebP offers excellent lossy and lossless compression that is typically 25-35% smaller than JPEG or PNG. Compress WebP image files for the smallest size at similar quality, and use WebP when you want to optimize images for web pages without visible quality loss. It is the best choice for most websites.'
        ],
      },
      {
        heading: '이 이미지 압축기를 어디에 사용할 수 있나요?', // 'What Can You Use This Image Compressor For?'
        body: '하나의 무료 이미지 압축기로 이미지 용량을 줄여야 하는 가장 흔한 경우를 모두 해결할 수 있습니다.', // 'One free image compressor covers the most common reasons people need to reduce image size.'
        bullets: [
          '웹용 이미지 최적화: 웹 페이지용 이미지를 최적화해 로딩 속도를 높이고 Core Web Vitals를 개선하며 검색 순위를 올리세요. 이미지가 작을수록 페이지가 빨라지고 방문자가 만족하며 호스팅 대역폭도 줄어듭니다.', // 'Optimize images for web: Optimize images for web pages to load faster, improve Core Web Vitals and rank better. Smaller images mean faster pages, happier visitors and lower hosting bandwidth.'
          '이메일 첨부용 이미지 압축: 사진을 첨부 크기 제한 안에 들어가도록 압축하세요. 큰 원본 대신 작게 다운로드한 파일을 첨부하면 이메일이 반송되지 않고 전송됩니다.', // 'Compress images for email attachment: Compress images for an email attachment so your photos fit inside attachment size limits. Attach the smaller downloads instead of the large originals and your emails will send without bouncing.'
          '웹사이트용 사진 압축: 업로드하기 전에 웹사이트, 블로그, 포트폴리오, 온라인 스토어용 사진을 압축하세요. 제품 사진, 배너, 블로그 이미지는 선명도를 유지하면서 서버 공간을 훨씬 적게 차지합니다.', // 'Compress photo for website: Compress a photo for your website, blog, portfolio or online store before you upload it. Product photos, banners and blog images stay sharp while taking up far less space on your server.'
          '사진 파일 용량 줄이기: 공유, 백업, 인쇄 전에 휴대폰이나 카메라의 사진 파일 용량을 줄이세요. 큰 사진도 빠르게 전송되고 쉽게 저장되며 간편하게 관리할 수 있습니다.', // 'Reduce photo file size: Reduce photo file size from a phone or camera before sharing, backing up or printing. Large photos become quick to send, easy to store and simple to manage.'
        ],
      },
      {
        heading: '이미지 크기가 중요한 이유', // 'Why Image Size Matters'
        body: '크고 고해상도인 이미지 파일은 카메라 기술의 빠른 발전으로 생겨난 결과입니다. 이미지는 불과 몇 년 전보다 2~3배 더 커졌습니다. 웹사이트 페이지용 이미지 용량을 줄이고 웹용 이미지를 최적화하면 사이트 로딩 속도가 빨라지고 대역폭 사용량이 줄며 검색 결과 순위가 올라갑니다.\n\n좋은 압축기를 찾을 때는 1) 화질을 희생하지 않고, 2) 데이터를 비공개로 유지하며(기기 내 처리), 3) 파일을 먼 서버로 보내지 않고 빠르게 처리하는지 확인하세요. CompressMyPic은 바로 이를 위해 만들어졌습니다.', // 'Large, high-resolution image files are the result of the rapid advancement in camera technology — images are now 2-3x larger than they were just a few years ago. When you reduce image size for website pages and optimize images for web use, your site loads faster, uses less bandwidth and ranks better in search results.\n\nWhen searching for a good compressor, look for one that: 1) does not compromise on quality, 2) keeps your data private (client-side processing), and 3) processes images fast without running your files through a distant server. That is exactly what CompressMyPic is built for.'
      },
      {
        heading: '최적화 팁: 화질 저하 없이 이미지 용량 줄이기', // 'Optimization Tips: Reduce Image Size Without Losing Quality'
        body: '',
        bullets: [
          '균형 프리셋부터 시작하기: 균형 프리셋(품질 70%)은 대부분의 이미지에 최적의 균형을 제공합니다. 원본과 시각적으로 매우 유사하면서도 파일 크기가 크게 줄어듭니다.', // 'Start with the Balanced Preset: The Balanced preset (70% quality) offers the optimal trade-off for most images — dramatically smaller files with great visual similarity to the original.'
          '올바른 형식 선택하기: 사진은 JPG나 WebP가 PNG보다 항상 파일 크기가 작습니다. 투명도가 있는 로고나 라인 그래픽에는 PNG를 사용하세요.', // 'Choose the right format: For photographs, JPG or WebP will always outperform PNG in file size. For logos and line graphics with transparency, use PNG.'
          '목표 크기 정하기: 웹사이트용으로는 200KB 미만의 이미지를 목표로 하세요. 이메일과 메시지용으로는 빠른 전송을 위해 1MB 이하로 유지하세요. 품질 슬라이더와 실시간 크기 표시를 사용해 목표 크기에 도달하세요.', // 'Aim for a target size: For website use, aim for images under 200 KB. For emails and messages, stay under 1 MB to ensure fast delivery. Use the quality slider and the live size display to reach your target size.'
          '적정 지점 찾기: 화질이 중요한 대표 이미지에는 품질 슬라이더를 85~90%로 설정하세요. 일반적인 웹사이트 사용에는 70~80%가 이상적인 균형인 경우가 많고, 썸네일이나 크기가 최우선일 때는 50~60%가 더 적합합니다.', // 'Find the sweet spot: Set the quality slider to 85-90% for hero images where quality matters; 70-80% is typically the ideal balance for general website use; 50-60% is better for thumbnails or when size is the top priority.'
          '가장 작은 파일에는 WebP 사용하기: 출력 형식을 WebP로 바꾸면 비슷한 화질에서 JPG나 PNG가 보통 25~35% 더 작아집니다. 화질 저하 없이 이미지 용량을 줄이는 간단한 방법입니다.', // 'Try WebP for the smallest files: Switching the output format to WebP usually shrinks a JPG or PNG by another 25-35% at similar quality — a simple way to reduce image size without losing quality.'
        ],
      },
    ],
  },
  faqSection: {
    heading: '자주 묻는 질문', // 'Frequently Asked Questions'
    subheading:
      'CompressMyPic으로 이미지를 온라인에서 무료로 압축하는 데 필요한 모든 정보입니다.', // 'Everything you need to know about compressing images online for free with CompressMyPic.'
    faqs: [
      {
        id: 'faq-1',
        question: '이미지를 온라인에서 무료로 압축하려면 어떻게 하나요?', // 'How can I compress an image online for free?'
        answer:
          '이미지 파일을 CompressMyPic으로 드래그 앤 드롭하거나 "파일 선택"을 클릭하세요. 압축 프리셋(낮음, 균형, 높음)을 선택하거나 품질 슬라이더를 조절한 뒤 최적화된 이미지를 즉시 다운로드하세요. 이 도구는 가입이나 소프트웨어 설치 없이 100% 무료입니다.', // 'Simply drag and drop your image files onto CompressMyPic or click "Browse Files". Choose a compression preset (Low, Balanced, or High) or adjust the quality slider, then download your optimized images instantly. The tool is 100% free with no sign-up or software installation required.'
      },
      {
        id: 'faq-2',
        question: '이미지를 100KB까지 압축하려면 어떻게 하나요?', // 'How do I compress an image to 100KB?'
        answer:
          'CompressMyPic에는 정확한 목표 KB 입력란이 없어 100KB를 직접 입력할 수는 없습니다. 대신 이미지를 업로드하고 프리셋을 선택하거나 품질 슬라이더를 낮추면서 각 이미지에 표시되는 실시간 압축 전후 크기를 확인하세요. 압축 크기가 100KB에 가까워질 때까지 품질을 조절하거나 출력 형식을 WebP로 바꾼 뒤 다운로드하세요.', // 'CompressMyPic does not have an exact target-KB input box, so you cannot type in 100KB directly. Instead, upload your image, choose a preset or lower the quality slider, and watch the live before-and-after size shown for each image. Adjust the quality or switch the output format to WebP until the compressed size is close to 100KB, then download it.'
      },
      {
        id: 'faq-3',
        question: '화질 저하 없이 이미지 용량을 줄이려면 어떻게 하나요?', // 'How can I reduce image size without losing quality?'
        answer:
          '균형 프리셋(약 70% 품질)이나 85~90%의 높은 품질 설정을 선택하세요. 중복 데이터와 메타데이터를 제거하면서도 사진이 원본과 거의 동일하게 보입니다. 대화형 압축 전후 비교로 결과를 확인하고, 원본 형식을 유지하거나 최상의 화질 대비 용량 균형을 위해 WebP를 선택하세요.', // 'Choose the Balanced preset (around 70% quality) or a high quality setting of 85-90%, which removes redundant data and metadata while keeping the picture looking virtually identical to the original. Use the interactive before-and-after comparison to check the result, and keep the original format or choose WebP for the best quality-to-size balance.'
      },
      {
        id: 'faq-4',
        question: 'JPEG를 100KB까지 압축하려면 어떻게 하나요?', // 'How do I compress a JPEG to 100KB?'
        answer:
          'JPEG 파일 용량을 줄이려면 JPEG를 업로드하고 출력 형식으로 JPEG를 선택한 뒤, 실시간 압축 크기를 확인하면서 품질 슬라이더를 단계적으로 낮추세요. 정확한 목표 KB 입력란이 없으므로 압축 전후 크기 표시를 보고 파일이 100KB에 가까워지면 멈추세요.', // 'To reduce JPEG file size, upload your JPEG, choose JPEG as the output format, then lower the quality slider step by step while watching the live compressed size. Because there is no exact target-KB box, use the before-and-after size display to stop when the file is close to 100KB.'
      },
      {
        id: 'faq-5',
        question: '이미지 용량을 20KB, 50KB, 200KB까지 줄이려면 어떻게 하나요?', // 'How do I reduce image size to 20KB, 50KB or 200KB?'
        answer:
          '이미지를 업로드하고 품질 슬라이더를 점진적으로 낮추면서 매번 변경 후 실시간 압축 전후 크기를 확인하세요. 목표(200KB, 50KB, 20KB)에 도달할 때까지 조절하세요. 20KB처럼 작은 목표는 보통 더 낮은 품질 설정과 WebP 출력이 필요합니다. 500KB를 포함한 모든 목표에 같은 방법을 사용할 수 있으며, 크기는 항상 KB 단위로 표시되므로 이미지 용량을 KB 단위로 얼마나 줄였는지 정확히 확인할 수 있습니다.', // 'Upload your image and lower the quality slider gradually, checking the live before-and-after size after each change, until you reach your target - 200KB, 50KB or 20KB. Smaller targets such as 20KB usually need a lower quality setting and WebP output. The same method works for any target, including 500KB, and the size is always shown in KB so you can see exactly how much you reduced the image size in KB.'
      },
      {
        id: 'faq-6',
        question: 'PNG를 온라인에서 무료로 압축하려면 어떻게 하나요?', // 'How do I compress a PNG online for free?'
        answer:
          'PNG를 CompressMyPic에 업로드하고 프리셋을 선택하거나 품질 슬라이더를 조절하세요. 여기서 PNG를 온라인에서 압축하는 것은 가입 없이 무료입니다. PNG와 WebP 출력에서는 투명도가 유지되며, PNG를 WebP로 변환하면 훨씬 작아지는 경우가 많습니다.', // 'Upload your PNG to CompressMyPic and choose a preset or adjust the quality slider - compressing a PNG online is free here, with no signup. Transparency is preserved for PNG and WebP output, and converting a PNG to WebP often makes it much smaller.'
      },
      {
        id: 'faq-7',
        question: '지원되는 이미지 형식은 무엇인가요?', // 'What image formats are supported?'
        answer:
          'CompressMyPic은 JPG(JPEG), PNG, WebP, HEIC를 지원합니다. 기본적으로 HEIC로 저장되는 iPhone 사진도 포함됩니다. 원본 형식을 유지하거나 형식 간에 변환할 수 있습니다. 예를 들어 JPG 파일을 JPEG로 압축하거나, 투명도를 유지하면서 PNG 파일을 압축하거나, 가장 작은 파일을 위해 WebP로 변환할 수 있습니다.', // 'CompressMyPic supports JPG (JPEG), PNG, WebP and HEIC — including photos taken on iPhones, which save as HEIC by default. You can keep the original format or convert between them - for example, compress JPG files as JPEG, compress PNG files while keeping transparency, or convert to WebP for the smallest files.'
      },
      {
        id: 'faq-8',
        question: '여러 이미지를 한 번에 압축할 수 있나요?', // 'Can I compress multiple images at once?'
        answer:
          '네. 이 대량 이미지 압축기 및 일괄 이미지 압축기를 사용하면 수십 장의 이미지를 한 번에 업로드하고 동일한 설정으로 여러 이미지를 한 번에 압축한 뒤, "모두 다운로드(ZIP)" 버튼으로 함께 다운로드하거나 각 파일을 개별적으로 다운로드할 수 있습니다.', // 'Yes. This bulk image compressor and batch image compressor lets you upload dozens of images at once, compress multiple images at once with the same settings, and download them all together with the "Download All (ZIP)" button, or download each one individually.'
      },
      {
        id: 'faq-9',
        question: 'WhatsApp용 이미지를 압축하려면 어떻게 하나요?', // 'How do I compress an image for WhatsApp?'
        answer:
          '사진을 업로드하고 낮은 품질 프리셋이나 WebP 출력을 선택한 뒤, WhatsApp에서 공유하기 전에 더 작은 파일을 다운로드하세요. 사진이 작을수록 전송 속도가 빨라지고 모바일 데이터를 적게 사용하며, 용량이 너무 커서 거부될 가능성이 낮아집니다.', // 'Upload your photo, choose a lower quality preset or WebP output, and download the smaller file before sharing it on WhatsApp. Smaller photos send faster, use less mobile data, and are less likely to be rejected for being too large.'
      },
      {
        id: 'faq-10',
        question: 'Instagram이나 Facebook용 이미지를 압축하려면 어떻게 하나요?', // 'How do I compress an image for Instagram or Facebook?'
        answer:
          '여기에 사진을 업로드하고 균형 프리셋을 선택한 뒤 더 작은 JPG나 WebP 파일을 다운로드해 Instagram이나 Facebook용 사진을 압축하세요. 용량이 줄어든 파일은 업로드 속도가 빨라지고 피드, 스토리, 프로필 사진에 충분한 화질을 유지합니다.', // 'Compress your photo for Instagram or Facebook by uploading it here, choosing the Balanced preset, and downloading the smaller JPG or WebP file. The reduced file uploads faster and keeps enough quality for feeds, stories and profile pictures.'
      },
      {
        id: 'faq-11',
        question: '이메일 첨부용 이미지를 압축할 수 있나요?', // 'Can I compress images for an email attachment?'
        answer:
          '네. 품질 슬라이더로 이미지를 줄여 각 파일이 이메일 제공업체의 첨부 제한 안에 들어가도록 한 뒤, 큰 원본 대신 다운로드한 파일을 메시지에 첨부해 이메일 첨부용 이미지를 압축하세요.', // 'Yes. Compress images for an email attachment by reducing them with the quality slider until each file is small enough for your email provider attachment limit, then attach the downloaded files to your message instead of the large originals.'
      },
      {
        id: 'faq-12',
        question: 'CompressMyPic은 정말 무료인가요?', // 'Is CompressMyPic really free?'
        answer:
          '네, CompressMyPic은 완전히 무료입니다. 요금, 유료 요금제, 크레딧이 없으며 압축할 수 있는 이미지 수에도 제한이 없습니다.', // 'Yes, CompressMyPic is completely free to use. There are no fees, no paid plans, no credits and no limits on how many images you can compress.'
      },
      {
        id: 'faq-13',
        question: 'CompressMyPic은 워터마크를 추가하나요?', // 'Does CompressMyPic add a watermark?'
        answer:
          '아니요. CompressMyPic은 워터마크 없는 무료 이미지 압축기입니다. 압축된 이미지는 로고, 텍스트, 브랜딩이 추가되지 않은 깨끗한 상태입니다.', // 'No. CompressMyPic is a free image compressor with no watermark - your compressed images are clean, with no logo, text or branding added.'
      },
      {
        id: 'faq-14',
        question: 'CompressMyPic을 사용하려면 가입해야 하나요?', // 'Do I need to sign up to use CompressMyPic?'
        answer:
          '아니요. 가입 없이 사용할 수 있는 무료 이미지 압축기입니다. 계정, 이메일 주소, 비밀번호가 필요 없습니다. 사이트를 열고 바로 압축을 시작하세요.', // 'No. This is a free image compressor with no signup: there is no account, no email address and no password required. Just open the site and start compressing.'
      },
      {
        id: 'faq-15',
        question: '내 이미지가 서버에 업로드되나요?', // 'Are my images uploaded to a server?'
        answer:
          '아니요. 모든 압축은 웹 브라우저 안에서 사용자의 기기에서 전적으로 이루어지므로 이미지가 서버에 업로드되거나 저장되거나 다른 사람이 볼 수 없습니다. 이미지는 브라우저 메모리에만 남아 있다가 탭을 새로고침하거나 닫으면 삭제됩니다.', // 'No. All compression happens entirely on your own device inside your web browser, so your images are never uploaded to a server, stored or viewed by anyone else. They stay in your browser memory and are cleared when you refresh or close the tab.'
      },
      {
        id: 'faq-16',
        question: '파일 크기 제한이 있나요?', // 'Is there a file size limit?'
        answer:
          '네, 이미지당 제한은 20MB이며, 고해상도 카메라 사진과 큰 스크린샷까지 포함합니다. 처리가 기기에서 이루어지므로 큰 파일도 압축 속도가 빠릅니다.', // 'Yes, the limit is 20 MB per image, which covers high-resolution camera photos and large screenshots. Because processing happens on your device, compression stays fast even for large files.'
      },
      {
        id: 'faq-17',
        question: '이미지를 압축하면 크기가 바뀌나요?', // 'Does compressing an image change its dimensions?'
        answer:
          '아니요. CompressMyPic은 이미지 크기를 그대로 유지합니다. 파일 크기만 줄어듭니다. 사진은 원본과 동일한 너비, 높이, 종횡비를 유지합니다.', // 'No. CompressMyPic keeps your image dimensions unchanged - only the file size is reduced. Your photo keeps the same width, height and aspect ratio as the original.'
      },
      {
        id: 'faq-18',
        question: '모바일에서 이미지를 압축할 수 있나요?', // 'Can I compress images on mobile?'
        answer:
          '네. CompressMyPic은 iOS와 Android의 모바일 브라우저에서 동작하므로 카메라 롤에서 사진을 선택하거나 새 사진을 찍어 여기에 업로드해 휴대폰에서 사진을 압축할 수 있습니다.', // 'Yes. CompressMyPic works on mobile browsers on iOS and Android, so you can compress a photo on your phone by picking it from your camera roll or taking a new picture and uploading it here.'
      },
      {
        id: 'faq-19',
        question: '품질 슬라이더는 어떻게 동작하나요?', // 'How does the quality slider work?'
        answer:
          '품질 슬라이더를 사용하면 압축 품질을 10%에서 100%까지 설정할 수 있습니다. 값이 높을수록 세부 묘사가 많이 유지되고 파일이 커지며, 값이 낮을수록 파일이 훨씬 작아집니다. 낮음, 균형, 높음 프리셋이 슬라이더를 대신 설정해주고, 실시간 압축 전후 크기가 매번 변경 결과를 보여줍니다.', // 'The quality slider lets you set the compression quality from 10% to 100%. Higher values keep more detail and produce larger files, while lower values make files much smaller. The Low, Balanced and High presets set the slider for you, and the live before-and-after size shows the result of every change.'
      },
      {
        id: 'faq-20',
        question: '출력 형식은 어떻게 선택하나요?', // 'How do I choose the output format?'
        answer:
          '이미지를 업로드한 뒤 원본 형식을 유지할지, JPG, PNG, WebP로 변환할지 선택하세요. WebP는 비슷한 화질에서 JPEG보다 25~35% 작으므로 웹 페이지용 이미지를 최적화할 때 보통 가장 좋은 선택이며, 투명도가 필요할 때는 PNG가 가장 좋습니다.', // 'After uploading an image, choose whether to keep the original format or convert to JPG, PNG or WebP. WebP is usually the best choice to optimize images for web pages because it is 25-35% smaller than JPEG at similar quality, while PNG is best when you need transparency.'
      },
    ],
  },
  guidesSection: {
    heading: '가이드', // 'Guides'
    subheading:
      '눈에 보이는 화질 저하 없이 더 작은 파일을 얻는 단계별 가이드입니다.', // 'Step-by-step guides to get smaller files without losing visible quality.'
    cards: [
      {
        title: 'WhatsApp용 이미지 화질 저하 없이 압축하는 방법', // 'How to compress images for WhatsApp without losing quality'
        desc: '전송 전에 사진을 줄여 선명하게 유지하고 빠르게 전송하세요.', // 'Shrink photos before sending so they stay sharp and send fast.'
        cta: '가이드 읽기 →', // 'Read guide →'
      },
      {
        title: 'JPG vs PNG vs WebP: 어떤 형식을 선택해야 할까요?', // 'JPG vs PNG vs WebP: Which Format Should You Use?'
        desc: '파일 크기, 화질, 투명도를 비교해 올바른 형식을 선택하세요.', // 'File size, quality and transparency compared, so you can pick the right format.'
        cta: '가이드 읽기 →', // 'Read guide →'
      },
      {
        title: '웹 및 이메일용 이미지 용량을 100KB까지 줄이는 방법', // 'How to Reduce Image Size to 100KB for Web & Email'
        desc: '단계별 안내: 눈에 보이는 화질 저하 없이 100KB에 도달하세요.', // 'Step-by-step: hit 100KB without losing visible quality.'
        cta: '가이드 읽기 →', // 'Read guide →'
      },
    ],
  },
  shareSection: {
    heading: 'CompressMyPic을 친구들과 공유하세요', // 'Share CompressMyPic with friends'
    text: '이 도구가 유용했나요? 친구도 이미지를 압축할 수 있도록 도와주세요. 한 번의 탭이면 됩니다.', // 'Found this tool useful? Help a friend compress their images too — it takes one tap.'
    shareText:
      '이미지를 온라인에서 무료로 압축하세요 — 가입도, 워터마크도 없습니다. CompressMyPic을 사용해 보세요:', // 'Compress images online for free — no signup, no watermark. Try CompressMyPic:'
    siteUrl: 'https://compressmypic.online/',
    shareOn: '{name}에서 공유', // 'Share on {name}'
    copyLink: '링크 복사', // 'Copy link'
    copied: '복사됨!', // 'Copied!'
    share: '공유', // 'Share'
    emailSubject: '무료 이미지 압축기 – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – 무료 이미지 압축기', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: '홈', // 'Home'
    privacyPill: '100% 비공개 브라우저 처리 · 파일이 기기를 절대 떠나지 않음', // '100% Private Browser Processing · Files Never Leave Your Device'
    noUploads: '서버 업로드 없음', // 'No server uploads'
    freeNote: '무료 · 가입 없음 · 워터마크 없음', // 'Free · No signup · No watermark'
    howToTitle: '{name} 사용 방법', // 'How to Use {name}'
    howToIntro:
      '브라우저에서 바로 작업을 완료하는 간단한 단계를 따라 하세요.', // 'Follow these simple steps to complete your task — right inside your browser.'
    featuresTitle: 'CompressMyPic {name}을 사용해야 하는 이유', // 'Why Use CompressMyPic {name}?'
    faqTitle: '{name} — 자주 묻는 질문', // '{name} — Frequently Asked Questions'
    relatedTitle: '관련 무료 이미지 도구', // 'Related Free Image Tools'
  },
  uploadZone: {
    dropText: '이미지를 여기에 드래그 앤 드롭하세요', // 'Drag & drop images here'
    browseButton: '파일 선택', // 'browse files'
    browsePrefix: '또는', // 'or'
    browseSuffix: '컴퓨터나 휴대폰에서', // 'from your computer or phone'
    orPaste: '붙여넣기(Ctrl+V) 지원', // 'Paste (Ctrl+V) supported'
    hint: '이미지당 최대 {max}MB', // 'Max {max} MB per image'
    errorTooBig: '“{name}”이(가) 최대 제한 {max}MB를 초과합니다.', // '"{name}" exceeds the maximum limit of {max} MB.'
    errorBadType: '“{name}”은(는) 지원되지 않는 형식입니다({formats}).', // '"{name}" is not a supported format ({formats}).'
    errorUnreadable: '“{name}”은(는) 빈 파일입니다(0바이트).', // '"{name}" is an empty file (0 bytes).'
    errorMore: '(그 외 {count}개의 오류)', // '(+{count} more errors)'
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      '이미지 업로드 영역. 파일을 드래그 앤 드롭하거나 클릭해 파일을 선택하세요.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: '화질 시각 비교', // 'Visual Quality Comparison'
    beforeLabel: '원본(압축 전)', // 'Original (Before)'
    afterLabel: '압축됨(압축 후)', // 'Compressed (After)'
    closeLabel: '비교 보기 닫기', // 'Close comparison view'
    instruction: '슬라이더 핸들을 왼쪽이나 오른쪽으로 드래그해 픽셀 화질을 확인하세요.', // 'Drag the slider handle left or right to inspect pixel quality.'
    sliderLabel: '슬라이더', // 'Slider'
    sideBySideLabel: '나란히 보기', // 'Side by Side'
    zoomInLabel: '확대', // 'Zoom in'
    zoomOutLabel: '축소', // 'Zoom out'
    originalLabel: '원본:', // 'Original:'
    outputLabel: '결과:', // 'Output:'
    reductionLabel: '감소:', // 'Reduction:'
    sizeChangeLabel: '크기 변경:', // 'Size Change:'
    qualityLabel: '품질 설정:', // 'Quality Setting:'
    formatLabel: '형식:', // 'Format:'
    modalAriaLabel: '이미지 비교 모달', // 'Image comparison modal'
    altCompressed: '{name}의 압축된 버전', // 'Compressed version of {name}'
    altOriginal: '{name}의 원본 버전', // 'Original version of {name}'
    altProcessed: '{name}의 처리된 버전', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: '무료 온라인 이미지 압축 – 용량을 100KB까지 줄이기', // 'Free Image Compressor Online – Reduce Image Size to 100KB'
    seoDescription:
      '이미지를 온라인에서 무료로 압축하세요 — 화질 저하 없이 JPG, PNG, WebP 파일 용량을 줄입니다. 가입도, 워터마크도 없이 브라우저에서 바로 압축하세요. 사진 용량을 20KB, 50KB, 100KB, 200KB까지 줄이고 여러 장을 한 번에 압축해 ZIP으로 다운로드하세요.', // 'Compress image online free — reduce image size without losing quality. Compress JPG, PNG and WebP with no signup and no watermark, right in your browser.'
    h1: '무료 온라인 이미지 압축기', // 'Free Image Compressor'
    subtitle: 'JPG, PNG, WebP, HEIC 파일 용량을 브라우저에서 바로 줄이세요.', // 'Reduce JPG, PNG, WebP & HEIC file size directly in your browser.'
  },
  categories: {
    compress: '압축', // 'Compression'
    resize: '크기 조정', // 'Resize'
    convert: '변환', // 'Convert'
    'crop-edit': '자르기·편집', // 'Crop & Edit'
    'ai-tools': 'AI 도구', // 'AI Tools'
    create: '만들기', // 'Create'
    privacy: '개인정보 도구', // 'Privacy'
    developer: '개발자 도구', // 'Developer Tools'
  },
  compressionControls: {
    modeLabel: '압축 모드', // 'Compression Mode'
    presetLow: '낮은 압축(85%)', // 'Low Compression (85%)'
    presetBalanced: '균형(70%)', // 'Balanced (70%)'
    presetHigh: '높은 압축(50%)', // 'High Compression (50%)'
    presetCustom: '사용자 지정', // 'Custom'
    formatLabel: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    qualityLabel: '목표 품질:', // 'Quality Target:'
    qualityHigh: '고화질', // 'High Fidelity' (quality >= 80)
    qualityOptimal: '웹용 최적 균형', // 'Optimal Web Balance' (60–79)
    qualityMax: '최대 공간 절약', // 'Max Space Savings' (< 60)
    qualityAriaLabel: '10%에서 100%까지의 품질 슬라이더', // 'Quality slider from 10 to 100 percent'
    compressAll: '모두 다시 압축', // 'Re-compress All'
    compressing: '압축 중…', // 'Compressing...'
    clearAll: '모두 지우기', // 'Clear All'
    clearAllTitle: '모든 이미지 삭제', // 'Clear all images'
    transparencyTitle: 'JPEG 변환 시 투명도 안내', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'JPEG 형식은 투명도(알파 채널)를 지원하지 않습니다. 투명한 배경은 단색 매트 배경(기본값 흰색)으로 대체됩니다. 투명한 배경을 유지하려면 PNG나 WebP를 선택하세요.', // 'JPEG format does not support transparency (alpha channels). Transparent backgrounds will be replaced with a solid matte background (default white). Select PNG or WebP if you wish to retain transparent backgrounds.'
    pngTip:
      'PNG는 무손실 형식이라 품질 슬라이더를 무시하므로 PNG를 다시 인코딩하면 원본과 같거나 더 커질 수 있습니다. 사진 같은 PNG는 WebP나 JPG를 선택하면 보통 50~80% 더 작아집니다.', // 'PNG is a lossless format and ignores the quality slider, so re-encoding a PNG can sometimes match or exceed the original file size. For photo-like PNGs, selecting WebP or JPG usually produces 50–80% smaller files.'
  },
  resultsList: {
    summary: '압축 요약', // 'Compression Summary'
    image: '이미지', // 'Image' (count === 1)
    images: '이미지', // 'Images' (count !== 1)
    totalOriginal: '원본 전체:', // 'Total Original:'
    totalCompressed: '압축 전체:', // 'Total Compressed:'
    totalSaved: '절약된 전체:', // 'Total Saved:'
    processing: '처리 중…', // 'Processing...'
    grewBy: '({bytes} 증가)', // '(grew by {bytes})'
    reduction: '감소:', // 'Reduction:'
    sizeChange: '크기 변경:', // 'Size Change:'
    downloadAll: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP 생성 중({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: '비교', // 'Compare'
    compareTitle: '화질 시각 비교를 보려면 클릭하세요', // 'Click to inspect visual quality comparison'
    compareActionTitle: '압축 전후 시각 비교', // 'Compare visual before/after'
    download: '다운로드', // 'Download'
    retry: '다시 시도', // 'Retry'
    removeTitle: '이미지 삭제', // 'Remove image'
    removeAriaLabel: '{name} 삭제', // 'Remove {name}'
    keptOriginal: '원본 유지(다시 인코딩한 파일이 더 큼)', // 'Kept original (re-encode was larger)'
    grewByStatus: '{bytes} 증가 — 다시 인코딩한 파일이 원본보다 큽니다', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: '압축 완료', // 'Compressed successfully'
    optimizing: '픽셀 최적화 중…', // 'Optimizing pixels...'
    compressionError: '압축 오류', // 'Compression error'
    original: '원본', // 'Original' (metric label)
    compressed: '압축됨', // 'Compressed' (metric label)
    output: '결과', // 'Output' (metric label when original kept)
    spaceSaved: '절약된 공간', // 'Space Saved'
    formatLabel: '형식:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: '알파', // 'Alpha' badge
    largerTitle: '결과가 원본보다 {bytes} 더 큽니다.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      '무손실 PNG 다시 인코딩은 품질 슬라이더를 무시합니다. 사진 같은 PNG는 WebP나 JPG가 보통 훨씬 작습니다.', // 'Lossless PNG re-encoding ignores the quality slider; WebP or JPG is usually much smaller for photo-like PNGs.'
    largerNote:
      '이 이미지는 선택한 품질에서 이미 강하게 압축되어 있습니다.', // 'This image was already tightly compressed for the selected quality.'
    keepOriginal: '원본 유지', // 'Keep original'
  },
} as const;

// Per-tool workspace UI strings in Korean (South Korean) — COMPLETE (all 48 tools).
// Assembled from tool-ui-ko-batch1.ts … tool-ui-ko-batch6.ts (coordinator merge).
// Target: merged into src/locales/ko/ui.ts as the TOOL_UI_KO export.
// Korean (South Korean), polite -yo forms. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.
// NOTE: the '/image-metadata-viewer' gpsWarning string is split across JSX
// lines in the page file with an inline link button; gpsWarningLink
// carries that link's text. The '/target-file-size-compressor' table
// carries qualityLosslessPng (looked up by targetCompression.ts for
// the qualityLabel of PNG outputs) and uses the EN
// runtime placeholder names {bytes}/{qualityLabel}/{percent} — the
// only {size} left is maxSuffix, which the component replaces itself.

export const TOOL_UI_KO = {

  '/image-resizer': {
    comparisonTitlePrefix: '크기 조정 비교', // 'Resize Comparison'
    comparisonAfterLabel: '조정됨 (이후)', // 'Resized (After)'
    presetInstagramPost: '인스타그램 게시물 (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: '인스타그램 스토리 (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: '유튜브 썸네일 (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: '페이스북 커버 (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'X 헤더 (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: '이미지 크기 조정에 실패했습니다.', // 'Resize failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    resizeMode: '크기 조정 모드', // 'Resize Mode'
    modeByPixels: '픽셀 기준 (너비 × 높이)', // 'By Pixels (W × H)'
    modeByPercentage: '비율 기준 (%)', // 'By Percentage (%)'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: '너비 (px)', // 'Width (px)'
    heightLabel: '높이 (px)', // 'Height (px)'
    placeholderAuto: '자동', // placeholder 'Auto'
    aspectRatioLocked: '종횡비 잠금', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: '잠금 해제 (사용자 지정)', // 'Unlocked (Custom)'
    fitModeLabel: '맞춤 모드:', // 'Fit Mode:'
    fitContain: 'Contain (자르기 없음)', // 'Contain (No Crop)'
    fitCover: 'Cover (중앙 자르기)', // 'Cover (Center Crop)'
    fitStretchExact: '정확히 늘이기', // 'Stretch Exact'
    quickPresets: '빠른 소셜·웹 프리셋', // 'Quick Social & Web Presets'
    scalePercentage: '크기 조정 비율:', // 'Scale Percentage:'
    outputQuality: '출력 품질:', // 'Output Quality:'
    matteBg: '매트 배경:', // 'Matte BG:'
    resizing: '크기 조정 중…', // 'Resizing...'
    resizeAll: '모두 크기 조정 ({count})', // 'Resize All ({count})'
    clear: '지우기', // 'Clear'
    batchReady: '일괄 준비 완료', // 'Batch Ready'
    batchReadySingular: '다운로드할 준비가 된 크기 조정된 이미지 {count}장', // '{count} resized image ready to download'
    batchReadyPlural: '다운로드할 준비가 된 크기 조정된 이미지 {count}장', // '{count} resized images ready to download'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    resizedStatus: '크기 조정됨 ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 삭제', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: '형식 변환 비교', // 'Format Conversion Comparison'
    comparisonAfterLabel: '변환됨 (이후)', // 'Converted (After)'
    errorConversionFailed: '이미지 변환에 실패했습니다.', // 'Conversion failed.'
    errorUnsupportedFile: '지원되지 않거나 손상된 이미지 파일입니다.', // 'Unsupported or corrupted image file.'
    convertToFormat: '변환할 형식', // 'Convert To Format'
    formatWebp: 'WebP (가장 작은 웹용)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (범용)', // 'JPG (Universal)'
    formatPng: 'PNG (무손실 알파)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: '투명도 채우기 색상', // 'Transparency Fill Color'
    quality: '품질', // 'Quality'
    qualityLosslessPng: '무손실 PNG', // 'Lossless PNG'
    converting: '변환 중…', // 'Converting...'
    convertAll: '모두 변환 ({count})', // 'Convert All ({count})'
    clear: '지우기', // 'Clear'
    conversionComplete: '변환 완료', // 'Conversion Complete'
    filesConverted: '{count}개 파일이 {format}(으)로 변환됨', // '{count} files converted to {format}'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    convertedStatus: '{ext}(으)로 변환됨', // 'Converted to {ext}'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 삭제', // aria-label `Remove ${item.name}`
  },
  '/rotate-flip-image': {
    quickRotateFlip: '빠른 회전·뒤집기', // 'Quick Rotate & Flip'
    rotate90Left: '왼쪽으로 90° 회전', // 'Rotate 90° Left'
    rotate90Right: '오른쪽으로 90° 회전', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: '좌우 뒤집기', // 'Flip Horizontal'
    flipVertical: '상하 뒤집기', // 'Flip Vertical'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: '회전 각도:', // 'Rotation Angle:'
    resetTo0: '0°로 재설정', // 'Reset to 0°'
    applyAngle: '각도 적용', // 'Apply Angle'
    clear: '지우기', // 'Clear'
    batchReady: '일괄 준비 완료', // 'Batch Ready'
    transformedImagesReady: '변환된 이미지 {count}장 준비 완료', // '{count} transformed images ready'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: '{angle}° 회전됨', // 'Rotated {angle}°'
    flippedH: ' · 좌우 뒤집힘', // ' · Flipped H'
    flippedV: ' · 상하 뒤집힘', // ' · Flipped V'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeItem: '{name} 삭제', // 'Remove {name}' (aria-label)
    transformFailed: '이미지 변환에 실패했습니다.', // 'Transform failed.'
    corruptedImage: '손상되었거나 읽을 수 없는 이미지입니다.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: '회전·뒤집기 비교', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: '편집됨 (이후)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: '이미지를 놓아 PDF로 합치세요', // 'Drop images to combine into PDF'
    couldNotRead: '“{filename}”을(를) 읽을 수 없습니다. 유효한 이미지인지 확인하세요.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'PDF 생성에 실패했습니다.', // 'PDF generation failed.'
    encodingPage: '{total}페이지 중 {current}페이지 인코딩 중…', // 'Encoding page {current} of {total}...'
    generatingPdf: 'PDF 생성 중…', // 'Generating PDF...'
    pageSize: '페이지 크기', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'US Letter (8.5 × 11 in)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: '이미지 크기에 맞춤', // 'Fit to Image Size'
    orientation: '방향', // 'Orientation'
    orientationAuto: '자동 (사진에 맞춤)', // 'Auto (Match Photo)'
    orientationPortrait: '세로', // 'Portrait'
    orientationLandscape: '가로', // 'Landscape'
    margin: '여백', // 'Margin'
    marginNone: '여백 없음 (풀 블리드)', // 'No Margin (Full Bleed)'
    marginSmall: '작은 여백', // 'Small Margin'
    marginMedium: '중간 여백', // 'Medium Margin'
    imagePlacement: '이미지 배치', // 'Image Placement'
    placementContain: 'Contain (전체 이미지)', // 'Contain (Full Image)'
    placementCover: 'Cover (페이지 채우기)', // 'Cover (Fill Page)'
    pdfFilename: 'PDF 파일 이름', // 'PDF Filename'
    pdfImageQuality: 'PDF 이미지 품질:', // 'PDF Image Quality:'
    createDownloadPdf: 'PDF 생성 및 다운로드 ({count}p)', // 'Create & Download PDF ({count}p)'
    clear: '지우기', // 'Clear'
    pdfReady: 'PDF 준비 완료 ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: '페이지', // 'page'
    pagePlural: '페이지', // 'pages'
    downloadPdfAgain: 'PDF 다시 다운로드', // 'Download PDF Again'
    pageOrder: '페이지 순서 ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: '페이지', // 'Page' (in Page Order heading)
    pageOrderPlural: '페이지', // 'Pages' (in Page Order heading)
    movePageUp: '페이지를 위로 이동', // 'Move page up' (title)
    movePageDown: '페이지를 아래로 이동', // 'Move page down' (title)
    removePage: '페이지 삭제', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: '이미지를 놓아 EXIF·메타데이터를 확인하세요', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: '이미지 메타데이터를 파싱할 수 없습니다.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: '삽입된 메타데이터 발견 ({count}개 태그 유형)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'EXIF, GPS 또는 숨겨진 카메라 태그가 감지되지 않았습니다', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: '메타데이터 제거', // 'Strip Metadata'
    copyJson: 'JSON 복사', // 'Copy JSON'
    copiedJson: 'JSON 복사됨', // 'Copied JSON'
    exportJson: 'JSON 내보내기', // 'Export JSON'
    clear: '지우기', // 'Clear' (title)
    gpsDetected: 'GPS 위치 좌표 감지됨', // 'GPS Location Coordinates Detected'
    latitude: '위도:', // 'Latitude:'
    longitude: '경도:', // 'Longitude:'
    gpsWarning:
      '이 이미지를 그대로 공유하면 사진이 촬영된 위치가 노출될 수 있습니다. 온라인에 게시하기 전에 이미지 메타데이터 제거를 사용하세요.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.' — split across JSX lines in the page, with an inline link button
    gpsWarningLink: '이미지 메타데이터 제거', // inline link text inside the GPS warning: 'Remove Image Metadata' — extra key, not in the Spanish table
    extractedMetadata: '추출된 메타데이터 ({count}개 속성)', // 'Extracted Metadata ({count} properties)'
    privacyTag: '개인정보 태그', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: '사진을 놓아 EXIF, GPS, 메타데이터를 제거하세요', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: '메타데이터 제거에 실패했습니다.', // 'Failed to strip metadata.'
    strippingMethod: '제거 방법', // 'Stripping Method'
    losslessStrip: '무손실 바이너리 제거 (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: '전체 캔버스 다시 인코딩', // 'Full Canvas Re-encode'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: '다시 인코딩 품질 (WebP/HEIC 또는 전체 다시 인코딩에 사용):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: '정리 중…', // 'Cleaning...'
    recleanAll: '모두 다시 정리', // 'Re-clean All'
    clear: '지우기', // 'Clear'
    privacyVerified: '개인정보 확인됨', // 'Privacy Verified'
    cleanImagesReady: '메타데이터가 제거된 깨끗한 이미지 {count}장 준비 완료', // '{count} clean images ready with metadata stripped'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllCleanZip: '모두 깨끗하게 다운로드 (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: '메타데이터 태그 {before}개 제거됨 → {after}개 남음', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: '깨끗함 확인됨 (EXIF/GPS 태그 0개)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: '무손실 바이너리 제거', // 'Lossless binary strip'
    cleanCanvasExport: '깨끗한 캔버스 내보내기', // 'Clean Canvas export'
    scrubbing: 'EXIF·GPS 헤더 제거 중…', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: '깨끗한 파일 다운로드', // 'Download Clean'
    removeItem: '{name} 삭제', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: '로고 또는 아이콘을 여기에 놓으세요', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: '정사각형 PNG 또는 SVG 권장 · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: '파일 찾아보기', // 'browse file'
    errorGenerateFailed: '파비콘 패키지 생성에 실패했습니다.', // 'Failed to generate favicon package.'
    backgroundFill: '배경 채우기', // 'Background Fill'
    transparent: '투명', // 'Transparent'
    padding: '여백', // 'Padding'
    cornerRadius: '모서리 반경', // 'Corner Radius'
    tabPreviewAlt: '탭 미리보기', // alt 'Tab preview'
    myWebsite: '내 웹사이트', // 'My Website'
    darkTabPreviewAlt: '다크 탭 미리보기', // alt 'Dark tab preview'
    darkModeTab: '다크 모드 탭', // 'Dark Mode Tab'
    packingZip: 'ZIP 압축 중…', // 'Packing ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    clear: '지우기', // title 'Clear'
    downloadFaviconIco: 'favicon.ico 다운로드', // title 'Download favicon.ico'
    downloadFile: '{filename} 다운로드', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML <head> 스니펫', // 'HTML <head> Snippet'
    copied: '복사됨!', // 'Copied!'
    copyHtml: 'HTML 복사', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: '이미지를 놓거나 스크린샷을 붙여넣으세요 (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: '이미지를 불러올 수 없습니다.', // 'Unable to load image.'
    clickAnywhereToPin: '아무 곳이나 클릭하여 색상 고정', // 'Click anywhere to pin a color'
    newImage: '새 이미지', // 'New Image'
    pixelInspector: '픽셀 검사기', // 'Pixel Inspector'
    copyLabel: '{label} 복사', // title `Copy ${row.label}`
    pickedSwatches: '선택한 스워치 ({count})', // 'Picked Swatches ({count})'
    exportCss: 'CSS 내보내기', // 'Export CSS'
    clickPixelsHint: '이미지의 픽셀을 클릭하여 색상을 팔레트에 저장하세요.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: '클릭하여 선택하고 {hex} 복사', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: '이미지를 드롭해 정확한 치수와 비율을 검사하세요', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: '최소 너비 검사 (px)', // 'Min Width Check (px)'
    minHeightCheck: '최소 높이 검사 (px)', // 'Min Height Check (px)'
    placeholderMinWidth: '예: 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: '예: 630', // placeholder 'e.g. 630'
    exportCsv: 'CSV 내보내기', // 'Export CSV'
    exportJson: 'JSON 내보내기', // 'Export JSON'
    clear: '지우기', // 'Clear'
    headerImage: '이미지', // table header 'Image'
    headerDimensions: '치수', // table header 'Dimensions'
    headerAspectRatio: '종횡비', // table header 'Aspect Ratio'
    headerOrientation: '방향', // table header 'Orientation'
    headerSizeFormat: '크기 / 형식', // table header 'Size / Format'
    headerPrint300Dpi: '인쇄 @300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: '사양 검사', // table header 'Spec Check'
    orientationLandscape: '가로', // 'Landscape'
    orientationPortrait: '세로', // 'Portrait'
    orientationSquare: '정사각형', // 'Square'
    alphaTag: ' · 알파', // ' · Alpha'
    specPass: '통과', // 'Pass'
    specBelowMin: '최소 미달', // 'Below Min'
    csvYes: '예', // CSV value 'Yes'
    csvNo: '아니요', // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: '이미지를 드롭해 인터랙티브하게 자르세요', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: '이미지를 로드할 수 없습니다.', // 'Unable to load image.'
    errorCanvasContext: '캔버스 컨텍스트를 초기화할 수 없습니다.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: '자르기 내보내기에 실패했습니다.', // 'Crop export failed.'
    aspectFree: '자유', // aspect preset 'Free'
    selection: '선택:', // 'Selection:'
    zoomOut: '축소', // aria-label 'Zoom out'
    zoomIn: '확대', // aria-label 'Zoom in'
    removeImage: '이미지 제거', // aria-label 'Remove image'
    cropSourceAlt: '자르기 원본', // alt 'Crop source'
    originalLabel: '원본:', // 'Original:'
    cropOptions: '자르기 옵션', // 'Crop Options'
    selectFull: '전체 선택', // 'Select Full'
    aspectRatioPreset: '종횡비 프리셋', // 'Aspect Ratio Preset'
    cropWidth: '자르기 너비', // 'Crop Width'
    cropHeight: '자르기 높이', // 'Crop Height'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    cropping: '자르는 중…', // 'Cropping...'
    cropAndDownload: '자르기 및 다운로드', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: '이미지를 드롭해 텍스트 또는 로고 워터마크를 추가하세요', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: '이미지를 로드할 수 없습니다.', // 'Unable to load image.'
    errorUnableToLoadLogo: '로고 이미지를 로드할 수 없습니다.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: '워터마크 이미지 내보내기에 실패했습니다.', // 'Watermark export failed.'
    fallbackWatermarkText: '워터마크', // canvas fallback text 'Watermark'
    tiledPreview: '타일 미리보기', // 'Tiled Preview'
    dragToPosition: '이미지에서 드래그해 배치하세요', // 'Drag on Image to Position'
    changeImage: '이미지 변경', // 'Change Image'
    watermarkType: '워터마크 유형', // 'Watermark Type'
    modeText: '텍스트 워터마크', // 'Text Watermark'
    modeLogo: '로고 이미지', // 'Logo Image'
    watermarkTextLabel: '워터마크 텍스트', // 'Watermark Text'
    placeholderBrand: '© 귀하의 브랜드', // placeholder '© Your Brand'
    textColor: '텍스트 색상', // 'Text Color'
    size: '크기', // 'Size'
    uploadLogo: '로고 업로드 (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: '로고 이미지 변경', // 'Change Logo Image'
    logoWidth: '로고 너비', // 'Logo Width'
    opacity: '불투명도', // 'Opacity'
    rotation: '회전', // 'Rotation'
    tiledRepeatPattern: '타일 반복 패턴', // 'Tiled Repeat Pattern'
    tileSpacing: '타일 간격', // 'Tile Spacing'
    anchorPresets: '앵커 프리셋 (또는 이미지에서 드래그)', // 'Anchor Presets (or drag on image)'
    formatOrig: '원본', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    exporting: '내보내는 중…', // 'Exporting...'
    downloadWatermarked: '워터마크 이미지 다운로드', // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: '이미지를 드롭해 영역을 블러 또는 픽셀화하세요', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: '이미지를 로드할 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '내보내기에 실패했습니다.', // 'Export failed.'
    paintOverAreasBlur: '블러 처리할 영역 위에 칠하세요', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: '픽셀화할 영역 위에 칠하세요', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: '전체 이미지 미리보기', // 'Whole-Image Preview'
    undo: '실행 취소', // 'Undo'
    resetBrush: '브러시 초기화', // 'Reset Brush'
    removeImage: '이미지 제거', // aria-label 'Remove image'
    targetArea: '대상 영역', // 'Target Area'
    brushArea: '브러시 영역', // 'Brush Area'
    wholeImage: '전체 이미지', // 'Whole Image'
    effectStyle: '효과 스타일', // 'Effect Style'
    pixelateMosaic: '픽셀화 모자이크', // 'Pixelate Mosaic'
    smoothBlur: '부드러운 블러', // 'Smooth Blur'
    blurRadius: '블러 반경', // 'Blur Radius'
    mosaicBlockSize: '모자이크 블록 크기', // 'Mosaic Block Size'
    brushSize: '브러시 크기', // 'Brush Size'
    brushHint: '사진에서 직접 클릭하고 드래그해 얼굴, 텍스트, 자동차 번호판을 숨기세요.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: '원본', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    exporting: '내보내는 중…', // 'Exporting...'
    downloadImage: '이미지 다운로드', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: '이미지를 드롭해 사용자 지정 텍스트 오버레이를 추가하세요', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: '이미지를 로드할 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '내보내기에 실패했습니다.', // 'Export failed.'
    dragAnyText: '이미지에서 모든 텍스트를 직접 드래그하세요', // 'Drag Any Text Directly on Image'
    changeImage: '이미지 변경', // 'Change Image'
    textLayer: '텍스트 {index}', // tab `Text ${idx + 1}`
    add: '추가', // 'Add'
    deleteActiveTextLayer: '활성 텍스트 레이어 삭제', // aria-label 'Delete active text layer'
    textContent: '텍스트 내용 (여러 줄 지원)', // 'Text Content (multi-line supported)'
    font: '폰트', // 'Font'
    fontInter: 'Inter / 깔끔한 산세리프', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / 밈 디스플레이', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / 클래식 세리프', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / 고정폭', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / 둥근 산세리프', // font option 'Trebuchet / Rounded Sans'
    fill: '채우기', // 'Fill'
    toggleBold: '굵게 전환', // aria-label 'Toggle Bold'
    toggleItalic: '기울임꼴 전환', // aria-label 'Toggle Italic'
    size: '크기', // 'Size'
    rotation: '회전', // 'Rotation'
    textOutline: '텍스트 외곽선', // 'Text Outline'
    dropShadow: '그림자', // 'Drop Shadow'
    defaultLayerText: '두 번 탭하거나 텍스트를 편집하세요', // default layer text 'Double-tap or edit text'
    defaultCaption: '캡션 {index}', // default layer text `Caption ${index + 1}`
    formatOrig: '원본', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    exporting: '내보내는 중…', // 'Exporting...'
    downloadImageWithText: '텍스트가 있는 이미지 다운로드', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: '이미지를 드롭해 사용자 지정 테두리 또는 프레임을 추가하세요', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: '이미지를 로드할 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '내보내기에 실패했습니다.', // 'Export failed.'
    framedPreview: '테두리 미리보기', // 'Framed Preview'
    changeImage: '이미지 변경', // 'Change Image'
    quickFramePresets: '빠른 프레임 프리셋', // 'Quick Frame Presets'
    presetClassicWhite: '클래식 화이트', // preset 'Classic White'
    presetPolaroidFrame: '폴라로이드 프레임', // preset 'Polaroid Frame'
    presetDarkStudio: '다크 스튜디오', // preset 'Dark Studio'
    presetGradientGlow: '그라데이션 글로우', // preset 'Gradient Glow'
    borderStyle: '테두리 스타일', // 'Border Style'
    borderStyleSolid: '단색', // border type 'solid' (rendered capitalized)
    borderStyleGradient: '그라데이션', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: '폴라로이드', // border type 'polaroid' (rendered capitalized)
    borderColor: '테두리 색상', // 'Border Color'
    startColor: '시작 색상', // 'Start Color'
    endColor: '종료 색상', // 'End Color'
    gradientAngle: '그라데이션 각도', // 'Gradient Angle'
    borderSize: '테두리 크기', // 'Border Size'
    frameRadius: '프레임 반경', // 'Frame Radius'
    photoRadius: '사진 반경', // 'Photo Radius'
    dropShadow: '그림자', // 'Drop Shadow'
    shadowNone: '없음', // shadow level 'none' (rendered capitalized)
    shadowSoft: '부드러움', // shadow level 'soft' (rendered capitalized)
    shadowMedium: '보통', // shadow level 'medium' (rendered capitalized)
    shadowDeep: '깊음', // shadow level 'deep' (rendered capitalized)
    exporting: '내보내는 중…', // 'Exporting...'
    downloadFramedImage: '테두리 이미지 다운로드', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: '이미지를 드롭해 모서리를 둥글게 만드세요', // 'Drop an image to round its corners'
    errorUnableToLoadImage: '이미지를 로드할 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '둥근 이미지 내보내기에 실패했습니다.', // 'Failed to export rounded image.'
    liveCornerPreview: '실시간 모서리 미리보기', // 'Live Corner Preview'
    changeImage: '이미지 변경', // 'Change Image'
    cornerSettings: '모서리 설정', // 'Corner Settings'
    fullCirclePill: '전체 원 / 알약 모양', // 'Full Circle / Pill'
    individualPerCorner: '모서리별 개별 컨트롤', // 'Individual Per-Corner Control'
    allCornersRadius: '모든 모서리 반경', // 'All Corners Radius'
    cornerTopLeft: '좌상단', // per-corner label 'Top Left'
    cornerTopRight: '우상단', // per-corner label 'Top Right'
    cornerBottomLeft: '좌하단', // per-corner label 'Bottom Left'
    cornerBottomRight: '우하단', // per-corner label 'Bottom Right'
    outerCornerFill: '바깥쪽 모서리 채우기', // 'Outer Corner Fill'
    transparentPngWebp: '투명 (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: '단색', // 'Solid Color'
    outputFormat: '출력 형식', // 'Output Format'
    exporting: '내보내는 중…', // 'Exporting...'
    downloadRoundedImage: '둥글게 처리된 이미지 다운로드', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: '이미지를 드롭해 밝기를 조절하세요', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: '이미지를 로드할 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '편집한 이미지 내보내기에 실패했습니다.', // 'Failed to export adjusted image.'
    viewAfter: '이후', // view tab 'after' (rendered capitalized)
    viewBefore: '이전', // view tab 'before' (rendered capitalized)
    viewSplitCompare: '분할 비교', // view tab 'Split Compare'
    fullscreenCompare: '전체 화면 비교', // 'Fullscreen Compare'
    removeImage: '이미지 제거', // title/aria-label 'Remove image'
    beforeLabel: '이전', // split slider label 'Before'
    afterLabel: '이후', // split slider label 'After'
    originalPreviewAlt: '원본 미리보기', // alt 'Original preview'
    originalComparisonAlt: '원본 비교', // alt 'Original comparison'
    brightnessControls: '밝기 컨트롤', // 'Brightness Controls'
    reset: '초기화', // 'Reset'
    brightnessLevel: '밝기 수준', // 'Brightness Level'
    minLabel: '−100% 어둡게', // min label '-100% Darker'
    maxLabel: '+100% 밝게', // max label '+100% Brighter'
    quickPresets: '빠른 프리셋', // 'Quick Presets'
    presetDark: '어둡게 (-30%)', // preset 'Dark (-30%)'
    presetDim: '흐리게 (-15%)', // preset 'Dim (-15%)'
    presetOriginal: '원본 (0%)', // preset 'Original (0%)'
    presetBright: '밝게 (+15%)', // preset 'Bright (+15%)'
    presetVibrant: '선명하게 (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: '하이키 (+50%)', // preset 'High Key (+50%)'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    exporting: '내보내는 중…', // 'Exporting...'
    downloadEditedImage: '편집한 이미지 다운로드', // 'Download Edited Image'
    comparisonTitlePrefix: '밝기 비교', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: '편집됨 (이후)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: '이미지를 드롭해 대비를 조정하세요', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: '대비 비교', // 'Contrast Comparison'
    comparisonAfterLabel: '편집됨 (이후)', // 'Edited (After)'
    errorUnableToLoadImage: '이미지를 불러올 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '조정된 이미지를 내보내지 못했습니다.', // 'Failed to export adjusted image.'
    tabAfter: '이후', // tab 'after' (CSS-capitalized in code)
    tabBefore: '이전', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: '분할 비교', // tab 'split' renders 'Split Compare'
    fullscreenCompare: '전체 화면 비교', // 'Fullscreen Compare'
    removeImage: '이미지 제거', // title + aria-label 'Remove image'
    originalPreviewAlt: '원본 미리보기', // alt 'Original preview'
    originalComparisonAlt: '원본 비교', // alt 'Original comparison'
    splitBeforeLabel: '이전', // split slider left label 'Before'
    splitAfterLabel: '이후', // split slider right label 'After'
    controlsHeading: '대비 조절', // '{label} Controls' (contrast mode)
    reset: '재설정', // 'Reset'
    levelLabel: '대비 레벨', // '{label} Level' (contrast mode)
    minLabel: '-100% 평평함', // minLabel '-100% Flat'
    maxLabel: '+100% 고대비', // maxLabel '+100% High Contrast'
    quickPresets: '빠른 프리셋', // 'Quick Presets'
    presetSoft: '소프트 (-25%)', // 'Soft (-25%)'
    presetMuted: '뮤티드 (-10%)', // 'Muted (-10%)'
    presetOriginal: '원본 (0%)', // 'Original (0%)'
    presetCrisp: '크리스프 (+20%)', // 'Crisp (+20%)'
    presetPunchy: '펀치 (+40%)', // 'Punchy (+40%)'
    presetDramatic: '드라마틱 (+70%)', // 'Dramatic (+70%)'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    exporting: '내보내는 중…', // 'Exporting...'
    downloadEditedImage: '편집된 이미지 다운로드', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: '이미지를 드롭해 채도를 조정하세요', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: '채도 비교', // 'Saturation Comparison'
    comparisonAfterLabel: '편집됨 (이후)', // 'Edited (After)'
    errorUnableToLoadImage: '이미지를 불러올 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '조정된 이미지를 내보내지 못했습니다.', // 'Failed to export adjusted image.'
    tabAfter: '이후', // tab 'after' (CSS-capitalized in code)
    tabBefore: '이전', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: '분할 비교', // tab 'split' renders 'Split Compare'
    fullscreenCompare: '전체 화면 비교', // 'Fullscreen Compare'
    removeImage: '이미지 제거', // title + aria-label 'Remove image'
    originalPreviewAlt: '원본 미리보기', // alt 'Original preview'
    originalComparisonAlt: '원본 비교', // alt 'Original comparison'
    splitBeforeLabel: '이전', // split slider left label 'Before'
    splitAfterLabel: '이후', // split slider right label 'After'
    controlsHeading: '채도 조절', // '{label} Controls' (saturation mode)
    reset: '재설정', // 'Reset'
    levelLabel: '채도 레벨', // '{label} Level' (saturation mode)
    minLabel: '-100% 그레이스케일', // minLabel '-100% Grayscale'
    maxLabel: '+100% 비비드', // maxLabel '+100% Vivid'
    quickPresets: '빠른 프리셋', // 'Quick Presets'
    presetGrayscale: '그레이스케일 (-100%)', // 'Grayscale (-100%)'
    presetMuted: '뮤티드 (-40%)', // 'Muted (-40%)'
    presetOriginal: '원본 (0%)', // 'Original (0%)'
    presetRich: '리치 (+30%)', // 'Rich (+30%)'
    presetVivid: '비비드 (+60%)', // 'Vivid (+60%)'
    presetHyper: '하이퍼 (+90%)', // 'Hyper (+90%)'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    exporting: '내보내는 중…', // 'Exporting...'
    downloadEditedImage: '편집된 이미지 다운로드', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: '이미지를 드롭해 필터를 적용하세요', // 'Drop an image to apply filters'
    comparisonTitlePrefix: '필터 비교', // 'Filter Comparison'
    comparisonAfterLabel: '필터 적용됨', // 'Filtered'
    errorUnableToLoadImage: '이미지를 불러올 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '내보내기에 실패했습니다.', // 'Export failed.'
    filterPreview: '필터 미리보기', // 'Filter Preview'
    holdToViewOriginal: '길게 눌러 원본 보기', // 'Hold to View Original'
    compare: '비교', // 'Compare'
    removeImage: '이미지 제거', // aria-label 'Remove image'
    originalBadge: '원본', // 'Original' badge
    filterPresets: '필터 프리셋', // 'Filter Presets'
    reset: '재설정', // 'Reset'
    presetOriginal: '원본', // preset 'Original'
    presetGrayscale: '그레이스케일', // preset 'Grayscale'
    presetSepia: '세피아', // preset 'Sepia'
    presetVintage: '빈티지', // preset 'Vintage'
    presetWarm: '웜', // preset 'Warm'
    presetCool: '쿨', // preset 'Cool'
    presetHighContrast: '고대비', // preset 'High Contrast'
    presetMatteFade: '매트 페이드', // preset 'Matte Fade'
    presetDramatic: '드라마틱', // preset 'Dramatic'
    presetNoir: '흑백 느와르', // preset 'B&W Noir'
    presetGoldenHour: '골든 아워', // preset 'Golden Hour'
    presetInvert: '반전', // preset 'Invert'
    filterIntensity: '필터 강도', // 'Filter Intensity'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: '품질', // 'Quality'
    rendering: '렌더링 중…', // 'Rendering...'
    downloadFilteredImage: '필터 적용 이미지 다운로드', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: '이미지나 투명 PNG를 드롭해 배경을 추가하세요', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: '이미지를 불러올 수 없습니다.', // 'Unable to load image.'
    errorExportFailed: '내보내기에 실패했습니다.', // 'Export failed.'
    backgroundPreview: '배경 미리보기', // 'Background Preview'
    changeImage: '이미지 변경', // 'Change Image'
    outputDimensionsPrefix: '출력:', // 'Output:' (before '{w}×{h}px')
    backgroundType: '배경 유형', // 'Background Type'
    modeSolidColor: '단색', // 'Solid Color'
    modeGradient: '그라데이션', // 'Gradient'
    modeBlurredPhoto: '블러 사진', // 'Blurred Photo'
    selectColor: '{color} 색상 선택', // aria-label `Select color ${c}`
    color1: '색상 1', // 'Color 1'
    color2: '색상 2', // 'Color 2'
    angle: '각도', // 'Angle'
    backdropBlurRadius: '배경 블러 반경', // 'Backdrop Blur Radius'
    canvasAspectRatio: '캔버스 종횡비', // 'Canvas Aspect Ratio'
    aspectOriginal: '원본', // 'Orig'
    imageScale: '이미지 배율', // 'Image Scale'
    roundness: '둥글기', // 'Roundness'
    dropShadowBehindImage: '이미지 뒤 그림자', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: '내보내는 중…', // 'Exporting...'
    downloadImage: '이미지 다운로드', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: '이미지를 드롭해 그리드 타일이나 스트립으로 나누세요', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: '이미지를 불러올 수 없습니다.', // 'Unable to load image.'
    errorSplitFailed: '이미지를 나누지 못했습니다.', // 'Failed to split image.'
    errorCanvasContext: '캔버스 컨텍스트를 초기화할 수 없습니다.', // 'Unable to initialize canvas context.'
    cutLinePreview: '절단선 미리보기 ({rows} × {cols} = {tiles}개 타일)', // 'Cut-Line Preview ({rows} × {cols} = {tiles} tiles)'
    changeImage: '이미지 변경', // 'Change Image'
    splitGuideAlt: '분할 안내', // alt 'Split guide'
    splitLayout: '분할 레이아웃', // 'Split Layout'
    modeGrid: '그리드 (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: '가로 스트립', // 'Horiz. Strips'
    modeVerticalStrips: '세로 스트립', // 'Vert. Strips'
    rowsLabel: '행 (가로 절단)', // 'Rows (Horizontal Cuts)'
    columnsLabel: '열 (세로 절단)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 인스타그램', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 캐러셀', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 스트립', // preset '4×1 Strips'
    formatOriginal: '원본', // 'Orig'
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: '타일 품질', // 'Tile Quality'
    splittingImage: '이미지 나누는 중…', // 'Splitting Image...'
    splitIntoTiles: '{count}개 타일로 분할', // `Split into ${n} Tiles`
    splitComplete: '분할 완료', // 'Split Complete'
    tilesGenerated: '전체 해상도로 {count}개 이미지 타일 생성됨', // '{n} image tiles generated at full resolution'
    packagingZip: 'ZIP 압축 중…', // 'Packaging ZIP...'
    downloadAllTilesZip: '모든 타일 다운로드 (ZIP)', // 'Download All Tiles (ZIP)'
    download: '다운로드', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'DPI 메타데이터를 업데이트할 JPG나 PNG 이미지를 드롭하세요', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'DPI를 업데이트하지 못했습니다.', // 'Failed to update DPI.'
    targetDpiPresets: '목표 DPI 프리셋', // 'Target DPI Presets'
    preset72Screen: '72 DPI (화면)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (초안 인쇄)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (고품질 인쇄)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (보관용)', // '600 DPI (Archival)'
    customDpi: '사용자 지정 DPI', // 'Custom DPI'
    applyDpi: '{dpi} DPI 적용', // 'Apply {dpi} DPI'
    clear: '지우기', // 'Clear'
    batchReady: '일괄 준비 완료', // 'Batch Ready'
    filesUpdatedToDpi: '{count}개 파일이 {dpi} DPI로 업데이트됨', // '{n} files updated to {dpi} DPI'
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    beforeDpi: '이전: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: '이전: 설정 안 됨', // 'Before: Not set'
    verifiedDpi: '확인됨: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: '무손실 JPEG 헤더 업데이트', // 'Lossless JPEG Header Update'
    methodLosslessPng: '무손실 PNG pHYs 업데이트', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'pHYs DPI 포함 PNG로 변환됨', // 'Converted to PNG with pHYs DPI'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: '이미지를 드롭해 Base64로 인코딩하세요', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: '파일을 인코딩할 수 없습니다.', // 'Could not encode file.'
    errorFailedToRead: '이미지 파일을 읽지 못했습니다.', // 'Failed to read image file.'
    errorClipboardWriteFailed: '클립보드에 쓰지 못했습니다. 텍스트 상자에서 선택해 복사해 주세요.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: '파일:', // 'File:' (summary card)
    outputLabel: '출력:', // 'Output:' (summary card)
    charsLabel: '자', // 'chars' (summary card)
    encodeAnother: '다른 인코딩', // 'Encode Another'
    tabDataUrl: '데이터 URL', // tab 'Data URL'
    tabRawBase64: '원시 Base64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: '복사됨!', // 'Copied!'
    copyOutput: '출력 복사', // 'Copy Output'
    saveTxt: '.TXT로 저장', // 'Save .TXT'
  },
  '/base64-to-image': {
    pasteLabel: 'Base64 문자열이나 데이터 URL 붙여넣기', // 'Paste Base64 String or Data URL'
    clear: '지우기', // 'Clear'
    inputPlaceholder: 'data:image/png;base64,iVBORw0KGgo... 또는 원시 Base64 바이트를 여기에 붙여 넣으세요', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'PNG, JPG, WebP, GIF, SVG, BMP, ICO Base64 페이로드를 지원합니다', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: '디코딩 중…', // 'Decoding...'
    decodeImage: '이미지 디코딩', // 'Decode Image'
    decodingBytes: 'Base64 바이트 디코딩 중…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: '지원되지 않는 데이터 URI 인코딩입니다. base64 페이로드(`;base64,`)가 필요합니다.', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: '입력에 잘못된 Base64 문자가 포함되어 있습니다.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: '디코딩된 바이트가 브라우저에서 읽을 수 있는 유효한 이미지를 형성하지 않습니다.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Base64 문자열을 디코딩할 수 없습니다.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: '디코딩된 Base64 미리보기', // alt 'Decoded Base64 preview'
    validImageDecoded: '유효한 이미지 디코딩됨', // 'Valid Image Decoded'
    detectedFormat: '감지된 형식', // 'Detected Format'
    binarySize: '이진 크기', // 'Binary Size'
    dimensions: '치수', // 'Dimensions'
    downloadFormat: '다운로드 형식', // 'Download Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: '이미지 파일 다운로드', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: '주요 색상 팔레트를 추출할 이미지를 드롭하세요', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: '이미지를 불러올 수 없습니다.', // 'Unable to load image.'
    errorClipboardDenied: '클립보드 권한이 거부되었습니다.', // 'Clipboard permission denied.'
    extractedPalette: '추출된 팔레트({count}가지 색상)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: '원본', // alt 'Source'
    changeImage: '변경', // 'Change'
    numberOfColors: '색상 수', // 'Number of Colors'
    colorsCount: '{count}가지 색상', // '{count} colors'
    copyCssVariables: 'CSS 변수 복사', // 'Copy CSS Variables'
    copiedCss: 'CSS 복사됨!', // 'Copied CSS!'
    copyJson: 'JSON 복사', // 'Copy JSON'
    copiedJson: 'JSON 복사됨!', // 'Copied JSON!'
    downloadPalettePng: '팔레트 PNG 다운로드', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: '애니메이션 GIF를 만들 이미지 2장 이상을 드롭하세요', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: '애니메이션 GIF를 인코딩하지 못했습니다.', // 'Failed to encode animated GIF.'
    skippedFile: '"{name}" 건너뜀: {error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: '"{name}" 건너뜀.', // 'Skipped "{name}".'
    generatedGif: '생성된 GIF({width}×{height}px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: '실시간 타이밍 미리보기 · 프레임 {current}/{total}', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: '생성된 애니메이션 GIF', // alt 'Generated animated GIF'
    pause: '일시 정지', // 'Pause'
    play: '재생', // 'Play'
    backToFrameEditor: '프레임 편집기로 돌아가기', // 'Back to Frame Editor'
    clearAllFrames: '모든 프레임 지우기', // aria-label 'Clear all frames'
    largeGifWarning: '큰 GIF 경고({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      '5~15MB를 초과하는 GIF는 메시지 앱에서 업로드가 느리거나 엄격한 플랫폼 제한을 충족하지 못할 수 있습니다. 출력 너비/높이를 줄이거나(예: 480px), 품질을 낮추거나, 프레임을 제거해 보세요.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: '애니메이션 GIF 다운로드({size})', // 'Download Animated GIF ({size})'
    animationSettings: '애니메이션 설정', // 'Animation Settings'
    defaultFrameDuration: '기본 프레임 지속 시간', // 'Default Frame Duration'
    frameDurationValue: '{ms}ms({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS(1000ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS(500ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS(200ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS(100ms)', // '10 FPS (100ms)'
    loopBehavior: '반복 동작', // 'Loop Behavior'
    loopForever: '무한 반복', // 'Forever'
    loopSetLoops: '반복 횟수 설정', // 'Set Loops'
    loopPlayOnce: '한 번 재생', // 'Play Once'
    totalPlays: '총 재생 횟수', // 'Total Plays'
    outputDimensions: '출력 크기(px)', // 'Output Dimensions (px)'
    ratioLocked: '비율 잠금', // 'Ratio Locked'
    ratioUnlocked: '잠금 해제', // 'Unlocked'
    widthLabel: '너비', // 'Width'
    heightLabel: '높이', // 'Height'
    sizePreset480: '480px', // '480px'
    sizePreset640: '640px', // '640px'
    sizePreset800: '800px', // '800px'
    sizePresetOriginal: '원본', // 'Original'
    frameFit: '프레임 맞춤', // 'Frame Fit'
    fitContain: 'Contain', // 'contain'
    fitCover: 'Cover', // 'cover'
    backgroundMatte: '배경 매트', // 'Background Matte'
    colorPaletteQuality: '색상 팔레트 품질', // 'Color Palette Quality'
    encodingGif: 'GIF 인코딩 중({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: '애니메이션 GIF 생성', // 'Generate Animated GIF'
    reEncodeAnimatedGif: '애니메이션 GIF 다시 인코딩', // 'Re-Encode Animated GIF'
    framesHeading: '프레임({count}) — 드래그하거나 화살표로 재정렬', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      '프레임별 지연 시간을 비워 두면 전체 프레임 지속 시간 {ms}ms가 적용됩니다.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: '프레임 추가', // 'Add Frames'
    delayMsLabel: '지연 시간(ms):', // 'Delay (ms):'
    moveEarlier: '앞으로 이동', // title 'Move earlier'
    moveLater: '뒤로 이동', // title 'Move later'
    duplicateFrame: '프레임 복제', // title 'Duplicate frame'
    removeFrame: '프레임 제거', // title 'Remove frame'
    moveFrameEarlierAria: '프레임 {n} 앞으로 이동', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: '프레임 {n} 뒤로 이동', // aria-label `Move frame ${n} later`
    duplicateFrameAria: '프레임 {n} 복제', // aria-label `Duplicate frame ${n}`
    removeFrameAria: '프레임 {n} 제거', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: '사진 콜라주를 만들 이미지 2~9장을 드롭하세요', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: '콜라주를 내보내지 못했습니다.', // 'Failed to export collage.'
    couldNotLoadFile: '"{name}"을(를) 불러올 수 없습니다: {error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: '"{name}"을(를) 불러올 수 없습니다.', // 'Could not load "{name}".'
    collagePreview: '콜라주 미리보기({width}×{height}px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: '모두 지우기', // 'Clear All'
    rearrangeCells: '셀 재정렬(드래그하거나 두 셀을 탭해 교체)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      '셀 카드를 다른 슬롯에 드래그하면 사진 순서가 즉시 바뀝니다.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: '사진 추가', // 'Add Photos'
    cellLabel: '셀 {n}', // 'Cell {n}'
    slotLabel: '슬롯 {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: '셀 {n} 뒤로 이동', // aria-label `Move cell ${n} back`
    moveCellForwardAria: '셀 {n} 앞으로 이동', // aria-label `Move cell ${n} forward`
    clearCellAria: '셀 {n} 비우기', // aria-label `Clear cell ${n}`
    addPhoto: '사진 추가', // 'Add Photo'
    collageLayout: '콜라주 레이아웃', // 'Collage Layout'
    layout2x2: '2×2 그리드', // '2×2 Grid'
    layout3x3: '3×3 그리드', // '3×3 Grid'
    layoutVertical: '세로 스트립', // 'Vertical Strip'
    layoutHorizontal: '가로 스트립', // 'Horizontal Strip'
    cellProportionsSpacing: '셀 비율 및 간격', // 'Cell Proportions & Spacing'
    equalCells: '셀 균등', // 'Equal Cells'
    colSplit: '열 분할', // 'Col Split'
    centerCol: '가운데 열', // 'Center Col'
    rowSplit: '행 분할', // 'Row Split'
    centerRow: '가운데 행', // 'Center Row'
    leadCellEmphasis: '주요 셀 강조', // 'Lead Cell Emphasis'
    gapSpacing: '셀 간격', // 'Gap Spacing'
    cellRadius: '셀 반경', // 'Cell Radius'
    backgroundColor: '배경색', // 'Background Color'
    backgroundSwatchAria: '배경 {color}', // aria-label `Background ${c}`
    imageFit: '이미지 맞춤', // 'Image Fit'
    fitCover: 'Cover', // 'cover'
    fitContain: 'Contain', // 'contain'
    outputSize: '출력 크기(px)', // 'Output Size (px)'
    widthLabel: '너비', // 'Width'
    heightLabel: '높이', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG(무손실)', // 'PNG (Lossless)'
    jpgQuality: 'JPG 품질', // 'JPG Quality'
    exportingCollage: '콜라주 내보내는 중…', // 'Exporting Collage...'
    downloadCollage: '콜라주 다운로드({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    errorTargetFailed: '목표 크기 압축에 실패했습니다.', // 'Target compression failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '목표 최대 파일 크기', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} 최대)', // '({bytes} max)'
    maxSuffix: '({size})', // '({size})' — only renders when allowCustomTarget is true (Batch 5 page); the only key keeping {size}
    needDifferentTarget: '다른 목표 KB가 필요하신가요?', // 'Need a different target KB?'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '품질 감소만으로 {target}에 맞지 않으면 스마트 크기 조정을 허용합니다', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}(으)로 압축', // 'Compress to {target}'
    optimizing: '최적화 중…', // 'Optimizing...'
    clear: '지우기', // 'Clear'
    losslessPngSelected: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngTitle: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '목표 압축 요약 · 목표 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}개 중 {achieved}개 {images}가 {target} 목표를 달성했습니다', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '이미지', // 'image'
    imagePlural: '이미지', // 'images'
    summaryMissed: ' · {missed}개는 정직하게 맞출 수 없었습니다(아래 세부 정보 참조)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '총 절약: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '총 절약: {bytes}(커짐 {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(커짐 {grew})', // '(grew by {grew})'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    metricOriginal: '원본', // 'Original' (metric label)
    metricOutput: '결과', // 'Output' (metric label)
    metricSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    metricReduction: '축소율', // 'Reduction' (metric label)
    metricSizeChange: '크기 변화', // 'Size Change' (metric label)
    columnOriginal: '원본', // 'Original' (metric label)
    columnOutput: '결과', // 'Output' (metric label)
    columnSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    columnReduction: '축소율', // 'Reduction' (metric label)
    columnSizeChange: '크기 변화', // 'Size Change' (metric label)
    underTarget: '{target} 미만({bytes})', // 'Under {target} ({bytes})'
    targetMissed: '목표 미달 — {bytes}', // 'Target missed — {bytes}'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} 커짐 — 다시 인코딩한 파일이 원본보다 큽니다.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '원본 유지', // 'Keep original'
    keptOriginalNote: '다시 인코딩하면 파일이 커지므로 원본 파일을 유지했습니다.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP(투명도 유지)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '원본 파일이 이미 {target} 미만이었고, 다시 인코딩하면 {bytes} 커졌습니다. "원본 유지"를 사용하거나 더 작은 출력을 위해 WebP/JPG로 전환하세요.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '전체 {width}×{height}px 해상도에서 목표를 달성했습니다({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}px({percent}%)로 크기 조정해 {qualityLabel}에서 목표를 달성했습니다.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '무손실 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 품질', // '{quality}% quality'
    statusCannotPng:
      '무손실 PNG로는 {target}에 도달할 수 없습니다(달성 가능한 최소 크기: {width}×{height}px에서 {bytes}). 더 작은 크기에 도달하려면 출력 형식을 JPG나 WebP로 전환하세요.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '전체 {width}×{height}px 크기에서는 {target}에 도달할 수 없습니다(최소 품질 크기: {bytes}). 크기를 더 줄이려면 "크기 조정 허용"을 활성화하세요.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '목표 압축({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '압축됨({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    errorTargetFailed: '목표 크기 압축에 실패했습니다.', // 'Target compression failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '목표 최대 파일 크기', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} 최대)', // '({bytes} max)'
    maxSuffix: '({size})', // '({size})' — only renders when allowCustomTarget is true (Batch 5 page); the only key keeping {size}
    needDifferentTarget: '다른 목표 KB가 필요하신가요?', // 'Need a different target KB?'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '품질 감소만으로 {target}에 맞지 않으면 스마트 크기 조정을 허용합니다', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}(으)로 압축', // 'Compress to {target}'
    optimizing: '최적화 중…', // 'Optimizing...'
    clear: '지우기', // 'Clear'
    losslessPngSelected: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngTitle: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '목표 압축 요약 · 목표 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}개 중 {achieved}개 {images}가 {target} 목표를 달성했습니다', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '이미지', // 'image'
    imagePlural: '이미지', // 'images'
    summaryMissed: ' · {missed}개는 정직하게 맞출 수 없었습니다(아래 세부 정보 참조)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '총 절약: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '총 절약: {bytes}(커짐 {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(커짐 {grew})', // '(grew by {grew})'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    metricOriginal: '원본', // 'Original' (metric label)
    metricOutput: '결과', // 'Output' (metric label)
    metricSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    metricReduction: '축소율', // 'Reduction' (metric label)
    metricSizeChange: '크기 변화', // 'Size Change' (metric label)
    columnOriginal: '원본', // 'Original' (metric label)
    columnOutput: '결과', // 'Output' (metric label)
    columnSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    columnReduction: '축소율', // 'Reduction' (metric label)
    columnSizeChange: '크기 변화', // 'Size Change' (metric label)
    underTarget: '{target} 미만({bytes})', // 'Under {target} ({bytes})'
    targetMissed: '목표 미달 — {bytes}', // 'Target missed — {bytes}'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} 커짐 — 다시 인코딩한 파일이 원본보다 큽니다.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '원본 유지', // 'Keep original'
    keptOriginalNote: '다시 인코딩하면 파일이 커지므로 원본 파일을 유지했습니다.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP(투명도 유지)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '원본 파일이 이미 {target} 미만이었고, 다시 인코딩하면 {bytes} 커졌습니다. "원본 유지"를 사용하거나 더 작은 출력을 위해 WebP/JPG로 전환하세요.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '전체 {width}×{height}px 해상도에서 목표를 달성했습니다({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}px({percent}%)로 크기 조정해 {qualityLabel}에서 목표를 달성했습니다.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '무손실 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 품질', // '{quality}% quality'
    statusCannotPng:
      '무손실 PNG로는 {target}에 도달할 수 없습니다(달성 가능한 최소 크기: {width}×{height}px에서 {bytes}). 더 작은 크기에 도달하려면 출력 형식을 JPG나 WebP로 전환하세요.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '전체 {width}×{height}px 크기에서는 {target}에 도달할 수 없습니다(최소 품질 크기: {bytes}). 크기를 더 줄이려면 "크기 조정 허용"을 활성화하세요.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '목표 압축({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '압축됨({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    errorTargetFailed: '목표 크기 압축에 실패했습니다.', // 'Target compression failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '목표 최대 파일 크기', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} 최대)', // '({bytes} max)'
    maxSuffix: '({size})', // '({size})' — only renders when allowCustomTarget is true (Batch 5 page); the only key keeping {size}
    needDifferentTarget: '다른 목표 KB가 필요하신가요?', // 'Need a different target KB?'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '품질 감소만으로 {target}에 맞지 않으면 스마트 크기 조정을 허용합니다', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}(으)로 압축', // 'Compress to {target}'
    optimizing: '최적화 중…', // 'Optimizing...'
    clear: '지우기', // 'Clear'
    losslessPngSelected: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngTitle: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '목표 압축 요약 · 목표 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}개 중 {achieved}개 {images}가 {target} 목표를 달성했습니다', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '이미지', // 'image'
    imagePlural: '이미지', // 'images'
    summaryMissed: ' · {missed}개는 정직하게 맞출 수 없었습니다(아래 세부 정보 참조)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '총 절약: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '총 절약: {bytes}(커짐 {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(커짐 {grew})', // '(grew by {grew})'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    metricOriginal: '원본', // 'Original' (metric label)
    metricOutput: '결과', // 'Output' (metric label)
    metricSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    metricReduction: '축소율', // 'Reduction' (metric label)
    metricSizeChange: '크기 변화', // 'Size Change' (metric label)
    columnOriginal: '원본', // 'Original' (metric label)
    columnOutput: '결과', // 'Output' (metric label)
    columnSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    columnReduction: '축소율', // 'Reduction' (metric label)
    columnSizeChange: '크기 변화', // 'Size Change' (metric label)
    underTarget: '{target} 미만({bytes})', // 'Under {target} ({bytes})'
    targetMissed: '목표 미달 — {bytes}', // 'Target missed — {bytes}'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} 커짐 — 다시 인코딩한 파일이 원본보다 큽니다.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '원본 유지', // 'Keep original'
    keptOriginalNote: '다시 인코딩하면 파일이 커지므로 원본 파일을 유지했습니다.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP(투명도 유지)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '원본 파일이 이미 {target} 미만이었고, 다시 인코딩하면 {bytes} 커졌습니다. "원본 유지"를 사용하거나 더 작은 출력을 위해 WebP/JPG로 전환하세요.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '전체 {width}×{height}px 해상도에서 목표를 달성했습니다({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}px({percent}%)로 크기 조정해 {qualityLabel}에서 목표를 달성했습니다.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '무손실 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 품질', // '{quality}% quality'
    statusCannotPng:
      '무손실 PNG로는 {target}에 도달할 수 없습니다(달성 가능한 최소 크기: {width}×{height}px에서 {bytes}). 더 작은 크기에 도달하려면 출력 형식을 JPG나 WebP로 전환하세요.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '전체 {width}×{height}px 크기에서는 {target}에 도달할 수 없습니다(최소 품질 크기: {bytes}). 크기를 더 줄이려면 "크기 조정 허용"을 활성화하세요.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '목표 압축({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '압축됨({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    uploadTitleTemplate: '이미지를 드롭해 {target} 미만으로 압축하세요', // 'Drop images to compress under {target}'
    errorTargetFailed: '목표 크기 압축에 실패했습니다.', // 'Target compression failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: '목표 최대 파일 크기', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} 최대)', // '({bytes} max)'
    maxSuffix: '({size})', // '({size})' — only renders when allowCustomTarget is true (Batch 5 page); the only key keeping {size}
    needDifferentTarget: '다른 목표 KB가 필요하신가요?', // 'Need a different target KB?'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      '품질 감소만으로 {target}에 맞지 않으면 스마트 크기 조정을 허용합니다', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      '무손실 PNG가 {target}에 깔끔하게 도달하지 못하면 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    compressToTarget: '{target}(으)로 압축', // 'Compress to {target}'
    optimizing: '최적화 중…', // 'Optimizing...'
    clear: '지우기', // 'Clear'
    losslessPngSelected: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngTitle: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 크기 축소에 전적으로 의존합니다. 큰 사진의 경우 JPG나 WebP를 선택해 엄격한 KB 제한에 도달하면서도 선명하게 유지하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: '목표 압축 요약 · 목표 ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total}개 중 {achieved}개 {images}가 {target} 목표를 달성했습니다', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: '이미지', // 'image'
    imagePlural: '이미지', // 'images'
    summaryMissed: ' · {missed}개는 정직하게 맞출 수 없었습니다(아래 세부 정보 참조)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: '총 절약: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: '총 절약: {bytes}(커짐 {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(커짐 {grew})', // '(grew by {grew})'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    metricOriginal: '원본', // 'Original' (metric label)
    metricOutput: '결과', // 'Output' (metric label)
    metricSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    metricReduction: '축소율', // 'Reduction' (metric label)
    metricSizeChange: '크기 변화', // 'Size Change' (metric label)
    columnOriginal: '원본', // 'Original' (metric label)
    columnOutput: '결과', // 'Output' (metric label)
    columnSpaceSaved: '절약한 공간', // 'Space Saved' (metric label)
    columnReduction: '축소율', // 'Reduction' (metric label)
    columnSizeChange: '크기 변화', // 'Size Change' (metric label)
    underTarget: '{target} 미만({bytes})', // 'Under {target} ({bytes})'
    targetMissed: '목표 미달 — {bytes}', // 'Target missed — {bytes}'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} 커짐 — 다시 인코딩한 파일이 원본보다 큽니다.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: '원본 유지', // 'Keep original'
    keptOriginalNote: '다시 인코딩하면 파일이 커지므로 원본 파일을 유지했습니다.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      '무손실 PNG가 자동으로 {format}(으)로 변환되어 {target} 미만에서 더 높은 해상도를 유지합니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP(투명도 유지)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      '원본 파일이 이미 {target} 미만이었고, 다시 인코딩하면 {bytes} 커졌습니다. "원본 유지"를 사용하거나 더 작은 출력을 위해 WebP/JPG로 전환하세요.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      '원본 파일이 이미 {target} 미만이었습니다. {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '전체 {width}×{height}px 해상도에서 목표를 달성했습니다({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height}px({percent}%)로 크기 조정해 {qualityLabel}에서 목표를 달성했습니다.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: '무손실 PNG', // 'lossless PNG'
    qualityPercent: '{quality}% 품질', // '{quality}% quality'
    statusCannotPng:
      '무손실 PNG로는 {target}에 도달할 수 없습니다(달성 가능한 최소 크기: {width}×{height}px에서 {bytes}). 더 작은 크기에 도달하려면 출력 형식을 JPG나 WebP로 전환하세요.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '전체 {width}×{height}px 크기에서는 {target}에 도달할 수 없습니다(최소 품질 크기: {bytes}). 크기를 더 줄이려면 "크기 조정 허용"을 활성화하세요.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩한 가장 작은 출력은 {bytes}({width}×{height}px, {quality}% 품질)입니다. 더 큰 목표 크기를 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: '목표 압축({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: '압축됨({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: '대량 압축을 위해 수십 장의 이미지를 드롭하세요', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: '압축에 실패했습니다.', // 'Compression failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: '빠른 배치 프로필:', // 'Quick Batch Profiles:'
    profileWebFast: '웹 고속(WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: '이메일/공유(JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: '고화질(85%)', // 'High Fidelity (85%)'
    compressingBatch: '배치를 로컬에서 압축하는 중…', // 'Compressing batch locally...'
    // CompressionControls, ResultsList, ComparisonModal이 렌더링하는 문자열은
    // 공유 사전(i18n-ko.ts)의 compressionControls, resultsList,
    // comparisonModal 섹션에서 가져옴 — Batch 1에서 이미 번역됨.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: '{target} 이하로 압축할 이미지를 드롭하세요', // `Drop images to compress under ${targetLabel}`
    uploadTitle: '{target} 이하로 압축할 이미지를 드롭하세요', // 'Drop images to compress under {target}' — fallback key in TargetSizeCompressorTool
    targetMaxFileSize: '목표 최대 파일 크기', // 'Target Maximum File Size'
    targetNumberAria: '목표 파일 크기 숫자', // aria-label 'Target file size number'
    maxSuffix: '({size} 최대)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetMaxSuffix: '({bytes} 최대)', // '({bytes} max)' — fallback key in TargetSizeCompressorTool
    needDifferentTarget: '다른 KB 목표가 필요하신가요?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged (format name)
    formatPng: 'PNG', // 'PNG' — unchanged (format name)
    formatWebpTransparency: 'WebP(투명도 유지)', // 'WebP (transparency preserved)'
    allowDownscale: '품질 축소만으로 {target} 이하에 맞지 않을 경우 지능형 크기 조정을 허용합니다', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: '무손실 PNG이 {target}에 깔끔하게 도달하지 못할 때 큰 PNG를 자동으로 WebP/JPG로 변환합니다', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:'
    transparentPngMatte: '투명 PNG 매트 색상:', // 'Transparent PNG matte color:' — fallback key in TargetSizeCompressorTool
    losslessPngTitle: '무손실 PNG 선택됨:', // 'Lossless PNG selected:'
    losslessPngSelected: '무손실 PNG 선택됨:', // 'Lossless PNG selected:' — fallback key in TargetSizeCompressorTool
    losslessPngNote: 'PNG는 품질 슬라이더를 무시하므로 크기 축소는 픽셀 치수 축소에만 엄격히 의존합니다. 큰 사진은 엄격한 KB 한도에 도달하면서 선명하게 유지하려면 JPG나 WebP를 선택하세요.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    qualityPercent: '{quality}% 품질', // '{quality}% quality'
    compressToTarget: '{target}로 압축', // 'Compress to {targetLabel}'
    optimizing: '최적화 중…', // 'Optimizing...'
    clear: '지우기', // 'Clear'
    targetSummary: '목표 압축 요약 · 목표 ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{total}개 중 {achieved}개 {images}가 {target} 목표를 달성했습니다', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: '이미지', // 'image'
    imagePlural: '이미지', // 'images'
    summaryMissed: '· {missed}개는 정직하게 들어갈 수 없었습니다(아래 세부 정보)', // '{missed} could not honestly fit (details below)'
    totalSaved: '총 절약: {bytes}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '({grew} 증가)', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    underTarget: '{target} 이하({bytes})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: '목표 미달 — {bytes}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: '원본', // 'Original'
    columnOutput: '출력', // 'Output'
    columnSpaceSaved: '절약된 공간', // 'Space Saved'
    columnReduction: '축소율', // 'Reduction'
    columnSizeChange: '크기 변화', // 'Size Change'
    metricOriginal: '원본', // 'Original' — fallback key in TargetSizeCompressorTool
    metricOutput: '출력', // 'Output' — fallback key in TargetSizeCompressorTool
    metricSpaceSaved: '절약된 공간', // 'Space Saved' — fallback key in TargetSizeCompressorTool
    metricReduction: '축소율', // 'Reduction' — fallback key in TargetSizeCompressorTool
    metricSizeChange: '크기 변화', // 'Size Change' — fallback key in TargetSizeCompressorTool
    grewBy: '{bytes} 커짐 — 다시 인코딩한 결과가 원본보다 큽니다.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngNote: '사진 같은 PNG에는 WebP나 JPG가 보통 더 작습니다.', // 'WebP or JPG is usually smaller for photo-like PNGs.' — fallback key in TargetSizeCompressorTool
    keepOriginal: '원본 유지', // 'Keep original'
    keptOriginalNote: '다시 인코딩하면 더 커지므로 원본 파일을 유지했습니다.', // 'Kept original file because re-encoding made it larger.'
    qualityLosslessPng: '무손실 PNG', // 'lossless PNG' — qualityLabel in src/utils/targetCompression.ts for PNG outputs (prevents an English leak)
    statusAlreadyUnder: '원본 파일이 이미 {target} 이하이므로 {quality}% 품질로 깔끔하게 내보냈습니다.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnderGrew: '원본 파일이 이미 {target} 이하였으나 다시 인코딩하면서 {bytes} 커졌습니다. "원본 유지"를 사용하거나 더 작은 출력을 위해 WebP/JPG로 전환하세요.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusMetFull: '전체 {width}×{height}px 해상도에서 목표를 달성했습니다({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: '{width}×{height}px({percent}%)로 스케일링하고 {qualityLabel}에서 목표를 달성했습니다.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    statusCannotPng: '무손실 PNG으로는 {target}에 도달할 수 없습니다(달성 가능한 최소 크기: {width}×{height}px에서 {bytes}). 더 작은 크기에 도달하려면 출력 형식을 JPG나 WebP로 전환하세요.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: '전체 {width}×{height}px 치수에서 {target}에 도달할 수 없습니다(최소 품질 크기는 {bytes}). 치수를 더 줄이려면 "크기 조정 허용"을 활성화하세요.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: '요청한 {target} 목표에 깔끔하게 도달할 수 없습니다. 정직하게 인코딩된 가장 작은 출력은 {bytes}({width}×{height}px, 품질 {quality}%)입니다. 더 큰 목표 값을 시도해 보세요.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: '무손실 PNG이 {target} 이하에서 더 높은 해상도를 유지하기 위해 자동으로 {format}(으)로 변환되었습니다.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    errorTargetFailed: '목표 압축에 실패했습니다.', // 'Target compression failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: '목표 압축({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: '압축됨({bytes})', // `Compressed (${formatBytes(compressedSize)})`
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: '대량 크기 조정을 위해 여러 이미지를 드롭하세요', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: '대량 크기 조정 전략', // 'Batch Resize Strategy'
    strategyBounding: '최대 가로×세로 맞춤', // 'Fit Max W × H'
    strategyWidth: '균일 너비', // 'Uniform Width'
    strategyExact: '정확한 가로×세로', // 'Exact W × H'
    strategyPercentage: '백분율(%)', // 'Percentage (%)'
    outputFormat: '출력 형식', // 'Output Format'
    formatOriginal: '원본', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: '모든 이미지 크기 조정:', // 'Scale All Images:'
    maxWidth: '최대 너비(px)', // 'Max Width (px)'
    targetWidth: '목표 너비(px)', // 'Target Width (px)'
    exactWidth: '정확한 너비(px)', // 'Exact Width (px)'
    maxHeight: '최대 높이(px)', // 'Max Height (px)'
    exactHeight: '정확한 높이(px)', // 'Exact Height (px)'
    doNotEnlarge: '작은 이미지를 확대하지 않음', // 'Do not enlarge smaller images'
    fitMode: '맞춤 모드', // 'Fit Mode'
    fitContain: '맞춤', // 'Contain'
    fitCover: '채우기', // 'Cover'
    fitStretch: '늘이기', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: '블로그 1200px', // 'Blog 1200px'
    presetEcommerce: '이커머스 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: '썸네일 600px', // 'Thumbnail 600px'
    quality: '품질:', // 'Quality:'
    matteBg: '매트 배경:', // 'Matte BG:'
    resizingProgress: '크기 조정 중({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: '대량 크기 조정({count})', // 'Bulk Resize ({items.length})'
    clear: '지우기', // 'Clear'
    bulkResizeComplete: '대량 크기 조정 완료', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count}개 이미지가 조정되어 준비됨', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count}개 이미지가 조정되어 준비됨', // '{count} images resized and ready'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: '대량 크기 조정에 실패했습니다.', // 'Batch resize failed.'
    errorCorruptedFile: '손상되었거나 읽을 수 없는 이미지 파일입니다.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: '대량 크기 조정 비교', // 'Bulk Resize Comparison'
    comparisonAfterLabel: '크기 조정됨(이후)', // 'Resized (After)'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: '형식을 일괄 변환하기 위해 여러 이미지를 드롭하세요', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: '일괄 변환 형식', // 'Convert Batch To Format'
    formatWebp: 'WebP(웹 최소 용량)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG(범용)', // 'JPG (Universal)'
    formatPng: 'PNG(무손실 알파)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: '선택적 파일 이름 접미사', // 'Optional Filename Suffix'
    placeholderSuffix: '예: _web', // placeholder 'e.g. _web'
    transparentFill: '투명 채우기', // 'Transparent Fill'
    qualityLosslessPng: '품질(무손실 PNG)', // 'Quality (Lossless PNG)'
    qualityPercent: '품질({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: '변환 중({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: '모두 변환({count})', // 'Convert All ({items.length})'
    clear: '지우기', // 'Clear'
    bulkConversionSummary: '대량 변환 요약', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count}개 파일이 {format}(으)로 변환됨 · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    convertedTo: '{ext}(으)로 변환됨', // 'Converted to {ext}'
    errorConversionFailed: '대량 변환에 실패했습니다.', // 'Batch conversion failed.'
    errorUnsupportedFile: '지원되지 않거나 손상된 이미지 파일입니다.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: '대량 형식 변환', // 'Bulk Format Conversion'
    comparisonAfterLabel: '변환됨(이후)', // 'Converted (After)'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Core Web Vitals용으로 최적화할 웹사이트 자산을 드롭하세요', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: '웹 성능 프리셋', // 'Web Performance Presets'
    presetHero: '히어로/배너', // 'Hero / Banner'
    presetHeroDesc: '최대 1600px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: '이커머스 제품', // 'E-Commerce Product'
    presetProductDesc: '최대 1200px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: '카드/썸네일', // 'Card / Thumbnail'
    presetThumbDesc: '최대 640px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: '소셜 OG/이메일', // 'Social OG / Email'
    presetOgDesc: '최대 1200px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: '레티나 2× 그래픽', // 'Retina 2× Graphic'
    presetRetinaDesc: '최대 1920px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: '웹 형식', // 'Web Format'
    maxDimension: '최대 치수(긴 변)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: '원본 치수 유지', // 'Keep Original Dimensions'
    max1920: '최대 1920px(레티나/Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: '최대 1600px(히어로/배너)', // 'Max 1600px (Hero / Banner)'
    max1200: '최대 1200px(블로그/제품)', // 'Max 1200px (Blog / Product)'
    max800: '최대 800px(콘텐츠 내)', // 'Max 800px (In-Content)'
    max640: '최대 640px(썸네일)', // 'Max 640px (Thumbnails)'
    quality: '품질:', // 'Quality:'
    onlyDownscale: '큰 이미지만 축소(EXIF 및 GPS 메타데이터 자동 제거)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: '최적화 중…', // 'Optimizing...'
    optimizeForWeb: '웹용 최적화({count})', // 'Optimize for Web ({items.length})'
    clear: '지우기', // 'Clear'
    webPerformanceSummary: '웹 성능 요약', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% 더 가벼움 · {saved} 페이지 무게 절약)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · {amount} 증가)', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    webReady: '웹 준비 완료({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: '{amount} 증가({percent})', // 'Grew by {amount} ({percent})'
    copyImg: '<img> 복사', // 'Copy <img>'
    copiedHtml: 'HTML 복사됨', // 'Copied HTML'
    copyImgTitle: '명시적인 너비와 높이가 있는 반응형 HTML img 태그 복사', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: '웹 최적화에 실패했습니다.', // 'Web optimization failed.'
    errorCorruptedFile: '손상되었거나 지원되지 않는 이미지입니다.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: '웹 최적화 비교', // 'Web Optimization Comparison'
    comparisonAfterLabel: '웹 준비 완료(이후)', // 'Web-Ready (After)'
    compare: '비교', // 'Compare'
    download: '다운로드', // 'Download'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: '압축할 애니메이션 GIF를 드롭하세요', // 'Drop an animated GIF to compress'
    decodingGif: '브라우저에서 애니메이션 GIF 프레임을 로컬로 디코딩하는 중…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: '프레임', // 'frame'
    framePlural: '프레임', // 'frames'
    presetLight: '가벼움', // 'Light'
    presetBalanced: '균형', // 'Balanced'
    presetMaxShrink: '최대 축소', // 'Max Shrink'
    colorPaletteLimit: '색상 팔레트 한도', // 'Color Palette Limit'
    colorsCount: '{count}색', // '{maxColors} colors'
    outputScale: '출력 배율', // 'Output Scale'
    scaleWithDims: '{percent}%({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: '프레임 속도 최적화', // 'Frame Rate Optimization'
    keepAllFrames: '모든 프레임 유지', // 'Keep All Frames'
    dropEvery2nd: '2프레임마다 건너뛰기(약 50% 더 작음)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: '3프레임 중 1프레임 유지', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'GIF 압축 중({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'GIF 압축', // 'Compress GIF'
    reset: '초기화', // 'Reset'
    originalGif: '원본 GIF', // 'Original GIF'
    compressedGif: '압축된 GIF', // 'Compressed GIF'
    sizeChange: '크기 변화', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: '압축된 GIF 다운로드', // 'Download Compressed GIF'
    notSmallerNotice: '이 원본 GIF는 이미 많이 최적화되었거나 입력보다 큰 전체 프레임 팔레트를 사용합니다. {size} 이하로 줄이려면 색상 팔레트를 32–64색으로 낮추고, 출력 배율을 75%나 50%로 낮추거나, 2프레임마다 건너뛰세요.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: '{percent}% 압축됨({saved} 절약) — 브라우저에서 깔끔하게 처리되었습니다.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: '원본({width}×{height}px)', // 'Original ({width}×{height}px)'
    compressedLabel: '압축됨({width}×{height}px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: '원본 GIF', // alt 'Original GIF'
    altCompressedGif: '압축된 GIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIF 압축에 실패했습니다.', // 'GIF compression failed.'
    errorDecodeFrames: 'GIF 프레임을 디코딩할 수 없습니다.', // 'Could not decode GIF frames.'
    errorTooSmall: '파일이 유효한 GIF가 되기에는 너무 작습니다.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: '선택한 파일은 유효한 GIF87a나 GIF89a 애니메이션이 아닙니다.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF의 캔버스 치수가 유효하지 않은 0×0입니다.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'GIF 전역 색상 테이블이 잘렸습니다.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: '이 GIF 파일에서 이미지 프레임을 디코딩할 수 없습니다.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '2D 캔버스 컨텍스트를 초기화할 수 없습니다.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'JPG로 변환할 아이폰 HEIC나 HEIF 사진을 드롭하세요', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: '클라이언트 측 WebAssembly(heic2any)를 사용해 브라우저 안에서 애플 HEIC와 HEIF 사진을 로컬로 디코딩합니다. 사진이 기기를 절대 떠나지 않습니다.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: '변환 파이프라인:', // 'Conversion Pipeline:'
    outputQuality: 'JPG 출력 품질', // 'JPG Output Quality'
    outputQualityLabel: 'JPG 출력 품질', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG 출력 품질', // `${targetLabel} output quality`
    smallerFile: '더 작은 파일(20%)', // 'Smaller file (20%)'
    balanced: '균형(85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일(100%)', // 'Max detail (100%)'
    losslessPngOutput: '무손실 PNG 출력', // 'Lossless PNG Output'
    losslessPngEncoding: '무손실 PNG 인코딩', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '무손실 PNG 인코딩', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG는 날카로운 가장자리, 텍스트, 알파 투명도를 손실 압축 아티팩트 없이 보존합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG는 날카로운 가장자리, 텍스트, 알파 투명도를 손실 압축 아티팩트 없이 보존합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '투명 배경 매트 색상', // 'Transparent Background Matte Color'
    matteColorLabel: '투명 배경 매트 색상', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: '매트 배경 색상', // 'Matte background color'
    matteWhite: '흰색', // 'White'
    matteBlack: '검은색', // 'Black'
    matteLightGray: '밝은 회색', // 'Light Gray'
    rasterExportScale: '래스터 내보내기 배율', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG의 고유 치수에 적용되는 배율(최대 8000px로 제한). 배율을 변경한 뒤 모두 다시 변환을 클릭하세요.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    converting: '변환 중…', // 'Converting...'
    clear: '지우기', // 'Clear'
    batchSummary: 'HEIC → JPG 일괄 요약', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count}개 {files} 변환됨 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: '파일', // 'file'
    filePlural: '파일', // 'files'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    columnChange: '변화', // 'Change'
    changeLabel: '변화', // 'Change' — primary key in FormatConverterTool
    compare: '비교', // 'Compare'
    downloadTarget: 'JPG 다운로드', // 'Download JPG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    errorDecodeHint: '이 HEIC/HEIF 파일을 디코딩할 수 없습니다. 유효한 아이폰/애플 HEIC 사진인지 확인하세요.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '"{filename}"을(를) 디코딩할 수 없습니다. 유효한 HEIC 이미지인지 확인하세요.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '{name}을(를) JPG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: '무손실 PNG로 변환할 JPG나 JPEG 이미지를 드롭하세요', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: '변환 파이프라인:', // 'Conversion Pipeline:'
    outputQuality: 'PNG 출력 품질', // 'PNG Output Quality'
    outputQualityLabel: 'PNG 출력 품질', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'PNG 출력 품질', // `${targetLabel} output quality`
    smallerFile: '더 작은 파일(20%)', // 'Smaller file (20%)'
    balanced: '균형(85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일(100%)', // 'Max detail (100%)'
    losslessPngOutput: '무손실 PNG 출력', // 'Lossless PNG Output'
    losslessPngEncoding: '무손실 PNG 인코딩', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '무손실 PNG 인코딩', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG는 날카로운 가장자리, 텍스트, 알파 투명도를 손실 압축 아티팩트 없이 보존합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG는 날카로운 가장자리, 텍스트, 알파 투명도를 손실 압축 아티팩트 없이 보존합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '투명 배경 매트 색상', // 'Transparent Background Matte Color'
    matteColorLabel: '투명 배경 매트 색상', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: '매트 배경 색상', // 'Matte background color'
    matteWhite: '흰색', // 'White'
    matteBlack: '검은색', // 'Black'
    matteLightGray: '밝은 회색', // 'Light Gray'
    rasterExportScale: '래스터 내보내기 배율', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG의 고유 치수에 적용되는 배율(최대 8000px로 제한). 배율을 변경한 뒤 모두 다시 변환을 클릭하세요.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    converting: '변환 중…', // 'Converting...'
    clear: '지우기', // 'Clear'
    batchSummary: 'JPG → PNG 일괄 요약', // 'JPG → PNG Batch Summary'
    filesConverted: '{count}개 {files} 변환됨 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: '파일', // 'file'
    filePlural: '파일', // 'files'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    columnChange: '변화', // 'Change'
    changeLabel: '변화', // 'Change' — primary key in FormatConverterTool
    compare: '비교', // 'Compare'
    downloadTarget: 'PNG 다운로드', // 'Download PNG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}"을(를) 디코딩할 수 없습니다. 유효한 JPG 이미지인지 확인하세요.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '{name}을(를) PNG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: '더 작은 JPG로 변환할 PNG 파일을 드롭하세요', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: '변환 파이프라인:', // 'Conversion Pipeline:'
    outputQuality: 'JPG 출력 품질', // 'JPG Output Quality'
    outputQualityLabel: 'JPG 출력 품질', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG 출력 품질', // `${targetLabel} output quality`
    smallerFile: '더 작은 파일(20%)', // 'Smaller file (20%)'
    balanced: '균형(85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일(100%)', // 'Max detail (100%)'
    losslessPngOutput: '무손실 PNG 출력', // 'Lossless PNG Output'
    losslessPngEncoding: '무손실 PNG 인코딩', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: '무손실 PNG 인코딩', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG는 날카로운 가장자리, 텍스트, 알파 투명도를 손실 압축 아티팩트 없이 보존합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG는 날카로운 가장자리, 텍스트, 알파 투명도를 손실 압축 아티팩트 없이 보존합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: '투명 배경 매트 색상', // 'Transparent Background Matte Color'
    matteColorLabel: '투명 배경 매트 색상', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: '매트 배경 색상', // 'Matte background color'
    matteWhite: '흰색', // 'White'
    matteBlack: '검은색', // 'Black'
    matteLightGray: '밝은 회색', // 'Light Gray'
    matteNote: 'JPG는 투명도를 지원하지 않으므로 투명 영역이 이 색상으로 깔끔하게 채워집니다.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    rasterExportScale: '래스터 내보내기 배율', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG의 고유 치수에 적용되는 배율(최대 8000px로 제한). 배율을 변경한 뒤 모두 다시 변환을 클릭하세요.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    converting: '변환 중…', // 'Converting...'
    clear: '지우기', // 'Clear'
    batchSummary: 'PNG → JPG 일괄 요약', // 'PNG → JPG Batch Summary'
    filesConverted: '{count}개 {files} 변환됨 · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: '파일', // 'file'
    filePlural: '파일', // 'files'
    creatingZip: 'ZIP 생성 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드(ZIP)', // 'Download All (ZIP)'
    columnChange: '변화', // 'Change'
    changeLabel: '변화', // 'Change' — primary key in FormatConverterTool
    compare: '비교', // 'Compare'
    downloadTarget: 'JPG 다운로드', // 'Download JPG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}"을(를) 디코딩할 수 없습니다. 유효한 PNG 이미지인지 확인하세요.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '{name}을(를) JPG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'JPG 이미지를 놓아 가벼운 WebP로 변환하세요', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: '변환 과정:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP 출력 품질', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP 출력 품질', // aria-label 'WebP output quality'
    smallerFile: '더 작은 파일 (20%)', // 'Smaller file (20%)'
    balanced: '균형 (85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일 (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} 일괄 요약', // '{source} → {target} Batch Summary'
    fileSingular: '개 파일', // 'file'
    filePlural: '개 파일', // 'files'
    filesConvertedSuffix: '개 변환됨', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    changeLabel: '변경률', // 'Change'
    compare: '비교', // 'Compare'
    downloadTarget: 'WebP 다운로드', // 'Download WebP'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    converting: '변환 중…', // 'Converting...'
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    clear: '지우기', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '"{name}"을(를) WebP로 변환하지 못했습니다.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}"을(를) 디코딩할 수 없습니다. 유효한 JPG 이미지인지 확인하세요.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'WebP 이미지를 놓아 범용 JPG로 변환하세요', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: '변환 과정:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG 출력 품질', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG 출력 품질', // aria-label 'JPG output quality'
    smallerFile: '더 작은 파일 (20%)', // 'Smaller file (20%)'
    balanced: '균형 (85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일 (100%)', // 'Max detail (100%)'
    matteColorLabel: '투명 배경 매트 색상', // 'Transparent Background Matte Color'
    matteAriaLabel: '매트 배경 색상', // aria-label 'Matte background color'
    matteWhite: '흰색', // 'White'
    matteBlack: '검은색', // 'Black'
    matteLightGray: '밝은 회색', // 'Light Gray'
    matteHint: 'JPG는 투명도를 지원하지 않습니다. 투명 영역은 이 색상으로 깔끔하게 채워집니다.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} 일괄 요약', // '{source} → {target} Batch Summary'
    fileSingular: '개 파일', // 'file'
    filePlural: '개 파일', // 'files'
    filesConvertedSuffix: '개 변환됨', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    changeLabel: '변경률', // 'Change'
    compare: '비교', // 'Compare'
    downloadTarget: 'JPG 다운로드', // 'Download JPG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    converting: '변환 중…', // 'Converting...'
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    clear: '지우기', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '"{name}"을(를) JPG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}"을(를) 디코딩할 수 없습니다. 유효한 WebP 이미지인지 확인하세요.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'PNG 파일을 놓아 투명한 WebP로 변환하세요', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: '변환 과정:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP 출력 품질', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP 출력 품질', // aria-label 'WebP output quality'
    smallerFile: '더 작은 파일 (20%)', // 'Smaller file (20%)'
    balanced: '균형 (85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일 (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} 일괄 요약', // '{source} → {target} Batch Summary'
    fileSingular: '개 파일', // 'file'
    filePlural: '개 파일', // 'files'
    filesConvertedSuffix: '개 변환됨', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    changeLabel: '변경률', // 'Change'
    compare: '비교', // 'Compare'
    downloadTarget: 'WebP 다운로드', // 'Download WebP'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    converting: '변환 중…', // 'Converting...'
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    clear: '지우기', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '"{name}"을(를) WebP로 변환하지 못했습니다.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}"을(를) 디코딩할 수 없습니다. 유효한 PNG 이미지인지 확인하세요.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'WebP 파일을 놓아 무손실 PNG로 변환하세요', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: '변환 과정:', // 'Conversion Pipeline:'
    losslessPngOutput: '무손실 PNG 출력', // 'Lossless PNG Output'
    losslessPngEncodingTitle: '무손실 PNG 인코딩', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG는 손실 압축 아티팩트 없이 선명한 모서리, 텍스트, 알파 투명도를 유지합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: '{source} → {target} 일괄 요약', // '{source} → {target} Batch Summary'
    fileSingular: '개 파일', // 'file'
    filePlural: '개 파일', // 'files'
    filesConvertedSuffix: '개 변환됨', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    changeLabel: '변경률', // 'Change'
    compare: '비교', // 'Compare'
    downloadTarget: 'PNG 다운로드', // 'Download PNG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    converting: '변환 중…', // 'Converting...'
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    clear: '지우기', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '"{name}"을(를) PNG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}"을(를) 디코딩할 수 없습니다. 유효한 WebP 이미지인지 확인하세요.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'SVG 벡터 파일을 놓아 PNG로 래스터화하세요', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      '인라인 SVG 그래픽을 HTML5 Canvas로 로컬에서 래스터화하며 투명 배경을 유지합니다. 제한: 외부 <image> URL, 외부 CSS 스타일시트/웹폰트, SVG 안에 참조된 스크립트는 독립 Canvas 내보내기에서 렌더링되지 않을 수 있습니다.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: '변환 과정:', // 'Conversion Pipeline:'
    losslessPngOutput: '무손실 PNG 출력', // 'Lossless PNG Output'
    losslessPngEncodingTitle: '무손실 PNG 인코딩', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG는 손실 압축 아티팩트 없이 선명한 모서리, 텍스트, 알파 투명도를 유지합니다.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: '래스터 내보내기 배율', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG 고유 크기에 적용되는 배율(최대 8000px로 제한). 배율을 바꾼 뒤 모두 다시 변환을 클릭하세요.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: '{source} → {target} 일괄 요약', // '{source} → {target} Batch Summary'
    fileSingular: '개 파일', // 'file'
    filePlural: '개 파일', // 'files'
    filesConvertedSuffix: '개 변환됨', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    changeLabel: '변경률', // 'Change'
    compare: '비교', // 'Compare'
    downloadTarget: 'PNG 다운로드', // 'Download PNG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    converting: '변환 중…', // 'Converting...'
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    clear: '지우기', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '"{name}"을(를) PNG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '이 SVG를 래스터화할 수 없습니다. 잘못된 구문이 없는 유효한 XML SVG 마크업인지 확인하세요.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'AVIF 이미지를 놓아 범용 JPG로 변환하세요', // 'Drop AVIF images to convert to universal JPG'
    notice:
      '브라우저의 기본 AVIF 디코더(최신 Chrome, Edge, Firefox, Safari에서 지원)를 사용해 AVIF 이미지를 로컬에서 디코딩하고 표준 JPG 파일로 내보냅니다.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: '변환 과정:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG 출력 품질', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG 출력 품질', // aria-label 'JPG output quality'
    smallerFile: '더 작은 파일 (20%)', // 'Smaller file (20%)'
    balanced: '균형 (85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일 (100%)', // 'Max detail (100%)'
    matteColorLabel: '투명 배경 매트 색상', // 'Transparent Background Matte Color'
    matteAriaLabel: '매트 배경 색상', // aria-label 'Matte background color'
    matteWhite: '흰색', // 'White'
    matteBlack: '검은색', // 'Black'
    matteLightGray: '밝은 회색', // 'Light Gray'
    matteHint: 'JPG는 투명도를 지원하지 않습니다. 투명 영역은 이 색상으로 깔끔하게 채워집니다.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} 일괄 요약', // '{source} → {target} Batch Summary'
    fileSingular: '개 파일', // 'file'
    filePlural: '개 파일', // 'files'
    filesConvertedSuffix: '개 변환됨', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    changeLabel: '변경률', // 'Change'
    compare: '비교', // 'Compare'
    downloadTarget: 'JPG 다운로드', // 'Download JPG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    converting: '변환 중…', // 'Converting...'
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    clear: '지우기', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '"{name}"을(를) JPG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '브라우저가 이 AVIF 이미지를 디코딩할 수 없습니다. 유효한 .avif 이미지인지 확인하고 최신 Chrome, Firefox, Edge, Safari 브라우저를 사용해 보세요.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: '압축되지 않은 BMP 비트맵을 놓아 작은 JPG로 변환하세요', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: '변환 과정:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG 출력 품질', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG 출력 품질', // aria-label 'JPG output quality'
    smallerFile: '더 작은 파일 (20%)', // 'Smaller file (20%)'
    balanced: '균형 (85%)', // 'Balanced (85%)'
    maxDetail: '최대 디테일 (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} 일괄 요약', // '{source} → {target} Batch Summary'
    fileSingular: '개 파일', // 'file'
    filePlural: '개 파일', // 'files'
    filesConvertedSuffix: '개 변환됨', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP 만드는 중…', // 'Creating ZIP...'
    downloadAllZip: '모두 다운로드 (ZIP)', // 'Download All (ZIP)'
    changeLabel: '변경률', // 'Change'
    compare: '비교', // 'Compare'
    downloadTarget: 'JPG 다운로드', // 'Download JPG'
    removeImage: '{name} 제거', // aria-label `Remove ${item.name}`
    converting: '변환 중…', // 'Converting...'
    reconvertAll: '모두 다시 변환', // 'Re-convert All'
    clear: '지우기', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '"{name}"을(를) JPG로 변환하지 못했습니다.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}"을(를) 디코딩할 수 없습니다. 유효한 BMP 이미지인지 확인하세요.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: '사진을 놓아 AI로 배경을 제거하세요', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: '브라우저 내 AI 모델 로드 중 (isnet_quint8)', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: '모델 캐시', // 'Model Cache'
    progressWasm: 'WebAssembly AI 런타임 로드 중…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'AI 배경 제거 모델 다운로드 중 (약 35 MB, 다음 사용을 위해 캐시됩니다)…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: '브라우저에서 로컬로 배경을 제거하는 중…', // 'Removing background locally in your browser...'
    progressPreparing: '브라우저에서 AI 모델을 준비하는 중…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'AI 배경 제거 라이브러리 로드 중…', // 'Loading AI background removal library...'
    progressInitModule: 'AI 배경 제거 모듈 초기화 중…', // 'Initializing AI background removal module...'
    errorModelInit: 'AI 배경 모델을 초기화할 수 없습니다: {message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: '이 브라우저에서 AI 배경 모델을 초기화할 수 없습니다.', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: '투명 PNG 출력을 디코딩하지 못했습니다.', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: '이 브라우저에서 배경 제거에 실패했습니다. 다른 이미지를 시도하거나 페이지를 새로고침하세요.', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: '전후 미리보기', // 'Before & After Preview'
    splitCompare: '분할 비교', // 'Split Compare'
    newImage: '새 이미지', // 'New Image'
    originalLabel: '원본', // 'Original'
    transparentCutout: '투명 누끼 (PNG)', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: '단색 배경 미리보기', // 'Solid Background Preview'
    waitingForResult: '결과 대기 중…', // 'Waiting for result...'
    processingLocally: '로컬에서 처리 중…', // 'Processing locally...'
    cutoutStatus: '누끼 상태', // 'Cutout Status'
    ready: '준비됨', // 'Ready'
    backgroundFillOption: '배경 채우기 옵션', // 'Background Fill Option'
    bgTransparent: '투명', // 'Transparent'
    bgWhite: '흰색', // 'White'
    bgBlack: '검은색', // 'Black'
    bgCustom: '사용자 지정', // 'Custom'
    customBackgroundColor: '사용자 지정 배경 색상', // 'Custom Background Color'
    downloadTransparentPng: '투명 PNG 다운로드', // 'Download Transparent PNG'
    downloadWithWhite: '흰색 배경으로 다운로드', // 'Download with White Background'
    downloadWithBlack: '검은색 배경으로 다운로드', // 'Download with Black Background'
    downloadWithCustom: '{color} 배경으로 다운로드', // 'Download with {color} Background'
    rerunRemoval: '제거 다시 실행', // 'Re-run Removal'
    comparisonTitlePrefix: '배경 제거 비교', // 'Background Removal Comparison'
    comparisonAfterTransparent: '누끼 (투명 PNG)', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: '누끼 (단색 배경)', // 'Cutout (Solid BG)'
    altOriginal: '원본 {name}', // alt `Original ${sourceFile.name}`
    altCutout: '배경 제거됨 {name}', // alt `Background removed ${sourceFile.name}`
  },
};
