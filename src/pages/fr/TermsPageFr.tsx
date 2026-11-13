import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageFrProps {
  onNavigate: (path: string) => void;
}

export const TermsPageFr: React.FC<TermsPageFrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Conditions d’utilisation - CompressMyPic';
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
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conditions d’utilisation
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Dernière mise à jour : 12 novembre 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Acceptation des conditions
            </h2>
            <p>
              En accédant à CompressMyPic et en l’utilisant, vous acceptez de respecter les présentes Conditions d’utilisation et d’y être lié. Si vous n’êtes pas d’accord avec une partie de ces conditions, cessez d’utiliser le service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Utilisation autorisée
            </h2>
            <p>
              Vous pouvez utiliser CompressMyPic pour optimiser des images à des fins personnelles comme commerciales. Vous acceptez de ne pas utiliser le service pour une activité illégale ni d’une manière qui pourrait nuire au fonctionnement, à la sécurité ou à la disponibilité du site web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Droits de propriété intellectuelle
            </h2>
            <p>
              Vous conservez 100 % des droits d’auteur, de la propriété et des droits de propriété intellectuelle sur toutes les images, photos et graphiques que vous compressez avec notre outil. CompressMyPic ne revendique aucune propriété, licence ni aucun droit sur vos œuvres créatives. Tout le traitement s’effectue localement sur votre appareil.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Exclusion de garanties
            </h2>
            <p>
              CompressMyPic est fourni « tel quel » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite. Bien que nous nous efforcions d’obtenir une compatibilité et des performances maximales dans tous les navigateurs, nous ne garantissons pas que le service soit ininterrompu, exempt d’erreurs ou conforme à des exigences techniques spécifiques.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              5. Contact
            </h2>
            <p>
              Si vous avez des questions sur ces conditions, écrivez-nous à{' '}
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
