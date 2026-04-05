# Project Template

## gstack skills

This project uses [gstack](https://github.com/garrytan/gstack) — a set of AI-powered development skills for Claude Code.

### Available skills

| Skill | Purpose |
|-------|---------|
| `/plan-eng-review` | Engineering plan review |
| `/plan-ceo-review` | Strategic/product plan review |
| `/plan-design-review` | Design plan review |
| `/autoplan` | Auto-run all three plan reviews |
| `/review` | PR code review |
| `/qa` | QA audit + fixes |
| `/qa-only` | QA report only (no fixes) |
| `/ship` | Full ship workflow (review → QA → PR) |
| `/cso` | Security audit (OWASP + STRIDE) |
| `/design-consultation` | Build a design system from scratch |
| `/design-review` | Visual design audit + fix loop |
| `/investigate` | Systematic root-cause debugging |
| `/retro` | Sprint retrospective |
| `/browse` | Headless browser automation |
| `/office-hours` | YC-style startup diagnostic |
| `/careful` | Extra-careful mode for risky changes |
| `/freeze` / `/unfreeze` | Freeze/unfreeze file changes |
| `/guard` | Guard a file from accidental edits |

### Typical sprint workflow

```
/autoplan   → align on the plan
(implement)
/qa         → catch bugs before review
/ship       → review + PR + deploy
/retro      → reflect
```

---

## Project setup

> Fill in the sections below when starting a new project.

### Commands

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 (http://localhost:3000)
npm run build     # 프로덕션 빌드 + sitemap 생성
npm start         # 프로덕션 서버
```

### Tech stack

- **Frontend**: Next.js 15 (App Router, SSG)
- **Styling**: Tailwind CSS v4
- **Content**: MDX (`@next/mdx` + `next-mdx-remote`)
- **Font**: Pretendard (self-hosted, `/public/fonts/`)
- **Deployment**: Vercel

### Environment variables

```bash
SITE_URL=https://your-domain.com   # next-sitemap용, Vercel에서 설정
```

### Project structure

```
app/
  layout.tsx          # 루트 레이아웃 (Header + Footer)
  page.tsx            # 홈 (최근 글 5개)
  blog/
    page.tsx          # 전체 글 목록
    [slug]/page.tsx   # 개별 글 (MDX 렌더링)
  about/page.tsx      # 소개 페이지
components/
  Header.tsx
  Footer.tsx
  PostCard.tsx        # 글 목록 카드
lib/
  posts.ts            # MDX 파일 읽기/파싱 유틸
posts/
  *.mdx               # 블로그 글 (frontmatter: title, date, description, category, published)
public/
  fonts/              # Pretendard woff2 파일들
next-sitemap.config.js
```

---

## Conventions

- **Commits**: single logical change per commit, present tense imperative
- **PRs**: one feature/fix per PR
- **Tests**: write tests for new features; don't mock what you can use real

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health
