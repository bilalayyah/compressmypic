import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageTrProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageTr: React.FC<CookiePolicyPageTrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Çerez Politikası | CompressMyPic – Çerezler nasıl kullanılır?';
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
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Görsel sıkıştırıcıya dön</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Çerez Politikası
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Son güncelleme: 18 Kasım 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Çerez nedir?
            </h2>
            <p>
              Çerezler, bir web sitesinin tarayıcınızdan cihazınızda saklamasını istediği küçük metin dosyalarıdır. Ziyaretinizle ilgili bilgileri —örneğin bir mesajı daha önce görüp görmediğinizi— hatırlayabilir; böylece site ya da bir hizmet, sonraki bir ziyarette tarayıcınızı tanıyabilir. Bu politika, CompressMyPic'te hangi çerezlerin kullanıldığını, neden kullanıldıklarını ve bunları nasıl kontrol edebileceğinizi açıklar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Yüklemediğimiz çerezler
            </h2>
            <p>
              CompressMyPic hiçbir çerez yüklemez. Görsel araçlarımız tamamen tarayıcınızda çalışır: sıkıştırma için hesap, oturum açma ya da çerez gerekmez. Sizi hatırlamak, izlemek ya da tercihlerinizi kaydetmek için çerez yüklemeyiz. Görselleriniz asla tarayıcınızdan çıkmaz ve onlar hakkında hiçbir şey bir çerezde saklanmaz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Reklam çerezleri
            </h2>
            <p>
              CompressMyPic şu anda reklam göstermez ve reklam çerezi yüklemez.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Google Analytics 4 çerezleri
            </h2>
            <p>
              Sitenin nasıl kullanıldığını toplu olarak anlamak için Google Analytics 4 (GA4) kullanıyoruz —örneğin hangi araçların popüler olduğunu ve hangi sayfaların ziyaret edildiğini. GA4, bir ziyareti diğerinden ayırt etmek için _ga gibi çerezleri cihazınıza yükleyebilir. Veriler anonimdir ve yalnızca özet halinde kullanılır; GA4'ü sizi kişisel olarak tanımlamak için kullanmıyoruz. Google Analytics'i dilediğiniz zaman Google Analytics devre dışı bırakma eklentisini yükleyerek (https://tools.google.com/dlpage/gaoptout) ya da tarayıcınızın ayarlarından çerezleri devre dışı bırakarak reddedebilirsiniz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Onay (AEA, Birleşik Krallık ve İsviçre)
            </h2>
            <p>
              Bu site şu anda reklam göstermediği için hiçbir reklam onayı mesajı gösterilmez ve reklam için onay istenmez. Kullanım istatistikleri Google Analytics ile toplanır; analitik çerezleri tarayıcınızın ayarlarından engelleyebilirsiniz (bkz. bölüm 8).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Diğer üçüncü taraf hizmetleri
            </h2>
            <p>
              Bu sitedeki diğer bazı hizmetler kendilerine ait çerezler ya da benzer depolama kullanabilir. İletişim formumuzu spam'e karşı koruyan Google reCAPTCHA, insanları botlardan ayırt etmek için çerezler yükleyebilir; kullanımı Google'ın
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"> Gizlilik Politikası</a>
              'na ve
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"> Google Hizmet Şartları</a>
              'na tabidir. Bu siteyi barındıran Cloudflare, siteyi kötüye kullanıma karşı korumak için bir güvenlik çerezi yükleyebilir. Araçlarımızın altındaki anonim yorumlar yalnızca bir ad ister; bu ad, yorum hizmeti tarafından saklanır; bu sitenin bir çerezinde değil.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Çerez olmayan tarayıcı depolaması
            </h2>
            <p>
              Tarayıcınız ayrıca çerez olmayan az miktarda yerel bilgi de saklar. Bir yorum yayımlarsanız tarayıcınız, yeniden yazmanız gerekmemesi için yazdığınız adı hatırlayabilir; sitenin dilini değiştirirseniz tarayıcınız, sonraki ziyaretiniz için bu seçimi hatırlayabilir. Bu bilgiler kendi cihazınızda kalır, sunucularımıza asla gönderilmez ve tarayıcınızda site verilerini silerek dilediğiniz zaman silebilirsiniz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Çerezleri nasıl kontrol edersiniz?
            </h2>
            <p>
              Cihazınızda kayıtlı çerezleri silebilir ve gelecekte çerez yüklenmesini tarayıcınızın ayarlarından engelleyebilirsiniz —başlıca tarayıcıların tamamı (Chrome, Firefox, Safari, Edge) gizlilik ya da güvenlik ayarlarında bu seçeneği sunar. Tüm çerezleri engellemek, çerezlere bağlı olmayan görsel araçlarımızı etkilemez; ancak istatistik gibi üçüncü taraf hizmetlerinin özelliklerini etkileyebilir. Ayrıca tarayıcınızın pencereyi kapattığınızda çerezleri silen gizli ya da özel modunu da kullanabilirsiniz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Bu politikadaki değişiklikler
            </h2>
            <p>
              Site değiştiğinde bu politikayı güncelleyebiliriz —örneğin yeni bir reklam ortağı ya da yeni bir istatistik hizmeti eklersek. Bunu yaptığımızda bu sayfanın üst kısmındaki «Son güncelleme» tarihini değiştiririz. Bir değişiklikten sonra siteyi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. İletişim
            </h2>
            <p>
              Bu politikayla ilgili sorularınız varsa bize{' '}
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              {' '}adresinden ulaşın ya da{' '}
              <a href="/tr/gizlilik-politikasi" onClick={(e) => { e.preventDefault(); onNavigate('/tr/gizlilik-politikasi'); }} className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Gizlilik Politikamızı</a>
              {' '}okuyun.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
