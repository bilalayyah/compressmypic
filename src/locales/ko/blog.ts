// Korean (ko) overrides for CompressMyPic blog articles.
// Keys are article ids; values override the English version (no `slug` —
// the localized slug lives in ./slugs.ts). Empty until Batch 4 localizes
// articles. Standard South Korean Korean.
import type { BlogArticleLocaleOverride } from '../../types/blog';

export const KO_BLOG_OVERRIDES: Record<string, BlogArticleLocaleOverride> = {
  "compress-image-to-50kb-guide": {
    title: "이미지 50KB로 줄이기 완벽 가이드",
    description: "이미지를 50KB 이하로 줄이는 방법을 알려드립니다. 화질 손상을 최소화하는 포맷 선택법, 품질 설정, 무료 브라우저 압축 도구 활용법까지 정리했습니다. 증명사진과 포털 제출용으로 상한을 맞추는 요령도 담았습니다. 선명한 증명사진을 만드는 품질 조절 순서도 안내합니다.",
    readingMinutes: 8,
  },
  "how-to-compress-image-to-50kb": {
    title: "이미지 50KB로 압축하는 방법",
    description: "어떤 사진이든 50KB 이하로 줄이는 실전 단계별 가이드입니다. 올바른 원본 고르기, 포맷 선택, 목표 달성 실패 시 해결 방법까지 정리했습니다. 업로드 전 원본 고르는 기준과 품질·크기 조절 순서를 단계별로 설명합니다.",
    readingMinutes: 7,
  },
  "image-size-50kb-vs-100kb-vs-200kb": {
    title: "50KB vs 100KB vs 200KB 이미지 크기 비교",
    description: "50KB, 100KB, 200KB 이미지의 화질 차이와 용도를 비교합니다. 어떤 크기를 선택해야 할지 1분 만에 결정하는 간단한 기준도 함께 정리했습니다. 사진·문서·프로필 등 용도별 적정 크기와 로딩 속도까지 비교합니다.",
    readingMinutes: 7,
  },
  "compress-image-to-100kb-guide": {
    title: "이미지 100KB로 줄이기 완벽 가이드",
    description: "이미지를 100KB로 압축하는 모든 것을 정리했습니다. 100KB가 최적 크기인 이유, 화질 유지 비결, 포맷 선택, 무료 압축 도구 활용법까지 알려드립니다. 이력서·블로그·이메일 제출에 알맞은 활용법도 안내합니다.",
    readingMinutes: 8,
  },
  "how-to-reduce-image-to-100kb": {
    title: "이미지 100KB로 줄이는 방법",
    description: "이력서, 포털, 블로그, 이메일용 사진을 100KB로 줄이는 단계별 가이드입니다. 포맷 선택, 일괄 처리 요령, 문제 해결 방법까지 정리했습니다. 원본 선택부터 품질 설정, 여러 장 일괄 처리까지 실전 중심으로 다룹니다.",
    readingMinutes: 7,
  },
  "100kb-image-quality-formats": {
    title: "100KB 이미지 화질 비교: JPG vs PNG vs WebP",
    description: "100KB에서 어떤 포맷이 가장 좋아 보일까요? 사진, 그래픽, 글자용 JPG vs PNG vs WebP 화질을 자세히 비교하고 실전 선택 기준을 정리했습니다. 용도마다 달라지는 최적 포맷과 품질 설정 요령도 담았습니다.",
    readingMinutes: 8,
  },
  "compress-image-to-200kb-guide": {
    title: "이미지 200KB로 줄이기 완벽 가이드",
    description: "이미지를 200KB로 압축하는 완벽 가이드입니다. 화질, 포맷, 쇼핑몰·블로그 활용법, 목표 용량에 정확히 맞추는 무료 브라우저 도구를 정리했습니다. 화질 유지 비결과 목표 용량에 맞추는 순서를 안내합니다. 쇼핑몰·블로그 제출에 알맞은 설정도 안내합니다.",
    readingMinutes: 7,
  },
  "how-to-compress-image-to-200kb": {
    title: "이미지 200KB로 압축하는 방법",
    description: "블로그, 쇼핑몰, 포털용 사진을 200KB로 압축하는 단계별 가이드입니다. 포맷 선택, 일괄 처리 요령, 목표 달성 실패 시 해결 방법을 정리했습니다. 원본 고르기부터 품질 설정까지 순서대로 설명합니다. 포털 제출 전 화질과 용량을 미리 확인하는 요령도 다룹니다.",
    readingMinutes: 7,
  },
  "200kb-image-job-portal-settings": {
    title: "취업 포털·양식용 200KB 이미지 준비법",
    description: "취업 포털, 지원서, 양식용 200KB 이미지를 준비하는 방법입니다. 증명사진 규정, 문서 스캔, 포맷 선택, 첫 시도에 통과하는 설정을 정리했습니다. 스캔 문서 준비법과 품질·크기 설정 기준을 자세히 안내합니다. 제출 전 미리 확인하는 체크리스트도 함께 안내합니다.",
    readingMinutes: 7,
  },
  "compress-image-to-500kb-guide": {
    title: "이미지 500KB로 줄이기 완벽 가이드",
    description: "이미지를 500KB로 압축하는 완벽 가이드입니다. 원본에 가까운 화질, 포트폴리오, 발표 자료 활용법, 무료 브라우저 도구를 정리했습니다. 원본에 가까운 화질을 유지하는 압축 순서도 안내합니다. 포트폴리오와 발표 자료에 알맞은 품질 설정과 활용법도 안내합니다.",
    readingMinutes: 8,
  },
  "how-to-compress-image-to-500kb": {
    title: "이미지 500KB로 압축하는 방법",
    description: "포트폴리오, 발표 자료, 갤러리용 사진을 500KB로 압축하는 단계별 가이드입니다. 포맷 선택, 일괄 처리 요령, 목표 달성 실패 시 해결 방법을 정리했습니다. 원본 선택부터 품질 설정까지 순서대로 설명합니다. 갤러리용 사진의 화질을 지키는 품질 설정법도 다룹니다.",
    readingMinutes: 8,
  },
  "500kb-vs-1mb-image-quality": {
    title: "500KB vs 1MB 이미지 화질 비교: 웹과 인쇄",
    description: "500KB와 1MB 이미지를 비교합니다. 눈에 보이는 화질 차이, 로딩 속도, 각 크기가 이기는 경우, 웹과 인쇄용 선택 기준을 정리했습니다. 포트폴리오와 웹 게시 등 용도별 적정 크기를 비교합니다. 용도별로 알맞은 크기를 고르는 기준도 함께 안내합니다.",
    readingMinutes: 7,
  },
  "bulk-image-compressor-guide": {
    title: "대량 이미지 압축 완벽 가이드",
    description: "대량 이미지 압축의 모든 것을 정리했습니다. 일괄 프리셋, ZIP 내보내기, 품질 설정, 수십 장의 이미지를 한 번에 압축하는 방법을 알려드립니다. 블로그·쇼핑몰·앨범용 프리셋 활용법과 품질 확인 요령도 담았습니다.",
    readingMinutes: 8,
  },
  "how-to-compress-multiple-images-at-once": {
    title: "여러 이미지 한 번에 압축하는 방법",
    description: "프리셋, 진행률 표시줄, ZIP 한 번 다운로드로 수십 장의 이미지를 한 번에 압축하는 단계별 가이드입니다. 블로그, 쇼핑몰, 앨범에 적용됩니다. 업로드부터 프리셋 선택, 진행률 확인까지 전 과정을 안내합니다. 대량 작업을 빠르게 끝내는 요령을 단계별로 안내합니다.",
    readingMinutes: 7,
  },
  "batch-image-compression-best-practices": {
    title: "일괄 압축 모범 사례: ZIP 과정과 요령",
    description: "일괄 이미지 압축의 모범 사례입니다. 프리셋, 화질 확인, ZIP 정리, 이름 짓기, 블로그·쇼핑몰·팀용 작업 방식을 정리했습니다. 원본 보관과 파일명 규칙, 화질 샘플 확인까지 반복 업무 요령을 담았습니다. 반복 업무에 바로 쓸 수 있는 정리 요령을 담았습니다.",
    readingMinutes: 8,
  },
  "target-file-size-compressor-guide": {
    title: "목표 파일 크기 압축 완벽 가이드",
    description: "이미지를 정확한 KB·MB 크기로 압축하는 완벽 가이드입니다. 맞춤 목표, 이진 탐색, 크기 조절, 언제 써야 하는지 정리했습니다. 원하는 숫자를 직접 입력해 정확한 크기에 맞추는 방법을 설명합니다. 포털 상한에 정확히 맞추는 활용법도 함께 안내합니다.",
    readingMinutes: 8,
  },
  "how-to-compress-image-to-exact-kb": {
    title: "이미지를 정확한 KB 크기로 압축하는 방법",
    description: "특이한 포털 상한에 맞춰 어떤 이미지든 정확한 KB 크기로 압축하는 단계별 가이드입니다. 숫자를 입력하고 탐색을 실행한 뒤 결과를 확인하세요. 탐색 실행과 결과 확인 순서까지 안내합니다. 포털 상한에 맞춰 숫자를 입력하고 결과를 확인하는 순서를 단계별로 안내합니다.",
    readingMinutes: 7,
  },
  "exact-kb-target-binary-quality-search": {
    title: "정확한 KB 목표: 이진 품질 탐색이란?",
    description: "이진 품질 탐색이 어떤 정확한 KB 크기에서도 가장 선명한 이미지를 찾는 방법입니다. 알고리즘, 단계, 크기 조절, 한계를 정리했습니다. 품질 값을 절반씩 좁혀가며 선명한 결과를 찾는 원리를 설명합니다. 선명한 결과를 찾는 탐색 단계와 한계도 함께 설명합니다.",
    readingMinutes: 7,
  },
  "web-image-optimizer-guide": {
    title: "웹 이미지 최적화 완벽 가이드",
    description: "웹 이미지 최적화 도구의 완벽 가이드입니다. 대표·상품·카드 이미지용 프리셋, Core Web Vitals, 바로 붙여넣을 수 있는 HTML을 정리했습니다. 올바른 픽셀 크기와 지연 로딩 설정, HTML 예시까지 한 번에 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-optimize-images-for-website-speed": {
    title: "웹사이트 속도용 이미지 최적화 방법",
    description: "프리셋, 올바른 픽셀 크기, 지연 로딩, 바로 붙여넣을 수 있는 HTML 태그로 웹사이트 속도용 이미지를 최적화하는 단계별 가이드입니다. 압축과 지연 로딩을 적용해 페이지 로딩 속도를 높이는 방법을 안내합니다. 페이지 속도를 높이는 실전 방법을 단계별로 안내합니다.",
    readingMinutes: 7,
  },
  "image-optimization-core-web-vitals": {
    title: "이미지 최적화와 Core Web Vitals: LCP와 파일 크기",
    description: "이미지 최적화가 Core Web Vitals를 개선하는 방법입니다. LCP, CLS, INP가 무엇인지, 느린 페이지를 고치는 실전 방법, 압축과 리사이즈로 점수를 올리는 요령까지 정리했습니다. 바로 적용할 수 있는 방법 위주로 담았습니다.",
    readingMinutes: 8,
  },
  "gif-compressor-guide": {
    title: "GIF 압축 완벽 가이드",
    description: "움직이는 GIF를 압축하는 완벽 가이드입니다. 프리셋, 팔레트, 프레임 속도, 크기 조절, GIF를 망가뜨리지 않고 줄이는 방법을 정리했습니다. 디스코드·슬랙·웹·채팅용 GIF를 줄이는 조절법을 다룹니다. 채팅과 웹사이트용 GIF를 줄이는 방법을 함께 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-compress-gif": {
    title: "GIF 압축하는 방법",
    description: "디스코드, 슬랙, 웹사이트, 채팅용 움직이는 GIF를 압축하는 단계별 가이드입니다. 프리셋, 팔레트, 크기, 고집 센 파일 해결 방법을 정리했습니다. 업로드부터 설정, 미리보기 확인까지 순서대로 안내합니다. 고집 센 파일의 해결 방법까지 단계별로 정리했습니다.",
    readingMinutes: 7,
  },
  "gif-vs-webp-vs-mp4-animated": {
    title: "GIF vs WebP vs MP4: 움직이는 이미지 비교",
    description: "움직이는 GIF, WebP, MP4를 비교합니다. 파일 크기, 화질, 호환성, 웹 애니메이션에 각 포맷을 써야 할 때를 정리했습니다. 용도와 재생 환경에 맞는 포맷 선택 기준을 자세히 다룹니다. 웹 애니메이션에 알맞은 포맷을 고르는 기준도 함께 정리했습니다.",
    readingMinutes: 7,
  },
  "image-converter-guide": {
    title: "이미지 변환 완전 가이드: JPG·PNG·WebP·HEIC 한 번에 바꾸는 법",
    description: "이미지 형식을 JPG, PNG, WebP, HEIC, SVG, BMP, GIF, AVIF로 브라우저에서 바꾸는 방법. 포맷 선택, 화질 설정, 투명도, 대량 변환 팁까지 한 번에 정리했습니다. 투명도와 화질 설정 요령까지 바로 쓸 수 있게 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-convert-image-format": {
    title: "이미지 형식 변환 방법: JPG·PNG·WebP로 바꾸는 6단계",
    description: "이미지를 JPG, PNG, WebP로 바꾸는 6단계를 정리했습니다. 업로드하고 형식을 고르고 화질을 설정한 뒤 미리보고 다운로드하는 방법까지, 브라우저에서 1분이면 끝납니다. 용도별 알맞은 포맷 고르는 기준도 함께 안내합니다.",
    readingMinutes: 8,
  },
  "image-format-conversion-quality-loss": {
    title: "이미지 변환과 화질 저하: 언제 변환해야 손해가 없을까",
    description: "이미지를 변환하면 화질이 떨어질까요? 손실 압축과 무손실 형식의 차이, 반복 변환이 사진을 망치는 이유, 화질을 지키는 설정을 알기 쉽게 설명합니다. 원본 보관과 적정 품질 설정 요령도 함께 다룹니다. 화질을 지키며 변환하는 실전 방법도 함께 설명합니다.",
    readingMinutes: 8,
  },
  "image-to-pdf-guide": {
    title: "이미지 PDF 변환 완전 가이드: A4·여백·화질까지 한 번에",
    description: "사진과 스캔본을 브라우저에서 하나의 PDF 문서로 만드는 방법. 용지 크기, 여백, 방향, 화질, 페이지 순서까지 알기 쉽게 정리했습니다. 여러 장을 한 문서로 묶는 순서와 공유용 PDF 만들기까지 다룹니다. 스캔본 정리와 공유용 PDF 만들기 요령도 함께 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-convert-image-to-pdf": {
    title: "이미지를 PDF로 변환하는 방법: 사진·스캔본을 문서로 만드는 7단계",
    description: "사진 한 장이나 한 묶음을 몇 분 만에 PDF로 바꾸는 방법. 이미지를 올리고 페이지를 정렬한 뒤 용지를 고르고 문서를 다운로드하세요. 용지 크기와 방향, 화질 설정을 고르는 과정을 단계별로 안내합니다. 깔끔한 PDF 문서를 만드는 과정을 단계별로 안내합니다.",
    readingMinutes: 8,
  },
  "jpg-to-pdf-vs-png-to-pdf": {
    title: "JPG를 PDF로 vs PNG를 PDF로: 문서용 최적 설정 비교",
    description: "PDF에 JPG 이미지를 넣을까요, PNG 이미지를 넣을까요? 파일 크기, 글자 선명도, 투명도, 문서 종류별 최적 설정을 비교했습니다. 사진·스캔 문서·그래픽별 최적 설정과 화질·용량 균형을 다룹니다. 문서 종류별 최적 설정과 투명도 처리법을 비교해 정리했습니다.",
    readingMinutes: 8,
  },
  "bulk-image-converter-guide": {
    title: "대량 이미지 변환 완전 가이드: 폴더 통째로 한 번에 바꾸는 법",
    description: "이미지 폴더 통째로 하나의 형식으로 한 번에 변환하는 방법. 섞인 입력 형식, 묶음 설정, ZIP 내보내기, 파일명까지 완전 정리했습니다. 폴더 통째로 변환하는 업로드 요령과 대량 변환 전 과정을 다룹니다. 폴더 통째로 변환하는 전 과정을 완전 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-convert-multiple-images": {
    title: "여러 이미지를 한 번에 변환하는 방법: 폴더 통째로 JPG·PNG·WebP로",
    description: "이미지 폴더 통째로 JPG, PNG, WebP 중 하나로 한 번에 변환하는 방법. 업로드하고 형식을 고르고 화질을 한 번 설정한 뒤 ZIP 하나로 다운로드하세요. 섞인 입력 형식 처리와 묶음 화질 설정까지 안내합니다.",
    readingMinutes: 8,
  },
  "batch-image-conversion-workflow": {
    title: "대량 이미지 변환 작업 흐름: 폴더 정리와 파일명 규칙",
    description: "수백 장의 이미지를 변환하는 반복 가능한 작업 흐름. 폴더 구성, 파일명 규칙, 화질 검사, 원본 보관까지 — 팀과 웹사이트를 위한 정리법입니다. 반복 작업에 바로 쓸 수 있는 구성과 검사 요령을 담았습니다. 팀과 웹사이트를 위한 정리법도 함께 다룹니다.",
    readingMinutes: 8,
  },
  "heic-to-jpg-guide": {
    title: "HEIC를 JPG로 변환 완전 가이드: 아이폰 사진, 화질·라이브포토까지",
    description: "아이폰 HEIC 사진을 브라우저에서 JPG로 변환하는 방법. HEIC이 왜 생겼는지, 디코딩 원리, 화질, 라이브포토는 어떻게 되는지 정리했습니다. 아이폰 사진의 호환성 문제와 화질 유지법을 함께 다룹니다. 아이폰 사진의 호환성 문제를 브라우저에서 해결하는 방법을 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-convert-heic-to-jpg": {
    title: "HEIC를 JPG로 변환하는 방법: 아이폰에서 몇 번의 탭으로 끝내기",
    description: "아이폰 HEIC 사진을 몇 번의 탭으로 JPG로 변환하는 방법. 업로드하고 미리보기를 확인한 뒤 다운로드하세요. 어떤 기기에서든 설치 없이 가능합니다. 업로드·미리보기·다운로드 과정과 화질 확인 요령을 안내합니다. 화질 확인 요령도 함께 안내합니다.",
    readingMinutes: 7,
  },
  "heic-vs-jpg": {
    title: "HEIC vs JPG: 호환성·화질·파일 크기 비교",
    description: "HEIC와 JPG을 솔직하게 비교했습니다. 파일 크기, 화질, 호환성, 그리고 사진·서식·웹에 어떤 형식을 써야 하는지 정리했습니다. 아이폰 사진과 일반 사진의 용도별 알맞은 선택 기준을 다룹니다. 제출·공유·웹 게시별 알맞은 선택 기준도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "jpg-to-png-guide": {
    title: "JPG를 PNG로 변환 완전 가이드: 화질은 좋아지지 않는다?",
    description: "JPG 사진을 PNG로 올바르게 변환하는 방법. 언제 도움이 되고, 파일이 왜 커지는지, 편집·글자·그래픽에 PNG을 쓰는 법을 정리했습니다. 편집·글자·그래픽에 PNG이 알맞은 경우와 투명도 활용법도 다룹니다. 투명도 활용법도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "how-to-convert-jpg-to-png": {
    title: "JPG를 PNG로 변환하는 방법: 5단계로 끝내는 무손실 작업본 만들기",
    description: "JPG 이미지를 몇 초 만에 PNG로 변환하세요. 파일 한 장이나 20장 묶음까지 가능합니다. 업로드하고 변환한 뒤 비교하고 다운로드하세요. 브라우저에서 전부 됩니다. 투명도가 없는 JPG의 한계와 변환 후 활용법도 안내합니다.",
    readingMinutes: 8,
  },
  "jpg-vs-png-transparency": {
    title: "JPG vs PNG: 투명도가 중요해지는 순간",
    description: "JPG와 PNG을 비교했습니다. 투명도, 파일 크기, 글자 선명도, 사진까지. 각 형식이 언제 이기는지, 변환으로는 투명도를 만들 수 없는 이유를 설명합니다. 사진·로고·스크린샷별 알맞은 포맷 선택 기준도 다룹니다.",
    readingMinutes: 7,
  },
  "png-to-jpg-guide": {
    title: "PNG를 JPG로 변환 완전 가이드: 스크린샷을 10분의 1로 줄이는 법",
    description: "PNG 스크린샷과 사진을 JPG로 변환해 크기를 크게 줄이는 방법. 매트 색상, 화질 설정, 묶음 변환, 가장 잘 맞는 용도를 설명합니다. 스크린샷과 사진의 용량을 줄이는 매트 색상 선택법도 다룹니다. 스크린샷과 사진의 용량을 줄이는 매트 색상 선택법과 알맞은 용도를 함께 설명합니다.",
    readingMinutes: 8,
  },
  "how-to-convert-png-to-jpg": {
    title: "PNG를 JPG로 변환하는 방법: 매트 색상·화질까지 6단계",
    description: "PNG 스크린샷과 이미지를 6단계로 JPG로 변환하세요. 매트 색상을 고르고 화질을 설정한 뒤 미리보고 다운로드하세요. 파일 한 장이나 묶음까지 가능합니다. 투명 배경 처리와 매트 색상 고르기 과정을 안내합니다. 파일 한 장이나 묶음 변환 과정도 안내합니다.",
    readingMinutes: 7,
  },
  "png-to-jpg-file-size-quality": {
    title: "PNG를 JPG로: 파일 크기 절약과 화질 절충",
    description: "PNG를 JPG로 바꾸면 실제로 얼마나 작아질까요? 이미지 종류별 실제 절약량, 글자를 지키는 화질 설정, 교환이 값어치가 없을 때를 정리했습니다. 스크린샷·그래픽·사진별 절약량과 화질 설정 기준을 다룹니다. 교환이 값어치가 없을 때도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "jpg-to-webp-guide": {
    title: "JPG를 WebP로 변환 완전 가이드: 웹사이트를 빠르게 만드는 법",
    description: "웹사이트를 빠르게 하려고 JPG 사진을 WebP로 변환하는 방법. 얼마나 작아지는지, 어떤 화질을 써야 하는지, 브라우저 지원, JPG을 유지해야 할 때를 정리했습니다. 사진·상품 이미지의 절약 효과와 화질 설정을 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-convert-jpg-to-webp": {
    title: "JPG를 WebP로 변환하는 방법: 웹사이트 사진 6단계로 줄이기",
    description: "JPG 사진을 몇 단계로 WebP로 변환하세요. 업로드하고 화질을 설정한 뒤 절약량을 미리보고 다운로드하세요. 사진 한 장이나 폴더 통째로 가능합니다. 웹사이트·블로그용 사진의 절약 효과를 미리보는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "jpg-vs-webp": {
    title: "JPG vs WebP: 파일 크기·화질·브라우저 지원 비교",
    description: "JPG와 WebP을 정면으로 비교했습니다. 파일 크기 절약, 화질, 투명도, 브라우저 지원은 물론, 사진·그래픽·웹사이트마다 어떤 형식을 써야 하는지까지 정리했습니다. 실제 파일로 측정한 크기 차이와 각 형식이 빛나는 장면도 함께 살펴봅니다.",
    readingMinutes: 8,
  },
  "webp-to-jpg-guide": {
    title: "WebP를 JPG로 변환하는 방법 완벽 가이드",
    description: "WebP 이미지를 JPG로 변환해 어디서든 열 수 있게 만드는 방법. 투명 배경 매트 색상, 화질 설정, 일괄 변환, JPG가 WebP보다 나은 경우까지 정리했습니다. 양식·인쇄·이메일 제출 등 JPG가 필요한 경우를 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-convert-webp-to-jpg": {
    title: "WebP를 JPG로 변환하는 방법",
    description: "WebP 이미지를 JPG로 몇 단계 만에 변환하는 방법. 업로드하고, 매트 색상을 고르고, 화질을 정한 뒤 다운로드하세요. 파일 하나든 여러 개든 가능합니다. 오래된 프로그램과 프린터에서도 열리는 JPG로 바꾸는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "webp-to-jpg-compatibility": {
    title: "WebP를 JPG로: 호환성이 압축보다 중요할 때",
    description: "WebP는 더 작지만 JPG는 어디서든 열립니다. 양식, 프린터, 이메일, 오래된 소프트웨어처럼 호환성이 용량보다 중요해지는 경우를 정리했습니다. WebP가 열리지 않을 때 JPG로 바꾸는 기준을 다룹니다. 호환성이 용량보다 중요해지는 경우도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "png-to-webp-guide": {
    title: "PNG를 WebP로 변환하는 방법 완벽 가이드",
    description: "PNG 이미지를 WebP로 변환해 투명도는 유지하면서 파일 크기를 크게 줄이는 방법. 로고, 아이콘, 스크린샷, 히어로 이미지의 설정과 활용법을 정리했습니다. 투명도를 유지하며 용량을 줄이는 설정을 다룹니다. 히어로 이미지의 설정과 활용법도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "how-to-convert-png-to-webp": {
    title: "PNG를 WebP로 변환하는 방법",
    description: "PNG 이미지를 WebP로 몇 단계 만에 변환하는 방법. 업로드하고, 화질을 정하고, 투명도를 확인한 뒤 다운로드하세요. 로고 하나든 아이콘 세트든 가능합니다. 웹사이트용 로고와 아이콘의 투명도 확인 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "png-vs-webp": {
    title: "PNG vs WebP: 투명도와 파일 크기 비교",
    description: "PNG와 WebP를 비교했습니다. 투명도, 파일 크기, 글자 선명도, 브라우저 지원, 그리고 로고, 스크린샷, 사진에 어떤 포맷을 써야 하는지 정리했습니다. 용도별 알맞은 포맷과 용량·화질 차이까지 비교합니다. 로고·스크린샷·사진별 선택 기준도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "webp-to-png-guide": {
    title: "WebP를 PNG로 변환하는 방법 완벽 가이드",
    description: "WebP 이미지를 PNG로 화질 손실 없이 변환하는 방법. 투명도, 편집, 호환성, 그리고 PNG가 알맞은 경우를 정리했습니다. 편집 프로그램과 오피스, 인쇄에서 PNG가 필요한 경우를 다룹니다. 편집과 인쇄에서 PNG가 필요한 경우와 투명도 유지법을 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "how-to-convert-webp-to-png": {
    title: "WebP를 PNG로 변환하는 방법",
    description: "WebP 이미지를 PNG로 몇 단계 만에 변환하는 방법. 업로드하고, 변환하고, 투명도를 확인한 뒤 다운로드하세요. 파일 하나든 여러 개든 가능합니다. 포토샵·피그마 등 편집 도구에서 쓸 PNG로 바꾸는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "webp-to-png-editing-compatibility": {
    title: "WebP를 PNG로: 편집, 투명도, 호환성",
    description: "디자이너가 WebP를 PNG로 변환하는 이유. 포토샵, 피그마, 오피스, 인쇄와 함께하는 편집 작업 흐름, 투명도, 호환성을 정리했습니다. PNG가 필요한 이유와 투명도 처리, 호환성 확보 방법을 다룹니다. 포토샵·피그마 작업 흐름에서 PNG가 필요한 이유도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "svg-to-png-guide": {
    title: "SVG를 PNG로 변환하는 방법 완벽 가이드",
    description: "SVG 로고와 아이콘을 원하는 크기의 PNG로 변환하는 방법. 배율, 투명도, 폰트, 그라데이션, 한계까지 모두 설명했습니다. 로고·아이콘을 원하는 크기로 또렷하게 바꾸는 배율 설정법을 다룹니다. 로고·아이콘을 또렷하게 바꾸는 배율 설정법과 한계도 함께 설명했습니다.",
    readingMinutes: 8,
  },
  "how-to-convert-svg-to-png": {
    title: "SVG를 PNG로 변환하는 방법",
    description: "SVG 로고와 아이콘을 필요한 크기의 PNG로 변환하는 방법. 업로드하고, 배율을 고르고, 결과를 확인한 뒤 다운로드하세요. 파일 하나든 아이콘 팩이든 가능합니다. 웹사이트·앱·인쇄용 크기를 고르는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "svg-vs-png-vector-raster": {
    title: "SVG vs PNG: 벡터 vs 래스터 설명",
    description: "SVG와 PNG을 비교했습니다. 벡터와 래스터, 크기 조정, 파일 크기, 투명도, 브라우저 지원, 그리고 각 포맷을 써야 하는 경우를 정리했습니다. 로고·아이콘·사진별 알맞은 포맷과 크기 조정 기준을 다룹니다. 각 포맷을 써야 하는 경우도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "avif-to-jpg-guide": {
    title: "AVIF를 JPG로 변환하는 방법 완벽 가이드",
    description: "최신 웹사이트의 AVIF 이미지를 JPG로 변환하는 방법. AVIF가 무엇인지, 앱이 거부하는 이유, 화질 설정, 투명도 처리까지 정리했습니다. 최신 웹사이트 이미지의 호환성 문제와 AVIF 특징을 다룹니다. 최신 웹사이트 이미지의 호환성 문제도 함께 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-convert-avif-to-jpg": {
    title: "AVIF를 JPG로 변환하는 방법",
    description: "AVIF 이미지를 JPG로 몇 단계 만에 변환하는 방법. 업로드하고, 화질을 정하고, 투명도를 처리한 뒤 다운로드하세요. 파일 하나든 여러 개든 가능합니다. 앱에서 열리지 않는 AVIF를 어디서든 열리는 JPG로 바꾸는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "avif-vs-jpg": {
    title: "AVIF vs JPG: 차세대 포맷 vs 보편적 포맷",
    description: "AVIF와 JPG을 비교했습니다. 파일 크기, 화질, HDR, 투명도, 브라우저 지원, 그리고 웹과 그 너머에서 어떤 포맷을 써야 하는지 정리했습니다. 웹 게시와 공유, 인쇄 등 용도별 알맞은 포맷을 비교합니다. 웹과 그 너머에서 알맞은 포맷을 고르는 기준도 다룹니다.",
    readingMinutes: 8,
  },
  "bmp-to-jpg-guide": {
    title: "BMP를 JPG로 변환하는 방법 완벽 가이드",
    description: "BMP 비트맵을 JPG로 변환해 90% 이상 줄이는 방법. BMP 파일이 큰 이유, 화질 설정, 스캔본, 일괄 변환까지 정리했습니다. 오래된 스캔본과 비트맵 파일의 용량을 줄이는 화질 설정법을 다룹니다. 오래된 스캔본과 비트맵의 일괄 변환 요령도 함께 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-convert-bmp-to-jpg": {
    title: "BMP를 JPG로 변환하는 방법",
    description: "BMP 비트맵을 JPG로 몇 단계 만에 변환하는 방법. 업로드하고, 화질을 정하고, 절약 효과를 미리 본 뒤 다운로드하세요. 파일 하나든 스캔 폴더든 가능합니다. 스캔 폴더 통째로 변환하는 과정과 절약 효과 확인법을 안내합니다.",
    readingMinutes: 7,
  },
  "bmp-vs-jpg-file-size": {
    title: "BMP vs JPG: BMP 파일이 큰 이유",
    description: "BMP와 JPG을 비교했습니다. BMP 파일이 거대한 이유, JPG이 얼마나 절약해 주는지, 화질, 색상 깊이, 그리고 각 포맷이 여전히 어울리는 경우를 정리했습니다. 비트맵이 거대한 이유와 변환 시 절약량을 비교합니다.",
    readingMinutes: 7,
  },
  "rotate-flip-image-guide": {
    title: "이미지 회전·뒤집기 완전 가이드",
    description: "이미지 회전과 뒤집기를 온라인에서 하는 방법을 정리했습니다. 90도·180도 회전, 원하는 각도 조절, 뒤집힌 셀카 교정, EXIF 방향 문제 해결까지 브라우저에서 바로 할 수 있습니다. 셀카 뒤집기와 문서 방향 교정법을 함께 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-rotate-flip-image": {
    title: "이미지 회전·뒤집기 방법: 90도·180도·기울기 교정",
    description: "이미지 회전과 뒤집기를 몇 초 만에 하는 방법입니다. 업로드하고 90도나 180도, 원하는 각도를 고르고, 좌우·상하 뒤집기를 적용한 뒤 미리보고 내려받는 과정을 단계별로 정리했습니다. 뒤집힌 셀카와 옆으로 누운 사진을 바로잡는 순서도 안내합니다.",
    readingMinutes: 7,
  },
  "image-orientation-exif-rotation": {
    title: "이미지 방향이 뒤집히는 이유: EXIF 회전 문제 완벽 정리",
    description: "같은 사진이 핸드폰에서는 멀쩡한데 다른 곳에서는 왜 옆으로 보일까요? EXIF 방향 정보가 무엇인지, 왜 문제가 생기는지, 어떻게 영구적으로 고치는지 설명합니다. 카메라와 앱마다 다르게 보이는 이유와 확인 요령도 다룹니다.",
    readingMinutes: 8,
  },
  "image-cropper-guide": {
    title: "이미지 자르기 완전 가이드",
    description: "이미지 자르기를 온라인에서 하는 방법을 정리했습니다. 비율, 삼분할 구도, 확대, 화질 설정부터 프로필·배너·인쇄용 자르기까지 다룹니다. 프로필·배너·인쇄용 자르기에 알맞은 비율과 구도 설정법을 함께 다룹니다. 프로필·배너·인쇄용 자르기 방법도 함께 다룹니다.",
    readingMinutes: 7,
  },
  "how-to-crop-image": {
    title: "이미지 자르는 방법: 비율·구도·저장까지",
    description: "이미지 자르기를 온라인에서 몇 초 만에 하는 방법입니다. 업로드하고, 선택 상자를 끌고, 비율을 고르고, 치수를 확인한 뒤, 깔끔하게 자른 이미지를 내려받습니다. SNS 프로필과 배너, 인쇄용으로 알맞은 비율을 고르는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "image-crop-ratios-explained": {
    title: "이미지 자르기 비율 완벽 정리: 1:1·4:3·16:9·세로 비율",
    description: "자르기 비율은 무슨 뜻이고, 어떤 비율을 골라야 할까요? 프로필·인쇄·SNS용 1:1, 4:3, 3:2, 16:9 비율과 원하는 비율을 설명합니다. 인스타그램·유튜브·인쇄 등 용도별 적정 비율과 직접 입력법도 다룹니다.",
    readingMinutes: 7,
  },
  "image-watermark-guide": {
    title: "이미지 워터마크 완전 가이드",
    description: "이미지 워터마크를 온라인에서 넣는 방법을 정리했습니다. 글자·로고 워터마크, 반복 패턴, 투명도, 위치, 사진을 망치지 않고 보호하는 방법까지 다룹니다. 사진작가와 쇼핑몰, 크리에이터를 위한 배치와 투명도 활용법을 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-add-watermark-to-image": {
    title: "이미지에 워터마크 넣는 방법",
    description: "이미지에 워터마크를 몇 분 만에 넣는 방법입니다. 글자나 로고, 위치, 투명도, 크기, 반복 패턴을 정하고 깔끔하게 저장하는 과정을 정리했습니다. 위치·투명도·크기를 정하고 반복 패턴을 적용해 사진을 보호하는 과정을 다룹니다.",
    readingMinutes: 7,
  },
  "watermark-best-practices": {
    title: "워터마크 잘 넣는 법: 위치·투명도·브랜딩 실전 가이드",
    description: "사진에 워터마크를 제대로 넣는 방법을 정리했습니다. 위치 규칙, 투명도 범위, 크기, 색상, 반복 패턴, 이미지를 망치지 않는 브랜딩까지 다룹니다. 눈에 거슬리지 않으면서도 지우기 어려운 배치와 색상·크기 선택법을 다룹니다.",
    readingMinutes: 7,
  },
  "blur-pixelate-image-guide": {
    title: "이미지 블러·픽셀화 완전 가이드",
    description: "이미지 블러와 픽셀화를 온라인에서 하는 방법을 정리했습니다. 부드러운 블러나 모자이크 픽셀화로 얼굴·글자·디테일을 가리는 방법, 브러시와 전체 이미지 모드까지 다룹니다. 얼굴·차량 번호판·개인정보를 가리는 브러시 사용법을 다룹니다.",
    readingMinutes: 7,
  },
  "how-to-blur-pixelate-image": {
    title: "이미지 블러·모자이크 처리하는 방법",
    description: "이미지를 몇 분 만에 블러나 모자이크로 처리하는 방법입니다. 브러시로 얼굴과 글자를 칠하거나 이미지 전체를 흐리게 한 뒤, 깔끔하게 가려진 복사본을 저장합니다. 공유 전 개인정보를 안전하게 가리는 과정을 단계별로 안내합니다.",
    readingMinutes: 7,
  },
  "blur-vs-pixelate-image": {
    title: "블러 vs 모자이크: 얼굴·글자 가리기 비교",
    description: "블러와 모자이크 중 어느 쪽이 좋을까요? 얼굴, 글자, 숫자를 숨기는 방법, 어느 쪽이 더 안전한지, 제대로 가리려면 언제 함께 써야 하는지 비교합니다. 얼굴·글자·숫자 가리기에 알맞은 방식과 안전성 차이를 비교합니다.",
    readingMinutes: 7,
  },
  "add-text-to-image-guide": {
    title: "이미지에 텍스트 넣는 방법 완전 가이드",
    description: "이미지에 텍스트를 온라인에서 넣는 방법을 정리했습니다. 캡션, 제목, 밈, 인용구, 주석을 폰트, 색상, 외곽선, 레이어 위치 조절과 함께 다룹니다. SNS 게시물과 썸네일, 밈, 인용 카드에 알맞은 폰트 선택법을 다룹니다.",
    readingMinutes: 7,
  },
  "how-to-add-text-to-image": {
    title: "이미지에 글자 넣는 방법: 자막·밈·라벨까지",
    description: "이미지에 글자를 몇 분 만에 넣는 방법입니다. 업로드하고, 캡션을 입력하고, 폰트와 크기를 고르고, 색상과 외곽선을 정하고, 레이어를 배치한 뒤 내려받습니다. 캡션과 제목을 넣고 폰트·색상·외곽선을 정해 저장하는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "text-on-images-readability-tips": {
    title: "이미지 위 글자 가독성 높이는 법: 폰트·대비·배치",
    description: "이미지 위 글자를 읽히게 만드는 방법을 정리했습니다. 폰트 선택, 크기 규칙, 대비, 외곽선, 그림자, 배경 패널, 작은 화면 테스트까지 다룹니다. 썸네일과 배너, SNS 카드에서 글자가 잘 보이게 만드는 대비 활용법을 다룹니다.",
    readingMinutes: 7,
  },
  "image-border-generator-guide": {
    title: "이미지 테두리 넣기 완전 가이드",
    description: "이미지에 테두리를 온라인에서 넣는 방법을 정리했습니다. 단색, 폴라로이드, 그라데이션 글로우 프레임, 테두리 크기, 모서리 둥글기, 그림자, 색상까지 다룹니다. SNS·인쇄·상품 사진에 어울리는 프레임 선택법과 조절법을 다룹니다.",
    readingMinutes: 7,
  },
  "how-to-add-border-to-image": {
    title: "이미지에 테두리 넣는 방법",
    description: "이미지에 테두리를 몇 분 만에 넣는 방법입니다. 업로드하고, 스타일을 고르고, 크기와 색상을 정하고, 그림자를 더한 뒤 미리보고 액자가 있는 사진을 내려받습니다. 프로필과 상품 사진, 추억 사진에 어울리는 스타일을 고르는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "image-frames-borders-styles": {
    title: "이미지 액자·테두리 스타일 비교: SNS·인쇄·상품 사진",
    description: "어떤 액자 스타일이 내 사진에 맞을까요? 미니멀, 폴라로이드, 갤러리, 그라데이션 글로우, 레트로 액자를 SNS, 인쇄, 상품 사진용으로 비교합니다. 액자별 분위기와 SNS·인쇄·상품 사진에 맞는 선택 기준을 비교합니다.",
    readingMinutes: 7,
  },
  "round-image-corners-guide": {
    title: "이미지 모서리 둥글게: 완벽 가이드",
    description: "이미지 모서리 둥글게 만드는 방법을 알려드립니다. 모서리 반경, 모서리별 조절, 원형과 알약 모양, 투명·단색 채우기, 포맷 선택까지 정리했습니다. 프로필 사진과 카드, 버튼 이미지에 어울리는 반경 선택법을 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-round-image-corners": {
    title: "이미지 모서리 둥글게 만드는 방법",
    description: "이미지 모서리를 몇 분 만에 둥글게 만드는 방법: 업로드, 반경 설정, 모서리별 조절과 원형 단축키, 투명·단색 채우기 선택, 내려받기까지 정리했습니다. SNS 프로필과 웹사이트 카드용으로 반경을 정해 투명 PNG로 저장하는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "rounded-corners-vs-circle-crop": {
    title: "둥근 모서리 vs 원형 자르기: 프로필·카드 선택법",
    description: "둥근 모서리와 원형 자르기 중 어느 것이 좋을까요? 프로필 사진, 카드, 소셜 프로필에서 각 모양이 어떻게 작용하는지, 언제 어느 쪽을 쓰면 좋은지 정리했습니다. 각 모양이 주는 인상과 잘리는 영역, 알맞은 선택 기준을 다룹니다.",
    readingMinutes: 7,
  },
  "image-brightness-editor-guide": {
    title: "이미지 밝기 조절: 완벽 가이드",
    description: "이미지 밝기를 온라인에서 조절하는 방법: 밝기 슬라이더, 빠른 프리셋, 비교 모드, 사진을 하얗게 날리지 않고 어두운 사진 고치는 법까지 정리했습니다. 어둡게 찍힌 사진과 역광 사진을 살리는 슬라이더 조절법을 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-adjust-image-brightness": {
    title: "이미지 밝기 조절하는 방법",
    description: "이미지 밝기를 몇 분 만에 조절하는 방법: 업로드, 슬라이더 조절, 프리셋 사용, 이전·이후 비교, 깨끗하고 잘 비춰진 사진 내려받기까지 정리했습니다. 실내·야간·역광 사진을 밝게 고치는 과정을 단계별로 안내합니다.",
    readingMinutes: 8,
  },
  "brightness-vs-exposure-vs-contrast": {
    title: "밝기 vs 노출 vs 대비: 사진 보정 기초",
    description: "밝기와 노출, 대비를 설명합니다. 각 조절이 사진에 어떤 영향을 주는지, 서로 어떻게 작용하는지, 상황마다 어느 조절을 써야 하는지 정리했습니다. 어두운 사진과 뿌연 사진, 밋밋한 사진마다 알맞은 조절법을 다룹니다.",
    readingMinutes: 8,
  },
  "image-contrast-editor-guide": {
    title: "이미지 대비 조절: 완벽 가이드",
    description: "이미지 대비를 온라인에서 조절하는 방법: 대비 슬라이더, 빠른 프리셋, 비교 모드, 하이라이트를 날리지 않고 힘 있게 만드는 법까지 정리했습니다. 밋밋한 사진을 힘 있게 만드는 슬라이더 조절법과 하이라이트 보호 요령을 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-adjust-image-contrast": {
    title: "이미지 대비 조절하는 방법",
    description: "이미지 대비를 몇 분 만에 조절하는 방법: 업로드, 슬라이더 조절, 프리셋 사용, 하이라이트와 그림자 확인, 힘 있고 균형 잡힌 사진 내려받기까지 정리했습니다. 사진의 명암을 살려 선명하게 만드는 과정을 단계별로 안내합니다.",
    readingMinutes: 7,
  },
  "contrast-readability-text-over-photos": {
    title: "사진 위 글자 잘 보이게 하는 대비 활용법",
    description: "사진 위 글자를 읽을 수 있게 만드는 방법: 글자와 배경 사이의 대비, 어둡게 만들기, 오버레이와 패널, 작은 화면에서 테스트하는 법까지 정리했습니다. 썸네일·배너·카드 위 글자를 선명하게 만드는 오버레이 활용법을 다룹니다.",
    readingMinutes: 8,
  },
  "image-saturation-editor-guide": {
    title: "이미지 채도 조절: 완벽 가이드",
    description: "이미지 채도를 온라인에서 조절하는 방법: 채도 슬라이더, 프리셋, 차분한 색감과 흑백 느낌, 피부 톤, 자연스러운 색 보정까지 정리했습니다. 밋밋한 색을 살리고 과한 색을 차분하게 만드는 조절법을 다룹니다. 피부 톤을 지키는 자연스러운 색 보정법도 함께 정리했습니다.",
    readingMinutes: 8,
  },
  "how-to-adjust-image-saturation": {
    title: "이미지 채도 조절하는 방법",
    description: "이미지 채도를 몇 분 만에 조절하는 방법: 업로드, 슬라이더 조절, 프리셋 사용, 피부 톤 확인, 자연스럽고 생생한 색의 사진 내려받기까지 정리했습니다. 여행·음식·인물 사진의 색을 자연스럽게 살리는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "saturation-vs-vibrance": {
    title: "채도 vs 바이브런스: 자연스러운 색감 보정법",
    description: "채도와 바이브런스 중 어느 것을 써야 할까요? 각 조절이 색을 다루는 방식, 피부 톤을 보호하는 방법, 풀이 형광빛이 되지 않게 자연스럽고 생생한 색을 만드는 법을 정리했습니다. 인물·풍경·음식 사진마다 알맞은 조절법을 다룹니다.",
    readingMinutes: 7,
  },
  "image-filters-guide": {
    title: "사진 필터 완벽 가이드: 11가지 스타일",
    description: "사진 필터를 온라인에서 사용하는 방법: 빈티지와 세피아, 흑백 누아르, 따뜻한 색감과 차가운 색감 등 11가지 스타일과 강도 조절, 일관된 느낌 고르는 법까지 정리했습니다. 인물·풍경·음식·상품 사진에 맞는 스타일 고르기를 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-apply-photo-filters": {
    title: "사진 필터 적용하는 방법",
    description: "사진 필터를 몇 분 만에 적용하는 방법: 업로드, 11가지 스타일 살펴보기, 강도 설정, 원본과 비교, 스타일이 살아 있는 사진 내려받기까지 정리했습니다. SNS 피드와 프로필용으로 스타일을 살펴보고 강도를 정하는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "photo-filters-compared": {
    title: "사진 필터 비교: 일관된 분위기 고르기",
    description: "11가지 사진 필터를 모두 비교했습니다. 빈티지 vs 세피아, 흑백 vs 누아르, 따뜻한 색감 vs 차가운 색감, 인물·풍경·음식·상품 사진에 맞는 스타일까지 정리했습니다. 스타일별 분위기 차이와 용도별 알맞은 선택법을 비교합니다.",
    readingMinutes: 8,
  },
  "image-color-picker-guide": {
    title: "이미지 색상 추출 완전 가이드: 사진 속 색을 정확히 뽑는 법",
    description: "이미지에서 원하는 색을 스포이트로 정확히 뽑아보세요. HEX, RGB, HSL, CMYK 코드와 11×11 돋보기, 스와치 저장, CSS 내보내기까지 — 무료, 브라우저에서 바로. 디자인·개발 작업에 바로 쓰는 코드 확인과 내보내기 방법을 정리했습니다.",
    readingMinutes: 8,
  },
  "how-to-pick-color-from-image": {
    title: "이미지에서 색 뽑는 방법: 4단계로 정확한 색상 코드 찾기",
    description: "사진, 로고, 스크린샷에서 정확한 색을 4단계로 뽑아보세요. 돋보기로 조준하고, 스와치를 모으고, CSS로 내보내기까지 — 설치 없이, 업로드 없이. 로고·사진에서 브랜드 색을 뽑아 스와치로 모으는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "hex-vs-rgb-vs-hsl": {
    title: "HEX vs RGB vs HSL: 색상 코드 완벽 정리",
    description: "HEX, RGB, HSL, CMYK는 같은 색을 다르게 표현한 것입니다. 각 형식의 의미와 쓰는 상황, 서로 변환하는 방법을 정리했습니다. 웹·디자인·인쇄 작업에서 각 형식을 언제 쓰는지, 변환 방법과 코드 읽는 요령을 다룹니다.",
    readingMinutes: 8,
  },
  "image-dimensions-checker-guide": {
    title: "이미지 크기 확인 완전 가이드: 픽셀, 비율, 인쇄 크기까지",
    description: "이미지 크기를 대량으로 확인하세요. 너비, 높이, 화면비, 메가픽셀, 인쇄 크기, 투명도까지 — 최소값 검증과 CSV, JSON 내보내기 포함, 무료, 브라우저에서 바로. 웹사이트·인쇄·SNS 제출 전 크기를 확인하는 검증법을 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-check-image-dimensions": {
    title: "이미지 크기 확인하는 방법: 너비, 높이, 비율 5단계로 체크",
    description: "어떤 이미지든 너비, 높이, 화면비, 인쇄 크기를 확인하세요. 파일 하나든 묶음 전체든 5단계면 충분합니다. 마지막에 CSV와 JSON으로 내보내기까지. 제출·인쇄·웹 게시 전 파일 하나나 묶음 전체를 확인하는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "image-dimensions-vs-resolution-vs-file-size": {
    title: "이미지 크기 vs 해상도 vs 파일 크기: 헷갈리는 개념 정리",
    description: "크기, 해상도, 파일 크기는 서로 다른 세 가지 숫자입니다. 각각이 무엇을 뜻하고 어떻게 연결되는지, 웹과 인쇄, 소셜에서는 어느 것이 중요한지 배워보세요. 픽셀 수와 인쇄 크기, 파일 용량의 관계를 알기 쉽게 설명합니다.",
    readingMinutes: 7,
  },
  "image-dpi-changer-guide": {
    title: "이미지 DPI 변경 완전 가이드: 품질 손실 없이 DPI 바꾸기",
    description: "품질 손실 없이 이미지 DPI를 바꾸세요. 72부터 600 DPI까지 프리셋, 최대 2400까지 직접 입력, 대량 ZIP 내보내기, 검증된 DPI 배지까지 — 무료, 브라우저에서 바로. 인쇄·출판 제출용 프리셋과 검증된 DPI 배지 확인법을 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-change-image-dpi": {
    title: "이미지 DPI 변경하는 방법: 300 DPI로 바꾸는 4단계",
    description: "이미지 DPI를 72, 150, 300, 600으로 4단계 만에 바꾸세요. 최대 2400까지 직접 입력도 가능합니다. 대량 처리, ZIP 다운로드, 검증된 DPI 배지 포함. 인쇄소·출판사 제출용으로 알맞은 DPI를 골라 검증하는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "dpi-vs-ppi-print-web": {
    title: "DPI vs PPI: 인쇄와 웹에서 중요한 것",
    description: "DPI와 PPI는 비슷하게 들리지만 다른 것을 측정합니다. 인쇄에서는 어느 것이 중요하고, 화면에서는 어느 것이 중요한지, 72 대 300 DPI가 왜 모두를 헷갈리게 하는지 알아보세요. 인쇄물 크기와 화면 표시의 차이를 이해하고 알맞은 값을 고르는 기준을 다룹니다.",
    readingMinutes: 7,
  },
  "image-to-base64-guide": {
    title: "이미지 Base64 변환 완전 가이드: Data URL부터 CSS까지",
    description: "어떤 이미지든 Base64로 변환하세요. Data URL, 순수 문자열, HTML img 스니펫, CSS url() 출력까지. 33% 용량 증가와 삽입해야 할 때, 링크해야 할 때를 배워보세요. 작은 아이콘·로고를 HTML·CSS에 삽입하는 방법과 캐싱 주의점까지 다룹니다.",
    readingMinutes: 7,
  },
  "how-to-convert-image-to-base64": {
    title: "이미지를 Base64로 변환하는 방법: 4단계 실전 가이드",
    description: "이미지를 Base64로 4단계 만에 변환하세요. 업로드하고, Data URL, 순수, HTML, CSS 출력 중 고른 뒤 복사하거나 다운로드하면 됩니다. PNG, JPG, SVG, GIF, ICO 지원. 작은 아이콘용 출력 형식을 골라 복사·다운로드하는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "base64-images-when-to-embed": {
    title: "Base64 이미지: 삽입해야 할 때와 하지 말아야 할 때",
    description: "Base64 이미지를 삽입하면 요청은 줄지만 바이트가 33% 늘고 캐싱이 안 됩니다. 크기 기준과 캐싱 계산, 결정 체크리스트를 배워보세요. 작은 아이콘·로고 삽입에 알맞은 크기 기준과 삽입·링크 선택법을 다룹니다.",
    readingMinutes: 7,
  },
  "base64-to-image-guide": {
    title: "Base64 이미지 변환 완전 가이드: 문자열을 다시 사진으로",
    description: "어떤 Base64 문자열이든 다시 이미지로 디코딩하세요. 붙여넣으면 자동 디코딩, URL 안전 변형, 투명도 미리보기, PNG, JPG, WebP 또는 원본 형식 다운로드까지. 이메일·코드에서 받은 문자열을 다시 열어 저장하는 방법을 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-convert-base64-to-image": {
    title: "Base64를 이미지로 변환하는 방법: 4단계 실전 가이드",
    description: "Base64 문자열을 이미지로 4단계 만에 변환하세요. 붙여넣고, 미리보고, 원본, PNG, JPG, WebP 중 고르고, 다운로드하면 됩니다. URL 안전 문자열과 줄 바꿈도 처리합니다. 줄 바꿈이 섞인 문자열 처리와 원본 형식 저장 요령까지 안내합니다.",
    readingMinutes: 7,
  },
  "base64-vs-image-files": {
    title: "Base64 vs 이미지 파일: 성능과 사용 사례 비교",
    description: "Base64 문자열과 이미지 파일은 같은 사진을 다른 방식으로 담습니다. 크기, 속도, 캐싱, 편집을 비교하고 각각이 이기는 경우를 배워보세요. 웹 페이지 속도와 캐싱, 편집 편의성을 비교하고 삽입·링크 기준을 다룹니다.",
    readingMinutes: 7,
  },
  "image-color-palette-extractor-guide": {
    title: "이미지 색상 팔레트 추출 완전 가이드: 사진에서 팔레트 뽑기",
    description: "어떤 사진에서든 색상 팔레트를 추출하세요. 3개에서 12개 스와치, 차지하는 면적 순 정렬, HEX, RGB, HSL, CSS 내보내기, JSON, 팔레트 카드 다운로드까지. 브랜드·웹 디자인에 쓸 색을 뽑아 내보내고 저장하는 방법을 정리했습니다.",
    readingMinutes: 7,
  },
  "how-to-extract-color-palette-from-image": {
    title: "이미지에서 색상 팔레트 추출하는 방법: 5단계 실전 가이드",
    description: "어떤 사진에서든 색상 팔레트를 5단계로 추출하세요. 업로드하고, 3~12개 스와치를 고르고, 백분율을 읽고, CSS나 JSON으로 복사하면 됩니다 — 무료, 브라우저에서 바로. 디자인 작업에 쓸 대표 색과 보조 색을 뽑는 과정을 안내합니다.",
    readingMinutes: 7,
  },
  "color-palettes-from-photos-design": {
    title: "사진 색상 팔레트: 디자인 작업 흐름 팁",
    description: "사진을 실제로 동작하는 디자인 팔레트로 바꾸세요. 60-30-10 규칙, 지배 색 대 포인트 색, 명암 대비, 브랜드 활용, 팔레트를 탁하게 만드는 실수까지. 사진 속 색을 60-30-10 비율로 나누어 브랜드·웹·인테리어에 적용하는 법을 다룹니다.",
    readingMinutes: 7,
  },
  "favicon-generator-guide": {
    title: "파비콘 만들기 완전 가이드: 로고로 파비콘 제작부터 설치까지",
    description: "파비콘이란 무엇인지, 완성된 파비콘 팩에 어떤 파일이 필요한지, 로고로 파비콘을 만드는 방법과 웹사이트에 설치하는 법까지 한 번에 정리했습니다. 브라우저 탭과 북마크, 모바일 홈 화면에 보이는 작은 아이콘의 구성과 설치법을 다룹니다.",
    readingMinutes: 11,
  },
  "how-to-create-favicon": {
    title: "파비콘 만드는 방법: 로고로 10분 만에 완성하기",
    description: "로고로 파비콘을 몇 분 만에 만드는 방법: 원본 이미지 준비, 여백과 배경 설정, 밝은 탭과 어두운 탭 미리보기, 사이트에 팩 설치까지 단계별로 설명합니다. 로고 원본 준비부터 여백·배경 설정, 사이트 설치까지 몇 분 만에 끝내는 과정을 다룹니다.",
    readingMinutes: 10,
  },
  "favicon-sizes-explained": {
    title: "파비콘 크기 총정리: 16×16부터 512×512까지",
    description: "파비콘 크기별 용도를 정리했습니다. 16×16 탭 아이콘, 32×32 레티나, 180×180 애플 터치, 192×192와 512×512 안드로이드 아이콘, 그리고 ICO 컨테이너의 역할까지 설명합니다. 탭·북마크·모바일 홈 화면별 필요 크기와 ICO 역할을 다룹니다.",
    readingMinutes: 11,
  },
  "add-background-to-image-guide": {
    title: "이미지 배경 넣기 완전 가이드: 단색·그라데이션·블러 배경",
    description: "사진이나 투명 컷아웃에 단색, 그라데이션, 블러 배경을 넣는 방법: 세 가지 배경 모드의 차이, 프레임 설정, 내보내기 옵션, 쇼핑몰과 SNS에 맞는 배경 선택법까지 정리했습니다. 상품 사진·프로필·SNS 게시물에 맞는 배경 선택법과 설정을 다룹니다.",
    readingMinutes: 12,
  },
  "how-to-add-background-to-image": {
    title: "이미지에 배경 넣는 방법: 9단계로 완성하기",
    description: "사진이나 투명 컷아웃에 몇 분 만에 배경을 넣는 방법: 단색·그라데이션·블러 배경 고르기, 틀 모양 맞추기, 내보내기까지 단계별로 설명합니다. 투명 컷아웃과 사진에 어울리는 배경을 골라 틀 모양을 맞추는 과정을 다룹니다.",
    readingMinutes: 10,
  },
  "product-photo-backgrounds": {
    title: "상품 사진 배경 고르는 법: 흰색·브랜드 컬러·라이프스타일",
    description: "상품 사진에 맞는 배경 고르는 법: 흰색, 브랜드 컬러, 라이프스타일 맥락, 마켓플레이스 규정, 쇼핑몰을 브랜드처럼 보이게 만드는 일관성까지 정리했습니다. 흰색·브랜드 컬러·라이프스타일 배경별 효과와 마켓플레이스 규정을 다룹니다.",
    readingMinutes: 12,
  },
  "image-splitter-guide": {
    title: "이미지 분할 완전 가이드: 그리드·가로·세로 자르기",
    description: "이미지를 그리드 타일이나 줄무늬로 나누는 방법: 그리드, 가로, 세로 모드의 차이, 프리셋, 원본 해상도 내보내기, 각 분할 방식에 가장 잘 어울리는 용도를 정리했습니다. 인스타그램 그리드와 배너, 인쇄용 분할에 맞는 모드 선택법을 다룹니다.",
    readingMinutes: 11,
  },
  "how-to-split-image": {
    title: "이미지 자르는 방법: 그리드 분할부터 ZIP 다운로드까지",
    description: "이미지를 몇 분 만에 그리드 타일이나 줄무늬로 나누는 방법: 업로드, 모드 선택, 행과 열 설정, 절단선 확인, 타일이나 ZIP 다운로드까지 단계별로 설명합니다. 그리드 퍼즐과 배너용 줄무늬 분할의 행·열 설정 과정을 다룹니다.",
    readingMinutes: 11,
  },
  "split-images-instagram-grid": {
    title: "인스타그램 그리드 퍼즐 만들기: 사진 9분할 방법과 업로드 순서",
    description: "사진 한 장을 인스타그램 그리드 퍼즐로 바꾸는 방법: 3×3 분할, 정사각형 원본 준비, 게시 순서, 퍼즐 스타일, 시간이 지나도 그리드를 예쁘게 유지하는 법까지 정리했습니다. 3×3 퍼즐 게시 순서와 정사각형 원본 준비 요령을 다룹니다.",
    readingMinutes: 12,
  },
  "gif-maker-guide": {
    title: "GIF 만들기 완전 가이드: 사진으로 움직이는 짤 만들기",
    description: "사진으로 움직이는 GIF를 만드는 방법: GIF 제작기의 동작 방식, 프레임 고르기, 시간 조절, 반복 옵션, 프레임 맞춤, 색상 품질, 파일 크기를 작게 유지하는 법까지 정리했습니다. 사진·짧은 영상을 공유용 GIF로 만드는 프레임 구성과 시간 조절법을 다룹니다.",
    readingMinutes: 12,
  },
  "how-to-make-gif-from-images": {
    title: "사진으로 GIF 만드는 방법: 10단계 실전 가이드",
    description: "사진을 몇 분 만에 움직이는 GIF로 바꾸는 방법: 프레임 모으기, 업로드, 순서와 시간 정하기, 반복 설정, 미리보기, 공유할 수 있는 GIF 다운로드까지 단계별로 설명합니다. 여행·상품·밈 사진을 GIF로 바꿔 디스코드·슬랙·SNS에 공유하는 과정을 다룹니다.",
    readingMinutes: 11,
  },
  "gif-frame-rate-file-size": {
    title: "GIF 프레임 속도와 용량: 부드럽게 vs 가볍게",
    description: "모든 GIF의 핵심 절충: 프레임 속도, 프레임 수, 크기, 색상 팔레트가 애니메이션을 부드럽게 만들지, 작게 만들지, 둘 다 만들지를 결정하는 방법을 설명합니다. 부드러운 애니메이션과 작은 파일 사이의 균형점과 용량 줄이는 법을 다룹니다.",
    readingMinutes: 11,
  },
  "image-collage-maker-guide": {
    title: "사진 콜라주 만들기 완전 가이드: 그리드부터 내보내기까지",
    description: "사진 콜라주를 몇 분 만에 만드는 방법: 그리드와 줄무늬, 드래그 교체, 분할 조정, 간격, 둥근 모서리, 배경 색, 최대 4000픽셀 JPG·PNG 내보내기까지 정리했습니다. 여행·상품·추억 사진을 한 장으로 모아 레이아웃과 간격을 정하는 법을 다룹니다.",
    readingMinutes: 12,
  },
  "how-to-make-photo-collage": {
    title: "사진 콜라주 만드는 방법: 10단계로 완성하기",
    description: "사진 콜라주를 몇 분 만에 만드는 방법: 사진 고르기, 그리드나 줄무늬 레이아웃 고르기, 배열하기, 간격과 배경 정하기, 공유할 수 있는 이미지로 내보내기까지 단계별로 설명합니다. 가족·여행·상품 사진을 모아 레이아웃을 고르고 배열해 저장하는 과정을 다룹니다.",
    readingMinutes: 12,
  },
  "collage-layouts-grids-mood-boards": {
    title: "콜라주 레이아웃 총정리: 그리드·무드보드·스토리",
    description: "올바른 콜라주 레이아웃 고르는 법: 2×2와 3×3 그리드, 세로와 가로 줄무늬, 무드보드, 스토리 레이아웃, 전후 비교, 테두리 없는 콜라주까지 정리했습니다. 여행·브랜드·전후 비교 콜라주에 맞는 레이아웃과 무드보드 구성법을 다룹니다.",
    readingMinutes: 12,
  },
  "image-resizer-guide": {
    title: "이미지 크기 조절이란? 완전 가이드",
    description: "이미지 크기 조절이 무엇인지, 픽셀과 비율 조절은 어떻게 하는지, 종횡비 고정은 언제 필요한지, 웹·SNS·인쇄용 적정 크기는 어떻게 고르는지 알려드립니다. 웹·SNS·인쇄용 적정 픽셀 크기와 종횡비 고정, 화질 유지 요령을 다룹니다.",
    readingMinutes: 9,
  },
  "how-to-resize-image": {
    title: "이미지 크기 조절하는 방법 — 온라인으로 1분 만에 끝내기",
    description: "이미지 크기 조절, 온라인에서 1분이면 됩니다. 업로드부터 픽셀·비율 선택, 종횡비 고정, 프리셋 활용, 화질 설정, 다운로드까지 단계별로 알려드립니다. 프로필·썸네일·배너용 적정 크기를 골라 픽셀·비율을 정하는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "resize-vs-compress-image": {
    title: "이미지 크기 조절 vs 압축 — 차이점과 올바른 순서",
    description: "크기 조절은 픽셀 수를 바꾸고, 압축은 픽셀 저장 방식을 바꿉니다. 각각의 역할과 차이, 언제 어떤 걸 써야 하는지, 왜 둘 다 해야 파일이 가장 작아지는지 정리했습니다. 웹 게시와 제출용 파일 준비에서 둘을 함께 쓰는 순서를 다룹니다.",
    readingMinutes: 9,
  },
  "bulk-image-resizer-guide": {
    title: "대량 이미지 크기 조절 완전 가이드 — 수십 장을 한 번에",
    description: "수십 장의 이미지를 한 번에 크기 조절하는 방법. Fit Max, 균일 너비, 정확한 픽셀, 비율 모드와 확대 방지, 프리셋, ZIP 다운로드까지 브라우저에서 모두 해결하세요. 쇼핑몰·블로그·SNS용 수십 장을 한 번에 맞추는 모드 선택법을 정리했습니다.",
    readingMinutes: 9,
  },
  "how-to-resize-multiple-images": {
    title: "여러 이미지 한 번에 크기 조절하는 방법",
    description: "여러 이미지를 한 번에 크기 조절하는 방법. 폴더를 준비하고, Fit Max·균일 너비·정확한 크기·비율 중 전략을 고르고, 프리셋을 설정한 뒤 결과를 확인해 ZIP으로 다운로드하는 전 과정을 단계별로 안내합니다. 저장한 프리셋으로 다음 작업도 빠르게 반복할 수 있습니다.",
    readingMinutes: 9,
  },
  "bulk-resize-presets-social-ecommerce-print": {
    title: "대량 이미지 크기 조절 프리셋 정리 — SNS·쇼핑몰·인쇄용",
    description: "목적지별 대량 이미지 크기 조절 프리셋 총정리. SNS용, 쇼핑몰용, 블로그용, 썸네일, Full HD, 인쇄용 적정 크기와 직접 입력이 필요할 때를 알려드립니다. 인스타그램·유튜브·쇼핑몰·블로그·인쇄물별 적정 픽셀 크기를 알려드립니다.",
    readingMinutes: 9,
  },
  "image-metadata-viewer-guide": {
    title: "이미지 메타데이터 확인 완벽 가이드: EXIF·GPS 정보 보는 법",
    description: "이미지 메타데이터란 무엇인지, EXIF 카메라 설정과 GPS 위치 정보, PNG·WebP 숨은 데이터까지. 브라우저에서 사진을 업로드하지 않고 안전하게 확인하는 방법을 정리했습니다. 공유 전 사진에 남은 위치·카메라 정보를 확인하고 저장하는 안전 확인법을 다룹니다.",
    readingMinutes: 7,
  },
  "how-to-view-image-metadata": {
    title: "이미지 메타데이터 보는 법: EXIF·GPS 확인부터 JSON 저장까지",
    description: "이미지 메타데이터 보는 법을 단계별로 정리했습니다. 사진을 뷰어에 열고 EXIF와 GPS 정보를 읽고, JSON 보고서를 저장하고, 정리한 파일이 정말 깨끗한지 확인하는 방법까지. 카메라 설정과 촬영 위치, 숨은 데이터를 읽고 확인하는 방법까지 안내합니다.",
    readingMinutes: 8,
  },
  "exif-data-explained": {
    title: "EXIF 데이터란? 사진 속에 숨어 있는 정보 완벽 해설",
    description: "EXIF 데이터에 대한 깊이 있는 해설입니다. 카메라가 EXIF를 기록하는 방식, 어떤 필드가 위치와 일상을 드러내는지, 앱이 EXIF를 지우는 과정, 안전하게 읽고 제거하는 방법까지. 위치·일상이 드러나는 필드와 앱의 제거 과정, 안전하게 제거하는 방법을 배워보세요.",
    readingMinutes: 8,
  },
  "remove-image-metadata-guide": {
    title: "이미지 메타데이터 제거 완벽 가이드: EXIF·GPS 삭제하는 법",
    description: "이미지 메타데이터를 안전하게 제거하는 방법을 정리했습니다. 어떤 정보가 지워지는지, 무손실 제거와 캔버스 다시 인코딩의 차이, 여러 장 한 번에 정리하기, ZIP 저장, 정리한 파일 검증까지. 공유 전 위치·카메라 정보를 지우는 제거 방식 차이와 대량 정리·검증법을 다룹니다.",
    readingMinutes: 8,
  },
  "how-to-remove-metadata-from-image": {
    title: "이미지 메타데이터 제거하는 법: 사진 EXIF·GPS 삭제 단계별 가이드",
    description: "이미지 메타데이터 제거하는 법을 단계별로 정리했습니다. 사진 업로드부터 EXIF와 GPS 제거, 올바른 방식 선택, 정리된 파일 다운로드, 결과 검증까지. SNS·메신저 공유 전 위치 정보가 남지 않게 제거하고 검증하는 과정을 안내합니다.",
    readingMinutes: 8,
  },
  "photo-privacy-gps-exif-risks": {
    title: "사진 개인정보 유출 주의: GPS·EXIF 메타데이터 위험과 대처법",
    description: "사진 속 GPS 좌표와 EXIF 데이터, 숨은 메타데이터가 무엇을 드러낼 수 있는지, 누가 악용할 수 있는지, 사진이 위치와 일상을 새는 것을 막는 실용적인 방법을 정리했습니다. SNS·메신저·중고 거래 사진 공유 전 위치가 새지 않게 확인하고 지우는 방법을 다룹니다.",
    readingMinutes: 8,
  },
};
