<div align="center">

# ✦ Surajit Mondal — Portfolio

### Full-Stack Developer · UI/UX Designer · Freelancer

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-EE5E99?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-r186-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](./LICENSE)

> A premium, Awwwards-inspired personal portfolio showcasing full-stack development work and UI/UX design case studies.

**[🚀 Live Demo](https://surajit-portfolio.vercel.app)** · **[📧 Contact](mailto:surajit140398@gmail.com)** · **[💼 LinkedIn](https://www.linkedin.com/in/surajit-mondal-904773248/)**

</div>

---

## 📸 Preview

> _A BIOS-style boot animation opens the experience, zooming into a 3D laptop that transitions into the full portfolio._

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎬 **BIOS Boot Animation** | 3D laptop lid-open with typewriter BIOS logs, real-time date/time, and an ASCII progress bar |
| 🌗 **Dark / Light Mode** | Seamless theme toggle with CSS custom properties, persistent across sessions |
| 🖱️ **Custom Cursor** | Magnetic cursor that reacts to interactive elements |
| 🎯 **Case Study Pages** | Dedicated deep-dive pages for each project with image galleries |
| 📱 **Fully Responsive** | Pixel-perfect layout across desktop, tablet, and mobile |
| ✨ **Micro-Animations** | Scroll-reveal text, magnetic buttons, hover glows, and page transitions powered by Framer Motion & GSAP |
| 🧩 **Particle Background** | Interactive tsParticles canvas in the hero section |
| 📬 **Contact Modal** | In-app contact form with toast notifications |
| 🔍 **SEO Optimised** | `react-helmet-async` with per-page meta tags |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — Latest concurrent features
- **Vite 8** — Blazing fast build tool & HMR
- **Framer Motion 13** — Declarative animations & page transitions
- **GSAP 3** — Complex scroll & timeline animations
- **Three.js + React Three Fiber** — 3D scene rendering

### Styling
- **Vanilla CSS** with CSS custom properties (design tokens)
- **Light / Dark** theme system via class-based variables

### Libraries & Tools
- `react-router-dom` v7 — Client-side routing
- `react-tsparticles` + `tsparticles` — Particle effects
- `lucide-react` — Icon library
- `react-hot-toast` — Toast notifications
- `react-helmet-async` — Dynamic `<head>` management

---

## 📁 Project Structure

```
surajit-portfolio/
├── public/
│   └── images/                   # Project screenshots & assets
│       ├── project/
│       │   ├── ostaagar/          # Ostaagaar ecosystem images
│       │   └── ambition-aqua-biotech/  # Ambition Aqua images
├── src/
│   ├── assets/                   # Static assets (fonts, icons)
│   ├── components/               # Reusable UI components
│   │   ├── Preloader.jsx         # BIOS boot animation sequence
│   │   ├── Navigation.jsx        # Navbar with theme toggle
│   │   ├── Hero.jsx              # Landing hero section
│   │   ├── Projects.jsx          # Projects showcase grid
│   │   ├── About.jsx             # About section
│   │   ├── Experience.jsx        # Work experience timeline
│   │   ├── Skills.jsx            # Skills & tools
│   │   ├── Testimonials.jsx      # Client testimonials
│   │   ├── Contact.jsx           # Contact section
│   │   ├── ContactModal.jsx      # In-app contact form modal
│   │   ├── Cursor.jsx            # Custom magnetic cursor
│   │   ├── ParticlesBackground.jsx  # tsParticles integration
│   │   ├── PageTransition.jsx    # Route transition wrapper
│   │   ├── Magnetic.jsx          # Magnetic button HOC
│   │   ├── RevealText.jsx        # Scroll-based text reveal
│   │   ├── InteractiveFooter.jsx # Footer with social links
│   │   ├── WhatsAppButton.jsx    # Floating WhatsApp CTA
│   │   ├── MailButton.jsx        # Floating mail button
│   │   ├── SEO.jsx               # SEO meta component
│   │   └── projects/             # Project-specific sub-components
│   ├── context/                  # React context (theme, etc.)
│   ├── data/
│   │   ├── profile.js            # Personal info, services, experience, testimonials
│   │   ├── projects.js           # Project details, galleries, tech stacks
│   │   └── tools.js              # Tools & software list
│   ├── pages/
│   │   ├── Home.jsx              # Home page (assembles all sections)
│   │   ├── AmbitionAqua.jsx      # Case study — Ambition Aqua Biotech
│   │   └── Ostaagaar.jsx         # Case study — Ostaagaar Ecosystem
│   ├── App.jsx                   # Root app with routing
│   ├── App.css                   # Main stylesheet (1600+ lines)
│   ├── CaseStudy.css             # Case study page styles
│   ├── index.css                 # CSS variables & base reset
│   └── main.jsx                  # React entry point
├── .gitignore
├── LICENSE
├── README.md
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or `pnpm` / `yarn`)

### 1. Clone the repository
```bash
git clone https://github.com/Surajit140398/surajit-portfolio.git
cd surajit-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 📂 Personalisation Guide

To customise this portfolio for yourself, edit only the data files:

| File | What to change |
|---|---|
| `src/data/profile.js` | Name, bio, services, experience, testimonials, social links |
| `src/data/projects.js` | Project titles, descriptions, tech stacks, image galleries |
| `src/data/tools.js` | Skills, tools, and software you use |
| `public/images/` | Replace project screenshots with your own |
| `src/index.css` | Accent colour (`--accent`) and font choices |

---

## 🎨 Design System

The portfolio uses a CSS custom property–based design token system defined in `src/index.css`:

```css
:root, .light {
  --bg:       #f7f8fa;     /* Page background */
  --text:     #111111;     /* Body text */
  --text-h:   #000000;     /* Headings */
  --muted:    #666666;     /* Secondary text */
  --accent:   #7c3aed;     /* Purple accent */
  --border:   rgba(17,17,17,0.06);
  --surface:  rgba(255,255,255,0.6);
}

.dark {
  --bg:       #050505;
  --text:     #e0e0e0;
  --text-h:   #ffffff;
  --muted:    #888888;
  --accent:   #9333ea;
  --border:   rgba(255,255,255,0.08);
  --surface:  rgba(20,20,20,0.6);
}
```

---

## 🗺️ Routing

| Path | Page |
|---|---|
| `/` | Home — all sections |
| `/projects/ambition-aqua-biotech` | Ambition Aqua Biotech Case Study |
| `/projects/ostaagaar` | Ostaagaar Ecosystem Case Study |

---

## 📋 Featured Projects

### 🐟 Ambition Aqua Biotech
> Premium website & digital experience for an aquaculture biotech company.

- **Role:** Design & Development
- **Tech:** React, CSS, JavaScript
- **Platform:** Web
- **Live:** [ambitionaquabiotech.in](https://ambitionaquabiotech.in)

---

### 🏭 Ostaagaar — B2B Wholesale Ecosystem
> End-to-end B2B wholesale marketplace connecting manufacturers with shop owners in the stitched clothing industry.

- **Role:** Product Design & Technology (Solo)
- **Tech:** Flutter, Dart, Firebase
- **Platform:** iOS & Android + Web
- **Ecosystem includes:**
  - 📱 **Customer App** — Shop owners browse & place bulk orders
  - 🏭 **Manufacturer App** — Manage products, bundles & orders
  - 🌐 **B2B Website** — Platform landing & web presence

---

## 🤝 Connect

| Platform | Link |
|---|---|
| 📧 Email | [surajit140398@gmail.com](mailto:surajit140398@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/surajit-mondal-904773248](https://www.linkedin.com/in/surajit-mondal-904773248/) |
| 🐙 GitHub | [github.com/Surajit140398](https://github.com/Surajit140398) |
| 📱 WhatsApp | [+91 95470 86921](https://wa.me/919547086921) |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

> **Note:** While the code is open-source, the portfolio's design, branding, personal content (images, project descriptions, testimonials) and identity belong to **Surajit Mondal**. Please do not republish them as your own.

---

<div align="center">

Made with ❤️ by **Surajit Mondal**

</div>
