import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageHiProps {
  onNavigate: (path: string) => void;
}

export const ContactPageHi: React.FC<ContactPageHiProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'संपर्क करें - CompressMyPic';
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
        throw new Error(data?.message || 'संदेश नहीं भेजा जा सका। कृपया फिर से प्रयास करें।');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'नेटवर्क त्रुटि। कृपया सीधे bilalayyah@gmail.com पर भेजने का प्रयास करें।'
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
            onClick={() => onNavigate('/hi/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>इमेज कंप्रेसर पर वापस जाएं</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            संपर्क करें
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            क्या आपके पास कोई सवाल, प्रतिक्रिया है, या मदद चाहिए? नीचे दिए गए फ़ॉर्म से हमारी टीम को लिखें या सीधे ईमेल से संपर्क करें।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>सीधी पूछताछ</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>जवाब का समय</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                हम आमतौर पर 24 से 48 कार्य घंटों के भीतर जवाब देते हैं।
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>गोपनीयता की प्रतिबद्धता</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                आपका ईमेल और आपके संदेश का डेटा सिर्फ़ आपकी पूछताछ का जवाब देने के लिए इस्तेमाल होता है और कभी शेयर नहीं किया जाता।
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">संदेश सफलतापूर्वक भेजा गया</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  लिखने के लिए धन्यवाद! आपका संदेश FormSubmit के ज़रिए bilalayyah@gmail.com पर भेजा गया। हम जल्द ही जवाब देंगे।
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    एक और संदेश भेजें
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
                      आपका नाम <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="राहुल शर्मा"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      ईमेल <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    विषय <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="प्रतिक्रिया, बग रिपोर्ट या सामान्य प्रश्न"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    संदेश <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="हम आपकी कैसे मदद कर सकते हैं? अपनी समस्या या सुझाव विस्तार से बताएं..."
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
                      <span>संदेश भेजा जा रहा है...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>संदेश भेजें</span>
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
              <span>CompressMyPic के पीछे कौन है</span>
            </h2>
            <p>
              CompressMyPic को Bilal ने बनाया और बनाए रखा है — एक स्वतंत्र निर्माता जो सच में मुफ़्त और आपकी गोपनीयता का सम्मान करने वाला इमेज कंप्रेसर चाहते थे। ज़्यादातर ऑनलाइन टूल के उलट, CompressMyPic आपकी फ़ोटो कभी किसी सर्वर पर अपलोड नहीं करता: हर इमेज सीधे आपके अपने ब्राउज़र में कंप्रेस होती है। Bilal हर संदेश खुद पढ़ते हैं और आपकी प्रतिक्रिया का इस्तेमाल बग ठीक करने, क्वालिटी सुधारने और यह तय करने के लिए करते हैं कि आगे कौन से नए टूल बनाए जाएं।
            </p>
            <p>
              चूंकि यह एक छोटा, स्वतंत्र प्रोजेक्ट है, कोई बड़ी कंपनी नहीं, इसलिए आपको हमेशा सीधा और ईमानदार जवाब मिलेगा — तब भी जब जवाब यह हो कि कोई सुविधा अभी संभव नहीं है। आपके और टूल बनाने वाले व्यक्ति के बीच कोई सपोर्ट कतार नहीं है, कोई ऑटोमैटिक चैटबॉट नहीं है।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>आप हमें किस बारे में लिख सकते हैं?</span>
            </h2>
            <p>
              मदद पाने का सबसे तेज़ तरीका है हमें ठीक-ठीक बताना कि क्या हुआ। बग रिपोर्ट करने के लिए, आप जिस टूल का इस्तेमाल कर रहे थे उसका नाम, अपना ब्राउज़र और इमेज फ़ाइल का प्रकार शामिल करें — उदाहरण के लिए, iPhone की HEIC फ़ोटो या पारदर्शी PNG। सुविधा सुझाने के लिए, बताएं कि आप क्या हासिल करना चाहते थे और मौजूदा टूल उसे क्यों पूरा नहीं करते। हम गलत नतीजों की रिपोर्ट का भी स्वागत करते हैं, जैसे कंप्रेस की गई इमेज जो उम्मीद से बदतर दिखती है, और हमारी गाइड या किसी भी अनुवादित पेज में सुधार का भी।
            </p>
            <p>
              आप हमें साझेदारी, प्रेस पूछताछ और नए टूल के सुझाव के बारे में भी लिख सकते हैं। यदि आपकी वेबसाइट, ब्लॉग या क्लासरूम है और आप अपने पाठकों या छात्रों को CompressMyPic सुझाना चाहते हैं, तो हमें जानकर खुशी होगी: ऊपर दिया गया फ़ॉर्म इस्तेमाल करें और एक स्पष्ट विषय चुनें ताकि आपका संदेश जल्दी सही जगह पहुंचे।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Bilal से संपर्क के अन्य तरीके</span>
            </h2>
            <p>
              यदि आप कोई सार्वजनिक चैनल पसंद करते हैं, तो आप Bilal और CompressMyPic प्रोजेक्ट को वेब पर पा सकते हैं। सोर्स कोड GitHub पर है, जहां आप तकनीकी समस्याएं भी रिपोर्ट कर सकते हैं और विकास को फ़ॉलो कर सकते हैं। इमेज कंप्रेशन पर लंबी गाइड Dev.to पर प्रकाशित होती हैं, और प्रोडक्ट Indie Hackers पर सूचीबद्ध है, जहां आप इसकी प्रगति देख सकते हैं और टिप्पणियां छोड़ सकते हैं।
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— सोर्स कोड, बग रिपोर्ट और विकास की खबरें।
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— JPG, PNG और WebP कंप्रेशन पर गाइड।
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— प्रोडक्ट पेज, मील के पत्थर और समुदाय की टिप्पणियां।
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>लिखने से पहले</span>
            </h2>
            <p>
              कुछ तेज़ जांचें जवाब का इंतज़ार किए बिना ज़्यादातर समस्याएं सुलझा देती हैं। मुख्य कंप्रेसर प्रति इमेज 20 MB तक की इमेज स्वीकार करता है, जबकि फ़ॉर्मैट कन्वर्टर प्रति फ़ाइल 25 MB तक स्वीकार करते हैं; इससे बड़ी फ़ाइल शुरू होने से पहले ही अस्वीकार कर दी जाएगी। बहुत पुराने ब्राउज़र AVIF या HEIC जैसे नए फ़ॉर्मैट का समर्थन नहीं कर सकते, इसलिए Chrome, Edge, Firefox या Safari का हालिया वर्शन आज़माने से अक्सर वह टूल ठीक हो जाता है जो टूटा हुआ लगता है। और चूंकि आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जातीं, इसलिए किसी खास फ़ोटो की समस्या आमतौर पर फ़ाइल की वजह से होती है, वेबसाइट की वजह से नहीं।
            </p>
            <p>
              जब आप हमें लिखें, तो अपने ब्राउज़र का नाम और वर्शन, वह टूल जिसका आप इस्तेमाल कर रहे थे, और इमेज का साइज़ व फ़ॉर्मैट शामिल करें। हम अंग्रेज़ी में जवाब देते हैं, आमतौर पर 24 से 48 कार्य घंटों के भीतर। यदि आपका सवाल यह है कि हम आपके डेटा से कैसे निपटते हैं, तो पहले हमारी 
              <button
                type="button"
                onClick={() => onNavigate('/hi/privacy-policy')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                गोपनीयता नीति
              </button>
              {' '}भी पढ़ सकते हैं: वहां सरल भाषा में समझाया गया है कि आपकी इमेज कभी अपलोड या स्टोर नहीं की जातीं।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>समस्या रिपोर्ट करें</span>
            </h2>
            <p>
              क्या आपको कुछ टूटा हुआ मिला? बताएं कि यह किस पेज पर हुआ, आपने किस पर क्लिक किया और उसकी जगह आपको क्या देखने की उम्मीद थी। स्क्रीनशॉट बहुत मदद करते हैं, और यदि समस्या किसी खास इमेज से जुड़ी है, तो उसका फ़ॉर्मैट और साइज़ बताएं — लेकिन हमें कभी निजी या संवेदनशील फ़ोटो न भेजें। हम रिपोर्ट की गई समस्याओं को जल्द से जल्द ठीक करते हैं और ठीक होने पर ईमेल से आपको बताएंगे।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
