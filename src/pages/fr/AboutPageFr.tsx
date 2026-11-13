import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageFrProps {
  onNavigate: (path: string) => void;
}

export const AboutPageFr: React.FC<AboutPageFrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'À propos de CompressMyPic – Compresseur d’images online gratuit';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'À propos de CompressMyPic : un compresseur d’images online gratuit pour JPG, PNG et WebP. Compressez des images online gratuitement, sans inscription, sans filigrane et sans rien envoyer vers un serveur.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
            À propos de CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            CompressMyPic est un compresseur d’images gratuit et privé. Compressez des images JPG, PNG et WebP directement dans votre navigateur : rapide, sécurisé et sans envoyer vos fichiers nulle part.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span>Qu’est-ce que CompressMyPic ?</span>
            </h2>
            <p>
              CompressMyPic est un compresseur d’images online gratuit et un optimiseur d’images qui vous aide à réduire la taille de vos images sans perdre en qualité. C’est un compresseur de photos et un réducteur de taille de photos pour les formats que vous utilisez chaque jour : JPG, PNG et WebP. Utilisez-le pour compresser un JPG à 100 Ko, compresser un PNG online gratuitement, compresser des images WebP ou réduire la taille d’une photo avant de la partager sur WhatsApp, Instagram, Facebook ou par e-mail.
            </p>
            <p>
              Les sites de compression d’images traditionnels envoient vos photos personnelles ou les visuels de votre entreprise vers un serveur qui appartient à quelqu’un d’autre. Cette pratique soulève des préoccupations légitimes, et c’est précisément pour cela que nous avons créé CompressMyPic à l’inverse : un outil qui fait tout sur votre propre appareil.
            </p>
            <p>
              Lorsque vous sélectionnez une image ou que vous la glissez-déposez, votre navigateur réserve un tampon temporaire en mémoire, dessine l’image sur un élément Canvas HTML, applique l’algorithme de compression, puis exporte le nouveau fichier, le tout dans votre propre onglet de navigateur. Aucune infrastructure réseau, aucune base de données ni aucun serveur cloud n’intervient dans la compression de vos images.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Formats pris en charge : JPG, PNG et WebP</span>
            </h2>
            <p>
              En tant que compresseur JPG, CompressMyPic vous permet de compresser des JPG online gratuitement et de réduire la taille de vos fichiers JPEG sans que vos photos perdent en netteté : essayez le préréglage Équilibré ou descendez le curseur de qualité et observez la taille avant et après en direct pour atteindre des objectifs comme 100 Ko ou 200 Ko. En tant que compresseur PNG, il vous permet de compresser des PNG online gratuitement tout en conservant la transparence des logos et des graphiques. Et lorsque vous compressez des images WebP, vous obtenez les fichiers les plus petits de tous : WebP est généralement 25 à 35 % plus petit que JPEG à qualité similaire, ce qui en fait le meilleur choix pour optimiser les images d’un site web.
            </p>
            <p>
              Vous pouvez conserver le format d’origine de chaque image ou convertir entre JPG, PNG et WebP. Le curseur de qualité (de 10 % à 100 %), les préréglages Faible, Équilibré et Élevé, ainsi que l’aperçu en direct de la taille avant et après vous donnent un contrôle total sur l’équilibre entre la taille du fichier et la qualité de l’image, sans jamais promettre un champ de saisie pour une taille cible exacte en Ko que l’outil ne possède pas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Nos principes fondamentaux</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Confidentialité absolue</div>
                <p className="text-xs text-slate-600">
                  Aucun fichier ne touche jamais un serveur externe ni une base de données. Vos photos et vos visuels sensibles restent strictement sur votre appareil. Comme la compression se fait dans votre propre navigateur, personne d’autre ne voit votre travail.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Simple et gratuit</div>
                <p className="text-xs text-slate-600">
                  Aucun logiciel à installer, aucun forfait payant, aucun frais caché, aucun compte à créer, aucune vérification par e-mail et aucune limite d’essai. Compressez des images online gratuitement : c’est vraiment gratuit, sans inscription et sans filigrane sur vos images compressées.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">C’est vous qui contrôlez la qualité</div>
                <p className="text-xs text-slate-600">
                  Vous avez un contrôle précis : déplacez le curseur de qualité en temps réel, choisissez l’un des préréglages Faible, Équilibré ou Élevé, sélectionnez le format du fichier de sortie et comparez chaque image côte à côte pour repérer les différences instantanément. Réduisez la taille de vos images sans perdre en qualité, à votre façon.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Compresseur d’images par lots</div>
                <p className="text-xs text-slate-600">
                  Compressez plusieurs images à la fois avec les mêmes réglages et téléchargez-les toutes ensemble avec le bouton Tout télécharger (ZIP) : un compresseur d’images par lots pour les bibliothèques de photos, les catalogues de produits et les dossiers d’images de sites web.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Vérifications de sécurité automatiques</div>
                <p className="text-xs text-slate-600">
                  Le compresseur détecte la transparence de vos images. Si vous choisissez une sortie JPEG pour un PNG transparent, nous affichons un avertissement car JPEG ne prend pas en charge la transparence, pour que vous ne perdiez jamais votre canal alpha par accident.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Des performances rapides</div>
                <p className="text-xs text-slate-600">
                  Comme tout le traitement se fait localement sur votre appareil, vous n’avez pas à attendre que les fichiers soient envoyés puis téléchargés depuis un serveur. Vous pouvez compresser des photos rapidement, même des fichiers volumineux jusqu’à 20 Mo par image, sur ordinateur ou sur mobile.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>À qui s’adresse CompressMyPic ?</span>
            </h2>
            <p>
              CompressMyPic s’adresse à toute personne qui a besoin d’images plus petites : blogueurs et propriétaires de sites web qui veulent optimiser les images pour le web et réduire la taille des images de leurs pages ; photographes qui doivent réduire la taille de leurs photos avant de les partager ou de remettre des épreuves ; vendeurs online qui compressent une photo pour leur site web ou une annonce ; étudiants et employés de bureau qui compressent des images à joindre à un e-mail ; et toute personne qui veut compresser une image pour WhatsApp, Instagram ou Facebook afin qu’elle s’envoie plus vite et consomme moins de données mobiles.
            </p>
            <p>
              Il fonctionne dans les navigateurs sur ordinateur et sur mobile, ne nécessite aucune installation et ne vous demande jamais de vous inscrire : ouvrez simplement le site, envoyez vos images et téléchargez les fichiers plus petits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              <span>Confidentialité et sécurité</span>
            </h2>
            <p>
              Chez CompressMyPic, nous pensons que la confidentialité est un droit fondamental, et non une fonction optionnelle. Aujourd’hui, de nombreux sites web collectent des données par défaut, même un outil de compression d’images. Nous adoptons une approche où la confidentialité passe d’abord et nous utilisons la technologie moderne du navigateur pour traiter vos fichiers localement sur votre ordinateur.
            </p>
            <p>
              Vos fichiers restent dans la mémoire de votre navigateur et sont supprimés immédiatement lorsque vous fermez l’onglet ou actualisez la page. Comme aucun traitement d’image n’a lieu sur des serveurs distants, nous ne pouvons pas collecter les données de vos images même si nous le voulions. C’est la conception et la promesse de l’outil.
            </p>
            <p>
              Pour savoir exactement comment nous traitons votre confidentialité, consultez notre{' '}
              <button
                type="button"
                onClick={() => onNavigate('/fr/confidentialite')}
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Politique de confidentialité
              </button>
              {' '}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Notre mission</span>
            </h2>
            <p>
              Nous pensons que les meilleurs outils sont les plus simples, les plus rapides et les plus transparents. Notre mission est d’offrir à tout le monde un compresseur d’images rapide, fiable et entièrement gratuit, sans pièges cachés, sans publicités qui vous suivent, sans envois vers des serveurs et sans renoncer à votre confidentialité. Que vous compressiez un seul JPG ou tout un lot d’images WebP, l’outil doit simplement fonctionner.
            </p>
            <p>
              Vous avez une question, une idée ou vous avez trouvé quelque chose que nous pouvons améliorer ? Nous serions ravis de vous entendre. Vous pouvez nous écrire directement depuis le site.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/fr/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Commencer à compresser des images
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/fr/contact')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
