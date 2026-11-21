import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageHiProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageHi: React.FC<CookiePolicyPageHiProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'कुकी नीति | CompressMyPic – कुकीज़ का इस्तेमाल कैसे होता है';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>इमेज कंप्रेसर पर वापस जाएं</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              कुकी नीति
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            अंतिम अपडेट: 18 नवंबर 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. कुकीज़ क्या हैं?
            </h2>
            <p>
              कुकीज़ छोटी टेक्स्ट फ़ाइलें होती हैं जिन्हें कोई वेबसाइट आपके ब्राउज़र से आपके डिवाइस पर सहेजने को कहती है। वे आपकी विज़िट के बारे में जानकारी याद रख सकती हैं — उदाहरण के लिए, कि आपने पहले कोई संदेश देखा है या नहीं — ताकि साइट या उस पर मौजूद कोई सेवा बाद की विज़िट में आपके ब्राउज़र को पहचान सके। यह नीति बताती है कि CompressMyPic पर कौन सी कुकीज़ इस्तेमाल होती हैं, क्यों इस्तेमाल होती हैं, और आप उन्हें कैसे नियंत्रित कर सकते हैं।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. वे कुकीज़ जो हम नहीं लगाते
            </h2>
            <p>
              CompressMyPic खुद कोई कुकी नहीं लगाता। हमारे इमेज टूल पूरी तरह आपके ब्राउज़र में चलते हैं: कंप्रेशन के लिए न अकाउंट चाहिए, न लॉगिन, न कुकी। हम आपको याद रखने, आपको ट्रैक करने या आपकी प्राथमिकताएं सहेजने के लिए कुकी नहीं लगाते। आपकी इमेज कभी आपके ब्राउज़र से बाहर नहीं जातीं, और उनके बारे में कुछ भी किसी कुकी में सहेजा नहीं जाता।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. विज्ञापन कुकीज़
            </h2>
            <p>
              CompressMyPic इस समय कोई विज्ञापन नहीं दिखाता और विज्ञापन कुकीज़ नहीं लगाता।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Google Analytics 4 कुकीज़
            </h2>
            <p>
              हम Google Analytics 4 (GA4) का इस्तेमाल यह समझने के लिए करते हैं कि साइट कुल मिलाकर कैसे इस्तेमाल होती है — उदाहरण के लिए, कौन से टूल लोकप्रिय हैं और किन पेज पर विज़िट आती हैं। GA4 आपके डिवाइस पर कुकीज़ लगा सकता है, जैसे _ga, ताकि एक विज़िट को दूसरी से अलग पहचाना जा सके। डेटा गुमनाम होता है और सिर्फ़ सारांश रूप में इस्तेमाल होता है; हम GA4 का इस्तेमाल आपको व्यक्तिगत रूप से पहचानने के लिए नहीं करते। आप Google Analytics ऑप्ट-आउट ऐड-ऑन इंस्टॉल करके (https://tools.google.com/dlpage/gaoptout) या अपने ब्राउज़र की सेटिंग में कुकीज़ बंद करके, कभी भी Google Analytics से बाहर निकल सकते हैं।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. सहमति (EEA, UK और स्विट्ज़रलैंड)
            </h2>
            <p>
              चूंकि यह साइट इस समय कोई विज्ञापन नहीं दिखाती, इसलिए कोई विज्ञापन सहमति संदेश नहीं दिखाया जाता और विज्ञापन के लिए कोई सहमति नहीं मांगी जाती। इस्तेमाल के आंकड़े Google Analytics से इकट्ठे किए जाते हैं; आप अपने ब्राउज़र की सेटिंग से एनालिटिक्स कुकीज़ ब्लॉक कर सकते हैं (धारा 8 देखें)।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. अन्य तृतीय-पक्ष सेवाएं
            </h2>
            <p>
              इस साइट पर कुछ अन्य सेवाएं अपनी कुकीज़ या इसी तरह का स्टोरेज इस्तेमाल कर सकती हैं। Google reCAPTCHA, जो हमारे संपर्क फ़ॉर्म को स्पैम से बचाता है, इंसानों को बॉट से अलग पहचानने के लिए कुकीज़ लगा सकता है; इसका इस्तेमाल 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Google की गोपनीयता नीति</a>
               और 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline">Google की सेवा की शर्तों</a>
               के अधीन होता है। Cloudflare, जो इस साइट को होस्ट करता है, साइट को दुरुपयोग से बचाने के लिए सुरक्षा कुकी लगा सकता है। हमारे टूल के नीचे गुमनाम टिप्पणियों में सिर्फ़ एक नाम मांगा जाता है, जिसे टिप्पणी सेवा सहेजती है, इस साइट की किसी कुकी में नहीं।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. ब्राउज़र स्टोरेज जो कुकी नहीं है
            </h2>
            <p>
              आपका ब्राउज़र थोड़ी सी स्थानीय जानकारी भी सहेजता है जो कुकी नहीं होती। यदि आप कोई टिप्पणी पोस्ट करते हैं, तो आपका ब्राउज़र वह नाम याद रख सकता है जो आपने लिखा था ताकि आपको दोबारा लिखना न पड़े, और यदि आप साइट की भाषा बदलते हैं, तो आपका ब्राउज़र अगली विज़िट के लिए वह चुनाव याद रख सकता है। यह जानकारी आपके अपने डिवाइस पर रहती है, कभी हमारे सर्वर को नहीं भेजी जाती, और आप इसे अपने ब्राउज़र में साइट डेटा मिटाकर कभी भी हटा सकते हैं।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. कुकीज़ को कैसे नियंत्रित करें
            </h2>
            <p>
              आप अपने डिवाइस पर पहले से सहेजी गई कुकीज़ हटा सकते हैं और भविष्य में कुकीज़ लगने से अपने ब्राउज़र की सेटिंग से रोक सकते हैं — सभी प्रमुख ब्राउज़र (Chrome, Firefox, Safari, Edge) अपनी गोपनीयता या सुरक्षा सेटिंग में यह विकल्प देते हैं। सभी कुकीज़ ब्लॉक करने से हमारे इमेज टूल पर कोई असर नहीं पड़ेगा, क्योंकि वे कुकीज़ पर निर्भर नहीं करते, लेकिन इससे आंकड़ों जैसी तृतीय-पक्ष सेवाओं की सुविधाएं प्रभावित हो सकती हैं। आप अपने ब्राउज़र का प्राइवेट या इनकॉग्निटो मोड भी इस्तेमाल कर सकते हैं, जो विंडो बंद करते ही कुकीज़ मिटा देता है।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. इस नीति में बदलाव
            </h2>
            <p>
              जब साइट बदलेगी तो हम यह नीति अपडेट कर सकते हैं — उदाहरण के लिए, यदि हम कोई नया विज्ञापन भागीदार या कोई नई आंकड़ा सेवा जोड़ते हैं। जब हम ऐसा करेंगे, तो इस पेज के ऊपर «अंतिम अपडेट» की तारीख़ बदल देंगे। बदलाव के बाद साइट का इस्तेमाल जारी रखने का मतलब है कि आप अपडेट की गई नीति को स्वीकार करते हैं।
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. संपर्क
            </h2>
            <p>
              यदि इस नीति के बारे में आपके कोई सवाल हैं, तो हमें 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
               पर संपर्क करें या हमारी 
              <a href="/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy'); }} className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">गोपनीयता नीति</a>
              {' '}पढ़ें।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
