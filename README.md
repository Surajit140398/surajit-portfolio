<div align="center">

# ✦ Surajit Mondal — Portfolio

### Full-Stack Developer · UI/UX Designer · Creative Technologist

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-EE5E99?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-r186-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](./LICENSE)

> A premium, Awwwards-inspired 3D interactive personal portfolio featuring immersive Cloudinary atmospheric backgrounds, 3D character mouse parallax tilt & sway animations, and responsive section layouts.

**[🚀 Live Demo](https://surajit-portfolio.vercel.app)** · **[📧 Contact](mailto:surajit140398@gmail.com)** · **[💼 LinkedIn](https://www.linkedin.com/in/surajit-mondal-904773248/)**

</div>

---

## 📸 Overview & Visual Highlights

- **3D Atmospheric Backgrounds**: High-resolution Cloudinary background scenes on every section with dynamic parallax depth.
- **3D Interactive Character Animation**: Mouse parallax position tracking, tilt & sway rotational response, and continuous vertical floating (`char-float`).
- **High-Contrast Transparent Typography**: Crystal-clear text legibility (`#0A0A0A` / `#111111`) with transparent card backdrops.
- **Precision Section Alignment**: Perfect vertical alignment and layout consistency across `#hero`, `#about`, `#projects`, `#tools`, and `#contact`.

---

## ✨ Core Features

| Feature | Description |
|---|---|
| 🎬 **3D Parallax Experience** | Real-time mouse movement tracking driving multi-layered 3D background & character tilt/sway across all sections |
| 🔴 **Awwwards-Style UI** | Bold red (`#D71920`) design accents, glowing arch rings, orbital red dots, and 3D square cubes |
| 🕹️ **Centered 3D Characters** | Precisely centered 3D character avatars framed inside illuminated floor rings and arch orbits |
| 🎯 **Case Study Pages** | Dedicated deep-dive case studies for Ostaagaar and Ambition Aqua Biotech |
| 📱 **Device Responsive** | Pixel-perfect desktop, tablet, and mobile breakpoints (`1024px`, `768px`, `480px`) |
| ⚡ **Smooth Scroll Experience** | Native smooth scrolling across anchor navigation targets (`#hero`, `#about`, `#projects`, `#tools`, `#contact`) |
| 📬 **Interactive Contact Modal** | In-app contact form with input validation and toast feedback |
| 🔍 **SEO Optimised** | Dynamic head tags and meta management via `react-helmet-async` |

---

## 🛠️ Tech Stack

### Frontend & Animation
- **React 19** — Modern concurrent UI architecture
- **Vite 8** — High-performance dev server & build bundler
- **Framer Motion 13** — Scroll-triggered motion, page transitions, and element entry states
- **GSAP 3** — Complex scroll timelines and magnetic cursor physics
- **Three.js + React Three Fiber** — 3D interactive stage elements

### Styling & Design System
- **Vanilla CSS** with CSS Custom Properties (`:root` tokens)
- **Glassmorphic & Transparent Surfaces** with high-contrast typography
- **Awwwards Color Palette**: Charcoal/Dark (`#111111`), Crimson Red (`#D71920`), Pure White (`#FFFFFF`)

### Dependencies & Tools
- `react-router-dom` v7 — Client-side SPA routing
- `lucide-react` — Crisp iconography
- `react-hot-toast` — In-app toast notifications
- `react-helmet-async` — Dynamic page title and meta tag management

---

## 📁 Project Structure

```
surajit-portfolio/
├── public/
│   └── images/                     # Project screenshots & gallery assets
│       ├── project/
│       │   ├── ostaagar/           # Ostaagaar marketplace screenshots
│       │   └── ambition-aqua-biotech/  # Ambition Aqua screenshots
├── src/
│   ├── assets/                     # Static icons & branding assets
│   ├── components/                 # Core page sections & UI components
│   │   ├── Navigation.jsx          # 52px Navbar with responsive toggle
│   │   ├── Hero.jsx                # Landing hero section with TV monitor HUD & 3D character
│   │   ├── About.jsx               # About section with dual arch rings & orbital shapes
│   │   ├── Projects.jsx            # Featured Work section with project rows
│   │   ├── Tools.jsx               # Skills & Tools section with 8-tile tech grid
│   │   ├── Contact.jsx             # Contact section with CTA & form modal
│   │   ├── ContactModal.jsx        # In-app contact form modal
│   │   ├── Cursor.jsx              # Magnetic custom cursor
│   │   ├── PageTransition.jsx      # Animated route wrapper
│   │   ├── SEO.jsx                 # Dynamic page head manager
│   │   └── projects/               # Case study sub-components
│   ├── data/
│   │   ├── media.js                # Cloudinary image paths & character assets
│   │   ├── profile.js              # Bio, experience, testimonials, social links
│   │   ├── projects.js             # Projects data & case study content
│   │   └── tools.js                # Tech stack & software items
│   ├── pages/
│   │   ├── Home.jsx                # Assembles all 5 main sections
│   │   ├── AmbitionAqua.jsx        # Case study page — Ambition Aqua Biotech
│   │   └── Ostaagaar.jsx           # Case study page — Ostaagaar Ecosystem
│   ├── App.jsx                     # Main router entry & global layout
│   ├── App.css                     # Comprehensive design system stylesheet
│   ├── CaseStudy.css               # Case study presentation styles
│   ├── index.css                   # Global reset & CSS variables
│   └── main.jsx                    # React root renderer
├── .gitignore                      # Git ignore rules (node_modules, dist, logs, secrets)
├── LICENSE                         # MIT License
├── README.md                       # Documentation
├── package.json                    # Project scripts & dependencies
└── vite.config.js                  # Vite configuration
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

### 3. Start local dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or `http://localhost:5174`) in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 📋 Featured Projects

### 🐟 Ambition Aqua Biotech
> Premium website & digital experience for an aquaculture biotech company.
- **Role:** Web Design & Full-Stack Development
- **Tech:** React, CSS, JavaScript
- **Live Site:** [ambitionaquabiotech.in](https://ambitionaquabiotech.in)

---

### 🏭 Ostaagaar — B2B Wholesale Ecosystem
> B2B wholesale marketplace connecting manufacturers with clothing retailers.
- **Role:** Product Design & Full-Stack Mobile Development
- **Tech:** Flutter, Dart, Firebase, React
- **Ecosystem:**
  - 📱 **Customer App** — Bulk order placement & inventory catalog
  - 🏭 **Manufacturer App** — Order processing & product management
  - 🌐 **B2B Web Platform** — Platform landing & web portal

---

## 🤝 Connect & Socials

| Platform | Link |
|---|---|
| 📧 **Email** | [surajit140398@gmail.com](mailto:surajit140398@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/surajit-mondal-904773248](https://www.linkedin.com/in/surajit-mondal-904773248/) |
| 🐙 **GitHub** | [github.com/Surajit140398](https://github.com/Surajit140398) |
| 📱 **WhatsApp** | [+91 95470 86921](https://wa.me/919547086921) |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

> **Note:** Personal content, branding, images, and identity belong to **Surajit Mondal**. Please do not republish personal photos or case study details as your own.

---

<div align="center">

Made with ❤️ by **Surajit Mondal**

</div>
