# 🌌 Midnight Glassmorphism Portfolio

A futuristic, high-performance portfolio website engineered with **Obsidian & Deep Space Navy** aesthetics, **Electric Cyan & Sapphire** neon accents, and multi-layered **Frosted Glassmorphism** surfaces (`backdrop-filter: blur(24px)`).

Tailored specifically for a **Senior Full-Stack & Distributed Systems Engineer**, complete with real-time project metrics, interactive category filtering, detailed modal case studies, dynamic mouse spotlights, and zero external runtime dependencies.

---

## ✨ Features & Architecture

- **Midnight Obsidian & Sapphire Theme**: Deep space canvas (`#060813`), glowing ambient floating orbs, cyber-mesh overlays, and glowing status indicators.
- **High-Fidelity Glassmorphism**:
  - Translucent frosted glass cards (`backdrop-filter: blur(24px) saturate(180%)`).
  - Specular gradient borders with dynamic mouse-tracking specular highlights (`--mouse-x`, `--mouse-y`).
  - Dual glass inset shine and deep elevation shadows.
- **Interactive Project Showcase**:
  - Category filters: `All`, `Full-Stack`, `Backend & Cloud`, `DevOps & Systems`.
  - Realistic embedded terminal/dashboard mockups inside project cards.
  - Interactive **Case Study Modal** with architecture summaries, performance metrics, and challenge breakdowns.
- **Technical Skills Matrix**: Categorized grid covering Frontend, Distributed Backend, Cloud/DevOps, and High-Scale Storage.
- **Interactive Timeline**: Glass-node career journey highlighting technical leadership and architectural achievements.
- **Functional Contact Section**:
  - Glassmorphic message transmission form with validation and simulated dispatch.
  - One-click copy email pill with interactive toast notification.
  - Social profile links (GitHub, LinkedIn, X / Twitter).
- **Zero Build Step / Pure Web Standards**: Instant 60 FPS performance in any browser with pure semantic HTML5, modern CSS variables, and vanilla ES6+ JavaScript.

---

## 📂 Project Structure

```text
midnight-glass-portfolio/
├── index.html        # Semantic HTML5 structure, ARIA accessibility, SVG icons & modal dialog
├── style.css         # Custom CSS tokens, glassmorphism filters, animations & responsive breakpoints
├── script.js         # Filter engine, project case study modal, counters, toast notifications
└── README.md         # Documentation and customization guide
```

---

## 🚀 How to Open and Preview

### Option 1: Direct File Launch
Simply double-click `index.html` in Windows Explorer or open it in any web browser (Chrome, Edge, Firefox, Brave, Safari).

### Option 2: Live Server or Local Preview
If using VS Code or any local preview tool:
```bash
# Using Python (if available):
python -m http.server 3000

# Using Node npx (if available):
npx serve
```
Then navigate to `http://localhost:3000`.

---

## ⚙️ How to Personalize

1. **Personal Information & Bio**:
   - Open `index.html` and search for `Alex Rivera` to update your name, title, contact email (`alex.rivera.dev@gmail.com`), and social profile URLs.
2. **Project Case Studies**:
   - In `script.js`, edit the `PROJECT_DATABASE` object to update project titles, tags, live URLs, metrics, and technical challenge descriptions.
3. **Skills & Stacks**:
   - In `index.html`, add or modify `.skill-pill` elements under the `#skills` section to match your exact technology stack.
4. **Theme Accents**:
   - In `style.css`, modify `:root` variables (`--cyan-primary`, `--sapphire-blue`, `--bg-midnight`) to tweak neon tints to your exact brand colors.

---

## 🌐 Free Instant Deployment

- **GitHub Pages**: Push this repository to GitHub, go to `Settings > Pages`, and select the `main` branch.
- **Vercel / Netlify**: Drag-and-drop the `midnight-glass-portfolio` folder into the Netlify or Vercel dashboard.
- **Firebase Hosting**: Run `firebase init hosting` and set current directory as the public root.
