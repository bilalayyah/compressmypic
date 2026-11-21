// Hindi body + FAQs for article 'image-orientation-exif-rotation' (hi).
// Written directly in Hindi (Romanized Hinglish) for the CompressMyPic Hindi locale.
// Mirrors the Spanish article structure for the same id (same h2 sections, order and ids).
import type { BlogArticleFaq } from '../../../types/blog';

export const BODY: string = `
<p>Aapne photo li, phone par wo bilkul sahi dikhi, par website par upload ki to tedhi ho gayi. Photo kharab nahi hai — problem EXIF orientation ki hai.</p>
<p>Phone photo ko rotate nahi karta, sirf ek chhota sa note save karta hai ke photo kis direction me hai. Kuch software wo note padhte hain, kuch nahi — aur yahi farq photo ko tedha dikhata hai.</p>
<p>Is article me EXIF orientation ko seedhi bhasha me samjhenge, aur photo ko hamesha ke liye theek karne ka tareeka bhi seekhenge.</p>
<h2 id="what-is-exif-orientation">EXIF Orientation Kya Hai?</h2>
<p>EXIF orientation photo ke andar save ek number hai, jo batata hai ke photo kis direction me li gayi thi. Phone photo ko rotate karne ke bajay ye number save karta hai.</p>
<p>Ye number 1 se 8 tak hota hai. Har number ka matlab alag hai — seedha, 90 degree, 180 degree, ya mirror.</p>
<p>Ye number photo ki file ke andar chhupa hota hai. Aapko ye number dikhta nahi, par software use padh kar photo ko sahi direction me dikhata hai.</p>
<h2 id="the-eight-orientation-values">Orientation Ke Aath Values, Seedhi Bhasha Me</h2>
<p>Aath values me se aam taur par sirf chaar use hoti hain: seedha, 90 degree clockwise, 90 degree anticlockwise aur 180 degree. Baaki chaar mirror ke saath hoti hain.</p>
<p>Aapko in values ko yaad karne ki zaroorat nahi hai. Bas ye samajh lein ke photo ka direction ek number me save hota hai, pixels me nahi.</p>
<p>Har value ka matlab hai ke photo ko kitna ghumana hai. Software ye number padh kar photo ko sahi direction me dikhata hai.</p>
<h2 id="why-phones-store-orientation-this-way">Phone Pixels Rotate Karne Ke Bajay Orientation Kyun Save Karta Hai</h2>
<p>Phone aisa isliye karta hai kyunki ye tez hota hai. Pixels ko rotate karne me time aur battery lagti hai, jabke ek number save karna turant hota hai.</p>
<p>Phone ki gallery ye number padh leti hai, isliye photo phone par sahi dikhti hai. Problem tab hoti hai jab dusra software ye number nahi padhta.</p>
<p>Phone ke liye ye tareeka samajhdari hai, kyunki photo lete waqt speed zaroori hoti hai. Par dusre software ke liye ye problem ban jata hai.</p>
<h2 id="where-orientation-breaks">Orientation Asal Me Kahan Tootta Hai</h2>
<p>Orientation website, email, purane software aur kuch app par tootta hai. Ye system EXIF data ko ignore kar dete hain, isliye photo tedhi dikhti hai.</p>
<p>Social media aur messaging app aam taur par orientation theek kar lete hain, par har app aisa nahi karti.</p>
<p>Print shop aur kiosk par bhi orientation toot sakta hai, isliye print se pehle photo ko rotate karke save karna zaroori hai.</p>
<h2 id="detecting-an-orientation-problem">Kaise Pata Karein Ke Orientation Hi Problem Hai</h2>
<p>Agar photo phone par sahi aur computer ya website par tedhi dikhe to orientation hi problem hai. Photo kharab nahi hai, sirf direction ka note ignore ho raha hai.</p>
<p>Photo ko alag alag jagah kholkar dekhein. Jahan sahi dikhe, wahan software note padh raha hai; jahan tedhi dikhe, wahan nahi padh raha.</p>
<p>Photo ko computer par kholkar dekhein. Agar computer par tedhi dikhe to orientation ki problem pakki hai, photo kharab nahi hai.</p>
<h2 id="fixing-orientation-permanently">Orientation Ko Hamesha Ke Liye Kaise Theek Karein</h2>
<p>Hal hai photo ko asal me rotate karke save karna. Rotate tool se photo ko seedha karein aur naye naam se save kar lein.</p>
<p>Aisa karne par photo ke pixels asal me ghum jate hain aur orientation number reset ho jata hai. Phir photo har jagah sahi dikhegi.</p>
<p>Fix karne ke baad photo ko computer aur website par kholkar check karein. Har jagah sahi dikhe to fix poora hai.</p>
<h2 id="orientation-vs-rotation">Orientation Metadata Vs Asal Rotation</h2>
<p>Orientation metadata sirf ek note hai, jabke asal rotation pixels ko ghumana hai. Note ko ignore kiya ja sakta hai, pixels ko nahi.</p>
<p>Isi liye permanent fix ke liye asal rotation zaroori hai. Note par bharosa karna risky hai.</p>
<p>Note aur pixels ka farq samajhna zaroori hai. Note badal sakta hai, pixels nahi badalte — isliye pixels ko theek karna hi sahi hal hai.</p>
<h2 id="selfies-and-mirroring">Selfie, Mirror Aur Orientation Values</h2>
<p>Front camera se li hui selfie me mirror value bhi hoti hai. Phone selfie ko mirror karke dikhata hai, aur ye bhi orientation number me save hota hai.</p>
<p>Selfie ko theek karne ke liye horizontal flip use karein, taake text seedha dikhe aur chehra sahi lage.</p>
<p>Selfie me text ulta dikhe to mirror ki problem hai. Horizontal flip se text seedha ho jata hai aur chehra bhi sahi dikhta hai.</p>
<h2 id="exif-and-privacy">EXIF Orientation Aur Privacy</h2>
<p>EXIF data me location bhi hoti hai, jo privacy ka risk hai. Photo share karne se pehle location data hatana behtar hai.</p>
<p>Orientation number se location ka pata nahi chalta, par GPS data se chalta hai. Isliye share karne se pehle metadata check kar lein.</p>
<p>Photo share karne se pehle metadata remove karna acha hota hai. Is se location aur camera ki detail private rehti hai.</p>
<h2 id="orientation-in-different-formats">JPG, PNG Aur WebP Me Orientation</h2>
<p>JPG me orientation sabse zyada use hoti hai, kyunki phone JPG me save karte hain. PNG aur WebP me bhi orientation hoti hai, par kam use hoti hai.</p>
<p>Format convert karte waqt orientation kho sakti hai. Isliye convert ke baad photo ko check kar lein ke wo seedhi hai ya tedhi.</p>
<p>Har format me orientation ka tareeka alag hota hai. JPG me ye sabse aam hai, isliye JPG photos me ye problem zyada dikhti hai.</p>
<h2 id="orientation-after-conversion">Format Convert Karne Ke Baad Orientation Problems</h2>
<p>Format convert karte waqt kuch tools orientation ko ignore kar dete hain, isliye convert ki hui photo tedhi nikal sakti hai.</p>
<p>Hal ye hai ke pehle photo ko rotate karke seedha karein, phir format convert karein. Is order se orientation ki problem nahi aati.</p>
<p>Convert ke baad photo ko kholkar check karein. Agar tedhi nikle to use rotate karke dobara save kar lein.</p>
<h2 id="orientation-and-social-media">Social Media Aur Messaging App Me Orientation</h2>
<p>Social media app aam taur par orientation theek kar lete hain, isliye photo sahi dikhti hai. Par kuch app aisa nahi karti.</p>
<p>Agar social media par photo tedhi dikhe to use pehle rotate karke save karein, phir upload karein.</p>
<p>Messaging app me photo bhejne se pehle use kholkar check karein. Tedhi photo bhejne se behtar hai pehle use theek kar lein.</p>
<h2 id="common-myths">Image Orientation Ke Baare Me Aam Myths</h2>
<p>Myth hai ke tedhi photo kharab ya corrupt hoti hai. Asliyat me photo bilkul theek hoti hai, sirf direction ka note ignore ho raha hota hai.</p>
<p>Doosra myth hai ke orientation ko theek karna mushkil hai. Asliyat me ye do minute ka kaam hai — rotate karein aur save karein.</p>
<p>Teesra myth hai ke orientation sirf phone ki problem hai. Asliyat me ye har device ki problem hai, kyunki har software note ko alag tareeke se padhta hai.</p>
<h2 id="orientation-in-print-services">Print Service Aur Kiosk Me Orientation</h2>
<p>Print service aur kiosk aksar orientation ignore kar dete hain, isliye print se pehle photo ko rotate karke save karna zaroori hai.</p>
<p>Print ke liye photo ko pehle computer par kholkar check karein ke wo seedhi hai, phir print ke liye bhejein.</p>
<p>Print shop par tedhi photo print hone se behtar hai pehle use theek kar lein. Galat print se paise aur time dono barbaad hote hain.</p>
<h2 id="orientation-and-backup-services">Orientation Aur Cloud Backup Services</h2>
<p>Cloud backup services photo ko waise hi save karte hain, orientation ke saath. Backup se wapas aane par photo waisi hi dikhti hai.</p>
<p>Par agar backup service photo ko compress ya convert kare to orientation kho sakti hai. Isliye important photos ko rotate karke save karein.</p>
<p>Backup se photo wapas lete waqt use kholkar check karein. Tedhi nikle to use rotate karke dobara save kar lein.</p>
<h2 id="orientation-in-old-software">Purane Software Aur System Me Orientation</h2>
<p>Purana software EXIF orientation ko nahi padhta, isliye photo us par tedhi dikhti hai. Ye software update nahi ho sakta, isliye photo ko theek karna hi hal hai.</p>
<p>Office aur school ke purane computer par photo share karni ho to pehle use rotate karke save karein.</p>
<p>Purane software par kaam karte waqt photo ko hamesha rotate karke save karein, taake har jagah sahi dikhe.</p>
<h2 id="orientation-testing-checklist">Photo Share Karne Se Pehle Quick Checklist</h2>
<p>Photo ko computer par kholkar dekhein — seedhi hai? Agar nahi to rotate karke save karein.</p>
<p>Location data hatana ho to metadata remove karein. Phir photo share karein, bina kisi dikkat ke.</p>
<p>Photo ko ek baar phone par bhi kholkar check karein. Dono jagah sahi dikhe to photo share karne ke liye tayyar hai.</p>
<p>EXIF ek note hai, pixels asal hain — photo ko rotate karke hamesha ke liye theek karein. Abhi fix karne ke liye <a href="/hi/image-rotate-flip-kare">Image Rotate Flip tool</a> kholein, steps ke liye <a href="/hi/blog/image-rotate-flip-kaise-kare">Image rotate flip kaise kare</a> padhein, aur poori guide <a href="/hi/blog/image-rotate-flip-kare-guide">Image rotate flip guide</a> me dekhein.</p>
`;

export const FAQS: BlogArticleFaq[] = [{"question":"EXIF orientation kya hai, seedhi bhasha me?","answer":"Ye photo ke andar save ek number hai, jo batata hai ke photo kis direction me li gayi thi. Phone photo ko rotate karne ke bajay ye number save karta hai. Jo software ye number padhta hai, use photo sahi dikhti hai; jo nahi padhta, use tedhi dikhti hai."},{"question":"Meri photo phone par sahi aur website par tedhi kyun dikhti hai?","answer":"Kyunki phone ki gallery EXIF orientation padh leti hai, par website nahi padhti. Hal hai photo ko asal me rotate karke save karna, taake pixels hi ghum jayein aur number ki zaroorat na pade."},{"question":"Kya tedhi photo kharab ya corrupt hoti hai?","answer":"Nahi, bilkul nahi. Photo bilkul theek hoti hai, sirf direction ka note ignore ho raha hota hai. Photo ko rotate karke save karne se wo har jagah sahi dikhne lagti hai."},{"question":"Galat orientation wali photo ko hamesha ke liye kaise theek karoon?","answer":"Rotate tool se photo ko seedha karein aur naye naam se save kar lein. Aisa karne par pixels asal me ghum jate hain aur orientation number reset ho jata hai. Phir photo har jagah sahi dikhegi."},{"question":"Kya HEIC ko JPG me convert karne se orientation problems hoti hain?","answer":"Ho sakti hain, kyunki kuch tools convert karte waqt orientation ko ignore kar dete hain. Hal ye hai ke pehle photo ko rotate karke seedha karein, phir format convert karein."},{"question":"Kya EXIF data se pata chal sakta hai ke photo kahan li gayi thi?","answer":"Haan, agar photo me GPS data ho to. Location data EXIF me save hota hai. Photo share karne se pehle metadata remove karna behtar hai, taake location private rahe."}];
