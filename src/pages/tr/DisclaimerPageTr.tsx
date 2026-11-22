import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageTrProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageTr: React.FC<DisclaimerPageTrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Yasal Uyarı | CompressMyPic – Ücretsiz görsel araçları';
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
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Yasal Uyarı
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Son güncelleme: 18 Kasım 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Genel bilgiler
            </h2>
            <p>
              CompressMyPic, ücretsiz bir çevrimiçi görsel sıkıştırma ve düzenleme hizmetidir. Bu web sitesindeki araçlar, rehberler ve makaleler yalnızca genel bilgi ve pratik kullanım için sunulur. Bunlar hiçbir türde profesyonel tavsiye değildir — hukuki, tıbbi, mali ya da teknik değildir — ve sizinle CompressMyPic arasında hiçbir profesyonel ilişki oluşturmaz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Garanti yok
            </h2>
            <p>
              Hizmet, açık ya da zımni hiçbir garanti olmaksızın "olduğu gibi" ve "mevcut haliyle" sunulur. Araçların her zaman kullanılabilir olacağını, kesintisiz, hatasız ya da zararlı bileşenlerden arınmış olacağını ya da belirli bir görselin belirli bir boyuta ya da kaliteye sıkıştırılacağını garanti etmeyiz. Sonuçlar orijinal görsele, formatına ve tarayıcınıza bağlıdır; bu nedenle herhangi bir aracı kullanmadan önce orijinal dosyalarınızın bir kopyasını her zaman saklayın.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. İçeriğin doğruluğu
            </h2>
            <p>
              Rehberlerimizi, makalelerimizi ve açıklamalarımızı doğru ve güncel tutmak için çalışıyoruz; ancak görsel formatları, tarayıcılar ve web standartları zamanla değişir. Çabalarımıza rağmen bu sitedeki bilgiler güncelliğini yitirmiş olabilir ya da hatalar içerebilir. Önemli verileri —örneğin bir platformun boyut sınırlarını— güvenmeden önce her zaman o platformun resmi belgelerinden doğrulayın.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Dosyalarınız sizin sorumluluğunuzdadır
            </h2>
            <p>
              Görseller tarayıcınızda yerel olarak işlenir ve sunucularımıza asla yüklenmez. Bu aynı zamanda bir dosyayı sizin için geri getiremeyeceğimiz anlamına gelir: araçlarımızı kullanırken orijinal bir görselin üzerine yazarsanız, siler ya da kaybederseniz onu geri yükleyemeyiz. Önemli görsellerin yedeklerini saklayın ve yalnızca size ait olan ya da düzenlemeye izniniz olan dosyaların kopyalarını işleyin.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Üçüncü taraf hizmetleri ve bağlantıları
            </h2>
            <p>
              Bu site, kullanım istatistikleri için Google Analytics 4, iletişim formu için FormSubmit ve anonim yorumlar için bir Cloudflare Worker gibi üçüncü taraf hizmetleri kullanır ve harici web sitelerine bağlantı verir. Bu hizmetleri ya da siteleri kontrol etmiyoruz; içeriklerinden, kullanılabilirliklerinden, gizlilik uygulamalarından ya da doğruluklarından sorumlu değiliz. Bunları kullanırken kendi şartları ve gizlilik politikaları geçerlidir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Reklam
            </h2>
            <p>
              Bu site şu anda reklam göstermemektedir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Sorumluluğun sınırlandırılması
            </h2>
            <p>
              Yasaların izin verdiği azami ölçüde, CompressMyPic ve işletmecisi, bu web sitesinin ya da araçlarının kullanımından —veya kullanılamamasından— doğan dosya, veri ya da kâr kaybı dahil ancak bunlarla sınırlı olmaksızın hiçbir doğrudan, dolaylı, arızi ya da sonuçsal kayıp ya da zarardan sorumlu tutulamaz. Hizmetten herhangi bir memnuniyetsizliğe karşı tek çareniz, hizmeti kullanmayı bırakmaktır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Kullanıcı yorumları
            </h2>
            <p>
              Araçlarımızın altında yayımlanan yorumlar ziyaretçiler tarafından yazılır ve onların kendi görüşlerini yansıtır; bizim görüşlerimizi yansıtmaz. Yorumları denetliyoruz ve spam, kötüye kullanım içeren ya da konu dışı olan içerikleri kaldırabiliriz; ancak kullanıcı yorumlarının içeriğini onaylamaz ve bunlardan sorumluluk üstlenmeyiz. Bir yorumda asla şifre, ödeme bilgisi ya da hassas kişisel bilgi paylaşmayın.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. İletişim
            </h2>
            <p>
              Bu yasal uyarıyla ilgili sorularınız varsa bize{' '}
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              {' '}adresinden ulaşın.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
