import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageHiProps {
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
    text: 'अपने ब्राउज़र में compressmypic.online पर जाएं। कुछ भी इंस्टॉल नहीं करना है और कोई अकाउंट नहीं बनाना है: यह टूल मुफ़्त है, बिना रजिस्ट्रेशन और बिना वॉटरमार्क के।',
  },
  {
    title: 'अपनी इमेज अपलोड करें',
    text: 'अपनी इमेज खींचकर पेज पर छोड़ें, या अपने डिवाइस से चुनने के लिए «फ़ाइलें ब्राउज़ करें» पर टैप करें। JPG, PNG और WebP समर्थित हैं, प्रति इमेज 20 MB तक। आप एक साथ कई इमेज अपलोड कर सकते हैं।',
  },
  {
    title: 'संतुलित प्रीसेट से शुरू करें',
    text: 'संतुलित प्रीसेट क्वालिटी को लगभग 70% पर सेट करता है। ज़्यादातर फ़ोटो के लिए यह पहले ही फ़ाइल को उसके मूल साइज़ के एक छोटे हिस्से तक घटा देता है; अपनी इमेज के बगल में दिख रहा लाइव साइज़ देखें कि आप कहां हैं।',
  },
  {
    title: 'क्वालिटी स्लाइडर को धीरे-धीरे नीचे ले जाएं',
    text: 'ऐसा कोई बॉक्स नहीं है जहां आप «100 KB» लिखें: इसके बजाय, क्वालिटी स्लाइडर को धीरे-धीरे नीचे खींचें और हर बदलाव के बाद पहले और बाद का साइज़ लाइव अपडेट होते देखें। छोटे-छोटे कदमों में आगे बढ़ें (जैसे 70% से 60% और फिर 50%) ताकि आप ज़रूरत से ज़्यादा आगे न जाएं और ज़रूरत से ज़्यादा क्वालिटी न गंवाएं।',
  },
  {
    title: 'यदि अब भी 100 KB से ऊपर है तो WebP पर स्विच करें',
    text: 'यदि उचित क्वालिटी पर भी फ़ाइल 100 KB से ऊपर है, तो आउटपुट फ़ॉर्मैट को WebP में बदलें। समान दिखने वाली क्वालिटी पर WebP आमतौर पर JPG से 25 से 35% छोटा होता है, और अक्सर क्वालिटी और घटाए बिना 100 KB तक का अंतर पूरा कर देता है।',
  },
  {
    title: 'पहले और बाद की तुलना करें',
    text: 'पहले और बाद की तुलना खोलें और चेहरों, टेक्स्ट और बारीक विवरणों पर ज़ूम करें। यदि फ़ोटो अब भी अच्छी दिख रही है, तो काम हो गया। यदि वह ब्लॉक जैसी या फीकी दिख रही है, तो क्वालिटी थोड़ी बढ़ाएं और 100 KB से थोड़ी बड़ी फ़ाइल स्वीकार करें: 120 KB की स्पष्ट फ़ोटो 100 KB की धुंधली फ़ोटो से बेहतर है।',
  },
  {
    title: 'अपनी इमेज डाउनलोड करें',
    text: 'छोटी फ़ाइल सहेजने के लिए डाउनलोड पर टैप करें, या यदि आपने एक साथ कई इमेज छोटी की हैं तो «सभी डाउनलोड करें (ZIP)» इस्तेमाल करें। आपकी मूल इमेज कभी नहीं बदली जाती: आपको हमेशा एक नई, छोटी कॉपी मिलती है।',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'मैं अपनी फ़ोटो का साइज़ लगभग 100 KB तक कैसे घटाऊं?',
    answer: 'उसे CompressMyPic पर अपलोड करें, संतुलित प्रीसेट से शुरू करें और फिर पहले और बाद का लाइव साइज़ देखते हुए क्वालिटी स्लाइडर को धीरे-धीरे नीचे ले जाएं। जैसे ही कंप्रेस किया गया साइज़ 100 KB के करीब पहुंचे, रुक जाएं। यदि वह अब भी ऊपर है, तो आउटपुट फ़ॉर्मैट को WebP में बदलें।',
  },
  {
    id: 'kb-faq-2',
    question: 'ठीक 100 KB लिखने के लिए कोई बॉक्स क्यों नहीं है?',
    answer: 'क्योंकि हर फ़ोटो अलग तरह से कंप्रेस होती है: एक साफ़ आसमान समान क्वालिटी पर भीड़-भाड़ वाले दृश्य से कहीं ज़्यादा छोटा हो जाता है। «100 KB» का एक तय बॉक्स अंदाज़ा लगाता। इसके बजाय, CompressMyPic हर बदलाव के बाद कंप्रेस किया गया साइज़ लाइव दिखाता है, ताकि आप क्वालिटी पर पूरा नियंत्रण रखते हुए खुद फ़ाइल को 100 KB तक ले जा सकें।',
  },
  {
    id: 'kb-faq-3',
    question: 'कौन सी क्वालिटी सेटिंग मुझे लगभग 100 KB देती है?',
    answer: 'यह फ़ोटो पर निर्भर करता है, लेकिन एक सामान्य मोबाइल फ़ोटो के लिए 50 से 70% क्वालिटी आमतौर पर 100 KB के करीब रहती है। समतल रंगों वाली एक साधारण फ़ोटो 70% पर 100 KB तक पहुंच सकती है, जबकि बहुत विवरण वाले लैंडस्केप को 40 से 50% की ज़रूरत पड़ सकती है। लाइव साइज़ देखें: वही संख्या सच है, कोई तय प्रतिशत नहीं।',
  },
  {
    id: 'kb-faq-4',
    question: 'कम क्वालिटी पर भी मेरी फ़ोटो 100 KB से ऊपर है, अब क्या करूं?',
    answer: 'पहले आउटपुट फ़ॉर्मैट को WebP में बदलें, जो आमतौर पर JPG से 25 से 35% छोटा होता है। यदि वह अब भी ऊपर है, तो क्वालिटी थोड़ी और घटाएं और तुलना देखें: अक्सर एक छोटी सी और कमी नज़र नहीं आती। अंतिम उपाय के तौर पर, बहुत बड़े आयामों वाली फ़ोटो को उम्मीद से कम क्वालिटी सेटिंग की ज़रूरत पड़ सकती है, क्योंकि ज़्यादा पिक्सेल का मतलब ज़्यादा डेटा होता है।',
  },
  {
    id: 'kb-faq-5',
    question: 'क्या मुझे 100 KB तक पहुंचने के लिए WebP इस्तेमाल करना चाहिए?',
    answer: 'हां, जब भी हो सके। WebP क्वालिटी ज़्यादा घटाए बिना 100 KB तक पहुंचने का सबसे आसान तरीका है, क्योंकि यह JPG के समान दिखने वाली क्वालिटी पर छोटी फ़ाइल बनाता है। वेबसाइट की इमेज के लिए और हर जगह जहां आधुनिक ब्राउज़र इस्तेमाल होते हैं, WebP इस्तेमाल करें; JPG सिर्फ़ तब इस्तेमाल करें जब इमेज पुराने प्रोग्राम में खुलनी हो या WhatsApp पर शेयर करनी हो।',
  },
  {
    id: 'kb-faq-6',
    question: 'क्या 100 KB तक घटाने से फ़ोटो धुंधली दिखती है?',
    answer: 'नहीं, यदि आप इसे सावधानी से करते हैं। 100 KB पर एक सामान्य मोबाइल फ़ोटो स्क्रीन पर अब भी स्पष्ट दिखती है, क्योंकि स्क्रीन कैमरे से कैप्चर किए गए पिक्सेल से कहीं कम पिक्सेल दिखाती है। वह सिर्फ़ तभी धुंधली दिखती है जब आप क्वालिटी बहुत कम कर देते हैं (लगभग 40% से नीचे) या फ़ोटो को बड़े साइज़ में प्रिंट किया जाता है। डाउनलोड करने से पहले हमेशा पहले और बाद की तुलना देखें।',
  },
  {
    id: 'kb-faq-7',
    question: 'क्या मैं PNG को 100 KB तक घटा सकता हूं?',
    answer: 'हां, लेकिन PNG फ़ोटो शुरू से ही बड़ी होती हैं, इसलिए इसमें ज़्यादा मेहनत लगती है। PNG अपलोड करें, क्वालिटी स्लाइडर नीचे ले जाएं और आउटपुट को WebP या JPG में बदलें: सिर्फ़ इससे अक्सर साइज़ आधे से ज़्यादा घट जाता है। PNG आउटपुट सिर्फ़ तभी रखें जब इमेज को पारदर्शिता चाहिए, और स्वीकार करें कि पारदर्शी PNG 100 KB तक नहीं पहुंच सकता।',
  },
  {
    id: 'kb-faq-8',
    question: 'मैं इमेज को 200 KB पर कैसे लाऊं?',
    answer: 'वही तरीका इस्तेमाल करें: इमेज अपलोड करें, संतुलित प्रीसेट से शुरू करें और लाइव साइज़ देखते हुए क्वालिटी स्लाइडर नीचे ले जाएं, जब तक वह 200 KB के करीब न पहुंच जाए। ज़्यादातर फ़ोटो 70 से 80% क्वालिटी पर आसानी से 200 KB तक पहुंच जाती हैं, इसलिए आमतौर पर आपको ज़्यादा नीचे जाने की ज़रूरत नहीं पड़ती।',
  },
  {
    id: 'kb-faq-9',
    question: 'इमेज को 50 KB का बनाने के लिए मुझे क्या करना चाहिए?',
    answer: 'इमेज अपलोड करें, आउटपुट फ़ॉर्मैट को WebP में बदलें और क्वालिटी स्लाइडर को धीरे-धीरे नीचे ले जाएं, जब तक लाइव साइज़ 50 KB के करीब न पहुंच जाए — फ़ोटो के लिए आमतौर पर लगभग 40 से 55% क्वालिटी। तुलना ध्यान से देखें, क्योंकि 50 KB पर बारीक विवरण प्रभावित होने लगते हैं; थंबनेल और चैट के लिए यह ठीक है, उन फ़ोटो के लिए कम जिन्‍हें आप सहेजकर रखना चाहते हैं।',
  },
  {
    id: 'kb-faq-10',
    question: 'क्या इमेज को 20 KB तक घटाना संभव है?',
    answer: 'WebP आउटपुट और कम क्वालिटी सेटिंग इस्तेमाल करें, आमतौर पर 25 से 40%, और लाइव साइज़ देखें। 20 KB बहुत कम है, इसलिए नज़र आने वाली नरमी की उम्मीद करें: यह आइकन, थंबनेल और छोटी प्रीव्यू इमेज के लिए काम करता है, चेहरे वाली फ़ोटो के लिए नहीं। यदि इमेज अब भी 20 KB तक नहीं पहुंचती, तो संभव है उसमें इतनी छोटी फ़ाइल के लिए ज़्यादा विवरण है।',
  },
  {
    id: 'kb-faq-11',
    question: 'वेबसाइट की इमेज के लिए अच्छा फ़ाइल साइज़ क्या है?',
    answer: 'सामान्य कंटेंट फ़ोटो के लिए प्रति इमेज 100 KB से कम, और बड़ी हीरो इमेज के लिए 200 KB से कम का लक्ष्य रखें। छोटी फ़ाइलें पेज तेज़ी से लोड करती हैं, जिसे विज़िटर नोटिस करते हैं और Google इनाम देता है। वेबसाइट की इमेज के लिए WebP और संतुलित प्रीसेट को शुरुआती बिंदु के रूप में इस्तेमाल करें।',
  },
  {
    id: 'kb-faq-12',
    question: 'ईमेल अटैचमेंट की साइज़ सीमा क्या है?',
    answer: 'ज़्यादातर ईमेल प्रदाता प्रति संदेश कुल 20 से 25 MB की अनुमति देते हैं, सभी अटैचमेंट सहित; Gmail 25 MB की अनुमति देता है। 100 KB तक घटाई गई एक फ़ोटो कभी समस्या नहीं होती; दस 100 KB वाली फ़ोटो भी कुल सिर्फ़ 1 MB होती हैं। पहले कंप्रेस करना ही कई फ़ोटो ईमेल से भेजना आसान बनाता है।',
  },
  {
    id: 'kb-faq-13',
    question: 'क्या मैं एक साथ कई इमेज को 100 KB तक घटा सकता हूं?',
    answer: 'हां। सभी इमेज एक साथ अपलोड करें, सभी पर वही प्रीसेट और वही क्वालिटी लागू करें और हर एक का लाइव साइज़ देखें। यदि कोई इमेज अब भी 100 KB से ऊपर है, तो उसे अलग से समायोजित करें और फिर «सभी डाउनलोड करें (ZIP)» बटन से सब कुछ एक साथ डाउनलोड करें।',
  },
  {
    id: 'kb-faq-14',
    question: 'क्या यह टूल मेरी इमेज के आयाम बदलता है?',
    answer: 'नहीं। CompressMyPic आपकी इमेज के आयाम बिल्कुल वैसे ही रखता है: सिर्फ़ फ़ाइल का साइज़ छोटा होता है। आपकी फ़ोटो की चौड़ाई, ऊंचाई और अनुपात मूल जैसे ही रहते हैं, इसलिए 4000×3000 की फ़ोटो 4000×3000 ही रहती है, सिर्फ़ उसकी फ़ाइल बहुत छोटी हो जाती है।',
  },
  {
    id: 'kb-faq-15',
    question: 'मैं अपनी कंप्रेस की गई इमेज का साइज़ कैसे जांचूं?',
    answer: 'CompressMyPic हर इमेज का मूल साइज़ और कंप्रेस किया गया साइज़ लाइव दिखाता है, ठीक हर फ़ोटो के नीचे; उदाहरण के लिए, «4.2 MB → 98 KB»। आप अपने डिवाइस पर डाउनलोड की गई फ़ाइल भी जांच सकते हैं: मोबाइल पर, अपनी गैलरी या फ़ाइल मैनेजर में फ़ाइल का विवरण देखें।',
  },
  {
    id: 'kb-faq-16',
    question: 'क्या वेबसाइट के लिए 100 KB पर्याप्त क्वालिटी है?',
    answer: 'हां, लगभग हर वेब इस्तेमाल के लिए। वेबसाइट की फ़ोटो कुछ सौ पिक्सेल चौड़ाई में दिखाई जाती हैं, इसलिए 100 KB की इमेज स्क्रीन पर स्पष्ट दिखती है। सिर्फ़ पूरी स्क्रीन वाली हीरो इमेज या प्रिंट के लिए बनाई गई फ़ोटो को बड़ी फ़ाइलों की ज़रूरत होती है। 100 KB तक कंप्रेस करें, तुलना देखें और आप पाएंगे कि क्वालिटी बनी रहती है।',
  },
  {
    id: 'kb-faq-17',
    question: 'क्या मैं स्क्रीनशॉट को 100 KB तक घटा सकता हूं?',
    answer: 'हां, और स्क्रीनशॉट सबसे आसान मामला हैं। उनमें समतल रंग के बड़े क्षेत्र होते हैं, इसलिए वे बहुत अच्छी तरह कंप्रेस होते हैं: 1 MB से शुरू होने वाला स्क्रीनशॉट अक्सर संतुलित प्रीसेट से 100 KB से नीचे चला जाता है। सबसे छोटा नतीजा पाने के लिए WebP आउटपुट आज़माएं।',
  },
  {
    id: 'kb-faq-18',
    question: 'क्या कंप्रेस करते समय मेरी इमेज मेरे डिवाइस से बाहर जाती हैं?',
    answer: 'नहीं। सारी कंप्रेशन आपके अपने डिवाइस पर आपके अपने ब्राउज़र के अंदर होती है, इसलिए आपकी इमेज कभी किसी सर्वर पर अपलोड नहीं होतीं, न स्टोर होती हैं और न कोई और उन्हें देखता है। वे आपके ब्राउज़र की मेमोरी में रहती हैं और टैब बंद करते या रिफ़्रेश करते ही मिट जाती हैं।',
  },
  {
    id: 'kb-faq-19',
    question: 'मैं कितनी इमेज घटा सकता हूं, इसकी कोई सीमा है?',
    answer: 'नहीं। आप कितनी इमेज कंप्रेस कर सकते हैं, इसकी कोई सीमा नहीं है, और आपको कोई अकाउंट या रजिस्ट्रेशन नहीं चाहिए। एकमात्र सीमा प्रति इमेज 20 MB है, जो हाई-रिज़ॉल्यूशन कैमरा फ़ोटो और बड़े स्क्रीनशॉट के लिए पर्याप्त है।',
  },
  {
    id: 'kb-faq-20',
    question: 'क्या इमेज को 100 KB तक घटाना मुफ़्त है?',
    answer: 'हां, पूरी तरह मुफ़्त। कोई शुल्क नहीं, कोई पेड प्लान नहीं, कोई क्रेडिट नहीं और आपकी कंप्रेस की गई इमेज पर कोई वॉटरमार्क नहीं। साइट खोलें, अपनी इमेज को 100 KB तक घटाएं और जितनी बार चाहें डाउनलोड करें।',
  },
];

export const Guide100kbPageHi: React.FC<Guide100kbPageHiProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'वेब और ईमेल के लिए इमेज को 100 KB तक कैसे घटाएं';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'मुफ़्त ऑनलाइन कंप्रेसर से वेबसाइट और ईमेल के लिए इमेज का साइज़ 100 KB तक घटाएं। चरण-दर-चरण गाइड, बिना रजिस्ट्रेशन और बिना वॉटरमार्क के।');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/guides/reduce-image-size-to-100kb/';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'वेबसाइट और ईमेल के लिए इमेज का साइज़ 100 KB तक कैसे घटाएं',
          description: 'CompressMyPic में क्वालिटी स्लाइडर और WebP आउटपुट इस्तेमाल करके इमेज को लगभग 100 KB तक घटाएं।',
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
          headline: "वेब और ईमेल के लिए इमेज को 100 KB तक कैसे घटाएं",
          description: "मुफ़्त ऑनलाइन कंप्रेसर से वेबसाइट और ईमेल के लिए इमेज का साइज़ 100 KB तक घटाएं। चरण-दर-चरण गाइड, बिना रजिस्ट्रेशन और बिना वॉटरमार्क के।",
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
          inLanguage: 'hi',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: "होम", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 2, name: "गाइड्स", item: "https://compressmypic.online/" },
            { '@type': 'ListItem', position: 3, name: "वेब और ईमेल के लिए इमेज को 100 KB तक कैसे घटाएं", item: "https://compressmypic.online/guides/reduce-image-size-to-100kb/" },
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
            वेबसाइट और ईमेल के लिए इमेज का साइज़ 100 KB तक कैसे घटाएं
          </h1>
          <p className="mt-3 text-sm text-[var(--ink-3)]">
            द्वारा <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('/about'); }} className="font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline">Bilal</a>
          </p>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            4 MB की फ़ोटो आपकी वेबसाइट को धीमा लोड कराती है और ईमेल को अटका देती है। उसे लगभग 100 KB तक घटाने से पेज तेज़ी से लोड होते हैं और ईमेल तुरंत भेजे जाते हैं, और यदि आप इसे सही तरीके से करें, तो कोई अंतर नहीं बता सकता।
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>100 KB जादुई संख्या क्यों है</span>
            </h2>
            <p>
              100 KB वह साइज़ है जिसकी तलाश ज़्यादातर लोग करते हैं, क्योंकि यह बिल्कुल सही संतुलन है: वेबसाइट पर तुरंत लोड होने या किसी भी ईमेल में समाने के लिए पर्याप्त छोटा, लेकिन स्क्रीन पर स्पष्ट दिखने के लिए पर्याप्त बड़ा। एक सामान्य मोबाइल फ़ोटो 3 से 5 MB से शुरू होती है, इसलिए 100 KB तक पहुंचने का मतलब है फ़ाइल का लगभग 97% हटाना, और आधुनिक कंप्रेशन यह मुख्य रूप से वह डेटा हटाकर करता है जिसे आपकी आंखें देख ही नहीं सकतीं।
            </p>
            <p>
              शुरू करने से पहले एक ईमानदार नोट: CompressMyPic में ऐसा कोई बॉक्स नहीं है जहां आप «100 KB» लिखें और ठीक वही साइज़ पाएं। कोई भी ईमानदार टूल सटीक संख्या का वादा नहीं कर सकता, क्योंकि हर फ़ोटो अलग तरह से कंप्रेस होती है। इसके बजाय, यह टूल हर बदलाव के बाद कंप्रेस किया गया साइज़ लाइव दिखाता है, और आप क्वालिटी स्लाइडर से खुद उसे 100 KB तक ले जाते हैं। यह गाइड आपको ठीक-ठीक बताती है कि यह कैसे करें।
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>चरण-दर-चरण: इमेज को 100 KB तक घटाएं</span>
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
              alt="CompressMyPic पर बड़ी फ़ोटो अपलोड करके उसे 100 KB तक घटाने का स्क्रीनशॉट"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              अपनी फ़ोटो अपलोड करें: मूल साइज़ तुरंत दिखता है, ताकि आपको पता हो कि कितना घटाना है।
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>आम लक्ष्य एक नज़र में</span>
            </h2>
            <p>
              100 KB एकमात्र लक्ष्य नहीं है जिसकी लोगों को ज़रूरत पड़ती है। वही तरीका किसी भी साइज़ के लिए काम करता है; हर एक से आप यह उम्मीद कर सकते हैं:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">लक्ष्य</th>
                    <th className="px-4 py-3 font-semibold">सामान्य क्वालिटी</th>
                    <th className="px-4 py-3 font-semibold">किसके लिए अच्छा है</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">200 KB</td>
                    <td className="px-4 py-3">70–80%</td>
                    <td className="px-4 py-3">ब्लॉग फ़ोटो, बड़ी वेब इमेज</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">100 KB</td>
                    <td className="px-4 py-3">50–70%</td>
                    <td className="px-4 py-3">वेबसाइट फ़ोटो, ईमेल अटैचमेंट</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">50 KB</td>
                    <td className="px-4 py-3">40–55% + WebP</td>
                    <td className="px-4 py-3">थंबनेल, चैट, तेज़ पेज</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#dc2626] dark:text-[#fca5a5]">20 KB</td>
                    <td className="px-4 py-3">25–40% + WebP</td>
                    <td className="px-4 py-3">आइकन, छोटी प्रीव्यू इमेज</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              ये शुरुआती बिंदु हैं, वादे नहीं। एक साधारण फ़ोटो आसानी से 100 KB तक पहुंच जाती है; बहुत विवरण वाली फ़ोटो को कम क्वालिटी सेटिंग की ज़रूरत पड़ती है। प्रतिशत पर नहीं, लाइव साइज़ के नंबर पर भरोसा करें।
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>वेबसाइट और ईमेल के लिए टिप्स</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>वेबसाइट के लिए WebP आउटपुट इस्तेमाल करें: यह 100 KB तक पहुंचने का सबसे तेज़ तरीका है और सभी आधुनिक ब्राउज़र इसका समर्थन करते हैं।</li>
              <li>ईमेल के लिए JPG सबसे सुरक्षित फ़ॉर्मैट है क्योंकि सभी ईमेल ऐप इसे खोलते हैं। 100 KB का JPG तुरंत अटैच होता है और साइज़ की वजह से कभी वापस नहीं आता।</li>
              <li>किसी पेज या ईमेल की सभी फ़ोटो एक साथ कंप्रेस करें और फिर «सभी डाउनलोड करें (ZIP)» बटन से सभी डाउनलोड करें।</li>
              <li>ठीक 100 KB के पीछे न भागें। 115 KB की स्पष्ट फ़ोटो ठीक 100 KB की धुंधली फ़ोटो से बेहतर है: लोड होने के समय में कोई अंतर नहीं पड़ता।</li>
              <li>फ़ोटो प्रकाशित या भेजने से पहले हमेशा पहले और बाद की तुलना को अधिकतम ज़ूम करके देखें।</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.webp"
              alt="पहले और बाद का लाइव फ़ाइल साइज़ दिखाता स्क्रीनशॉट, जिसमें इमेज लगभग 100 KB तक घटाई गई है"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              पहले और बाद का लाइव साइज़ आपकी प्रगति दिखाता है: स्लाइडर को नीचे ले जाएं जब तक कंप्रेस किया गया साइज़ 100 KB के करीब न पहुंच जाए।
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>जब 100 KB संभव न हो</span>
            </h2>
            <p className="text-sm sm:text-base">
              कुछ इमेज बिना खराब दिखे 100 KB तक नहीं पहुंच सकतीं: बहुत बड़ी और बहुत विवरण वाली फ़ोटो, या पारदर्शिता वाला PNG जिसे PNG ही रहना है। ऐसे में ज़बरदस्ती न करें। 180 KB की स्पष्ट फ़ोटो हर मामले में 100 KB की खराब फ़ोटो से बेहतर है: वेबसाइट पर वह अब भी तेज़ी से लोड होती है और ईमेल के लिए वह अब भी किसी भी अटैचमेंट सीमा से बहुत नीचे रहती है। लक्ष्य एक छोटी फ़ाइल है जो अब भी अच्छी दिखे, कोई जादुई संख्या नहीं।
            </p>
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
                onClick={() => onNavigate('/guides/compress-images-for-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">बिना क्वालिटी गंवाए WhatsApp के लिए इमेज कैसे कंप्रेस करें</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">पहले खुद फ़ोटो घटाएं और फिर उन्हें दस्तावेज़ के रूप में भेजें ताकि WhatsApp उन्हें धुंधला न कर सके।</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/guides/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP: आपको कौन सा फ़ॉर्मैट इस्तेमाल करना चाहिए?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">फ़ाइल साइज़, क्वालिटी और पारदर्शिता की तुलना, ताकि आप हर बार सही फ़ॉर्मैट चुन सकें।</p>
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
              onClick={() => onNavigate('/guides/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#dc2626]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
