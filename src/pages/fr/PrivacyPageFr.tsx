import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageFrProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageFr: React.FC<PrivacyPageFrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Politique de confidentialité - CompressMyPic';
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
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Politique de confidentialité
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Dernière mise à jour : 12 novembre 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Traitement des images dans votre navigateur
            </h2>
            <p>
              CompressMyPic est un compresseur d’images online gratuit. Les images sont traitées localement dans votre navigateur avec HTML5 Canvas : elles ne sont jamais envoyées vers nos serveurs et nous ne collectons, ne stockons ni ne partageons vos images. Lorsque vous fermez ou actualisez l’onglet du navigateur, tous les objets temporaires en mémoire sont supprimés.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Nous ne collectons aucune donnée personnelle
            </h2>
            <p>
              Nous ne demandons ni compte, ni mot de passe, ni adresse e-mail, ni numéro de téléphone pour utiliser l’outil de compression. Toute coordonnée que vous envoyez volontairement via notre formulaire de contact sert uniquement à répondre à votre demande précise.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Publicité (Google AdSense)
            </h2>
            <p>
              Nous utilisons Google AdSense pour afficher des publicités une fois activé. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites précédentes sur ce site web ou sur d’autres sites web. L’utilisation par Google des cookies publicitaires permet à Google et à ses partenaires de vous diffuser des annonces en fonction de votre visite sur ce site et/ou sur d’autres sites Internet. Vous pouvez désactiver la publicité personnalisée en consultant les Paramètres des annonces Google (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) ou{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Analytique
            </h2>
            <p>
              Nous n’utilisons actuellement aucun cookie d’analyse. Si cela change, nous mettrons à jour cette politique.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              5. Liens tiers
            </h2>
            <p>
              Notre site web peut contenir des liens vers des sites externes. Nous ne sommes pas responsables des pratiques de confidentialité ni du contenu des plateformes tierces.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              6. Contact
            </h2>
            <p>
              Si vous avez des questions sur cette politique, écrivez-nous à{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
