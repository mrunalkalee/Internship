# LearnSphere — Student Learning Dashboard

LearnSphere is a responsive, frontend-only student learning dashboard built with **React**, **Vite**, and **Tailwind CSS**. It lets a student explore courses, search and filter by category, track learning progress, and resume in-progress courses — all from a single clean interface.

> This is a training/assignment project: there is no backend, database, or authentication. All course data lives in `src/data/courses.js`.

---

## ✨ Features

- Responsive navbar with a mobile-friendly slide-down menu
- Hero/welcome section with a call-to-action
- Learning statistics (total, completed, in-progress courses, certificates)
- Live course search (case-insensitive, powered by React state)
- Category filters (All, Development, Cloud, Design, DevOps) with active-state styling
- "Continue Learning" section that surfaces only in-progress courses
- Reusable `CourseCard` with status badge, progress bar, and action button
- Fully responsive from 375px (mobile) up to 1440px+ (large desktop)
- Custom design system: brand colors, semantic status colors, and Google Fonts (Poppins + Inter)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon set (Feather icons) |

No UI frameworks (Bootstrap, Material UI, Chakra UI, Ant Design, etc.) are used — all UI is built with Tailwind utility classes.

---

## 📁 Project Structure

```
learnsphere/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── StatsCard.jsx
│   │   ├── StatsSection.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseGrid.jsx
│   │   ├── ContinueLearning.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── courses.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Setup Instructions

Follow these steps to run LearnSphere on your machine.

### Prerequisites

Before you start, make sure you have:

| Requirement | How to check |
|---|---|
| **Node.js v18+** | Run `node -v` in your terminal |
| **npm** (included with Node.js) | Run `npm -v` in your terminal |

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/) (LTS version recommended).

### Step 1 — Open the project folder

```bash
cd learnsphere
```

> If you cloned or downloaded the project, `cd` into the folder that contains `package.json`.

### Step 2 — Install dependencies

```bash
npm install
```

This downloads React, Vite, Tailwind CSS, and all other packages listed in `package.json`. You only need to run this once (or again after pulling new dependency changes).

### Step 3 — Start the development server

```bash
npm run dev
```

Vite will start a local dev server. Open the URL shown in your terminal — usually:

```
http://localhost:5173
```

> If port 5173 is already in use, Vite will pick the next available port (e.g. `5174`). Always use the URL printed in the terminal.

The page reloads automatically when you save changes to any source file.

### Step 4 — Stop the server

Press `Ctrl + C` in the terminal to stop the dev server.

---

### Other available commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally (run `build` first) |
| `npm run lint` | Check the code for ESLint errors |

**Preview a production build:**

```bash
npm run build
npm run preview
```

---

### Troubleshooting

| Problem | Solution |
|---|---|
| `node` or `npm` not recognized | Install Node.js from [nodejs.org](https://nodejs.org/) and restart your terminal |
| `npm install` fails | Delete `node_modules` and `package-lock.json`, then run `npm install` again |
| Port already in use | Use the alternate port Vite suggests, or stop the other process using that port |
| Blank page or styles missing | Make sure you ran `npm install` and restarted `npm run dev` |
| Images not loading | Course images load from an external URL (`picsum.photos`) — an internet connection is required |

---

## 🎨 Design System

| Token | Value | Used for |
|---|---|---|
| `brand-600` | `#372fe0` | Primary actions, links, active states |
| `plum-500` | `#a63fb4` | Secondary accents, avatar, highlights |
| `success-500` | `#1ea957` | "Completed" status |
| `warning-500` | `#e2a412` | "In Progress" status |
| Heading font | Poppins | All headings (`font-heading`) |
| Body font | Inter | Body text (`font-body`) |

All custom tokens are defined once in `tailwind.config.js` and reused consistently across every component — no ad‑hoc colors are introduced in individual files.

### Notes on implementation choices

- **Status badges** use a static lookup object (`statusStyles` in `src/data/courses.js`) mapping each status to a complete Tailwind class string, instead of building class names dynamically (e.g. `` `bg-${color}-500` ``), which Tailwind cannot statically detect.
- **Progress bars** set their fill width with an inline `style={{ width: `${progress}%` }}` on the `CourseCard` component, since the percentage is fully dynamic data rather than a fixed set of classes.
- **Flexbox** is used in the navbar, hero section, category filters, and footer for one-dimensional alignment.
- **CSS Grid** is used for the statistics cards and course cards, since both are two-dimensional, reflowing layouts where item count changes based on screen size.

---

## 📱 Responsive Breakpoints Tested

| Device | Width |
|---|---|
| Mobile | 375px |
| Tablet | 768px |
| Laptop | 1024px |
| Large Desktop | 1440px |

---

## 📸 Screenshots

_Add screenshots of the mobile, tablet, and desktop views here before submission (e.g. `docs/screenshot-mobile.png`, `docs/screenshot-desktop.png`)._

---

## 📦 Deployment (optional)

This is a static Vite app, so it can be deployed to **Vercel** or **Netlify** directly:

- **Vercel:** import the GitHub repo → framework preset "Vite" → deploy.
- **Netlify:** build command `npm run build`, publish directory `dist`.

---

## 📝 License

This project was built for educational purposes as part of a frontend training assignment.
