// Hindi body + FAQs for article 'round-image-corners-guide' (hi).
// Written directly in Hindi (Romanized Hinglish) for the CompressMyPic Hindi locale.
// Mirrors the Spanish article structure for the same id (same h2 sections, order and ids).
import type { BlogArticleFaq } from '../../../types/blog';

export const BODY: string = `
<p>Photo ke kone gol karne se wo naram aur modern lagti hai. Square photo sakht lagti hai, gol kone wali photo dostana lagti hai.</p>
<p>Avatar, card aur social media post — har jagah gol kone use hote hain. Ye chhota sa badlav photo ko bilkul badal deta hai.</p>
<p>Is guide me samjhenge ke kone gol kaise karte hain, radius kya hai, aur kab gol kone use karein aur kab nahi.</p>
<h2 id="what-rounding-does">Kone Gol Karna Asal Me Kya Karta Hai</h2>
<p>Kone gol karne ka matlab hai photo ke chaaro kone ko gol karna. Kone ka hissa hat jata hai aur photo ke kone naram ho jate hain.</p>
<p>Gol kone photo ko modern aur dostana banate hain. Square kone sakht aur purane lagte hain.</p>
<p>Kone gol karne se photo ka size nahi badalta, sirf shape badalti hai. Photo ka beech wala hissa waisa hi rehta hai.</p>
<h2 id="radius-explained">Radius Kya Hai Aur Kaise Kaam Karta Hai</h2>
<p>Radius batata hai ke kone kitne gol honge. Chhota radius matlab halka gol, bada radius matlab zyada gol.</p>
<p>Radius ko slider se set kiya jata hai. Slider badhate hi kone zyada gol hone lagte hain.</p>
<p>Radius badalte waqt preview par nazar rakhein — kone itne gol hon ke photo modern lage, lekin itne zyada bhi nahi ke photo ka asal hissa hi chhota nazar aane lage.</p>
<h2 id="per-corner-control">Har Kone Ko Alag Se Control Karna</h2>
<p>Har kone ko alag se gol kiya ja sakta hai. Upar wale kone gol, neeche wale square — aisa bhi ho sakta hai.</p>
<p>Per-corner control se design zyada dilchasp banta hai. Har kone ka radius alag set kiya ja sakta hai.</p>
<p>Har kone alag se set karte waqt ek ek karke aage badhein — pehle ek kone ko theek karein, preview me dekhein, phir agle kone ki taraf jayein, taake chaaron kone barabar lagein.</p>
<h2 id="full-circle-pill">Full Circle Aur Pill Shape</h2>
<p>Full circle me photo poori gol ho jati hai. Ye avatar aur profile photo ke liye behtareen hai.</p>
<p>Pill shape me photo lambi aur gol hoti hai, jaise capsule. Ye banner aur button ke liye behtareen hai.</p>
<p>Full circle aur pill shape ke liye radius ko maximum par set karein. Photo turant gol ho jayegi.</p>
<h2 id="transparent-vs-solid-fill">Transparent Fill Ya Solid Fill</h2>
<p>Transparent fill me kone ka hissa gayab ho jata hai aur peeche ka background dikhta hai. Ye PNG aur WebP me hota hai.</p>
<p>Solid fill me kone ka hissa ek rang se bhar jata hai, jaise safed. Ye JPG me hota hai, kyunki JPG me transparency nahi hoti.</p>
<p>Fill ka faisla photo ke istemal par depend karta hai — website par transparent fill behtar rehta hai, jab ke print ke liye solid rang hi sahi chalta hai.</p>
<h2 id="formats-png-webp-jpg">Format: PNG, WebP Ya JPG</h2>
<p>PNG me transparency hoti hai, isliye gol kone ke liye behtareen hai. Kone ka hissa gayab ho jata hai.</p>
<p>WebP me bhi transparency hoti hai aur file chhoti hoti hai. Web ke liye WebP behtareen hai.</p>
<p>JPG transparency ko support nahi karta, isliye usme kone khali nahi rehte — kone ke liye wahi rang chunein jo photo ke background se milta julta ho.</p>
<h2 id="rounding-for-avatars">Avatar Ke Liye Kone Gol Karna</h2>
<p>Avatar ke liye full circle behtareen hai. Photo poori gol ho jati hai aur profile par achi lagti hai.</p>
<p>Avatar banate waqt chehre ko center me rakhein, taake gol karne par chehra kat na jaye.</p>
<p>Avatar ke liye photo ko pehle square crop karein, phir kone gol karein. Is se avatar sahi banta hai.</p>
<h2 id="rounding-for-cards">Card Aur UI Ke Liye Kone Gol Karna</h2>
<p>Card me halka radius behtareen hai. Kone halke gol hon to card modern aur saaf lagta hai.</p>
<p>Card ke liye radius ko zyada bada na rakhein. Halka radius kaafi hota hai.</p>
<p>Card design me photo aur text wale hisse ke kone ek jaise rakhein — jab dono ki golai barabar hoti hai to poora card ek saaf aur professional look deta hai.</p>
<h2 id="smooth-edges">Kone Smooth Kaise Banayein</h2>
<p>Kone smooth karne ke liye radius ko dheere set karein. Zyada radius se kone kharab ho sakte hain.</p>
<p>Smooth kone ke liye photo ko poori size me kholkar dekhein. Kone saaf aur naram dikhne chahiye.</p>
<p>Kone smooth na hon to radius ko thoda kam karke dobara try karein.</p>
<h2 id="rounding-and-print">Print Ke Liye Kone Gol Karna</h2>
<p>Print ke liye kone gol karna thoda alag hai, kyunki print me kone kat sakte hain. Print se pehle radius ko check kar lein.</p>
<p>Print ke liye radius ko halka rakhein, taake print me kone saaf dikhein.</p>
<p>Print shop ko file bhejne se pehle kone ko poori size me kholkar check karein ke sab kuch sahi hai.</p>
<h2 id="rounding-vs-cropping">Kone Gol Karna Ya Crop Karna</h2>
<p>Kone gol karna shape badalta hai, crop hissa hatata hai. Dono ka kaam alag hai.</p>
<p>Agar photo ka hissa hatana ho to crop karein, agar sirf kone gol karne hon to rounding karein.</p>
<p>Dono ko ek saath bhi use kiya ja sakta hai. Pehle crop karein, phir kone gol karein.</p>
<h2 id="rounding-and-borders">Kone Gol Karna Aur Border Milana</h2>
<p>Kone gol karne ke saath border bhi lagaya ja sakta hai. Border aur kone dono ka radius ek jaisa hona chahiye.</p>
<p>Dono ko milakar use karne se photo zyada sajti hai, par dhyaan rakhein ke photo dhak na jaye.</p>
<p>Border aur radius ko ek saath set karein, taake design saaf lage.</p>
<h2 id="rounding-on-mobile">Phone Ya Tablet Par Kone Gol Karna</h2>
<p>Ye tool phone ke browser me bhi poori tarah chalta hai — photo upload karein, apni pasand ka radius chunein aur tayyar file seedha download kar lein.</p>
<p>Mobile par ek do photos ke kone aasani se gol ho jate hain. Bade kaam ke liye desktop behtar hai.</p>
<p>Phone par kone gol karte waqt photo ko zoom karke gaur se dekhein — chhoti screen par golai ka sahi andaza lagana mushkil hota hai, isliye kareeb se check karna behtar hai.</p>
<h2 id="privacy-local-processing">Privacy: Aapki Photos Aapke Device Par Rehti Hain</h2>
<p>Tool aapke browser me chalta hai, isliye aapki photos server par upload nahi hoti. Kone gol karna aapke device par hi hota hai.</p>
<p>Iska matlab hai ke personal photos ke kone bhi bina kisi risk ke gol kiye ja sakte hain. Koi bhi aapki photo ko dekh nahi sakta.</p>
<p>Kone gol karne ke baad browser ko band kar dein, taake aapki photo ka koi trace na bache.</p>
<h2 id="common-rounding-mistakes">Kone Gol Karte Waqt Aam Galtiyaan</h2>
<p>Sabse badi galti hai radius ko bahut bada rakhna. Bada radius photo ko chhota bana deta hai aur dekhne me kharab lagta hai.</p>
<p>Doosri galti hai JPG me transparent kone ki ummeed karna. JPG me transparency nahi hoti, isliye kone ko rang se bharna padta hai.</p>
<p>Teesri galti hai avatar me chehre ko kat dena. Chehre ko center me rakhein, taake gol karne par chehra na kate.</p>
<h2 id="rounding-workflow">Kone Gol Karne Ka Workflow</h2>
<p>Acha workflow ye hai: pehle photo ko square crop karein, phir radius set karein, phir format chunein aur end me preview dekhein.</p>
<p>Is order se kaam karne par dobara kaam nahi karna padta aur har photo sahi banti hai.</p>
<p>Kone gol karne ka workflow ek baar likh lein aur har baar wahi follow karein. Aadat ban jane par kaam tez ho jata hai.</p>
<h2 id="rounding-for-stickers">Sticker Ke Liye Kone Gol Karna</h2>
<p>Sticker ke liye kone gol karna zaroori hai, kyunki sticker gol ya naram kone wala hota hai.</p>
<p>Sticker ke liye radius ko bada rakhein, taake kone kaafi gol hon.</p>
<p>Sticker ke liye PNG format use karein, taake transparency bachi rahe aur sticker kahi bhi lagaya ja sake.</p>
<p>Gol kone photo ko naram banate hain — radius sahi rakhein, format sahi chunein. Abhi try karne ke liye <a href="/hi/image-ke-kone-gol-kare">Image Kone Gol tool</a> kholein, steps ke liye <a href="/hi/blog/image-ke-kone-gol-kaise-kare">Image ke kone gol kaise kare</a> padhein, aur tulna ke liye <a href="/hi/blog/rounded-corners-vs-circle-crop">Rounded corners vs circle crop</a> dekhein.</p>
`;

export const FAQS: BlogArticleFaq[] = [{"question":"Photo ke kone gol kaise karoon?","answer":"Tool kholein, photo upload karein, radius slider se kone gol karein, format chunein aur download kar lein. Koi software install nahi karna, koi account nahi banana."},{"question":"Radius kya hota hai?","answer":"Radius batata hai ke kone kitne gol honge. Chhota radius matlab halka gol, bada radius matlab zyada gol. Avatar ke liye bada radius, card ke liye halka radius behtareen hai."},{"question":"Gol kone ke liye kaunsa format behtar hai?","answer":"PNG ya WebP, kyunki inme transparency hoti hai aur kone ka hissa gayab ho jata hai. JPG me transparency nahi hoti, isliye kone ko rang se bharna padta hai."},{"question":"Avatar ke liye kone kaise gol karoon?","answer":"Photo ko pehle square crop karein, phir radius ko maximum par set karein taake photo poori gol ho jaye. Chehre ko center me rakhein, taake gol karne par chehra kat na jaye."},{"question":"Kya main apne phone par photo ke kone gol kar sakta hoon?","answer":"Haan. Tool mobile browser par bhi chalta hai. Photo upload karein, radius set karein aur download kar lein. Koi app install karne ki zaroorat nahi hai."},{"question":"Kone gol karne se photo ki quality kam hoti hai?","answer":"Nahi. Kone gol karne se sirf shape badalti hai, pixels nahi badalte. Bacha hua hissa bilkul waisa hi rehta hai. Quality sirf tab kam hoti hai jab photo ko bada karke save kiya jaye."}];
