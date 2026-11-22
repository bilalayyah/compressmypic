import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';
import { GuideRelatedLinks } from '../../components/GuideRelatedLinks';

interface Guide100kbPageTrProps {
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
    text: "Tarayıcınızda compressmypic.online adresine gidin. Kurulacak hiçbir şey ve oluşturulacak hesap yok: araç ücretsizdir, kayıtsızdır ve filigran içermez.",
  },
  {
    title: "Görselinizi yükleyin",
    text: "Görselinizi sayfaya sürükleyip bırakın ya da cihazınızdan seçmek için «Dosyalara Gözat»a dokunun. JPG, PNG ve WebP desteklenir; görsel başına 20 MB'a kadar. Birden fazla görseli aynı anda yükleyebilirsiniz.",
  },
  {
    title: "Dengeli hazır ayarıyla başlayın",
    text: "Dengeli hazır ayarı, kaliteyi yaklaşık %70'e ayarlar. Çoğu fotoğraf için bu, dosyayı zaten orijinal boyutunun çok küçük bir bölümüne indirir; nerede olduğunuzu görmek için görselinizin yanında gösterilen canlı boyuta bakın.",
  },
  {
    title: "Kalite kaydırıcısını adım adım aşağı çekin",
    text: "«100 KB» yazacağınız bir kutu yoktur: bunun yerine kalite kaydırıcısını yavaşça aşağı sürükleyin ve her değişiklikten sonra öncesi-sonrası boyutunun canlı olarak nasıl güncellendiğini izleyin. Gereğinden fazla kalite kaybetmemek için küçük adımlarla ilerleyin (örneğin %70'ten %60'a ve %50'ye).",
  },
  {
    title: "Hâlâ 100 KB'ın üzerindeyse WebP'ye geçin",
    text: "Dosya makul bir kaliteyle hâlâ 100 KB'ın üzerindeyse çıktı formatını WebP olarak değiştirin. WebP, aynı görünür kalitede genellikle JPG'den %25 ila %35 daha küçüktür ve kaliteyi daha fazla düşürmeden 100 KB'a giden aralığı çoğu zaman kapatır.",
  },
  {
    title: "Öncesini ve sonrasını karşılaştırın",
    text: "Öncesi-sonrası karşılaştırmasını açın ve yüzlere, metne ve ince ayrıntılara yakınlaştırın. Fotoğraf hâlâ iyi görünüyorsa işiniz bitti. Bloklu ya da soluk görünüyorsa kaliteyi biraz artırın ve 100 KB'ın biraz üzerinde bir dosyayı kabul edin: net bir 120 KB'lık fotoğraf, bulanık bir 100 KB'lık fotoğraftan daha iyidir.",
  },
  {
    title: "Görselinizi indirin",
    text: "Daha küçük dosyayı kaydetmek için İndir'e dokunun ya da birkaç görseli aynı anda küçülttüyseniz «Tümünü İndir (ZIP)»i kullanın. Orijinal görseliniz asla değiştirilmez: her zaman yeni ve daha küçük bir kopya alırsınız.",
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: "Fotoğrafımın boyutunu yaklaşık 100 KB'a nasıl düşürürüm?",
    answer: "CompressMyPic'e yükleyin, Dengeli hazır ayarıyla başlayın ve ardından canlı öncesi-sonrası boyutunu izlerken kalite kaydırıcısını adım adım aşağı çekin. Sıkıştırılmış boyut 100 KB'a yaklaşır yaklaşmaz durun. Hâlâ üzerindeyse çıktı formatını WebP olarak değiştirin.",
  },
  {
    id: 'kb-faq-2',
    question: "Tam olarak 100 KB yazabileceğim bir kutu neden yok?",
    answer: "Çünkü her fotoğraf farklı şekilde sıkıştırılır: açık bir gökyüzü, aynı kalitede kalabalık bir sahneden çok daha fazla küçülür. Sabit bir «100 KB» kutusunun tahmin etmesi gerekirdi. Bunun yerine CompressMyPic, her değişiklikten sonra sıkıştırılmış boyutu size canlı olarak gösterir; böylece kalite üzerinde tam kontrolle dosyayı kendiniz 100 KB'a getirebilirsiniz.",
  },
  {
    id: 'kb-faq-3',
    question: "Hangi kalite ayarı bana yaklaşık 100 KB verir?",
    answer: "Fotoğrafa bağlıdır; ancak tipik bir telefon fotoğrafı için %50 ila %70 kalite genellikle 100 KB'a yakın olur. Düz renkli basit bir fotoğraf %70 ile 100 KB'a ulaşabilirken çok ayrıntılı bir manzara %40 ila %50 gerektirebilir. Canlı boyuta bakın: gerçek olan bu sayıdır, sabit bir yüzde değildir.",
  },
  {
    id: 'kb-faq-4',
    question: "Fotoğrafım düşük kaliteyle hâlâ 100 KB'ın üzerinde, şimdi ne yapmalıyım?",
    answer: "Önce çıktı formatını WebP olarak değiştirin; WebP genellikle JPG'den %25 ila %35 daha küçüktür. Hâlâ üzerindeyse kaliteyi biraz daha düşürün ve karşılaştırmayı inceleyin: çoğu zaman küçük bir ek düşüş görünmez. Son çare olarak, boyutları çok büyük bir fotoğraf beklediğinizden daha düşük bir kalite ayarı gerektirebilir; çünkü daha fazla piksel daha fazla veri demektir.",
  },
  {
    id: 'kb-faq-5',
    question: "100 KB'a ulaşmak için WebP kullanmalı mıyım?",
    answer: "Evet, yapabiliyorsanız. WebP, kaliteyi çok düşürmeden 100 KB'a ulaşmanın en kolay yoludur; çünkü JPG ile aynı görünür kalitede daha küçük bir dosya oluşturur. Web sitelerindeki görseller için ve modern tarayıcıların kullanıldığı her yerde WebP kullanın; görselin eski programlarda açılması ya da WhatsApp ile paylaşılması gerektiğinde yalnızca JPG kullanın.",
  },
  {
    id: 'kb-faq-6',
    question: "100 KB'a düşürmek fotoğrafın bulanık görünmesine neden olur mu?",
    answer: "Dikkatli yaparsanız hayır. 100 KB ile normal bir telefon fotoğrafı ekranlarda net görünmeye devam eder; çünkü ekranlar, kameranın yakaladığından çok daha az piksel gösterir. Yalnızca kaliteyi çok düşürürseniz (yaklaşık %40'ın altına) ya da fotoğraf büyük basılırsa bulanık görünür. İndirmeden önce öncesi-sonrası karşılaştırmasını her zaman inceleyin.",
  },
  {
    id: 'kb-faq-7',
    question: "Bir PNG'yi 100 KB'a düşürebilir miyim?",
    answer: "Evet, ancak PNG fotoğraflar baştan büyüktür; bu nedenle daha fazla çaba gerektirir. PNG'yi yükleyin, kalite kaydırıcısını aşağı çekin ve çıktıyı WebP ya da JPG olarak değiştirin: yalnızca bu, boyutu çoğu zaman yarıdan fazla düşürür. Görsel şeffaflık gerektiriyorsa PNG çıktısını koruyun ve şeffaf bir PNG'nin 100 KB'a ulaşamayabileceğini kabul edin.",
  },
  {
    id: 'kb-faq-8',
    question: "Bir görseli 200 KB'ta nasıl bırakabilirim?",
    answer: "Aynı yöntemi kullanın: görseli yükleyin, Dengeli hazır ayarıyla başlayın ve canlı boyutu izlerken kalite kaydırıcısını, 200 KB'a yaklaşana kadar aşağı çekin. Çoğu fotoğraf %70 ila %80 kaliteyle 200 KB'a kolayca ulaşır; bu nedenle genellikle çok düşürmeniz gerekmez.",
  },
  {
    id: 'kb-faq-9',
    question: "Bir görselin 50 KB olması için ne yapmalıyım?",
    answer: "Görseli yükleyin, çıktı formatını WebP olarak değiştirin ve canlı boyut 50 KB'a yaklaşana kadar kalite kaydırıcısını azar azar aşağı çekin; bir fotoğraf için genellikle yaklaşık %40 ila %55 kalite gerekir. Karşılaştırmayı dikkatle inceleyin; çünkü 50 KB'ta ince ayrıntılar zarar görmeye başlar; küçük resimler ve sohbet için iyidir, saklamak istediğiniz fotoğraflar için daha az iyidir.",
  },
  {
    id: 'kb-faq-10',
    question: "Bir görseli 20 KB'a düşürmek mümkün mü?",
    answer: "WebP çıktısını ve düşük bir kalite ayarını, genellikle %25 ila %40 kullanın ve canlı boyutu izleyin. 20 KB çok azdır; bu nedenle görünür yumuşaklık bekleyin: simgeler, küçük resimler ve küçük önizleme görselleri için işe yarar; yüzlü fotoğraflar için değil. Görsel hâlâ 20 KB'a ulaşmıyorsa muhtemelen bu kadar küçük bir dosya için çok fazla ayrıntı içeriyordur.",
  },
  {
    id: 'kb-faq-11',
    question: "Bir web sitesindeki görseller için iyi bir dosya boyutu nedir?",
    answer: "Normal içerik fotoğrafları için görsel başına 100 KB'ın altını ve büyük ana görseller için 200 KB'ın altını hedefleyin. Küçük dosyalar sayfaların daha hızlı yüklenmesini sağlar; ziyaretçiler bunu fark eder ve Google bunu ödüllendirir. Web sitesi görselleri için başlangıç noktası olarak WebP formatını ve Dengeli hazır ayarını kullanın.",
  },
  {
    id: 'kb-faq-12',
    question: "E-posta ekleri için boyut sınırı nedir?",
    answer: "Çoğu e-posta sağlayıcısı, tüm ekler dahil mesaj başına toplam 20 ila 25 MB'a izin verir; Gmail 25 MB'a izin verir. 100 KB'a düşürülmüş tek bir fotoğraf asla sorun olmaz; 100 KB'lık on fotoğraf bile yalnızca 1 MB eder. Önce sıkıştırmak, birkaç fotoğrafı e-postayla göndermeyi sorunsuz hale getirir.",
  },
  {
    id: 'kb-faq-13',
    question: "Birden fazla görseli aynı anda 100 KB'a düşürebilir miyim?",
    answer: "Evet. Tüm görselleri birlikte yükleyin, hepsine aynı hazır ayarı ve aynı kaliteyi uygulayın ve her birinin canlı boyutunu inceleyin. Bir görsel hâlâ 100 KB'ın üzerindeyse onu ayrı olarak ayarlayın ve ardından hepsini birlikte «Tümünü İndir (ZIP)» düğmesiyle indirin.",
  },
  {
    id: 'kb-faq-14',
    question: "Araç, görselimin boyutlarını değiştiriyor mu?",
    answer: "Hayır. CompressMyPic, görselinizin boyutlarını tam olarak aynı tutar: yalnızca dosya boyutu küçülür. Fotoğrafınız orijinaliyle aynı genişliği, yüksekliği ve oranı korur; bu nedenle 4000×3000 boyutunda bir fotoğraf 4000×3000 olarak kalır; yalnızca çok daha küçük bir dosyayla.",
  },
  {
    id: 'kb-faq-15',
    question: "Sıkıştırılmış görselimin boyutunu nasıl kontrol ederim?",
    answer: "CompressMyPic, her görselin orijinal boyutunu ve sıkıştırılmış boyutunu, her fotoğrafın hemen altında canlı olarak gösterir; örneğin «4,2 MB → 98 KB». İndirilen dosyayı cihazınızda da kontrol edebilirsiniz: telefonda galerinizde ya da dosya yöneticinizde dosya ayrıntılarına bakın.",
  },
  {
    id: 'kb-faq-16',
    question: "Web sitesi için 100 KB yeterli kalite midir?",
    answer: "Evet, neredeyse tüm web kullanımları için. Web sitesi fotoğrafları ekranda birkaç yüz piksel genişliğinde gösterilir; bu nedenle 100 KB'lık bir görsel ekranda net görünür. Yalnızca tam ekran ana görseller ya da yazdırılması amaçlanan fotoğraflar daha büyük dosyalar gerektirir. 100 KB'a sıkıştırın, karşılaştırmayı inceleyin ve kalitenin korunduğunu göreceksiniz.",
  },
  {
    id: 'kb-faq-17',
    question: "Bir ekran görüntüsünü 100 KB'a düşürebilir miyim?",
    answer: "Evet ve ekran görüntüleri en kolay durumdur. Geniş düz renk alanları vardır; bu nedenle çok iyi sıkıştırılırlar: 1 MB ile başlayan bir ekran görüntüsü genellikle Dengeli hazır ayarıyla 100 KB'ın altına düşer. En küçük sonucu elde etmek için WebP çıktısını deneyin.",
  },
  {
    id: 'kb-faq-18',
    question: "Sıkıştırırken görsellerim cihazımdan çıkıyor mu?",
    answer: "Hayır. Tüm sıkıştırma, cihazınızdaki kendi tarayıcınızda gerçekleşir; bu nedenle görselleriniz asla bir sunucuya yüklenmez, saklanmaz ve başkası tarafından görülmez. Tarayıcınızın belleğinde kalırlar ve sekmeyi kapattığınızda ya da yenilediğinizde silinirler.",
  },
  {
    id: 'kb-faq-19',
    question: "Küçültebileceğim görsel sayısında bir sınır var mı?",
    answer: "Hayır. Sıkıştırabileceğiniz görsel sayısında sınır yoktur ve hesap ya da kayıt gerekmez. Tek sınır, görsel başına 20 MB'tır; bu, yüksek çözünürlüklü kamera fotoğraflarını ve büyük ekran görüntülerini kapsar.",
  },
  {
    id: 'kb-faq-20',
    question: "Görselleri 100 KB'a düşürmek ücretsiz mi?",
    answer: "Evet, tamamen ücretsiz. Ücret yok, ücretli plan yok, kredi yok ve sıkıştırılmış görsellerinizde filigran yok. Siteyi açın, görsellerinizi 100 KB'a düşürün ve istediğiniz kadar indirin.",
  },
];

export const Guide100kbPageTr: React.FC<Guide100kbPageTrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Bir görselin boyutunu web ve e-posta için 100 KB\'a düşürme';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Ücretsiz bir çevrimiçi sıkıştırıcıyla bir görselin boyutunu web siteleri ve e-posta için 100 KB\'a düşürün. Adım adım rehber, kayıt yok, filigran yok.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/reduce-image-size-to-100kb/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Bir görselin boyutunu web ve e-posta için 100 KB\'a düşürme',
          description: 'CompressMyPic\'te kalite kaydırıcısını ve WebP çıktısını kullanarak bir görseli yaklaşık 100 KB\'a düşürün.',
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
          headline: "Bir Görselin Boyutunu Web ve E-posta için 100 KB'a Düşürme",
          description: "Ücretsiz bir çevrimiçi sıkıştırıcıyla bir görselin boyutunu web siteleri ve e-posta için 100 KB'a düşürün. Adım adım rehber, kayıt yok, filigran yok.",
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
          mainEntityOfPage: "https://compressmypic.online/guides/reduce-image-size-to-100kb/",
          inLanguage: 'tr',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "Ana Sayfa", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "Rehberler", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "Bir Görselin Boyutunu Web ve E-posta için 100 KB'a Düşürme", item: "https://compressmypic.online/guides/reduce-image-size-to-100kb/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-100kb-jsonld');
    if (prev) prev.remove();
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
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
            Bir Görselin Boyutunu Web Siteleri ve E-posta için 100 KB'a Düşürme
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            Yazan <a href="/tr/hakkinda" onClick={(e) => { e.preventDefault(); onNavigate('/tr/hakkinda'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            4 MB'lık bir fotoğraf web sitenizin yavaş yüklenmesine ve e-postanın takılmasına neden olur. Onu yaklaşık 100 KB'a düşürmek, sayfaların hızlı yüklenmesini ve e-postaların anında gönderilmesini sağlar; doğru yaparsanız kimse farkı anlayamaz.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>100 KB neden sihirli sayıdır</span>
            </h2>
            <p>
              100 KB, çoğu kişinin aradığı boyuttur çünkü tam ideal noktadadır: bir web sitesinde anında yüklenmek ya da herhangi bir e-postaya sığmak için yeterince küçük, ekranda net görünmeye devam etmek için yeterince büyüktür. Tipik bir telefon fotoğrafı 3 ila 5 MB ile başlar; bu nedenle 100 KB'a ulaşmak, dosyanın yaklaşık %97'sini atmak demektir ve modern sıkıştırma bunu çoğunlukla gözlerinizin göremediği verileri atarak başarır.
            </p>
            <p>
              Başlamadan önce dürüst bir not: CompressMyPic'te «100 KB» yazıp tam olarak bu boyutu alacağınız bir kutu yoktur. Hiçbir dürüst araç tam bir sayı vaat edemez; çünkü her fotoğraf farklı şekilde sıkıştırılır. Bunun yerine araç, her değişiklikten sonra sıkıştırılmış boyutu size canlı olarak gösterir ve kalite kaydırıcısıyla dosyayı kendiniz 100 KB'a getirirsiniz. Bu rehber size bunu tam olarak nasıl yapacağınızı gösterir.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>Adım adım: bir görseli 100 KB'a düşürün</span>
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

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.webp"
              alt="100 KB'a düşürmek için CompressMyPic'e büyük bir fotoğraf yüklemenin ekran görüntüsü"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Fotoğrafınızı yükleyin: orijinal boyut hemen gösterilir; böylece ne kadar küçültmeniz gerektiğini bilirsiniz.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>Yaygın hedeflere bir bakışta</span>
            </h2>
            <p>
              100 KB, insanların ihtiyaç duyduğu tek hedef değildir. Aynı yöntem her boyut için geçerlidir; her birinden bekleyebilecekleriniz şunlardır:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Hedef</th>
                    <th className="px-4 py-3 font-semibold">Tipik kalite</th>
                    <th className="px-4 py-3 font-semibold">En uygun olduğu yer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">200 KB</td>
                    <td className="px-4 py-3">%70–80</td>
                    <td className="px-4 py-3">Blog fotoğrafları, büyük web görselleri</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">100 KB</td>
                    <td className="px-4 py-3">%50–70</td>
                    <td className="px-4 py-3">Web sitesi fotoğrafları, e-posta ekleri</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">50 KB</td>
                    <td className="px-4 py-3">%40–55 + WebP</td>
                    <td className="px-4 py-3">Küçük resimler, sohbet, hızlı sayfalar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">20 KB</td>
                    <td className="px-4 py-3">%25–40 + WebP</td>
                    <td className="px-4 py-3">Simgeler, küçük önizlemeler</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Bunlar başlangıç noktalarıdır, vaat değildir. Basit bir fotoğraf 100 KB'a kolayca ulaşır; çok ayrıntılı bir fotoğraf daha düşük bir kalite ayarı gerektirir. Yüzdeye değil, canlı boyut sayısına güvenin.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>Web siteleri ve e-posta için ipuçları</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Web siteleri için WebP çıktısını kullanın: 100 KB'a ulaşmanın en hızlı yoludur ve tüm modern tarayıcılar onu destekler.</li>
              <li>E-posta için JPG en güvenli formattır; çünkü tüm e-posta uygulamaları onu açar. 100 KB'lık bir JPG anında eklenir ve boyut nedeniyle asla geri dönmez.</li>
              <li>Bir sayfadaki ya da e-postadaki tüm fotoğrafları birlikte sıkıştırın ve ardından hepsini Tümünü İndir (ZIP) düğmesiyle indirin.</li>
              <li>Tam olarak 100 KB'ı kovalamayın. Net bir 115 KB'lık fotoğraf, tam olarak 100 KB'lık bulanık bir fotoğraftan daha iyidir: yükleme süresindeki fark sıfırdır.</li>
              <li>Fotoğrafı yayımlamadan ya da göndermeden önce öncesi-sonrası karşılaştırmasını her zaman tam yakınlaştırmayla inceleyin.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.webp"
              alt="Bir görselin yaklaşık 100 KB'a düşürüldüğünü gösteren canlı öncesi-sonrası dosya boyutunun ekran görüntüsü"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Canlı öncesi-sonrası boyutu ilerlemenizi gösterir: sıkıştırılmış boyut 100 KB'a yaklaşana kadar kaydırıcıyı aşağı çekin.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>100 KB mümkün olmadığında</span>
            </h2>
            <p className="text-sm sm:text-base">
              Bazı görseller kötü görünmeden 100 KB'a ulaşamaz: çok büyük ve çok ayrıntılı bir fotoğraf ya da PNG olarak kalması gereken şeffaflıklı bir PNG. Bu durumda zorlamayın. Net bir 180 KB'lık fotoğraf, her durumda bozulmuş bir 100 KB'lık fotoğraftan daha iyidir: bir web sitesi için hâlâ hızlı yüklenir ve e-posta için hâlâ tüm ek sınırlarının çok altındadır. Amaç, iyi görünmeye devam eden küçük bir dosyadır; sihirli bir sayı değildir.
            </p>
          </section>

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
                href="/tr/rehberler/jpg-vs-png-vs-webp"
                onClick={(e) => { e.preventDefault(); onNavigate('/tr/rehberler/jpg-vs-png-vs-webp'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG, PNG ve WebP: Hangi formatı kullanmalısınız?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Dosya boyutunu, kaliteyi ve şeffaflığı karşılaştırdık; böylece her seferinde doğru formatı seçersiniz.</p>
              </a>
            </div>
          </section>

          <GuideRelatedLinks guide="100kb" lang="tr" onNavigate={onNavigate} />

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="/tr/"
              onClick={(e) => { e.preventDefault(); onNavigate('/tr/'); }}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Görselleri ücretsiz sıkıştır
            </a>
            <a
              href="/tr/rehberler/jpg-vs-png-vs-webp"
              onClick={(e) => { e.preventDefault(); onNavigate('/tr/rehberler/jpg-vs-png-vs-webp'); }}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG, PNG ve WebP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
