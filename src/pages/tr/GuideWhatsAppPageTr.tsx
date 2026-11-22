import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';
import { GuideRelatedLinks } from '../../components/GuideRelatedLinks';

interface GuideWhatsAppPageTrProps {
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
    text: "Telefonunuzun ya da bilgisayarınızın tarayıcısında compressmypic.online adresine gidin. Kurulacak hiçbir şey ve oluşturulacak hesap yok: araç hemen açılır.",
  },
  {
    title: "Fotoğrafınızı yükleyin",
    text: "«Dosyalara Gözat»a dokunun ve galerinizden fotoğrafı seçin ya da fotoğrafı sayfaya sürükleyip bırakın. Birden fazla fotoğrafı aynı anda yükleyebilirsiniz. Her görsel 20 MB'a kadar olabilir.",
  },
  {
    title: "Dengeli hazır ayarıyla başlayın",
    text: "Dengeli hazır ayarı (yaklaşık %70 kalite), WhatsApp fotoğrafları için iyi bir başlangıç noktasıdır. Dosya boyutunu çok küçültür ve fotoğraf telefon ekranında net görünmeye devam eder.",
  },
  {
    title: "Canlı öncesi-sonrası boyutunu inceleyin",
    text: "Her fotoğraf, orijinal boyutunu ve yeni sıkıştırılmış boyutunu yan yana gösterir. Dosya hâlâ istediğinizden büyükse kalite kaydırıcısını biraz aşağı çekin ve boyutun anında nasıl güncellendiğini izleyin.",
  },
  {
    title: "Fotoğraflar için JPG'yi koruyun",
    text: "Normal fotoğraflar için çıktı formatı olarak JPG'yi koruyun. WhatsApp'ın en iyi işlediği ve fotoğraflar için en küçük dosyaları üreten format budur. PNG'yi yalnızca görselinizin logo gibi şeffaflığa ihtiyacı varsa kullanın.",
  },
  {
    title: "Öncesini ve sonrasını karşılaştırın",
    text: "Fotoğrafın hâlâ iyi göründüğünü doğrulamak için öncesi-sonrası karşılaştırmasını açın. Yüzlere ve metne yakınlaştırın: gerçek bir fark görmüyorsanız kalite ayarı doğrudur.",
  },
  {
    title: "Daha küçük fotoğrafı indirin",
    text: "Fotoğrafta İndir'e dokunun ya da birden fazla fotoğrafı aynı anda sıkıştırdıysanız «Tümünü İndir (ZIP)»i kullanın. Daha küçük dosya cihazınıza kaydedilir; orijinal fotoğrafınız asla değiştirilmez.",
  },
  {
    title: "WhatsApp ile akıllıca gönderin",
    text: "Mümkün olan en iyi kaliteyi istiyorsanız sıkıştırılmış fotoğrafı belge olarak gönderin: WhatsApp'ta Ekle'ye, ardından Belge'ye dokunun ve dosyayı seçin. WhatsApp belgeleri hiç dokunmadan gönderir; böylece fotoğrafınız tam olarak sıkıştırdığınız gibi ulaşır. Fotoğraf olarak gönderirseniz WhatsApp onu ikinci kez sıkıştırır.",
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: "WhatsApp fotoğrafların kalitesini neden düşürür?",
    answer: "Normal şekilde bir fotoğraf gönderdiğinizde WhatsApp, veri ve alan tasarrufu için onu yeniden sıkıştırır ve çoğu zaman boyutunu ve kalitesini çok düşürür. Bu yüzden net bir kamera fotoğrafı gönderildikten sonra yumuşak ya da bulanık görünebilir.",
  },
  {
    id: 'wa-faq-2',
    question: "WhatsApp, belge olarak gönderilen görselleri sıkıştırır mı?",
    answer: "Hayır. Bir görseli belge olarak gönderdiğinizde (Ekle, ardından Belge), WhatsApp dosyayı olduğu gibi, ek sıkıştırma yapmadan gönderir. Bu, bir fotoğrafı tam kalitesiyle paylaşmanın en iyi yoludur.",
  },
  {
    id: 'wa-faq-3',
    question: "WhatsApp'ın kabul ettiği azami görsel boyutu nedir?",
    answer: "WhatsApp, 2 GB'a kadar belgelere izin verir; bu nedenle birkaç yüz KB'lık sıkıştırılmış bir fotoğraf asla sorun olmaz. Normal şekilde gönderilen fotoğraflar WhatsApp tarafından yeniden sıkıştırılır; bu nedenle pratikte önemli olan boyut değil kalitedir.",
  },
  {
    id: 'wa-faq-4',
    question: "WhatsApp ile tam kalitede bir fotoğrafı nasıl gönderirim?",
    answer: "Önce CompressMyPic ile fotoğrafı kendiniz sıkıştırarak makul bir boyuta getirin, ardından WhatsApp ile fotoğraf yerine belge olarak gönderin. Ekle'ye dokunun, Belge'yi seçin ve dosyayı belirleyin. WhatsApp onu yeniden sıkıştırmadan ulaşır.",
  },
  {
    id: 'wa-faq-5',
    question: "Göndermeden önce sıkıştırmalı mıyım, yoksa WhatsApp'ın yapmasına mı bırakmalıyım?",
    answer: "Önce kendiniz sıkıştırın. WhatsApp agresif bir şekilde sıkıştırır ve bunun üzerinde hiçbir kontrolünüz yoktur. Önce CompressMyPic ile sıkıştırdığınızda kaliteyi siz seçersiniz, sonucu incelersiniz ve ardından dosyayı belge olarak göndererek WhatsApp'ın ona dokunmasını engellersiniz.",
  },
  {
    id: 'wa-faq-6',
    question: "WhatsApp fotoğrafları için hangi kalite ayarını kullanmalıyım?",
    answer: "Yaklaşık %70 olan Dengeli hazır ayarıyla başlayın. Önemli bir fotoğraf için %80 ila %85 kullanın ve öncesi-sonrası karşılaştırmasını inceleyin. Günlük ve hızlı bir fotoğraf için, hız önemliyken %50 ila %60 telefon ekranında hâlâ iyi görünür ve çok daha küçük bir dosya üretir.",
  },
  {
    id: 'wa-faq-7',
    question: "İki kez sıkıştırmak fotoğrafları kötüleştirir mi?",
    answer: "Evet. Her JPEG sıkıştırma turu biraz daha ayrıntı siler. Bu nedenle yalnızca bir kez CompressMyPic ile sıkıştırmalı ve ardından sonucu belge olarak göndermelisiniz; WhatsApp'ın zaten sıkıştırılmış bir fotoğrafı ikinci kez sıkıştırmasına izin vermemelisiniz.",
  },
  {
    id: 'wa-faq-8',
    question: "WhatsApp fotoğraflarını telefonda sıkıştırabilir miyim?",
    answer: "Evet. CompressMyPic, Android ve iPhone tarayıcılarında çalışır. Siteyi açın, galerinizden fotoğrafı seçin, sıkıştırın, daha küçük dosyayı indirin ve ardından WhatsApp'tan paylaşın. Kurulacak uygulama yoktur.",
  },
  {
    id: 'wa-faq-9',
    question: "Sıkıştırılmış fotoğraflar WhatsApp durumlarında iyi görünür mü?",
    answer: "Evet, aşırıya kaçmazsanız. WhatsApp durumları fotoğrafları mütevazı bir çözünürlükte gösterir; bu nedenle Dengeli hazır ayarıyla (yaklaşık %70) sıkıştırılmış bir fotoğraf telefon ekranında orijinaliyle aynı görünür. Yüzlü ya da metinli durum fotoğraflarında %50'nin altına düşmekten kaçının.",
  },
  {
    id: 'wa-faq-10',
    question: "WhatsApp görselimin çok büyük olduğunu söylüyor, ne yapmalıyım?",
    answer: "Görseli CompressMyPic'e yükleyin ve dosya birkaç yüz KB olana kadar kalite kaydırıcısını aşağı çekin; ardından indirin ve yeniden gönderin. Fotoğraf olarak hâlâ gönderilemiyorsa çok daha büyük dosyaları kabul eden belge olarak gönderin.",
  },
  {
    id: 'wa-faq-11',
    question: "WhatsApp için JPG mi yoksa PNG mi kullanmalıyım?",
    answer: "Fotoğraflar için JPG kullanın. JPG, kamera fotoğrafları için çok daha küçük dosyalar üretir ve WhatsApp onu daha iyi işler. PNG'yi yalnızca logo gibi şeffaflık gerektiren görseller için kullanın; çünkü PNG dosyaları çok daha büyüktür.",
  },
  {
    id: 'wa-faq-12',
    question: "WhatsApp ile WebP görsel gönderebilir miyim?",
    answer: "WhatsApp WebP dosyalarını alabilir; ancak normal bir fotoğraf olarak görünmeyebilirler ve bazı telefonlar onları tuhaf işler. İnsanların sohbette doğrudan görmesini istediğiniz fotoğraflar için JPG en güvenli seçenektir. WebP, WhatsApp'tan çok web siteleri için daha iyidir.",
  },
  {
    id: 'wa-faq-13',
    question: "Birden fazla WhatsApp fotoğrafını aynı anda sıkıştırabilir miyim?",
    answer: "Tüm fotoğrafları CompressMyPic'e tek seferde yükleyin, hepsine aynı hazır ayarı uygulayın ve hepsini «Tümünü İndir (ZIP)» düğmesiyle birlikte indirin. Ardından dosyaları WhatsApp'tan tek tek ya da belge olarak gönderin.",
  },
  {
    id: 'wa-faq-14',
    question: "WhatsApp videoları da aynı şekilde sıkıştırır mı?",
    answer: "Evet, WhatsApp normal şekilde gönderilen videoları da sıkıştırır ve onları çok küçültebilir. CompressMyPic yalnızca görsellerle (JPG, PNG, WebP) çalışır, videolarla çalışmaz. Videolar için orijinal kaliteyi korumak üzere belge olarak gönderin.",
  },
  {
    id: 'wa-faq-15',
    question: "Bir fotoğrafı sıkıştırmak, telefonumdaki orijinali siler mi?",
    answer: "Hayır. CompressMyPic yeni ve daha küçük bir kopya oluşturur ve onu cihazınıza indirir. Orijinal fotoğrafınız galerinizde tam olarak olduğu gibi, dokunulmadan kalır.",
  },
  {
    id: 'wa-faq-16',
    question: "Sıkıştırırken fotoğraflarım bir sunucuya gönderiliyor mu?",
    answer: "Hayır. Tüm sıkıştırma, cihazınızdaki kendi tarayıcınızda gerçekleşir; bu nedenle fotoğraflarınız asla yüklenmez, saklanmaz ve başkası tarafından görülmez. Tarayıcınızın belleğinde kalırlar ve sekmeyi kapattığınızda ya da yenilediğinizde silinirler.",
  },
  {
    id: 'wa-faq-17',
    question: "WhatsApp için bir fotoğraf ne kadar küçük olmalı?",
    answer: "Günlük paylaşım için fotoğraf başına 100 ila 300 KB iyi bir hedeftir: hızlı gönderilir, az mobil veri harcar ve telefonda net görünmeye devam eder. Yazdırmak ya da saklamak istediğiniz bir fotoğraf için daha yüksek bir kalite ayarıyla 500 KB ile 1 MB arasında kalın.",
  },
  {
    id: 'wa-faq-18',
    question: "WhatsApp fotoğraflarım gönderdikten sonra neden bulanık görünüyor?",
    answer: "Çünkü WhatsApp, fotoğraf olarak gönderdiğinizde onları yeniden sıkıştırdı. Çözüm, fotoğrafı önce kendiniz, kontrol ettiğiniz bir kaliteyle sıkıştırmak ve ardından WhatsApp'ın onu yeniden sıkıştırmaması için belge olarak göndermektir.",
  },
  {
    id: 'wa-faq-19',
    question: "WhatsApp için bir ekran görüntüsünü sıkıştırabilir miyim?",
    answer: "Evet. Ekran görüntüsünü fotoğraf gibi CompressMyPic'e yükleyin. Ekran görüntüleri, geniş düz renk alanları olduğu için çok iyi sıkıştırılır: önce Dengeli hazır ayarını deneyin ve en küçük dosyayı istiyorsanız WebP çıktısına geçin.",
  },
  {
    id: 'wa-faq-20',
    question: "CompressMyPic, WhatsApp fotoğrafları için ücretsiz mi?",
    answer: "Evet, tamamen ücretsiz. Kayıt yok, filigran yok, sıkıştırdığınız fotoğraf sayısında sınır yok ve hesap gerekmez. Siteyi açın, sıkıştırın ve indirin.",
  },
];

export const GuideWhatsAppPageTr: React.FC<GuideWhatsAppPageTrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'WhatsApp için Görselleri Kalite Kaybetmeden Sıkıştırma';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'WhatsApp için görselleri kalite kaybetmeden nasıl sıkıştıracağınızı öğrenin. Ücretsiz ve gizli, kayıt yok: fotoğraflarınızı göndermeden önce küçültün; böylece net ulaşırlar.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/compress-images-for-whatsapp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'WhatsApp için Görselleri Kalite Kaybetmeden Sıkıştırma',
          description: 'CompressMyPic ile bir fotoğrafı sıkıştırın ve net kalması için WhatsApp ile belge olarak gönderin.',
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
          headline: "WhatsApp için Görselleri Kalite Kaybetmeden Sıkıştırma",
          description: "WhatsApp için görselleri kalite kaybetmeden nasıl sıkıştıracağınızı öğrenin. Ücretsiz ve gizli, kayıt yok: fotoğraflarınızı göndermeden önce küçültün; böylece net ulaşırlar.",
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
          mainEntityOfPage: "https://compressmypic.online/guides/compress-images-for-whatsapp/",
          inLanguage: 'tr',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "Ana Sayfa", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "Rehberler", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "WhatsApp için Görselleri Kalite Kaybetmeden Sıkıştırma", item: "https://compressmypic.online/guides/compress-images-for-whatsapp/" },
          ],
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    const prev = document.getElementById('guide-whatsapp-jsonld');
    if (prev) prev.remove();
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
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
            WhatsApp için Görselleri Kalite Kaybetmeden Sıkıştırma
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            Yazan <a href="/tr/hakkinda" onClick={(e) => { e.preventDefault(); onNavigate('/tr/hakkinda'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp, gönderdiğiniz her fotoğrafı küçültür; çoğu zaman gerekenden çok daha fazla. Önce fotoğraflarınızı kendiniz sıkıştırın ve doğru şekilde gönderin: net ulaşırlar, hızlı gönderilirler ve daha az mobil veri harcarlar.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>WhatsApp fotoğraflarınızı neden bulanıklaştırır</span>
            </h2>
            <p>
              WhatsApp ile normal şekilde bir fotoğraf gönderdiğinizde, WhatsApp onu teslim etmeden önce yeniden sıkıştırır. 3 MB'lık bir kamera fotoğrafı, yumuşak ayrıntılara ve bloklu renklere sahip 100 KB'lık bir dosya olarak ulaşabilir. WhatsApp bunu veri ve alan tasarrufu için yapar; ancak ne kadar kalite kaybedileceğine siz karar veremezsiniz.
            </p>
            <p>
              Çoğu kişinin hiç kullanmadığı ikinci bir fotoğraf gönderme yolu vardır: belge olarak göndermek. Belgeler olduğu gibi teslim edilir; ek sıkıştırma yapılmaz. Püf noktası, fotoğrafı önce kendiniz küçültmek; kalite ayarını siz kontrol edersiniz; ardından belge olarak göndermektir. Böylece aynı anda hem küçük bir dosya hem de net bir fotoğraf elde edersiniz.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>Adım adım: WhatsApp için bir fotoğraf sıkıştırın</span>
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
              src="/guides/compress-images-for-whatsapp-1.webp"
              alt="WhatsApp ile göndermeden önce CompressMyPic'e fotoğraf yüklemenin ekran görüntüsü"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Fotoğrafınızı CompressMyPic'e yükleyin: sürükleyip bırakın ya da galerinizden seçin.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>Hangi kalite ayarını kullanmalıyım?</span>
            </h2>
            <p>
              Herkes için tek bir mükemmel sayı yoktur: fotoğrafa ve kullanım amacına bağlıdır. Bunu başlangıç noktası olarak kullanın ve her seferinde öncesi-sonrası karşılaştırmasını inceleyin:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Günlük fotoğraflar: %70</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Dengeli hazır ayarı. Büyük boyut tasarrufu sağlar ve fotoğraf herhangi bir telefon ekranında net görünmeye devam eder. WhatsApp için varsayılan olarak en iyi seçenek.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Önemli fotoğraflar: %80–85</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Aile fotoğrafları, seyahat fotoğrafları, saklamak istediğiniz her şey. Dosya daha büyüktür; ancak yüzlerdeki ve manzaralardaki ince ayrıntılar korunur.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Hızlı gönderimler: %50–60</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Memler, hızlı güncellemeler, yavaş mobil veriyle çekilmiş fotoğraflar. Hâlâ telefon ekranı boyutunda iyi görünen çok daha küçük dosyalar.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>En iyi sonuçlar için ipuçları</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Yalnızca bir kez sıkıştırın, hem de yalnızca bir kez. Zaten sıkıştırılmış bir fotoğrafı ikinci kez sıkıştırmak, neredeyse hiç boyut tasarrufu sağlamadan ayrıntıları siler.</li>
              <li>Kalite önemliyse sıkıştırılmış dosyayı her zaman belge olarak gönderin: WhatsApp'ın onu yeniden sıkıştırmasını önlemenin tek yolu budur.</li>
              <li>Birden fazla fotoğrafı aynı ayarlarla aynı anda sıkıştırın ve hepsini Tümünü İndir (ZIP) düğmesiyle indirin.</li>
              <li>Metin içeren ekran görüntüleri ve grafikler için WebP çıktısını deneyin: kenarları net tutar ve JPG'den daha küçük bir dosya üretir.</li>
              <li>Orijinal fotoğrafınız asla değiştirilmez. CompressMyPic yeni ve daha küçük bir kopya kaydeder; böylece her zaman geri dönüp farklı bir kalite deneyebilirsiniz.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.webp"
              alt="CompressMyPic'te kalite kaydırıcısının ve canlı öncesi-sonrası dosya boyutunun ekran görüntüsü"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Kalite kaydırıcısını hareket ettirin ve öncesi-sonrası boyutunun, dosya istediğiniz boyuta ulaşana kadar canlı olarak nasıl güncellendiğini izleyin.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>Kaçınılması gereken yaygın hatalar</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>Sıkıştırdıktan sonra fotoğrafı fotoğraf olarak göndermek: WhatsApp onu ikinci kez sıkıştırır ve çalışmanızı boşa çıkarır.</li>
              <li>Yüzlü fotoğraflarda kaliteyi %40'ın altına düşürmek: düşük kalitede cilt ve ince ayrıntılar çok hızlı bloklaşır.</li>
              <li>Kamera fotoğrafları için PNG kullanmak: PNG dosyaları fotoğraflar için JPG dosyalarından çok daha büyüktür ve WhatsApp'ta size hiçbir şey kazandırmaz.</li>
              <li>Sonucu incelemeyi unutmak: özellikle metin içeren fotoğraflarda göndermeden önce öncesi-sonrası karşılaştırmasına her zaman bakın.</li>
            </ul>
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
                href="/tr/rehberler/jpg-vs-png-vs-webp"
                onClick={(e) => { e.preventDefault(); onNavigate('/tr/rehberler/jpg-vs-png-vs-webp'); }}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG, PNG ve WebP: Hangi formatı kullanmalısınız?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Dosya boyutunu, kaliteyi ve şeffaflığı karşılaştırdık; böylece her seferinde doğru formatı seçersiniz.</p>
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

          <GuideRelatedLinks guide="whatsapp" lang="tr" onNavigate={onNavigate} />

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="/tr/"
              onClick={(e) => { e.preventDefault(); onNavigate('/tr/'); }}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Görselleri ücretsiz sıkıştır
            </a>
            <a
              href="/tr/gorsel-100kb-ye-sikistir"
              onClick={(e) => { e.preventDefault(); onNavigate('/tr/gorsel-100kb-ye-sikistir'); }}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Bir görseli 100 KB'a küçült
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
