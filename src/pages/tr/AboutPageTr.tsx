import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageTrProps {
  onNavigate: (path: string) => void;
}

export const AboutPageTr: React.FC<AboutPageTrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'CompressMyPic Hakkında – Ücretsiz çevrimiçi görsel sıkıştırıcı';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'CompressMyPic hakkında: JPG, PNG ve WebP için ücretsiz çevrimiçi görsel sıkıştırıcı. Görselleri çevrimiçi ücretsiz sıkıştırın; kayıt yok, filigran yok ve hiçbir şey bir sunucuya yüklenmez.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/tr/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Görsel sıkıştırıcıya dön</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            CompressMyPic Hakkında
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic, ücretsiz ve gizlilik odaklı bir görsel sıkıştırıcıdır. JPG, PNG ve WebP görsellerini doğrudan tarayıcınızda sıkıştırın: hızlı, güvenli ve dosyalarınızı hiçbir yere yüklemeden.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic nedir?</span>
            </h2>
            <p>
              CompressMyPic, kaliteden ödün vermeden görsellerinizin boyutunu küçültmenize yardımcı olan ücretsiz bir çevrimiçi görsel sıkıştırıcı ve görsel optimize edicidir. Her gün kullandığınız formatlar için bir fotoğraf sıkıştırıcı ve fotoğraf boyutu küçültücüdür: JPG, PNG ve WebP. JPG'yi 100 KB'a sıkıştırmak, PNG'yi çevrimiçi ücretsiz sıkıştırmak, WebP görsellerini sıkıştırmak ya da bir fotoğrafı WhatsApp, Instagram, Facebook veya e-posta ile paylaşmadan önce küçültmek için kullanın.
            </p>
            <p>
              Geleneksel görsel sıkıştırma siteleri, kişisel fotoğraflarınızı veya şirket grafiklerinizi başkasına ait bir sunucuya yükler. Bu uygulama haklı endişeler doğurur ve CompressMyPic'i tam tersi şekilde oluşturmamızın nedeni de budur: her şeyi kendi cihazınızda yapan bir araç olarak.
            </p>
            <p>
              Bir görsel seçtiğinizde veya sürükleyip bıraktığınızda, tarayıcınız bellekte geçici bir arabellek ayırır, görseli bir HTML Canvas öğesine çizer, sıkıştırma algoritmasını uygular ve ardından yeni dosyayı dışa aktarır; bunların hepsi kendi tarayıcı sekmenizin içinde gerçekleşir. Görsellerinizi sıkıştırma sürecinde hiçbir ağ altyapısı, veritabanı ya da bulut sunucusu yer almaz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Desteklenen formatlar: JPG, PNG ve WebP</span>
            </h2>
            <p>
              Bir JPG sıkıştırıcı olarak CompressMyPic, JPG'yi çevrimiçi ücretsiz sıkıştırmanıza ve fotoğraflarınızın netliğini kaybetmeden JPEG dosyalarınızın boyutunu küçültmenize olanak tanır: Dengeli hazır ayarını deneyin ya da kalite kaydırıcısını aşağı çekin ve 100 KB veya 200 KB gibi hedeflere ulaşmak için öncesi-sonrası boyutunu canlı olarak izleyin. Bir PNG sıkıştırıcı olarak, logo ve grafiklerdeki şeffaflığı koruyarak PNG'yi çevrimiçi ücretsiz sıkıştırmanıza olanak tanır. WebP görsellerini sıkıştırdığınızda ise en küçük dosyaları elde edersiniz: WebP, benzer kalitede JPEG'den genellikle %25 ila %35 daha küçüktür; bu da onu web sayfaları için görsel optimizasyonunda en iyi seçenek yapar.
            </p>
            <p>
              Her görselin orijinal formatını koruyabilir ya da JPG, PNG ve WebP arasında dönüştürme yapabilirsiniz. Kalite kaydırıcısı (%10 ila %100), Düşük, Dengeli ve Yüksek hazır ayarları ve canlı öncesi-sonrası boyut görünümü, dosya boyutu ile görsel kalitesi arasındaki denge üzerinde tam kontrol sağlar; araçta olmayan, KB cinsinden tam bir hedef boyut girebileceğiniz bir kutu asla vaat edilmez.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Temel ilkelerimiz</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Mutlak gizlilik</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Hiçbir dosya asla harici bir sunucuya ya da veritabanına dokunmaz. Fotoğraflarınız ve hassas grafikleriniz kesinlikle cihazınızda kalır. Sıkıştırma kendi tarayıcınızda yapıldığı için çalışmanızı sizden başka kimse görmez.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Basit ve ücretsiz</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Program kurmak yok, ücretli plan yok, gizli ücret yok, hesap oluşturmak yok, e-posta doğrulaması yok ve deneme sınırı yok. Görselleri çevrimiçi ücretsiz sıkıştırın: gerçekten ücretsiz, kayıtsız ve sıkıştırılmış görsellerinizde filigran yok.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Kalite sizin kontrolünüzde</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Hassas kontrole sahipsiniz: Kalite kaydırıcısını gerçek zamanlı olarak hareket ettirin, Düşük, Dengeli veya Yüksek hazır ayarlarından birini seçin, çıktı dosya formatını belirleyin ve farkları anında görmek için her görseli yan yana karşılaştırın. Görsellerinizin boyutunu kaliteden ödün vermeden, kendi istediğiniz şekilde küçültün.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Toplu görsel sıkıştırıcı</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Aynı ayarlarla birden fazla görseli aynı anda sıkıştırın ve hepsini birden Tümünü İndir (ZIP) düğmesiyle indirin: fotoğraf arşivleri, ürün katalogları ve web sitesi görsel klasörleri için toplu görsel sıkıştırıcı.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Otomatik güvenlik kontrolleri</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Sıkıştırıcı, görsellerinizdeki şeffaflığı algılar. Şeffaf bir PNG için JPEG çıktısı seçerseniz size bir uyarı gösteririz; çünkü JPEG şeffaflığı desteklemez. Böylece alfa kanalınızı yanlışlıkla kaybetmezsiniz.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Hızlı performans</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Tüm işlemler cihazınızda yerel olarak yapıldığı için dosyaların bir sunucuya yüklenip indirilmesini beklemeniz gerekmez. Bilgisayarda veya telefonda, görsel başına 20 MB'a kadar büyük dosyalar dahil, fotoğrafları hızlıca sıkıştırabilirsiniz.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic kimler için?</span>
            </h2>
            <p>
              CompressMyPic, daha küçük görsellere ihtiyaç duyan herkes içindir: web için görsel optimize etmek ve sayfalarındaki görsellerin boyutunu küçültmek isteyen blog yazarları ve site sahipleri; paylaşmadan ya da prova göndermeden önce fotoğraflarının boyutunu küçültmesi gereken fotoğrafçılar; sitesi ya da ilanı için bir fotoğrafı sıkıştıran çevrimiçi satıcılar; e-postaya eklemek için görsel sıkıştıran öğrenciler ve ofis çalışanları; ve daha hızlı göndermek ve daha az mobil veri harcamak için WhatsApp, Instagram veya Facebook için bir görsel sıkıştırmak isteyen herkes.
            </p>
            <p>
              Bilgisayar ve telefon tarayıcılarında çalışır, kurulum gerektirmez ve asla kayıt olmanızı istemez: siteyi açın, görsellerinizi yükleyin ve daha küçük dosyaları indirin.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Oluşturan: Bilal</span>
            </h2>
            <p>
              CompressMyPic, web için ücretsiz ve gizliliğe saygılı araçlar geliştiren bağımsız bir üretici olan Bilal tarafından oluşturuldu. CompressMyPic'i, insanları yalnızca bir dosyayı küçültmek için kişisel fotoğraflarını tanımadıkları birinin sunucusuna yüklemeye zorlayan görsel sıkıştırıcılara duyduğu hayal kırıklığından sonra başlattı. Onun yanıtı, tüm işi ziyaretçinin kendi tarayıcısında yapan bir araç oldu: yükleme yok, hesap yok, filigran yok ve sonunda sürpriz bir fatura yok.
            </p>
            <p>
              Bilal, sıkıştırıcı ve dönüştürücülerden favicon oluşturucuya kadar sitenin 47 aracının tamamını kendisi tasarlıyor, geliştiriyor ve bakımını yapıyor. Destek mesajlarına bizzat yanıt veriyor, her yorumu okuyor ve araçları herkes için ücretsiz tutuyor; ister bir fotoğraf ister bin fotoğraf sıkıştırıyor olun. Sitenin alt bilgisinde, Bilal'e geliştirmeye devam etmesi ve araçları yalnızca popüler değil gerçekten faydalı hale getirmesi için ilham veren Shaheen'e küçük bir teşekkür yer alır.
            </p>
            <p>
              Çalışmalarını takip etmek isterseniz projeyi{' '}
              <a
                href="https://github.com/bilalayyah/compressmypic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                GitHub
              </a>
              'da bulabilir, Bilal'in rehberlerini{' '}
              <a
                href="https://dev.to/bilalayyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                Dev.to
              </a>
              'da okuyabilir ya da{' '}
              <button
                type="button"
                onClick={() => onNavigate('/tr/iletisim')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                iletişim sayfası
              </button>
              {' '}üzerinden merhaba diyebilirsiniz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Gizlilik ve güvenlik</span>
            </h2>
            <p>
              CompressMyPic'te gizliliğin isteğe bağlı bir özellik değil, temel bir hak olduğuna inanıyoruz. Günümüzde birçok web sitesi, bir görsel sıkıştırma aracı bile, varsayılan olarak veri topluyor. Biz gizliliği önceleyen bir yaklaşım benimsiyor ve dosyalarınızı bilgisayarınızda yerel olarak işlemek için modern tarayıcı teknolojisini kullanıyoruz.
            </p>
            <p>
              Dosyalarınız tarayıcınızın belleğinde kalır ve sekmeyi kapattığınızda ya da sayfayı yenilediğinizde hemen silinir. Görsel işleme uzak sunucularda gerçekleşmediği için, istesek bile görsellerinizden veri toplayamayız. Bu, aracın tasarımı ve vaadidir.
            </p>
            <p>
              Gizliliğinizi tam olarak nasıl ele aldığımızı öğrenmek için{' '}
              <button
                type="button"
                onClick={() => onNavigate('/tr/gizlilik-politikasi')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                Gizlilik Politikamızı
              </button>
              {' '}ziyaret edin.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Misyonumuz</span>
            </h2>
            <p>
              En iyi araçların en basit, en hızlı ve en şeffaf araçlar olduğuna inanıyoruz. Misyonumuz, herkese hızlı, güvenilir ve tamamen ücretsiz bir görsel sıkıştırıcı sunmaktır: gizli tuzaklar yok, sizi izleyen reklamlar yok, sunucuya yükleme yok ve gizliliğinizden ödün vermek yok. İster tek bir JPG ister bir grup WebP görseli sıkıştırıyor olun, araç yalnızca çalışmalıdır.
            </p>
            <p>
              Sorunuz, fikriniz var mı ya da iyileştirebileceğimiz bir şey mi buldunuz? Sizden haber almak isteriz. Site üzerinden bize doğrudan yazabilirsiniz.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/tr/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              Görselleri sıkıştırmaya başla
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/tr/iletisim')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              Bize ulaşın
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
