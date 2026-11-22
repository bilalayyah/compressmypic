// Turkish (tr) UI strings for CompressMyPic — natural, idiomatic Turkish.
// Source: ~/workspace/compressmypic/spanish/source/ (Hero, FaqSection, EducationalContent,
// ToolsDirectorySection, ShareSection, Header, Footer, ToolPageLayout, UploadZone,
// ComparisonModal, home-entry.txt, index.html, App.tsx guides section, tools.ts categories).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors.
// Note on uploadZone: hint and errorTooBig interpolate the max size — kept as {max}.

export const TR = {
  header: {
    home: 'Ana Sayfa',
    tools: 'Araçlar',
    howItWorks: 'Nasıl Çalışır',
    faq: 'Sık Sorulan Sorular',
    about: 'Hakkımızda',
    blog: 'Blog',
    contact: 'İletişim',
    compressImages: 'Görselleri Sıkıştır',
    themeLight: 'Açık Mod',
    themeDark: 'Koyu Mod',
    themeSystem: 'Sistem Varsayılanı',
    languageLabel: 'Dil',
    homeAriaLabel: 'CompressMyPic – Ücretsiz çevrimiçi görsel sıkıştırıcı',
    themeLightShort: 'Açık', // 'Light'
    themeDarkShort: 'Koyu', // 'Dark'
    themeSystemShort: 'Sistem', // 'System'
    themeHeading: 'Tema', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Gezinme menüsünü göster veya gizle', // 'Toggle navigation menu'
    themeAriaLabel: 'Renk temasını değiştir (geçerli: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Tema: {current}', // 'Theme: {current}'
    aboutUs: 'Hakkımızda', // 'About Us' (mobile drawer)
    contactUs: 'Bize Ulaşın', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Hızlı, güvenli ve gizli görsel sıkıştırma, doğrudan tarayıcınızda. JPG, PNG ve WebP görsellerinizi verilerinizi hiçbir harici sunucuya yüklemeden optimize edin.',
    privacyNote: 'Cihazınızda %100 gizlilik',
    toolsHeading: 'Görsel Araçları',
    legalHeading: 'Güven ve Yasal',
    guidesHeading: 'Rehberler',
    blogLabel: 'Blog',
    moreHeading: 'Diğer Yardımcı Araçlar',
    directoryHeading: 'Gelişmiş sıkıştırma, düzenleme ve geliştirici araçları',
    processedLocally: 'HTML5 Canvas ile yerel olarak işlenir',
    bottomRights:
      '© {year} CompressMyPic. Tüm hakları saklıdır. Tarayıcıda çalışan ücretsiz görsel sıkıştırma aracı.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
    contactLabel: 'İletişim: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Görselleri Sıkıştır' },
      { slug: '/image-resizer', label: 'Görsel Boyutlandırıcı' },
      { slug: '/image-converter', label: 'Görsel Dönüştürücü' },
      { slug: '/rotate-flip-image', label: 'Görsel Döndür ve Çevir' },
      { slug: '/image-to-pdf', label: 'Görselden PDF\'ye' },
      { slug: '/remove-image-metadata', label: 'Görsel Üstverisini Kaldır' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Gizlilik Politikası' },
      { slug: '/terms', label: 'Hizmet Şartları' },
      { slug: '/about', label: 'Hakkımızda' },
      { slug: '/contact', label: 'Destek ile İletişime Geçin' },
      { slug: '/disclaimer', label: 'Yasal Uyarı' },
      { slug: '/cookie-policy', label: 'Çerez Politikası' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'WhatsApp için kalite kaybı olmadan görsel sıkıştırma',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG, PNG ve WebP: Hangi biçimi kullanmalısınız?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Web ve e-posta için görsel boyutunu 100 KB\'ye düşürme',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Üstveri ve EXIF Görüntüleyici' },
      { slug: '/favicon-generator', label: 'Favicon Oluşturucu' },
      { slug: '/image-color-picker', label: 'Görsel Renk Seçici' },
      { slug: '/image-dimensions-checker', label: 'Görsel Boyut Denetleyici' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: '50 KB\'ye Sıkıştır' },
      { slug: '/compress-image-to-100kb', label: '100 KB\'ye Sıkıştır' },
      { slug: '/compress-image-to-200kb', label: '200 KB\'ye Sıkıştır' },
      { slug: '/compress-image-to-500kb', label: '500 KB\'ye Sıkıştır' },
      { slug: '/target-file-size-compressor', label: 'Hedef Dosya Boyutu Sıkıştırıcı' },
      { slug: '/bulk-image-compressor', label: 'Toplu Görsel Sıkıştırıcı' },
      { slug: '/bulk-image-resizer', label: 'Toplu Görsel Boyutlandırıcı' },
      { slug: '/bulk-image-converter', label: 'Toplu Görsel Dönüştürücü' },
      { slug: '/web-image-optimizer', label: 'Web Görsel Optimizasyonu' },
      { slug: '/gif-compressor', label: 'GIF Sıkıştırıcı' },
      { slug: '/image-cropper', label: 'Görsel Kırpıcı' },
      { slug: '/image-watermark', label: 'Görsele Filigran Ekle' },
      { slug: '/blur-pixelate-image', label: 'Bulanıklaştır ve Pikselleştir' },
      { slug: '/add-text-to-image', label: 'Görsele Metin Ekle' },
      { slug: '/image-border-generator', label: 'Kenarlık Oluşturucu' },
      { slug: '/round-image-corners', label: 'Köşeleri Yuvarla' },
      { slug: '/image-brightness-editor', label: 'Parlaklık Düzenleyici' },
      { slug: '/image-contrast-editor', label: 'Kontrast Düzenleyici' },
      { slug: '/image-saturation-editor', label: 'Doygunluk Düzenleyici' },
      { slug: '/image-filters', label: 'Görsel Filtreleri' },
      { slug: '/add-background-to-image', label: 'Arka Plan Ekle' },
      { slug: '/image-splitter', label: 'Görsel Bölücü' },
      { slug: '/image-dpi-changer', label: 'DPI Değiştirici' },
      { slug: '/image-to-base64', label: 'Görselden Base64\'e' },
      { slug: '/base64-to-image', label: 'Base64\'ten Görsele' },
      { slug: '/image-color-palette-extractor', label: 'Renk Paleti Çıkarıcı' },
      { slug: '/gif-maker', label: 'GIF Oluşturucu' },
      { slug: '/image-collage-maker', label: 'Kolaj Oluşturucu' },
      { slug: '/heic-to-jpg', label: 'HEIC\'ten JPG\'ye' },
      { slug: '/jpg-to-png', label: 'JPG\'den PNG\'ye' },
      { slug: '/png-to-jpg', label: 'PNG\'den JPG\'ye' },
      { slug: '/jpg-to-webp', label: 'JPG\'den WebP\'ye' },
      { slug: '/webp-to-jpg', label: 'WebP\'den JPG\'ye' },
      { slug: '/png-to-webp', label: 'PNG\'den WebP\'ye' },
      { slug: '/webp-to-png', label: 'WebP\'den PNG\'ye' },
      { slug: '/svg-to-png', label: 'SVG\'den PNG\'ye' },
      { slug: '/avif-to-jpg', label: 'AVIF\'ten JPG\'ye' },
      { slug: '/bmp-to-jpg', label: 'BMP\'den JPG\'ye' },
    ],
  },
  hero: {
    pill: 'Cihazınızda %100 gizli sıkıştırma · Sunucuya yükleme yok',
    h1: 'Ücretsiz Görsel Sıkıştırıcı – Görselleri Çevrimiçi Sıkıştırın',
    sub: 'Görünür kaliteden ödün vermeden görsel dosyalarınızın boyutunu küçültün. JPG, PNG, WebP ve HEIC için ücretsiz çevrimiçi görsel sıkıştırıcımız ve fotoğraf sıkıştırıcımızla görselleri çevrimiçi ücretsiz sıkıştırın: Hızlı, güvenli, kayıtsız, filigransız ve doğrudan tarayıcınızda kolay sıkıştırma.',
    badge1: 'Görselleriniz cihazınızdan asla ayrılmaz',
    badge2: 'Tarayıcıda anında işleme',
    badge3: 'JPG, PNG, WebP ve HEIC uyumlu',
  },
  toolsDirectory: {
    heading: 'Görsel işlemek için daha fazla ücretsiz araç',
    subheading:
      'Her araç %100 tarayıcınızda çalışır: sunucuya yükleme yok, kayıt yok, filigran yok.',
    eyebrow: 'Tüm Araçlar Tarayıcınızda', // 'All Browser-Native Tools'
    allTools: 'Tüm Araçlar', // 'All Tools'
    openTool: 'Aracı Aç', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'Görsel sıkıştırma nedir?',
        body: 'Görsel sıkıştırma, bir grafik dosyasının bayt boyutunu, görsel kaliteyi kabul edilebilir bir sınırın ötesinde bozmadan küçültme işlemidir. Bir kamera veya telefon bir fotoğraf kaydettiğinde çok büyük miktarda veri saklar ve bu bilginin büyük bir kısmı, kaldırıldığında veya sadeleştirildiğinde çıplak gözle fark edilmez. CompressMyPic; JPG, PNG ve WebP dosyaları için ücretsiz çevrimiçi bir görsel iyileştirici ve görsel boyut küçültücüdür; fotoğraf sıkıştırıcı ve fotoğraf boyut küçültücü olarak çalışır.\n\nSıkıştırma algoritmaları bu kalıpları analiz ederek gereksiz bilgileri seçici biçimde yeniden düzenler ya da atar. Ortaya çıkan dosya çok daha az depolama alanı kaplar ve internet üzerinden çok daha hızlı aktarılır. Bu rehber, CompressMyPic\'in kalite kaydırıcısı, hazır ayarları ve biçim seçimiyle kalite kaybı olmadan nasıl görsel sıkıştıracağınızı gösterir.',
      },
      {
        heading: 'Görsellerinizi neden sıkıştırmalısınız?',
        body: 'Optimize edilmemiş görseller; bir web sitesinin performansının, depolama alanının ve mobil veri tüketiminin önündeki en büyük engellerden biridir. Görsellerinizi sıkıştırmak size hemen somut faydalar sağlar:',
        bullets: [
          'Daha hızlı açılan web sitesi: sıkıştırılmış görseller içeren sayfalar %70\'e kadar daha hızlı yüklenir; bu da Core Web Vitals (Largest Contentful Paint) değerlerinizi ve arama motorlarındaki sıralamanızı iyileştirir. Sitenizdeki görsellerin boyutunu küçülttüğünüzde ziyaretçiler daha uzun süre kalır ve sayfadan daha az ayrılır.',
          'Daha az depolama alanı: ağır orijinaller yerine optimize edilmiş görsel dosyaları saklayarak bulut barındırma, sunucu diski ve yedekleme maliyetlerini düşürün.',
          'Görsel paylaşmak daha kolay: e-posta eklerindeki katı boyut sınırları ya da mesajlaşma uygulamalarındaki yükleme kotaları artık sizi durduramaz. Sıkıştırılmış fotoğraflar, yavaş mobil bağlantılarda ya da sınırlı veri paketlerinde bile anında eklenir ve gönderilir.',
          'Daha az bant genişliği tüketimi: mobil veri paketi kullanan kullanıcılarınıza para kazandırır ve ziyaretçilerin sitenizden ayrılmasını önlersiniz. Daha küçük dosyalar, özellikle yavaş mobil bağlantılarda çok daha hızlı indirilir.',
        ],
      },
      {
        heading: 'Nasıl çalışır?',
        body: 'Fotoğraflarınızı sıkıştırmak yalnızca birkaç saniye sürer: hesap yok, program yok, yükleme yok. Üç kolay adımda kalite kaybı olmadan nasıl görsel sıkıştıracağınız aşağıda anlatılıyor.',
        bullets: [
          'Adım 1 — Görsellerinizi yükleyin: JPG, PNG, WebP veya HEIC görsellerinizi yükleme alanına sürükleyip bırakın, seçmek için “Dosyalara Gözat” düğmesine tıklayın ya da Ctrl+V ile bir görsel yapıştırın. Bir seferde birden fazla görseli, görsel başına 20 MB\'ye kadar yükleyebilirsiniz.',
          'Adım 2 — Kaliteyi ayarlayın ve biçiminizi seçin: Düşük, Dengeli veya Yüksek hazır ayarlarından birini seçin ya da kalite kaydırıcısını %10 ile %100 arasında hareket ettirin; orijinal biçimi korumaya ya da JPG, PNG veya WebP\'ye dönüştürmeye karar verin. Her görsel için önceki ve sonraki boyutu canlı olarak görün ve görsel sonucu incelemek için etkileşimli karşılaştırma kaydırıcısını kullanın.',
          'Adım 3 — Sıkıştırılmış görsellerinizi indirin: sıkıştırılmış her görseli tek tek indirin ya da tüm grubu tek dosyada indirmek için “Tümünü İndir (ZIP)” düğmesine tıklayın. Görselleriniz doğrudan tarayıcınızda sıkıştırılır; beklemenize ya da bir şey yüklemenize gerek yoktur.',
        ],
      },
      {
        heading: 'Bu ücretsiz görsel sıkıştırıcıyı neden kullanmalısınız?',
        body: 'CompressMyPic; günlük fotoğraflar, web sitesi görselleri ve sosyal medya gönderileri için tasarlanmış, kayıtsız ve filigransız ücretsiz bir görsel sıkıştırıcıdır.',
        bullets: [
          'JPG, PNG, WebP ve HEIC sıkıştırın: gerçekten kullandığınız biçimler için tek bir görsel sıkıştırıcı. JPG ve JPEG fotoğrafları sıkıştırın, saydamlığı koruyarak PNG grafikleri sıkıştırın ve en küçük dosyalar için WebP görselleri sıkıştırın.',
          'Kalite kaybı olmadan görsel boyutunu küçültün: akıllı sıkıştırma gereksiz verileri ve üstveriyi kaldırır; görsel yine de orijinaline neredeyse aynı görünür. Dengeli hazır ayarı en iyi başlangıç noktasıdır; önceki-sonraki karşılaştırması kaliteyi kendiniz denetlemenizi sağlar.',
          'Toplu görsel sıkıştırıcı: birden fazla görseli aynı anda sıkıştırın: bu toplu görsel sıkıştırıcı, aynı ayarlarla birden fazla görseli aynı anda sıkıştırmanızı ve dosyaları tek tek kaydetmek yerine “Tümünü İndir (ZIP)” düğmesiyle hepsini birlikte indirmenizi sağlar.',
          'WhatsApp, Instagram ve Facebook için görsel sıkıştırın: fotoğrafların boyutunu küçültün; WhatsApp üzerinden hızlı gönderilsin, Instagram ve Facebook\'a sorunsuz yüklensin. Daha küçük dosyalar daha az mobil veri tüketir ve çok büyük oldukları için reddedilme olasılıkları çok daha düşüktür.',
          'Görsel boyutunu 20 KB, 50 KB, 100 KB veya 200 KB\'ye düşürün: kalite kaydırıcısını adım adım aşağı indirin ve hedefinize — 200 KB, 100 KB, 50 KB hatta 20 KB — ulaşana kadar canlı önceki-sonraki boyutu izleyin. Çıkış biçimini WebP olarak değiştirmek, gözle görülür kalite kaybı olmadan hedefinize ulaşmanıza genellikle yardımcı olur.',
        ],
      },
      {
        heading: 'JPG, PNG ve WebP sıkıştırma: Hangi biçimi seçmelisiniz?',
        body: 'JPG, PNG ve WebP farklı amaçlara hizmet eder. Güçlü yönlerini bilmek projeniz için en iyi seçimi yapmanıza yardımcı olur.\n\nGörsel farkı karşılaştırın: ne kadar sıkıştırmanın kabul edilebilir olduğunu bilmiyor musunuz? Aracın önceki-sonraki karşılaştırma özelliğini kullanın. Etkileşimli kaydırıcımız, indirmeden önce görsel bozuklukları veya kalite kaybını fark etmeniz için orijinal görseli ve sıkıştırılmış sürümü yan yana görmenizi sağlar.',
        bullets: [
          'JPG Sıkıştırıcı — JPG\'yi çevrimiçi ücretsiz sıkıştırın: web siteniz, blogunuz veya portföyünüz için idealdir. JPG\'yi çevrimiçi ücretsiz sıkıştırın ve canlı boyutu izlerken kalite kaydırıcısını aşağı indirerek JPEG\'yi 100 KB\'ye sıkıştırın. JPEG sıkıştırması kayıplıdır: insan gözünün zar zor fark ettiği bazı görsel verileri kalıcı olarak kaldırır. Bu yüzden bir fotoğrafı, gözle görülür kalite kaybı olmadan megabaytlardan kilobaytlara indirebilirsiniz.',
          'PNG Sıkıştırıcı — PNG\'yi çevrimiçi ücretsiz sıkıştırın: grafikler, ekran görüntüleri, logolar ve saydamlık gerektiren görseller (logolar, simgeler veya çizimler gibi) için idealdir. Saydamlığı tamamen koruyarak PNG\'yi burada ücretsiz sıkıştırın; pikseli pikselüne net grafikler elde edin. Bir PNG\'yi WebP\'ye dönüştürmek çoğu zaman onu çok daha küçük yapar.',
          'WebP görselleri sıkıştırın — Modern biçim: web optimizasyonu için idealdir. WebP, JPEG veya PNG\'den genellikle %25–35 daha küçük olan, kayıplı ve kayıpsız mükemmel sıkıştırma sunar. Benzer kalitede en küçük boyutu elde etmek için WebP görsel dosyalarını sıkıştırın; gözle görülür kalite kaybı olmadan web sayfaları için görsel optimize etmek istediğinizde WebP kullanın. Çoğu web sitesi için en iyi seçimdir.',
        ],
      },
      {
        heading: 'Bu görsel sıkıştırıcıyı ne için kullanabilirsiniz?',
        body: 'Tek bir ücretsiz görsel sıkıştırıcı, insanların görsel boyutunu küçültmek istemesinin en yaygın nedenlerini kapsar.',
        bullets: [
          'Web için görsel optimize edin: web sayfalarınızdaki görselleri optimize edin; daha hızlı yüklensinler, Core Web Vitals değerleri iyileşsin ve sıralamanız yükselsin. Daha küçük görseller; daha hızlı sayfalar, daha mutlu ziyaretçiler ve daha az barındırma bant genişliği demektir.',
          'E-posta eki için görsel sıkıştırın: e-posta eki için görsel sıkıştırın; fotoğraflarınız ek boyutu sınırlarına sığsın. Ağır orijinaller yerine indirilen küçük dosyaları ekleyin; e-postalarınız geri dönmeden gönderilir.',
          'Web siteniz için fotoğraf sıkıştırın: yüklemeden önce web siteniz, blogunuz, portföyünüz veya çevrimiçi mağazanız için bir fotoğraf sıkıştırın. Ürün fotoğrafları, afişler ve blog görselleri net kalır ve sunucunuzda çok daha az yer kaplar.',
          'Fotoğrafın dosya boyutunu küçültün: paylaşmadan, kaydetmeden veya yazdırmadan önce telefonunuzdaki ya da kameranızdaki bir fotoğrafın dosya boyutunu küçültün. Büyük fotoğraflar hızlı gönderilir, kolay saklanır ve sorunsuz yönetilir.',
        ],
      },
      {
        heading: 'Görsel boyutu neden önemlidir',
        body: 'Büyük, yüksek çözünürlüklü görsel dosyaları kamera teknolojisinin hızlı gelişiminin sonucudur: görseller artık yalnızca birkaç yıl öncesine göre 2–3 kat daha büyüktür. Web sayfalarınızdaki görsellerin boyutunu küçülttüğünüzde ve web için görsel optimize ettiğinizde siteniz daha hızlı yüklenir, daha az bant genişliği tüketir ve arama sonuçlarında daha üstte sıralanır.\n\nİyi bir sıkıştırıcı ararken şunlara dikkat edin: 1) kaliteden ödün vermemesi, 2) verilerinizi gizli tutması (cihazınızda işleme) ve 3) dosyalarınızı uzak bir sunucuya göndermeden görselleri hızlı işlemesi. CompressMyPic tam olarak bunun için yapılmıştır.',
      },
      {
        heading: 'Optimizasyon ipuçları: kalite kaybı olmadan görsel boyutunu küçültün',
        body: '',
        bullets: [
          'Dengeli hazır ayarıyla başlayın: Dengeli hazır ayarı (%70 kalite) çoğu görsel için en iyi dengeyi sunar: çok daha küçük dosyalar ve orijinale büyük görsel benzerlik.',
          'Doğru biçimi seçin: fotoğraflar için JPG veya WebP her zaman PNG\'den daha küçük dosyalar verir. Saydam logolar ve çizgi grafikleri için PNG kullanın.',
          'Bir hedef boyut belirleyin: web kullanımı için 200 KB\'nin altındaki görselleri hedefleyin. E-posta ve mesajlar için hızlı teslim için 1 MB\'nin altında kalın. Hedef boyutunuza ulaşmak için kalite kaydırıcısını ve canlı boyutu kullanın.',
          'İdeal noktayı bulun: kalitenin önemli olduğu ana görseller için kalite kaydırıcısını %85–90\'a ayarlayın; genel web kullanımı için %70–80 genellikle ideal dengedir; küçük resimler için ya da boyutun en önemli olduğu durumlarda %50–60 daha iyidir.',
          'En küçük dosyalar için WebP\'yi deneyin: çıkış biçimini WebP olarak değiştirmek, benzer kalitede bir JPG veya PNG\'yi genellikle %25–35 daha küçültür: kalite kaybı olmadan görsel boyutunu küçültmenin kolay bir yolu.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Sık Sorulan Sorular',
    subheading:
      'CompressMyPic ile görselleri çevrimiçi ücretsiz sıkıştırma hakkında bilmeniz gereken her şey.',
    faqs: [
      {
        id: 'faq-1',
        question: 'Görseli çevrimiçi ücretsiz nasıl sıkıştırırım?',
        answer:
          'Görsel dosyalarınızı CompressMyPic\'e sürükleyip bırakın ya da “Dosyalara Gözat” düğmesine tıklayın. Bir sıkıştırma hazır ayarı seçin (Düşük, Dengeli veya Yüksek) ya da kalite kaydırıcısını ayarlayın ve optimize edilmiş görsellerinizi anında indirin. Araç %100 ücretsizdir; kayıt ya da program kurulumu gerekmez.',
      },
      {
        id: 'faq-2',
        question: 'Görseli 100 KB\'ye nasıl sıkıştırırım?',
        answer:
          'CompressMyPic\'te tam KB boyutu yazabileceğiniz bir kutu yoktur; bu yüzden 100 KB\'yi doğrudan yazamazsınız. Bunun yerine görselinizi yükleyin, bir hazır ayar seçin ya da kalite kaydırıcısını aşağı indirin ve her görsel için gösterilen canlı önceki-sonraki boyutu izleyin. Sıkıştırılmış boyut 100 KB\'ye yaklaşana kadar kaliteyi ayarlayın ya da çıkış biçimini WebP olarak değiştirin, sonra indirin.',
      },
      {
        id: 'faq-3',
        question: 'Kalite kaybı olmadan görsel boyutunu nasıl küçültürüm?',
        answer:
          'Dengeli hazır ayarını (yaklaşık %70 kalite) ya da %85–90 gibi yüksek bir kaliteyi seçin; bu, gereksiz verileri ve üstveriyi kaldırırken görselin orijinaline neredeyse aynı görünmesini sağlar. Sonucu incelemek için etkileşimli önceki-sonraki karşılaştırmasını kullanın; orijinal biçimi koruyun ya da kalite ile boyut arasında en iyi denge için WebP\'yi seçin.',
      },
      {
        id: 'faq-4',
        question: 'JPEG\'yi 100 KB\'ye nasıl sıkıştırırım?',
        answer:
          'JPEG dosyasının boyutunu küçültmek için JPEG\'nizi yükleyin, çıkış biçimi olarak JPEG\'yi seçin ve canlı sıkıştırılmış boyutu izlerken kalite kaydırıcısını adım adım aşağı indirin. Tam KB boyutu yazabileceğiniz bir kutu olmadığı için, dosya 100 KB\'ye yaklaştığında durmak üzere önceki-sonraki boyut görünümünü kullanın.',
      },
      {
        id: 'faq-5',
        question: 'Görsel boyutunu 20 KB, 50 KB veya 200 KB\'ye nasıl düşürürüm?',
        answer:
          'Görselinizi yükleyin ve her değişiklikten sonra canlı önceki-sonraki boyutu denetleyerek kalite kaydırıcısını yavaş yavaş aşağı indirin; hedefinize — 200 KB, 50 KB veya 20 KB — ulaşana kadar devam edin. 20 KB gibi daha küçük hedefler genellikle daha düşük kalite ve WebP çıkışı gerektirir. Aynı yöntem 500 KB dahil her hedef için geçerlidir ve boyut, görsel boyutunu KB cinsinden ne kadar küçülttüğünüzü tam olarak görebilmeniz için her zaman KB olarak gösterilir.',
      },
      {
        id: 'faq-6',
        question: 'PNG\'yi çevrimiçi ücretsiz nasıl sıkıştırırım?',
        answer:
          'PNG\'nizi CompressMyPic\'e yükleyin ve bir hazır ayar seçin ya da kalite kaydırıcısını ayarlayın: PNG\'yi çevrimiçi sıkıştırmak burada ücretsizdir, kayıt gerekmez. Saydamlık PNG ve WebP çıkışında korunur ve bir PNG\'yi WebP\'ye dönüştürmek çoğu zaman onu çok daha küçük yapar.',
      },
      {
        id: 'faq-7',
        question: 'Hangi görsel biçimleri destekleniyor?',
        answer:
          'CompressMyPic; JPG (JPEG), PNG, WebP ve HEIC\'yi destekler; buna varsayılan olarak HEIC kaydeden iPhone ile çekilen fotoğraflar da dahildir. Orijinal biçimi koruyabilir ya da biçimler arasında dönüştürebilirsiniz; örneğin JPG dosyalarını JPEG olarak sıkıştırabilir, saydamlığı koruyarak PNG dosyalarını sıkıştırabilir ya da en küçük dosyalar için WebP\'ye dönüştürebilirsiniz.',
      },
      {
        id: 'faq-8',
        question: 'Birden fazla görseli aynı anda sıkıştırabilir miyim?',
        answer:
          'Evet. Bu toplu görsel sıkıştırıcı, aynı anda onlarca görsel yüklemenize, aynı ayarlarla birden fazla görseli aynı anda sıkıştırmanıza ve hepsini “Tümünü İndir (ZIP)” düğmesiyle birlikte ya da tek tek indirmenize olanak tanır.',
      },
      {
        id: 'faq-9',
        question: 'WhatsApp için görseli nasıl sıkıştırırım?',
        answer:
          'Fotoğrafınızı yükleyin, daha düşük kaliteli bir hazır ayar ya da WebP çıkışı seçin ve WhatsApp\'ta paylaşmadan önce daha küçük dosyayı indirin. Daha küçük fotoğraflar daha hızlı gönderilir, daha az mobil veri tüketir ve çok büyük oldukları için reddedilme olasılıkları daha düşüktür.',
      },
      {
        id: 'faq-10',
        question: 'Instagram veya Facebook için görseli nasıl sıkıştırırım?',
        answer:
          'Instagram veya Facebook için fotoğrafınızı sıkıştırmak üzere buraya yükleyin, Dengeli hazır ayarını seçin ve daha küçük JPG veya WebP dosyasını indirin. Küçültülmüş dosya daha hızlı yüklenir ve gönderiler, hikâyeler ve profil fotoğrafları için yeterli kaliteyi korur.',
      },
      {
        id: 'faq-11',
        question: 'E-posta eki için görsel sıkıştırabilir miyim?',
        answer:
          'Evet. E-posta eki için görsel sıkıştırmak üzere kalite kaydırıcısıyla dosyaları, e-posta sağlayıcınızın ek boyutu sınırına sığacak kadar küçültün ve mesajınıza ağır orijinaller yerine indirilen dosyaları ekleyin.',
      },
      {
        id: 'faq-12',
        question: 'CompressMyPic gerçekten ücretsiz mi?',
        answer:
          'Evet, CompressMyPic tamamen ücretsizdir. Ücret yok, ücretli plan yok, kredi yok ve sıkıştırabileceğiniz görsel sayısında sınır yok.',
      },
      {
        id: 'faq-13',
        question: 'CompressMyPic filigran ekler mi?',
        answer:
          'Hayır. CompressMyPic filigransız ücretsiz bir görsel sıkıştırıcıdır: sıkıştırılmış görselleriniz temiz kalır; logo, metin ya da eklenmiş işaret olmaz.',
      },
      {
        id: 'faq-14',
        question: 'CompressMyPic\'i kullanmak için kaydolmam gerekir mi?',
        answer:
          'Hayır. Bu, kayıtsız ücretsiz bir görsel sıkıştırıcıdır: hesap, e-posta ya da parola gerekmez. Siteyi açın ve sıkıştırmaya başlayın.',
      },
      {
        id: 'faq-15',
        question: 'Görsellerim bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Tüm sıkıştırma işlemi tamamen kendi cihazınızda, web tarayıcınızın içinde gerçekleşir; bu yüzden görselleriniz asla bir sunucuya yüklenmez, başkası tarafından saklanmaz ya da görülmez. Tarayıcınızın belleğinde kalır ve sekmeyi yenilediğinizde ya da kapattığınızda silinir.',
      },
      {
        id: 'faq-16',
        question: 'Dosya boyutu sınırı var mı?',
        answer:
          'Evet, sınır görsel başına 20 MB\'dir; bu, yüksek çözünürlüklü kamera fotoğraflarını ve büyük ekran görüntülerini kapsar. İşleme cihazınızda gerçekleştiği için sıkıştırma büyük dosyalarla bile hızlı kalır.',
      },
      {
        id: 'faq-17',
        question: 'Görseli sıkıştırmak boyutlarını değiştirir mi?',
        answer:
          'Hayır. CompressMyPic görselinizin boyutlarını değiştirmeden korur: yalnızca dosya boyutu küçülür. Fotoğrafınız orijinaliyle aynı genişlik, yükseklik ve oranı korur.',
      },
      {
        id: 'faq-18',
        question: 'Cep telefonunda görsel sıkıştırabilir miyim?',
        answer:
          'Evet. CompressMyPic iOS ve Android mobil tarayıcılarda çalışır; bu yüzden galerinizden bir fotoğraf seçerek ya da yeni bir fotoğraf çekip buraya yükleyerek telefonunuzda fotoğraf sıkıştırabilirsiniz.',
      },
      {
        id: 'faq-19',
        question: 'Kalite kaydırıcısı nasıl çalışır?',
        answer:
          'Kalite kaydırıcısı, sıkıştırma kalitesini %10 ile %100 arasında ayarlamanızı sağlar. Daha yüksek değerler daha fazla ayrıntı korur ve daha büyük dosyalar üretir; daha düşük değerler dosyaları çok daha küçük yapar. Düşük, Dengeli ve Yüksek hazır ayarları kaydırıcıyı sizin için ayarlar ve canlı önceki-sonraki boyut, her değişikliğin sonucunu gösterir.',
      },
      {
        id: 'faq-20',
        question: 'Çıkış biçimini nasıl seçerim?',
        answer:
          'Görsel yükledikten sonra orijinal biçimi korumak mı yoksa JPG, PNG ya da WebP\'ye dönüştürmek mi istediğinizi seçin. WebP, benzer kalitede JPEG\'den genellikle %25–35 daha küçük olduğu için web sayfaları için görsel optimize etmekte çoğu zaman en iyi seçenektir; PNG ise saydamlık gerektiğinde daha iyidir.',
      },
    ],
  },
  guidesSection: {
    heading: 'Rehberler',
    subheading:
      'Görünür kalite kaybı olmadan daha küçük dosyalar elde etmek için adım adım rehberler.',
    cards: [
      {
        title: 'WhatsApp için kalite kaybı olmadan görsel sıkıştırma',
        desc: 'Göndermeden önce fotoğrafların boyutunu küçültün; net kalsınlar ve hızlı gönderilsinler.',
        cta: 'Rehberi Oku →',
      },
      {
        title: 'JPG, PNG ve WebP: Hangi biçimi kullanmalısınız?',
        desc: 'Dosya boyutu, kalite ve saydamlık karşılaştırması; doğru biçimi seçin.',
        cta: 'Rehberi Oku →',
      },
      {
        title: 'Web ve e-posta için görsel boyutunu 100 KB\'ye düşürme',
        desc: 'Adım adım: görünür kalite kaybı olmadan 100 KB\'ye ulaşın.',
        cta: 'Rehberi Oku →',
      },
    ],
  },
  blog: {
    blog: 'Blog',
    homeHeading: 'Görsel rehberleri, eğitimler ve kaynaklar',
    homeSubheading:
      'Görsel sıkıştırma, boyutlandırma, dönüştürme ve düzenleme için pratik rehberler — gerçek görevler için yazıldı, arama motorları için değil.',
    searchPlaceholder: 'Rehberlerde ara…',
    searchNoResults: '“{query}” için rehber bulunamadı.',
    featuredHeading: 'Öne Çıkan Rehberler',
    latestHeading: 'Son Rehberler ({count})',
    categoriesHeading: 'Kategoriye Göre Keşfet',
    emptyHeading: 'Henüz rehber yok',
    emptyText:
      'Bu bölümün ilk rehberlerini yazıyoruz. Yakında tekrar gelin — ya da ücretsiz araçlarımızdan birini deneyin.',
    readArticle: 'Rehberi Oku →',
    minRead: '{minutes} dakikalık okuma',
    publishedOn: 'Yayınlanma: {date}',
    updatedOn: 'Güncelleme: {date}',
    bylineAuthor: 'CompressMyPic Yayın Ekibi',
    tableOfContents: 'Bu sayfada',
    faqHeading: 'Sık Sorulan Sorular',
    relatedArticlesHeading: 'İlgili Rehberler',
    relatedToolsHeading: 'Aracı Dene',
    tryToolCta: '{tool} aracını dene — ücretsiz, kayıtsız',
    prevArticle: '← Önceki rehber',
    nextArticle: 'Sonraki rehber →',
    backToBlog: '← Bloga Dön',
    shareHeading: 'Bu rehberi paylaş',
    copyLink: 'Bağlantıyı Kopyala',
    copied: 'Kopyalandı!',
    shareOnX: 'X\'te Paylaş',
    shareOnFacebook: 'Facebook\'ta Paylaş',
    shareOnWhatsApp: 'WhatsApp\'ta Paylaş',
    notAvailableHeading: 'Bu rehber dilinizde henüz mevcut değil',
    notAvailableText:
      'Bu rehberi hâlâ çeviriyoruz. İngilizce okuyabilir ya da dilinizde mevcut rehberlere göz atabilirsiniz.',
    viewBlogHome: 'Blogu Keşfet',
    guidesHeading: 'Adım adım rehberlerimiz',
    categoryGuidesHeading: 'Rehberler: {category}',
    relatedArticlesForTool: 'İlgili rehberler: {tool}',
  },
  shareSection: {
    heading: 'CompressMyPic\'i arkadaşlarınızla paylaşın',
    text: 'Bu araç işinize yaradı mı? Bir arkadaşınızın da görsellerini sıkıştırmasına yardımcı olun: yalnızca bir dokunuş yeterli.',
    shareText:
      'Görselleri çevrimiçi ücretsiz sıkıştırın — kayıtsız, filigransız. CompressMyPic\'i deneyin:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: '{name} ile Paylaş',
    copyLink: 'Bağlantıyı Kopyala',
    copied: 'Kopyalandı!',
    share: 'Paylaş',
    emailSubject: 'Ücretsiz Görsel Sıkıştırıcı – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Ücretsiz Görsel Sıkıştırıcı', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Ana Sayfa',
    privacyPill: 'Tarayıcıda %100 gizli işleme · Dosyalar cihazınızdan asla ayrılmaz',
    noUploads: 'Sunucuya yükleme yok',
    freeNote: 'Ücretsiz · Kayıtsız · Filigransız',
    howToTitle: '{name} nasıl kullanılır?',
    howToIntro:
      'Görevinizi doğrudan tarayıcınızda tamamlamak için bu kolay adımları izleyin.',
    featuresTitle: 'CompressMyPic\'in {name} aracını neden kullanmalısınız?',
    faqTitle: '{name} — Sık Sorulan Sorular',
    relatedTitle: 'İlgili ücretsiz görsel araçları',
    relatedLinksIntro: 'Şunlara da ihtiyacınız olabilir:',
    shareHeading: 'Bu aracı paylaşın',
    shareCopyLink: 'Bağlantıyı Kopyala',
    shareCopied: 'Kopyalandı!',
    shareOnX: 'X\'te Paylaş',
    shareOnFacebook: 'Facebook\'ta Paylaş',
    shareOnWhatsApp: 'WhatsApp\'ta Paylaş',
    commentsTitle: 'Yorumlar',
    commentsNote: 'Bu araç hakkındaki görüşünüzü paylaşın: yalnızca adınızı yazın ve yayınlayın. Hesap gerekmez.',
    commentsNamePlaceholder: 'Adınız',
    commentsTextPlaceholder: 'Yorumunuzu yazın…',
    commentsSubmit: 'Yorumu Yayınla',
    commentsPosting: 'Yayınlanıyor…',
    commentsEmpty: 'İlk yorumu siz yapın.',
    commentsPosted: 'Teşekkürler! Yorumunuz yayınlandı.',
    commentsLoadError: 'Yorumlar yüklenemedi. Tekrar deneyin.',
    commentsPostError: 'Yorumunuz yayınlanamadı. Tekrar deneyin.',
    commentsRetry: 'Tekrar Dene',
    commentsLoading: 'Yorumlar yükleniyor…',
  },
  uploadZone: {
    dropText: 'Görsellerinizi buraya sürükleyip bırakın',
    browseButton: 'dosyalara gözat',
    browsePrefix: 'veya',
    browseSuffix: 'bilgisayarınızdan ya da telefonunuzdan',
    orPaste: 'Yapıştırma (Ctrl+V) desteklenir',
    hint: 'Görsel başına en fazla {max} MB',
    errorTooBig: '"{name}", {max} MB olan üst sınırı aşıyor.',
    errorBadType: '"{name}" desteklenen bir biçimde değil ({formats}).',
    errorUnreadable: '"{name}" boş bir dosya (0 bayt).',
    errorMore: '(+{count} hata daha)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Görsel yükleme alanı. Sürükleyip bırakın ya da dosyalara gözatmak için tıklayın.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'Bozuk veya okunamayan dosya.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'Görsel kalite karşılaştırması',
    beforeLabel: 'Orijinal (önce)',
    afterLabel: 'Sıkıştırılmış (sonra)',
    closeLabel: 'Karşılaştırma görünümünü kapat',
    instruction: 'Her pikseli incelemek için kaydırıcıyı sola veya sağa sürükleyin.',
    sliderLabel: 'Kaydırıcı',
    sideBySideLabel: 'Yan Yana',
    zoomInLabel: 'Yakınlaştır',
    zoomOutLabel: 'Uzaklaştır',
    originalLabel: 'Orijinal:',
    outputLabel: 'Sonuç:',
    reductionLabel: 'Küçülme:',
    sizeChangeLabel: 'Boyut Değişimi:',
    qualityLabel: 'Kalite Ayarı:',
    formatLabel: 'Biçim:',
    modalAriaLabel: 'Görsel karşılaştırma penceresi', // 'Image comparison modal'
    altCompressed: '{name} adlı görselin sıkıştırılmış sürümü', // 'Compressed version of {name}'
    altOriginal: '{name} adlı görselin orijinal sürümü', // 'Original version of {name}'
    altProcessed: '{name} adlı görselin işlenmiş sürümü', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Ücretsiz Görsel Sıkıştırıcı – Fotoğrafları Çevrimiçi Sıkıştırın',
    seoDescription: 'Görselleri çevrimiçi ücretsiz sıkıştırın; kalite kaybı olmadan JPG, PNG ve WebP boyutunu küçültün. Kayıtsız ve filigransız: fotoğraflarınız tarayıcıdan asla ayrılmaz.',
    h1: 'Ücretsiz Görsel Sıkıştırıcı – Görselleri Çevrimiçi Sıkıştırın',
    subtitle: 'JPG, PNG, WebP ve HEIC dosyalarının boyutunu doğrudan tarayıcınızda küçültün.',
  },
  categories: {
    compress: 'Sıkıştır',
    resize: 'Boyutlandır',
    convert: 'Dönüştür',
    'crop-edit': 'Kırp ve Düzenle',
    create: 'Oluştur',
    privacy: 'Gizlilik Araçları',
    developer: 'Geliştirici Araçları',
  },
  compressionControls: {
    modeLabel: 'Sıkıştırma Modu', // 'Compression Mode'
    presetLow: 'Düşük Sıkıştırma (%85)', // 'Low Compression (85%)'
    presetBalanced: 'Dengeli (%70)', // 'Balanced (70%)'
    presetHigh: 'Yüksek Sıkıştırma (%50)', // 'High Compression (50%)'
    presetCustom: 'Özel', // 'Custom'
    formatLabel: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original'
    qualityLabel: 'Hedef Kalite:', // 'Quality Target:'
    qualityHigh: 'Yüksek Doğruluk', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Web İçin İdeal Denge', // 'Optimal Web Balance' (60–79)
    qualityMax: 'En Fazla Alan Tasarrufu', // 'Max Space Savings' (< 60)
    qualityAriaLabel: '%10 ile %100 arasında kalite kaydırıcısı', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Tümünü Yeniden Sıkıştır', // 'Re-compress All'
    compressing: 'Sıkıştırılıyor…', // 'Compressing...'
    clearAll: 'Tümünü Temizle', // 'Clear All'
    clearAllTitle: 'Tüm görselleri temizle', // 'Clear all images'
    transparencyTitle: 'JPEG Dönüşümü Saydamlık Uyarısı', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'JPEG saydamlığı (alfa kanallarını) desteklemez. Saydam arka planlar düz bir arka planla değiştirilir (varsayılan beyaz). Saydam arka planları korumak istiyorsanız PNG veya WebP seçin.',
    pngTip:
      'PNG kayıpsız bir biçimdir ve kalite kaydırıcısını yok sayar; bu nedenle bir PNG\'yi yeniden kodlamak bazen orijinal boyuta eşit olabilir ya da onu aşabilir. Fotoğraf görünümlü PNG\'ler için WebP veya JPG seçmek genellikle %50–80 daha küçük dosyalar üretir.',
  },
  resultsList: {
    summary: 'Sıkıştırma Özeti', // 'Compression Summary'
    image: 'Görsel', // 'Image' (count === 1)
    images: 'Görseller', // 'Images' (count !== 1)
    totalOriginal: 'Orijinal Toplam:', // 'Total Original:'
    totalCompressed: 'Sıkıştırılmış Toplam:', // 'Total Compressed:'
    totalSaved: 'Toplam Tasarruf:', // 'Total Saved:'
    processing: 'İşleniyor…', // 'Processing...'
    grewBy: '({bytes} büyüdü)', // '(grew by {bytes})'
    reduction: 'Küçülme:', // 'Reduction:'
    sizeChange: 'Boyut Değişimi:', // 'Size Change:'
    downloadAll: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP oluşturuluyor ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'Karşılaştır', // 'Compare'
    compareTitle: 'Görsel kalite karşılaştırmasını incelemek için tıklayın', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'Öncesini ve sonrasını karşılaştırın', // 'Compare visual before/after'
    download: 'İndir', // 'Download'
    retry: 'Tekrar Dene', // 'Retry'
    removeTitle: 'Görseli Kaldır', // 'Remove image'
    removeAriaLabel: '{name} adlı görseli kaldır', // 'Remove {name}'
    keptOriginal: 'Orijinal korundu (yeniden kodlama daha büyük oldu)', // 'Kept original (re-encode was larger)'
    grewByStatus: '{bytes} büyüdü: yeniden kodlama orijinalden daha büyük', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Başarıyla sıkıştırıldı', // 'Compressed successfully'
    optimizing: 'Pikseller iyileştiriliyor…', // 'Optimizing pixels...'
    compressionError: 'Sıkıştırma hatası', // 'Compression error'
    original: 'Orijinal', // 'Original' (metric label)
    compressed: 'Sıkıştırılmış', // 'Compressed' (metric label)
    output: 'Çıkış', // 'Output' (metric label when original kept)
    spaceSaved: 'Kazanılan Alan', // 'Space Saved'
    formatLabel: 'Biçim:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alfa', // 'Alpha' badge
    largerTitle: 'Çıkış, orijinalden {bytes} daha büyük.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'Kayıpsız PNG yeniden kodlama kalite kaydırıcısını yok sayar; fotoğraf görünümlü PNG\'ler için WebP veya JPG genellikle çok daha küçüktür.',
    largerNote:
      'Bu görsel, seçilen kalite için zaten çok sıkıştırılmıştı.',
    keepOriginal: 'Orijinali Koru', // 'Keep original'
  },
} as const;

export const TOOL_UI_TR = {
  '/image-resizer': {
    comparisonTitlePrefix: 'Boyut karşılaştırması', // 'Resize Comparison'
    comparisonAfterLabel: 'Boyutlandırılmış (sonra)', // 'Resized (After)'
    presetInstagramPost: 'Instagram Gönderisi (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Instagram Hikâyesi (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'YouTube Küçük Resmi (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Facebook Kapak Fotoğrafı (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'X Başlığı (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'Görsel boyutlandırılamadı.', // 'Resize failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    resizeMode: 'Boyutlandırma Modu', // 'Resize Mode'
    modeByPixels: 'Pikselle (G × Y)', // 'By Pixels (W × H)'
    modeByPercentage: 'Yüzdeyle (%)', // 'By Percentage (%)'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'Genişlik (px)', // 'Width (px)'
    heightLabel: 'Yükseklik (px)', // 'Height (px)'
    placeholderAuto: 'Otomatik', // placeholder 'Auto'
    aspectRatioLocked: 'Oran kilitli', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'Kilitsiz (özel)', // 'Unlocked (Custom)'
    fitModeLabel: 'Sığdırma Modu:', // 'Fit Mode:'
    fitContain: 'Sığdır (kırpma yok)', // 'Contain (No Crop)'
    fitCover: 'Kapla (ortadan kırp)', // 'Cover (Center Crop)'
    fitStretchExact: 'Tam esnet', // 'Stretch Exact'
    quickPresets: 'Sosyal medya ve web için hızlı hazır ayarlar', // 'Quick Social & Web Presets'
    scalePercentage: 'Ölçek Yüzdesi:', // 'Scale Percentage:'
    outputQuality: 'Çıkış Kalitesi:', // 'Output Quality:'
    matteBg: 'Mat Arka Plan:', // 'Matte BG:'
    resizing: 'Boyutlandırılıyor…', // 'Resizing...'
    resizeAll: 'Tümünü Boyutlandır ({count})', // 'Resize All ({count})'
    clear: 'Temizle', // 'Clear'
    batchReady: 'Grup Hazır', // 'Batch Ready'
    batchReadySingular: '{count} boyutlandırılmış görsel indirilmeye hazır', // '{count} resized image ready to download'
    batchReadyPlural: '{count} boyutlandırılmış görsel indirilmeye hazır', // '{count} resized images ready to download'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'Boyutlandırıldı ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'Biçim dönüştürme karşılaştırması', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'Dönüştürülmüş (sonra)', // 'Converted (After)'
    errorConversionFailed: 'Görsel dönüştürülemedi.', // 'Conversion failed.'
    errorUnsupportedFile: 'Desteklenmeyen veya bozuk görsel dosyası.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'Şu biçime dönüştür', // 'Convert To Format'
    formatWebp: 'WebP (web için en hafifi)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (evrensel)', // 'JPG (Universal)'
    formatPng: 'PNG (kayıpsız ve saydam)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'Saydamlık Dolgu Rengi', // 'Transparency Fill Color'
    quality: 'Kalite', // 'Quality'
    qualityLosslessPng: 'Kayıpsız PNG', // 'Lossless PNG'
    converting: 'Dönüştürülüyor…', // 'Converting...'
    convertAll: 'Tümünü Dönüştür ({count})', // 'Convert All ({count})'
    clear: 'Temizle', // 'Clear'
    conversionComplete: 'Dönüştürme tamamlandı', // 'Conversion Complete'
    filesConverted: '{count} dosya {format} biçimine dönüştürüldü', // '{count} files converted to {format}'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    convertedStatus: '{ext} biçimine dönüştürüldü', // 'Converted to {ext}'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
  },
  '/image-cropper': {
    uploadTitle: 'Etkileşimli kırpmak için bir görsel bırakın', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorCanvasContext: 'Tuval bağlamı başlatılamadı.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'Kırpma dışa aktarılamadı.', // 'Crop export failed.'
    aspectFree: 'Serbest', // aspect preset 'Free'
    selection: 'Seçim:', // 'Selection:'
    zoomOut: 'Uzaklaştır', // aria-label 'Zoom out'
    zoomIn: 'Yakınlaştır', // aria-label 'Zoom in'
    removeImage: 'Görseli Kaldır', // aria-label 'Remove image'
    cropSourceAlt: 'Kırpılacak kaynak görsel', // alt 'Crop source'
    originalLabel: 'Orijinal:', // 'Original:'
    cropOptions: 'Kırpma Seçenekleri', // 'Crop Options'
    selectFull: 'Tümünü Seç', // 'Select Full'
    aspectRatioPreset: 'Hazır Oran', // 'Aspect Ratio Preset'
    cropWidth: 'Kırpma Genişliği', // 'Crop Width'
    cropHeight: 'Kırpma Yüksekliği', // 'Crop Height'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    cropping: 'Kırpılıyor…', // 'Cropping...'
    cropAndDownload: 'Kırp ve İndir', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'Metin veya logo filigranı eklemek için bir görsel bırakın', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'Logo görseli yüklenemedi.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'Filigranlı görsel dışa aktarılamadı.', // 'Watermark export failed.'
    fallbackWatermarkText: 'Filigran', // canvas fallback text 'Watermark'
    tiledPreview: 'Döşemeli Önizleme', // 'Tiled Preview'
    dragToPosition: 'Konumlandırmak için görselin üzerinde sürükleyin', // 'Drag on Image to Position'
    changeImage: 'Görseli Değiştir', // 'Change Image'
    watermarkType: 'Filigran Türü', // 'Watermark Type'
    modeText: 'Metin Filigranı', // 'Text Watermark'
    modeLogo: 'Logo Görseli', // 'Logo Image'
    watermarkTextLabel: 'Filigran Metni', // 'Watermark Text'
    placeholderBrand: '© Markanız', // placeholder '© Your Brand'
    textColor: 'Metin Rengi', // 'Text Color'
    size: 'Boyut', // 'Size'
    uploadLogo: 'Logo Yükle (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'Logo Görselini Değiştir', // 'Change Logo Image'
    logoWidth: 'Logo Genişliği', // 'Logo Width'
    opacity: 'Opaklık', // 'Opacity'
    rotation: 'Döndürme', // 'Rotation'
    tiledRepeatPattern: 'Döşemeli Tekrar Deseni', // 'Tiled Repeat Pattern'
    tileSpacing: 'Döşeme Aralığı', // 'Tile Spacing'
    anchorPresets: 'Hazır Konumlar (veya görselin üzerinde sürükleyin)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'Orij', // 'Orig' — same abbreviation in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadWatermarked: 'Filigranlı Görseli İndir', // 'Download Watermarked Image'
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'Hızlı Döndür ve Çevir', // 'Quick Rotate & Flip'
    rotate90Left: '90° Sola Döndür', // 'Rotate 90° Left'
    rotate90Right: '90° Sağa Döndür', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'Yatay Çevir', // 'Flip Horizontal'
    flipVertical: 'Dikey Çevir', // 'Flip Vertical'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'Döndürme Açısı:', // 'Rotation Angle:'
    resetTo0: '0°\'ye Sıfırla', // 'Reset to 0°'
    applyAngle: 'Açıyı Uygula', // 'Apply Angle'
    clear: 'Temizle', // 'Clear'
    batchReady: 'Grup Hazır', // 'Batch Ready'
    transformedImagesReady: '{count} dönüştürülmüş görsel hazır', // '{count} transformed images ready'
    creatingZip: 'ZIP oluşturuluyor...', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: '{angle}° Döndürüldü', // 'Rotated {angle}°'
    flippedH: ' · Yatay Çevrildi', // ' · Flipped H'
    flippedV: ' · Dikey Çevrildi', // ' · Flipped V'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeItem: '{name} adlı öğeyi kaldır', // 'Remove {name}' (aria-label)
    transformFailed: 'Görsel dönüştürülemedi.', // 'Transform failed.'
    corruptedImage: 'Bozuk veya okunamayan görsel.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'Döndürme ve çevirme karşılaştırması', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'Düzenlenmiş (sonra)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'PDF\'de birleştirmek için görseller bırakın', // 'Drop images to combine into PDF'
    couldNotRead: '"{filename}" okunamadı. Geçerli bir görsel olduğundan emin olun.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'PDF oluşturulamadı.', // 'PDF generation failed.'
    encodingPage: 'Sayfa kodlanıyor: {current}/{total}...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'PDF oluşturuluyor...', // 'Generating PDF...'
    pageSize: 'Sayfa Boyutu', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'ABD Mektup (8,5 × 11 inç)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'Görsel boyutuna sığdır', // 'Fit to Image Size'
    orientation: 'Yön', // 'Orientation'
    orientationAuto: 'Otomatik (fotoğrafa uygun)', // 'Auto (Match Photo)'
    orientationPortrait: 'Dikey', // 'Portrait'
    orientationLandscape: 'Yatay', // 'Landscape'
    margin: 'Kenar Boşluğu', // 'Margin'
    marginNone: 'Kenar boşluğu yok (tam taşma)', // 'No Margin (Full Bleed)'
    marginSmall: 'Küçük kenar boşluğu', // 'Small Margin'
    marginMedium: 'Orta kenar boşluğu', // 'Medium Margin'
    imagePlacement: 'Görsel Yerleşimi', // 'Image Placement'
    placementContain: 'Sığdır (tüm görsel)', // 'Contain (Full Image)'
    placementCover: 'Kapla (sayfayı doldur)', // 'Cover (Fill Page)'
    pdfFilename: 'PDF Dosya Adı', // 'PDF Filename'
    pdfImageQuality: 'PDF Görsel Kalitesi:', // 'PDF Image Quality:'
    createDownloadPdf: 'PDF Oluştur ve İndir ({count} sayfa)', // 'Create & Download PDF ({count}p)'
    clear: 'Temizle', // 'Clear'
    pdfReady: 'PDF hazır ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'sayfa', // 'page'
    pagePlural: 'sayfa', // 'pages'
    downloadPdfAgain: 'PDF\'yi Yeniden İndir', // 'Download PDF Again'
    pageOrder: 'Sayfa Sırası ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'Sayfa', // 'Page' (in Page Order heading)
    pageOrderPlural: 'Sayfalar', // 'Pages' (in Page Order heading)
    movePageUp: 'Sayfayı Yukarı Taşı', // 'Move page up' (title)
    movePageDown: 'Sayfayı Aşağı Taşı', // 'Move page down' (title)
    removePage: 'Sayfayı Kaldır', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'EXIF ve üstveriyi incelemek için bir görsel bırakın', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'Görsel üstverisi ayrıştırılamadı.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'Gömülü üstveri bulundu ({count} etiket türü)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'Gizli EXIF, GPS veya kamera etiketi algılanmadı', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'Üstveriyi Kaldır', // 'Strip Metadata'
    copyJson: 'JSON\'yi Kopyala', // 'Copy JSON'
    copiedJson: 'JSON kopyalandı', // 'Copied JSON'
    exportJson: 'JSON\'yi Dışa Aktar', // 'Export JSON'
    clear: 'Temizle', // 'Clear' (title)
    gpsDetected: 'GPS konum koordinatları algılandı', // 'GPS Location Coordinates Detected'
    latitude: 'Enlem:', // 'Latitude:'
    longitude: 'Boylam:', // 'Longitude:'
    gpsWarning:
      'Bu görseli olduğu gibi paylaşmak, fotoğrafın nerede çekildiğini açığa çıkarabilir. Çevrimiçi paylaşmadan önce Üstveriyi Kaldır aracını kullanın.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: 'Çıkarılan Üstveri ({count} özellik)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'Gizlilik Etiketi', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'EXIF, GPS ve üstveriyi kaldırmak için fotoğraflar bırakın', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'Üstveri kaldırılamadı.', // 'Failed to strip metadata.'
    strippingMethod: 'Kaldırma Yöntemi', // 'Stripping Method'
    losslessStrip: 'Kayıpsız İkili Temizleme (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'Tam Tuval Yeniden Kodlama', // 'Full Canvas Re-encode'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'Yeniden kodlama kalitesi (WebP/HEIC veya tam yeniden kodlama için):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'Temizleniyor...', // 'Cleaning...'
    recleanAll: 'Tümünü Yeniden Temizle', // 'Re-clean All'
    clear: 'Temizle', // 'Clear'
    privacyVerified: 'Gizlilik doğrulandı', // 'Privacy Verified'
    cleanImagesReady: '{count} temiz görsel hazır, üstverisi kaldırıldı', // '{count} clean images ready with metadata stripped'
    creatingZip: 'ZIP oluşturuluyor...', // 'Creating ZIP...'
    downloadAllCleanZip: 'Temiz Olanların Tümünü İndir (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: '{before} üstveri etiketi kaldırıldı → {after} kaldı', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'Temiz doğrulandı (0 EXIF/GPS etiketi)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Kayıpsız ikili temizleme', // 'Lossless binary strip'
    cleanCanvasExport: 'Temiz tuval dışa aktarımı', // 'Clean Canvas export'
    scrubbing: 'EXIF ve GPS başlıkları temizleniyor...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'Temiz Hâli İndir', // 'Download Clean'
    removeItem: '{name} adlı öğeyi kaldır', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'Logonuzu veya simgenizi buraya bırakın', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'Kare PNG veya SVG önerilir · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'dosyaya gözat', // 'browse file'
    errorGenerateFailed: 'Favicon paketi oluşturulamadı.', // 'Failed to generate favicon package.'
    backgroundFill: 'Arka Plan Dolgusu', // 'Background Fill'
    transparent: 'Saydam', // 'Transparent'
    padding: 'Dolgu', // 'Padding'
    cornerRadius: 'Köşe Yarıçapı', // 'Corner Radius'
    tabPreviewAlt: 'Sekme önizlemesi', // alt 'Tab preview'
    myWebsite: 'Web Sitem', // 'My Website'
    darkTabPreviewAlt: 'Koyu sekme önizlemesi', // alt 'Dark tab preview'
    darkModeTab: 'Koyu Mod Sekmesi', // 'Dark Mode Tab'
    packingZip: 'ZIP paketleniyor…', // 'Packing ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    clear: 'Temizle', // title 'Clear'
    downloadFaviconIco: 'favicon.ico İndir', // title 'Download favicon.ico'
    downloadFile: '{filename} İndir', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML <head> Parçacığı', // 'HTML <head> Snippet'
    copied: 'Kopyalandı!', // 'Copied!'
    copyHtml: 'HTML\'yi Kopyala', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'Bir görsel bırakın veya ekran görüntüsü yapıştırın (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    clickAnywhereToPin: 'Renk sabitlemek için herhangi bir yere tıklayın', // 'Click anywhere to pin a color'
    newImage: 'Yeni Görsel', // 'New Image'
    pixelInspector: 'Piksel Denetleyici', // 'Pixel Inspector'
    copyLabel: '{label} kopyala', // title `Copy ${row.label}`
    pickedSwatches: 'Kaydedilen Renk Örnekleri ({count})', // 'Picked Swatches ({palette.length})'
    exportCss: 'CSS\'yi Dışa Aktar', // 'Export CSS'
    clickPixelsHint: 'Renkleri paletinize kaydetmek için görseldeki piksellere tıklayın.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'Seçmek ve {hex} kodunu kopyalamak için tıklayın', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'Tam boyutları ve oranları incelemek için görseller bırakın', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'En Az Genişlik (px)', // 'Min Width Check (px)'
    minHeightCheck: 'En Az Yükseklik (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'ör. 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'ör. 630', // placeholder 'e.g. 630'
    exportCsv: 'CSV\'yi Dışa Aktar', // 'Export CSV'
    exportJson: 'JSON\'yi Dışa Aktar', // 'Export JSON'
    clear: 'Temizle', // 'Clear'
    headerImage: 'Görsel', // table header 'Image'
    headerDimensions: 'Boyutlar', // table header 'Dimensions'
    headerAspectRatio: 'Oran', // table header 'Aspect Ratio'
    headerOrientation: 'Yön', // table header 'Orientation'
    headerSizeFormat: 'Boyut / Biçim', // table header 'Size / Format'
    headerPrint300Dpi: '300 DPI ile Baskı', // table header 'Print @300 DPI'
    headerSpecCheck: 'Özellik Denetimi', // table header 'Spec Check'
    orientationLandscape: 'Yatay', // 'Landscape'
    orientationPortrait: 'Dikey', // 'Portrait'
    orientationSquare: 'Kare', // 'Square'
    alphaTag: ' · Alfa', // ' · Alpha'
    specPass: 'Geçti', // 'Pass'
    specBelowMin: 'Minimumun Altında', // 'Below Min'
    csvYes: 'Evet', // CSV value 'Yes'
    csvNo: 'Hayır', // CSV value 'No'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'Alanları bulanıklaştırmak veya pikselleştirmek için bir görsel bırakın', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Dışa aktarılamadı.', // 'Export failed.'
    paintOverAreasBlur: 'Bulanıklaştırmak için alanları boyayın', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'Pikselleştirmek için alanları boyayın', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'Tüm Görsel Önizlemesi', // 'Whole-Image Preview'
    undo: 'Geri Al', // 'Undo'
    resetBrush: 'Fırçayı Sıfırla', // 'Reset Brush'
    removeImage: 'Görseli Kaldır', // aria-label 'Remove image'
    targetArea: 'Hedef Alan', // 'Target Area'
    brushArea: 'Fırça Alanı', // 'Brush Area'
    wholeImage: 'Tüm Görsel', // 'Whole Image'
    effectStyle: 'Efekt Stili', // 'Effect Style'
    pixelateMosaic: 'Piksel Mozaik', // 'Pixelate Mosaic'
    smoothBlur: 'Yumuşak Bulanıklık', // 'Smooth Blur'
    blurRadius: 'Bulanıklık Yarıçapı', // 'Blur Radius'
    mosaicBlockSize: 'Mozaik Blok Boyutu', // 'Mosaic Block Size'
    brushSize: 'Fırça Boyutu', // 'Brush Size'
    brushHint: 'Yüzleri, metni veya plakaları gizlemek için doğrudan fotoğrafın üzerine tıklayıp sürükleyin.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'Orij', // 'Orig' — same abbreviation in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadImage: 'Görseli İndir', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'Özel metin katmanları eklemek için bir görsel bırakın', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Dışa aktarılamadı.', // 'Export failed.'
    dragAnyText: 'Herhangi bir metni doğrudan görselin üzerinde sürükleyin', // 'Drag Any Text Directly on Image'
    changeImage: 'Görseli Değiştir', // 'Change Image'
    textLayer: 'Metin {index}', // tab `Text ${idx + 1}`
    add: 'Ekle', // 'Add'
    deleteActiveTextLayer: 'Etkin metin katmanını sil', // aria-label 'Delete active text layer'
    textContent: 'Metin içeriği (çok satır desteklenir)', // 'Text Content (multi-line supported)'
    font: 'Yazı Tipi', // 'Font'
    fontInter: 'Inter / Temiz Sans', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / Meme Görünümü', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / Klasik Serif', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / Eş Aralıklı', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / Yuvarlak Sans', // font option 'Trebuchet / Rounded Sans'
    fill: 'Dolgu', // 'Fill'
    toggleBold: 'Kalını aç/kapat', // aria-label 'Toggle Bold'
    toggleItalic: 'İtaliği aç/kapat', // aria-label 'Toggle Italic'
    size: 'Boyut', // 'Size'
    rotation: 'Döndürme', // 'Rotation'
    textOutline: 'Metin Ana Hattı', // 'Text Outline'
    dropShadow: 'Gölge', // 'Drop Shadow'
    defaultLayerText: 'Çift dokunun veya metni düzenleyin', // default layer text 'Double-tap or edit text'
    defaultCaption: 'Altyazı {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'Orij', // 'Orig' — same abbreviation in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadImageWithText: 'Metinli Görseli İndir', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'Özel kenarlık veya çerçeve eklemek için bir görsel bırakın', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Dışa aktarılamadı.', // 'Export failed.'
    framedPreview: 'Çerçeveli Önizleme', // 'Framed Preview'
    changeImage: 'Görseli Değiştir', // 'Change Image'
    quickFramePresets: 'Hızlı Çerçeve Hazır Ayarları', // 'Quick Frame Presets'
    presetClassicWhite: 'Klasik Beyaz', // preset 'Classic White'
    presetPolaroidFrame: 'Polaroid Çerçeve', // preset 'Polaroid Frame'
    presetDarkStudio: 'Koyu Stüdyo', // preset 'Dark Studio'
    presetGradientGlow: 'Degrade Işıma', // preset 'Gradient Glow'
    borderStyle: 'Kenarlık Stili', // 'Border Style'
    borderStyleSolid: 'Düz', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'Degrade', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'Kenarlık Rengi', // 'Border Color'
    startColor: 'Başlangıç Rengi', // 'Start Color'
    endColor: 'Bitiş Rengi', // 'End Color'
    gradientAngle: 'Degrade Açısı', // 'Gradient Angle'
    borderSize: 'Kenarlık Boyutu', // 'Border Size'
    frameRadius: 'Çerçeve Yarıçapı', // 'Frame Radius'
    photoRadius: 'Fotoğraf Yarıçapı', // 'Photo Radius'
    dropShadow: 'Gölge', // 'Drop Shadow'
    shadowNone: 'yok', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'yumuşak', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'orta', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'derin', // shadow level 'deep' (rendered capitalized)
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadFramedImage: 'Çerçeveli Görseli İndir', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'Köşelerini yuvarlamak için bir görsel bırakın', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Yuvarlatılmış görsel dışa aktarılamadı.', // 'Failed to export rounded image.'
    liveCornerPreview: 'Canlı Köşe Önizlemesi', // 'Live Corner Preview'
    changeImage: 'Görseli Değiştir', // 'Change Image'
    cornerSettings: 'Köşe Ayarları', // 'Corner Settings'
    fullCirclePill: 'Tam Daire / Hap', // 'Full Circle / Pill'
    individualPerCorner: 'Köşe Başına Ayrı Denetim', // 'Individual Per-Corner Control'
    allCornersRadius: 'Tüm Köşelerin Yarıçapı', // 'All Corners Radius'
    cornerTopLeft: 'Sol Üst', // per-corner label 'Top Left'
    cornerTopRight: 'Sağ Üst', // per-corner label 'Top Right'
    cornerBottomLeft: 'Sol Alt', // per-corner label 'Bottom Left'
    cornerBottomRight: 'Sağ Alt', // per-corner label 'Bottom Right'
    outerCornerFill: 'Dış Köşe Dolgusu', // 'Outer Corner Fill'
    transparentPngWebp: 'Saydam (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'Düz Renk', // 'Solid Color'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadRoundedImage: 'Yuvarlatılmış Görseli İndir', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'Parlaklığı ayarlamak için bir görsel bırakın', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Düzenlenmiş görsel dışa aktarılamadı.', // 'Failed to export adjusted image.'
    viewAfter: 'Sonra', // view tab 'after' (rendered capitalized)
    viewBefore: 'Önce', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'Bölünmüş Karşılaştırma', // view tab 'Split Compare'
    fullscreenCompare: 'Tam Ekran Karşılaştırma', // 'Fullscreen Compare'
    removeImage: 'Görseli Kaldır', // title/aria-label 'Remove image'
    beforeLabel: 'Önce', // split slider label 'Before'
    afterLabel: 'Sonra', // split slider label 'After'
    originalPreviewAlt: 'Orijinal önizleme', // alt 'Original preview'
    originalComparisonAlt: 'Orijinal karşılaştırma', // alt 'Original comparison'
    brightnessControls: 'Parlaklık Denetimleri', // 'Brightness Controls'
    reset: 'Sıfırla', // 'Reset'
    brightnessLevel: 'Parlaklık Düzeyi', // 'Brightness Level'
    minLabel: '-%100 Daha Koyu', // min label '-100% Darker'
    maxLabel: '+%100 Daha Açık', // max label '+100% Brighter'
    quickPresets: 'Hızlı Hazır Ayarlar', // 'Quick Presets'
    presetDark: 'Koyu (-%30)', // preset 'Dark (-30%)'
    presetDim: 'Loş (-%15)', // preset 'Dim (-15%)'
    presetOriginal: 'Orijinal (%0)', // preset 'Original (0%)'
    presetBright: 'Parlak (+%15)', // preset 'Bright (+15%)'
    presetVibrant: 'Canlı (+%30)', // preset 'Vibrant (+30%)'
    presetHighKey: 'Yüksek Anahtar (+%50)', // preset 'High Key (+50%)'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadEditedImage: 'Düzenlenmiş Görseli İndir', // 'Download Edited Image'
    comparisonTitlePrefix: 'Parlaklık karşılaştırması', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'Düzenlenmiş (sonra)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Kontrastı ayarlamak için bir görsel bırakın', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'Kontrast karşılaştırması', // 'Contrast Comparison'
    comparisonAfterLabel: 'Düzenlenmiş (sonra)', // 'Edited (After)'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Düzenlenmiş görsel dışa aktarılamadı.', // 'Failed to export adjusted image.'
    tabAfter: 'Sonra', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Önce', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Bölünmüş Karşılaştırma', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Tam ekranda karşılaştır', // 'Fullscreen Compare'
    removeImage: 'Görseli Kaldır', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Orijinal önizleme', // alt 'Original preview'
    originalComparisonAlt: 'Orijinal karşılaştırma', // alt 'Original comparison'
    splitBeforeLabel: 'Önce', // split slider left label 'Before'
    splitAfterLabel: 'Sonra', // split slider right label 'After'
    controlsHeading: 'Kontrast Denetimleri', // '{label} Controls' (contrast mode)
    reset: 'Sıfırla', // 'Reset'
    levelLabel: 'Kontrast Düzeyi', // '{label} Level' (contrast mode)
    minLabel: '-%100 Düz', // minLabel '-100% Flat'
    maxLabel: '+%100 Yüksek Kontrast', // maxLabel '+100% High Contrast'
    quickPresets: 'Hızlı Hazır Ayarlar', // 'Quick Presets'
    presetSoft: 'Yumuşak (-%25)', // 'Soft (-25%)'
    presetMuted: 'Soluk (-%10)', // 'Muted (-10%)'
    presetOriginal: 'Orijinal (%0)', // 'Original (0%)'
    presetCrisp: 'Keskin (+%20)', // 'Crisp (+20%)'
    presetPunchy: 'Çarpıcı (+%40)', // 'Punchy (+40%)'
    presetDramatic: 'Dramatik (+%70)', // 'Dramatic (+70%)'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadEditedImage: 'Düzenlenmiş Görseli İndir', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Doygunluğu ayarlamak için bir görsel bırakın', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'Doygunluk karşılaştırması', // 'Saturation Comparison'
    comparisonAfterLabel: 'Düzenlenmiş (sonra)', // 'Edited (After)'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Düzenlenmiş görsel dışa aktarılamadı.', // 'Failed to export adjusted image.'
    tabAfter: 'Sonra', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Önce', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Bölünmüş Karşılaştırma', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Tam ekranda karşılaştır', // 'Fullscreen Compare'
    removeImage: 'Görseli Kaldır', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Orijinal önizleme', // alt 'Original preview'
    originalComparisonAlt: 'Orijinal karşılaştırma', // alt 'Original comparison'
    splitBeforeLabel: 'Önce', // split slider left label 'Before'
    splitAfterLabel: 'Sonra', // split slider right label 'After'
    controlsHeading: 'Doygunluk Denetimleri', // '{label} Controls' (saturation mode)
    reset: 'Sıfırla', // 'Reset'
    levelLabel: 'Doygunluk Düzeyi', // '{label} Level' (saturation mode)
    minLabel: '-%100 Gri Tonlama', // minLabel '-100% Grayscale'
    maxLabel: '+%100 Canlı', // maxLabel '+100% Vivid'
    quickPresets: 'Hızlı Hazır Ayarlar', // 'Quick Presets'
    presetGrayscale: 'Gri Tonlama (-%100)', // 'Grayscale (-100%)'
    presetMuted: 'Soluk (-%40)', // 'Muted (-40%)'
    presetOriginal: 'Orijinal (%0)', // 'Original (0%)'
    presetRich: 'Zengin (+%30)', // 'Rich (+30%)'
    presetVivid: 'Canlı (+%60)', // 'Vivid (+60%)'
    presetHyper: 'Aşırı (+%90)', // 'Hyper (+90%)'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadEditedImage: 'Düzenlenmiş Görseli İndir', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Filtre uygulamak için bir görsel bırakın', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'Filtre karşılaştırması', // 'Filter Comparison'
    comparisonAfterLabel: 'Filtreli', // 'Filtered'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Dışa aktarılamadı.', // 'Export failed.'
    filterPreview: 'Filtre Önizlemesi', // 'Filter Preview'
    holdToViewOriginal: 'Orijinali görmek için basılı tutun', // 'Hold to View Original'
    compare: 'Karşılaştır', // 'Compare'
    removeImage: 'Görseli Kaldır', // aria-label 'Remove image'
    originalBadge: 'Orijinal', // 'Original' badge — same in Turkish
    filterPresets: 'Filtre Hazır Ayarları', // 'Filter Presets'
    reset: 'Sıfırla', // 'Reset'
    presetOriginal: 'Orijinal', // preset 'Original' — same in Turkish
    presetGrayscale: 'Gri Tonlama', // preset 'Grayscale'
    presetSepia: 'Sepya', // preset 'Sepia' — same in Turkish
    presetVintage: 'Vintage', // preset 'Vintage' — same in Turkish
    presetWarm: 'Sıcak', // preset 'Warm'
    presetCool: 'Soğuk', // preset 'Cool'
    presetHighContrast: 'Yüksek Kontrast', // preset 'High Contrast'
    presetMatteFade: 'Mat Solma', // preset 'Matte Fade'
    presetDramatic: 'Dramatik', // preset 'Dramatic'
    presetNoir: 'S/B Noir', // preset 'B&W Noir'
    presetGoldenHour: 'Altın Saat', // preset 'Golden Hour'
    presetInvert: 'Ters Çevir', // preset 'Invert'
    filterIntensity: 'Filtre Yoğunluğu', // 'Filter Intensity'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Kalite', // 'Quality'
    rendering: 'İşleniyor…', // 'Rendering...'
    downloadFilteredImage: 'Filtreli Görseli İndir', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'Arka plan eklemek için bir görsel veya saydam PNG bırakın', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorExportFailed: 'Dışa aktarılamadı.', // 'Export failed.'
    backgroundPreview: 'Arka Plan Önizlemesi', // 'Background Preview'
    changeImage: 'Görseli Değiştir', // 'Change Image'
    outputDimensionsPrefix: 'Çıkış:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Arka Plan Türü', // 'Background Type'
    modeSolidColor: 'Düz Renk', // 'Solid Color'
    modeGradient: 'Degrade', // 'Gradient'
    modeBlurredPhoto: 'Bulanık Fotoğraf', // 'Blurred Photo'
    selectColor: '{color} rengini seç', // aria-label `Select color ${c}`
    color1: 'Renk 1', // 'Color 1' — same in Turkish
    color2: 'Renk 2', // 'Color 2' — same in Turkish
    angle: 'Açı', // 'Angle'
    backdropBlurRadius: 'Arka Plan Bulanıklık Yarıçapı', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Tuval Oranı', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Orij', // 'Orig' — same abbreviation in Turkish
    imageScale: 'Görsel Ölçeği', // 'Image Scale'
    roundness: 'Yuvarlaklık', // 'Roundness'
    dropShadowBehindImage: 'Görselin Arkasındaki Gölge', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Dışa aktarılıyor…', // 'Exporting...'
    downloadImage: 'Görseli İndir', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Izgara döşemelerine veya şeritlere bölmek için bir görsel bırakın', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorSplitFailed: 'Görsel bölünemedi.', // 'Failed to split image.'
    errorCanvasContext: 'Tuval bağlamı başlatılamadı.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Kesim Çizgisi Önizlemesi ({rows} × {cols} = {tiles} parça)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'Görseli Değiştir', // 'Change Image'
    splitGuideAlt: 'Bölme kılavuzu', // alt 'Split guide'
    splitLayout: 'Bölme Düzeni', // 'Split Layout'
    modeGrid: 'Izgara (S×S)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Yatay Şeritler', // 'Horiz. Strips'
    modeVerticalStrips: 'Dikey Şeritler', // 'Vert. Strips'
    rowsLabel: 'Satırlar (yatay kesimler)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Sütunlar (dikey kesimler)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Dönen', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Şeritler', // preset '4×1 Strips'
    formatOriginal: 'Orij', // 'Orig' — same abbreviation in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Döşeme Kalitesi', // 'Tile Quality'
    splittingImage: 'Görsel bölünüyor…', // 'Splitting Image...'
    splitIntoTiles: '{count} parçaya böl', // `Split into ${n} Tiles`
    splitComplete: 'Bölme tamamlandı', // 'Split Complete'
    tilesGenerated: 'Tam çözünürlükte {count} görsel döşemesi oluşturuldu', // '{n} image tiles generated at full resolution'
    packagingZip: 'ZIP paketleniyor…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Tüm Döşemeleri İndir (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'İndir', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'DPI üstverisini güncellemek için JPG veya PNG görseller bırakın', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'DPI güncellenemedi.', // 'Failed to update DPI.'
    targetDpiPresets: 'Hedef DPI Hazır Ayarları', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Ekran)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (Taslak Baskı)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (Yüksek Kaliteli Baskı)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Arşiv)', // '600 DPI (Archival)'
    customDpi: 'Özel DPI', // 'Custom DPI'
    applyDpi: '{dpi} DPI Uygula', // 'Apply {dpi} DPI'
    clear: 'Temizle', // 'Clear'
    batchReady: 'Grup Hazır', // 'Batch Ready'
    filesUpdatedToDpi: '{count} dosya {dpi} DPI olarak güncellendi', // '{n} files updated to {dpi} DPI'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Önce: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Önce: Ayarlanmadı', // 'Before: Not set'
    verifiedDpi: 'Doğrulandı: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Kayıpsız JPEG Başlık Güncellemesi', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Kayıpsız PNG pHYs Güncellemesi', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'pHYs DPI ile PNG\'ye dönüştürüldü', // 'Converted to PNG with pHYs DPI'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Base64 olarak kodlamak için bir görsel bırakın', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'Dosya kodlanamadı.', // 'Could not encode file.'
    errorFailedToRead: 'Görsel dosyası okunamadı.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'Panoya yazılamadı: lütfen metin kutusundan seçip kopyalayın.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'Dosya:', // 'File:' (summary card)
    outputLabel: 'Çıkış:', // 'Output:' (summary card)
    charsLabel: 'karakter', // 'chars' (summary card)
    encodeAnother: 'Başka Birini Kodla', // 'Encode Another'
    tabDataUrl: 'Veri URL\'si', // tab 'Data URL'
    tabRawBase64: 'Ham Base64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'Kopyalandı!', // 'Copied!'
    copyOutput: 'Çıkışı Kopyala', // 'Copy Output'
    saveTxt: '.TXT Kaydet', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Base64 dizesi veya veri URL\'si yapıştırın', // 'Paste Base64 String or Data URL'
    clear: 'Temizle', // 'Clear'
    inputPlaceholder: 'data:image/png;base64,iVBORw0KGgo... veya ham Base64 baytlarını buraya yapıştırın', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'PNG, JPG, WebP, GIF, SVG, BMP ve ICO Base64 yüklerini destekler', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Kodu çözülüyor…', // 'Decoding...'
    decodeImage: 'Görseli Çöz', // 'Decode Image'
    decodingBytes: 'Base64 baytları çözülüyor…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Desteklenmeyen veri URI kodlaması. Base64 yükü bekleniyordu (`;base64,`).', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'Girdi geçersiz Base64 karakterleri içeriyor.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'Çözülen baytlar tarayıcıda okunabilen geçerli bir görsel oluşturmuyor.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Base64 dizesi çözülemedi.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Çözülen Base64 önizlemesi', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Geçerli görsel çözüldü', // 'Valid Image Decoded'
    detectedFormat: 'Algılanan Biçim', // 'Detected Format'
    binarySize: 'İkili Boyut', // 'Binary Size'
    dimensions: 'Boyutlar', // 'Dimensions'
    downloadFormat: 'İndirme Biçimi', // 'Download Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Görsel Dosyasını İndir', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Baskın renk paletini çıkarmak için bir görsel bırakın', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'Görsel yüklenemedi.', // 'Unable to load image.'
    errorClipboardDenied: 'Pano izni reddedildi.', // 'Clipboard permission denied.'
    extractedPalette: 'Çıkarılan Palet ({count} renk)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Kaynak', // alt 'Source'
    changeImage: 'Değiştir', // 'Change'
    numberOfColors: 'Renk Sayısı', // 'Number of Colors'
    colorsCount: '{count} renk', // '{count} colors'
    copyCssVariables: 'CSS Değişkenlerini Kopyala', // 'Copy CSS Variables'
    copiedCss: 'CSS kopyalandı!', // 'Copied CSS!'
    copyJson: 'JSON\'yi Kopyala', // 'Copy JSON'
    copiedJson: 'JSON kopyalandı!', // 'Copied JSON!'
    downloadPalettePng: 'Palet PNG\'sini İndir', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Animasyonlu GIF oluşturmak için 2 veya daha fazla görsel bırakın', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'Animasyonlu GIF kodlanamadı.', // 'Failed to encode animated GIF.'
    skippedFile: '"{name}" atlandı: {error}', // 'Skipped "{file.name}": {err.message}'
    skippedFileNoError: '"{name}" atlandı.', // 'Skipped "{file.name}".'
    generatedGif: 'Oluşturulan GIF ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Canlı Zamanlama Önizlemesi · Kare {current}/{total}', // 'Live Timing Preview · Frame {n}/{total}'
    generatedGifAlt: 'Oluşturulan animasyonlu GIF', // alt 'Generated animated GIF'
    pause: 'Duraklat', // 'Pause'
    play: 'Oynat', // 'Play'
    backToFrameEditor: 'Kare Düzenleyiciye Dön', // 'Back to Frame Editor'
    clearAllFrames: 'Tüm kareleri temizle', // aria-label 'Clear all frames'
    largeGifWarning: 'Büyük GIF Uyarısı ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      '5–15 MB\'nin üzerindeki GIF\'ler mesajlaşma uygulamalarında yavaş yüklenebilir veya katı platform sınırlarını karşılamayabilir. Çıkış genişliğini/yüksekliğini küçültmeyi (ör. 480 px), kaliteyi düşürmeyi veya kareleri kaldırmayı deneyin.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Animasyonlu GIF\'i İndir ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Animasyon Ayarları', // 'Animation Settings'
    defaultFrameDuration: 'Varsayılan Kare Süresi', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'Tekrar Davranışı', // 'Loop Behavior'
    loopForever: 'Sürekli', // 'Forever'
    loopSetLoops: 'Tekrar Sayısını Belirle', // 'Set Loops'
    loopPlayOnce: 'Bir Kez Oynat', // 'Play Once'
    totalPlays: 'Toplam Oynatma', // 'Total Plays'
    outputDimensions: 'Çıkış Boyutları (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Oran kilitli', // 'Ratio Locked'
    ratioUnlocked: 'Kilitsiz', // 'Unlocked'
    widthLabel: 'Genişlik', // 'Width'
    heightLabel: 'Yükseklik', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Orijinal', // 'Original' — same in Turkish
    frameFit: 'Kare Sığdırma', // 'Frame Fit'
    fitContain: 'Sığdır', // 'contain'
    fitCover: 'Kapla', // 'cover'
    backgroundMatte: 'Mat Arka Plan', // 'Background Matte'
    colorPaletteQuality: 'Renk Paleti Kalitesi', // 'Color Palette Quality'
    encodingGif: 'GIF kodlanıyor ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Animasyonlu GIF Oluştur', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Animasyonlu GIF\'i Yeniden Kodla', // 'Re-Encode Animated GIF'
    framesHeading: 'Kareler ({count}) — Yeniden sıralamak için sürükleyin veya okları kullanın', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'Kare başına süreyi boş bırakırsanız {ms} ms olan genel kare süresi uygulanır.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Kare Ekle', // 'Add Frames'
    delayMsLabel: 'Süre (ms):', // 'Delay (ms):'
    moveEarlier: 'Öne Taşı', // title 'Move earlier'
    moveLater: 'Sonra Taşı', // title 'Move later'
    duplicateFrame: 'Kareyi Çoğalt', // title 'Duplicate frame'
    removeFrame: 'Kareyi Kaldır', // title 'Remove frame'
    moveFrameEarlierAria: '{n}. kareyi öne taşı', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: '{n}. kareyi sonra taşı', // aria-label `Move frame ${n} later`
    duplicateFrameAria: '{n}. kareyi çoğalt', // aria-label `Duplicate frame ${n}`
    removeFrameAria: '{n}. kareyi kaldır', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Fotoğraf kolajı oluşturmak için 2 ila 9 görsel bırakın', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'Kolaj dışa aktarılamadı.', // 'Failed to export collage.'
    couldNotLoadFile: '"{name}" yüklenemedi: {error}', // 'Could not load "{file.name}": {err.message}'
    couldNotLoadFileNoError: '"{name}" yüklenemedi.', // 'Could not load "{file.name}".'
    collagePreview: 'Kolaj Önizlemesi ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Tümünü Temizle', // 'Clear All'
    rearrangeCells: 'Hücreleri Yeniden Düzenle (sürükleyin veya iki hücreye dokunarak değiştirin)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'Fotoğrafları anında yeniden sıralamak için herhangi bir hücre kartını başka bir yuvanın üzerine sürükleyin.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Fotoğraf Ekle', // 'Add Photos'
    cellLabel: 'Hücre {n}', // 'Cell {n}'
    slotLabel: 'Yuva {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: '{n}. hücreyi geri taşı', // aria-label `Move cell ${n} back`
    moveCellForwardAria: '{n}. hücreyi ileri taşı', // aria-label `Move cell ${n} forward`
    clearCellAria: '{n}. hücreyi temizle', // aria-label `Clear cell ${n}`
    addPhoto: 'Fotoğraf Ekle', // 'Add Photo'
    collageLayout: 'Kolaj Düzeni', // 'Collage Layout'
    layout2x2: '2×2 Izgara', // '2×2 Grid'
    layout3x3: '3×3 Izgara', // '3×3 Grid'
    layoutVertical: 'Dikey Şerit', // 'Vertical Strip'
    layoutHorizontal: 'Yatay Şerit', // 'Horizontal Strip'
    cellProportionsSpacing: 'Hücre Oranları ve Aralığı', // 'Cell Proportions & Spacing'
    equalCells: 'Eşit Hücreler', // 'Equal Cells'
    colSplit: 'Sütun Bölme', // 'Col Split'
    centerCol: 'Orta Sütun', // 'Center Col'
    rowSplit: 'Satır Bölme', // 'Row Split'
    centerRow: 'Orta Satır', // 'Center Row'
    leadCellEmphasis: 'Öncü Hücre Vurgusu', // 'Lead Cell Emphasis'
    gapSpacing: 'Aralık', // 'Gap Spacing'
    cellRadius: 'Hücre Yarıçapı', // 'Cell Radius'
    backgroundColor: 'Arka Plan Rengi', // 'Background Color'
    backgroundSwatchAria: 'Arka plan {color}', // aria-label `Background ${c}`
    imageFit: 'Görsel Sığdırma', // 'Image Fit'
    fitCover: 'Kapla', // 'cover'
    fitContain: 'Sığdır', // 'contain'
    outputSize: 'Çıkış Boyutu (px)', // 'Output Size (px)'
    widthLabel: 'Genişlik', // 'Width'
    heightLabel: 'Yükseklik', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (kayıpsız)', // 'PNG (Lossless)'
    jpgQuality: 'JPG Kalitesi', // 'JPG Quality'
    exportingCollage: 'Kolaj dışa aktarılıyor…', // 'Exporting Collage...'
    downloadCollage: 'Kolajı İndir ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Görselleri {target} altında sıkıştırmak için bırakın', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Hedef boyuta sıkıştırılamadı.', // 'Target compression failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Hedef En Büyük Dosya Boyutu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} en fazla)', // '({bytes} max)'
    needDifferentTarget: 'Farklı bir KB hedefi mi gerekiyor?', // 'Need a different target KB?'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Yalnızca kaliteyi düşürmek {target} altına sığdırmaya yetmezse akıllı boyut küçültmeye izin ver', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Kayıpsız PNG {target} hedefine temiz biçimde ulaşamadığında büyük PNG\'leri otomatik olarak WebP/JPG\'ye dönüştür', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Saydam PNG için mat renk:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} boyutuna sıkıştır', // 'Compress to {target}'
    optimizing: 'İyileştiriliyor…', // 'Optimizing...'
    clear: 'Temizle', // 'Clear'
    losslessPngSelected: 'Kayıpsız PNG seçildi:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG kalite kaydırıcılarını yok sayar; bu nedenle boyutu küçültmek yalnızca piksel boyutlarını küçültmeye bağlıdır. Büyük fotoğraflar için keskinliği koruyarak katı KB sınırlarına ulaşmak üzere JPG veya WebP seçin.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Hedef sıkıştırma özeti · Hedef ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} içinden {achieved} tanesi {target} hedefine ulaştı', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'görsel', // 'image'
    imagePlural: 'görseller', // 'images'
    summaryMissed: ' · {missed} tanesi dürüstçe sığamadı (ayrıntılar aşağıda)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Toplam tasarruf: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Toplam tasarruf: {bytes} ({grew} büyüdü)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    metricOriginal: 'Orijinal', // 'Original' (metric label)
    metricOutput: 'Çıkış', // 'Output' (metric label)
    metricSpaceSaved: 'Kazanılan Alan', // 'Space Saved' (metric label)
    metricReduction: 'Küçülme', // 'Reduction' (metric label)
    metricSizeChange: 'Boyut Değişimi', // 'Size Change' (metric label)
    underTarget: '{target} altında ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Hedefe ulaşılamadı — {bytes}', // 'Target missed — {bytes}'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} büyüdü: yeniden kodlama orijinalden daha büyük', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'Fotoğraf görünümlü PNG\'ler için WebP veya JPG genellikle daha küçüktür.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Orijinali Koru', // 'Keep original'
    keptOriginalNote: 'Yeniden kodlama dosyayı büyüttüğü için orijinal dosya korundu.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Kayıpsız PNG, {target} altında daha yüksek çözünürlük korumak için otomatik olarak {format} biçimine dönüştürüldü.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (saydamlık korundu)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Orijinal dosya zaten {target} altındaydı ve yeniden kodlama onu {bytes} büyüttü. “Orijinali Koru” seçeneğini kullanın ya da daha küçük bir çıkış için WebP/JPG\'ye geçin.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Orijinal dosya zaten {target} altındaydı; %{quality} kaliteyle temiz biçimde dışa aktarıldı.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Hedefe tam {width}×{height} px çözünürlükte ulaşıldı ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Hedefe {width}×{height} px boyutuna (%{percent}) ölçeklenerek {qualityLabel} ile ulaşıldı.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'kayıpsız PNG', // 'lossless PNG'
    qualityPercent: '%{quality} kalite', // '{quality}% quality'
    statusCannotPng:
      'Kayıpsız PNG ile {target} hedefine ulaşılamıyor (ulaşılabilen en küçük boyut: {width}×{height} px boyutunda {bytes}). Daha küçük boyutlara ulaşmak için çıkış biçimini JPG veya WebP olarak değiştirin.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tam {width}×{height} px boyutlarıyla {target} hedefine ulaşılamıyor (en küçük kaliteli boyut {bytes}). Boyutları daha da küçültmek için “Akıllı boyut küçültmeye izin ver” seçeneğini etkinleştirin.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'İstenen {target} hedefine temiz biçimde ulaşılamadı. Dürüstçe kodlanmış en küçük çıkış {bytes} ({width}×{height} px, %{quality} kalite). Daha büyük bir hedef boyut deneyin.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Hedef sıkıştırma ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Sıkıştırılmış ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Görselleri {target} altında sıkıştırmak için bırakın', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Hedef boyuta sıkıştırılamadı.', // 'Target compression failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Hedef En Büyük Dosya Boyutu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} en fazla)', // '({bytes} max)'
    needDifferentTarget: 'Farklı bir KB hedefi mi gerekiyor?', // 'Need a different target KB?'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Yalnızca kaliteyi düşürmek {target} altına sığdırmaya yetmezse akıllı boyut küçültmeye izin ver', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Kayıpsız PNG {target} hedefine temiz biçimde ulaşamadığında büyük PNG\'leri otomatik olarak WebP/JPG\'ye dönüştür', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Saydam PNG için mat renk:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} boyutuna sıkıştır', // 'Compress to {target}'
    optimizing: 'İyileştiriliyor…', // 'Optimizing...'
    clear: 'Temizle', // 'Clear'
    losslessPngSelected: 'Kayıpsız PNG seçildi:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG kalite kaydırıcılarını yok sayar; bu nedenle boyutu küçültmek yalnızca piksel boyutlarını küçültmeye bağlıdır. Büyük fotoğraflar için keskinliği koruyarak katı KB sınırlarına ulaşmak üzere JPG veya WebP seçin.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Hedef sıkıştırma özeti · Hedef ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} içinden {achieved} tanesi {target} hedefine ulaştı', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'görsel', // 'image'
    imagePlural: 'görseller', // 'images'
    summaryMissed: ' · {missed} tanesi dürüstçe sığamadı (ayrıntılar aşağıda)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Toplam tasarruf: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Toplam tasarruf: {bytes} ({grew} büyüdü)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    metricOriginal: 'Orijinal', // 'Original' (metric label)
    metricOutput: 'Çıkış', // 'Output' (metric label)
    metricSpaceSaved: 'Kazanılan Alan', // 'Space Saved' (metric label)
    metricReduction: 'Küçülme', // 'Reduction' (metric label)
    metricSizeChange: 'Boyut Değişimi', // 'Size Change' (metric label)
    underTarget: '{target} altında ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Hedefe ulaşılamadı — {bytes}', // 'Target missed — {bytes}'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} büyüdü: yeniden kodlama orijinalden daha büyük', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'Fotoğraf görünümlü PNG\'ler için WebP veya JPG genellikle daha küçüktür.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Orijinali Koru', // 'Keep original'
    keptOriginalNote: 'Yeniden kodlama dosyayı büyüttüğü için orijinal dosya korundu.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Kayıpsız PNG, {target} altında daha yüksek çözünürlük korumak için otomatik olarak {format} biçimine dönüştürüldü.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (saydamlık korundu)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Orijinal dosya zaten {target} altındaydı ve yeniden kodlama onu {bytes} büyüttü. “Orijinali Koru” seçeneğini kullanın ya da daha küçük bir çıkış için WebP/JPG\'ye geçin.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Orijinal dosya zaten {target} altındaydı; %{quality} kaliteyle temiz biçimde dışa aktarıldı.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Hedefe tam {width}×{height} px çözünürlükte ulaşıldı ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Hedefe {width}×{height} px boyutuna (%{percent}) ölçeklenerek {qualityLabel} ile ulaşıldı.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'kayıpsız PNG', // 'lossless PNG'
    qualityPercent: '%{quality} kalite', // '{quality}% quality'
    statusCannotPng:
      'Kayıpsız PNG ile {target} hedefine ulaşılamıyor (ulaşılabilen en küçük boyut: {width}×{height} px boyutunda {bytes}). Daha küçük boyutlara ulaşmak için çıkış biçimini JPG veya WebP olarak değiştirin.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tam {width}×{height} px boyutlarıyla {target} hedefine ulaşılamıyor (en küçük kaliteli boyut {bytes}). Boyutları daha da küçültmek için “Akıllı boyut küçültmeye izin ver” seçeneğini etkinleştirin.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'İstenen {target} hedefine temiz biçimde ulaşılamadı. Dürüstçe kodlanmış en küçük çıkış {bytes} ({width}×{height} px, %{quality} kalite). Daha büyük bir hedef boyut deneyin.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Hedef sıkıştırma ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Sıkıştırılmış ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Görselleri {target} altında sıkıştırmak için bırakın', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Hedef boyuta sıkıştırılamadı.', // 'Target compression failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Hedef En Büyük Dosya Boyutu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} en fazla)', // '({bytes} max)'
    needDifferentTarget: 'Farklı bir KB hedefi mi gerekiyor?', // 'Need a different target KB?'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Yalnızca kaliteyi düşürmek {target} altına sığdırmaya yetmezse akıllı boyut küçültmeye izin ver', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Kayıpsız PNG {target} hedefine temiz biçimde ulaşamadığında büyük PNG\'leri otomatik olarak WebP/JPG\'ye dönüştür', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Saydam PNG için mat renk:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} boyutuna sıkıştır', // 'Compress to {target}'
    optimizing: 'İyileştiriliyor…', // 'Optimizing...'
    clear: 'Temizle', // 'Clear'
    losslessPngSelected: 'Kayıpsız PNG seçildi:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG kalite kaydırıcılarını yok sayar; bu nedenle boyutu küçültmek yalnızca piksel boyutlarını küçültmeye bağlıdır. Büyük fotoğraflar için keskinliği koruyarak katı KB sınırlarına ulaşmak üzere JPG veya WebP seçin.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Hedef sıkıştırma özeti · Hedef ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} içinden {achieved} tanesi {target} hedefine ulaştı', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'görsel', // 'image'
    imagePlural: 'görseller', // 'images'
    summaryMissed: ' · {missed} tanesi dürüstçe sığamadı (ayrıntılar aşağıda)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Toplam tasarruf: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Toplam tasarruf: {bytes} ({grew} büyüdü)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    metricOriginal: 'Orijinal', // 'Original' (metric label)
    metricOutput: 'Çıkış', // 'Output' (metric label)
    metricSpaceSaved: 'Kazanılan Alan', // 'Space Saved' (metric label)
    metricReduction: 'Küçülme', // 'Reduction' (metric label)
    metricSizeChange: 'Boyut Değişimi', // 'Size Change' (metric label)
    underTarget: '{target} altında ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Hedefe ulaşılamadı — {bytes}', // 'Target missed — {bytes}'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} büyüdü: yeniden kodlama orijinalden daha büyük', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'Fotoğraf görünümlü PNG\'ler için WebP veya JPG genellikle daha küçüktür.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Orijinali Koru', // 'Keep original'
    keptOriginalNote: 'Yeniden kodlama dosyayı büyüttüğü için orijinal dosya korundu.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Kayıpsız PNG, {target} altında daha yüksek çözünürlük korumak için otomatik olarak {format} biçimine dönüştürüldü.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (saydamlık korundu)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Orijinal dosya zaten {target} altındaydı ve yeniden kodlama onu {bytes} büyüttü. “Orijinali Koru” seçeneğini kullanın ya da daha küçük bir çıkış için WebP/JPG\'ye geçin.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Orijinal dosya zaten {target} altındaydı; %{quality} kaliteyle temiz biçimde dışa aktarıldı.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Hedefe tam {width}×{height} px çözünürlükte ulaşıldı ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Hedefe {width}×{height} px boyutuna (%{percent}) ölçeklenerek {qualityLabel} ile ulaşıldı.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'kayıpsız PNG', // 'lossless PNG'
    qualityPercent: '%{quality} kalite', // '{quality}% quality'
    statusCannotPng:
      'Kayıpsız PNG ile {target} hedefine ulaşılamıyor (ulaşılabilen en küçük boyut: {width}×{height} px boyutunda {bytes}). Daha küçük boyutlara ulaşmak için çıkış biçimini JPG veya WebP olarak değiştirin.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tam {width}×{height} px boyutlarıyla {target} hedefine ulaşılamıyor (en küçük kaliteli boyut {bytes}). Boyutları daha da küçültmek için “Akıllı boyut küçültmeye izin ver” seçeneğini etkinleştirin.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'İstenen {target} hedefine temiz biçimde ulaşılamadı. Dürüstçe kodlanmış en küçük çıkış {bytes} ({width}×{height} px, %{quality} kalite). Daha büyük bir hedef boyut deneyin.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Hedef sıkıştırma ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Sıkıştırılmış ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Görselleri {target} altında sıkıştırmak için bırakın', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Hedef boyuta sıkıştırılamadı.', // 'Target compression failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Hedef En Büyük Dosya Boyutu', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} en fazla)', // '({bytes} max)'
    needDifferentTarget: 'Farklı bir KB hedefi mi gerekiyor?', // 'Need a different target KB?'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WebP' — unchanged
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Yalnızca kaliteyi düşürmek {target} altına sığdırmaya yetmezse akıllı boyut küçültmeye izin ver', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Kayıpsız PNG {target} hedefine temiz biçimde ulaşamadığında büyük PNG\'leri otomatik olarak WebP/JPG\'ye dönüştür', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Saydam PNG için mat renk:', // 'Transparent PNG matte color:'
    compressToTarget: '{target} boyutuna sıkıştır', // 'Compress to {target}'
    optimizing: 'İyileştiriliyor…', // 'Optimizing...'
    clear: 'Temizle', // 'Clear'
    losslessPngSelected: 'Kayıpsız PNG seçildi:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG kalite kaydırıcılarını yok sayar; bu nedenle boyutu küçültmek yalnızca piksel boyutlarını küçültmeye bağlıdır. Büyük fotoğraflar için keskinliği koruyarak katı KB sınırlarına ulaşmak üzere JPG veya WebP seçin.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Hedef sıkıştırma özeti · Hedef ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{total} {images} içinden {achieved} tanesi {target} hedefine ulaştı', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'görsel', // 'image'
    imagePlural: 'görseller', // 'images'
    summaryMissed: ' · {missed} tanesi dürüstçe sığamadı (ayrıntılar aşağıda)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Toplam tasarruf: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Toplam tasarruf: {bytes} ({grew} büyüdü)', // 'Total Saved: {bytes} (grew by {bytes})'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    metricOriginal: 'Orijinal', // 'Original' (metric label)
    metricOutput: 'Çıkış', // 'Output' (metric label)
    metricSpaceSaved: 'Kazanılan Alan', // 'Space Saved' (metric label)
    metricReduction: 'Küçülme', // 'Reduction' (metric label)
    metricSizeChange: 'Boyut Değişimi', // 'Size Change' (metric label)
    underTarget: '{target} altında ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Hedefe ulaşılamadı — {bytes}', // 'Target missed — {bytes}'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    grewBy: '{bytes} büyüdü: yeniden kodlama orijinalden daha büyük', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'Fotoğraf görünümlü PNG\'ler için WebP veya JPG genellikle daha küçüktür.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Orijinali Koru', // 'Keep original'
    keptOriginalNote: 'Yeniden kodlama dosyayı büyüttüğü için orijinal dosya korundu.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Kayıpsız PNG, {target} altında daha yüksek çözünürlük korumak için otomatik olarak {format} biçimine dönüştürüldü.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (saydamlık korundu)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Orijinal dosya zaten {target} altındaydı ve yeniden kodlama onu {bytes} büyüttü. “Orijinali Koru” seçeneğini kullanın ya da daha küçük bir çıkış için WebP/JPG\'ye geçin.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Orijinal dosya zaten {target} altındaydı; %{quality} kaliteyle temiz biçimde dışa aktarıldı.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Hedefe tam {width}×{height} px çözünürlükte ulaşıldı ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Hedefe {width}×{height} px boyutuna (%{percent}) ölçeklenerek {qualityLabel} ile ulaşıldı.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'kayıpsız PNG', // 'lossless PNG'
    qualityPercent: '%{quality} kalite', // '{quality}% quality'
    statusCannotPng:
      'Kayıpsız PNG ile {target} hedefine ulaşılamıyor (ulaşılabilen en küçük boyut: {width}×{height} px boyutunda {bytes}). Daha küçük boyutlara ulaşmak için çıkış biçimini JPG veya WebP olarak değiştirin.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Tam {width}×{height} px boyutlarıyla {target} hedefine ulaşılamıyor (en küçük kaliteli boyut {bytes}). Boyutları daha da küçültmek için “Akıllı boyut küçültmeye izin ver” seçeneğini etkinleştirin.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'İstenen {target} hedefine temiz biçimde ulaşılamadı. Dürüstçe kodlanmış en küçük çıkış {bytes} ({width}×{height} px, %{quality} kalite). Daha büyük bir hedef boyut deneyin.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Hedef sıkıştırma ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Sıkıştırılmış ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Toplu sıkıştırma için onlarca görsel bırakın', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Sıkıştırılamadı.', // 'Compression failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Hızlı grup profilleri:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web Hızlı (WebP %75)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'E-posta / Paylaşım (JPG %65)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Yüksek Doğruluk (%85)', // 'High Fidelity (85%)'
    compressingBatch: 'Grup yerel olarak sıkıştırılıyor…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-es.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: '{target} altına sıkıştırmak için görseller bırakın', // `Drop images to compress under ${targetLabel}`
    targetMaxFileSize: 'Hedef En Büyük Dosya Boyutu', // 'Target Maximum File Size'
    targetNumberAria: 'Hedef dosya boyutu sayısı', // aria-label 'Target file size number'
    maxSuffix: '({size} en fazla)', // '({formatBytes(effectiveTargetBytes)} max)'
    needDifferentTarget: 'Farklı bir KB hedefi mi gerekiyor?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    allowDownscale: 'Yalnızca kaliteyi düşürmek {target} altına sığdırmaya yetmezse akıllı boyut küçültmeye izin ver', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'Kayıpsız PNG {target} hedefine temiz biçimde ulaşamadığında büyük PNG\'leri otomatik olarak WebP/JPG\'ye dönüştür', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'Saydam PNG için mat renk:', // 'Transparent PNG matte color:'
    losslessPngTitle: 'Kayıpsız PNG seçildi:', // 'Lossless PNG selected:'
    losslessPngNote: 'PNG kalite kaydırıcılarını yok sayar; bu nedenle boyutu küçültmek yalnızca piksel boyutlarını küçültmeye bağlıdır. Büyük fotoğraflar için keskinliği koruyarak katı KB sınırlarına ulaşmak üzere JPG veya WebP seçin.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: '{target} boyutuna sıkıştır', // 'Compress to {targetLabel}'
    optimizing: 'İyileştiriliyor…', // 'Optimizing...'
    clear: 'Temizle', // 'Clear'
    targetSummary: 'Hedef sıkıştırma özeti · Hedef ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{total} {images} içinden {achieved} tanesi {target} hedefine ulaştı', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'görsel', // 'image'
    imagePlural: 'görseller', // 'images'
    summaryMissed: '· {missed} tanesi dürüstçe sığamadı (ayrıntılar aşağıda)', // '· {missed} could not honestly fit (details below)'
    totalSaved: 'Toplam tasarruf: {saved}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '({grew} büyüdü)', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    underTarget: '{target} altında ({size})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'Hedefe ulaşılamadı — {size}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'Orijinal', // 'Original'
    columnOutput: 'Çıkış', // 'Output'
    columnSpaceSaved: 'Kazanılan Alan', // 'Space Saved'
    columnReduction: 'Küçülme', // 'Reduction'
    columnSizeChange: 'Boyut Değişimi', // 'Size Change'
    grewBy: '{amount} büyüdü: yeniden kodlama orijinalden daha büyük.', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'Fotoğraf görünümlü PNG\'ler için WebP veya JPG genellikle daha küçüktür.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Orijinali Koru', // 'Keep original'
    keptOriginalNote: 'Yeniden kodlama dosyayı büyüttüğü için orijinal dosya korundu.', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'Orijinal dosya zaten {target} altındaydı; %{quality} kaliteyle temiz biçimde dışa aktarıldı.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'Hedefe tam {width}×{height} px çözünürlükte ulaşıldı ({quality}).', // 'Target met at full {width}×{height}px resolution ({quality}% quality / lossless PNG).'
    statusMetScaled: 'Hedefe {width}×{height} px boyutuna (%{scale} ölçekle) ölçeklenerek ulaşıldı.', // 'Target met by scaling to {width}×{height}px ({scale}% scale).'
    statusCannotPng: 'Kayıpsız PNG ile {target} hedefine ulaşılamıyor (ulaşılabilen en küçük boyut: {size}).', // 'Cannot reach {target} with lossless PNG (smallest achievable: {size}).'
    statusCannotFull: 'Tam {width}×{height} px boyutlarıyla {target} hedefine ulaşılamıyor (en küçük kaliteli boyut {size}).', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {size}).'
    statusCannotCleanly: '{target} hedefine temiz biçimde ulaşılamadı. Dürüstçe kodlanmış en küçük çıkış {size}.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {size}.'
    switchedFormatNote: 'Kayıpsız PNG otomatik olarak {format} biçimine dönüştürüldü.', // 'Auto-converted lossless PNG to {format}.'
    errorTargetFailed: 'Hedef sıkıştırma hatası.', // 'Target compression failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Hedef sıkıştırma ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'Sıkıştırılmış ({size})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'Toplu boyutlandırmak için birden fazla görsel bırakın', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'Toplu Boyutlandırma Stratejisi', // 'Batch Resize Strategy'
    strategyBounding: 'En Fazla G × Y Sığdırma', // 'Fit Max W × H'
    strategyWidth: 'Tek Tip Genişlik', // 'Uniform Width'
    strategyExact: 'Tam G × Y', // 'Exact W × H'
    strategyPercentage: 'Yüzde (%)', // 'Percentage (%)'
    outputFormat: 'Çıkış Biçimi', // 'Output Format'
    formatOriginal: 'Orijinal', // 'Original' — same in Turkish
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'Tüm görselleri ölçeklendir:', // 'Scale All Images:'
    maxWidth: 'En Fazla Genişlik (px)', // 'Max Width (px)'
    targetWidth: 'Hedef Genişlik (px)', // 'Target Width (px)'
    exactWidth: 'Tam Genişlik (px)', // 'Exact Width (px)'
    maxHeight: 'En Fazla Yükseklik (px)', // 'Max Height (px)'
    exactHeight: 'Tam Yükseklik (px)', // 'Exact Height (px)'
    doNotEnlarge: 'Daha küçük görselleri büyütme', // 'Do not enlarge smaller images'
    fitMode: 'Sığdırma Modu', // 'Fit Mode'
    fitContain: 'Sığdır', // 'Contain'
    fitCover: 'Kapla', // 'Cover'
    fitStretch: 'Esnet', // 'Stretch'
    presetFullHd: 'Full HD 1920 px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200 px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'E-ticaret 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'Küçük Resim 600 px', // 'Thumbnail 600px'
    quality: 'Kalite:', // 'Quality:'
    matteBg: 'Mat Arka Plan:', // 'Matte BG:'
    resizingProgress: 'Boyutlandırılıyor ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'Toplu Boyutlandır ({count})', // 'Bulk Resize ({items.length})'
    clear: 'Temizle', // 'Clear'
    bulkResizeComplete: 'Toplu boyutlandırma tamamlandı', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} görsel boyutlandırıldı ve hazır', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} görsel boyutlandırıldı ve hazır', // '{count} images resized and ready'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'Toplu boyutlandırma hatası.', // 'Batch resize failed.'
    errorCorruptedFile: 'Bozuk veya okunamayan görsel dosyası.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Toplu boyutlandırma karşılaştırması', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'Boyutlandırılmış (sonra)', // 'Resized (After)'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'Biçimleri toplu dönüştürmek için birden fazla görsel bırakın', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'Grubu Şu Biçime Dönüştür', // 'Convert Batch To Format'
    formatWebp: 'WebP (web için en hafifi)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (evrensel)', // 'JPG (Universal)'
    formatPng: 'PNG (kayıpsız ve saydam)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'İsteğe bağlı dosya adı son eki', // 'Optional Filename Suffix'
    placeholderSuffix: 'ör. _web', // placeholder 'e.g. _web'
    transparentFill: 'Saydam Dolgu', // 'Transparent Fill'
    qualityLosslessPng: 'Kalite (Kayıpsız PNG)', // 'Quality (Lossless PNG)'
    qualityPercent: 'Kalite (%{quality})', // 'Quality ({quality}%)'
    convertingProgress: 'Dönüştürülüyor ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'Tümünü Dönüştür ({count})', // 'Convert All ({items.length})'
    clear: 'Temizle', // 'Clear'
    bulkConversionSummary: 'Toplu Dönüştürme Özeti', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} dosya {format} biçimine dönüştürüldü · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    convertedTo: '{ext} biçimine dönüştürüldü', // 'Converted to {ext}'
    errorConversionFailed: 'Toplu dönüştürme hatası.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'Desteklenmeyen veya bozuk görsel dosyası.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'Toplu biçim dönüştürme', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'Dönüştürülmüş (sonra)', // 'Converted (After)'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Core Web Vitals için iyileştirmek üzere web öğeleri bırakın', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'Web Performans Hazır Ayarları', // 'Web Performance Presets'
    presetHero: 'Ana Banner', // 'Hero / Banner'
    presetHeroDesc: 'En fazla 1600 px · WebP %80', // 'Max 1600px · WebP 80%'
    presetProduct: 'E-ticaret Ürünü', // 'E-Commerce Product'
    presetProductDesc: 'En fazla 1200 px · WebP %82', // 'Max 1200px · WebP 82%'
    presetThumb: 'Kart / Küçük Resim', // 'Card / Thumbnail'
    presetThumbDesc: 'En fazla 640 px · WebP %75', // 'Max 640px · WebP 75%'
    presetOg: 'Sosyal OG / E-posta', // 'Social OG / Email'
    presetOgDesc: 'En fazla 1200 px · JPG %82', // 'Max 1200px · JPG 82%'
    presetRetina: 'Retina 2× Grafik', // 'Retina 2× Graphic'
    presetRetinaDesc: 'En fazla 1920 px · WebP %88', // 'Max 1920px · WebP 88%'
    webFormat: 'Web Biçimi', // 'Web Format'
    maxDimension: 'En Büyük Boyut (uzun kenar)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'Orijinal boyutları koru', // 'Keep Original Dimensions'
    max1920: 'En fazla 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'En fazla 1600 px (Ana Banner)', // 'Max 1600px (Hero / Banner)'
    max1200: 'En fazla 1200 px (Blog / Ürün)', // 'Max 1200px (Blog / Product)'
    max800: 'En fazla 800 px (içerik içi)', // 'Max 800px (In-Content)'
    max640: 'En fazla 640 px (küçük resimler)', // 'Max 640px (Thumbnails)'
    quality: 'Kalite:', // 'Quality:'
    onlyDownscale: 'Yalnızca daha büyük görselleri küçült (EXIF ve GPS üstverisi otomatik olarak kaldırılır)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'İyileştiriliyor…', // 'Optimizing...'
    optimizeForWeb: 'Web İçin İyileştir ({count})', // 'Optimize for Web ({items.length})'
    clear: 'Temizle', // 'Clear'
    webPerformanceSummary: 'Web Performans Özeti', // 'Web Performance Summary'
    pageWeightSaved: '(%{percent} daha hafif · {saved} sayfa ağırlığı tasarrufu)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+%{percent} · {amount} büyüdü)', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    webReady: 'Web İçin Hazır ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: '{amount} büyüdü ({percent})', // 'Grew by {amount} ({formatPercent})'
    copyImg: '<img> Kopyala', // 'Copy <img>'
    copiedHtml: 'HTML kopyalandı', // 'Copied HTML'
    copyImgTitle: 'Açık genişlik ve yükseklik içeren duyarlı HTML img etiketini kopyala', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'Web iyileştirme hatası.', // 'Web optimization failed.'
    errorCorruptedFile: 'Bozuk veya desteklenmeyen görsel.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'Web iyileştirme karşılaştırması', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'Web İçin Hazır (sonra)', // 'Web-Ready (After)'
    compare: 'Karşılaştır', // 'Compare'
    download: 'İndir', // 'Download'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'Sıkıştırmak için animasyonlu bir GIF bırakın', // 'Drop an animated GIF to compress'
    decodingGif: 'Animasyonlu GIF kareleri tarayıcınızda yerel olarak çözülüyor…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'kare', // 'frame'
    framePlural: 'kare', // 'frames'
    presetLight: 'Hafif', // 'Light'
    presetBalanced: 'Dengeli', // 'Balanced'
    presetMaxShrink: 'En Fazla Küçültme', // 'Max Shrink'
    colorPaletteLimit: 'Renk Paleti Sınırı', // 'Color Palette Limit'
    colorsCount: '{count} renk', // '{maxColors} colors'
    outputScale: 'Çıkış Ölçeği', // 'Output Scale'
    scaleWithDims: '%{percent} ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'Kare Hızı İyileştirme', // 'Frame Rate Optimization'
    keepAllFrames: 'Tüm kareleri koru', // 'Keep All Frames'
    dropEvery2nd: 'Her 2. kareyi at (~%50 daha küçük)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'Her 3 kareden 1\'ini koru', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'GIF sıkıştırılıyor ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'GIF\'i Sıkıştır', // 'Compress GIF'
    reset: 'Sıfırla', // 'Reset'
    originalGif: 'Orijinal GIF', // 'Original GIF'
    compressedGif: 'Sıkıştırılmış GIF', // 'Compressed GIF'
    sizeChange: 'Boyut Değişimi', // 'Size Change'
    sizeAndFrames: '{size} · {frames} kare', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'Sıkıştırılmış GIF\'i İndir', // 'Download Compressed GIF'
    notSmallerNotice: 'Bu kaynak GIF zaten çok iyileştirilmişti veya girdi için tam kare paleti daha büyük kullanıyor. {size} altına indirmek için renk paletini 32–64 renge düşürün, çıkış ölçeğini %75 veya %50\'ye indirin ya da her 2. kareyi atın.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'Tarayıcınızda temiz biçimde %{percent} sıkıştırıldı ({saved} tasarruf).', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'Orijinal ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'Sıkıştırılmış ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'Orijinal GIF', // alt 'Original GIF'
    altCompressedGif: 'Sıkıştırılmış GIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIF sıkıştırma hatası.', // 'GIF compression failed.'
    errorDecodeFrames: 'GIF kareleri çözülemedi.', // 'Could not decode GIF frames.'
    errorTooSmall: 'Dosya geçerli bir GIF olmak için çok küçük.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'Seçilen dosya geçerli bir GIF87a veya GIF89a animasyonu değil.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'GIF\'in tuval boyutları 0×0 geçersiz.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'GIF genel renk tablosu kesilmiş.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'Bu GIF dosyasından hiçbir görsel karesi çözülemedi.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '2B tuval bağlamı başlatılamadı.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'iPhone HEIC veya HEIF fotoğraflarını JPG\'ye dönüştürmek için bırakın', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Apple HEIC ve HEIF fotoğraflarını istemci tarafı WebAssembly (heic2any) ile tarayıcınızda yerel olarak çözer: fotoğraflarınız cihazınızdan asla ayrılmaz.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    outputQuality: 'JPG Çıkış Kalitesi', // 'JPG Output Quality'
    smallerFile: 'Daha küçük dosya (%20)', // 'Smaller file (20%)'
    balanced: 'Dengeli (%85)', // 'Balanced (85%)'
    maxDetail: 'En fazla ayrıntı (%100)', // 'Max detail (100%)'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    converting: 'Dönüştürülüyor…', // 'Converting...'
    clear: 'Temizle', // 'Clear'
    batchSummary: 'HEIC → JPG Grup Özeti', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} dönüştürüldü · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'JPG İndir', // 'Download JPG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'Bu HEIC/HEIF dosyası çözülemedi. Geçerli bir iPhone veya Apple HEIC fotoğrafı olduğundan emin olun.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '"{filename}" çözülemedi. Geçerli bir HEIC görseli olduğunu doğrulayın.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '{name} JPG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'Kayıpsız PNG\'ye dönüştürmek için JPG veya JPEG görseller bırakın', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Kayıpsız PNG Çıkışı', // 'Lossless PNG Output'
    losslessPngEncoding: 'Kayıpsız PNG Kodlama', // 'Lossless PNG Encoding'
    losslessPngNote: 'PNG; keskin kenarları, metni ve alfa saydamlığını kayıplı sıkıştırma bozukluğu olmadan korur.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    converting: 'Dönüştürülüyor…', // 'Converting...'
    clear: 'Temizle', // 'Clear'
    batchSummary: 'JPG → PNG Grup Özeti', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} dönüştürüldü · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'PNG İndir', // 'Download PNG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}" çözülemedi. Geçerli bir JPG görseli olduğunu doğrulayın.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '{name} PNG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'Daha küçük JPG\'ye dönüştürmek için PNG dosyaları bırakın', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    outputQuality: 'JPG Çıkış Kalitesi', // 'JPG Output Quality'
    smallerFile: 'Daha küçük dosya (%20)', // 'Smaller file (20%)'
    balanced: 'Dengeli (%85)', // 'Balanced (85%)'
    maxDetail: 'En fazla ayrıntı (%100)', // 'Max detail (100%)'
    transparentMatteColor: 'Saydam Arka Plan İçin Mat Renk', // 'Transparent Background Matte Color'
    matteWhite: 'Beyaz', // 'White'
    matteBlack: 'Siyah', // 'Black'
    matteLightGray: 'Açık Gri', // 'Light Gray'
    matteNote: 'JPG saydamlığı desteklemez; saydam alanlar bu renkle temiz biçimde doldurulur.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    converting: 'Dönüştürülüyor…', // 'Converting...'
    clear: 'Temizle', // 'Clear'
    batchSummary: 'PNG → JPG Grup Özeti', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} dönüştürüldü · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'JPG İndir', // 'Download JPG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    errorDecodeFile: '"{filename}" çözülemedi. Geçerli bir PNG görseli olduğunu doğrulayın.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '{name} JPG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'Hafif WebP\'ye dönüştürmek için JPG görseller bırakın', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP Çıkış Kalitesi', // 'WebP Output Quality'
    qualityAriaLabel: 'webp çıkış kalitesi', // aria-label 'WebP output quality'
    smallerFile: 'Daha küçük dosya (%20)', // 'Smaller file (20%)'
    balanced: 'Dengeli (%85)', // 'Balanced (85%)'
    maxDetail: 'En fazla ayrıntı (%100)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} Grup Özeti', // '{source} → {target} Batch Summary'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    filesConvertedSuffix: 'dönüştürüldü', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'WebP İndir', // 'Download WebP'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    converting: 'Dönüştürülüyor…', // 'Converting...'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    clear: 'Temizle', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} WebP\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" çözülemedi. Geçerli bir JPG görseli olduğunu doğrulayın.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'Evrensel JPG\'ye dönüştürmek için WebP görseller bırakın', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG Çıkış Kalitesi', // 'JPG Output Quality'
    qualityAriaLabel: 'jpg çıkış kalitesi', // aria-label 'JPG output quality'
    smallerFile: 'Daha küçük dosya (%20)', // 'Smaller file (20%)'
    balanced: 'Dengeli (%85)', // 'Balanced (85%)'
    maxDetail: 'En fazla ayrıntı (%100)', // 'Max detail (100%)'
    matteColorLabel: 'Saydam Arka Plan İçin Mat Renk', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Mat arka plan rengi', // aria-label 'Matte background color'
    matteWhite: 'Beyaz', // 'White'
    matteBlack: 'Siyah', // 'Black'
    matteLightGray: 'Açık Gri', // 'Light Gray'
    matteHint: 'JPG saydamlığı desteklemez; saydam alanlar bu renkle temiz biçimde doldurulur.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} Grup Özeti', // '{source} → {target} Batch Summary'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    filesConvertedSuffix: 'dönüştürüldü', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'JPG İndir', // 'Download JPG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    converting: 'Dönüştürülüyor…', // 'Converting...'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    clear: 'Temizle', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" çözülemedi. Geçerli bir WebP görseli olduğunu doğrulayın.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'Saydam WebP\'ye dönüştürmek için PNG dosyaları bırakın', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP Çıkış Kalitesi', // 'WebP Output Quality'
    qualityAriaLabel: 'webp çıkış kalitesi', // aria-label 'WebP output quality'
    smallerFile: 'Daha küçük dosya (%20)', // 'Smaller file (20%)'
    balanced: 'Dengeli (%85)', // 'Balanced (85%)'
    maxDetail: 'En fazla ayrıntı (%100)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} Grup Özeti', // '{source} → {target} Batch Summary'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    filesConvertedSuffix: 'dönüştürüldü', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'WebP İndir', // 'Download WebP'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    converting: 'Dönüştürülüyor…', // 'Converting...'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    clear: 'Temizle', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} WebP\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" çözülemedi. Geçerli bir PNG görseli olduğunu doğrulayın.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Kayıpsız PNG\'ye dönüştürmek için WebP dosyaları bırakın', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Kayıpsız PNG Çıkışı', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Kayıpsız PNG Kodlama', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG; keskin kenarları, metni ve alfa saydamlığını kayıplı sıkıştırma bozukluğu olmadan korur.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: '{source} → {target} Grup Özeti', // '{source} → {target} Batch Summary'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    filesConvertedSuffix: 'dönüştürüldü', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'PNG İndir', // 'Download PNG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    converting: 'Dönüştürülüyor…', // 'Converting...'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    clear: 'Temizle', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} PNG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" çözülemedi. Geçerli bir WebP görseli olduğunu doğrulayın.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'PNG\'ye rasterleştirmek için SVG vektör dosyaları bırakın', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Satır içi SVG grafiklerini HTML5 Canvas ile yerel olarak rasterleştirir ve saydam arka planları korur. Sınırlama: SVG içinde başvurulan harici <image> URL\'leri, harici CSS stil sayfaları/web yazı tipleri veya komut dosyaları bağımsız Canvas dışa aktarımında görüntülenmeyebilir.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Kayıpsız PNG Çıkışı', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Kayıpsız PNG Kodlama', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG; keskin kenarları, metni ve alfa saydamlığını kayıplı sıkıştırma bozukluğu olmadan korur.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Raster Dışa Aktarma Ölçeği', // 'Raster Export Scale'
    rasterExportScaleHint: 'SVG\'nin içsel boyutlarına uygulanan çarpan (8000 px ile sınırlı). Ölçeği değiştirdikten sonra Tümünü Yeniden Dönüştür düğmesine tıklayın.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: '{source} → {target} Grup Özeti', // '{source} → {target} Batch Summary'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    filesConvertedSuffix: 'dönüştürüldü', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'PNG İndir', // 'Download PNG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    converting: 'Dönüştürülüyor…', // 'Converting...'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    clear: 'Temizle', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} PNG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Bu SVG rasterleştirilemedi. Dosyanın sözdizimi hatası olmayan geçerli XML SVG işaretlemesi olduğundan emin olun.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'Evrensel JPG\'ye dönüştürmek için AVIF görseller bırakın', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'AVIF görselleri tarayıcınızın yerel AVIF kod çözücüsüyle (modern Chrome, Edge, Firefox ve Safari\'de desteklenir) yerel olarak çözer ve standart JPG dosyaları olarak dışa aktarır.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG Çıkış Kalitesi', // 'JPG Output Quality'
    qualityAriaLabel: 'jpg çıkış kalitesi', // aria-label 'JPG output quality'
    smallerFile: 'Daha küçük dosya (%20)', // 'Smaller file (20%)'
    balanced: 'Dengeli (%85)', // 'Balanced (85%)'
    maxDetail: 'En fazla ayrıntı (%100)', // 'Max detail (100%)'
    matteColorLabel: 'Saydam Arka Plan İçin Mat Renk', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Mat arka plan rengi', // aria-label 'Matte background color'
    matteWhite: 'Beyaz', // 'White'
    matteBlack: 'Siyah', // 'Black'
    matteLightGray: 'Açık Gri', // 'Light Gray'
    matteHint: 'JPG saydamlığı desteklemez; saydam alanlar bu renkle temiz biçimde doldurulur.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: '{source} → {target} Grup Özeti', // '{source} → {target} Batch Summary'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    filesConvertedSuffix: 'dönüştürüldü', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'JPG İndir', // 'Download JPG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    converting: 'Dönüştürülüyor…', // 'Converting...'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    clear: 'Temizle', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Tarayıcınız bu AVIF görselini çözemedi. Dosyanın geçerli bir .avif görseli olduğunu doğrulayın ve modern bir Chrome, Firefox, Edge veya Safari tarayıcısıyla deneyin.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Kompakt JPG\'ye dönüştürmek için sıkıştırılmamış BMP bit eşlemleri bırakın', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Dönüştürme Akışı:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG Çıkış Kalitesi', // 'JPG Output Quality'
    qualityAriaLabel: 'jpg çıkış kalitesi', // aria-label 'JPG output quality'
    smallerFile: 'Daha küçük dosya (%20)', // 'Smaller file (20%)'
    balanced: 'Dengeli (%85)', // 'Balanced (85%)'
    maxDetail: 'En fazla ayrıntı (%100)', // 'Max detail (100%)'
    batchSummary: '{source} → {target} Grup Özeti', // '{source} → {target} Batch Summary'
    fileSingular: 'dosya', // 'file'
    filePlural: 'dosya', // 'files'
    filesConvertedSuffix: 'dönüştürüldü', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP oluşturuluyor…', // 'Creating ZIP...'
    downloadAllZip: 'Tümünü İndir (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Değişim', // 'Change'
    compare: 'Karşılaştır', // 'Compare'
    downloadTarget: 'JPG İndir', // 'Download JPG'
    removeImage: '{name} adlı görseli kaldır', // aria-label `Remove ${item.name}`
    converting: 'Dönüştürülüyor…', // 'Converting...'
    reconvertAll: 'Tümünü Yeniden Dönüştür', // 'Re-convert All'
    clear: 'Temizle', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '{name} JPG\'ye dönüştürülemedi.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '"{name}" çözülemedi. Geçerli bir BMP görseli olduğunu doğrulayın.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
} as const;
