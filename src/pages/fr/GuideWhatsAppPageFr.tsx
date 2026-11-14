import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPageFrProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Ouvrez CompressMyPic',
    text: 'Rendez-vous sur compressmypic.online dans le navigateur de votre téléphone ou de votre ordinateur. Rien à installer, aucun compte à créer : l’outil s’ouvre immédiatement.',
  },
  {
    title: 'Envoyez votre photo',
    text: 'Touchez « Parcourir les fichiers » et choisissez la photo dans votre galerie, ou glissez-déposez la photo sur la page. Vous pouvez envoyer plusieurs photos à la fois. Chaque image peut peser jusqu’à 20 Mo.',
  },
  {
    title: 'Commencez par le préréglage Équilibré',
    text: 'Le préréglage Équilibré (environ 70 % de qualité) est un bon point de départ pour les photos WhatsApp. Il réduit beaucoup la taille du fichier et la photo reste nette sur l’écran d’un téléphone.',
  },
  {
    title: 'Vérifiez la taille en direct, avant et après',
    text: 'Chaque photo affiche sa taille d’origine et sa nouvelle taille compressée, l’une à côté de l’autre. Si le fichier reste plus grand que vous le souhaitez, baissez un peu le curseur de qualité et observez comment la taille se met à jour instantanément.',
  },
  {
    title: 'Conservez JPG pour les photos',
    text: 'Pour les photos normales, conservez le format de sortie JPG. C’est le format que WhatsApp gère le mieux et celui qui produit les fichiers les plus petits pour les photos. Utilisez PNG uniquement si votre image a besoin de transparence, comme un logo.',
  },
  {
    title: 'Comparez l’avant et l’après',
    text: 'Ouvrez la comparaison avant/après pour vérifier que la photo a toujours l’air bien. Zoomez sur les visages et le texte : si vous ne voyez aucune différence réelle, le réglage de qualité est le bon.',
  },
  {
    title: 'Téléchargez la photo plus petite',
    text: 'Touchez Télécharger sur la photo, ou utilisez « Tout télécharger (ZIP) » si vous avez compressé plusieurs photos à la fois. Le fichier plus petit est enregistré sur votre appareil ; votre photo d’origine n’est jamais modifiée.',
  },
  {
    title: 'Envoyez-la sur WhatsApp de la bonne façon',
    text: 'Si vous voulez la meilleure qualité possible, envoyez la photo compressée comme document : dans WhatsApp, touchez Joindre, puis Document, et choisissez le fichier. WhatsApp envoie les documents sans les toucher, donc votre photo arrive exactement comme vous l’avez compressée. Si vous l’envoyez comme photo, WhatsApp la compressera une deuxième fois.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Pourquoi WhatsApp réduit-il la qualité des photos ?',
    answer: 'Lorsque vous envoyez une photo de la façon habituelle, WhatsApp la recompresse pour économiser des données et de l’espace, et la réduit souvent à une taille et une qualité bien moindres. C’est pourquoi une photo nette d’appareil photo peut paraître douce ou floue après l’envoi.',
  },
  {
    id: 'wa-faq-2',
    question: 'WhatsApp compresse-t-il les images envoyées comme documents ?',
    answer: 'Non. Lorsque vous envoyez une image comme document (Joindre puis Document), WhatsApp envoie le fichier tel quel, sans aucune compression supplémentaire. C’est la meilleure façon de partager une photo en pleine qualité.',
  },
  {
    id: 'wa-faq-3',
    question: 'Quelle taille d’image maximale WhatsApp accepte-t-il ?',
    answer: 'WhatsApp autorise les documents jusqu’à 2 Go, donc une photo compressée de quelques centaines de Ko n’est jamais un problème. Les photos envoyées de la façon habituelle sont recompressées par WhatsApp lui-même, donc en pratique, ce qui compte, c’est la qualité, pas la taille.',
  },
  {
    id: 'wa-faq-4',
    question: 'Comment envoyer une photo en pleine qualité sur WhatsApp ?',
    answer: 'Compressez d’abord la photo vous-même avec CompressMyPic pour qu’elle ait une taille raisonnable, puis envoyez-la sur WhatsApp comme document plutôt que comme photo. Touchez Joindre, choisissez Document et sélectionnez le fichier. Elle arrivera sans que WhatsApp la compresse de nouveau.',
  },
  {
    id: 'wa-faq-5',
    question: 'Dois-je compresser avant d’envoyer ou laisser WhatsApp le faire ?',
    answer: 'Compressez-la d’abord vous-même. WhatsApp compresse de façon agressive et vous n’avez aucun contrôle là-dessus. Lorsque vous compressez d’abord avec CompressMyPic, vous choisissez la qualité, vous vérifiez le résultat, puis vous envoyez le fichier comme document pour que WhatsApp ne le touche pas de nouveau.',
  },
  {
    id: 'wa-faq-6',
    question: 'Quel réglage de qualité utiliser pour les photos WhatsApp ?',
    answer: 'Commencez par le préréglage Équilibré, autour de 70 %. Pour une photo importante, utilisez 80 à 85 % et vérifiez la comparaison avant/après. Pour une photo quotidienne et rapide, quand la vitesse compte, 50 à 60 % reste beau sur l’écran d’un téléphone et produit un fichier beaucoup plus petit.',
  },
  {
    id: 'wa-faq-7',
    question: 'Compresser deux fois aggrave-t-il les photos ?',
    answer: 'Oui. Chaque cycle de compression JPEG supprime un peu plus de détail. C’est pourquoi vous devez compresser une seule fois avec CompressMyPic, puis envoyer le résultat comme document, plutôt que de laisser WhatsApp compresser une photo déjà compressée une deuxième fois.',
  },
  {
    id: 'wa-faq-8',
    question: 'Puis-je compresser des photos WhatsApp sur mon téléphone ?',
    answer: 'Oui. CompressMyPic fonctionne dans le navigateur d’Android et d’iPhone. Ouvrez le site, choisissez la photo dans votre galerie, compressez-la, téléchargez le fichier plus petit, puis partagez-le depuis WhatsApp. Aucune application à installer.',
  },
  {
    id: 'wa-faq-9',
    question: 'Les photos compressées sont-elles belles dans les statuts WhatsApp ?',
    answer: 'Oui, si vous n’exagérez pas. Les statuts WhatsApp affichent les photos à une résolution modeste, donc une photo compressée avec le préréglage Équilibré (environ 70 %) paraît identique à l’originale sur l’écran d’un téléphone. Évitez de descendre sous 50 % pour les photos de statut avec des visages ou du texte.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp dit que mon image est trop grande, que faire ?',
    answer: 'Envoyez l’image sur CompressMyPic et baissez le curseur de qualité jusqu’à ce que le fichier pèse quelques centaines de Ko ; puis téléchargez-la et envoyez-la de nouveau. Si elle ne s’envoie toujours pas comme photo, envoyez-la comme document, qui accepte des fichiers beaucoup plus grands.',
  },
  {
    id: 'wa-faq-11',
    question: 'Dois-je utiliser JPG ou PNG pour WhatsApp ?',
    answer: 'Utilisez JPG pour les photos. JPG produit des fichiers beaucoup plus petits pour les photos d’appareil photo et WhatsApp le gère mieux. Utilisez PNG uniquement pour les images qui ont besoin de transparence, comme un logo, car les fichiers PNG sont beaucoup plus grands.',
  },
  {
    id: 'wa-faq-12',
    question: 'Puis-je envoyer des images WebP sur WhatsApp ?',
    answer: 'WhatsApp peut recevoir des fichiers WebP, mais ils peuvent ne pas s’afficher comme une photo normale et certains téléphones les gèrent bizarrement. Pour les photos que vous voulez que les gens voient directement dans le chat, JPG est le choix le plus sûr. WebP est meilleur pour les sites web que pour WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'Puis-je compresser plusieurs photos WhatsApp à la fois ?',
    answer: 'Envoyez toutes les photos sur CompressMyPic en une seule fois, appliquez le même préréglage à toutes et téléchargez-les toutes ensemble avec le bouton « Tout télécharger (ZIP) ». Ensuite, envoyez les fichiers depuis WhatsApp un par un ou comme documents.',
  },
  {
    id: 'wa-faq-14',
    question: 'WhatsApp compresse-t-il les vidéos de la même façon ?',
    answer: 'Oui, WhatsApp compresse aussi les vidéos envoyées de la façon habituelle, et peut les réduire beaucoup. CompressMyPic ne fonctionne qu’avec les images (JPG, PNG, WebP), pas avec les vidéos. Pour les vidéos, envoyez-les comme documents pour conserver la qualité d’origine.',
  },
  {
    id: 'wa-faq-15',
    question: 'Compresser une photo supprime-t-elle l’originale de mon téléphone ?',
    answer: 'Non. CompressMyPic crée une copie nouvelle et plus petite et la télécharge sur votre appareil. Votre photo d’origine reste exactement telle quelle dans votre galerie, sans être touchée.',
  },
  {
    id: 'wa-faq-16',
    question: 'Mes photos sont-elles envoyées vers un serveur lorsque je les compresse ?',
    answer: 'Non. Toute la compression a lieu dans votre propre navigateur sur votre appareil, donc vos photos ne sont jamais envoyées, stockées ni vues par quelqu’un d’autre. Elles restent dans la mémoire de votre navigateur et sont supprimées lorsque vous fermez ou actualisez l’onglet.',
  },
  {
    id: 'wa-faq-17',
    question: 'Quelle taille devrait avoir une photo pour WhatsApp ?',
    answer: 'Pour le partage quotidien, 100 à 300 Ko par photo est un bon objectif : elle s’envoie vite, consomme peu de données mobiles et reste nette sur un téléphone. Pour une photo que vous souhaitez imprimer ou conserver, restez plutôt près de 500 Ko à 1 Mo avec un réglage de qualité plus élevé.',
  },
  {
    id: 'wa-faq-18',
    question: 'Pourquoi mes photos WhatsApp paraissent-elles floues après l’envoi ?',
    answer: 'Parce que WhatsApp les a recompressées lorsque vous les avez envoyées comme photos. La solution est de compresser la photo vous-même d’abord avec une qualité que vous contrôlez, puis de l’envoyer comme document pour que WhatsApp ne la compresse pas de nouveau.',
  },
  {
    id: 'wa-faq-19',
    question: 'Puis-je compresser une capture d’écran pour WhatsApp ?',
    answer: 'Oui. Envoyez la capture d’écran sur CompressMyPic comme une photo. Les captures d’écran se compressent très bien car elles ont de grandes zones de couleur unie : essayez d’abord le préréglage Équilibré et passez à la sortie WebP si vous voulez le fichier le plus petit.',
  },
  {
    id: 'wa-faq-20',
    question: 'CompressMyPic est-il gratuit pour les photos WhatsApp ?',
    answer: 'Oui, entièrement gratuit. Aucune inscription, aucun filigrane, aucune limite au nombre de photos que vous compressez et aucun compte nécessaire. Ouvrez simplement le site, compressez et téléchargez.',
  },
];

export const GuideWhatsAppPageFr: React.FC<GuideWhatsAppPageFrProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Compresser des images pour WhatsApp sans perdre en qualité';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Apprenez à compresser des images pour WhatsApp sans perdre en qualité. Gratuit et privé, sans inscription : réduisez vos photos avant de les envoyer pour qu’elles arrivent nettes.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/fr/guides/compresser-images-pour-whatsapp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Comment compresser des images pour WhatsApp sans perdre en qualité',
          description: 'Compressez une photo avec CompressMyPic et envoyez-la sur WhatsApp comme document pour qu’elle reste nette.',
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
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
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
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/fr/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au compresseur d’images</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comment compresser des images pour WhatsApp sans perdre en qualité
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            WhatsApp réduit chaque photo que vous envoyez, souvent bien plus que nécessaire. Compressez vos photos vous-même d’abord et envoyez-les de la bonne façon : elles arriveront nettes, s’enverront vite et consommeront moins de données mobiles.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Pourquoi WhatsApp rend vos photos floues</span>
            </h2>
            <p>
              Lorsque vous envoyez une photo sur WhatsApp de la façon habituelle, WhatsApp la recompresse avant de la livrer. Une photo d’appareil photo de 3 Mo peut arriver comme un fichier de 100 Ko aux détails doux et aux couleurs en blocs. WhatsApp le fait pour économiser des données et de l’espace, mais vous ne pouvez pas décider de la qualité perdue.
            </p>
            <p>
              Il existe une deuxième façon d’envoyer une photo que la plupart des gens n’utilisent jamais : l’envoyer comme document. Les documents sont livrés tels quels, sans aucune compression supplémentaire. L’astuce est de réduire la photo vous-même d’abord, avec un réglage de qualité que vous contrôlez, puis de l’envoyer comme document. Vous obtenez ainsi un petit fichier et une photo nette en même temps.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Étape par étape : compressez une photo pour WhatsApp</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="Capture d’écran montrant comment envoyer une photo sur CompressMyPic avant de l’envoyer sur WhatsApp"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Envoyez votre photo sur CompressMyPic : glissez-déposez la photo, ou choisissez-la dans votre galerie.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>Quel réglage de qualité utiliser ?</span>
            </h2>
            <p>
              Il n’existe pas un seul chiffre parfait : cela dépend de la photo et de son usage. Utilisez ceci comme point de départ et vérifiez la comparaison avant/après à chaque fois :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Photos quotidiennes : 70 %</div>
                <p className="text-xs text-slate-600">
                  Le préréglage Équilibré. Un grand gain de taille, et la photo reste nette sur n’importe quel écran de téléphone. Le meilleur choix par défaut pour WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Photos importantes : 80–85 %</div>
                <p className="text-xs text-slate-600">
                  Photos de famille, photos de voyage, tout ce que vous souhaitez conserver. Le fichier est plus grand, mais les détails fins des visages et des paysages sont préservés.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Envois rapides : 50–60 %</div>
                <p className="text-xs text-slate-600">
                  Mèmes, mises à jour rapides, photos avec des données mobiles lentes. Des fichiers beaucoup plus petits qui restent beaux à la taille de l’écran d’un téléphone.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Conseils pour obtenir les meilleurs résultats</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Compressez une seule fois, et une seule fois. Compresser une photo déjà compressée une deuxième fois supprime des détails sans presque économiser davantage de taille.</li>
              <li>Envoyez toujours le fichier compressé comme document si la qualité compte : c’est la seule façon d’éviter que WhatsApp le compresse de nouveau.</li>
              <li>Compressez plusieurs photos à la fois avec les mêmes réglages et téléchargez-les toutes avec le bouton Tout télécharger (ZIP).</li>
              <li>Pour les captures d’écran et les graphiques avec du texte, essayez la sortie WebP : elle garde les bords nets et produit un fichier plus petit que JPG.</li>
              <li>Votre photo d’origine n’est jamais modifiée. CompressMyPic enregistre une copie nouvelle et plus petite, donc vous pouvez toujours revenir et essayer une qualité différente.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Capture d’écran du curseur de qualité et de la taille de fichier en direct, avant et après, dans CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Déplacez le curseur de qualité et observez comment la taille avant et après se met à jour en direct jusqu’à ce que le fichier ait la taille souhaitée.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>Erreurs courantes à éviter</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Envoyer la photo comme photo après l’avoir compressée : WhatsApp la compressera une deuxième fois et annulera votre travail.</li>
              <li>Descendre la qualité en dessous de 40 % pour les photos avec des visages : la peau et les détails fins deviennent des blocs très vite avec une qualité faible.</li>
              <li>Utiliser PNG pour les photos d’appareil photo : les fichiers PNG sont beaucoup plus grands que les JPG pour les photos et ne vous apportent rien sur WhatsApp.</li>
              <li>Oublier de vérifier le résultat : regardez toujours la comparaison avant/après avant d’envoyer, surtout pour les photos avec du texte.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Questions fréquentes</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
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
            <h2 className="text-xl font-bold text-slate-900">Guides connexes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/fr/guides/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP : quel format utiliser ?</div>
                <p className="text-xs text-slate-600 mt-1">Taille de fichier, qualité et transparence comparées, pour que vous choisissiez le bon format à chaque fois.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/fr/guides/reduire-image-a-100-ko')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Comment réduire la taille d’une image à 100 Ko pour le web et l’e-mail</div>
                <p className="text-xs text-slate-600 mt-1">Guide étape par étape pour atteindre 100 Ko sans ruiner votre photo.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/fr/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Compresser des images gratuitement
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/fr/compresser-image-a-100-ko')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Réduire une image à 100 Ko
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
