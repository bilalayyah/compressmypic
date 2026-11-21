import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageHiProps {
  onNavigate: (path: string) => void;
}

export const AboutPageHi: React.FC<AboutPageHiProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'CompressMyPic के बारे में – मुफ़्त ऑनलाइन इमेज कंप्रेसर';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'CompressMyPic के बारे में: JPG, PNG और WebP के लिए मुफ़्त ऑनलाइन इमेज कंप्रेसर। बिना रजिस्ट्रेशन, बिना वॉटरमार्क और बिना कुछ भी किसी सर्वर पर अपलोड किए, इमेज ऑनलाइन मुफ़्त में कंप्रेस करें।');
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
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            CompressMyPic के बारे में
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic एक मुफ़्त और निजी इमेज कंप्रेसर है। JPG, PNG और WebP इमेज सीधे अपने ब्राउज़र में कंप्रेस करें — तेज़, सुरक्षित, और अपनी फ़ाइलें कहीं अपलोड किए बिना।
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic क्या है?</span>
            </h2>
            <p>
              CompressMyPic एक मुफ़्त ऑनलाइन इमेज कंप्रेसर और इमेज ऑप्टिमाइज़र है जो बिना क्वालिटी गंवाए आपकी इमेज का साइज़ छोटा करने में मदद करता है। यह एक फ़ोटो कंप्रेसर और फ़ोटो साइज़ रिड्यूसर है, उन फ़ॉर्मैट के लिए जिन्हें आप हर रोज़ इस्तेमाल करते हैं: JPG, PNG और WebP। इसका इस्तेमाल JPG को 100 KB तक कंप्रेस करने, PNG ऑनलाइन मुफ़्त में कंप्रेस करने, WebP इमेज कंप्रेस करने, या WhatsApp, Instagram, Facebook या ईमेल पर शेयर करने से पहले किसी फ़ोटो का साइज़ छोटा करने के लिए करें।
            </p>
            <p>
              पारंपरिक इमेज कंप्रेशन वेबसाइटें आपकी निजी फ़ोटो या आपकी कंपनी के ग्राफ़िक्स किसी और के सर्वर पर अपलोड करती हैं। यह तरीका जायज़ चिंताएं पैदा करता है, और यही वजह है कि हमने CompressMyPic को उल्टा बनाया है: एक ऐसा टूल जो सारा काम आपके अपने डिवाइस पर करता है।
            </p>
            <p>
              जब आप कोई इमेज चुनते हैं या उसे खींचकर छोड़ते हैं, तो आपका ब्राउज़र मेमोरी में एक अस्थायी बफ़र बनाता है, इमेज को HTML Canvas एलिमेंट पर बनाता है, कंप्रेशन एल्गोरिदम लागू करता है और फिर नई फ़ाइल एक्सपोर्ट करता है — सब कुछ आपकी अपनी ब्राउज़र टैब के अंदर। आपकी इमेज कंप्रेस करने की प्रक्रिया में कोई नेटवर्क, डेटाबेस या क्लाउड सर्वर शामिल नहीं होता।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>समर्थित फ़ॉर्मैट: JPG, PNG और WebP</span>
            </h2>
            <p>
              JPG कंप्रेसर के रूप में CompressMyPic आपको JPG ऑनलाइन मुफ़्त में कंप्रेस करने और अपनी JPEG फ़ाइलों का साइज़ छोटा करने देता है, बिना आपकी फ़ोटो की स्पष्टता गंवाए: संतुलित प्रीसेट आज़माएं या क्वालिटी स्लाइडर को नीचे ले जाएं और 100 KB या 200 KB जैसे लक्ष्य तक पहुंचने के लिए पहले और बाद का साइज़ लाइव देखें। PNG कंप्रेसर के रूप में यह आपको लोगो और ग्राफ़िक्स की पारदर्शिता बनाए रखते हुए PNG ऑनलाइन मुफ़्त में कंप्रेस करने देता है। और जब आप WebP इमेज कंप्रेस करते हैं, तो आपको सबसे छोटी फ़ाइलें मिलती हैं: समान क्वालिटी पर WebP आमतौर पर JPEG से 25 से 35% छोटा होता है, जिससे यह वेबसाइटों के लिए इमेज ऑप्टिमाइज़ करने का सबसे अच्छा विकल्प बन जाता है।
            </p>
            <p>
              आप हर इमेज का मूल फ़ॉर्मैट बनाए रख सकते हैं या JPG, PNG और WebP के बीच कन्वर्ट कर सकते हैं। क्वालिटी स्लाइडर (10% से 100%), निम्न, संतुलित और उच्च प्रीसेट, और पहले और बाद के साइज़ की लाइव झलक आपको फ़ाइल साइज़ और इमेज क्वालिटी के बीच संतुलन पर पूरा नियंत्रण देती है — बिना कभी KB में सटीक लक्ष्य साइज़ के लिए कोई ऐसा इनपुट बॉक्स देने का वादा किए जो टूल में है ही नहीं।
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>हमारे मूल सिद्धांत</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">पूर्ण गोपनीयता</div>
                <p className="text-xs text-[var(--ink-2)]">
                  कोई भी फ़ाइल कभी किसी बाहरी सर्वर या डेटाबेस को नहीं छूती। आपकी फ़ोटो और आपके संवेदनशील ग्राफ़िक्स पूरी तरह आपके डिवाइस पर रहते हैं। चूंकि कंप्रेशन आपके अपने ब्राउज़र में होता है, इसलिए कोई और आपका काम नहीं देखता।
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">सरल और मुफ़्त</div>
                <p className="text-xs text-[var(--ink-2)]">
                  कोई प्रोग्राम इंस्टॉल नहीं करना, कोई पेड प्लान नहीं, कोई छिपा शुल्क नहीं, कोई अकाउंट नहीं बनाना, कोई ईमेल वेरिफ़िकेशन नहीं, कोई ट्रायल सीमा नहीं। इमेज ऑनलाइन मुफ़्त में कंप्रेस करें: यह सच में मुफ़्त है, बिना रजिस्ट्रेशन और बिना आपकी कंप्रेस की गई इमेज पर वॉटरमार्क के।
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">क्वालिटी आपके नियंत्रण में</div>
                <p className="text-xs text-[var(--ink-2)]">
                  आपके पास सटीक नियंत्रण है: क्वालिटी स्लाइडर को रीयल-टाइम में घुमाएं, निम्न, संतुलित या उच्च में से कोई भी प्रीसेट चुनें, आउटपुट फ़ाइल फ़ॉर्मैट चुनें और अंतर तुरंत देखने के लिए हर इमेज की तुलना साथ-साथ करें। अपनी इमेज का साइज़ छोटा करें, बिना क्वालिटी गंवाए, अपने तरीके से।
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">बैच इमेज कंप्रेसर</div>
                <p className="text-xs text-[var(--ink-2)]">
                  एक ही सेटिंग के साथ एक साथ कई इमेज कंप्रेस करें और «सभी डाउनलोड करें (ZIP)» बटन से सभी को एक साथ डाउनलोड करें: फ़ोटो लाइब्रेरी, प्रोडक्ट कैटलॉग और वेबसाइट इमेज फ़ोल्डर के लिए एक बैच इमेज कंप्रेसर।
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">स्वचालित सुरक्षा जांच</div>
                <p className="text-xs text-[var(--ink-2)]">
                  कंप्रेसर आपकी इमेज की पारदर्शिता पहचानता है। यदि आप पारदर्शी PNG के लिए JPEG आउटपुट चुनते हैं, तो हम आपको चेतावनी दिखाते हैं क्योंकि JPEG पारदर्शिता का समर्थन नहीं करता, ताकि आपका अल्फ़ा चैनल गलती से कभी न खोए।
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">तेज़ प्रदर्शन</div>
                <p className="text-xs text-[var(--ink-2)]">
                  चूंकि सारी प्रोसेसिंग आपके डिवाइस पर स्थानीय रूप से होती है, इसलिए आपको फ़ाइलों के सर्वर पर अपलोड और डाउनलोड होने का इंतज़ार नहीं करना पड़ता। आप फ़ोटो तेज़ी से कंप्रेस कर सकते हैं — कंप्यूटर या मोबाइल पर, प्रति इमेज 20 MB तक की बड़ी फ़ाइलें भी।
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>CompressMyPic किसके लिए है?</span>
            </h2>
            <p>
              CompressMyPic हर उस व्यक्ति के लिए है जिसे छोटी इमेज चाहिए: ब्लॉगर और वेबसाइट मालिक जो वेब के लिए इमेज ऑप्टिमाइज़ करना और अपने पेज की इमेज का साइज़ छोटा करना चाहते हैं; फ़ोटोग्राफ़र जिन्हें शेयर करने या प्रूफ़ देने से पहले अपनी फ़ोटो का साइज़ छोटा करना होता है; ऑनलाइन विक्रेता जो अपनी वेबसाइट या किसी विज्ञापन के लिए फ़ोटो कंप्रेस करते हैं; छात्र और ऑफ़िस कर्मचारी जो ईमेल से अटैच करने के लिए इमेज कंप्रेस करते हैं; और कोई भी व्यक्ति जो WhatsApp, Instagram या Facebook के लिए इमेज कंप्रेस करना चाहता है ताकि वह तेज़ी से भेजी जाए और कम मोबाइल डेटा खर्च हो।
            </p>
            <p>
              यह कंप्यूटर और मोबाइल ब्राउज़र पर काम करता है, इसे इंस्टॉल करने की ज़रूरत नहीं है और यह कभी आपसे रजिस्टर करने को नहीं कहता: बस साइट खोलें, अपनी इमेज अपलोड करें और छोटी फ़ाइलें डाउनलोड करें।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>निर्माता: Bilal</span>
            </h2>
            <p>
              CompressMyPic को Bilal ने बनाया है, जो एक स्वतंत्र निर्माता हैं और वेब के लिए मुफ़्त, गोपनीयता का सम्मान करने वाले टूल बनाते हैं। उन्होंने CompressMyPic तब शुरू किया जब वे उन इमेज कंप्रेसर से निराश हो गए जो लोगों को सिर्फ़ एक फ़ाइल छोटी करने के लिए अपनी निजी फ़ोटो किसी अजनबी के सर्वर पर अपलोड करने पर मजबूर करते थे। उनका जवाब एक ऐसा टूल था जो सारा काम विज़िटर के अपने ब्राउज़र के अंदर करता है: बिना अपलोड, बिना अकाउंट, बिना वॉटरमार्क और बिना अंत में कोई आश्चर्यजनक बिल।
            </p>
            <p>
              Bilal साइट के सभी 47 टूल खुद डिज़ाइन, निर्माण और रखरखाव करते हैं — कंप्रेसर और कन्वर्टर से लेकर फ़ेविकॉन जनरेटर तक। वे सपोर्ट संदेशों का जवाब खुद देते हैं, हर टिप्पणी पढ़ते हैं और टूल सभी के लिए मुफ़्त रखते हैं, चाहे कोई एक फ़ोटो कंप्रेस कर रहा हो या हज़ार। साइट के फ़ुटर में Shaheen के लिए एक छोटा सा आभार है, जिनके प्रोत्साहन ने Bilal को बनाते रहने और टूल को सच में उपयोगी बनाने की प्रेरणा दी — सिर्फ़ लोकप्रिय नहीं।
            </p>
            <p>
              यदि आप उनका काम देखना चाहते हैं, तो प्रोजेक्ट को 
              <a
                href="https://github.com/bilalayyah/compressmypic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                GitHub
              </a>
              {' '}पर पा सकते हैं, Bilal की गाइड 
              <a
                href="https://dev.to/bilalayyah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                Dev.to
              </a>
              {' '}पर पढ़ सकते हैं, या 
              <button
                type="button"
                onClick={() => onNavigate('/hi/sampark-kare')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                संपर्क पेज
              </button>
              {' '}से नमस्ते कह सकते हैं।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>गोपनीयता और सुरक्षा</span>
            </h2>
            <p>
              CompressMyPic में हम मानते हैं कि गोपनीयता एक मौलिक अधिकार है, कोई वैकल्पिक सुविधा नहीं। आज कई वेबसाइटें डिफ़ॉल्ट रूप से डेटा इकट्ठा करती हैं, यहां तक कि एक इमेज कंप्रेशन टूल भी। हम गोपनीयता-प्रथम दृष्टिकोण अपनाते हैं और आपकी फ़ाइलों को आपके कंप्यूटर पर स्थानीय रूप से प्रोसेस करने के लिए आधुनिक ब्राउज़र तकनीक का इस्तेमाल करते हैं।
            </p>
            <p>
              आपकी फ़ाइलें आपके ब्राउज़र की मेमोरी में रहती हैं और टैब बंद करते ही या पेज रिफ़्रेश करते ही तुरंत मिट जाती हैं। चूंकि कोई भी इमेज प्रोसेसिंग दूरस्थ सर्वर पर नहीं होती, इसलिए हम चाहें तो भी आपकी इमेज का डेटा इकट्ठा नहीं कर सकते। यही टूल का डिज़ाइन और वादा है।
            </p>
            <p>
              यह जानने के लिए कि हम आपकी गोपनीयता से कैसे निपटते हैं, हमारी{' '}
              <button
                type="button"
                onClick={() => onNavigate('/hi/privacy-policy')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                गोपनीयता नीति
              </button>
              {' '}देखें।
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>हमारा मिशन</span>
            </h2>
            <p>
              हम मानते हैं कि सबसे अच्छे टूल सबसे सरल, सबसे तेज़ और सबसे पारदर्शी होते हैं। हमारा मिशन सभी को एक तेज़, भरोसेमंद और पूरी तरह मुफ़्त इमेज कंप्रेसर देना है — बिना छिपी चालबाज़ी, बिना आपको ट्रैक करने वाले विज्ञापन, बिना सर्वर अपलोड और बिना आपकी गोपनीयता से समझौता किए। चाहे आप एक JPG कंप्रेस कर रहे हों या WebP इमेज का पूरा बैच, टूल को बस काम करना चाहिए।
            </p>
            <p>
              क्या आपके पास कोई सवाल, कोई आइडिया है, या आपको कुछ ऐसा मिला जिसे हम बेहतर कर सकते हैं? हमें आपसे सुनकर खुशी होगी। आप साइट के ज़रिए सीधे हमें लिख सकते हैं।
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/hi/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              इमेज कंप्रेस करना शुरू करें
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/hi/sampark-kare')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              हमसे संपर्क करें
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
