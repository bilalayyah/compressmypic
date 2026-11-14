import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageKoProps {
  onNavigate: (path: string) => void;
}

export const TermsPageKo: React.FC<TermsPageKoProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '이용약관 - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ko/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이미지 압축기로 돌아가기</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#7c3aed] dark:text-[#a78bfa]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              이용약관
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            최종 업데이트: 2026년 11월 12일
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 약관 동의
            </h2>
            <p>
              CompressMyPic에 접속하고 이용함으로써 사용자는 본 이용약관을 준수하고 그 구속을 받는 데 동의합니다. 약관의 어느 부분에라도 동의하지 않으시면 서비스 이용을 중단해 주세요.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 허용된 사용
            </h2>
            <p>
              CompressMyPic은 개인용 및 상업용 이미지 최적화 목적으로 모두 사용할 수 있습니다. 사용자는 불법적인 활동에 서비스를 이용하거나 웹사이트의 운영, 보안 또는 가용성을 저해할 수 있는 방식으로 서비스를 이용해선 안 됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 지적 재산권
            </h2>
            <p>
              사용자는 본 도구로 압축한 모든 이미지, 사진, 그래픽에 대한 저작권, 소유권, 지적 재산권을 100% 그대로 보유합니다. CompressMyPic은 사용자의 창작물에 대해 어떠한 소유권, 라이선스, 권리도 주장하지 않습니다. 모든 처리는 사용자의 기기에서 로컬로 이루어집니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. 보증 면책
            </h2>
            <p>
              CompressMyPic은 명시적이든 묵시적이든 어떠한 종류의 보증도 없이 "있는 그대로" 그리고 "이용 가능한 대로" 제공됩니다. 저희는 모든 브라우저에서 최대한의 호환성과 성능을 위해 노력하지만, 서비스가 중단 없이, 오류 없이 제공되거나 특정 기술적 요구 사항을 충족할 것을 보증하지 않습니다.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 문의
            </h2>
            <p>
              본 약관에 대해 질문이 있으시면{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              으로 연락해 주세요.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
