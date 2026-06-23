# AI Engineer Portfolio (AI 엔지니어 포트폴리오)

> Static portfolio landing page for AI engineer. (AI 엔지니어 포트폴리오 정적 랜딩 페이지)
>
> **Live →** https://vosnuev.github.io/portfolio/

---

## 🛠️ Tech Stack (기술 스택)

| Layer | Tools |
|---|---|
| Markup / Style | HTML5, CSS3 (CSS Custom Properties, CSS Grid, Flexbox) |
| Scripting | Vanilla JavaScript (ES2020+) |
| Fonts | Google Fonts — Inter |
| Hosting | GitHub Pages |

No build step, no framework, no dependencies. Single static file.  
(빌드 도구 없음. 프레임워크 없음. 외부 의존성 없음. 단일 정적 파일.)

---

## ✨ Features (주요 기능)

| Section (섹션) | Description (설명) |
|---|---|
| **Hero** | Rotating text animation cycling through four taglines (CSS keyframe rotor) |
| **Stats** | Four key metrics: 388,918 reviews crawled · attendance error 80→5% · 8+ projects · 5yr 10mo experience |
| **About / Approach** | Two-column split layout — background story and data-driven decision methodology |
| **Capabilities** | Horizontally scrollable feature card carousel: AI/LLM, ML/DL, Data, Backend, Frontend, Crawling |
| **Project Showcase** | Masonry phone-card grid — 9 projects with live demo links and GitHub links |
| **Tech Stack Marquee** | Infinite-loop logo ticker: Python · FastAPI · LangChain · LangGraph · PyTorch · Pinecone · React · TypeScript · Pandas · Docker · MySQL · Streamlit |
| **Testimonials** | Three feedback cards from bootcamp mentors and review sessions |
| **FAQ** | Accessible `<details>` / `<summary>` accordion — 5 Q&As |
| **Contact / CTA** | Email + GitHub CTA buttons |
| **Footer** | Four-column grid with site links, project links, and contact info |

Additional implementation details (추가 구현 사항):

- Scroll-reveal animation via `IntersectionObserver` (`.rv` → `.in`)
- Sticky translucent header with `backdrop-filter: blur`
- Fully responsive: breakpoints at 880 px, 820 px, 700 px, 680 px, 560 px
- Color palette extracted from Burger King brand imagery, managed entirely through CSS Custom Properties in `:root`

---

## 📁 Project Structure (프로젝트 구조)

```
portfolio/
├── index.html   # Entire site — markup, styles (embedded <style>), and scripts (embedded <script>)
├── .gitignore
└── README.md
```

All CSS lives in a `<style>` block inside `<head>`. All JavaScript lives in a `<script>` block before `</body>`. No external asset files.  
(CSS는 `<head>` 내 `<style>` 블록, JavaScript는 `</body>` 직전 `<script>` 블록에 내장. 외부 에셋 파일 없음.)

---

## 🔄 Usage Flow (사용 흐름)

```
Visitor lands on page
  └─ Hero: reads tagline rotor, clicks "프로젝트 보러가기 →"
       └─ Project Showcase: browses phone-card grid
            ├─ Live demo link → deployed app (school attendance, TOEIC Flashcards)
            └─ GitHub link → source repository
  └─ Capabilities carousel: scrolls through 6 skill areas
  └─ FAQ accordion: expands relevant questions
  └─ Contact CTA: sends email or visits GitHub profile
```

---

## 🏗️ Architecture (아키텍처)

Single-file static site. No server, no database, no API calls at runtime.

```
index.html
├── <head>
│   ├── Meta tags (charset, viewport, description)
│   ├── Google Fonts preconnect + stylesheet link
│   └── <style> — all CSS (~600 lines)
│       ├── CSS Custom Properties (:root palette + spacing)
│       ├── Global resets and typography
│       ├── Component styles (buttons, cards, marquee, FAQ, footer …)
│       └── Responsive breakpoints (@media)
└── <body>
    ├── <header class="nav">        — sticky navigation
    ├── <section class="hero">      — hero + rotor animation
    ├── <section class="metrics">   — 4-stat grid
    ├── <section> (about split)     — story + feature list
    ├── <section> (approach split)  — methodology
    ├── <section id="features">     — horizontal card carousel
    ├── <section id="solutions">    — masonry phone-card showcase (9 projects)
    ├── <section> (tech marquee)    — infinite logo ticker
    ├── <section id="voices">       — 3 testimonial cards
    ├── <section id="faq">          — details/summary accordion
    ├── <section class="final">     — contact CTA
    ├── <footer class="ft">         — 4-column footer grid
    └── <script>                    — IntersectionObserver reveal + marquee builder
```

Color palette (CSS Custom Properties):

| Variable | Value | Use |
|---|---|---|
| `--cream` | `#FBF3E2` | Main background |
| `--cream-2` | `#F1E4C6` | Section alternate background |
| `--orange` | `#EC4A22` | Primary brand / accent |
| `--red` | `#C5122A` | Secondary accent |
| `--gold` | `#F2A618` | Highlight / footer headings |
| `--green` | `#4C7A33` | Tertiary accent |
| `--brown` | `#3A2412` | Primary text / dark background |
| `--brown-2` | `#7A5230` | Secondary text |
| `--brown-3` | `#A98A5E` | Muted text |
| `--line` | `#E6D6B2` | Borders / dividers |

---

## ⚙️ Environment Setup (환경 설정)

No environment setup required. (환경 설정 불필요.)

The page is a single self-contained HTML file with no build tooling, no package manager, and no environment variables. The only external request at load time is the Google Fonts stylesheet.

To run locally, open `index.html` directly in any modern browser — no server needed.  
(로컬 실행 시 `index.html`을 브라우저로 직접 열면 됩니다. 서버 불필요.)

---

## 🚀 How to Run (실행 방법)

### Local (로컬)

```bash
# Clone the repository
git clone https://github.com/vosnuev/portfolio.git
cd portfolio

# Open in browser — pick one
open index.html                        # macOS
start index.html                       # Windows
xdg-open index.html                    # Linux

# Or serve with any static server (optional)
npx serve .
python -m http.server 8000
```

### GitHub Pages (배포)

The site is deployed via GitHub Pages from the `main` branch root.

To deploy your own fork:

1. Fork this repository.
2. Go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch` → branch `main` → folder `/ (root)`.
4. Save. GitHub Pages publishes the site at `https://<username>.github.io/portfolio/` within a few minutes.

Live URL: https://vosnuev.github.io/portfolio/

---

## 📄 License & References (라이선스 & 참고 문서)

- Layout style inspired by [litt.ly](https://start.litt.ly) link-in-bio layout.
- Color palette derived from Burger King brand imagery.
- Font: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts (SIL Open Font License).
- © 2026 전하영 (Ha-young Jeon). All rights reserved.
- Contact: vosnuevo@gmail.com · GitHub: https://github.com/vosnuev
