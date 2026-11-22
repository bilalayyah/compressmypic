import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';
import { GuideRelatedLinks } from '../../components/GuideRelatedLinks';

interface GuideFormatsPageTrProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: "CompressMyPic'i açın",
    text: "Tarayıcınızda compressmypic.online adresine gidin. Kurulacak hiçbir şey, oluşturulacak hesap yok ve hiçbir dosya asla bir sunucuya yüklenmez.",
  },
  {
    title: "Görselinizi yükleyin",
    text: "Görselinizi sürükleyip bırakın ya da seçmek için «Dosyalara Gözat»a dokunun. JPG, PNG ve WebP dosyaları desteklenir; görsel başına 20 MB'a kadar.",
  },
  {
    title: "Karar verin: formatı koruyun ya da dönüştürün",
    text: "«Orijinal»i seçerek görselinizin zaten sahip olduğu formatı koruyun ya da çıktı olarak JPG, PNG ya da WebP seçin. Karar vermek için aşağıdaki rehberi kullanın: fotoğraflar için JPG, şeffaflık gerektiğinde PNG, bir web sitesi için en küçük dosyayı istediğinizde WebP.",
  },
  {
    title: "Bir kalite hazır ayarı seçin",
    text: "Dengeli hazır ayarıyla (yaklaşık %70) başlayın. Mükemmel görünmesini istediğiniz bir fotoğraf için Yüksek hazır ayarını ya da %85 ila %90 kaliteyi kullanın. Küçük bir web görseli için daha düşük bir ayar da iyidir.",
  },
  {
    title: "Canlı boyutu inceleyin ve karşılaştırın",
    text: "Her görsel, orijinal boyutunu ve yeni sıkıştırılmış boyutunu gösterir. Öncesi-sonrası karşılaştırmasını açın ve yakınlaştırın: fark görmüyorsanız ayar doğrudur. Çıktı formatını WebP olarak değiştirmeyi deneyin ve dosyanın ne kadar daha küçük olduğunu görün.",
  },
  {
    title: "Görselinizi indirin",
    text: "Görseli tek tek indirin ya da birkaç görseli aynı anda dönüştürdüğünüzde «Tümünü İndir (ZIP)»i kullanın. Orijinal dosyanız asla değiştirilmez: yeni ve daha küçük bir kopya alırsınız.",
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: "JPG ile PNG arasındaki fark nedir?",
    answer: "JPG, fotoğraflar için yapılmış kayıplı bir formattır: çok daha küçük dosyalar oluşturmak için bazı ayrıntıları atar ve şeffaflığı desteklemez. PNG kayıpsızdır ve şeffaflığı destekler; bu nedenle logolar ve grafikler için mükemmeldir; ancak PNG fotoğraflar, aynı fotoğrafın JPG olarak kaydedilmiş halinden birkaç kat daha büyüktür.",
  },
  {
    id: 'fmt-faq-2',
    question: "WebP, JPG'den daha mı iyi?",
    answer: "Dosya boyutu açısından evet: WebP genellikle benzer kalitede JPG'den %25 ila %35 daha küçüktür ve şeffaflığı da destekler. WebP yerine JPG seçmenin tek nedeni uyumluluktur: bazı eski programlar ve uygulamalar JPG'yi hâlâ daha iyi işler ve WhatsApp, JPG fotoğraflarını daha güvenilir gösterir.",
  },
  {
    id: 'fmt-faq-3',
    question: "WebP, PNG'den daha mı iyi?",
    answer: "Genellikle evet. WebP, PNG gibi şeffaflığı destekler; ancak çok daha küçük dosyalar oluşturur ve JPG gibi kayıplı sıkıştırma da yapabilir. PNG, daha sonra yeniden düzenlenecek bir logo ya da grafik için mükemmel ve kayıpsız kaliteye ihtiyacınız olduğunda hâlâ en güvenli seçenektir.",
  },
  {
    id: 'fmt-faq-4',
    question: "PNG şeffaflığı destekler, JPG desteklemez mi?",
    answer: "Doğru. PNG şeffaf bir arka planı (alfa kanalı) destekler; bu yüzden logolar ve simgeler genellikle PNG'dir. JPG'de hiç şeffaflık yoktur: JPG'deki şeffaf alanlar düz bir renge, genellikle beyaza dönüşür; bu nedenle şeffaf arka planlı bir logoyu asla JPG olarak kaydetmeyin.",
  },
  {
    id: 'fmt-faq-5',
    question: "PNG dosyaları neden JPG dosyalarından çok daha büyük?",
    answer: "Çünkü PNG kayıpsızdır: her piksel ayrıntısını tam olarak korurken JPG, gözün zar zor fark ettiği ayrıntıları atar. PNG olarak kaydedilen bir kamera fotoğrafı, aynı fotoğrafın JPG halinden 5 ila 10 kat daha büyük olabilir. Bu nedenle fotoğraflar neredeyse hiçbir zaman PNG olmamalıdır.",
  },
  {
    id: 'fmt-faq-6',
    question: "WebP yerine JPG'yi ne zaman kullanmalıyım?",
    answer: "Görsel eski programlarda açılacaksa, WhatsApp ya da e-posta ile gönderilecekse ve garantili bir önizleme istiyorsanız ya da yazdırılacaksa JPG kullanın. WebP web siteleri için daha iyidir; ancak bir fotoğrafı biriyle paylaşmak için JPG hâlâ en evrensel formattır.",
  },
  {
    id: 'fmt-faq-7',
    question: "PNG'yi JPG'ye dönüştürebilir miyim?",
    answer: "Evet. PNG'yi CompressMyPic'e yükleyin, çıktı formatı olarak JPG'yi seçin ve indirin. Yalnızca JPG'nin şeffaflığı olmadığını unutmayın: PNG'nizin şeffaf bir arka planı varsa önce bir arka plan rengi seçin; çünkü aksi takdirde şeffaf alan beyaz ve düz olur.",
  },
  {
    id: 'fmt-faq-8',
    question: "JPG'yi WebP'ye dönüştürebilir miyim?",
    answer: "Evet. JPG'yi yükleyin, çıktı olarak WebP'yi seçin ve indirin: dosya genellikle aynı görünür kalitede %25 ila %35 daha küçük olur. Birden fazla JPG'yi aynı anda WebP'ye dönüştürüp hepsini ZIP olarak indirebilirsiniz.",
  },
  {
    id: 'fmt-faq-9',
    question: "JPG'yi PNG'ye dönüştürmek kaliteyi iyileştirir mi?",
    answer: "Hayır. Bir JPG'yi PNG'ye dönüştürmek, JPG sıkıştırmasının zaten sildiği ayrıntıları geri getiremez; yalnızca dosyayı çok daha büyük yapar. JPG'yi PNG'ye dönüştürmenin tek iyi nedeni, görseli daha fazla kalite kaybetmeden yeniden düzenlemeniz gerekmesidir.",
  },
  {
    id: 'fmt-faq-10',
    question: "Bir web sitesi için hangi formatı kullanmalıyım?",
    answer: "Önce WebP, alternatif olarak JPG. WebP size en küçük dosyaları verir; bu da sayfaların daha hızlı yüklenmesini sağlar ve sayfa hızı hem ziyaretçiler hem de Google için önemlidir. PNG'yi yalnızca logo gibi şeffaflık gerektiren görseller için kullanın; WebP kullanamıyorsanız fotoğraflar için JPG kullanın.",
  },
  {
    id: 'fmt-faq-11',
    question: "Bir logo için hangi format daha iyidir?",
    answer: "Logo şeffaf bir arka plan gerektiriyorsa PNG; çünkü JPG şeffaflığı desteklemez. WebP de şeffaflığı destekler ve daha küçük bir dosya oluşturur; bu nedenle bir web sitesindeki logo için iyi bir seçenektir. Arka planın şeffaf kalması gerekiyorsa bir logoyu asla JPG olarak kaydetmeyin.",
  },
  {
    id: 'fmt-faq-12',
    question: "Ekran görüntüleri için hangi format daha iyidir?",
    answer: "PNG veya WebP. Ekran görüntüleri net kenarlara ve düz renklere sahiptir; PNG ve WebP bunları iyi işler. JPG, metnin net kenarlarını bulanıklaştırır. En küçük ekran görüntüsü dosyasını elde etmek için CompressMyPic'te WebP çıktısını deneyin: genellikle görünür bir fark olmadan PNG'den çok daha küçüktür.",
  },
  {
    id: 'fmt-faq-13',
    question: "Tüm tarayıcılar artık WebP'yi destekliyor mu?",
    answer: "Evet, neredeyse hepsi. Chrome, Edge, Firefox, Safari ve tüm modern mobil tarayıcılar yıllardır WebP'yi destekliyor. Yalnızca çok eski tarayıcılar ve bazı eski uygulamalar WebP'yi açamaz; JPG'nin hâlâ işe yaramasının tek nedeni budur.",
  },
  {
    id: 'fmt-faq-14',
    question: "WhatsApp ya da Instagram WebP kabul ediyor mu?",
    answer: "WhatsApp WebP dosyalarını alabilir; ancak normal bir fotoğraf olarak görünmeyebilirler; bu nedenle fotoğrafları orada paylaşmak için JPG daha güvenlidir. Instagram, gönderiler için JPG ve PNG kabul eder ve yüklemeleri kendisi dönüştürür. Sosyal medyada paylaşım için fotoğraflarda JPG'de kalın.",
  },
  {
    id: 'fmt-faq-15',
    question: "Bir fotoğrafı WebP'ye dönüştürmek kalite kaybettirir mi?",
    answer: "Yalnızca sizin seçtiğiniz kadar. WebP, JPG ile aynı fikri kullanır: biraz ayrıntıyı daha küçük bir dosyayla değiştiren bir kalite ayarı. %80 ila %90 kalitede bir WebP fotoğraf, orijinal JPG ile aynı görünür ve dosya yaklaşık üçte bir daha küçüktür.",
  },
  {
    id: 'fmt-faq-16',
    question: "JPG ve JPEG aynı format mı?",
    answer: "Hiçbir fark yoktur: JPG ve JPEG aynı formattır. JPEG tam addır (Joint Photographic Experts Group) ve JPG dosya uzantısının kısa halidir. foto.jpg adlı bir dosya ile foto.jpeg adlı bir dosya aynı tür görseldir.",
  },
  {
    id: 'fmt-faq-17',
    question: "Orijinal formatı korumalı mıyım yoksa dönüştürmeli miyim?",
    answer: "Boyuttan memnunsanız orijinali koruyun: en basit seçenektir ve hiçbir şey kaybolmaz. Bir nedeniniz olduğunda dönüştürün: bir web sitesi fotoğrafını küçültmek için JPG'den WebP'ye, şeffaflığa ihtiyacı olmayan bir fotoğrafı küçültmek için PNG'den JPG'ye ya da bir logoyu küçültmek için PNG'den WebP'ye.",
  },
  {
    id: 'fmt-faq-18',
    question: "Hangi format en küçük dosyayı verir?",
    answer: "Neredeyse her durumda WebP. Fotoğraflar için WebP, aynı görünür kalitede genellikle JPG'den %25 ila %35 daha küçüktür. Şeffaflıklı grafikler için WebP genellikle PNG'den çok daha küçüktür. Bu nedenle WebP, web siteleri için en iyi formattır.",
  },
  {
    id: 'fmt-faq-19',
    question: "CompressMyPic, JPG, PNG ve WebP arasında dönüştürme yapıyor mu?",
    answer: "Evet. Bir JPG, PNG ya da WebP görseli yükleyin, istediğiniz çıktı formatını seçin —orijinal, JPG, PNG ya da WebP— ve dönüştürülmüş dosyayı indirin. Birden fazla görseli aynı ayarlarla aynı anda dönüştürüp hepsini ZIP olarak indirebilirsiniz.",
  },
  {
    id: 'fmt-faq-20',
    question: "PNG'yi JPG'ye dönüştürürsem şeffaflığa ne olur?",
    answer: "Kaybolur. JPG şeffaflık saklayamaz; bu nedenle PNG'nizin şeffaf kısımları düz bir renge dönüşür. CompressMyPic, bu alanları doldurmak için bir arka plan rengi seçmenize olanak tanır; bu nedenle görselin kullanılacağı yere uyan bir renk seçin; beyaz, alışılmış seçenektir.",
  },
];

export const GuideFormatsPageTr: React.FC<GuideFormatsPageTrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG, PNG ve WebP: Hangi formatı kullanmalısınız?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG, PNG ve WebP sade bir dille açıklandı: fotoğraflarınız, logolarınız ve web siteleriniz için doğru formatı seçmek üzere boyut, kalite ve şeffaflığı karşılaştırın.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/jpg-vs-png-vs-webp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'JPG, PNG ve WebP arasında nasıl seçim yapılır ve görseller nasıl dönüştürülür',
          description: 'JPG, PNG ve WebP\'yi karşılaştırın ve ardından CompressMyPic ile görselinizi sıkıştırın ya da dönüştürün.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
        {
          '@type': 'Article',
          headline: "JPG, PNG ve WebP: Hangi formatı kullanmalısınız?",
          description: "JPG, PNG ve WebP sade bir dille açıklandı: fotoğraflarınız, logolarınız ve web siteleriniz için doğru formatı seçmek üzere boyut, kalite ve şeffaflığı karşılaştırın.",
          image: 'https://compressmypic.online/og-image.png',
          author: { '@type': 'Person', name: 'Bilal' },
          publisher: {
            '@type': 'Organization',
            name: 'CompressMyPic',
            url: 'https://compressmypic.online/',
            logo: { '@type': 'ImageObject', url: 'https://compressmypic.online/favicon.svg' },
          },
          datePublished: '2026-11-14',
          dateModified: '2026-11-14',
          mainEntityOfPage: "https://compressmypic.online/guides/jpg-vs-png-vs-webp/",
          inLanguage: 'tr',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "Ana Sayfa", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "Rehberler", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "JPG, PNG ve WebP: Hangi formatı kullanmalısınız?", item: "https://compressmypic.online/guides/jpg-vs-png-vs-webp/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-formats-jsonld');
    if (prev) prev.remove();
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <a
            href="/tr/"
            onClick={(e) => { e.preventDefault(); onNavigate('/tr/'); }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Görsel sıkıştırıcıya dön</span>
          </a>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG, PNG ve WebP: Hangi formatı kullanmalısınız?
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            Yazan <a href="/tr/hakkinda" onClick={(e) => { e.preventDefault(); onNavigate('/tr/hakkinda'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Yanlış formatı seçmek, görselinizi gerekenden on kat daha büyük yapabilir ya da şeffaf bir logoyu bozabilir. İşte sade ve dürüst karşılaştırma ve formatlar arasında saniyeler içinde nasıl dönüştürme yapacağınız.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>Kısa yanıt</span>
            </h2>
            <p>
              Yalnızca bir şeyi hatırlayacaksanız şunu hatırlayın: fotoğraflar için JPG, logolar ve şeffaflık gerektiren her şey için PNG ve en küçük dosyayı istediğinizde —özellikle bir web sitesinde— WebP kullanın. Aşağıdaki tablo nedenini gösteriyor.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Format</th>
                    <th className="px-4 py-3 font-semibold">Dosya boyutu</th>
                    <th className="px-4 py-3 font-semibold">Şeffaflık</th>
                    <th className="px-4 py-3 font-semibold">En uygun olduğu yer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">JPG</td>
                    <td className="px-4 py-3">Küçük</td>
                    <td className="px-4 py-3">Hayır</td>
                    <td className="px-4 py-3">Fotoğraflar, paylaşım, baskı</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">PNG</td>
                    <td className="px-4 py-3">Büyük</td>
                    <td className="px-4 py-3">Evet</td>
                    <td className="px-4 py-3">Logolar, simgeler, ekran görüntüleri</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">WebP</td>
                    <td className="px-4 py-3">En küçük</td>
                    <td className="px-4 py-3">Evet</td>
                    <td className="px-4 py-3">Web siteleri, web fotoğrafları</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: fotoğraflar için en iyisi</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG (JPEG olarak da yazılır) fotoğraflar için klasik formattır. Kayıplı sıkıştırma kullanır: gözünüzün zar zor fark ettiği ince ayrıntıları atar; bu da dosyaları çok daha küçük yapar. 5 MB'lık bir kamera fotoğrafı, JPG olarak 500 KB olabilir ve hâlâ çok iyi görünebilir. JPG şeffaflığı desteklemez; bu nedenle logolar için yanlış seçenektir; ancak herhangi bir normal fotoğraf için, tüm cihazların ve uygulamaların açabildiği güvenli ve evrensel seçenektir.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: logolar ve şeffaflık için en iyisi</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG kayıpsızdır: her pikseli tam olarak korur ve şeffaf arka planları destekler. Bu onu logolar, simgeler ve metinli grafikler için doğru format yapar. Bedeli dosya boyutudur: PNG olarak kaydedilen bir fotoğraf, aynı fotoğrafın JPG halinden 5 ila 10 kat daha büyük olabilir. Belirli bir nedeniniz olmadıkça bir kamera fotoğrafını asla PNG olarak kaydetmeyin.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: web siteleri için en iyisi</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP, Google tarafından oluşturulan modern formattır. Her şeyi yapar: JPG gibi kayıplı sıkıştırma, PNG gibi şeffaflık ve genellikle aynı görünür kalitede JPG'den %25 ila %35 daha küçük dosyalar. Tüm modern tarayıcılar onu destekler; bu nedenle web sitesi görselleri için en iyi formattır. Tek zayıflığı eski programlarla uyumluluk ve WhatsApp önizlemeleridir; burada JPG hâlâ daha güvenlidir.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.webp"
              alt="Aynı fotoğrafın JPG, PNG ve WebP olarak dosya boyutlarıyla karşılaştırıldığı ekran görüntüsü"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Üç formatta aynı fotoğraf: WebP en küçük, PNG en büyük, JPG ortada.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>Adım adım: görselinizi sıkıştırın ya da dönüştürün</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Her iş için hangi format?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Kamera fotoğrafları: JPG veya WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Paylaşım ve baskı için JPG, siteniz için WebP. Her ikisi de fotoğrafları orijinal boyutunun çok küçük bir bölümünde çok iyi görünür halde tutar.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Logolar ve simgeler: PNG veya WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Şeffaflık gerekir; bu nedenle JPG elenir. PNG güvenli klasiktir; WebP daha küçüktür ve her modern yerde çalışır.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Ekran görüntüleri: WebP veya PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Net metin ve düz renkler WebP ve PNG ile iyi gider. JPG, metnin kenarlarını bulanıklaştırır; bu nedenle ekran görüntülerinde ondan kaçının.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Web sitesi görselleri: WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Daha küçük dosyalar, daha hızlı sayfalar demektir. Sitenizdeki fotoğrafları WebP'ye dönüştürün ve çok eski tarayıcılar için JPG'yi alternatif olarak saklayın.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.webp"
              alt="CompressMyPic'te JPG, PNG ya da WebP çıktı formatını seçmenin ekran görüntüsü"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              CompressMyPic'te çıktı formatınızı seçin: orijinali koruyun ya da JPG, PNG ya da WebP'ye dönüştürün.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Sıkça sorulan sorular</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#dc2626] dark:text-[#fca5a5]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">İlgili rehberler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/tr/rehberler/whatsapp-icin-gorsel-sikistir"
                onClick={(e) => { e.preventDefault(); onNavigate('/tr/rehberler/whatsapp-icin-gorsel-sikistir'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">WhatsApp için Görselleri Kalite Kaybetmeden Sıkıştırma</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Önce fotoğrafları kendiniz küçültün, ardından belge olarak gönderin; böylece WhatsApp onları bulanıklaştıramaz.</p>
              </a>
              <a
                href="/tr/rehberler/gorsel-boyutunu-100kb-ye-dusur"
                onClick={(e) => { e.preventDefault(); onNavigate('/tr/rehberler/gorsel-boyutunu-100kb-ye-dusur'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Web siteleri ve e-posta için bir görselin boyutunu 100 KB'a düşürme</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Fotoğrafınızı bozmadan 100 KB'a ulaşmak için adım adım rehber.</p>
              </a>
            </div>
          </section>

          <GuideRelatedLinks guide="formats" lang="tr" onNavigate={onNavigate} />

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="/tr/"
              onClick={(e) => { e.preventDefault(); onNavigate('/tr/'); }}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Görselleri ücretsiz sıkıştır
            </a>
            <a
              href="/tr/rehberler/whatsapp-icin-gorsel-sikistir"
              onClick={(e) => { e.preventDefault(); onNavigate('/tr/rehberler/whatsapp-icin-gorsel-sikistir'); }}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              WhatsApp için sıkıştır
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
