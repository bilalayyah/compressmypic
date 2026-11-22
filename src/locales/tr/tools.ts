// Turkish tool registry — COMPLETE (home + all 47 tools).
// Assembled from tools-a.ts + tools-b.ts (coordinator merge).
// Properly written Turkish (Latin script), SEO-optimised for what Turkish speakers
// actually search. Slugs, category ids and relatedSlugs are unchanged from
// the English registry (src/data/tools.ts).

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_TR: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Sıkıştır', description: 'Görüntü dosyalarının boyutunu gözle görülür kalite kaybı olmadan küçültün' },
  { id: 'resize', label: 'Yeniden Boyutlandır', description: 'Piksel boyutlarını değiştirin veya görüntüleri toplu olarak ölçeklendirin' },
  { id: 'convert', label: 'Dönüştür', description: 'Görüntü formatları arasında dönüştürün ve PDF oluşturun' },
  { id: 'crop-edit', label: 'Kırp ve Düzenle', description: 'Fotoğraflarınızı döndürün, çevirin, kırpın ve ayarlayın' },
  { id: 'create', label: 'Oluştur', description: 'Favicon, kolaj ve web öğeleri oluşturun' },
  { id: 'privacy', label: 'Gizlilik Araçları', description: 'EXIF, GPS ve gizli meta verileri inceleyin ve silin' },
  { id: 'developer', label: 'Geliştirici Araçları', description: 'Renk seçin, boyutları inceleyin ve web öğeleri oluşturun' },
];

export const TOOLS_REGISTRY_TR: ToolDefinition[] = [
  {
    slug: '/',
    name: 'Resim Sıkıştırıcı',
    shortDescription: 'JPG, PNG, WebP ve HEIC resimlerini kalite kaybı olmadan sıkıştırın.',
    category: 'compress',
    seoTitle: 'Resim Sıkıştırma Ücretsiz – Fotoğrafları Çevrimiçi Sıkıştırın',
    seoDescription: 'Resim sıkıştırma ücretsiz ve çevrimiçi: JPG, PNG ve WebP dosyalarının boyutunu kalite kaybı olmadan küçültün. Kayıt yok, filigran yok; fotoğraflarınız tarayıcıdan asla çıkmaz.',
    h1: 'Resim Sıkıştırma Ücretsiz – Fotoğrafları Çevrimiçi Sıkıştırın',
    subtitle: 'JPG, PNG, WebP ve HEIC dosyalarının boyutunu doğrudan tarayıcınızda küçültün.',
    howToSteps: [],
    features: [],
    faqs: [],
    relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-resizer',
    name: 'Resim Boyutlandırıcı',
    shortDescription: 'Resimlerinizi tam piksel, yüzde veya sosyal medya şablonlarıyla boyutlandırın.',
    category: 'resize',
    seoTitle: 'Resim Boyutlandırma Ücretsiz – Piksel veya Yüzde ile Ölçeklendirin',
    seoDescription:
      'Resim boyutlandırma ücretsiz ve çevrimiçi: tam piksel, yüzde veya sosyal medya şablonlarıyla boyut değiştirin. Toplu işlemi tarayıcınızda yapın, hepsini ZIP olarak indirin.',
    h1: 'Resim Boyutlandırma Ücretsiz',
    subtitle:
      'Tarayıcıda çalışan resim boyutlandırıcımız, web tasarımcılarının, çevrimiçi satıcıların, blog yazarlarının ve günlük kullanıcıların fotoğraflarını tam piksel boyutlarına veya yüzde oranlarına saniyeler içinde ayarlamasını sağlar. Bozulmayı önlemek için oranı kilitleyin, tek tıkla sosyal medya şablonları uygulayın veya bütün bir klasörü yerel olarak, hiçbir şeyi sunucuya yüklemeden işleyin.',
    howToSteps: [
      {
        title: 'Bir veya daha fazla resim yükleyin',
        description:
          'Her biri 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyalarını yükleme alanına sürükleyin, cihazınızdaki dosyaları seçin ya da doğrudan Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Piksel veya Yüzde modunu seçin',
        description:
          'Tam boyutları yazmak için Piksel (G × Y) modu ile 12.000 piksele kadar boyut girin ya da Yüzde (%) modu ile kaydırıcı veya hızlı düğmelerle yüzde 10 ile yüzde 200 arasında ölçeklendirin.',
      },
      {
        title: 'Oran kilidini, sığdırma modunu veya şablonları ayarlayın',
        description:
          'Deforme olmadan ölçeklendirmek için oranı kilitli tutun ya da kilidi açarak Sığdır, Kapsa veya Tam Esnet seçeneklerinden birini seçin; Instagram Gönderisi, YouTube Küçük Resmi veya Full HD gibi bir şablona da tek tıkla geçebilirsiniz.',
      },
      {
        title: 'Çıktı formatını ve kaliteyi seçin',
        description:
          'Çıktı olarak Orijinal, JPG, PNG veya WebP seçin, çıktı kalite kaydırıcısını yüzde 10 ile yüzde 100 arasında ayarlayın ve JPG olarak kaydederken mat arka plan rengi seçin.',
      },
      {
        title: 'Ayarları uygulayın ve görsel olarak karşılaştırın',
        description:
          'Toplu işi işlemek için Tümünü Boyutlandır düğmesine basın ve herhangi bir kartta Karşılaştır görünümünü açarak indirmeden önce netliği ve bayt tasarrufunu yan yana inceleyin.',
      },
      {
        title: 'Tek tek veya ZIP olarak indirin',
        description:
          'Boyutlandırılan her resmi kendi İndir düğmesiyle kaydedin ya da iki veya daha fazla dosyayı aynı anda boyutlandırdığınızda Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Tam piksel ve yüzde ile ölçeklendirme',
        description:
          'Tam genişlik ve yükseklik değerleriyle boyutlandırın ya da yüzde 10 ile yüzde 200 arasında temiz bir şekilde ölçeklendirin; oran kilitliyken oran otomatik olarak korunur.',
      },
      {
        title: 'Akıllı sığdırma modları (Tam, Sığdır, Kapsa)',
        description:
          'Resimlerin sabit boyutlara nasıl yerleşeceğini seçin: tam boyuta esnetin, kırpmadan içine sığdırın ya da doldurmak için ortalanmış kırpma yapın.',
      },
      {
        title: 'Toplu boyutlandırma ve ZIP indirme',
        description:
          'Onlarca ürün fotoğrafını veya blog küçük resmini tek toplu işte işleyin ve hepsini tek bir ZIP dosyası olarak indirin.',
      },
      {
        title: 'Yüzde 100 yerel tarayıcı işlemi',
        description:
          'Fotoğraflarınız HTML5 Canvas ile kendi cihazınızda boyutlandırılır ve asla harici bir sunucuya yüklenmez.',
      },
    ],
    faqs: [
      {
        question: 'Resim boyutlandırıcıda Piksel ile Yüzde modu arasındaki fark nedir?',
        answer:
          'Piksel modu, tam genişlik ve yükseklik değerlerini piksel cinsinden yazmanızı (12.000 piksele kadar) veya sosyal medya şablonlarını doğrudan uygulamanızı sağlar. Yüzde modu ise yüklenen her resmi kaydırıcı veya yüzde 25, yüzde 50, yüzde 75, yüzde 150 ve yüzde 200 hızlı düğmeleriyle yüzde 10 ile yüzde 200 arasında orantılı olarak ölçeklendirir.',
      },
      {
        question: 'Oran kilidini açmak veya kapatmak ne değiştirir?',
        answer:
          'Oran kilitliyken yeni bir genişlik yazdığınızda yükseklik, yüklediğiniz ilk fotoğrafın oranına göre otomatik olarak güncellenir (tersi de geçerlidir). Kilidi açtığınızda genişlik ve yükseklik değerlerini bağımsız olarak yazabilirsiniz ve Sığdır, Kapsa ile Tam Esnet seçenekleri görünür.',
      },
      {
        question: 'Sığdır, Kapsa veya Tam Esnet seçeneklerinden hangisini seçmeliyim?',
        answer:
          'Konunun tamamını kenarları kırpmadan çerçeve içinde tutmak istiyorsanız Sığdır (kırpmasız) seçeneğini kullanın. Sabit boyutları doldurmak için fazlalığı kırparak doldurmak istiyorsanız Kapsa (ortalanmış kırpma) seçeneğini, oran bozulsa bile piksel sınırlarına uymak öncelikliyse Tam Esnet seçeneğini seçin.',
      },
      {
        question: 'Araç hangi sosyal medya ve ekran şablonlarını içeriyor?',
        answer:
          'Tek tıkla şablonlar şunlardır: Instagram Gönderisi (1080×1080), Instagram Hikâyesi (1080×1920), YouTube Küçük Resmi (1280×720), Facebook Kapak Fotoğrafı (851×315), X Başlık Görseli (1500×500) ve Full HD (1920×1080). Bir şablona bastığınızda Piksel moduna geçilir ve bu tam boyutlar doldurulur.',
      },
      {
        question: 'Küçük bir resmi orijinal çözünürlüğünün ötesinde büyütebilir miyim?',
        answer:
          'Evet, daha büyük piksel değerleri yazabilir veya Yüzde modunda HTML5 Canvas enterpolasyonu ile yüzde 200 boyutuna kadar ölçeklendirebilirsiniz. Ancak düşük çözünürlüklü grafikleri çok büyütmek kenarların daha yumuşak görünmesine yol açar, çünkü Canvas yeni detay üretmek yerine mevcut pikselleri esnetir.',
      },
      {
        question: 'Boyutlandırırken en büyük piksel boyutu ve dosya boyutu sınırı nedir?',
        answer:
          'Yüklenen her resim 20 MB boyutuna kadar olabilir ve piksel alanları 12.000 piksele kadar genişlik ve yükseklik kabul eder. Çok büyük tuvaller telefonda tarayıcı belleğini zorlayabilir, bu nedenle 4.000 ile 6.000 piksel arasında kalmak işlemi hızlı tutar.',
      },
      {
        question: 'Bu resim boyutlandırıcı hangi giriş formatlarını kabul ediyor?',
        answer:
          'JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP ve SVG dosyalarını yükleyebilirsiniz. HEIC resimleri boyutlandırılmadan önce tarayıcınızda yerel olarak çözülür ve sonuçları Orijinal, JPG, PNG veya WebP olarak kaydedebilirsiniz.',
      },
      {
        question: 'Boyutlandırma, PNG ve WebP dosyalarının şeffaf arka planını korur mu?',
        answer:
          'Evet, şeffaflık, Orijinal formatı (PNG/WebP için) koruduğunuzda veya çıktı olarak açıkça PNG ya da WebP seçtiğinizde korunur. Çıktı formatını JPG olarak değiştirirseniz şeffaf alanlar seçtiğiniz mat arka plan rengiyle doldurulur (varsayılan beyazdır).',
      },
      {
        question: 'Toplu boyutlandırma, yatay ve dikey fotoğraflar karışıkken nasıl çalışır?',
        answer:
          'Piksel modunda oran kilitliyken toplu yükleme yaptığınızda her fotoğraf, genişlik sınırını kullanarak kendi doğal oranını korur; dikey portreler yatay çerçevelere deforme edilmez. Bütün toplu işte aynı sabit boyutları istiyorsanız kilidi açın ve Sığdır veya Kapsa seçeneğini kullanın.',
      },
      {
        question: 'İlk yükleme neden genişlik ve yüksekliği otomatik olarak dolduruyor?',
        answer:
          'Boş bir kuyruğa ilk fotoğrafınızı bıraktığınızda boyutlandırıcı genişliği en fazla 1.200 piksel olarak ayarlar ve buna karşılık gelen yüksekliği orantılı olarak hesaplar. Bu sayıları hemen değiştirebilir ve listedeki tüm resimleri yeniden işlemek için Tümünü Boyutlandır düğmesine basabilirsiniz.',
      },
      {
        question: 'Küçülttükten sonra netliği nasıl kontrol ederim?',
        answer:
          'Herhangi bir sonuç kartında Karşılaştır düğmesine basın veya küçük resmine tıklayarak öncesi ve sonrası karşılaştırma penceresini açın. Orijinal ve boyutlandırılmış boyutları, bayt tasarrufunu ve ince detayları incelemek için bölünmüş kaydırıcıyı gösterir.',
      },
      {
        question: 'Çıktı formatını değiştirip aynı anda boyutlandırabilir miyim?',
        answer:
          'Evet, Tümünü Boyutlandır düğmesine basmadan önce çıktı formatı seçicisinden JPG, PNG veya WebP seçebilir ve kalite kaydırıcısını yüzde 10 ile yüzde 100 arasında ayarlayabilirsiniz. Böylece boyutları küçültür ve tek geçişte hafif bir web formatına dönüştürürsünüz.',
      },
      {
        question: 'Animasyonlu GIF dosyaları burada boyutlandırıldıktan sonra animasyonlu kalır mı?',
        answer:
          'Hayır, HTML5 Canvas GIF dosyasını statik boyutlara boyutlandırırken ilk kareyi çizer ve tek karelik bir resim olarak kaydeder. Animasyonu koruyup dosya boyutunu küçültmek istiyorsanız GIF Sıkıştırıcı aracımızı kullanın.',
      },
      {
        question: 'Fotoğraflarım boyutlandırma sırasında harici bir sunucuya yükleniyor mu?',
        answer:
          'Hayır, bütün boyutlandırma HTML5 Canvas ve JavaScript ile tarayıcı sekmenizde, yerel bellekte gerçekleşir. Ne orijinal ne de boyutlandırılmış resimleriniz ağ üzerinden geçmez ve uzak depolamaya dokunmaz.',
      },
      {
        question: 'Onlarca boyutlandırılmış resmi tek tek basmadan nasıl indiririm?',
        answer:
          'İki veya daha fazla resim boyutlandırılmayı bitirdiğinde listenin üzerinde Toplu İş Hazır çubuğu ve Tümünü İndir (ZIP) düğmesi belirir. Bu düğmeye bastığınızda boyutlandırılmış tüm dosyalar resized_images_compressmypic.zip adlı tek bir indirme dosyasında toplanır.',
      },
      {
        question: 'Panodaki ekran görüntüsünü yapıştırıp boyutlandırabilir miyim?',
        answer:
          'Evet, sayfadayken Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak kopyalanmış bir ekran görüntüsünü doğrudan yükleme kuyruğuna bırakın. Boyutları hemen yüklenir ve mevcut genişlik, yükseklik veya yüzde ayarınızla boyutlandırılır.',
      },
      {
        question: 'Boyutlandırılmış PNG dosyam neden daha az pikseli olmasına rağmen daha ağır?',
        answer:
          'Sıkıştırılmış bir JPG dosyasını boyutlandırırken kayıpsız PNG formatına dönüştürürseniz PNG, pikselleri kayıpsız kodladığı için orijinal JPEG dosyasından daha ağır olabilir. Çok daha hafif web dosyaları için çıktı formatını WebP veya yüzde 80–85 kalitede JPG olarak değiştirin.',
      },
      {
        question: 'Boyutlandırılmış JPG veya WebP resimleri kaydederken en iyi kalite ayarı nedir?',
        answer:
          'Varsayılan yüzde 85 ayarı, web siteleri, bloglar ve çevrimiçi mağazalar için keskin kenarlar ile temiz geçişler ve küçük dosyalar arasında iyi bir denge kurar. Daha sıkı bir kilobayt tasarrufu gerekiyorsa kaliteyi yüzde 65–75 aralığına düşürün, baskı hazırlıyorsanız yüzde 95–100 aralığına çıkarın.',
      },
      {
        question: 'SVG vektör grafiklerini temiz bir şekilde yüksek çözünürlüklü PNG olarak boyutlandırabilir miyim?',
        answer:
          'Evet, satır içi bir SVG yüklediğinizde Canvas üzerinde rasterleştirmeden önce daha büyük hedef boyutlar yazabilirsiniz. Satır içi şekil ve degradelere sahip, kendi kendine yeten SVG dosyaları net bir şekilde ölçeklenir; ancak SVG içindeki harici yazı tipi veya resim bağlantıları tarayıcı güvenliği nedeniyle engellenir.',
      },
      {
        question: 'Bu resim boyutlandırıcı çevrimdışı veya telefonda çalışıyor mu?',
        answer:
          'Evet, iOS Safari, Android Chrome ve masaüstü tarayıcılarda dokunmatik kaydırıcılar ve şablonlarla sorunsuz çalışır. Sayfa yüklendikten sonra tüm hesaplamalar tarayıcınızda yerel olarak yapıldığı için hiçbir şey yükleme hızına bağlı değildir.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Resim Dönüştürücü',
    shortDescription: 'JPG, PNG, WebP, HEIC, BMP, GIF ve SVG dosyalarını tarayıcınızda dönüştürün.',
    category: 'convert',
    seoTitle: 'Resim Dönüştürme Ücretsiz – JPG, PNG, WebP ve HEIC Çevirme',
    seoDescription:
      'Resim dönüştürme ücretsiz ve çevrimiçi: JPG, PNG, WebP, HEIC, SVG, BMP, GIF ve AVIF arasında dönüştürün. Cihazınızda toplu dönüştürme, ayarlanabilir kalite ve ZIP indirme.',
    h1: 'Resim Dönüştürme Ücretsiz',
    subtitle:
      'iPhone fotoğrafçıları, web geliştiricileri, pazarlama uzmanları ve ofis ekipleri için tasarlanan bu tarayıcı içi resim dönüştürücü; JPG, PNG, WebP, HEIC, SVG, BMP, GIF ve AVIF arasında zahmetsizce geçiş yapar. Çıktı kalitesini ayarlayın, şeffaf kırpıntılar için mat dolgu rengi seçin ve bütün klasörleri yerel olarak, dosya yüklemeden dönüştürün.',
    howToSteps: [
      {
        title: 'Bir veya daha fazla resim dosyası ekleyin',
        description:
          'Her biri 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, SVG, BMP, GIF veya AVIF resimlerini yükleme alanına bırakın, diskten dosya seçin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Çıktı formatını seçin',
        description:
          'Dönüştür formatı seçicisinden WebP (web için en hafifi), JPG (evrensel) veya PNG (kayıpsız ve şeffaflık destekli) seçin.',
      },
      {
        title: 'JPG çıktısı için dolgu rengini belirleyin',
        description:
          'Şeffaf PNG, WebP veya SVG grafikleri JPG formatına dönüştürürken şeffaflık dolgu rengi örneğine tıklayarak beyaz, siyah veya herhangi bir onaltılık renk arka planı seçin.',
      },
      {
        title: 'Gerekirse kalite kaydırıcısını ayarlayın',
        description:
          'WebP veya JPG çıktıları için kalite kaydırıcısını yüzde 10 ile yüzde 100 arasında sürükleyin (kayıpsız PNG için kaydırıcı otomatik olarak devre dışı kalır).',
      },
      {
        title: 'Dönüştürün ve sonuçları inceleyin',
        description:
          'Kuyruğunuzu güncel ayarlarla yeniden kodlamak için Tümünü Dönüştür düğmesine basın ve görsel doğruluğu ile bayt değişimini kontrol etmek için herhangi bir öğede Karşılaştır düğmesine basın.',
      },
      {
        title: 'Tek tek veya ZIP olarak indirin',
        description:
          'Dönüştürülen her dosyayı kendi İndir düğmesiyle kaydedin ya da toplu işin tamamını birlikte indirmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Geniş giriş formatı desteği',
        description:
          'iPhone HEIC/HEIF fotoğraflarını, SVG vektör grafiklerini, eski BMP dosyalarını, WebP, PNG ve JPEG resimlerini doğrudan tarayıcınızda dönüştürün.',
      },
      {
        title: 'Şeffaflığı koruyan güvenli dönüştürme',
        description:
          'PNG veya WebP formatına dönüştürürken alfa şeffaflığını korur ve JPG formatına dönüştürürken mat arka plan rengini özelleştirmenize izin verir.',
      },
      {
        title: 'Toplu dönüştürme ve ZIP dışa aktarma',
        description:
          'Bütün bir resim klasörünü aynı anda, tek tip kalite ayarlarıyla dönüştürün ve hepsini tek tıkla indirin.',
      },
      {
        title: 'Gizlilik odaklı istemci içi motor',
        description:
          'HEIC çözümleme bile tarayıcınızda WebAssembly ile yerel olarak çalışır: sunucuya yükleme yok, filigran yok.',
      },
    ],
    faqs: [
      {
        question: 'Bu resim dönüştürücü hangi giriş ve çıkış formatlarını destekliyor?',
        answer:
          'Resim başına 20 MB boyutuna kadar JPG, PNG, WebP, iPhone HEIC/HEIF, SVG, BMP, GIF ve tarayıcı tarafından çözülen AVIF dosyalarını yükleyebilirsiniz. Çıktılar WebP (web için en hafif), JPG (evrensel) veya PNG (kayıpsız ve şeffaflık destekli) olarak kaydedilir.',
      },
      {
        question: 'iPhone HEIC ve HEIF fotoğrafları sunucusuz nasıl dönüştürülüyor?',
        answer:
          'Dönüştürücümüz, HEIC çözümleyiciyi WebAssembly olarak doğrudan tarayıcı sekmenize yükler. HEIC kapsayıcısını yerel olarak, kendi işlemcinizde çözer ve fotoğrafı HTML5 Canvas üzerine çizerek standart JPG, PNG veya WebP dosyası olarak kaydeder.',
      },
      {
        question: 'PNG seçtiğimde kalite kaydırıcısı neden devre dışı kalıyor?',
        answer:
          'PNG, DEFLATE kayıpsız sıkıştırma kullanır; yani her pikseli kalite yüzdesine göre görsel detay atmadan tam olarak kodlar. WebP veya JPG seçimine geçtiğiniz anda kaydırıcı yeniden etkinleşir.',
      },
      {
        question: 'PNG veya WebP dosyalarını JPG formatına dönüştürürken şeffaf alanlara ne olur?',
        answer:
          'JPG, alfa şeffaflık kanalını desteklemediği için şeffaf piksellerin katı bir arka plan üzerine düzleştirilmesi gerekir. Şeffaf kenarları herhangi bir renk üzerine kaynaştırmak için şeffaflık dolgu rengi seçicisini kullanın (varsayılan beyazdır).',
      },
      {
        question: 'Modern web sitelerinden aldığım AVIF resimlerini JPG veya PNG formatına dönüştürebilir miyim?',
        answer:
          'Evet, Chrome, Edge, Firefox ve Safari tarayıcılarının güncel sürümleri AVIF dosyalarını tarayıcıda yerel olarak çözer. Çözüldükten sonra araç bunları harici bir bulut servisi olmadan evrensel JPG, PNG veya WebP formatına kaydeder.',
      },
      {
        question: 'SVG vektör logoları PNG veya WebP formatına dönüştürülürken net kalır mı?',
        answer:
          'Evet, satır içi yol, dolgu ve degradelere sahip, kendi kendine yeten SVG dosyaları kendi iç boyutlarında temiz bir şekilde rasterleştirilir ve şeffaf arka planlarını korur. Harici web yazı tiplerine veya uzak resim adreslerine dayanan SVG dosyalarının ise tarayıcı Canvas güvenliği nedeniyle sınırlı olduğunu unutmayın.',
      },
      {
        question: 'Kayıplı bir JPG dosyasını PNG formatına dönüştürmek fotoğrafın kaybolan detayını geri getirir mi?',
        answer:
          'Hayır, zaten sıkıştırılmış bir JPG dosyasını PNG olarak yeniden kaydetmek, orijinal JPEG kodlaması sırasında atılan detayı geri getiremez ve genellikle dosya boyutunu ciddi ölçüde artırır. PNG formatını yalnızca çok adımlı düzenlemelerden önce kayıpsız saklama gerekiyorsa seçin.',
      },
      {
        question: 'Tek bir toplu dönüştürmede farklı formatları karıştırabilir miyim?',
        answer:
          'Evet, HEIC fotoğrafları, BMP ekran görüntüleri, PNG logolar ve AVIF indirmelerini aynı kuyruğa birlikte bırakabilirsiniz. Geçerli her dosya seçtiğiniz hedef formata dönüştürülür ve hepsi tek bir ZIP dosyası olarak indirilir.',
      },
      {
        question: 'Genel dönüştürücüye animasyonlu bir GIF yüklersem ne olur?',
        answer:
          'Canvas, GIF dosyasının ilk karesini çizer ve onu statik bir WebP, JPG veya PNG dosyası olarak dönüştürür. Animasyonu koruyarak animasyonlu bir GIF küçültmek istiyorsanız GIF Sıkıştırıcı aracımıza geçin.',
      },
      {
        question: 'WebP çıktısı PNG ekran görüntümün boyutunu neden bu kadar küçülttü?',
        answer:
          'Kayıpsız PNG formatından farklı olarak yüzde 85 kalitede WebP, modern tahmine dayalı sıkıştırmayı tam alfa şeffaflık desteğiyle birleştirir. Bu, arayüz ekran görüntülerini ve büyük ürün kırpıntılarını okunabilirliği veya kenar yumuşaklığını kaybetmeden ciddi ölçüde küçültür.',
      },
      {
        question: 'Dönüştürülen resimleri kaydetmeden önce öncesi ve sonrası kaliteyi nasıl kontrol ederim?',
        answer:
          'Herhangi bir dönüştürülmüş kartta Karşılaştır düğmesine basın (veya küçük resmine tıklayın) ve etkileşimli karşılaştırma penceresini açın. Orijinal ve dönüştürülen dosyanın bayt boyutlarını karşılaştırabilir ve kenarlar ile metin üzerinde bölünmüş tutamacı sürükleyebilirsiniz.',
      },
      {
        question: 'Hassas fotoğraflarım veya ekran görüntülerim hiç internete gönderiliyor mu?',
        answer:
          'Asla: çözümleme, renk düzleştirme ve yeniden kodlama işlemlerinin tamamı tarayıcınızın yerel belleğinde gerçekleşir. Hiçbir şey yüklenmez, sunucularda saklanmaz ve üçüncü taraflarla paylaşılmaz.',
      },
      {
        question: 'Fotoğrafları WebP veya JPG formatına dönüştürürken önerilen kalite ayarı nedir?',
        answer:
          'Varsayılan yüzde 85 ayarı, hem WebP hem de evrensel JPG çıktılar için fark edilir sıkıştırma bozulması olmadan iyi çalışır. Portföy fotoğrafları için yüzde 92–95 aralığına çıkarabilir veya bant genişliği sınırı darsa yüzde 70–75 aralığına düşürebilirsiniz.',
      },
      {
        question: 'Dönüştürmeden sonra çıktı dosya adları nasıl oluşturuluyor?',
        answer:
          'Dönüştürülen her dosya, temizlenmiş temel adını korur ve uzantısı otomatik olarak .webp, .jpg veya .png olarak değişir. İndirmeden önce her kartta tam çıktı adını ve dönüştürülen bayt boyutunu görebilirsiniz.',
      },
      {
        question: 'Eski Windows programlarından kalma BMP bit eşlemlerini WebP veya JPG formatına dönüştürebilir miyim?',
        answer:
          'Evet, sıkıştırılmamış .bmp dosyaları tarayıcıda yerel olarak çözülür ve hemen kompakt JPG veya WebP dosyalarına dönüştürülür. Sıkıştırılmamış bit eşlem başlıklarını kaldırmak depolama boyutunu ciddi ölçüde azaltır.',
      },
      {
        question: 'Toplu işimdeki bir dosya bozuksa veya okunamıyorsa ne olur?',
        answer:
          'Her resim bağımsız olarak işlenir, bu nedenle tek bir bozuk veya desteklenmeyen dosya, kuyruğun geri kalanını durdurmadan satır içi bir hata rozeti gösterir. Geçerli tüm resimler dönüştürülür ve ZIP indirmenize paketlenir.',
      },
      {
        question: 'HTML5 Canvas ile dönüştürmek kameranın gizli EXIF meta verilerini kaldırır mı?',
        answer:
          'Evet, bir resmi Canvas üzerine çizip yeni bir JPG, PNG veya WebP dosyası kodlamak, GPS EXIF etiketleri veya kamera seri numarası meta verileri olmadan temiz bir bit eşlem üretir. Bu, dönüştürülen dosyaları internette paylaşırken gizliliğinizi korur.',
      },
      {
        question: 'Panodan yapıştırılan resimleri doğrudan dönüştürebilir miyim?',
        answer:
          'Evet, bir resim kopyalayın veya ekran görüntüsü alın ve sayfanın herhangi bir yerinde Ctrl+V tuşlarına basarak doğrudan dönüştürücü kuyruğuna ekleyin. Etkin hedef formatınıza hemen kodlanır.',
      },
      {
        question: 'Toplu dönüştürmelerde günlük sınır veya dosya sayısı sınırı var mı?',
        answer:
          'Hayır, hesap, filigran veya günlük dönüştürme kotası yoktur. Sizi yalnızca dosya başına 20 MB kontrolü ve cihazınızın tarayıcısındaki kullanılabilir bellek sınırlar.',
      },
      {
        question: 'Tek tek indirme yerine Tümünü İndir (ZIP) seçeneğini ne zaman kullanmalıyım?',
        answer:
          'Tek bir dönüştürülmüş fotoğrafı hızlıca kaydederken her karttaki İndir düğmesini kullanın. İki veya daha fazla resim dönüştürmeyi bitirdiğinde toplu iş özet çubuğundaki Tümünü İndir (ZIP) düğmesine basarak hepsini converted_images_compressmypic.zip dosyasında toplayın.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/image-cropper',
    name: 'Resim Kırpıcı',
    shortDescription: 'Fotoğrafları tutamaçlar, oranlar ve yakınlaştırma ile etkileşimli olarak kırpın.',
    category: 'crop-edit',
    seoTitle: 'Resim Kırpma Ücretsiz – Fotoğrafları Çevrimiçi Kırpın',
    seoDescription:
      'Resim kırpma ücretsiz ve çevrimiçi: tutamaçlar, 1:1 ile 16:9 arası oranlar ve yüzde 300 yakınlaştırma ile kırpın. JPG, PNG, WebP ve HEIC dosyalarını tarayıcınızda kırpın, hiçbir şey yüklemeyin.',
    h1: 'Resim Kırpma Ücretsiz',
    subtitle:
      'Sosyal medya içerik üreticileri, tasarımcılar, öğrenciler ve e-ticaret satıcıları için tasarlanan etkileşimli resim kırpıcımız, fotoğrafları doğrudan tarayıcınızda hassas bir şekilde çerçeveleyip kırpmanızı sağlar. 1:1 ile 16:9 arası popüler oranları sabitleyin, ince kenarlar için yüzde 300 boyutuna kadar yakınlaştırın ve kırpıntıları yerel olarak, yükleme yapmadan kaydedin.',
    howToSteps: [
      {
        title: 'Kırpılacak bir resim yükleyin',
        description:
          '20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini yükleme alanına bırakın, cihazınızdaki dosyaları seçin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Hazır bir oran seçin',
        description:
          'Sınırsız kırpmak için Serbest seçeneğini koruyun ya da çerçeveyi sabitlemek için Hazır Oran bölümünden 1:1, 4:3, 16:9, 3:2, 4:5 veya 9:16 oranlarından birine basın.',
      },
      {
        title: 'Çerçeveyi ve boyut tutamaçlarını sürükleyin',
        description:
          'Kırpma kutusunu üçte bir kılavuz çizgileriyle konunuzun üzerine taşıyın ve 8 kenar veya köşe tutamacından birini çekerek kırpıntının genişliğini ve yüksekliğini canlı olarak görün.',
      },
      {
        title: 'Yakınlaştırın veya tam tuvali geri yükleyin',
        description:
          'Kenarları hassas hizalamak için Yakınlaştırma düğmeleriyle (yüzde 100 ile yüzde 300 arasında, yüzde 25 adımlarla) yakınlaştırın ya da tam resme dönmek için Tümünü Seç düğmesine basın.',
      },
      {
        title: 'Çıktı formatını ve kaliteyi seçin',
        description:
          'Çıktı olarak Orijinal, JPG, PNG veya WebP seçin ve kayıplı formatlarda kaydederken kalite kaydırıcısını yüzde 10 ile yüzde 100 arasında ayarlayın.',
      },
      {
        title: 'Kırpın ve dosyanızı indirin',
        description:
          'Seçilen dikdörtgeni tam orijinal çözünürlükte işlemek ve boyutları dosya adına ekleyerek kaydetmek için Kırp ve İndir düğmesine basın.',
      },
    ],
    features: [
      { title: 'Etkileşimli sürükle ve boyutlandır tutamaçları', description: 'Fare ve dokunmatik için yumuşak tutamaçlar, herhangi bir bölgeyi tam piksel hassasiyetinde kırpmanızı sağlar.' },
      { title: 'Hazır oranlar', description: 'Serbest, 1:1 Kare, 4:3, 16:9, 3:2, Instagram 4:5 ve Hikâye 9:16 arasında geçiş yapın.' },
      { title: 'Yakınlaştırma ve canlı boyut okuma', description: 'Hassas çerçeveleme için yakınlaştırın ve tam çıktı genişlik × yükseklik değerlerini gerçek zamanlı görün.' },
      { title: 'Yüzde 100 yerel gizli işleme', description: 'Fotoğraflarınız HTML5 Canvas ile cihazınızda kırpılır, hiçbir sunucuya yükleme yapılmaz.' },
    ],
    faqs: [
      {
        question: 'Kırpma, seçilen dikdörtgen içindeki kaliteyi düşürür mü?',
        answer:
          'Hayır, kırpıcı seçtiğiniz koordinatları tarayıcı belleğinde saklanan tam orijinal çözünürlükten doğrudan çıkarır; ölçeklenmiş önizleme kutusundan değil. Kayıpsız PNG olarak kaydederken kırpıntınızın içindeki pikseller orijinalle birebir aynı kalır.',
      },
      {
        question: 'Kırpıcı hangi hazır oranları içeriyor?',
        answer:
          'Serbest (herhangi bir dikdörtgen), 1:1 (kare avatarlar), 4:3, 16:9 (geniş ekran ve YouTube), 3:2 (standart fotoğraf makinesi), 4:5 (Instagram dikey) ve 9:16 (Hikâyeler ve Reels) arasında geçiş yapabilirsiniz. Bir orana bastığınızda eşleşen bir çerçeve otomatik olarak ortalanır.',
      },
      {
        question: 'Bir oran etkinken 8 tutamaç nasıl davranır?',
        answer:
          'Dört köşe tutamacı ve kenar tutamaçları, seçtiğiniz oranı otomatik olarak korur ve resim kenarları içinde temiz bir şekilde sınırlanır. Genişlik ve yüksekliği yeniden bağımsız olarak ayarlamak için Serbest oranına basmanız yeterlidir.',
      },
      {
        question: 'Seçim kutusu içindeki üçte bir kılavuz çizgileri ne işe yarar?',
        answer:
          'İnce 3×3 kılavuz çizgileri, kırpma çerçevenizi üçe bölerek ufuk çizgilerini, gözleri veya ürün merkezlerini sürüklerken hassas hizalamanızı sağlar. Yalnızca ekrandaki görsel bir kılavuzdur ve kaydedilen resminizde asla görünmez.',
      },
      {
        question: 'Detaylı çerçeveleme için ne kadar yakınlaştırabilirim?',
        answer:
          'Görünüm çubuğundaki Yakınlaştır (+) ve Uzaklaştır (−) düğmeleriyle yüzde 100 ile yüzde 300 arasında, yüzde 25 adımlarla yumuşak bir şekilde yakınlaştırabilirsiniz. Yüzde 100 üzerine çıktığınızda ince kenarları kırpmak için önizleme sahnesinde kaydırma yapabilirsiniz.',
      },
      {
        question: 'Kırpma Seçenekleri bölümündeki Tümünü Seç düğmesi ne yapar?',
        answer:
          'Tümünü Seç düğmesine bastığınızda oran Serbest seçeneğine döner, kırpma kutusu resminizin genişlik ve yüksekliğinin yüzde 100 boyutunu kapsayacak şekilde genişler ve yakınlaştırma yüzde 100 olarak sıfırlanır. Hiçbir şeyi yeniden yüklemeden temiz bir başlangıç noktası elde edersiniz.',
      },
      {
        question: 'İndirmeden önce tam piksel boyutlarını görebilir miyim?',
        answer:
          'Evet, hem sahne üzerindeki Seçim okuması hem de Kırpma Seçenekleri bölümündeki Kırpma Genişliği ve Kırpma Yüksekliği kartları, sürüklerken piksel cinsinden canlı olarak güncellenir. Kaydedilen dosyanın adı da tam kırpma boyutlarını içerir (örneğin foto_1080x1080_cropped.jpg).',
      },
      {
        question: 'Kırpma, telefon ve tabletlerde dokunmatik hareketlerle çalışıyor mu?',
        answer:
          'Evet, kırpma kutusu ve tutamaçlar, hem masaüstü fareleri hem de mobil dokunmatik ekranlar için tasarlanmış, dokunmaya uygun Pointer olaylarını kullanır. Çerçeveyi sürükleyip tutamaçları iOS ve Android cihazlarda rahatça çekebilirsiniz.',
      },
      {
        question: 'Kırpma, PNG ve WebP dosyalarının şeffaf arka planlarını korur mu?',
        answer:
          'Evet, Orijinal formatı (PNG/WebP kaynakları için) korumak veya PNG ya da WebP seçmek, kırpılan bölge içindeki alfa şeffaflığını tamamen korur. JPG seçmek şeffaf pikselleri katı beyaz üzerine temiz bir şekilde düzleştirir.',
      },
      {
        question: 'PNG seçtiğimde kalite kaydırıcısı neden kayboluyor?',
        answer:
          'PNG, kayıpsız sıkıştırma kullanır, bu nedenle yüzde cinsinden kayıplı kalite ayarı uygulanmaz. Kalite kaydırıcısını yüzde 10–100 aralığında görmek için çıktı formatını Orijinal (JPEG kaynakları için), JPG veya WebP olarak değiştirin.',
      },
      {
        question: 'Birden fazla farklı resmi aynı anda kırpabilir miyim?',
        answer:
          'Bu etkileşimli kırpıcı, her konuyu tutamaçlar ve yakınlaştırmayla tek tek inceleyip çerçeveleyebilmeniz için bir seferde bir resim işler. İndirdikten sonra çöp kutusu simgesine basarak sıradaki fotoğrafınızı hemen yükleyebilirsiniz.',
      },
      {
        question: 'Kırpıcıya hangi dosya formatları yüklenebilir?',
        answer:
          'Dosya başına 20 MB boyutuna kadar JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP ve SVG resimlerini kırpabilirsiniz. Animasyonlu GIF dosyalarının ilk karesinin statik çıktı olarak kırpıldığını unutmayın.',
      },
      {
        question: 'Özel portreler veya belgeler kırpılırken bir sunucuya yükleniyor mu?',
        answer:
          'Hayır, bütün canvas çizimi ve blob kodlaması web tarayıcınızda yerel olarak çalışır. Hiçbir şey ağ üzerinden iletilmez ve harici olarak saklanmaz.',
      },
      {
        question: 'Kırpmak için doğrudan ekran görüntüsü yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsü alın ve hiç resim yüklenmemişken sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basın. Doğrudan kırpma görünümünde açılır ve çerçevelemeye hazır olur.',
      },
      {
        question: 'Dikdörtgen bir fotoğrafı profil için temiz bir kare avatara nasıl kırparım?',
        answer:
          'Hazır Oran bölümünde 1:1 düğmesine basın, beyaz kareyi yüzün veya logonun üzerine sürükleyin ve köşe tutamaçlarını memnun kalana kadar ayarlayın. Ardından tam kare bir resim kaydetmek için Kırp ve İndir düğmesine basın.',
      },
      {
        question: 'JPG veya WebP kırpıntılarını kaydederken varsayılan kalite nedir?',
        answer:
          'Kalite varsayılan olarak yüzde 92 düzeyindedir, bu nedenle kırpılan JPEG ve WebP dosyaları aşırı dosya ağırlığı olmadan keskin fotoğraf dokusunu korur. Daha küçük bir yükleme boyutu da istiyorsanız yüzde 75–85 aralığına düşürün.',
      },
      {
        question: 'Kırpma, gömülü GPS EXIF verilerini de kaldırır mı?',
        answer:
          'Evet, kırpılan bölgeyi yeni bir HTML5 Canvas üzerinden kaydetmek, orijinal JPEG dosyasının EXIF veya GPS etiketleri olmadan temiz bir bit eşlem oluşturur. Bu, kırpılmış fotoğrafları paylaşırken konumunuzu ve cihaz gizliliğinizi korumanıza yardımcı olur.',
      },
      {
        question: 'Sahne, seçim kutumun dışında kalan her şeyi neden karartıyor?',
        answer:
          'Yarı şeffaf koyu kaplama, kırpılacak bölgeleri soluklaştırır. Bu görsel kontrast, Kırp ve İndir düğmesine basmadan önce kompozisyonu ve üçte bir dengesini net bir şekilde değerlendirmenize yardımcı olur.',
      },
      {
        question: 'Bir kırpıntıyı indirdikten sonra mevcut fotoğrafı hızlıca değiştirebilir miyim?',
        answer:
          'Evet, kırpma görünümü başlığının sağ üst köşesindeki kırmızı çöp kutusu simgesine istediğiniz zaman basın. Bu, etkin fotoğrafı temizler ve sıradaki resminiz için yükleme alanına temiz bir şekilde döner.',
      },
      {
        question: 'Kırpılan kayıtlarda ücret, kayıt veya filigran var mı?',
        answer:
          'Hayır, resim kırpıcı tamamen ücretsizdir; hesap veya ödeme duvarı yoktur. Kırpılan her fotoğraf tam çözünürlükte, eklenen filigran olmadan temiz bir şekilde kaydedilir.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: 'Filigran Ekleme',
    shortDescription: 'Fotoğraflarınıza metin veya logo filigranı ekleyin, sürükleyin veya döşeme deseniyle tekrarlayın.',
    category: 'crop-edit',
    seoTitle: 'Filigran Ekleme Ücretsiz – Metin ve Logo ile Çevrimiçi',
    seoDescription:
      'Fotoğraflarınızı ücretsiz filigran ile tarayıcınızda koruyun. Özel metin veya şeffaf PNG/SVG logo ekleyin, sürükleyerek yerleştirin veya çapraz desende tekrarlayın.',
    h1: 'Ücretsiz Çevrimiçi Filigran Ekleme Aracı',
    subtitle:
      'Fotoğrafçılar, illüstratörler, Etsy satıcıları ve dijital ajanslar için tasarlanan bu gizli tarayıcı aracı, sunucuya yükleme yapmadan net bir metin veya logo filigranı ekler. Filigranınızı tuval üzerinde serbestçe sürükleyin, 9 hazır konumdan birine yerleştirin veya eğik bir deseni bütün fotoğraf boyunca tekrarlayın.',
    howToSteps: [
      {
        title: 'Temel fotoğrafınızı yükleyin',
        description:
          '20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini yükleme alanına bırakın, diskten dosya seçin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Metin Filigranı veya Logo Resmi seçin',
        description:
          'Marka metninizi yazmak, rengi seçmek ve boyutu (yüzde 2 ile yüzde 20 arasında) ayarlamak için Metin Filigranı seçeneğini ya da şeffaf PNG veya SVG logo yüklemek (genişliğin yüzde 5 ile yüzde 60 arası) için Logo Resmi seçeneğini seçin.',
      },
      {
        title: 'Opaklığı ve döndürmeyi ayarlayın',
        description:
          'Opaklığı ince yüzde 5 ile katı yüzde 100 arasında belirleyin ve döndürmeyi −180° ile +180° arasında gerçek zamanlı olarak eğin.',
      },
      {
        title: 'Serbestçe yerleştirin veya tekrarlayan döşeme desenini açın',
        description:
          'Filigranınızı önizleme resmi üzerinde doğrudan sürükleyin, 9 noktalı hazır konumlardan birine basın (sol üstten sağ alta) ya da Tekrarlayan Döşeme Deseni seçeneğini açıp aralığı (yüzde 15 ile yüzde 60 arasında) ayarlayın.',
      },
      {
        title: 'Çıktı formatını ve kaliteyi seçin',
        description:
          'Çıktı olarak Orij, JPG, PNG veya WebP seçin ve kayıplı formatlarda kaydederken kaliteyi (yüzde 10 ile yüzde 100 arasında) belirleyin.',
      },
      {
        title: 'Filigranlı resminizi indirin',
        description:
          'Kaplama katmanını resmin tam orijinal çözünürlüğünde birleştirmek ve <ad>_watermarked olarak kaydetmek için Filigranlı Resmi İndir düğmesine basın.',
      },
    ],
    features: [
      { title: 'Metin ve logo filigranları', description: 'Net özel tipografi kullanın veya markanızın şeffaf PNG/SVG logosunu yükleyin.' },
      { title: 'Sürükleyerek yerleştirme ve 9 hazır konum', description: 'Filigranınızı herhangi bir köşeye, tam merkeze yerleştirin veya tuval üzerinde serbestçe sürükleyin.' },
      { title: 'Çapraz döşeme koruması', description: 'Metin veya logonuzu ayarlanabilir aralıklarla bütün fotoğraf boyunca tekrarlayan döşeme filigranını açın.' },
      { title: 'İstemci içi gizlilik', description: 'Deneme baskılarını ve portföy fotoğraflarını orijinalleri harici sunuculara göndermeden yerel olarak filigranlayın.' },
    ],
    faqs: [
      {
        question: 'Özel metin ve kendi şeffaf logomu filigran olarak kullanabilir miyim?',
        answer:
          'Evet, kontrol panelinin üst kısmında Metin Filigranı ile Logo Resmi arasında geçiş yapın. Metin modu özel ifade, onaltılık renk ve boyut ölçeği sunarken logo modu şeffaf PNG, SVG veya diğer desteklenen formatlardaki logo dosyalarını kabul eder.',
      },
      {
        question: 'Tekrarlayan döşeme deseni, müşteri deneme baskılarını tek köşe damgasından nasıl daha iyi korur?',
        answer:
          'Tek köşe filigranları kolayca kırpılabilirken Tekrarlayan Döşeme Deseni seçeneğini açmak, metin veya logonuzu döndürülmüş olarak bütün çerçeve boyunca kademeli bir ızgara şeklinde damgalar. Aralık kaydırıcısıyla (yüzde 15 ile yüzde 60 arasında) ızgara yoğunluğunu kontrol edin.',
      },
      {
        question: 'Tekrarlayan döşeme deseni açıldığında hazır konumlar neden gizleniyor?',
        answer:
          'Hazır konumlar ve sürükleme, tek bir filigranı belirli koordinatlara yerleştirmek içindir (sol üst, üst orta, sağ üst, orta sol, merkez, orta sağ, sol alt, alt orta, sağ alt). Tek bir damgayı sürüklemek veya sabitlemek istediğinizde Tekrarlayan Döşeme Deseni seçeneğini kapatın.',
      },
      {
        question: 'Metin boyutu küçük küçük resimlerde ve devasa fotoğraf makinesi fotoğraflarında nasıl hesaplanıyor?',
        answer:
          'Yazı tipi boyutu (yüzde 2 ile yüzde 20 arasında) ve logo genişliği (yüzde 5 ile yüzde 60 arasında) resminizin genişliğine orantılı olarak ölçeklenir. Böylece filigranınız 800 piksel ürün küçük resminde de 4000 piksel yüksek çözünürlüklü deneme baskısında da aynı görünür.',
      },
      {
        question: 'Önizleme, indirme çözünürlüğümü düşürüyor mu?',
        answer:
          'Hayır, etkileşimli önizleme yalnızca ekranda rahat sürükleme için en fazla 900 piksel genişliğe sığdırılır. Filigranlı Resmi İndir düğmesine bastığınızda dışa aktarıcı, orijinal fotoğrafınızın tam piksel boyutlarında bir tuval oluşturur.',
      },
      {
        question: 'Açık arka planlarda beyaz filigran metnini okunabilir yapabilir miyim?',
        answer:
          'Evet, filigran metni harflerin arkasına otomatik olarak ince bir koyu gölge çizer. Bu, parlak gökyüzü, beyaz ürün arka planları ve açık alanlar üzerinde beyaz veya açık renkli filigranların net ve okunabilir kalmasını sağlar.',
      },
      {
        question: 'Deneme baskılarını rahatsız etmeden korumak için en iyi opaklık ve döndürme aralıkları nedir?',
        answer:
          'Köşede göze batmayan bir filigran için yüzde 40–65 opaklık ve sağ alt konumda 0° döndürme deneyin. Stok deneme baskılarının güçlü korunması için yüzde 25–40 opaklıkla Tekrarlayan Döşeme Deseni ve −25° veya −35° çapraz açı kullanın.',
      },
      {
        question: 'Tek bir filigranı tam özel bir noktaya nasıl sürüklerim?',
        answer:
          'Tekrarlayan Döşeme Deseni kapalıyken önizlemede herhangi bir noktaya doğrudan basın veya tıklayın ve işaretçiyi sürükleyin. Filigran sizi yumuşak bir şekilde izler ve asla dışarı taşmaması için kenarların içinde hafifçe sınırlanır.',
      },
      {
        question: 'Araç, temel fotoğraflar ve logolar için hangi resim formatlarını kabul ediyor?',
        answer:
          'Hem ana fotoğraf hem de logo yüklemesi, 20 MB boyutuna kadar JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP ve SVG formatlarını kabul eder. Animasyonlu GIF dosyalarının tek karelik statik bir resim olarak filigranlandığını unutmayın.',
      },
      {
        question: 'Dışa aktarma, temel resmim şeffaf bir PNG ise şeffaflığı korur mu?',
        answer:
          'Evet, Orij (PNG/WebP kaynaklarından), PNG veya WebP seçmek, çalışmanızın dışındaki tam alfa şeffaflığını korurken filigranı üzerine birleştirir. JPG seçmek şeffaf alanları katı beyazla doldurur.',
      },
      {
        question: 'Filigranlanmamış orijinal deneme baskıları hiç harici sunuculara yükleniyor mu?',
        answer:
          'Hayır, filigranlanmamış müşteri deneme baskılarını gizli tutmak çok önemlidir. Her canvas birleştirme, döşeme geçişi ve son resim dışa aktarma işlemi tamamen tarayıcınızın yerel belleğinde çalışır; ağ üzerinden yükleme yapılmaz.',
      },
      {
        question: 'Metnimi, opaklığımı veya açımı kaybetmeden yeni bir temel fotoğraf yükleyebilir miyim?',
        answer:
          'Evet, başka bir fotoğrafı filigranlamak istediğinizde önizleme başlığındaki Resmi Değiştir düğmesine basın. Mevcut metniniz, yüklenen logonuz, opaklığınız, döndürme açınız ve döşeme düzeniniz otomatik olarak korunur.',
      },
      {
        question: 'Yüklenen marka logosunu daha sonra aracı yeniden yüklemeden değiştirebilir miyim?',
        answer:
          'Evet, Logo Resmi modu seçiliyken istediğiniz zaman Logo Resmini Değiştir düğmesine basarak başka bir PNG veya SVG dosyası seçebilirsiniz. Mevcut temel fotoğrafınız hemen güncellenir.',
      },
      {
        question: 'PNG çıktısını seçtiğimde kalite neden kayboluyor?',
        answer:
          'PNG çıktıları kayıpsız bit eşlemlerdir, bu nedenle yüzde cinsinden sıkıştırma kalitesi uygulanmaz. Kalite kaydırıcısını yüzde 10 ile yüzde 100 arasında ayarlamak için Orij (JPEG kaynakları için), JPG veya WebP seçimine geçin.',
      },
      {
        question: 'Filigran eklemek için panodan fotoğraf yapıştırabilir miyim?',
        answer:
          'Evet, bir resim kopyalayın veya ekran görüntüsü alın ve yükleme alanı açıkken Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basın. Doğrudan filigran düzenleyiciye yüklenir.',
      },
      {
        question: 'Filigran, indirilen dosyada kalıcı olarak düzleştiriliyor mu?',
        answer:
          'Evet, filigran doğrudan çıktı bit eşleminin üzerine boyanır ve düzleştirilmiş bir JPG, PNG veya WebP dosyası olarak kaydedilir (<ad>_watermarked). Kaydedilen resmin içinde düzenlenebilir katman kalmaz.',
      },
      {
        question: 'Filigran metni alanını boş bırakırsam ne olur?',
        answer:
          'Filigran metni alanını tamamen temizlerseniz düzenleyici önizlemede geçici olarak "Filigran" ifadesini gösterir. Bu, yeni bir etiket yazarken görünmez boş bir seçim olmasını engeller.',
      },
      {
        question: 'Telefon veya iPad üzerinde filigranlı fotoğrafları yerleştirip kaydedebilir miyim?',
        answer:
          'Evet, önizlemede sürükleme, uyarlanabilir kaydırıcılarla birlikte dokunmatik Pointer olaylarını kullanır. Portföy fotoğraflarını veya deneme baskılarını doğrudan mobil Safari veya Chrome üzerinde kolayca filigranlayabilirsiniz.',
      },
      {
        question: 'Filigran eklemek, dışa aktarırken kameranın GPS EXIF etiketlerini kaldırır mı?',
        answer:
          'Evet, yeni bir HTML5 Canvas üzerine çizmek, kamera EXIF başlıkları olmadan temiz bir çıktı dosyası oluşturur. GPS konumunuz ve cihaz seri numarası meta verileriniz indirilen deneme baskısının dışında kalır.',
      },
      {
        question: 'CompressMyPic, kendi filigranımın yanına ekstra bir rozet ekliyor mu?',
        answer:
          'Hayır, fotoğrafınıza yalnızca yapılandırdığınız tam metin veya logo çizilir. Kaydettiklerinize asla harici bir marka, köşe rozeti veya site filigranı eklemeyiz.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Resim Döndürme ve Çevirme',
    shortDescription: 'Resimleri 90°, 180° veya özel açılarla döndürün; yatay veya dikey çevirin.',
    category: 'crop-edit',
    seoTitle: 'Resim Döndürme Ücretsiz – 90° Döndür ve Çevir',
    seoDescription:
      'Resimleri 90°, 180° veya özel açıyla döndürün, yatay veya dikey çevirin; hepsi tarayıcınızda. Fotoğrafları toplu işleyin ve ZIP olarak indirin.',
    h1: 'Resim Döndürme ve Çevirme',
    subtitle:
      'Fotoğraf makinesinden eğri çıkan fotoğrafları düzeltin, ters çıkan özçekimleri aynalayın ve eğik ufukları doğrudan tarayıcınızda döndürerek düzeltin. Fotoğrafçılar, belge tarayan öğrenciler ve içerik üreticileri için idealdir: her şey yerel olarak, tam çözünürlükte dönüşür ve toplu ZIP dışa aktarma sunar.',
    howToSteps: [
      {
        title: 'Bir veya daha fazla resim yükleyin',
        description:
          'Her biri 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyalarını yükleme alanına sürükleyip bırakın ya da doğrudan Ctrl+V ile yapıştırın.',
      },
      {
        title: '90° ve 180° hızlı döndürmeleri kullanın',
        description:
          'Kuyruktaki tüm resimleri anında döndürmek için Hızlı Döndür ve Çevir bölümünde 90° Sola Döndür, 90° Sağa Döndür veya 180° seçeneklerine tıklayın.',
      },
      {
        title: 'Yatay veya dikey aynalayın',
        description:
          'Soldan sağa yansıtmak için Yatay Çevir ya da yukarıdan aşağıya tersine çevirmek için Dikey Çevir seçeneğini açın; ikisini de herhangi bir döndürme açısıyla birleştirebilirsiniz.',
      },
      {
        title: 'Özel açıları ayarlayın (−180° ile +180° arasında)',
        description:
          'Eğri fotoğrafları tam derecelerle düzeltmek için Döndürme Açısı kaydırıcısını sürükleyin, ardından Açıyı Uygula düğmesine tıklayın (istediğinizde 0° olarak Sıfırla).',
      },
      {
        title: 'Çıktı formatını seçin',
        description:
          'Hedef iş akışınıza göre Orijinal, JPG, PNG veya WebP seçin; değişiklikler tüm resimlerinize hemen uygulanır.',
      },
      {
        title: 'Gözle karşılaştırın ve indirin',
        description:
          'Öncesi ve sonrası yönlendirmeyi incelemek için herhangi bir kartta Karşılaştır düğmesine tıklayın, ardından İndir ya da toplu işler için Tümünü İndir (ZIP) düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: '90° hızlı döndürme ve özel açı döndürme',
        description:
          'Temiz 90° adımlarla döndürün veya herhangi bir tam dereceyi ayarlayın; köşeler asla kırpılmasın diye tuval sınırları otomatik olarak hesaplanır.',
      },
      {
        title: 'Anında aynalama ve çevirme',
        description:
          'Resimleri tek tıkla yatay (aynalanmış özçekim) veya dikey (ters yansıtma) çevirin.',
      },
      {
        title: 'Toplu dönüştürme',
        description:
          'Aynı döndürme veya çevirmeyi yüklenen birkaç fotoğrafa aynı anda uygulayın ve hepsini ZIP olarak kaydedin.',
      },
      {
        title: 'En az kayıpla çıktı',
        description:
          'Kayıpsız koruma için Orijinal veya PNG formatını, ayarlanabilir kaliteyle WebP ve JPG formatlarını seçin.',
      },
    ],
    faqs: [
      {
        question: 'Bir fotoğrafı 15° gibi özel bir açıyla döndürmek köşeleri kırpar mı?',
        answer:
          'Hayır, özel açıyla döndürürken tuval, döndürülen resmin tamamını içerecek şekilde otomatik olarak genişler; köşeler asla kesilmez. Döndürme sonrasında oluşan üçgen boşluklar, seçtiğiniz arka plan rengiyle doldurulur.',
      },
      {
        question: 'Özel eğim açısının oluşturduğu üçgen köşeleri ne doldurur?',
        answer:
          'Boş üçgen alanlar, çıktı formatına göre doldurulur: PNG veya WebP çıktısında şeffaf kalır, JPG çıktısında ise seçtiğiniz mat arka plan rengiyle (varsayılan beyaz) doldurulur.',
      },
      {
        question: '90° döndürüp aynı anda yatay çevirebilir miyim?',
        answer:
          'Evet, döndürme ve çevirme birbirinden bağımsız olarak uygulanır. Önce 90° döndürüp ardından Yatay Çevir seçeneğini açabilirsiniz; sonuç her iki dönüşümün birleşimi olur.',
      },
      {
        question: '90° veya 270° döndürünce piksel genişlik ve yüksekliği neden yer değiştiriyor?',
        answer:
          '90° veya 270° döndürme, resmin yönünü değiştirdiği için genişlik ve yükseklik değerleri doğal olarak yer değiştirir. Örneğin 4000×3000 piksel bir fotoğraf, 90° döndürüldükten sonra 3000×4000 piksel olur.',
      },
      {
        question: 'Metni yansımış ters bir özçekimi nasıl düzeltirim?',
        answer:
          'Ön kamerayla çekilen ve metni ters gösteren özçekimler için Yatay Çevir seçeneğini açmanız yeterlidir. Bu, resmi soldan sağa aynalayarak metni doğru okunur hâle getirir.',
      },
      {
        question: 'Resimler yüklendikten hemen sonra neden otomatik olarak 90° dönüyor?',
        answer:
          'Bazı telefon fotoğrafları, EXIF yönlendirme etiketiyle saklanır ve tarayıcı bu etiketi otomatik olarak uygular. Resim zaten doğru yönde görünüyorsa ek bir döndürme yapmanıza gerek yoktur; yanlış yöndeyse hızlı döndürme düğmeleriyle düzeltin.',
      },
      {
        question: 'Burada hangi resim formatlarını döndürüp çevirebilirim?',
        answer:
          '20 MB boyutuna kadar JPG, PNG, WebP, HEIC/HEIF, GIF, BMP ve SVG dosyalarını döndürebilir ve çevirebilirsiniz. Animasyonlu GIF dosyalarının ilk karesinin statik olarak işlendiğini unutmayın.',
      },
      {
        question: 'Eğri telefon fotoğraflarından oluşan bir klasörü toplu olarak döndürebilir miyim?',
        answer:
          'Evet, bütün klasörü tek kuyruğa yükleyin ve aynı döndürme veya çevirmeyi hepsine birden uygulayın. Ardından düzeltilmiş tüm fotoğrafları tek bir ZIP dosyası olarak indirin.',
      },
      {
        question: 'Şeffaf bir PNG dosyasını döndürmek şeffaf arka planını korur mu?',
        answer:
          'Evet, çıktı olarak Orijinal, PNG veya WebP seçtiğinizde şeffaflık tamamen korunur. JPG çıktısı seçerseniz şeffaf alanlar mat arka plan rengiyle doldurulur.',
      },
      {
        question: 'Sayfayı yeniden yüklemeden birden fazla döndürmeyi nasıl geri alırım?',
        answer:
          'Her hızlı döndürme, mevcut duruma uygulanır; geri almak için ters yönde aynı açıyla döndürün ya da açıyı 0° olarak sıfırlayın. Yeni bir toplu iş için kuyruğu temizleyip fotoğrafları yeniden yükleyebilirsiniz.',
      },
      {
        question: 'JPEG dosyasını döndürdükten sonra dosya boyutu neden hafifçe değişebilir?',
        answer:
          'Döndürme, resmi yeniden kodladığı için JPEG sıkıştırma yeniden uygulanır. Seçtiğiniz kalite ayarına ve resim içeriğine bağlı olarak dosya birkaç kilobayt büyüyebilir veya küçülebilir; görsel kalite farkı genellikle fark edilmez.',
      },
      {
        question: 'Düzeltirken öncesi ve sonrasını kolayca incelemenin bir yolu var mı?',
        answer:
          'Evet, herhangi bir karttaki Karşılaştır düğmesi, orijinal yönlendirme ile döndürülmüş sonucu yan yana gösteren karşılaştırma penceresini açar. Böylece indirmeden önce düzeltmeyi doğrulayabilirsiniz.',
      },
      {
        question: 'Bu araç iPhone fotoğraflarının yönlendirmesini doğru şekilde işliyor mu?',
        answer:
          'Evet, iPhone fotoğraflarındaki EXIF yönlendirme etiketi yükleme sırasında okunur ve fotoğraf doğru yönde görüntülenir. Ardından uyguladığınız döndürme ve çevirmeler bu doğru yön üzerine eklenir.',
      },
      {
        question: 'Eğik taranmış bir belgeyi 1° adımlarla düzeltebilir miyim?',
        answer:
          'Evet, Döndürme Açısı kaydırıcısı tam derece hassasiyeti sunar. Belgenin kenarları yatay olana kadar 1° veya 2° gibi küçük adımlarla ayarlayın ve Açıyı Uygula düğmesine basın.',
      },
      {
        question: 'Belgelerim veya kişisel fotoğraflarım bir sunucuya yükleniyor mu?',
        answer:
          'Hayır, bütün döndürme ve çevirme işlemleri tarayıcınızda yerel olarak gerçekleşir. Dosyalarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Animasyonlu bir GIF dosyasını döndürürsem ne olur?',
        answer:
          'Canvas ilk kareyi çizer ve döndürülmüş tek karelik statik bir resim olarak kaydeder. Animasyonu koruyarak döndürmek için animasyonlu GIF düzenleme araçları gerekir.',
      },
      {
        question: 'Panodan yapıştırılan ekran görüntülerini aynalayıp döndürebilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan kuyruğa ekleyin; ardından döndürme ve çevirme kontrolleri yapıştırılan resme de uygulanır.',
      },
      {
        question: 'Dosya boyutu veya döndürme sayısı sınırı var mı?',
        answer:
          'Dosya başına 20 MB sınırı vardır; döndürme sayısı veya toplu iş başına dosya sayısı için ek bir sınır yoktur. Sınır yalnızca tarayıcınızın belleğidir.',
      },
      {
        question: 'PNG toplu işini döndürürken çıktı formatını WebP olarak değiştirebilir miyim?',
        answer:
          'Evet, çıktı formatı seçicisinden WebP seçtiğinizde bütün toplu iş WebP olarak kaydedilir. Şeffaflık korunur ve dosyalar genellikle PNG dosyalarından daha hafif olur.',
      },
      {
        question: 'Döndürme ve çevirme telefon ve dokunmatik tabletlerde iyi çalışıyor mu?',
        answer:
          'Evet, kontroller dokunmatik ekranlar için tasarlanmıştır; kaydırıcılar ve düğmeler iOS Safari ile Android Chrome üzerinde sorunsuz çalışır.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Resimden PDF Oluşturma',
    shortDescription: 'JPG, PNG, WebP ve HEIC resimlerini çok sayfalı bir PDF dosyasında birleştirin.',
    category: 'convert',
    seoTitle: 'Resimden PDF Oluşturma Ücretsiz – Fotoğrafları PDF Yapın',
    seoDescription:
      'Birden fazla fotoğrafı tek bir PDF dosyasında birleştirin. Sayfaları sıralayın, A4 veya Letter seçin ve çevrimdışı kaydedin; hepsi tarayıcınızda.',
    h1: 'Ücretsiz Çevrimiçi Resimden PDF Dönüştürücü',
    subtitle:
      'Öğrenciler, serbest çalışanlar, muhasebeciler ve kimlik veya fiş gönderen herkes için ideal olan bu gizli resimden PDF dönüştürücü, birden fazla fotoğrafı tek bir net, çok sayfalı PDF dosyasında birleştirir. Sayfaları özgürce yeniden sıralayın, A4, ABD Letter veya resim boyutuna sığdır seçeneklerinden birini seçin, kenar boşluklarını ve kaliteyi ayarlayın ve belgenizi hiçbir şeyi sunucuya yüklemeden yerel olarak oluşturun.',
    howToSteps: [
      {
        title: 'PDF dosyanıza girecek resimleri bırakın',
        description:
          'Her biri 20 MB boyutuna kadar bir veya daha fazla JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini yükleyin (veya Ctrl+V ile yapıştırın). Her resim bir sayfa olur.',
      },
      {
        title: 'Sayfaları sıralayın',
        description:
          'Kontrollerin altındaki Sayfa Sırası listesini inceleyin ve fişleri, slaytları veya taramaları hassas bir şekilde sıralamak için Yukarı, Aşağı veya Sil düğmelerini kullanın.',
      },
      {
        title: 'Sayfa boyutunu ve yönlendirmeyi seçin',
        description:
          'A4 (210 × 297 mm), ABD Letter (8,5 × 11 inç) veya Resim Boyutuna Sığdır seçeneklerinden birini seçin; yönlendirme olarak Otomatik (fotoğrafa göre), Dikey veya Yatay seçin.',
      },
      {
        title: 'Kenar boşluklarını ve resim yerleşimini ayarlayın',
        description:
          'Kenar Boşluksuz (tam taşma), Küçük Kenar Boşluğu veya Orta Kenar Boşluğu seçeneklerinden birini seçin; yerleşim olarak Sığdır (resmin tamamı) veya Kapsa (sayfayı doldur) seçin.',
      },
      {
        title: 'Dosya adını ve PDF resim kalitesini belirleyin',
        description:
          'PDF Dosya Adı alanını özelleştirin (.pdf ile biter) ve netlik ile toplam belge boyutu arasında denge kurmak için PDF Resim Kalitesi kaydırıcısını yüzde 40 ile yüzde 98 arasında ayarlayın.',
      },
      {
        title: 'PDF dosyanızı oluşturun ve indirin',
        description:
          'Dosyayı yerel olarak oluşturmak için PDF Oluştur ve İndir düğmesine tıklayın; yeşil onay bildirimi, PDF İndir düğmesine yeniden tıklamanıza da olanak tanır.',
      },
    ],
    features: [
      {
        title: 'Çok sayfalı sayfa sıralaması',
        description:
          'PDF dosyanızı oluşturmadan önce yüklenen resimleri kolayca yeniden sıralayın; fişler, taramalar ve slaytlar tam istediğiniz sırada görünür.',
      },
      {
        title: 'Esnek sayfa boyutları ve otomatik yönlendirme',
        description:
          'Standart A4 veya ABD Letter boyutunda, sayfa başına otomatik dikey veya yatay yönlendirmeyle kaydedin ya da her fotoğrafın tam oranına uymak için Resme Sığdır seçeneğini kullanın.',
      },
      {
        title: 'Ayarlanabilir kenar boşlukları ve PDF kalitesi',
        description:
          'Kenar boşluğu olarak hiç, küçük veya orta seçeneklerini belirleyin ve gömülü resim kalitesini kontrol ederek PDF dosyanızın e-posta için hafif kalmasını sağlayın.',
      },
      {
        title: 'Sunuculara sıfır yükleme',
        description:
          'Kimlikler, sözleşmeler ve hassas taranmış belgeler asla harici bir sunucuya dokunmaz: PDF dosyası tarayıcı belleğinde yerel olarak oluşturulur.',
      },
    ],
    faqs: [
      {
        question: 'Pasaport, kimlik ve vergi fişlerini PDF formatına dönüştürmek güvenli mi?',
        answer:
          'Evet, PDF dosyası tamamen tarayıcınızda oluşturulur ve belgeleriniz cihazınızdan asla çıkmaz. Dönüştürmeden sonra tarayıcı sekmesini kapatmanız, yüklenen resimlerin bellekte kalmamasını sağlar.',
      },
      {
        question: 'Dönüştürücü hangi sayfa boyutu seçeneklerini destekliyor?',
        answer:
          'A4 (210 × 297 mm), ABD Letter (8,5 × 11 inç) ve Resim Boyutuna Sığdır seçeneklerini destekler. Resim Boyutuna Sığdır seçeneğinde her sayfa, fotoğrafın kendi boyutlarına ve oranına uyarlanır.',
      },
      {
        question: 'Otomatik yönlendirme, yatay ve dikey fotoğraflar karışıkken nasıl çalışır?',
        answer:
          'Otomatik yönlendirme, her fotoğrafın kendi boyutlarına bakar: yatay fotoğraflar yatay sayfalara, dikey fotoğraflar dikey sayfalara yerleşir. Böylece hiçbir resim gereksiz yere döndürülmez veya kırpılmaz.',
      },
      {
        question: 'Yerleşimde Sığdır ile Kapsa arasındaki fark nedir?',
        answer:
          'Sığdır, resmin tamamını sayfa içinde gösterir ve kenarlarda boşluk bırakabilir. Kapsa ise sayfayı tamamen doldurur; bunun için resmin taşan kenarları kırpılır.',
      },
      {
        question: 'Resim Boyutuna Sığdır seçiliyken Yönlendirme listesi neden devre dışı kalıyor?',
        answer:
          'Resim Boyutuna Sığdır seçeneğinde her sayfanın boyutu ve yönü fotoğrafın kendi boyutlarından alındığı için ayrıca yön seçmeye gerek kalmaz; liste bu yüzden devre dışı bırakılır.',
      },
      {
        question: 'Birden fazla dosyayı aynı anda yükledikten sonra sayfaları yeniden sıralayabilir miyim?',
        answer:
          'Evet, Sayfa Sırası listesinde her sayfanın yanında Yukarı, Aşağı ve Sil düğmeleri bulunur. PDF dosyasını oluşturmadan önce sırayı istediğiniz kadar değiştirebilirsiniz.',
      },
      {
        question: 'PDF resim kalitesi kontrolü dosya boyutunu nasıl etkiler?',
        answer:
          'Kalite yüzde 40 ile yüzde 98 arasında ayarlanır. Düşük kalite, gömülü resimleri daha güçlü sıkıştırarak PDF dosyasını ciddi ölçüde küçültür; yüksek kalite ise netliği korur ama dosyayı büyütür. Belgeler için yüzde 80–90 genellikle yeterlidir.',
      },
      {
        question: 'Bir PDF dosyasında hangi resim dosyası formatlarını birleştirebilirim?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını aynı PDF içinde karıştırabilirsiniz. HEIC fotoğrafları PDF oluşturulmadan önce tarayıcıda yerel olarak çözülür.',
      },
      {
        question: 'PDF içindeki şeffaf PNG veya WebP dosyalarına ne olur?',
        answer:
          'Şeffaf alanlar PDF sayfasında beyaz arka plan üzerinde gösterilir, çünkü PDF sayfaları katı bir zemin kullanır. Şeffaflığı korumak istiyorsanız resmi önce Resme Arka Plan Ekleme aracıyla düz bir arka plan üzerine yerleştirin.',
      },
      {
        question: 'Kaydetmeden önce çıktı dosya adını özelleştirebilir miyim?',
        answer:
          'Evet, PDF Dosya Adı alanına istediğiniz adı yazın; dosya .pdf uzantısıyla kaydedilir. Boş bırakırsanız varsayılan bir ad kullanılır.',
      },
      {
        question: 'Tek bir PDF belgesinde kaç sayfa birleştirebilirim?',
        answer:
          'Sabit bir sayfa sayısı sınırı yoktur; sınır, tarayıcınızın belleğidir. Onlarca sayfalık fiş ve tarama arşivleri genellikle sorunsuz oluşturulur, ancak çok büyük fotoğraflarla yüzlerce sayfa belleği zorlayabilir.',
      },
      {
        question: 'Kenar Boşluksuz, Küçük Kenar Boşluğu ve Orta Kenar Boşluğu arasındaki fark nedir?',
        answer:
          'Kenar Boşluksuz, resmi sayfanın kenarına kadar taşır (tam taşma baskı görünümü). Küçük Kenar Boşluğu ince bir beyaz çerçeve bırakır, Orta Kenar Boşluğu ise daha geniş bir çerçeve bırakarak yazdırma payı sağlar.',
      },
      {
        question: 'Sayfa Sırası listesini inceledikten sonra daha fazla fotoğraf ekleyebilir miyim?',
        answer:
          'Evet, PDF dosyasını oluşturmadan önce istediğiniz zaman daha fazla resim yükleyebilir veya yapıştırabilirsiniz. Yeni resimler listenin sonuna eklenir ve oradan yukarı taşıyabilirsiniz.',
      },
      {
        question: 'Araç, PDF dosyasının alt kısmına logo, damga veya filigran ekliyor mu?',
        answer:
          'Hayır, oluşturulan PDF dosyası yalnızca sizin resimlerinizi içerir. Sayfalara logo, damga veya filigran eklenmez.',
      },
      {
        question: 'Kodlanıyor sayfa X / Y diyen ilerleme mesajı neden görünüyor?',
        answer:
          'PDF oluşturulurken her resim tek tek kodlanıp sayfaya yerleştirilir. İlerleme mesajı, özellikle çok sayfalı belgelerde hangi sayfanın işlendiğini gösterir.',
      },
      {
        question: 'Tarayıcının otomatik indirme penceresini kaçırırsam veya kapatırsam ne yapmalıyım?',
        answer:
          'Sorun değil: oluşturma tamamlandıktan sonra görünen yeşil onay bildirimindeki PDF İndir düğmesine tıklayarak dosyayı yeniden indirebilirsiniz.',
      },
      {
        question: 'Ekran görüntülerini doğrudan PDF oluşturucuya yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan ekleyin. Yapıştırılan her görüntü PDF içinde yeni bir sayfa olur.',
      },
      {
        question: 'PDF oluşturmak GPS EXIF etiketleri gibi meta verileri yükler mi?',
        answer:
          'Hayır, resimler Canvas üzerinden yeniden kodlanarak PDF içine yerleştirilir; bu süreçte EXIF ve GPS etiketleri aktarılmaz. Ayrıca hiçbir veri sunucuya gönderilmez.',
      },
      {
        question: 'iPhone HEIC fotoğraflarını önce JPG formatına çevirmeden doğrudan PDF yapabilir miyim?',
        answer:
          'Evet, HEIC dosyalarını doğrudan yükleyebilirsiniz. Araç, HEIC fotoğraflarını tarayıcıda yerel olarak çözer ve PDF sayfalarına yerleştirir.',
      },
      {
        question: 'Resimden PDF aracı telefonlarda ve Chromebook cihazlarda çalışıyor mu?',
        answer:
          'Evet, iOS Safari, Android Chrome ve Chromebook tarayıcılarında çalışır. PDF oluşturma tamamen cihazda gerçekleştiği için masaüstü deneyimine yakındır.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Resim Meta Veri Görüntüleyici',
    shortDescription: 'Kamera EXIF ayarlarını, GPS koordinatlarını ve PNG ile WebP verilerini inceleyin.',
    category: 'privacy',
    seoTitle: 'Resim Meta Verilerini Görme Ücretsiz – EXIF ve GPS İnceleyin',
    seoDescription:
      'EXIF etiketlerini, GPS koordinatlarını ve PNG veya WebP bloklarını bu meta veri görüntüleyiciyle inceleyin. JSON raporunu tarayıcınızda kopyalayın veya kaydedin.',
    h1: 'Resim Meta Veri ve EXIF Görüntüleyici',
    subtitle:
      'Lens ayarlarını inceleyen fotoğrafçılar, başlıkları ayıklayan geliştiriciler ve paylaşmadan önce gizliliğini kontrol eden herkes için tasarlanan resim meta veri görüntüleyicimiz, dosyanın ham baytlarını yerel olarak inceler. Tek bir piksel bile yüklemeden gizli EXIF etiketlerini, GPS koordinatlarını, zaman damgalarını ve PNG veya WebP bloklarını ortaya çıkarır.',
    howToSteps: [
      {
        title: 'İncelenecek bir resim bırakın veya seçin',
        description:
          '20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini yükleyin (veya Ctrl+V ile yapıştırın). Ham ikili başlıklar cihazınızda hemen çözümlenir.',
      },
      {
        title: 'Özeti ve gizlilik riski uyarısını inceleyin',
        description:
          'Algılanan kapsayıcı formatını, boyutları, dosya boyutunu ve hassas meta veri türlerinin bulunup bulunmadığını kontrol edin.',
      },
      {
        title: 'GPS konum uyarılarını inceleyin',
        description:
          'GPS etiketleri varsa uyarı kutusu, çözümlenen tam Enlem ve Boylam değerlerini vurgular ve Meta Verileri Sil sayfasına tek tıkla geçiş sunar.',
      },
      {
        title: 'Çıkarılan meta veri tablosunu keşfedin',
        description:
          'Gruplandırılmış girişler arasında gezinin (Kamera, EXIF, GPS, PNG/WebP blokları, Dosya Bilgisi); kehribar renkli Gizlilik Etiketi rozetleri hassas alanları işaretler.',
      },
      {
        title: 'JSON dosyasını kopyalayın, kaydedin veya etiketleri silin',
        description:
          'Raporun tamamını kopyalamak için JSON Kopyala, .json dosyası kaydetmek için JSON Dışa Aktar düğmesine tıklayın ya da özel etiketleri temizlemek için Meta Verileri Sil seçeneğini kullanın.',
      },
    ],
    features: [
      {
        title: 'Derin EXIF ve GPS algılama',
        description:
          'JPEG dosyalarında ikili TIFF IFD0, ExifIFD ve GPSIFD tablolarını, PNG eXIf bloklarını ve WebP EXIF bloklarını çözümlenerek gizli konum ve cihaz etiketlerini ortaya çıkarır.',
      },
      {
        title: 'Gizlilik riski vurgulama',
        description:
          'GPS enlem ve boylamı, kamera seri numaraları, yazar adları ve çekim zaman damgaları gibi hassas alanları otomatik olarak işaretler.',
      },
      {
        title: 'PNG ve WebP blok incelemesi',
        description:
          'PNG IHDR renk derinliğini, pHYs fiziksel yoğunluğunu, tEXt, iTXt ve tIME metin bloklarını ve WebP VP8X şeffaflık ile animasyon göstergelerini okur.',
      },
      {
        title: 'JSON raporu dışa aktarma',
        description:
          'Çözümlenen tüm meta veri alanlarını tek tıkla panoya kopyalayın veya temiz bir JSON raporu olarak indirin.',
      },
    ],
    faqs: [
      {
        question: 'Bu meta veri görüntüleyici hangi gizli bilgileri ortaya çıkarabilir?',
        answer:
          'Kamera modeli ve seri numarası, lens odak uzaklığı, enstantane ve diyafram, çekim tarihi ve saati, GPS enlem ve boylamı, yazılım adı ile PNG ve WebP bloklarındaki metin ve zaman bilgileri gibi birçok gizli alanı gösterir.',
      },
      {
        question: 'JPEG EXIF verilerinin yanı sıra PNG ve WebP teknik başlıklarını da inceliyor mu?',
        answer:
          'Evet, PNG dosyalarında IHDR, pHYs, tEXt, iTXt, tIME ve eXIf bloklarını; WebP dosyalarında VP8X, EXIF ve XMP bloklarını okur. Böylece format ne olursa olsun gömülü bilgiler görünür.',
      },
      {
        question: 'WhatsApp veya Instagram üzerinden indirilen bir fotoğraf neden EXIF etiketi göstermiyor?',
        answer:
          'WhatsApp ve Instagram, yükleme sırasında fotoğrafları yeniden kodlar ve EXIF ile GPS etiketlerinin çoğunu siler. Bu nedenle indirilen kopyalarda genellikle yalnızca temel boyut ve format bilgisi kalır.',
      },
      {
        question: 'Araç, bir fotoğrafın konumumumu açığa çıkarıp çıkarmadığını nasıl anlıyor?',
        answer:
          'GPSIFD tablosundaki GPS enlem ve boylam etiketlerini arar. Bu etiketler bulunursa uyarı kutusunda tam koordinatlar gösterilir ve bunların haritada hangi konuma karşılık geldiği anlaşılır.',
      },
      {
        question: 'Meta veri tablosundaki kehribar renkli Gizlilik Etiketi rozetleri ne anlama geliyor?',
        answer:
          'Bu rozetler, GPS koordinatları, kamera seri numarası, yazar adı ve çekim zamanı gibi paylaşıldığında gizliliğinizi riske atabilecek alanları işaretler. Bu alanları paylaşmadan önce silmeniz önerilir.',
      },
      {
        question: 'Bir resmi inceledikten hemen sonra hassas meta verileri silebilir miyim?',
        answer:
          'Evet, sonuç ekranındaki Meta Verileri Sil düğmesi sizi doğrudan temizleme aracına götürür. Aynı resim orada yeniden yüklenmeden, etiketleri kaldırılmış temiz bir kopya oluşturulur.',
      },
      {
        question: 'JSON dışa aktarma, geliştiriciler veya belgeleme için nasıl çalışır?',
        answer:
          'JSON Kopyala, çözümlenen tüm alanları yapılandırılmış bir JSON nesnesi olarak panoya kopyalar; JSON Dışa Aktar ise aynı raporu .json dosyası olarak indirir. Bu raporu hata ayıklama kayıtlarına veya belgelere ekleyebilirsiniz.',
      },
      {
        question: 'Bazı HEIC veya GIF dosyalarında tam EXIF ikili blokları neden çıkarılmıyor?',
        answer:
          'HEIC kapsayıcıları ve GIF dosyaları EXIF verilerini JPEG dosyalarından farklı yapılarda saklar. Araç, bu formatlardaki temel alanları okur ancak her üreticinin özel bloklarını tam olarak çözemeyebilir.',
      },
      {
        question: 'GPS konumlu özel fotoğraflar incelenirken hiç internete yükleniyor mu?',
        answer:
          'Hayır, bütün çözümleme tarayıcınızda yerel olarak yapılır. Fotoğrafınız ve içindeki konum bilgisi cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Meta verileri görüntülemek dosyamı değiştirir, sıkıştırır veya bir şey siler mi?',
        answer:
          'Hayır, görüntüleyici yalnızca okur. Orijinal dosyanız olduğu gibi kalır; hiçbir etiket değiştirilmez veya silinmez.',
      },
      {
        question: 'Sayfayı yenilemeden arka arkaya birden fazla dosyayı inceleyebilir miyim?',
        answer:
          'Evet, bir dosyayı inceledikten sonra yeni bir dosya bırakabilir veya yapıştırabilirsiniz; görünüm hemen yeni dosyanın meta verileriyle güncellenir.',
      },
      {
        question: 'Ctrl+V ile yapıştırılan bir ekran görüntüsü neden neredeyse hiç kamera etiketi göstermiyor?',
        answer:
          'Ekran görüntüleri kamera ile çekilmez; işletim sistemi tarafından oluşturulur ve EXIF kamera etiketleri içermez. Bu nedenle tabloda genellikle yalnızca boyut ve format bilgisi görünür.',
      },
      {
        question: 'Meta veri inceleme için kabul edilen en büyük dosya boyutu nedir?',
        answer:
          'Dosya başına 20 MB boyutuna kadar resimleri inceleyebilirsiniz. Bu sınır, tarayıcı belleğini korumak için uygulanır.',
      },
      {
        question: 'Başka bir aracın tüm EXIF etiketlerini gerçekten sildiğini nasıl doğrularım?',
        answer:
          'Temizlenmiş dosyayı bu görüntüleyiciye yeniden yükleyin. Tabloda kamera, GPS veya zaman etiketleri görünmüyorsa ve özet "0 etiket" gösteriyorsa temizleme başarılı olmuştur.',
      },
      {
        question: 'Görüntüleyici, Adobe XMP yorumlarını veya PNG metin yorumlarını algılıyor mu?',
        answer:
          'Evet, JPEG dosyalarındaki XMP bloklarını ve PNG dosyalarındaki tEXt ile iTXt metin bloklarını okur. Bu alanlarda saklanan yazar, telif hakkı veya açıklama bilgileri tabloda görünür.',
      },
      {
        question: 'PNG ekran görüntülerindeki pHYs bloğu ne anlama geliyor?',
        answer:
          'pHYs bloğu, resmin fiziksel yoğunluğunu, yani metre başına piksel sayısını saklar. Baskı ve tasarım araçları bu değeri, resmin fiziksel boyutunu hesaplamak için kullanır.',
      },
      {
        question: 'Dosya adı uzantısı bazen kapsayıcı formatından neden farklı oluyor?',
        answer:
          'Bazı dosyalar yanlış uzantıyla kaydedilir; örneğin WebP içeriği .jpg adıyla saklanabilir. Görüntüleyici, uzantıya değil dosyanın gerçek ikili başlığına bakarak formatı doğru şekilde algılar.',
      },
      {
        question: 'Bir resmin meta verilerini iPhone veya Android tarayıcısında inceleyebilir miyim?',
        answer:
          'Evet, araç mobil tarayıcılarda da çalışır. Dosya seçiciyle fotoğraf yükleyin veya galeriden bir resim seçin; çözümleme cihazda yerel olarak yapılır.',
      },
      {
        question: 'Fotoğraf makinesi fotoğrafım neden lens odak uzaklığını ve enstantane hızını gösteriyor?',
        answer:
          'Fotoğraf makineleri çekim anındaki lens, enstantane, diyafram ve ISO ayarlarını EXIF etiketlerine yazar. Görüntüleyici bu etiketleri okuyarak çekim ayarlarınızı gösterir.',
      },
      {
        question: 'Fotoğrafları sınırsız incelemek için ödeme yapmak veya kayıt olmak gerekiyor mu?',
        answer:
          'Hayır, meta veri inceleme tamamen ücretsizdir; hesap, kayıt veya günlük sınır yoktur.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Resim Meta Verilerini Silme',
    shortDescription: 'EXIF verilerini, GPS konumunu, kamera bilgilerini ve yorumları gizli bir şekilde silin.',
    category: 'privacy',
    seoTitle: 'Resim Meta Verilerini Silme Ücretsiz – EXIF ve GPS Kaldırın',
    seoDescription:
      'Resimlerinizdeki meta verileri, EXIF verileri ve GPS konumu dahil, tarayıcınızda silin. JPG ve PNG için kayıpsız temizleme ve ZIP indirme.',
    h1: 'Resim Meta Verilerini Silme',
    subtitle:
      'Pazaryeri satıcıları, gazeteciler, ebeveynler ve gizliliğine önem veren kullanıcılar için tasarlanan bu araç, fotoğrafları çevrimiçi paylaşmadan önce resim meta verilerini kalıcı olarak silmenizi sağlar. Kamera modeli EXIF verilerini, GPS koordinatlarını, çekim zaman damgalarını ve gizli metin bloklarını tarayıcınızda yerel olarak kaldırır; kayıpsız ikili silme veya canvas üzerinde temiz yeniden kodlama yapar.',
    howToSteps: [
      {
        title: 'Temizlenecek fotoğrafları bırakın',
        description:
          'Her biri 20 MB boyutuna kadar bir veya daha fazla JPG, PNG, WebP veya HEIC resmini yükleme alanına yükleyin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Otomatik temizleme ve doğrulama rozetlerini inceleyin',
        description:
          'Dosyalar yüklendikten hemen sonra temizlenir ve otomatik olarak yeniden çözümlenerek kaç meta veri etiketinin kaldırıldığı gösterilir (örneğin → 0 kalan).',
      },
      {
        title: 'Ayarları değiştiriyorsanız silme yöntemini seçin',
        description:
          'JPEG ve PNG dosyalarında hiçbir pikseli yeniden kodlamamak için Kayıpsız İkili Silme seçeneğini koruyun ya da pikselleri temiz bir şekilde düzleştirmek için Canvas Üzerinde Tam Yeniden Kodlama seçeneğini kullanın.',
      },
      {
        title: 'İsterseniz çıktı formatını ve kaliteyi ayarlayın',
        description:
          'Çıktı formatı olarak Orijinal, JPG, PNG veya WebP seçin, WebP, HEIC veya canvas yeniden kodlama için Yeniden Kodlama Kalitesi ayarını (yüzde 50–100) belirleyin ve Tümünü Yeniden Temizle düğmesine tıklayın.',
      },
      {
        title: 'Temiz dosyaları veya toplu ZIP dosyasını indirin',
        description:
          'Doğrulanmış tek tek kartlarda Temiz İndir düğmesine tıklayın ya da clean_images_no_metadata.zip dosyasını kaydetmek için Tüm Temiz Dosyaları İndir (ZIP) düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: 'JPEG ve PNG için gerçek kayıpsız silme',
        description:
          'EXIF, XMP, IPTC, yorum ve PNG tEXt ile eXIf bloklarını ikili düzeyde, hiçbir pikseli yeniden kodlamadan kaldırır.',
      },
      {
        title: 'Doğrulanmış temiz çıktı',
        description:
          'Her çıktı dosyası, hassas EXIF veya GPS etiketi kalmadığını doğrulamak için meta veri çözümleyicimizle otomatik olarak yeniden çözümlenir.',
      },
      {
        title: 'Toplu temizleme ve ZIP dışa aktarma',
        description:
          'Pazaryerlerine, forumlara veya ilanlara göndermeden önce bütün bir fotoğraf grubunu temizleyin ve hepsini birlikte ZIP olarak indirin.',
      },
      {
        title: 'Yüzde 100 cihaz içi gizlilik',
        description:
          'Gizlilik araçları gizli olmalıdır: GPS verili orijinal fotoğraflarınız tarayıcınızdan asla çıkmaz.',
      },
    ],
    faqs: [
      {
        question: 'Kayıpsız ikili silme, fotoğraf kalitesine zarar vermeden nasıl çalışır?',
        answer:
          'Araç, JPEG ve PNG dosyalarının başlık bölümlerindeki EXIF, XMP ve yorum bloklarını doğrudan bayt düzeyinde siler. Resim piksellerine hiç dokunulmadığı için kalite birebir aynı kalır ve dosya boyutu yalnızca silinen meta veri kadar küçülür.',
      },
      {
        question: 'WebP veya HEIC dosyalarını meta veri silmek için yüklersem ne olur?',
        answer:
          'WebP ve HEIC dosyaları, başlık yapıları farklı olduğu için ikili silme yerine canvas üzerinde yeniden kodlanarak temizlenir. Sonuç, meta verisiz temiz bir WebP veya PNG dosyasıdır; görsel kalite seçtiğiniz kalite ayarına bağlıdır.',
      },
      {
        question: 'GPS konumu ve EXIF etiketlerinin silindiğinden nasıl emin olurum?',
        answer:
          'Her çıktı dosyası otomatik olarak yeniden çözümlenir ve kartta kalan etiket sayısı gösterilir. "Temiz Doğrulandı (0 EXIF/GPS etiketi)" rozetini görüyorsanız dosya temizdir; ayrıca dosyayı Meta Veri Görüntüleyici ile bağımsız olarak da kontrol edebilirsiniz.',
      },
      {
        question: 'Fotoğrafları temizlerken hangi meta veri türleri silinir?',
        answer:
          'EXIF kamera ve lens bilgileri, GPS enlem ve boylamı, çekim tarihi ve saati, kamera seri numarası, yazar adı, XMP ve IPTC blokları, yorum alanları ile PNG tEXt ve eXIf metin blokları silinir.',
      },
      {
        question: 'Kayıpsız İkili Silme yerine Canvas Üzerinde Tam Yeniden Kodlama seçeneğini ne zaman kullanmalıyım?',
        answer:
          'İkili silmenin desteklemediği WebP veya HEIC dosyalarında ya da meta verileri başlık dışında gömülü alışılmadık dosyalarda tam yeniden kodlama kullanın. Yeniden kodlama pikselleri düzleştirir, bu nedenle kalite ayarını yüzde 90 ve üzerinde tutmanız önerilir.',
      },
      {
        question: 'Meta Veri Silme, hangi yükleme formatlarını kabul ediyor?',
        answer:
          'JPG, PNG, WebP ve HEIC dosyalarını kabul eder; dosya başına 20 MB sınırı vardır. GIF, BMP ve SVG dosyaları bu araçta desteklenmez.',
      },
      {
        question: 'Yeniden kodlama kalitesi kontrolü, kayıpsız ikili silme yapılan dosyaları etkiler mi?',
        answer:
          'Hayır, kayıpsız ikili silme pikselleri yeniden kodlamadığı için kalite ayarı bu dosyaları etkilemez. Kalite ayarı yalnızca canvas yeniden kodlama veya WebP/HEIC dönüştürme yapılan dosyalar için geçerlidir.',
      },
      {
        question: 'İlan fotoğraflarından oluşan bütün bir klasörün meta verilerini aynı anda silebilir miyim?',
        answer:
          'Evet, bütün klasörü tek kuyruğa yükleyin; dosyalar yüklendikçe otomatik olarak temizlenir. Ardından hepsini tek bir ZIP dosyası olarak indirin.',
      },
      {
        question: 'Temizlenmemiş, GPS koordinatlı fotoğraflarım bir yere yükleniyor mu?',
        answer:
          'Hayır, temizleme tamamen tarayıcınızda gerçekleşir. GPS verili orijinal fotoğraflarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Bir fotoğraf yüklendikten hemen sonra neden Temiz Doğrulandı (0 EXIF/GPS etiketi) gösterdi?',
        answer:
          'Bu, fotoğrafın zaten meta veri içermediği anlamına gelir; örneğin WhatsApp veya Instagram üzerinden indirilen fotoğrafların etiketleri önceden silinmiş olur. Araç dosyayı olduğu gibi temiz kabul eder.',
      },
      {
        question: 'Meta verileri silmek dosya boyutunu da küçültür mü?',
        answer:
          'Evet, biraz küçültür. EXIF, XMP ve küçük resim blokları birkaç kilobayttan yüzlerce kilobayta kadar yer kaplayabilir; bunlar silindiğinde dosya o kadar hafifler. Ana boyut tasarrufu için sıkıştırma aracını kullanın.',
      },
      {
        question: 'Kayıpsız ikili silme, PNG dosyalarının şeffaf arka planlarını korur mu?',
        answer:
          'Evet, ikili silme yalnızca meta veri bloklarını kaldırır; resim verilerine ve alfa kanalına dokunmaz. Şeffaf PNG dosyaları temizlendikten sonra da şeffaf kalır.',
      },
      {
        question: 'Yönlendirme EXIF etiketiyle döndürülmüş bir iPhone fotoğrafı olursa ne olur?',
        answer:
          'Temizleme sırasında yönlendirme etiketi kaldırılır, ancak resim pikselleri o etikete göre zaten doğru yönde görüntülenir. Temizlenen dosya, etiketsiz olarak doğru yönde kaydedilir.',
      },
      {
        question: 'Temiz bir PNG dosyasını meta veri silerken doğrudan WebP veya JPG formatına dönüştürebilir miyim?',
        answer:
          'Evet, çıktı formatı seçicisinden WebP veya JPG seçin; dosya temizlenirken aynı anda dönüştürülür. JPG seçerseniz şeffaf alanlar beyazla doldurulur.',
      },
      {
        question: 'Diskimdeki orijinal dosyalarım değiştiriliyor veya üzerine yazılıyor mu?',
        answer:
          'Hayır, araç yalnızca bellekte temiz kopyalar oluşturur ve bunları indirmenize sunar. Diskinizdeki orijinal dosyalar hiçbir şekilde değiştirilmez.',
      },
      {
        question: 'Temiz çıktıyı bağımsız bir denetleyiciyle kontrol edebilir miyim?',
        answer:
          'Evet, indirilen dosyayı Meta Veri Görüntüleyici aracımıza yeniden yükleyin veya exiftool gibi harici bir araçla açın. EXIF ve GPS alanlarının boş olduğunu göreceksiniz.',
      },
      {
        question: 'Temizleyici, pazaryerlerinde paylaşmadan önce telefonda çalışıyor mu?',
        answer:
          'Evet, mobil tarayıcılarda çalışır. Galeriden fotoğraf seçin veya dosya seçiciyle yükleyin; temizleme ve ZIP indirme cihazda yerel olarak yapılır.',
      },
      {
        question: 'Panodaki bir resmi Meta Veri Silme aracına yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basın. Yapıştırılan resim kuyruğa eklenir ve hemen temizlenir.',
      },
      {
        question: 'Temizleme otomatik başladığına göre Tümünü Yeniden Temizle düğmesi ne işe yarıyor?',
        answer:
          'Dosyalar yüklendiğinde varsayılan ayarla otomatik temizlenir. Çıktı formatını, kaliteyi veya silme yöntemini değiştirdiğinizde Tümünü Yeniden Temizle düğmesi, kuyruğu yeni ayarlarla yeniden işler.',
      },
      {
        question: 'EXIF verilerini kaldırmak için dosya sayısı sınırı veya ücret var mı?',
        answer:
          'Hayır, tamamen ücretsizdir; hesap, kayıt veya dosya sayısı sınırı yoktur. Sınır yalnızca dosya başına 20 MB ve tarayıcı belleğidir.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Favicon Oluşturucu',
    shortDescription: 'favicon.ico, Apple Touch simgesi, Android simgeleri ve bildirim dosyaları oluşturun.',
    category: 'create',
    seoTitle: 'Favicon Oluşturma Ücretsiz – .ico ve PWA Simgeleri',
    seoDescription:
      'Ücretsiz favicon paketi oluşturun: çok boyutlu favicon.ico, Apple Touch simgesi, Android simgeleri ve site.webmanifest; hepsi tarayıcınızda.',
    h1: 'Favicon Oluşturma Ücretsiz',
    subtitle:
      'Web geliştiricileri, girişim kurucuları, blog yazarları ve bağımsız içerik üreticileri için tasarlanan bu ücretsiz favicon oluşturucu, herhangi bir logo veya grafiği tarayıcılarda ve telefonlarda yayına hazır bir simge paketine dönüştürür. Simgenizi açık ve koyu sekmelerde önizleyin, dolguyu, köşe yarıçapını ve arka plan rengini ayarlayın ve hepsini yerel olarak, hiçbir şeyi sunucuya yüklemeden indirin.',
    howToSteps: [
      {
        title: 'Logonuzu veya simge grafiğinizi yükleyin',
        description:
          '20 MB boyutuna kadar PNG, SVG, JPG, WebP veya HEIC resmini sürükleyin (kare PNG veya SVG en iyi sonucu verir) ya da panodan Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Arka plan dolgusunu seçin',
        description:
          'Temiz kırpılmış simgeler için Şeffaf kutusunu işaretli bırakın ya da katı bir arka plan için işareti kaldırıp onaltılık arka plan rengi seçin.',
      },
      {
        title: 'Dolguyu ve köşe yarıçapını ayarlayın',
        description:
          'Simgiye nefes aldırmak için Dolgu kaydırıcısını yüzde 0 ile yüzde 25 arasında kaydırın ve yuvarlatılmış kareler veya dairesel rozetler için Köşe Yarıçapı kaydırıcısını yüzde 0 ile yüzde 50 arasında sürükleyin.',
      },
      {
        title: 'Tarayıcı sekmesi önizlemelerini inceleyin',
        description:
          '16×16 ölçeğindeki canlı önizlemeleri açık Sitelerim sekmesinde ve koyu mod sekmesinde kontrol edin.',
      },
      {
        title: 'Tek tek dosyaları veya tam ZIP dosyasını indirin',
        description:
          'Oluşturulan kartlardan tek tek simge boyutlarını kaydedin ya da favicon_package_compressmypic.zip dosyasını indirmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
      {
        title: 'HTML head kod parçacığını kopyalayın',
        description:
          'Koyu renkli HTML &lt;head&gt; Kod Parçacığı panelindeki HTML Kopyala düğmesine basın ve &lt;link&gt; etiketlerini doğrudan web sitenizin şablonuna yapıştırın.',
      },
    ],
    features: [
      {
        title: 'Gerçek çok boyutlu favicon.ico',
        description:
          'Yeniden adlandırılmış bir PNG değil; 16×16, 32×32 ve 48×48 net çerçeveleri birleştiren gerçek bir ikili .ico dosyası oluşturur.',
      },
      {
        title: 'Tam web ve telefon simge seti',
        description:
          '16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 ve 512×512 (Android/PWA) simgeleri ile site.webmanifest dosyası oluşturur.',
      },
      {
        title: 'Canlı tarayıcı sekmesi önizlemesi',
        description:
          'Simgenizin gerçek sekme ölçeğinde açık ve koyu arka planlarda nasıl göründüğünü indirmeden önce önizleyin.',
      },
      {
        title: 'Yapıştırmaya hazır HTML kod parçacığı',
        description:
          'Temiz &lt;link&gt; HTML etiketlerini tek tıkla &lt;head&gt; bölümünüze kopyalayın.',
      },
    ],
    faqs: [
      {
        question: 'Favicon oluşturucunun ZIP dosyası tam olarak hangi simge boyutlarını ve dosyaları içeriyor?',
        answer:
          'ZIP dosyası şunları içerir: çok çerçeveli favicon.ico (16, 32 ve 48 piksel), apple-touch-icon.png (180×180), android-chrome-192×192.png, android-chrome-512×512.png ve site.webmanifest dosyası.',
      },
      {
        question: 'Oluşturucunun favicon.ico dosyası gerçek çok çerçeveli bir ICO ikili dosyası mı, yoksa yeniden adlandırılmış bir PNG mi?',
        answer:
          'Gerçek bir ICO ikili dosyasıdır. Araç, 16×16, 32×32 ve 48×48 çerçeveleri tek bir .ico kapsayıcısında birleştirir; tarayıcılar her bağlamda uygun çerçeveyi seçer.',
      },
      {
        question: 'Favicon oluşturucuda net sekme simgeleri için en iyi kaynak boyutları ve formatı nedir?',
        answer:
          'En az 512×512 piksel boyutunda, kare bir PNG veya SVG kaynak kullanın. Vektör SVG dosyaları her boyutta net kalır; küçük ve bulanık kaynaklar 16×16 boyutta okunaksız olur.',
      },
      {
        question: 'Kare yerine dikdörtgen bir logo yüklersem ne olur?',
        answer:
          'Dikdörtgen logolar, dolgu ayarı içinde ortalanarak kare tuvale sığdırılır. Logonuzun kırpılmasını istemiyorsanız dolguyu artırın veya logoyu önce kare bir tuval üzerine yerleştirin.',
      },
      {
        question: 'Favicon oluşturucu neden açık ve koyu sekme önizlemeleri gösteriyor?',
        answer:
          'Tarayıcı sekmeleri açık ve koyu temalarda farklı görünür; koyu bir logo koyu sekmede kaybolabilir. Her iki önizleme de simgenizin her temada okunabilir olduğunu doğrulamanızı sağlar.',
      },
      {
        question: 'Favicon oluşturucuda dolgu ve köşe yarıçapı birlikte nasıl çalışır?',
        answer:
          'Dolgu, simge ile tuval kenarı arasındaki boşluğu (yüzde 0–25) belirler; köşe yarıçapı ise tuval köşelerini yuvarlar (yüzde 0–50). İkisi birlikte, dairesel rozet veya yumuşak köşeli kare görünümü oluşturur.',
      },
      {
        question: 'Favicon oluşturucunun Apple Touch simgeleri katı arka plan mı kullanmalı, şeffaf mı?',
        answer:
          'Apple, ana ekrana eklenen simgelerde şeffaf alanları siyahla doldurur; bu nedenle Apple Touch simgesi için katı bir arka plan rengi önerilir. Araç, şeffaf kaynaklarda bile arka plan rengi seçmenize izin verir.',
      },
      {
        question: 'Favicon oluşturucunun ürettiği site.webmanifest dosyası ne içeriyor?',
        answer:
          'Uygulama adı, kısa adı, simge listesi (192 ve 512 piksel), tema rengi ve görüntüleme modu gibi PWA bilgilerini içerir. Bu dosya, sitenizin telefona uygulama gibi yüklenmesini sağlar.',
      },
      {
        question: 'Oluşturulan favicon dosyalarını web sitemde nereye yüklemeliyim?',
        answer:
          'Dosyaları sitenizin kök dizinine yükleyin ve HTML kod parçacığındaki &lt;link&gt; etiketlerini sayfalarınızın &lt;head&gt; bölümüne ekleyin. favicon.ico dosyası kök dizindeyse tarayıcılar onu otomatik olarak da bulabilir.',
      },
      {
        question: 'ZIP olmadan yalnızca favicon.ico veya apple-touch-icon.png dosyasını indirebilir miyim?',
        answer:
          'Evet, oluşturulan her simge kartının kendi İndir düğmesi vardır. Yalnızca ihtiyacınız olan dosyayı tek tek indirebilirsiniz.',
      },
      {
        question: 'Favicon oluşturucuya SVG logo yüklemek net 16×16 simgeler oluşturur mu?',
        answer:
          'Evet, SVG dosyaları her boyutta net rasterleştirilir. Ancak çok ince detaylar 16×16 boyutta kaybolabilir; bu nedenle sade, kalın çizgili logolar küçük boyutlarda daha iyi görünür.',
      },
      {
        question: 'Bir iPhone HEIC fotoğrafını veya WebP grafiğini bu araçla favicon yapabilir miyim?',
        answer:
          'Evet, HEIC ve WebP dosyaları yüklenebilir ve simge boyutlarına dönüştürülür. Ancak logo için şeffaf PNG veya SVG kaynakları daha iyi sonuç verir.',
      },
      {
        question: 'Yayınlanmamış marka logoları veya uygulama simgeleri favicon oluşturucuyla harici sunuculara gönderiliyor mu?',
        answer:
          'Hayır, bütün dönüştürme tarayıcınızda yerel olarak gerçekleşir. Logonuz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Favicon oluşturucunun yeni dosyalarını yükledikten sonra eski faviconum Chrome tarayıcısında neden görünmeye devam etti?',
        answer:
          'Tarayıcılar favicon dosyalarını agresif bir şekilde önbelleğe alır. Yeni simgenin görünmesi için sert yenileme yapın (Ctrl+F5), tarayıcı önbelleğini temizleyin veya dosyaya ?v=2 gibi bir sürüm parametresi ekleyin.',
      },
      {
        question: 'Favicon oluşturucuda dolgu, köşe yarıçapı veya arka plan değişiklikleri tüm boyutları aynı anda güncelliyor mu?',
        answer:
          'Evet, bir ayarı değiştirdiğinizde 16×16 boyutundan 512×512 boyuta kadar bütün simgeler aynı ayarla yeniden oluşturulur.',
      },
      {
        question: 'Favicon oluşturucunun HTML &lt;head&gt; kod parçacığı React, Next.js veya düz HTML ile çalışıyor mu?',
        answer:
          'Evet, &lt;link&gt; etiketleri standart HTML etiketleridir. Düz HTML dosyasında &lt;head&gt; bölümüne, React veya Next.js projesinde ise ilgili head bileşenine yapıştırın.',
      },
      {
        question: 'Kare bir avatar veya rozetten dairesel bir favicon oluşturabilir miyim?',
        answer:
          'Evet, Köşe Yarıçapı kaydırıcısını yüzde 50 düzeyine getirin; kare kaynak dairesel bir simgeye dönüşür. Köşelerin şeffaf kalması için arka planı şeffaf bırakın.',
      },
      {
        question: 'Favicon oluşturucu, favicon.ico dışında neden 192×192 ve 512×512 simgelere ihtiyaç duyuyor?',
        answer:
          '192×192 ve 512×512 simgeler, Android ana ekranı ve PWA yüklemeleri için gereklidir. favicon.ico yalnızca tarayıcı sekmelerinde kullanılırken bu büyük simgeler telefon ve uygulama bağlamlarında kullanılır.',
      },
      {
        question: 'Logo grafiğini doğrudan panodan favicon oluşturucuya yapıştırabilir miyim?',
        answer:
          'Evet, logoyu kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basın. Yapıştırılan grafik hemen simge düzenleyiciye yüklenir.',
      },
      {
        question: 'Favicon paketleri oluşturmak için filigran, hesap gereksinimi veya ücret var mı?',
        answer:
          'Hayır, favicon oluşturma tamamen ücretsizdir; hesap, kayıt veya filigran yoktur. Oluşturulan tüm simgeler temiz olarak indirilir.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Resim Renk Seçici',
    shortDescription: 'Herhangi bir resimden tam piksel renklerini HEX, RGB, HSL ve CMYK olarak alın.',
    category: 'developer',
    seoTitle: 'Resim Renk Seçici – HEX, RGB ve HSL Kodları',
    seoDescription:
      'Çevrimiçi resim renk seçiciyle tam piksel renklerini alın. Canlı büyüteçle HEX, RGB, HSL ve CMYK değerlerini görün ve CSS değişkenlerini yerel olarak kaydedin.',
    h1: 'Resim Renk Seçici Ücretsiz',
    subtitle:
      'Web tasarımcıları, ön yüz geliştiricileri, marka stilistleri ve illüstratörler için oluşturulan tarayıcı içi resim renk seçicimiz, herhangi bir fotoğraf, logo veya ekran görüntüsünden tam RGBA pikselleri alır. Canlı 11×11 büyütülmüş ızgara ve HEX okumasıyla imleci gezdirin, piksellere tıklayarak örnekler kaydedin ve CSS özel özelliklerini dosyalarınızı yüklemeden kaydedin.',
    howToSteps: [
      {
        title: 'Bir resim yükleyin veya ekran görüntüsü yapıştırın',
        description:
          '20 MB boyutuna kadar JPG, PNG, WebP, HEIC, SVG, BMP veya GIF dosyası sürükleyin ya da doğrudan panodan yapıştırmak için Ctrl+V tuşlarına basın.',
      },
      {
        title: 'Piksel Denetleyicisi canlı büyüteciyle imleci gezdirin',
        description:
          'Resim tuvali üzerinde imleci hareket ettirerek tam piksel koordinatlarını (x, y) ve artı işaretli 11×11 büyütülmüş ızgarayı görün; örnek gerçek zamanlı olarak güncellenir.',
      },
      {
        title: 'Piksellere tıklayarak sabitleyin ve örnekler oluşturun',
        description:
          'Tuval üzerinde herhangi bir noktaya tıklayarak rengi Piksel Denetleyicisi bölümüne sabitleyin ve Kaydedilen Örnekler bölümüne ekleyin (24 benzersiz renge kadar).',
      },
      {
        title: 'HEX, RGB, HSL veya CMYK değerlerini kopyalayın',
        description:
          'Piksel Denetleyicisi bölümünde HEX, RGB, HSL veya CMYK değerinin yanındaki kopyala simgesine basın ya da kodu hemen kopyalamak için kaydedilen herhangi bir örnek hapına tıklayın.',
      },
      {
        title: 'Paletinizi CSS değişkenleri olarak kaydedin',
        description:
          'Kaydedilen Örnekler kartındaki CSS Dışa Aktar düğmesine basarak stil sayfanız için hazır, temiz :root özel özellikleriyle picked-colors.css dosyasını indirin.',
      },
    ],
    features: [
      {
        title: 'Canlı büyütülmüş piksel büyüteci',
        description:
          'Artı işaretli büyütülmüş ızgara, masaüstü fare ve telefon dokunmatik ekranlarında tam pikselleri hassas bir şekilde hedeflemenizi sağlar.',
      },
      {
        title: 'Anında 4 renk formatı',
        description:
          'Web geliştiricileri ve grafik tasarımcıları için HEX, RGB, HSL ve CMYK gösterimlerini aynı anda gösterir.',
      },
      {
        title: 'Kaydedilen örnek geçmişi ve dışa aktarma',
        description:
          'Resminizin çeşitli bölgelerine tıklayarak özel bir örnek listesi oluşturun ve bunu CSS özel özellikleri veya JSON olarak kopyalayın.',
      },
      {
        title: 'Yüzde 100 yerel Canvas örnekleme',
        description:
          'Piksel değerleri HTML5 Canvas getImageData yöntemiyle yerel olarak okunur: tasarımlarınız ve ekran görüntüleriniz tamamen gizli kalır.',
      },
    ],
    faqs: [
      {
        question: 'Resim renk seçici, tam çözünürlüklü dosyadan mı yoksa küçültülmüş önizlemeden mi örnek alıyor?',
        answer:
          'Tam çözünürlüklü dosyadan örnek alır. Önizleme ekrana sığdırılmış olsa bile tıkladığınız nokta, orijinal resimdeki tam piksel koordinatına eşlenir; böylece renk değeri kesindir.',
      },
      {
        question: 'Renk seçicinin 11×11 büyütülmüş büyüteci ince çizgileri veya küçük simgeleri hedeflemeye nasıl yardımcı oluyor?',
        answer:
          'Büyüteç, imlecin altındaki 11×11 piksel alanı büyütür ve ortada artı işareti gösterir. Böylece tek piksel genişliğindeki çizgileri veya küçük simge detaylarını net bir şekilde görüp tam doğru noktaya tıklayabilirsiniz.',
      },
      {
        question: 'Renk seçici, seçilen her piksel için hangi renk kodu formatlarını otomatik olarak hesaplıyor?',
        answer:
          'Her tıklanan piksel için HEX, RGB, HSL ve CMYK değerleri aynı anda hesaplanır. Böylece web, baskı ve tasarım araçları arasında dönüşüm yapmanıza gerek kalmaz.',
      },
      {
        question: 'Renk seçicinin Kaydedilen Örnekler bölümünde aynı anda kaç renk toplayabilirim?',
        answer:
          '24 benzersiz renge kadar kaydedebilirsiniz. Aynı HEX değerine yeniden tıklamak yinelenen bir örnek oluşturmaz; mevcut örnek korunur.',
      },
      {
        question: 'Renk seçicinin CSS Dışa Aktar düğmesi ne indiriyor?',
        answer:
          'Kaydedilen tüm örnekleri :root özel özellikleri olarak içeren picked-colors.css dosyasını indirir. Bu değişkenleri doğrudan stil sayfanızda kullanabilirsiniz.',
      },
      {
        question: 'Renk seçici, bir resim yüklenir yüklenmez neden hemen bir renk gösteriyor?',
        answer:
          'Araç, resim yüklendiğinde merkez pikseli otomatik olarak örnekler ve Piksel Denetleyicisi bölümünde gösterir. Böylece tıklamadan önce bile bir başlangıç rengi görürsünüz.',
      },
      {
        question: 'Arayüz renklerini almak için Ctrl+V ile ekran görüntüsü yapıştırmayı destekliyor mu?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yapıştırabilirsiniz. Yapıştırılan görüntü hemen örneklenebilir hâle gelir.',
      },
      {
        question: 'Renk seçicinin damlalık aracıyla hangi dosya türlerini inceleyebilirim?',
        answer:
          'JPG, PNG, WebP, HEIC, SVG, BMP ve GIF dosyalarını inceleyebilirsiniz; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Piksel Denetleyicisi bölümünde gösterilen CMYK değerleri ne kadar hassas?',
        answer:
          'CMYK değerleri, RGB değerlerinden standart bir dönüşüm formülüyle hesaplanır. Ekran çalışması için yeterince hassastır ancak baskı öncesi prova için matbaanızın renk profilini kullanmanız önerilir.',
      },
      {
        question: 'Şeffaf bir PNG logosunda şeffaf bir bölgeden örnek alırsam ne olur?',
        answer:
          'Şeffaf bölgeler, alfa değeri 0 olan bir piksel olarak okunur. Denetleyici, HEX değerini ve alfa bilgisini birlikte gösterir; böylece bölgenin şeffaf olduğunu anlarsınız.',
      },
      {
        question: 'Özel arayüz taslakları veya müşteri marka öğeleri renk seçiciyle bir sunucuya yükleniyor mu?',
        answer:
          'Hayır, bütün piksel okuma işlemleri tarayıcınızda yerel olarak yapılır. Tasarımlarınız ve ekran görüntüleriniz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Renk seçici, tarayıcı uzantısı olmadan Chrome, Safari ve Firefox tarayıcılarında çalışıyor mu?',
        answer:
          'Evet, yalnızca standart HTML5 Canvas kullanır ve hiçbir uzantı gerektirmez. Modern masaüstü ve mobil tarayıcılarda çalışır.',
      },
      {
        question: 'Örnek aldıktan sonra renk seçicide başka bir fotoğrafa nasıl geçerim?',
        answer:
          'Önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın. Kaydedilen örnekleriniz korunur; yeni fotoğraftan ek örnekler alabilirsiniz.',
      },
      {
        question: 'Renk değerinin yanında tam piksel koordinatlarını inceleyebilir miyim?',
        answer:
          'Evet, Piksel Denetleyicisi, örneklenen her noktanın tam (x, y) koordinatlarını ve 11×11 büyüteç ızgarasını gösterir.',
      },
      {
        question: 'JPEG fotoğrafta tıklanan bir rengin değeri, renk seçicide komşu pikseller arasında neden hafifçe değişiyor?',
        answer:
          'JPEG sıkıştırma, 8×8 piksel bloklar hâlinde çalışır ve komşu pikseller arasında küçük renk farkları oluşturur. Bu, sıkıştırma kaynaklı doğal bir durumdur; düz renk alanlarda bile hafif değişimler görülebilir.',
      },
      {
        question: 'iPad veya telefonda renklere hassas bir şekilde dokunabilir miyim?',
        answer:
          'Evet, dokunmatik desteklidir ve büyüteç parmağınızın altındaki alanı gösterir. Küçük hedefler için yakınlaştırma yaparak daha hassas seçim yapabilirsiniz.',
      },
      {
        question: 'Aynı onaltılık renge iki kez tıklarsam renk seçici kaydedilen örneklerimi değiştirir mi?',
        answer:
          'Hayır, aynı HEX değerine yeniden tıklamak yinelenen bir örnek eklemez. Mevcut örnek listede kalır ve sıra değişmez.',
      },
      {
        question: 'Web sitelerini şekillendirirken HEX ve RGB ile birlikte HSL neden kullanılmalı?',
        answer:
          'HSL, ton, doygunluk ve açıklık değerlerini ayrı ayrı ayarlamanıza izin verir. Bu, bir rengin daha açık veya daha koyu tonlarını oluşturmayı HEX kodlarını elle hesaplamaktan çok daha kolay hâle getirir.',
      },
      {
        question: 'Renk seçiciye yüklenen bir resim en fazla kaç MB olabilir?',
        answer:
          'Dosya başına 20 MB boyutuna kadar resimleri yükleyebilirsiniz.',
      },
      {
        question: 'Renk seçicide kaç renk alabileceğim konusunda ücret, hesap veya sınır var mı?',
        answer:
          'Hayır, tamamen ücretsizdir; hesap veya günlük sınır yoktur. Tek sınır, 24 benzersiz kaydedilen örnek kotasıdır.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Resim Boyut Denetleyici',
    shortDescription: 'Genişlik, yükseklik, oran, megapiksel ve baskı boyutunu kontrol edin.',
    category: 'developer',
    seoTitle: 'Resim Boyut Denetleyici – Piksel ve Megapiksel Öğrenin',
    seoDescription:
      'Genişlik, yükseklik, oran, megapiksel, alfa ve 300 DPI baskı boyutunu toplu olarak inceleyin; ücretsiz çevrimiçi resim boyut denetleyici.',
    h1: 'Resim Boyut ve Oran Denetleyici',
    subtitle:
      'E-ticaret yöneticileri, reklam alıcıları, arayüz geliştiricileri ve baskı tasarımcıları için ideal olan resim boyut denetleyicimiz, piksel genişliğini ve yüksekliğini, oranı, megapikseli ve 300 DPI baskı boyutunu saniyeler içinde okur. Bütün öğe gruplarını bırakın, minimum piksel gereksinimlerini doğrulayın ve temiz CSV veya JSON raporlarını cihazınızda gizli bir şekilde kaydedin.',
    howToSteps: [
      {
        title: 'Bir veya daha fazla resmi sürükleyin ya da seçin',
        description:
          'Her biri 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, SVG, BMP, GIF veya AVIF dosyalarını yükleme alanına yükleyin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Piksel boyutlarını ve oranları inceleyin',
        description:
          'Tabloda tam genişlik × yükseklik (piksel), megapiksel, yönlendirme (yatay, dikey, kare) ile sadeleştirilmiş ve ondalık oranı inceleyin.',
      },
      {
        title: 'Dosya ağırlığını, formatı ve alfa kanalını kontrol edin',
        description:
          'Gerçek kapsayıcı türlerini, bayt miktarını ve şeffaf alfa piksellerinin olup olmadığını Boyut / Format sütunundaki değerlerden öğrenin.',
      },
      {
        title: '300 DPI baskı boyutunu kontrol edin',
        description:
          'Baskı laboratuvarlarına yüklemeden önce inç cinsinden net en büyük fiziksel boyutları (genişlik × yükseklik) görmek için 300 DPI Baskı sütununa bakın.',
      },
      {
        title: 'Minimum özellik denetimlerini çalıştırın ve CSV veya JSON olarak kaydedin',
        description:
          'İsteğe bağlı Minimum Genişlik (piksel) ve Minimum Yükseklik (piksel) kurallarını yazarak Geçti veya Minimum Altında işaretlerini alın, ardından CSV Dışa Aktar veya JSON Dışa Aktar düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Toplu boyut incelemesi',
        description:
          'Onlarca öğeyi aynı anda kontrol edin: mağaza ürün resimlerini, reklam kreatiflerini veya uygulama ekran görüntülerini doğrulamak için idealdir.',
      },
      {
        title: 'Tam ve yaygın oranlar',
        description:
          'Hem matematiksel olarak sadeleştirilmiş oranı hem de 16:9, 4:3, 1:1 ve 4:5 gibi yaygın standartlarla eşleşmeleri hesaplar.',
      },
      {
        title: 'Özelleştirilebilir minimum ve maksimum doğrulayıcı',
        description:
          'İsteğe bağlı minimum veya maksimum genişlik ve yükseklik kuralları belirleyerek belirtiminize uyan veya uymayan resimleri anında vurgulayın.',
      },
      {
        title: 'CSV ve JSON dışa aktarma',
        description:
          'İncelenen tüm resim boyutlarının temiz bir CSV elektronik tablosunu veya JSON özetini indirin.',
      },
    ],
    faqs: [
      {
        question: 'Resim boyut denetleyici, resimlerimi değiştirir veya yeniden kaydeder mi?',
        answer:
          'Hayır, araç yalnızca okur. Resimlerinizin başlıklarını ve boyutlarını inceler; dosyaların kendisini değiştirmez, yeniden kaydetmez veya yüklemez.',
      },
      {
        question: 'Boyut denetleyiciyle karışık formatlardan oluşan toplu işleri inceleyebilir miyim?',
        answer:
          'Evet, JPG, PNG, WebP, HEIC, SVG, BMP, GIF ve AVIF dosyalarını aynı toplu işte karıştırabilirsiniz. Her dosya kendi satırında, kendi formatı ve boyutlarıyla listelenir.',
      },
      {
        question: 'Boyut denetleyicide Minimum Genişlik ve Minimum Yükseklik doğrulayıcı nasıl çalışır?',
        answer:
          'Minimum genişlik veya yükseklik değeri yazdığınızda tablo, her resmi bu kuralla karşılaştırır ve Geçti ya da Minimum Altında rozeti gösterir. Böylece pazaryeri veya baskı belirtimlerine uymayan resimleri hemen görürsünüz.',
      },
      {
        question: '16:9 veya 4:5 gibi yaygın oranlar, boyut denetleyicide tam oranlarla nasıl karşılaştırılıyor?',
        answer:
          'Araç her resim için hem matematiksel olarak sadeleştirilmiş tam oranı (örneğin 1920:1080 → 16:9) hem de ondalık değeri gösterir. Oran yaygın bir standarda yakınsa eşleşme olarak işaretlenir.',
      },
      {
        question: 'Boyut denetleyicide 300 DPI Baskı boyutu piksellerden nasıl hesaplanıyor?',
        answer:
          'Fiziksel boyut, piksel genişliği ve yüksekliğinin 300 değerine bölünmesiyle bulunur. Örneğin 3000×2400 piksel bir resim, 300 DPI baskıda 10×8 inç boyutunda net basılır.',
      },
      {
        question: 'CSV Dışa Aktar düğmesine bastığımda hangi sütunlar ekleniyor?',
        answer:
          'CSV dosyası dosya adı, format, genişlik, yükseklik, oran, megapiksel, dosya boyutu, yönlendirme, alfa bilgisi ve 300 DPI baskı boyutu sütunlarını içerir.',
      },
      {
        question: 'JSON Dışa Aktar, CSV ile karşılaştırıldığında ne kaydediyor?',
        answer:
          'JSON dosyası aynı alanları yapılandırılmış bir nesne dizisi olarak kaydeder. CSV elektronik tablo çalışması için, JSON ise yazılım ve otomasyon araçlarına aktarmak için uygundur.',
      },
      {
        question: 'Boyut denetleyici, bir PNG veya WebP dosyasının gerçekten alfa şeffaflığına sahip olup olmadığını nasıl anlıyor?',
        answer:
          'Araç, resim verilerini okuyarak alfa kanalında şeffaf piksel olup olmadığını kontrol eder. Yalnızca başlığa bakmaz; gerçekten şeffaf piksel içeren dosyalar alfa destekli olarak işaretlenir.',
      },
      {
        question: 'Mevcut bir boyut tablosuna ek klasörler veya toplu işler ekleyebilir miyim?',
        answer:
          'Evet, tablo doluyken bile yeni dosyalar bırakabilir veya yapıştırabilirsiniz. Yeni resimler tablonun sonuna eklenir ve mevcut satırlar korunur.',
      },
      {
        question: 'iPhone fotoğrafları boyut denetleyicide Yatay veya Dikey değerini neden doğru gösteriyor?',
        answer:
          'Araç, EXIF yönlendirme etiketini okuyarak fotoğrafın gerçek görüntülenme yönünü belirler. Böylece dikey çekilen bir fotoğraf, dosya boyutları yatay görünse bile doğru şekilde Dikey olarak listelenir.',
      },
      {
        question: 'Resimlerimin megapiksel (MP) değeri boyut denetleyicide nasıl hesaplanıyor?',
        answer:
          'Megapiksel, genişlik ile yüksekliğin çarpılıp milyona bölünmesiyle bulunur. Örneğin 4000×3000 piksel bir fotoğraf 12 megapikseldir.',
      },
      {
        question: 'Boyut denetleyiciye .jpg adlı bir WebP gibi yanıltıcı uzantılı bir dosya yüklersem ne olur?',
        answer:
          'Araç, uzantıya değil dosyanın gerçek ikili başlığına bakarak formatı algılar. Yanlış adlandırılmış bir dosya bile doğru formatıyla listelenir.',
      },
      {
        question: 'SVG grafiklerin iç boyutlarını bu boyut denetleyiciyle kontrol edebilir miyim?',
        answer:
          'Evet, SVG dosyalarının viewBox veya width/height değerleri okunarak iç boyutları gösterilir. Vektör dosyalarının piksel boyutu, rasterleştirme boyutuna göre değişebileceği için bu değer tasarım boyutudur.',
      },
      {
        question: 'Yayınlanmamış reklam kreatifleri veya gizli ürün fotoğrafları boyut denetleyiciyle çevrimiçi gönderiliyor mu?',
        answer:
          'Hayır, bütün inceleme tarayıcınızda yerel olarak yapılır. Dosyalarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Boyut denetleyici, Ctrl+V ile yapıştırılan resimleri kabul ediyor mu?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan ekleyebilirsiniz. Yapıştırılan resim hemen tabloya eklenir.',
      },
      {
        question: 'Amazon, Etsy veya Shopify ürün resmim boyut denetleyicide Minimum Genişlik denetimini neden geçemeyebilir?',
        answer:
          'Pazaryerleri genellikle en az 1000–2000 piksel genişlik ister. Küçük resimler veya sıkıştırılmış küçük resim dosyaları bu eşiğin altında kalır; resmi daha büyük bir kaynaktan yeniden yüklemeniz gerekir.',
      },
      {
        question: 'Büyük bir toplu bırakmada okunamayan bir dosya karışırsa ne olur?',
        answer:
          'Okunamayan dosya, hata rozetiyle kendi satırında işaretlenir; tablodaki diğer dosyalar etkilenmez. Geçerli dosyalar normal şekilde incelenmeye devam eder.',
      },
      {
        question: 'Bu boyut denetleyiciyi telefon veya tablette kullanabilir miyim?',
        answer:
          'Evet, mobil tarayıcılarda çalışır. Dosya seçiciyle resim yükleyin; tablo ve dışa aktarma düğmeleri dokunmatik ekranlarda kullanılabilir.',
      },
      {
        question: 'Minimum özellik denetimini geçemeyen veya yanlış oranlı bir resmi boyut denetleyiciye göre nasıl düzeltirim?',
        answer:
          'Resmi Resim Boyutlandırıcı ile gerekli minimum boyutlara getirin veya Resim Kırpıcı ile doğru orana kırpın. Ardından düzeltilen dosyayı denetleyiciye yeniden yükleyerek doğrulayın.',
      },
      {
        question: 'Toplu boyut raporları için günlük sınır veya ücret var mı?',
        answer:
          'Hayır, tamamen ücretsizdir; hesap, kayıt veya günlük rapor sınırı yoktur.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Resim Bulanıklaştırma ve Pikselleştirme',
    shortDescription: 'Fırçayla hassas bölgeleri veya bütün fotoğrafı bulanıklaştırın ya da pikselleştirin.',
    category: 'crop-edit',
    seoTitle: 'Resim Bulanıklaştırma Ücretsiz – Sansür ve Pikselleştirme',
    seoDescription:
      'Resim bölgelerini çevrimiçi bulanıklaştırın veya pikselleştirin. Yumuşak sansür fırçası veya tam çerçeve moduyla yüzleri, plakaları ve özel metni tarayıcınızda gizleyin.',
    h1: 'Resim Bulanıklaştırma ve Pikselleştirme',
    subtitle:
      'Gazeteciler, öğretmenler, çevrimiçi pazar satıcıları ve gizliliğine önem veren günlük kullanıcılar için hazırlanan bu tarayıcı aracı, paylaşmadan önce resim detaylarını kalıcı olarak bulanıklaştırmanızı veya pikselleştirmenizi sağlar. Etkileşimli sansür fırçasıyla yüzleri, plakaları veya adresleri seçerek boyayın ya da yumuşak bulanıklık ve pikselleştirmeyi bütün çerçeveye yerel olarak uygulayın.',
    howToSteps: [
      {
        title: 'Bir fotoğraf veya ekran görüntüsü yükleyin',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini yükleme alanına sürükleyin ya da doğrudan Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Fırça Alanı veya Tam Resim seçin',
        description:
          'Yüzler ve numaralar gibi yalnızca boyanan bölgeleri sansürlemek için Fırça Alanı seçeneğini koruyun ya da bütün çerçeveyi bulanıklaştırmak veya pikselleştirmek için Tam Resim seçeneğine geçin.',
      },
      {
        title: 'Piksel Mozaik veya Yumuşak Bulanıklık seçin',
        description:
          'İstediğiniz stile göre bloklu Piksel Mozaik veya Yumuşak Bulanıklık arasında geçiş yapın.',
      },
      {
        title: 'Yoğunluğu ve fırça boyutunu ayarlayın',
        description:
          'Mozaik Blok Boyutu (4–60 piksel) veya Bulanıklık Yarıçapı (2–50 piksel) değerini ayarlayın; seçerek boyarken Fırça Boyutu ayarını (yüzde 2–20) ince ayarlayın.',
      },
      {
        title: 'Hassas detayların üzerine boyayın',
        description:
          'Önizleme tuvalinde yüzlerin, plakaların veya özel metnin üzerine doğrudan tıklayıp sürükleyin; gerektiğinde Geri Al veya Fırçayı Sıfırla düğmesine basın.',
      },
      {
        title: 'Formatı seçin ve indirin',
        description:
          'Çıktı olarak Orij, JPG, PNG veya WebP seçin, kayıplı formatlar için Kalite ayarını (yüzde 10–100) yapın ve yerel olarak kaydetmek için Resmi İndir düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Etkileşimli sansür fırçası',
        description:
          'Ayarlanabilir fırça boyutuyla yüzleri, adresleri veya plakaları boyayın; fırça darbelerini geri alma desteğiyle.',
      },
      {
        title: 'Tam resim bulanıklığı ve mozaiği',
        description:
          'Arka planları hızla bulanıklaştırın veya bütün çerçevede retro piksel sanatı mozaik efektleri oluşturun.',
      },
      {
        title: 'Sunucuya sıfır yükleme',
        description:
          'Hassas detayları gizlediğiniz için hiçbir şey cihazınızdan asla çıkmaz.',
      },
      {
        title: 'Tam çözünürlüklü dışa aktarma',
        description:
          'Fırça koordinatları, net dışa aktarmalar için orijinal resmin tam piksellerine hassas bir şekilde eşlenir.',
      },
    ],
    faqs: [
      {
        question: 'Bu bulanıklaştırma aracıyla bulanıklaştırılan veya pikselleştirilen bölgeler indirilen dosyadan geri alınabilir mi?',
        answer:
          'Hayır, sansür kalıcıdır. Bulanıklık ve mozaik, piksellerin üzerine işlenir ve kaydedilen dosyada orijinal detay kalmaz. Bu nedenle indirmeden önce önizlemeyi dikkatle kontrol edin.',
      },
      {
        question: 'Metni gizlemek için piksel mozaik neden hafif yumuşak bulanıklıktan genellikle daha güvenlidir?',
        answer:
          'Hafif bulanıklık, keskin kenarları koruyabilir ve gelişmiş araçlarla kısmen geri alınabilir. Piksel mozaik ise metni büyük bloklara böler; blok boyutu yeterince büyükse harfler tanınmaz hâle gelir.',
      },
      {
        question: 'Bulanıklık Fırça Alanı modu, darbelerimin dışındaki net bölgeleri dokunmadan nasıl koruyor?',
        answer:
          'Fırça yalnızca boyadığınız koordinatlara uygulanır; diğer pikseller olduğu gibi kalır. Önizlemede boyanmamış alanlar orijinal netliğiyle görünür.',
      },
      {
        question: 'Aynı resimde pikselli ve bulanık darbeleri karıştırabilir miyim?',
        answer:
          'Hayır, her oturumda tek bir efekt türü seçilir: Piksel Mozaik veya Yumuşak Bulanıklık. Farklı bölgelerde farklı efekt istiyorsanız resmi bir kez kaydedip yeniden yükleyerek ikinci efekti uygulayın.',
      },
      {
        question: 'Ölçeklenmiş önizlemede boyamak, bulanıklaştırma aracında devasa fotoğraf makinesi fotoğraflarına hassas bir şekilde eşleniyor mu?',
        answer:
          'Evet, fırça koordinatları önizleme ölçeğinden orijinal tam çözünürlüğe orantılı olarak eşlenir. Küçük ekranda boyadığınız bölge, indirilen dosyada aynı göreli konumda bulanıklaştırılır.',
      },
      {
        question: 'Bir yüz veya adres üzerine boyarken yaptığım hatayı nasıl düzeltirim?',
        answer:
          'Son darbeyi kaldırmak için Geri Al düğmesine basın veya bütün darbeleri temizlemek için Fırçayı Sıfırla düğmesine basın. Ardından doğru bölgeyi yeniden boyayın.',
      },
      {
        question: 'Hedef Alanı Tam Resim olarak değiştirmek ne yapar?',
        answer:
          'Efekt bütün çerçeveye uygulanır ve fırça kontrolleri gizlenir. Bu mod, arka planı tamamen gizlemek veya bütün fotoğrafa mozaik görünümü vermek için kullanılır.',
      },
      {
        question: 'Yüzleri, kimlikleri veya özel adresleri olan sansürlenmemiş fotoğraflar bulanıklaştırma aracıyla bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır, bütün boyama ve dışa aktarma işlemleri tarayıcınızda yerel olarak yapılır. Sansürlenmemiş fotoğraflarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Bulanıklaştırma aracında küçük ekran görüntüleri için hangi fırça ve mozaik blok boyutunu kullanmalıyım?',
        answer:
          'Küçük ekran görüntülerinde 8–16 piksel mozaik bloğu ve yüzde 4–8 fırça boyutu genellikle yeterlidir. Metin tamamen okunamaz olana kadar blok boyutunu artırın.',
      },
      {
        question: 'Bulanıklaştırma aracı, pikselleştirme veya bulanıklaştırma için hangi dosya türlerini kabul ediyor?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını kabul eder; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Ctrl+V ile yapıştırılan bir ekran görüntüsünün hassas bölümlerini sansürleyebilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyin; ardından fırçayla hassas bölgeleri boyayın.',
      },
      {
        question: 'Bulanıklaştırma aracının dışa aktarması PNG veya WebP grafiklerin şeffaf arka planlarını korur mu?',
        answer:
          'Evet, çıktı olarak Orijinal, PNG veya WebP seçtiğinizde şeffaflık korunur. JPG seçerseniz şeffaf alanlar beyazla doldurulur.',
      },
      {
        question: 'Geri Al ve Fırçayı Sıfırla düğmeleri bulanıklaştırma aracında neden yalnızca Fırça Alanı modunda görünüyor?',
        answer:
          'Bu düğmeler fırça darbelerini yönetir; Tam Resim modunda darbe olmadığı için gizlenirler. Tam Resim modunda efekti kaldırmak için modu değiştirmeniz veya resmi yeniden yüklemeniz yeterlidir.',
      },
      {
        question: 'Bulanıklaştırma aracında sansür darbeleri boyamak için telefon veya tablette parmağımı ya da Apple Pencil kalemimi kullanabilir miyim?',
        answer:
          'Evet, fırça dokunmatik Pointer olaylarını destekler. Parmağınızla veya kalemle iOS ve Android cihazlarda hassas bir şekilde boyayabilirsiniz.',
      },
      {
        question: 'Bulanıklaştırma aracıyla sansürleyip kaydetmek kameranın GPS EXIF etiketlerini de kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Bulanıklaştırma aracında PNG çıktısı seçiliyken Kalite neden gizleniyor?',
        answer:
          'PNG kayıpsız bir formattır; yüzde cinsinden kalite ayarı uygulanmaz. Kalite kaydırıcısını görmek için JPG veya WebP çıktısı seçin.',
      },
      {
        question: 'Bulanıklaştırılmış veya pikselleştirilmiş fotoğrafımı bu araçla kaydederken hangi dosya adı kullanılıyor?',
        answer:
          'Dosya, orijinal adın sonuna _blurred eki eklenerek kaydedilir; örneğin foto_blurred.jpg. Formatı değiştirdiyseniz uzantı da buna göre güncellenir.',
      },
      {
        question: 'Bulanıklaştırma aracıyla boyamadan bir portrenin arka planını temiz bir şekilde bulanıklaştırmak istiyorsam ne yapmalıyım?',
        answer:
          'Bu araçta seçici arka plan bulanıklığı yoktur; Tam Resim modu bütün fotoğrafı bulanıklaştırır. Yalnızca arka planı bulanıklaştırmak için önce konuyu kırpın veya arka plan değiştirme araçlarını kullanın.',
      },
      {
        question: 'Bulanıklaştırma aracında yumuşak bulanıklık ve piksel mozaik ne kadar güçlü olabilir?',
        answer:
          'Yumuşak bulanıklık yarıçapı 2–50 piksel, mozaik blok boyutu 4–60 piksel arasında ayarlanabilir. En yüksek değerlerde bile fotoğrafın genel şekli seçilebilir; metin için büyük blok boyutları kullanın.',
      },
      {
        question: 'Bulanıklaştırma aracında fotoğrafları sansürlemek için filigran, günlük sınır veya kayıt var mı?',
        answer:
          'Hayır, tamamen ücretsizdir; hesap, kayıt, günlük sınır veya filigran yoktur.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Resme Yazı Ekleme',
    shortDescription: 'Yazı tipi, kontur ve gölge stilleriyle sürüklenebilir metin katmanları ekleyin.',
    category: 'crop-edit',
    seoTitle: 'Resme Yazı Ekleme Ücretsiz – Yazı Tipleri ve Katmanlar',
    seoDescription:
      'Sürüklenebilir katmanlar, 5 yazı tipi, kalın/italik, konturlar, gölgeler ve döndürme ile resimlere ücretsiz yazı ekleyin; filigran yok.',
    h1: 'Resme Yazı Ekleme',
    subtitle:
      'İçerik üreticileri, sosyal medya yöneticileri, öğretmenler ve meme oluşturucular için hazırlanan bu gizli araç, ağır tasarım uygulamaları olmadan resim dosyalarına yazı eklemeyi kolaylaştırır. Birden fazla başlık veya çok satırlı altyazı katmanlayın, yazı tiplerini, konturları, gölgeleri ve döndürmeyi özelleştirin ve filigransız, temiz bir şekilde kaydedin.',
    howToSteps: [
      {
        title: 'Bir resim yükleyin veya panodan yapıştırın',
        description:
          '20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG fotoğrafı yükleme alanına sürükleyin ya da doğrudan Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Çok satırlı metin yazın ve katmanları yönetin',
        description:
          'Metninizi Metin İçeriği alanında düzenleyin (Enter satır sonu ekler) ve Ekle düğmesine basarak Metin 1, Metin 2 gibi ek katmanlar oluşturun ya da istemediklerinizi silin.',
      },
      {
        title: 'Yazı tipi, dolgu rengi, Kalın ve İtalik seçin',
        description:
          'Inter, Impact, Georgia, Courier veya Trebuchet yazı tiplerinden birini seçin, metin dolgu rengi seçicinizi ayarlayın ve Kalın veya İtalik stilini açın.',
      },
      {
        title: 'Boyut, Döndürme, Kontur ve Gölge ayarlayın',
        description:
          'Boyut (yüzde 2–22) ve Döndürme (−180° ile +180°) kaydırıcılarını sürükleyin, ardından Metin Konturu rengini ve kalınlığını (1–10) ile isteğe bağlı Paralel Gölge seçeneğini özelleştirin.',
      },
      {
        title: 'Katmanları doğrudan resmin üzerine sürükleyin',
        description:
          'Başlıkları, meme altyazılarını veya ekran görüntüsü açıklamalarını hassas bir şekilde yerleştirmek için herhangi bir metin bloğuna tıklayıp önizleme tuvali üzerinde sürükleyin.',
      },
      {
        title: 'Çıktı formatını seçin ve indirin',
        description:
          'Çıktı olarak Orij, JPG, PNG veya WebP seçin, kayıplı dosyalar için Kalite ayarını (yüzde 10–100) yapın ve Yazılı Resmi İndir düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Birden fazla sürüklenebilir metin katmanı',
        description:
          'Başlıklar, altyazılar ve açıklamalar ekleyin; her birini tuval üzerinde bağımsız olarak sürükleyin.',
      },
      {
        title: 'Zengin tipografi kontrolleri',
        description:
          'Yazı tipleri, boyutlar, kalın/italik ağırlıklar, renkler, kontur çizgileri ve paralel gölgeler arasından seçim yapın.',
      },
      {
        title: 'Açı ve hizalama kontrolü',
        description:
          'Herhangi bir metin katmanını −180° ile +180° arasında yumuşak bir şekilde döndürün.',
      },
      {
        title: 'Tam çözünürlüklü temiz dışa aktarma',
        description:
          'Eklenen filigran yok: doğrudan JPG, PNG veya WebP olarak indirin.',
      },
    ],
    faqs: [
      {
        question: 'Resme yazı ekleme aracıyla üstte ve altta ayrı başlıklar veya meme altyazıları ekleyebilir miyim?',
        answer:
          'Evet, Ekle düğmesiyle birden fazla metin katmanı oluşturabilirsiniz. Bir katmanı üst başlık, diğerini alt altyazı olarak yerleştirin; her katman bağımsız olarak sürüklenir ve biçimlendirilir.',
      },
      {
        question: 'Resme yazı ekleme düzenleyicisi hangi yazı tiplerini içeriyor?',
        answer:
          'Inter, Impact, Georgia, Courier ve Trebuchet yazı tiplerini içerir. Impact, klasik meme görünümü için idealdir; Inter ise temiz modern başlıklar için uygundur.',
      },
      {
        question: 'Resme yazı eklerken koyu kalın konturlu klasik beyaz meme metni nasıl oluştururum?',
        answer:
          'Yazı tipi olarak Impact seçin, dolgu rengini beyaz yapın, Metin Konturu rengini siyah seçip kalınlığı 6–8 aralığına ayarlayın. Metni üstte veya altta ortalayarak klasik meme görünümünü elde edersiniz.',
      },
      {
        question: 'Metin İçeriği alanında Enter tuşuna basmak resme yazı eklerken çok satırlı altyazı oluşturur mu?',
        answer:
          'Evet, Enter tuşu metin katmanına satır sonu ekler. Böylece tek bir katmanda birden fazla satır yazabilir ve satırlar birlikte hareket eder.',
      },
      {
        question: 'Fotoğrafta birden fazla katman varken belirli bir katmanı nasıl seçer ve taşırım?',
        answer:
          'Taşımak istediğiniz metin bloğuna doğrudan tıklayın; o katman etkin hâle gelir. Ardından sürükleyerek taşıyın. Katman listesinden de bir katman seçebilirsiniz.',
      },
      {
        question: 'Resme yazı eklerken metni özel açılarla çapraz eğebilir miyim?',
        answer:
          'Evet, Döndürme kaydırıcısı −180° ile +180° arasında ayarlanır. Metni çapraz yerleştirmek için −15° veya 20° gibi değerler deneyin.',
      },
      {
        question: 'Metin boyutu (yüzde 2–22), resme yazı eklerken küçük ve 4K fotoğraflarda nasıl ölçekleniyor?',
        answer:
          'Boyut, resim genişliğinin yüzdesi olarak hesaplanır. Bu sayede aynı yüzde değeri küçük bir küçük resimde de 4K fotoğrafta da orantılı görünür.',
      },
      {
        question: 'Bu araçla altyazı eklerken ekran görüntüleri veya aile fotoğrafları bir yere yükleniyor mu?',
        answer:
          'Hayır, bütün düzenleme tarayıcınızda yerel olarak yapılır. Fotoğraflarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Metin eklenmiş bir resmi kaydedersem şeffaf PNG çıkartmalarına ne olur?',
        answer:
          'Çıktı olarak PNG veya WebP seçtiğinizde şeffaflık korunur ve metin şeffaf alanların üzerine işlenir. JPG seçerseniz şeffaf alanlar beyazla doldurulur.',
      },
      {
        question: 'Bütün resmi silmeden ek bir metin katmanını resme yazı eklerken nasıl silerim?',
        answer:
          'Katman listesinden silmek istediğiniz katmanın yanındaki sil simgesine basın. Yalnızca o katman kaldırılır; resim ve diğer katmanlar korunur.',
      },
      {
        question: 'Stilli metin katmanlarımı kaybetmeden resme yazı eklerken arka plan fotoğrafını değiştirebilir miyim?',
        answer:
          'Evet, Resmi Değiştir düğmesiyle yeni bir fotoğraf yükleyin; mevcut metin katmanlarınız, yazı tipleriniz ve stilleriniz korunur.',
      },
      {
        question: 'Resme yazı ekleme düzenleyicisi hangi dosya türlerini açıyor?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını açar; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Telefon dokunmatik ekranıyla resme yazı eklerken metin katmanlarını sürükleyip bırakabilir miyim?',
        answer:
          'Evet, katmanlar dokunmatik Pointer olaylarını destekler. Metin bloklarını parmağınızla iOS ve Android cihazlarda sürükleyebilirsiniz.',
      },
      {
        question: 'Resme yazı eklerken paralel gölge, konturla birlikte okunabilirliği nasıl artırıyor?',
        answer:
          'Kontur harflerin etrafında net bir sınır oluştururken paralel gölge, metni arka plandan ayıran yumuşak bir derinlik katar. İkisi birlikte yoğun veya karmaşık arka planlarda bile okunabilirliği artırır.',
      },
      {
        question: 'Hızlı not eklemek için Ctrl+V ile ekran görüntüsü yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyin; ardından hemen metin katmanı ekleyin.',
      },
      {
        question: 'Resme yazı eklerken PNG seçiliyken Kalite kaydırıcısı neden gizleniyor?',
        answer:
          'PNG kayıpsız bir formattır; yüzde cinsinden kalite ayarı uygulanmaz. Kalite kaydırıcısını görmek için JPG veya WebP çıktısı seçin.',
      },
      {
        question: 'Canvas ile yazı eklemek kameranın gizli GPS EXIF etiketlerini kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Resme yazı ekleme aracıyla açıklama eklenmiş bir fotoğrafı indirirken hangi dosya adı kaydediliyor?',
        answer:
          'Dosya, orijinal adın sonuna _text eki eklenerek kaydedilir; örneğin foto_text.jpg. Formatı değiştirdiyseniz uzantı da buna göre güncellenir.',
      },
      {
        question: 'Resme yazı eklemek ile Resim Filigranı aracı arasındaki fark nedir?',
        answer:
          'Resme Yazı Ekleme, birden fazla katman, yazı tipi, kontur ve gölgeyle yaratıcı başlıklar ve meme metinleri içindir. Filigran aracı ise marka koruması için tek bir metin veya logoyu, genellikle yarı şeffaf ve tekrarlayan desende ekler.',
      },
      {
        question: 'Yazı eklerken CompressMyPic, kaydedilen resimlere logo veya filigran yerleştiriyor mu?',
        answer:
          'Hayır, yalnızca sizin yazdığınız metin işlenir. Kaydedilen resimlere asla site logosu veya filigran eklenmez.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Resim Çerçeve Oluşturucu',
    shortDescription: 'Katı veya degrade kenarlıklar, çerçeveler, yuvarlatılmış köşeler ve gölgeler ekleyin.',
    category: 'crop-edit',
    seoTitle: 'Resme Çerçeve Ekleme Ücretsiz – Fotoğraf Kenarlığı',
    seoDescription:
      'Resme çerçeve ekleme ücretsiz: katı, doğrusal degrade veya Polaroid çerçeveler, yuvarlatılmış köşeler ve gölgelerle fotoğraflarınızı hızlıca çerçeveleyin.',
    h1: 'Resim Çerçeve Oluşturucu Ücretsiz',
    subtitle:
      'Fotoğrafçılar, Etsy mağaza sahipleri, portföy tasarımcıları ve sosyal içerik üreticileri için oluşturulan ücretsiz resim çerçeve oluşturucumuz, herhangi bir fotoğrafı net galeri paspartuları, iki renkli degrade çerçeveler veya klasik Polaroid çerçevelerle sarar. Çerçeve kalınlığını, iç ve dış köşe yarıçaplarını ile yükselme gölgelerini doğrudan tarayıcınızda, kaydetmeden önce ince ayarlayın.',
    howToSteps: [
      {
        title: 'Çerçevelenecek bir resim sürükleyin veya seçin',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG fotoğrafı yükleyin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Hızlı bir çerçeve şablonu veya kenarlık stili seçin',
        description:
          'Klasik Beyaz, Polaroid Çerçeve, Koyu Stüdyo veya Degrade Parıltı şablonlarına basın ya da Katı, Degrade ve Polaroid stilleri arasında el ile geçiş yapın.',
      },
      {
        title: 'Çerçeve renklerini ve degrade açısını özelleştirin',
        description:
          'Katı veya Polaroid modunda Çerçeve Rengi ayarlayın ya da doğrusal degrade çerçeveler için Başlangıç Rengi, Bitiş Rengi ve Degrade Açısı (0°–360°) seçin.',
      },
      {
        title: 'Kenarlık boyutunu ve köşe yarıçaplarını ayarlayın',
        description:
          'Kenarlık Boyutu (yüzde 1–25) kaydırıcısını, bağımsız Çerçeve Yarıçapı (yüzde 0–30) ve Fotoğraf Yarıçapı (yüzde 0–30) kaydırıcılarıyla birlikte sürükleyin.',
      },
      {
        title: 'Paralel gölgeyi ve önizleme formatını seçin',
        description:
          'Paralel Gölge olarak hiç, yumuşak, orta veya derin seçeneklerinden birini seçin ve kutucuk önizlemesini incelerken PNG, JPG veya WEBP çıktı seçin.',
      },
      {
        title: 'Çerçeveli resminizi indirin',
        description:
          'Çerçeveyi ve gölgeyi kaynak tam çözünürlükte işlemek ve &lt;ad&gt;_framed olarak kaydetmek için Çerçeveli Resmi İndir düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Katı ve degrade kenarlıklar',
        description:
          'Temiz galeri paspartuları veya iki renkli doğrusal degrade çerçeveler oluşturun.',
      },
      {
        title: 'Hazır çerçeve stilleri',
        description:
          'Polaroid, Galeri Beyazı, Koyu Stüdyo veya Gün Batımı Degrade görünümünü anında uygulayın.',
      },
      {
        title: 'Köşe yarıçapı ve paralel gölge',
        description:
          'İç fotoğrafın veya dış çerçevenin köşelerini yuvarlayın ve gerçekçi yükselme gölgeleri ekleyin.',
      },
      {
        title: 'Kayıpsız PNG desteği',
        description:
          'Yuvarlatılmış köşeler ve gölgeler çevresindeki şeffaf dış köşeleri korumak için PNG olarak kaydedin.',
      },
    ],
    faqs: [
      {
        question: 'Çerçeve oluşturucunun Polaroid kenarlık stili standart katı kenarlıktan nasıl farklıdır?',
        answer:
          'Polaroid stili, alt kenarı daha kalın olan klasik anlık fotoğraf görünümünü verir; katı kenarlık ise her dört kenarda eşit kalınlıktadır. Polaroid, nostaljik bir kart görünümü için alt boşluğu genişletir.',
      },
      {
        question: 'Çerçeve oluşturucuda çıktı formatı JPG olarak değiştirilince paralel gölgeler neden kayboluyor?',
        answer:
          'JPG şeffaflığı desteklemediği için gölgenin yumuşak şeffaf kenarları beyazla doldurulur ve gölge sert görünür. Yumuşak gölgeleri korumak için PNG veya WebP çıktısı seçin.',
      },
      {
        question: 'Çerçeve Yarıçapı ile Fotoğraf Yarıçapı arasındaki fark nedir?',
        answer:
          'Çerçeve Yarıçapı dış çerçevenin köşelerini yuvarlarken Fotoğraf Yarıçapı iç fotoğrafın köşelerini yuvarlar. İkisini ayrı ayrı ayarlayarak farklı köşe stilleri oluşturabilirsiniz.',
      },
      {
        question: 'Çerçeve oluşturucunun Degrade Parıltı çerçevesi açı ve renkleri nasıl hesaplıyor?',
        answer:
          'Başlangıç ve Bitiş renkleri arasında doğrusal bir degrade oluşturulur; Degrade Açısı kaydırıcısı (0°–360°) degradenin yönünü belirler. Örneğin 90° dikey, 180° ters dikey geçiş verir.',
      },
      {
        question: 'Çerçeve oluşturucuyla kenarlık eklemek orijinal fotoğrafımın kenarlarını kırpar mı?',
        answer:
          'Hayır, kenarlık fotoğrafın dışına eklenir. Orijinal resmin hiçbir pikseli kırpılmaz; tuval yalnızca çerçeve kalınlığı kadar büyür.',
      },
      {
        question: 'Çerçeve oluşturucuda kenarlık boyutu (yüzde 1–25), uzun ve geniş fotoğraflarda nasıl hesaplanıyor?',
        answer:
          'Kenarlık boyutu, resmin kısa kenarının yüzdesi olarak hesaplanır. Bu sayede aynı yüzde değeri, dikey ve yatay fotoğraflarda orantılı bir çerçeve kalınlığı verir.',
      },
      {
        question: 'Çerçeve oluşturucunun dört hızlı çerçeve şablonu otomatik olarak ne ayarlıyor?',
        answer:
          'Klasik Beyaz beyaz katı çerçeve ve ince gölge, Polaroid Çerçeve kalın alt kenar, Koyu Stüdyo koyu katı çerçeve ve Degrade Parıltı iki renkli degrade çerçeve ayarlar. Her şablon renk, kalınlık ve gölgeyi birlikte yapılandırır.',
      },
      {
        question: 'Çerçeve oluşturucunun önizlemesi çerçevemin çevresinde neden gri beyaz dama deseni gösteriyor?',
        answer:
          'Dama deseni şeffaflığı gösterir. PNG çıktısında çerçevenin dış köşeleri şeffaf kaldığı için önizlemede dama deseniyle işaretlenir; kaydedilen dosyada bu alanlar şeffaf olur.',
      },
      {
        question: 'Çerçeve oluşturucuyla çerçeveleme, fotoğrafımı yüklemeden yerel olarak çalışıyor mu?',
        answer:
          'Evet, bütün çerçeveleme tarayıcınızda yerel olarak yapılır. Fotoğrafınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Çerçeve oluşturucuya hangi dosya türlerini bırakabilirim?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını bırakabilirsiniz; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Çerçeve oluşturucuda hızlı bir şablona bastıktan sonra çerçeve rengini değiştirebilir miyim?',
        answer:
          'Evet, şablon yalnızca başlangıç ayarlarını uygular. Ardından Çerçeve Rengi seçicisinden istediğiniz rengi seçerek şablonu özelleştirebilirsiniz.',
      },
      {
        question: 'Gölgesiz koyu kömür veya pastel galeri çerçevesini çerçeve oluşturucuyla nasıl oluştururum?',
        answer:
          'Katı stilini seçin, Çerçeve Rengi olarak koyu kömür (#2B2B2B) veya pastel bir ton seçin ve Paralel Gölge seçeneğini "Hiç" olarak ayarlayın.',
      },
      {
        question: 'Çerçeve oluşturucudan indirdiğim çerçeveli resim tam çözünürlüklü olacak mı?',
        answer:
          'Evet, çerçeve kaynak resmin tam piksel boyutlarında işlenir; yalnızca çerçeve kalınlığı eklenir. Önizleme küçültülmüş olsa bile çıktı tam çözünürlüktedir.',
      },
      {
        question: 'Çerçeve oluşturucuda çerçevenin şeffaf yuvarlatılmış köşelerini korurken PNG mi yoksa WebP mi seçmeliyim?',
        answer:
          'Her ikisi de şeffaflığı korur. PNG kayıpsız ve evrenseldir; WebP daha küçük dosyalar üretir ancak çok eski tarayıcılarda desteklenmeyebilir. Web için WebP, arşiv için PNG önerilir.',
      },
      {
        question: 'Kart çerçevesine sarmak için panodan doğrudan ekran görüntüsü yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyin; ardından çerçeve şablonunu uygulayın.',
      },
      {
        question: 'Çerçeve oluşturucu, kenarlık eklerken kameranın gizli GPS EXIF verilerini kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Çerçeveleri denerken çerçeve oluşturucuya ikinci bir fotoğrafı nasıl yüklerim?',
        answer:
          'Önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın. Çerçeve ayarlarınız korunur ve yeni fotoğrafa uygulanır.',
      },
      {
        question: 'Çerçeve oluşturucudan çerçeveli resim hangi dosya adıyla kaydediliyor?',
        answer:
          'Dosya, orijinal adın sonuna _framed eki eklenerek kaydedilir; örneğin foto_framed.png.',
      },
      {
        question: 'Çerçeve oluşturucu telefon tarayıcılarında iyi çalışıyor mu?',
        answer:
          'Evet, kontroller dokunmatik ekranlar için tasarlanmıştır; kaydırıcılar ve şablonlar iOS Safari ile Android Chrome üzerinde sorunsuz çalışır.',
      },
      {
        question: 'Çerçeveli fotoğraflarda çerçeve oluşturucuda filigran, ödeme duvarı veya kayıt sınırı var mı?',
        answer:
          'Hayır, tamamen ücretsizdir; hesap, kayıt, filigran veya günlük sınır yoktur.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Resim Köşelerini Yuvarlama',
    shortDescription: 'Köşeleri tek tip veya köşe köşe yuvarlayın; şeffaf PNG çıktısı alın.',
    category: 'crop-edit',
    seoTitle: 'Resim Köşe Yuvarlama Ücretsiz – PNG ile Çevrimiçi',
    seoDescription:
      'Resim köşelerini ücretsiz yuvarlayın: tek tip veya köşe köşe kaydırıcılar, dairesel avatar şablonu ve şeffaf PNG veya WebP dışa aktarma.',
    h1: 'Resim Köşelerini Yuvarlama',
    subtitle:
      'Arayüz tasarımcıları, bülten yazarları, blog yazarları ve şık kartlar veya avatarlar oluşturan sosyal kullanıcılar için tasarlanan bu tarayıcı aracı, resim köşelerini tam çözünürlükte temiz bir şekilde yuvarlamanızı sağlar. Dört köşeyi tek tip olarak eğin, köşe köşe bağımsız kaydırıcıları açın veya şeffaf PNG/WebP çıktısıyla tam daireye geçin.',
    howToSteps: [
      {
        title: 'Resminizi sürükleyin veya seçin',
        description:
          '20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG fotoğrafı yükleme alanına yükleyin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Tüm köşe yarıçapını ayarlayın veya Tam Daire / Hap seçeneğine basın',
        description:
          'Tam piksel eğriliğiyle birlikte Tüm Köşe Yarıçapı kaydırıcısını (yüzde 0–100) sürükleyin ya da yüzde 100 düzeyine geçmek için Tam Daire / Hap düğmesine basın.',
      },
      {
        title: 'İsteğe bağlı olarak köşe köşe bağımsız kontrolü açın',
        description:
          'Sol Üst, Sağ Üst, Sol Alt ve Sağ Alt köşeleri bağımsız olarak şekillendirmek için Köşe Köşe Bağımsız Kontrol seçeneğini açın.',
      },
      {
        title: 'Dış dolguyu Şeffaf veya katı renk olarak seçin',
        description:
          'Şeffaf yuvarlatılmış köşeler için Şeffaf (PNG/WebP) seçeneğini etkin bırakın ya da Katı Renk seçeneğine geçip herhangi bir onaltılık arka plan seçin.',
      },
      {
        title: 'Çıktı formatını seçin (PNG, WebP veya JPG)',
        description:
          'Kayıpsız alfa kenarlar için PNG, daha hafif şeffaf web öğeleri için WebP veya katı arka planlı opak köşeler için JPG seçin.',
      },
      {
        title: 'Yuvarlatılmış resminizi indirin',
        description:
          'Dama deseni önizlemesini inceleyin ve orijinal tam boyutlarda &lt;ad&gt;_rounded olarak kaydetmek için Yuvarlatılmış Resmi İndir düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Tek tip ve köşe köşe yarıçap',
        description:
          'Tüm köşeleri hap veya daire olana kadar tek tip yuvarlayın ya da her köşeye bağımsız olarak şekil verin.',
      },
      {
        title: 'Gerçekten şeffaf köşeler',
        description:
          'Yuvarlatılmış maskenin dışında temiz kenar yumuşatmalı alfa şeffaflığıyla PNG veya WebP olarak kaydedin.',
      },
      {
        title: 'İsteğe bağlı katı arka plan',
        description:
          'JPG olarak kaydederken dış köşeleri herhangi bir özel onaltılık renkle doldurun.',
      },
      {
        title: 'Tam çözünürlüklü çıktı',
        description:
          'Köşeleri temiz bir şekilde kırparken tam orijinal piksel boyutlarınızı korur.',
      },
    ],
    faqs: [
      {
        question: 'Köşeleri şeffaf tutmak için köşe yuvarlama aracında neden PNG veya WebP kullanmalıyım?',
        answer:
          'JPG şeffaflığı desteklemez; yuvarlatılmış köşeler katı bir renkle doldurulur. PNG ve WebP alfa kanalını koruduğu için köşeler gerçekten şeffaf kalır ve resim her arka plan üzerinde temiz görünür.',
      },
      {
        question: 'Köşe yuvarlama aracında Tam Daire / Hap kısayolu kare ve dikdörtgen fotoğraflarda nasıl çalışıyor?',
        answer:
          'Kare fotoğraflarda yüzde 100 yarıçap tam daire oluşturur. Dikdörtgen fotoğraflarda ise hap şekli oluşur; kısa kenar daire çapını belirler.',
      },
      {
        question: 'Köşe yuvarlama aracıyla bir blog kartı için yalnızca üst iki köşeyi yuvarlamak istiyorsam ne olur?',
        answer:
          'Köşe Köşe Bağımsız Kontrol seçeneğini açın ve yalnızca Sol Üst ile Sağ Üst kaydırıcılarını ayarlayın; alt köşeleri yüzde 0 düzeyinde bırakın. Böylece yalnızca üst köşeler yuvarlanır.',
      },
      {
        question: 'Fotoğrafım dikdörtgense köşe yuvarlamadan önce kare bir portre nasıl oluştururum?',
        answer:
          'Önce Resim Kırpıcı ile 1:1 oranında kare bir kırpıntı oluşturun, ardından bu dosyayı köşe yuvarlama aracına yükleyin. Böylece dairesel avatar için kare bir kaynak elde edersiniz.',
      },
      {
        question: 'Köşe yuvarlama aracında Tüm Köşe Yarıçapı yanındaki canlı piksel okuması ne anlama geliyor?',
        answer:
          'Yüzde değerinin piksel karşılığını gösterir. Örneğin 1000 piksel genişliğinde bir resimde yüzde 10 yarıçap 100 piksel eğrilik demektir; bu, farklı boyutlardaki resimlerde tutarlı sonuç almanızı sağlar.',
      },
      {
        question: 'Köşe yuvarlama aracında Dış Köşe Dolgusu bölümünde Şeffaf yerine Katı Renk seçeneğini ne zaman seçmeliyim?',
        answer:
          'JPG olarak kaydederken veya köşelerin belirli bir renkle doldurulmasını istediğinizde Katı Renk seçin. Web sitelerinde şeffaf köşe gerekiyorsa Şeffaf seçeneğini koruyun.',
      },
      {
        question: 'JPG seçiliyken köşe yuvarlama aracında Şeffaf (PNG/WebP) seçeneğine basarsam otomatik olarak ne olur?',
        answer:
          'Araç, şeffaflığı korumak için çıktı formatını otomatik olarak PNG olarak değiştirir. JPG şeffaflığı desteklemediği için bu geçiş gereklidir.',
      },
      {
        question: 'Köşe yuvarlama bu araçta fotoğrafımın genişlik ve yüksekliğini küçültüyor mu?',
        answer:
          'Hayır, boyutlar aynı kalır; yalnızca köşe pikselleri şeffaf hâle getirilir veya seçilen renkle doldurulur. Resmin genişlik ve yüksekliği değişmez.',
      },
      {
        question: 'Köşe yuvarlama aracında kavisli kenarlar pikselli tırtıklar yerine neden yumuşak görünüyor?',
        answer:
          'Araç, kenar yumuşatma (antialiasing) uygular; eğri kenardaki pikseller kısmi şeffaflıkla karıştırılarak yumuşak bir geçiş oluşturulur. Bu sayede köşeler her arka plan üzerinde pürüzsüz görünür.',
      },
      {
        question: 'Profil portreleri veya avatarlar köşe kırpma sırasında bir sunucuya yükleniyor mu?',
        answer:
          'Hayır, bütün işlem tarayıcınızda yerel olarak yapılır. Portreleriniz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Köşe yuvarlama aracında hangi giriş formatları yuvarlanabilir?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyaları yuvarlanabilir; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Köşelerini yuvarlamak için panodan doğrudan ekran görüntüsü yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyin.',
      },
      {
        question: 'Köşe köşe modunu köşe yuvarlama aracında kapatırsam bağımsız köşe değerlerime ne olur?',
        answer:
          'Bağımsız değerler korunur ancak tek tip kaydırıcı devralır. Modu yeniden açtığınızda son bağımsız değerleriniz geri gelir.',
      },
      {
        question: 'Köşe yuvarlama, gömülü GPS EXIF etiketlerini de kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Köşe yarıçapı ayarımı koruyarak köşe yuvarlama aracındaki mevcut resmi nasıl değiştiririm?',
        answer:
          'Önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın. Yarıçap ayarlarınız korunur ve yeni resme uygulanır.',
      },
      {
        question: 'İndirilen yuvarlatılmış resimlere hangi dosya adı veriliyor?',
        answer:
          'Dosya, orijinal adın sonuna _rounded eki eklenerek kaydedilir; örneğin foto_rounded.png.',
      },
      {
        question: 'Yuvarlatılmış web grafikleri kaydederken PNG mi yoksa WebP mi seçmeliyim?',
        answer:
          'Her ikisi de şeffaflığı korur. PNG evrensel ve kayıpsızdır; WebP daha küçük dosyalar üretir. Modern web siteleri için WebP, en geniş uyumluluk için PNG önerilir.',
      },
      {
        question: 'Köşe yuvarlama aracını iOS veya Android telefon tarayıcılarında kullanabilir miyim?',
        answer:
          'Evet, kaydırıcılar ve düğmeler dokunmatik ekranlar için tasarlanmıştır; iOS Safari ve Android Chrome üzerinde sorunsuz çalışır.',
      },
      {
        question: 'Köşe yuvarlama aracı ile Resim Çerçeve Oluşturucu arasındaki fark nedir?',
        answer:
          'Köşe yuvarlama yalnızca köşeleri keser ve şeffaf bırakır; çerçeve oluşturucu ise resmin çevresine kalınlık, renk, degrade ve gölge ekler. İkisini birlikte de kullanabilirsiniz.',
      },
      {
        question: 'Yuvarlatılmış kayıtlarda köşe yuvarlama aracında filigran, ücret veya günlük sınır var mı?',
        answer:
          'Hayır, tamamen ücretsizdir; hesap, kayıt, filigran veya günlük sınır yoktur.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Resim Parlaklık Düzenleyici',
    shortDescription: 'Fotoğrafları öncesi ve sonrası canlı karşılaştırmayla aydınlatın veya karartın.',
    category: 'crop-edit',
    seoTitle: 'Resim Parlaklık Ayarlama Ücretsiz – Fotoğraf Aydınlatın',
    seoDescription:
      'Fotoğraf ışığını ücretsiz resim parlaklık düzenleyiciyle hızlıca ayarlayın. Yüzde −100 ile +100 arasında kaydırın, hazır şablonları kullanın ve öncesi sonrasını karşılaştırın.',
    h1: 'Resim Parlaklık Düzenleyici Ücretsiz',
    subtitle:
      'Az pozlanmış fotoğrafları düzelten fotoğrafçılar, odaları aydınlatan emlakçılar ve ürün fotoğraflarını parlatmak isteyen satıcılar için oluşturulan tarayıcı içi resim parlaklık düzenleyicimiz, orijinalleri yüklemeden ışığı yumuşak bir şekilde ayarlar. Kaydırıcıyı yüzde −100 ile +100 arasında hareket ettirin, anında ışık şablonlarını deneyin ve sonuçları canlı bölünmüş karşılaştırmayla inceleyin.',
    howToSteps: [
      {
        title: 'Aydınlatılacak veya karartılacak bir fotoğraf sürükleyin ya da seçin',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini yükleme alanına yükleyin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Parlaklık Düzeyi kaydırıcısını veya Hızlı Şablonları ayarlayın',
        description:
          'Parlaklık Düzeyi kaydırıcısını yüzde −100 Daha Koyu ile +100 Daha Açık arasında hareket ettirin ya da Koyu (−yüzde 30), Soluk (−yüzde 15), Orijinal (yüzde 0), Parlak (+yüzde 15), Canlı (+yüzde 30) veya Yüksek Işık (+yüzde 50) şablonlarına basın.',
      },
      {
        title: 'Sonrası, Öncesi ve Bölünmüş Karşılaştırma görünümlerini karşılaştırın',
        description:
          'Gölge ve ışık detayını doğrulamak için Sonrası, Öncesi ve Bölünmüş Karşılaştırma sekmeleri arasında geçiş yapın ya da Tam Ekran Karşılaştırma seçeneğini açın.',
      },
      {
        title: 'Çıktı Formatı ve Kalite seçin',
        description:
          'Çıktı olarak Orijinal, JPG, PNG veya WEBP seçin ve kayıplı formatlarda kaydederken Kalite kaydırıcısını (yüzde 10–100) ayarlayın.',
      },
      {
        title: 'Düzenlenen resminizi indirin',
        description:
          'Parlaklık eğrisini tam orijinal çözünürlükte işlemek ve &lt;ad&gt;_brightness olarak yerel olarak kaydetmek için Düzenlenen Resmi İndir düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Gerçek zamanlı piksel ayarı',
        description:
          'Masaüstü ve telefon tarayıcılarında sunucuya gidip gelmeden anında önizleme.',
      },
      {
        title: 'Hızlı pozlama şablonları',
        description:
          'Koyu, Soluk, Parlak, Canlı ve Yüksek Işık ayarlarını tek tıkla deneyin.',
      },
      {
        title: 'Öncesi ve sonrası incelemesi',
        description:
          'Düzenlenen fotoğrafı yan yana veya etkileşimli karşılaştırma kaydırıcısıyla karşılaştırın.',
      },
      {
        title: 'İstemci içi gizli işleme',
        description:
          'Kişisel fotoğraflarınız tamamen tarayıcınızın içinde kalır.',
      },
    ],
    faqs: [
      {
        question: 'Parlaklık düzenleyicinin Parlaklık Düzeyi kaydırıcısı renkleri hemen soldurmadan pikselleri nasıl değiştiriyor?',
        answer:
          'Parlaklık, her pikselin kırmızı, yeşil ve mavi değerlerine eşit miktarda ekleme veya çıkarma yapar. Renk oranları korunduğu için orta düzeydeki ayarlarda renkler doğal kalır; yalnızca çok yüksek değerlerde beyazlaşma başlar.',
      },
      {
        question: 'Fotoğrafım parlaklık düzenleyicide yüklendikten hemen sonra neden otomatik olarak +yüzde 15 önizlemeyle geliyor?',
        answer:
          'Düzenleyici, hafif bir aydınlatmanın etkisini hemen göstermek için +yüzde 15 düzeyinde başlar. Orijinal görünümü görmek için Orijinal (yüzde 0) şablonuna basın.',
      },
      {
        question: 'Parlaklık düzenleyici, tek tıkla pozlama denemesi için hangi hızlı şablonları içeriyor?',
        answer:
          'Koyu (−yüzde 30), Soluk (−yüzde 15), Orijinal (yüzde 0), Parlak (+yüzde 15), Canlı (+yüzde 30) ve Yüksek Işık (+yüzde 50) şablonlarını içerir.',
      },
      {
        question: 'Parlaklık düzenleyicide Sonrası, Öncesi, Bölünmüş Karşılaştırma ve Tam Ekran Karşılaştırma arasındaki fark nedir?',
        answer:
          'Sonrası düzenlenen hâli, Öncesi orijinal hâli gösterir. Bölünmüş Karşılaştırma, kaydırıcıyla ikisini aynı karede yan yana sunar; Tam Ekran Karşılaştırma ise aynı görünümü büyük ekranda açar.',
      },
      {
        question: 'Parlaklık düzenleyiciyle bir fotoğrafı aydınlatmak çözünürlüğünü veya piksel boyutlarını düşürür mü?',
        answer:
          'Hayır, yalnızca piksel değerleri değişir; genişlik, yükseklik ve çözünürlük aynı kalır. Çıktı, orijinal tam boyutlarda kaydedilir.',
      },
      {
        question: 'Parlaklık düzenleyicide −yüzde 15 veya −yüzde 30 gibi negatif değerlerle bir fotoğrafı ne zaman karartmalıyım?',
        answer:
          'Aşırı pozlanmış, parlamış fotoğrafları veya çok parlak gökyüzü ve pencere alanlarını dengelemek için negatif değerler kullanın. Koyu şablonu, patlamış ışıkları yumuşatmak için iyi bir başlangıçtır.',
      },
      {
        question: 'Resim parlaklık düzenleyici PNG dosyalarının şeffaf arka planlarını korur mu?',
        answer:
          'Evet, çıktı olarak Orijinal, PNG veya WebP seçtiğinizde şeffaflık korunur. JPG seçerseniz şeffaf alanlar beyazla doldurulur.',
      },
      {
        question: 'Kişisel aile fotoğrafları veya müşteri deneme baskıları parlaklık düzenleyiciyle harici sunuculara yükleniyor mu?',
        answer:
          'Hayır, bütün düzenleme tarayıcınızda yerel olarak yapılır. Fotoğraflarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Parlaklık düzenleyiciyle hangi dosya türlerini aydınlatabilir veya karartabilirim?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını düzenleyebilirsiniz; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Parlaklık düzenleyicide aydınlatmak için panodan doğrudan koyu bir ekran görüntüsü yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyin; ardından parlaklık kaydırıcısını ayarlayın.',
      },
      {
        question: 'Parlaklık düzenleyicide parlaklığı +yüzde 100 düzeyine çıkarırsam ne olur?',
        answer:
          'Fotoğraf neredeyse tamamen beyaza döner; gölge ve orta ton detayları kaybolur. Bu uç değer, yalnızca çok koyu ve az detaylı resimlerde işe yarar.',
      },
      {
        question: 'Bir resmi parlaklık düzenleyiciyle aydınlattıktan sonra kontrastı veya renk canlılığını ayarlayabilir miyim?',
        answer:
          'Evet, düzenlenen resmi indirin ve Kontrast Düzenleyici veya Doygunluk Düzenleyici araçlarımıza yükleyin. Her araç tek bir ayara odaklanır; böylece zincirleme düzenleme yapabilirsiniz.',
      },
      {
        question: 'Parlaklık düzenleyicide PNG çıktısı seçiliyken Kalite neden kayboluyor?',
        answer:
          'PNG kayıpsız bir formattır; yüzde cinsinden kalite ayarı uygulanmaz. Kalite kaydırıcısını görmek için JPG veya WebP çıktısı seçin.',
      },
      {
        question: 'Parlaklık düzenleyicideki tüm parlaklık değişikliklerini hızlıca nasıl geri alırım?',
        answer:
          'Orijinal (yüzde 0) şablonuna basın veya kaydırıcıyı sıfıra sürükleyin. Bu, resmi düzenlenmemiş hâline döndürür.',
      },
      {
        question: 'Parlaklık düzenleyiciyle düzenlenen bir fotoğrafı kaydetmek kameranın GPS konum EXIF etiketlerini kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Parlaklık düzenleyicide kaydettikten hemen sonra sayfayı yenilemeden başka bir fotoğraf yükleyebilir miyim?',
        answer:
          'Evet, önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın; parlaklık ayarlarınız korunur.',
      },
      {
        question: 'Parlaklık düzenleyicide Düzenlenen Resmi İndir düğmesine basınca indirilen dosya nasıl adlandırılıyor?',
        answer:
          'Dosya, orijinal adın sonuna _brightness eki eklenerek kaydedilir; örneğin foto_brightness.jpg.',
      },
      {
        question: 'Parlaklık düzenleyici iPhone Safari ve Android Chrome tarayıcılarında güvenilir şekilde çalışıyor mu?',
        answer:
          'Evet, kaydırıcılar ve karşılaştırma görünümü mobil tarayıcılarda test edilmiştir; iOS Safari ve Android Chrome üzerinde sorunsuz çalışır.',
      },
      {
        question: 'Koyu ve sıkıştırılmış bir JPEG dosyası parlaklık düzenleyicide çok aydınlatılınca neden hafif blok gürültüsü gösterebilir?',
        answer:
          'JPEG sıkıştırma, koyu alanlarda görünmeyen blok izleri bırakır. Parlaklığı çok artırmak bu gizli izleri görünür hâle getirir. Bu, sıkıştırma kaynaklı doğal bir durumdur; daha yüksek kaliteli kaynak kullanmak azaltır.',
      },
      {
        question: 'Parlaklık düzenleyicide fotoğrafları aydınlatırken filigran, hesap kaydı veya sınır var mı?',
        answer:
          'Hayır, tamamen ücretsizdir; hesap, kayıt, filigran veya günlük sınır yoktur.',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Resim Kontrast Düzenleyici',
    shortDescription: 'Resimlerinizin kontrastını canlı öncesi ve sonrası karşılaştırmayla artırın veya yumuşatın.',
    category: 'crop-edit',
    seoTitle: 'Resim Kontrast Ayarlama Ücretsiz – Fotoğraf Kontrastı',
    seoDescription:
      'Fotoğraflarınızın kontrastını ücretsiz ayarlayın: yüzde −100 ile +100 arasında, 6 hazır ayar ve öncesi sonrası karşılaştırma; tarayıcınızda, kayıt yok.',
    h1: 'Resim Kontrast Düzenleyici Ücretsiz',
    subtitle:
      'Soluk veya sisli fotoğrafları düzelten fotoğrafçılar, çevrimiçi satıcılar ve tasarımcılar için tasarlanan bu tarayıcı içi kontrast aracı, gölgeleri derinleştirmenizi ve ton ayrımını saniyeler içinde vurgulamanızı sağlar. Tek tıkla hazır ayarlar seçin, bölünmüş ekran önizlemelerini inceleyin ve hiçbir şeyi sunucuya yüklemeden yerel olarak kaydedin.',
    howToSteps: [
      {
        title: 'Bir resim bırakın veya seçin',
        description:
          'Düzenleyicinin yükleme alanına 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG fotoğrafı yükleyin, diskten seçin ya da doğrudan Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Tuval üzerindeki canlı önizlemeyi inceleyin',
        description:
          'Fotoğrafınız uyarlanabilir bir tuval önizlemesinde +yüzde 20 kontrastla yüklenir; böylece ince bir dokunuşun ton ayrımını nasıl etkilediğini hemen görürsünüz.',
      },
      {
        title: 'Kontrast düzeyi kaydırıcısını veya hazır ayarları ayarlayın',
        description:
          'Kontrast düzeyi kaydırıcısını yüzde −100 Düz ile +100 Yüksek Kontrast arasında sürükleyin ya da Yumuşak (−yüzde 25), Soluk (−yüzde 10), Orijinal (yüzde 0), Keskin (+yüzde 20), Yoğun (+yüzde 40) veya Dramatik (+yüzde 70) seçeneklerine tıklayın.',
      },
      {
        title: 'Karşılaştırma araçlarıyla detayları doğrulayın',
        description:
          'Sonrası, Öncesi ve Bölünmüş Karşılaştırma (dikey bölücü kaydırıcıyla) arasında geçiş yapın ya da gölge ve ışık detaylarını yakından incelemek için Tam Ekran Karşılaştırma seçeneğine tıklayın.',
      },
      {
        title: 'Formatı ve kaliteyi seçip indirin',
        description:
          'Çıktı Formatı bölümünde Orijinal, JPG, PNG veya WebP seçin, kayıplı formatlar için kaliteyi (yüzde 10–100) ayarlayın ve Düzenlenen Resmi İndir düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: 'Hassas kontrast eğrisi',
        description:
          'Ani renk değişimleri olmadan ton aralığını yumuşak bir şekilde genişletir veya daraltır.',
      },
      {
        title: 'Tek tıkla hazır ayarlar',
        description:
          'Yumuşak, Soluk, Keskin, Yoğun veya Dramatik ayarlarını anında deneyin.',
      },
      {
        title: 'Etkileşimli öncesi ve sonrası penceresi',
        description:
          'İndirmeden önce gölge ve ışık ince detaylarını inceleyin.',
      },
      {
        title: 'Yüzde 100 tarayıcı içi',
        description:
          'Hızlı tarayıcı içi işleme; yükleme ve filigran yok.',
      },
    ],
    faqs: [
      {
        question: 'Kontrast kaydırıcısını pozitif veya negatif değerlere taşımak nasıl bir görsel etki yaratıyor?',
        answer:
          'Pozitif değerler açık tonları açar ve koyu tonları koyulaştırarak ton farkını artırır. Negatif değerler ise tonları birbirine yaklaştırarak daha düz, yumuşak ve sisli bir görünüm oluşturur.',
      },
      {
        question: 'Kontrast kontrol paneli hangi hazır ayarları içeriyor?',
        answer:
          'Yumuşak (−yüzde 25), Soluk (−yüzde 10), Orijinal (yüzde 0), Keskin (+yüzde 20), Yoğun (+yüzde 40) ve Dramatik (+yüzde 70) hazır ayarlarını içerir.',
      },
      {
        question: 'Kontrast düzenleyici bir fotoğraf yükleyince neden +yüzde 20 düzeyinde başlıyor?',
        answer:
          'Düzenleyici, ince bir kontrast artışının etkisini hemen göstermek için +yüzde 20 düzeyinde başlar. Orijinal görünümü görmek için Orijinal (yüzde 0) şablonuna basın.',
      },
      {
        question: 'Kontrast düzenleyici piksel değişikliklerini nasıl hesaplıyor?',
        answer:
          'Her piksel değeri, orta gri eksen etrafında ölçeklenir: açık değerler daha açık, koyu değerler daha koyu hâle gelir. Bu, ton eğrisini kaydırarak çalışır; renk tonu değiştirilmez.',
      },
      {
        question: 'Tahmin etmeden gölgeleri öncesi ve sonrası nasıl incelerim?',
        answer:
          'Bölünmüş Karşılaştırma görünümünde dikey kaydırıcıyı sürükleyerek aynı karenin iki hâlini yan yana görün. Tam Ekran Karşılaştırma, gölge detaylarını büyük ekranda incelemenizi sağlar.',
      },
      {
        question: 'Yüksek kontrast parlak bulutları kırpar veya siyah gölgeleri ezer mi?',
        answer:
          'Çok yüksek değerlerde evet: en açık tonlar beyaza, en koyu tonlar siyaha dönebilir. Detay kaybını önlemek için +yüzde 40 düzeyini aşmadan önce bölünmüş karşılaştırmayla kontrol edin.',
      },
      {
        question: 'Kontrast düzenleyicide hangi dosya türlerini açabilirim?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını açabilirsiniz; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Kontrastı ayarladıktan sonra şeffaf arka planlı PNG logoları kaydedebilir miyim?',
        answer:
          'Evet, çıktı olarak Orijinal, PNG veya WebP seçtiğinizde şeffaflık korunur. JPG seçerseniz şeffaf alanlar beyazla doldurulur.',
      },
      {
        question: 'Kontrast düzenleyicinin önizlemesi indirme çözünürlüğünü etkiliyor mu?',
        answer:
          'Hayır, önizleme yalnızca ekrana sığdırılır. İndirilen dosya, orijinal tam çözünürlükte işlenir.',
      },
      {
        question: 'Kontrast düzenleyici panodan yapıştırılan ekran görüntülerini kabul ediyor mu?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyebilirsiniz.',
      },
      {
        question: 'Kontrastı ayarlamak renkli bir fotoğrafı siyah beyaza dönüştürür mü?',
        answer:
          'Hayır, kontrast yalnızca ton farkını değiştirir; renkler korunur. Siyah beyaz görünüm için Doygunluk Düzenleyici ile −yüzde 100 değerini kullanın.',
      },
      {
        question: 'Kontrast düzenleyiciden JPG veya WebP olarak kaydederken hangi kaliteyi seçmeliyim?',
        answer:
          'Genel kullanım için yüzde 85–92 aralığı önerilir. Web için yüzde 80–85 yeterli olurken baskı hazırlığında yüzde 95–100 kullanın.',
      },
      {
        question: 'Kontrastı düzenledikten sonra indirilen dosya nasıl adlandırılıyor?',
        answer:
          'Dosya, orijinal adın sonuna _contrast eki eklenerek kaydedilir; örneğin foto_contrast.jpg.',
      },
      {
        question: 'Kontrast düzenleyici bulanık veya odaksız fotoğrafları netleştirebilir mi?',
        answer:
          'Hayır, kontrast netlik eklemez; yalnızca mevcut ton farkını vurgular. Bulanık fotoğraflar kontrastla daha keskin görünse de gerçek detay geri gelmez.',
      },
      {
        question: 'Kontrastı ayarlarken fotoğraflarım harici sunuculara yükleniyor mu?',
        answer:
          'Hayır, bütün düzenleme tarayıcınızda yerel olarak yapılır. Fotoğraflarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Kontrast düzenleyici yüklenen animasyonlu bir GIF dosyasını nasıl işliyor?',
        answer:
          'Canvas ilk kareyi çizer ve tek karelik statik bir resim olarak kaydeder. Animasyon korunmaz.',
      },
      {
        question: 'Kontrast ayarı ile parlaklık ayarı arasındaki fark nedir?',
        answer:
          'Parlaklık tüm pikselleri eşit miktarda açar veya karartır; kontrast ise açık ve koyu tonlar arasındaki farkı artırır veya azaltır. Parlaklık genel ışığı, kontrast ton ayrımını değiştirir.',
      },
      {
        question: 'Portrelerde öğle güneşi sert gölgelerini yumuşatmak için negatif kontrast kullanabilir miyim?',
        answer:
          'Evet, −yüzde 10 ile −yüzde 25 arasındaki negatif değerler sert gölgeleri yumuşatır ve cilt tonlarındaki keskin geçişleri dengeler.',
      },
      {
        question: 'Sekmeyi yeniden yüklemeden kontrast düzenleyiciye yeni bir fotoğrafı nasıl yüklerim?',
        answer:
          'Önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın. Kontrast ayarlarınız korunur.',
      },
      {
        question: 'Kontrast düzenleyici iOS Safari ve Android Chrome tarayıcılarında çalışıyor mu?',
        answer:
          'Evet, kaydırıcılar ve karşılaştırma görünümü mobil tarayıcılarda test edilmiştir; iOS Safari ve Android Chrome üzerinde sorunsuz çalışır.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Resim Doygunluk Düzenleyici',
    shortDescription: 'Renk yoğunluğunu artırın veya fotoğrafları siyah beyaza dönüştürün; hepsi tarayıcınızda.',
    category: 'crop-edit',
    seoTitle: 'Resim Doygunluk Ayarlama Ücretsiz – Renk Canlılığı',
    seoDescription:
      'Fotoğraflarınızın doygunluğunu ücretsiz ayarlayın: yüzde −100 (siyah beyaz) ile +100 (canlı renkler) arasında, 6 hazır ayar ve bölünmüş görünüm.',
    h1: 'Resim Doygunluk Düzenleyici Ücretsiz',
    subtitle:
      'Renk yoğunluğunu dengeleyen fotoğrafçılar, sosyal medya içerik üreticileri ve e-ticaret düzenleyicileri için oluşturulan bu tarayıcı içi doygunluk aracı, renk şiddetini algılanan parlaklığa göre ayarlar. Keskin yüzde −100 griden canlı yüzde +100 tonlara akıcı bir şekilde geçin; bölünmüş karşılaştırma ve yerel dışa aktarma ile birlikte.',
    howToSteps: [
      {
        title: 'Düzenleyiciye bir fotoğraf yükleyin',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini sürükleyip bırakın, cihazınızdan dosya seçin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'İlk renk artışını görün',
        description:
          'Düzenleyici, doygunluk düzeyi +yüzde 25 olarak yüklenir; böylece daha yoğun kromanın soluk renkleri canlı önizlemede nasıl canlandırdığını hemen görürsünüz.',
      },
      {
        title: 'Doygunluk düzeyini ayarlayın veya hazır ayara tıklayın',
        description:
          'Kaydırıcıyı yüzde −100 Gri Tonlama ile +100 Canlı arasında sürükleyin ya da Gri Tonlama (−yüzde 100), Soluk (−yüzde 40), Orijinal (yüzde 0), Yoğun (+yüzde 30), Canlı (+yüzde 60) veya Hiper (+yüzde 90) seçeneklerinden birini seçin.',
      },
      {
        title: 'Bölünmüş Karşılaştırma ile cilt tonlarını inceleyin',
        description:
          'Kırmızıların ve cilt tonlarının dengeli göründüğünden, aşırı doygun olmadığından emin olmak için Sonrası, Öncesi veya kaydırıcılı Bölünmüş Karşılaştırma arasında geçiş yapın ya da Tam Ekran Karşılaştırma seçeneğine tıklayın.',
      },
      {
        title: 'Çıktı formatını seçin ve yerel olarak kaydedin',
        description:
          'Orijinal, JPG, PNG veya WebP seçin, PNG değilse kaliteyi (yüzde 10–100) ayarlayın ve Düzenlenen Resmi İndir düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: 'Parlaklığı koruyan doygunluk',
        description:
          'Renk yoğunluğunu algılanan parlaklığa göre ayarlar; böylece tonlar doğal kalır.',
      },
      {
        title: 'Gri tonlamadan hiper canlıya',
        description:
          'Anında siyah beyaz için −yüzde 100 düzeyine kaydırın veya yoğun ve canlı renkler için pozitif değerlere çıkın.',
      },
      {
        title: 'Canlı öncesi ve sonrası önizlemesi',
        description:
          'Cilt tonlarını aşırı doygunlaştırmamak için karşılaştırma görünümünü değiştirin veya sürükleyin.',
      },
      {
        title: 'Gizli ve ücretsiz',
        description:
          'Yükleme yok, hesap yok ve filigran yok.',
      },
    ],
    faqs: [
      {
        question: 'Doygunluk düzenleyici fotoğrafın algılanan parlaklığını nasıl koruyor?',
        answer:
          'Doygunluk, her pikselin renk şiddetini parlaklık değerinden bağımsız olarak ayarlar. Bu sayede renkler güçlenirken veya solarken fotoğrafın genel ışık dengesi değişmez.',
      },
      {
        question: 'Doygunluk kontrol paneli hangi hazır ayarları sunuyor?',
        answer:
          'Gri Tonlama (−yüzde 100), Soluk (−yüzde 40), Orijinal (yüzde 0), Yoğun (+yüzde 30), Canlı (+yüzde 60) ve Hiper (+yüzde 90) hazır ayarlarını sunar.',
      },
      {
        question: 'Doygunluk düzenleyicide tek tıkla renkli bir portreyi gri tonlamaya dönüştürebilir miyim?',
        answer:
          'Evet, Gri Tonlama (−yüzde 100) şablonuna basın; fotoğraf anında siyah beyaza döner. Kaydırıcıyı −yüzde 100 düzeyine sürüklemek de aynı sonucu verir.',
      },
      {
        question: 'Dosya yükleyince doygunluk düzeyi neden +yüzde 25 olarak başlıyor?',
        answer:
          'Düzenleyici, hafif bir renk artışının etkisini hemen göstermek için +yüzde 25 düzeyinde başlar. Orijinal görünümü görmek için Orijinal (yüzde 0) şablonuna basın.',
      },
      {
        question: 'Doygunluğu artırırken portrelerin turuncu veya neon görünmesini nasıl engellerim?',
        answer:
          'Cilt tonları için +yüzde 30 düzeyini aşmayın ve Bölünmüş Karşılaştırma görünümünde cildi kontrol edin. Kırmızıların aşırı parladığını görürseniz değeri düşürün.',
      },
      {
        question: 'Zaten tek renkli veya gri bir fotoğrafın doygunluğunu artırırsam ne olur?',
        answer:
          'Gri piksellerde renk bilgisi olmadığı için doygunluk artışı görünür bir değişiklik yapmaz. Fotoğraf gri kalır; yalnızca renkli alanlar etkilenir.',
      },
      {
        question: 'Doygunluk düzenleyici şeffaf PNG simgeleri ve WebP çıkartmaları destekliyor mu?',
        answer:
          'Evet, şeffaf PNG ve WebP dosyalarını düzenleyebilirsiniz. Çıktı olarak PNG veya WebP seçtiğinizde şeffaflık korunur.',
      },
      {
        question: 'Doygunluğu azaltılmış bir çıkartmayı JPG olarak kaydedersem şeffaflığa ne olur?',
        answer:
          'JPG şeffaflığı desteklemediği için şeffaf alanlar beyazla doldurulur. Şeffaflığı korumak için PNG veya WebP çıktısı seçin.',
      },
      {
        question: 'Doygunluk düzenleyici hangi dosyaları ve en büyük dosya boyutunu kabul ediyor?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını kabul eder; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Doygunlukta önizleme netliği ile indirilen dosyanın çözünürlüğü arasında fark var mı?',
        answer:
          'Hayır, önizleme yalnızca ekrana sığdırılır. İndirilen dosya, orijinal tam çözünürlükte işlenir.',
      },
      {
        question: 'Gri Tonlama (−yüzde 100) yerine Soluk (−yüzde 40) seçeneğini ne zaman kullanmalıyım?',
        answer:
          'Tam siyah beyaz istemiyor ancak renkleri yumuşatmak istiyorsanız Soluk seçeneğini kullanın. Bu, vintage veya mat bir görünüm için idealdir.',
      },
      {
        question: 'Doygunluk aracına panodan doğrudan resim yapıştırabilir miyim?',
        answer:
          'Evet, resmi kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyebilirsiniz.',
      },
      {
        question: 'Doygunlukta düzenlenen fotoğrafları ayırt etmek için dosya adı nasıl oluşturuluyor?',
        answer:
          'Dosya, orijinal adın sonuna _saturation eki eklenerek kaydedilir; örneğin foto_saturation.jpg.',
      },
      {
        question: 'Orijinal, JPG veya WebP olarak kaydederken doygunlukta hangi kalite uygulanıyor?',
        answer:
          'Orijinal seçeneği kaynağın kalitesini korur; JPG veya WebP seçtiğinizde kalite kaydırıcısı (yüzde 10–100) uygulanır. Varsayılan kalite yüzde 92 düzeyindedir.',
      },
      {
        question: 'Doygunluğu düzenlerken yüklenen fotoğraflar bulut GPU veya harici sunuculara iletiliyor mu?',
        answer:
          'Hayır, bütün düzenleme tarayıcınızda yerel olarak yapılır. Fotoğraflarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Burada doygunluğu düzenlemek kameranın EXIF veya GPS meta verilerini kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Fotoğrafımı yeniden yüklemeden yalnızca doygunluk kaydırıcısını nasıl sıfırlarım?',
        answer:
          'Orijinal (yüzde 0) şablonuna basın veya kaydırıcıyı sıfıra sürükleyin. Bu, yalnızca doygunluk ayarını sıfırlar.',
      },
      {
        question: 'Hiper (+yüzde 90) ile manzaranın yeşilliklerini ve gökyüzünü fotoğrafa zarar vermeden canlandırabilir miyim?',
        answer:
          'Evet, ancak +yüzde 90 çok güçlüdür; yeşiller neon görünebilir. Manzaralar için +yüzde 30 ile +yüzde 60 aralığı genellikle daha doğal sonuç verir.',
      },
      {
        question: 'Renkli bir PNG grafiği, renklerini yumuşatırken hafif WebP dosyasına dönüştürebilir miyim?',
        answer:
          'Evet, doygunluğu ayarlayın ve çıktı formatı olarak WebP seçin. Dosya hem renkleri yumuşatılmış hem de hafif bir WebP olarak kaydedilir.',
      },
      {
        question: 'Doygunluk aracı çevrimdışı ve telefon dokunmatik ekranlarında çalışıyor mu?',
        answer:
          'Evet, sayfa yüklendikten sonra bütün işlem tarayıcıda yerel olarak yapılır; kaydırıcılar iOS ve Android dokunmatik ekranlarında çalışır.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Resim Filtreleri',
    shortDescription: 'Ayarlanabilir yoğunlukla gri tonlama, sepya, vintage, sıcak, soğuk ve noir filtreleri uygulayın.',
    category: 'crop-edit',
    seoTitle: 'Resim Filtreleri Ücretsiz – Vintage ve Sepya Filtreleri',
    seoDescription:
      'Resim filtrelerini ücretsiz uygulayın: vintage, sepya, siyah beyaz, sıcak, soğuk ve daha fazlası. Filtre yoğunluğunu yüzde 0 ile 100 arasında ayarlayın; kayıt yok.',
    h1: 'Resim Filtreleri Ücretsiz',
    subtitle:
      'İçerik üreticileri, blog yazarları ve günlük fotoğraflarına tutarlı bir estetik katmak isteyen herkes için ideal olan bu ücretsiz resim filtreleri, canlı küçük resimli 11 seçilmiş renk tonu sunar. Herhangi bir filtreyi yoğunluk kaydırıcısıyla akıcı bir şekilde harmanlayın ve tam çözünürlüklü kopyaları tarayıcınızda kaydedin.',
    howToSteps: [
      {
        title: 'Bir resim bırakın veya seçin',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG fotoğrafı yükleyin, diskten dosya seçin ya da doğrudan Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Canlı filtre küçük resimlerini keşfedin',
        description:
          'Yüklenen resminizden oluşturulan gerçek küçük resim önizlemeleriyle Orijinal artı 11 stilli ton içeren 12 hazır filtre kartlık ızgarayı inceleyin.',
      },
      {
        title: 'Bir stil hazır ayarı seçin',
        description:
          'Ana tuvale uygulamak için Gri Tonlama, Sepya, Vintage, Sıcak, Soğuk, Yüksek Kontrast, Mat Soluk, Dramatik, S/B Noir, Altın Saat veya Ters Çevir seçeneklerinden birine tıklayın.',
      },
      {
        title: 'Gücü filtre yoğunluğuyla harmanlayın',
        description:
          'Güçlü tonları ince renk geçişlerine yumuşatmak için filtre yoğunluğu kaydırıcısını yüzde 0 ile yüzde 100 arasında sürükleyin (veya Orijinal görünümüne dönmek için Sıfırla seçeneğine tıklayın).',
      },
      {
        title: 'Orijinali koruyun veya Karşılaştır penceresini açın',
        description:
          'Anında A/B denetimleri için orijinali görmek üzere Basılı Tut düğmesini basılı tutun ya da bölünmüş kaydırıcılı etkileşimli inceleme penceresi için Karşılaştır düğmesine tıklayın.',
      },
      {
        title: 'Çıktı formatını seçin ve indirin',
        description:
          'Orijinal, JPG, PNG veya WebP seçin, gerekirse kaliteyi (yüzde 10–100) ayarlayın ve Filtreli Resmi İndir düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: '11 seçilmiş filtre hazır ayarı',
        description:
          'Gri Tonlama, Sepya, Vintage, Sıcak, Soğuk, Yüksek Kontrast, Mat Soluk, Dramatik, S/B Noir, Altın Saat ve Ters Çevir içerir.',
      },
      {
        title: 'Yumuşak yoğunluk kaydırıcısı',
        description:
          'Herhangi bir filtreyi sert varsayılanlarda kalmak yerine yüzde 0 ile yüzde 100 arasında akıcı bir şekilde harmanlayın.',
      },
      {
        title: 'Canlı küçük resim şeridi',
        description:
          'Bir filtre seçmeden önce her filtrenin gerçek fotoğrafınızda nasıl göründüğünü görün.',
      },
      {
        title: 'Yüzde 100 tarayıcı içi tuval',
        description:
          'Sunucuya yükleme olmadan tarayıcınızda çevrimdışı çalışmaya hazırdır.',
      },
    ],
    faqs: [
      {
        question: 'Resim filtreleri ızgarasında hangi 11 filtre stilini görebilirim?',
        answer:
          'Gri Tonlama, Sepya, Vintage, Sıcak, Soğuk, Yüksek Kontrast, Mat Soluk, Dramatik, S/B Noir, Altın Saat ve Ters Çevir stillerini görebilirsiniz; Orijinal ile birlikte toplam 12 kart vardır.',
      },
      {
        question: 'Filtre yoğunluğu kaydırıcısı yüzde 0 ile yüzde 100 arasında nasıl çalışıyor?',
        answer:
          'Yüzde 0, filtre etkisini tamamen kaldırarak orijinal resmi gösterir; yüzde 100 ise filtrenin tam gücünü uygular. Ara değerler, filtreyi orijinalle orantılı olarak harmanlar.',
      },
      {
        question: 'Filtre aracı bir fotoğraf bırakınca neden Vintage filtresini yüzde 100 olarak seçiyor?',
        answer:
          'Araç, filtrenin etkisini hemen göstermek için Vintage stiliyle yüzde 100 yoğunlukta başlar. Başka bir stil seçebilir veya yoğunluğu düşürebilirsiniz.',
      },
      {
        question: 'Gri Tonlama ve S/B Noir filtreleri arasındaki fark nedir?',
        answer:
          'Gri Tonlama, renkleri doğrusal bir şekilde griye dönüştürür. S/B Noir ise daha yüksek kontrast ve derin siyahlarla sinematik bir siyah beyaz görünüm verir.',
      },
      {
        question: 'Sepya, Vintage, Mat Soluk ve Altın Saat görsel olarak nasıl farklılaşıyor?',
        answer:
          'Sepya sıcak kahverengi bir ton verir; Vintage soluk renkler ve hafif sararma ekler; Mat Soluk kontrastı düşürerek yumuşak bir görünüm oluşturur; Altın Saat ise sıcak altın ışık etkisi katar.',
      },
      {
        question: 'Filtrelerde orijinali görmek için Basılı Tut düğmesi düzenlemeyi nasıl hızlandırıyor?',
        answer:
          'Düğmeyi basılı tuttuğunuz sürece orijinal resim gösterilir; bıraktığınızda filtreli görünüm geri gelir. Böylece filtreyi açıp kapatmadan hızlı A/B karşılaştırması yaparsınız.',
      },
      {
        question: 'Kaydetmeden önce yan yana bölünmüş incelemeyi yapabilir miyim?',
        answer:
          'Evet, Karşılaştır düğmesi, bölünmüş kaydırıcılı etkileşimli bir pencere açar. Kaydırıcıyı sürükleyerek orijinal ve filtreli hâli aynı karede karşılaştırın.',
      },
      {
        question: 'İndirilen resimler filtre küçük resimleriyle aynı küçük boyutta mı işleniyor?',
        answer:
          'Hayır, küçük resimler yalnızca önizlemedir. İndirilen dosya, orijinal tam çözünürlükte işlenir.',
      },
      {
        question: 'Bu fotoğraf filtreleri hangi dosyaları ve en büyük boyutu kabul ediyor?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını kabul eder; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Sıcak filtreler veya Ters Çevir, bir PNG logosunun şeffaflığını korur mu?',
        answer:
          'Evet, çıktı olarak Orijinal, PNG veya WebP seçtiğinizde şeffaflık korunur ve filtre şeffaf alanların üzerine uygulanır. JPG seçerseniz şeffaflık kaybolur.',
      },
      {
        question: 'Resim filtrelerinde Ters Çevir filtresi daha çok ne için kullanılır?',
        answer:
          'Ters Çevir, renkleri negatife çevirir; genellikle sanatsal efektler, röntgen benzeri görünümler veya koyu tema tasarımları için kullanılır.',
      },
      {
        question: 'Filtre efektleri Chrome, Firefox ve iPhone Safari tarayıcılarında tutarlı mı?',
        answer:
          'Evet, filtreler standart Canvas işlemleriyle uygulanır ve modern tarayıcılarda tutarlı sonuç verir. Çok eski tarayıcılarda küçük ton farkları görülebilir.',
      },
      {
        question: 'Aynı resimde Soğuk ve Mat Soluk gibi iki filtreyi birleştirebilir miyim?',
        answer:
          'Hayır, her seferde tek bir filtre seçilir. İki filtreyi birleştirmek için resmi bir filtreyle kaydedip yeniden yükleyerek ikinci filtreyi uygulayın.',
      },
      {
        question: 'Filtreyi hatırlamak için çıktı dosya adları nasıl etiketleniyor?',
        answer:
          'Dosya adı, orijinal adın sonuna filtre adı eklenerek oluşturulur; örneğin foto_vintage.jpg. Böylece hangi filtrenin uygulandığını dosya adından anlarsınız.',
      },
      {
        question: 'Filtre uygulamak için fotoğraf yüklemek onu harici bir sunucuya gönderir mi?',
        answer:
          'Hayır, bütün filtre işlemleri tarayıcınızda yerel olarak yapılır. Fotoğrafınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Panodan yapıştırılan ekran görüntülerinde Soğuk veya Yüksek Kontrast filtrelerini kullanabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyin; ardından istediğiniz filtreyi uygulayın.',
      },
      {
        question: 'Filtre aracı yüklenen animasyonlu bir GIF dosyasını nasıl işliyor?',
        answer:
          'Canvas ilk kareyi çizer ve filtre uygulanmış tek karelik statik bir resim olarak kaydeder. Animasyon korunmaz.',
      },
      {
        question: 'Filtreli WebP veya JPG dosyalarını kaydederken kaliteyi nasıl ayarlarım?',
        answer:
          'Kalite kaydırıcısını yüzde 10–100 arasında ayarlayın. Varsayılan yüzde 92 düzeyindedir; web için yüzde 80–85 genellikle yeterlidir.',
      },
      {
        question: 'Filtre uygulamak kameranın hassas EXIF ve GPS etiketlerini kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Filtreli bir resmi indirdikten sonra hızlıca başka bir fotoğrafa nasıl geçerim?',
        answer:
          'Önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın. Filtre seçiminiz korunur ve yeni fotoğrafa uygulanır.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Resme Arka Plan Ekleme',
    shortDescription: 'Şeffaf veya çerçeveli resimleri katı, degrade veya bulanık arka planlar üzerine yerleştirin.',
    category: 'create',
    seoTitle: 'Resme Arka Plan Ekleme Ücretsiz – Katı ve Degrade',
    seoDescription:
      'Resimlerinize ücretsiz arka plan ekleyin: katı renkler, iki renkli degrade veya bulanık fotoğraf. 1:1, 16:9 veya 4:5 olarak kaydedin; hepsi tarayıcınızda.',
    h1: 'Resme Arka Plan Ekleme',
    subtitle:
      'E-ticaret satıcıları, logo tasarımcıları ve sosyal medya düzenleyicileri için hazırlanan bu araç, yüklenen resimlere veya şeffaf PNG kırpıntılarına arka plan eklemeyi kolaylaştırır. Katı renk örnekleri, açılı iki renkli degradeler veya kare, hikâye ya da geniş ekran boyutlu bulanık arka planlar arasından seçim yapın.',
    howToSteps: [
      {
        title: 'Bir fotoğraf veya şeffaf PNG yükleyin',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resmini yükleme alanına bırakın, diskten seçin ya da Ctrl+V ile yapıştırın.',
      },
      {
        title: 'Katı Renk, Degrade veya Bulanık Fotoğraf seçin',
        description:
          'Renk seçici ve 6 hızlı örnekle Katı Renk, iki renk ve 0° ile 360° arası açı kaydırıcısıyla Degrade ya da 4 ile 50 piksel arası bulanıklık yarıçapıyla Bulanık Fotoğraf seçeneğini seçin.',
      },
      {
        title: 'Bir tuval oranı seçin',
        description:
          'Tuval Oranı bölümünde Orij, kare 1:1, geniş ekran 16:9, dikey hikâye 9:16 veya sosyal dikey 4:5 seçeneklerinden birine tıklayın.',
      },
      {
        title: 'Ölçeği, yuvarlaklığı ve paralel gölgeyi ayarlayın',
        description:
          'Konunuzun çevresindeki dolguyu kontrol etmek için Resim Ölçeği (yüzde 40–100) kaydırıcısını sürükleyin, yumuşak köşeler için Yuvarlaklık (yüzde 0–30) ayarlayın ve resmin arkasında Paralel Gölge seçeneğini açın.',
      },
      {
        title: 'Çıktı formatını seçin ve indirin',
        description:
          'Önizlemenin altındaki tam çıktı piksel boyutlarını inceleyin, PNG, JPG veya WEBP seçin ve Resmi İndir düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: '3 arka plan modu',
        description:
          'Dikey veya yatay bantlı fotoğraflar için Katı Renk, İki Renkli Degrade veya Bulanık Fotoğraf Arka Planı seçin.',
      },
      {
        title: 'Sosyal ve web oranları',
        description:
          'Herhangi bir fotoğrafı Orijinal, Kare 1:1, Geniş Ekran 16:9, Hikâye 9:16 veya Dikey 4:5 çerçevelere sığdırın.',
      },
      {
        title: 'Ön plan ölçeği, yarıçapı ve gölgesi',
        description:
          'Ana resminizin çevresine boşluk, yuvarlatılmış köşeler ve yumuşak paralel gölgeler ekleyin.',
      },
      {
        title: 'Sıfır yükleme',
        description:
          'HTML5 Canvas ile yerel olarak görüntülenir ve anında indirilir.',
      },
    ],
    faqs: [
      {
        question: 'Resme arka plan eklerken Bulanık Fotoğraf modunu ne zaman kullanmalıyım?',
        answer:
          'Dikey bir fotoğrafı kare veya geniş ekran çerçeveye sığdırırken kenarlardaki boş bantları doldurmak için kullanın. Bulanık arka plan, fotoğrafın kendi renkleriyle uyumlu bir dolgu oluşturur.',
      },
      {
        question: 'Şeffaf bir PNG dosyasının arkasına temiz beyaz stüdyo arka planı nasıl eklerim?',
        answer:
          'Katı Renk modunu seçin, renk seçiciden beyazı seçin ve Tuval Oranı olarak Orij veya 1:1 seçin. Şeffaf PNG, beyaz zemin üzerine yerleşir.',
      },
      {
        question: 'Logo veya ekran görüntülerinin arkasındaki doğrusal degradeleri farklı açılarla özelleştirebilir miyim?',
        answer:
          'Evet, Degrade modunda iki renk seçin ve açı kaydırıcısını 0° ile 360° arasında ayarlayın. Örneğin 90° dikey, 45° çapraz geçiş verir.',
      },
      {
        question: 'Arka plan ekleme aracı hangi hazır tuval oranlarını sunuyor?',
        answer:
          'Orijinal, kare 1:1, geniş ekran 16:9, dikey hikâye 9:16 ve sosyal dikey 4:5 oranlarını sunar.',
      },
      {
        question: 'Tuval oranı değiştirilirken son piksel boyutları nasıl belirleniyor?',
        answer:
          'Seçilen oran, orijinal resmin uzun kenarını temel alır. Örneğin 1:1 seçildiğinde tuval kare olur ve resim ölçek ayarınıza göre ortalanır; tam boyutlar önizlemenin altında gösterilir.',
      },
      {
        question: 'Resim ölçeği, ana fotoğrafımın çevresindeki kenar boşluklarını nasıl etkiliyor?',
        answer:
          'Ölçek yüzde 100 düzeyindeyken resim tuvali doldurur; yüzde düşürüldükçe çevresinde daha fazla arka plan görünür. Yüzde 40–100 aralığında ayarlayarak boşluk miktarını kontrol edersiniz.',
      },
      {
        question: 'Yuvarlaklık, şeffaf PNG dosyalarının köşelerini mi yoksa yalnızca dikdörtgen fotoğrafları mı yumuşatıyor?',
        answer:
          'Yuvarlaklık, ön plan resminin köşelerini yuvarlar; şeffaf PNG dosyalarında da çalışır. Köşe yarıçapı yüzde 0–30 arasında ayarlanabilir.',
      },
      {
        question: 'Paralel gölge, şeffaf logolarda ve katı fotoğraflarda nasıl davranıyor?',
        answer:
          'Şeffaf logolarda gölge, logonun şeklini izler; katı fotoğraflarda ise dikdörtgen çerçevenin arkasında görünür. Bu, logolara doğal bir yükselme etkisi verir.',
      },
      {
        question: 'Arka plan eklemek için hangi dosya türlerini içe aktarabilirim?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyalarını içe aktarabilirsiniz; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Bu araç bir fotoğrafın mevcut arka planını otomatik olarak kaldırıyor mu?',
        answer:
          'Hayır, bu araç arka plan kaldırmaz; mevcut resmin arkasına yeni bir arka plan ekler. Arka planı kaldırmak için önce arka plan kaldırma aracını kullanın.',
      },
      {
        question: 'Arka plan ekleme hangi çıktı formatlarını destekliyor ve hangi sıkıştırma kalitesiyle?',
        answer:
          'PNG, JPG ve WEBP çıktılarını destekler. JPG ve WebP için kalite yüzde 10–100 arasında ayarlanabilir; PNG kayıpsızdır.',
      },
      {
        question: 'Katı renk modunda hangi hızlı renk örnekleri bulunuyor?',
        answer:
          'Beyaz, siyah, açık gri, koyu gri, marka mavisi ve yumuşak bej gibi 6 hızlı örnek bulunur. Renk seçiciyle herhangi bir özel rengi de seçebilirsiniz.',
      },
      {
        question: 'Bulanık Fotoğraf modunda arka plan bulanıklık yarıçapı kontrolü ne kadar yumuşak?',
        answer:
          'Bulanıklık yarıçapı 4 ile 50 piksel arasında ayarlanır. Düşük değerler hafif bir yumuşatma verirken yüksek değerler arka planı tamamen soyut bir renk alanına dönüştürür.',
      },
      {
        question: 'Degrade içine çerçevelemek için panodan doğrudan ekran görüntüsü yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan yükleyin; ardından arka plan modunu seçin.',
      },
      {
        question: 'Arka plan eklerken logolar, maketler veya portreler bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır, bütün işlem tarayıcınızda yerel olarak yapılır. Dosyalarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Arka plan eklenmiş indirilen dosyalar nasıl adlandırılıyor?',
        answer:
          'Dosya, orijinal adın sonuna _background eki eklenerek kaydedilir; örneğin foto_background.png.',
      },
      {
        question: 'Arka planla kaydetmek fotoğrafların konum EXIF meta verilerini kaldırır mı?',
        answer:
          'Evet, resim yeni bir Canvas üzerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyasında yer almaz.',
      },
      {
        question: 'Bulanık Fotoğraf modunu küçük simgelerde veya SVG grafiklerde önizleyebilir miyim?',
        answer:
          'Evet, ancak çok küçük resimlerde bulanıklık etkisi az görünür. En iyi sonuç için en az 500 piksel genişliğinde kaynaklar kullanın.',
      },
      {
        question: 'Bulanık Fotoğraf modu neden bulanık arka plan üzerine ince bir renk tonu ekliyor?',
        answer:
          'Bulanık arka plan, fotoğrafın kenar renklerinden örneklenir; bu, ön plan ile arka plan arasında yumuşak bir geçiş sağlar ve sert renk sıçramalarını engeller.',
      },
      {
        question: 'Tercih ettiğim iş akışımı kaybetmeden ana fotoğrafı nasıl değiştiririm?',
        answer:
          'Önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın. Arka plan modu, renkler ve ölçek ayarlarınız korunur.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Resim Bölücü',
    shortDescription: 'Resimleri N×M ızgara karolarına veya şeritlere bölün ve ZIP dosyası olarak indirin.',
    category: 'create',
    seoTitle: 'Resim Bölme Ücretsiz – Izgara Böl ve ZIP İndir',
    seoDescription:
      'Resimleri ücretsiz bölün: Instagram ve atlıkarınca için N×M ızgaralar veya şeritler. Kesim çizgilerini görün ve tüm parçaları ZIP dosyası olarak indirin.',
    h1: 'Resim Bölücü',
    subtitle:
      'Instagram ızgara planlayıcıları, arayüz tasarımcıları ve baskı içerik üreticileri için oluşturulan bu tarayıcı içi resim bölücü, geniş panoramaları veya kare fotoğrafları 10×10 boyutuna kadar 100 tam parçaya veya şeritlere böler. Numaralandırılmış kesim çizgilerini canlı olarak inceleyin ve her kesimi tam çözünürlükte ayrı ayrı veya ZIP indirme olarak kaydedin.',
    howToSteps: [
      {
        title: 'Kesilecek bir resim bırakın',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG fotoğrafı yükleyin (veya Ctrl+V ile yapıştırın). İlk 3×3 bölme parçaları yüklendiğinde otomatik olarak oluşturulur.',
      },
      {
        title: 'Numaralandırılmış kesim çizgisi önizlemesini inceleyin',
        description:
          'Fotoğrafınızın solundaki kesikli çizgili ızgarayı inceleyin; son kayıtları kesmeden önce numaralandırılmış parçaların (1 ile N arası) tam sınırlarını gösterir.',
      },
      {
        title: 'Bölme düzenini veya hızlı ayarları seçin',
        description:
          'Izgara (N×M), Yatay Şeritler veya Dikey Şeritler seçin, Satır ve Sütun değerlerini 1 ile 10 arasında yazın ya da 2×2, 3×3 Instagram, 1×3 Atlıkarınca veya 4×1 Şeritler seçeneklerine tıklayın.',
      },
      {
        title: 'Çıktı formatını ve parça kalitesini seçin',
        description:
          'Orij, JPG, PNG veya WEBP seçin ve PNG dışı çıktılar için parça kalitesini (yüzde 10–100, varsayılan yüzde 92) ayarlayın.',
      },
      {
        title: 'Tam çözünürlüklü kesimleri oluşturun',
        description:
          'Satır, Sütun veya formatı her güncellediğinizde N Parçaya Böl düğmesine tıklayarak tüm parçaları tam piksel sınırlarında, tam çözünürlükte yeniden kesin.',
      },
      {
        title: 'Tek tek parçaları veya ZIP dosyasını kaydedin',
        description:
          'Aşağıdaki numaralandırılmış F·S parça kartlarında İndir düğmesini kullanın ya da numaralandırılmış ızgaranın tamamını birlikte indirmek için Tüm Parçaları İndir (ZIP) düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: 'Esnek ızgara ve şerit modları',
        description:
          'Satır × Sütun özel ızgaralarına, yatay satırlara veya dikey kesimlere bölün.',
      },
      {
        title: 'Canlı kesim çizgisi önizlemesi',
        description:
          'Bölmeden önce resminizin üzerinde numaralandırılmış parça sınırlarını görün.',
      },
      {
        title: 'Anında parça önizlemeleri ve ZIP',
        description:
          'Oluşturulan her parçayı inceleyin ve temiz (satır_sütun) adlarla hepsini tek bir ZIP dosyasında indirin.',
      },
      {
        title: 'Tam çözünürlüklü kesim',
        description:
          'Her parça, orijinal tuvalden tam çözünürlükte temiz bir şekilde kesilir.',
      },
    ],
    faqs: [
      {
        question: 'Resim bölücü, Instagram için temiz bir 3×3 ızgara nasıl oluşturuyor?',
        answer:
          'Kare bir fotoğrafı 3 satır ve 3 sütuna böler; her parça tam 1080×1080 piksel olur. Parçalar satır satır numaralandırılır, böylece Instagram ızgarasına doğru sırada yüklersiniz.',
      },
      {
        question: 'Bölücüyle tek seferde ne kadar büyük bir ızgaraya kesebilirim?',
        answer:
          'Satır ve sütun değerleri 1 ile 10 arasında ayarlanabilir; en büyük ızgara 10×10, yani 100 parçadır. Çok küçük parçalar için kaynağın yeterince büyük olması gerekir.',
      },
      {
        question: 'Yatay ve dikey şeritler, Izgara (N×M) modundan nasıl farklıdır?',
        answer:
          'Izgara modu resmi hem satır hem sütun olarak böler. Yatay Şeritler yalnızca yatay dilimler, Dikey Şeritler yalnızca dikey dilimler oluşturur; atlıkarınca ve uzun ekran görüntüsü bölme için idealdir.',
      },
      {
        question: 'Bölücü tek tıkla hangi bölme hazır ayarlarını içeriyor?',
        answer:
          '2×2, 3×3 Instagram, 1×3 Atlıkarınca ve 4×1 Şeritler hazır ayarlarını içerir. Birine tıkladığınızda satır ve sütun değerleri otomatik olarak ayarlanır.',
      },
      {
        question: 'Oluşturulan parçalar orijinal piksel boyutlarına küçültülüyor veya kırpılıyor mu?',
        answer:
          'Hayır, parçalar orijinal çözünürlükten kesilir; hiçbir parça ölçeklenmez. Parça boyutları, orijinal boyutun satır ve sütun sayısına bölünmesiyle bulunur.',
      },
      {
        question: 'Resmimin genişliği veya yüksekliği eşit parçalara bölünmezse ne olur?',
        answer:
          'Kalan pikseller son satır ve sütun parçalarına dağıtılır. Bu nedenle son parçalar birkaç piksel daha büyük olabilir; fark genellikle fark edilmez.',
      },
      {
        question: 'Bölücünün ZIP dosyasını indirdikten sonra hangi parçanın nereye gittiğini hatırlamam gerekiyor mu?',
        answer:
          'Hayır, parçalar satır_sütun düzeninde adlandırılır (örneğin parca_1_1, parca_1_2). Dosya adları, ızgaradaki konumu doğrudan gösterir.',
      },
      {
        question: 'Satır, sütun veya format değişiklikleri oluşturulan parçaları otomatik olarak güncelliyor mu?',
        answer:
          'Hayır, değişiklikten sonra N Parçaya Böl düğmesine tıklamanız gerekir. Bu, ayarları değiştirirken gereksiz yeniden işlemeyi önler.',
      },
      {
        question: 'Bölücüde hangi giriş formatları çalışıyor?',
        answer:
          'JPG, PNG, WebP, HEIC, GIF, BMP ve SVG dosyaları çalışır; dosya başına 20 MB sınırı vardır.',
      },
      {
        question: 'Şeffaf bir PNG sprite sayfasını bölmek şeffaf arka planları korur mu?',
        answer:
          'Evet, çıktı olarak Orijinal, PNG veya WebP seçtiğinizde her parça şeffaflığını korur. JPG seçerseniz şeffaf alanlar beyazla doldurulur.',
      },
      {
        question: 'Uzun bir ekran görüntüsünü panodan yapıştırıp yazdırılabilir bölümlere ayırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak yükleyin; ardından Yatay Şeritler moduyla yazdırılabilir parçalara bölün.',
      },
      {
        question: 'Bölücüde PNG parçaları için parça kalitesi kaydırıcısı görünüyor mu?',
        answer:
          'Hayır, PNG kayıpsız bir formattır; kalite kaydırıcısı yalnızca JPG ve WebP çıktılarında görünür.',
      },
      {
        question: 'Bölücünün toplu ZIP indirmesi nasıl adlandırılıyor?',
        answer:
          'ZIP dosyası, orijinal dosya adı ve ızgara boyutuyla adlandırılır; örneğin foto_3x3_tiles.zip.',
      },
      {
        question: 'Izgara kesimi sırasında fotoğraflar harici sunuculara yükleniyor mu?',
        answer:
          'Hayır, bütün kesim işlemleri tarayıcınızda yerel olarak yapılır. Fotoğraflarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Bölme, kamera EXIF etiketlerini ve GPS konum meta verilerini kaldırır mı?',
        answer:
          'Evet, parçalar yeni Canvas tuvallerinden kaydedildiği için EXIF ve GPS etiketleri çıktı dosyalarında yer almaz.',
      },
      {
        question: 'Animasyonlu bir GIF dosyası ızgara parçalarına bölünürse ne olur?',
        answer:
          'Canvas ilk kareyi çizer ve statik parçalar oluşturur. Animasyon korunmaz.',
      },
      {
        question: 'Fotoğrafım kare değilse 3×3 parçalarımın oranı neden hafifçe farklı olabilir?',
        answer:
          'Kare olmayan bir fotoğraf 3×3 bölündüğünde parçalar fotoğrafın oranını korur; örneğin dikey bir fotoğrafta parçalar dikey dikdörtgen olur. Tam kare parçalar için önce resmi kare olarak kırpın.',
      },
      {
        question: 'Bölünmüş bir ızgarayı indirdikten sonra resmi nasıl değiştiririm?',
        answer:
          'Önizleme başlığındaki Resmi Değiştir düğmesine basın veya yeni bir dosya bırakın. Izgara ayarlarınız korunur ve yeni resme uygulanır.',
      },
      {
        question: 'Oyun geliştiricileri bu aracı simge sayfalarını kesmek için kullanabilir mi?',
        answer:
          'Evet, sprite ve simge sayfalarını ızgara moduyla eşit parçalara bölebilirsiniz. Şeffaf PNG sayfaları için PNG çıktısı seçin.',
      },
      {
        question: 'Resim bölücü iPhone, iPad ve Android telefonlarda çalışıyor mu?',
        answer:
          'Evet, kontroller dokunmatik ekranlar için tasarlanmıştır; iOS Safari ve Android Chrome üzerinde sorunsuz çalışır.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Resim DPI Değiştirici',
    shortDescription: 'JPEG ve PNG dosyalarının DPI meta verilerini (72, 150, 300 veya özel) kalite kaybı olmadan değiştirin.',
    category: 'developer',
    seoTitle: 'Resim DPI Değiştirme Ücretsiz – 300 DPI Yapın',
    seoDescription:
      'JPG ve PNG resimlerinizin DPI değerini ücretsiz değiştirin: 72, 150, 300 veya 600 DPI; kalite kaybı yok. Doğrulanmış meta veriler ve tarayıcıda toplu işlem.',
    h1: 'Resim DPI Değiştirici Ücretsiz',
    subtitle:
      'Baskı portallarına dosya hazırlayan tasarımcılar, matbaalar, yazarlar ve öğrenciler için oluşturulan bu kayıpsız resim DPI değiştirici, piksel verilerine dokunmadan JPEG ve PNG çözünürlük başlıklarını günceller. 72, 96, 150, 300 veya 600 DPI ya da özel DPI seçeneğiyle toplu işlem yapın; doğrulanmış okuma ile birlikte.',
    howToSteps: [
      {
        title: 'Önce hedef DPI değerinizi seçin veya ayarlayın (veya istediğiniz zaman)',
        description:
          'Hazır ayarlardan birine tıklayın: 72 DPI (Ekran), 96 DPI (Windows), 150 DPI (Taslak Baskı), 300 DPI (Yüksek Kalite Baskı) veya 600 DPI (Arşiv); ya da 1 ile 2400 arasında herhangi bir özel DPI yazın.',
      },
      {
        title: 'Bir veya daha fazla resim yükleyin',
        description:
          'Her biri 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyalarını yükleme alanına bırakın (veya Ctrl+V ile yapıştırın). Dosyalar seçilen DPI ile hemen işlenir.',
      },
      {
        title: 'Öncesi, doğrulanmış DPI ve işleme yöntemini inceleyin',
        description:
          'Her kart, orijinal DPI ile doğrulanmış çıktı DPI değerini yan yana gösterir ve Kayıpsız JPEG Başlık Güncellemesi, Kayıpsız PNG pHYs Güncellemesi veya pHYs DPI ile PNG formatına Dönüştürüldü rozetlerinden biriyle onaylar.',
      },
      {
        title: 'Gerekirse kuyruktaki dosyalarda DPI değerini dinamik olarak değiştirin',
        description:
          'Başka bir hazır DPI ayarına tıklayın veya yeni bir özel DPI yazıp [X] DPI Uygula düğmesine basarak kuyruktaki her dosyayı otomatik olarak yeniden işleyin.',
      },
      {
        title: 'Tek tek dosyaları veya toplu ZIP dosyasını indirin',
        description:
          'Tek tek sonuç kartlarında İndir düğmesine tıklayın (&lt;temel&gt;_&lt;dpi&gt;dpi.&lt;uzantı&gt; adıyla) ya da iki veya daha fazla dosya hazır olduğunda Tümünü İndir (ZIP) düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: 'Kayıpsız gerçek JPEG ve PNG başlık düzenleme',
        description:
          'Resim piksellerine dokunmadan JPEG dosyalarında JFIF APP0/EXIF yoğunluğunu ve PNG dosyalarında geçerli CRC32 ile pHYs parçasını günceller.',
      },
      {
        title: 'Doğrulanmış öncesi ve sonrası okuma',
        description:
          'Dosyaya kaydedilen tam doğrulanmış DPI değerini görmeniz için çıktı dosyasını otomatik olarak yeniden çözümler.',
      },
      {
        title: 'Toplu DPI işleme',
        description:
          'Baskıya hazır onlarca grafiği aynı anda güncelleyin ve ZIP dosyası olarak kaydedin.',
      },
      {
        title: 'WebP/HEIC yedeği',
        description:
          'DPI değeri olmayan formatlar, tam pHYs DPI parçası gömülü kayıpsız PNG dosyalarına temiz bir şekilde dönüştürülebilir.',
      },
    ],
    faqs: [
      {
        question: 'DPI değiştirici, JPEG ve PNG dosyalarını kalite kaybı olmadan nasıl düzenliyor?',
        answer:
          'Araç yalnızca dosya başlığındaki çözünürlük alanını değiştirir: JPEG dosyalarında JFIF yoğunluk baytları, PNG dosyalarında pHYs parçası güncellenir. Piksel verileri hiç değiştirilmediği için kalite birebir aynı kalır.',
      },
      {
        question: 'DPI değiştirmek piksel genişliğini ve yüksekliğini veya fiziksel baskı boyutunu değiştirir mi?',
        answer:
          'Piksel boyutları aynı kalır; değişen yalnızca fiziksel baskı boyutudur. Örneğin 3000 piksel genişliğinde bir resim, 300 DPI değerinde 10 inç, 150 DPI değerinde 20 inç olarak basılır.',
      },
      {
        question: 'Fotoğraf makinesi fotoğrafları veya ekran görüntüleri DPI bölümünde genellikle neden Öncesi: Ayarlanmamış gösteriyor?',
        answer:
          'Birçok kamera ve ekran görüntüsü aracı DPI başlığı yazmaz. Bu durumda DPI tanımsızdır ve araç "Ayarlanmamış" gösterir; siz hedef DPI seçtiğinizde başlık eklenir.',
      },
      {
        question: 'Doğrulanmış DPI rozeti güncellemenin işe yaradığını nasıl onaylıyor?',
        answer:
          'Araç, çıktı dosyasını kaydettikten sonra yeniden okur ve dosyaya yazılan gerçek DPI değerini gösterir. Rozetteki değer hedef değerle eşleşiyorsa güncelleme başarılı olmuştur.',
      },
      {
        question: 'DPI değiştirici WebP, HEIC, BMP, GIF veya SVG dosyalarını nasıl işliyor?',
        answer:
          'Bu formatlarda DPI başlığı yoktur; araç bunları DPI değeri gömülü kayıpsız PNG dosyalarına dönüştürür. Orijinal format korunmaz ancak piksel verileri kayıpsız aktarılır.',
      },
      {
        question: 'Hangi DPI hazır ayarları var ve özel DPI hangi aralığı kabul ediyor?',
        answer:
          '72 DPI (Ekran), 96 DPI (Windows), 150 DPI (Taslak Baskı), 300 DPI (Yüksek Kalite Baskı) ve 600 DPI (Arşiv) hazır ayarları vardır. Özel DPI 1 ile 2400 arasında herhangi bir değer olabilir.',
      },
      {
        question: 'JPEG DPI güncellemesi kameramın EXIF etiketlerini ve ICC profilini korur mu?',
        answer:
          'Evet, kayıpsız başlık güncellemesi yalnızca yoğunluk alanını değiştirir; EXIF etiketleri, ICC renk profili ve diğer meta veriler korunur.',
      },
      {
        question: 'PNG DPI değeri dönüştürmeden sonra neden bazen 299 veya 300 DPI olarak okunuyor?',
        answer:
          'PNG pHYs parçası metre başına piksel saklar; inç başına DPI değerine dönüşümde yuvarlama yapılır. 300 DPI hedefi, dönüşümde 299,99 gibi bir değer üretebilir ve bazı okuyucular bunu 299 olarak gösterir.',
      },
      {
        question: '400×400 boyutunda bir web küçük resmini 300 DPI yapmak baskıda net olmasını sağlar mı?',
        answer:
          'Hayır, DPI değiştirmek piksel eklemez. 400×400 piksel bir resim, 300 DPI değerinde yalnızca 1,3×1,3 inç boyutunda net basılır. Baskı için daha büyük bir kaynak gerekir.',
      },
      {
        question: 'Birden fazla baskı öğesini toplu olarak 300 DPI yapıp ZIP olarak kaydedebilir miyim?',
        answer:
          'Evet, bütün dosyaları tek kuyruğa yükleyin, 300 DPI seçin ve hazır olduklarında Tümünü İndir (ZIP) düğmesine basın.',
      },
      {
        question: '300 DPI olarak işledikten sonra fikrimi değiştirip 600 DPI uygulayabilir miyim?',
        answer:
          'Evet, yeni bir DPI seçip [X] DPI Uygula düğmesine basmanız yeterlidir. Kuyruktaki dosyalar yeni değerle yeniden işlenir; dosyaları yeniden yüklemenize gerek yoktur.',
      },
      {
        question: '300 DPI ayarlamak JPEG veya PNG dosya boyutunu çok artırır mı?',
        answer:
          'Hayır, yalnızca birkaç baytlık başlık bilgisi değişir. Piksel verileri aynı kaldığı için dosya boyutu neredeyse hiç değişmez.',
      },
      {
        question: 'Gizli deneme baskıları, kapaklar veya taramalar harici bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır, bütün işlem tarayıcınızda yerel olarak yapılır. Dosyalarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Amazon KDP veya akademik dergiler gibi platformlar 72 DPI dosyalarını neden reddediyor?',
        answer:
          'Bu platformlar baskı kalitesi için en az 300 DPI ister. 72 DPI, ekran için yeterli olsa da baskıda bulanık görünür; bu nedenle dosyalar reddedilir.',
      },
      {
        question: 'Çıktı dosyaları tek tek veya ZIP olarak kaydedilirken nasıl adlandırılıyor?',
        answer:
          'Tek dosyalar &lt;temel&gt;_&lt;dpi&gt;dpi.&lt;uzantı&gt; biçiminde adlandırılır; örneğin kapak_300dpi.jpg. ZIP dosyası dpi_images_compressmypic.zip adını alır.',
      },
      {
        question: 'DPI değiştirici, inç yerine santimetre başına nokta kullanan JPEG dosyalarında çalışıyor mu?',
        answer:
          'Evet, araç JFIF başlığındaki birim baytını okur. Santimetre başına nokta kullanan dosyalar doğru şekilde inç başına DPI değerine dönüştürülerek gösterilir ve güncellenir.',
      },
      {
        question: 'DPI etiketlerini değiştirmek yerine kaldırabilir veya silebilir miyim?',
        answer:
          'Hayır, bu araç DPI değerini ayarlamak için tasarlanmıştır; etiketi tamamen kaldırmaz. DPI etiketlerini silmek için Meta Veri Silme aracını kullanabilirsiniz.',
      },
      {
        question: 'Bozuk bir JPEG veya desteklenmeyen bir format yüklersem ne olur?',
        answer:
          'Bozuk veya desteklenmeyen dosya, hata rozetiyle işaretlenir; kuyruktaki diğer dosyalar etkilenmez. Geçerli dosyalar normal şekilde işlenir.',
      },
      {
        question: 'Panodan ekran görüntüsü yapıştırıp hemen 300 DPI olarak damgalayabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basın; dosya seçili DPI değeriyle hemen işlenir.',
      },
      {
        question: 'Bu kayıpsız DPI düzenleyici Windows, Mac, Linux ve telefon tarayıcılarında çalışıyor mu?',
        answer:
          'Evet, bütün işlem tarayıcıda yerel olarak yapılır; işletim sisteminden bağımsız olarak Chrome, Safari, Edge ve Firefox tarayıcılarında çalışır.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Resimden Base64 Oluşturma',
    shortDescription: 'Herhangi bir resmi Base64 veri URL, HTML img etiketi veya CSS parçacığı olarak kodlayın.',
    category: 'developer',
    seoTitle: 'Resimden Base64 Oluşturma Ücretsiz – Veri URL ve HTML',
    seoDescription:
      'Resimleri ücretsiz Base64 formatına dönüştürün: veri URL, saf Base64, HTML <img> etiketleri ve CSS url() kuralları oluşturun. Tek tıkla kopyalayın; hepsi tarayıcınızda.',
    h1: 'Resimden Base64 Dönüştürücü',
    subtitle:
      'Ön yüz geliştiricileri, e-posta şablonu programcıları ve teknik yazarlar için oluşturulan bu yerel resimden Base64 dönüştürücü, ikili resim öğelerini tek adımda kopyalamaya hazır metin dizelerine dönüştürür. Kendi simgelerinizi yüklemeden Veri URL, Saf Base64, HTML img ve CSS url() sekmeleri arasında anında geçiş yapın.',
    howToSteps: [
      {
        title: 'Bir resim bırakın, seçin veya yapıştırın',
        description:
          '15 MB boyutuna kadar herhangi bir JPG, PNG, WebP, SVG, GIF, BMP, ICO veya AVIF dosyasını yükleme alanına yükleyin ya da panodan Ctrl+V ile resim yapıştırın.',
      },
      {
        title: 'Dosya boyutunu ve karakter yükünü inceleyin',
        description:
          'Üstteki özet kartında resminizin küçük resmini, bayt cinsinden orijinal boyutunu, doğal boyutlarını (varsa), tam çıktı karakter sayısını ve Base64 yük yüzdesini inceleyin.',
      },
      {
        title: '4 geliştirici çıktı sekmesi arasında geçiş yapın',
        description:
          'JSON yükleri, HTML içine gömülü resimler veya stil sayfaları için dizeyi biçimlendirmek üzere Veri URL, Saf Base64, HTML &lt;img&gt; veya CSS url() sekmelerine tıklayın.',
      },
      {
        title: 'Panoya kopyalayın veya .txt dosyası olarak kaydedin',
        description:
          'Dizeyi kopyalamak için Çıktıyı Kopyala düğmesine tıklayın (veya tümünü seçmek için kod kutusunun içine tıklayın) ya da &lt;dosya-adı&gt;_&lt;sekme&gt;.txt olarak indirmek için .TXT Kaydet düğmesine tıklayın.',
      },
      {
        title: 'Dosya değiştirmek için Başka Kodla düğmesine tıklayın',
        description:
          'Sıradaki simgeyi veya sprite dosyasını kodlamaya hazır olduğunuzda Başka Kodla düğmesine tıklayarak çıktıyı temizleyin ve yerel nesne belleğini serbest bırakın.',
      },
    ],
    features: [
      {
        title: 'Geliştiriciler için 4 çıktı formatı',
        description:
          'Veri URL, Saf Base64, HTML &lt;img&gt; ve CSS background-image parçacıklarını otomatik olarak oluşturur.',
      },
      {
        title: 'Tam bayt ve karakter ölçümleri',
        description:
          'Orijinal ikili dosya boyutunu kodlanmış Base64 dizesinin uzunluğuyla hemen karşılaştırın.',
      },
      {
        title: 'Tek tıkla kopyalama ve TXT indirme',
        description:
          'Devasa Base64 dizelerini panoya güvenilir bir şekilde kopyalayın veya düz metin dosyası olarak kaydedin.',
      },
      {
        title: 'FileReader ile yüzde 100 yerel kodlama',
        description:
          'Yükleme yok: kodlama tarayıcı sekmenizin içinde yerel olarak gerçekleşir.',
      },
    ],
    faqs: [
      {
        question: 'Resimden Base64 dönüştürücü çıktı boyutuna neden yaklaşık yüzde 33 ekliyor?',
        answer:
          'Base64, her 3 baytlık ikili veriyi 4 ASCII karakterle temsil eder. Bu, 4/3 oranı nedeniyle çıktının orijinalden yaklaşık yüzde 33 daha büyük olmasına yol açar.',
      },
      {
        question: 'Bir resmi Base64 olarak kodladıktan sonra hangi dört çıktı formatını oluşturabilirim?',
        answer:
          'Veri URL (data:image/...;base64,...), Saf Base64 (yalnızca kodlanmış dize), HTML &lt;img&gt; etiketi (src özniteliğiyle) ve CSS url() kuralı oluşturabilirsiniz.',
      },
      {
        question: 'Kodlama resim kalitesini değiştirir, SVG kodunu kaldırır veya animasyonlu GIF dosyalarını düzleştirir mi?',
        answer:
          'Hayır, Base64 yalnızca ikili veriyi metin olarak temsil eder; resim verisi değişmez. SVG kodu ve GIF animasyonu kod çözüldüğünde birebir geri gelir.',
      },
      {
        question: 'Base64 kodlama hangi dosya formatlarını ve en büyük yükleme boyutunu destekliyor?',
        answer:
          'JPG, PNG, WebP, SVG, GIF, BMP, ICO ve AVIF dosyalarını destekler; dosya başına 15 MB sınırı vardır.',
      },
      {
        question: 'Normal resim dosyalarına başvurmak yerine Base64 veri URL gömmek ne zaman mantıklıdır?',
        answer:
          'Küçük simgeler, tek dosyalık HTML e-postaları veya harici dosya isteğinden kaçınmak istediğiniz durumlarda mantıklıdır. Büyük resimlerde yüzde 33 yük nedeniyle ayrı dosya kullanmak daha iyidir.',
      },
      {
        question: 'HTML &lt;img&gt; sekmesi genişlik ve yükseklik özniteliklerini neden otomatik olarak ekliyor?',
        answer:
          'Genişlik ve yükseklik öznitelikleri, tarayıcının resim yüklenmeden önce yer ayırmasını sağlar. Bu, sayfa düzeninin kaymasını (CLS) önler.',
      },
      {
        question: 'Büyük dizeleri kopyalamak zor olduğunda Base64 çıktısını indirebilir miyim?',
        answer:
          'Evet, .TXT Kaydet düğmesi çıktıyı düz metin dosyası olarak indirir. Bu, çok uzun dizelerle çalışırken pano sorunlarını önler.',
      },
      {
        question: 'Çıktıyı Kopyala düğmesine tıkladığımda tarayıcım pano izinlerini engellerse ne olur?',
        answer:
          'Kod kutusunun içine tıklayarak tüm dizeyi seçebilir ve Ctrl+C ile el ile kopyalayabilirsiniz. Ayrıca .TXT Kaydet seçeneğiyle dosyayı indirebilirsiniz.',
      },
      {
        question: 'API JSON yükleri gönderirken Saf Base64 ile Veri URL arasındaki fark nedir?',
        answer:
          'Saf Base64 yalnızca kodlanmış dizeyi içerir; API alanları için uygundur. Veri URL ise data:image/...;base64, ön ekini de içerir ve tarayıcıda doğrudan resim olarak kullanılabilir.',
      },
      {
        question: 'Kodlama sırasında arayüz simgeleri, diyagramlar veya müşteri öğeleri bir yere yükleniyor mu?',
        answer:
          'Hayır, kodlama FileReader ile tarayıcınızda yerel olarak yapılır. Dosyalarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Bir SVG logosu veya favicon.ico dosyası sorunsuz kodlayabilir miyim?',
        answer:
          'Evet, SVG ve ICO dosyaları desteklenir. SVG, metin tabanlı olduğu için doğrudan kodlanır; ICO dosyaları ikili olarak okunup kodlanır.',
      },
      {
        question: 'Yük yüzdesi HTML &lt;img&gt; ve CSS url() sekmelerinde neden biraz daha yüksek?',
        answer:
          'Bu sekmeler, kodlanmış dizenin çevresine etiket ve öznitelik metni ekler. Ek HTML ve CSS sözdizimi, toplam karakter sayısını artırır.',
      },
      {
        question: 'Hızlı bir veri URL almak için panodan doğrudan ekran görüntüsü yapıştırabilir miyim?',
        answer:
          'Evet, ekran görüntüsünü kopyalayıp sayfada Ctrl+V (Mac üzerinde Cmd+V) tuşlarına basarak doğrudan kodlayabilirsiniz.',
      },
      {
        question: 'Saf Base64, = dolgulu standart + ve / karakterlerini korur mu?',
        answer:
          'Evet, çıktı standart Base64 alfabesini kullanır: A–Z, a–z, 0–9, + ve / karakterleri ile = dolgu karakteri korunur.',
      },
      {
        question: 'Bazı e-posta istemcileri gömülü Base64 resimlerini neden engelliyor?',
        answer:
          'Bazı e-posta istemcileri güvenlik nedeniyle veri URL resimlerini engeller veya boyut sınırı uygular. E-postalarda küçük simgeler için Base64, büyük resimler için barındırılan bağlantı kullanın.',
      },
      {
        question: 'Base64 kodlamadan önce orijinal kamera meta verilerini nasıl korurum veya kaldırırım?',
        answer:
          'Base64, dosyanın ikili verisini olduğu gibi kodlar; EXIF meta verileri korunur. Meta verileri kaldırmak için önce Meta Veri Silme aracını kullanın.',
      },
      {
        question: 'Büyük PNG veya JPG dosyalarını Base64 formatına dönüştürmeden önce küçültmeli miyim?',
        answer:
          'Evet, önerilir. Base64 yüzde 33 yük eklediği için büyük dosyalar çok uzun dizeler üretir. Önce sıkıştırma veya boyutlandırma araçlarıyla dosyayı küçültün.',
      },
      {
        question: 'Bazı nadir veya bozuk ICO dosyalarında boyutlar neden atlanıyor?',
        answer:
          'Bazı ICO dosyaları standart dışı başlıklar içerir veya bozuktur; bu durumda boyut bilgisi okunamaz. Kodlama yine de çalışır, yalnızca boyut alanları boş bırakılır.',
      },
      {
        question: 'İlk parçacığı kopyaladıktan sonra başka bir resmi nasıl kodlarım?',
        answer:
          'Başka Kodla düğmesine tıklayın; çıktı temizlenir ve yeni bir dosya yükleyebilirsiniz.',
      },
      {
        question: 'Base64 kodlayıcı mobil Safari ve Chrome tarayıcılarında çalışıyor mu?',
        answer:
          'Evet, FileReader API mobil tarayıcılarda desteklenir; iOS Safari ve Android Chrome üzerinde sorunsuz çalışır.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },

  {
    slug: '/base64-to-image',
    name: 'Base64 Görüntüye Çevirme',
    shortDescription: 'Base64 veri URL adresini veya saf Base64 dizesini çözerek yeniden resme dönüştürün.',
    category: 'developer',
    seoTitle: 'Base64 Görüntüye Çevirme Ücretsiz – Çevrimiçi Kod Çözücü',
    seoDescription:
      'Base64 görüntüye çevirme ücretsiz ve çevrimiçi: veri URL adresini veya saf Base64 kodunu yapıştırın, resmi anında görün. PNG, JPG, WebP, GIF ve SVG formatlarını tarayıcınızda algılar.',
    h1: 'Base64 Görüntüye Çevirici',
    subtitle:
      'API yüklemelerinde hata ayıklayan web mühendisleri, gömülü simgeleri inceleyen e-posta uzmanları ve kalite testçileri için tasarlanan bu tarayıcı içi Base64 görüntüye çevirici, veri URL adreslerini ve saf Base64 dizelerini indirilebilir dosyalara dönüştürür. Algılanan MIME türünü, piksel boyutlarını ve bayt boyutunu cihazınızda, gizli bir şekilde inceleyin.',
    howToSteps: [
      {
        title: 'Base64 dizenizi veya veri URL adresinizi yapıştırın',
        description:
          'Tam bir data:image/...;base64,... dizesini veya saf Base64 karakterlerini Base64 Dizesi veya Veri URL Adresi Yapıştır kutusuna yapıştırın.',
      },
      {
        title: 'Otomatik kod çözmeyi bekleyin (veya Resmi Çöz düğmesine basın)',
        description:
          'Kod çözücü, yapıştırdığınız anda (veya Resmi Çöz düğmesine bastığınızda) boşlukları, URL güvenli karakterleri ve sihirli başlık baytlarını inceleyerek resmi doğrular.',
      },
      {
        title: 'Önizlemeyi, formatı, boyutu ve boyutları inceleyin',
        description:
          'Çözülen grafiği şeffaflık dama tahtası üzerinde, Geçerli Resim Çözüldü rozetiyle birlikte görün; algılanan formatı, ikili boyutu ve genişlik × yükseklik değerini kontrol edin.',
      },
      {
        title: 'İndirme formatınızı seçin',
        description:
          'Çözülen ikili dosyayı olduğu gibi kaydetmek için Orijinal seçeneğini ya da kaydederken resmi dönüştürmek için PNG, JPG veya WEBP seçeneğini belirleyin.',
      },
      {
        title: 'Çözülen resim dosyanızı indirin',
        description:
          'Çözülen Resim Dosyasını İndir düğmesine basarak decoded_image.<uzantı> dosyasını doğrudan cihazınıza kaydedin ya da başka bir yük denemek için giriş kutusunun üzerindeki Temizle düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Eksik veri URL öneki otomatik algılanır',
        description: 'Saf Base64 kodundan bile PNG, JPEG, GIF, WebP, BMP ve SVG sihirli başlıklarını otomatik olarak tanır.',
      },
      {
        title: 'Anında doğrulama ve hata mesajları',
        description: 'Geçersiz Base64 karakterlerini veya bozuk başlıkları açıkça belirtir.',
      },
      {
        title: 'İsteğe bağlı format dönüştürme',
        description: 'Çözülen ikili dosyayı olduğu gibi indirin ya da PNG, JPG veya WebP olarak yeniden kaydedin.',
      },
      {
        title: 'Tarayıcıda gizli kod çözme',
        description: 'Dahili belirteçler, e-posta öğeleri ve kendi arayüz simgeleriniz için güvenlidir.',
      },
    ],
    faqs: [
      {
        question: 'Bu Base64 görüntüye çevirici, data:image/ öneki olmayan dizeleri okuyabilir mi?',
        answer:
          'Evet, veri URL başlığı olmadan saf Base64 yapıştırırsanız kod çözücü, çözülen ikili akışın başındaki sihirli imza baytlarını inceler. PNG, JPEG, GIF, WebP, BMP, ICO ve gömülü XML/SVG işaretlemesini otomatik olarak algılar.',
      },
      {
        question: 'Kod çözücü, URL güvenli Base64 çeşitlerini ve kazara oluşan satır sonlarını işliyor mu?',
        answer:
          'Evet, atob() çağrılmadan önce kod çözücü boşlukları ve satır sonlarını otomatik olarak temizler ve URL güvenli - ve _ karakterlerini standart + ve / karakterlerine geri çevirir. Böylece JSON kayıtlarından, terminal çıktılarından veya JWT yüklerinden kopyalanan sarılmış dizeler temiz bir şekilde çalışır.',
      },
      {
        question: 'Bozuk bir Base64 yükü veya resim olmayan bir veri yapıştırırsam ne olur?',
        answer:
          'Geçersiz Base64 karakterleri anında bir doğrulama mesajı verirken, geçerli Base64 baytları tarayıcının okuyabildiği bir resim oluşturmuyorsa baytların görüntülenemediğini açıklayan açık bir hata gösterilir. Sayfada hiçbir şey bozulmaz veya takılmaz.',
      },
      {
        question: 'Dize çözüldükten sonra kod çözücü hangi indirme formatı seçeneklerini sunuyor?',
        answer:
          'Kaydetmeden önce Orijinal, PNG, JPG veya WEBP seçebilirsiniz. Orijinal seçeneğinde tam saf ikili baytlar decoded_image.<uzantı> olarak dokunulmadan kaydedilirken, PNG, JPG veya WEBP seçeneğinde çözülen grafik HTML5 Canvas üzerinde yeniden gösterilir.',
      },
      {
        question: 'Çözülen bir PNG veya SVG dosyasını JPG olarak yeniden kaydedersem şeffaf alanlara ne olur?',
        answer:
          'İndirme Formatı bölümünde JPG seçtiğinizde, yüzde 92 kaliteyle kodlamadan önce tuval otomatik olarak katı beyaz (#FFFFFF) bir arka planla doldurulur. Orijinal, PNG veya WEBP seçeneğini korumak, dama tahtası önizlemesi üzerinde tam şeffaflığı korur.',
      },
      {
        question: 'Kod çözücü, Orijinal seçeneğinde animasyonlu GIF ve SVG vektör dosyalarını koruyor mu?',
        answer:
          'Evet, Orijinal seçeneğinde çözülen bayt dizisinden doğrudan oluşturulan tam blob indirilir; SVG vektör yolları ve çok kareli GIF animasyonları bozulmadan kalır. İndirme formatını PNG, JPG veya WEBP olarak değiştirmenin SVG dosyalarını rasterleştirdiğini veya GIF dosyalarının ilk karesini aldığını unutmayın.',
      },
      {
        question: 'Çözülen resim önizlemesinin yanında hangi ölçümler görünür?',
        answer:
          'Doğrulandıktan sonra sağdaki özet paneli, algılanan formatla (PNG, JPEG veya SVG+XML gibi) birlikte yeşil bir Geçerli Resim Çözüldü durum rozeti gösterir. Hemen altında çözülen tam ikili boyutu KB/MB cinsinden ve doğal piksel boyutlarını inceleyebilirsiniz.',
      },
      {
        question: ';base64, içermeyen bir data:image/svg+xml dizesi neden kodlama hatası veriyor?',
        answer:
          'Base64 olmayan veri URI adresleri (örneğin yüzde kodlamalı SVG dizeleri, data:image/svg+xml,%3Csvg...) Base64 yükü değil düz metindir. Bu araç, standart Base64 yüklerini veya ;base64 içeren veri URI adreslerini açıkça doğrular; bu nedenle geçersiz girdiler net bir şekilde hata verir.',
      },
      {
        question: 'Dahili API yanıtlarını, QR belirteçlerini veya özel simgeleri burada çözmek riskli mi?',
        answer:
          'Hayır, dize temizleme, atob() ile bayt çözme, MIME imza algılama ve resim oluşturma işlemlerinin tamamı tarayıcı sekmenizin belleğinde gerçekleşir. Kodlanmış dizeler asla ağ üzerinden geçmez ve uzak kayıtlara dokunmaz.',
      },
      {
        question: 'Dama tahtası önizlemesi, çözülen simgeleri incelemeye nasıl yardımcı olur?',
        answer:
          'Önizleme çerçevesinin arkasında ince, açık gri bir dama tahtası deseni gösterilir; böylece şeffaf kırpıntılar, beyaz arayüz simgeleri ve yumuşak gölgeler hemen fark edilir. Dama tahtası olmasaydı şeffaf beyaz logolar boş beyaz bir panelde görünmez olurdu.',
      },
      {
        question: 'Çözülen ikili dosya, yapıştırdığım Base64 metninden neden daha küçük?',
        answer:
          'Base64 metni, ASCII karakter başına 6 bit kullanarak ikili veriyi yaklaşık yüzde 33 oranında büyütür. Saf resim baytlarına geri dönüştürüldüğünde ikili dosyanın orijinal kompakt boyutu geri yüklenir.',
      },
      {
        question: 'Dizemi yapıştırmadan önce HTML tırnakları veya CSS url("...") ile sarabilir miyim?',
        answer:
          'Temiz bir doğrulama için yalnızca veri URL adresini (data:image/...;base64,...) veya Base64 karakterlerin kendisini, çevresinde HTML etiketi veya CSS tırnağı olmadan yapıştırın. Çevreleyen tırnakları kaldırmak, doğrulayıcının saf Base64 okumasını sağlar.',
      },
      {
        question: 'Eski bir BMP veya ICO favicon Base64 dizesini modern WebP formatına nasıl dönüştürürüm?',
        answer:
          'Saf Base64 kodunu veya veri URL adresini yapıştırın, önizlemenin temiz göründüğünü doğrulayın, indirme formatı seçicisinde WEBP seçeneğine tıklayın ve Çözülen Resim Dosyasını İndir düğmesine basın. Tuval dışa aktarıcı hemen sıkıştırılmış bir WebP resmi üretir.',
      },
      {
        question: 'Birkaç megabaytlık Base64 dizelerini ne kadar hızlı çözer?',
        answer:
          'Kod çözme, küçük simgeler ve birkaç megabayttan küçük tipik web fotoğrafları için JavaScript ile yerel olarak milisaniyeler içinde gerçekleşir. Yapıştırılan çok büyük dizeler (onlarca megabayt metin) daha çok tarayıcınızın metin alanı yapıştırma hızına bağlıdır.',
      },
      {
        question: 'Base64 SVG+XML dizelerini net PNG raster dosyalarına çözebilir miyim?',
        answer:
          'Evet, Base64 kodlu bir SVG veri URL adresini veya saf Base64 SVG işaretlemesini yapıştırın; kod çözücü bunu <svg veya <?xml başlıklarıyla otomatik olarak tanır. Ardından vektör grafiği doğal boyutunda tuval üzerinde rasterleştirmek için indirme formatını Orijinal seçeneğinden PNG seçeneğine değiştirin.',
      },
      {
        question: 'Çıktı dosyası neden her zaman decoded_image.<uzantı> olarak indiriliyor?',
        answer:
          'Standart Base64 dizeleri ve veri URL adresleri saf resim baytları ve MIME türleri kodlar; orijinal dosya adı taşımaz. Tüm girdilerde indirmeleri tahmin edilebilir tutmak için dışa aktarıcı, kaydedilen dosyayı algılanan veya seçilen format uzantısıyla birlikte decoded_image olarak adlandırır.',
      },
      {
        question: 'Devasa bir Base64 dizesini silip sonrakini incelemenin en hızlı yolu nedir?',
        answer:
          'Base64 Dizesi Yapıştır kartının sağ üst köşesindeki Temizle düğmesine tıklayarak metin alanını tek dokunuşla temizleyin. Bu, önizleme panelini hemen kaldırır ve tarayıcı belleğindeki geçici nesne URL adreslerini iptal eder.',
      },
      {
        question: 'Base64 dizesi yapıştırmak, Resmi Çöz düğmesine basmadan otomatik olarak çözülüyor mu?',
        answer:
          'Evet, kod çözme, metin giriş kutusuna girer girmez veya değişir değişmez otomatik olarak tetiklenir; böylece geçerli yükler milisaniyeler içinde önizlenir. Resmi Çöz düğmesi, doğrulamayı el ile yeniden çalıştırmak istediğinizde hazır bekler.',
      },
      {
        question: 'İndirilen bir resmi daha sonra HTML veya CSS veri URL adresine nasıl geri kodlarım?',
        answer:
          'Aşağıdaki İlgili Araçlar bölümüne gidin ve yönü temiz bir şekilde tersine çevirmek için Resimden Base64 aracını açın. Herhangi bir JPG, PNG, WebP, SVG, GIF, BMP veya ICO resmini veri URL adresi, saf Base64, HTML <img> veya CSS url() parçacıklarına geri dönüştürür.',
      },
      {
        question: 'Base64 görüntüye çevirici çevrimdışı veya akıllı telefonlarda çalışıyor mu?',
        answer:
          'Evet, her dize denetimi, bayt çözme ve tuval format dönüştürme işlemi ağ çağrısı olmadan tarayıcının yerleşik API arayüzleriyle çalışır. Sayfa yüklendikten sonra iOS Safari, Android Chrome, Windows, macOS ve Linux üzerinde akıcı bir şekilde çalışır.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Resim Renk Paleti Çıkarıcı',
    shortDescription: 'Herhangi bir fotoğraftan baskın renkleri HEX, RGB, HSL kodları ve dışa aktarma ile çıkarın.',
    category: 'developer',
    seoTitle: 'Renk Paleti Çıkarıcı Ücretsiz – Fotoğraftan Renk Bulma',
    seoDescription:
      'Fotoğraftan renk paleti çıkarma ücretsiz ve çevrimiçi: 3 ile 12 arasında renk örneği, HEX, RGB ve HSL kodları, CSS değişkenleri, JSON ve PNG kartı; hepsi tarayıcınızda.',
    h1: 'Renk Paleti Çıkarıcı Ücretsiz',
    subtitle:
      'Median-Cut niceleme ile çalışan tarayıcı içi renk paleti çıkarıcımızla herhangi bir fotoğraf, illüstrasyon veya arayüz ekran görüntüsündeki ana renk uyumunu keşfedin. Arayüz tasarımcıları, marka stratejistleri ve ön yüz geliştiricileri için tasarlandı; bulunma yüzdeleriyle 3 ile 12 arasında dengeli örnek üretir, tek tıkla HEX, RGB ve HSL kodlarını kopyalar, CSS özel özellikleri, JSON verileri ve paylaşılabilir PNG palet kartları sunar; hepsi cihazınızda yerel olarak çalışır.',
    howToSteps: [
      {
        title: 'Kaynak resminizi yükleyin',
        description:
          '20 MB boyutuna kadar herhangi bir JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyasını yükleme alanına bırakın veya seçin (ya da panodan yapıştırın).',
      },
      {
        title: 'Renk sayısını belirleyin (3–12)',
        description:
          'Renk Sayısı kaydırıcısını 3 minimalist vurgu tonu ile 12 ayrıntılı örnek arasında sürükleyerek paleti hemen yeniden hesaplatın.',
      },
      {
        title: 'Orantılı renk şeridini inceleyin',
        description:
          'Örnek kartlarının üzerindeki yatay orantılı renk şeridine bakarak her tonun resimde ne kadar baskın olduğunu görün.',
      },
      {
        title: 'Örneklerin HEX, RGB veya HSL kodlarını kopyalayın',
        description:
          'Bir örnek kartındaki herhangi bir HEX, RGB veya HSL hapına tıklayarak o tam renk değerini doğrudan panoya kopyalayın.',
      },
      {
        title: 'CSS değişkenlerini veya JSON dosyasını dışa aktarın',
        description:
          'Yapıştırmaya hazır bir :root bloğu almak için CSS Değişkenlerini Kopyala düğmesini ya da yapılandırılmış örnek kodları, yüzdeleri ve kaynak boyutlarını almak için JSON Kopyala düğmesini kullanın.',
      },
      {
        title: 'PNG palet kartını indirin',
        description:
          'Önizleme fotoğrafınızı çıkarılan renk bloklarıyla birleştiren temiz beyaz bir sunum kartını kaydetmek için Palet PNG İndir düğmesine tıklayın.',
      },
    ],
    features: [
      { title: 'Median-Cut renk niceleme', description: 'Milyonlarca resim pikselini milisaniyeler içinde dengeli ve temsili baskın örneklere gruplar.' },
      { title: 'HEX, RGB, HSL ve baskınlık yüzdesi', description: 'Her örnek tam renk kodlarını ve resmin ne kadarını kapladığını gösterir.' },
      { title: 'Geliştirici dışa aktarmaları ve PNG kartı', description: 'CSS özel özellikleri, JSON, Tailwind parçacığı veya paylaşılabilir PNG palet kartı olarak dışa aktarın.' },
      { title: 'Yüzde 100 tarayıcı içi', description: 'Pikselleri resim yüklemeden HTML5 Canvas üzerinde yerel olarak analiz eder.' },
    ],
    faqs: [
      {
        question: 'Median-Cut niceleme, fotoğrafımdan nasıl bir palet oluşturuyor?',
        answer:
          'Median-Cut, örneklenen pikselleri üç boyutlu RGB renk küplerine gruplar ve istenen küp sayısı kalana kadar en geniş renk kanalını medyanından tekrar tekrar böler. Her küp, içine düşen piksel sayısıyla ağırlıklandırılmış temsili bir örneğe ortalanır; böylece gürültülü aykırı pikseller yerine uyumlu baskın renkler ortaya çıkar.',
      },
      {
        question: 'Renk paleti çıkarıcı kaç renk örneği üretiyor?',
        answer:
          'Renk Sayısı kaydırıcısıyla 3 ile 12 arasında baskın renk çıkarabilirsiniz. Minimal marka temaları için 3 ile 5 arası iyi çalışırken, 8 ile 12 arası ince gölge tonlarını ve ikincil vurgu nüanslarını ortaya çıkarır.',
      },
      {
        question: 'Her renk kartındaki yüzde neyi gösteriyor?',
        answer:
          'Her yüzde, niceleme sırasında o örneğe atanan şeffaf olmayan örneklenmiş piksellerin oranını gösterir. Orantılı renk şeridi, her renk bölümünü bu tam yüzdelerle eşleşecek şekilde ölçeklendirir.',
      },
      {
        question: 'Çıkarılan tüm örnekleri tek seferde CSS değişkeni olarak kopyalayabilir miyim?',
        answer:
          'Evet. CSS Değişkenlerini Kopyala düğmesine tıkladığınızda --palette-1 ile --palette-N arasında değişkenler içeren tam bir :root bloğu ve her rengin onaltılık kodu stil sayfanıza hazır olarak kopyalanır. Değişkenleri daha sonra tasarım belirteçlerinize uyacak şekilde yeniden adlandırabilirsiniz.',
      },
      {
        question: 'JSON Kopyala seçeneği hangi verileri içeriyor?',
        answer:
          'JSON Kopyala, her örneğin dizinini, onaltılık değerini, rgb ve hsl değerlerini ile baskınlık yüzdesini içeren bir nesne dizisi yazar. Geliştiriciler bu yükü doğrudan tema yapılandırma dosyalarına, tasarım belgelerine veya otomatik stil komut dosyalarına ekleyebilir.',
      },
      {
        question: 'Renk Çıkarıcıdaki PNG Palet İndir seçeneği ne oluşturuyor?',
        answer:
          'PNG Palet İndir, üstte ortalanmış kaynak grafiğinizi ve altında onaltılık kodları ile bulunma yüzdeleriyle etiketlenmiş yuvarlatılmış renk bloklarını gösteren, 1000 piksel genişliğinde temiz beyaz bir sunum kartı oluşturur. Yerel olarak <ad>_palette.png olarak, filigran olmadan indirilir.',
      },
      {
        question: 'Renk paleti çıkarıcı neden damlalık aracından farklı sonuçlar veriyor?',
        answer:
          'Damlalık, imlecin altındaki tek bir pikseli alırken palet çıkarma, bütün resmi genel baskın renk ailelerine gruplar. Bu, onu tek bir minik noktayı eşleştirmekten çok uyumlu renk uyumları kurmak için daha hızlı kılar.',
      },
      {
        question: 'PNG dosyalarından renk çıkarırken şeffaf arka planlar nasıl işleniyor?',
        answer:
          'Alfa şeffaflığı yüzde 50 altındaki pikseller, niceleme çalışmadan önce atlanır. Bu, logo veya ürün kırpıntısı çevresindeki boş şeffaf tuval alanının paleti beyaza veya siyaha çekmesini engeller.',
      },
      {
        question: 'Renk paleti çıkarıcı, 20 MB boyutundaki dev bir fotoğrafın her pikselini inceliyor mu?',
        answer:
          'Çıkarmayı tarayıcınızda hızlı tutmak için resim, Median-Cut çalışmadan önce geçici olarak en uzun kenarı 140 piksele kadar olan bir ekran dışı tuval üzerine ölçeklenir. Baskın renk oranları bu ölçekte neredeyse aynı kaldığı için paletler sekmenizi dondurmadan neredeyse anında hesaplanır.',
      },
      {
        question: 'Renk paleti çıkarıcı hangi dosya formatlarını ve boyutları kabul ediyor?',
        answer:
          'Dosya başına 20 MB boyutuna kadar JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP ve SVG dosyalarını yükleyebilirsiniz. Çok kareli animasyonlu GIF dosyaları ilk karelerinden renkleri sorunsuz çıkarır.',
      },
      {
        question: '12 renkli paletimde neden iki benzer ton belirdi?',
        answer:
          'Gün batımları, ten tonları veya stüdyo arka planları gibi büyük degradelere sahip fotoğraflar, renk uzayının bir bölgesinde gruplanmış milyonlarca piksel içerir. 10 veya 12 gibi yüksek örnek sayılarında Median-Cut bu yoğun bölgeyi doğal olarak yakın ilişkili açık ve orta tonlara böler.',
      },
      {
        question: 'Marka taslaklarım veya ekran görüntülerim bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır. Piksel örnekleme, renk gruplama, kod biçimlendirme ve PNG kart oluşturma işlemlerinin tamamı yalnızca HTML5 Canvas yerel belleğinde gerçekleşir. Yaratıcı öğeleriniz tamamen kendi cihazınızda kalır.',
      },
      {
        question: 'CSS dosyasını kopyaladıktan sonra resmi yeniden yüklemeden örnek sayısını değiştirebilir miyim?',
        answer:
          'Evet. Renk Sayısı kaydırıcısını hareket ettirmek, bellekte saklanan resim verilerini anında yeniden gruplar; böylece dışa aktarmadan önce 4, 6 veya 10 rengi yan yana inceleyebilirsiniz.',
      },
      {
        question: '4 renkli bir palette küçük bir neon vurgu neden görünmüyor?',
        answer:
          'Median-Cut, en büyük piksel alanlarını içeren renk bölgelerine öncelik verdiği için devasa koyu bir ekran görüntüsündeki yüzde 1 boyutundaki küçük bir vurgu düğmesi, az renkli durumda daha geniş bir kübe karışabilir. Renk sayısını 10 veya 12 seviyesine çıkarmak genellikle küçük vurguları ortaya çıkarır.',
      },
      {
        question: 'Çok koyu veya çok açık renklerde örnek metin etiketleri okunabiliyor mu?',
        answer:
          'Evet. Hem sayfadaki kartlarda hem de dışa aktarılan PNG palet kartında beyaz veya koyu mürekkep, her rengin algılanan parlaklığından otomatik olarak hesaplanır; böylece onaltılık kodlar okunaklı kalır.',
      },
      {
        question: 'Panodan doğrudan ekran görüntüsünü renk paleti çıkarıcıya yapıştırabilir miyim?',
        answer:
          'Evet. Sayfanın herhangi bir yerinde Windows/Linux üzerinde Ctrl+V veya macOS üzerinde Cmd+V tuşlarına basarak kopyalanan bir ekran görüntüsünü veya tasarım taslağını doğrudan renk analizcisine yükleyin.',
      },
      {
        question: 'Çıkarıcının HSL ve RGB değerleri CSS standartlarına göre ne kadar doğru?',
        answer:
          'Her örnek, altı haneli büyük harfli #RRGGBB onaltılık kodlarıyla birlikte standart geçerli CSS rgb(r, g, b) ve hsl(h, s%, l%) gösterimi üretir. Kopyalanan herhangi bir değeri doğrudan CSS, Figma veya tarayıcı geliştirici araçlarına yapıştırabilirsiniz.',
      },
      {
        question: 'Bir SVG vektör logosundan palet çıkarabilir miyim?',
        answer:
          'Evet. 20 MB boyutuna kadar bir SVG dosyası bıraktığınızda tarayıcınız renkleri saymadan önce onu Canvas üzerinde temiz bir şekilde rasterleştirir; böylece vektör çalışmasından anında örnekler ve yüzdeler alırsınız.',
      },
      {
        question: 'Yeni bir resim yüklediğimde çıkarıcının önceki örnekleri otomatik olarak siliniyor mu?',
        answer:
          'Evet, yerine geçen bir resim bıraktığınızda veya Değiştir düğmesine tıkladığınızda önceki palet durumu temiz bir şekilde silinir ve yeni grafik üzerinde yeni bir niceleme çalıştırılır. Fotoğraflar arasında sayfayı yenilemeniz asla gerekmez.',
      },
      {
        question: 'Bu renk paleti çıkarıcıyı iOS, Android ve masaüstü tarayıcılarda kullanabilir miyim?',
        answer:
          'Evet. Duyarlı örnek ızgarası, kaydırıcı ve kopyalama düğmeleri iOS Safari, Android Chrome ve modern masaüstü tarayıcılarda kayıt veya kurulum olmadan sorunsuz çalışır.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'GIF Yapıcı',
    shortDescription: 'Kare başına süre ve tekrar kontrolüyle JPG, PNG ve WebP dosyalarından animasyonlu GIF oluşturun.',
    category: 'create',
    seoTitle: 'GIF Yapma Ücretsiz – Fotoğraflardan Animasyonlu GIF Oluşturma',
    seoDescription:
      'GIF yapma ücretsiz ve çevrimiçi: JPG, PNG, WebP ve HEIC karelerini birleştirin, kare başına süreyi ayarlayın ve tekrar sayısını seçin. Filigran yok.',
    h1: 'Animasyonlu GIF Yapıcı Ücretsiz',
    subtitle:
      'Fotoğrafları, ürün açılarını ve arayüz turu karelerini tarayıcınızda temiz bir şekilde çalışan ücretsiz animasyonlu GIF yapıcımızla döngüsel animasyonlara dönüştürün. Sosyal medya içerik üreticileri, eğitim yazarları ve pazarlama uzmanları için idealdir: kareleri tek tek yeniden sıralayın, çoğaltın ve zamanlayın, tekrar sayısını seçin, kare sığdırmayı ve boyutları özelleştirin, filigransız ve gizli bir şekilde GIF89a dosyaları kodlayın.',
    howToSteps: [
      {
        title: 'İki veya daha fazla kare resmi yükleyin',
        description:
          'Her biri 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyalarını kare alanına bırakın (veya daha sonra Kare Ekle düğmesini kullanarak daha fazla ekleyin).',
      },
      {
        title: 'Kareleri yeniden sıralayın, çoğaltın veya silin',
        description:
          'Sıra düzenini belirlemek için kare kartlarını tutamaçlarından sürükleyin veya ok düğmelerini kullanın; önemli kareleri çoğaltın ya da istenmeyen çekimleri kaldırın.',
      },
      {
        title: 'Genel hızı ve kare başına süreleri belirleyin',
        description:
          'Varsayılan Kare Süresi kaydırıcısından (50–3000 ms) veya 1–10 FPS hızlı seçeneklerinden birini seçin; gerekirse tek tek karelere özel süreler girin.',
      },
      {
        title: 'Tekrar davranışını ve kare sığdırmayı yapılandırın',
        description:
          'Her Zaman, Tekrar Sayısını Belirle (2–50 oynatma) veya Bir Kez Oynat seçeneklerinden birini seçin; ardından Sığdır veya Kapsa sığdırma ile mat arka plan rengini belirleyin.',
      },
      {
        title: 'Çıktı boyutlarını ve palet kalitesini ayarlayın',
        description:
          '480 px, 640 px, 800 px veya Orijinal hızlı seçeneklerinden birini seçin (ya da 16 ile 2000 px arasında genişlik ve yükseklik yazın) ve renk paleti kalitesini yüzde 10 ile yüzde 100 arasında belirleyin.',
      },
      {
        title: 'Animasyonlu GIF dosyanızı oluşturun ve indirin',
        description:
          'Animasyonlu GIF Oluştur düğmesine tıklayarak zamanlamalı canlı oynatmayı görün veya yerel olarak kodlayıp animated_compressmypic.gif olarak kaydedin.',
      },
    ],
    features: [
      {
        title: 'İstemci içi gerçek GIF89a kodlama',
        description:
          'Tarayıcıda hızlı renk niceleyici ve istek üzerine yüklenen GIF LZW kodlayıcı kullanır; harici API çağrısı veya sunucuya yükleme yoktur.',
      },
      {
        title: 'Genel ve kare başına süreler',
        description:
          'Milisaniye cinsinden tek tip kare hızı veya FPS hızlı seçenekleriyle belirleyin; isteğe bağlı olarak önemli karelerde süreyi tek tek geçersiz kılın.',
      },
      {
        title: 'Esnek tekrar ve sığdırma kontrolleri',
        description:
          'Sonsuz tekrar, bir kez oynatma veya tam oynatma sayısı seçin; ayrıca Sığdır veya Kapsa kare sığdırma seçenekleri sunulur.',
      },
      {
        title: 'Büyük dosya boyutu uyarısı',
        description:
          'Kodlanan GIF ağırlaştığında (5–15 MB üzeri) otomatik olarak uyarır; böylece sohbet uygulamaları için boyutları veya kaliteyi optimize edebilirsiniz.',
      },
    ],
    faqs: [
      {
        question: 'Tarayıcı, fotoğraflarımı yüklemeden animasyonlu bir GIF dosyasına nasıl kodluyor?',
        answer:
          'Animasyonlu GIF Oluştur düğmesine tıkladığınızda sayfa, istek üzerine yerel bir JavaScript GIF89a kodlayıcısı ve renk niceleyiciyi doğrudan tarayıcı sekmenize yükler. Her kare, seçtiğiniz boyutlarda ekran dışı bir tuval üzerine çizilir ve yerel olarak LZW ile sıkıştırılır.',
      },
      {
        question: 'Canlı önizleme ile oluşturulan GIF arasındaki fark nedir?',
        answer:
          'Kodlamadan önce soldaki önizleme tuvali, yüklediğiniz resimleri mevcut milisaniye süreleri ve çerçeve ayarlarıyla gerçek zamanlı olarak oynatır; böylece ritmi hemen doğrulayabilirsiniz. GIF oluşturduğunuzda bu seçimler 256 renkli nicelemeli gerçek bir .gif dosyasına sabitlenir.',
      },
      {
        question: 'Başlık slaydında veya GIF dosyasının son karesinde daha uzun duraklayabilir miyim?',
        answer:
          'Evet. Varsayılan Kare Süresi bütün dizinin temel hızını (50 ms ile 3000 ms arasında) belirlerken her kare kartında, belirli slaytları daha uzun tutmak için 20 ms ile 10.000 ms arasında değer kabul eden isteğe bağlı bir Süre (ms) alanı bulunur.',
      },
      {
        question: 'GIF yapıcıdaki 1, 2, 5 ve 10 FPS hızlı seçenekleri neye karşılık geliyor?',
        answer:
          'Bu düğmeler saniyedeki kare sayısını tam milisaniye aralıklarına dönüştürür: 1 FPS için 1000 ms, 2 FPS için 500 ms, 5 FPS için 200 ms ve 10 FPS için 100 ms. Ardından kaydırıcıyı 25 ms adımlarla ayarlayabilirsiniz.',
      },
      {
        question: 'Bitmiş GIF dosyasında hangi tekrar seçenekleri var?',
        answer:
          'Tekrar Davranışı bölümünde sonsuz oynatma için Her Zaman, 2 ile 50 arasında tam sayı belirtmek için Tekrar Sayısını Belirle veya animasyonun son karede temiz bir şekilde durması için Bir Kez Oynat seçeneklerinden birini seçebilirsiniz. Netscape uzantı baytları seçiminize göre otomatik olarak yazılır.',
      },
      {
        question: 'GIF kare sığdırmada Sığdır ile Kapsa arasında nasıl seçim yaparım?',
        answer:
          'Sığdır, her resmi GIF karesinin içine tamamen sığacak şekilde ölçeklendirir ve fazla çubukları mat arka plan renginizle doldurur. Kapsa, her fotoğrafı tuvali kenardan kenara doldurmak için hafifçe büyütür ve fazla kenarları kırpar.',
      },
      {
        question: 'Bir GIF animasyonunda farklı oranlardaki resimleri nasıl yönetirim?',
        answer:
          'Logoları veya dikey fotoğrafları asla kırpmak istemiyorsanız Sığdır seçeneğini belirleyin ve mat arka plan örneğini web sitenizin veya koyu mod arka planınızla eşleştirin. Farklı şekillerdeki sıradan fotoğrafları tek tip, tam kanamalı bir sunuma dönüştürürken Kapsa seçeneğini kullanın.',
      },
      {
        question: 'Oluşturulan bir GIF dosyasının en küçük ve en büyük piksel boyutları nedir?',
        answer:
          'Çıktı genişliği ve yüksekliği 16 px ile 2000 px arasında değer kabul eder; 480 px, 640 px, 800 px ve Orijinal hızlı düğmeleri bulunur. Bir boyutu orantılı olarak ölçeklendirirken oran kilidini açık tutun.',
      },
      {
        question: 'Araç 5 MB veya 15 MB üzerinde neden büyük GIF uyarısı gösteriyor?',
        answer:
          'GIF, video formatlarının modern kareler arası sıkıştırması yerine 256 renk sınırıyla tam raster kareler sakladığı için geniş, yüksek çözünürlüklü animasyonlar hızla büyür. Genişliği 480 px veya 640 px olarak değiştirmek ya da renk paleti kalitesini düşürmek, sohbet ve e-posta uygulamaları için dosya ağırlığını ciddi ölçüde azaltır.',
      },
      {
        question: 'GIF renk paleti kalitesi kaydırıcısı neyi kontrol ediyor?',
        answer:
          'Renk paleti kalitesi (yüzde 10 ile yüzde 100 arasında, varsayılan yüzde 80), niceleyicinin her 256 renkli paleti oluştururken kare piksellerini ne kadar hassas örneklediğini ayarlar. Yüksek değerler daha yumuşak renk geçişlerini korurken düşük değerler kodlamayı hızlandırır ve genellikle bayt boyutunu küçültür.',
      },
      {
        question: 'Tarayıcıda yapılan bir GIF dosyasında kaç kaynak kare birleştirmeliyim?',
        answer:
          'Kare kuyruğunda sabit bir dosya sayısı sınırı yoktur; ancak 480 px–800 px genişliğinde 2 ile 40 kare birleştirmek, tipik masaüstü ve telefon tarayıcı belleğinde sorunsuz çalışır. Daha büyük 4K resim yığınları, giriş dosyası başına 20 MB boyutuna kadar toplu olarak eklenebilir.',
      },
      {
        question: 'Aynı dosyayı iki kez yüklemeden GIF yapıcıda bir kareyi tekrarlayabilir miyim?',
        answer:
          'Evet. Herhangi bir kare kartındaki çoğalt simgesine tıklayarak o slaydı özel süresiyle birlikte orijinalin hemen yanına kopyalayın; ardından zaman çizelgesinde istediğiniz yere sürükleyin veya oklarla taşıyın.',
      },
      {
        question: 'Her şeyi bir seferde mi yüklemeliyim yoksa GIF yapıcıya daha sonra daha fazla kare ekleyebilir miyim?',
        answer:
          'Kareler başlığındaki Kare Ekle düğmesiyle istediğiniz zaman daha fazla resim ekleyebilirsiniz. Mevcut kare sıranız, özel süreleriniz ve çıktı boyutlarınız yeni kareler eklendiğinde bozulmadan korunur.',
      },
      {
        question: 'iPhone HEIC veya Live Photo seri çekimleri bu GIF yapıcıda çalışıyor mu?',
        answer:
          'Evet. Her biri 20 MB boyutuna kadar birden fazla .heic veya .heif resmi seçerseniz sayfa, animasyonunuzu oluşturmadan önce bunları WebAssembly ile tarayıcınızda yerel olarak çözer.',
      },
      {
        question: 'Bir GIF oluşturduktan sonra ayarları değiştirirsem ne olur?',
        answer:
          'Bitmiş GIF önizlemesinin altındaki Kare Düzenleyiciye Dön düğmesine tıklayarak zaman çizelgenizin ve kontrollerinizin kilidini açın. Süreleri, tekrarları, boyutları veya kare sırasını serbestçe ayarlayın ve hemen yeni bir dosya oluşturun.',
      },
      {
        question: 'Oluşturulan GIF şeffaf arka planları temiz tutuyor mu?',
        answer:
          'LZW niceleme çalışmadan önce her kare, seçtiğiniz mat arka plan rengi üzerine temiz bir şekilde birleştirilir (varsayılan beyazdır). Bu, PNG veya SVG dosyalarındaki yumuşatılmış kenarlar çevresinde pürüzlü siyah kenarları engeller.',
      },
      {
        question: 'Bir .gif dosyası yüklersem mevcut bir GIF dosyasından tek bir kare çıkarabilir miyim?',
        answer:
          'Kaynak kare olarak bir .gif resmi bıraktığınızda HTML5 Canvas, ilk karesini diziye sabit bir fotoğraf gibi yükler. Mevcut animasyonlu GIF dosyalarını yeniden kodlamanız gerekiyorsa Resim Bölücü veya GIF Sıkıştırıcı araçlarını kullanın.',
      },
      {
        question: 'İndirdiğim GIF dosyasına filigran veya tanıtım amaçlı son kart ekleniyor mu?',
        answer:
          'Asla. Kodlanan her animasyonlu GIF yalnızca seçtiğiniz kareleri ve ayarları içerir; işaret, filigran veya kullanım sınırı yoktur.',
      },
      {
        question: 'GIF çıktı genişliğini düzenlerken oranım neden sabit kaldı?',
        answer:
          'Oran kilidi, ilk slaydınızın boyutlarına göre gerilmiş veya ezilmiş kareleri önlemek için varsayılan olarak açıktır. Gerekirse bağımsız özel genişlik ve yükseklik girmek için kilit anahtarına tıklayın.',
      },
      {
        question: 'animated_compressmypic.gif dosyası Slack, Discord ve web sitelerinde çalışır mı?',
        answer:
          'Evet. Kodlayıcı, Netscape tekrar uzantılarıyla standart GIF89a ikili dosyaları üretir; bu da tarayıcılarda, sohbet uygulamalarında, bloglarda ve sunum araçlarında geniş oynatma uyumluluğu sağlar.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/gif-compressor', '/image-splitter', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Resim Kolaj Yapıcı',
    shortDescription: 'Fotoğrafları 2×2, 3×3 ızgara veya şerit düzeninde, sürükleyerek değiştirme ve dışa aktarma ile düzenleyin.',
    category: 'create',
    seoTitle: 'Kolaj Yapma Ücretsiz – Fotoğraf Kolajı Oluşturma',
    seoDescription:
      'Kolaj yapma ücretsiz ve çevrimiçi, tarayıcınızda: 2×2 ve 3×3 ızgara veya şeritler, hücreleri sürükleyerek değiştirin ve 4000 piksele kadar JPG veya PNG olarak kaydedin.',
    h1: 'Resim Kolaj Yapıcı Ücretsiz',
    subtitle:
      'Temiz fotoğraf ızgaraları, öncesi ve sonrası şeritleri ve sosyal hikâye düzenleri oluşturmak için ücretsiz resim kolaj yapıcımızla doğrudan tarayıcınızda çalışın. İçerik üreticileri, çevrimiçi satıcılar ve aileler için tasarlandı; 2×2 ve 3×3 ızgaralar ile dikey ve yatay şeritleri destekler, sürükleyerek hücre değiştirme, ayarlanabilir bölmeler, yuvarlatılmış köşeler, özel boşluklar ve filigransız JPG veya PNG dışa aktarma sunar; 4000 piksele kadar çözünürlük sağlar.',
    howToSteps: [
      {
        title: 'Fotoğrafları kolaj stüdyosuna yükleyin',
        description:
          'Her biri 20 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resimlerini bırakın; 5 veya daha fazla bırakıldığında 3×3 ızgara otomatik olarak seçilir, 4 veya daha azı 2×2 ızgarayı seçer.',
      },
      {
        title: 'Bir ızgara veya şerit düzeni seçin',
        description:
          'Kolaj düzeni panelinde 2×2 ızgara (4 hücre), 3×3 ızgara (9 hücre), dikey şerit veya yatay şerit arasında serbestçe geçiş yapın.',
      },
      {
        title: 'Kolaj yuvalarını yeniden sıralayın veya doldurun',
        description:
          'Konumları değiştirmek için herhangi bir hücreyi başka bir hücrenin üzerine sürükleyin, dokunmatik ekranlarda sırayla iki yuvaya dokunun, sol/sağ oklarını kullanın veya açık yuvaları doldurmak için Fotoğraf Ekle düğmesine tıklayın.',
      },
      {
        title: 'Hücre oranlarını, boşlukları ve köşeleri ayarlayın',
        description:
          'Sütun bölmesini, satır bölmesini veya ana hücre vurgusunu ayarlayın (veya Eşit Hücreler düğmesine tıklayın), ardından aralığı (0–80 px) ve hücre yarıçapını (0–60 px) belirleyin.',
      },
      {
        title: 'Arka plan rengini, resim sığdırmayı ve çıktı boyutunu seçin',
        description:
          'Kapsa veya Sığdır çerçevelemeyi seçin, bir arka plan rengi örneği veya onaltılık kod seçin ve 200 ile 4000 px arasında boyut girin (veya 1200×1200, 1920×1080 ya da 1080×1920 hızlı seçeneklerine tıklayın).',
      },
      {
        title: 'Bitmiş kolajınızı dışa aktarın',
        description:
          'JPG (yüzde 10–100 kalite kaydırıcısıyla) veya PNG (kayıpsız) seçin ve düzeni tam çözünürlükte yerel olarak kaydetmek için Kolajı İndir düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: '4 temiz kolaj düzeni',
        description:
          'Dengeli 2×2 kareler, 3×3 fotoğraf ızgaraları, telefon için dikey hikâyeler veya geniş yatay karşılaştırma şeritleri oluşturun.',
      },
      {
        title: 'Sürükleyerek hücre yeniden sıralama',
        description:
          'Konumları anında değiştirmek için herhangi bir fotoğraf hücresini başka bir yuvanın üzerine sürükleyin veya telefonda iki hücreye dokunun.',
      },
      {
        title: 'Özel hücre oranları ve boşluklar',
        description:
          'Sütun bölmelerini, satır bölmelerini, ana hücre vurgusunu, aralığı, köşe yuvarlaklığını ve arka plan rengini hassas bir şekilde ayarlayın.',
      },
      {
        title: 'Yüksek çözünürlüklü JPG ve PNG dışa aktarma',
        description:
          'Kolajları doğrudan HTML5 Canvas üzerinde 4000 piksele kadar tam çözünürlükte işleyin; filigran yoktur.',
      },
    ],
    faqs: [
      {
        question: 'Bu resim kolaj yapıcı hangi düzenleri içeriyor?',
        answer:
          '2×2 ızgara (4 hücre), 3×3 ızgara (9 hücre), dikey şerit (yukarıdan aşağıya sütun) ve yatay şerit (yan yana satır) arasında anında geçiş yapabilirsiniz. Dikey veya yatay şerit seçtiğinizde kullanışlı varsayılan boyutlar (1080×1920 veya 1920×720) otomatik olarak ayarlanır; bunları daha sonra serbestçe değiştirebilirsiniz.',
      },
      {
        question: 'Telefon veya tablette kolaj yaparken dokunarak değiştirme nasıl çalışıyor?',
        answer:
          'Sürüklemenin zor olduğu dokunmatik ekranlarda Hücreleri Yeniden Sırala bölümünde ilk hücre kartına dokunarak vurgulayın, ardından fotoğraflarını hemen değiştirmek için ikinci bir yuvaya dokunun. Her yuvanın altında sol ve sağ ok düğmeleri de bulunur.',
      },
      {
        question: '3×3 ızgaradaki hücre sayısından daha az fotoğraf yüklersem ne olur?',
        answer:
          'Doldurulmamış hücreler, kalan resimleri eklerken düzeni inceleyebilmeniz için canlı önizlemede «Yuval N» etiketli temiz noktalı yer tutucular olarak görünür. Boş bir karttaki + düğmesine tıklayabilir veya tam resim sayınıza uyması için 2×2 ya da şerit düzenine geçebilirsiniz.',
      },
      {
        question: 'Bir ızgara veya şeritte bir fotoğrafı diğerlerinden daha büyük öne çıkarabilir miyim?',
        answer:
          'Evet. 2×2 ızgarada sütun bölmesini ve satır bölmesini yüzde 20 ile yüzde 80 arasında sürükleyebilir, 3×3 ızgarada orta sütun ve orta satır boyutunu değiştirebilir, dikey veya yatay şeritlerde ana hücre vurgusunu yüzde 100 boyutuna kadar artırabilirsiniz.',
      },
      {
        question: 'Eşit olmayan hücre kaydırıcılarını tek tip ızgaraya nasıl döndürürüm?',
        answer:
          'Hücre Oranları ve Aralık bölümündeki Eşit Hücreler düğmesine tıklayın. Sütun bölmesini, satır bölmesini ve ana vurguyu tek tıkla dengeli ve eşit bölmelere sıfırlar.',
      },
      {
        question: 'Fotoğraflar arasında sıfır boşluk olan kenarsız bir kolaj yapabilir miyim?',
        answer:
          'Evet. Hem aralığı hem de hücre yarıçapını 0 px seviyesine sürükleyin; böylece bitişik fotoğraflar görünür birleşim çizgisi veya yuvarlatılmış köşe olmadan temiz bir şekilde kenar kenara gelir.',
      },
      {
        question: 'Kolajda resim sığdırmayı Kapsa seçeneğinden Sığdır seçeneğine ne zaman değiştirmeliyim?',
        answer:
          'Kapsa, hücre oranının dışında kalan ince kenarları kırparak her dikdörtgen hücreyi kenardan kenara doldurur; tek tip yaşam tarzı ızgaraları için idealdir. Sığdır, her resmi konunun tamamı hücrenin içine sığacak şekilde küçültür ve açık kenar boşluklarının arkasında arka plan renginizi gösterir.',
      },
      {
        question: 'Hücre aralığını ve yuvarlatılmış köşe yarıçapını ayrı ayrı ayarlayabilir miyim?',
        answer:
          'Evet. Aralık, dış kenar boşluklarını ve birleşim genişliklerini 0 px ile 80 px arasında ayarlar; hücre yarıçapı ise her fotoğraf kutusunun köşesini 0 px ile 60 px arasında yumuşak bir şekilde yuvarlatır.',
      },
      {
        question: 'Kolaj hangi hızlı tuval boyutlarını ve hazır oranları destekliyor?',
        answer:
          'Baskı veya sosyal medya için özel kartlar için her kenarda 200 px ile 4000 px arasında herhangi bir özel çıktı boyutu yazabilirsiniz. Ayrıca 1200×1200 Kare, 1920×1080 Yatay ve 1080×1920 Hikâye için yerleşik hızlı düğmeler bulunur.',
      },
      {
        question: 'Kolajda varsayılan olarak hangi arka plan rengi hazır ayarları görünüyor?',
        answer:
          'Saf beyaz (#ffffff), koyu arduvaz (#0f172a) ve yumuşak nötr gri (#f1f5f9) için tek tıklı örnekler bulunur. Tam bir yerel renk seçici, tam bir marka onaltılık değeri gerektiğinde yan tarafta her zaman hazırdır.',
      },
      {
        question: 'Aynı kolajda iPhone HEIC, PNG ve JPG fotoğraflarını karışık yüklemek çalışıyor mu?',
        answer:
          'Evet. JPG, PNG, WebP, HEIC/HEIF, GIF, BMP ve SVG dahil 20 MB boyutuna kadar yüklenen her dosya, tarayıcınızda gizli bir şekilde çözülür ve tek bir birleşik HTML5 Canvas üzerine çizilir.',
      },
      {
        question: 'Hücrelerin içine şeffaf PNG çıkartmaları yerleştirirsem arkalarında ne görünür?',
        answer:
          'Her hücre, ön plan resmi birleştirilmeden önce seçtiğiniz arka plan rengi üzerine işlenir. Bu, şeffaf PNG logoları ve kırpıntıları beyaz, koyu arduvaz veya özel tonlar karşısında temiz tutar.',
      },
      {
        question: 'Bitmiş kolajımı JPG veya kayıpsız PNG olarak mı kaydetmeliyim?',
        answer:
          'Instagram, WhatsApp veya e-posta için hafif fotoğraf ızgaraları için yüzde 85–95 kalitede JPG seçin. Keskin arayüz ekran görüntüleri, diyagramlar veya JPEG sıkıştırma halelerinin rahatsız edici olacağı metin grafiklerini birleştirirken kayıpsız PNG seçin.',
      },
      {
        question: 'Dışa aktarılan dosya adı, hangi kolaj ayarlarını kullandığımı nasıl gösteriyor?',
        answer:
          'İndirilen her dışa aktarma, düzeni ve piksel boyutlarını otomatik olarak içerir; collage_2x2_1200x1200.jpg gibi adlar üretir. Bu adlandırma düzeni, çeşitli oranları el ile yeniden adlandırmadan düzenlemenize yardımcı olur.',
      },
      {
        question: 'Özel aile fotoğraflarım veya öncesi ve sonrası fotoğraflarım bir yere yükleniyor mu?',
        answer:
          'Hayır. Resim çözme, ızgara düzeni birleştirme ve yüksek çözünürlüklü Canvas dışa aktarma işlemlerinin tamamı tarayıcı sekmenizde gerçekleşir; bu nedenle hiçbir fotoğraf telefonunuzdan veya bilgisayarınızdan çıkmaz.',
      },
      {
        question: 'Kolaj önizlemesi, 4000 px boyutunda tam piksel dışa aktarmayla eşleşiyor mu?',
        answer:
          'Evet. Hem canlı sahne hem de son dışa aktarma, oran ve köşe matematiğini tamamen aynı şekilde paylaşır; aralığı ve hücre yarıçapını seçilen çıktı boyutuna göre yumuşak bir şekilde ölçeklendirir; böylece dışa aktarılan birleşimler gördüklerinizle eşleşir.',
      },
      {
        question: 'Dikey veya yatay bir şerit aynı anda kaç fotoğraf tutabilir?',
        answer:
          'Dikey ve yatay şeritler, yüklediğiniz resim sayısına göre 2 ile 6 arasında dinamik yuva destekler. Bu, iki panelli karşılaştırmaları veya çok kareli hikâye şeritlerini temiz bir şekilde oluşturmayı kolaylaştırır.',
      },
      {
        question: 'Baştan başlamadan kolajdan tek bir fotoğrafı kaldırabilir miyim?',
        answer:
          'Evet. Hücreleri Yeniden Sırala bölümündeki herhangi bir yuva kartının çöp kutusu düğmesine tıklayarak o fotoğrafı kaldırırken yüklenen diğer tüm resimlerinizi, düzen ayarlarınızı ve özel bölmelerinizi bozulmadan koruyun.',
      },
      {
        question: 'Bir fotoğraf kolajını yazdırmak için dışa aktarabileceğim en yüksek çözünürlük nedir?',
        answer:
          'Hem genişlik hem de yükseklik 4000×4000 piksele kadar ölçeklenir ve 16 megapiksel keskin detay sunar. Bu çözünürlük, masa fotoğrafı baskılarını, katalogları ve yüksek piksel yoğunluklu slaytları temiz bir şekilde karşılar.',
      },
      {
        question: 'Oluşturabileceğim veya dışa aktarabileceğim kolaj sayısında bir sınır var mı?',
        answer:
          'Hayır. Düzenleri değiştirebilir, renkleri ayarlayabilir ve hesap, filigran veya günlük dışa aktarma sınırı olmadan sınırsız kolajı ücretsiz olarak dışa aktarabilirsiniz.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Resmi 50 KB Yapma',
    shortDescription: 'Formlar için JPG, PNG ve WebP fotoğraflarını katı 50 KB sınırının altına indirin.',
    category: 'compress',
    seoTitle: 'Resmi 50 KB Yapma Ücretsiz – Pasaport ve Form Fotoğrafı',
    seoDescription:
      'Resmi 50 KB yapma ücretsiz ve çevrimiçi: pasaport portalları, vize formları ve avatarlar için. İkili kalite araması ve akıllı ölçeklendirme ile tarayıcınızda çalışır.',
    h1: 'Resmi 50 KB Yapma',
    subtitle:
      'Bir resmi 50 KB boyutuna güvenilir bir şekilde sıkıştırmanız gerektiğinde pasaport fotoğraflarını, vize taramalarını, el yazısı imzaları ve kompakt profil avatarlarını katı portal sınırları için hazırlayın. Dosya başına 25 MB boyutuna kadar, yüzde 100 tarayıcınızda yerel olarak çalışır; ikili kalite aramasını isteğe bağlı piksel ölçeklendirmeyle birleştirir, böylece hassas belgeler asla harici sunuculara dokunmaz.',
    howToSteps: [
      {
        title: 'Resminizi veya belge taramanızı bırakın',
        description:
          '25 MB boyutuna kadar bir veya daha fazla JPG, PNG, WebP veya HEIC dosyası yükleyin (veya kopyalanan fotoğrafları Ctrl+V ile yapıştırın).',
      },
      {
        title: 'Çıktı formatını seçin (Orijinal, JPG, WebP veya PNG)',
        description:
          'Katı 50 KB fotoğraf sınırları için JPG veya WebP seçin ya da ağır ekran görüntüleri için otomatik PNG dönüştürme açıkken Orijinal seçeneğini koruyun.',
      },
      {
        title: 'Ölçeklendirme ve otomatik dönüştürme anahtarlarını gözden geçirin',
        description:
          'Çok megapikselli fotoğraflar için akıllı boyut ölçeklendirmeyi açık tutun ya da bir portalın tam piksel boyutları istemesi durumunda bunu kapatın.',
      },
      {
        title: 'Doğrulanmış bayt rozetlerini ve karşılaştırma görünümünü inceleyin',
        description:
          'Her kartta yeşil «50 KB Altında» rozetini kontrol edin ve yüz hatlarının veya imza çizgilerinin okunaklı kaldığını doğrulamak için Karşılaştır görünümünü açın.',
      },
      {
        title: 'Tek tek veya Tümünü İndir (ZIP) ile indirin',
        description:
          'Her dosyayı <ad>_50kb olarak tek tek kaydedin, dosya zaten daha küçükse Orijinali Koru seçeneğini kullanın ya da toplu işleri compressmypic_50kb.zip olarak paketleyin.',
      },
    ],
    features: [
      {
        title: 'İkili kalite araması ve boyut ölçeklendirme',
        description:
          'Önce orijinal piksellerle 50 KB altındaki en yüksek görsel kaliteyi bulur, ardından gerekirse çözünürlüğü yumuşak bir şekilde ölçeklendirir.',
      },
      {
        title: 'Dürüst sonuç raporu',
        description:
          'Çıktı boyutunu asla uydurmaz: kayıpsız bir PNG veya kilitli bir çözünürlük 50 KB boyutuna sığamıyorsa bunu açıkça açıklar.',
      },
      {
        title: 'Akıllı PNG WebP/JPG yedeği',
        description:
          'Ağır kayıpsız PNG dosyalarını isteğe bağlı olarak WebP veya JPG formatına dönüştürür; böylece fotoğraflar 50 KB boyutuna inerken net kalır.',
      },
      {
        title: 'Tarayıcıda gizli işleme',
        description: 'Pasaportlar, kimlik fotoğrafları ve kişisel formlar asla cihazınızdan çıkmaz.',
      },
    ],
    faqs: [
      {
        question: 'Hangi yaygın portallar 50 KB altındaki resim yüklemesi istiyor?',
        answer:
          'Devlet vize başvuruları, pasaport yenilemeleri, kamu sınavı kayıtları, üniversite kabul formları ve imza tarama alanları sık sık 20 KB–50 KB arasında katı yükleme sınırları koyar. Dosyanızı rahatça 50 KB altında tutmak, form gönderiminde beklemeyi ve yükleme reddi hatalarını önler.',
      },
      {
        question: 'Pasaport ve kimlik taramalarını burada 50 KB boyutuna indirmek neden güvenli?',
        answer:
          'HEIC çözümlemeden sıkıştırma ikili aramasına ve ZIP paketlemeye kadar her piksel işlemi kendi tarayıcı sekmenizde yerel olarak çalışır. Hassas kimlik fotoğrafları, imzalar ve kişisel kayıtlar asla internet üzerinden yüklenmez.',
      },
      {
        question: '12 megapiksellik bir fotoğrafı 50 KB boyutuna indirmek genellikle neden boyut ölçeklendirme gerektiriyor?',
        answer:
          'Tam 4000×3000 piksel fotoğraf, 12 milyon piksel içerir; temel JPEG Huffman verileri güçlü sıkıştırmayla bile genellikle 200 KB boyutunu aşar. Akıllı boyut ölçeklendirme açıkken iyileştirici, net yüz detayının temiz bir şekilde 50 KB altına sığması için boyutları yumuşak bir şekilde küçültür.',
      },
      {
        question: 'Sınav veya devlet portalına 50 KB altı resim gönderirken JPG mi yoksa WebP mi seçmeliyim?',
        answer:
          'Eski devlet, pasaport, burs veya banka formları için her zaman JPG seçin; çünkü birçok doğrulama komut dosyası daha küçük olsa bile .webp yüklemelerini reddeder. Modern web avatarları veya kişisel siteler için 50 KB boyutunda en yüksek netliğin önemli olduğu durumlarda WebP seçin.',
      },
      {
        question: 'Araç, el yazısı imzaları veya taranmış belgeleri 50 KB altına nasıl optimize ediyor?',
        answer:
          'Parlak beyaz kâğıt üzerindeki siyah mürekkep taramaları, fazla çözünürlük temiz bir şekilde kırpıldıktan sonra JPG veya WebP olarak agresif bir şekilde sıkıştırılır. Karşılaştır penceresini incelemek, mürekkep çizgilerinin metin kenarları çevresinde bulanık sıkıştırma blokları olmadan temiz kalmasını sağlar.',
      },
      {
        question: 'Dosyam zaten 32 KB iken neden kırmızı «Büyüdü» uyarısı belirdi?',
        answer:
          'Hafif bir JPG veya PNG dosyası Canvas üzerinde yüksek kaliteyle yeniden kodlanırsa yeni bayt akışı bazen küçülmek yerine 40 KB olabilir. O kartta Orijinali Koru seçeneğine tıklayarak tam 32 KB boyutundaki orijinal dosyanızı korumanız yeterlidir.',
      },
      {
        question: 'Vize portalım sabit 600×600 px boyut ve en fazla 50 KB istiyorsa tam boyutları koruyabilir miyim?',
        answer:
          'Evet. «Akıllı boyut ölçeklendirmeye izin ver» seçeneğini kapatın; böylece piksel boyutları yüzde 100 kilitli kalır ve ikili arama, tam boyutlarınızla JPEG veya WebP kalitesini yüzde 5 seviyesine kadar dener. Makul ölçüde temiz bir 600×600 portre, boyut değiştirmeden kolayca 50 KB altına sığar.',
      },
      {
        question: 'Çıktı formatını PNG olarak sabitlemek 50 KB boyutunda neden genellikle hedefe ulaşılamadı uyarısı veriyor?',
        answer:
          'PNG, kalite kaydırıcılarını yok sayan kayıpsız DEFLATE sıkıştırma kullandığı için yalnızca düz simgeler veya minik küçük resimler PNG olarak 50 KB altına sığar. Fotoğrafların 50 KB boyutuna temiz bir şekilde inmesi için formatı otomatik dönüştürme açıkken Orijinal olarak bırakın veya doğrudan JPG seçeneğine geçin.',
      },
      {
        question: 'Şeffaf bir PNG imza yükleyip 50 KB boyutuna inmek için JPG formatına dönüştürürsem ne olur?',
        answer:
          'JPG seçtiğinizde şeffaf PNG için mat renk örneği görünür (varsayılan saf beyaz #ffffff). Şeffaf arka plan bölgeleri JPEG kodlamadan önce katı beyaz üzerine temiz bir şekilde doldurulur; böylece siyah mürekkep katı siyaha dönmek yerine net kalır.',
      },
      {
        question: '15 MB boyutundaki bir iPhone HEIC özçekimini doğrudan 50 KB altına indirebilir miyim?',
        answer:
          'Evet. Apple HEIC/HEIF fotoğrafları dahil 25 MB boyutuna kadar dosyalar kabul edilir; bunlar WebAssembly ile tarayıcıda otomatik olarak çözülür ve tek akıcı geçişte 50 KB boyutuna sıkıştırılır.',
      },
      {
        question: 'Tam boyutlar 50 KB boyutunu aştığında iyileştirici hangi ölçek adımlarını dener?',
        answer:
          'Tam boyutlar kabul edilebilir kaliteyle 50 KB boyutunu geçemediğinde motor, yüzde 82 seviyesinden başlayıp yüzde 10 seviyesine inen (en az 16 px) aşamalı küçültme faktörlerini dener. Her adımda yeni bir ikili kalite araması çalıştırır ve 50 KB altındaki en büyük okunaklı boyutlarda durur.',
      },
      {
        question: 'Koyu arka planlı bir portreyi 50 KB altına sıkıştırmak görünür renk bantları oluşturur mu?',
        answer:
          'Agresif 50 KB hedefleriyle yumuşak koyu gölgeler, boyutlar devasa tutulursa hafif bloklanma gösterebilir. Boyut ölçeklendirmeye izin vermek, aracın yüzde 70–85 gibi daha yüksek bir kalite faktörüyle biraz daha küçük boyutları kodlamasını sağlar; bu da devasa boyutlarda yüzde 10 kaliteden daha yumuşak geçişler üretir.',
      },
      {
        question: '50 KB sıkıştırıcı, kimlik fotoğrafımdaki gizli GPS konum etiketlerini kaldırıyor mu?',
        answer:
          'Evet. Resminizi HTML5 Canvas üzerine çizmek, kamera seri numarası, küçük resimler ve GPS koordinatları gibi EXIF meta verilerini kaldırır; gizliliğinizi korur ve görünür resim detayı için fazladan kilobayt boşaltır.',
      },
      {
        question: 'Araç, «50 KB Altında» rozetini göstermeye nasıl karar veriyor?',
        answer:
          'Son Blob kodlandıktan sonra tam bayt boyutunu 51.200 bayta (50 × 1024) karşı kontrol eder. Yalnızca bu tam bayt sınırına eşit veya altında olan dosyalar yeşil «50 KB Altında» onay rozetini alır.',
      },
      {
        question: 'Bir portre ve bir imza taramasını birlikte 50 KB altına işleyebilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar birden fazla resmi kuyruğa bırakın, format tercihinizi ayarlayın ve her dosyayı tek tek indirin ya da compressmypic_50kb.zip olarak paketleyin.',
      },
      {
        question: 'Bir portal aslında 50 KB yerine 20 KB veya 30 KB istiyorsa ne olur?',
        answer:
          'Hedef başlığının hemen içindeki «Farklı bir KB hedefi mi gerekiyor?» bağlantısına tıklayarak 20 KB veya 30 KB gibi herhangi bir özel sınırı yazabileceğiniz özel dosya boyutu sıkıştırıcıya doğrudan geçin.',
      },
      {
        question: '50 KB sıkıştırıcı dosya boyutunu ne kadar kabul ediyor?',
        answer:
          'JPG, PNG, WebP, HEIC/HEIF, GIF, BMP ve SVG formatlarında dosya başına 25 MB boyutuna kadar tekil girişler kabul edilir. Animasyonlu GIF girdileri, 50 KB altında optimize edilmiş statik bir kare olarak dışa aktarılır.',
      },
      {
        question: 'Araç neden 25 KB seviyesinde durmak yerine tam 50 KB altını (yaklaşık 48–49,9 KB) hedefliyor?',
        answer:
          'İkili araması, mümkün olduğunda 50 KB sınırının yüzde 96–100 aralığında kalmak için 7 yinelemeye kadar optimize eder. Bu, sınır altındaki neredeyse her kilobaytı kullanarak görsel netliği en üst düzeye çıkarır.',
      },
      {
        question: 'İndirilen dosya adları, yüksek çözünürlüklü orijinallerimle karıştırılmaması için açıkça işaretleniyor mu?',
        answer:
          'Evet. Her çıktı dosyası, portrait_50kb.jpg gibi uzantıdan önce otomatik olarak _50kb ekler; orijinal dosyanız cihazınızda dokunulmadan güvende kalır.',
      },
      {
        question: 'Form portalına yüklemeden önce telefonda netliği inceleyebilir miyim?',
        answer:
          'Evet. Etkileşimli Karşılaştır görüntüleyici dahil bütün arayüz iOS Safari ve Android Chrome üzerinde sorunsuz çalışır; hareket halindeyken form gönderimlerini hızlı ve güvenilir kılar.',
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
    name: 'Resmi 100 KB Yapma',
    shortDescription: 'Görünür bulanıklık olmadan resim boyutunu temiz bir şekilde 100 KB altına indirin.',
    category: 'compress',
    seoTitle: 'Resmi 100 KB Yapma Ücretsiz – CV ve Web İçin',
    seoDescription:
      'Resmi 100 KB yapma ücretsiz ve çevrimiçi: iş portalları, özgeçmişler ve web sayfaları için. Akıllı kalite araması ve ZIP ile keskin detayları koruyun.',
    h1: 'Resmi 100 KB Yapma',
    subtitle:
      'Bir resmi 100 KB boyutuna netliği feda etmeden sıkıştırdığınızda web ve portallar için kanıtlanmış ideal noktaya ulaşın. Portföy fotoğrafları ekleyen iş arayanlar, hızlı makale küçük resimleri hazırlayan blog yazarları ve sıkı ek sınırları olan insan kaynakları portalları için tasarlandı; bu yerel araç, tarayıcınızda 25 MB boyutuna kadar girdilerle kalite ve isteğe bağlı ölçeklendirme ayarlarını dener.',
    howToSteps: [
      {
        title: 'Fotoğrafınızı veya makale grafiğinizi ekleyin',
        description:
          'Her biri 25 MB boyutuna kadar bir veya daha fazla JPG, PNG, WebP veya HEIC resmini çalışma alanına sürükleyip bırakın.',
      },
      {
        title: 'Çıktı formatını ve yedek davranışı onaylayın',
        description:
          'Orijinal seçeneğini koruyun (çok büyük PNG dosyaları için otomatik WebP/JPG yedeğiyle) ya da tutarlı bir çıktı için açıkça JPG veya WebP hedefleyin.',
      },
      {
        title: 'Piksel küçültmeye izin verilip verilmeyeceğini seçin',
        description:
          '800 px–1400 px aralığında net sonuçlar için akıllı boyut ölçeklendirmeyi açık bırakın ya da orijinal genişlik ve yüksekliğin yüzde 100 boyutunu korumak için kapatın.',
      },
      {
        title: 'Görsel netliği orijinalle karşılaştırın',
        description:
          'Tasarruf yüzdesini ve tam KB çıktı rozetini inceleyin, ardından kenar netliğini yan yana gözden geçirmek için herhangi bir kartta Karşılaştır seçeneğini açın.',
      },
      {
        title: 'Tek tek dosyaları veya toplu ZIP dosyasını indirin',
        description:
          'Tekil <ad>_100kb dosyalarını hemen kaydedin ya da tek tıkla compressmypic_100kb.zip dosyasını indirmek için Tümünü İndir (ZIP) düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: '100 KB altında en yüksek kalite',
        description:
          'Rastgele düşük bir kalite kaydırıcısı kullanmak yerine ikili arama, 100 KB altındaki en yüksek kaliteyi sabitler.',
      },
      {
        title: 'Mümkün olduğunda çözünürlüğü korur',
        description:
          'Kalite ayarı tek başına 100 KB sınırını karşıladığında orijinal genişlik ve yüksekliğin yüzde 100 boyutunu korur.',
      },
      {
        title: 'Şeffaf sınır uyarıları',
        description:
          'Kilitli bir PNG veya ölçeklenmemiş 4K ayarının 100 KB boyutuna inmenizi engellediğini açıkça bildirir.',
      },
      {
        title: 'Yüzde 100 yerel gizlilik',
        description: 'Yükleme yok, filigran yok ve kayıt zorunluluğu yok.',
      },
    ],
    faqs: [
      {
        question: '100 KB neden özgeçmişler, iş portalları ve web siteleri için ideal nokta sayılıyor?',
        answer:
          'Yaklaşık 100 KB boyutunda tipik bir 1000 px ile 1400 px fotoğraf, 3G telefon ağlarında bile hızlı yüklenir; ince yüz detayları, net tipografi ve doğal renk derinliği bozulmadan kalır. Çoğu işe alım sistemi ve PDF özgeçmiş oluşturucu, 100 KB altındaki öğeleri kırpmadan veya engellemeden rahatça kabul eder.',
      },
      {
        question: '1920×1080 Full HD web bannerı 100 KB boyutuna inerken tam boyutlarını koruyabilir mi?',
        answer:
          'Evet, çoğu durumda; özellikle temiz ürün çekimleri, arayüz illüstrasyonları veya yumuşak bulanık arka planlar WebP veya JPG olarak sıkıştırıldığında. Kalabalık bir manzara sahnesi yüzde 35 kaliteyle bile 100 KB boyutunu aşarsa isteğe bağlı ölçeklendirme genişliği yumuşak bir şekilde düşürür (örneğin yüzde 82 veya yüzde 68) ve netliği korur.',
      },
      {
        question: 'İkili kalite araması, 100 KB dosyamı nasıl olabildiğince net tutuyor?',
        answer:
          'Yüzde 40 gibi sabit düşük bir sıkıştırma düzeyi tahmin etmek yerine motor, 7 ikili adımda üst ve alt kalite sınırlarını dener. 102.400 bayt altındaki yüzde 96–100 aralığında durur ve tam dosya boyutu bütçesi için piksel doğruluğunu en üst düzeye çıkarır.',
      },
      {
        question: '100 KB hedeflerken büyük PNG dosyalarının otomatik dönüştürülmesini ne zaman kapatmalıyım?',
        answer:
          'Düz bir infografik, arayüz simgesi veya iki renkli diyagramın kesinlikle kayıpsız PNG olarak kalması gerekiyorsa ve zaten 100 KB altına temiz bir şekilde sığıyorsa Orijinal bırakmak veya PNG seçmek çok iyi çalışır. Ancak fotoğrafik PNG dosyaları için otomatik dönüştürmeyi açık tutmak, opak çekimleri JPG formatına, şeffaf olanları WebP formatına geçirir; böylece 100 KB altında net pikseller korunur.',
      },
      {
        question: 'Şeffaf PNG logoları, otomatik olarak 100 KB altına dönüştürülürken şeffaflığını kaybeder mi?',
        answer:
          'Hayır. Orijinal modunda çok büyük bir PNG dosyasından geçiş yapmadan önce sıkıştırıcı, dosyanızın alfa şeffaflığını algılar ve alfa pikselleri varsa JPG yerine otomatik olarak WebP seçer (tam şeffaflığı korur).',
      },
      {
        question: '100 KB boyutuna sıkıştırmak Core Web Vitals ölçümlerini ve sayfa ağırlığını nasıl etkiliyor?',
        answer:
          '2 MB boyutundaki kahraman küçük resimlerini veya 800 KB boyutundaki makale başlıklarını 95 KB boyutuna indirmek, sayfa yükünü görsel olarak bozmadan ciddi ölçüde azaltır. Daha hafif resimler, hem telefon hem de masaüstü ziyaretçilerinde Largest Contentful Paint (LCP) değerini doğrudan iyileştirir.',
      },
      {
        question: 'E-posta bülteni grafiklerini gelen kutusunda daha hızlı yüklenmesi için 100 KB altına indirebilir miyim?',
        answer:
          'Evet. JPG çıktısını seçmek, Outlook, Apple Mail ve Gmail üzerinde geniş e-posta istemcisi desteğini korur; böylece çok resimli bültenler hızlı ve hafif kalır, spam filtresi ağırlık eşiklerinin altında tutulur.',
      },
      {
        question: '100 KB sıkıştırıcıya yüklediğim bir dosya zaten 65 KB ise ne olur?',
        answer:
          'Sıkıştırıcı, dosyanızın zaten 100 KB altında olduğunu fark eder ve tam çözünürlükte temiz bir dışa aktarma üretir. HTML5 Canvas üzerinde yeniden kodlama, 65 KB boyutunda biraz daha büyük bir dosya oluşturursa kırmızı bir uyarı, Orijinali Koru seçeneğine anında tıklamanızı sağlar.',
      },
      {
        question: 'Karşılaştır penceresi, resimleri 100 KB boyutuna ayarlarken neden yardımcı oluyor?',
        answer:
          'Öncesi ve sonrası bölünmüş perdeyi görmek, ince saçların, kumaş dokusunun veya ekran görüntülerindeki minik metinlerin sıkıştırmadan sonra temiz kalıp kalmadığını doğrulamanızı sağlar. Kilitli çözünürlükte bozulmalar belirirse JPG formatından WebP formatına geçmek genellikle aynı 100 KB bütçesi içinde sorunu çözer.',
      },
      {
        question: 'Bu 100 KB küçültücü, kameranın EXIF etiketlerini otomatik olarak kaldırıyor mu?',
        answer:
          'Evet. HTML5 Canvas üzerine çizmek, gömülü kamera küçük resimlerini, Lightroom XMP bloklarını ve GPS koordinatlarını kaldırır; bu tek başına görsel sıkıştırma başlamadan önce dosya başına 20 KB–60 KB tasarruf sağlar.',
      },
      {
        question: 'Bütün bir blog küçük resim klasörünü sürükleyip hepsini 100 KB boyutuna sıkıştırabilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar birden fazla dosyayı kuyruğa yükleyin, her resim tarayıcınızda sırayla işlenirken birkaç saniye bekleyin ve hepsini compressmypic_100kb.zip içinde kaydedin.',
      },
      {
        question: 'Bir özgeçmiş portalı 100 KB boyutuna kadar JPG kabul edip WebP dosyalarını reddederse ne olur?',
        answer:
          'Yüklemeden önce veya sonra Çıktı Formatı bölümünde Orijinal yerine JPG seçin. Sıkıştırıcı, her resmi 100 KB altında standart .jpg olarak yeniden işler ve seçtiğiniz mat rengi şeffaf alanlara uygular.',
      },
      {
        question: '3000×2000 PNG ekran görüntüm yüzde 68 ölçekle 100 KB boyutuna neden temiz bir şekilde indi?',
        answer:
          'Kayıpsız PNG dosya boyutu, toplam piksel sayısı ve entropi ile yakından ilişkilidir. Devasa bir ekran görüntüsünü ılımlı ölçüde ölçeklendirip WebP veya JPG ile birleştirmek, metin rahatça okunaklı kalırken bayt ağırlığını birkaç megabayttan 100 KB altına indirir.',
      },
      {
        question: 'Gizli CV dosyaları, mimari önizlemeler veya gizlilik anlaşmalı taslaklar bir yere yükleniyor mu?',
        answer:
          'Asla. Tüm sıkıştırma adımları, ikili yinelemeler ve ZIP dosyası oluşturma, tarayıcı sekmenizde yerel JavaScript ve Canvas ile gerçekleşir.',
      },
      {
        question: '100 KB sıkıştırıcıya hangi dosya türlerini yükleyebilirim?',
        answer:
          'Dosya başına 25 MB boyutuna kadar JPG, PNG, WebP, iPhone HEIC/HEIF, GIF, BMP ve SVG dosyalarını bırakabilirsiniz. Animasyonlu GIF girdilerinin ilk karesinin statik çıktı olarak sıkıştırıldığını unutmayın.',
      },
      {
        question: 'Bu sayfadan 80 KB veya 120 KB gibi özel bir hedef seçebilir miyim?',
        answer:
          'Evet, hedef panelindeki «Farklı bir KB hedefi mi gerekiyor?» bağlantısına dokunarak herhangi bir özel KB veya MB girdisiyle esnek hedef dosya boyutu sıkıştırıcımıza doğrudan geçin.',
      },
      {
        question: 'Kilitli bir PNG hedefi, ölçeği küçülterek bile 100 KB boyutuna neden ulaşamayabilir?',
        answer:
          'PNG açıkça zorlandığında ve ölçeklendirme kapalıyken gürültülü bir fotoğraf, kayıpsız olarak 100 KB boyutuna paketlenemeyen milyonlarca benzersiz renk korur. Boyut ölçeklendirmeyi yeniden açmak veya WebP formatına geçmek bunu hemen çözer.',
      },
      {
        question: 'Toplu işimi bitirdikten sonra ayarları değiştirmek dosyalarımı otomatik olarak 100 KB boyutuna yeniden sıkıştırıyor mu?',
        answer:
          'Evet. Çıktı formatını, boyut ölçeklendirmeyi, otomatik PNG dönüştürmeyi veya JPG mat rengini değiştirdiğinizde kuyruktaki öğeleriniz 100 KB boyutuna otomatik olarak yeniden işlenir; böylece sonuçları zahmetsizce karşılaştırabilirsiniz.',
      },
      {
        question: 'İndirilen _100kb.jpg ve _100kb.webp dosyaları Windows, macOS ve iOS üzerinde yerel olarak açılır mı?',
        answer:
          'Evet. Standart JPEG her yerde evrensel olarak açılır; modern WebP ise tüm güncel masaüstü tarayıcılarda, macOS Önizleme, Windows Fotoğraflar, Android ve iOS üzerinde yerel olarak açılır.',
      },
      {
        question: '100 KB aracında günlük kota veya dosya sayısı sınırı var mı?',
        answer:
          'Hayır. Tarayıcınızın belleğinin kaldırabildiği kadar çok resmi 100 KB altına sıkıştırın; filigran, hesap uyarısı veya ödeme duvarı yoktur.',
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
    name: 'Resmi 200 KB Yapma',
    shortDescription: 'Bloglar, CMS yüklemeleri ve portallar için fotoğrafları 200 KB altına optimize edin.',
    category: 'compress',
    seoTitle: 'Resmi 200 KB Yapma Ücretsiz – WordPress ve Blog İçin',
    seoDescription:
      'Resmi 200 KB yapma ücretsiz ve çevrimiçi: WordPress, Shopify ve blog bannerları için. İkili kalite araması ve ZIP ile keskin detayları yerel olarak koruyun.',
    h1: 'Resmi 200 KB Yapma',
    subtitle:
      'Bir resmi 200 KB boyutuna fazla yük olmadan sıkıştırdığınızda net mağaza ürün fotoğrafları, öne çıkan blog başlıkları ve işletme kartları hazırlayın. WordPress düzenleyicileri, Shopify satıcıları ve dijital pazarlama uzmanları için tasarlandı; önce yüzde 100 orijinal boyutlara öncelik verir ve dosya başına 25 MB boyutuna kadar tamamen yerel olarak çalışır; sunucuya aktarım yapılmaz.',
    howToSteps: [
      {
        title: 'Mağaza veya blog resimlerinizi yükleyin',
        description:
          'Her biri 25 MB boyutuna kadar tek tek veya toplu JPG, PNG, WebP veya HEIC resimlerini çalışma alanına bırakın.',
      },
      {
        title: 'WebP, JPG, Orijinal veya PNG çıktıyı seçin',
        description:
          'Modern CMS hızı için WebP, evrensel pazar yeri uyumluluğu için JPG ya da yalnızca ağır PNG dosyalarını otomatik dönüştürmek için Orijinal seçin.',
      },
      {
        title: 'Tam boyut ölçeklendirmeyi veya yedek ölçeklendirmeyi açın',
        description:
          '24 MP kamera fotoğrafları için akıllı ölçeklendirmeyi açık tutun ya da ürün şablonları orijinal piksel boyutlarını kesinlikle istediğinde kapatın.',
      },
      {
        title: 'Tasarrufu ve detayı yan yana gözden geçirin',
        description:
          'Yeşil «200 KB Altında» göstergesini doğrulayın ve etiketler, kumaş dokusu veya ince arayüz kenarları üzerinde Karşılaştır kaydırıcısını sürükleyin.',
      },
      {
        title: 'Tek tek resimleri kaydedin veya Tümünü İndir (ZIP)',
        description:
          'Tekil <ad>_200kb resimlerini doğrudan indirin ya da mağaza kataloğunuzu compressmypic_200kb.zip olarak paketleyin.',
      },
    ],
    features: [
      {
        title: 'CMS ve pazar yerleri için hazır',
        description: 'Shopify, WooCommerce, WordPress ve Google İşletme Profili yüklemeleri için idealdir.',
      },
      {
        title: 'Akıllı yedek ölçeklendirme',
        description:
          '24 MP kamera fotoğrafı tam boyutta 200 KB boyutuna sığamazsa boyut ölçeklendirme temiz bir şekilde devreye girer.',
      },
      {
        title: 'Tam KB doğrulaması',
        description: 'Orijinal bayt ve azaltma yüzdesiyle birlikte doğrulanmış çıktı baytlarını gösterir.',
      },
      {
        title: 'Sunucuya yükleme yok',
        description: 'Bilgisayarınızda veya telefonunuzda doğrudan HTML5 Canvas üzerinde hızlı işleme.',
      },
    ],
    faqs: [
      {
        question: 'WordPress ajansları ve Shopify mağazaları ürün fotoğraflarını neden 200 KB civarında standartlaştırıyor?',
        answer:
          '200 KB sınırı, keskin dikişler, metalik parlaklık ve okunaklı ürün etiketleri için yeterli bit hızı bırakırken telefon alıcılarında koleksiyon ızgaralarını hızlı tutar. 200 KB altında kalmak, Google İşletme Profili veya WooCommerce medya kuralları gibi katı CMS ve dizin sınırlarını da karşılar.',
      },
      {
        question: '12 veya 24 megapiksellik bir kamera fotoğrafı 200 KB boyutuna temiz bir şekilde inebilir mi?',
        answer:
          'Evet. Tam 4000×3000 px boyutlar yüzde 35 kaliteyle bile 200 KB boyutunu aşarsa akıllı boyut ölçeklendirme orantılı olarak düşer; genellikle yüzde 75–85 net kaliteyle yaklaşık 2200 px veya 1800 px genişliğinde kalır.',
      },
      {
        question: '200 KB boyutunda akıllı boyut ölçeklendirmeyi kapatarak boyutları ne zaman kilitlemeliyim?',
        answer:
          'Bir pazar yeri veya baskı portalı tam piksel genişlikleri istediğinde (örneğin 1600×1600 px kare ürün yuvaları) ölçeklendirmeyi kapatın. İyileştirici, tam boyutlarla kayıplı kaliteyi yüzde 5 seviyesine kadar düşürür ve boyut değiştirmeden 200 KB boyutuna ulaşılamıyorsa bunu dürüstçe bildirir.',
      },
      {
        question: '200 KB hedefinde e-ticaret fotoğrafları için WebP, JPG ile nasıl karşılaştırılır?',
        answer:
          'Aynı 200 KB bütçesi içinde WebP, JPG formatına kıyasla genellikle gözle görülür derecede daha temiz stüdyo gölgeleri ve daha net küçük ambalaj metni sunar; tipik olarak yüzde 10–15 daha yüksek bir kalite faktörüne eşdeğerdir. Eski bir pazar yeri arka ucu hâlâ .webp yüklemelerini reddediyorsa yalnızca JPG seçin.',
      },
      {
        question: 'Şeffaf arka planlı bir stüdyo ürün kırpıntısı PNG dosyası yüklersem ne olur?',
        answer:
          'Format Orijinal ve otomatik dönüştürme açıkken çok büyük şeffaf PNG dosyaları, tek başına PNG 200 KB boyutuna düzenli bir şekilde inemediğinde temiz bir şekilde şeffaf WebP formatına geçer. JPG formatını açıkça seçerseniz şeffaf bölgeler seçtiğiniz mat renginizle birleşir.',
      },
      {
        question: 'İyileştirici neden piksel boyutlarını küçültmeden önce yüzde 100 çözünürlüğü korumayı tercih ediyor?',
        answer:
          'Boyutları küçültmek piksel ızgarası detayını kalıcı olarak atarken, ılımlı kayıplı kalite ayarı tam genişlikte keskin kenarları korur. Önce tam boyutlarla yüzde 35–94 kaliteyi denemek, masaüstü kahraman grafiklerinin mümkün olduğunda tam boyutta kalmasını sağlar.',
      },
      {
        question: 'Bütün bir sezon kataloğunu tek seferde 200 KB altına toplu olarak optimize edebilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar onlarca ürün fotoğrafını kuyruğa bırakın, aracın her resmi yerel olarak incelemesine izin verin ve optimize edilmiş her öğeyi compressmypic_200kb.zip içinde alın.',
      },
      {
        question: 'Şeffaf arka planları beyaz mat üzerine JPG formatına dönüştürmek Amazon veya Etsy üzerinde 200 KB boyutuna ulaşmaya yardımcı olur mu?',
        answer:
          'Evet. Saf beyaz (#ffffff) arka planlar JPEG içinde son derece iyi sıkıştırılırken pazar yeri beyaz arka plan kurallarına uyar ve merkezdeki gerçek ürün için 200 KB içinde fazladan bayt boşaltır.',
      },
      {
        question: '140 KB boyutundaki WebP yüklemem yeniden işlendikten sonra neden «Büyüdü» uyarısı gösterdi?',
        answer:
          '200 KB altındaki zaten iyi optimize edilmiş bir dosya, Canvas varsayılan yüksek kalitesiyle yeniden kodlanırsa küçülmek yerine 165 KB civarında kalabilir. Orijinali Koru seçeneğine tıklamak, 140 KB boyutundaki orijinal dosyayı hemen geri yükler.',
      },
      {
        question: 'Yayınlanmamış ürün prototipleri veya müşteri kampanya bannerları harici sunucularda saklanıyor mu?',
        answer:
          'Hayır. Her piksel çözümleme, ölçeklendirme geçişi ve ZIP oluşturma, yerel tarayıcı oturumunuzda gizli bir şekilde gerçekleşir; bu da ambargolu lansmanlar ve gizlilik anlaşmalı müşteri işleri için güvenlidir.',
      },
      {
        question: '200 KB sıkıştırıcı, yeni iPhone telefonlarla çekilen Apple HEIC/HEIF fotoğraflarını destekliyor mu?',
        answer:
          'Evet. İstemci tarafı WebAssembly, iPhone HEIC dosyalarını doğrudan tarayıcı sekmenizde çözer; böylece önce dönüştürmeniz gerekmez.',
      },
      {
        question: 'Ayrıntılı infografikler veya menü panoları için 200 KB genellikle 50 KB boyutundan neden daha iyidir?',
        answer:
          'Restoran menüleri, emlak planları veya yazılım arayüzü ekran görüntülerindeki küçük tipografi, 50 KB altına sıkıştırılırsa hızla bulanıklaşır. 200 KB hedefi, ince etiketlerin net kalması için WebP ve JPG formatlarına dört kat daha fazla bayt payı verir.',
      },
      {
        question: 'İkili kalite araması genellikle 200 KB hedefine ne kadar yaklaşıyor?',
        answer:
          'Belirli bir ölçekte uygulanabilir bir kalite aralığı bulunduktan sonra 7 ikili yinelemeye kadar 204.800 baytın yüzde 96–100 aralığını hedefler. Dosyalar genellikle sınır içinde en yüksek netliği almanız için 192 KB ile 199 KB arasında kalır.',
      },
      {
        question: '200 KB sıkıştırma sırasında DSLR renk profilleri ve kamera GPS etiketleri kaldırılıyor mu?',
        answer:
          'Evet. Resimleri HTML5 Canvas üzerinden yazmak EXIF meta veri bloklarını ve gömülü önizleme küçük resimlerini kaldırır; gizliliği iyileştirir ve WordPress ile CDN sunucularında boşa giden kilobaytları temizler.',
      },
      {
        question: 'Çok büyük kayıpsız bir PNG dosyası PNG olarak 200 KB altında kalmak için yalnızca yüzde 35 ölçeğe düşerse ne olur?',
        answer:
          'Format Orijinal ve otomatik PNG dönüştürme açıkken yüzde 65 ölçeğin altına zorlanan kayıpsız PNG dosyaları otomatik olarak WebP veya JPG formatına geçer. Bu, çok daha net piksel boyutlarını korurken 200 KB sınırını rahatça aşmanızı sağlar.',
      },
      {
        question: '200 KB dosyasını indirmeden önce ince kumaş veya takı detaylarını gözden geçirebilir miyim?',
        answer:
          'Evet. Tamamlanmış herhangi bir sonuç kartında Karşılaştır seçeneğine tıklamak, sıkıştırılmamış orijinal piksellerinizi sıkıştırılmış çıktıyla doğrudan karşılaştıran etkileşimli bölünmüş ekran kaydırıcısını açar.',
      },
      {
        question: '200 KB sıkıştırıcıya bir SVG vektör bannerı bırakırsam ne olur?',
        answer:
          'Tarayıcınız SVG dosyasını Canvas üzerinde rasterleştirir ve format seçiminize göre 200 KB altında PNG, WebP veya JPG olarak optimize eder. Bu, pazar yerleri veya CMS portalları işlenmemiş .svg yüklemelerini reddettiğinde işe yarar.',
      },
      {
        question: '200 KB sıkıştırıcı resim başına hangi en büyük kaynak dosya boyutunu kabul ediyor?',
        answer:
          'Yüklenen her JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyası 25 MB boyutuna kadar olabilir. Bu pay, Lightroom veya modern telefonlardan gelen ağır kamera dışa aktarmalarını önceden küçültmeden karşılar.',
      },
      {
        question: 'Çıktı dosyaları ana ürün klasörümden ayrı tutmak için nasıl adlandırılıyor?',
        answer:
          'Kaydedilen her kopya, temizlenmiş temel adını korur ve uzantıdan önce _200kb ekler; sneaker_side_200kb.webp gibi net adlar üretir. Yüksek çözünürlüklü ana orijinaliniz diskte tamamen bozulmadan kalır.',
      },
      {
        question: 'Bir portal kurallarını değiştirip 150 KB veya 300 KB gibi başka bir tam eşik belirlerse geçebilir miyim?',
        answer:
          'Evet. Kontrollerin üst kısmındaki «Farklı bir KB hedefi mi gerekiyor?» bağlantısını kullanarak özel dosya boyutu sıkıştırıcısını açın ve KB veya MB cinsinden herhangi bir tam sayı girin.',
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
    name: 'Resmi 500 KB Yapma',
    shortDescription: 'Birkaç megabaytlık fotoğrafları ultra yüksek kaliteyle 500 KB altına indirin.',
    category: 'compress',
    seoTitle: 'Resmi 500 KB Yapma Ücretsiz – Yüksek Kalite',
    seoDescription:
      'Resmi 500 KB yapma ücretsiz ve çevrimiçi: yüksek çözünürlüklü netliği kaybetmeden. Büyük JPG, PNG, WebP ve HEIC dosyalarını portföy öğelerine dönüştürün.',
    h1: 'Resmi 500 KB Yapma',
    subtitle:
      '5 MB ile 18 MB arasındaki hacimli DSLR karelerini, telefon RAW dışa aktarmalarını ve yüksek çözünürlüklü ekran görüntülerini tarayıcınızda yerel olarak bir resmi 500 KB boyutuna sıkıştırdığınızda net öğelere dönüştürün. Müşterilere deneme baskıları sunan fotoğrafçılar, hafif sunumlar oluşturan kurucular ve portföy galerileri gönderen ajanslar için idealdir; mümkün olduğunda tam piksel boyutlarında yüksek çözünürlüğü korur; dosya başına 25 MB boyutuna kadar destekler.',
    howToSteps: [
      {
        title: 'Tam çözünürlüklü kamera veya tasarım dosyalarını bırakın',
        description:
          'Önceden boyutlarını değiştirmeden her biri 25 MB boyutuna kadar bir veya daha fazla JPG, PNG, WebP veya HEIC resmi yükleyin.',
      },
      {
        title: 'Yüksek çözünürlüklü teslimat için çıktı formatını seçin',
        description:
          'Akıcı işlem için Orijinal seçeneğini koruyun, müşteri sunumları ve baskı denemeleri için JPG seçin ya da ultra net portföy galerileri için WebP seçin.',
      },
      {
        title: 'Ölçeklendirme ve PNG yedek tercihlerini doğrulayın',
        description:
          '40 MP veya üzeri fotoğraflar için akıllı boyut ölçeklendirmeyi açık bırakın ya da optimize edilmiş kaliteyle katı 4K veya üzeri boyutları korumak için kapatın.',
      },
      {
        title: 'Detayı Karşılaştır modunda yan yana inceleyin',
        description:
          'Her «500 KB Altında» onay rozetini gözden geçirin ve yaprakları, cilt dokusunu veya tipografiyi öncesi ve sonrası bölünmüş görüntüleyicide inceleyin.',
      },
      {
        title: 'Tek tek dosyaları indirin veya ZIP olarak paketleyin',
        description:
          'Her <ad>_500kb çıktısını hemen kaydedin ya da büyük fotoğraf kümelerini compressmypic_500kb.zip içinde temiz bir şekilde dışa aktarın.',
      },
    ],
    features: [
      {
        title: '500 KB boyutunda neredeyse kayıpsız sıkıştırma',
        description:
          '500 KB, 1920 px–4000 px boyutundaki büyük resimleri orijinalinden görsel olarak ayırt edilemez tutmak için bol pay sunar.',
      },
      {
        title: 'Otomatik HEIC çözümleme',
        description: 'İstemci tarafı WebAssembly ile iPhone HEIC/HEIF fotoğraflarını yerel olarak destekler.',
      },
      {
        title: 'Kalite tahmini yok',
        description: 'Yüzdeleri el ile hareket ettirmeyi bırakın: ikili aramanın 500 KB altında kaliteyi en üst düzeye çıkarmasına izin verin.',
      },
      {
        title: 'Yüzde 100 tarayıcı içi gizlilik',
        description: 'Hiçbir şey uzak sunuculara yüklenmez.',
      },
    ],
    faqs: [
      {
        question: '500 KB neden 4K ve 12 MP fotoğraflarda neredeyse orijinal görsel kaliteyi koruyor?',
        answer:
          'Yarım megabayt (512.000 bayt), 1920 px ile 4000 px arasındaki tam fotoğraflarda ince mikro kontrast, hafif film greni ve yumuşak gökyüzü geçişleri için bol alan sunar. Çoğu resim, boyutları hiç küçültmeden yüzde 75–92 yüksek kaliteyle 500 KB boyutuna temiz bir şekilde iner.',
      },
      {
        question: 'Pitch Deck, Keynote ve PowerPoint sunum ekleri için ne kadar iyi çalışıyor?',
        answer:
          'Panel ekran görüntülerini ve stüdyo taslaklarını 6 MB PNG dosyalarından 500 KB altı JPG veya WebP dosyalarına indirmek, sunumun genel yükünü ciddi ölçüde azaltır. 30 slaytlı bir sunum, konferans projektörlerinde net görünürken e-posta ve bulut senkronizasyonu için hızlı kalır.',
      },
      {
        question: '500 KB boyutuna sıkıştırırken 24 MP DSLR fotoğrafta yüzde 100 orijinal çözünürlüğü koruyabilir miyim?',
        answer:
          '«Akıllı boyut ölçeklendirmeye izin ver» seçeneğini kapatın; böylece orijinal piksel boyutlarının yüzde 100 boyutunu zorlar ve ikili kalite aramasının gerekirse yüzde 5 seviyesine inmesine izin verirsiniz. Çoğu 6000×4000 px kamera JPEG dosyası için yüzde 40–65 civarında JPG kalitesi, tek bir piksel bile küçültmeden 500 KB boyutunu aşar.',
      },
      {
        question: '15 MB boyutundaki bir iPhone HEIC portresi JPG veya WebP olarak dışa aktarılırken tam çözünürlükte 500 KB altında neden kalabiliyor?',
        answer:
          'Modern telefon HEIC fotoğrafları derin renk verileri ve yüksek megapiksel sayıları taşır; ancak yüzde 80 veya üzeri kaliteyle JPG veya WebP olarak verimli bir şekilde yeniden kodlanır ve yaklaşık 450–495 KB boyutunda kalır. Portre bokeh efekti ve ince cilt geçişleri resim tuvalinin tamamında yumuşak kalır.',
      },
      {
        question: '10 MB boyutunda kayıpsız bir yazılım paneli taslağı PNG dosyası yüklersem ne olur?',
        answer:
          'Tam ekran Retina PNG dosyası, büyük piksel küçültme olmadan kayıpsız olarak 500 KB içine nadiren sığar. Formatı otomatik PNG dönüştürme açıkken Orijinal olarak bırakmak, arayüz metninin tam ekran boyutunda okunaklı kalması için onu otomatik olarak neredeyse kayıpsız yüksek kaliteli WebP veya net JPG formatına geçirir.',
      },
      {
        question: '500 KB, Behance, Dribbble ve ajans portföy gönderimleri için neden popüler?',
        answer:
          'Portföy platformları ve RFP sağlayıcı portalları, çok projeli sayfaları hızlı tutmak için vaka çalışması medyasını sık sık resim başına 500 KB ile sınırlar. Tam 500 KB altında sıkıştırmak, yükleme doğrulayıcılarını karşılar ve sunucu tarafında sert yeniden sıkıştırmayı tetiklemez.',
      },
      {
        question: 'Toplu işimdeki bir dosya zaten 320 KB ise araç nasıl davranıyor?',
        answer:
          'Sıkıştırıcı, 320 KB boyutunun zaten 500 KB gereksinimini karşıladığını algılar ve tam çözünürlükte temiz bir kopya işler. Yeniden kodlama biraz daha ağır bir dosya üretirse «Büyüdü» uyarısı görünür; böylece Orijinali Koru seçeneğine tıklayarak orijinal 320 KB dosyayı koruyabilirsiniz.',
      },
      {
        question: 'Fotoğrafçılar fikri mülkiyetlerinin kontrolünü kaybediyor veya müşteri oturumlarını burada sızdırıyor mu?',
        answer:
          'Asla. Düğün önizlemeleri, ticari mimari çekimler veya yayınlanmamış prototipler hazırlarken her resim, sunucuya aktarım olmadan yerel tarayıcı sekmenizde çözülür ve sıkıştırılır.',
      },
      {
        question: '500 KB boyutunda hangi format daha net tipografi ve ince vektör çizgileri koruyor?',
        answer:
          'WebP, 500 KB sınırı içinde koyu üzerine beyaz net tipografi, grafikler ve şemalarda JPG formatından daha iyi performans gösterir. Tahmine dayalı blok kodlaması, yüksek kontrastlı arayüzler ve diyagramlar çevresindeki gürültülü haleleri en aza indirir.',
      },
      {
        question: '500 KB JPG hedeflerken şeffaf bir PNG ürününü beyaz yerine koyu kömür üzerine düzleştirebilir miyim?',
        answer:
          'Evet. JPG seçtiğinizde şeffaf PNG için mat renk seçici görünür; beyaz, koyu arduvaz veya herhangi bir özel marka onaltılık rengi girerek şeffaf kenarların akıcı bir şekilde kaynaşmasını sağlayabilirsiniz.',
      },
      {
        question: 'Tuval sıkıştırma, kameranın lens modelini, deklanşör hızını ve GPS koordinatlarını koruyor mu?',
        answer:
          'Hayır, HTML5 Canvas EXIF meta verilerini otomatik olarak kaldırır; bu da gömülü kamera küçük resimlerini ve konum verilerini siler. Bu, müşteri deneme baskılarını gizli tutar ve her kilobaytı görünür piksellere ayırır.',
      },
      {
        question: '«500 KB Altında» onay rozetini hangi tam bayt sınırı tetikliyor?',
        answer:
          'Araç, kodlanan son dosyayı 512.000 bayta (500 × 1024) karşı denetler. 512.000 bayta eşit veya altında olan dosyalar yeşil «500 KB Altında» durum rozetini ve tam tasarruf alanını gösterir.',
      },
      {
        question: 'Tek geçişte yirmi adet 10 MB fotoğrafı 500 KB boyutuna toplu olarak küçültebilir miyim?',
        answer:
          'Evet. Yirmi resmi (dosya başına 25 MB boyutuna kadar) kuyruğa bırakın, tarayıcının her fotoğrafı sırayla işlemesine izin verin ve hepsini birlikte compressmypic_500kb.zip içinde dışa aktarın.',
      },
      {
        question: 'Ölçeklendirme kapalı zorlanmış kayıpsız bir PNG dosyası 500 KB boyutunda neden «Hedefe Ulaşılamadı» gösterdi?',
        answer:
          'Kayıpsız PNG sıkıştırma kalite kaydırıcılarını yok sayar; bu da tam boyutları kilitli karmaşık yüksek çözünürlüklü bir sahnenin işlenmemiş DEFLATE tabanının altına inemeyeceği anlamına gelir. Boyut ölçeklendirmeyi açın veya 500 KB boyutunu temiz bir şekilde aşmak için WebP/JPG seçin.',
      },
      {
        question: 'Kaydetmeden önce orijinali 500 KB dosyasıyla yan yana yakınlaştırıp karşılaştırabilir miyim?',
        answer:
          'Evet. Tamamlanmış herhangi bir kartta Karşılaştır seçeneğine tıklamak, gözleri, saç tellerini veya küçük etiketleri orijinal dosyayla doğrudan karşılaştırmanız için tam genişlikte öncesi ve sonrası bölünmüş perdeyi açar.',
      },
      {
        question: '500 KB boyutuna inmek için bir resmin daha küçük boyut ölçeklendirmesi gerekiyorsa boyut değişimi ne kadar sert olur?',
        answer:
          'Ölçekleyici, daha dik adımları denemeden önce orijinal boyutların yüzde 82 seviyesinden başlar. 500 KB cömert olduğu için tipik devasa 50 MP stüdyo dışa aktarmaları, yüksek çözünürlüklü baskı netliğini korurken yüzde 82 veya yüzde 68 adımında hedefi temiz bir şekilde aşar.',
      },
      {
        question: 'Araç 25 MB boyutuna kadar eski BMP bit eşlemlerini veya SVG diyagramlarını destekliyor mu?',
        answer:
          'Evet. Sıkıştırılmamış BMP dosyaları ve 25 MB boyutuna kadar vektör SVG illüstrasyonları doğrudan Canvas üzerine yüklenir ve seçtiğiniz raster formatında 500 KB altında temiz bir şekilde dışa aktarılır.',
      },
      {
        question: '500 KB boyutuna sıkıştırılmış kopyaları indirirken dosya adı nasıl değişiyor?',
        answer:
          'İşlenen her resim, uzantıdan önce otomatik olarak _500kb ekler; architectural_proof_500kb.jpg gibi net adlar üretir. Dışa aktarılan dosya adında etiket tutmak, sıkıştırılmış teslimatlarınızın ana orijinallerin üzerine asla yazmamasını sağlar.',
      },
      {
        question: 'Bir pazar yeri bunun yerine 1 MB veya 250 KB sınırı koyarsa ne yapmalıyım?',
        answer:
          'Format düğmelerinin üzerindeki «Farklı bir KB hedefi mi gerekiyor?» kısayoluna tıklayarak özel dosya boyutu sıkıştırıcısını açın ve KB veya MB cinsinden herhangi bir özel eşik girin.',
      },
      {
        question: '500 KB boyutundaki öğeleri doğrudan iPad veya Android tabletten sıkıştırabilir miyim?',
        answer:
          'Evet. Dokunmatik format kontrolleri, karşılaştırma kaydırıcısı ve ZIP dışa aktarma, masaüstü yazılımı olmadan modern tablet ve telefon tarayıcılarında temiz bir şekilde çalışır.',
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
    name: 'Toplu Resim Sıkıştırıcı',
    shortDescription: 'Onlarca resmi tek seferde toplu olarak sıkıştırın ve tek bir ZIP olarak dışa aktarın.',
    category: 'compress',
    seoTitle: 'Toplu Resim Sıkıştırma Ücretsiz – ZIP ile İndirme',
    seoDescription:
      'Toplu resim sıkıştırıcı ile onlarca dosyayı küçültün. Web Hızlı, E-posta veya Yüksek Doğruluk profillerini uygulayın, tasarruf edilen MB boyutunu görün ve ZIP indirin.',
    h1: 'Toplu Resim Sıkıştırıcı Ücretsiz',
    subtitle:
      'Bütün ürün fotoğrafı klasörlerini, kamera rulosu yedeklerini ve web sitesi öğelerini tarayıcınızda doğrudan ücretsiz toplu resim sıkıştırıcımızla aynı anda küçültün. Büyük toplu işleri yöneten e-ticaret ekipleri, fotoğrafçılar ve geliştiriciler için tasarlandı; tek tıklı hızlı toplu profilleri ve özel kalite kaydırıcılarını canlı ilerleme takibi, dosya başına görsel karşılaştırmalar ve anında tek ZIP indirmeleriyle birleştirir.',
    howToSteps: [
      {
        title: 'Bütün resim toplu işinizi bırakın',
        description:
          'Her biri 25 MB boyutuna kadar birden fazla JPG, PNG, WebP veya HEIC resmini toplu alana seçin veya sürükleyin (daha fazlası istediğiniz zaman eklenebilir).',
      },
      {
        title: 'Hızlı bir toplu profile tıklayın veya ayarları özelleştirin',
        description:
          'Web Hızlı (WebP yüzde 75), E-posta / Paylaşım (JPG yüzde 65) veya Yüksek Doğruluk (yüzde 85) seçeneklerinden birini belirleyin ya da kalite kaydırıcısını, çıktı formatını ve mat rengi ayarlayın.',
      },
      {
        title: 'Toplu sıkıştırmanın canlı ilerlemesini izleyin',
        description:
          'Canlı ilerleme çubuğunun dosya dosya nasıl tamamlandığını izleyin ve toplam dosya sayısını, tasarruf edilen MB boyutunu ve genel azaltma yüzdesini gösteren özet bandını inceleyin.',
      },
      {
        title: 'Tekil kartları ve öncesi-sonrası kaliteyi inceleyin',
        description:
          'Örnek dosyalarda Karşılaştır penceresini açın, zaten minik bir öğe büyüdüyse Orijinali Koru seçeneğine tıklayın ya da değiştirilmiş ayarlarla tekil dosyaları yeniden işleyin.',
      },
      {
        title: 'Gerekirse ayarlayın ve hepsini yeniden sıkıştırın',
        description:
          'Profilinizi, kalite yüzdenizi veya hedef formatınızı istediğiniz zaman değiştirin ve yeniden yüklemeden bütün kuyruğu tek tıkla yeniden işleyin.',
      },
      {
        title: 'Tekil dosyaları veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Optimize edilmiş tekil resimleri doğrudan kartlarından kaydedin ya da bulk_compressed_compressmypic.zip dosyasını indirmek için Tümünü İndir (ZIP) düğmesine tıklayın.',
      },
    ],
    features: [
      {
        title: 'Toplu ilerleme ve toplam tasarruf',
        description:
          'Dosya dosya canlı ilerlemeyi ve bütün toplu işinizde toplanan toplam MB ile tasarruf yüzdesini gösterir.',
      },
      {
        title: 'Tek tıklı hızlı toplu profiller',
        description: 'WebP, E-posta/JPG veya Yüksek Doğruluk hazır ayarlarını her dosyaya anında uygulayın.',
      },
      {
        title: 'Dosya başına karşılaştırma penceresi',
        description: 'İndirmeden önce herhangi bir tekil sıkıştırılmış fotoğrafı orijinaliyle karşılaştırarak inceleyin.',
      },
      {
        title: 'Sıfır toplu iş sınırı',
        description: 'Cihazınızın belleğinin izin verdiği kadar çok resmi, ücretli katman veya sunucu kuyruğu olmadan sıkıştırın.',
      },
    ],
    faqs: [
      {
        question: 'Üç hızlı toplu profil, kuyruktaki resimlerimi nasıl değiştiriyor?',
        answer:
          'Web Hızlı, hafif web siteleri için çıktı formatını yüzde 75 kaliteyle WebP olarak değiştirir; E-posta / Paylaşım, toplu işi daha küçük ekler için yüzde 65 JPG formatına dönüştürür; Yüksek Doğruluk ise orijinal formatları yüzde 85 kaliteyle korur. Herhangi bir profile tıklamak ayarları otomatik olarak günceller ve zaten yüklenmiş dosyaları yeniden sıkıştırır.',
      },
      {
        question: 'Dizüstü bilgisayarda veya telefonda etkin bir yükleme bağlantısı olmadan resimleri toplu olarak sıkıştırabilir miyim?',
        answer:
          'Araç sayfası yüklenmeyi bitirdikten sonra bütün toplu sıkıştırma, çözümleme ve ZIP oluşturma, HTML5 Canvas ve WebAssembly ile tarayıcınızda yerel olarak gerçekleşir. Fotoğraflarınız asla uzak bir işleme kuyruğuna girmez ve cihazınızdan çıkmaz.',
      },
      {
        question: 'Toplu işin toplam özeti tasarrufu nasıl bildiriyor?',
        answer:
          'Dosyalar işlenmeyi bitirdikçe özet çubuğu, her öğenin orijinal bayt boyutunu sıkıştırılmış sonuca karşı toplar; toplanan tasarruf edilen megabaytları ve genel azaltma yüzdesini gösterir. Tekil bir dosya daha büyük biterse ZIP dosyasını dışa aktarmadan önce o kartta Orijinali Koru seçeneğine tıklayabilirsiniz.',
      },
      {
        question: 'Aynı toplu işte PNG ekran görüntüleri, iPhone HEIC dosyaları ve JPG fotoğrafları karıştırırsam ne olur?',
        answer:
          'Çıktı formatı Orijinal iken her resim kendi karşılık gelen web formatında kodlanır (HEIC, WebAssembly ile JPG/PNG formatına temiz bir şekilde çözülür). Alternatif olarak WebP veya JPG seçmek, karışık klasörün tamamını tek bir tek tip çıktı uzantısında birleştirir.',
      },
      {
        question: 'Toplu resim sıkıştırıcıda dosya başına izin verilen en büyük boyut nedir?',
        answer:
          'JPG, PNG, WebP, HEIC/HEIF, GIF, BMP ve SVG girdilerinde dosya başına 25 MB boyutuna kadar desteklenir. Sabit bir sayı sınırı yoktur; yalnızca cihazınızın tarayıcısındaki kullanılabilir bellek sınırlar.',
      },
      {
        question: 'Araç, sekmenizi dondurmak yerine toplu işleri neden canlı ilerleme çubuğuyla işliyor?',
        answer:
          'Dosyalar, gerçek zamanlı olarak gösterilen ilerleme güncellemeleriyle («X / Y») kontrollü tarayıcı geçişlerinde çalışır. Bu, sayfayı duyarlı tutar; böylece 30 veya 50 yüksek çözünürlüklü fotoğraflık toplu işlerde bile tamamlanmayı net bir şekilde izleyebilirsiniz.',
      },
      {
        question: 'Tümünü İndir (ZIP) düğmesine tıkladığımda dışa aktarılan ZIP dosyasının adı nedir?',
        answer:
          'Tümünü İndir (ZIP) düğmesine tıklamak, tamamlanmış tüm çıktıları bulk_compressed_compressmypic.zip içinde temiz bir şekilde paketler. ZIP dosyasının tamamı, bulut depolama sunucusundan geçmeden doğrudan tarayıcınızın belleğinde oluşturulur.',
      },
      {
        question: 'İlk toplu işim sıkıştırmayı bitirdikten sonra kuyruğa daha fazla fotoğraf ekleyebilir miyim?',
        answer:
          'Evet. Daha fazla resim bırakmak, mevcut toplu listenize temiz bir şekilde eklenir; böylece eski ve yeni bırakılan dosyaları tek bir son ZIP dosyasında birlikte paketleyebilirsiniz.',
      },
      {
        question: 'Sıkıştırma kontrolleri içindeki Dengeli, En Küçük Dosya ve Yüksek Kalite hazır ayarları ile hızlı profiller arasındaki fark nedir?',
        answer:
          'Hızlı toplu profiller, web hızı veya e-posta ekleri gibi yaygın hedefler için format ve kalite kısayolları ayarlar. Bu arada sıkıştırma kontrolleri içindeki Dengeli, En Küçük Dosya ve Yüksek Kalite hapları ile yüzde 10–100 kalite kaydırıcısı, Tümünü Yeniden Sıkıştır düğmesine tıklamadan önce tam kayıplı gücü hassas bir şekilde ayarlamanızı sağlar.',
      },
      {
        question: 'Toplu olarak şeffaf PNG simgelerini JPG formatına dönüştürürsem arka planları nasıl renklendirilir?',
        answer:
          'Çıktı formatı JPG olduğunda (E-posta / Paylaşım profili dahil), mat arka plan rengi seçici otomatik olarak görünür. Şeffaf alfa kanallarını saf beyaz (#ffffff) veya seçtiğiniz herhangi bir özel onaltılık ton üzerine temiz bir şekilde doldurur; böylece simgeler asla siyaha dönmez.',
      },
      {
        question: 'Toplu resim sıkıştırıcı piksel boyutlarını değiştiriyor mu yoksa orijinal genişlik ve yüksekliği koruyor mu?',
        answer:
          'Toplu resim sıkıştırıcı, kalite kodlamasıyla bayt boyutunu azaltırken her dosyayı orijinal genişlik ve yüksekliğinin yüzde 100 boyutunda tutar. Onlarca fotoğrafta boyutları da küçültmeniz gerekiyorsa bunu toplu resim boyutlandırıcıyla birleştirin.',
      },
      {
        question: 'Toplu işimdeki zaten sıkıştırılmış bir PNG dosyası neden «Yeniden kodlama büyüdü» uyarısı gösterdi?',
        answer:
          'Agresif palet nicelemesi kullanan araçlarla dışa aktarılan PNG dosyaları, HTML5 Canvas üzerinde tam 24 bit kayıpsız PNG olarak yeniden kaydedildiğinde hafifçe genişleyebilir. O kartta Orijinali Koru seçeneğine tıklamak, daha küçük orijinali toplu ZIP dosyanızda korur; formatı WebP/JPG olarak değiştirmek ise onu daha da küçültür.',
      },
      {
        question: 'Bütün klasörü yeniden işlemek yerine yalnızca tek bir zor resmi yeniden sıkıştırabilir miyim?',
        answer:
          'Evet. Tamamlanmış her sonuç kartı, Karşılaştır ve İndir düğmelerinin yanında kendi Yeniden Sıkıştır ve Kaldır düğmelerini içerir; böylece aykırı değerleri temiz bir şekilde ayarlayabilir veya atabilirsiniz.',
      },
      {
        question: 'Toplu sıkıştırma, seyahat albümlerimdeki kamera GPS koordinatlarını ve EXIF etiketlerini otomatik olarak kaldırıyor mu?',
        answer:
          'Evet. Her resim sıkıştırma sırasında HTML5 Canvas üzerine çizildiği için gömülü EXIF etiketleri, kamera seri numaraları ve GPS konumları ZIP dosyasındaki her dosyadan temiz bir şekilde kaldırılır.',
      },
      {
        question: 'Hedef boyut sıkıştırıcısı veya web resim iyileştirici yerine toplu resim sıkıştırıcıyı ne zaman seçmeliyim?',
        answer:
          'Onlarca fotoğrafta tam piksel boyutlarıyla hızlı ve tek tip kalite tabanlı tasarruf istediğinizde toplu resim sıkıştırıcıyı kullanın. Her dosyanın katı bir KB sınırının altında olması gerektiğinde hedef boyut sıkıştırıcıyı, önceden tanımlanmış web piksel sınırları ve duyarlı HTML etiketleri için web resim iyileştiriciyi seçin.',
      },
      {
        question: 'Bütün ZIP dosyasını indirmeden önce toplu işteki tekil öğelerin görsel kalitesini inceleyebilir miyim?',
        answer:
          'Evet. Herhangi bir kartta Karşılaştır seçeneğine tıklamak, orijinal ve sıkıştırılmış sürümleri bütün detaylarıyla karşılaştıran yan yana bölünmüş kaydırıcıyı açar.',
      },
      {
        question: 'Varsayılan yüzde 70 kalite başlangıç noktası genel fotoğraf kitaplıklarında nasıl performans gösteriyor?',
        answer:
          'Yüzde 70 kayıplı kalite, tipik web ekranlarında ve e-posta paylaşımında görsel olarak temiz kalırken yüksek çözünürlüklü JPEG dosyalarında genellikle yüzde 50–75 oranında önemli bayt azaltması sağlar. Portföy açısından kritik işler için Yüksek Doğruluk ile yüzde 85 seviyesine çıkarın.',
      },
      {
        question: 'Düşük RAM boyutuna sahip bir telefonda 100 fotoğraflık devasa bir klasör yüklersem ne olur?',
        answer:
          'Çözümleme ve Canvas arabellekleri cihaz belleğinde bulunduğu için telefon sekmeleri aşırı tekil kuyruklarla yavaşlayabilir. Toplu iş başına 15 ile 30 arasında çok megapikselli fotoğraf işlemek ve kümeler arasında tamamlanmış listeleri temizlemek, telefon tarayıcılarını akıcı tutar.',
      },
      {
        question: 'Toplu ZIP dışa aktarmalarına filigran, günlük dosya sınırı veya ücretli yükseltme uyarısı uygulanıyor mu?',
        answer:
          'Asla. Hem tekil indirmeler hem de Tümünü İndir (ZIP) paketleri filigran, hesap kaydı veya dosya sayısı ödeme duvarı olmadan temiz bir şekilde dışa aktarılır.',
      },
      {
        question: 'Toplu sıkıştırma grubuna animasyonlu GIF dosyaları bırakabilir miyim?',
        answer:
          'Animasyonlu GIF girdileri burada yalnızca ilk karelerini statik dosya olarak çıkarıp sıkıştırır. Hareketi bozulmadan koruyarak çok kareli animasyonlu GIF dosyalarını küçültmeniz gerekiyorsa özel GIF Sıkıştırıcı aracımızı kullanın.',
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
    name: 'Hedef Dosya Boyutu Sıkıştırıcı',
    shortDescription: 'Herhangi bir resmi tam özel KB veya MB sınırınıza kadar sıkıştırın.',
    category: 'compress',
    seoTitle: 'Tam Boyuta Sıkıştırma Ücretsiz – Özel KB veya MB Hedefi',
    seoDescription:
      'Resimleri ücretsiz ve çevrimiçi olarak tam KB veya MB sınırına sıkıştırın; ikili kalite araması ve akıllı ölçeklendirme ile tarayıcınızda, yükleme olmadan.',
    h1: 'Hedef Dosya Boyutuna Resim Sıkıştırıcı',
    subtitle:
      'Kimlik için 35 KB, web başlığı için 150 KB veya ek için 2 MB gibi herhangi bir tam yükleme sınırını KB veya MB cinsinden yazın; doğrudan tarayıcınızda çalışan hedef dosya boyutu sıkıştırıcımızla. Alışılmadık portal kurallarıyla karşılaşan tasarımcılar, geliştiriciler ve başvuru sahipleri için tasarlandı; ikili kalite aramasını 25 MB boyutuna kadar dosyalarda isteğe bağlı piksel ölçeklendirmeyle birleştirir; hepsi kendi cihazınızda gerçekleşir.',
    howToSteps: [
      {
        title: 'KB veya MB cinsinden özel sınırınızı yazın',
        description:
          '1 KB ile 10.240 KB arasında herhangi bir hedef sayı yazın (veya 20 MB boyutuna kadar MB birimine geçin) ya da 20 KB, 50 KB, 100 KB, 200 KB, 500 KB veya 1 MB gibi bir hızlı erişime dokunun.',
      },
      {
        title: '25 MB boyutuna kadar bir veya daha fazla resim bırakın',
        description:
          'Hedefinize yönelik otomatik iyileştirmeyi hemen başlatmak için JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyalarını yükleme alanına yükleyin.',
      },
      {
        title: 'Çıktı formatını ve yedek kontrolleri seçin',
        description:
          'Orijinal, JPG, WebP veya PNG seçin; yüksek çözünürlüklü dosyaların piksel küçültmesi gerekiyorsa akıllı boyut ölçeklendirmeyi etkin tutun ve ağır grafikler için otomatik PNG dönüştürmeyi açın.',
      },
      {
        title: 'Hedef tanısını okuyun ve kaliteyi karşılaştırın',
        description:
          'Hedef Sıkıştırma Özeti bölümünde ulaşılan ve ulaşılamayan dosyaları gözden geçirin, Karşılaştır ile netliği yan yana inceleyin ya da küçük bir girdi büyüdüyse Orijinali Koru seçeneğine basın.',
      },
      {
        title: 'Hedefi istediğiniz zaman ayarlayın veya ZIP indirin',
        description:
          'Özel eşiğinizi değiştirin ve kuyruğu yeniden işlemek için [hedef] Boyutuna Sıkıştır düğmesine basın; ardından tekil dosyaları kaydedin veya Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'KB ve MB cinsinden özel hedefler',
        description: '10 KB boyutundaki küçük avatarlardan baskı için çok megabaytlık yüklemelere kadar herhangi bir hedef boyut ayarlayın.',
      },
      {
        title: 'İki aşamalı motor: kalite ve ölçek',
        description: 'Önce tam çözünürlükte kalite düzeylerini dener; yalnızca gerektiğinde boyutları adım adım küçültür.',
      },
      {
        title: 'Ulaşılamayan hedefler için dürüst tanı',
        description: 'Kayıpsız bir PNG veya kapalı ölçeklendirmenin katı bir boyut sınırına ulaşmayı ne zaman engellediğini açıkça açıklar.',
      },
      {
        title: 'Toplu iş ve ZIP uyumluluğu',
        description: 'Birden fazla dosyayı aynı KB hedefine sıkıştırın ve hepsini tek bir ZIP olarak indirin.',
      },
    ],
    faqs: [
      {
        question: 'Hedef dosya boyutu sıkıştırıcı hangi KB ve MB aralığını destekliyor?',
        answer:
          'KB modunda sayfa açıldığında varsayılan 150 KB olmak üzere 1 KB ile 10.240 KB (10 MB) arasında herhangi bir tam sayı yazabilirsiniz. Birim hapını MB olarak değiştirdiğinizde 20 KB, 50 KB, 100 KB, 200 KB, 500 KB ve 1 MB hızlı erişimleriyle 1 MB ile 20 MB arasında herhangi bir değeri hedefleyebilirsiniz.',
      },
      {
        question: 'Hedef dosya boyutu sıkıştırıcı, KB ile MB arasında geçiş yaparken sayımı nasıl yeniden hesaplıyor?',
        answer:
          'MB seçeneğine bastığınızda mevcut KB hedefiniz 1024 sayısına bölünür ve en az 1 MB olacak şekilde yuvarlanır; böylece kazara kilobayttan minik bir bayt sınırına düşmezsiniz. KB birimine döndüğünüzde değer 10.240 KB sınırına kadar sorunsuz bir şekilde 1024 ile çarpılır.',
      },
      {
        question: 'Hedef dosya boyutu sıkıştırıcı neden önce tam çözünürlükte ikili kalite aramasını deniyor?',
        answer:
          '150 KB, 300 KB veya 1,5 MB gibi ılımlı sınırlara sahip birçok resim, piksel atmadan yalnızca fazla JPEG veya WebP sıkıştırmasını kırparak hedefe ulaşabilir. Önce tam boyutlarla yüzde 35 ile yüzde 94 arasındaki kaliteyi denemek, genişlik ve yüksekliğin mümkün olduğunda bozulmadan kalmasını sağlar.',
      },
      {
        question: 'Hedef dosya boyutu sıkıştırıcıda akıllı boyut ölçeklendirme ne zaman devreye giriyor?',
        answer:
          'Tam genişlikte yüzde 35 kayıplı kalite bile resmi bayt eşiğinizin altına sokamıyorsa ve Akıllı Boyut Ölçeklendirmeye İzin Ver kutusu işaretliyse motor, yüzde 82 seviyesinden yüzde 10 seviyesine inen aşamalı ölçek faktörleriyle düşer. Her adımda yeni bir kalite araması çalıştırır ve sınırınızı karşılayan en yüksek çözünürlüğü seçer.',
      },
      {
        question: 'Portal, boyut değiştirmeden çok sıkı bir KB sınırı isterse hedef dosya boyutu sıkıştırıcıda ne olur?',
        answer:
          'Genişlik ve yüksekliği yüzde 100 sabitlemek için Akıllı Boyut Ölçeklendirmeye İzin Ver seçeneğinin işaretini kaldırın. Sıkıştırıcı daha sonra tam boyutlarda JPG veya WebP kayıplı kalitesini yüzde 5 seviyesine kadar düşürür ve resmin karmaşıklığının istediğiniz KB boyutuna fiziksel olarak sığmadığını dürüstçe bildirir.',
      },
      {
        question: '2 KB veya 3 KB gibi imkânsız sınırlar neden dürüst bir hedefe ulaşılamadı uyarısı gösteriyor?',
        answer:
          'Geçerli her JPEG, WebP veya PNG dosyası, minik bir ızgarada bile birkaç yüz bayt kaplayan zorunlu başlıklar, Huffman tabloları ve renk niceleme blokları içerir. Sayı uydurmak veya başarısız olmak yerine kart, önerilerle birlikte ulaşılabilecek en küçük kodlanmış gerçek boyutu gösterir.',
      },
      {
        question: 'Hedef dosya boyutu sıkıştırıcıda büyük PNG dosyalarının otomatik dönüştürme anahtarı ne yapıyor?',
        answer:
          'Kayıpsız PNG dosyaları kalite kaydırıcılarını yok sayar ve yalnızca ölçek küçültmeyle küçülür; bu da ekran görüntülerini veya ürün grafiklerini sıkı bir KB sınırı altında zorlanırsa bulanıklaştırabilir. Otomatik dönüştürme açıkken çok büyük opak PNG dosyaları JPG formatına geçerken şeffaf PNG dosyaları, PNG tek başına hedefe ulaşamadığında veya yüzde 65 ölçeğin altına düştüğünde WebP formatına geçer.',
      },
      {
        question: 'Karışık fotoğrafları aynı özel KB eşiğine toplu olarak sıkıştırabilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG resimlerinin herhangi bir karışımını kuyruğa bırakın; her dosya etkin KB veya MB hedefinize karşı bağımsız olarak optimize edilir.',
      },
      {
        question: 'Hedef Sıkıştırma Özeti, bir toplu işin kısmi başarısını nasıl kaydediyor?',
        answer:
          'Birden fazla dosyadan oluşan bir toplu işi katı bir özel sınıra karşı sıkıştırdığınızda koyu özet bandı, hedefini aşan dosya sayısını ve dürüstçe sığamayan dosya sayısını, tasarruf edilen toplam baytla birlikte tam olarak sayar. Her tekil kart, son kalite yüzdesini ve tam ölçek faktörünü açıklar.',
      },
      {
        question: 'Hedef dosya boyutu sıkıştırıcıda tekil indirmeler ve ZIP dosyaları nasıl adlandırılıyor?',
        answer:
          'Tekil indirmeler, hedefinizin kilobayt etiketini ekler; broşür_150kb.jpg gibi adlar oluşurken çok dosyalı ZIP dışa aktarmaları compressmypic_<değer><birim>.zip olarak kaydedilir. Bozulmamış orijinalleriniz diskte ayrı ve güvende kalır.',
      },
      {
        question: 'JPG seçersem hedef dosya boyutu sıkıştırıcı şeffaf arka planları nasıl yönetiyor?',
        answer:
          'JPG seçtiğinizde şeffaf PNG için mat renk örneği görünür (varsayılan saf beyaz #ffffff). Alfa kanallı şeffaf bölgeler, JPEG sıkıştırma çalışmadan önce seçtiğiniz arka plan rengiyle temiz bir şekilde doldurularak katı siyah kenarları engeller.',
      },
      {
        question: 'Hedefimden daha küçük bir dosya neden büyüme uyarısı gösterdi?',
        answer:
          'Zaten 180 KB boyutuna sıkıştırılmış bir resim için 300 KB sınırı isterseniz HTML5 Canvas üzerinde çözümleyip yüksek kaliteyle yeniden kaydetmek onu 240 KB boyutuna genişletebilir. O kartta Orijinali Koru seçeneğine basarak 180 KB boyutundaki daha hafif orijinal dosyanızı koruyun.',
      },
      {
        question: 'Hedef boyutuna sıkıştırma, belgelerdeki veya fotoğraflardaki hassas EXIF meta verilerini kaldırıyor mu?',
        answer:
          'Evet. Pikselleri HTML5 Canvas üzerine çizmek, gömülü kamera önizlemelerini, deklanşör meta verilerini ve GPS koordinatlarını otomatik olarak kaldırır; kişisel dosyalarınızı gizli tutar ve her kilobaytı görsel netliğe ayırır.',
      },
      {
        question: 'Resimleri bitirdikten sonra özel KB değerimi yeniden yüklemeden değiştirebilir miyim?',
        answer:
          'Evet. Sayısal hedefi düzenleyin veya başka bir hızlı erişime dokunun ve yüklenen listenizin tamamını bellekte hemen yeniden optimize etmek için [hedef] Boyutuna Sıkıştır düğmesine basın.',
      },
      {
        question: 'Son bayt sayısı, ikili kilobayt sınırlarına göre ne kadar doğru?',
        answer:
          'Motor, KB boyutunu tam ikili baytlara dönüştürür (KB × 1024) ve girdinizi asla aşılmayan katı bir üst sınır olarak ele alır; sabit kısıtlamalar altında fiziksel olarak imkânsız olmadıkça. İkili araması genellikle en yüksek detayı korumak için bu sınırın yüzde 96 ile yüzde 100 arasında durur.',
      },
      {
        question: 'Hedef hesaplaması sırasında özel müşteri denemeleri, sözleşmeler veya tıbbi taramalar yükleniyor mu?',
        answer:
          'Hayır. İkili arama yinelemeleri, resim ölçeklendirme, WebAssembly ile HEIC çözümleme ve ZIP paketleme, tarayıcı oturumunuzda tamamen gerçekleşir; ağ üzerinden harici aktarım yapılmaz.',
      },
      {
        question: 'Özel KB sınırımdaki ince metni veya detayları kaydetmeden önce görebilir miyim?',
        answer:
          'Evet. Tamamlanmış herhangi bir sonuç kartında Karşılaştır seçeneğine basarak etkileşimli öncesi ve sonrası perdeyi açın ve keskin kenarları orijinal yüklemeyle doğrudan karşılaştırarak inceleyin.',
      },
      {
        question: 'Sabit 50 KB veya 100 KB aracı yerine hedef dosya boyutu sıkıştırıcıyı ne zaman seçmeliyim?',
        answer:
          'İş akışınız her zaman 50 KB pasaport veya 200 KB Shopify yüklemesi gibi standart portal ölçütlerini hedefliyorsa sabit sayfaları kullanın. Formlar 30 KB, 75 KB, 250 KB veya 1,5 MB gibi alışılmadık sınırlar istediğinde bu hedef dosya boyutu sıkıştırıcıyı açın.',
      },
      {
        question: 'Animasyonlu bir GIF yükleyip hedef dosya boyutu sıkıştırıcıda 400 KB hedeflersem ne olur?',
        answer:
          'Canvas tabanlı KB yönlendirmesi statik raster kareleri işlediği için animasyonlu GIF dosyaları ilk kareleriyle sabit resim olarak optimize edilir ve dışa aktarılır. Döngüsel hareketi kaybetmeden çok kareli animasyonları küçültmeniz gerekiyorsa özel GIF Sıkıştırıcı aracımızı kullanın.',
      },
      {
        question: '5 MB gibi yüksek bir MB hedefi belirlersem 1 MB boyutundaki bir resme ne olur?',
        answer:
          'Özel MB sınırınızın zaten altında olan herhangi bir resim, tam boyutlarda en yüksek kalite geçişinde hemen onaylanır. Yeniden kodlama bayt ağırlığını gereksiz yere şişirirse daha hafif orijinal dosyanızla kalmak için doğrudan kartta Orijinali Koru seçeneğine basabilirsiniz.',
      },
    ],
    relatedSlugs: ['/compress-image-to-50kb', '/compress-image-to-100kb', '/compress-image-to-200kb', '/compress-image-to-500kb'],
  },
  {
    slug: '/bulk-image-resizer',
    name: 'Toplu Resim Boyutlandırıcı',
    shortDescription: 'Onlarca resmi en büyük boyut, genişlik veya yüzde ile boyutlandırın; ZIP ile indirin.',
    category: 'resize',
    seoTitle: 'Toplu Resim Boyutlandırma Ücretsiz – ZIP ile İndirme',
    seoDescription:
      'Toplu resim boyutlandırıcı ile onlarca fotoğrafı ücretsiz ve çevrimiçi olarak tarayıcınızda ölçeklendirin. En Büyük Sığdırma, Tek Tip Genişlik, Tam veya % seçin ve tek ZIP indirin.',
    h1: 'Toplu Resim Boyutlandırıcı Ücretsiz',
    subtitle:
      'Tarayıcınızda yerel olarak çalışan ücretsiz toplu resim boyutlandırıcımızla bütün ürün oturumları, blog klasörleri ve fotoğraf albümlerinde piksel boyutlarını standartlaştırın. E-ticaret satıcıları, içerik ekipleri ve fotoğrafçılar için tasarlandı; karışık yatay ve dikey toplu işleri En Büyük Sığdırma G × Y, Tek Tip Genişlik, Tam G × Y veya yüzde ölçeklendirmeyle yönetir; dosya başına 25 MB boyutuna kadar destekler ve anında ZIP dışa aktarma sunar.',
    howToSteps: [
      {
        title: 'Toplu kuyruğa birden fazla resim bırakın',
        description:
          'Bilgisayarınızdan veya telefonunuzdan her biri 25 MB boyutuna kadar JPG, PNG, WebP, HEIC, GIF, BMP veya SVG dosyalarının herhangi bir karışımını yükleyin.',
      },
      {
        title: 'Bir toplu boyutlandırma stratejisi seçin',
        description:
          'Karışık yönlendirmeler için En Büyük Sığdırma G × Y, sabit sütun düzenleri için Tek Tip Genişlik, katı ızgaralar için Tam G × Y ya da tek tip ölçeklendirme için Yüzde (%) seçeneklerinden birini belirleyin.',
      },
      {
        title: 'Hedef boyutları veya hızlı boyut erişimlerini belirleyin',
        description:
          '1 ile 12.000 px arasında piksel yazın (veya Full HD 1920px, Blog 1200px, E-ticaret 1000×1000 ya da Küçük Resim 600px seçeneklerine basın) ya da yüzde 10 ile yüzde 200 arasında ölçeği kaydırın.',
      },
      {
        title: 'Büyütme korumasını ve sığdırma davranışını yapılandırın',
        description:
          'Minik simgeleri korumak için «Daha küçük resimleri büyütme» seçeneğini işaretli tutun ya da Tam G × Y seçtiğinizde Sığdır, Kapsa veya Esnet seçeneklerinden birini belirleyin.',
      },
      {
        title: 'Çıktı formatını, kaliteyi ve mat arka planı seçin',
        description:
          'Orijinal seçeneğini koruyun ya da çıktıları yüzde 10 ile yüzde 100 kalite kaydırıcısı ve JPG için özel mat arka plan rengiyle JPG, PNG veya WebP formatına dönüştürün.',
      },
      {
        title: 'Toplu boyutlandırmayı çalıştırın ve hepsini ZIP olarak indirin',
        description:
          'Her kartta eski ve yeni piksel boyutlarını gözden geçirin ve bulk_resized_compressmypic.zip dosyasını yerel olarak kaydetmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'En büyük sığdırma sınırlayıcı kutu modu',
        description: 'Geniş manzaraları ve uzun portreleri kırpmadan veya bozmadan örneğin 1200×1200 px içine güvenli bir şekilde küçültür.',
      },
      {
        title: 'Büyütme koruması',
        description: '«Daha küçük resimleri büyütme» seçeneğini işaretli tutun; böylece küçük öğeler gerilmek yerine net kalır.',
      },
      {
        title: 'Format ve kalite kontrolleri',
        description: 'Boyutlandırılmış çıktıları aynı anda isteğe bağlı olarak WebP veya JPG formatına dönüştürün.',
      },
      {
        title: 'Tek tıklı ZIP paketleme',
        description: 'Onlarca boyutlandırılmış resmi temiz adlarla tek bir ZIP dosyasında indirin.',
      },
    ],
    faqs: [
      {
        question: 'En Büyük Sığdırma G × Y, yatay manzaralar ve dikey portreler karışık bir klasörü nasıl yönetiyor?',
        answer:
          'En Büyük Sığdırma G × Y, genişlik ve yükseklik girdilerinizi (varsayılan 1200×1200 px) görünmez bir sınırlayıcı kutu olarak ele alır ve her fotoğrafın doğal oranını korur. 4000×2000 boyutundaki bir manzara 1200×600 olurken 2000×4000 boyutundaki bir portre 600×1200 olur; kırpma veya esnetme yapılmaz.',
      },
      {
        question: 'Toplu boyutlandırıcıda Tek Tip Genişlik, En Büyük Sığdırma G × Y seçeneğinden ne zaman daha iyidir?',
        answer:
          'Dikey bültenler, CMS makale sütunları veya duyarlı galeriler oluştururken her resmin tam olarak aynı yatay genişliği paylaşması gerektiğinde Tek Tip Genişlik seçin. Her fotoğraf yüksekliğini orantılı olarak ölçeklendirir; böylece hiçbir şey gerilmez veya kırpılmaz.',
      },
      {
        question: 'Toplu boyutlandırıcıdaki Tam G × Y modunda Sığdır, Kapsa ve Esnet ne yapıyor?',
        answer:
          'Sığdır, resmi temiz dolgu kenar boşluklarıyla tam piksel kutusunun içine sığdırır; Kapsa, merkezden fazla kenarları kırparak her piksel kenarını doldurur. Esnet ise uymayan oranları doğrudan tam hedef piksellere uydurmak için zorlar.',
      },
      {
        question: 'Toplu boyutlandırmada yüzde (%) ölçeklendirme nasıl çalışıyor?',
        answer:
          'Yüzde modu, yüklenen her resmin orijinal genişlik ve yüksekliğini kaydırıcıda seçtiğiniz faktörle çarpar (yüzde 10 ile yüzde 200 arasında; yüzde 25, yüzde 50, yüzde 75, yüzde 100 ve yüzde 150 hızlı düğmeleri bulunur). Yüzde 50 seçmek, 4000×3000 boyutundaki bir fotoğrafı 2000×1500 ve 1000×800 boyutundaki bir simgeyi aynı geçişte 500×400 boyutuna dönüştürür.',
      },
      {
        question: 'Karışık toplu işlerde «Daha küçük resimleri büyütme» seçeneğini neden etkin bırakmalıyım?',
        answer:
          'Bir klasörde 4000 px DSLR fotoğraflar ve 400 px rozetler varsa küçük bir rozeti 1200 px boyutuna zorlamak pikselleri gerer ve bulanıklık oluşturur. Büyütmeme seçeneğini işaretli bırakmak, büyük fotoğrafları temiz bir şekilde küçültürken küçük dosyaların orijinal net boyutlarını korumasını sağlar.',
      },
      {
        question: 'Toplu boyutlandırıcıdaki dört hızlı piksel düğmesi hangi değerleri ayarlıyor?',
        answer:
          'Full HD 1920px seçeneğine dokunmak 1920×1080 doldurur, Blog 1200px 1200×1200 ayarlar, E-ticaret 1000×1000 1000×1000 ayarlar ve Küçük Resim 600px 600×600 ayarlar. Ardından iki piksel alanından birini 12.000 px boyutuna kadar el ile ayarlayabilirsiniz.',
      },
      {
        question: 'Bütün bir klasörü toplu boyutlandırırken WebP veya JPG formatına dönüştürebilir miyim?',
        answer:
          'Evet. Toplu Boyutlandır (N) düğmesine basmadan önce Çıktı Formatı seçeneğini Orijinal seçeneğinden WebP, JPG veya PNG olarak değiştirin; böylece piksel boyutlarını değiştirirken dosya formatlarını da tek bir Canvas geçişinde modernleştirirsiniz.',
      },
      {
        question: 'Şeffaf PNG logolarını JPG çıktısıyla toplu boyutlandırırsam ne olur?',
        answer:
          'JPG seçtiğinizde Mat Arka Plan renk seçici görünür (varsayılan beyaz #ffffff). Şeffaf arka planlar veya yumuşak gölgeler, JPEG kodlamadan önce seçtiğiniz mat renk üzerine temiz bir şekilde çizilir.',
      },
      {
        question: 'Çıktı formatını PNG olarak tutmak toplu boyutlandırmada alfa şeffaflığını koruyor mu?',
        answer:
          'Evet, PNG olarak dışa aktarmak her boyutlandırılmış öğede şeffaf arka planları ve yumuşak alfa kenarları bozulmadan korur. Çıktı Formatı seçeneğini Orijinal olarak tutmak da PNG ve WebP yüklemelerinde şeffaflığı korur.',
      },
      {
        question: 'ZIP toplu işini indirmeden önce boyutlandırılmış fotoğrafların net kaldığını nasıl doğrularım?',
        answer:
          'Etkileşimli öncesi ve sonrası karşılaştırma görüntüleyicisini açmak için herhangi bir küçük resim kartına veya tamamlanmış bir öğenin Karşılaştır düğmesine basın. Toplu işi dışa aktarmadan önce net kenarları doğrulamak için bölücüyü yan yana sürükleyebilirsiniz.',
      },
      {
        question: 'Toplu resim boyutlandırıcı dosya başına hangi megabayt ve piksel sınırlarını koyuyor?',
        answer:
          'Yüklenen her resim 25 MB boyutuna kadar olabilir ve piksel girdileri kenar başına 1 px ile 12.000 px arasında değişir. Onlarca resimde 10.000 px üzerindeki devasa tuvalleri dışa aktarmanın cihazınızın tarayıcısındaki kullanılabilir RAM belleğine bağlı olduğunu unutmayın.',
      },
      {
        question: 'Aynı boyutlandırma kuyruğunda iPhone HEIC fotoğrafları ve SVG vektör dosyaları destekleniyor mu?',
        answer:
          'Evet. HEIC/HEIF fotoğrafları istemci tarafı WebAssembly ile yerel olarak çözülür ve SVG grafikleri, standart JPG, PNG, WebP, GIF ve BMP yüklemeleriyle birlikte ölçeklenmeden önce HTML5 Canvas üzerinde sorunsuz bir şekilde rasterleştirilir.',
      },
      {
        question: 'Ayarları düzenleyip dosyaları yeniden yüklemeden bütün toplu işi yeniden boyutlandırabilir miyim?',
        answer:
          'Evet. Stratejiyi, piksel sınırlarını, formatı veya yüzde 10 ile yüzde 100 arasındaki kalite kaydırıcısını istediğiniz zaman ayarlayın ve kuyruktaki tüm resimleri tarayıcı belleğinde hemen yeniden işlemek için Toplu Boyutlandır (N) düğmesine basın.',
      },
      {
        question: 'Canlı ilerleme sayacı büyük klasörlerin ne kadar ilerlediğini gösteriyor mu?',
        answer:
          'Evet. İşleme çalışırken eylem düğmesi, dönen küçük resimlerle birlikte Boyutlandırılıyor (X/Y)... ifadesini gösterir; böylece toplu işin tam ilerlemesini her zaman bilirsiniz.',
      },
      {
        question: 'Gizli müşteri katalogları veya aile albümleri boyutlandırmak için bulut sunucularına gönderiliyor mu?',
        answer:
          'Asla. Her boyutlandırma hesaplaması, Canvas çizim adımı ve ZIP paketi cihazınızda yerel olarak çalışır; özel fotoğrafları ve yayınlanmamış ürünleri yüzde 100 cihazda tutar.',
      },
      {
        question: 'Toplu resim boyutlandırıcı, kameranın EXIF detaylarını ve GPS koordinatlarını kaldırıyor mu?',
        answer:
          'Evet. HTML5 Canvas, piksel verilerini orijinal EXIF başlıklarını kopyalamadan hedef boyutlara yeniden çizdiği için konum etiketleri ve kamera seri numaraları otomatik olarak kaldırılır.',
      },
      {
        question: 'Toplu boyutlandırıcıdan indirilen ZIP dosyasının adı nedir?',
        answer:
          'Tümünü İndir (ZIP) düğmesine bastığınızda tarayıcınızda yerel olarak bulk_resized_compressmypic.zip oluşturulur. Kuyruğunuzdaki başarıyla boyutlandırılmış her dosyayı tek bir arşivde temiz bir şekilde paketler.',
      },
      {
        question: 'ZIP dosyasını dışa aktarmadan önce 20 resimlik bir toplu işten kazara eklenen bir dosyayı silebilir miyim?',
        answer:
          'Evet. Kalan 19 boyutlandırılmış sonucu kesintiye uğratmadan yalnızca o resmi kaldırmak için herhangi bir tekil kartın çöp kutusu simgesine basın.',
      },
      {
        question: 'Toplu boyutlandırıcı, toplu resim sıkıştırıcıdan nasıl farklı?',
        answer:
          'Toplu resim sıkıştırıcı, kayıplı sıkıştırmayla dosya boyutunu azaltırken orijinal genişlik ve yüksekliği piksel olarak bozulmadan korur. Buna karşılık bu toplu boyutlandırıcı, isteğe bağlı format ve kalite ayarlarıyla birlikte piksel boyutlarını ve sınırlayıcı kutuları toplu olarak etkin bir şekilde değiştirir.',
      },
      {
        question: 'Tamamlanmış bir boyutlandırma toplu işine fazladan fotoğraf ekleyebilir miyim?',
        answer:
          'Evet. İstediğiniz zaman yükleme alanına ek dosyalar sürükleyin; bunlar etkin boyutlandırma stratejinizle otomatik olarak işlenir ve son Tümünü İndir (ZIP) özetine eklenir.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/bulk-image-compressor', '/bulk-image-converter', '/web-image-optimizer'],
  },
  {
    slug: '/bulk-image-converter',
    name: 'Toplu Resim Dönüştürücü',
    shortDescription: 'Birden fazla JPG, PNG, HEIC, SVG ve BMP dosyasını aynı anda, ZIP ile dönüştürün.',
    category: 'convert',
    seoTitle: 'Toplu Resim Dönüştürme Ücretsiz – Format Değiştir ve ZIP İndir',
    seoDescription:
      'Toplu resim dönüştürücü ile karışık klasörleri ücretsiz ve çevrimiçi olarak tarayıcınızda değiştirin. HEIC, PNG, SVG, AVIF ve BMP toplu işlerini WebP, JPG veya PNG formatına ZIP ile dönüştürün.',
    h1: 'Toplu Resim Dönüştürücü Ücretsiz',
    subtitle:
      'Apple HEIC fotoğraflarının, AVIF indirmelerinin, SVG simgelerinin, şeffaf PNG dosyalarının ve eski BMP bit eşlemlerinin karışık klasörlerini ücretsiz toplu resim dönüştürücümüzle tek geçişte birleştirin. Bütün öğe kitaplıklarını standartlaştıran geliştiriciler, içerik yöneticileri ve sıradan kullanıcılar için tasarlandı; dosya başına 25 MB boyutuna kadar toplu işleri yerel olarak temiz bir şekilde WebP, JPG veya PNG formatına dönüştürür; isteğe bağlı ad son ekleri ve tek ZIP indirme sunar.',
    howToSteps: [
      {
        title: 'Karışık formatlarda bir resim toplu işi bırakın',
        description:
          'Her biri 25 MB boyutuna kadar JPG, PNG, WebP, HEIC, SVG, BMP, GIF veya AVIF dosyalarının herhangi bir kombinasyonunu yükleme alanına yükleyin.',
      },
      {
        title: 'Hedef formatı seçin: WebP, JPG veya PNG',
        description:
          'Site hızı için WebP (web için en hafifi), geniş paylaşım için JPG (evrensel) veya net grafikler için PNG (kayıpsız ve şeffaflık destekli) seçin.',
      },
      {
        title: 'İsteğe bağlı ad son eki ve şeffaf dolgu',
        description:
          '_web gibi isteğe bağlı bir ad son eki yazın (veya boş bırakın) ve alfalı resimleri JPG formatına dönüştürüyorsanız Şeffaf Dolgu mat rengi seçin.',
      },
      {
        title: 'Çıktı kalite yüzdesini belirleyin',
        description:
          'WebP veya JPG dışa aktarmaları için kalite kaydırıcısını yüzde 10 ile yüzde 100 arasında ayarlayın (kayıpsız PNG etkinken otomatik olarak devre dışı kalır).',
      },
      {
        title: 'Toplu iş toplamlarını ve görsel karşılaştırmaları gözden geçirin',
        description:
          'Dosya başına bayt değişimlerini ve Toplu Dönüştürme Özeti bandını inceleyin; netliği doğrulamak için örnek öğelerde Karşılaştır seçeneğini açın.',
      },
      {
        title: 'Tekil dosyaları kaydedin veya Tümünü İndir (ZIP)',
        description:
          'Tekil kartlarda İndir düğmesine basın ya da bulk_converted_webp.zip, bulk_converted_jpg.zip veya bulk_converted_png.zip dosyasını dışa aktarmak için Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Karışık girdili toplu iş akışı',
        description: 'HEIC, PNG, SVG ve JPEG dosyalarını tek bir toplu işte birlikte bırakın ve tek bir formatta birleştirin.',
      },
      {
        title: 'Şeffaflık matı ve son ek seçenekleri',
        description: 'JPG için beyaz veya renkli mat arka planları özelleştirin ve isteğe bağlı ad son eklerini temiz bir şekilde ekleyin.',
      },
      {
        title: 'Toplu iş boyutu özeti',
        description: 'Bütün toplu iş için toplam orijinal boyuta karşı toplam dönüştürülmüş boyutu görün.',
      },
      {
        title: 'Yüzde 100 yerel WebAssembly ve Canvas',
        description: 'Dosyalar asla yüklenmez: iPhone HEIC dönüştürme bile cihazınızda çalışır.',
      },
    ],
    faqs: [
      {
        question: 'Toplu resim dönüştürücüde aynı kuyruğa farklı dosya türlerini karıştırabilir miyim?',
        answer:
          'Evet. Apple HEIC fotoğraflarını, modern AVIF dosyalarını, şeffaf PNG dosyalarını, vektör SVG dosyalarını, eski BMP dosyalarını, GIF, WebP ve JPG dosyalarını aynı yükleme geçişinde bırakabilir ve bütün koleksiyonu tek tip bir formatta dışa aktarabilirsiniz.',
      },
      {
        question: 'Resim toplu işlerini dönüştürürken isteğe bağlı ad son eki neden yardımcı oluyor?',
        answer:
          '_web veya _v2 gibi bir etiket yazmak, yeni uzantıdan hemen önce o son eki ekler; hero_web.webp gibi temiz adlar üretir. Bu, yeni dönüştürülen öğelerin paylaşılan proje klasörlerinde benzer adlı kaynak dosyalarla çakışmasını engeller.',
      },
      {
        question: 'Toplu Dönüştürme Özeti, toplu işin toplam etkisini nasıl hesaplıyor?',
        answer:
          'Dosyalar bittiğinde koyu özet bandı, dönüştürülen her dosyanın orijinal baytlarını toplar ve dönüştürülen toplam baytları yanında gösterir. Böylece bütün bir klasörün depolama veya bant genişliği değişimini hemen gözden geçirebilirsiniz.',
      },
      {
        question: 'Toplu dönüştürücüde şeffaf PNG ve SVG dosyalarını JPG formatında birleştirirsem ne olur?',
        answer:
          'JPG (evrensel) seçtiğinizde Şeffaf Dolgu renk seçici görünür (varsayılan beyaz #ffffff). PNG veya SVG dosyalarınızdaki alfa şeffaf bölgeler, katı siyaha dönmek yerine seçtiğiniz arka plan tonu üzerine yumuşak bir şekilde kaynaşır.',
      },
      {
        question: 'Toplu dönüştürücüde kayıpsız PNG seçtiğimde kalite kontrolü neden etkin değil?',
        answer:
          'PNG, kodlanmış her pikseli kayıplı kalite düzeyleri olmadan birebir koruyan kayıpsız DEFLATE kodlama kullanır. WebP veya JPG seçtiğiniz anda yüzde 10 ile yüzde 100 arasındaki kalite kaydırıcısının kilidi hemen açılır.',
      },
      {
        question: 'Karışık fotoğraf klasörünü yeniden yüklemeden iki kez dönüştürebilir miyim; bir kez WebP, bir kez JPG olarak?',
        answer:
          'Evet. Toplu Dönüştür formatını istediğiniz zaman WebP formatından JPG formatına değiştirin, isteğe bağlı olarak ad son ekinizi güncelleyin ve bellekte önbelleğe alınan dosyaları yeniden işleyip ikinci bir ZIP almak için Tümünü Dönüştür (N) düğmesine basın.',
      },
      {
        question: 'ZIP adı, toplu dönüştürücüde dışa aktardığım hedef formatı nasıl belirliyor?',
        answer:
          'Tümünü İndir (ZIP) düğmesine bastığınızda doğrudan tarayıcınızda bulk_converted_webp.zip, bulk_converted_jpg.zip veya bulk_converted_png.zip oluşturulur. Dosya adında formatın bulunması, İndirilenler klasörünüzde birden fazla format dışa aktarmasını ayırt etmeyi kolaylaştırır.',
      },
      {
        question: 'Her şeyi WebP formatında birleştirmek, PNG logolarındaki ve SVG simgelerindeki alfa şeffaflığını koruyor mu?',
        answer:
          'Evet. Hem WebP (web için en hafifi) hem de PNG (kayıpsız ve şeffaflık destekli), şeffaf PNG dosyalarının, WebP dosyalarının ve bağımsız SVG dosyalarının tam 8 bit şeffaflığını temiz bir şekilde korur.',
      },
      {
        question: 'Toplu işime karışmış bir AVIF dosyasını eski bir tarayıcı çözümleyemezse ne olur?',
        answer:
          'Bir dosya, güncel olmayan bir tarayıcıda AVIF gibi tarayıcınızın desteklemediği bir kodek kullanıyorsa yalnızca o belirli kart açık bir hata uyarısı gösterir. Aynı toplu işteki diğer tüm JPG, PNG veya HEIC öğeleri normal şekilde tamamlanır.',
      },
      {
        question: 'iPhone HEIC toplu işleri uzak bir bulut sunucusunda mı dönüştürülüyor?',
        answer:
          'Hayır. Apple HEIC ve HEIF çözümleme bile HTML5 Canvas hedef formatınızı kodlamadan önce istemci tarafı WebAssembly ile tarayıcı sekmenizde yerel olarak çalışır.',
      },
      {
        question: 'Toplu resim dönüştürücüde tekil dosyalar ne kadar büyük olabilir?',
        answer:
          'Toplu kuyruğunuzdaki her tekil resim 25 MB boyutuna kadar olabilir. Bu pay, çok megapikselli kamera fotoğraflarını, katmanlı PNG dışa aktarmalarını ve sıkıştırılmamış BMP dosyalarını kolayca kapsar.',
      },
      {
        question: 'Bir toplu dönüştürme klasörüne animasyonlu GIF dosyaları eklenirse ne olur?',
        answer:
          'HTML5 Canvas, yüklenen herhangi bir .gif dosyasının ilk karesini tam genişlik ve yükseklikle net bir statik WebP, JPG veya PNG dosyasına rasterleştirir. Döngüsel animasyonu bozulmadan korumak istiyorsanız GIF Sıkıştırıcı aracımızı kullanın.',
      },
      {
        question: 'Toplu format dönüştürme, orijinal resim genişliğini ve yüksekliğini değiştiriyor mu?',
        answer:
          'Hayır, her çıktı orijinal genişlik ve yüksekliğinin yüzde 100 boyutunu dokunulmadan korur. Resim boyutunu değiştirmek veya boyutları aynı anda sınırlamak gerektiğinde Toplu Resim Boyutlandırıcı aracını kullanın.',
      },
      {
        question: 'Sıkıştırılmış JPEG dosyalarını PNG formatına dönüştürmek toplu özet toplamının neden daha büyük görünmesine yol açıyor?',
        answer:
          'Kayıpsız PNG, kayıplı JPEG formatına kıyasla fotoğrafik piksel başına çok daha fazla veri saklar. Bir iş akışı kesinlikle .png istemedikçe karışık web toplu işlerini yüzde 85 WebP formatına dönüştürmek, net kaliteyi korurken genellikle çok yer tasarrufu sağlar.',
      },
      {
        question: 'Karışık bir klasörü dönüştürdükten sonra kameranın EXIF etiketleri korunuyor mu?',
        answer:
          'Hayır. Resimleri HTML5 Canvas üzerine çizmek, dönüştürülen her dosyadaki EXIF meta veri bloklarını, kamera seri numaralarını ve GPS etiketlerini temiz bir şekilde kaldırır.',
      },
      {
        question: 'ZIP dosyasını dışa aktarmadan önce tekil kartlarda orijinal ve dönüştürülmüş pikselleri karşılaştırabilir miyim?',
        answer:
          'Evet. Tamamlanmış herhangi bir dosya kartında Karşılaştır seçeneğine basarak bölünmüş karşılaştırma görüntüleyicide ince kenarları ve renkleri yan yana inceleyin.',
      },
      {
        question: 'İlk toplu işimi dönüştürdükten sonra daha fazla dosya eklersem ne olur?',
        answer:
          'Yeni bırakılan dosyalar, o anda seçili hedef format, kalite, son ek ve mat dolgu ile otomatik olarak dönüştürülür. Ardından etkin kuyruğunuza ve paylaşılan ZIP özetine temiz bir şekilde eklenir.',
      },
      {
        question: 'SVG dosyalarının içindeki harici web yazı tipleri veya bağlantılı uzak resimler toplu dönüştürmeye dahil ediliyor mu?',
        answer:
          'Tarayıcı güvenliği nedeniyle HTML5 Canvas, bağımsız SVG dosyalarını yalıtır ve uzak URL adreslerinin veya harici web yazı tiplerinin indirilmesini engeller. Yol, degrade ve gömülü CSS içeren kendi kendine yeten SVG dosyaları temiz bir şekilde dönüştürülür.',
      },
      {
        question: 'Dönüştürülen toplu listeden tek bir başarısız veya istenmeyen resmi silebilir miyim?',
        answer:
          'Evet. Listeden çıkarmak için herhangi bir kartın çöp kutusu düğmesine basın; özet ve ZIP indirme, kalan dosyalarla yeniden oluşturulur.',
      },
      {
        question: 'HEIC JPG gibi tek çift dönüştürücüler yerine bu toplu dönüştürücüyü ne zaman seçmeliyim?',
        answer:
          'Tek çift araçlar, belirli bir geçiş yolu için katı dosya filtreleri ve varsayılanlar önceden ayarlar. Bir klasörde WebP, JPG veya PNG formatına aynı anda dönüştürülmesi gereken birden fazla farklı uzantı olduğunda bu toplu resim dönüştürücüyü açın.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-compressor', '/bulk-image-resizer', '/web-image-optimizer'],
  },
  {
    slug: '/web-image-optimizer',
    name: 'Web Resim İyileştirici',
    shortDescription: 'Core Web Vitals hızı için başlık, ürün ve kart resimlerini optimize edin.',
    category: 'compress',
    seoTitle: 'Web Resim İyileştirme Ücretsiz – Core Web Vitals Hızlandırma',
    seoDescription:
      'Web iyileştirici ile ağır sayfa öğelerini ücretsiz ve çevrimiçi olarak tarayıcınızda küçültün. WebP şablonlarını kullanın, EXIF verilerini kaldırın ve hazır HTML img etiketlerini kopyalayın.',
    h1: 'Web Resimleri İçin İyileştirici (Core Web Vitals Hazır)',
    subtitle:
      'Core Web Vitals (LCP ve CLS) için tasarlanmış hızlı yüklenen web grafiklerini ücretsiz web resim iyileştiricimizle doğrudan tarayıcınızda hazırlayın. Ön yüz geliştiricileri, Shopify satıcıları ve teknik SEO uzmanları için tasarlandı; dosya başına 25 MB boyutuna kadar kanıtlanmış WebP ve JPG web alanı şablonlarını otomatik EXIF kaldırma, kopyalanabilir HTML <img> etiketleri ve tek ZIP indirmeleriyle birleştirir.',
    howToSteps: [
      {
        title: '5 web performans şablonundan birini seçin',
        description:
          'Başlık / Banner (1600 px WebP yüzde 80), E-ticaret Ürünü (1200 px WebP yüzde 82), Kart / Küçük Resim (640 px WebP yüzde 75), Sosyal OG / E-posta (1200 px JPG yüzde 82) veya Retina 2× Grafik (1920 px WebP yüzde 88) seçeneklerinden birini belirleyin.',
      },
      {
        title: 'Web formatını, en büyük boyutu veya kaliteyi özelleştirin',
        description:
          'WebP, JPG veya PNG arasında geçiş yapın, En Büyük Boyut (uzun kenar) değerini 640 px ile 1920 px arasında ayarlayın (veya Orijinal Boyutları Koru seçeneğini belirleyin) ve Kalite değerini yüzde 20 ile yüzde 95 arasında ince ayarlayın.',
      },
      {
        title: 'İşlenmemiş web öğelerini yükleme alanına bırakın',
        description:
          'Her biri 25 MB boyutuna kadar JPG, PNG, WebP, HEIC, SVG, BMP, GIF veya AVIF resimlerini yükleyin; küçük simgelerin şişmesini önlemek için Yalnızca Daha Büyük Resimleri Küçült seçeneği işaretli olsun.',
      },
      {
        title: 'Sayfa ağırlığı tasarrufunu gözden geçirin ve kaliteyi karşılaştırın',
        description:
          'Toplam sayfa ağırlığı tasarrufunu görmek için Web Performans Özeti bölümünü inceleyin, kart başına Web İçin Hazır rozetlerini doğrulayın ve kenarları Karşılaştır ile yan yana inceleyin.',
      },
      {
        title: 'Duyarlı HTML <img> parçacıklarını kopyalayın',
        description:
          'Genişlik, yükseklik, loading="lazy" ve decoding="async" özellikleriyle yapıştırmaya hazır işaretlemeyi almak için tamamlanmış herhangi bir kartta <img> Kopyala düğmesine basın.',
      },
      {
        title: 'Tekil -web öğelerini veya ZIP paketini indirin',
        description:
          'Tekil <ad>-web dosyalarını kaydedin ya da web_optimized_compressmypic.zip dosyasını indirmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Web için hazır şablonlar',
        description: 'LCP ve PageSpeed Insights için tasarlanmış önceden yapılandırılmış boyut sınırları ve WebP/JPG kalite ideal noktaları.',
      },
      {
        title: 'Kopyalanabilir HTML <img> parçacığı',
        description: 'Düzen kaymasını (CLS) önlemek için duyarlı genişlik, yükseklik, loading="lazy" ve decoding="async" özellikleri üretir.',
      },
      {
        title: 'Otomatik EXIF kaldırma ve büyütme koruması',
        description: 'Şişmiş kamera meta verilerini kaldırır ve daha küçük simgelerin gereksiz yere büyütülmesini engeller.',
      },
      {
        title: 'Etkileşimli öncesi ve sonrası inceleyici',
        description: 'Öğeleri üretime dağıtmadan önce görsel netliği yan yana doğrulayın.',
      },
    ],
    faqs: [
      {
        question: 'Beş web performans şablonu gerçek site alanlarıyla nasıl eşleşiyor?',
        answer:
          'Başlık / Banner 1600 px WebP (yüzde 80) ile sınırlar, E-ticaret Ürünü 1200 px WebP (yüzde 82) ile sınırlar, Kart / Küçük Resim 640 px WebP (yüzde 75) ile sınırlar, Sosyal OG / E-posta tarayıcı uyumluluğu için 1200 px JPG (yüzde 82) üretir ve Retina 2× Grafik 1920 px WebP (yüzde 88) boyutuna kadar korur. Herhangi bir şablona basmak, yüklenen dosyaları da otomatik olarak yeniden optimize eder.',
      },
      {
        question: '<img> Kopyala düğmesi Core Web Vitals puanlarını iyileştirmeye nasıl yardımcı oluyor?',
        answer:
          '<img> Kopyala düğmesine basmak, tam çıktı genişlik ve yükseklik özelliklerinin yanı sıra loading="lazy" ve decoding="async" içeren anlamlı bir HTML etiketi kopyalar. Açık boyutlar, tarayıcıların sayfa düzeni sırasında tam alanı ayırmasına olanak tanır ve birikimli düzen kaymasını (CLS) ortadan kaldırır.',
      },
      {
        question: 'HTML etiketini kopyaladıktan sonra ana başlık resmimde loading="lazy" özelliğini korumalı mıyım?',
        answer:
          'Kartlar ve katlamanın altındaki resimler için loading="lazy" idealdir. Yüklemede hemen görünen tek ana Başlık / Banner LCP resminiz için kodunuzda loading="lazy" özelliğini kaldırın (veya fetchpriority="high" ekleyin); böylece tarayıcı onu hemen indirir.',
      },
      {
        question: 'Sosyal OG / E-posta, web iyileştiricide web formatını neden WebP formatından JPG formatına değiştiriyor?',
        answer:
          'Bazı sosyal bağlantı tarayıcıları, eski Slack/Outlook sürümleri ve bülten platformları WebP OpenGraph önizlemelerini hâlâ güvenilir bir şekilde reddeder veya göstermez. Yüzde 82 kalitede 1200 px JPG seçmek, her yerde sağlam önizleme kartlarıyla birlikte hızlı yükleme sunar.',
      },
      {
        question: 'Yalnızca Daha Büyük Resimleri Küçült seçeneği arayüz simgelerini ve küçük küçük resimleri neden koruyor?',
        answer:
          'Bu kutu işaretliyken E-ticaret Ürünü (en fazla 1200 px) seçiliyken 400×400 px yazar avatarı yüklerseniz avatar, 1200 px boyutuna bulanıklaştırılarak büyütülmek yerine 400×400 px olarak kalır. İşareti kaldırırsanız daha küçük öğeler kesinlikle gerekiyorsa seçilen uzun kenara kadar büyütülür.',
      },
      {
        question: 'EXIF ve GPS meta verilerini kaldırmak web sayfası ağırlığını nasıl azaltıyor?',
        answer:
          'Kamera dışa aktarmaları genellikle EXIF blokları içinde 30 KB ile 150 KB arasında küçük resim önizlemeleri, Lightroom düzenleme geçmişleri ve GPS koordinatları gömer. HTML5 Canvas üzerinde yeniden kodlama, dağıtımdan önce piksel olmayan bu fazlalığı temiz bir şekilde kaldırır.',
      },
      {
        question: 'İndirilen dosyalar neden adlarının sonuna otomatik olarak -web ekliyor?',
        answer:
          'Her çıktı, uzantıdan önce -web ekler; zapatilla-web.webp gibi temiz adlar üretir. Bu, geliştiricilerin yüksek çözünürlüklü ana orijinallerin üzerine yazmadan üretim öğelerini genel klasörlere bırakmasına olanak tanır.',
      },
      {
        question: '<img> Kopyala bölümünde alt özelliği web iyileştiricide nasıl oluşturuluyor?',
        answer:
          'Parçacık, dosya adınızdan uzantıyı otomatik olarak kaldırır ve orijinal adınızdaki tireleri ve alt çizgileri alt="..." içinde okunaklı boşluklara dönüştürür. Üretim HTML dosyasına yapıştırırken bunu tanımlayıcı, insanca bir cümleyle cilaladığınızdan emin olun.',
      },
      {
        question: 'Web resim iyileştirici neden varsayılan olarak E-ticaret Ürünü (en fazla 1200 px · WebP yüzde 82) kullanıyor?',
        answer:
          'Yüzde 82 kalitede 1200 px genişlik, Retina telefonlarda ve standart dizüstü bilgisayarlarda net ürün yakınlaştırma kalitesi sunarken birkaç megabaytlık DSLR dosyalarını yüzde 80 ile yüzde 95 arasında küçültür. Hem 640 px boyutundaki çok yumuşak kırpıntılardan hem de şişmiş 4000 px orijinallerden kaçınır.',
      },
      {
        question: 'Web formatı PNG iken küçük, zaten sıkıştırılmış bir PNG dosyası neden kırmızı büyüme uyarısıyla kırmızıya dönüyor?',
        answer:
          'Minik palet dizinli bir PNG dosyasını boyutları değiştirmeden HTML5 Canvas üzerinden tam renkli olarak yeniden kodlamak, biraz daha ağır kayıpsız bir PNG üretebilir. Şeffaflığı bayt ağırlığının çok küçük bir kısmıyla korumak için Web formatını WebP olarak değiştirin.',
      },
      {
        question: 'Lighthouse hızı için 30 işlenmemiş blog resmini tek tıkla toplu olarak optimize edebilir miyim?',
        answer:
          'Evet. Dosya başına 25 MB boyutuna kadar bütün blog medya kümenizi bırakın, toplam sayfa ağırlığı tasarrufunu gösteren Web Performans Özeti bölümünü inceleyin ve 2 veya daha fazla dosya bittiğinde web_optimized_compressmypic.zip dosyasını alın.',
      },
      {
        question: 'Web iyileştiricinin kalitesi neden yüzde 20 ile yüzde 95 aralığıyla sınırlı?',
        answer:
          'WebP veya JPG dosyalarını yüzde 100 kaliteyle kaydetmek, web ekranlarında neredeyse hiç görünür fark olmadan bayt ağırlığını katlanarak artırır ve Largest Contentful Paint (LCP) değerine zarar verir. Yüzde 95 ile sınırlamak, Retina 2× grafikleri kazara 10 MB yüklemeler olmadan çok net tutar.',
      },
      {
        question: 'WebP çıktısı, web iyileştiriciye yüklenen PNG ve SVG dosyalarının şeffaf arka planlarını koruyor mu?',
        answer:
          'Evet. Web Formatı WEBP veya PNG iken tam alfa şeffaflığı tamamen bozulmadan kalırken JPG seçmek şeffaf bölgeleri temiz beyaz (#ffffff) üzerine birleştirir.',
      },
      {
        question: 'Testteki site ekran görüntüleri veya yayınlanmamış ürün lansmanları harici sunuculara yükleniyor mu?',
        answer:
          'Hayır. Şablona göre boyutlandırma, WebP kodlama, EXIF kaldırma ve HTML etiketi oluşturma, tarayıcı sekmenizde tamamen gerçekleşir; ambargolu pazarlama grafiklerini gizli tutar.',
      },
      {
        question: 'Bir web performans şablonuna bastıktan sonra ayarların özel bir karışımını özelleştirebilir miyim?',
        answer:
          'Evet. Web Formatı, En Büyük Boyut veya Kalite değerini el ile değiştirdiğinizde etkin şablon göstergesi temiz bir şekilde özele geçer; böylece tam özel tarifinizle Web İçin Optimize Et (N) düğmesine basabilirsiniz.',
      },
      {
        question: 'Blogum için doğrudan web iyileştiricide bir iPhone HEIC fotoğrafı yüklersem ne olur?',
        answer:
          'İstemci tarafı WebAssembly, 25 MB boyutuna kadar HEIC ve HEIF fotoğraflarını tarayıcı sekmenizde yerel olarak çözer. Ardından tarayıcınız bunları seçilen En Büyük Boyut değerine boyutlandırır ve yayınlamaya hazır hafif WebP veya JPG öğeleri kodlar.',
      },
      {
        question: 'Web iyileştiricide Kart / Küçük Resim şablonu Retina 2× Grafik ile nasıl karşılaştırılıyor?',
        answer:
          'Kart / Küçük Resim, çok kartlı arşiv ızgaralarını ultra hafif tutmak için uzun kenarları yüzde 75 WebP ile 640 px boyutuyla sınırlar. Buna karşılık Retina 2× Grafik, yüksek piksel yoğunluklu vitrin ekran görüntülerinin çok net kalması için yüzde 88 WebP ile 1920 px boyutuna kadar izin verir.',
      },
      {
        question: 'Orijinal boyutları korumak, web iyileştiricide sıkıştırmaya ve EXIF meta verilerini kaldırmaya devam ediyor mu?',
        answer:
          'Evet. Orijinal Boyutları Koru seçeneğinde genişlik ve yükseklik piksel olarak bozulmadan kalırken seçtiğiniz Web Formatına dönüştürülür, kalite kaydırıcınız uygulanır ve gizli EXIF etiketleri kaldırılır.',
      },
      {
        question: 'Belgelerimde yayınlamadan önce arayüz ekran görüntülerindeki net metni görsel olarak doğrulayabilir miyim?',
        answer:
          'Evet. Herhangi bir kartta Karşılaştır seçeneğine basmak, metin netliğini dağıtımdan önce gözden geçirebilmeniz için yan yana karşılaştırma görüntüleyiciyi açar.',
      },
      {
        question: 'Toplu resim sıkıştırıcı yerine bu web resim iyileştiriciyi ne zaman kullanmalıyım?',
        answer:
          'Karışık dosyalarda orijinal boyutları korumak istediğinizde toplu resim sıkıştırıcıyı kullanın. Duyarlı boyut sınırları, WebP şablonları, EXIF kaldırma ve kopyalanabilir HTML <img> etiketlerinden yararlanan üretim web sayfaları oluştururken bu web resim iyileştiriciyi seçin.',
      },
    ],
    relatedSlugs: ['/bulk-image-compressor', '/compress-image-to-100kb', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/gif-compressor',
    name: 'GIF Sıkıştırıcı',
    shortDescription: 'Animasyonlu GIF dosyalarını renk paletini azaltarak, ölçekleyerek ve kareleri atarak sıkıştırın.',
    category: 'compress',
    seoTitle: 'GIF Sıkıştırma Ücretsiz – Animasyonlu GIF Küçültme',
    seoDescription:
      'GIF sıkıştırıcı ile döngüsel animasyonları ücretsiz ve çevrimiçi olarak tarayıcınızda küçültün. Paleti düşürün, boyutları ölçekleyin veya tekrarlanan kareleri kaldırın.',
    h1: 'Animasyonlu GIF Sıkıştırıcı Ücretsiz',
    subtitle:
      'Ağır döngüsel GIF87a ve GIF89a dosyalarını tarayıcınızda temiz bir şekilde küçültün; onları sabit resimlere dönüştürmeden ücretsiz animasyonlu GIF sıkıştırıcımızla. Slack, Discord, e-posta uzmanları ve 30 MB boyutuna kadar dosyaları yöneten belge yazarları için tasarlandı; üç gerçek sıkıştırma kolunu birleştirir: Renk Paleti Sınırı, Çıktı Ölçeği ve Kare Hızı İyileştirme; ayrıca yan yana canlı animasyonlu oynatma sunar.',
    howToSteps: [
      {
        title: '30 MB boyutuna kadar animasyonlu veya statik bir GIF bırakın',
        description:
          'Karelerini, boyutlarını, silme yöntemlerini ve zaman gecikmelerini yerel olarak çözmek için herhangi bir .gif dosyasını (30 MB boyutuna kadar) yükleme alanına yükleyin.',
      },
      {
        title: 'Hızlı bir şablon seçin veya değerleri el ile ayarlayın',
        description:
          'Hafif (192 renk, yüzde 100), Dengeli (96 renk, yüzde 85) veya En Büyük Küçültme (64 renk, yüzde 75, her 2. kareyi at) seçeneklerine basın ya da her kolu el ile ayarlayın.',
      },
      {
        title: 'Renk paleti sınırını düşürün (16–256 renk)',
        description:
          'LZW renk tablolarını küçültmek için Renk Paleti Sınırı kaydırıcısını 256 seviyesinden 32 veya 16 renge sürükleyin (veya 256, 128, 64, 32 hızlı düğmelerine basın).',
      },
      {
        title: 'Çıktı ölçeğini ve kare hızı iyileştirmeyi ayarlayın',
        description:
          'Bir Çıktı Ölçeği şablonu seçin (yüzde 100, yüzde 85, yüzde 75, yüzde 50 veya yüzde 25) ve isteğe bağlı olarak her 2. kareyi veya 3 kareden 2 tanesini kaldırın; gerçek oynatma hızı otomatik olarak korunur.',
      },
      {
        title: 'GIF Sıkıştır düğmesini çalıştırın ve canlı animasyonları karşılaştırın',
        description:
          'Orijinal ve Sıkıştırılmış canlı animasyonlu önizlemeleri yan yana izleyin ve tam baytları, kare sayısını ve tasarruf yüzdesini gözden geçirin.',
      },
      {
        title: 'Sıkıştırılmış GIF dosyasını indirin',
        description:
          'Sunucuya gitmeden ve filigran olmadan <ad>_compressed.gif dosyasını yerel olarak kaydetmek için Sıkıştırılmış GIF İndir düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'İstemci içi gerçek GIF yeniden kodlama',
        description: 'Kareleri, silme yöntemlerini ve döngü sayılarını yerel olarak çözer; ardından istek üzerine yüklenen renk nicelemeyle yeniden kodlar; sunucuya yükleme yapılmaz.',
      },
      {
        title: 'Üç sıkıştırma kolu',
        description: 'Renk paleti azaltma (256 → 32 renk), boyut ölçeklendirme (yüzde 100 → yüzde 25) ve akıllı kare atlama ile boyutu küçültün.',
      },
      {
        title: 'Zamanı koruyan kare atlama',
        description: 'Her 2. veya 3. kareyi kaldırırken korunan karelerin gecikmeleri otomatik olarak birleştirilir; böylece oynatma hızı doğal kalır.',
      },
      {
        title: 'Dürüst bayt karşılaştırması',
        description: 'Öncesi ve sonrası tam dosya boyutunu ve kare sayısını gösterir; daha güçlü palet veya ölçek küçültmenin ne zaman gerektiğini açıkça söyler.',
      },
    ],
    faqs: [
      {
        question: 'GIF sıkıştırıcı, tam animasyon zamanlamasını, döngü sayılarını ve hareketi koruyor mu?',
        answer:
          'Evet. Her tekil GIF karesini, kare başına milisaniye gecikmesini, silme yöntemini ve döngü meta verilerini yerel olarak çözer; ardından sabit bir resme düzleştirmek yerine gerçek bir animasyonlu GIF89a dosyası olarak yeniden kodlar.',
      },
      {
        question: 'GIF sıkıştırıcı, kareleri kaldırırken animasyon hızını nasıl doğal tutuyor?',
        answer:
          'Her 2. Kareyi At veya 3 Kareden 1 Tanesini Koru seçeneklerini belirlediğinizde sıkıştırıcı, atlanan karelerin milisaniye sürelerini kalan korunan karelere ekler. Toplam döngü süresi hassas kalırken toplam kare verileri yarıya veya üçte ikiye düşer.',
      },
      {
        question: 'GIF sıkıştırıcıda Hafif, Dengeli ve En Büyük Küçültme tam olarak hangi ayarları uyguluyor?',
        answer:
          'Hafif, tüm kareleri koruyarak 192 renk paleti ve yüzde 100 ölçek ayarlar; Dengeli ise tüm kareleri koruyarak 96 renk ve yüzde 85 ölçek seviyesine düşer. En Büyük Küçültme, Discord veya Slack dosya sınırları için agresif hedefler için 64 renk, yüzde 75 ölçek ve Her 2. Kareyi At seçeneklerini birleştirir.',
      },
      {
        question: 'Dengeli veya 128 renkli ilk sıkıştırmam neden mevcut minik GIF dosyamdan biraz daha büyük çıktı?',
        answer:
          'Masaüstü araçlarıyla oluşturulan iyi optimize edilmiş GIF dosyaları genellikle kareler arasındaki küçük kirli dikdörtgen yamalarına dayanırken Canvas üzerinde yeniden kodlama, temiz nicelemeli tam kareler oluşturur. Kehribar uyarı belirirse Renk Paleti Sınırı değerini 64 veya 32 renge düşürün, Çıktı Ölçeğini yüzde 75 veya yüzde 50 seviyesine indirin ya da her 2. kareyi atın.',
      },
      {
        question: 'Ekran kayıtlarını bozmadan animasyonlu bir GIF dosyasının boyutunu en hızlı hangi kol küçültüyor?',
        answer:
          'Çıktı Ölçeğini yüzde 100 seviyesinden yüzde 75 veya yüzde 50 seviyesine düşürmek, arayüz metnini okunaklı tutarken piksel alanını hemen yüzde 44 ile yüzde 75 arasında kırpar. Yüzde 75 ölçeği 64–96 renk paletiyle birleştirmek, belge ekran yayınları için özellikle iyi çalışır.',
      },
      {
        question: '1 veya 2 kareli bir GIF dosyasında kare hızı iyileştirme düğmeleri neden devre dışı kalıyor?',
        answer:
          '1 veya 2 kareli bir dosyada her ikinci veya üçüncü kareyi kaldırmak hiç hareket bırakmaz. Çözülen bir GIF dosyası 2 kare veya daha az olduğunda bu kare atlama düğmeleri otomatik olarak kilitlenir.',
      },
      {
        question: 'GIF sıkıştırıcı dosya başına kaç megabayta kadar animasyonlu GIF kabul ediyor?',
        answer:
          'Dosya başına 30 MB boyutuna kadar GIF87a veya GIF89a animasyonları yükleyebilirsiniz. Tarayıcınız korunan her kareyi niceleyip yeniden kodlarken ilerleme, GIF Sıkıştırılıyor (X%)... olarak temiz bir şekilde gösterilir.',
      },
      {
        question: 'Renk paleti sınırını 64 renk altına düşürmek fotoğrafik GIF dosyalarını arayüz ekran yayınlarından farklı etkiliyor mu?',
        answer:
          'Evet. Az sayıda marka rengine sahip düz yazılım arayüzü animasyonları 32 veya 64 renkle net görünmeye devam ederken ten geçişlerine sahip gerçek video klipleri çok düşük paletlerde posterleşme gösterir; bu nedenle film klipleri için ölçeği veya kare hızını biraz düşürmek genellikle daha temizdir.',
      },
      {
        question: 'İndirmeden önce orijinal ve sıkıştırılmış animasyonları yan yana önizleyebilir miyim?',
        answer:
          'Evet. Koyu bayt özet çubuğunun hemen altında iki canlı animasyonlu oynatıcı, Orijinal ve Sıkıştırılmış GIF dosyalarını tam piksel boyutları ve dosya boyutlarıyla aynı anda gösterir; böylece herhangi bir takılma veya bantlanmayı hemen fark edebilirsiniz.',
      },
      {
        question: 'Küçük çıkartma GIF dosyalarında yüzde 25 Çıktı Ölçeği seçtiğimde en küçük çıktı çözünürlüğü nedir?',
        answer:
          'Çıktı boyutları, kenar başına güvenli bir şekilde en az 16×16 piksel ile sınırlanır. Bu, minik tepki GIF dosyalarının yüzde 25 ölçek seçeneğinde bile geçersiz sıfır piksel dosyalara çökmesini engeller.',
      },
      {
        question: 'Sayfayı yenilemeden aynı yüklenen GIF üzerinde birden fazla sıkıştırma denemesi çalıştırabilir miyim?',
        answer:
          'Evet. Çözülen kare arabelleği bellekte önbelleğe alınır; böylece Renk Paleti Sınırı (16–256), Çıktı Ölçeği veya Kare Hızı İyileştirme değerlerini serbestçe ayarlayıp saniyeler içinde yeniden GIF Sıkıştır düğmesine basabilirsiniz.',
      },
      {
        question: 'GIF sıkıştırıcı, büyük animasyonları bir sunucuya yüklemeden tarayıcımın içinde nasıl çalışıyor?',
        answer:
          'Kareleri doğrudan yüklenen ArrayBuffer verisinden JavaScript ile çözer ve istek üzerine hafif bir GIF LZW kodlayıcı ile renk niceleyici yükler. Özel Slack ekran yayınları, hata raporları ve ürün tanıtımları asla cihazınızdan çıkmaz.',
      },
      {
        question: 'GIF dosyaları neden aynı klibin MP4 videolarından daha az sıkıştırılıyor?',
        answer:
          'GIF, kareler arasında modern zamansal hareket telafisi olmayan 1989 tarihli kayıpsız LZW sıkıştırmalı 256 renkli bir kare formatıdır. Ilımlı bir küçültmeyi (yüzde 75–50), daha düşük paletleri (64–96 renk) ve 2× kare atlamayı birleştirmek, standart .gif belirtimi içinde mümkün olan en iyi bayt tasarrufunu sunar.',
      },
      {
        question: 'Şeffaf pikselli animasyonlu bir GIF dosyasını sıkıştırmak arka plan şeffaflığını koruyor mu?',
        answer:
          'Evet. Orijinal GIF dosyanızdan çözülen şeffaflık dizinleri ve kare silme yöntemleri, tarayıcıda yeniden kodlama sırasında kareler arasında izlenir.',
      },
      {
        question: 'GIF sıkıştırıcıdan optimize edilmiş animasyonu kaydederken hangi dosya adı kullanılıyor?',
        answer:
          'Sıkıştırılmış GIF İndir düğmesine bastığınızda demo_walkthrough_compressed.gif gibi _compressed.gif ile biten temizlenmiş bir ad dışa aktarılır. Ana orijinal animasyonunuz diskte tamamen bozulmadan kalır.',
      },
      {
        question: 'Discord 8 MB/10 MB veya Slack yükleme sınırlarına uyması için bir GIF dosyasını küçültebilir miyim?',
        answer:
          'Evet. 30 MB boyutuna kadar herhangi bir animasyonu bırakın, Dengeli veya En Büyük Küçültme seçeneklerini deneyin, özet kartının üst kısmındaki canlı Sıkıştırılmış boyut okumasını inceleyin ve daha fazla ağırlık azaltması gerekiyorsa Çıktı Ölçeğini yüzde 50 seviyesine ayarlayın.',
      },
      {
        question: 'Sıfırlama, GIF sıkıştırıcının önbelleğe alınmış kare belleğini tamamen temizliyor mu?',
        answer:
          'Evet. Sıfırla düğmesine bastığınızda etkin blob URL adresleri iptal edilir ve çözülen kare arabellekleri tarayıcı belleğinden silinir; böylece başka bir ağır GIF dosyasını sorunsuz yükleyebilirsiniz.',
      },
      {
        question: 'GIF sıkıştırıcı, GIF yapıcıdan nasıl farklı?',
        answer:
          'GIF yapıcı, ayrı JPG, PNG veya WebP sabit resimlerden yeni animasyonlar oluşturur. Buna karşılık bu GIF sıkıştırıcı, mevcut ağır bir .gif animasyonunu alır ve palet küçültme, ölçeklendirme ve kare atlama ile dosya boyutunu küçültür.',
      },
      {
        question: 'Tek kareli statik .gif dosyalarını da GIF sıkıştırıcıya yükleyebilir miyim?',
        answer:
          'Evet. Tek kareli statik GIF dosyaları 1 kareli dosyalar olarak yüklenir; burada Çıktı Ölçeği ile boyutları küçültebilir ve Renk Paleti Sınırını 16 renge kadar temiz bir şekilde düşürebilirsiniz.',
      },
      {
        question: 'Sıkıştırılmış GIF dosyalarına filigran, kare sınırı veya sunucu kuyruğu uygulanıyor mu?',
        answer:
          'Hayır. Sıkıştırma, tarayıcı hızında yerel olarak çalışır; filigran, kayıt ve sınırsız tekrar yoktur.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'HEIC JPG Çevirme',
    shortDescription: 'Apple iPhone HEIC/HEIF fotoğraflarını tarayıcıda evrensel JPG formatına dönüştürün.',
    category: 'convert',
    seoTitle: 'HEIC JPG Çevirme Ücretsiz – iPhone Fotoğraflarını Dönüştürme',
    seoDescription:
      'HEIC JPG çevirme ücretsiz ve çevrimiçi: Apple fotoğraflarını evrensel dosyalara dönüştürün. Gizli bir şekilde yerel WebAssembly çözümleme ile ZIP indirme.',
    h1: 'HEIC JPG Çevirici Ücretsiz',
    subtitle:
      'Apple iPhone veya iPad kameranızın HEIC veya HEIF fotoğraflarını tarayıcınızda yerel olarak çalışan ücretsiz HEIC JPG çeviricimizle evrensel olarak okunabilir .jpg dosyalarına dönüştürün. Apple yüksek verimlilik formatını reddeden Windows kullanıcıları, iş arayanlar ve fotoğraf laboratuvarları için idealdir; dosya başına 25 MB boyutuna kadar istemci tarafı WebAssembly ile çözer; ayarlanabilir kalite ve tek ZIP toplu indirmeleri sunar.',
    howToSteps: [
      {
        title: 'Apple HEIC veya HEIF fotoğraflarını bırakın',
        description:
          'iPhone, Mac, bulut yedeği veya Windows klasörünüzden doğrudan bir veya daha fazla .heic ya da .heif resmini (her biri 25 MB boyutuna kadar) seçin veya sürükleyin.',
      },
      {
        title: 'Yerel WebAssembly çözümlemesini kısaca bekleyin',
        description:
          'Sayfa, Apple HEVC resim kapsayıcısını tarayıcı sekmenizde gizli bir şekilde çözmek için istemci tarafı WebAssembly (heic2any) öğesini doğrudan sekmenize yükler.',
      },
      {
        title: 'JPG çıktı kalitesini ayarlayın (yüzde 20–100)',
        description:
          'Aile portreleri ve baskılar için neredeyse kayıpsız varsayılan yüzde 90 değerini koruyun ya da daha hafif e-posta ekleri için yüzde 75–85 seviyesine kaydırın; ardından Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        title: 'Piksel boyutlarını ve boyut karşılaştırmasını gözden geçirin',
        description:
          'Her kartta orijinal HEIC bayt sayısına karşı JPG çıktı bayt sayısını inceleyin ve net detayı doğrulamak için Karşılaştır kaydırıcısını açın.',
      },
      {
        title: 'Tekil JPG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .jpg fotoğraflarını doğrudan kaydedin ya da tek tıkla compressmypic_heic_to_jpg.zip dosyasını indirmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'İstemci içi WebAssembly HEIC çözümleme',
        description: 'heic2any öğesini tarayıcı sekmenizde kullanır; böylece özel kamera fotoğraflarınız asla harici sunuculara yüklenmez.',
      },
      {
        title: 'Toplu dönüştürme ve ZIP dışa aktarma',
        description: 'Bütün iPhone HEIC fotoğraf klasörlerini tek kuyrukta JPG formatına dönüştürün ve hepsini bir ZIP olarak alın.',
      },
      {
        title: 'Özel JPG kalite kaydırıcısı',
        description: 'Detaya mı yoksa minik dosya boyutuna mı öncelik verdiğinize göre çıktı sıkıştırmasını yüzde 20 ile yüzde 100 arasında ayarlayın.',
      },
      {
        title: 'Canvas ile kaldırılan EXIF gizliliği',
        description: 'Canvas üzerinde yeniden kodlama, gizli GPS koordinatlarını ve kamera seri numarası meta verilerini doğal olarak kaldırır.',
      },
    ],
    faqs: [
      {
        question: 'Windows bilgisayarlar, eski yazılımlar ve yükleme formları neden iPhone .heic fotoğraflarını reddediyor?',
        answer:
          'Apple, iPhone ve iPad cihazlarda depolama alanından tasarruf etmek için iOS 11 sürümünden itibaren HEVC video sıkıştırmasına dayalı HEIC kapsayıcısını benimsedi. Birçok Windows kurulumu, devlet portalı, CMS sistemi ve masaüstü düzenleyicide lisanslı HEVC kodekleri bulunmadığı için HEIC dosyalarını standart JPG formatına dönüştürmek, fotoğraflarınızın her yerde anında açılmasını sağlar.',
      },
      {
        question: 'Bu HEIC JPG çevirici, Apple dosyalarını standart bir web tarayıcısında nasıl çözüyor?',
        answer:
          'Çoğu tarayıcı, Windows veya Linux üzerinde standart resim etiketlerinde HEIC piksellerini yerel olarak gösteremez. Bu araç, kendi sekmenizde istemci tarafı heic2any WebAssembly çözümleyicisini çalıştırır; böylece tarayıcınız, uzak bulut sunucuları olmadan HEIC akışlarını temiz RGB piksellerine çevirir.',
      },
      {
        question: 'Dönüştürme sırasında kişisel kamera fotoğrafları, kimlik özçekimleri veya aile tatilleri bir yere yükleniyor mu?',
        answer:
          'Asla. Hem WebAssembly ile HEIC çözümleme adımı hem de HTML5 Canvas üzerinde JPEG kodlama adımı tarayıcınızın belleğinde yerel olarak gerçekleşir; böylece kişisel fotoğraflar asla bilgisayarınızdan veya telefonunuzdan çıkmaz.',
      },
      {
        question: 'HEIC JPG çeviricide .heic ve .heif dosyaları arasındaki fark nedir?',
        answer:
          'HEIF, yüksek verimlilikli resim dosyası için temel standartken HEIC, HEVC ile kodlanmış HEIF kapsayıcıları için Apple dosya adı uzantısıdır. Hem .heic hem de .heif uzantıları (ve karşılık gelen MIME türleri) kabul edilir ve sorunsuz bir şekilde .jpg formatına çözülür.',
      },
      {
        question: 'Dönüştürülen JPG dosyası genellikle orijinal HEIC dosyasından neden megabayt olarak daha büyük çıkıyor?',
        answer:
          'Apple HEVC kodlaması, benzer görsel kalitede klasik JPEG formatına kıyasla resim verilerini yaklaşık iki kat yoğunlukta paketler. 1,8 MB boyutundaki bir HEIC dosyasını yüzde 90 yüksek kalitede JPG olarak genişletmek genellikle 2,5 MB ile 3,5 MB arasında bir dosya üretir; JPG çıktı kalitesini yüzde 80 seviyesine düşürmek gerekirse boyutu kırpmaya yardımcı olur.',
      },
      {
        question: 'iPhone fotoğrafları için varsayılan JPG çıktı kalitesi neden yüzde 90?',
        answer:
          'Yüzde 90 kalitede standart JPEG, ince cilt dokusunu, saç detayını ve portre modu arka plan bulanıklığını fark edilir sıkıştırma blokları olmadan korur. Kaydırıcıyı yüzde 20 ile yüzde 100 arasında hareket ettirebilir ve istediğiniz zaman Tümünü Yeniden Dönüştür düğmesine basabilirsiniz.',
      },
      {
        question: 'iPhone Live Photo (.heic) dosyalarını dönüştürmek video hareketini koruyor mu yoksa sabit bir JPG mi dışa aktarıyor?',
        answer:
          'Bir iPhone Live Photo dosyasının sabit .heic bileşenini yüklediğinizde çözümleyici, o yüksek çözünürlüklü kareyi çıkarır ve evrensel bir .jpg fotoğraf olarak dışa aktarır. Eşleştirilmiş MOV kliplerindeki video hareket izleri statik JPEG dosyasına dahil edilmez.',
      },
      {
        question: 'Bütün bir HEIC tatil albümünü bırakıp tek bir ZIP indirebilir miyim?',
        answer:
          'Evet. Tek geçişte onlarca .heic veya .heif dosyası (dosya başına 25 MB boyutuna kadar) seçin, tarayıcınızın her fotoğrafı yerel olarak çözmesini bekleyin ve compressmypic_heic_to_jpg.zip dosyasını kaydetmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
      {
        question: 'iPhone GPS koordinatları ve konum etiketleri dışa aktarılan JPG dosyasında korunuyor mu?',
        answer:
          'Hayır. HTML5 Canvas üzerinden kodlama, gömülü GPS EXIF konumlarını, kamera seri numaralarını ve zaman damgalarını otomatik olarak kaldırır; dönüştürülen JPG dosyalarını çevrimiçi yayınlamadan önce fazladan gizlilik sağlar.',
      },
      {
        question: '12 veya 48 megapiksellik bir iPhone fotoğrafını çözmek neden dosya başına bir veya iki saniye sürebiliyor?',
        answer:
          'WebAssembly üzerinde HEVC sıkıştırmasını açmak, özellikle 24 MP veya 48 MP iPhone Pro fotoğraflarında standart JPEG çözümlemeden daha ağır CPU hesaplaması gerektirir. Toplu işleri yerel olarak işlerken dönüştürme hızı, yükleme bant genişliğinize değil cihazınızın işlemcisine bağlı olarak sorunsuz çalışır.',
      },
      {
        question: 'HEIC JPG dönüştürme sırasında iPhone kamerasının dikey veya yatay yönü ne oluyor?',
        answer:
          'Modern tarayıcılar, resmi Canvas üzerinde çözerken gömülü yönlendirme bayraklarını okur. Bu, dikey özçekimlerin ve manzara fotoğraflarının yana dönük olmadan dik olarak dışa aktarılmasını sağlar.',
      },
      {
        question: 'image.heic adlı bir dosya neden geçersiz HEIC uyarısıyla başarısız oldu?',
        answer:
          'Bazen üçüncü taraf mesajlaşma uygulamaları bozuk kapsayıcıları veya yanlış etiketlenmiş dosyaları .heic uzantısıyla kaydeder ya da 25 MB sınırını aşar. AirDrop, iCloud Fotoğraflar veya Apple Dosyalar ile dışa aktarılan orijinal bir kopyayı denemek, bozuk sarmalayıcı başlıklarını çözer.',
      },
      {
        question: 'HEIC JPG çeviricinin kabul ettiği HEIC veya HEIF fotoğraf başına en büyük boyut nedir?',
        answer:
          'Kuyrukta dosya başına 25 MB boyutuna kadar tekil dosyalar kabul edilir. Bu sınır, 12 MP, 24 MP ve 48 MP standart iPhone kamera HEIC çekimlerini kolayca kapsar.',
      },
      {
        question: 'Kaydetmeden önce çözülen JPG dosyasını orijinal HEIC önizlemesiyle görsel olarak karşılaştırabilir miyim?',
        answer:
          'Evet. Netliği yan yana doğrulamak için herhangi bir sonuç küçük resmine veya Karşılaştır düğmesine basarak etkileşimli karşılaştırma penceresini açın.',
      },
      {
        question: 'iPhone Display P3 geniş renk gamı renkleri JPG formatına dönüştürüldükten sonra doğru görünür mü?',
        answer:
          'Tarayıcı Canvas oluşturma sırasında geniş renk gamı renkleri standart sRGB JPEG alanına temiz bir şekilde eşlenir. Sonuç olarak renkler Windows monitörlerde, web tarayıcılarında ve fotoğraf baskı kiosklarında soluk değişimler olmadan tutarlı görünür.',
      },
      {
        question: 'Gelecekteki iPhone fotoğraflarımın HEIC yerine JPG olarak kaydedilmesini nasıl sağlarım?',
        answer:
          'iPhone cihazınızda Ayarlar uygulamasını açın, Kamera bölümüne gidin, Formatlar seçeneğine dokunun ve yeni fotoğraflar için En Uyumlu seçeneğini belirleyin. Ancak Yüksek Verimlilik seçeneğini korumak telefon depolamanızın yaklaşık yarısını tasarruf eder ve belirli HEIC toplu işlerini istediğiniz zaman burada JPG formatına dönüştürebilirsiniz.',
      },
      {
        question: '4032×3024 boyutundaki bir HEIC dosyasını JPG formatına dönüştürürken piksel çözünürlüğü kaybeder miyim?',
        answer:
          'Hayır. JPG çıktıları, çözülen genişlik ve yüksekliğin yüzde 100 boyutunu dokunulmadan korur; daha sonra ayrıca boyutlarını değiştirmeyi seçmedikçe.',
      },
      {
        question: 'Android, Chromebook, Linux veya Windows tarayıcılarından HEIC dosyalarını yapıştırabilir veya dönüştürebilir miyim?',
        answer:
          'Evet. heic2any WebAssembly, işletim sisteminden bağımsız olarak Chrome, Firefox, Edge ve Safari içinde çalıştığı için uzantı yüklemeden Linux veya Windows makinelerde bile .heic iPhone eklerini temiz bir şekilde açıp dönüştürebilirsiniz.',
      },
      {
        question: 'Yeni dönüştürülen JPG dosyasını bir iş portalı için 100 KB altına küçültmem gerekirse ne yapmalıyım?',
        answer:
          'JPG çıktı kalitesini burada düşürün ve dosya boyutunu hızlıca kırpmak için Tümünü Yeniden Dönüştür düğmesine basın. Hâlâ katı bayt yönlendirmesi gerekiyorsa bağlantılı araçlarımızla doğrudan Resmi 100 KB Yapma aracına geçin.',
      },
      {
        question: 'Bu çevirici JPG veya PNG dosyalarını da kabul ediyor mu yoksa yalnızca HEIC ve HEIF mi?',
        answer:
          'Bu sayfa, Apple fotoğraf toplu işlerini temiz tutmak için kasıtlı olarak yalnızca .heic ve .heif girdilerini filtreler. Klasörünüz HEIC dosyalarıyla birlikte PNG, WebP ve BMP dosyalarını karıştırıyorsa Toplu Resim Dönüştürücü aracımızı kullanın.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'JPG PNG Çevirme',
    shortDescription: 'JPG/JPEG fotoğraflarını tarayıcınızda kayıpsız PNG resimlerine dönüştürün.',
    category: 'convert',
    seoTitle: 'JPG PNG Çevirme Ücretsiz – Kayıpsız Dönüştürme',
    seoDescription:
      'JPG PNG çevirme ücretsiz ve çevrimiçi: JPEG fotoğraflarını kayıpsız dosyalara dönüştürün. Tarayıcınızda tekil veya toplu dönüştürme, ZIP ile indirme.',
    h1: 'JPG PNG Çevirici Ücretsiz',
    subtitle:
      'Standart .jpg ve .jpeg fotoğraflarını doğrudan tarayıcınızda çalışan ücretsiz JPG PNG çeviricimizle temiz bir şekilde kayıpsız .png dosyalarına dönüştürün. Kesinlikle PNG yüklemesi isteyen matbaalar, grafik düzenleyiciler ve web formları için tasarlandı; mevcut pikselleri ek kayıplı sıkıştırma hasarı olmadan sabitler; resim başına 25 MB boyutuna kadar toplu işler ve anında ZIP dışa aktarma sunar.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar JPG veya JPEG fotoğrafları bırakın',
        description:
          'Bilgisayarınızdan, telefonunuzdan veya kamera kartınızdan bir veya daha fazla .jpg ya da .jpeg resmini yükleme alanına yükleyin.',
      },
      {
        title: 'Kayıpsız PNG kodlama modunu onaylayın',
        description:
          'Kalite kaydırıcısının otomatik olarak gizlendiğini ve Kayıpsız PNG Kodlama panelinin göründüğünü gözlemleyin; çünkü PNG asla kayıplı sıkıştırma bozulması eklemez.',
      },
      {
        title: 'Orijinal JPG ile dönüştürülen PNG boyutlarını gözden geçirin',
        description:
          'Dosya kartı başına piksel boyutlarını ve bayt sayılarını inceleyin ve piksel doğruluğunu yan yana doğrulamak için Karşılaştır seçeneğini açın.',
      },
      {
        title: 'İstediğiniz zaman daha fazla JPEG dosyası ekleyin veya aykırı değerleri kaldırın',
        description:
          'Etkin oturuma daha fazla .jpg dosyası bırakın ya da paketlemeden önce çöp kutusu düğmesiyle tekil kartları silin.',
      },
      {
        title: 'Tekil PNG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Herhangi bir sonuç kartında PNG İndir düğmesine basın ya da compressmypic_jpg_to_png.zip dosyasını yerel olarak kaydetmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
    ],
    features: [
      {
        title: 'Gerçek kayıpsız PNG çıktısı',
        description: 'Daha fazla düzenleme veya arşivleme için hazırlarken ek kayıplı nesil hasarını önler.',
      },
      {
        title: 'Toplu kuyruk ve ZIP paketleme',
        description: 'Birden fazla JPEG dosyasını aynı anda PNG formatına dönüştürün ve tek bir düzenli ZIP olarak dışa aktarın.',
      },
      {
        title: 'Sıfır filigran veya kayıt',
        description: 'Hesap oluşturmadan doğrudan Chrome, Firefox, Safari veya Edge üzerinde sınırsız dönüştürme.',
      },
      {
        title: 'Yüzde 100 yerel işleme',
        description: 'Resimler tarayıcı sekmenizde kalır: hiçbir şey uzak bir sunucuya dokunmaz.',
      },
    ],
    faqs: [
      {
        question: 'JPG PNG çeviricide neden hiç kalite kontrolü görünmüyor?',
        answer:
          'JPEG veya WebP formatından farklı olarak PNG, her pikselin kalite yüzdesi dengesi olmadan birebir kodlandığı kayıpsız DEFLATE sıkıştırma kullanır. Kaydırıcıyı Kayıpsız PNG Kodlama kartıyla değiştirmek, yanıltıcı tahminleri önler.',
      },
      {
        question: 'JPG dosyasını PNG formatına dönüştürmek kayıpsızsa mevcut bulanık JPEG bloklarını neden silemiyor?',
        answer:
          'Kayıpsız PNG, JPEG dosyanızın o anda sakladığı tam pikselleri dondurur; böylece dosyayı daha sonra düzenlerken, kırparken veya yeniden kaydederken ek nesil kaybı olmaz. Ancak orijinal kamera fotoğrafı JPG olarak kaydedilirken atılan ince dokuları sihirli bir şekilde yeniden oluşturamaz.',
      },
      {
        question: '300 KB boyutundaki bir JPG dosyası dönüştürüldükten sonra neden genellikle 1,5 MB–3 MB boyutunda bir PNG dosyasına genişliyor?',
        answer:
          'JPEG, küçük kalmak için 8×8 piksel bloklarında ince renk değişimlerini atarken PNG, bütün karede tam RGB piksel verilerini kayıpsız olarak kaydeder. Sürekli tonlu fotoğraflar, kayıpsız PNG olarak doğal olarak sıkıştırılmış JPG formatından çok daha fazla bayt gerektirir.',
      },
      {
        question: 'Daha büyük dosya boyutuna rağmen JPG dosyasını PNG formatına dönüştürmek ne zaman gerçekten işe yarıyor?',
        answer:
          'PNG formatına dönüştürmek, baskı sağlayıcıları, yazılım arayüzü içe aktarıcıları, kimlik portalları veya piksel sanatı düzenleyicileri kesinlikle .png dosyaları istediğinde gereklidir. Ayrıca keskin metin katmanları eklemeyi ve tekrar tekrar düzenleme yaparken JPEG yeniden sıkıştırma bozulmalarını biriktirmeden planladığınızda resimleri korur.',
      },
      {
        question: 'Beyaz arka planlı bir JPG dosyasını PNG formatına dönüştürmek o arka planı şeffaf yapar mı?',
        answer:
          'Hayır. Standart JPEG dosyaları alfa şeffaflık bilgisi saklamaz; bu nedenle JPG dosyasını PNG formatına dönüştürmek beyaz arka planı koruyan tamamen opak bir .png resmi üretir. Daha sonra alfa kırpıntısı gerekiyorsa bunu Arka Plan Kaldırma aracımızla birleştirin.',
      },
      {
        question: 'Neden bir .jpg dosyasının uzantısını el ile .png olarak değiştirmemeliyim?',
        answer:
          'Yalnızca ad son ekini değiştirmek, orijinal JPEG ikili baytlarını içeride bırakır; bu da katı yükleme doğrulayıcılarının, HTML Canvas yükleyicilerinin ve baskı yazılımlarının dosyayı reddetmesine veya açamamasına yol açar. Canvas üzerinde gerçek çözümleme ve PNG yeniden kodlama çalıştırmak, geçerli PNG parçaları ve başlıkları yazar.',
      },
      {
        question: 'Dönüştürülen PNG dosyaları orijinal JPEG dosyalarımın tam piksel genişliğini ve yüksekliğini koruyor mu?',
        answer:
          'Evet. Dışa aktarılan her .png dosyası, kaynak JPG dosyasının doğal genişlik ve yüksekliğinin yüzde 100 boyutunu kırpmadan veya otomatik boyut değiştirmeden korur.',
      },
      {
        question: '20 JPG taramasını toplu olarak PNG dosyalarına dönüştürüp tek bir ZIP olarak kaydedebilir miyim?',
        answer:
          'Evet. Birden fazla .jpg veya .jpeg dosyasını (her biri 25 MB boyutuna kadar) birlikte bırakın, tarayıcınızın her PNG dosyasını yerel olarak kodlamasını kısaca bekleyin ve compressmypic_jpg_to_png.zip dosyasını indirmek için Tümünü İndir (ZIP) düğmesine basın.',
      },
      {
        question: 'JPG dosyasını PNG formatına dönüştürmek kameranın gizli EXIF etiketlerini ve GPS meta verilerini kaldırıyor mu?',
        answer:
          'Evet. Bir JPEG dosyasını HTML5 Canvas üzerinde çözüp yeni bir PNG yazmak, JPEG EXIF başlıklarını, kamera modellerini ve GPS koordinatlarını otomatik olarak atar.',
      },
      {
        question: 'PNG formatına dönüştürme sırasında taranan belgeler, makbuzlar veya kişisel portreler harici sunuculara gönderiliyor mu?',
        answer:
          'Asla. JPEG çözümleme, Canvas oluşturma, PNG DEFLATE kodlama ve ZIP dosyası, bilgisayarınızda veya telefonunuzda tarayıcı yerel belleğinde tamamen gerçekleşir.',
      },
      {
        question: 'Girdim RGB yerine baskı CMYK renkleriyle kaydedilmiş bir JPEG dosyasıysa ne olur?',
        answer:
          'Modern tarayıcılar, HTML5 Canvas üzerine çizerken JPEG piksel akışlarını standart 8 bit sRGB RGBA alanına dönüştürür. Bu, .png çıktınızın web tarayıcılarında, slaytlarda ve mobil ekranlarda doğru görüntülenmesini sağlar.',
      },
      {
        question: 'Değişim sütunu, JPG PNG çeviricideki dosya boyutu büyümesini nasıl gösteriyor?',
        answer:
          'Sıkıştırılmış JPG dosyalarını kayıpsız PNG formatına dönüştürmek neredeyse her zaman bayt boyutunu artırır. Bu nedenle her kartın Değişim hücresi, orijinal JPG ve son PNG bayt boyutlarıyla birlikte tam pozitif +X % farkı dürüstçe bildirir.',
      },
      {
        question: 'JPG ile PNG arasında renk değişimi olmadığını doğrulamak için Karşılaştır görüntüleyiciyi kullanabilir miyim?',
        answer:
          'Evet. İndirmeden önce pikselleri etkileşimli bölünmüş perdede yan yana gözden geçirmek için herhangi bir kart küçük resmine veya Karşılaştır düğmesine basın.',
      },
      {
        question: 'Dönüştürülen PNG, birkaç tur açıklama veya metin katmanı öncesinde neden yardımcı oluyor?',
        answer:
          'Bir JPEG dosyasını tekrar tekrar yeniden kaydetmek, kayıplı niceleme her çalıştığında kenarları biraz bozar. Bir kaynak öğeyi bir kez PNG formatına dönüştürmek, tekrarlanan grafik düzenlemelere temiz bir şekilde dayanan kayıpsız bir ara ana dosya oluşturur.',
      },
      {
        question: '.jpg ve .jpeg uzantılarının ikisi de JPG PNG çeviricide sorunsuz kabul ediliyor mu?',
        answer:
          'Evet. Yükleme alanı hem .jpg hem de .jpeg uzantılarını kabul eder ve temizlenmiş orijinal temel adı koruyarak standartlaştırılmış .png dosyaları üretir.',
      },
      {
        question: 'Bu belirli JPG PNG sayfasında PNG, WebP veya HEIC resimlerini de dönüştürebilir miyim?',
        answer:
          'Bu sayfa, PNG formatına temiz tek adımlı dönüştürme için kasıtlı olarak yalnızca JPG/JPEG girdilerini kabul eder. Kaynak klasörünüz başka dosya formatları içeriyorsa Resim Dönüştürücü veya Toplu Resim Dönüştürücü araçlarımızı kullanın.',
      },
      {
        question: 'JPG PNG çeviriciye yüklenen JPEG başına izin verilen en büyük boyut nedir?',
        answer:
          'Her tekil .jpg veya .jpeg dosyası 25 MB boyutuna kadar olabilir. Bu cömert sınır, yüksek çözünürlüklü kamera dışa aktarmalarını, DSLR fotoğraflarını ve geniş dijital sanat eserlerini kolayca kapsar.',
      },
      {
        question: 'Kamerayla yandan çekilmiş bir portre fotoğrafı .jpg olarak kaydedildiğinde neden dik olarak dışa aktarılabiliyor?',
        answer:
          'Modern tarayıcılar, çözülen JPEG dosyasını HTML5 Canvas üzerine boyarken gömülü EXIF yönlendirme etiketlerini otomatik olarak okur. Bu, dik yönlendirmeyi yeni PNG piksellerine kalıcı olarak sabitler; böylece her uygulamada dik görünür.',
      },
      {
        question: 'Dışa aktarılan PNG dosyaları Photoshop, Illustrator, Figma, Canva ve PowerPoint üzerinde açılır mı?',
        answer:
          'Evet. HTML5 Canvas tarafından oluşturulan standart 8 bit RGBA .png dosyaları, her masaüstü tasarım uygulamasında, ofis paketinde, tarayıcıda ve mobil işletim sisteminde evrensel olarak uyumludur.',
      },
      {
        question: 'Tarayıcıda JPG PNG dönüştürme, bulut çeviricilere kıyasla ne kadar hızlı?',
        answer:
          'Birkaç megabaytlık fotoğraflar için yükleme veya indirme bekleme süresi olmadığından yerel Canvas dönüştürme, dosya başına milisaniyeler içinde kendi CPU işlemcinizde tamamlanır. Toplu işler, uzak sunucu kuyruklarında beklemeden hızlı biter.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'PNG JPG Çevirme',
    shortDescription: 'Ağır PNG dosyalarını özel bir mat arka planla hafif JPG dosyalarına dönüştürün.',
    category: 'convert',
    seoTitle: 'PNG JPG Çevirme Ücretsiz – PNG Küçült ve Mat Renk Seç',
    seoDescription:
      'PNG JPG çevirme ücretsiz ve çevrimiçi: PNG dosyalarını hafif fotoğraflara dönüştürün. Şeffaf bölgeler için mat renk seçin, kaliteyi ayarlayın ve ZIP ile indirin.',
    h1: 'PNG JPG Çevirici Ücretsiz',
    subtitle:
      'Hacimli PNG ekran görüntülerini, Retina yakalamalarını ve grafik dışa aktarmalarını tarayıcınızda ücretsiz PNG JPG çeviricimizle hızlı ve hafif .jpg dosyalarına küçültün. Çok büyük PNG ekleriyle uğraşan blog yazarları, pazarlama uzmanları ve e-posta göndericileri için tasarlandı; kalite kaydırıcısını şeffaf arka plan için mat renk seçiciyle birleştirir; böylece alfa bölgeleri asla katı siyaha dönmez.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar PNG resimleri bırakın',
        description:
          'Bir veya daha fazla .png ekran görüntüsü, ürün renderı veya şeffaf kırpıntı yükleme alanına yükleyin.',
      },
      {
        title: 'Şeffaf arka plan için bir mat renk seçin',
        description:
          'Şeffaf piksellerin opak konuların arkasında nasıl düzleştirileceğini kontrol etmek için Beyaz (#ffffff), Siyah (#000000), Açık Gri (#f8fafc) seçeneğine veya yerel renk örneğine basın.',
      },
      {
        title: 'JPG çıktı kalitesini belirleyin (yüzde 20–100)',
        description:
          'Net varsayılan yüzde 88 değerini koruyun ya da yüzde 20 (minik dosya) ile yüzde 100 (en yüksek detay) arasında sürükleyin; ardından Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        title: 'Bayt tasarrufunu doğrulayın ve net kenarları Karşılaştır ile inceleyin',
        description:
          'Kart başına tasarruf yüzdesini gözden geçirin ve metni veya ürün kenarlarını etkileşimli öncesi ve sonrası karşılaştırma görüntüleyicide inceleyin.',
      },
      {
        title: 'JPG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Dönüştürülen tekil .jpg fotoğraflarını hemen kaydedin ya da toplu işleri compressmypic_png_to_jpg.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: 'Özel şeffaflık mat dolgusu',
        description: 'PNG dosyalarındaki şeffaf bölgeler, katı siyaha dönmek yerine beyaz, siyah veya herhangi bir özel arka plan rengi üzerine temiz bir şekilde kaynaşır.',
      },
      {
        title: 'Büyük dosya boyutu azaltması',
        description: 'Fotoğrafik PNG dosyalarını yüzde 85 JPG formatına dönüştürmek dosya ağırlığını anında yüzde 60 ile yüzde 85 arasında küçültür.',
      },
      {
        title: 'Öncesi ve sonrası görsel inceleyici',
        description: 'İndirmeden önce metin ve kenarların net kalması için netliği yan yana doğrulayın.',
      },
      {
        title: 'Tarayıcıda gizli çalıştırma',
        description: 'Gizli ekran görüntüleri ve belgeler kendi bilgisayarınızda güvende kalır.',
      },
    ],
    faqs: [
      {
        question: 'macOS ve Windows ekran görüntüleri neden birkaç megabaytlık PNG dosyaları olarak kaydediliyor ve JPG olarak çok küçülüyor?',
        answer:
          'Masaüstü işletim sistemleri, ekran görüntüleri için varsayılan olarak kayıpsız PNG kullanır; bu da milyonlarca Retina ekran pikselini sıkıştırmadan sadık bir şekilde kaydeder ve genellikle ekran görüntüsü başına 3 MB ile 8 MB arasında olur. Fotoğrafik veya arayüz açısından zengin PNG dosyalarını yüzde 85–90 JPG formatına dönüştürmek, e-posta ve Slack üzerinden hızlı paylaşım için dosya ağırlığını genellikle yüzde 60 ile yüzde 85 arasında kırpar.',
      },
      {
        question: 'Şeffaf arka plan için mat renk seçici, PNG JPG dönüştürmede çirkin siyah kutuları nasıl önlüyor?',
        answer:
          'JPEG belirtiminde alfa şeffaflık kanalı bulunmadığı için saf dönüştürücüler genellikle boş alfa piksellerini varsayılan olarak siyah #000000 yapar; bu da koyu logoları veya gölgeli kırpıntıları bozar. Önce seçilen mat rengi (varsayılan beyaz; ayrıca siyah, açık gri veya herhangi bir özel onaltılık değer) tuval üzerine boyamak, yarı şeffaf kenarları temiz bir şekilde kaynaştırır.',
      },
      {
        question: 'Şeffaf bir PNG logonun arkasında koyu kömür veya web sitesine özgü bir marka rengi seçebilir miyim?',
        answer:
          'Evet. Şeffaf Arka Plan İçin Mat Renk bölümünde Beyaz, Siyah ve Açık Gri hızlı düğmelerinin yanındaki renk girişi karesine basarak herhangi bir tam onaltılık değeri seçin; ardından önizlemeyi görmek ve dışa aktarmak için Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        question: 'Ekran görüntüsü tipografisini şişmiş dosyalar olmadan net tutan JPG çıktı kalite yüzdesi nedir?',
        answer:
          'JPG çıktı kalitesini yüzde 88 (varsayılan) ile yüzde 95 arasında tutmak, yazılım arayüzü metninin net kenarlarını ve grafikleri temiz tutar. Yüzde 70 altına düşmek, yüksek kontrastlı kırmızı veya mavi harfler çevresinde JPEG renk alt örneklemesinden dolayı hafif sivrisinek gürültüsü oluşturabilir.',
      },
      {
        question: '20 KB boyutundaki minik düz tek renkli bir PNG simgesi yüzde 88 JPG formatına dönüştürülünce neden biraz büyüyebilir?',
        answer:
          'Dizinli palet PNG formatı, keskin katı alanlara sahip düz iki renkli grafiklerde öne çıkarken JPEG 8×8 kosinüs blokları minik logolara ek yük katar. Her zaman Değişim sütununu inceleyin: web için düz şeffaf simgeler için WebP veya PNG korumak genellikle JPG formatından daha küçüktür.',
      },
      {
        question: 'Dönüştürücüde PNG JPG ile PNG WebP arasında nasıl karar veririm?',
        answer:
          'Eklerin Microsoft Word, PDF oluşturucular, eski e-posta programları, baskı laboratuvarları veya WebP dosyalarını reddeden portallarda açılması gerektiğinde ya da kasıtlı olarak katı beyaz bir arka plan istediğinizde PNG JPG seçin. Şeffaflığı korumak ve en yüksek hızın önemli olduğu web sitelerinde öğe dağıtırken PNG WebP seçin.',
      },
      {
        question: 'Şeffaf ürün kırpıntılarını beyaz #ffffff mat üzerine dönüştürmek pazar yeri listelerine yardımcı olur mu?',
        answer:
          'Evet. Amazon ve eBay gibi pazar yerleri genellikle ana ürün küçük resimleri için alfa PNG yerine opak beyaz arka planlı net JPG dosyalarını tercih eder ve beyaz, JPEG içinde çok verimli sıkıştırılır.',
      },
      {
        question: '25 Retina PNG ekran görüntüsünden oluşan bütün bir toplu işi aynı anda JPG formatına dönüştürebilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar birden fazla .png dosyasını kuyruğa bırakın, kalitenizi ve mat dolgu renginizi seçin ve hepsini birlikte compressmypic_png_to_jpg.zip olarak indirin.',
      },
      {
        question: 'Şeffaf bir PNG pencere ekran görüntüsü çevresindeki yumuşak gölgeler JPG formatına düzleştirildiğinde ne olur?',
        answer:
          'Alfa karışımlı gölgeler, sert pürüzlü hatlara kırpılmak yerine seçilen mat renk üzerine doğal bir şekilde birleştirilir. Bu, slaytlar ve makaleler için beyaz veya renkli arka planlar üzerinde yumuşak ve temiz bir gölgeleme üretir.',
      },
      {
        question: 'PNG JPG dönüştürme sırasında gizli panolar, makbuzlar veya tasarım taslakları bir bulut API adresine yükleniyor mu?',
        answer:
          'Hayır. Canvas üzerinde mat birleştirme, JPEG sıkıştırma ve ZIP oluşturma, tarayıcı sekmenizde yerel olarak çalışır; böylece hassas ekran görüntüleri asla bilgisayarınızdan çıkmaz.',
      },
      {
        question: 'PNG dosyasını JPG formatına dönüştürmek piksel genişliğini veya yüksekliğini değiştiriyor mu?',
        answer:
          'Hayır. Dönüştürülen her .jpg dosyası, orijinal PNG dosyanızın tam genişlik ve yüksekliğinin yüzde 100 boyutunu korur. Retina ekran görüntülerini de 1× boyutlara küçültmek istiyorsanız Resim Boyutlandırıcı veya Toplu Resim Boyutlandırıcı araçlarını kullanın.',
      },
      {
        question: 'PNG dosyasını JPG formatına dönüştürürken kalite kontrolü hangi aralığı kapsıyor?',
        answer:
          'Yüzde 20 seviyesine sürüklemek, ultra minik dosyalar zorunlu olduğunda agresif sıkıştırmanın boyutu nasıl kırptığını gösterir; yüzde 85–90 ise net fotoğraflar ve slaytlar için görsel ideal noktaya ulaşır. Yüzde 100 seçmek, bayt ağırlığı ikincil olduğunda en yüksek JPEG detayını sunar.',
      },
      {
        question: 'İlk dönüştürme sonuçlarını gördükten sonra mat rengi veya kaliteyi değiştirebilir miyim?',
        answer:
          'Evet. İstediğiniz zaman başka bir mat örnek seçin veya kaydırıcıyı hareket ettirin ve yeniden yüklemeden yüklenen her dosyayı yeniden oluşturmak için Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        question: 'PNG dosyasını JPG formatına dönüştürmek, oluşturma yazılımı veya yorumlar gibi gömülü PNG metin parçalarını kaldırıyor mu?',
        answer:
          'Evet. Pikselleri HTML5 Canvas üzerine çizmek, gömülü tEXt, iTXt ve ICC profil bloklarını kaldırır; JPG çıktılarını hafif ve temiz tutar.',
      },
      {
        question: 'İndirmeden önce dönüştürülen arayüz ekran görüntülerinde öncesi ve sonrası kenar netliğini doğrulayabilir miyim?',
        answer:
          'Evet. Orijinal kayıpsız PNG dosyasına karşı metin etiketlerini ve simgeleri incelemek için herhangi bir kartta Karşılaştır seçeneğine basarak bölünmüş görüntüleyiciyi sürükleyin.',
      },
      {
        question: 'Bu özel PNG JPG sayfası hangi dosya türlerini kabul ediyor?',
        answer:
          'Dosya başına 25 MB boyutuna kadar .png dosyalarını temiz bir şekilde filtreler; böylece PNG olmayan girdileri kazara ezmezsiniz. WebP veya BMP dosyalarıyla karışık toplu işler için Toplu Resim Dönüştürücü aracını deneyin.',
      },
      {
        question: 'Dönüştürücü, geçmeli (Adam7) şeffaf PNG dosyalarını destekliyor mu?',
        answer:
          'Evet. Tarayıcınızın yerel resim çözümleyicisi, Canvas mat arka planı üzerine boyamadan önce hem standart hem de geçmeli PNG akışlarını temiz bir şekilde okur.',
      },
      {
        question: 'Windows Fotoğraflar, macOS Önizleme, WhatsApp ve eski yazıcılar dışa aktarılan JPG dosyasını açar mı?',
        answer:
          'Evet. Standart temel çizgi RGB .jpg dosyaları, telefonlarda, tarayıcılarda, ofis paketlerinde ve baskı kiosklarında herhangi bir dijital resim formatından daha geniş uyumluluğa sahiptir.',
      },
      {
        question: 'PNG JPG dönüştürmede tekil dosya adı ile toplu ZIP adı nedir?',
        answer:
          'Tekil indirmeler, .jpg uzantısıyla temizlenmiş orijinal dosya adını korur. 2 veya daha fazla dosyadan oluşan toplu işler, compressmypic_png_to_jpg.zip içinde temiz bir şekilde gruplanarak dışa aktarılır.',
      },
      {
        question: 'iOS veya Android mobil tarayıcılardan PNG ekran görüntülerini temiz bir şekilde dönüştürebilir miyim?',
        answer:
          'Evet. Mat örnekler, kalite kaydırıcısı, görsel karşılaştırma inceleyici ve ZIP dışa aktarma, uygulama indirmeden doğrudan iOS Safari ve Android Chrome üzerinde çalışır.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'JPG WebP Çevirme',
    shortDescription: 'Daha hızlı siteler ve daha iyi SEO için JPG fotoğraflarını modern WebP formatına dönüştürün.',
    category: 'convert',
    seoTitle: 'JPG WebP Çevirme Ücretsiz – Daha Hafif Dosyalar',
    seoDescription:
      'JPG WebP çevirme ücretsiz ve çevrimiçi, tarayıcınızda. Daha küçük dosyalar, daha hızlı sayfalar ve daha iyi Core Web Vitals; kalite kontrolü ve ZIP ile.',
    h1: 'JPG WebP Çevirici Ücretsiz',
    subtitle:
      'Günlük JPG fotoğraflarını tarayıcınızda tamamen çalışan ücretsiz JPG WebP çeviricimizle modern ve hafif WebP resimlerine dönüştürün. Daha hızlı sayfalar ve daha iyi Core Web Vitals değerlerine ihtiyaç duyan blog yazarları, mağaza sahipleri ve geliştiriciler için tasarlandı; her biri 25 MB boyutuna kadar JPG dosyalarını seçtiğiniz kaliteyle dönüştürür; varsayılan yüzde 82, toplu işleme ve tek tıklı ZIP indirmeleri sunar; hiçbir şey yüklenmez.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar JPG fotoğrafları bırakın',
        description:
          'Blog, mağaza veya kamera rulonuzdan bir veya daha fazla .jpg ya da .jpeg fotoğrafını yükleme alanına yükleyin.',
      },
      {
        title: 'WebP çıktı kalitesini ayarlayın (yüzde 20–100)',
        description:
          'Fotoğraflar için net varsayılan yüzde 82 değerini koruyun ya da minik dosyalar için yüzde 20 seviyesine, en yüksek detay için yüzde 100 seviyesine sürükleyin; ardından Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        title: 'Her kartta boyut tasarrufunu gözden geçirin',
        description:
          'Her sonuç, kazancı anında görmeniz için orijinal JPG boyutunu, dönüştürülen WebP boyutunu ve tasarruf yüzdesini gösterir.',
      },
      {
        title: 'Netliği yan yana karşılaştırın',
        description:
          'Seçilen kaliteyle metnin, yüzlerin ve kenarların net görünmeye devam ettiğini doğrulamak için herhangi bir kartta Karşılaştır seçeneğine basarak bölünmüş görüntüleyiciyi açın.',
      },
      {
        title: 'WebP dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .webp dosyalarını kaydedin ya da bütün toplu işi tek tıkla compressmypic_jpg_to_webp.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: 'Daha hızlı PageSpeed ve LCP puanları',
        description:
          'WebP, Lighthouse ve modern tarayıcıların önerdiği yeni nesil web formatıdır.',
      },
      {
        title: 'Ayarlanabilir kalite kontrolü',
        description:
          'Sıkıştırmayı yüzde 20 ile yüzde 100 arasında ayarlayın ve sonuçları hemen görün.',
      },
      {
        title: 'Toplu ZIP dışa aktarma',
        description:
          'Bütün blog veya e-ticaret resim klasörlerini yerel olarak saniyeler içinde optimize edin.',
      },
      {
        title: 'Sunucuya gidiş yok',
        description:
          'Tarayıcınızın yerleşik WebP kodlayıcısını kullanır: hızlı, çevrimdışı kullanıma uygun ve gizlidir.',
      },
    ],
    faqs: [
      {
        question: 'Bir WebP dosyası, JPG olarak kaydedilen aynı fotoğraftan ne kadar daha küçük oluyor?',
        answer:
          'Benzer görsel kalitede WebP dosyaları, WebP sıkıştırmanın pikselleri daha verimli tahmin etmesi nedeniyle genellikle aynı fotoğrafın JPG olarak kaydedilen hâlinden yüzde 25 ile yüzde 35 arasında daha hafif olur. Tam tasarruf fotoğrafa bağlıdır: ayrıntılı manzaralar daha az tasarruf ederken düz gökyüzü ve stüdyo fotoğrafları daha fazla tasarruf eder.',
      },
      {
        question: 'Google neden daha hızlı web siteleri ve daha iyi Core Web Vitals için WebP öneriyor?',
        answer:
          'Google Lighthouse ve PageSpeed araçları, ağır resimleri yavaş Largest Contentful Paint (LCP) değerinin başlıca nedenlerinden biri olarak işaretler. Aynı fotoğrafı daha hafif bir WebP olarak sunmak, yavaş bağlantılarda indirme süresini kısaltır; bu da LCP değerini ve Google sıralama sinyali olarak kullandığı deneyim puanını doğrudan iyileştirir.',
      },
      {
        question: 'Hangi tarayıcılar bir WebP dosyasını hiçbir şey yüklemeden açıyor?',
        answer:
          'Tüm modern tarayıcılar WebP dosyalarını yerel olarak açar: bilgisayarda Chrome, Edge, Firefox ve Safari; ayrıca Android Chrome ve iOS Safari. Eklenti veya görüntüleyici uygulaması gerekmez; böylece WebP resimleri web sayfalarında, sohbetlerde ve çoğu modern resim görüntüleyicide doğrudan gösterilir.',
      },
      {
        question: 'Bir web sitesinde JPG WebP fotoğrafları için hangi kalite kullanılmalı?',
        answer:
          'Web sitesi fotoğrafları için yüzde 80 ile yüzde 85 arası ideal noktadır: resimler orijinal JPG ile neredeyse aynı görünür ve çok daha küçük kalır. Araç, tam da bu nedenle varsayılan olarak yüzde 82 kullanır; her detayın önemli olduğu ana resimler için yüzde 90 veya üzerine çıkabilirsiniz.',
      },
      {
        question: 'JPG dosyasını WebP formatına dönüştürürken fotoğrafın boyutları değişiyor mu?',
        answer:
          'Hayır. Dönüştürme yalnızca dosya kapsayıcısını ve sıkıştırmayı değiştirir; bu nedenle dışa aktarılan WebP, orijinal JPG dosyasının genişlik ve yüksekliğinin yüzde 100 boyutunu korur. Daha küçük boyutlar da istiyorsanız ardından tam piksel boyutları için Resim Boyutlandırıcı aracını kullanın.',
      },
      {
        question: 'Bir JPG fotoğrafı WebP formatına dönüştürülürken şeffaflığı koruyabilir mi?',
        answer:
          'Hayır, çünkü standart JPG dosyalarının korunacak bir şeffaflık kanalı yoktur: JPG dosyasındaki her piksel tamamen opaktır. Orijinal grafiğinizin şeffaf bir arka planı varsa bir PNG dosyasından başlayın ve tam alfa kanalını koruyan PNG WebP çeviricimizi kullanın.',
      },
      {
        question: 'JPG dosyalarım WebP formatına dönüştürülürken bir sunucuya yükleniyor mu?',
        answer:
          'Asla. Dönüştürme, kendi tarayıcı sekmenizde HTML5 Canvas üzerinde çalışır; böylece fotoğraflarınız yerel olarak kodlanır ve asla bilgisayarınızdan veya telefonunuzdan çıkmaz. Sekmeyi kapattığınızda tarayıcı belleğinden silinirler.',
      },
      {
        question: 'Bir blogun bütün JPG resim klasörünü aynı anda WebP formatına dönüştürebilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar birden fazla .jpg veya .jpeg dosyasını kuyruğa bırakın, bütün toplu iş için tek bir kalite seçin ve hepsini birlikte compressmypic_jpg_to_webp.zip olarak indirin. Her dosya ayrı ayrı dönüştürülür; bu nedenle bozuk bir dosya diğerlerini asla engellemez.',
      },
      {
        question: 'Bir JPG dosyası WebP formatına dönüştürülürken EXIF verilerine ve GPS etiketlerine ne olur?',
        answer:
          'Pikselleri HTML5 Canvas üzerine çizmek, GPS koordinatları, kamera modeli ve zaman damgaları dahil gömülü EXIF verilerini kaldırır. Bu, ortaya çıkan WebP dosyalarını hafif tutar ve fotoğrafları çevrimiçi yayınlamadan önce gizliliğinizi korur.',
      },
      {
        question: 'Dönüştürülen WebP dosyası bazen orijinal JPG dosyasından neden daha ağır oluyor?',
        answer:
          'Çok küçük veya zaten çok sıkıştırılmış JPG dosyaları, özellikle yüzde 100 kaliteyle yeniden kodlanırken WebP kendi kapsayıcı ağırlığını eklediği için biraz büyüyebilir. Bir dosya büyürse kaliteyi yüzde 80 seviyesine düşürün veya orijinal JPG dosyasını koruyun: her kartın Değişim sütunu sonucu dürüstçe gösterir.',
      },
      {
        question: 'Dönüştürülen WebP dosyalarını WordPress, Shopify veya Wix üzerinde kullanabilir miyim?',
        answer:
          'Evet. WordPress, Shopify, Wix, Squarespace ve çoğu modern site oluşturucu WebP yüklemelerini doğrudan kabul eder ve tarayıcılar bunları ek yapılandırma olmadan sunar. WebP dosyalarını reddeden çok eski tema veya eklentiler için WebP JPG çeviricimizle geri dönüştürün.',
      },
      {
        question: 'WebP çeviricinin kabul ettiği en büyük JPG dosya boyutu nedir?',
        answer:
          'Her JPG veya JPEG dosyası 25 MB boyutuna kadar olabilir; bu da yüksek çözünürlüklü kamera fotoğraflarını ve büyük ekran görüntülerini kapsar. Dönüştürme cihazınızda gerçekleştiği için büyük dosyalar, yükleme bekleme süresi olmadan yerel işlemci hızınızda işlenir.',
      },
      {
        question: 'JPG WebP dönüştürme telefon tarayıcısında çalışıyor mu?',
        answer:
          'Evet. Kalite kaydırıcısı, toplu kuyruk, karşılaştırma görüntüleyici ve ZIP indirme, uygulama yüklemeden iOS Safari ve Android Chrome üzerinde çalışır. Telefonlarda çok büyük toplu işler, iş telefon işlemcisinde çalıştığı için biraz daha uzun sürer.',
      },
      {
        question: 'Dönüştürülen WebP dosyasının indirmeden önce net göründüğünü nasıl doğrularım?',
        answer:
          'Herhangi bir sonuç kartında Karşılaştır seçeneğine basarak bölünmüş görüntüleyiciyi açın ve yüzleri, metni ve kenarları orijinal JPG ile karşılaştırarak incelemek için fotoğraf üzerinde sürükleyin. Bir şey yumuşak görünüyorsa kalite kaydırıcısını yükseltin ve Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        question: 'JPG WebP ilk dönüştürmesinden sonra yeniden yüklemeden kaliteyi değiştirebilir miyim?',
        answer:
          'Evet. İstediğiniz zaman kalite kaydırıcısını yeni bir değere taşıyın ve yüklenen her dosyayı yeni ayarla yeniden oluşturmak için Tümünü Yeniden Dönüştür düğmesine basın. Yüklenen dosyalarınız kuyrukta kalır; bu nedenle onları yeniden sürüklemeniz gerekmez.',
      },
      {
        question: 'Çevrimiçi bir mağazanın ürün fotoğrafları için WebP, JPG formatından daha mı iyi?',
        answer:
          'Bir web sitesinde gösterilen ürün fotoğrafları için evet: yüzde 80 ile yüzde 85 kalitede WebP, JPG ile aynı görünür ve belirgin ölçüde daha hızlı yüklenir; bu da hem alıcılara hem de arama motoru sıralamasına yardımcı olur. JPG dosyasını yalnızca bir pazar yeri, baskı laboratuvarı veya alıcı açıkça istediğinde koruyun.',
      },
      {
        question: 'İndirilen WebP dosyaları hangi dosya adını koruyor?',
        answer:
          'Tekil indirmeler, .webp uzantısıyla temizlenmiş orijinal dosya adını korur; böylece foto_01.jpg, foto_01.webp olur. İki veya daha fazla dosyadan oluşan toplu işler, compressmypic_jpg_to_webp.zip içinde gruplanarak dışa aktarılır.',
      },
      {
        question: 'Metin içeren JPG ekran görüntülerini harfler bulanıklaşmadan WebP formatına dönüştürebilir miyim?',
        answer:
          'Evet, yüzde 85 ile yüzde 90 kalitede ekran görüntülerindeki metin net kalır; çünkü WebP, yüksek kontrastlı net kenarları iyi korur. Yüzde 70 altına düşmek küçük harfleri yumuşatabilir; bu nedenle Karşılaştır görüntüleyiciyi inceleyin ve metin bulanık görünüyorsa kaliteyi yükseltin.',
      },
      {
        question: 'JPG WebP çevirici sayfa yüklendikten sonra çevrimdışı çalışıyor mu?',
        answer:
          'Evet. Sayfa tarayıcınızda yüklendikten sonra dönüştürme, sunucu çağrısı olmadan tamamen yerel JavaScript ve HTML5 Canvas üzerinde çalışır. İnternete yalnızca sayfanın kendisini yüklemek veya bitmiş dosyaları indirmek için yeniden ihtiyaç duyarsınız.',
      },
      {
        question: 'JPG dosyasını WebP formatına dönüştürmek yerine ne zaman korumalıyım?',
        answer:
          'Dosyanın eski yazılımda, e-posta eklerinde, baskı laboratuvarlarında veya WebP dosyalarını hâlâ reddeden yükleme portallarında açılması gerektiğinde JPG dosyasını koruyun. Modern bir web sitesinde yayınlanan her şey için WebP en iyi seçenektir ve her zaman WebP JPG çeviriciyle geri dönüştürebilirsiniz.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'WebP JPG Çevirme',
    shortDescription: 'WebP indirmelerini her yerde kabul edilen JPG dosyalarına dönüştürün.',
    category: 'convert',
    seoTitle: 'WebP JPG Çevirme Ücretsiz – Evrensel Format',
    seoDescription:
      'WebP JPG çevirme ücretsiz ve çevrimiçi, tarayıcınızda. Şeffaf bölgeler için mat renk seçin, kaliteyi ayarlayın ve ZIP ile indirin.',
    h1: 'WebP JPG Çevirici Ücretsiz',
    subtitle:
      'İndirilen .webp resimlerini tarayıcınızda ücretsiz WebP JPG çeviricimizle herhangi bir uygulamada, portalda veya yazıcıda açılan klasik .jpg dosyalarına dönüştürün. Bir web sitesinden veya sohbetten WebP dosyası alan ve düzenleyicisinin, ofis paketinin veya yükleme formunun bunu reddettiği kişiler için tasarlandı; her biri 25 MB boyutuna kadar WebP dosyalarını varsayılan yüzde 88 kaliteyle dönüştürür; şeffaf bölgeler için mat renk seçici ve toplu ZIP dışa aktarma sunar.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar WebP resimleri bırakın',
        description:
          'Web sitelerinden, sohbetlerden veya indirmelerden kaydedilen bir veya daha fazla .webp dosyasını yükleme alanına yükleyin.',
      },
      {
        title: 'Şeffaf bölgeler için bir mat renk seçin',
        description:
          'Beyaz (#ffffff), Siyah (#000000), Açık Gri (#f8fafc) veya herhangi bir özel onaltılık renk seçin; çünkü JPG şeffaflığı saklayamaz.',
      },
      {
        title: 'JPG çıktı kalitesini ayarlayın (yüzde 20–100)',
        description:
          'Net varsayılan yüzde 88 değerini koruyun ya da minik dosyalar için yüzde 20 seviyesine, en yüksek detay için yüzde 100 seviyesine sürükleyin; ardından Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        title: 'JPG dosyasını orijinal WebP ile karşılaştırın',
        description:
          'Kaydetmeden önce kenarları ve metni bölünmüş görüntüleyicide incelemek için herhangi bir kartta Karşılaştır seçeneğine basın.',
      },
      {
        title: 'JPG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .jpg dosyalarını kaydedin ya da bütün toplu işi tek tıkla compressmypic_webp_to_jpg.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: 'Eski yazılım reddini çözer',
        description:
          'Yalnızca JPG kabul eden portallar, yazıcılar veya eski uygulamalar için WebP resimlerini kolayca dönüştürün.',
      },
      {
        title: 'Şeffaflık için güvenli mat dolgu',
        description:
          'Şeffaf WebP dosyaları beyaz, siyah veya herhangi bir onaltılık renk üzerine sorunsuz düzleştirilir.',
      },
      {
        title: 'Yüksek kaliteli yeniden kodlama',
        description:
          'Varsayılan yüzde 88 kalite, dosya boyutunda en az artışla detayları net tutar.',
      },
      {
        title: 'Yüzde 100 tarayıcı içi gizlilik',
        description:
          'Bulut kuyruğu veya sunucuya yükleme yok: cihazınızda anında çalışır.',
      },
    ],
    faqs: [
      {
        question: 'Bazı uygulamalar, yazıcılar ve formlar neden WebP dosyalarını reddediyor?',
        answer:
          'WebP daha yeni bir formattır ve birçok eski masaüstü programı, baskı kiosku, Microsoft Office sürümü ve resmî yükleme formu ondan önce oluşturulduğu için yalnızca JPG ve PNG dosyalarını tanır. WebP dosyasını JPG formatına dönüştürmek, kimsenin bir şey yüklemesini istemeden resmin her yerde anında açılmasını sağlar.',
      },
      {
        question: 'WebP dosyasını JPG formatına dönüştürürken şeffaf kısımlara ne olur?',
        answer:
          'JPG dosyasında alfa şeffaflık kanalı bulunmadığı için şeffaf pikseller dönüştürme sırasında katı bir renkle doldurulmalıdır. Bu araç, onları seçtiğiniz mat renkle doldurur; varsayılan beyazdır; böylece logolar ve çıkartmalar siyah bir kutu yerine temiz katı bir arka planla kalır.',
      },
      {
        question: 'Şeffaf bir WebP çıkartmasının arkasındaki arka plan rengini seçebilir miyim?',
        answer:
          'Evet. Şeffaf Arka Plan İçin Mat Renk bölümünde Beyaz, Siyah veya Açık Gri seçin ya da renk örneğine basarak herhangi bir özel onaltılık değer yazın. Seçim, Tümünü Yeniden Dönüştür düğmesine bastığınızda uygulanır; böylece indirmeden önce farklı arka planları deneyebilirsiniz.',
      },
      {
        question: 'Bir resmi WebP formatından JPG formatına dönüştürürken kalite kaybediyor mu?',
        answer:
          'JPG, pikselleri kayıplı sıkıştırmayla yeniden kodladığı için bir miktar kayıp kaçınılmazdır; ancak varsayılan yüzde 88 kalitede fark, fotoğraflar ve ekran görüntüleri için neredeyse görünmezdir. Orijinal WebP zaten düşük kaliteliyse dönüştürme, hiç var olmayan detayı geri getiremez.',
      },
      {
        question: 'JPG dosyası, orijinal WebP dosyasıyla aynı piksel boyutlarını koruyor mu?',
        answer:
          'Evet. Dönüştürülen her .jpg dosyası, orijinal WebP dosyasının tam genişlik ve yüksekliğinin yüzde 100 boyutunu korur; bu nedenle hiçbir şey kırpılmaz veya boyutlandırılmaz. Daha küçük boyutlara da ihtiyacınız varsa ardından Resim Boyutlandırıcı aracını kullanın.',
      },
      {
        question: 'WebP JPG çeviricide animasyonlu bir WebP dosyasıyla ne yapmalıyım?',
        answer:
          'Animasyonlu bir WebP dosyası sabit bir JPG olarak dışa aktarılır; çünkü JPG formatı hareket saklayamaz. Animasyondan net tek bir kare alırsınız; bu, küçük resimler ve belgeler için iyi çalışır; hareketli sürüm için orijinal WebP dosyasını koruyun.',
      },
      {
        question: 'WebP dosyalarım JPG formatına dönüştürülürken bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Bütün dönüştürme, kendi tarayıcı sekmenizde HTML5 Canvas üzerinde çalışır; bu nedenle resimleriniz asla bir sunucuya gönderilmez, saklanmaz veya başka kimse tarafından görülmez. Sekmeyi kapattığınızda tarayıcı belleğinden silinirler.',
      },
      {
        question: 'Birçok WebP indirmesini tek toplu işte JPG formatına dönüştürebilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar birden fazla .webp dosyasını kuyruğa bırakın, bütün toplu iş için tek bir mat renk ve tek bir kalite seçin ve hepsini birlikte compressmypic_webp_to_jpg.zip olarak indirin. Her dosya ayrı ayrı dönüştürülür.',
      },
      {
        question: 'JPG çeviricinin kabul ettiği en büyük WebP dosyası nedir?',
        answer:
          'Her WebP dosyası 25 MB boyutuna kadar olabilir; bu da yüksek çözünürlüklü indirmeleri ve büyük ekran görüntülerini kapsar. Dönüştürme cihazınızda çalışır; bu nedenle büyük dosyalar, yükleme bekleme süresi olmadan yerel işlemci hızınızda işlenir.',
      },
      {
        question: 'Bir logonun arkasında siyah bir kutu yerine saf beyaz bir arka planı nasıl elde ederim?',
        answer:
          'Dönüştürmeden önce Şeffaf Arka Plan İçin Mat Renk bölümünde Beyaz (#ffffff) seçin: beyaz varsayılan değerdir; bu nedenle çoğu logo zaten temiz çıkar. Bir dosya yanlış renkle dönüştürüldüyse yalnızca örneği değiştirin ve yeniden oluşturmak için Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        question: 'JPG dosyası bazen orijinal WebP dosyasından neden daha ağır oluyor?',
        answer:
          'WebP, JPG formatından daha verimli sıkıştırır; bu nedenle yüzde 88 kaliteyle JPG olarak yeniden kodlanan küçük bir WebP dosyası kaynaktan daha ağır bitebilir. Bu normaldir: biraz dosya boyutunu evrensel uyumlulukla değiştiriyorsunuz. Kaliteyi yüzde 75 seviyesine düşürmek genellikle JPG dosyasını orijinal boyutun altına geri döndürür.',
      },
      {
        question: 'Dönüştürülen JPG dosyasını Microsoft Word, PowerPoint veya Photoshop üzerinde açabilir miyim?',
        answer:
          'Evet. Standart temel çizgi RGB .jpg dosyaları, WebP formatını hiç öğrenmemiş eski sürümler dahil neredeyse tüm ofis paketlerinde, düzenleyicilerde, tarayıcılarda ve baskı iş akışlarında açılır. Bu evrensel uyumluluk, dönüştürmenin başlıca nedenidir.',
      },
      {
        question: 'WebP JPG çevirici, WebP dosyalarındaki meta verileri kaldırıyor mu?',
        answer:
          'Evet. Pikselleri HTML5 Canvas üzerine çizmek, gömülü EXIF, XMP ve ICC profil verilerini kaldırır; bu nedenle ortaya çıkan JPG dosyaları hafif olur ve gizli konum veya kamera verisi taşımaz.',
      },
      {
        question: 'İndirmeden önce JPG dosyasının iyi göründüğünü nasıl doğrularım?',
        answer:
          'Herhangi bir sonuç kartında Karşılaştır seçeneğine basarak bölünmüş görüntüleyiciyi açın ve kenarları, metni ve renkleri orijinal WebP ile karşılaştırarak incelemek için resim üzerinde sürükleyin. Her kart ayrıca orijinal ve dönüştürülen boyutları gösterir; böylece sürprizler kaydetmeden önce görülür.',
      },
      {
        question: 'WebP dosyasını JPG formatına dönüştürdükten sonra mat rengi veya kaliteyi değiştirebilir miyim?',
        answer:
          'Evet. İstediğiniz zaman başka bir mat örnek seçin veya kalite kaydırıcısını hareket ettirin ve yeniden yüklemeden yüklenen her dosyayı yeniden oluşturmak için Tümünü Yeniden Dönüştür düğmesine basın. Orijinal WebP dosyalarınız siz temizleyene kadar kuyrukta kalır.',
      },
      {
        question: 'İndirilen JPG dosyası hangi dosya adını koruyacak?',
        answer:
          'Tekil indirmeler, .jpg uzantısıyla temizlenmiş orijinal dosya adını korur; böylece banner.webp, banner.jpg olur. İki veya daha fazla dosyadan oluşan toplu işler, compressmypic_webp_to_jpg.zip içinde gruplanarak dışa aktarılır.',
      },
      {
        question: 'WebP JPG çevirici iPhone ve Android tarayıcılarda çalışıyor mu?',
        answer:
          'Evet. Mat renk seçici, kalite kaydırıcısı, karşılaştırma görüntüleyici ve ZIP indirme, uygulama yüklemeden iOS Safari ve Android Chrome üzerinde çalışır. Büyük toplu işler telefon işlemcilerinde biraz daha uzun sürer.',
      },
      {
        question: 'WebP dosyasını JPG yerine PNG formatına dönüştürmek ne zaman daha uygun?',
        answer:
          'E-posta ekleri, Office belgeleri, yükleme portalları ve yazıcılar için en küçük ve her şeyle uyumlu dosyaya ihtiyacınız olduğunda JPG seçin. Şeffaflığı korumanız veya düzenleme için kayıpsız ve piksel açısından mükemmel kaliteye ihtiyacınız olduğunda PNG seçin.',
      },
      {
        question: 'Metni net olan bir WebP ekran görüntüsü JPG formatına dönüştürüldükten sonra neden daha yumuşak görünüyor?',
        answer:
          'JPEG, renk alt örneklemesi kullanır; bu da beyaz üzerine kırmızı veya mavi harfler gibi yüksek kontrastlı kenarları hafifçe yumuşatır. Kaliteyi yüzde 92 veya yüzde 95 seviyesine çıkarmak ekran görüntüsü metnini net tutar ve Karşılaştır görüntüleyici, indirmeden önce bunu doğrulamanızı sağlar.',
      },
      {
        question: 'Bir web sitesinin uzantısız kaydettiği bir WebP resmini dönüştürebilir miyim?',
        answer:
          'Doğrudan değil: bu sayfa girdileri .webp uzantısı ve WebP MIME türüyle filtreler; bu nedenle önce dosyanın adını .webp ile bitecek şekilde değiştirin. Dosya aslında site tarafından yanlış etiketlenmiş bir JPG veya PNG ise ilgili çeviriciyi kullanın.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'PNG WebP Çevirme',
    shortDescription: 'Şeffaf PNG grafiklerini kompakt ve şeffaf WebP formatına dönüştürün.',
    category: 'convert',
    seoTitle: 'PNG WebP Çevirme Ücretsiz – Şeffaflığı Koruma',
    seoDescription:
      'PNG WebP çevirme ücretsiz ve çevrimiçi: bütün şeffaflığı koruyarak dönüştürün. Logoları, simgeleri ve ekran görüntülerini tarayıcınızda kalite kaydırıcısı ve ZIP ile küçültün.',
    h1: 'PNG WebP Çevirici Ücretsiz',
    subtitle:
      'Ağır şeffaf PNG logolarını, simgeleri ve ekran görüntülerini tarayıcınızda doğrudan ücretsiz PNG WebP çeviricimizle kompakt WebP dosyalarına küçültün. Hızlı yüklenen şeffaf grafiklere ihtiyaç duyan web geliştiricileri ve tasarımcılar için tasarlandı; her biri 25 MB boyutuna kadar PNG dosyalarını varsayılan yüzde 85 kaliteyle dönüştürür ve bütün alfa kanalını korur; toplu işleme ve ZIP indirmeleri sunar.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar PNG grafikleri bırakın',
        description:
          'Şeffaf .png logoları, simgeler, ekran görüntüleri veya ürün kırpıntılarını yükleme alanına yükleyin.',
      },
      {
        title: 'WebP çıktı kalitesini ayarlayın (yüzde 20–100)',
        description:
          'Net şeffaf grafikler için varsayılan yüzde 85 değerini koruyun ya da minik dosyalar için yüzde 20 seviyesine, en yüksek detay için yüzde 100 seviyesine sürükleyin; ardından Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        title: 'Şeffaflığı ve boyut tasarrufunu gözden geçirin',
        description:
          'Her kart, orijinal PNG boyutunu, yeni WebP boyutunu ve tasarruf yüzdesini gösterir; şeffaflık bir kare önizlemesinde görünür.',
      },
      {
        title: 'Kenarları ve gölgeleri yan yana karşılaştırın',
        description:
          'Yarı şeffaf kenarları, geçişleri ve gölgeleri bölünmüş görüntüleyicide incelemek için herhangi bir kartta Karşılaştır seçeneğine basın.',
      },
      {
        title: 'WebP dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .webp dosyalarını kaydedin ya da toplu işi tek tıkla compressmypic_png_to_webp.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: 'Tam alfa şeffaflığı korunur',
        description:
          'JPG formatından farklı olarak WebP, PNG dosyalarınızın temiz yarı şeffaf kenarlarını ve gölgelerini korur.',
      },
      {
        title: 'Yüzde 70 boyutuna kadar daha küçük öğeler',
        description:
          'Birkaç megabaytlık PNG kahraman resimlerini ve kırpıntıları daha hızlı web siteleri için şık WebP dosyalarıyla değiştirin.',
      },
      {
        title: 'Öncesi ve sonrası bölünmüş görünüm',
        description:
          'İndirmeden önce yumuşatılmış kenarları ve geçişleri yan yana inceleyin.',
      },
      {
        title: 'Toplu işleme ve ZIP',
        description:
          'Bütün simge ve ürün kümelerini yükleme sınırı olmadan yerel olarak dönüştürün.',
      },
    ],
    faqs: [
      {
        question: 'PNG WebP çevirici şeffaf arka planları gerçekten koruyor mu?',
        answer:
          'Evet. HTML5 Canvas üzerinde WebP kodlama, tam 8 bit alfa kanalını korur; böylece tamamen şeffaf pikseller şeffaf kalır ve yarı şeffaf kenarlar, yumuşak gölgeler ile yumuşatılmış eğriler hassas karışımlarını korur. Sonuç önizlemesi, bunu anında doğrulamanız için şeffaflığı kareler üzerinde gösterir.',
      },
      {
        question: 'Aynı resim için WebP, PNG formatından ne kadar daha küçük?',
        answer:
          'Görsel karmaşıklığa bağlı olarak bir PNG dosyasını yüzde 85 kaliteyle WebP formatına dönüştürmek genellikle dosya boyutunu yüzde 50 ile yüzde 80 arasında kırpar. Fotoğrafik PNG dosyaları ve büyük ekran görüntüleri daha fazla tasarruf ederken az renkli minik düz simgeler daha az tasarruf edebilir: her kartın Değişim sütunu tam sonucu gösterir.',
      },
      {
        question: 'Yarı şeffaf gölgeler ve yumuşak kenarlar PNG WebP dönüştürmeden sağ çıkıyor mu?',
        answer:
          'Evet. WebP, PNG ile aynı 8 bit alfa değerlerini saklar; bu nedenle gölgeler, parlamalar ve bulanık kenarlar orijinaldeki gibi tam olarak birleşir. Kenarların aynı yumuşaklıkta göründüğünü indirmeden önce doğrulamak için Karşılaştır görüntüleyiciyi kullanarak yakınlaştırın.',
      },
      {
        question: 'Şeffaf PNG logolarını WebP formatına dönüştürmek için hangi kalite en iyi çalışıyor?',
        answer:
          'Varsayılan yüzde 85, çoğu logo ve simge için idealdir: kenarlar net kalırken dosyalar ciddi ölçüde küçülür. Baskı kalitesinde çalışma veya çok ince çizgi sanatı için kaliteyi yüzde 90 veya yüzde 95 seviyesine çıkarın; yüzde 70 altına düşmek ince çizgileri ve küçük metni sertleştirebilir.',
      },
      {
        question: 'Bütün bir simge kümesini PNG formatından WebP formatına aynı anda nasıl dönüştürürüm?',
        answer:
          'Her biri 25 MB boyutuna kadar birden fazla .png dosyasını kuyruğa bırakın, bütün toplu iş için tek bir kalite seçin ve hepsini birlikte compressmypic_png_to_webp.zip olarak indirin. Her simge ayrı ayrı dönüştürülür; bu nedenle bozuk bir dosya diğerlerini asla engellemez.',
      },
      {
        question: 'PNG dosyaları WebP formatına dönüştürülürken bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Dönüştürme, kendi tarayıcı sekmenizde HTML5 Canvas üzerinde çalışır; bu nedenle logolarınız, ekran görüntüleriniz ve tasarım öğeleriniz asla bilgisayarınızdan çıkmaz. Sekmeyi kapattığınızda tarayıcı belleğinden silinirler.',
      },
      {
        question: 'PNG dosyasını WebP formatına dönüştürmek resmin boyutlarını değiştiriyor mu?',
        answer:
          'Hayır. Dışa aktarılan WebP, orijinal PNG dosyasının genişlik ve yüksekliğinin yüzde 100 boyutunu korur: yalnızca dosya formatı ve sıkıştırma değişir. Web için daha küçük boyutlara da ihtiyacınız varsa ardından Resim Boyutlandırıcı aracını kullanın.',
      },
      {
        question: 'WebP çeviricinin kabul ettiği en büyük PNG boyutu nedir?',
        answer:
          'Her PNG dosyası 25 MB boyutuna kadar olabilir; bu da büyük ekran görüntülerini, Retina yakalamalarını ve yüksek çözünürlüklü ürün renderlarını kapsar. Dönüştürme cihazınızda gerçekleştiği için büyük dosyalar, yükleme bekleme süresi olmadan yerel işlemci hızınızda işlenir.',
      },
      {
        question: 'Dönüştürülen WebP dosyam neden orijinal PNG dosyasından daha ağır?',
        answer:
          'Az renkli minik düz PNG dosyaları, iki renkli bir simge gibi zaten son derece verimlidir ve kayıplı WebP kodlama üzerine ağırlık ekleyebilir. Bir dosya büyürse Değişim sütununu inceleyin ve o öğe için orijinal PNG dosyasını koruyun; WebP fotoğrafik ve karmaşık grafiklerde kazanır.',
      },
      {
        question: 'Web siteleri PNG dosyalarından dönüştürülen WebP dosyalarını doğrudan kullanabilir mi?',
        answer:
          'Evet. Tüm modern tarayıcılar WebP dosyalarını yerel olarak gösterir ve WordPress, Shopify, Wix ile çoğu site oluşturucu WebP yüklemelerini kabul eder. Şeffaf WebP logoları, başlıklarda, düğmelerde ve ürün galerilerinde şeffaf PNG logolarıyla tam olarak aynı şekilde çalışır.',
      },
      {
        question: 'PNG dosyasının dönüştürülmesi sırasında meta verilere ve metin parçalarına ne oluyor?',
        answer:
          'Pikselleri HTML5 Canvas üzerine çizmek, gömülü PNG metin parçalarını, oluşturma yazılımı notlarını ve ICC profillerini kaldırır. Ortaya çıkan WebP dosyaları hafif kalır ve öğeleri çevrimiçi yayınlamak için ideal olan gizli meta veriler taşımaz.',
      },
      {
        question: 'WebP dosyasını indirmeden önce şeffaflığın korunduğunu nasıl doğrularım?',
        answer:
          'Sonuç küçük resmi, şeffaf bölgeleri bir kare deseni üzerinde gösterir ve Karşılaştır düğmesi, kenarların yumuşak bir şekilde kaynaştığını doğrulamak için resim üzerinde sürükleyebileceğiniz bölünmüş bir görüntüleyici açar. Arka plan kareler yerine katı görünüyorsa orijinal PNG dosyasında şeffaflık yoktu.',
      },
      {
        question: 'PNG dosyasını WebP formatına dönüştürdükten sonra yeniden yüklemeden kalite ayarlanabilir mi?',
        answer:
          'Evet. İstediğiniz zaman kalite kaydırıcısını yeni bir değere taşıyın ve yüklenen her dosyayı yeni ayarla yeniden oluşturmak için Tümünü Yeniden Dönüştür düğmesine basın. Yüklenen PNG dosyalarınız kuyrukta kalır; bu nedenle onları yeniden sürüklemeniz gerekmez.',
      },
      {
        question: 'Bir web sitesinin kahraman resimleri için WebP, PNG formatından daha mı iyi?',
        answer:
          'Fotoğrafik veya karmaşık kahraman resimleri için evet: yüzde 85 kalitede WebP, PNG ile aynı görünür ve çok daha hızlı yüklenir. PNG, minik düz simgeler, piksel sanatı veya matematiksel olarak kayıpsız kalitenin katı bir gereklilik olduğu herhangi bir öğe için hâlâ kazanır.',
      },
      {
        question: 'PNG WebP çevirici telefonunuzun tarayıcısında çalışıyor mu?',
        answer:
          'Evet. Kalite kaydırıcısı, toplu kuyruk, karşılaştırma görüntüleyici ve ZIP indirme, uygulama yüklemeden iOS Safari ve Android Chrome üzerinde çalışır. Büyük toplu işler telefon işlemcilerinde biraz daha uzun sürer.',
      },
      {
        question: 'PNG dosyalarından dönüştürülen WebP dosyaları hangi dosya adını alıyor?',
        answer:
          'Tekil indirmeler, .webp uzantısıyla temizlenmiş orijinal dosya adını korur; böylece logo.png, logo.webp olur. İki veya daha fazla dosyadan oluşan toplu işler, compressmypic_png_to_webp.zip içinde gruplanarak dışa aktarılır.',
      },
      {
        question: 'Metin içeren bir PNG ekran görüntüsünü harfler bulanıklaşmadan WebP formatına dönüştürebilir miyim?',
        answer:
          'Evet, yüzde 85 ile yüzde 90 kalitede ekran görüntülerindeki metin net kalır; çünkü WebP, yüksek kontrastlı kenarları iyi korur. Yüzde 70 altına düşmek küçük harfleri yumuşatabilir; bu nedenle Karşılaştır görüntüleyiciyi inceleyin ve metin bulanık görünüyorsa kaliteyi yükseltin.',
      },
      {
        question: 'Bu araç PNG dosyasının ICC renk profilini WebP dosyasında koruyor mu?',
        answer:
          'Hayır. Canvas üzerinde yeniden kodlama, gömülü ICC profilini kaldırır ve renkleri tarayıcıların web gösterimi için kullandığı standart sRGB alanında işler. Çoğu ekran grafiği için görünür fark önemsizdir; ancak baskı açısından kritik renk çalışması orijinal formatında kalmalıdır.',
      },
      {
        question: 'PNG JPG yerine PNG WebP seçmek ne zaman daha uygun?',
        answer:
          'Resmin şeffaf kalması veya bir web sitesinde hızlı yüklenmesi gerektiğinde her zaman WebP seçin. Hedef (bir e-posta istemcisi, Office belgesi veya eski yükleme portalı) WebP dosyasını açamıyorsa ve katı bir arka plan karşılığında şeffaflıktan vazgeçmeye hazırsanız yalnızca JPG seçin.',
      },
      {
        question: 'Geçmeli bir PNG dosyası burada WebP formatına dönüştürülebilir mi?',
        answer:
          'Evet. Tarayıcınızın yerel resim çözümleyicisi, Canvas üzerine boyamadan önce hem standart hem de geçmeli (Adam7) PNG akışlarını temiz bir şekilde okur; bu nedenle geçmeli dosyalar normal PNG dosyalarıyla tam olarak aynı şekilde dönüştürülür.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'WebP PNG Çevirme',
    shortDescription: 'WebP resimlerini şeffaflığı bozulmadan kayıpsız PNG formatına dönüştürün.',
    category: 'convert',
    seoTitle: 'WebP PNG Çevirme Ücretsiz – Kayıpsız Dönüştürme',
    seoDescription:
      'WebP PNG çevirme ücretsiz ve çevrimiçi, tarayıcınızda. Şeffaflık korunur, boyutlar değişmez ve toplu işler ZIP olarak dışa aktarılır.',
    h1: 'WebP PNG Çevirici Ücretsiz',
    subtitle:
      'WebP indirmelerini tamamen tarayıcınızda ücretsiz WebP PNG çeviricimizle evrensel kayıpsız PNG dosyalarına dönüştürün. Uygulaması veya matbaası WebP dosyalarını reddeden tasarımcılar, düzenleyiciler ve herkes için tasarlandı; her biri 25 MB boyutuna kadar WebP dosyalarını kalite kaybı olmadan ve tam alfa şeffaflığıyla dönüştürür; ayrıca toplu işleme ve ZIP indirmeleri sunar.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar WebP dosyaları bırakın',
        description:
          'İndirmelerden, sohbetlerden veya web sitelerinden bir veya daha fazla .webp resmini yükleme alanına yükleyin.',
      },
      {
        title: 'Kayıpsız PNG dönüştürmeyi bekleyin',
        description:
          'Her WebP dosyası şeffaf bir tuval üzerine çizilir ve otomatik olarak kayıpsız PNG olarak dışa aktarılır: PNG kayıpsız olduğu için kalite kaydırıcısı yoktur.',
      },
      {
        title: 'Önizlemede şeffaflığı gözden geçirin',
        description:
          'Şeffaf bölgeler bir kare arka plan üzerinde gösterilir ve her kart orijinal ile dönüştürülen dosya boyutlarını listeler.',
      },
      {
        title: 'PNG dosyasını orijinal WebP ile karşılaştırın',
        description:
          'Kenarları, metni ve şeffaflığı bölünmüş görüntüleyicide incelemek için herhangi bir kartta Karşılaştır seçeneğine basın.',
      },
      {
        title: 'PNG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .png dosyalarını kaydedin ya da toplu işi tek tıkla compressmypic_webp_to_png.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: 'Alfa şeffaflığını bozulmadan korur',
        description:
          'Şeffaf WebP logoları ve çıkartmaları, ortaya çıkan PNG dosyasında şeffaf kalır.',
      },
      {
        title: 'Düzenleyicilerle evrensel uyumluluk',
        description:
          'Dönüştürülen PNG dosyalarını WebP uyumluluk sorunu olmadan herhangi bir tasarım aracında, sunumda veya yükleme portalında açın.',
      },
      {
        title: 'Toplu kuyruk desteği',
        description:
          'Birden fazla WebP indirmesini tek tıkla PNG formatına dönüştürün ve tek bir ZIP olarak dışa aktarın.',
      },
      {
        title: 'Cihazda gizli işleme',
        description:
          'Dosyalar asla cihazınızdan çıkmaz: dönüştürme tarayıcının yerel belleğinde gerçekleşir.',
      },
    ],
    faqs: [
      {
        question: 'WebP dosyasını PNG formatına dönüştürmek gerçekten kayıpsız mı?',
        answer:
          'Evet. PNG, çözülen her pikseli tarayıcının WebP dosyasından okuduğu gibi tam olarak saklar; ek kayıplı sıkıştırma kaybı olmaz. Tek kalite sınırı, orijinal WebP dosyasının kendisinin zaten uyguladığı sıkıştırmadır: bu araç asla ikinci tur kayıplı hasar eklemez.',
      },
      {
        question: 'Şeffaf bir WebP logosu PNG olarak şeffaf kalır mı?',
        answer:
          'Evet. Bütün alfa kanalı aktarılır; böylece şeffaf pikseller şeffaf kalır ve yarı şeffaf kenarlar hassas karışımlarını korur. Sonuç küçük resmi, indirmeden önce bunu doğrulamanız için şeffaflığı bir kare deseni üzerinde gösterir.',
      },
      {
        question: 'Ortaya çıkan PNG dosyası neden yüklediğim WebP dosyasından daha ağır?',
        answer:
          'PNG, kayıpsız DEFLATE sıkıştırma kullanırken WebP çok daha agresif modern sıkıştırma kullanır; bu nedenle aynı pikseller PNG olarak daha fazla bayta ihtiyaç duyar. Daha büyük dosya, evrensel uyumluluk ve sıfır ek kalite kaybı için dürüst bir bedeldir.',
      },
      {
        question: 'Animasyonlu bir WebP dosyasını burada PNG formatına dönüştürebilir miyim?',
        answer:
          'Animasyonlu bir WebP dosyası ilk karesinin sabit bir PNG dosyası olarak dışa aktarılır; çünkü PNG hareket saklayamaz. Bu sabit kare, küçük resimler, belgeler ve çıkartmalar için iyi çalışır; hareketli sürüm için orijinal WebP dosyasını koruyun.',
      },
      {
        question: 'PNG dosyası, WebP dosyasıyla aynı genişlik ve yüksekliği koruyor mu?',
        answer:
          'Evet. Dönüştürülen her .png dosyası, orijinal WebP dosyasının tam piksel boyutlarının yüzde 100 boyutunu korur; bu nedenle hiçbir şey kırpılmaz veya boyutlandırılmaz. Daha küçük boyutlara da ihtiyacınız varsa ardından Resim Boyutlandırıcı aracını kullanın.',
      },
      {
        question: 'WebP dosyaları PNG formatına dönüştürülürken bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Dönüştürme, kendi tarayıcı sekmenizde HTML5 Canvas üzerinde çalışır; bu nedenle resimleriniz asla bir sunucuya gönderilmez, saklanmaz veya başka kimse tarafından görülmez. Sekmeyi kapattığınızda tarayıcı belleğinden silinirler.',
      },
      {
        question: 'Bir WebP resim grubunu aynı anda PNG formatına dönüştürebilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar birden fazla .webp dosyasını kuyruğa bırakın ve hepsini birlikte compressmypic_webp_to_png.zip olarak indirin. Her dosya ayrı ayrı dönüştürülür; bu nedenle bozuk bir dosya diğerlerini asla engellemez.',
      },
      {
        question: 'PNG çeviricide tek bir WebP dosyası ne kadar büyük olabilir?',
        answer:
          'Her WebP dosyası 25 MB boyutuna kadar olabilir; bu da yüksek çözünürlüklü indirmeleri ve büyük ekran görüntülerini kapsar. Dönüştürme cihazınızda gerçekleştiği için büyük dosyalar, yükleme bekleme süresi olmadan yerel işlemci hızınızda işlenir.',
      },
      {
        question: 'WebP PNG için bir kalite kaydırıcısı var mı?',
        answer:
          'Hayır ve gerek de yok: PNG kayıpsız bir formattır; bu nedenle ayarlanacak kalite ile boyut arasında bir denge yoktur. Araç, kaydırıcı yerine Kayıpsız PNG Kodlama notu gösterir ve her piksel tam olarak korunur.',
      },
      {
        question: 'WebP dosyalarından dönüştürülen PNG dosyalarını nerede kullanabilirim?',
        answer:
          'PNG kabul edilen her yerde: Photoshop, Figma, Canva, PowerPoint, Word, matbaalar ve WebP dosyalarını reddeden yükleme portalları. PNG, evrensel olarak düzenlenebilir en yaygın raster resim formatıdır ve bu dönüştürmenin tam nedeni budur.',
      },
      {
        question: 'WebP PNG çevirici EXIF gibi meta verileri koruyor mu?',
        answer:
          'Hayır. Pikselleri HTML5 Canvas üzerine çizmek, gömülü EXIF, XMP ve ICC profil verilerini kaldırır; bu nedenle ortaya çıkan PNG dosyaları hafif olur ve gizli konum veya kamera verisi taşımaz.',
      },
      {
        question: 'PNG dosyasını indirmeden önce şeffaflığın sağ çıktığını nasıl doğrularım?',
        answer:
          'Sonuç küçük resmi, şeffaf bölgeleri bir kare arka plan üzerinde gösterir ve Karşılaştır düğmesi, kenarların yumuşak bir şekilde kaynaştığını doğrulamak için resim üzerinde sürükleyebileceğiniz bölünmüş bir görüntüleyici açar. Arka plan katı görünüyorsa orijinal WebP dosyasında şeffaflık yoktu.',
      },
      {
        question: 'Metin içeren WebP ekran görüntülerini kalite kaybetmeden PNG formatına dönüştürebilir miyim?',
        answer:
          'Evet. PNG kayıpsız olduğu için ekran görüntülerindeki metin, arayüz etiketleri ve ince çizgiler piksel açısından mükemmel kalır; herhangi bir JPG yeniden kodlamasından daha nettir. Bu, bir ekran görüntüsünün daha sonra düzenlenmesi veya yazdırılması gerektiğinde doğru seçim yapar.',
      },
      {
        question: 'İndirilen PNG dosyası hangi dosya adını koruyacak?',
        answer:
          'Tekil indirmeler, .png uzantısıyla temizlenmiş orijinal dosya adını korur; böylece sticker.webp, sticker.png olur. İki veya daha fazla dosyadan oluşan toplu işler, compressmypic_webp_to_png.zip içinde gruplanarak dışa aktarılır.',
      },
      {
        question: 'WebP dosyasını telefonumdan PNG formatına dönüştürebilir miyim?',
        answer:
          'Evet. Yükleme alanı, toplu kuyruk, karşılaştırma görüntüleyici ve ZIP indirme, uygulama yüklemeden iOS Safari ve Android Chrome üzerinde çalışır. Büyük toplu işler telefon işlemcilerinde biraz daha uzun sürer.',
      },
      {
        question: 'WebP JPG yerine WebP PNG seçmek ne zaman daha uygun?',
        answer:
          'Şeffaflığı korumanız veya düzenleme, tasarım veya baskı için kayıpsız ve piksel açısından mükemmel kaliteye ihtiyacınız olduğunda PNG seçin. En küçük ve her şeyle uyumlu dosyaya ihtiyacınız olduğunda ve katı bir arka plan ile hafif sıkıştırma kaybıyla yaşayabildiğinizde JPG seçin.',
      },
      {
        question: 'Uzantısız bir WebP dosyası dönüştürülebilir mi?',
        answer:
          'Doğrudan değil: bu sayfa girdileri .webp uzantısı ve WebP MIME türüyle filtreler; bu nedenle önce dosyanın adını .webp ile bitecek şekilde değiştirin. Dosya aslında site tarafından yanlış etiketlenmiş bir JPG veya PNG ise ilgili çeviriciyi kullanın.',
      },
      {
        question: 'Bir tasarımcı neden WebP yerine PNG dosyasına ihtiyaç duyar?',
        answer:
          'Tasarım araçları, katmanlı düzenleyiciler ve baskı iş akışları genellikle WebP dosyalarının süreçlerinde sunamadığı maskeler, seçimler ve şeffaf katmanlar için PNG dosyalarına ihtiyaç duyar. PNG ayrıca her gelecek düzenlemenin kayıplı bir çözümlemeden değil tam piksellerden başlamasını sağlar.',
      },
      {
        question: 'Araç kayıpsız kodlamalı WebP dosyalarını kabul ediyor mu?',
        answer:
          'Evet. Kayıpsız WebP dosyaları tarayıcıda temiz bir şekilde çözülür ve her piksel korunarak kayıpsız PNG olarak yeniden kodlanır. Orijinal WebP kayıplı veya kayıpsız olsun, PNG çıktısı ek kalite kaybı eklemez.',
      },
      {
        question: 'Bir WebP dosyası bozuksa veya gerçek bir WebP değilse ne olur?',
        answer:
          'O dosya, çözülemediğini açıklayan dosya başına net bir hata mesajı gösterirken toplu işinizdeki diğer dosyalar normal şekilde dönüştürülür. Orijinal WebP dosyasını kaynağından yeniden indirmek, kesilmiş veya yanlış etiketlenmiş bir dosyayı genellikle düzeltir.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'SVG PNG Çevirme',
    shortDescription: 'SVG vektör grafiklerini şeffaflıkla 1× ile 4× arasında net PNG dosyalarına rasterleştirin.',
    category: 'convert',
    seoTitle: 'SVG PNG Çevirme Ücretsiz – 1x ile 4x Arasında',
    seoDescription:
      'SVG vektörlerini şeffaf PNG formatına ücretsiz ve çevrimiçi olarak tarayıcınızda dönüştürün. 1x, 2x, 3x veya 4x net PNG dosyaları dışa aktarın; harici öğelerle ilgili net sınırlar.',
    h1: 'SVG PNG Çevirici Ücretsiz',
    subtitle:
      'SVG logolarını, simgeleri ve illüstrasyonları tamamen tarayıcınızda ücretsiz SVG PNG çeviricimizle şeffaf ve net PNG dosyalarına rasterleştirin. Sunumlar, belgeler ve uygulama mağazaları için yüksek çözünürlüklü dışa aktarmalara ihtiyaç duyan tasarımcılar ve geliştiriciler için tasarlandı; kendi kendine yeten SVG dosyalarını 1×, 2×, 3× veya 4× ölçekte (8000 px boyutuna kadar) işler; toplu işleme ve ZIP indirmeleri sunar.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar SVG dosyaları bırakın',
        description:
          'Şekiller, yollar, degrade veya gömülü stiller içeren bir veya daha fazla .svg vektör dosyası yükleyin.',
      },
      {
        title: 'Bir rasterleştirme dışa aktarma ölçeği seçin (1×–4×)',
        description:
          'SVG dosyasının iç boyutu için 1× seçin ya da Retina ve yüksek çözünürlüklü net PNG dışa aktarmaları için 2×–4× seçin.',
      },
      {
        title: 'Ölçeği değiştirdikten sonra Tümünü Yeniden Dönüştür düğmesine basın',
        description:
          'Ölçek değişiklikleri yeniden dönüştürmede uygulanır; böylece önizleme ve indirme, seçtiğiniz boyutla eşleşir.',
      },
      {
        title: 'Harici öğelerle ilgili notu gözden geçirin',
        description:
          'Bir SVG içindeki harici resimler, stil sayfaları ve web yazı tipleri tarayıcı tuval güvenliği tarafından engellenir ve PNG dosyasında görünmez.',
      },
      {
        title: 'Rasterleştirilmiş PNG dosyasını karşılaştırın',
        description:
          'Net kenarları ve şeffaflığı bölünmüş görüntüleyicide incelemek için herhangi bir kartta Karşılaştır seçeneğine basın.',
      },
      {
        title: 'PNG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .png dosyalarını kaydedin ya da toplu işi tek tıkla compressmypic_svg_to_png.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: '1×, 2×, 3× ve 4× yüksek çözünürlüklü dışa aktarma',
        description:
          '24 px küçük simgeleri veya 100 px logoları rasterleştirmeden önce 4× çözünürlüğe kadar temiz bir şekilde ölçeklendirin.',
      },
      {
        title: 'Şeffaf arka plan korunur',
        description:
          'Sunumlar, web başlıkları ve tasarım portföyleri için hazır alfa kanallı net PNG dosyaları dışa aktarır.',
      },
      {
        title: 'Bağımsız tuvalin dürüst kapsamı',
        description:
          'Gömülü SVG vektör şekillerinin ve stillerinin temiz bir şekilde işlendiğini açıkça belgeler; SVG içindeki harici resim URL adresleri veya harici web yazı tipleri tarayıcının Canvas yalıtımı tarafından engellenebilir.',
      },
      {
        title: 'Toplu SVG rasterleştirme',
        description:
          'Bütün simge paketlerini tek geçişte PNG formatına dönüştürün ve bir ZIP indirin.',
      },
    ],
    faqs: [
      {
        question: 'SVG dosyam bağlantılı bir fotoğraf kullanıyor: neden PNG dosyasında görünmüyor?',
        answer:
          'Güvenlik nedeniyle tarayıcılar, HTML5 Canvas üzerinde işlenen SVG dosyalarını yalıtır ve harici <image> URL adreslerinin getirilmesini engeller; bu nedenle web üzerinden bağlantılı hiçbir fotoğraf rasterleştirme sırasında yüklenemez. Resmi doğrudan SVG dosyasına gömün veya gömülü vektör şekilleriyle değiştirin; PNG dosyası tam olarak işlenir.',
      },
      {
        question: 'Bir SVG içinde PNG formatına dışa aktarmak için bir web yazı tipi kullanabilir miyim?',
        answer:
          'URL ile başvurulan harici web yazı tipleri aynı Canvas yalıtımı tarafından engellenir; bu nedenle uzak bir yazı tipindeki metin bir sistem yazı tipine döner veya kaybolur. Sistem yazı tiplerini kullanın, metni düzenleyicinizde hatlara dönüştürün ya da yazı tipi verilerini doğrudan SVG dosyasına gömün.',
      },
      {
        question: '24 px boyutundaki bir simgeyi 96 px net bir PNG dosyasına dönüştürmek için hangi ölçeği seçmeliyim?',
        answer:
          'Rasterleştirme Dışa Aktarma Ölçeği bölümünde 4× seçin ve Tümünü Yeniden Dönüştür düğmesine basın: 24 px boyutundaki bir simge, vektörler pikselleri esnetmek yerine daha büyük boyutta yeniden işlendiği için 96 px net bir PNG dosyasına dönüşür. 48 px dışa aktarma için 2× kullanın ve çıktının en uzun kenarda 8000 px ile sınırlı olduğunu unutmayın.',
      },
      {
        question: 'Bir SVG dosyasından üretilebilecek en büyük PNG nedir?',
        answer:
          'Dışa aktarma ölçeği en uzun kenarda 8000 px ile sınırlıdır; bu nedenle 4× ölçekte çok büyük bir SVG bu sınırda durur. Çoğu simge ve logo için sınır hiç önemli değildir: 4× ölçekte 100 px boyutundaki bir logo yalnızca 400 px olur; sınırın çok altındadır.',
      },
      {
        question: 'SVG PNG çevirici şeffaf arka planı koruyor mu?',
        answer:
          'Evet. SVG dosyasının kendisi bir arka plan dikdörtgeni boyamadıkça dışa aktarılan PNG, sunumlar, başlıklar ve tasarım portföyleri için hazır temiz alfa şeffaflıklı bir arka plan korur. Önizleme, şeffaflığı bir kare deseni üzerinde gösterir.',
      },
      {
        question: 'SVG dosyaları bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Rasterleştirme, kendi tarayıcı sekmenizde HTML5 Canvas üzerinde çalışır; bu nedenle vektör dosyalarınız asla bilgisayarınızdan çıkmaz. Sekmeyi kapattığınızda tarayıcı belleğinden silinirler.',
      },
      {
        question: 'Bütün bir SVG simge paketini aynı anda PNG formatına dönüştürebilir miyim?',
        answer:
          'Evet. Her biri 25 MB boyutuna kadar birden fazla .svg dosyasını kuyruğa bırakın, bütün toplu iş için tek bir ölçek seçin ve hepsini birlikte compressmypic_svg_to_png.zip olarak indirin. Her simge ayrı ayrı rasterleştirilir.',
      },
      {
        question: 'Bir SVG dosyasını rasterleştirilemez ve hatalı yapan nedir?',
        answer:
          'En yaygın neden geçersiz XML dosyasıdır: kapatılmamış etiketler, bozuk biçimlendirilmiş özellikler veya aslında SVG işaretlemesi olmayan bir dosya. Dosyayı bir metin veya vektör düzenleyicide açın, sözdizimi hatasını düzeltin ve yeniden deneyin: hata mesajı dosya başına görünür; böylece diğer SVG dosyaları yine de dönüştürülür.',
      },
      {
        question: 'Bir SVG içindeki degrade ve opaklık PNG dosyasında doğru işleniyor mu?',
        answer:
          'Evet. Gömülü doğrusal ve radyal degradeler, opaklık özellikleri ve SVG içinde tanımlanan stilli dolgular Canvas üzerinde temiz bir şekilde işlenir. Yalnızca dosya dışından getirilen öğeler engellenir: harici resimler, stil sayfaları ve yazı tipleri.',
      },
      {
        question: 'SVG dosyamdaki metin net PNG metni olarak dışa aktarılır mı?',
        answer:
          'Evet, metin cihazınızda yüklü sistem yazı tiplerini kullandığında herhangi bir ölçekte net bir şekilde rasterleştirilir. Harici bir web yazı tipindeki metin varsayılan bir yazı tipine döner; bu nedenle garantili sonuçlar için metni Illustrator, Figma veya Inkscape üzerinde hatlara dönüştürün.',
      },
      {
        question: 'Harici bir CSS dosyasına başvuran bir SVG dosyasını dönüştürebilir miyim?',
        answer:
          'Hayır. Harici stil sayfaları tarayıcı tuval güvenliği tarafından engellenir; bu nedenle bağlantılı bir .css dosyasında tanımlanan sınıflar uygulanmaz ve şekiller stilsiz işlenebilir. Stilleri stil özellikleriyle veya SVG dosyasının kendi içindeki bir <style> bloğuyla gömülü olarak taşıyın.',
      },
      {
        question: 'SVG çeviriciden çıkan PNG kayıpsız mı?',
        answer:
          'Evet. Rasterleştirilmiş pikseller kayıpsız bir PNG olarak kaydedilir; bu nedenle kenarlar, metin ve düz renkler dışa aktarılan boyutta piksel açısından mükemmel kalır. Daha fazla detaya ihtiyacınız varsa daha büyük bir ölçekte yeniden dışa aktarın: PNG kayıplı bir adım olmadığı için kalite kaydırıcısı yoktur.',
      },
      {
        question: '1× ölçekte PNG boyutu nedir?',
        answer:
          '1× ölçekte PNG, SVG dosyasının genişlik ve yükseklik özelliklerine veya viewBox değerine göre iç boyutlarıyla eşleşir. 24×24 boyutundaki bir simge 24×24 piksel olarak dışa aktarılırken iç boyutu olmayan bir SVG, viewBox boyutlarını kullanır.',
      },
      {
        question: 'SVG dosyalarını telefonumda dönüştürebilir miyim?',
        answer:
          'Evet. Yükleme alanı, ölçek seçici, karşılaştırma görüntüleyici ve ZIP indirme, uygulama yüklemeden iOS Safari ve Android Chrome üzerinde çalışır. Büyük simge paketleri telefon işlemcilerinde biraz daha uzun sürer.',
      },
      {
        question: 'SVG dosyasından dışa aktarılan PNG hangi dosya adıyla indiriliyor?',
        answer:
          'Tekil indirmeler, .png uzantısıyla temizlenmiş orijinal dosya adını korur; böylece logo.svg, logo.png olur. İki veya daha fazla dosyadan oluşan toplu işler, compressmypic_svg_to_png.zip içinde gruplanarak dışa aktarılır.',
      },
      {
        question: 'Çevirici SVG animasyonlarını (SMIL veya CSS) kabul ediyor mu?',
        answer:
          'Hayır. Rasterleştirme, SVG dosyasının tek bir statik karesini yakalar; bu nedenle SMIL ve CSS animasyonları PNG dosyasına geçmez. Animasyonlu bir sonuç için animasyonu tasarım aracınızdan video veya GIF olarak dışa aktarın.',
      },
      {
        question: 'Veri URI olarak gömülü bir resme sahip bir SVG dosyasını rasterleştirebilir miyim?',
        answer:
          'Genellikle evet. Base64 veri URI olarak doğrudan dosyaya gömülü resimler SVG dosyasının kendisinin parçasıdır; bu nedenle dışarıdan hiçbir şey getirilmez ve genellikle işlenirler. Engellenenler, http URL adresleriyle bağlantılı resimlerdir; bunlar Canvas güvenliği tarafından engellenir.',
      },
      {
        question: 'SVG dosyasını korumak yerine SVG PNG kullanmak ne zaman daha uygun?',
        answer:
          'Hedefin raster bir resme ihtiyacı olduğunda PNG kullanın: PowerPoint, Word, sosyal yayınlar, uygulama mağazası ekran görüntüleri veya SVG dosyalarını açamayan herhangi bir araç. Grafik, bir web sitesinde sonsuz ölçeklenebilir kalması gerektiğinde SVG dosyasını koruyun.',
      },
      {
        question: 'SVG PNG dönüştürme renkleri değiştiriyor mu?',
        answer:
          'Renkler, SVG dosyasında tanımlandığı gibi işlenir ve çıktı standart bir sRGB PNG dosyasıdır. Canvas, gömülü ICC profillerini kaldırır; bu nedenle baskı açısından kritik renk eşleştirme orijinal vektör dosyasında kalmalıdır; ekranlar için görünür fark önemsizdir.',
      },
      {
        question: 'Kabul edilen en büyük SVG dosya boyutu nedir?',
        answer:
          'Her SVG dosyası 25 MB boyutuna kadar olabilir; bu da binlerce yola sahip devasa resimli dosyaları bile kapsar. Çok karmaşık SVG dosyaları cihazınızda rasterleştirilmek için yalnızca bir veya iki saniye daha uzun sürer.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'AVIF JPG Çevirme',
    shortDescription: 'AVIF resimlerini tarayıcınızın çözümleyicisiyle evrensel JPG formatına dönüştürün.',
    category: 'convert',
    seoTitle: 'AVIF JPG Çevirme Ücretsiz – Evrensel Format',
    seoDescription:
      'AVIF JPG çevirme ücretsiz ve çevrimiçi, tarayıcınızda. Yerel AVIF çözümleme, şeffaflık için mat renk seçici, kalite ve ZIP ile.',
    h1: 'AVIF JPG Çevirici Ücretsiz',
    subtitle:
      'Modern .avif resimlerini tarayıcınızın yerleşik AVIF çözümleyicisini kullanan ücretsiz AVIF JPG çeviricimizle her şeyle uyumlu .jpg dosyalarına dönüştürün. Düzenleyicisinin, ofis uygulamasının veya yükleme formunun açamadığı bir AVIF dosyası indiren kişiler için tasarlandı; her biri 25 MB boyutuna kadar AVIF dosyalarını varsayılan yüzde 88 kaliteyle dönüştürür; mat renk seçici ve toplu ZIP dışa aktarma sunar; hiçbir şey yüklenmez.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar AVIF resimleri bırakın',
        description:
          'Yerel AVIF çözümlemeli modern bir tarayıcıda .avif dosyaları yükleyin: Chrome, Edge, Firefox veya Safari.',
      },
      {
        title: 'Şeffaf bölgeler için bir mat renk seçin',
        description:
          'Beyaz (#ffffff), Siyah (#000000), Açık Gri (#f8fafc) veya herhangi bir özel onaltılık renk seçin; çünkü JPG şeffaflığı saklayamaz.',
      },
      {
        title: 'JPG çıktı kalitesini ayarlayın (yüzde 20–100)',
        description:
          'Net varsayılan yüzde 88 değerini koruyun ya da minik dosyalar için yüzde 20 seviyesine, en yüksek detay için yüzde 100 seviyesine sürükleyin; ardından Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        title: 'JPG dosyasını orijinal AVIF ile karşılaştırın',
        description:
          'Kaydetmeden önce detayı, rengi ve kenarları bölünmüş görüntüleyicide gözden geçirmek için herhangi bir kartta Karşılaştır seçeneğine basın.',
      },
      {
        title: 'JPG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .jpg dosyalarını kaydedin ya da toplu işi tek tıkla compressmypic_avif_to_jpg.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: 'Tarayıcının yerel AVIF çözümlemesi',
        description:
          'Modern tarayıcınızın donanım veya yazılım AVIF çözümleyicisini yerel olarak kullanır; sunucuya gidiş yapılmaz.',
      },
      {
        title: 'Dürüst format uyumluluğu',
        description:
          'Yalnızca AVIF dosyalarını evrensel JPG formatına çözmek için tasarlandı (diğer formatlar için JPG, PNG ve WebP araçlarını kullanın; AVIF kodlama veya AVIF çıktısı sunulmaz).',
      },
      {
        title: 'Şeffaflık için mat renk seçici',
        description:
          'Şeffaf AVIF bölgeleri beyaz arka plan veya seçtiğiniz özel onaltılık renk üzerine temiz bir şekilde kaynaşır.',
      },
      {
        title: 'Toplu ZIP dışa aktarma',
        description:
          'Birden fazla AVIF indirmesini tek bir tarayıcı oturumunda JPG formatına dönüştürün.',
      },
    ],
    faqs: [
      {
        question: 'AVIF nedir ve bazı uygulamalar neden onu açamıyor?',
        answer:
          'AVIF, JPG formatından çok daha küçük boyutlarda fotoğraflar saklayan AV1 video sıkıştırmasına dayalı modern bir resim formatıdır. Daha yeni olduğu için birçok eski düzenleyici, ofis paketi, yazıcı ve yükleme portalı AVIF çözümleyici eklemedi; bu nedenle JPG formatına dönüştürmek, resmin her yerde kullanılabilir hâle gelmesinin en hızlı yoludur.',
      },
      {
        question: 'Hangi tarayıcılar AVIF dosyalarını JPG formatına dönüştürmek için çözümleyebilir?',
        answer:
          'Modern Chrome, Edge, Firefox ve Safari tarayıcıları AVIF dosyalarını tarayıcıda yerel olarak çözer ve bu araç bunu kullanır. Sayfayı çok eski bir tarayıcıda açarsanız her dosya dönüştürülmek yerine net bir hata gösterir; tarayıcıyı güncellemek sorunu çözer.',
      },
      {
        question: 'Tarayıcım bir AVIF dosyasını çözümleyemezse ne olur?',
        answer:
          'Dosya, tarayıcınızın onu çözümleyemediğini açıklayan dosya başına açık bir hata mesajı gösterirken toplu işinizdeki diğer dosyalar normal şekilde dönüştürülür. Güncel bir Chrome, Firefox, Edge veya Safari sürümüne geçmek neredeyse her durumda bunu çözer.',
      },
      {
        question: 'AVIF dosyasını JPG formatına dönüştürürken kalite kaybediliyor mu?',
        answer:
          'JPG, pikselleri kayıplı sıkıştırmayla yeniden kodladığı için bir miktar kayıp kaçınılmazdır; AVIF ise aynı kalitede çok daha verimlidir. Varsayılan yüzde 88 kalitede fark, fotoğraflar için neredeyse görünmezdir; yalnızca ince dokuların aşırı incelenmesi bir miktar yumuşama ortaya çıkarır.',
      },
      {
        question: 'Bir AVIF dosyasındaki şeffaf bölgeler JPG dosyasında siyaha döner mi?',
        answer:
          'Hayır. Şeffaf bölgeler, seçtiğiniz mat renkle doldurulur; varsayılan beyazdır; böylece logolar ve kırpıntılar siyah bir kutu yerine temiz katı bir arka planla kalır. Dönüştürmeden önce Siyah, Açık Gri veya herhangi bir özel onaltılık renk seçin.',
      },
      {
        question: 'Şeffaflıklı AVIF resimlerini JPG formatına temiz bir şekilde dönüştürebilir miyim?',
        answer:
          'Evet. Mat renk seçici, yarı şeffaf kenarları seçilen arka plan üzerine yumuşak bir şekilde kaynaştırır; böylece yumuşak gölgeler ve yumuşatılmış eğriler sert hatlara kırpılmak yerine doğal görünür. Karışımı doğrulamak için Karşılaştır görüntüleyiciyi inceleyin.',
      },
      {
        question: 'AVIF dosyaları bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Çözümleme ve yeniden kodlama, tarayıcınızın yerel AVIF çözümleyicisi ve HTML5 Canvas ile yerel olarak gerçekleşir; bu nedenle resimleriniz asla cihazınızdan çıkmaz. Sekmeyi kapattığınızda tarayıcı belleğinden silinirler.',
      },
      {
        question: 'Birden fazla AVIF indirmesini tek seferde JPG formatına nasıl dönüştürürüm?',
        answer:
          'Her biri 25 MB boyutuna kadar birden fazla .avif dosyasını kuyruğa bırakın, bütün toplu iş için tek bir mat renk ve tek bir kalite seçin ve hepsini birlikte compressmypic_avif_to_jpg.zip olarak indirin. Her dosya ayrı ayrı dönüştürülür.',
      },
      {
        question: 'Kabul edilen en büyük AVIF dosyası nedir?',
        answer:
          'Her AVIF dosyası 25 MB boyutuna kadar olabilir; bu da yüksek çözünürlüklü indirmeleri ve kamera çekimlerini kapsar. Çözümleme cihazınızda çalıştığı için büyük dosyalar, yükleme bekleme süresi olmadan yerel işlemci hızınızda işlenir.',
      },
      {
        question: 'Bir JPG dosyasını AVIF formatına dönüştürmenin bir yolu var mı?',
        answer:
          'Hayır. HTML5 Canvas, tüm tarayıcılarda evrensel olarak AVIF kodlayamaz; bu nedenle bu site yalnızca AVIF dosyalarını güvenilir JPG, PNG ve WebP çıktılarına çözer. AVIF çıktısı için özel bir masaüstü kodlayıcıya ihtiyacınız olur.',
      },
      {
        question: 'JPG dosyası, AVIF dosyasıyla aynı piksel boyutlarını koruyor mu?',
        answer:
          'Evet. Dönüştürülen her .jpg dosyası, orijinal AVIF dosyasının tam genişlik ve yüksekliğinin yüzde 100 boyutunu korur; bu nedenle hiçbir şey kırpılmaz veya boyutlandırılmaz. Daha küçük boyutlara da ihtiyacınız varsa ardından Resim Boyutlandırıcı aracını kullanın.',
      },
      {
        question: 'AVIF fotoğrafları için en uygun kalite yüzdesi nedir?',
        answer:
          'Varsayılan yüzde 88, çoğu fotoğraf için idealdir: detay net kalırken dosyalar küçük kalır. Çok ayrıntılı çekimler veya daha sonra düzenlemeyi planladığınız resimler için kaliteyi yüzde 92 veya yüzde 95 seviyesine çıkarın; hızlı paylaşım için yüzde 80 genellikle yeterlidir.',
      },
      {
        question: 'AVIF HDR veya geniş renk gamı fotoğraflar JPG formatına dönüştürüldükten sonra nasıl görünüyor?',
        answer:
          'Standart bir sRGB JPG olarak dışa aktarılır; bu nedenle aşırı HDR parlaklıklar normal görüntü aralığına ayarlanır ve çok doygun geniş renk gamı renkleri sRGB yönünde hafifçe kayar. Günlük fotoğraflar için sonuç doğal görünür; renk açısından kritik çalışmalar için orijinal AVIF dosyasını koruyun.',
      },
      {
        question: 'İndirmeden önce dönüştürülen JPG dosyasını gözden geçirebilir miyim?',
        answer:
          'Evet. Herhangi bir sonuç kartında Karşılaştır seçeneğine basarak bölünmüş görüntüleyiciyi açın ve detayı, rengi ve kenarları orijinal AVIF ile karşılaştırarak incelemek için resim üzerinde sürükleyin. Her kart ayrıca orijinal ve dönüştürülen boyutları gösterir.',
      },
      {
        question: 'İlk sonuç kötü görünüyorsa ayarları düzenleyip yeniden deneyebilir miyim?',
        answer:
          'Evet. İstediğiniz zaman başka bir mat örnek seçin veya kalite kaydırıcısını hareket ettirin ve yeniden yüklemeden yüklenen her dosyayı yeniden oluşturmak için Tümünü Yeniden Dönüştür düğmesine basın. Orijinal AVIF dosyalarınız siz temizleyene kadar kuyrukta kalır.',
      },
      {
        question: 'İndirilen JPG dosyası hangi adla kaydediliyor?',
        answer:
          'Tekil indirmeler, .jpg uzantısıyla temizlenmiş orijinal dosya adını korur; böylece foto.avif, foto.jpg olur. İki veya daha fazla dosyadan oluşan toplu işler, compressmypic_avif_to_jpg.zip içinde gruplanarak dışa aktarılır.',
      },
      {
        question: 'AVIF JPG çevirici telefonunuzun tarayıcısında çalışıyor mu?',
        answer:
          'Evet, yerel AVIF çözümlemeli modern telefon tarayıcılarında; Android üzerinde güncel Chrome ve iOS üzerinde Safari gibi. Mat renk seçici, kalite kaydırıcısı ve ZIP indirme, uygulama yüklemeden çalışır.',
      },
      {
        question: 'AVIF dosyasını PNG yerine JPG formatına dönüştürmek ne zaman daha uygun?',
        answer:
          'E-posta, Office veya yükleme portalları için küçük ve evrensel olarak uyumlu bir dosyaya ihtiyacınız olduğunda JPG seçin. Şeffaflığı korumanız veya düzenleme için kayıpsız ve piksel açısından mükemmel kaliteye ihtiyacınız olduğunda PNG seçin; PNG dosyalarının çok daha büyük olacağını unutmayın.',
      },
      {
        question: 'JPG dosyası bazen AVIF dosyasından neden daha ağır oluyor?',
        answer:
          'AVIF, JPG formatından çok daha verimli sıkıştırır; bu nedenle yüzde 88 kaliteyle JPG olarak yeniden kodlanan küçük bir AVIF dosyası kaynaktan daha ağır bitebilir. Bu normaldir: dosya boyutunu evrensel uyumlulukla değiştiriyorsunuz. Kaliteyi yüzde 75 seviyesine düşürmek genellikle JPG dosyasını yeniden küçültür.',
      },
      {
        question: 'Çevirici, AVIF dosyalarındaki meta verileri kaldırıyor mu?',
        answer:
          'Evet. Pikselleri HTML5 Canvas üzerine çizmek, gömülü EXIF, XMP ve ICC profil verilerini kaldırır; bu nedenle ortaya çıkan JPG dosyaları hafif olur ve gizli konum veya kamera verisi taşımaz.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'BMP JPG Çevirme',
    shortDescription: 'Sıkıştırılmamış devasa BMP bit eşlemlerini kompakt JPG dosyalarına dönüştürün.',
    category: 'convert',
    seoTitle: 'BMP JPG Çevirme Ücretsiz – Daha Küçük Dosyalar',
    seoDescription:
      'BMP JPG çevirme ücretsiz ve çevrimiçi, tarayıcınızda. Sıkıştırılmamış BMP bit eşlemlerini gizli bir şekilde yüzde 85–95 küçültün; kalite ve ZIP ile.',
    h1: 'BMP JPG Çevirici Ücretsiz',
    subtitle:
      'Sıkıştırılmamış devasa Windows BMP bit eşlemlerini doğrudan tarayıcınızda ücretsiz BMP JPG çeviricimizle hafif ve kolay paylaşılan JPG dosyalarına dönüştürün. .bmp ekran görüntüsü klasörlerini, taramaları veya Paint dışa aktarmalarını temizleyen kişiler için tasarlandı; her biri 25 MB boyutuna kadar BMP dosyalarını varsayılan yüzde 88 kaliteyle dönüştürür ve genellikle yüzde 85 ile yüzde 95 arasında küçültür; toplu işleme ve ZIP indirmeleri sunar.',
    howToSteps: [
      {
        title: 'Her biri 25 MB boyutuna kadar BMP bit eşlemleri bırakın',
        description:
          'Windows ekran görüntülerinden, taramalardan veya eski klasörlerden bir veya daha fazla .bmp dosyasını yükleme alanına yükleyin.',
      },
      {
        title: 'JPG çıktı kalitesini ayarlayın (yüzde 20–100)',
        description:
          'Net varsayılan yüzde 88 değerini koruyun ya da minik dosyalar için yüzde 20 seviyesine, en yüksek detay için yüzde 100 seviyesine sürükleyin; ardından Tümünü Yeniden Dönüştür düğmesine basın.',
      },
      {
        title: 'Her kartta boyut tasarrufunu gözden geçirin',
        description:
          'Her sonuç, devasa orijinal BMP boyutunu, kompakt JPG boyutunu ve tasarruf yüzdesini gösterir.',
      },
      {
        title: 'JPG dosyasını orijinal BMP ile karşılaştırın',
        description:
          'Metin ve detayın bölünmüş görüntüleyicide net kaldığını doğrulamak için herhangi bir kartta Karşılaştır seçeneğine basın.',
      },
      {
        title: 'JPG dosyalarını veya Tümünü İndir (ZIP) seçeneğini indirin',
        description:
          'Tekil .jpg dosyalarını kaydedin ya da toplu işi tek tıkla compressmypic_bmp_to_jpg.zip olarak gruplayın.',
      },
    ],
    features: [
      {
        title: 'Tipik yüzde 90 veya üzeri boyut azaltması',
        description:
          'Sıkıştırılmamış BMP bit eşlemleri ham pikselleri saklar; JPG sıkıştırma, e-posta ve web için onları ciddi ölçüde küçültür.',
      },
      {
        title: 'Piksel boyutlarını korur',
        description:
          'Dosya formatını modernleştirirken orijinalin tam genişliğini ve yüksekliğini korur.',
      },
      {
        title: 'Toplu kuyruk ve ZIP indirme',
        description:
          '.bmp ekran görüntüsü klasörlerini veya eski taramaları tek bir hızlı geçişte temizleyin.',
      },
      {
        title: 'Yüzde 100 cihaz içi gizlilik',
        description:
          'Yükleme yok: dönüştürme bilgisayarınızda yerel olarak gerçekleşir.',
      },
    ],
    faqs: [
      {
        question: 'BMP dosyaları JPG dosyalarına kıyasla neden bu kadar devasa?',
        answer:
          'BMP sıkıştırılmamış bir formattır: neredeyse her pikseli neredeyse hiç sıkıştırma olmadan ham renk verisi olarak saklar; bu nedenle tek bir ekran görüntüsü onlarca megabayt olabilir. JPG, gözlerinizin zar zor fark ettiği verileri atan akıllı kayıplı sıkıştırma kullanır; bu nedenle aynı resim ciddi ölçüde küçülür.',
      },
      {
        question: 'BMP dosyasını JPG formatına dönüştürerek ne kadar dosya boyutu tasarruf edebilirim?',
        answer:
          'BMP dosyaları genellikle sıkıştırılmamış olduğu için yüzde 88 kaliteyle JPG formatına dönüştürmek dosya boyutunu rutin olarak yüzde 85 ile yüzde 95 arasında azaltır: 10 MB boyutundaki bir bit eşlem genellikle 500 KB ile 1,5 MB arasında bir JPG dosyasına dönüşür. Fotoğrafik taramalar daha fazla tasarruf ederken düz tek renkli grafikler biraz daha az tasarruf eder.',
      },
      {
        question: 'BMP dosyasını JPG formatına dönüştürmek resmin boyutlarını değiştiriyor mu?',
        answer:
          'Hayır. Dönüştürülen her .jpg dosyası, orijinal BMP dosyasının tam genişlik ve yüksekliğinin yüzde 100 boyutunu korur; bu nedenle hiçbir şey kırpılmaz veya boyutlandırılmaz. Daha küçük boyutlara da ihtiyacınız varsa ardından Resim Boyutlandırıcı aracını kullanın.',
      },
      {
        question: 'BMP ekran görüntülerini okunaklı tutan kalite nedir?',
        answer:
          'Varsayılan yüzde 88, ekran görüntülerindeki metni ve arayüz detaylarını net tutar ve bit eşlem ağırlığının çoğunu kaldırır. İnce harfli taramalar veya küçük yazı tipleri için kaliteyi yüzde 92 veya yüzde 95 seviyesine çıkarın; hızlı paylaşım için yüzde 80 genellikle yeterlidir.',
      },
      {
        question: 'BMP dosyaları bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Dönüştürme, kendi tarayıcı sekmenizde HTML5 Canvas üzerinde çalışır; bu nedenle ekran görüntüleriniz ve taramalarınız asla bilgisayarınızdan çıkmaz. Sekmeyi kapattığınızda tarayıcı belleğinden silinirler.',
      },
      {
        question: 'BMP taramalarıyla dolu bir klasörü toplu olarak nasıl dönüştürürüm?',
        answer:
          'Her biri 25 MB boyutuna kadar birden fazla .bmp dosyasını kuyruğa bırakın, bütün toplu iş için tek bir kalite seçin ve hepsini birlikte compressmypic_bmp_to_jpg.zip olarak indirin. Her dosya ayrı ayrı dönüştürülür.',
      },
      {
        question: 'Kabul edilen en büyük BMP dosyası nedir?',
        answer:
          'Her BMP dosyası 25 MB boyutuna kadar olabilir; bu da büyük ekran görüntülerini ve yüksek çözünürlüklü taramaları kapsar. Dönüştürme cihazınızda çalıştığı için büyük dosyalar, yükleme bekleme süresi olmadan yerel işlemci hızınızda işlenir.',
      },
      {
        question: 'Sayfa yüklendikten sonra BMP dosyalarını internetsiz dönüştürebilir miyim?',
        answer:
          'Evet. Sayfa tarayıcınızda yüklendikten sonra dönüştürme, sunucu çağrısı olmadan tamamen yerel JavaScript ve HTML5 Canvas üzerinde çalışır. İnternete yalnızca sayfanın kendisini yüklemek veya bitmiş dosyaları indirmek için yeniden ihtiyaç duyarsınız.',
      },
      {
        question: 'JPG dosyası herhangi bir programda açılır mı?',
        answer:
          'Evet. Standart temel çizgi RGB .jpg dosyaları, birçok modern uygulamanın ve web sitesinin artık kabul etmediği BMP formatından çok daha geniş bir şekilde neredeyse tüm görüntüleyicilerde, düzenleyicilerde, tarayıcılarda, e-posta istemcilerinde ve yazıcılarda açılır.',
      },
      {
        question: 'Çevirici BMP dosyalarının şeffaflığını koruyor mu?',
        answer:
          'BMP dosyaları nadiren kullanılabilir bir alfa kanalı taşır ve JPG dosyasında hiç şeffaflık desteği yoktur; bu nedenle ortaya çıkan JPG dosyaları her zaman opaktır. Grafiğinizin şeffaflığa ihtiyacı varsa alfayı koruyan PNG veya WebP formatına dönüştürün.',
      },
      {
        question: 'BMP dosyasını JPG formatına dönüştürürken renk derinliğine ne olur?',
        answer:
          'Tarayıcı BMP dosyasını çözer ve standart Canvas renk yolu üzerinden işleyerek normal bir sRGB JPG dosyası dışa aktarır. Yüksek renk derinlikli BMP dosyaları görünür renklerini korur; yalnızca çok egzotik dizinli veya 1 bit varyantların önce bir düzenleyicide yeniden kaydedilmesi gerekebilir.',
      },
      {
        question: 'JPG dosyasını indirmeden önce kaliteyi kontrol edebilir miyim?',
        answer:
          'Evet. Herhangi bir sonuç kartında Karşılaştır seçeneğine basarak bölünmüş görüntüleyiciyi açın ve metni, çizgileri ve detayı orijinal BMP ile karşılaştırarak incelemek için resim üzerinde sürükleyin. Her kart ayrıca tam tasarruf edilen boyutu gösterir.',
      },
      {
        question: 'İlk BMP JPG dönüştürmesinden sonra kalite kaydırıcısını ayarlamak mümkün mü?',
        answer:
          'Evet. İstediğiniz zaman kalite kaydırıcısını yeni bir değere taşıyın ve yeniden yüklemeden yüklenen her dosyayı yeniden oluşturmak için Tümünü Yeniden Dönüştür düğmesine basın. Orijinal BMP dosyalarınız siz temizleyene kadar kuyrukta kalır.',
      },
      {
        question: 'İndirilen JPG dosyası hangi adı alıyor?',
        answer:
          'Tekil indirmeler, .jpg uzantısıyla temizlenmiş orijinal dosya adını korur; böylece scan.bmp, scan.jpg olur. İki veya daha fazla dosyadan oluşan toplu işler, compressmypic_bmp_to_jpg.zip içinde gruplanarak dışa aktarılır.',
      },
      {
        question: 'BMP JPG çevirici telefonunuzun tarayıcısında çalışıyor mu?',
        answer:
          'Evet. Yükleme alanı, kalite kaydırıcısı, karşılaştırma görüntüleyici ve ZIP indirme, uygulama yüklemeden iOS Safari ve Android Chrome üzerinde çalışır. Büyük toplu işler telefon işlemcilerinde biraz daha uzun sürer.',
      },
      {
        question: 'BMP JPG, BMP PNG formatından ne zaman daha iyidir?',
        answer:
          'E-posta, web veya mesajlaşma için en küçük ve kolay paylaşılan dosyaya ihtiyacınız olduğunda JPG seçin. Kayıpsız dosya kalitesine ihtiyacınız olduğunda veya resmi daha sonra düzenlemeyi planladığınızda PNG seçin; PNG dosyalarının JPG dosyalarından çok daha büyük kalacağını unutmayın.',
      },
      {
        question: 'Eski 1 bit veya 8 bit BMP dosyaları dönüştürülebilir mi?',
        answer:
          'Çoğu standart 1 bit, 8 bit, 24 bit ve 32 bit BMP dosyası modern tarayıcılarda temiz bir şekilde çözülür. RLE sıkıştırmalı veya OS/2 formatındaki BMP dosyaları gibi çok alışılmadık varyantlar dosya başına hata gösterebilir; Paint veya bir düzenleyicide 24 bit BMP olarak yeniden kaydetmek bunu çözer.',
      },
      {
        question: 'Taranmış BMP dosyaları neden JPG olarak bu kadar iyi sıkıştırılıyor?',
        answer:
          'Taramalar, JPEG kosinüs sıkıştırmasının çok verimli bir şekilde işlediği yumuşak geçişler, kâğıt dokusu ve fotoğrafik detay içerir. Tek renkli düz bölgeler daha da iyi sıkıştırılır; bu nedenle 10 MB boyutundaki bir tarama yüzde 88 kaliteyle 1 MB altına inebilir.',
      },
      {
        question: 'BMP dosyasını JPG formatına dönüştürürken meta veriler kaldırılıyor mu?',
        answer:
          'Evet. Pikselleri HTML5 Canvas üzerine çizmek, gömülü meta veri bloklarını kaldırır; bu nedenle ortaya çıkan JPG dosyaları hafiftir ve gizli detay taşımaz. BMP dosyaları nadiren çok meta veri taşır.',
      },
      {
        question: 'Dijital kamera veya tarayıcıdan BMP dosyalarını doğrudan dönüştürebilir miyim?',
        answer:
          'Evet, dosya .bmp olarak kaydedildiyse: çoğu tarayıcı ve eski kamera, dışa aktarma seçeneği olarak BMP sunar. Modern kameralar genellikle doğrudan JPG kaydeder; bu nedenle önce dosya uzantısını kontrol edin ve bit eşlem değilse ilgili çeviriciyi kullanın.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
];

export const TOOL_BY_SLUG_TR: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_TR.map((t) => [t.slug, t])
);
