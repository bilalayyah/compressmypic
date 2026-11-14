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
            최종 업데이트: 2026년 11월 14일
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

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 서비스 이용 가능성 및 변경
            </h2>
            <p>
              CompressMyPic은 무료 서비스이며 항상 이용 가능하다고 보장하지 않습니다. 저희는 도구, 기능 또는 웹사이트 전체를 언제든지 통지 여부와 관계없이 변경, 중단 또는 종료할 수 있습니다. 예를 들어 버그를 수정하거나 최신 브라우저에서 더 이상 작동하지 않는 기술을 교체하거나 서비스를 무료로 유지하기 위해서입니다. 또한 이미지 한 장당 최대 파일 크기(현재 기본 압축기는 20MB, 형식 변환기는 25MB)와 같은 합리적인 제한을 설정할 수 있으며, 브라우저와 기기가 발전함에 따라 이러한 제한을 변경할 수 있습니다. 모든 처리는 사용자의 브라우저 안에서 이루어지므로 웹사이트에 장애가 발생해도 원본 이미지가 위험에 처하는 일은 결코 없습니다. 파일은 사용자의 기기에 남아 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 허용 가능한 사용
            </h2>
            <p>
              사용자는 CompressMyPic을 합법적인 목적으로만, 서비스나 타인에게 해를 끼치지 않는 방식으로 사용하기로 동의합니다. 특히 웹사이트에 과부하를 주거나, 손상시키거나, 역설계하거나, 보안 취약점을 탐색하거나, 자동화된 스크립트를 사용해 대량의 요청을 보내거나, 타인의 저작권을 침해하는 이미지, 불법 자료를 포함하는 이미지, 기만이나 괴롭힘을 목적으로 하는 이미지를 처리하기 위해 서비스를 사용해서는 안 됩니다. 처리하는 모든 이미지를 사용할 권리가 있는지 확인하고, 압축하거나 변환하기 전에 중요한 이미지의 백업을 보관할 책임은 사용자에게 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 책임의 제한
            </h2>
            <p>
              법이 허용하는 최대한의 범위 내에서 CompressMyPic과 그 소유자는 서비스 이용으로 인해 발생하는 간접적, 부수적 또는 결과적 손실에 대해 책임을 지지 않습니다. 여기에는 데이터 손실, 이익 손실, 이미지 재생성 비용 등이 포함되나 이에 국한되지 않습니다. 서비스가 무료이므로 서비스와 관련된 모든 청구에 대한 저희의 총 책임은 사용자가 이용을 위해 지불한 금액, 즉 0으로 제한됩니다. 이는 사기 또는 과실로 인한 사망이나 신체 상해에 대한 책임 등 법으로 제한할 수 없는 책임을 제한하지 않습니다.
            </p>
            <p>
              압축은 본질적으로 손실이 있는 과정입니다. 파일 크기를 줄이면 품질이 떨어질 수 있으며, JPEG과 같은 일부 형식은 투명도를 유지할 수 없습니다. 원본 파일을 삭제하거나 덮어쓰기 전에 압축 결과를 확인할 책임은 사용자에게 있으며, 저희는 품질 저하, 투명도 손실 또는 사용자가 처리하기로 선택한 이미지에 압축이 초래하는 기타 변경에 대해 책임을 지지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 제3자 서비스
            </h2>
            <p>
              이 사이트는 운영을 위해 Cloudflare를 통한 호스팅 및 콘텐츠 전송, Google AdSense를 통한 광고, FormSubmit을 통한 메시지 전송 등 제3자 서비스를 사용합니다. 이러한 서비스에는 각자의 약관과 개인정보처리방침이 있으며, 해당 서비스의 이용은 해당 문서와 본 약관의 적용을 받습니다. 저희는 CompressMyPic에서 연결된 제3자 웹사이트나 서비스의 가용성, 콘텐츠 또는 관행에 대해 책임을 지지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 준거법
            </h2>
            <p>
              본 약관은 사이트가 운영되는 아랍에미리트의 법률에 따르며, 법률 충돌 규칙은 고려하지 않습니다. 본 약관 또는 서비스 이용으로 인해 발생하거나 이와 관련된 모든 분쟁은 아랍에미리트 법원에서 해결됩니다. 본 약관의 일부가 집행 불가능하다고 판단되더라도 나머지 부분은 계속 온전히 적용됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 본 약관의 변경
            </h2>
            <p>
              저희는 서비스가 변경될 때 본 약관을 업데이트할 수 있습니다. 예를 들어 새 도구를 추가하거나, 파일 크기 제한을 변경하거나, 새로운 제3자 서비스를 사용하기 시작하는 경우입니다. 그럴 경우 이 페이지 상단의 ‘최종 업데이트’ 날짜를 업데이트합니다. 약관이 변경된 후에도 CompressMyPic을 계속 사용하면 업데이트된 약관에 동의한 것으로 간주됩니다. 변경에 동의하지 않으시면 서비스 이용을 중단해 주세요.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. 문의
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
