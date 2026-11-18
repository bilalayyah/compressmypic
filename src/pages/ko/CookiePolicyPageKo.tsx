import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageKoProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageKo: React.FC<CookiePolicyPageKoProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '쿠키 정책 | CompressMyPic – 쿠키 사용 방법';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              쿠키 정책
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            최종 업데이트: 2026년 11월 18일
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 쿠키란 무엇인가요?
            </h2>
            <p>
              쿠키는 웹사이트가 브라우저에 장치에 저장하도록 요청하는 작은 텍스트 파일입니다. 이전에 메시지를 본 적이 있는지와 같은 방문 정보를 기억하여, 사이트나 서비스가 다음 방문 때 브라우저를 인식할 수 있게 합니다. 이 정책에서는 CompressMyPic에서 사용되는 쿠키, 사용 이유, 관리 방법을 설명합니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 저희가 설정하지 않는 쿠키
            </h2>
            <p>
              CompressMyPic 자체는 쿠키를 전혀 설정하지 않습니다. 이미지 도구는 전적으로 브라우저 내에서 동작합니다. 압축에는 계정, 로그인, 쿠키가 필요하지 않습니다. 사용자를 기억하거나 추적하거나 설정을 저장하기 위해 쿠키를 설정하지 않습니다. 이미지는 브라우저를 절대 떠나지 않으며, 이미지에 대한 어떤 정보도 쿠키에 저장되지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Google 애드센스 광고 쿠키
            </h2>
            <p>
              이 사이트에서는 광고 표시를 위해 Google 애드센스를 사용합니다. 애드센스와 그 파트너는 이 웹사이트나 다른 웹사이트에 대한 이전 방문을 기반으로 광고를 제공하기 위해 장치에 쿠키를 설정할 수 있습니다. Google의 광고 쿠키 사용으로 Google과 그 파트너는 이 사이트 및/또는 인터넷상의 다른 사이트 방문을 기반으로 광고를 제공하고, 광고가 표시되는 빈도를 측정할 수 있습니다. 이 사이트의 광고 게재 위치는 수동으로 선택합니다. 자동 광고 삽입은 사용하지 않습니다. 맞춤 광고를 거부하려면 Google 광고 설정(
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://adssettings.google.com</a>
              ) 또는 
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://www.aboutads.info/choices/</a>
              를 방문하세요. 맞춤설정되지 않은 광고를 선택해도 광고가 완전히 사라지는 것은 아니지만, 광고가 더 이상 탐색 기록을 기반으로 하지 않게 됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Google 애널리틱스 4 쿠키
            </h2>
            <p>
              저희는 사이트 사용 방식을 종합적으로 이해하기 위해 Google 애널리틱스 4(GA4)를 사용합니다. 예를 들어 어떤 도구가 인기 있는지, 어떤 페이지가 방문되는지 등입니다. GA4는 방문을 구분하기 위해 _ga와 같은 쿠키를 장치에 설정할 수 있습니다. 데이터는 익명화되어 요약 형태로만 사용됩니다. GA4를 사용해 사용자를 개인적으로 식별하지 않습니다. Google 애널리틱스는 Google 애널리틱스 옵트아웃 부가 기능(https://tools.google.com/dlpage/gaoptout)을 설치하거나 브라우저 설정에서 쿠키를 비활성화하여 언제든지 거부할 수 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 동의(EEA, 영국, 스위스)
            </h2>
            <p>
              유럽경제지역, 영국, 스위스에서 방문하는 경우, Google은 GDPR 및 Google EU 사용자 동의 정책에 따라 맞춤 광고를 표시하기 전에 동의 메시지를 표시합니다. 동의는 이 사이트 바닥글의 "개인정보 및 쿠키 설정" 링크를 사용해 언제든지 변경하거나 철회할 수 있으며, 이 링크를 클릭하면 동의 메시지가 다시 열립니다. 또는 브라우저 쿠키를 삭제하여 철회할 수도 있습니다. 동의를 철회해도 철회 전에 합법적으로 이루어진 일에는 영향을 미치지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 기타 제3자 서비스
            </h2>
            <p>
              이 사이트의 일부 다른 서비스도 자체 쿠키나 유사한 저장소를 사용할 수 있습니다. 문의 양식을 스팸으로부터 보호하는 Google reCAPTCHA는 사람과 봇을 구분하기 위해 쿠키를 설정할 수 있으며, 그 사용은 Google의 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Google 개인정보처리방침</a>
               및 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Google 서비스 약관</a>
              에 따릅니다. 이 사이트를 호스팅하는 Cloudflare는 사이트를 악용으로부터 보호하기 위해 보안 쿠키를 설정할 수 있습니다. 도구 아래의 익명 댓글은 이름만 요청하며, 이름은 댓글 서비스에 저장됩니다. 이 사이트의 쿠키에는 저장되지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 쿠키가 아닌 브라우저 저장소
            </h2>
            <p>
              브라우저는 쿠키가 아닌 소량의 로컬 정보도 저장합니다. 댓글을 게시하면 브라우저가 입력한 이름을 기억해 다시 입력하지 않아도 되며, 사이트 언어를 변경하면 브라우저가 다음 방문을 위해 해당 선택을 기억할 수 있습니다. 이 정보는 본인의 장치에만 머물며 서버로 전송되지 않고, 브라우저에서 사이트 데이터를 삭제하여 언제든지 지울 수 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 쿠키 관리 방법
            </h2>
            <p>
              장치에 이미 저장된 쿠키를 삭제하고 향후 쿠키 설정을 차단하려면 브라우저 설정에서 할 수 있습니다. 모든 주요 브라우저(Chrome, Firefox, Safari, Edge)는 개인정보 또는 보안 설정에서 이 옵션을 제공합니다. 모든 쿠키를 차단해도 쿠키에 의존하지 않는 이미지 도구에는 문제가 없지만, 광고나 분석 같은 제3자 서비스 기능에는 영향을 줄 수 있습니다. 브라우저의 비공개 또는 시크릿 모드를 사용할 수도 있으며, 이 모드에서는 창을 닫으면 쿠키가 삭제됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 이 정책의 변경
            </h2>
            <p>
              사이트가 변경되는 경우(예: 새로운 광고 파트너나 분석 서비스를 추가하는 경우) 이 정책을 업데이트할 수 있습니다. 그럴 경우 이 페이지 상단의 "최종 업데이트" 날짜를 변경합니다. 변경 후에도 사이트를 계속 사용하면 업데이트된 정책에 동의한 것으로 간주합니다.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 문의
            </h2>
            <p>
              이 정책에 대해 질문이 있으시면 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              로 문의하거나 
              <a href="/ko/gaein-jeongbo" onClick={(e) => { e.preventDefault(); onNavigate('/ko/gaein-jeongbo'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">개인정보처리방침</a>
              를 읽어보세요.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
