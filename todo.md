# 블로그 개발 TODO

> 디자인 문서: `~/.gstack/projects/newblog/User-unknown-design-20260405-090104.md`
> 스택: Next.js 15 + Tailwind CSS v4 + @next/mdx + Vercel

---

## 0단계 — 개발 전 (수동 작업 필요)

- [ ] 콘텐츠 니치 확정 ⚠️ **블로킹** — 기술/IT, 경제/재테크, 커리어 등 직접 결정
- [ ] 도메인 구매 (Namecheap 또는 Cloudflare Registrar)
- [ ] GitHub 레포 생성
- [ ] Vercel 계정 준비

---

## 1단계 — 기반 세팅 (Claude 작업)

- [x] Next.js 15 프로젝트 초기화 (TypeScript + Tailwind + App Router)
- [x] @next/mdx 설정
- [x] Pretendard 폰트 self-hosting 설정
- [x] 기본 레이아웃 구성 (Header + main + Footer)
- [x] 색상 팔레트 + 타이포그래피 Tailwind 설정
- [x] posts/ 디렉토리 구조 + frontmatter 스키마 설정
- [x] 홈 페이지 (/) — 최근 글 목록
- [x] 블로그 목록 페이지 (/blog)
- [x] 블로그 상세 페이지 (/blog/[slug])
- [x] About 페이지 (/about)
- [x] next-sitemap + robots.txt 설정
- [x] 샘플 포스트 3개 작성

---

## 2단계 — 배포 (수동 + Claude 작업)

- [ ] GitHub에 코드 push
- [ ] Vercel에 GitHub 레포 연동
- [ ] 커스텀 도메인 연결
- [x] GA4 설정 (@next/third-parties)
- [ ] Google Search Console 등록 + sitemap.xml 제출

---

## 3단계 — AdSense 신청 (콘텐츠 15-20개 후)

- [ ] 글 15-20개 작성 (각 800단어 이상)
- [ ] Google AdSense 신청
- [ ] 승인 후 광고 단위 삽입 (본문 상단 1개, 중간 1개)

---

## 성공 지표

- [ ] Lighthouse 90+ (광고 삽입 전)
- [ ] AdSense 승인
- [ ] 일 방문자 100명 (3개월)
- [ ] 일 방문자 500명 (6개월)
- [ ] 월 $10 AdSense 수익
