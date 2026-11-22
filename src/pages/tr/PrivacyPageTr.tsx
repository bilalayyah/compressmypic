import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageTrProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageTr: React.FC<PrivacyPageTrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Gizlilik Politikası - CompressMyPic';
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
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Gizlilik Politikası
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Son güncelleme: 15 Kasım 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Tarayıcınızda görsel işleme
            </h2>
            <p>
              CompressMyPic, ücretsiz bir çevrimiçi görsel sıkıştırıcıdır. Görseller, HTML5 Canvas ile tarayıcınızda yerel olarak işlenir: sunucularımıza asla yüklenmez ve görsellerinizi toplamaz, saklamaz ya da paylaşmayız. Tarayıcı sekmesini kapattığınızda ya da yenilediğinizde bellekteki tüm geçici nesneler silinir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Kişisel veri toplamıyoruz
            </h2>
            <p>
              Sıkıştırma aracını kullanmak için hesap, şifre, e-posta adresi ya da telefon numarası istemeyiz. İletişim formumuz aracılığıyla gönüllü olarak gönderdiğiniz iletişim bilgileri yalnızca ilgili sorunuza yanıt vermek için kullanılır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Reklam
            </h2>
            <p>
              CompressMyPic şu anda reklam göstermemektedir. Bu site reklam çerezleri yüklemez.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analitik
            </h2>
            <p>
              Sitenin nasıl kullanıldığını toplu olarak anlamak için Google Analytics 4 (GA4) kullanıyoruz; örneğin hangi araçların popüler olduğunu ve hangi sayfaların ziyaret edildiğini. GA4, ziyaret ettiğiniz sayfalar, sayfalarda ne kadar kaldığınız ve cihazınız ile tarayıcınız hakkında genel bilgiler gibi anonimleştirilmiş kullanım verileri toplar. Bir ziyareti diğerinden ayırt etmek için cihazınıza (_ga gibi) çerezler yükleyebilir. GA4'ü sizi kişisel olarak tanımlamak için kullanmıyoruz. Google Analytics'i dilediğiniz zaman Google Analytics devre dışı bırakma eklentisini yükleyerek (https://tools.google.com/dlpage/gaoptout) ya da tarayıcınızın ayarlarından çerezleri devre dışı bırakarak reddedebilirsiniz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Üçüncü taraf bağlantıları
            </h2>
            <p>
              Web sitemiz harici sitelere bağlantılar içerebilir. Üçüncü taraf platformların gizlilik uygulamalarından ya da içeriklerinden sorumlu değiliz.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Çerezler ve onay
            </h2>
            <p>
              CompressMyPic, görsel araçları için hiçbir çerez yüklemez: sıkıştırma tamamen tarayıcınızda gerçekleşir ve bizden herhangi bir çerez, hesap ya da kayıtlı tercih gerektirmez. Bu sitedeki çerezler üçüncü taraf hizmetlerden gelir. Örneğin Google Analytics, kullanım istatistikleri için çerezler yükleyebilir. Tarayıcınız bu çerezleri cihazınızda saklar ve bunları tarayıcı ayarlarından dilediğiniz zaman silebilirsiniz.
            </p>
            <p>
              CompressMyPic şu anda reklam göstermediği için hiçbir bölgedeki ziyaretçilerden reklam onayı istenmez.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. GDPR kapsamındaki haklarınız
            </h2>
            <p>
              Avrupa Ekonomik Alanı'nda veya Birleşik Krallık'ta bulunuyorsanız, Genel Veri Koruma Tüzüğü (GDPR) kişisel verileriniz üzerinde size haklar tanır. Hakkınızda tuttuğumuz kişisel verilerin bir kopyasını isteyebilir, yanlışsa düzeltilmesini isteyebilir, silinmesini isteyebilir, kullanımının sınırlandırılmasını isteyebilir ve işlenmesine itiraz edebilirsiniz. İşleme onayınıza dayandığında, onayınızı dilediğiniz zaman geri çekebilirsiniz; geri çekmek, öncesinde yasal olarak yaptıklarımızı etkilemez.
            </p>
            <p>
              Araçlarımız görselleri yerel olarak işlediği ve kullanıcı hesabımız olmadığı için, normalde tuttuğumuz tek kişisel veriler, iletişim formu aracılığıyla gönderdiğiniz ad, e-posta adresi ve mesajdır. Bu haklardan herhangi birini kullanmak için bize <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> adresinden yazın; 30 gün içinde yanıt veririz. Verilerinizi haksız şekilde işlediğimizi düşünüyorsanız, yerel veri koruma yetkilinize şikâyette bulunma hakkınız da vardır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Verilerin saklanması
            </h2>
            <p>
              Kişisel verileri yalnızca toplandıkları amaç için gerekli olduğu sürece saklarız. İletişim formu mesajları, sorunuza yanıt verilip görüşme sona erene kadar ve takip soruları için kısa bir süre daha saklanır; asla pazarlama için kullanılmaz ve üçüncü taraflarla paylaşılmaz. Görselleriniz hiç saklanmaz: yalnızca bir aracı kullanırken tarayıcınızın belleğinde bulunur ve sekmeyi kapattığınız ya da yenilediğiniz anda silinir. Toplu analitik veriler kişisel bilgi içermez ve yalnızca özet halinde saklanır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Güvenlik ve reCAPTCHA
            </h2>
            <p>
              Site HTTPS üzerinden sunulur; tarayıcınız ile site arasındaki bağlantı şifrelenir. İletişim formumuz, mesajınızı e-posta adresimize ileten FormSubmit aracılığıyla teslim edilir ve form, spam ve otomatik kötüye kullanımı engellemek için Google reCAPTCHA ile korunur. Formu gönderdiğinizde reCAPTCHA, insanları botlardan ayırt etmek için tarayıcı ve cihaz verileriniz gibi donanım ve yazılım bilgileri toplayabilir; bu durum, Google'ın <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Gizlilik Politikası
              </a>'na ve <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Hizmet Şartları
              </a>'na tabidir. İletişim formu aracılığıyla sizden asla şifre, ödeme bilgisi ya da hassas kişisel belge göndermenizi istemeyiz; siz de bunları bir mesaja eklememelisiniz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Çocukların gizliliği
            </h2>
            <p>
              CompressMyPic genel kitleye yönelik bir araçtır ve 13 yaşından küçük çocuklara yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamıyoruz. Ebeveyn ya da vasi olarak, çocuğunuzun iletişim formu aracılığıyla bize kişisel bilgi gönderdiğini düşünüyorsanız bize e-posta yazın; bilgiyi hemen sileriz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Bu politikadaki değişiklikler
            </h2>
            <p>
              Site değiştiğinde bu politikayı güncelleyebiliriz; örneğin yeni bir analitik hizmeti, yeni bir reklam ortağı ya da bize ulaşmanın yeni bir yolunu eklersek. Bunu yaptığımızda bu sayfanın üst kısmındaki «Son güncelleme» tarihini değiştiririz ve önemli değişiklikler burada sade bir dille açıklanır. Bir değişiklikten sonra siteyi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. İletişim
            </h2>
            <p>
              Bu politikayla ilgili sorularınız varsa bize{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}adresinden yazın.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
