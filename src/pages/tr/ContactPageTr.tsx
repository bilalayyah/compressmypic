import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageTrProps {
  onNavigate: (path: string) => void;
}

export const ContactPageTr: React.FC<ContactPageTrProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Bize Ulaşın - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bilalayyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject || 'CompressMyPic Contact Inquiry',
          message: contactMessage,
          _subject: `New inquiry from ${contactName}: ${contactSubject || 'CompressMyPic'}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Mesaj gönderilemedi. Lütfen tekrar deneyin.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Ağ hatası. Doğrudan bilalayyah@gmail.com adresine göndermeyi deneyin.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Bize Ulaşın
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            Sorunuz, geri bildiriminiz mi var ya da yardıma mı ihtiyacınız var? Aşağıdaki formla ekibimize yazın ya da e-posta ile doğrudan bize ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>Doğrudan sorular</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>Yanıt süresi</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Genellikle 24 ila 48 iş saati içinde yanıt veririz.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>Gizlilik taahhüdü</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                E-posta adresiniz ve mesajınızdaki veriler yalnızca sorunuza yanıt vermek için kullanılır ve asla paylaşılmaz.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Mesaj başarıyla gönderildi</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  Bize yazdığınız için teşekkürler! Mesajınız FormSubmit aracılığıyla bilalayyah@gmail.com adresine gönderildi. Size yakında yanıt vereceğiz.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    Başka bir mesaj gönder
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
                {errorMessage && (
                  <div className="p-3 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-xs rounded-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Adınız <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ayşe Yılmaz"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      E-posta adresi <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="ayse@ornek.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Konu <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Geri bildirim, hata bildirimi ya da genel soru"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Mesaj <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Size nasıl yardımcı olabiliriz? Sorununuzu ya da önerinizi ayrıntılı olarak açıklayın..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 btn-purple-pill disabled:opacity-50 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>Mesaj gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Mesaj gönder</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Extra Information Sections */}
        <div className="mt-12 space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic'in arkasında kim var</span>
            </h2>
            <p>
              CompressMyPic, gerçekten ücretsiz ve gizliliğinize saygılı bir görsel sıkıştırıcı isteyen bağımsız bir üretici olan Bilal tarafından oluşturuluyor ve bakımı yapılıyor. Çevrimiçi araçların çoğundan farklı olarak CompressMyPic fotoğraflarınızı asla bir sunucuya yüklemez: her görsel doğrudan kendi tarayıcınızda sıkıştırılır. Bilal her mesajı bizzat okur ve geri bildirimlerinizi hataları düzeltmek, kaliteyi iyileştirmek ve hangi yeni araçları oluşturacağına karar vermek için kullanır.
            </p>
            <p>
              Bu küçük ve bağımsız bir proje olduğu için, büyük bir şirket olmadığı için, her zaman doğrudan ve dürüst bir yanıt alırsınız; yanıt, bir özelliğin henüz mümkün olmadığı olsa bile. Sizinle aracı oluşturan kişi arasında ne bir destek sırası ne de otomatik bir sohbet robotu vardır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Bize ne hakkında yazabilirsiniz?</span>
            </h2>
            <p>
              Yardım almanın en hızlı yolu, tam olarak ne olduğunu anlatmaktır. Bir hata bildirmek için kullandığınız aracın adını, tarayıcınızı ve görsel dosyasının türünü ekleyin; örneğin bir iPhone'dan HEIC fotoğraf ya da şeffaf bir PNG. Bir özellik önermek için neyi başarmak istediğinizi ve mevcut araçların bunu neden karşılamadığını açıklayın. Beklenenden kötü görünen sıkıştırılmış bir görsel gibi yanlış sonuç bildirimlerini ve rehberlerimizdeki ya da çevrilmiş herhangi bir sayfadaki düzeltmeleri de memnuniyetle karşılarız.
            </p>
            <p>
              Bize ortaklıklar, basın soruları ve yeni araç önerileri hakkında da yazabilirsiniz. Bir web siteniz, blogunuz ya da sınıfınız varsa ve CompressMyPic'i okuyucularınıza ya da öğrencilerinize önermek istiyorsanız bunu duymak isteriz: yukarıdaki formu kullanın ve mesajınızın hızla doğru yere ulaşması için açık bir konu seçin.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Bilal'e ulaşmanın diğer yolları</span>
            </h2>
            <p>
              Halka açık bir kanalı tercih ederseniz Bilal'i ve CompressMyPic projesini web'de bulabilirsiniz. Kaynak kodu GitHub'da; teknik sorunları orada bildirebilir ve geliştirmeyi takip edebilirsiniz. Görsel sıkıştırma üzerine uzun rehberler Dev.to'da yayımlanıyor ve ürün, ilerlemesini takip edip yorum bırakabileceğiniz Indie Hackers'ta listeleniyor.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— kaynak kodu, hata bildirimleri ve geliştirme haberleri.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— JPG, PNG ve WebP sıkıştırma rehberleri.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— ürün sayfası, kilometre taşları ve topluluk yorumları.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Bize yazmadan önce</span>
            </h2>
            <p>
              Birkaç hızlı kontrol, çoğu sorunu yanıt beklemeden çözer. Ana sıkıştırıcı, görsel başına 20 MB'a kadar görsel kabul ederken format dönüştürücüler dosya başına 25 MB'a kadar kabul eder; daha büyük bir dosya başlamadan reddedilir. Çok eski tarayıcılar AVIF veya HEIC gibi yeni formatları desteklemeyebilir; bu nedenle Chrome, Edge, Firefox ya da Safari'nin güncel bir sürümünü denemek, bozuk görünen bir aracı genellikle düzeltir. Görselleriniz cihazınızdan asla çıkmadığı için, belirli bir fotoğrafla ilgili bir sorun genellikle dosyadan kaynaklanır, web sitesinden değil.
            </p>
            <p>
              Bize yazarken tarayıcınızın adını ve sürümünü, kullandığınız aracı ve görselin boyutunu ve formatını ekleyin. Genellikle 24 ila 48 iş saati içinde, İngilizce yanıt veririz. Sorunuz verilerinizi nasıl ele aldığımızla ilgiliyse önce{' '}
              <button
                type="button"
                onClick={() => onNavigate('/tr/gizlilik-politikasi')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                Gizlilik Politikamızı
              </button>
              {' '}da okuyabilirsiniz: görsellerinizin asla yüklenmediğini ve saklanmadığını orada sade bir dille açıklıyoruz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Sorun bildirin</span>
            </h2>
            <p>
              Bozuk bir şey mi buldunuz? Hangi sayfada olduğunu, neye tıkladığınızı ve bunun yerine ne görmeyi beklediğinizi söyleyin. Ekran görüntüleri çok yardımcı olur ve sorun belirli bir görselle ilgiliyse formatını ve boyutunu bize bildirin; ancak bize asla özel ya da hassas fotoğraflar göndermeyin. Bildirilen hataları mümkün olan en kısa sürede düzeltir ve düzeltme yayımlandığında size e-posta ile haber veririz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
