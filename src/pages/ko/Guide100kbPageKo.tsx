import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface Guide100kbPageKoProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'CompressMyPic 열기',
    text: '브라우저에서 compressmypic.online에 접속하세요. 설치할 것도, 계정을 만들 필요도 없습니다. 도구는 무료이며 가입과 워터마크가 없습니다.',
  },
  {
    title: '이미지 업로드하기',
    text: '이미지를 페이지로 드래그 앤 드롭하거나 "파일 찾아보기"를 눌러 기기에서 선택하세요. JPG, PNG, WebP를 지원하며 이미지당 최대 20MB까지 가능합니다. 여러 이미지를 한 번에 업로드할 수 있습니다.',
  },
  {
    title: '균형 프리셋으로 시작하기',
    text: '균형 프리셋은 화질을 약 70%로 설정합니다. 대부분의 사진은 이것만으로 이미 원본 크기의 일부로 줄어듭니다. 이미지 옆에 표시되는 실시간 크기를 확인해 현재 위치를 파악하세요.',
  },
  {
    title: '화질 슬라이더를 단계별로 낮추기',
    text: '"100KB"라고 입력하는 상자는 없습니다. 대신 화질 슬라이더를 천천히 아래로 드래그하고 매번 변경 후 실시간 전후 크기가 업데이트되는 것을 지켜보세요. 작은 단계로(예: 70%에서 60%, 50%로) 움직여 필요 이상으로 화질을 잃지 않도록 하세요.',
  },
  {
    title: '여전히 100KB를 초과한다면 WebP로 전환하기',
    text: '합리적인 화질에서도 파일이 여전히 100KB를 초과한다면 출력 형식을 WebP로 바꾸세요. WebP는 같은 눈에 보이는 화질에서 JPG보다 보통 25~35% 작으며, 화질을 더 낮추지 않고도 100KB에 도달하는 격차를 메우는 경우가 많습니다.',
  },
  {
    title: '전후 비교하기',
    text: '전후 비교를 열고 얼굴, 글자, 세밀한 디테일을 확대해 보세요. 사진이 여전히 좋아 보인다면 끝났습니다. 뭉개지거나 색이 바래 보인다면 화질을 조금 높이고 100KB를 약간 넘는 파일을 받아들이세요. 선명한 120KB 사진이 흐릿한 100KB 사진보다 낫습니다.',
  },
  {
    title: '이미지 다운로드하기',
    text: '다운로드를 눌러 작은 파일을 저장하거나, 여러 이미지를 한 번에 줄였다면 "모두 다운로드(ZIP)"를 사용하세요. 원본 이미지는 절대 변경되지 않습니다. 항상 새롭고 작은 복사본을 받게 됩니다.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: '사진을 약 100KB까지 줄이려면 어떻게 해야 하나요?',
    answer: 'CompressMyPic에 업로드하고 균형 프리셋으로 시작한 뒤, 실시간 전후 크기를 보면서 화질 슬라이더를 단계별로 낮추세요. 압축된 크기가 100KB에 가까워지는 즉시 멈추세요. 여전히 초과한다면 출력 형식을 WebP로 전환하세요.',
  },
  {
    id: 'kb-faq-2',
    question: '정확한 100KB 입력 상자가 없는 이유는 무엇인가요?',
    answer: '모든 사진이 다르게 압축되기 때문입니다. 평평한 하늘은 같은 화질에서도 복잡한 군중 장면보다 훨씬 더 많이 줄어듭니다. 고정된 "100KB" 상자는 추측할 수밖에 없습니다. 대신 CompressMyPic은 매번 변경 후 실시간 압축 크기를 보여주므로, 사용자가 화질을 완벽하게 조절하면서 직접 100KB로 맞출 수 있습니다.',
  },
  {
    id: 'kb-faq-3',
    question: '약 100KB를 얻으려면 어떤 화질 설정을 사용해야 하나요?',
    answer: '사진에 따라 다르지만, 일반적인 휴대폰 사진은 50~70% 화질이면 보통 100KB 근처에 도달합니다. 평평한 색상의 단순한 사진은 70%에서 100KB에 도달할 수 있지만, 디테일이 많은 풍경은 40~50%가 필요할 수 있습니다. 실시간 크기를 확인하세요. 그 숫자가 진실이지, 고정된 백분율이 아닙니다.',
  },
  {
    id: 'kb-faq-4',
    question: '낮은 화질에서도 사진이 여전히 100KB를 초과합니다. 어떻게 해야 하나요?',
    answer: '먼저 출력 형식을 WebP로 전환하세요. 보통 JPG보다 25~35% 작습니다. 그래도 초과한다면 화질을 조금 더 낮추고 비교를 확인하세요. 작은 추가 하락은 종종 눈에 띄지 않습니다. 최후의 수단으로, 치수가 매우 큰 사진은 예상보다 낮은 화질 설정이 필요할 수 있습니다. 픽셀이 많을수록 데이터가 많아지기 때문입니다.',
  },
  {
    id: 'kb-faq-5',
    question: '100KB에 도달하려면 WebP를 사용해야 하나요?',
    answer: '가능할 때는 네. WebP는 JPG와 같은 눈에 보이는 화질에서 더 작은 파일을 만들므로 화질을 너무 낮추지 않고 100KB에 도달하는 가장 쉬운 방법입니다. 웹사이트 이미지와 최신 브라우저가 사용되는 모든 곳에 WebP를 사용하세요. 이미지를 오래된 소프트웨어에서 열어야 하거나 WhatsApp으로 공유해야 할 때만 JPG를 사용하세요.',
  },
  {
    id: 'kb-faq-6',
    question: '100KB로 줄이면 사진이 흐릿해지나요?',
    answer: '조심스럽게 하면 그렇지 않습니다. 100KB에서 일반적인 휴대폰 사진은 화면에서 여전히 선명하게 보입니다. 화면은 카메라가 촬영한 것보다 훨씬 적은 픽셀을 표시하기 때문입니다. 화질을 너무 낮게(약 40% 아래로) 밀거나 사진을 크게 인쇄할 때만 흐릿하게 보입니다. 다운로드하기 전에 항상 전후 비교를 확인하세요.',
  },
  {
    id: 'kb-faq-7',
    question: 'PNG를 100KB로 줄일 수 있나요?',
    answer: '네, 하지만 PNG 사진은 처음부터 크기 때문에 더 많은 작업이 필요합니다. PNG를 업로드하고 화질 슬라이더를 낮춘 뒤 출력을 WebP 또는 JPG로 전환하세요. 이것만으로도 크기가 절반 이상 줄어드는 경우가 많습니다. 이미지에 투명도가 필요할 때만 PNG 출력을 유지하고, 투명한 PNG는 100KB에 도달하지 못할 수 있다는 점을 받아들이세요.',
  },
  {
    id: 'kb-faq-8',
    question: '이미지 크기를 200KB로 줄이려면 어떻게 해야 하나요?',
    answer: '같은 방법을 사용하세요. 이미지를 업로드하고 균형 프리셋으로 시작한 뒤, 실시간 크기가 200KB에 가까워질 때까지 보면서 화질 슬라이더를 낮추세요. 대부분의 사진은 70~80% 화질에서 200KB에 쉽게 도달하므로 보통 낮출 필요가 전혀 없습니다.',
  },
  {
    id: 'kb-faq-9',
    question: '이미지 크기를 50KB로 줄이려면 어떻게 해야 하나요?',
    answer: '이미지를 업로드하고 출력 형식을 WebP로 전환한 뒤, 실시간 크기가 50KB 근처가 될 때까지 화질 슬라이더를 점진적으로 낮추세요. 사진의 경우 보통 약 40~55% 화질입니다. 비교를 자세히 확인하세요. 50KB에서는 세밀한 디테일이 손상되기 시작합니다. 썸네일과 채팅에는 괜찮지만 보관하고 싶은 사진에는 덜 좋습니다.',
  },
  {
    id: 'kb-faq-10',
    question: '이미지 크기를 20KB로 줄이려면 어떻게 해야 하나요?',
    answer: 'WebP 출력과 낮은 화질 설정(보통 25~40%)을 사용하고 실시간 크기를 확인하세요. 20KB는 매우 작으므로 눈에 보이는 부드러움이 예상됩니다. 아이콘, 썸네일, 작은 미리 보기 이미지에 적합하고, 얼굴이 있는 사진에는 적합하지 않습니다. 이미지가 여전히 20KB에 도달하지 못한다면 이렇게 작은 파일에는 디테일이 너무 많을 가능성이 높습니다.',
  },
  {
    id: 'kb-faq-11',
    question: '웹사이트 이미지에 좋은 파일 크기는 얼마인가요?',
    answer: '일반 콘텐츠 사진은 이미지당 100KB 미만, 큰 히어로 이미지는 200KB 미만을 목표로 하세요. 작은 파일은 페이지를 빠르게 로드하며, 이는 방문자가 알아차리고 Google이 보상하는 부분입니다. 웹사이트 이미지의 시작점으로 WebP 형식과 균형 프리셋을 사용하세요.',
  },
  {
    id: 'kb-faq-12',
    question: '이메일 첨부 파일 크기 제한은 얼마인가요?',
    answer: '대부분의 이메일 제공업체는 모든 첨부 파일을 포함해 메시지당 총 20~25MB를 허용합니다. Gmail은 25MB를 허용합니다. 100KB로 줄인 사진 한 장은 절대 문제가 되지 않습니다. 100KB 사진 10장도 총 1MB에 불과합니다. 먼저 압축하면 여러 장의 사진을 이메일로 보내는 것이 수월해집니다.',
  },
  {
    id: 'kb-faq-13',
    question: '여러 이미지를 한 번에 100KB로 줄일 수 있나요?',
    answer: '네. 모든 이미지를 함께 업로드하고 같은 프리셋과 화질을 모두에 적용한 뒤 각 이미지의 실시간 크기를 확인하세요. 한 이미지가 여전히 100KB를 초과한다면 해당 이미지만 따로 조정한 뒤 "모두 다운로드(ZIP)" 버튼으로 모두 함께 다운로드하세요.',
  },
  {
    id: 'kb-faq-14',
    question: '도구가 이미지 치수를 변경하나요?',
    answer: '아니요. CompressMyPic은 이미지 치수를 정확히 그대로 유지합니다. 파일 크기만 줄어듭니다. 사진은 원본과 같은 너비, 높이, 종횡비를 유지하므로 4000×3000 사진은 4000×3000 그대로, 다만 파일이 훨씬 작아집니다.',
  },
  {
    id: 'kb-faq-15',
    question: '압축한 이미지의 크기를 어떻게 확인하나요?',
    answer: 'CompressMyPic은 모든 이미지마다 원본 크기와 압축된 크기를 실시간으로, 각 사진 바로 아래에 표시합니다. 예를 들어 "4.2 MB → 98 KB"처럼요. 기기에서 다운로드한 파일을 확인할 수도 있습니다. 휴대폰에서는 갤러리나 파일 관리자에서 파일 세부 정보를 확인하세요.',
  },
  {
    id: 'kb-faq-16',
    question: '웹사이트에 100KB면 화질이 충분한가요?',
    answer: '네, 거의 모든 웹 사용에 충분합니다. 웹사이트 사진은 수백 픽셀 너비로 표시되므로 100KB 이미지가 화면에서 선명하게 보입니다. 전체 화면 히어로 이미지나 인쇄용 사진만 더 큰 파일이 필요합니다. 100KB로 압축하고 비교를 확인하면 화질이 유지되는 것을 볼 수 있습니다.',
  },
  {
    id: 'kb-faq-17',
    question: '스크린샷을 100KB로 줄일 수 있나요?',
    answer: '네, 스크린샷은 가장 쉬운 경우입니다. 평평한 색상의 넓은 영역이 있어 매우 잘 압축됩니다. 1MB로 시작하는 스크린샷도 균형 프리셋에서 100KB 아래로 떨어지는 경우가 많습니다. 가장 작은 결과를 위해 WebP 출력을 사용해 보세요.',
  },
  {
    id: 'kb-faq-18',
    question: '압축할 때 이미지가 어딘가에 업로드되나요?',
    answer: '아니요. 모든 압축은 사용자의 기기에서 브라우저 안에서 이루어지므로 이미지가 서버에 업로드되거나 저장되거나 다른 사람에게 보이는 일이 없습니다. 이미지는 브라우저 메모리에 머물다가 탭을 닫거나 새로고침하면 삭제됩니다.',
  },
  {
    id: 'kb-faq-19',
    question: '줄일 수 있는 이미지 수에 제한이 있나요?',
    answer: '아니요. 압축할 수 있는 이미지 수에 제한이 없으며 계정이나 가입이 필요 없습니다. 유일한 제한은 이미지당 20MB이며, 이는 고해상도 카메라 사진과 큰 스크린샷을 충분히 포함합니다.',
  },
  {
    id: 'kb-faq-20',
    question: '이미지를 100KB로 줄이는 것이 무료인가요?',
    answer: '네, 완전히 무료입니다. 요금, 유료 요금제, 크레딧이 없으며 압축된 이미지에 워터마크도 없습니다. 사이트를 열고 이미지를 100KB로 줄인 뒤 원하는 만큼 다운로드하세요.',
  },
];

export const Guide100kbPageKo: React.FC<Guide100kbPageKoProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = '웹과 이메일용 이미지 크기를 100KB로 줄이는 방법';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', '무료 온라인 압축기로 웹사이트와 이메일용 이미지 크기를 100KB로 줄이세요. 단계별 가이드 — 가입 불필요, 워터마크 없음, 이미지는 기기에 머뭅니다.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ko/gaideu/imiji-keugi-reul-100kb-ro-juligi';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: '웹사이트와 이메일용 이미지 크기를 100KB로 줄이는 방법',
          description: 'CompressMyPic의 화질 슬라이더와 WebP 출력을 이용해 이미지를 약 100KB로 줄이세요.',
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
    script.id = 'guide-100kb-ko-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-ko-jsonld');
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
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ko/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이미지 압축기로 돌아가기</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            웹사이트와 이메일용 이미지 크기를 100KB로 줄이는 방법
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            4MB 사진은 웹사이트를 느리게 만들고 이메일을 막히게 합니다. 약 100KB로 줄이면 페이지가 빠르게 로드되고 이메일이 즉시 전송됩니다. 제대로 하면 아무도 차이를 알아차리지 못합니다.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Target className="w-4 h-4" />
              </span>
              <span>100KB가 마법의 숫자인 이유</span>
            </h2>
            <p>
              100KB는 대부분의 사람들이 목표로 하는 크기입니다. 웹사이트에서 즉시 로드되거나 어떤 이메일에도 들어갈 만큼 작으면서도 화면에서 여전히 선명하게 보일 만큼 크기 때문입니다. 일반적인 휴대폰 사진은 3~5MB로 시작하므로 100KB에 도달한다는 것은 파일의 약 97%를 잘라낸다는 의미입니다. 최신 압축은 대부분 눈이 볼 수 없는 데이터를 제거함으로써 이를 해냅니다.
            </p>
            <p>
              시작하기 전에 한 가지 정직한 말씀을 드리겠습니다. CompressMyPic에는 "100KB"라고 입력하면 정확히 그 크기가 나오는 상자가 없습니다. 어떤 정직한 도구도 정확한 숫자를 약속할 수 없습니다. 모든 사진이 다르게 압축되기 때문입니다. 대신 도구는 매번 변경 후 실시간 압축 크기를 보여주며, 사용자가 화질 슬라이더로 직접 100KB로 맞춥니다. 이 가이드에서 그 방법을 정확히 보여드립니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Gauge className="w-4 h-4" />
              </span>
              <span>단계별 가이드: 이미지를 100KB로 줄이기</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="100KB로 줄이기 위해 CompressMyPic에 큰 사진을 업로드하는 스크린샷"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              사진을 업로드하세요. 원본 크기가 바로 표시되므로 얼마나 줄여야 하는지 알 수 있습니다.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>한눈에 보는 일반적인 목표</span>
            </h2>
            <p>
              100KB가 유일한 목표는 아닙니다. 같은 방법이 모든 크기에 적용됩니다. 각 크기마다 예상되는 설정은 다음과 같습니다.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">목표</th>
                    <th className="px-4 py-3 font-semibold">일반적인 화질</th>
                    <th className="px-4 py-3 font-semibold">적합한 용도</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">200KB</td>
                    <td className="px-4 py-3">70~80%</td>
                    <td className="px-4 py-3">블로그 사진, 큰 웹 이미지</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">100KB</td>
                    <td className="px-4 py-3">50~70%</td>
                    <td className="px-4 py-3">웹사이트 사진, 이메일 첨부 파일</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">50KB</td>
                    <td className="px-4 py-3">40~55% + WebP</td>
                    <td className="px-4 py-3">썸네일, 채팅, 빠른 페이지</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-bold text-[#7c3aed] dark:text-[#c4b5fd]">20KB</td>
                    <td className="px-4 py-3">25~40% + WebP</td>
                    <td className="px-4 py-3">아이콘, 작은 미리 보기</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              이는 약속이 아니라 시작점입니다. 단순한 사진은 100KB에 쉽게 도달하지만, 복잡하고 디테일이 많은 사진은 더 낮은 화질 설정이 필요합니다. 백분율이 아니라 실시간 크기 숫자를 믿으세요.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Mail className="w-4 h-4" />
              </span>
              <span>웹사이트와 이메일을 위한 팁</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>웹사이트에는 WebP 출력을 사용하세요. 100KB에 도달하는 가장 빠른 방법이며 모든 최신 브라우저가 지원합니다.</li>
              <li>이메일에는 JPG가 가장 안전한 형식입니다. 모든 이메일 앱이 열 수 있습니다. 100KB JPG는 즉시 첨부되고 크기 때문에 반송되는 일이 없습니다.</li>
              <li>한 페이지나 한 이메일용 사진을 모두 함께 압축한 뒤 모두 다운로드(ZIP) 버튼으로 함께 다운로드하세요.</li>
              <li>정확한 100KB를 쫓지 마세요. 정확히 100KB인 흐릿한 사진보다 115KB인 선명한 사진이 낫습니다. 로딩 시간 차이는 미미합니다.</li>
              <li>사진을 게시하거나 보내기 전에 항상 전후 비교를 전체 확대해서 확인하세요.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="약 100KB로 줄어든 이미지의 실시간 전후 파일 크기를 보여주는 스크린샷"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              실시간 전후 크기가 진행 상황을 보여줍니다. 압축된 크기가 100KB 근처가 될 때까지 슬라이더를 낮추세요.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>100KB에 도달할 수 없을 때</span>
            </h2>
            <p className="text-sm sm:text-base">
              어떤 이미지는 보기에 나쁘지 않게 100KB에 도달할 수 없습니다. 매우 크고 매우 디테일이 많은 사진이나, PNG로 유지해야 하는 투명도가 있는 PNG가 그렇습니다. 그럴 때는 억지로 하지 마세요. 선명한 180KB 사진이 망가진 100KB 사진보다 항상 낫습니다. 웹사이트에서는 여전히 빠르게 로드되고 이메일에서는 여전히 첨부 제한을 훨씬 밑돕니다. 목표는 여전히 좋아 보이는 작은 파일이지, 마법의 숫자가 아닙니다.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>자주 묻는 질문</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
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
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">관련 가이드</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/ko/gaideu/watsae-yong-imiji-apchuk')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">화질 저하 없이 WhatsApp용 이미지를 압축하는 방법</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">먼저 직접 사진을 축소한 뒤 문서로 보내 WhatsApp이 사진을 흐릿하게 만들지 못하게 하세요.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ko/gaideu/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP — 어떤 형식을 사용해야 할까요?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">파일 크기, 화질, 투명도를 비교해 매번 올바른 형식을 선택하세요.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ko/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              이미지 무료 압축하기
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ko/gaideu/jpg-vs-png-vs-webp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
