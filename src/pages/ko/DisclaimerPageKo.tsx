import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageKoProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageKo: React.FC<DisclaimerPageKoProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '면책 조항 | CompressMyPic – 무료 이미지 도구';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이미지 압축기로 돌아가기</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              면책 조항
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            최종 업데이트: 2026년 11월 18일
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 일반 정보
            </h2>
            <p>
              CompressMyPic은 무료 온라인 이미지 압축 및 편집 서비스입니다. 이 웹사이트의 도구, 가이드, 문서는 일반적인 정보 제공과 실용적인 사용만을 위한 것입니다. 법률, 의료, 금융, 기술 등 어떠한 종류의 전문적인 조언도 아니며, 사용자와 CompressMyPic 사이에 전문적인 관계를 만들지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 보증 없음
            </h2>
            <p>
              본 서비스는 "있는 그대로" 그리고 "제공 가능한 대로" 제공되며, 명시적이든 묵시적이든 어떠한 종류의 보증도 없습니다. 도구가 항상 이용 가능하거나, 중단이 없거나, 오류가 없거나, 유해한 요소가 없거나, 특정 이미지가 특정 크기나 품질로 압축될 것을 보증하지 않습니다. 결과는 원본 이미지, 그 형식, 브라우저에 따라 달라지므로, 도구를 사용하기 전에 반드시 원본 파일의 복사본을 보관하세요.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 콘텐츠의 정확성
            </h2>
            <p>
              저희는 가이드, 문서, 도구 설명을 정확하고 최신 상태로 유지하기 위해 노력하지만, 이미지 형식, 브라우저, 웹 표준은 시간이 지나면서 변합니다. 최선의 노력에도 불구하고 이 사이트의 정보는 오래되거나 오류를 포함할 수 있습니다. 플랫폼의 파일 크기 제한과 같은 중요한 세부 사항은 신뢰하기 전에 반드시 해당 플랫폼의 최신 공식 문서에서 확인하세요.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. 파일은 본인의 책임입니다
            </h2>
            <p>
              이미지는 브라우저 내에서 로컬로 처리되며 서버에 업로드되지 않습니다. 이는 파일을 복구해 드릴 수 없다는 의미이기도 합니다. 도구를 사용하는 동안 원본 이미지를 덮어쓰거나 삭제하거나 잃어버리면 복원할 수 없습니다. 중요한 이미지는 반드시 백업하고, 본인이 소유하거나 편집 권한이 있는 파일의 복사본만 처리하세요.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 제3자 서비스 및 링크
            </h2>
            <p>
              이 사이트는 사용 통계를 위한 Google 애널리틱스 4, 문의 양식을 위한 FormSubmit, 익명 댓글을 위한 Cloudflare Worker 등 제3자 서비스를 사용하고 외부 웹사이트로 연결됩니다. 저희는 이러한 서비스나 사이트를 통제하지 않으며, 그 콘텐츠, 가용성, 개인정보 관행, 정확성에 대해 책임지지 않습니다. 이를 사용할 때는 각자의 약관과 개인정보처리방침이 적용됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 광고
            </h2>
            <p>
              이 사이트는 현재 광고를 표시하지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 책임의 제한
            </h2>
            <p>
              법이 허용하는 최대 범위 내에서, CompressMyPic과 그 운영자는 이 웹사이트나 도구의 사용 또는 사용 불가로 인해 발생하는 직접적, 간접적, 부수적, 결과적 손실이나 손해(파일, 데이터, 이익의 손실을 포함하되 이에 국한되지 않음)에 대해 책임지지 않습니다. 서비스에 불만이 있는 경우 유일한 구제 방법은 사용을 중단하는 것입니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 사용자 댓글
            </h2>
            <p>
              도구 아래에 게시되는 댓글은 방문자가 작성한 것이며 방문자 본인의 의견을 반영할 뿐 저희의 의견이 아닙니다. 댓글은 관리되며 스팸, 욕설, 주제와 무관한 내용은 삭제할 수 있지만, 사용자 댓글의 내용을 보증하거나 책임지지 않습니다. 댓글에 비밀번호, 결제 정보, 민감한 개인정보를 절대 공유하지 마세요.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 문의
            </h2>
            <p>
              이 면책 조항에 대해 질문이 있으시면 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              로 문의해 주세요.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
