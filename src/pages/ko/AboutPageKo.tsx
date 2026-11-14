import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageKoProps {
  onNavigate: (path: string) => void;
}

export const AboutPageKo: React.FC<AboutPageKoProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'CompressMyPic 소개 – 무료 온라인 이미지 압축기';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'CompressMyPic 소개 – JPG, PNG, WebP용 무료 온라인 이미지 압축기입니다. 온라인에서 이미지를 무료로 압축하세요. 가입 불필요, 워터마크 없음, 서버 업로드 없음.');
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
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            CompressMyPic 소개
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic은 무료이며 개인정보를 보호하는 이미지 압축기입니다. JPG, PNG, WebP 이미지를 브라우저에서 바로 압축하세요. 빠르고 안전하며, 파일을 어디에도 업로드하지 않습니다.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>CompressMyPic이란?</span>
            </h2>
            <p>
              CompressMyPic은 화질 저하 없이 이미지 크기를 줄여 주는 무료 온라인 이미지 압축기이자 이미지 최적화 도구입니다. 매일 사용하는 형식의 사진 압축기이자 사진 크기 축소 도구입니다. JPG, PNG, WebP를 지원합니다. JPG를 100KB로 압축하거나, PNG를 온라인에서 무료로 압축하거나, WebP 이미지를 압축하거나, WhatsApp, Instagram, Facebook, 이메일로 공유하기 전에 사진 파일 크기를 줄일 수 있습니다.
            </p>
            <p>
              기존의 이미지 압축 웹사이트는 민감한 개인 사진이나 회사 그래픽을 타인의 서버에 업로드합니다. 이러한 방식은 당연히 우려를 불러일으키며, 바로 그래서 저희는 CompressMyPic을 정반대 방식으로 만들었습니다. 모든 작업이 사용자의 기기에서 이루어지는 도구입니다.
            </p>
            <p>
              이미지를 선택하거나 드래그 앤 드롭하면 브라우저가 임시 메모리 버퍼를 할당하고, HTML Canvas 요소에 사진을 그린 뒤, 압축 알고리즘을 적용하고, 새 파일을 내보냅니다. 이 모든 과정이 사용자의 브라우저 탭 안에서 이루어집니다. 이미지 압축 과정에 네트워크 인프라, 데이터베이스, 클라우드 서버는 전혀 관여하지 않습니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>지원 형식: JPG, PNG, WebP</span>
            </h2>
            <p>
              JPG 압축기로서 CompressMyPic은 JPG를 온라인에서 무료로 압축하고, 사진을 선명하게 유지하면서 JPEG 파일 크기를 줄일 수 있게 합니다. 균형 프리셋을 사용하거나 화질 슬라이더를 낮추고 실시간 전후 크기를 확인하면서 100KB나 200KB 같은 목표에 도달해 보세요. PNG 압축기로서는 로고와 그래픽의 투명도를 유지하면서 PNG를 온라인에서 무료로 압축할 수 있습니다. WebP 이미지를 압축하면 가장 작은 파일을 얻을 수 있습니다. WebP는 비슷한 화질에서 JPEG보다 보통 25~35% 작아 웹페이지용 이미지를 최적화하는 데 가장 좋은 선택입니다.
            </p>
            <p>
              각 이미지의 원래 형식을 그대로 유지하거나 JPG, PNG, WebP 사이에서 변환할 수 있습니다. 화질 슬라이더(10%~100%), 낮음·균형·높음 프리셋, 실시간 전후 크기 표시를 통해 파일 크기와 화질 사이의 균형을 완벽하게 조절할 수 있습니다. 도구에 없는 정확한 목표 KB 입력 상자를 제공한다고 주장하지도 않습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>핵심 원칙</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">절대적인 개인정보 보호</div>
                <p className="text-xs text-[var(--ink-2)]">
                  어떤 파일도 외부 서버나 데이터베이스에 닿지 않습니다. 사진과 민감한 그래픽은 사용자의 기기에만 머뭅니다. 압축이 클라이언트 측에서 이루어지기 때문에 다른 누구도 사용자의 작업을 볼 수 없습니다.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">간단하고 무료</div>
                <p className="text-xs text-[var(--ink-2)]">
                  소프트웨어 설치, 유료 요금제, 숨은 비용, 계정 생성, 이메일 인증, 체험 제한이 없습니다. 온라인에서 이미지를 무료로 압축하세요. 진정으로 무료이며, 가입이 필요 없고 압축된 이미지에 워터마크도 없습니다.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">직접 조절하는 화질</div>
                <p className="text-xs text-[var(--ink-2)]">
                  세밀한 조절을 지원합니다. 화질 슬라이더를 실시간으로 드래그하고, 낮음·균형·높음 프리셋 중 선택하고, 출력 파일 형식을 고르고, 모든 이미지를 나란히 비교해 차이를 즉시 확인할 수 있습니다. 화질 저하 없이 이미지 크기를 줄이세요. 사용자의 방식대로요.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">일괄 이미지 압축기</div>
                <p className="text-xs text-[var(--ink-2)]">
                  여러 이미지를 같은 설정으로 한 번에 압축하고, 모두 다운로드(ZIP) 버튼으로 함께 다운로드하세요. 사진 라이브러리, 제품 카탈로그, 웹사이트 이미지 폴더를 위한 일괄 이미지 압축기입니다.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">자동 안전 검사</div>
                <p className="text-xs text-[var(--ink-2)]">
                  압축기가 이미지의 투명도를 감지합니다. 투명한 PNG에 JPEG 출력을 선택하면 경고를 표시합니다. JPEG는 투명도를 지원하지 않기 때문입니다. 실수로 알파 채널을 잃는 일이 없습니다.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">빠른 성능</div>
                <p className="text-xs text-[var(--ink-2)]">
                  모든 처리가 사용자의 기기에서 로컬로 이루어지므로 파일이 서버로 올라갔다 내려오기를 기다릴 필요가 없습니다. 데스크톱이나 모바일에서 이미지당 최대 20MB의 큰 파일도 빠르게 압축할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>CompressMyPic은 누구를 위한 도구인가요?</span>
            </h2>
            <p>
              CompressMyPic은 더 작은 이미지가 필요한 모든 사람을 위한 도구입니다. 웹사이트용 이미지를 최적화하고 웹사이트 페이지의 이미지 크기를 줄이고 싶은 블로거와 웹사이트 운영자, 공유하거나 증명 사진을 전달하기 전에 사진 파일 크기를 줄여야 하는 사진작가, 웹사이트나 스토어 목록용 사진을 압축하는 온라인 판매자, 이메일 첨부용 이미지를 압축하는 학생과 직장인, 그리고 WhatsApp, Instagram, Facebook용 이미지를 압축해 더 빠르게 보내고 모바일 데이터를 절약하고 싶은 모든 분이 사용할 수 있습니다.
            </p>
            <p>
              데스크톱과 모바일 브라우저에서 작동하며, 설치가 필요 없고 가입을 요구하지도 않습니다. 사이트를 열고, 이미지를 업로드하고, 더 작은 파일을 다운로드하기만 하면 됩니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>개인정보 보호 및 보안</span>
            </h2>
            <p>
              CompressMyPic에서는 개인정보 보호가 선택 사항이 아니라 중요한 권리라고 믿습니다. 요즘에는 이미지 압축 도구조차 기본적으로 데이터를 수집하는 웹사이트가 많습니다. 저희는 현대 브라우저 기술을 활용해 사용자의 미디어를 컴퓨터에서 로컬로 처리하는 개인정보 우선 방식을 취합니다.
            </p>
            <p>
              파일은 브라우저 메모리에만 머물며, 탭을 닫거나 페이지를 새로고침하면 즉시 삭제됩니다. 원격 서버에서 이미지 처리가 이루어지지 않으므로, 원한다 해도 이미지 데이터를 수집할 수 없습니다. 그것이 이 도구의 설계이자 약속입니다.
            </p>
            <p>
              개인정보 처리 방식에 대해 자세히 알아보려면{' '}
              <button
                type="button"
                onClick={() => onNavigate('/ko/gaein-jeongbo')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                개인정보처리방침
              </button>
              {' '}페이지를 방문해 주세요.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>우리의 미션</span>
            </h2>
            <p>
              최고의 도구는 가장 간단하고, 가장 빠르며, 가장 투명한 도구라고 믿습니다. 저희의 미션은 숨은 절충 없이, 사용자를 추적하는 광고 없이, 서버 업로드 없이, 개인정보를 타협하지 않으면서 빠르고 신뢰할 수 있으며 완전히 무료인 이미지 압축기를 모든 사람에게 제공하는 것입니다. JPG 한 장을 압축하든 WebP 이미지 전체를 일괄 압축하든, 도구는 그저 잘 작동해야 합니다.
            </p>
            <p>
              질문이나 아이디어가 있거나, 개선할 점을 발견하셨나요? 여러분의 의견을 듣고 싶습니다. 사이트를 통해 직접 연락해 주세요.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ko/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              이미지 압축 시작하기
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ko/mun-ui')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
