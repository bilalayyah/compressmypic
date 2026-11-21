// Hindi (hi) UI strings for CompressMyPic — natural, native Hindi (Devanagari).
// Source: src/locales/es/ui.ts structure, with English source meaning from
// src/data/tools.ts and the EN defaults in components.
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. Hinglish kept where Hindi speakers naturally use the English
// word (tool, download, PDF, SEO, JPG, PNG, WebP, ZIP).
// Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors.

export const HI = {
  header: {
    home: 'होम',
    tools: 'टूल्स',
    howItWorks: 'यह कैसे काम करता है',
    faq: 'अक्सर पूछे जाने वाले सवाल',
    about: 'हमारे बारे में',
    blog: 'ब्लॉग',
    contact: 'संपर्क करें',
    compressImages: 'इमेज कंप्रेस करें',
    themeLight: 'लाइट मोड',
    themeDark: 'डार्क मोड',
    themeSystem: 'सिस्टम डिफ़ॉल्ट',
    languageLabel: 'भाषा',
    homeAriaLabel: 'CompressMyPic – मुफ़्त ऑनलाइन इमेज कंप्रेसर',
    themeLightShort: 'लाइट', // 'Light'
    themeDarkShort: 'डार्क', // 'Dark'
    themeSystemShort: 'सिस्टम', // 'System'
    themeHeading: 'थीम', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'नेविगेशन मेनू दिखाएँ या छिपाएँ', // 'Toggle navigation menu'
    themeAriaLabel: 'कलर थीम बदलें (वर्तमान: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'थीम: {current}', // 'Theme: {current}'
    aboutUs: 'हमारे बारे में', // 'About Us' (mobile drawer)
    contactUs: 'संपर्क करें', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'तेज़, सुरक्षित और प्राइवेट इमेज कंप्रेशन, सीधे आपके ब्राउज़र में। JPG, PNG और WebP इमेज ऑप्टिमाइज़ करें — बिना अपना डेटा किसी बाहरी सर्वर पर अपलोड किए।',
    privacyNote: 'आपके डिवाइस पर 100% प्राइवेसी',
    toolsHeading: 'इमेज टूल्स',
    legalHeading: 'भरोसा और कानूनी',
    guidesHeading: 'गाइड्स',
    blogLabel: 'ब्लॉग',
    moreHeading: 'और यूटिलिटीज़',
    directoryHeading: 'एडवांस्ड कंप्रेशन, एडिटिंग और डेवलपर टूल्स',
    processedLocally: 'HTML5 Canvas से लोकली प्रोसेस किया गया',
    bottomRights:
      '© {year} CompressMyPic. सर्वाधिकार सुरक्षित। ब्राउज़र में चलने वाला मुफ़्त इमेज कंप्रेशन टूल।',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'संपर्क: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'इमेज कंप्रेस करें' },
      { slug: '/image-resizer', label: 'इमेज रीसाइज़ करें' },
      { slug: '/image-converter', label: 'इमेज कन्वर्टर' },
      { slug: '/rotate-flip-image', label: 'इमेज घुमाएँ और फ़्लिप करें' },
      { slug: '/image-to-pdf', label: 'इमेज से PDF बनाएँ' },
      { slug: '/remove-image-metadata', label: 'मेटाडेटा हटाएँ' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'प्राइवेसी पॉलिसी' },
      { slug: '/terms', label: 'सेवा की शर्तें' },
      { slug: '/about', label: 'हमारे बारे में' },
      { slug: '/contact', label: 'सपोर्ट से संपर्क करें' },
      { slug: '/disclaimer', label: 'डिस्क्लेमर' },
      { slug: '/cookie-policy', label: 'कुकी पॉलिसी' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'WhatsApp के लिए इमेज कंप्रेस कैसे करें — बिना क्वालिटी खोए',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP: कौन सा फ़ॉर्मेट इस्तेमाल करें?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'वेब और ईमेल के लिए इमेज का साइज़ 100KB तक कैसे कम करें',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'मेटाडेटा और EXIF व्यूअर' },
      { slug: '/favicon-generator', label: 'फ़ेविकॉन जनरेटर' },
      { slug: '/image-color-picker', label: 'इमेज कलर पिकर' },
      { slug: '/image-dimensions-checker', label: 'डाइमेंशन चेकर' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: '50KB तक कंप्रेस करें' },
      { slug: '/compress-image-to-100kb', label: '100KB तक कंप्रेस करें' },
      { slug: '/compress-image-to-200kb', label: '200KB तक कंप्रेस करें' },
      { slug: '/compress-image-to-500kb', label: '500KB तक कंप्रेस करें' },
      { slug: '/target-file-size-compressor', label: 'टारगेट फ़ाइल साइज़ कंप्रेसर' },
      { slug: '/bulk-image-compressor', label: 'बल्क इमेज कंप्रेसर' },
      { slug: '/bulk-image-resizer', label: 'बल्क इमेज रीसाइज़र' },
      { slug: '/bulk-image-converter', label: 'बल्क इमेज कन्वर्टर' },
      { slug: '/web-image-optimizer', label: 'वेब इमेज ऑप्टिमाइज़र' },
      { slug: '/gif-compressor', label: 'GIF कंप्रेसर' },
      { slug: '/image-cropper', label: 'इमेज क्रॉपर' },
      { slug: '/image-watermark', label: 'इमेज पर वॉटरमार्क लगाएँ' },
      { slug: '/blur-pixelate-image', label: 'ब्लर और पिक्सेलेट करें' },
      { slug: '/add-text-to-image', label: 'इमेज पर टेक्स्ट जोड़ें' },
      { slug: '/image-border-generator', label: 'बॉर्डर जनरेटर' },
      { slug: '/round-image-corners', label: 'गोल कोने बनाएँ' },
      { slug: '/image-brightness-editor', label: 'ब्राइटनेस एडिटर' },
      { slug: '/image-contrast-editor', label: 'कंट्रास्ट एडिटर' },
      { slug: '/image-saturation-editor', label: 'सैचुरेशन एडिटर' },
      { slug: '/image-filters', label: 'इमेज फ़िल्टर्स' },
      { slug: '/add-background-to-image', label: 'बैकग्राउंड जोड़ें' },
      { slug: '/image-splitter', label: 'इमेज स्प्लिटर' },
      { slug: '/image-dpi-changer', label: 'DPI बदलें' },
      { slug: '/image-to-base64', label: 'इमेज से Base64' },
      { slug: '/base64-to-image', label: 'Base64 से इमेज' },
      { slug: '/image-color-palette-extractor', label: 'कलर पैलेट एक्सट्रैक्टर' },
      { slug: '/gif-maker', label: 'GIF मेकर' },
      { slug: '/image-collage-maker', label: 'कोलाज मेकर' },
      { slug: '/heic-to-jpg', label: 'HEIC से JPG' },
      { slug: '/jpg-to-png', label: 'JPG से PNG' },
      { slug: '/png-to-jpg', label: 'PNG से JPG' },
      { slug: '/jpg-to-webp', label: 'JPG से WebP' },
      { slug: '/webp-to-jpg', label: 'WebP से JPG' },
      { slug: '/png-to-webp', label: 'PNG से WebP' },
      { slug: '/webp-to-png', label: 'WebP से PNG' },
      { slug: '/svg-to-png', label: 'SVG से PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF से JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP से JPG' },
    ],
  },
  hero: {
    pill: 'आपके डिवाइस पर 100% प्राइवेट कंप्रेशन · सर्वर पर कोई अपलोड नहीं',
    h1: 'मुफ़्त इमेज कंप्रेसर – ऑनलाइन इमेज कंप्रेस करें',
    sub: 'दिखने वाली क्वालिटी से समझौता किए बिना अपनी इमेज फ़ाइलों का साइज़ कम करें। हमारे मुफ़्त इमेज और फ़ोटो कंप्रेसर से ऑनलाइन इमेज कंप्रेस करें — JPG, PNG, WebP और HEIC के लिए ऑनलाइन इमेज ऑप्टिमाइज़र। तेज़, सुरक्षित, बिना साइन-अप, बिना वॉटरमार्क, सीधे आपके ब्राउज़र में आसान कंप्रेशन।',
    badge1: 'आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जाती',
    badge2: 'ब्राउज़र में तुरंत प्रोसेसिंग',
    badge3: 'JPG, PNG, WebP और HEIC सपोर्ट करता है',
  },
  toolsDirectory: {
    heading: 'इमेज प्रोसेस करने के और मुफ़्त टूल्स',
    subheading:
      'हर टूल 100% आपके ब्राउज़र में चलता है: सर्वर पर कोई अपलोड नहीं, कोई साइन-अप नहीं, कोई वॉटरमार्क नहीं।',
    eyebrow: 'सभी टूल्स आपके ब्राउज़र में', // 'All Browser-Native Tools'
    allTools: 'सभी टूल्स', // 'All Tools'
    openTool: 'टूल खोलें', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'इमेज कंप्रेशन क्या है?',
        body: 'इमेज कंप्रेशन वह प्रक्रिया है जिसमें किसी ग्राफ़िक फ़ाइल का साइज़ (बाइट्स में) कम किया जाता है, बिना इमेज की दिखने वाली क्वालिटी को स्वीकार्य सीमा से ज़्यादा खराब किए। जब कैमरा या फ़ोन कोई फ़ोटो सेव करता है, तो उसमें बहुत ज़्यादा डेटा होता है — और उस जानकारी का बड़ा हिस्सा हटाने या सरल करने पर भी नज़र से फ़र्क़ नहीं पड़ता। CompressMyPic एक मुफ़्त ऑनलाइन इमेज ऑप्टिमाइज़र और इमेज साइज़ रिड्यूसर है, जो JPG, PNG और WebP फ़ाइलों के लिए फ़ोटो कंप्रेसर और फ़ोटो साइज़ रिड्यूसर का काम करता है।\n\nइन पैटर्न को पहचानकर कंप्रेशन एल्गोरिदम बेकार जानकारी को दोबारा व्यवस्थित करते हैं या चुनिंदा तरीके से हटा देते हैं। नतीजा यह होता है कि फ़ाइल को बहुत कम स्टोरेज चाहिए और वह इंटरनेट पर बहुत तेज़ी से ट्रांसफ़र होती है। यह गाइड आपको दिखाती है कि CompressMyPic के क्वालिटी स्लाइडर, प्रीसेट और फ़ॉर्मेट चुनने वाले ऑप्शन से बिना क्वालिटी खोए इमेज कैसे कंप्रेस करें।',
      },
      {
        heading: 'आपको अपनी इमेज कंप्रेस क्यों करनी चाहिए?',
        body: 'बिना ऑप्टिमाइज़ की गई इमेज वेबसाइट की स्पीड, स्टोरेज और मोबाइल डेटा की खपत के लिए सबसे बड़ी रुकावटों में से एक हैं। अपनी इमेज कंप्रेस करने के तुरंत और ठोस फ़ायदे हैं:',
        bullets: [
          'वेबसाइट तेज़ी से लोड होती है: कंप्रेस की गई इमेज वाले पेज 70% तक तेज़ लोड होते हैं, जिससे आपके Core Web Vitals (Largest Contentful Paint) और सर्च रैंकिंग बेहतर होती है। जब आप अपनी वेबसाइट की इमेज का साइज़ कम करते हैं, तो विज़िटर ज़्यादा देर रुकते हैं और पेज कम छोड़ते हैं।',
          'कम स्टोरेज जगह: भारी ओरिजिनल फ़ाइलों की जगह ऑप्टिमाइज़ की गई इमेज फ़ाइलें सेव करके क्लाउड होस्टिंग, सर्वर डिस्क और बैकअप की लागत कम करें।',
          'इमेज शेयर करना आसान: ईमेल अटैचमेंट की सख्त साइज़ सीमा या मैसेज की अपलोड लिमिट अब आपको नहीं रोकेगी। कंप्रेस की गई फ़ोटो तुरंत अटैच और भेजी जाती हैं, धीमे मोबाइल कनेक्शन या सीमित डेटा प्लान पर भी।',
          'कम बैंडविड्थ खपत: मोबाइल डेटा प्लान पर अपने यूज़र्स के पैसे बचाएँ और विज़िटर्स को साइट छोड़ने से रोकें। छोटी फ़ाइलें तेज़ी से डाउनलोड होती हैं, खासकर धीमे मोबाइल कनेक्शन पर।',
        ],
      },
      {
        heading: 'यह कैसे काम करता है',
        body: 'अपनी फ़ोटो कंप्रेस करने में सिर्फ़ कुछ सेकंड लगते हैं: बिना अकाउंट, बिना सॉफ़्टवेयर, बिना अपलोड। तीन आसान स्टेप में बिना क्वालिटी खोए इमेज कंप्रेस करने का तरीका यह है।',
        bullets: [
          'स्टेप 1 — अपनी इमेज अपलोड करें: अपनी JPG, PNG, WebP या HEIC इमेज को अपलोड ज़ोन में ड्रैग करके छोड़ें, चुनने के लिए “फ़ाइलें ब्राउज़ करें” पर क्लिक करें, या Ctrl+V से इमेज पेस्ट करें। आप एक साथ कई इमेज अपलोड कर सकते हैं — हर इमेज के लिए 20 MB तक।',
          'स्टेप 2 — क्वालिटी सेट करें और फ़ॉर्मेट चुनें: कम, संतुलित या ज़्यादा प्रीसेट में से चुनें, या क्वालिटी स्लाइडर को 10% से 100% तक घुमाएँ, और तय करें कि ओरिजिनल फ़ॉर्मेट रखना है या JPG, PNG या WebP में कन्वर्ट करना है। हर इमेज के लिए पहले और बाद का साइज़ लाइव देखें और इंटरैक्टिव तुलना स्लाइडर से विज़ुअल रिज़ल्ट चेक करें।',
          'स्टेप 3 — अपनी कंप्रेस की गई इमेज डाउनलोड करें: हर कंप्रेस की गई इमेज अलग से डाउनलोड करें, या “सब कुछ डाउनलोड करें (ZIP)” पर क्लिक करके पूरा बैच एक ही फ़ाइल में डाउनलोड करें। आपकी इमेज सीधे आपके ब्राउज़र में कंप्रेस होती हैं, इसलिए न इंतज़ार करना है, न कुछ अपलोड करना है।',
        ],
      },
      {
        heading: 'यह मुफ़्त इमेज कंप्रेसर क्यों इस्तेमाल करें?',
        body: 'CompressMyPic एक मुफ़्त, बिना साइन-अप और बिना वॉटरमार्क वाला इमेज कंप्रेसर है, जो रोज़मर्रा की फ़ोटो, वेबसाइट की इमेज और सोशल मीडिया पोस्ट के लिए बनाया गया है।',
        bullets: [
          'JPG, PNG, WebP और HEIC कंप्रेस करें: एक ही इमेज कंप्रेसर उन सभी फ़ॉर्मेट के लिए जो आप सच में इस्तेमाल करते हैं। JPG और JPEG फ़ोटो कंप्रेस करें, ट्रांसपेरेंसी बनाए रखते हुए PNG ग्राफ़िक्स कंप्रेस करें, और सबसे छोटी फ़ाइलों के लिए WebP इमेज कंप्रेस करें।',
          'बिना क्वालिटी खोए इमेज का साइज़ कम करें: स्मार्ट कंप्रेशन बेकार डेटा और मेटाडेटा हटा देता है, और इमेज फिर भी लगभग ओरिजिनल जैसी ही दिखती है। संतुलित प्रीसेट सबसे अच्छी शुरुआत है, और पहले-बाद की तुलना से आप खुद क्वालिटी चेक कर सकते हैं।',
          'बल्क इमेज कंप्रेसर: एक साथ कई इमेज कंप्रेस करें — यह बल्क इमेज कंप्रेसर आपको एक ही सेटिंग से कई इमेज एक साथ कंप्रेस करने देता है और “सब कुछ डाउनलोड करें (ZIP)” बटन से सभी को एक साथ डाउनलोड करने देता है, बजाय एक-एक फ़ाइल सेव करने के।',
          'WhatsApp, Instagram और Facebook के लिए इमेज कंप्रेस करें: फ़ोटो का साइज़ कम करें ताकि वे WhatsApp पर तेज़ी से भेजी जाएँ और Instagram व Facebook पर आसानी से अपलोड हों। छोटी फ़ाइलें कम मोबाइल डेटा इस्तेमाल करती हैं और उनके ज़्यादा बड़ी होने की वजह से रिजेक्ट होने की संभावना बहुत कम होती है।',
          'इमेज का साइज़ 20KB, 50KB, 100KB या 200KB तक कम करें: क्वालिटी स्लाइडर को धीरे-धीरे नीचे लाएँ और अपने टारगेट तक पहुँचने के लिए पहले-बाद का लाइव साइज़ देखते रहें — 200KB, 100KB, 50KB या 20KB तक। आउटपुट फ़ॉर्मेट को WebP में बदलने से आमतौर पर कम दिखने वाली क्वालिटी हानि के साथ टारगेट तक पहुँचने में मदद मिलती है।',
        ],
      },
      {
        heading: 'JPG, PNG और WebP कंप्रेस करें: कौन सा फ़ॉर्मेट चुनें?',
        body: 'JPG, PNG और WebP के काम अलग-अलग हैं। उनकी खूबियाँ जानने से आपको अपने प्रोजेक्ट के लिए सबसे अच्छा विकल्प चुनने में मदद मिलती है।\n\nदिखने वाला फ़र्क़ तुलना करके देखें: समझ नहीं आ रहा कि कितनी कंप्रेशन ठीक रहेगी? टूल के पहले-बाद की तुलना वाले ऑप्शन का इस्तेमाल करें। हमारा इंटरैक्टिव स्लाइडर आपको ओरिजिनल इमेज और कंप्रेस की गई इमेज को साथ-साथ देखने देता है, ताकि डाउनलोड करने से पहले विज़ुअल खामियाँ या क्वालिटी की हानि पकड़ में आ जाए।',
        bullets: [
          'JPG कंप्रेसर — ऑनलाइन मुफ़्त JPG कंप्रेस करें: अपनी वेबसाइट, ब्लॉग या पोर्टफ़ोलियो की फ़ोटोग्राफ़ी के लिए सबसे अच्छा। ऑनलाइन मुफ़्त JPG कंप्रेस करें और लाइव साइज़ देखते हुए क्वालिटी स्लाइडर को नीचे लाकर JPEG को 100KB तक कंप्रेस करें। JPEG कंप्रेशन लॉसी होता है: यह कुछ विज़ुअल डेटा स्थायी रूप से हटा देता है, जो इंसानी आँख मुश्किल से देख पाती है। इसलिए आप किसी फ़ोटो को मेगाबाइट से किलोबाइट तक छोटा कर सकते हैं, बिना दिखने वाली क्वालिटी खोए।',
          'PNG कंप्रेसर — ऑनलाइन मुफ़्त PNG कंप्रेस करें: ग्राफ़िक्स, स्क्रीनशॉट, लोगो और ट्रांसपेरेंसी वाली इमेज — जैसे लोगो, आइकन या इलस्ट्रेशन — के लिए सबसे अच्छा। यहाँ ऑनलाइन मुफ़्त PNG कंप्रेस करें, पूरी ट्रांसपेरेंसी बनाए रखते हुए, ताकि ग्राफ़िक्स हर पिक्सल में साफ़ और परफ़ेक्ट रहें। PNG को WebP में बदलने से वह अक्सर बहुत छोटा हो जाता है।',
          'WebP इमेज कंप्रेस करें — मॉडर्न फ़ॉर्मेट: वेब ऑप्टिमाइज़ेशन के लिए सबसे अच्छा। WebP लॉसी और लॉसलेस दोनों तरह की बेहतरीन कंप्रेशन देता है, जो अक्सर JPEG या PNG से 25% से 35% छोटा होता है। समान क्वालिटी के साथ सबसे छोटा साइज़ पाने के लिए WebP इमेज फ़ाइलें कंप्रेस करें, और जब आप बिना दिखने वाली क्वालिटी हानि के वेब पेज के लिए इमेज ऑप्टिमाइज़ करना चाहें, तो WebP इस्तेमाल करें। यह ज़्यादातर वेबसाइटों के लिए सबसे अच्छा विकल्प है।',
        ],
      },
      {
        heading: 'इस इमेज कंप्रेसर का इस्तेमाल आप किस लिए कर सकते हैं?',
        body: 'एक ही मुफ़्त इमेज कंप्रेसर उन सबसे आम वजहों को कवर करता है, जिनके लिए लोगों को इमेज का साइज़ कम करना होता है।',
        bullets: [
          'वेब के लिए इमेज ऑप्टिमाइज़ करें: अपने वेब पेज की इमेज ऑप्टिमाइज़ करें ताकि वे तेज़ी से लोड हों, Core Web Vitals बेहतर हों और रैंकिंग सुधरे। छोटी इमेज का मतलब है तेज़ पेज, खुश विज़िटर और कम होस्टिंग बैंडविड्थ।',
          'ईमेल अटैचमेंट के लिए इमेज कंप्रेस करें: ईमेल अटैचमेंट के लिए इमेज कंप्रेस करें ताकि आपकी फ़ोटो अटैचमेंट की साइज़ सीमा में आ जाएँ। भारी ओरिजिनल की जगह छोटी डाउनलोड की गई फ़ाइलें अटैच करें और आपके ईमेल बिना बाउंस हुए भेजे जाएँगे।',
          'अपनी वेबसाइट के लिए फ़ोटो कंप्रेस करें: अपलोड करने से पहले अपनी वेबसाइट, ब्लॉग, पोर्टफ़ोलियो या ऑनलाइन स्टोर के लिए फ़ोटो कंप्रेस करें। प्रोडक्ट फ़ोटो, बैनर और ब्लॉग इमेज साफ़ रहती हैं और आपके सर्वर पर बहुत कम जगह लेती हैं।',
          'किसी फ़ोटो का फ़ाइल साइज़ कम करें: शेयर करने, सेव करने या प्रिंट करने से पहले अपने फ़ोन या कैमरे की फ़ोटो का फ़ाइल साइज़ कम करें। बड़ी फ़ोटो तेज़ी से भेजी जाती हैं, आसानी से सेव होती हैं और बिना परेशानी के मैनेज होती हैं।',
        ],
      },
      {
        heading: 'इमेज का साइज़ क्यों मायने रखता है',
        body: 'बड़ी, हाई-रिज़ॉल्यूशन इमेज फ़ाइलें कैमरा टेक्नोलॉजी की तेज़ तरक्की का नतीजा हैं: आज की इमेज सिर्फ़ कुछ साल पहले की तुलना में 2 से 3 गुना बड़ी हैं। जब आप अपने वेब पेज की इमेज का साइज़ कम करते हैं और वेब के लिए इमेज ऑप्टिमाइज़ करते हैं, तो आपकी साइट तेज़ी से लोड होती है, कम बैंडविड्थ इस्तेमाल करती है और सर्च रिज़ल्ट में बेहतर रैंक करती है।\n\nअच्छा कंप्रेसर चुनते समय देखें कि: 1) वह क्वालिटी से समझौता न करे, 2) आपका डेटा प्राइवेट रखे (आपके डिवाइस पर प्रोसेसिंग) और 3) आपकी फ़ाइलों को किसी दूर के सर्वर पर भेजे बिना तेज़ी से प्रोसेस करे। CompressMyPic ठीक इसी के लिए बनाया गया है।',
      },
      {
        heading: 'ऑप्टिमाइज़ेशन टिप्स: बिना क्वालिटी खोए इमेज का साइज़ कम करें',
        body: '',
        bullets: [
          'संतुलित प्रीसेट से शुरू करें: संतुलित प्रीसेट (70% क्वालिटी) ज़्यादातर इमेज के लिए सबसे अच्छा संतुलन देता है — बहुत छोटी फ़ाइलें और ओरिजिनल से बड़ी विज़ुअल समानता।',
          'सही फ़ॉर्मेट चुनें: फ़ोटोग्राफ़ के लिए JPG या WebP हमेशा PNG से छोटी फ़ाइलें देंगे। ट्रांसपेरेंसी वाले लोगो और लाइन ग्राफ़िक्स के लिए PNG इस्तेमाल करें।',
          'टारगेट साइज़ तय करें: वेबसाइट पर इस्तेमाल के लिए 200 KB से कम की इमेज का लक्ष्य रखें। ईमेल और मैसेज के लिए तेज़ डिलीवरी के लिए 1 MB से नीचे रहें। अपने टारगेट साइज़ तक पहुँचने के लिए क्वालिटी स्लाइडर और लाइव साइज़ का इस्तेमाल करें।',
          'सही संतुलन खोजें: मुख्य इमेज के लिए क्वालिटी स्लाइडर को 85–90% पर रखें, जहाँ क्वालिटी मायने रखती है; वेबसाइट के सामान्य इस्तेमाल के लिए 70–80% अक्सर सही संतुलन होता है; थंबनेल या जब साइज़ सबसे ज़्यादा मायने रखता हो, तो 50–60% बेहतर है।',
          'सबसे छोटी फ़ाइलों के लिए WebP आज़माएँ: आउटपुट फ़ॉर्मेट को WebP में बदलने से JPG या PNG अक्सर समान क्वालिटी के साथ 25% से 35% और छोटा हो जाता है — बिना क्वालिटी खोए इमेज का साइज़ कम करने का आसान तरीका।',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'अक्सर पूछे जाने वाले सवाल',
    subheading:
      'CompressMyPic से ऑनलाइन मुफ़्त इमेज कंप्रेस करने के बारे में वह सब कुछ जो आपको जानना चाहिए।',
    faqs: [
      {
        id: 'faq-1',
        question: 'ऑनलाइन मुफ़्त इमेज कैसे कंप्रेस करूँ?',
        answer:
          'बस अपनी इमेज फ़ाइलों को CompressMyPic पर ड्रैग करके छोड़ें या “फ़ाइलें ब्राउज़ करें” पर क्लिक करें। कंप्रेशन प्रीसेट (कम, संतुलित या ज़्यादा) चुनें या क्वालिटी स्लाइडर सेट करें, और अपनी ऑप्टिमाइज़ की गई इमेज तुरंत डाउनलोड करें। यह टूल 100% मुफ़्त है — बिना साइन-अप और बिना सॉफ़्टवेयर इंस्टॉल किए।',
      },
      {
        id: 'faq-2',
        question: 'इमेज को 100KB तक कैसे कंप्रेस करूँ?',
        answer:
          'CompressMyPic में सटीक KB साइज़ लिखने का कोई बॉक्स नहीं है, इसलिए आप सीधे 100KB नहीं लिख सकते। इसके बजाय अपनी इमेज अपलोड करें, प्रीसेट चुनें या क्वालिटी स्लाइडर को नीचे लाएँ, और हर इमेज के लिए दिखने वाला पहले-बाद का लाइव साइज़ देखें। क्वालिटी सेट करें या आउटपुट फ़ॉर्मेट को WebP में बदलें, जब तक कंप्रेस किया गया साइज़ 100KB के करीब न आ जाए, फिर डाउनलोड करें।',
      },
      {
        id: 'faq-3',
        question: 'बिना क्वालिटी खोए इमेज का साइज़ कैसे कम करूँ?',
        answer:
          'संतुलित प्रीसेट (लगभग 70% क्वालिटी) या 85–90% की ज़्यादा क्वालिटी चुनें, जो बेकार डेटा और मेटाडेटा हटा देती है, जबकि इमेज फिर भी लगभग ओरिजिनल जैसी ही दिखती है। रिज़ल्ट चेक करने के लिए पहले-बाद की इंटरैक्टिव तुलना का इस्तेमाल करें, और ओरिजिनल फ़ॉर्मेट रखें या क्वालिटी और साइज़ के सबसे अच्छे संतुलन के लिए WebP चुनें।',
      },
      {
        id: 'faq-4',
        question: 'JPEG को 100KB तक कैसे कंप्रेस करूँ?',
        answer:
          'JPEG फ़ाइल का साइज़ कम करने के लिए अपना JPEG अपलोड करें, आउटपुट फ़ॉर्मेट के रूप में JPEG चुनें और लाइव कंप्रेस किया गया साइज़ देखते हुए क्वालिटी स्लाइडर को धीरे-धीरे नीचे लाएँ। सटीक KB साइज़ के लिए कोई बॉक्स नहीं है, इसलिए पहले-बाद के साइज़ व्यू का इस्तेमाल करें और जब फ़ाइल 100KB के करीब आ जाए, तो रुक जाएँ।',
      },
      {
        id: 'faq-5',
        question: 'इमेज का साइज़ 20KB, 50KB या 200KB तक कैसे कम करूँ?',
        answer:
          'अपनी इमेज अपलोड करें और क्वालिटी स्लाइडर को धीरे-धीरे नीचे लाएँ, हर बदलाव के बाद पहले-बाद का लाइव साइज़ चेक करते हुए, जब तक अपने टारगेट तक न पहुँच जाएँ — 200KB, 50KB या 20KB। 20KB जैसे छोटे टारगेट के लिए आमतौर पर कम क्वालिटी और WebP आउटपुट चाहिए। यही तरीका किसी भी टारगेट के लिए काम करता है, 500KB समेत, और साइज़ हमेशा KB में दिखता है ताकि आप देख सकें कि आपने इमेज का साइज़ KB में कितना कम किया।',
      },
      {
        id: 'faq-6',
        question: 'ऑनलाइन मुफ़्त PNG कैसे कंप्रेस करूँ?',
        answer:
          'अपना PNG CompressMyPic पर अपलोड करें और प्रीसेट चुनें या क्वालिटी स्लाइडर सेट करें: यहाँ ऑनलाइन PNG कंप्रेस करना मुफ़्त है, बिना साइन-अप। PNG और WebP आउटपुट में ट्रांसपेरेंसी बनी रहती है, और PNG को WebP में बदलने से वह अक्सर बहुत छोटा हो जाता है।',
      },
      {
        id: 'faq-7',
        question: 'कौन से इमेज फ़ॉर्मेट सपोर्ट किए जाते हैं?',
        answer:
          'CompressMyPic JPG (JPEG), PNG, WebP और HEIC सपोर्ट करता है, iPhone से ली गई फ़ोटो समेत, जो डिफ़ॉल्ट रूप से HEIC में सेव होती हैं। आप ओरिजिनल फ़ॉर्मेट रख सकते हैं या उनके बीच कन्वर्ट कर सकते हैं — जैसे JPG फ़ाइलों को JPEG के रूप में कंप्रेस करें, ट्रांसपेरेंसी बनाए रखते हुए PNG फ़ाइलें कंप्रेस करें, या सबसे छोटी फ़ाइलों के लिए WebP में कन्वर्ट करें।',
      },
      {
        id: 'faq-8',
        question: 'क्या मैं एक साथ कई इमेज कंप्रेस कर सकता हूँ?',
        answer:
          'हाँ। यह बल्क इमेज कंप्रेसर आपको एक साथ दर्जनों इमेज अपलोड करने, एक ही सेटिंग से कई इमेज एक साथ कंप्रेस करने और “सब कुछ डाउनलोड करें (ZIP)” बटन से सभी को एक साथ डाउनलोड करने देता है — या हर एक को अलग से डाउनलोड करें।',
      },
      {
        id: 'faq-9',
        question: 'WhatsApp के लिए इमेज कैसे कंप्रेस करूँ?',
        answer:
          'अपनी फ़ोटो अपलोड करें, कम क्वालिटी वाला प्रीसेट या WebP आउटपुट चुनें, और WhatsApp पर शेयर करने से पहले छोटी फ़ाइल डाउनलोड करें। छोटी फ़ोटो तेज़ी से भेजी जाती हैं, कम मोबाइल डेटा इस्तेमाल करती हैं और उनके ज़्यादा बड़ी होने की वजह से रिजेक्ट होने की संभावना कम होती है।',
      },
      {
        id: 'faq-10',
        question: 'Instagram या Facebook के लिए इमेज कैसे कंप्रेस करूँ?',
        answer:
          'Instagram या Facebook के लिए अपनी फ़ोटो कंप्रेस करने के लिए उसे यहाँ अपलोड करें, संतुलित प्रीसेट चुनें और छोटी JPG या WebP फ़ाइल डाउनलोड करें। छोटी फ़ाइल तेज़ी से अपलोड होती है और पोस्ट, स्टोरी और प्रोफ़ाइल फ़ोटो के लिए काफ़ी क्वालिटी बनाए रखती है।',
      },
      {
        id: 'faq-11',
        question: 'क्या मैं ईमेल अटैचमेंट के लिए इमेज कंप्रेस कर सकता हूँ?',
        answer:
          'हाँ। ईमेल अटैचमेंट के लिए इमेज कंप्रेस करने के लिए क्वालिटी स्लाइडर से उन्हें तब तक छोटा करें, जब तक हर फ़ाइल आपके ईमेल प्रोवाइडर की अटैचमेंट साइज़ सीमा में न आ जाए, और भारी ओरिजिनल की जगह डाउनलोड की गई फ़ाइलों को अपने मैसेज से अटैच करें।',
      },
      {
        id: 'faq-12',
        question: 'क्या CompressMyPic सच में मुफ़्त है?',
        answer:
          'हाँ, CompressMyPic पूरी तरह मुफ़्त है। कोई चार्ज नहीं, कोई पेड प्लान नहीं, कोई क्रेडिट नहीं और आप जितनी इमेज कंप्रेस कर सकते हैं, उस पर कोई सीमा नहीं।',
      },
      {
        id: 'faq-13',
        question: 'क्या CompressMyPic वॉटरमार्क जोड़ता है?',
        answer:
          'नहीं। CompressMyPic बिना वॉटरमार्क वाला मुफ़्त इमेज कंप्रेसर है: आपकी कंप्रेस की गई इमेज साफ़ रहती हैं — कोई लोगो, टेक्स्ट या निशान नहीं जोड़ा जाता।',
      },
      {
        id: 'faq-14',
        question: 'क्या CompressMyPic इस्तेमाल करने के लिए साइन-अप ज़रूरी है?',
        answer:
          'नहीं। यह बिना साइन-अप वाला मुफ़्त इमेज कंप्रेसर है: कोई अकाउंट, ईमेल या पासवर्ड नहीं चाहिए। बस साइट खोलें और कंप्रेस करना शुरू करें।',
      },
      {
        id: 'faq-15',
        question: 'क्या मेरी इमेज किसी सर्वर पर अपलोड होती हैं?',
        answer:
          'नहीं। सारी कंप्रेशन पूरी तरह आपके अपने डिवाइस पर, आपके वेब ब्राउज़र के अंदर होती है, इसलिए आपकी इमेज कभी किसी सर्वर पर अपलोड नहीं होतीं और उन्हें कोई और स्टोर या देख नहीं सकता। वे आपके ब्राउज़र की मेमोरी में रहती हैं और टैब रिफ़्रेश या बंद करने पर मिट जाती हैं।',
      },
      {
        id: 'faq-16',
        question: 'क्या फ़ाइल साइज़ की कोई सीमा है?',
        answer:
          'हाँ, हर इमेज के लिए सीमा 20 MB है, जो हाई-रिज़ॉल्यूशन कैमरा फ़ोटो और बड़े स्क्रीनशॉट को कवर करती है। चूँकि प्रोसेसिंग आपके डिवाइस पर होती है, बड़ी फ़ाइलों के साथ भी कंप्रेशन तेज़ रहती है।',
      },
      {
        id: 'faq-17',
        question: 'क्या इमेज कंप्रेस करने से उसके डाइमेंशन बदल जाते हैं?',
        answer:
          'नहीं। CompressMyPic आपकी इमेज के डाइमेंशन वैसे ही रखता है: सिर्फ़ फ़ाइल साइज़ कम होता है। आपकी फ़ोटो की चौड़ाई, ऊँचाई और अनुपात ओरिजिनल जैसे ही रहते हैं।',
      },
      {
        id: 'faq-18',
        question: 'क्या मैं मोबाइल पर इमेज कंप्रेस कर सकता हूँ?',
        answer:
          'हाँ। CompressMyPic iOS और Android के मोबाइल ब्राउज़र पर काम करता है, इसलिए आप अपनी गैलरी से फ़ोटो चुनकर या नई फ़ोटो लेकर उसे यहाँ अपलोड करके अपने फ़ोन पर फ़ोटो कंप्रेस कर सकते हैं।',
      },
      {
        id: 'faq-19',
        question: 'क्वालिटी स्लाइडर कैसे काम करता है?',
        answer:
          'क्वालिटी स्लाइडर आपको कंप्रेशन क्वालिटी 10% से 100% तक सेट करने देता है। ज़्यादा वैल्यू ज़्यादा डिटेल बचाती हैं और बड़ी फ़ाइलें बनाती हैं, जबकि कम वैल्यू फ़ाइलों को बहुत छोटा कर देती हैं। कम, संतुलित और ज़्यादा प्रीसेट आपके लिए स्लाइडर सेट कर देते हैं, और पहले-बाद का लाइव साइज़ हर बदलाव का नतीजा दिखाता है।',
      },
      {
        id: 'faq-20',
        question: 'आउटपुट फ़ॉर्मेट कैसे चुनूँ?',
        answer:
          'इमेज अपलोड करने के बाद चुनें कि आप ओरिजिनल फ़ॉर्मेट रखना चाहते हैं या JPG, PNG या WebP में कन्वर्ट करना चाहते हैं। वेब पेज के लिए इमेज ऑप्टिमाइज़ करने के लिए WebP आमतौर पर सबसे अच्छा विकल्प है, क्योंकि यह समान क्वालिटी के साथ JPEG से 25% से 35% छोटा होता है, जबकि ट्रांसपेरेंसी चाहिए तो PNG बेहतर है।',
      },
    ],
  },
  guidesSection: {
    heading: 'गाइड्स',
    subheading:
      'दिखने वाली क्वालिटी खोए बिना छोटी फ़ाइलें पाने के लिए स्टेप-बाय-स्टेप गाइड्स।',
    cards: [
      {
        title: 'WhatsApp के लिए इमेज कंप्रेस कैसे करें — बिना क्वालिटी खोए',
        desc: 'भेजने से पहले फ़ोटो का साइज़ कम करें ताकि वे साफ़ रहें और तेज़ी से भेजी जाएँ।',
        cta: 'गाइड पढ़ें →',
      },
      {
        title: 'JPG vs PNG vs WebP: कौन सा फ़ॉर्मेट इस्तेमाल करें?',
        desc: 'फ़ाइल साइज़, क्वालिटी और ट्रांसपेरेंसी की तुलना, ताकि आप सही फ़ॉर्मेट चुन सकें।',
        cta: 'गाइड पढ़ें →',
      },
      {
        title: 'वेब और ईमेल के लिए इमेज का साइज़ 100KB तक कैसे कम करें',
        desc: 'स्टेप-बाय-स्टेप: बिना दिखने वाली क्वालिटी खोए 100KB तक पहुँचें।',
        cta: 'गाइड पढ़ें →',
      },
    ],
  },
  blog: {
    blog: 'ब्लॉग',
    homeHeading: 'इमेज गाइड्स, ट्यूटोरियल और रिसोर्सेज़',
    homeSubheading:
      'इमेज कंप्रेस, रीसाइज़, कन्वर्ट और एडिट करने की प्रैक्टिकल गाइड्स — असली कामों के लिए लिखी गईं, सर्च इंजन के लिए नहीं।',
    searchPlaceholder: 'गाइड्स खोजें…',
    searchNoResults: '“{query}” के लिए कोई गाइड नहीं मिली।',
    featuredHeading: 'फ़ीचर्ड गाइड्स',
    latestHeading: 'नवीनतम गाइड्स ({count})',
    categoriesHeading: 'कैटेगरी के हिसाब से देखें',
    emptyHeading: 'अभी कोई गाइड नहीं है',
    emptyText:
      'हम इस सेक्शन की पहली गाइड्स लिख रहे हैं। जल्द वापस आएँ — या मुफ़्त टूल्स में से कोई आज़माएँ।',
    readArticle: 'गाइड पढ़ें →',
    minRead: '{minutes} मिनट में पढ़ें',
    publishedOn: '{date} को प्रकाशित',
    updatedOn: '{date} को अपडेट किया गया',
    bylineAuthor: 'CompressMyPic एडिटोरियल टीम',
    tableOfContents: 'इस पेज पर',
    faqHeading: 'अक्सर पूछे जाने वाले सवाल',
    relatedArticlesHeading: 'संबंधित गाइड्स',
    relatedToolsHeading: 'टूल आज़माएँ',
    tryToolCta: '{tool} आज़माएँ — मुफ़्त, बिना साइन-अप',
    prevArticle: '← पिछली गाइड',
    nextArticle: 'अगली गाइड →',
    backToBlog: '← ब्लॉग पर वापस जाएँ',
    shareHeading: 'इस गाइड को शेयर करें',
    copyLink: 'लिंक कॉपी करें',
    copied: 'कॉपी हो गया!',
    shareOnX: 'X पर शेयर करें',
    shareOnFacebook: 'Facebook पर शेयर करें',
    shareOnWhatsApp: 'WhatsApp पर शेयर करें',
    notAvailableHeading: 'यह गाइड अभी आपकी भाषा में उपलब्ध नहीं है',
    notAvailableText:
      'हम अभी इस गाइड का अनुवाद कर रहे हैं। आप इसे अंग्रेज़ी में पढ़ सकते हैं या अपनी भाषा में उपलब्ध गाइड्स देख सकते हैं।',
    viewBlogHome: 'ब्लॉग देखें',
    guidesHeading: 'हमारी स्टेप-बाय-स्टेप गाइड्स',
    categoryGuidesHeading: 'गाइड्स: {category}',
    relatedArticlesForTool: 'संबंधित गाइड्स: {tool}',
  },
  shareSection: {
    heading: 'CompressMyPic अपने दोस्तों के साथ शेयर करें',
    text: 'क्या यह टूल आपके काम आया? किसी दोस्त की भी इमेज कंप्रेस करने में मदद करें — बस एक टैप में।',
    shareText:
      'ऑनलाइन मुफ़्त इमेज कंप्रेस करें — बिना साइन-अप, बिना वॉटरमार्क। CompressMyPic आज़माएँ:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: '{name} पर शेयर करें',
    copyLink: 'लिंक कॉपी करें',
    copied: 'कॉपी हो गया!',
    share: 'शेयर करें',
    emailSubject: 'मुफ़्त इमेज कंप्रेसर – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – मुफ़्त इमेज कंप्रेसर', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'होम',
    privacyPill: 'ब्राउज़र में 100% प्राइवेट प्रोसेसिंग · फ़ाइलें कभी आपके डिवाइस से बाहर नहीं जातीं',
    noUploads: 'सर्वर पर कोई अपलोड नहीं',
    freeNote: 'मुफ़्त · बिना साइन-अप · बिना वॉटरमार्क',
    howToTitle: '{name} कैसे इस्तेमाल करें',
    howToIntro:
      'अपना काम सीधे अपने ब्राउज़र में पूरा करने के लिए इन आसान स्टेप को फ़ॉलो करें।',
    featuresTitle: 'CompressMyPic का {name} क्यों इस्तेमाल करें?',
    faqTitle: '{name} — अक्सर पूछे जाने वाले सवाल',
    relatedTitle: 'संबंधित मुफ़्त इमेज टूल्स',
    relatedLinksIntro: 'आपको यह भी चाहिए हो सकता है:',
    shareHeading: 'इस टूल को शेयर करें',
    shareCopyLink: 'लिंक कॉपी करें',
    shareCopied: 'कॉपी हो गया!',
    shareOnX: 'X पर शेयर करें',
    shareOnFacebook: 'Facebook पर शेयर करें',
    shareOnWhatsApp: 'WhatsApp पर शेयर करें',
    commentsTitle: 'कमेंट्स',
    commentsNote: 'इस टूल के बारे में अपनी राय शेयर करें: बस अपना नाम लिखें और पोस्ट करें। अकाउंट की ज़रूरत नहीं।',
    commentsNamePlaceholder: 'आपका नाम',
    commentsTextPlaceholder: 'अपना कमेंट लिखें…',
    commentsSubmit: 'कमेंट पोस्ट करें',
    commentsPosting: 'पोस्ट हो रहा है…',
    commentsEmpty: 'पहला कमेंट करने वाले बनें।',
    commentsPosted: 'धन्यवाद! आपका कमेंट पोस्ट हो गया है।',
    commentsLoadError: 'कमेंट्स लोड नहीं हो सके। फिर से कोशिश करें।',
    commentsPostError: 'आपका कमेंट पोस्ट नहीं हो सका। फिर से कोशिश करें।',
    commentsRetry: 'फिर से कोशिश करें',
    commentsLoading: 'कमेंट्स लोड हो रहे हैं…',
  },
  uploadZone: {
    dropText: 'अपनी इमेज यहाँ ड्रैग करके छोड़ें',
    browseButton: 'फ़ाइलें ब्राउज़ करें',
    browsePrefix: 'या',
    browseSuffix: 'अपने कंप्यूटर या फ़ोन से',
    orPaste: 'पेस्ट (Ctrl+V) भी चलेगा',
    hint: 'हर इमेज के लिए ज़्यादा से ज़्यादा {max} MB',
    errorTooBig: '"{name}" {max} MB की सीमा से ज़्यादा है।',
    errorBadType: '"{name}" सपोर्ट किए जाने वाले फ़ॉर्मेट में नहीं है ({formats})।',
    errorUnreadable: '"{name}" खाली फ़ाइल है (0 बाइट्स)।',
    errorMore: '(+{count} और एरर)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'इमेज अपलोड करने का एरिया। ड्रैग करके छोड़ें या फ़ाइलें ब्राउज़ करने के लिए क्लिक करें।', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'क्वालिटी की विज़ुअल तुलना',
    beforeLabel: 'ओरिजिनल (पहले)',
    afterLabel: 'कंप्रेस की गई (बाद में)',
    closeLabel: 'तुलना व्यू बंद करें',
    instruction: 'हर पिक्सल की क्वालिटी चेक करने के लिए स्लाइडर को बाएँ या दाएँ खींचें।',
    sliderLabel: 'स्लाइडर',
    sideBySideLabel: 'साथ-साथ',
    zoomInLabel: 'ज़ूम इन करें',
    zoomOutLabel: 'ज़ूम आउट करें',
    originalLabel: 'ओरिजिनल:',
    outputLabel: 'रिज़ल्ट:',
    reductionLabel: 'कमी:',
    sizeChangeLabel: 'साइज़ में बदलाव:',
    qualityLabel: 'क्वालिटी सेटिंग:',
    formatLabel: 'फ़ॉर्मेट:',
    modalAriaLabel: 'इमेज तुलना विंडो', // 'Image comparison modal'
    altCompressed: '{name} का कंप्रेस किया गया वर्ज़न', // 'Compressed version of {name}'
    altOriginal: '{name} का ओरिजिनल वर्ज़न', // 'Original version of {name}'
    altProcessed: '{name} का प्रोसेस किया गया वर्ज़न', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'मुफ़्त इमेज कंप्रेसर – ऑनलाइन फ़ोटो कंप्रेस करें',
    seoDescription: 'ऑनलाइन मुफ़्त इमेज कंप्रेस करें और बिना क्वालिटी खोए JPG, PNG और WebP का साइज़ कम करें। बिना साइन-अप और बिना वॉटरमार्क — आपकी फ़ोटो कभी ब्राउज़र से बाहर नहीं जातीं।',
    h1: 'मुफ़्त इमेज कंप्रेसर – ऑनलाइन इमेज कंप्रेस करें',
    subtitle: 'JPG, PNG, WebP और HEIC फ़ाइलों का साइज़ सीधे अपने ब्राउज़र में कम करें।',
  },
  categories: {
    compress: 'कंप्रेस करें',
    resize: 'रीसाइज़ करें',
    convert: 'कन्वर्ट करें',
    'crop-edit': 'क्रॉप और एडिट करें',
    create: 'बनाएँ',
    privacy: 'प्राइवेसी टूल्स',
    developer: 'डेवलपर टूल्स',
  },
  compressionControls: {
    modeLabel: 'कंप्रेशन मोड', // 'Compression Mode'
    presetLow: 'कम कंप्रेशन (85%)', // 'Low Compression (85%)'
    presetBalanced: 'संतुलित (70%)', // 'Balanced (70%)'
    presetHigh: 'ज़्यादा कंप्रेशन (50%)', // 'High Compression (50%)'
    presetCustom: 'कस्टम', // 'Custom'
    formatLabel: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original'
    qualityLabel: 'टारगेट क्वालिटी:', // 'Quality Target:'
    qualityHigh: 'हाई फ़िडेलिटी', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'वेब के लिए सही संतुलन', // 'Optimal Web Balance' (60–79)
    qualityMax: 'ज़्यादा से ज़्यादा जगह बचाएँ', // 'Max Space Savings' (< 60)
    qualityAriaLabel: '10 से 100 प्रतिशत तक क्वालिटी स्लाइडर', // 'Quality slider from 10 to 100 percent'
    compressAll: 'सब कुछ फिर से कंप्रेस करें', // 'Re-compress All'
    compressing: 'कंप्रेस हो रहा है…', // 'Compressing...'
    clearAll: 'सब साफ़ करें', // 'Clear All'
    clearAllTitle: 'सभी इमेज हटाएँ', // 'Clear all images'
    transparencyTitle: 'JPEG कन्वर्ज़न के लिए ट्रांसपेरेंसी नोटिस', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'JPEG फ़ॉर्मेट ट्रांसपेरेंसी (अल्फ़ा चैनल) सपोर्ट नहीं करता। ट्रांसपेरेंट बैकग्राउंड की जगह सॉलिड बैकग्राउंड (डिफ़ॉल्ट रूप से सफ़ेद) आ जाएगा। ट्रांसपेरेंट बैकग्राउंड बनाए रखने के लिए PNG या WebP चुनें।',
    pngTip:
      'PNG लॉसलेस फ़ॉर्मेट है और क्वालिटी स्लाइडर को अनदेखा करता है, इसलिए PNG को दोबारा एनकोड करने पर वह कभी-कभी ओरिजिनल जितना बड़ा या उससे भी बड़ा हो सकता है। फ़ोटो जैसी PNG के लिए WebP या JPG चुनने से अक्सर 50% से 80% छोटी फ़ाइलें मिलती हैं।',
  },
  resultsList: {
    summary: 'कंप्रेशन सारांश', // 'Compression Summary'
    image: 'इमेज', // 'Image' (count === 1)
    images: 'इमेज', // 'Images' (count !== 1)
    totalOriginal: 'कुल ओरिजिनल:', // 'Total Original:'
    totalCompressed: 'कुल कंप्रेस किया गया:', // 'Total Compressed:'
    totalSaved: 'कुल बचत:', // 'Total Saved:'
    processing: 'प्रोसेस हो रहा है…', // 'Processing...'
    grewBy: '({bytes} बढ़ गया)', // '(grew by {bytes})'
    reduction: 'कमी:', // 'Reduction:'
    sizeChange: 'साइज़ में बदलाव:', // 'Size Change:'
    downloadAll: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP बन रहा है ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'तुलना करें', // 'Compare'
    compareTitle: 'क्वालिटी की विज़ुअल तुलना देखने के लिए क्लिक करें', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'पहले और बाद की तुलना करें', // 'Compare visual before/after'
    download: 'डाउनलोड करें', // 'Download'
    retry: 'फिर से कोशिश करें', // 'Retry'
    removeTitle: 'इमेज हटाएँ', // 'Remove image'
    removeAriaLabel: '{name} हटाएँ', // 'Remove {name}'
    keptOriginal: 'ओरिजिनल रखा गया (दोबारा एनकोड करने पर बड़ा हो रहा था)', // 'Kept original (re-encode was larger)'
    grewByStatus: '{bytes} बढ़ गया: दोबारा एनकोड करने पर ओरिजिनल से बड़ा हो गया', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'सही से कंप्रेस हुआ', // 'Compressed successfully'
    optimizing: 'पिक्सल ऑप्टिमाइज़ हो रहे हैं…', // 'Optimizing pixels...'
    compressionError: 'कंप्रेशन एरर', // 'Compression error'
    original: 'ओरिजिनल', // 'Original' (metric label)
    compressed: 'कंप्रेस किया गया', // 'Compressed' (metric label)
    output: 'आउटपुट', // 'Output' (metric label when original kept)
    spaceSaved: 'बचाई गई जगह', // 'Space Saved'
    formatLabel: 'फ़ॉर्मेट:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'अल्फ़ा', // 'Alpha' badge
    largerTitle: 'आउटपुट ओरिजिनल से {bytes} बड़ा है।', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'लॉसलेस PNG री-एनकोडिंग क्वालिटी स्लाइडर को अनदेखा करती है; फ़ोटो जैसी PNG के लिए WebP या JPG आमतौर पर बहुत छोटा होता है।',
    largerNote:
      'यह इमेज चुनी गई क्वालिटी के लिए पहले से ही बहुत ज़्यादा कंप्रेस की हुई थी।',
    keepOriginal: 'ओरिजिनल रखें', // 'Keep original'
  },
} as const;

export const TOOL_UI_HI = {
  '/image-resizer': {
    comparisonTitlePrefix: 'साइज़ की तुलना', // 'Resize Comparison'
    comparisonAfterLabel: 'रीसाइज़ की गई (बाद में)', // 'Resized (After)'
    presetInstagramPost: 'Instagram पोस्ट (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Instagram स्टोरी (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'YouTube थंबनेल (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Facebook कवर (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'X हेडर (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'इमेज रीसाइज़ नहीं हो सकी।', // 'Resize failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    resizeMode: 'रीसाइज़ मोड', // 'Resize Mode'
    modeByPixels: 'पिक्सल से (चौड़ाई × ऊँचाई)', // 'By Pixels (W × H)'
    modeByPercentage: 'प्रतिशत से (%)', // 'By Percentage (%)'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'चौड़ाई (px)', // 'Width (px)'
    heightLabel: 'ऊँचाई (px)', // 'Height (px)'
    placeholderAuto: 'ऑटो', // placeholder 'Auto'
    aspectRatioLocked: 'अनुपात लॉक है', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'अनलॉक (कस्टम)', // 'Unlocked (Custom)'
    fitModeLabel: 'फ़िट मोड:', // 'Fit Mode:'
    fitContain: 'कंटेन (बिना क्रॉप)', // 'Contain (No Crop)'
    fitCover: 'कवर (सेंटर क्रॉप)', // 'Cover (Center Crop)'
    fitStretchExact: 'सटीक स्ट्रेच', // 'Stretch Exact'
    quickPresets: 'सोशल और वेब के लिए क्विक प्रीसेट', // 'Quick Social & Web Presets'
    scalePercentage: 'स्केल प्रतिशत:', // 'Scale Percentage:'
    outputQuality: 'आउटपुट क्वालिटी:', // 'Output Quality:'
    matteBg: 'मैट बैकग्राउंड:', // 'Matte BG:'
    resizing: 'रीसाइज़ हो रहा है…', // 'Resizing...'
    resizeAll: 'सब कुछ रीसाइज़ करें ({count})', // 'Resize All ({count})'
    clear: 'साफ़ करें', // 'Clear'
    batchReady: 'बैच तैयार है', // 'Batch Ready'
    batchReadySingular: '{count} रीसाइज़ की गई इमेज डाउनलोड के लिए तैयार है', // '{count} resized image ready to download'
    batchReadyPlural: '{count} रीसाइज़ की गई इमेज डाउनलोड के लिए तैयार हैं', // '{count} resized images ready to download'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'रीसाइज़ हो गई ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'फ़ॉर्मेट कन्वर्ज़न की तुलना', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'कन्वर्ट की गई (बाद में)', // 'Converted (After)'
    errorConversionFailed: 'इमेज कन्वर्ट नहीं हो सकी।', // 'Conversion failed.'
    errorUnsupportedFile: 'इमेज फ़ाइल सपोर्ट नहीं की जाती या खराब है।', // 'Unsupported or corrupted image file.'
    convertToFormat: 'इस फ़ॉर्मेट में कन्वर्ट करें', // 'Convert To Format'
    formatWebp: 'WebP (वेब के लिए सबसे हल्का)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (यूनिवर्सल)', // 'JPG (Universal)'
    formatPng: 'PNG (लॉसलेस और ट्रांसपेरेंसी)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'ट्रांसपेरेंसी फ़िल कलर', // 'Transparency Fill Color'
    quality: 'क्वालिटी', // 'Quality'
    qualityLosslessPng: 'लॉसलेस PNG', // 'Lossless PNG'
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    convertAll: 'सब कुछ कन्वर्ट करें ({count})', // 'Convert All ({count})'
    clear: 'साफ़ करें', // 'Clear'
    conversionComplete: 'कन्वर्ज़न पूरा हुआ', // 'Conversion Complete'
    filesConverted: '{count} फ़ाइलें {format} में कन्वर्ट हुईं', // '{count} files converted to {format}'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    convertedStatus: '{ext} में कन्वर्ट हुई', // 'Converted to {ext}'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
  },
  '/image-cropper': {
    uploadTitle: 'इंटरैक्टिव क्रॉप के लिए इमेज छोड़ें', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorCanvasContext: 'कैनवस कॉन्टेक्स्ट शुरू नहीं हो सका।', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'क्रॉप एक्सपोर्ट नहीं हो सका।', // 'Crop export failed.'
    aspectFree: 'फ़्री', // aspect preset 'Free'
    selection: 'सेलेक्शन:', // 'Selection:'
    zoomOut: 'ज़ूम आउट करें', // aria-label 'Zoom out'
    zoomIn: 'ज़ूम इन करें', // aria-label 'Zoom in'
    removeImage: 'इमेज हटाएँ', // aria-label 'Remove image'
    cropSourceAlt: 'क्रॉप करने के लिए सोर्स इमेज', // alt 'Crop source'
    originalLabel: 'ओरिजिनल:', // 'Original:'
    cropOptions: 'क्रॉप ऑप्शन', // 'Crop Options'
    selectFull: 'पूरी सेलेक्ट करें', // 'Select Full'
    aspectRatioPreset: 'अनुपात प्रीसेट', // 'Aspect Ratio Preset'
    cropWidth: 'क्रॉप चौड़ाई', // 'Crop Width'
    cropHeight: 'क्रॉप ऊँचाई', // 'Crop Height'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    cropping: 'क्रॉप हो रहा है…', // 'Cropping...'
    cropAndDownload: 'क्रॉप करें और डाउनलोड करें', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'टेक्स्ट या लोगो वॉटरमार्क जोड़ने के लिए इमेज छोड़ें', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorUnableToLoadLogo: 'लोगो इमेज लोड नहीं हो सकी।', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'वॉटरमार्क वाली इमेज एक्सपोर्ट नहीं हो सकी।', // 'Watermark export failed.'
    fallbackWatermarkText: 'वॉटरमार्क', // canvas fallback text 'Watermark'
    tiledPreview: 'टाइल्ड प्रीव्यू', // 'Tiled Preview'
    dragToPosition: 'जगह तय करने के लिए इमेज पर ड्रैग करें', // 'Drag on Image to Position'
    changeImage: 'इमेज बदलें', // 'Change Image'
    watermarkType: 'वॉटरमार्क टाइप', // 'Watermark Type'
    modeText: 'टेक्स्ट वॉटरमार्क', // 'Text Watermark'
    modeLogo: 'लोगो इमेज', // 'Logo Image'
    watermarkTextLabel: 'वॉटरमार्क टेक्स्ट', // 'Watermark Text'
    placeholderBrand: '© आपका ब्रांड', // placeholder '© Your Brand'
    textColor: 'टेक्स्ट कलर', // 'Text Color'
    size: 'साइज़', // 'Size'
    uploadLogo: 'लोगो अपलोड करें (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'लोगो इमेज बदलें', // 'Change Logo Image'
    logoWidth: 'लोगो चौड़ाई', // 'Logo Width'
    opacity: 'ओपैसिटी', // 'Opacity'
    rotation: 'रोटेशन', // 'Rotation'
    tiledRepeatPattern: 'टाइल्ड रिपीट पैटर्न', // 'Tiled Repeat Pattern'
    tileSpacing: 'टाइल स्पेसिंग', // 'Tile Spacing'
    anchorPresets: 'पहले से तय जगह (या इमेज पर ड्रैग करें)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'ओरिजिनल', // 'Orig' — same abbreviation in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadWatermarked: 'वॉटरमार्क वाली इमेज डाउनलोड करें', // 'Download Watermarked Image'
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'क्विक रोटेट और फ़्लिप', // 'Quick Rotate & Flip'
    rotate90Left: '90° बाएँ घुमाएँ', // 'Rotate 90° Left'
    rotate90Right: '90° दाएँ घुमाएँ', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'हॉरिज़ॉन्टल फ़्लिप करें', // 'Flip Horizontal'
    flipVertical: 'वर्टिकल फ़्लिप करें', // 'Flip Vertical'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'रोटेशन एंगल:', // 'Rotation Angle:'
    resetTo0: '0° पर रीसेट करें', // 'Reset to 0°'
    applyAngle: 'एंगल लागू करें', // 'Apply Angle'
    clear: 'साफ़ करें', // 'Clear'
    batchReady: 'बैच तैयार है', // 'Batch Ready'
    transformedImagesReady: '{count} बदली हुई इमेज तैयार हैं', // '{count} transformed images ready'
    creatingZip: 'ZIP बन रहा है...', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: '{angle}° घुमाई गई', // 'Rotated {angle}°'
    flippedH: ' · H फ़्लिप', // ' · Flipped H'
    flippedV: ' · V फ़्लिप', // ' · Flipped V'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeItem: '{name} हटाएँ', // 'Remove {name}' (aria-label)
    transformFailed: 'इमेज बदलने में एरर आया।', // 'Transform failed.'
    corruptedImage: 'इमेज खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'रोटेट और फ़्लिप की तुलना', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'एडिट की गई (बाद में)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'PDF में जोड़ने के लिए इमेज छोड़ें', // 'Drop images to combine into PDF'
    couldNotRead: '"{filename}" पढ़ी नहीं जा सकी। कृपया पक्का करें कि यह सही इमेज है।', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'PDF बनाने में एरर आया।', // 'PDF generation failed.'
    encodingPage: 'पेज {current} / {total} एनकोड हो रहा है...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'PDF बन रहा है...', // 'Generating PDF...'
    pageSize: 'पेज साइज़', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'US Letter (8.5 × 11 in)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'इमेज साइज़ के हिसाब से', // 'Fit to Image Size'
    orientation: 'ओरिएंटेशन', // 'Orientation'
    orientationAuto: 'ऑटो (फ़ोटो के हिसाब से)', // 'Auto (Match Photo)'
    orientationPortrait: 'पोर्ट्रेट', // 'Portrait'
    orientationLandscape: 'लैंडस्केप', // 'Landscape'
    margin: 'मार्जिन', // 'Margin'
    marginNone: 'बिना मार्जिन (फ़ुल ब्लीड)', // 'No Margin (Full Bleed)'
    marginSmall: 'छोटा मार्जिन', // 'Small Margin'
    marginMedium: 'मीडियम मार्जिन', // 'Medium Margin'
    imagePlacement: 'इमेज प्लेसमेंट', // 'Image Placement'
    placementContain: 'कंटेन (पूरी इमेज)', // 'Contain (Full Image)'
    placementCover: 'कवर (पेज भरें)', // 'Cover (Fill Page)'
    pdfFilename: 'PDF फ़ाइल का नाम', // 'PDF Filename'
    pdfImageQuality: 'PDF इमेज क्वालिटी:', // 'PDF Image Quality:'
    createDownloadPdf: 'PDF बनाएँ और डाउनलोड करें ({count} पेज)', // 'Create & Download PDF ({count}p)'
    clear: 'साफ़ करें', // 'Clear'
    pdfReady: 'PDF तैयार है ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'पेज', // 'page'
    pagePlural: 'पेज', // 'pages'
    downloadPdfAgain: 'PDF फिर से डाउनलोड करें', // 'Download PDF Again'
    pageOrder: 'पेज ऑर्डर ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'पेज', // 'Page' (in Page Order heading)
    pageOrderPlural: 'पेज', // 'Pages' (in Page Order heading)
    movePageUp: 'पेज ऊपर ले जाएँ', // 'Move page up' (title)
    movePageDown: 'पेज नीचे ले जाएँ', // 'Move page down' (title)
    removePage: 'पेज हटाएँ', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'EXIF और मेटाडेटा देखने के लिए इमेज छोड़ें', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'इमेज का मेटाडेटा पढ़ा नहीं जा सका।', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'एम्बेडेड मेटाडेटा मिला ({count} टैग टाइप)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'कोई छिपा हुआ EXIF, GPS या कैमरा टैग नहीं मिला', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'मेटाडेटा हटाएँ', // 'Strip Metadata'
    copyJson: 'JSON कॉपी करें', // 'Copy JSON'
    copiedJson: 'JSON कॉपी हो गया', // 'Copied JSON'
    exportJson: 'JSON एक्सपोर्ट करें', // 'Export JSON'
    clear: 'साफ़ करें', // 'Clear' (title)
    gpsDetected: 'GPS लोकेशन कोऑर्डिनेट मिले', // 'GPS Location Coordinates Detected'
    latitude: 'अक्षांश:', // 'Latitude:'
    longitude: 'देशांतर:', // 'Longitude:'
    gpsWarning:
      'इस इमेज को ऐसे ही शेयर करने से पता चल सकता है कि फ़ोटो कहाँ ली गई थी। ऑनलाइन पोस्ट करने से पहले मेटाडेटा हटाने वाला टूल इस्तेमाल करें।', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: 'निकाला गया मेटाडेटा ({count} प्रॉपर्टी)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'प्राइवेसी टैग', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'EXIF, GPS और मेटाडेटा हटाने के लिए फ़ोटो छोड़ें', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'मेटाडेटा हटाया नहीं जा सका।', // 'Failed to strip metadata.'
    strippingMethod: 'हटाने का तरीका', // 'Stripping Method'
    losslessStrip: 'लॉसलेस बाइनरी स्ट्रिप (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'फ़ुल कैनवस री-एनकोड', // 'Full Canvas Re-encode'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'री-एनकोड क्वालिटी (WebP/HEIC या फ़ुल री-एनकोड के लिए):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'साफ़ हो रहा है...', // 'Cleaning...'
    recleanAll: 'सब कुछ फिर से साफ़ करें', // 'Re-clean All'
    clear: 'साफ़ करें', // 'Clear'
    privacyVerified: 'प्राइवेसी वेरिफ़ाइड', // 'Privacy Verified'
    cleanImagesReady: '{count} साफ़ इमेज तैयार हैं, मेटाडेटा हटा दिया गया है', // '{count} clean images ready with metadata stripped'
    creatingZip: 'ZIP बन रहा है...', // 'Creating ZIP...'
    downloadAllCleanZip: 'सभी साफ़ इमेज डाउनलोड करें (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: '{before} मेटाडेटा टैग हटाए गए → {after} बाकी हैं', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'वेरिफ़ाइड साफ़ (0 EXIF/GPS टैग)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'लॉसलेस बाइनरी स्ट्रिप', // 'Lossless binary strip'
    cleanCanvasExport: 'साफ़ कैनवस एक्सपोर्ट', // 'Clean Canvas export'
    scrubbing: 'EXIF और GPS हेडर हटाए जा रहे हैं...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'साफ़ इमेज डाउनलोड करें', // 'Download Clean'
    removeItem: '{name} हटाएँ', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'अपना लोगो या आइकन यहाँ छोड़ें', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'चौकोर PNG या SVG बेहतर है · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'फ़ाइल ब्राउज़ करें', // 'browse file'
    errorGenerateFailed: 'फ़ेविकॉन पैकेज नहीं बन सका।', // 'Failed to generate favicon package.'
    backgroundFill: 'बैकग्राउंड फ़िल', // 'Background Fill'
    transparent: 'ट्रांसपेरेंट', // 'Transparent'
    padding: 'पैडिंग', // 'Padding'
    cornerRadius: 'कोने का रेडियस', // 'Corner Radius'
    tabPreviewAlt: 'टैब प्रीव्यू', // alt 'Tab preview'
    myWebsite: 'मेरी वेबसाइट', // 'My Website'
    darkTabPreviewAlt: 'डार्क टैब प्रीव्यू', // alt 'Dark tab preview'
    darkModeTab: 'डार्क मोड टैब', // 'Dark Mode Tab'
    packingZip: 'ZIP पैक हो रहा है…', // 'Packing ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    clear: 'साफ़ करें', // title 'Clear'
    downloadFaviconIco: 'favicon.ico डाउनलोड करें', // title 'Download favicon.ico'
    downloadFile: '{filename} डाउनलोड करें', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML <head> स्निपेट', // 'HTML <head> Snippet'
    copied: 'कॉपी हो गया!', // 'Copied!'
    copyHtml: 'HTML कॉपी करें', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'इमेज छोड़ें या स्क्रीनशॉट पेस्ट करें (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    clickAnywhereToPin: 'कलर पिन करने के लिए कहीं भी क्लिक करें', // 'Click anywhere to pin a color'
    newImage: 'नई इमेज', // 'New Image'
    pixelInspector: 'पिक्सल इंस्पेक्टर', // 'Pixel Inspector'
    copyLabel: '{label} कॉपी करें', // title `Copy ${row.label}`
    pickedSwatches: 'सेव किए गए स्वॉच ({count})', // 'Picked Swatches ({palette.length})'
    exportCss: 'CSS एक्सपोर्ट करें', // 'Export CSS'
    clickPixelsHint: 'कलर अपनी पैलेट में सेव करने के लिए इमेज के पिक्सल पर क्लिक करें।', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'सेलेक्ट करके {hex} कॉपी करने के लिए क्लिक करें', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'सटीक डाइमेंशन और अनुपात देखने के लिए इमेज छोड़ें', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'कम से कम चौड़ाई (px)', // 'Min Width Check (px)'
    minHeightCheck: 'कम से कम ऊँचाई (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'जैसे, 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'जैसे, 630', // placeholder 'e.g. 630'
    exportCsv: 'CSV एक्सपोर्ट करें', // 'Export CSV'
    exportJson: 'JSON एक्सपोर्ट करें', // 'Export JSON'
    clear: 'साफ़ करें', // 'Clear'
    headerImage: 'इमेज', // table header 'Image'
    headerDimensions: 'डाइमेंशन', // table header 'Dimensions'
    headerAspectRatio: 'अनुपात', // table header 'Aspect Ratio'
    headerOrientation: 'ओरिएंटेशन', // table header 'Orientation'
    headerSizeFormat: 'साइज़ / फ़ॉर्मेट', // table header 'Size / Format'
    headerPrint300Dpi: '300 DPI पर प्रिंट', // table header 'Print @300 DPI'
    headerSpecCheck: 'स्पेसिफ़िकेशन चेक', // table header 'Spec Check'
    orientationLandscape: 'लैंडस्केप', // 'Landscape'
    orientationPortrait: 'पोर्ट्रेट', // 'Portrait'
    orientationSquare: 'चौकोर', // 'Square'
    alphaTag: ' · अल्फ़ा', // ' · Alpha'
    specPass: 'पास', // 'Pass'
    specBelowMin: 'कम से कम से नीचे', // 'Below Min'
    csvYes: 'हाँ', // CSV value 'Yes'
    csvNo: 'नहीं', // CSV value 'No'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'ब्लर या पिक्सेलेट करने के लिए इमेज छोड़ें', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एक्सपोर्ट में एरर आया।', // 'Export failed.'
    paintOverAreasBlur: 'ब्लर करने के लिए एरिया पर पेंट करें', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'पिक्सेलेट करने के लिए एरिया पर पेंट करें', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'पूरी इमेज का प्रीव्यू', // 'Whole-Image Preview'
    undo: 'अनडू करें', // 'Undo'
    resetBrush: 'ब्रश रीसेट करें', // 'Reset Brush'
    removeImage: 'इमेज हटाएँ', // aria-label 'Remove image'
    targetArea: 'टारगेट एरिया', // 'Target Area'
    brushArea: 'ब्रश एरिया', // 'Brush Area'
    wholeImage: 'पूरी इमेज', // 'Whole Image'
    effectStyle: 'इफ़ेक्ट स्टाइल', // 'Effect Style'
    pixelateMosaic: 'पिक्सेलेट मोज़ेक', // 'Pixelate Mosaic'
    smoothBlur: 'स्मूद ब्लर', // 'Smooth Blur'
    blurRadius: 'ब्लर रेडियस', // 'Blur Radius'
    mosaicBlockSize: 'मोज़ेक ब्लॉक साइज़', // 'Mosaic Block Size'
    brushSize: 'ब्रश साइज़', // 'Brush Size'
    brushHint: 'चेहरे, टेक्स्ट या नंबर प्लेट छिपाने के लिए फ़ोटो पर सीधे क्लिक करके ड्रैग करें।', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'ओरिजिनल', // 'Orig' — same abbreviation in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadImage: 'इमेज डाउनलोड करें', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'कस्टम टेक्स्ट ओवरले जोड़ने के लिए इमेज छोड़ें', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एक्सपोर्ट में एरर आया।', // 'Export failed.'
    dragAnyText: 'किसी भी टेक्स्ट को इमेज पर सीधे ड्रैग करें', // 'Drag Any Text Directly on Image'
    changeImage: 'इमेज बदलें', // 'Change Image'
    textLayer: 'टेक्स्ट {index}', // tab `Text ${idx + 1}`
    add: 'जोड़ें', // 'Add'
    deleteActiveTextLayer: 'एक्टिव टेक्स्ट लेयर हटाएँ', // aria-label 'Delete active text layer'
    textContent: 'टेक्स्ट कंटेंट (कई लाइन सपोर्ट करता है)', // 'Text Content (multi-line supported)'
    font: 'फ़ॉन्ट', // 'Font'
    fontInter: 'Inter / साफ़ Sans', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / मीम डिस्प्ले', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / क्लासिक Serif', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / मोनोस्पेस', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / गोल Sans', // font option 'Trebuchet / Rounded Sans'
    fill: 'फ़िल', // 'Fill'
    toggleBold: 'बोल्ड चालू/बंद करें', // aria-label 'Toggle Bold'
    toggleItalic: 'इटैलिक चालू/बंद करें', // aria-label 'Toggle Italic'
    size: 'साइज़', // 'Size'
    rotation: 'रोटेशन', // 'Rotation'
    textOutline: 'टेक्स्ट आउटलाइन', // 'Text Outline'
    dropShadow: 'ड्रॉप शैडो', // 'Drop Shadow'
    defaultLayerText: 'डबल-टैप करें या टेक्स्ट एडिट करें', // default layer text 'Double-tap or edit text'
    defaultCaption: 'कैप्शन {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'ओरिजिनल', // 'Orig' — same abbreviation in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadImageWithText: 'टेक्स्ट वाली इमेज डाउनलोड करें', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'कस्टम बॉर्डर या फ़्रेम जोड़ने के लिए इमेज छोड़ें', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एक्सपोर्ट में एरर आया।', // 'Export failed.'
    framedPreview: 'फ़्रेम वाला प्रीव्यू', // 'Framed Preview'
    changeImage: 'इमेज बदलें', // 'Change Image'
    quickFramePresets: 'क्विक फ़्रेम प्रीसेट', // 'Quick Frame Presets'
    presetClassicWhite: 'क्लासिक सफ़ेद', // preset 'Classic White'
    presetPolaroidFrame: 'Polaroid फ़्रेम', // preset 'Polaroid Frame'
    presetDarkStudio: 'डार्क स्टूडियो', // preset 'Dark Studio'
    presetGradientGlow: 'ग्रेडिएंट ग्लो', // preset 'Gradient Glow'
    borderStyle: 'बॉर्डर स्टाइल', // 'Border Style'
    borderStyleSolid: 'सॉलिड', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'ग्रेडिएंट', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'बॉर्डर कलर', // 'Border Color'
    startColor: 'शुरुआती कलर', // 'Start Color'
    endColor: 'आख़िरी कलर', // 'End Color'
    gradientAngle: 'ग्रेडिएंट एंगल', // 'Gradient Angle'
    borderSize: 'बॉर्डर साइज़', // 'Border Size'
    frameRadius: 'फ़्रेम रेडियस', // 'Frame Radius'
    photoRadius: 'फ़ोटो रेडियस', // 'Photo Radius'
    dropShadow: 'ड्रॉप शैडो', // 'Drop Shadow'
    shadowNone: 'कोई नहीं', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'हल्का', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'मीडियम', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'गहरा', // shadow level 'deep' (rendered capitalized)
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadFramedImage: 'फ़्रेम वाली इमेज डाउनलोड करें', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'कोने गोल करने के लिए इमेज छोड़ें', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'गोल कोनों वाली इमेज एक्सपोर्ट नहीं हो सकी।', // 'Failed to export rounded image.'
    liveCornerPreview: 'कोनों का लाइव प्रीव्यू', // 'Live Corner Preview'
    changeImage: 'इमेज बदलें', // 'Change Image'
    cornerSettings: 'कोने की सेटिंग', // 'Corner Settings'
    fullCirclePill: 'पूरा सर्कल / पिल', // 'Full Circle / Pill'
    individualPerCorner: 'हर कोने के लिए अलग कंट्रोल', // 'Individual Per-Corner Control'
    allCornersRadius: 'सभी कोनों का रेडियस', // 'All Corners Radius'
    cornerTopLeft: 'ऊपर बाएँ', // per-corner label 'Top Left'
    cornerTopRight: 'ऊपर दाएँ', // per-corner label 'Top Right'
    cornerBottomLeft: 'नीचे बाएँ', // per-corner label 'Bottom Left'
    cornerBottomRight: 'नीचे दाएँ', // per-corner label 'Bottom Right'
    outerCornerFill: 'बाहरी कोने की फ़िल', // 'Outer Corner Fill'
    transparentPngWebp: 'ट्रांसपेरेंट (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'सॉलिड कलर', // 'Solid Color'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadRoundedImage: 'गोल कोनों वाली इमेज डाउनलोड करें', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'ब्राइटनेस सेट करने के लिए इमेज छोड़ें', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एडिट की गई इमेज एक्सपोर्ट नहीं हो सकी।', // 'Failed to export adjusted image.'
    viewAfter: 'बाद में', // view tab 'after' (rendered capitalized)
    viewBefore: 'पहले', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'स्प्लिट तुलना', // view tab 'Split Compare'
    fullscreenCompare: 'फ़ुलस्क्रीन तुलना', // 'Fullscreen Compare'
    removeImage: 'इमेज हटाएँ', // title/aria-label 'Remove image'
    beforeLabel: 'पहले', // split slider label 'Before'
    afterLabel: 'बाद में', // split slider label 'After'
    originalPreviewAlt: 'ओरिजिनल प्रीव्यू', // alt 'Original preview'
    originalComparisonAlt: 'ओरिजिनल तुलना', // alt 'Original comparison'
    brightnessControls: 'ब्राइटनेस कंट्रोल', // 'Brightness Controls'
    reset: 'रीसेट करें', // 'Reset'
    brightnessLevel: 'ब्राइटनेस लेवल', // 'Brightness Level'
    minLabel: '-100% ज़्यादा डार्क', // min label '-100% Darker'
    maxLabel: '+100% ज़्यादा ब्राइट', // max label '+100% Brighter'
    quickPresets: 'क्विक प्रीसेट', // 'Quick Presets'
    presetDark: 'डार्क (-30%)', // preset 'Dark (-30%)'
    presetDim: 'हल्का डार्क (-15%)', // preset 'Dim (-15%)'
    presetOriginal: 'ओरिजिनल (0%)', // preset 'Original (0%)'
    presetBright: 'ब्राइट (+15%)', // preset 'Bright (+15%)'
    presetVibrant: 'वाइब्रेंट (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'हाई की (+50%)', // preset 'High Key (+50%)'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadEditedImage: 'एडिट की गई इमेज डाउनलोड करें', // 'Download Edited Image'
    comparisonTitlePrefix: 'ब्राइटनेस की तुलना', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'एडिट की गई (बाद में)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'कंट्रास्ट सेट करने के लिए इमेज छोड़ें', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'कंट्रास्ट की तुलना', // 'Contrast Comparison'
    comparisonAfterLabel: 'एडिट की गई (बाद में)', // 'Edited (After)'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एडिट की गई इमेज एक्सपोर्ट नहीं हो सकी।', // 'Failed to export adjusted image.'
    tabAfter: 'बाद में', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'पहले', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'स्प्लिट तुलना', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'फ़ुलस्क्रीन तुलना करें', // 'Fullscreen Compare'
    removeImage: 'इमेज हटाएँ', // title + aria-label 'Remove image'
    originalPreviewAlt: 'ओरिजिनल प्रीव्यू', // alt 'Original preview'
    originalComparisonAlt: 'ओरिजिनल तुलना', // alt 'Original comparison'
    splitBeforeLabel: 'पहले', // split slider left label 'Before'
    splitAfterLabel: 'बाद में', // split slider right label 'After'
    controlsHeading: 'कंट्रास्ट कंट्रोल', // '{label} Controls' (contrast mode)
    reset: 'रीसेट करें', // 'Reset'
    levelLabel: 'कंट्रास्ट लेवल', // '{label} Level' (contrast mode)
    minLabel: '-100% फ़्लैट', // minLabel '-100% Flat'
    maxLabel: '+100% हाई कंट्रास्ट', // maxLabel '+100% High Contrast'
    quickPresets: 'क्विक प्रीसेट', // 'Quick Presets'
    presetSoft: 'सॉफ़्ट (-25%)', // 'Soft (-25%)'
    presetMuted: 'हल्का (-10%)', // 'Muted (-10%)'
    presetOriginal: 'ओरिजिनल (0%)', // 'Original (0%)'
    presetCrisp: 'क्रिस्प (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'पंची (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'ड्रामैटिक (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadEditedImage: 'एडिट की गई इमेज डाउनलोड करें', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'सैचुरेशन सेट करने के लिए इमेज छोड़ें', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'सैचुरेशन की तुलना', // 'Saturation Comparison'
    comparisonAfterLabel: 'एडिट की गई (बाद में)', // 'Edited (After)'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एडिट की गई इमेज एक्सपोर्ट नहीं हो सकी।', // 'Failed to export adjusted image.'
    tabAfter: 'बाद में', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'पहले', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'स्प्लिट तुलना', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'फ़ुलस्क्रीन तुलना करें', // 'Fullscreen Compare'
    removeImage: 'इमेज हटाएँ', // title + aria-label 'Remove image'
    originalPreviewAlt: 'ओरिजिनल प्रीव्यू', // alt 'Original preview'
    originalComparisonAlt: 'ओरिजिनल तुलना', // alt 'Original comparison'
    splitBeforeLabel: 'पहले', // split slider left label 'Before'
    splitAfterLabel: 'बाद में', // split slider right label 'After'
    controlsHeading: 'सैचुरेशन कंट्रोल', // '{label} Controls' (saturation mode)
    reset: 'रीसेट करें', // 'Reset'
    levelLabel: 'सैचुरेशन लेवल', // '{label} Level' (saturation mode)
    minLabel: '-100% ग्रेस्केल', // minLabel '-100% Grayscale'
    maxLabel: '+100% विविड', // maxLabel '+100% Vivid'
    quickPresets: 'क्विक प्रीसेट', // 'Quick Presets'
    presetGrayscale: 'ग्रेस्केल (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'हल्का (-40%)', // 'Muted (-40%)'
    presetOriginal: 'ओरिजिनल (0%)', // 'Original (0%)'
    presetRich: 'रिच (+30%)', // 'Rich (+30%)'
    presetVivid: 'विविड (+60%)', // 'Vivid (+60%)'
    presetHyper: 'हाइपर (+90%)', // 'Hyper (+90%)'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadEditedImage: 'एडिट की गई इमेज डाउनलोड करें', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'फ़िल्टर लगाने के लिए इमेज छोड़ें', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'फ़िल्टर की तुलना', // 'Filter Comparison'
    comparisonAfterLabel: 'फ़िल्टर लगा हुआ', // 'Filtered'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एक्सपोर्ट में एरर आया।', // 'Export failed.'
    filterPreview: 'फ़िल्टर प्रीव्यू', // 'Filter Preview'
    holdToViewOriginal: 'ओरिजिनल देखने के लिए दबाकर रखें', // 'Hold to View Original'
    compare: 'तुलना करें', // 'Compare'
    removeImage: 'इमेज हटाएँ', // aria-label 'Remove image'
    originalBadge: 'ओरिजिनल', // 'Original' badge — same in Hindi
    filterPresets: 'फ़िल्टर प्रीसेट', // 'Filter Presets'
    reset: 'रीसेट करें', // 'Reset'
    presetOriginal: 'ओरिजिनल', // preset 'Original' — same in Hindi
    presetGrayscale: 'ग्रेस्केल', // preset 'Grayscale'
    presetSepia: 'सेपिया', // preset 'Sepia' — same in Hindi
    presetVintage: 'विंटेज', // preset 'Vintage' — same in Hindi
    presetWarm: 'गर्म', // preset 'Warm'
    presetCool: 'ठंडा', // preset 'Cool'
    presetHighContrast: 'हाई कंट्रास्ट', // preset 'High Contrast'
    presetMatteFade: 'मैट फ़ेड', // preset 'Matte Fade'
    presetDramatic: 'ड्रामैटिक', // preset 'Dramatic'
    presetNoir: 'B&W Noir', // preset 'B&W Noir'
    presetGoldenHour: 'गोल्डन आवर', // preset 'Golden Hour'
    presetInvert: 'इनवर्ट करें', // preset 'Invert'
    filterIntensity: 'फ़िल्टर इंटेंसिटी', // 'Filter Intensity'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'क्वालिटी', // 'Quality'
    rendering: 'प्रोसेस हो रहा है…', // 'Rendering...'
    downloadFilteredImage: 'फ़िल्टर वाली इमेज डाउनलोड करें', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'बैकग्राउंड जोड़ने के लिए इमेज या ट्रांसपेरेंट PNG छोड़ें', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorExportFailed: 'एक्सपोर्ट में एरर आया।', // 'Export failed.'
    backgroundPreview: 'बैकग्राउंड प्रीव्यू', // 'Background Preview'
    changeImage: 'इमेज बदलें', // 'Change Image'
    outputDimensionsPrefix: 'आउटपुट:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'बैकग्राउंड टाइप', // 'Background Type'
    modeSolidColor: 'सॉलिड कलर', // 'Solid Color'
    modeGradient: 'ग्रेडिएंट', // 'Gradient'
    modeBlurredPhoto: 'ब्लर की गई फ़ोटो', // 'Blurred Photo'
    selectColor: 'कलर चुनें {color}', // aria-label `Select color ${c}`
    color1: 'कलर 1', // 'Color 1' — same in Hindi
    color2: 'कलर 2', // 'Color 2' — same in Hindi
    angle: 'एंगल', // 'Angle'
    backdropBlurRadius: 'बैकड्रॉप ब्लर रेडियस', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'कैनवस अनुपात', // 'Canvas Aspect Ratio'
    aspectOriginal: 'ओरिजिनल', // 'Orig' — same abbreviation in Hindi
    imageScale: 'इमेज स्केल', // 'Image Scale'
    roundness: 'गोलाई', // 'Roundness'
    dropShadowBehindImage: 'इमेज के पीछे ड्रॉप शैडो', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'एक्सपोर्ट हो रहा है…', // 'Exporting...'
    downloadImage: 'इमेज डाउनलोड करें', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'ग्रिड टाइल या स्ट्रिप में बाँटने के लिए इमेज छोड़ें', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorSplitFailed: 'इमेज बाँटी नहीं जा सकी।', // 'Failed to split image.'
    errorCanvasContext: 'कैनवस कॉन्टेक्स्ट शुरू नहीं हो सका।', // 'Unable to initialize canvas context.'
    cutLinePreview: 'कट-लाइन प्रीव्यू ({rows} × {cols} = {tiles} पीस)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'इमेज बदलें', // 'Change Image'
    splitGuideAlt: 'स्प्लिट गाइड', // alt 'Split guide'
    splitLayout: 'स्प्लिट लेआउट', // 'Split Layout'
    modeGrid: 'ग्रिड (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'हॉरिज़ॉन्टल स्ट्रिप', // 'Horiz. Strips'
    modeVerticalStrips: 'वर्टिकल स्ट्रिप', // 'Vert. Strips'
    rowsLabel: 'पंक्तियाँ (हॉरिज़ॉन्टल कट)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'कॉलम (वर्टिकल कट)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 कैरोसेल', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 स्ट्रिप', // preset '4×1 Strips'
    formatOriginal: 'ओरिजिनल', // 'Orig' — same abbreviation in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'टाइल क्वालिटी', // 'Tile Quality'
    splittingImage: 'इमेज बाँटी जा रही है…', // 'Splitting Image...'
    splitIntoTiles: '{count} पीस में बाँटें', // `Split into ${n} Tiles`
    splitComplete: 'स्प्लिट पूरा हुआ', // 'Split Complete'
    tilesGenerated: 'फ़ुल रिज़ॉल्यूशन पर {count} इमेज टाइल बनीं', // '{n} image tiles generated at full resolution'
    packagingZip: 'ZIP पैक हो रहा है…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'सभी टाइल डाउनलोड करें (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'डाउनलोड करें', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'DPI मेटाडेटा अपडेट करने के लिए JPG या PNG इमेज छोड़ें', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'DPI अपडेट नहीं हो सका।', // 'Failed to update DPI.'
    targetDpiPresets: 'टारगेट DPI प्रीसेट', // 'Target DPI Presets'
    preset72Screen: '72 DPI (स्क्रीन)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (ड्राफ़्ट प्रिंट)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (हाई क्वालिटी प्रिंट)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (आर्काइवल)', // '600 DPI (Archival)'
    customDpi: 'कस्टम DPI', // 'Custom DPI'
    applyDpi: '{dpi} DPI लागू करें', // 'Apply {dpi} DPI'
    clear: 'साफ़ करें', // 'Clear'
    batchReady: 'बैच तैयार है', // 'Batch Ready'
    filesUpdatedToDpi: '{count} फ़ाइलें {dpi} DPI पर अपडेट हुईं', // '{n} files updated to {dpi} DPI'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'पहले: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'पहले: सेट नहीं है', // 'Before: Not set'
    verifiedDpi: 'वेरिफ़ाइड: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'लॉसलेस JPEG हेडर अपडेट', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'लॉसलेस PNG pHYs अपडेट', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'pHYs DPI के साथ PNG में कन्वर्ट हुई', // 'Converted to PNG with pHYs DPI'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Base64 में एनकोड करने के लिए इमेज छोड़ें', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'फ़ाइल एनकोड नहीं हो सकी।', // 'Could not encode file.'
    errorFailedToRead: 'इमेज फ़ाइल पढ़ी नहीं जा सकी।', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'क्लिपबोर्ड में लिखा नहीं जा सका — कृपया टेक्स्ट बॉक्स से सेलेक्ट करके कॉपी करें।', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'फ़ाइल:', // 'File:' (summary card)
    outputLabel: 'आउटपुट:', // 'Output:' (summary card)
    charsLabel: 'अक्षर', // 'chars' (summary card)
    encodeAnother: 'दूसरी एनकोड करें', // 'Encode Another'
    tabDataUrl: 'डेटा URL', // tab 'Data URL'
    tabRawBase64: 'रॉ Base64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'कॉपी हो गया!', // 'Copied!'
    copyOutput: 'आउटपुट कॉपी करें', // 'Copy Output'
    saveTxt: 'TXT सेव करें', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Base64 स्ट्रिंग या डेटा URL पेस्ट करें', // 'Paste Base64 String or Data URL'
    clear: 'साफ़ करें', // 'Clear'
    inputPlaceholder: 'data:image/png;base64,iVBORw0KGgo... या रॉ Base64 बाइट्स यहाँ पेस्ट करें', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'PNG, JPG, WebP, GIF, SVG, BMP और ICO Base64 पेलोड सपोर्ट करता है', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'डीकोड हो रहा है…', // 'Decoding...'
    decodeImage: 'इमेज डीकोड करें', // 'Decode Image'
    decodingBytes: 'Base64 बाइट्स डीकोड हो रहे हैं…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'डेटा URI एनकोडिंग सपोर्ट नहीं की जाती। Base64 पेलोड (`;base64,`) चाहिए।', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'इनपुट में गलत Base64 अक्षर हैं।', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'डीकोड किए गए बाइट्स से ब्राउज़र में पढ़ी जा सकने वाली सही इमेज नहीं बनती।', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Base64 स्ट्रिंग डीकोड नहीं हो सकी।', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'डीकोड की गई Base64 का प्रीव्यू', // alt 'Decoded Base64 preview'
    validImageDecoded: 'सही इमेज डीकोड हुई', // 'Valid Image Decoded'
    detectedFormat: 'पहचाना गया फ़ॉर्मेट', // 'Detected Format'
    binarySize: 'बाइनरी साइज़', // 'Binary Size'
    dimensions: 'डाइमेंशन', // 'Dimensions'
    downloadFormat: 'डाउनलोड फ़ॉर्मेट', // 'Download Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'इमेज फ़ाइल डाउनलोड करें', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'डॉमिनेंट कलर पैलेट निकालने के लिए इमेज छोड़ें', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'इमेज लोड नहीं हो सकी।', // 'Unable to load image.'
    errorClipboardDenied: 'क्लिपबोर्ड की परमिशन नहीं मिली।', // 'Clipboard permission denied.'
    extractedPalette: 'निकाली गई पैलेट ({count} कलर)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'सोर्स', // alt 'Source'
    changeImage: 'बदलें', // 'Change'
    numberOfColors: 'कलर की संख्या', // 'Number of Colors'
    colorsCount: '{count} कलर', // '{count} colors'
    copyCssVariables: 'CSS वेरिएबल कॉपी करें', // 'Copy CSS Variables'
    copiedCss: 'CSS कॉपी हो गया!', // 'Copied CSS!'
    copyJson: 'JSON कॉपी करें', // 'Copy JSON'
    copiedJson: 'JSON कॉपी हो गया!', // 'Copied JSON!'
    downloadPalettePng: 'पैलेट PNG डाउनलोड करें', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'एनिमेटेड GIF बनाने के लिए 2 या ज़्यादा इमेज छोड़ें', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'एनिमेटेड GIF एनकोड नहीं हो सका।', // 'Failed to encode animated GIF.'
    skippedFile: '"{name}" छोड़ी गई: {error}', // 'Skipped "{file.name}": {err.message}'
    skippedFileNoError: '"{name}" छोड़ी गई।', // 'Skipped "{file.name}".'
    generatedGif: 'बना हुआ GIF ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'लाइव टाइमिंग प्रीव्यू · फ़्रेम {current}/{total}', // 'Live Timing Preview · Frame {n}/{total}'
    generatedGifAlt: 'बना हुआ एनिमेटेड GIF', // alt 'Generated animated GIF'
    pause: 'रोकें', // 'Pause'
    play: 'चलाएँ', // 'Play'
    backToFrameEditor: 'फ़्रेम एडिटर पर वापस जाएँ', // 'Back to Frame Editor'
    clearAllFrames: 'सभी फ़्रेम हटाएँ', // aria-label 'Clear all frames'
    largeGifWarning: 'बड़े GIF की चेतावनी ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      '5–15 MB से बड़े GIF मैसेजिंग ऐप पर धीरे अपलोड हो सकते हैं या प्लेटफ़ॉर्म की सख्त सीमा को पूरा नहीं कर सकते। आउटपुट चौड़ाई/ऊँचाई कम करके देखें (जैसे, 480 px), क्वालिटी कम करें या फ़्रेम हटाएँ।', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'एनिमेटेड GIF डाउनलोड करें ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'एनिमेशन सेटिंग', // 'Animation Settings'
    defaultFrameDuration: 'डिफ़ॉल्ट फ़्रेम अवधि', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'लूप बिहेवियर', // 'Loop Behavior'
    loopForever: 'हमेशा', // 'Forever'
    loopSetLoops: 'लूप सेट करें', // 'Set Loops'
    loopPlayOnce: 'एक बार चलाएँ', // 'Play Once'
    totalPlays: 'कुल प्ले', // 'Total Plays'
    outputDimensions: 'आउटपुट डाइमेंशन (px)', // 'Output Dimensions (px)'
    ratioLocked: 'अनुपात लॉक है', // 'Ratio Locked'
    ratioUnlocked: 'अनलॉक है', // 'Unlocked'
    widthLabel: 'चौड़ाई', // 'Width'
    heightLabel: 'ऊँचाई', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    frameFit: 'फ़्रेम फ़िट', // 'Frame Fit'
    fitContain: 'कंटेन', // 'contain'
    fitCover: 'कवर', // 'cover'
    backgroundMatte: 'बैकग्राउंड मैट', // 'Background Matte'
    colorPaletteQuality: 'कलर पैलेट क्वालिटी', // 'Color Palette Quality'
    encodingGif: 'GIF एनकोड हो रहा है ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'एनिमेटेड GIF बनाएँ', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'एनिमेटेड GIF फिर से एनकोड करें', // 'Re-Encode Animated GIF'
    framesHeading: 'फ़्रेम ({count}) — रीऑर्डर के लिए ड्रैग करें या एरो इस्तेमाल करें', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'ग्लोबल फ़्रेम अवधि {ms} ms इस्तेमाल करने के लिए हर फ़्रेम की अवधि खाली छोड़ दें।', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'फ़्रेम जोड़ें', // 'Add Frames'
    delayMsLabel: 'अवधि (ms):', // 'Delay (ms):'
    moveEarlier: 'पहले ले जाएँ', // title 'Move earlier'
    moveLater: 'बाद में ले जाएँ', // title 'Move later'
    duplicateFrame: 'फ़्रेम डुप्लिकेट करें', // title 'Duplicate frame'
    removeFrame: 'फ़्रेम हटाएँ', // title 'Remove frame'
    moveFrameEarlierAria: 'फ़्रेम {n} को पहले ले जाएँ', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'फ़्रेम {n} को बाद में ले जाएँ', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'फ़्रेम {n} डुप्लिकेट करें', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'फ़्रेम {n} हटाएँ', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'फ़ोटो कोलाज बनाने के लिए 2 से 9 इमेज छोड़ें', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'कोलाज एक्सपोर्ट नहीं हो सका।', // 'Failed to export collage.'
    couldNotLoadFile: '"{name}" लोड नहीं हो सकी: {error}', // 'Could not load "{file.name}": {err.message}'
    couldNotLoadFileNoError: '"{name}" लोड नहीं हो सकी।', // 'Could not load "{file.name}".'
    collagePreview: 'कोलाज प्रीव्यू ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'सब साफ़ करें', // 'Clear All'
    rearrangeCells: 'सेल रीऑर्डर करें (स्वैप के लिए ड्रैग करें या दो सेल पर टैप करें)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'फ़ोटो तुरंत रीऑर्डर करने के लिए किसी भी सेल कार्ड को दूसरी स्लॉट पर ड्रैग करें।', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'फ़ोटो जोड़ें', // 'Add Photos'
    cellLabel: 'सेल {n}', // 'Cell {n}'
    slotLabel: 'स्लॉट {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'सेल {n} को पीछे ले जाएँ', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'सेल {n} को आगे ले जाएँ', // aria-label `Move cell ${n} forward`
    clearCellAria: 'सेल {n} साफ़ करें', // aria-label `Clear cell ${n}`
    addPhoto: 'फ़ोटो जोड़ें', // 'Add Photo'
    collageLayout: 'कोलाज लेआउट', // 'Collage Layout'
    layout2x2: '2×2 ग्रिड', // '2×2 Grid'
    layout3x3: '3×3 ग्रिड', // '3×3 Grid'
    layoutVertical: 'वर्टिकल स्ट्रिप', // 'Vertical Strip'
    layoutHorizontal: 'हॉरिज़ॉन्टल स्ट्रिप', // 'Horizontal Strip'
    cellProportionsSpacing: 'सेल अनुपात और स्पेसिंग', // 'Cell Proportions & Spacing'
    equalCells: 'बराबर सेल', // 'Equal Cells'
    colSplit: 'कॉलम स्प्लिट', // 'Col Split'
    centerCol: 'सेंटर कॉलम', // 'Center Col'
    rowSplit: 'पंक्ति स्प्लिट', // 'Row Split'
    centerRow: 'सेंटर पंक्ति', // 'Center Row'
    leadCellEmphasis: 'लीड सेल पर ज़ोर', // 'Lead Cell Emphasis'
    gapSpacing: 'गैप स्पेसिंग', // 'Gap Spacing'
    cellRadius: 'सेल रेडियस', // 'Cell Radius'
    backgroundColor: 'बैकग्राउंड कलर', // 'Background Color'
    backgroundSwatchAria: 'बैकग्राउंड {color}', // aria-label `Background ${c}`
    imageFit: 'इमेज फ़िट', // 'Image Fit'
    fitCover: 'कवर', // 'cover'
    fitContain: 'कंटेन', // 'contain'
    outputSize: 'आउटपुट साइज़ (px)', // 'Output Size (px)'
    widthLabel: 'चौड़ाई', // 'Width'
    heightLabel: 'ऊँचाई', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (लॉसलेस)', // 'PNG (Lossless)'
    jpgQuality: 'JPG क्वालिटी', // 'JPG Quality'
    exportingCollage: 'कोलाज एक्सपोर्ट हो रहा है…', // 'Exporting Collage...'
    downloadCollage: 'कोलाज डाउनलोड करें ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: '{target} से कम कंप्रेस करने के लिए इमेज छोड़ें', // 'Drop images to compress under {target}'
    errorTargetFailed: 'टारगेट साइज़ तक कंप्रेस करने में एरर आया।', // 'Target compression failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'टारगेट ज़्यादा से ज़्यादा फ़ाइल साइज़', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} ज़्यादा से ज़्यादा)', // '({bytes} max)'
    needDifferentTarget: 'कोई दूसरा टारगेट KB चाहिए?', // 'Need a different target KB?'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'अगर सिर्फ़ क्वालिटी कम करने से {target} में न आए, तो स्मार्ट तरीके से डाइमेंशन छोटा करने दें', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'जब लॉसलेस PNG से {target} तक साफ़ तरीके से न पहुँचा जा सके, तो बड़े PNG को अपने आप WebP/JPG में कन्वर्ट करें', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'ट्रांसपेरेंट PNG के लिए मैट कलर:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} तक कंप्रेस करें', // 'Compress to {target}'
    optimizing: 'ऑप्टिमाइज़ हो रहा है…', // 'Optimizing...'
    clear: 'साफ़ करें', // 'Clear'
    losslessPngSelected: 'लॉसलेस PNG चुना गया है:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG क्वालिटी स्लाइडर को अनदेखा करता है, इसलिए साइज़ कम करना पूरी तरह पिक्सल डाइमेंशन छोटा करने पर निर्भर करता है। बड़ी फ़ोटो के लिए JPG या WebP चुनें, ताकि साफ़ रहते हुए सख्त KB सीमा तक पहुँचा जा सके।', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'टारगेट कंप्रेशन सारांश · लक्ष्य ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} / {total} {images} ने {target} का टारगेट पूरा किया', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'इमेज', // 'image'
    imagePlural: 'इमेज', // 'images'
    summaryMissed: ' · {missed} ईमानदारी से नहीं आ सकीं (जानकारी नीचे)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'कुल बचत: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'कुल बचत: {bytes} ({grew} बढ़ गया)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    metricOriginal: 'ओरिजिनल', // 'Original' (metric label)
    metricOutput: 'आउटपुट', // 'Output' (metric label)
    metricSpaceSaved: 'बचाई गई जगह', // 'Space Saved' (metric label)
    metricReduction: 'कमी', // 'Reduction' (metric label)
    metricSizeChange: 'साइज़ में बदलाव', // 'Size Change' (metric label)
    underTarget: '{target} से कम ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'टारगेट पूरा नहीं हुआ — {bytes}', // 'Target missed — {bytes}'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} बढ़ गया: दोबारा एनकोड करने पर ओरिजिनल से बड़ा हो गया', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'फ़ोटो जैसी PNG के लिए WebP या JPG आमतौर पर छोटा होता है।', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'ओरिजिनल रखें', // 'Keep original'
    keptOriginalNote: 'ओरिजिनल फ़ाइल रखी गई, क्योंकि दोबारा एनकोड करने पर वह बड़ी हो गई थी।', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target} से नीचे ज़्यादा रिज़ॉल्यूशन बनाए रखने के लिए लॉसलेस PNG को अपने आप {format} में कन्वर्ट कर दिया गया।', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (ट्रांसपेरेंसी बनी रहेगी)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी, और दोबारा एनकोड करने पर {bytes} बढ़ गई। छोटी आउटपुट के लिए “ओरिजिनल रखें” इस्तेमाल करें या WebP/JPG पर जाएँ।', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी; {quality}% क्वालिटी पर साफ़ तरीके से एक्सपोर्ट हुई।', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '{width}×{height} px फ़ुल रिज़ॉल्यूशन पर टारगेट पूरा हुआ ({qualityLabel})।', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) तक स्केल करके {qualityLabel} के साथ टारगेट पूरा हुआ।', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'लॉसलेस PNG', // 'lossless PNG'
    qualityPercent: '{quality}% क्वालिटी', // '{quality}% quality'
    statusCannotPng:
      'लॉसलेस PNG से {target} तक नहीं पहुँचा जा सकता (सबसे छोटा संभव: {bytes}, {width}×{height} px)। छोटे साइज़ के लिए आउटपुट फ़ॉर्मेट को JPG या WebP में बदलें।', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '{width}×{height} px फ़ुल डाइमेंशन पर {target} तक नहीं पहुँचा जा सकता (कम से कम क्वालिटी साइज़ {bytes} है)। डाइमेंशन और छोटा करने के लिए “डाइमेंशन स्केल करने दें” चालू करें।', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'माँगा गया {target} का टारगेट साफ़ तरीके से पूरा नहीं हो सका। सबसे छोटी ईमानदार एनकोड की गई आउटपुट {bytes} है ({width}×{height} px, {quality}% क्वालिटी)। बड़ा टारगेट साइज़ आज़माएँ।', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'टारगेट कंप्रेशन ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'कंप्रेस की गई ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: '{target} से कम कंप्रेस करने के लिए इमेज छोड़ें', // 'Drop images to compress under {target}'
    errorTargetFailed: 'टारगेट साइज़ तक कंप्रेस करने में एरर आया।', // 'Target compression failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'टारगेट ज़्यादा से ज़्यादा फ़ाइल साइज़', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} ज़्यादा से ज़्यादा)', // '({bytes} max)'
    needDifferentTarget: 'कोई दूसरा टारगेट KB चाहिए?', // 'Need a different target KB?'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'अगर सिर्फ़ क्वालिटी कम करने से {target} में न आए, तो स्मार्ट तरीके से डाइमेंशन छोटा करने दें', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'जब लॉसलेस PNG से {target} तक साफ़ तरीके से न पहुँचा जा सके, तो बड़े PNG को अपने आप WebP/JPG में कन्वर्ट करें', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'ट्रांसपेरेंट PNG के लिए मैट कलर:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} तक कंप्रेस करें', // 'Compress to {target}'
    optimizing: 'ऑप्टिमाइज़ हो रहा है…', // 'Optimizing...'
    clear: 'साफ़ करें', // 'Clear'
    losslessPngSelected: 'लॉसलेस PNG चुना गया है:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG क्वालिटी स्लाइडर को अनदेखा करता है, इसलिए साइज़ कम करना पूरी तरह पिक्सल डाइमेंशन छोटा करने पर निर्भर करता है। बड़ी फ़ोटो के लिए JPG या WebP चुनें, ताकि साफ़ रहते हुए सख्त KB सीमा तक पहुँचा जा सके।', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'टारगेट कंप्रेशन सारांश · लक्ष्य ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} / {total} {images} ने {target} का टारगेट पूरा किया', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'इमेज', // 'image'
    imagePlural: 'इमेज', // 'images'
    summaryMissed: ' · {missed} ईमानदारी से नहीं आ सकीं (जानकारी नीचे)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'कुल बचत: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'कुल बचत: {bytes} ({grew} बढ़ गया)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    metricOriginal: 'ओरिजिनल', // 'Original' (metric label)
    metricOutput: 'आउटपुट', // 'Output' (metric label)
    metricSpaceSaved: 'बचाई गई जगह', // 'Space Saved' (metric label)
    metricReduction: 'कमी', // 'Reduction' (metric label)
    metricSizeChange: 'साइज़ में बदलाव', // 'Size Change' (metric label)
    underTarget: '{target} से कम ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'टारगेट पूरा नहीं हुआ — {bytes}', // 'Target missed — {bytes}'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} बढ़ गया: दोबारा एनकोड करने पर ओरिजिनल से बड़ा हो गया', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'फ़ोटो जैसी PNG के लिए WebP या JPG आमतौर पर छोटा होता है।', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'ओरिजिनल रखें', // 'Keep original'
    keptOriginalNote: 'ओरिजिनल फ़ाइल रखी गई, क्योंकि दोबारा एनकोड करने पर वह बड़ी हो गई थी।', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target} से नीचे ज़्यादा रिज़ॉल्यूशन बनाए रखने के लिए लॉसलेस PNG को अपने आप {format} में कन्वर्ट कर दिया गया।', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (ट्रांसपेरेंसी बनी रहेगी)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी, और दोबारा एनकोड करने पर {bytes} बढ़ गई। छोटी आउटपुट के लिए “ओरिजिनल रखें” इस्तेमाल करें या WebP/JPG पर जाएँ।', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी; {quality}% क्वालिटी पर साफ़ तरीके से एक्सपोर्ट हुई।', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '{width}×{height} px फ़ुल रिज़ॉल्यूशन पर टारगेट पूरा हुआ ({qualityLabel})।', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) तक स्केल करके {qualityLabel} के साथ टारगेट पूरा हुआ।', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'लॉसलेस PNG', // 'lossless PNG'
    qualityPercent: '{quality}% क्वालिटी', // '{quality}% quality'
    statusCannotPng:
      'लॉसलेस PNG से {target} तक नहीं पहुँचा जा सकता (सबसे छोटा संभव: {bytes}, {width}×{height} px)। छोटे साइज़ के लिए आउटपुट फ़ॉर्मेट को JPG या WebP में बदलें।', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '{width}×{height} px फ़ुल डाइमेंशन पर {target} तक नहीं पहुँचा जा सकता (कम से कम क्वालिटी साइज़ {bytes} है)। डाइमेंशन और छोटा करने के लिए “डाइमेंशन स्केल करने दें” चालू करें।', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'माँगा गया {target} का टारगेट साफ़ तरीके से पूरा नहीं हो सका। सबसे छोटी ईमानदार एनकोड की गई आउटपुट {bytes} है ({width}×{height} px, {quality}% क्वालिटी)। बड़ा टारगेट साइज़ आज़माएँ।', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'टारगेट कंप्रेशन ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'कंप्रेस की गई ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: '{target} से कम कंप्रेस करने के लिए इमेज छोड़ें', // 'Drop images to compress under {target}'
    errorTargetFailed: 'टारगेट साइज़ तक कंप्रेस करने में एरर आया।', // 'Target compression failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'टारगेट ज़्यादा से ज़्यादा फ़ाइल साइज़', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} ज़्यादा से ज़्यादा)', // '({bytes} max)'
    needDifferentTarget: 'कोई दूसरा टारगेट KB चाहिए?', // 'Need a different target KB?'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'अगर सिर्फ़ क्वालिटी कम करने से {target} में न आए, तो स्मार्ट तरीके से डाइमेंशन छोटा करने दें', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'जब लॉसलेस PNG से {target} तक साफ़ तरीके से न पहुँचा जा सके, तो बड़े PNG को अपने आप WebP/JPG में कन्वर्ट करें', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'ट्रांसपेरेंट PNG के लिए मैट कलर:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} तक कंप्रेस करें', // 'Compress to {target}'
    optimizing: 'ऑप्टिमाइज़ हो रहा है…', // 'Optimizing...'
    clear: 'साफ़ करें', // 'Clear'
    losslessPngSelected: 'लॉसलेस PNG चुना गया है:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG क्वालिटी स्लाइडर को अनदेखा करता है, इसलिए साइज़ कम करना पूरी तरह पिक्सल डाइमेंशन छोटा करने पर निर्भर करता है। बड़ी फ़ोटो के लिए JPG या WebP चुनें, ताकि साफ़ रहते हुए सख्त KB सीमा तक पहुँचा जा सके।', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'टारगेट कंप्रेशन सारांश · लक्ष्य ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} / {total} {images} ने {target} का टारगेट पूरा किया', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'इमेज', // 'image'
    imagePlural: 'इमेज', // 'images'
    summaryMissed: ' · {missed} ईमानदारी से नहीं आ सकीं (जानकारी नीचे)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'कुल बचत: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'कुल बचत: {bytes} ({grew} बढ़ गया)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    metricOriginal: 'ओरिजिनल', // 'Original' (metric label)
    metricOutput: 'आउटपुट', // 'Output' (metric label)
    metricSpaceSaved: 'बचाई गई जगह', // 'Space Saved' (metric label)
    metricReduction: 'कमी', // 'Reduction' (metric label)
    metricSizeChange: 'साइज़ में बदलाव', // 'Size Change' (metric label)
    underTarget: '{target} से कम ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'टारगेट पूरा नहीं हुआ — {bytes}', // 'Target missed — {bytes}'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} बढ़ गया: दोबारा एनकोड करने पर ओरिजिनल से बड़ा हो गया', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'फ़ोटो जैसी PNG के लिए WebP या JPG आमतौर पर छोटा होता है।', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'ओरिजिनल रखें', // 'Keep original'
    keptOriginalNote: 'ओरिजिनल फ़ाइल रखी गई, क्योंकि दोबारा एनकोड करने पर वह बड़ी हो गई थी।', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target} से नीचे ज़्यादा रिज़ॉल्यूशन बनाए रखने के लिए लॉसलेस PNG को अपने आप {format} में कन्वर्ट कर दिया गया।', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (ट्रांसपेरेंसी बनी रहेगी)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी, और दोबारा एनकोड करने पर {bytes} बढ़ गई। छोटी आउटपुट के लिए “ओरिजिनल रखें” इस्तेमाल करें या WebP/JPG पर जाएँ।', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी; {quality}% क्वालिटी पर साफ़ तरीके से एक्सपोर्ट हुई।', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '{width}×{height} px फ़ुल रिज़ॉल्यूशन पर टारगेट पूरा हुआ ({qualityLabel})।', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) तक स्केल करके {qualityLabel} के साथ टारगेट पूरा हुआ।', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'लॉसलेस PNG', // 'lossless PNG'
    qualityPercent: '{quality}% क्वालिटी', // '{quality}% quality'
    statusCannotPng:
      'लॉसलेस PNG से {target} तक नहीं पहुँचा जा सकता (सबसे छोटा संभव: {bytes}, {width}×{height} px)। छोटे साइज़ के लिए आउटपुट फ़ॉर्मेट को JPG या WebP में बदलें।', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '{width}×{height} px फ़ुल डाइमेंशन पर {target} तक नहीं पहुँचा जा सकता (कम से कम क्वालिटी साइज़ {bytes} है)। डाइमेंशन और छोटा करने के लिए “डाइमेंशन स्केल करने दें” चालू करें।', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'माँगा गया {target} का टारगेट साफ़ तरीके से पूरा नहीं हो सका। सबसे छोटी ईमानदार एनकोड की गई आउटपुट {bytes} है ({width}×{height} px, {quality}% क्वालिटी)। बड़ा टारगेट साइज़ आज़माएँ।', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'टारगेट कंप्रेशन ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'कंप्रेस की गई ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: '{target} से कम कंप्रेस करने के लिए इमेज छोड़ें', // 'Drop images to compress under {target}'
    errorTargetFailed: 'टारगेट साइज़ तक कंप्रेस करने में एरर आया।', // 'Target compression failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'टारगेट ज़्यादा से ज़्यादा फ़ाइल साइज़', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} ज़्यादा से ज़्यादा)', // '({bytes} max)'
    needDifferentTarget: 'कोई दूसरा टारगेट KB चाहिए?', // 'Need a different target KB?'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'अगर सिर्फ़ क्वालिटी कम करने से {target} में न आए, तो स्मार्ट तरीके से डाइमेंशन छोटा करने दें', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'जब लॉसलेस PNG से {target} तक साफ़ तरीके से न पहुँचा जा सके, तो बड़े PNG को अपने आप WebP/JPG में कन्वर्ट करें', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'ट्रांसपेरेंट PNG के लिए मैट कलर:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} तक कंप्रेस करें', // 'Compress to {target}'
    optimizing: 'ऑप्टिमाइज़ हो रहा है…', // 'Optimizing...'
    clear: 'साफ़ करें', // 'Clear'
    losslessPngSelected: 'लॉसलेस PNG चुना गया है:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG क्वालिटी स्लाइडर को अनदेखा करता है, इसलिए साइज़ कम करना पूरी तरह पिक्सल डाइमेंशन छोटा करने पर निर्भर करता है। बड़ी फ़ोटो के लिए JPG या WebP चुनें, ताकि साफ़ रहते हुए सख्त KB सीमा तक पहुँचा जा सके।', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'टारगेट कंप्रेशन सारांश · लक्ष्य ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} / {total} {images} ने {target} का टारगेट पूरा किया', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'इमेज', // 'image'
    imagePlural: 'इमेज', // 'images'
    summaryMissed: ' · {missed} ईमानदारी से नहीं आ सकीं (जानकारी नीचे)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'कुल बचत: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'कुल बचत: {bytes} ({grew} बढ़ गया)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    metricOriginal: 'ओरिजिनल', // 'Original' (metric label)
    metricOutput: 'आउटपुट', // 'Output' (metric label)
    metricSpaceSaved: 'बचाई गई जगह', // 'Space Saved' (metric label)
    metricReduction: 'कमी', // 'Reduction' (metric label)
    metricSizeChange: 'साइज़ में बदलाव', // 'Size Change' (metric label)
    underTarget: '{target} से कम ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'टारगेट पूरा नहीं हुआ — {bytes}', // 'Target missed — {bytes}'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} बढ़ गया: दोबारा एनकोड करने पर ओरिजिनल से बड़ा हो गया', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'फ़ोटो जैसी PNG के लिए WebP या JPG आमतौर पर छोटा होता है।', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'ओरिजिनल रखें', // 'Keep original'
    keptOriginalNote: 'ओरिजिनल फ़ाइल रखी गई, क्योंकि दोबारा एनकोड करने पर वह बड़ी हो गई थी।', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      '{target} से नीचे ज़्यादा रिज़ॉल्यूशन बनाए रखने के लिए लॉसलेस PNG को अपने आप {format} में कन्वर्ट कर दिया गया।', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (ट्रांसपेरेंसी बनी रहेगी)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी, और दोबारा एनकोड करने पर {bytes} बढ़ गई। छोटी आउटपुट के लिए “ओरिजिनल रखें” इस्तेमाल करें या WebP/JPG पर जाएँ।', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी; {quality}% क्वालिटी पर साफ़ तरीके से एक्सपोर्ट हुई।', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      '{width}×{height} px फ़ुल रिज़ॉल्यूशन पर टारगेट पूरा हुआ ({qualityLabel})।', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      '{width}×{height} px ({percent}%) तक स्केल करके {qualityLabel} के साथ टारगेट पूरा हुआ।', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'लॉसलेस PNG', // 'lossless PNG'
    qualityPercent: '{quality}% क्वालिटी', // '{quality}% quality'
    statusCannotPng:
      'लॉसलेस PNG से {target} तक नहीं पहुँचा जा सकता (सबसे छोटा संभव: {bytes}, {width}×{height} px)। छोटे साइज़ के लिए आउटपुट फ़ॉर्मेट को JPG या WebP में बदलें।', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      '{width}×{height} px फ़ुल डाइमेंशन पर {target} तक नहीं पहुँचा जा सकता (कम से कम क्वालिटी साइज़ {bytes} है)। डाइमेंशन और छोटा करने के लिए “डाइमेंशन स्केल करने दें” चालू करें।', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'माँगा गया {target} का टारगेट साफ़ तरीके से पूरा नहीं हो सका। सबसे छोटी ईमानदार एनकोड की गई आउटपुट {bytes} है ({width}×{height} px, {quality}% क्वालिटी)। बड़ा टारगेट साइज़ आज़माएँ।', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'टारगेट कंप्रेशन ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'कंप्रेस की गई ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'बल्क कंप्रेशन के लिए दर्जनों इमेज छोड़ें', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'कंप्रेस करने में एरर आया।', // 'Compression failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'क्विक बैच प्रोफ़ाइल:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web Fast (WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'ईमेल / शेयरिंग (JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'हाई फ़िडेलिटी (85%)', // 'High Fidelity (85%)'
    compressingBatch: 'बैच लोकली कंप्रेस हो रहा है…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-hi.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: '{target} से कम कंप्रेस करने के लिए इमेज छोड़ें', // `Drop images to compress under ${targetLabel}`
    targetMaxFileSize: 'टारगेट ज़्यादा से ज़्यादा फ़ाइल साइज़', // 'Target Maximum File Size'
    targetNumberAria: 'टारगेट फ़ाइल साइज़ नंबर', // aria-label 'Target file size number'
    maxSuffix: '({size} ज़्यादा से ज़्यादा)', // '({formatBytes(effectiveTargetBytes)} max)'
    needDifferentTarget: 'कोई दूसरा टारगेट KB चाहिए?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    allowDownscale: 'अगर सिर्फ़ क्वालिटी कम करने से {target} में न आए, तो स्मार्ट तरीके से डाइमेंशन छोटा करने दें', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'जब लॉसलेस PNG से {target} तक साफ़ तरीके से न पहुँचा जा सके, तो बड़े PNG को अपने आप WebP/JPG में कन्वर्ट करें', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'ट्रांसपेरेंट PNG के लिए मैट कलर:', // 'Transparent PNG matte color:'
    losslessPngTitle: 'लॉसलेस PNG चुना गया है:', // 'Lossless PNG selected:'
    losslessPngNote: 'PNG क्वालिटी स्लाइडर को अनदेखा करता है, इसलिए साइज़ कम करना पूरी तरह पिक्सल डाइमेंशन छोटा करने पर निर्भर करता है। बड़ी फ़ोटो के लिए JPG या WebP चुनें, ताकि साफ़ रहते हुए सख्त KB सीमा तक पहुँचा जा सके।', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: '{target} तक कंप्रेस करें', // 'Compress to {targetLabel}'
    optimizing: 'ऑप्टिमाइज़ हो रहा है…', // 'Optimizing...'
    clear: 'साफ़ करें', // 'Clear'
    targetSummary: 'टारगेट कंप्रेशन सारांश · लक्ष्य ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{achieved} / {total} {images} ने {target} का टारगेट पूरा किया', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'इमेज', // 'image'
    imagePlural: 'इमेज', // 'images'
    summaryMissed: '· {missed} ईमानदारी से नहीं आ सकीं (जानकारी नीचे)', // '· {missed} could not honestly fit (details below)'
    totalSaved: 'कुल बचत: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '({grew} बढ़ गया)', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    underTarget: '{target} से कम ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'टारगेट पूरा नहीं हुआ — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'ओरिजिनल', // 'Original'
    columnOutput: 'आउटपुट', // 'Output'
    columnSpaceSaved: 'बचाई गई जगह', // 'Space Saved'
    columnReduction: 'कमी', // 'Reduction'
    columnSizeChange: 'साइज़ में बदलाव', // 'Size Change'
    grewBy: '{amount} बढ़ गया: दोबारा एनकोड करने पर ओरिजिनल से बड़ा हो गया।', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'फ़ोटो जैसी PNG के लिए WebP या JPG आमतौर पर छोटा होता है।', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'ओरिजिनल रखें', // 'Keep original'
    keptOriginalNote: 'ओरिजिनल फ़ाइल रखी गई, क्योंकि दोबारा एनकोड करने पर वह बड़ी हो गई थी।', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'ओरिजिनल फ़ाइल पहले से ही {target} से नीचे थी; {quality}% क्वालिटी पर साफ़ तरीके से एक्सपोर्ट हुई।', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: '{width}×{height} px फ़ुल रिज़ॉल्यूशन पर टारगेट पूरा हुआ ({quality})।', // 'Target met at full {width}×{height}px resolution ({quality}% quality / lossless PNG).'
    statusMetScaled: '{width}×{height} px तक स्केल करके टारगेट पूरा हुआ ({scale}% स्केल)।', // 'Target met by scaling to {width}×{height}px ({scale}% scale).'
    statusCannotPng: 'लॉसलेस PNG से {target} तक नहीं पहुँचा जा सकता (सबसे छोटा संभव: {size})।', // 'Cannot reach {target} with lossless PNG (smallest achievable: {size}).'
    statusCannotFull: '{width}×{height} px फ़ुल डाइमेंशन पर {target} तक नहीं पहुँचा जा सकता (कम से कम क्वालिटी साइज़ {size} है)।', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {size}).'
    statusCannotCleanly: '{target} का टारगेट साफ़ तरीके से पूरा नहीं हो सका। सबसे छोटी ईमानदार एनकोड की गई आउटपुट {size} है।', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {size}.'
    switchedFormatNote: 'लॉसलेस PNG को अपने आप {format} में कन्वर्ट कर दिया गया।', // 'Auto-converted lossless PNG to {format}.'
    errorTargetFailed: 'टारगेट कंप्रेशन में एरर आया।', // 'Target compression failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'टारगेट कंप्रेशन ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'कंप्रेस की गई ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'बल्क रीसाइज़ के लिए कई इमेज छोड़ें', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'बल्क रीसाइज़ स्ट्रैटेजी', // 'Batch Resize Strategy'
    strategyBounding: 'ज़्यादा से ज़्यादा चौड़ाई × ऊँचाई में फ़िट करें', // 'Fit Max W × H'
    strategyWidth: 'एक जैसी चौड़ाई', // 'Uniform Width'
    strategyExact: 'सटीक चौड़ाई × ऊँचाई', // 'Exact W × H'
    strategyPercentage: 'प्रतिशत (%)', // 'Percentage (%)'
    outputFormat: 'आउटपुट फ़ॉर्मेट', // 'Output Format'
    formatOriginal: 'ओरिजिनल', // 'Original' — same in Hindi
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'सभी इमेज स्केल करें:', // 'Scale All Images:'
    maxWidth: 'ज़्यादा से ज़्यादा चौड़ाई (px)', // 'Max Width (px)'
    targetWidth: 'टारगेट चौड़ाई (px)', // 'Target Width (px)'
    exactWidth: 'सटीक चौड़ाई (px)', // 'Exact Width (px)'
    maxHeight: 'ज़्यादा से ज़्यादा ऊँचाई (px)', // 'Max Height (px)'
    exactHeight: 'सटीक ऊँचाई (px)', // 'Exact Height (px)'
    doNotEnlarge: 'छोटी इमेज को बड़ा न करें', // 'Do not enlarge smaller images'
    fitMode: 'फ़िट मोड', // 'Fit Mode'
    fitContain: 'कंटेन', // 'Contain'
    fitCover: 'कवर', // 'Cover'
    fitStretch: 'स्ट्रेच', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'ई-कॉमर्स 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'थंबनेल 600px', // 'Thumbnail 600px'
    quality: 'क्वालिटी:', // 'Quality:'
    matteBg: 'मैट बैकग्राउंड:', // 'Matte BG:'
    resizingProgress: 'रीसाइज़ हो रहा है ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'बल्क रीसाइज़ करें ({count})', // 'Bulk Resize ({items.length})'
    clear: 'साफ़ करें', // 'Clear'
    bulkResizeComplete: 'बल्क रीसाइज़ पूरा हुआ', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} इमेज रीसाइज़ होकर तैयार है', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} इमेज रीसाइज़ होकर तैयार हैं', // '{count} images resized and ready'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'बल्क रीसाइज़ में एरर आया।', // 'Batch resize failed.'
    errorCorruptedFile: 'इमेज फ़ाइल खराब है या पढ़ी नहीं जा सकती।', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'बल्क रीसाइज़ की तुलना', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'रीसाइज़ की गई (बाद में)', // 'Resized (After)'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'बल्क फ़ॉर्मेट कन्वर्ज़न के लिए कई इमेज छोड़ें', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'बैच को इस फ़ॉर्मेट में कन्वर्ट करें', // 'Convert Batch To Format'
    formatWebp: 'WebP (वेब के लिए सबसे हल्का)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (यूनिवर्सल)', // 'JPG (Universal)'
    formatPng: 'PNG (लॉसलेस और ट्रांसपेरेंसी)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'फ़ाइल नाम के लिए वैकल्पिक सफ़िक्स', // 'Optional Filename Suffix'
    placeholderSuffix: 'जैसे _web', // placeholder 'e.g. _web'
    transparentFill: 'ट्रांसपेरेंट फ़िल', // 'Transparent Fill'
    qualityLosslessPng: 'क्वालिटी (लॉसलेस PNG)', // 'Quality (Lossless PNG)'
    qualityPercent: 'क्वालिटी ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'कन्वर्ट हो रहा है ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'सब कुछ कन्वर्ट करें ({count})', // 'Convert All ({items.length})'
    clear: 'साफ़ करें', // 'Clear'
    bulkConversionSummary: 'बल्क कन्वर्ज़न सारांश', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} फ़ाइलें {format} में कन्वर्ट हुईं · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    convertedTo: '{ext} में कन्वर्ट हुई', // 'Converted to {ext}'
    errorConversionFailed: 'बल्क कन्वर्ज़न में एरर आया।', // 'Batch conversion failed.'
    errorUnsupportedFile: 'इमेज फ़ाइल सपोर्ट नहीं की जाती या खराब है।', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'बल्क फ़ॉर्मेट कन्वर्ज़न', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'कन्वर्ट की गई (बाद में)', // 'Converted (After)'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Core Web Vitals के लिए ऑप्टिमाइज़ करने के लिए वेब एसेट छोड़ें', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'वेब परफ़ॉर्मेंस प्रीसेट', // 'Web Performance Presets'
    presetHero: 'हीरो / बैनर', // 'Hero / Banner'
    presetHeroDesc: 'ज़्यादा से ज़्यादा 1600 px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'ई-कॉमर्स प्रोडक्ट', // 'E-Commerce Product'
    presetProductDesc: 'ज़्यादा से ज़्यादा 1200 px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'कार्ड / थंबनेल', // 'Card / Thumbnail'
    presetThumbDesc: 'ज़्यादा से ज़्यादा 640 px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'सोशल OG / ईमेल', // 'Social OG / Email'
    presetOgDesc: 'ज़्यादा से ज़्यादा 1200 px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Retina 2× ग्राफ़िक', // 'Retina 2× Graphic'
    presetRetinaDesc: 'ज़्यादा से ज़्यादा 1920 px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'वेब फ़ॉर्मेट', // 'Web Format'
    maxDimension: 'ज़्यादा से ज़्यादा डाइमेंशन (लंबी साइड)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'ओरिजिनल डाइमेंशन रखें', // 'Keep Original Dimensions'
    max1920: 'ज़्यादा से ज़्यादा 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'ज़्यादा से ज़्यादा 1600 px (हीरो / बैनर)', // 'Max 1600px (Hero / Banner)'
    max1200: 'ज़्यादा से ज़्यादा 1200 px (ब्लॉग / प्रोडक्ट)', // 'Max 1200px (Blog / Product)'
    max800: 'ज़्यादा से ज़्यादा 800 px (कंटेंट के अंदर)', // 'Max 800px (In-Content)'
    max640: 'ज़्यादा से ज़्यादा 640 px (थंबनेल)', // 'Max 640px (Thumbnails)'
    quality: 'क्वालिटी:', // 'Quality:'
    onlyDownscale: 'सिर्फ़ बड़ी इमेज छोटी करें (EXIF और GPS मेटाडेटा अपने आप हट जाता है)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'ऑप्टिमाइज़ हो रहा है…', // 'Optimizing...'
    optimizeForWeb: 'वेब के लिए ऑप्टिमाइज़ करें ({count})', // 'Optimize for Web ({items.length})'
    clear: 'साफ़ करें', // 'Clear'
    webPerformanceSummary: 'वेब परफ़ॉर्मेंस सारांश', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% हल्का · {saved} पेज वेट बचा)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · {amount} बढ़ गया)', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    webReady: 'वेब के लिए तैयार ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: '{amount} बढ़ गया ({percent})', // 'Grew by {amount} ({formatPercent})'
    copyImg: '<img> कॉपी करें', // 'Copy <img>'
    copiedHtml: 'HTML कॉपी हो गया', // 'Copied HTML'
    copyImgTitle: 'चौड़ाई और ऊँचाई के साथ रिस्पॉन्सिव HTML img टैग कॉपी करें', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'वेब ऑप्टिमाइज़ेशन में एरर आया।', // 'Web optimization failed.'
    errorCorruptedFile: 'इमेज खराब है या सपोर्ट नहीं की जाती।', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'वेब ऑप्टिमाइज़ेशन की तुलना', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'वेब के लिए तैयार (बाद में)', // 'Web-Ready (After)'
    compare: 'तुलना करें', // 'Compare'
    download: 'डाउनलोड करें', // 'Download'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'कंप्रेस करने के लिए एनिमेटेड GIF छोड़ें', // 'Drop an animated GIF to compress'
    decodingGif: 'एनिमेटेड GIF के फ़्रेम आपके ब्राउज़र में लोकली डीकोड हो रहे हैं…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'फ़्रेम', // 'frame'
    framePlural: 'फ़्रेम', // 'frames'
    presetLight: 'हल्का', // 'Light'
    presetBalanced: 'संतुलित', // 'Balanced'
    presetMaxShrink: 'ज़्यादा से ज़्यादा छोटा', // 'Max Shrink'
    colorPaletteLimit: 'कलर पैलेट की सीमा', // 'Color Palette Limit'
    colorsCount: '{count} कलर', // '{maxColors} colors'
    outputScale: 'आउटपुट स्केल', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'फ़्रेम रेट ऑप्टिमाइज़ेशन', // 'Frame Rate Optimization'
    keepAllFrames: 'सभी फ़्रेम रखें', // 'Keep All Frames'
    dropEvery2nd: 'हर दूसरा फ़्रेम हटाएँ (~50% छोटा)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'हर 3 में से 1 फ़्रेम रखें', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'GIF कंप्रेस हो रहा है ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'GIF कंप्रेस करें', // 'Compress GIF'
    reset: 'रीसेट करें', // 'Reset'
    originalGif: 'ओरिजिनल GIF', // 'Original GIF'
    compressedGif: 'कंप्रेस किया गया GIF', // 'Compressed GIF'
    sizeChange: 'साइज़ में बदलाव', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'कंप्रेस किया गया GIF डाउनलोड करें', // 'Download Compressed GIF'
    notSmallerNotice: 'यह सोर्स GIF पहले से ही बहुत ज़्यादा ऑप्टिमाइज़ किया हुआ था या इसमें इनपुट से बड़ी फ़ुल-फ़्रेम पैलेट इस्तेमाल हुई है। इसे {size} से नीचे छोटा करने के लिए कलर पैलेट को 32–64 कलर तक कम करें, आउटपुट स्केल को 75% या 50% तक घटाएँ, या हर दूसरा फ़्रेम हटाएँ।', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'आपके ब्राउज़र में साफ़ तरीके से {percent}% कंप्रेस हुआ ({saved} बचे)।', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'ओरिजिनल ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'कंप्रेस किया गया ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'ओरिजिनल GIF', // alt 'Original GIF'
    altCompressedGif: 'कंप्रेस किया गया GIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIF कंप्रेशन में एरर आया।', // 'GIF compression failed.'
    errorDecodeFrames: 'GIF के फ़्रेम डीकोड नहीं हो सके।', // 'Could not decode GIF frames.'
    errorTooSmall: 'फ़ाइल सही GIF होने के लिए बहुत छोटी है।', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'चुनी गई फ़ाइल सही GIF87a या GIF89a एनिमेशन नहीं है।', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF के कैनवस डाइमेंशन 0×0 गलत हैं।', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'GIF की ग्लोबल कलर टेबल अधूरी है।', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'इस GIF फ़ाइल से कोई इमेज फ़्रेम डीकोड नहीं हो सका।', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '2D कैनवस कॉन्टेक्स्ट शुरू नहीं हो सका।', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'JPG में कन्वर्ट करने के लिए iPhone की HEIC या HEIF फ़ोटो छोड़ें', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Apple की HEIC और HEIF फ़ोटो आपके ब्राउज़र के अंदर क्लाइंट-साइड WebAssembly (heic2any) से लोकली डीकोड होती हैं — आपकी फ़ोटो कभी आपके डिवाइस से बाहर नहीं जातीं।', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    outputQuality: 'JPG आउटपुट क्वालिटी', // 'JPG Output Quality'
    smallerFile: 'छोटी फ़ाइल (20%)', // 'Smaller file (20%)'
    balanced: 'संतुलित (85%)', // 'Balanced (85%)'
    maxDetail: 'ज़्यादा से ज़्यादा डिटेल (100%)', // 'Max detail (100%)'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    clear: 'साफ़ करें', // 'Clear'
    batchSummary: 'HEIC → JPG बैच सारांश', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} कन्वर्ट हुईं · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    columnChange: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'JPG डाउनलोड करें', // 'Download JPG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'यह HEIC/HEIF फ़ाइल डीकोड नहीं हो सकी। पक्का करें कि यह iPhone या Apple की सही HEIC फ़ोटो है।', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '"{filename}" डीकोड नहीं हो सकी। पक्का करें कि यह सही HEIC इमेज है।', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '{name} को JPG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'लॉसलेस PNG में कन्वर्ट करने के लिए JPG या JPEG इमेज छोड़ें', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    losslessPngOutput: 'लॉसलेस PNG आउटपुट', // 'Lossless PNG Output'
    losslessPngEncoding: 'लॉसलेस PNG एनकोडिंग', // 'Lossless PNG Encoding'
    losslessPngNote: 'PNG तीखे किनारे, टेक्स्ट और अल्फ़ा ट्रांसपेरेंसी को बिना किसी लॉसी कंप्रेशन खामी के बचाकर रखता है।', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    clear: 'साफ़ करें', // 'Clear'
    batchSummary: 'JPG → PNG बैच सारांश', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} कन्वर्ट हुईं · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    columnChange: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'PNG डाउनलोड करें', // 'Download PNG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}" डीकोड नहीं हो सकी। पक्का करें कि यह सही JPG इमेज है।', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '{name} को PNG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'छोटी JPG में कन्वर्ट करने के लिए PNG फ़ाइलें छोड़ें', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    outputQuality: 'JPG आउटपुट क्वालिटी', // 'JPG Output Quality'
    smallerFile: 'छोटी फ़ाइल (20%)', // 'Smaller file (20%)'
    balanced: 'संतुलित (85%)', // 'Balanced (85%)'
    maxDetail: 'ज़्यादा से ज़्यादा डिटेल (100%)', // 'Max detail (100%)'
    transparentMatteColor: 'ट्रांसपेरेंट बैकग्राउंड के लिए मैट कलर', // 'Transparent Background Matte Color'
    matteWhite: 'सफ़ेद', // 'White'
    matteBlack: 'काला', // 'Black'
    matteLightGray: 'हल्का ग्रे', // 'Light Gray'
    matteNote: 'JPG ट्रांसपेरेंसी सपोर्ट नहीं करता; ट्रांसपेरेंट एरिया इस कलर से साफ़ तरीके से भर जाते हैं।', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    clear: 'साफ़ करें', // 'Clear'
    batchSummary: 'PNG → JPG बैच सारांश', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} कन्वर्ट हुईं · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    columnChange: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'JPG डाउनलोड करें', // 'Download JPG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}" डीकोड नहीं हो सकी। पक्का करें कि यह सही PNG इमेज है।', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '{name} को JPG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'हल्के WebP में कन्वर्ट करने के लिए JPG इमेज छोड़ें', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP आउटपुट क्वालिटी', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP आउटपुट क्वालिटी', // aria-label 'WebP output quality'
    smallerFile: 'छोटी फ़ाइल (20%)', // 'Smaller file (20%)'
    balanced: 'संतुलित (85%)', // 'Balanced (85%)'
    maxDetail: 'ज़्यादा से ज़्यादा डिटेल (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} बैच सारांश', // '{source} → {target} Batch Summary'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    filesConvertedSuffix: 'कन्वर्ट हुईं', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'WebP डाउनलोड करें', // 'Download WebP'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    clear: 'साफ़ करें', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} को WebP में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" डीकोड नहीं हो सकी। पक्का करें कि यह सही JPG इमेज है।', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'यूनिवर्सल JPG में कन्वर्ट करने के लिए WebP इमेज छोड़ें', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG आउटपुट क्वालिटी', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG आउटपुट क्वालिटी', // aria-label 'JPG output quality'
    smallerFile: 'छोटी फ़ाइल (20%)', // 'Smaller file (20%)'
    balanced: 'संतुलित (85%)', // 'Balanced (85%)'
    maxDetail: 'ज़्यादा से ज़्यादा डिटेल (100%)', // 'Max detail (100%)'
    matteColorLabel: 'ट्रांसपेरेंट बैकग्राउंड के लिए मैट कलर', // 'Transparent Background Matte Color'
    matteAriaLabel: 'मैट बैकग्राउंड कलर', // aria-label 'Matte background color'
    matteWhite: 'सफ़ेद', // 'White'
    matteBlack: 'काला', // 'Black'
    matteLightGray: 'हल्का ग्रे', // 'Light Gray'
    matteHint: 'JPG ट्रांसपेरेंसी सपोर्ट नहीं करता; ट्रांसपेरेंट एरिया इस कलर से साफ़ तरीके से भर जाते हैं।', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} बैच सारांश', // '{source} → {target} Batch Summary'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    filesConvertedSuffix: 'कन्वर्ट हुईं', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'JPG डाउनलोड करें', // 'Download JPG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    clear: 'साफ़ करें', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} को JPG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" डीकोड नहीं हो सकी। पक्का करें कि यह सही WebP इमेज है।', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'ट्रांसपेरेंट WebP में कन्वर्ट करने के लिए PNG फ़ाइलें छोड़ें', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP आउटपुट क्वालिटी', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP आउटपुट क्वालिटी', // aria-label 'WebP output quality'
    smallerFile: 'छोटी फ़ाइल (20%)', // 'Smaller file (20%)'
    balanced: 'संतुलित (85%)', // 'Balanced (85%)'
    maxDetail: 'ज़्यादा से ज़्यादा डिटेल (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} बैच सारांश', // '{source} → {target} Batch Summary'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    filesConvertedSuffix: 'कन्वर्ट हुईं', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'WebP डाउनलोड करें', // 'Download WebP'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    clear: 'साफ़ करें', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} को WebP में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" डीकोड नहीं हो सकी। पक्का करें कि यह सही PNG इमेज है।', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'लॉसलेस PNG में कन्वर्ट करने के लिए WebP फ़ाइलें छोड़ें', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    losslessPngOutput: 'लॉसलेस PNG आउटपुट', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'लॉसलेस PNG एनकोडिंग', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG तीखे किनारे, टेक्स्ट और अल्फ़ा ट्रांसपेरेंसी को बिना किसी लॉसी कंप्रेशन खामी के बचाकर रखता है।', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: '{source} → {target} बैच सारांश', // '{source} → {target} Batch Summary'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    filesConvertedSuffix: 'कन्वर्ट हुईं', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'PNG डाउनलोड करें', // 'Download PNG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    clear: 'साफ़ करें', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} को PNG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" डीकोड नहीं हो सकी। पक्का करें कि यह सही WebP इमेज है।', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'PNG में रास्टराइज़ करने के लिए SVG वेक्टर फ़ाइलें छोड़ें', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'इनलाइन SVG ग्राफ़िक्स HTML5 Canvas से लोकली रास्टराइज़ होते हैं, ट्रांसपेरेंट बैकग्राउंड बनाए रखते हुए। सीमा: SVG के अंदर रेफ़रेंस की गई बाहरी <image> URL, बाहरी CSS स्टाइलशीट/वेबफ़ॉन्ट या स्क्रिप्ट, अकेले Canvas एक्सपोर्ट में रेंडर नहीं हो सकतीं।', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    losslessPngOutput: 'लॉसलेस PNG आउटपुट', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'लॉसलेस PNG एनकोडिंग', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG तीखे किनारे, टेक्स्ट और अल्फ़ा ट्रांसपेरेंसी को बिना किसी लॉसी कंप्रेशन खामी के बचाकर रखता है।', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'रास्टर एक्सपोर्ट स्केल', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG के असली डाइमेंशन पर लागू होने वाला मल्टिप्लायर (8000 px की सीमा)। स्केल बदलने के बाद “सब कुछ फिर से कन्वर्ट करें” पर क्लिक करें।', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: '{source} → {target} बैच सारांश', // '{source} → {target} Batch Summary'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    filesConvertedSuffix: 'कन्वर्ट हुईं', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'PNG डाउनलोड करें', // 'Download PNG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    clear: 'साफ़ करें', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} को PNG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'यह SVG रास्टराइज़ नहीं हो सका। पक्का करें कि फ़ाइल बिना सिंटैक्स एरर के सही XML SVG मार्कअप है।', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'यूनिवर्सल JPG में कन्वर्ट करने के लिए AVIF इमेज छोड़ें', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'AVIF इमेज आपके ब्राउज़र के नेटिव AVIF डिकोडर से लोकली डीकोड होती हैं (मॉडर्न Chrome, Edge, Firefox और Safari में सपोर्ट है) और स्टैंडर्ड JPG फ़ाइलों के रूप में एक्सपोर्ट होती हैं।', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG आउटपुट क्वालिटी', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG आउटपुट क्वालिटी', // aria-label 'JPG output quality'
    smallerFile: 'छोटी फ़ाइल (20%)', // 'Smaller file (20%)'
    balanced: 'संतुलित (85%)', // 'Balanced (85%)'
    maxDetail: 'ज़्यादा से ज़्यादा डिटेल (100%)', // 'Max detail (100%)'
    matteColorLabel: 'ट्रांसपेरेंट बैकग्राउंड के लिए मैट कलर', // 'Transparent Background Matte Color'
    matteAriaLabel: 'मैट बैकग्राउंड कलर', // aria-label 'Matte background color'
    matteWhite: 'सफ़ेद', // 'White'
    matteBlack: 'काला', // 'Black'
    matteLightGray: 'हल्का ग्रे', // 'Light Gray'
    matteHint: 'JPG ट्रांसपेरेंसी सपोर्ट नहीं करता; ट्रांसपेरेंट एरिया इस कलर से साफ़ तरीके से भर जाते हैं।', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} बैच सारांश', // '{source} → {target} Batch Summary'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    filesConvertedSuffix: 'कन्वर्ट हुईं', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'JPG डाउनलोड करें', // 'Download JPG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    clear: 'साफ़ करें', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} को JPG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'आपका ब्राउज़र यह AVIF इमेज डीकोड नहीं कर सका। पक्का करें कि फ़ाइल सही .avif इमेज है और मॉडर्न Chrome, Firefox, Edge या Safari ब्राउज़र आज़माएँ।', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'कॉम्पैक्ट JPG में कन्वर्ट करने के लिए बिना कंप्रेस किए BMP बिटमैप छोड़ें', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'कन्वर्ज़न पाइपलाइन:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG आउटपुट क्वालिटी', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG आउटपुट क्वालिटी', // aria-label 'JPG output quality'
    smallerFile: 'छोटी फ़ाइल (20%)', // 'Smaller file (20%)'
    balanced: 'संतुलित (85%)', // 'Balanced (85%)'
    maxDetail: 'ज़्यादा से ज़्यादा डिटेल (100%)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} बैच सारांश', // '{source} → {target} Batch Summary'
    fileSingular: 'फ़ाइल', // 'file'
    filePlural: 'फ़ाइलें', // 'files'
    filesConvertedSuffix: 'कन्वर्ट हुईं', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP बन रहा है…', // 'Creating ZIP...'
    downloadAllZip: 'सब कुछ डाउनलोड करें (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'बदलाव', // 'Change'
    compare: 'तुलना करें', // 'Compare'
    downloadTarget: 'JPG डाउनलोड करें', // 'Download JPG'
    removeImage: '{name} हटाएँ', // aria-label `Remove ${item.name}`
    converting: 'कन्वर्ट हो रहा है…', // 'Converting...'
    reconvertAll: 'सब कुछ फिर से कन्वर्ट करें', // 'Re-convert All'
    clear: 'साफ़ करें', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} को JPG में कन्वर्ट नहीं किया जा सका।', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" डीकोड नहीं हो सकी। पक्का करें कि यह सही BMP इमेज है।', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
} as const;
