import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageHiProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageHi: React.FC<DisclaimerPageHiProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'अस्वीकरण | CompressMyPic – मुफ़्त इमेज टूल्स';
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
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              अस्वीकरण
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            अंतिम अपडेट: 18 नवंबर 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. सामान्य जानकारी
            </h2>
            <p>
              CompressMyPic एक मुफ़्त ऑनलाइन इमेज कंप्रेशन और एडिटिंग सेवा है। इस वेबसाइट के टूल, गाइड और लेख सिर्फ़ सामान्य जानकारी और व्यावहारिक इस्तेमाल के लिए दिए गए हैं। वे किसी भी तरह की पेशेवर सलाह नहीं हैं — न कानूनी, न चिकित्सा, न वित्तीय, न तकनीकी — और वे आपके और CompressMyPic के बीच कोई पेशेवर संबंध नहीं बनाते।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. कोई वारंटी नहीं
            </h2>
            <p>
              सेवा «जैसी है» और «जैसी उपलब्ध है» के आधार पर दी जाती है, बिना किसी तरह की वारंटी के, व्यक्त या निहित। हम यह गारंटी नहीं देते कि टूल हमेशा उपलब्ध रहेंगे, बिना रुकावट, बिना त्रुटि या हानिकारक घटकों से मुक्त रहेंगे, या कि कोई खास इमेज किसी निश्चित साइज़ या क्वालिटी तक कंप्रेस हो जाएगी। नतीजे मूल इमेज, उसके फ़ॉर्मैट और आपके ब्राउज़र पर निर्भर करते हैं, इसलिए कोई भी टूल इस्तेमाल करने से पहले अपनी मूल फ़ाइलों की कॉपी हमेशा सहेजकर रखें।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. सामग्री की सटीकता
            </h2>
            <p>
              हम अपनी गाइड, लेख और विवरण सटीक और अद्यतन रखने की कोशिश करते हैं, लेकिन इमेज फ़ॉर्मैट, ब्राउज़र और वेब मानक समय के साथ बदलते रहते हैं। हमारे प्रयासों के बावजूद इस साइट की जानकारी पुरानी हो सकती है या उसमें त्रुटियां हो सकती हैं। उन पर भरोसा करने से पहले महत्वपूर्ण जानकारी — जैसे किसी प्लेटफ़ॉर्म की साइज़ सीमा — हमेशा उस प्लेटफ़ॉर्म के आधिकारिक दस्तावेज़ में जांचें।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. आपकी फ़ाइलें आपकी ज़िम्मेदारी हैं
            </h2>
            <p>
              इमेज आपके ब्राउज़र में स्थानीय रूप से प्रोसेस होती हैं और कभी हमारे सर्वर पर अपलोड नहीं होतीं। इसका मतलब यह भी है कि हम आपके लिए कोई फ़ाइल वापस नहीं ला सकते: यदि आप हमारे टूल इस्तेमाल करते हुए कोई मूल इमेज ओवरराइट कर देते हैं, हटा देते हैं या खो देते हैं, तो हम उसे बहाल नहीं कर सकते। किसी भी महत्वपूर्ण इमेज का बैकअप सहेजकर रखें और सिर्फ़ उन फ़ाइलों की प्रतियों को प्रोसेस करें जो आपकी हैं या जिन्हें एडिट करने की आपको अनुमति है।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. तृतीय-पक्ष सेवाएं और लिंक
            </h2>
            <p>
              यह साइट तृतीय-पक्ष सेवाओं का इस्तेमाल करती है — इस्तेमाल के आंकड़ों के लिए Google Analytics 4, संपर्क फ़ॉर्म के लिए FormSubmit, और गुमनाम टिप्पणियों के लिए एक Cloudflare Worker — और बाहरी वेबसाइटों के लिंक देती है। हम उन सेवाओं या साइटों को नियंत्रित नहीं करते, और उनकी सामग्री, उपलब्धता, गोपनीयता प्रथाओं या सटीकता के लिए ज़िम्मेदार नहीं हैं। उनका इस्तेमाल करते समय उनकी अपनी शर्तें और गोपनीयता नीतियां लागू होती हैं।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. विज्ञापन
            </h2>
            <p>
              यह साइट इस समय कोई विज्ञापन नहीं दिखाती।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. दायित्व की सीमा
            </h2>
            <p>
              कानून द्वारा अनुमत अधिकतम सीमा तक, CompressMyPic और इसका संचालक इस वेबसाइट या इसके टूल के इस्तेमाल — या इस्तेमाल न कर पाने — से उत्पन्न किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी हानि या क्षति के लिए ज़िम्मेदार नहीं होंगे, जिसमें फ़ाइलों, डेटा या लाभ की हानि भी शामिल है, लेकिन इन्हीं तक सीमित नहीं। सेवा से किसी भी असंतोष पर आपका एकमात्र उपाय इसका इस्तेमाल बंद करना है।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. उपयोगकर्ता टिप्पणियां
            </h2>
            <p>
              हमारे टूल के नीचे पोस्ट की गई टिप्पणियां विज़िटर द्वारा लिखी जाती हैं और उनकी अपनी राय दर्शाती हैं, हमारी नहीं। हम टिप्पणियों का संचालन करते हैं और कोई भी ऐसी सामग्री हटा सकते हैं जो स्पैम हो, अपमानजनक हो या विषय से बाहर हो, लेकिन हम उपयोगकर्ता टिप्पणियों की सामग्री का समर्थन नहीं करते और न ही उसके लिए ज़िम्मेदारी लेते हैं। किसी टिप्पणी में कभी पासवर्ड, भुगतान डेटा या संवेदनशील निजी जानकारी शेयर न करें।
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. संपर्क
            </h2>
            <p>
              यदि इस अस्वीकरण के बारे में आपके कोई सवाल हैं, तो हमें 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">bilalayyah@gmail.com</a>
              {' '}पर संपर्क करें।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
