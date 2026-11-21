import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPageHiProps {
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
    text: 'अपने ब्राउज़र में compressmypic.online पर जाएं। कुछ भी इंस्टॉल नहीं करना है, कोई अकाउंट नहीं बनाना है, और कोई फ़ाइल कभी किसी सर्वर पर अपलोड नहीं होती।',
  },
  {
    title: 'अपनी इमेज अपलोड करें',
    text: 'अपनी इमेज खींचकर छोड़ें, या चुनने के लिए «फ़ाइलें ब्राउज़ करें» पर टैप करें। JPG, PNG और WebP फ़ाइलें समर्थित हैं, प्रति इमेज 20 MB तक।',
  },
  {
    title: 'तय करें: फ़ॉर्मैट रखें या बदलें',
    text: 'अपनी इमेज का मौजूदा फ़ॉर्मैट बनाए रखने के लिए «मूल» चुनें, या आउटपुट के रूप में JPG, PNG या WebP चुनें। तय करने के लिए नीचे दी गई गाइड इस्तेमाल करें: फ़ोटो के लिए JPG, पारदर्शिता चाहिए तो PNG, वेबसाइट के लिए सबसे छोटी फ़ाइल चाहिए तो WebP।',
  },
  {
    title: 'क्वालिटी प्रीसेट चुनें',
    text: 'संतुलित प्रीसेट (लगभग 70%) से शुरू करें। ऐसी फ़ोटो के लिए जो परफ़ेक्ट दिखनी चाहिए, उच्च प्रीसेट या 85 से 90% क्वालिटी इस्तेमाल करें। छोटी वेब इमेज के लिए कम सेटिंग ठीक है।',
  },
  {
    title: 'लाइव साइज़ देखें और तुलना करें',
    text: 'हर इमेज अपना मूल साइज़ और नया कंप्रेस किया गया साइज़ दिखाती है। पहले और बाद की तुलना खोलें और ज़ूम करें: यदि आपको कोई अंतर नहीं दिखता, तो सेटिंग सही है। आउटपुट फ़ॉर्मैट को WebP में बदलकर देखें कि फ़ाइल कितनी छोटी हो जाती है।',
  },
  {
    title: 'अपनी इमेज डाउनलोड करें',
    text: 'अकेली इमेज डाउनलोड करें, या एक साथ कई इमेज कन्वर्ट की हों तो «सभी डाउनलोड करें (ZIP)» इस्तेमाल करें। आपकी मूल फ़ाइल कभी नहीं बदली जाती: आपको एक नई, छोटी कॉपी मिलती है।',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'JPG और PNG में क्या अंतर है?',
    answer: 'JPG फ़ोटो के लिए बना लॉसी फ़ॉर्मैट है: यह कुछ विवरण हटाकर कहीं छोटी फ़ाइलें बनाता है और पारदर्शिता का समर्थन नहीं करता। PNG लॉसलेस है और पारदर्शिता का समर्थन करता है, इसलिए यह लोगो और ग्राफ़िक्स के लिए परफ़ेक्ट है, लेकिन PNG में फ़ोटो उसी फ़ोटो को JPG में सहेजने की तुलना में कई गुना बड़ी होती हैं।',
  },
  {
    id: 'fmt-faq-2',
    question: 'क्या WebP JPG से बेहतर है?',
    answer: 'फ़ाइल साइज़ के मामले में, हां: समान क्वालिटी पर WebP आमतौर पर JPG से 25 से 35% छोटा होता है, और यह पारदर्शिता का भी समर्थन करता है। WebP की जगह JPG चुनने की एकमात्र वजह संगतता है: कुछ पुराने प्रोग्राम और कुछ ऐप अब भी JPG को बेहतर तरीके से संभालते हैं, और WhatsApp JPG फ़ोटो को ज़्यादा भरोसेमंद तरीके से दिखाता है।',
  },
  {
    id: 'fmt-faq-3',
    question: 'क्या WebP PNG से बेहतर है?',
    answer: 'आमतौर पर, हां। WebP PNG की तरह पारदर्शिता का समर्थन करता है, लेकिन कहीं छोटी फ़ाइलें बनाता है, और JPG की तरह लॉसी कंप्रेशन भी कर सकता है। PNG तब भी सबसे सुरक्षित विकल्प है जब आपको किसी लोगो या ग्राफ़िक के लिए परफ़ेक्ट, लॉसलेस क्वालिटी चाहिए जिसे बाद में फिर से एडिट किया जाएगा।',
  },
  {
    id: 'fmt-faq-4',
    question: 'क्या PNG पारदर्शिता का समर्थन करता है और JPG नहीं?',
    answer: 'सही है। PNG पारदर्शी पृष्ठभूमि (अल्फ़ा चैनल) का समर्थन करता है, इसीलिए लोगो और आइकन आमतौर पर PNG होते हैं। JPG में बिल्कुल पारदर्शिता नहीं होती: JPG में कोई भी पारदर्शी क्षेत्र ठोस रंग बन जाता है, आमतौर पर सफ़ेद, इसलिए पारदर्शी पृष्ठभूमि वाला लोगो कभी JPG के रूप में न सहेजें।',
  },
  {
    id: 'fmt-faq-5',
    question: 'PNG फ़ाइलें JPG से इतनी बड़ी क्यों होती हैं?',
    answer: 'क्योंकि PNG लॉसलेस है: यह हर पिक्सेल का विवरण ठीक-ठीक सहेजता है, जबकि JPG वह विवरण हटाता है जिसे आंख मुश्किल से देखती है। कैमरे की फ़ोटो PNG के रूप में सहेजने पर उसी फ़ोटो को JPG के रूप में सहेजने की तुलना में 5 से 10 गुना बड़ी हो सकती है। इसीलिए फ़ोटो लगभग कभी PNG नहीं होनी चाहिए।',
  },
  {
    id: 'fmt-faq-6',
    question: 'मुझे WebP की जगह JPG कब इस्तेमाल करना चाहिए?',
    answer: 'JPG तब इस्तेमाल करें जब इमेज पुराने प्रोग्राम में खुलेगी, WhatsApp या ईमेल से भेजी जाएगी और आप गारंटी वाली प्रीव्यू चाहते हैं, या प्रिंट की जाएगी। वेबसाइट के लिए WebP बेहतर है, लेकिन किसी के साथ फ़ोटो शेयर करने के लिए JPG अब भी सबसे सार्वभौमिक फ़ॉर्मैट है।',
  },
  {
    id: 'fmt-faq-7',
    question: 'क्या मैं PNG को JPG में बदल सकता हूं?',
    answer: 'हां। PNG को CompressMyPic पर अपलोड करें, आउटपुट फ़ॉर्मैट के रूप में JPG चुनें और डाउनलोड करें। बस याद रखें कि JPG में पारदर्शिता नहीं होती: यदि आपके PNG की पृष्ठभूमि पारदर्शी है, तो पहले पृष्ठभूमि का रंग चुनें, क्योंकि पारदर्शी क्षेत्र वरना सफ़ेद और ठोस हो जाएगा।',
  },
  {
    id: 'fmt-faq-8',
    question: 'क्या मैं JPG को WebP में बदल सकता हूं?',
    answer: 'हां। JPG अपलोड करें, आउटपुट के रूप में WebP चुनें और डाउनलोड करें: समान दिखने वाली क्वालिटी पर फ़ाइल आमतौर पर 25 से 35% छोटी होती है। आप एक साथ कई JPG को WebP में बदल सकते हैं और सभी को ZIP के रूप में डाउनलोड कर सकते हैं।',
  },
  {
    id: 'fmt-faq-9',
    question: 'क्या JPG को PNG में बदलने से क्वालिटी बेहतर होती है?',
    answer: 'नहीं। JPG को PNG में बदलने से वह विवरण वापस नहीं आ सकता जिसे JPG कंप्रेशन पहले ही हटा चुका है; इससे सिर्फ़ फ़ाइल बहुत बड़ी हो जाती है। JPG को PNG में बदलने की एकमात्र अच्छी वजह यह है कि यदि आपको इमेज को और क्वालिटी गंवाए बिना फिर से एडिट करना है।',
  },
  {
    id: 'fmt-faq-10',
    question: 'वेबसाइट के लिए मुझे कौन सा फ़ॉर्मैट इस्तेमाल करना चाहिए?',
    answer: 'पहले WebP, और विकल्प के रूप में JPG। WebP सबसे छोटी फ़ाइलें देता है, जिससे पेज तेज़ी से लोड होते हैं, और पेज की गति विज़िटर और Google दोनों के लिए मायने रखती है। PNG सिर्फ़ उन इमेज के लिए इस्तेमाल करें जिन्हें पारदर्शिता चाहिए, जैसे लोगो, और फ़ोटो के लिए JPG, यदि आप WebP इस्तेमाल नहीं कर सकते।',
  },
  {
    id: 'fmt-faq-11',
    question: 'लोगो के लिए कौन सा फ़ॉर्मैट सबसे अच्छा है?',
    answer: 'यदि लोगो को पारदर्शी पृष्ठभूमि चाहिए तो PNG, क्योंकि JPG पारदर्शिता का समर्थन नहीं करता। WebP भी पारदर्शिता का समर्थन करता है और छोटी फ़ाइल बनाता है, इसलिए यह वेबसाइट पर लोगो के लिए अच्छा विकल्प है। यदि पृष्ठभूमि पारदर्शी रहनी है तो लोगो को कभी JPG के रूप में न सहेजें।',
  },
  {
    id: 'fmt-faq-12',
    question: 'स्क्रीनशॉट के लिए कौन सा फ़ॉर्मैट सबसे अच्छा है?',
    answer: 'PNG या WebP। स्क्रीनशॉट में तीखे किनारे और समतल रंग होते हैं, जिन्हें PNG और WebP अच्छी तरह संभालते हैं। JPG टेक्स्ट के तीखे किनारों को धुंधला करता है। सबसे छोटी स्क्रीनशॉट फ़ाइल पाने के लिए CompressMyPic में WebP आउटपुट आज़माएं: यह आमतौर पर बिना किसी दिखने वाले अंतर के PNG से कहीं छोटी होती है।',
  },
  {
    id: 'fmt-faq-13',
    question: 'क्या अब सभी ब्राउज़र WebP का समर्थन करते हैं?',
    answer: 'हां, लगभग सभी। Chrome, Edge, Firefox, Safari और सभी आधुनिक मोबाइल ब्राउज़र सालों से WebP का समर्थन करते हैं। सिर्फ़ बहुत पुराने ब्राउज़र और कुछ पुरानी ऐप WebP नहीं खोल सकतीं, और यही एकमात्र वजह है कि JPG अब भी उपयोगी है।',
  },
  {
    id: 'fmt-faq-14',
    question: 'क्या WhatsApp या Instagram WebP स्वीकार करते हैं?',
    answer: 'WhatsApp WebP फ़ाइलें ले सकता है, लेकिन वे सामान्य फ़ोटो की तरह नहीं दिख सकतीं, इसलिए फ़ोटो शेयर करने के लिए JPG ज़्यादा सुरक्षित है। Instagram पोस्ट के लिए JPG और PNG स्वीकार करता है और अपलोड को खुद कन्वर्ट करता है। सोशल मीडिया पर शेयर करने के लिए फ़ोटो के लिए JPG पर ही रहें।',
  },
  {
    id: 'fmt-faq-15',
    question: 'क्या फ़ोटो को WebP में बदलने से क्वालिटी घटती है?',
    answer: 'सिर्फ़ उतनी जितनी आप चुनते हैं। WebP JPG जैसा ही सिद्धांत इस्तेमाल करता है: एक क्वालिटी सेटिंग जो थोड़ा विवरण छोटी फ़ाइल के बदले बदलती है। 80 से 90% क्वालिटी पर WebP फ़ोटो मूल JPG जैसी ही दिखती है और फ़ाइल लगभग एक तिहाई छोटी होती है।',
  },
  {
    id: 'fmt-faq-16',
    question: 'क्या JPG और JPEG एक ही फ़ॉर्मैट हैं?',
    answer: 'कोई अंतर नहीं है: JPG और JPEG एक ही फ़ॉर्मैट हैं। JPEG पूरा नाम है (Joint Photographic Experts Group) और JPG फ़ाइल एक्सटेंशन का छोटा रूप है। photo.jpg नाम की फ़ाइल और photo.jpeg नाम की फ़ाइल एक ही तरह की इमेज हैं।',
  },
  {
    id: 'fmt-faq-17',
    question: 'क्या मुझे मूल फ़ॉर्मैट रखना चाहिए या बदलना चाहिए?',
    answer: 'यदि आप साइज़ से खुश हैं तो मूल रखें: यह सबसे आसान विकल्प है और कुछ भी नहीं खोता। तब बदलें जब कोई वजह हो: वेबसाइट की फ़ोटो छोटी करने के लिए JPG से WebP, पारदर्शिता न चाहिए वाली फ़ोटो छोटी करने के लिए PNG से JPG, या लोगो छोटा करने के लिए PNG से WebP।',
  },
  {
    id: 'fmt-faq-18',
    question: 'कौन सा फ़ॉर्मैट सबसे छोटी फ़ाइल देता है?',
    answer: 'लगभग हर मामले में WebP। फ़ोटो के लिए, समान दिखने वाली क्वालिटी पर WebP आमतौर पर JPG से 25 से 35% छोटा होता है। पारदर्शिता वाले ग्राफ़िक्स के लिए, WebP आमतौर पर PNG से कहीं छोटा होता है। इसीलिए WebP वेबसाइट के लिए सबसे अच्छा फ़ॉर्मैट है।',
  },
  {
    id: 'fmt-faq-19',
    question: 'क्या CompressMyPic JPG, PNG और WebP के बीच कन्वर्ट करता है?',
    answer: 'हां। JPG, PNG या WebP इमेज अपलोड करें, मनचाहा आउटपुट फ़ॉर्मैट चुनें — मूल, JPG, PNG या WebP — और कन्वर्ट की गई फ़ाइल डाउनलोड करें। आप एक ही सेटिंग के साथ एक साथ कई इमेज कन्वर्ट कर सकते हैं और सभी को ZIP के रूप में डाउनलोड कर सकते हैं।',
  },
  {
    id: 'fmt-faq-20',
    question: 'यदि मैं PNG को JPG में बदलूं तो पारदर्शिता का क्या होता है?',
    answer: 'वह खो जाती है। JPG पारदर्शिता स्टोर नहीं कर सकता, इसलिए आपके PNG के पारदर्शी हिस्से ठोस रंग बन जाते हैं। CompressMyPic आपको उन क्षेत्रों को भरने के लिए पृष्ठभूमि का रंग चुनने देता है, इसलिए ऐसा रंग चुनें जो उस जगह से मेल खाता हो जहां इमेज इस्तेमाल होगी; सफ़ेद सामान्य विकल्प है।',
  },
];

export const GuideFormatsPageHi: React.FC<GuideFormatsPageHiProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: आपको कौन सा फ़ॉर्मैट इस्तेमाल करना चाहिए?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP सरल भाषा में समझाया गया: अपनी फ़ोटो, लोगो और वेबसाइट के लिए सही फ़ॉर्मैट चुनने के लिए साइज़, क्वालिटी और पारदर्शिता की तुलना करें।');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/jpg-vs-png-vs-webp/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'JPG, PNG और WebP के बीच कैसे चुनें और इमेज कैसे कन्वर्ट करें',
          description: 'JPG, PNG और WebP की तुलना करें और फिर CompressMyPic से अपनी इमेज कंप्रेस या कन्वर्ट करें।',
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
          headline: "JPG vs PNG vs WebP: आपको कौन सा फ़ॉर्मैट इस्तेमाल करना चाहिए?",
          description: "JPG vs PNG vs WebP सरल भाषा में समझाया गया: अपनी फ़ोटो, लोगो और वेबसाइट के लिए सही फ़ॉर्मैट चुनने के लिए साइज़, क्वालिटी और पारदर्शिता की तुलना करें।",
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
          inLanguage: 'hi',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "होम", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "गाइड्स", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "JPG vs PNG vs WebP: आपको कौन सा फ़ॉर्मैट इस्तेमाल करना चाहिए?", item: "https://compressmypic.online/guides/jpg-vs-png-vs-webp/" },
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
            JPG vs PNG vs WebP: आपको कौन सा फ़ॉर्मैट इस्तेमाल करना चाहिए?
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            द्वारा <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('/about'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            गलत फ़ॉर्मैट चुनने से आपकी इमेज ज़रूरत से दस गुना बड़ी हो सकती है, या पारदर्शी लोगो खराब हो सकता है। यहां सरल और ईमानदार तुलना है, और कुछ ही सेकंड में फ़ॉर्मैट के बीच कन्वर्ट करने का तरीका भी।
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>संक्षिप्त जवाब</span>
            </h2>
            <p>
              यदि आप सिर्फ़ एक बात याद रखें, तो यह याद रखें: फ़ोटो के लिए JPG, लोगो और पारदर्शिता चाहिए वाली हर चीज़ के लिए PNG, और सबसे छोटी फ़ाइल चाहिए तो WebP, खास तौर पर वेबसाइट पर। नीचे दी गई तालिका बताती है कि क्यों।
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">फ़ॉर्मैट</th>
                    <th className="px-4 py-3 font-semibold">फ़ाइल साइज़</th>
                    <th className="px-4 py-3 font-semibold">पारदर्शिता</th>
                    <th className="px-4 py-3 font-semibold">किसके लिए अच्छा है</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">JPG</td>
                    <td className="px-4 py-3">छोटा</td>
                    <td className="px-4 py-3">नहीं</td>
                    <td className="px-4 py-3">फ़ोटो, शेयर करना, प्रिंट करना</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">PNG</td>
                    <td className="px-4 py-3">बड़ा</td>
                    <td className="px-4 py-3">हां</td>
                    <td className="px-4 py-3">लोगो, आइकन, स्क्रीनशॉट</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#dc2626] dark:text-[#fca5a5]">WebP</td>
                    <td className="px-4 py-3">सबसे छोटा</td>
                    <td className="px-4 py-3">हां</td>
                    <td className="px-4 py-3">वेबसाइट, वेब फ़ोटो</td>
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
              <span>JPG: फ़ोटो के लिए सबसे अच्छा</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG (जिसे JPEG भी लिखा जाता है) फ़ोटो के लिए क्लासिक फ़ॉर्मैट है। यह लॉसी कंप्रेशन इस्तेमाल करता है: बारीक विवरण हटाता है जिसे आपकी आंख मुश्किल से देखती है, जिससे फ़ाइलें कहीं छोटी हो जाती हैं। 5 MB की कैमरा फ़ोटो JPG के रूप में 500 KB हो सकती है और अब भी बहुत अच्छी दिखती है। JPG पारदर्शिता का समर्थन नहीं करता, इसलिए यह लोगो के लिए गलत विकल्प है, लेकिन किसी भी सामान्य फ़ोटो के लिए यह सुरक्षित और सार्वभौमिक विकल्प है जिसे हर डिवाइस और ऐप खोल सकता है।
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: लोगो और पारदर्शिता के लिए सबसे अच्छा</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG लॉसलेस है: यह हर पिक्सेल ठीक-ठीक सहेजता है और पारदर्शी पृष्ठभूमि का समर्थन करता है। इसलिए यह लोगो, आइकन और टेक्स्ट वाले ग्राफ़िक्स के लिए सही फ़ॉर्मैट है। इसकी कीमत फ़ाइल का साइज़ है: PNG के रूप में सहेजी गई फ़ोटो उसी फ़ोटो को JPG के रूप में सहेजने की तुलना में 5 से 10 गुना बड़ी हो सकती है। किसी खास वजह के बिना कैमरा फ़ोटो को कभी PNG के रूप में न सहेजें।
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: वेबसाइट के लिए सबसे अच्छा</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP Google द्वारा बनाया गया आधुनिक फ़ॉर्मैट है। यह सब कुछ करता है: JPG जैसी लॉसी कंप्रेशन, PNG जैसी पारदर्शिता, और समान दिखने वाली क्वालिटी पर JPG से आमतौर पर 25 से 35% छोटी फ़ाइलें। सभी आधुनिक ब्राउज़र इसका समर्थन करते हैं, इसीलिए यह वेबसाइट की इमेज के लिए सबसे अच्छा फ़ॉर्मैट है। इसकी एकमात्र कमज़ोरी पुराने प्रोग्राम के साथ संगतता है, और WhatsApp प्रीव्यू के साथ, जहां JPG अब भी ज़्यादा सुरक्षित है।
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.webp"
              alt="JPG, PNG और WebP के रूप में सहेजी गई एक ही फ़ोटो की तुलना, उनके फ़ाइल साइज़ के साथ"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              तीन फ़ॉर्मैट में एक ही फ़ोटो: WebP सबसे छोटा है, PNG सबसे बड़ा है और JPG बीच में है।
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>चरण-दर-चरण: अपनी इमेज कंप्रेस या कन्वर्ट करें</span>
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
              <span>हर काम के लिए कौन सा फ़ॉर्मैट?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">कैमरा फ़ोटो: JPG या WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  शेयर और प्रिंट के लिए JPG, अपनी वेबसाइट के लिए WebP। दोनों फ़ोटो को मूल साइज़ के एक छोटे हिस्से पर बहुत अच्छी दिखने देते हैं।
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">लोगो और आइकन: PNG या WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  पारदर्शिता चाहिए, इसलिए JPG बाहर है। PNG क्लासिक सुरक्षित विकल्प है; WebP छोटा है और हर आधुनिक जगह काम करता है।
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">स्क्रीनशॉट: WebP या PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  तीखा टेक्स्ट और समतल रंग WebP और PNG के साथ अच्छे रहते हैं। JPG टेक्स्ट के किनारों को धुंधला करता है, इसलिए स्क्रीनशॉट में इससे बचें।
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">वेबसाइट इमेज: WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  छोटी फ़ाइलों का मतलब तेज़ पेज है। अपनी वेबसाइट की फ़ोटो को WebP में बदलें और बहुत पुराने ब्राउज़र के लिए JPG को विकल्प के रूप में रखें।
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.webp"
              alt="CompressMyPic में JPG, PNG या WebP आउटपुट फ़ॉर्मैट चुनने का स्क्रीनशॉट"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              CompressMyPic में अपना आउटपुट फ़ॉर्मैट चुनें: मूल रखें या JPG, PNG या WebP में बदलें।
            </figcaption>
          </figure>

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
                onClick={() => onNavigate('/guides/compress-images-for-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कैसे कंप्रेस करें</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">पहले खुद फ़ोटो घटाएं और फिर उन्हें दस्तावेज़ के रूप में भेजें ताकि WhatsApp उन्हें धुंधला न कर सके।</p>
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
              onClick={() => onNavigate('/guides/compress-images-for-whatsapp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              WhatsApp के लिए कंप्रेस करें
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
