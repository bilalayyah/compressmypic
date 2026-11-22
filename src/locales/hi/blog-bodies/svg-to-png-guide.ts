// Hindi body + FAQs for article 'svg-to-png-guide' (hi).
// Written directly in Hindi (Romanized Hinglish) for the CompressMyPic Hindi locale.
// Mirrors the Spanish article structure for the same id (same h2 sections, order and ids).
import type { BlogArticleFaq } from '../../../types/blog';

export const BODY: string = `
<p>SVG vector format hai — ise kitna bhi bada karein, quality wahi rehti hai. Par har jagah SVG nahi chalta. Social media, Office, print aur kai app sirf PNG maangte hain.</p>
<p>SVG ko PNG me convert karne ka matlab hai vector ko raster banana, matlab pixels me badalna. Sahi scale chunna sabse zaroori hai, kyunki ek baar PNG ban gaya to use bada karne par quality kharab hogi.</p>
<p>Is guide me scale, transparency, font aur gradient — har cheez samjhenge, taake aapka PNG har size me sharp dikhe.</p>
<h2 id="what-is-svg">SVG File Kya Hoti Hai?</h2>
<p>SVG ek vector format hai, matlab image lines aur shapes se banti hai, pixels se nahi. Isliye SVG ko kitna bhi bada ya chhota karein, quality bilkul waisi hi rehti hai.</p>
<p>Logo aur icon ke liye SVG behtareen hai, kyunki ek hi file har size par kaam karti hai — favicon se lekar billboard tak.</p>
<p>SVG file text ki tarah hoti hai, isliye use code me bhi edit kiya ja sakta hai. Designer SVG me rang aur shape ko asani se badal sakte hain.</p>
<h2 id="what-is-rasterizing">Rasterize Karna Kya Hota Hai?</h2>
<p>Rasterize karne ka matlab hai vector shapes ko pixels me badalna. Jab SVG PNG banta hai, to har shape pixels ki grid me badal jata hai.</p>
<p>Is step me scale tay hota hai. Jo scale aap chunenge, usi size ka PNG banega, aur baad me use bada karne par quality kharab hogi.</p>
<p>Rasterize karna ek baar ka kaam hai. Isliye scale soch kar chunein, taake PNG har jagah kaam aaye.</p>
<h2 id="choosing-scale">Sahi Scale Chunna</h2>
<p>Scale wahi chunein jo aapko chahiye. Social media profile ke liye 512px, print ke liye 2000px ya zyada, aur favicon ke liye 32px ya 64px kaafi hota hai.</p>
<p>Hamesha zaroorat se thoda bada PNG banayein. Bade PNG ko chhota karna asaan hai, par chhote ko bada karne par quality kharab hoti hai.</p>
<p>Scale chunne se pehle tay kar lein ke PNG kahan lagega — website, app aur print, har jagah ka size alag hota hai, is liye ek hi scale har jagah kaam nahi karta.</p>
<h2 id="transparency-preserved">Transparency Barkarar Rehti Hai</h2>
<p>SVG ki transparency PNG me poori tarah bach jati hai. Logo ka transparent background convert ke baad bhi transparent hi rehta hai.</p>
<p>Convert ke baad logo ko rangeen background par rakh kar check kar lein, taake yakeen ho jaye ke transparency sahi hai.</p>
<p>Transparency bachne ki wajah se logo ko kisi bhi design me use kiya ja sakta hai, bina safed box ki dikkat ke.</p>
<h2 id="fonts-and-text">SVG Ke Andar Font Aur Text</h2>
<p>SVG me text aksar font par depend karta hai. Agar font system par na ho to text galat dikh sakta hai ya default font me badal sakta hai.</p>
<p>Convert karne se pehle text ko outlines me badal lein, ya font ko SVG ke saath embed kar dein. Is se text har jagah waisa hi dikhega.</p>
<p>Logo me text ho to use outlines me badalna sabse safe hai. Is se font ki problem khatm ho jati hai aur logo har jagah ek jaisa dikhta hai.</p>
<h2 id="linked-images">Linked Photo Aur External Files</h2>
<p>Kuch SVG files me bahar ki photo ya file link hoti hai. Aisi file convert karte waqt linked photo gayab ho sakti hai.</p>
<p>Convert karne se pehle SVG ko kholkar check karein ke saare parts andar hain ya bahar se linked hain. Linked parts ko pehle embed kar lein.</p>
<p>Linked photo ko embed karne se file badi ho jati hai, par convert ki hui PNG me photo sahi dikhti hai. Ye tradeoff lena zaroori hai.</p>
<h2 id="gradients-and-opacity">Gradient, Opacity Aur Effects</h2>
<p>Gradient aur opacity SVG me aam hain, aur PNG me ye bilkul waisi hi dikhte hain. Convert karte waqt inme koi nuksan nahi hota.</p>
<p>Blur aur shadow jaise effects bhi PNG me sahi dikhte hain, bas scale bada rakhna zaroori hai, taake effect smooth lage.</p>
<p>Effects wale SVG ko convert karte waqt scale bada rakhein. Chhote scale par effects rough dikhte hain, bade scale par smooth dikhte hain.</p>
<h2 id="batch-converting-icons">Icon Ka Pack Batch Me Convert Karna</h2>
<p>Icon ka pack convert karte waqt saare icon ek hi scale par convert karein. Is se poora pack ek jaisa dikhega.</p>
<p>Har icon ka naam wahi rakhein, sirf extension badlein. Is se app ya website ka code update karna asaan ho jata hai.</p>
<p>Poora icon pack convert karne se pehle ek icon par try kar lein — agar us ki scale aur quality pasand aaye to phir poora pack ek saath convert karein, taake kaam dobara na karna pade.</p>
<h2 id="when-to-use-png-instead">PNG Kab Use Karein, SVG Ke Bajay</h2>
<p>PNG tab use karein jab platform SVG support na karta ho — social media, Office, print shop aur kai app sirf PNG maangte hain.</p>
<p>Jab image ko photo ke saath milana ho ya kisi raster workflow me use karna ho, tab bhi PNG sahi hai.</p>
<p>Client ko file bhejte waqt PNG dein, kyunki client ke software ka pata nahi hota. PNG har jagah khulta hai, isliye client ko koi dikkat nahi hogi.</p>
<h2 id="colour-accuracy">Kya Conversion Rang Badal Deti Hai?</h2>
<p>Aam taur par nahi. SVG ke rang PNG me wahi rehte hain, kyunki conversion me colour value nahi badalti.</p>
<p>Brand logo ke liye convert ke baad rang check kar lein, khaas taur par jab gradient ya transparency involve ho.</p>
<p>Rang check karne ke liye convert ki hui file ko alag alag screen par dekhein. Har screen ke rang alag hote hain, isliye ek screen par check karna kaafi nahi hai.</p>
<h2 id="file-sizes">Conversion Ke Baad File Size</h2>
<p>PNG file SVG se badi hoti hai, khaas taur par bade scale par. 2000px ka PNG 24px ke icon se kai guna bada hoga.</p>
<p>Sirf utna bada PNG banayein jitna chahiye. Zaroorat se bada scale file ko bina wajah bhaari kar deta hai.</p>
<p>File size ko kam karne ke liye PNG ko convert ke baad compress bhi kiya ja sakta hai. Pehle scale sahi rakhein, phir compress karein.</p>
<h2 id="common-problems">Aam Problems Aur Unka Hal</h2>
<p>Text galat dikhe to font ki problem hai — text ko outlines me badal kar dobara convert karein.</p>
<p>Convert ke baad photo gayab dikhe to samjhein ke linked file ka masla hai — photo ko SVG ke andar embed karke dobara convert karein to photo wapas aa jayegi.</p>
<p>PNG dhundhla dikhe to scale ki problem hai — bada scale chun kar dobara convert karein. Chhote PNG ko bada karne se quality wapas nahi aati.</p>
<h2 id="svg-logos-social-media">Social Media Ke Liye SVG Logo</h2>
<p>Social media profile ke liye 512px ya 1024px ka PNG banayein. Itna size har platform par sharp dikhta hai.</p>
<p>Har platform ka size alag hota hai, isliye ek hi SVG se har platform ke hisab se alag PNG banayein.</p>
<p>Social media par logo ko upload karne se pehle use platform par kholkar check karein ke wo sahi dikh raha hai.</p>
<h2 id="svg-icons-apps">App Ke Liye SVG Icon</h2>
<p>App icon ke liye alag alag size chahiye hote hain. Ek SVG se 16px se 1024px tak ke saare size banaye ja sakte hain.</p>
<p>Har size ko alag file me save karein aur naam me size likh dein, taake files asani se pehchani jayein.</p>
<p>App store listing ke liye platform ki requirement check karein. Zyada tar store icon ke liye PNG maangte hain.</p>
<h2 id="svg-for-print-materials">Print Material Ke Liye SVG</h2>
<p>Print ke liye bada PNG banayein — kam se kam 300 DPI ke hisab se. A4 size ke liye 2480px chauda PNG kaafi hota hai.</p>
<p>Print shop ko file bhejne se pehle PNG ko poori size me kholkar check karein ke text aur lines saaf hain.</p>
<p>Print shop se pooch lein ke unhe kaunsa size aur format chahiye, phir usi hisab se SVG ko PNG me convert karein.</p>
<h2 id="svg-for-email-signatures">Email Signature Ke Liye SVG</h2>
<p>Email signature me logo PNG me hona chahiye, kyunki har email client PNG dikhata hai aur SVG kuch me nahi khulta.</p>
<p>Signature logo chhota rakhein — 200px chauda kaafi hota hai — taake email jaldi load ho.</p>
<p>Email signature me logo ke saath naam aur website bhi likhein, taake receiver ko aapki pehchan mil jaye.</p>
<h2 id="svg-for-favicons">Favicon Ke Liye SVG</h2>
<p>Favicon ke liye 32px ya 64px ka PNG banayein. Modern browser SVG favicon bhi support karte hain, par PNG har jagah chalta hai.</p>
<p>Favicon banate waqt detail kam rakhein, kyunki chhote size par zyada detail dikhti hi nahi.</p>
<p>Favicon banane ke baad use browser ke tab me khol kar dekh lein — chhote size par bhi logo pehchana ja raha ho to favicon tayyar hai.</p>
<p>SVG se PNG banana scale ka khel hai — bada banayein, phir chhota karein. Convert karne ke liye <a href="/hi/svg-to-png">SVG to PNG tool</a> kholein, steps ke liye <a href="/hi/blog/svg-to-png-kaise-kare">SVG to PNG kaise kare</a> padhein, aur tulna ke liye <a href="/hi/blog/svg-vs-png-vector-raster">SVG vs PNG</a> dekhein.</p>
`;

export const FAQS: BlogArticleFaq[] = [{"question":"24px ke icon ko sharp PNG banane ke liye kaunsa scale chunna chahiye?","answer":"Icon ko kam se kam 4x scale par convert karein, matlab 24px ke icon ke liye 96px ya 128px ka PNG banayein. Bada PNG chhota karne par sharp rehta hai, aur retina screen par bhi saaf dikhta hai."},{"question":"Kya SVG ko PNG me convert karne se transparent background bachta hai?","answer":"Haan, bilkul. SVG ki transparency PNG me poori tarah bach jati hai. Convert ke baad logo ko kisi rangeen background par rakh kar check kar lein."},{"question":"Meri convert ki hui PNG me linked photo kyun gayab hai?","answer":"Kyunki SVG me photo bahar se linked thi, file ke andar nahi. Convert karne se pehle photo ko SVG me embed kar lein, phir convert karein to photo dikhegi."},{"question":"Kya SVG ke andar web font use karke PNG export kiya ja sakta hai?","answer":"Haan, agar font available ho. Behtar ye hai ke convert karne se pehle text ko outlines me badal lein, taake font ki zaroorat hi na pade aur text har jagah waisa hi dikhe."},{"question":"SVG se kitna bada PNG banaya ja sakta hai?","answer":"Koi asli limit nahi, par bahut bada scale file ko bhaari kar deta hai. Print ke liye 2000 se 4000px kaafi hota hai. Zaroorat se bada PNG banane ka koi fayda nahi."},{"question":"Kya result wala PNG lossless hota hai?","answer":"Haan. PNG lossless format hai, isliye convert ke baad har pixel wahi rehta hai jo rasterize karte waqt bana tha. Quality ka nuksan sirf tab hota hai jab PNG ko baad me bada kiya jaye."}];
