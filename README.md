# Personal AI Engineer Portfolio

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)

**라이브 사이트 → https://vosnuev.github.io/portfolio/**

</div>

---

## 📌 개요

외부 의존성 없이 순수 HTML5, CSS3, Vanilla JavaScript로 구현한 AI 엔지니어 개인 포트폴리오입니다.  
프레임워크, 빌드 툴, 외부 라이브러리를 일절 사용하지 않으며, 스크롤 기반 애니메이션은 브라우저 네이티브 `IntersectionObserver` API로 구동됩니다. 모든 스타일과 스크립트는 단일 HTML 파일에 내장되어 있습니다.

---

## 🗂 페이지 구성

| # | Section | 설명 |
|---|---------|------|
| 1 | **Hero** | CSS keyframes로 4가지 역할 설명이 순환하는 타이틀 로테이션 애니메이션 |
| 2 | **About** | 2단 분할 레이아웃 — 개인 배경 스토리 및 데이터 기반 의사결정 방법론 소개 |
| 3 | **Skills** | AI/LLM, ML/DL, 데이터, 백엔드, 프론트엔드, 크롤링 분야를 아우르는 가로 스크롤 카드 캐러셀 |
| 4 | **Projects** | 9개 프로젝트를 라이브 데모·GitHub 링크와 함께 보여주는 메이슨리 폰 카드 그리드 |
| 5 | **Experience** | 핵심 성과 지표: 리뷰 388,918건 크롤링, 출석 오류 80→5% 감소, 프로젝트 8개 이상, 경력 5년 10개월 |
| 6 | **Education** | 학력 사항 및 부트캠프 교육 이력 |
| 7 | **Certifications** | 보유 자격증 및 수료 증명 |
| 8 | **Blog** | 무한 루프 기술 스택 마키: Python · FastAPI · LangChain · LangGraph · PyTorch · Pinecone · React · Docker |
| 9 | **Contact** | 이메일 및 GitHub 바로가기 버튼 |
| 10 | **Footer** | 사이트 링크, 프로젝트 링크, 연락처 정보를 담은 4단 그리드 |

---

## ✨ 주요 기능

| # | 기능명 | 설명 |
|---|--------|------|
| 1 | 스크롤 애니메이션 | `IntersectionObserver`로 각 섹션이 뷰포트에 진입할 때 fade-in / slide-up 트리거 |
| 2 | 반응형 레이아웃 | 880px, 820px, 700px, 680px, 560px 플루이드 브레이크포인트 대응 |
| 3 | 모바일 우선 설계 | 터치 친화적 캐러셀, 컬럼 스태킹, 모든 화면 크기에서 가독성 확보 |
| 4 | 외부 의존성 제로 | npm, webpack, 런타임 라이브러리 불필요 — 단일 파일로 즉시 실행 |
| 5 | CSS 전용 애니메이션 | Hero 타이틀 로테이터, 무한 마키 텍스트, 카드 호버 효과 모두 순수 `@keyframes` 구현 |
| 6 | 스티키 헤더 | `backdrop-filter: blur` 적용된 반투명 네비게이션 바 |
| 7 | 접근성 아코디언 | 네이티브 `<details>` / `<summary>` 사용 — 키보드 및 스크린 리더 완전 지원 |
| 8 | CSS 커스텀 속성 시스템 | `:root`에서 전체 색상 팔레트와 간격 체계를 CSS Custom Properties로 일원 관리 |

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| 마크업 | HTML5 |
| 스타일링 | CSS3 — Custom Properties, Grid, Flexbox, `@keyframes` |
| 스크립팅 | Vanilla JavaScript (ES2020+), `IntersectionObserver` |
| 폰트 | Google Fonts — Inter |
| 배포 | GitHub Pages |

빌드 단계 없음. 프레임워크 없음. Google Fonts 요청 하나를 제외한 외부 의존성 없음.

---

## 📁 프로젝트 구조

```
portfolio/
├── index.html   # 사이트 전체 — 마크업, 내장 <style>, 내장 <script>
├── .gitignore
└── README.md
```

모든 CSS는 `<head>` 내부 `<style>` 블록에 위치합니다. 모든 JavaScript는 `</body>` 직전 `<script>` 블록에 위치합니다. 별도 에셋 파일 없음.

---

## 🚀 시작하기

### 로컬에서 확인하기

```bash
# 저장소 클론
git clone https://github.com/vosnuev/portfolio.git
cd portfolio

# 브라우저에서 직접 열기 (서버 불필요)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# 또는 정적 서버로 실행
npx serve .
python -m http.server 8000
```

### 본인 포크를 GitHub Pages에 배포하기

1. 이 저장소를 Fork합니다.
2. **Settings → Pages**로 이동합니다.
3. **Source**를 `Deploy from a branch` → 브랜치 `main` → 폴더 `/ (root)`로 설정합니다.
4. 저장하면 몇 분 내로 `https://<your-username>.github.io/portfolio/`에 사이트가 게시됩니다.

---

## 🎯 습득 기술 및 역량

| 기술 영역 | 세부 내용 |
|-----------|-----------|
| CSS 애니메이션 | `@keyframes` 로테이터, 무한 마키, 스크롤 리빌 트랜지션 직접 구현 |
| `IntersectionObserver` | 스크롤 라이브러리 없이 브라우저 네이티브 API만으로 뷰포트 진입 감지 및 클래스 토글 |
| 반응형 디자인 | CSS Grid와 Flexbox를 활용한 멀티 브레이크포인트 레이아웃 — 미디어쿼리 프레임워크 불필요 |
| 성능 최적화 | JavaScript 프레임워크·번들러 오버헤드 없이 단일 HTTP 응답으로 첫 의미 있는 페인트 달성 |
| 시맨틱 HTML | `<section>`, `<header>`, `<footer>`, `<details>`, `<summary>` 올바른 사용으로 접근성 확보 |
| CSS Custom Properties | 단일 `:root` 토큰 시스템으로 전체 색상 팔레트 및 간격 스케일 관리 |
| 단일 파일 아키텍처 | 마크업·스타일·스크립트를 `index.html` 하나에 공동 배치하여 의존성 없는 배포 실현 |
| GitHub Pages CI/CD | `main` 브랜치 푸시만으로 자동 배포 — 수동 빌드 단계 없음 |

---

## 📄 라이선스

© 2026 전하영 (Ha-young Jeon). All rights reserved.

- 폰트: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts (SIL Open Font License)
- 문의: vosnuevo@gmail.com · GitHub: https://github.com/vosnuev
