import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideWhatsAppPageHiProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'CompressMyPic खोलें',
    text: 'अपने मोबाइल या कंप्यूटर के ब्राउज़र में compressmypic.online पर जाएं। कुछ भी इंस्टॉल नहीं करना है और कोई अकाउंट नहीं बनाना है: यह टूल तुरंत खुल जाता है।',
  },
  {
    title: 'अपनी फ़ोटो अपलोड करें',
    text: '«फ़ाइलें ब्राउज़ करें» पर टैप करें और अपनी गैलरी से फ़ोटो चुनें, या फ़ोटो को खींचकर पेज पर छोड़ें। आप एक साथ कई फ़ोटो अपलोड कर सकते हैं। हर इमेज 20 MB तक की हो सकती है।',
  },
  {
    title: 'संतुलित प्रीसेट से शुरू करें',
    text: 'संतुलित प्रीसेट (लगभग 70% क्वालिटी) WhatsApp फ़ोटो के लिए अच्छा शुरुआती बिंदु है। यह फ़ाइल का साइज़ बहुत घटाता है और फ़ोटो मोबाइल स्क्रीन पर अब भी स्पष्ट दिखती है।',
  },
  {
    title: 'पहले और बाद का लाइव साइज़ देखें',
    text: 'हर फ़ोटो अपना मूल साइज़ और नया कंप्रेस किया गया साइज़ साथ-साथ दिखाती है। यदि फ़ाइल अब भी आपकी चाह से बड़ी है, तो क्वालिटी स्लाइडर को थोड़ा नीचे ले जाएं और देखें कि साइज़ तुरंत अपडेट होता है।',
  },
  {
    title: 'फ़ोटो के लिए JPG रखें',
    text: 'सामान्य फ़ोटो के लिए आउटपुट फ़ॉर्मैट JPG रखें। यह वह फ़ॉर्मैट है जिसे WhatsApp सबसे अच्छी तरह संभालता है और जो फ़ोटो के लिए सबसे छोटी फ़ाइलें बनाता है। PNG सिर्फ़ तभी इस्तेमाल करें जब आपकी इमेज को पारदर्शिता चाहिए, जैसे लोगो।',
  },
  {
    title: 'पहले और बाद की तुलना करें',
    text: 'पहले और बाद की तुलना खोलकर देखें कि फ़ोटो अब भी अच्छी दिख रही है। चेहरों और टेक्स्ट पर ज़ूम करें: यदि आपको कोई असली अंतर नहीं दिखता, तो क्वालिटी सेटिंग सही है।',
  },
  {
    title: 'छोटी फ़ोटो डाउनलोड करें',
    text: 'फ़ोटो पर डाउनलोड पर टैप करें, या एक साथ कई फ़ोटो कंप्रेस की हों तो «सभी डाउनलोड करें (ZIP)» इस्तेमाल करें। छोटी फ़ाइल आपके डिवाइस पर सहेजी जाती है; आपकी मूल फ़ोटो कभी नहीं बदली जाती।',
  },
  {
    title: 'WhatsApp से स्मार्ट तरीके से भेजें',
    text: 'यदि आपको सर्वश्रेष्ठ क्वालिटी चाहिए, तो कंप्रेस की गई फ़ोटो को दस्तावेज़ के रूप में भेजें: WhatsApp में अटैच करें पर टैप करें, फिर दस्तावेज़ चुनें, और फ़ाइल चुनें। WhatsApp दस्तावेज़ों को बिना छुए भेजता है, इसलिए आपकी फ़ोटो ठीक वैसी ही पहुंचती है जैसी आपने कंप्रेस की थी। यदि आप उसे फ़ोटो के रूप में भेजते हैं, तो WhatsApp उसे दूसरी बार कंप्रेस करेगा।',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'WhatsApp फ़ोटो की क्वालिटी क्यों घटाता है?',
    answer: 'जब आप सामान्य तरीके से फ़ोटो भेजते हैं, तो WhatsApp डेटा और जगह बचाने के लिए उसे दोबारा कंप्रेस करता है, और अक्सर उसे कहीं छोटे साइज़ और कम क्वालिटी तक घटा देता है। इसीलिए कैमरे की स्पष्ट फ़ोटो भेजने के बाद नरम या धुंधली दिख सकती है।',
  },
  {
    id: 'wa-faq-2',
    question: 'क्या WhatsApp दस्तावेज़ के रूप में भेजी गई इमेज को कंप्रेस करता है?',
    answer: 'नहीं। जब आप इमेज को दस्तावेज़ के रूप में भेजते हैं (अटैच करें और फिर दस्तावेज़), तो WhatsApp फ़ाइल को जैसी है वैसी ही भेजता है, बिना कोई अतिरिक्त कंप्रेशन किए। यह पूरी क्वालिटी के साथ फ़ोटो शेयर करने का सबसे अच्छा तरीका है।',
  },
  {
    id: 'wa-faq-3',
    question: 'WhatsApp कितने बड़े साइज़ की इमेज स्वीकार करता है?',
    answer: 'WhatsApp 2 GB तक के दस्तावेज़ की अनुमति देता है, इसलिए कुछ सौ KB की कंप्रेस की गई फ़ोटो कभी समस्या नहीं होती। सामान्य तरीके से भेजी गई फ़ोटो को WhatsApp खुद दोबारा कंप्रेस करता है, इसलिए व्यवहार में साइज़ नहीं, क्वालिटी मायने रखती है।',
  },
  {
    id: 'wa-faq-4',
    question: 'मैं WhatsApp पर पूरी क्वालिटी के साथ फ़ोटो कैसे भेजूं?',
    answer: 'पहले CompressMyPic से खुद फ़ोटो कंप्रेस करें ताकि उसका साइज़ उचित हो, और फिर उसे WhatsApp पर फ़ोटो की जगह दस्तावेज़ के रूप में भेजें। अटैच करें पर टैप करें, दस्तावेज़ चुनें और फ़ाइल चुनें। वह बिना WhatsApp द्वारा दोबारा कंप्रेस किए पहुंचेगी।',
  },
  {
    id: 'wa-faq-5',
    question: 'क्या मुझे भेजने से पहले कंप्रेस करना चाहिए या WhatsApp को करने देना चाहिए?',
    answer: 'पहले खुद कंप्रेस करें। WhatsApp आक्रामक तरीके से कंप्रेस करता है और इस पर आपका कोई नियंत्रण नहीं होता। जब आप पहले CompressMyPic से कंप्रेस करते हैं, तो आप क्वालिटी चुनते हैं, नतीजा देखते हैं, और फिर फ़ाइल को दस्तावेज़ के रूप में भेजते हैं ताकि WhatsApp उसे दोबारा न छुए।',
  },
  {
    id: 'wa-faq-6',
    question: 'WhatsApp फ़ोटो के लिए मुझे कौन सी क्वालिटी सेटिंग इस्तेमाल करनी चाहिए?',
    answer: 'संतुलित प्रीसेट, लगभग 70%, से शुरू करें। किसी महत्वपूर्ण फ़ोटो के लिए 80 से 85% इस्तेमाल करें और पहले और बाद की तुलना देखें। रोज़ाना की तेज़ फ़ोटो के लिए, जब गति मायने रखती है, तो 50 से 60% भी मोबाइल स्क्रीन पर अच्छी दिखती है और कहीं छोटी फ़ाइल बनाती है।',
  },
  {
    id: 'wa-faq-7',
    question: 'क्या दो बार कंप्रेस करने से फ़ोटो खराब होती हैं?',
    answer: 'हां। JPEG कंप्रेशन का हर दौर थोड़ा और विवरण हटाता है। इसीलिए आपको CompressMyPic से सिर्फ़ एक बार कंप्रेस करना चाहिए और फिर नतीजे को दस्तावेज़ के रूप में भेजना चाहिए, बजाय इसके कि WhatsApp पहले से कंप्रेस की गई फ़ोटो को दूसरी बार कंप्रेस करे।',
  },
  {
    id: 'wa-faq-8',
    question: 'क्या मैं मोबाइल पर WhatsApp फ़ोटो कंप्रेस कर सकता हूं?',
    answer: 'हां। CompressMyPic Android और iPhone के ब्राउज़र में काम करता है। साइट खोलें, अपनी गैलरी से फ़ोटो चुनें, उसे कंप्रेस करें, छोटी फ़ाइल डाउनलोड करें और फिर उसे WhatsApp से शेयर करें। कोई ऐप इंस्टॉल नहीं करना है।',
  },
  {
    id: 'wa-faq-9',
    question: 'क्या कंप्रेस की गई फ़ोटो WhatsApp स्टेटस में अच्छी दिखती हैं?',
    answer: 'हां, यदि आप ज़्यादा आगे न जाएं। WhatsApp स्टेटस फ़ोटो को सामान्य रिज़ॉल्यूशन में दिखाते हैं, इसलिए संतुलित प्रीसेट (लगभग 70%) से कंप्रेस की गई फ़ोटो मोबाइल स्क्रीन पर मूल जैसी ही दिखती है। चेहरे या टेक्स्ट वाली स्टेटस फ़ोटो के लिए 50% से नीचे न जाएं।',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp कहता है मेरी इमेज बहुत बड़ी है, मैं क्या करूं?',
    answer: 'इमेज को CompressMyPic पर अपलोड करें और क्वालिटी स्लाइडर नीचे ले जाएं जब तक फ़ाइल कुछ सौ KB की न हो जाए; फिर उसे डाउनलोड करें और दोबारा भेजें। यदि वह फ़ोटो के रूप में अब भी नहीं भेजी जाती, तो उसे दस्तावेज़ के रूप में भेजें, जो कहीं बड़ी फ़ाइलें स्वीकार करता है।',
  },
  {
    id: 'wa-faq-11',
    question: 'क्या मुझे WhatsApp के लिए JPG या PNG इस्तेमाल करना चाहिए?',
    answer: 'फ़ोटो के लिए JPG इस्तेमाल करें। JPG कैमरा फ़ोटो के लिए कहीं छोटी फ़ाइलें बनाता है और WhatsApp उसे बेहतर तरीके से संभालता है। PNG सिर्फ़ उन इमेज के लिए इस्तेमाल करें जिन्हें पारदर्शिता चाहिए, जैसे लोगो, क्योंकि PNG फ़ाइलें कहीं बड़ी होती हैं।',
  },
  {
    id: 'wa-faq-12',
    question: 'क्या मैं WhatsApp पर WebP इमेज भेज सकता हूं?',
    answer: 'WhatsApp WebP फ़ाइलें ले सकता है, लेकिन वे सामान्य फ़ोटो की तरह नहीं दिख सकतीं और कुछ मोबाइल उन्हें अजीब तरीके से संभालते हैं। उन फ़ोटो के लिए जिन्हें आप चाहते हैं कि लोग चैट में सीधे देखें, JPG सबसे सुरक्षित विकल्प है। WebP WhatsApp से ज़्यादा वेबसाइट के लिए बेहतर है।',
  },
  {
    id: 'wa-faq-13',
    question: 'क्या मैं एक साथ कई WhatsApp फ़ोटो कंप्रेस कर सकता हूं?',
    answer: 'सभी फ़ोटो एक साथ CompressMyPic पर अपलोड करें, सभी पर वही प्रीसेट लागू करें और «सभी डाउनलोड करें (ZIP)» बटन से सभी को एक साथ डाउनलोड करें। फिर फ़ाइलें WhatsApp से एक-एक करके या दस्तावेज़ के रूप में भेजें।',
  },
  {
    id: 'wa-faq-14',
    question: 'क्या WhatsApp वीडियो को भी उसी तरह कंप्रेस करता है?',
    answer: 'हां, WhatsApp सामान्य तरीके से भेजे गए वीडियो को भी कंप्रेस करता है, और उन्हें बहुत घटा सकता है। CompressMyPic सिर्फ़ इमेज (JPG, PNG, WebP) के साथ काम करता है, वीडियो के साथ नहीं। वीडियो के लिए, मूल क्वालिटी बनाए रखने के लिए उन्हें दस्तावेज़ के रूप में भेजें।',
  },
  {
    id: 'wa-faq-15',
    question: 'क्या फ़ोटो कंप्रेस करने से मेरे मोबाइल की मूल फ़ोटो मिट जाती है?',
    answer: 'नहीं। CompressMyPic एक नई, छोटी कॉपी बनाता है और उसे आपके डिवाइस पर डाउनलोड करता है। आपकी मूल फ़ोटो आपकी गैलरी में ठीक वैसी ही रहती है, बिना छुए।',
  },
  {
    id: 'wa-faq-16',
    question: 'क्या कंप्रेस करते समय मेरी फ़ोटो किसी सर्वर पर भेजी जाती हैं?',
    answer: 'नहीं। सारी कंप्रेशन आपके अपने डिवाइस पर आपके अपने ब्राउज़र के अंदर होती है, इसलिए आपकी फ़ोटो कभी अपलोड नहीं होतीं, न स्टोर होती हैं और न कोई और उन्हें देखता है। वे आपके ब्राउज़र की मेमोरी में रहती हैं और टैब बंद करते या रिफ़्रेश करते ही मिट जाती हैं।',
  },
  {
    id: 'wa-faq-17',
    question: 'WhatsApp के लिए फ़ोटो कितनी छोटी होनी चाहिए?',
    answer: 'रोज़ाना शेयर करने के लिए, प्रति फ़ोटो 100 से 300 KB अच्छा लक्ष्य है: वह तेज़ी से भेजी जाती है, कम मोबाइल डेटा खर्च करती है और मोबाइल पर अब भी स्पष्ट दिखती है। किसी ऐसी फ़ोटो के लिए जिसे आप प्रिंट करना या सहेजकर रखना चाहते हैं, उच्च क्वालिटी सेटिंग के साथ 500 KB से 1 MB के करीब रहें।',
  },
  {
    id: 'wa-faq-18',
    question: 'भेजने के बाद मेरी WhatsApp फ़ोटो धुंधली क्यों दिखती हैं?',
    answer: 'क्योंकि जब आपने उन्हें फ़ोटो के रूप में भेजा तो WhatsApp ने उन्हें दोबारा कंप्रेस कर दिया। समाधान है पहले खुद फ़ोटो को ऐसी क्वालिटी पर कंप्रेस करें जिसे आप नियंत्रित करते हैं, और फिर उसे दस्तावेज़ के रूप में भेजें ताकि WhatsApp उसे दोबारा कंप्रेस न करे।',
  },
  {
    id: 'wa-faq-19',
    question: 'क्या मैं WhatsApp के लिए स्क्रीनशॉट कंप्रेस कर सकता हूं?',
    answer: 'हां। स्क्रीनशॉट को फ़ोटो की तरह ही CompressMyPic पर अपलोड करें। स्क्रीनशॉट बहुत अच्छी तरह कंप्रेस होते हैं क्योंकि उनमें समतल रंग के बड़े क्षेत्र होते हैं: पहले संतुलित प्रीसेट आज़माएं और सबसे छोटी फ़ाइल चाहिए तो WebP आउटपुट पर स्विच करें।',
  },
  {
    id: 'wa-faq-20',
    question: 'क्या WhatsApp फ़ोटो के लिए CompressMyPic मुफ़्त है?',
    answer: 'हां, पूरी तरह मुफ़्त। कोई रजिस्ट्रेशन नहीं, कोई वॉटरमार्क नहीं, आप कितनी फ़ोटो कंप्रेस करते हैं इसकी कोई सीमा नहीं, और कोई अकाउंट नहीं चाहिए। बस साइट खोलें, कंप्रेस करें और डाउनलोड करें।',
  },
];

export const GuideWhatsAppPageHi: React.FC<GuideWhatsAppPageHiProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कंप्रेस करें';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कंप्रेस करना सीखें। मुफ़्त और निजी, बिना रजिस्ट्रेशन के: अपनी फ़ोटो भेजने से पहले घटाएं ताकि वे स्पष्ट पहुंचें।');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/compress-images-for-whatsapp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कैसे कंप्रेस करें',
          description: 'CompressMyPic से फ़ोटो कंप्रेस करें और उसे WhatsApp पर दस्तावेज़ के रूप में भेजें ताकि वह स्पष्ट रहे।',
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
          headline: "बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कंप्रेस करें",
          description: "बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कंप्रेस करना सीखें। मुफ़्त और निजी, बिना रजिस्ट्रेशन के: अपनी फ़ोटो भेजने से पहले घटाएं ताकि वे स्पष्ट पहुंचें।",
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
          inLanguage: 'hi',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "होम", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "गाइड्स", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कंप्रेस करें", item: "https://compressmypic.online/guides/compress-images-for-whatsapp/" },
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
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>इमेज कंप्रेसर पर वापस जाएं</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कैसे कंप्रेस करें
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            द्वारा <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('/about'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp आपकी भेजी गई हर फ़ोटो को घटाता है, अक्सर ज़रूरत से कहीं ज़्यादा। पहले खुद अपनी फ़ोटो कंप्रेस करें और उन्हें सही तरीके से भेजें: वे स्पष्ट पहुंचेंगी, तेज़ी से भेजी जाएंगी और कम मोबाइल डेटा खर्च करेंगी।
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>WhatsApp आपकी फ़ोटो को धुंधला क्यों बनाता है</span>
            </h2>
            <p>
              जब आप सामान्य तरीके से WhatsApp पर फ़ोटो भेजते हैं, तो WhatsApp उसे पहुंचाने से पहले दोबारा कंप्रेस करता है। 3 MB की कैमरा फ़ोटो नरम विवरण और ब्लॉक जैसे रंगों वाली 100 KB की फ़ाइल के रूप में पहुंच सकती है। WhatsApp यह डेटा और जगह बचाने के लिए करता है, लेकिन आप यह तय नहीं कर सकते कि कितनी क्वालिटी खो जाए।
            </p>
            <p>
              फ़ोटो भेजने का एक दूसरा तरीका है जिसका इस्तेमाल ज़्यादातर लोग कभी नहीं करते: उसे दस्तावेज़ के रूप में भेजना। दस्तावेज़ जैसे हैं वैसे ही पहुंचाए जाते हैं, बिना कोई अतिरिक्त कंप्रेशन किए। तरकीब यह है कि पहले खुद फ़ोटो को ऐसी क्वालिटी सेटिंग पर घटाएं जिसे आप नियंत्रित करते हैं, और फिर उसे दस्तावेज़ के रूप में भेजें। इस तरह आपको छोटी फ़ाइल और स्पष्ट फ़ोटो एक साथ मिलती है।
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>चरण-दर-चरण: WhatsApp के लिए फ़ोटो कंप्रेस करें</span>
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
              alt="WhatsApp पर भेजने से पहले CompressMyPic पर फ़ोटो अपलोड करने का स्क्रीनशॉट"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              अपनी फ़ोटो CompressMyPic पर अपलोड करें: फ़ोटो खींचकर छोड़ें, या अपनी गैलरी से चुनें।
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>मुझे कौन सी क्वालिटी सेटिंग इस्तेमाल करनी चाहिए?</span>
            </h2>
            <p>
              कोई एक परफ़ेक्ट संख्या नहीं है: यह फ़ोटो और उसके उद्देश्य पर निर्भर करता है। इसे शुरुआती बिंदु के रूप में इस्तेमाल करें और हर बार पहले और बाद की तुलना देखें:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">रोज़ाना की फ़ोटो: 70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  संतुलित प्रीसेट। साइज़ में बड़ी बचत, और फ़ोटो किसी भी मोबाइल स्क्रीन पर अब भी स्पष्ट दिखती है। WhatsApp के लिए सबसे अच्छा डिफ़ॉल्ट विकल्प।
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">महत्वपूर्ण फ़ोटो: 80–85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  परिवार की फ़ोटो, यात्रा की फ़ोटो, कुछ भी जिसे आप सहेजकर रखना चाहते हैं। फ़ाइल बड़ी होती है, लेकिन चेहरों और लैंडस्केप का बारीक विवरण बना रहता है।
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">तेज़ भेजने के लिए: 50–60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  मीम, तेज़ अपडेट, धीमे मोबाइल डेटा वाली फ़ोटो। कहीं छोटी फ़ाइलें जो मोबाइल स्क्रीन के साइज़ पर अब भी अच्छी दिखती हैं।
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>सर्वश्रेष्ठ नतीजों के लिए टिप्स</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>सिर्फ़ एक बार कंप्रेस करें, और सिर्फ़ एक बार। पहले से कंप्रेस की गई फ़ोटो को दूसरी बार कंप्रेस करने से लगभग बिना साइज़ बचाए विवरण मिटता है।</li>
              <li>यदि क्वालिटी मायने रखती है तो कंप्रेस की गई फ़ाइल को हमेशा दस्तावेज़ के रूप में भेजें: यही एकमात्र तरीका है जिससे WhatsApp उसे दोबारा कंप्रेस न करे।</li>
              <li>एक ही सेटिंग के साथ एक साथ कई फ़ोटो कंप्रेस करें और «सभी डाउनलोड करें (ZIP)» बटन से सभी डाउनलोड करें।</li>
              <li>टेक्स्ट वाले स्क्रीनशॉट और ग्राफ़िक्स के लिए WebP आउटपुट आज़माएं: यह किनारों को तीखा रखता है और JPG से छोटी फ़ाइल बनाता है।</li>
              <li>आपकी मूल फ़ोटो कभी नहीं बदली जाती। CompressMyPic एक नई, छोटी कॉपी सहेजता है, इसलिए आप हमेशा वापस आकर कोई अलग क्वालिटी आज़मा सकते हैं।</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.webp"
              alt="CompressMyPic में क्वालिटी स्लाइडर और पहले और बाद का लाइव फ़ाइल साइज़ दिखाता स्क्रीनशॉट"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              क्वालिटी स्लाइडर घुमाएं और देखें कि पहले और बाद का साइज़ लाइव अपडेट होता है, जब तक फ़ाइल मनचाहे साइज़ की न हो जाए।
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>आम गलतियां जिनसे बचना चाहिए</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>कंप्रेस करने के बाद फ़ोटो को फ़ोटो के रूप में भेजना: WhatsApp उसे दूसरी बार कंप्रेस करेगा और आपका काम बेकार कर देगा।</li>
              <li>चेहरे वाली फ़ोटो में क्वालिटी को 40% से नीचे ले जाना: कम क्वालिटी पर त्वचा और बारीक विवरण बहुत तेज़ी से ब्लॉक जैसे हो जाते हैं।</li>
              <li>कैमरा फ़ोटो के लिए PNG इस्तेमाल करना: PNG फ़ाइलें फ़ोटो के लिए JPG से कहीं बड़ी होती हैं और WhatsApp में आपको कुछ नहीं देतीं।</li>
              <li>नतीजा देखना भूल जाना: भेजने से पहले हमेशा पहले और बाद की तुलना देखें, खास तौर पर टेक्स्ट वाली फ़ोटो में।</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>अक्सर पूछे जाने वाले सवाल</span>
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">संबंधित गाइड</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/guides/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: आपको कौन सा फ़ॉर्मैट इस्तेमाल करना चाहिए?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">फ़ाइल साइज़, क्वालिटी और पारदर्शिता की तुलना, ताकि आप हर बार सही फ़ॉर्मैट चुन सकें।</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/guides/reduce-image-size-to-100kb')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">वेबसाइट और ईमेल के लिए इमेज का साइज़ 100 KB तक कैसे घटाएं</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">अपनी फ़ोटो खराब किए बिना 100 KB तक पहुंचने की चरण-दर-चरण गाइड।</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              मुफ़्त में इमेज कंप्रेस करें
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/guides/reduce-image-size-to-100kb')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              इमेज को 100 KB तक घटाएं
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
