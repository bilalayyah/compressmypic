import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageHiProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageHi: React.FC<PrivacyPageHiProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'गोपनीयता नीति - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              गोपनीयता नीति
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            अंतिम अपडेट: 15 नवंबर 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. आपके ब्राउज़र में इमेज प्रोसेसिंग
            </h2>
            <p>
              CompressMyPic एक मुफ़्त ऑनलाइन इमेज कंप्रेसर है। इमेज HTML5 Canvas से आपके ब्राउज़र में स्थानीय रूप से प्रोसेस होती हैं: वे कभी हमारे सर्वर पर अपलोड नहीं होतीं और हम आपकी इमेज इकट्ठा, स्टोर या शेयर नहीं करते। जब आप ब्राउज़र टैब बंद करते हैं या रिफ़्रेश करते हैं, तो मेमोरी में मौजूद सभी अस्थायी ऑब्जेक्ट मिट जाते हैं।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. हम निजी डेटा इकट्ठा नहीं करते
            </h2>
            <p>
              कंप्रेशन टूल इस्तेमाल करने के लिए हम आपसे अकाउंट, पासवर्ड, ईमेल या फ़ोन नंबर नहीं मांगते। संपर्क फ़ॉर्म के ज़रिए आप स्वेच्छा से जो भी संपर्क डेटा भेजते हैं, वह सिर्फ़ आपकी खास पूछताछ का जवाब देने के लिए इस्तेमाल होता है।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. विज्ञापन
            </h2>
            <p>
              CompressMyPic इस समय कोई विज्ञापन नहीं दिखाता। यह साइट विज्ञापन कुकीज़ नहीं लगाती।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. एनालिटिक्स
            </h2>
            <p>
              हम Google Analytics 4 (GA4) का इस्तेमाल यह समझने के लिए करते हैं कि साइट कुल मिलाकर कैसे इस्तेमाल होती है; उदाहरण के लिए, कौन से टूल लोकप्रिय हैं और किन पेज पर विज़िट आती हैं। GA4 गुमनाम इस्तेमाल डेटा इकट्ठा करता है, जैसे आप किन पेज पर जाते हैं, उन पर कितनी देर रहते हैं, और आपके डिवाइस व ब्राउज़र के बारे में सामान्य जानकारी। यह एक विज़िट को दूसरी से अलग पहचानने के लिए आपके डिवाइस पर कुकीज़ लगा सकता है (जैसे _ga)। हम GA4 का इस्तेमाल आपको व्यक्तिगत रूप से पहचानने के लिए नहीं करते। आप Google Analytics ऑप्ट-आउट ऐड-ऑन इंस्टॉल करके (https://tools.google.com/dlpage/gaoptout) या अपने ब्राउज़र की सेटिंग में कुकीज़ बंद करके, कभी भी Google Analytics से बाहर निकल सकते हैं।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. तृतीय-पक्ष लिंक
            </h2>
            <p>
              हमारी वेबसाइट में बाहरी साइटों के लिंक हो सकते हैं। हम तृतीय-पक्ष प्लेटफ़ॉर्म की गोपनीयता प्रथाओं या सामग्री के लिए ज़िम्मेदार नहीं हैं।
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. कुकीज़ और सहमति
            </h2>
            <p>
              CompressMyPic अपने इमेज टूल के लिए कोई कुकी नहीं लगाता: कंप्रेशन पूरी तरह आपके ब्राउज़र में होता है और इसके लिए हमारी ओर से कोई कुकी, अकाउंट या सहेजी गई प्राथमिकता ज़रूरी नहीं है। इस साइट की कुकीज़ तृतीय-पक्ष सेवाओं से आती हैं। उदाहरण के लिए, Google Analytics इस्तेमाल के आंकड़ों के लिए कुकीज़ लगा सकता है। आपका ब्राउज़र ये कुकीज़ आपके डिवाइस पर सहेजता है और आप उन्हें ब्राउज़र की सेटिंग से कभी भी हटा सकते हैं।
            </p>
            <p>
              CompressMyPic इस समय कोई विज्ञापन नहीं दिखाता, इसलिए किसी भी क्षेत्र के विज़िटर से विज्ञापन के लिए सहमति नहीं मांगी जाती।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. GDPR के तहत आपके अधिकार
            </h2>
            <p>
              यदि आप यूरोपीय आर्थिक क्षेत्र या यूनाइटेड किंगडम में हैं, तो सामान्य डेटा संरक्षण विनियमन (GDPR) आपको आपके निजी डेटा पर अधिकार देता है। आप हमसे अपने बारे में मौजूद निजी डेटा की कॉपी मांग सकते हैं, यदि वह गलत है तो उसे ठीक करने को कह सकते हैं, उसे हटाने को कह सकते हैं, उसके इस्तेमाल को सीमित करने को कह सकते हैं, और उसके प्रसंस्करण का विरोध कर सकते हैं। जब प्रसंस्करण आपकी सहमति पर आधारित हो, तो आप उसे कभी भी वापस ले सकते हैं; सहमति वापस लेने से पहले हमने जो कानूनी रूप से किया, उस पर कोई असर नहीं पड़ता।
            </p>
            <p>
              चूंकि हमारे टूल इमेज को स्थानीय रूप से प्रोसेस करते हैं और हमारे पास उपयोगकर्ता अकाउंट नहीं हैं, इसलिए हमारे पास आमतौर पर जो एकमात्र निजी डेटा होता है, वह है वह नाम, ईमेल पता और संदेश जो आप संपर्क फ़ॉर्म के ज़रिए भेजते हैं। इनमें से किसी भी अधिकार का इस्तेमाल करने के लिए, हमें <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> पर लिखें और हम 30 दिनों के भीतर जवाब देंगे। यदि आपको लगता है कि हमने आपके डेटा से अनुचित व्यवहार किया है, तो आपको अपने स्थानीय डेटा संरक्षण प्राधिकरण के पास शिकायत दर्ज करने का भी अधिकार है।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. डेटा प्रतिधारण
            </h2>
            <p>
              हम निजी डेटा सिर्फ़ उतने समय तक रखते हैं जितना उस उद्देश्य के लिए ज़रूरी है जिसके लिए वह इकट्ठा किया गया था। संपर्क फ़ॉर्म के संदेश सिर्फ़ तब तक रखे जाते हैं जब तक आपकी पूछताछ का जवाब न दे दिया जाए और बातचीत खत्म न हो जाए, और उसके बाद थोड़े समय तक, यदि कोई अनुवर्ती सवाल हो; वे कभी मार्केटिंग के लिए इस्तेमाल नहीं होते और न ही तृतीय पक्ष के साथ शेयर किए जाते हैं। आपकी इमेज बिल्कुल नहीं रखी जातीं: वे सिर्फ़ तब तक आपके ब्राउज़र की मेमोरी में रहती हैं जब तक आप कोई टूल इस्तेमाल कर रहे हैं, और टैब बंद करते या रिफ़्रेश करते ही मिट जाती हैं। कुल मिलाकर रखे गए एनालिटिक्स डेटा में कोई निजी जानकारी नहीं होती और वह सिर्फ़ सारांश रूप में रखा जाता है।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. सुरक्षा और reCAPTCHA
            </h2>
            <p>
              साइट HTTPS पर दी जाती है, इसलिए आपके ब्राउज़र और साइट के बीच का कनेक्शन एन्क्रिप्टेड होता है। हमारा संपर्क फ़ॉर्म FormSubmit के ज़रिए भेजा जाता है, जो आपका संदेश हमारे ईमेल पते पर फ़ॉरवर्ड करता है, और फ़ॉर्म स्पैम व स्वचालित दुरुपयोग रोकने के लिए Google reCAPTCHA से सुरक्षित है। जब आप फ़ॉर्म भेजते हैं, तो reCAPTCHA इंसानों को बॉट से अलग पहचानने के लिए हार्डवेयर और सॉफ़्टवेयर की जानकारी इकट्ठा कर सकता है, जैसे आपके ब्राउज़र और डिवाइस का डेटा; यह Google की <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                गोपनीयता नीति
              </a> और <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                सेवा की शर्तों
              </a> के अधीन होता है। हम आपसे कभी संपर्क फ़ॉर्म के ज़रिए पासवर्ड, भुगतान डेटा या संवेदनशील निजी दस्तावेज़ भेजने को नहीं कहते, और आपको भी उन्हें किसी संदेश में शामिल नहीं करना चाहिए।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. बच्चों की गोपनीयता
            </h2>
            <p>
              CompressMyPic आम जनता के लिए एक टूल है और यह 13 साल से कम उम्र के बच्चों के लिए नहीं है। हम जानबूझकर बच्चों की निजी जानकारी इकट्ठा नहीं करते। यदि आप माता-पिता या अभिभावक हैं और आपको लगता है कि आपके बच्चे ने संपर्क फ़ॉर्म के ज़रिए हमें निजी जानकारी भेजी है, तो हमें ईमेल लिखें और हम उसे तुरंत हटा देंगे।
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. इस नीति में बदलाव
            </h2>
            <p>
              जब साइट बदलेगी तो हम यह नीति अपडेट कर सकते हैं; उदाहरण के लिए, यदि हम कोई नई एनालिटिक्स सेवा, कोई नया विज्ञापन भागीदार, या हमसे संपर्क का कोई नया तरीका जोड़ते हैं। जब हम ऐसा करेंगे, तो इस पेज के ऊपर «अंतिम अपडेट» की तारीख़ बदल देंगे और महत्वपूर्ण बदलावों को यहां सरल भाषा में समझाएंगे। बदलाव के बाद साइट का इस्तेमाल जारी रखने का मतलब है कि आप अपडेट की गई नीति को स्वीकार करते हैं।
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. संपर्क
            </h2>
            <p>
              यदि इस नीति के बारे में आपके कोई सवाल हैं, तो हमें{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              {' '}पर लिखें।
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
