# Personal AI Engineer Portfolio

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)

**Live site → https://vosnuev.github.io/portfolio/**

</div>

---

## 📌 Overview

A single-page personal portfolio for an AI engineer, built with pure HTML5, CSS3, and Vanilla JavaScript — no framework, no build tool, no dependencies. Scroll-based animations are driven by the native `IntersectionObserver` API; all styles are embedded directly in the HTML file.

---

## 🗂 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Rotating tagline animation cycling through four role descriptors via CSS keyframes |
| 2 | **About** | Two-column split layout — personal background story and data-driven decision methodology |
| 3 | **Skills** | Horizontally scrollable capability card carousel covering AI/LLM, ML/DL, Data, Backend, Frontend, and Crawling |
| 4 | **Projects** | Masonry phone-card grid showcasing 9 projects with live demo and GitHub links |
| 5 | **Experience** | Key metrics and achievements: 388,918 reviews crawled, attendance error reduced 80→5%, 8+ projects, 5yr 10mo experience |
| 6 | **Education** | Academic background and bootcamp training details |
| 7 | **Certifications** | Relevant credentials and qualifications |
| 8 | **Blog** | Infinite-loop tech stack marquee: Python · FastAPI · LangChain · LangGraph · PyTorch · Pinecone · React · Docker |
| 9 | **Contact** | Email and GitHub CTA buttons |
| 10 | **Footer** | Four-column grid with site links, project links, and contact information |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 |
| Styling | CSS3 — Custom Properties, Grid, Flexbox, `@keyframes` |
| Scripting | Vanilla JavaScript (ES2020+), `IntersectionObserver` |
| Fonts | Google Fonts — Inter |
| Hosting | GitHub Pages |

No build step. No framework. No external dependencies beyond a single Google Fonts request.

---

## 📁 Project Structure

```
portfolio/
├── index.html   # Entire site — markup, embedded <style>, embedded <script>
├── .gitignore
└── README.md
```

All CSS lives in a `<style>` block inside `<head>`. All JavaScript lives in a `<script>` block before `</body>`. No separate asset files.

---

## 🚀 Getting Started

### View locally

```bash
# Clone
git clone https://github.com/vosnuev/portfolio.git
cd portfolio

# Open directly in browser (no server required)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# Or serve with any static server
npx serve .
python -m http.server 8000
```

### Deploy your own fork to GitHub Pages

1. Fork this repository.
2. Go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch` → branch `main` → folder `/ (root)`.
4. Save. The site publishes at `https://<your-username>.github.io/portfolio/` within minutes.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| Scroll animations | `IntersectionObserver` triggers fade-in / slide-up on every section as it enters the viewport |
| Responsive layout | Fluid breakpoints at 880 px, 820 px, 700 px, 680 px, and 560 px |
| Mobile-first design | Touch-friendly carousel, stacked columns, and readable type at all screen sizes |
| Zero dependencies | No npm, no webpack, no runtime libraries — opens instantly with a single file |
| CSS-only animations | Hero tagline rotor, infinite marquee ticker, and card hover effects are pure `@keyframes` |
| Sticky header | Translucent navigation bar with `backdrop-filter: blur` |
| Accessible accordion | FAQ built with native `<details>` / `<summary>` — keyboard and screen-reader friendly |
| Custom color system | Full palette managed through CSS Custom Properties in `:root` |

---

## 🎯 Skills Demonstrated

| Skill Area | Detail |
|------------|--------|
| CSS animations | `@keyframes` rotor, infinite marquee, scroll-reveal transitions |
| `IntersectionObserver` | Native browser API used to trigger reveal classes without a scroll library |
| Responsive design | Multi-breakpoint layout using CSS Grid and Flexbox; no media-query framework needed |
| Performance | No JavaScript frameworks, no bundler overhead; first meaningful paint from a single HTTP response |
| Semantic HTML | Proper use of `<section>`, `<header>`, `<footer>`, `<details>`, `<summary>` for accessibility |
| CSS Custom Properties | Single `:root` token system drives the entire color palette and spacing scale |
| Single-file architecture | All markup, styles, and scripts co-located in `index.html` for zero-dependency deployment |
| GitHub Pages CI/CD | Automatic deployment on every push to `main` — no manual build step |

---

## 📄 License

© 2026 Ha-young Jeon (전하영). All rights reserved.

- Font: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts (SIL Open Font License)
- Contact: vosnuevo@gmail.com · GitHub: https://github.com/vosnuev
