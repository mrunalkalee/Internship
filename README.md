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
 
## 🧩 Advanced Tailwind CSS Assignment
 
This section documents the upgrade made on top of the base LearnSphere dashboard: a course details modal, a notification center, and a pass of UI fixes/refactoring — all implemented without changing existing design language or business logic.
 
**Branch name:** `learnsphere`
 
### How to run
 
Same as the base setup above — no new setup steps are required:
 
```bash
npm install
npm run dev
```
 
### Feature 1 — Course Details Modal
 
- Every `CourseCard` now shows a **View Details** button next to the existing primary action button.
- Clicking it opens a reusable `CourseDetailsModal` (`src/components/CourseDetailsModal.jsx`), which receives the selected `course` object via props — the modal never duplicates course data, it's the single source of truth already used elsewhere in the app (`src/data/courses.js`).
- The modal is controlled from `App.jsx` (`selectedCourse` state), so a single modal instance is shared by every card in `CourseGrid` and `ContinueLearning`.
- **Overlay:** `fixed inset-0 bg-black/50` centers the modal with flexbox and darkens/blocks the page behind it.
- **Responsive sizing:** `w-[95%]` on mobile, `sm:max-w-2xl` on tablet, `lg:max-w-3xl` on desktop — always centered.
- **Overflow:** `max-h-[90vh] overflow-y-auto overflow-x-hidden` so the modal scrolls internally instead of the page.
- **Closing:** supports the close button, clicking the overlay, and the `Escape` key. Clicks inside the modal call `stopPropagation` so they don't close it.
- **Accessibility:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing at the title, a close button with `aria-label="Close course details"` and an `sr-only` label, and focus is moved to the close button on open.
### Feature 2 — Notification Center
 
- `Navbar` now has a **notification bell** (desktop and mobile) with an unread-count badge, positioned with `relative`/`absolute`.
- Notification data lives in `src/data/notifications.js` — 10 notifications (3 unread, 7 read), each with `id`, `title`, `message`, `time`, and `read`.
- Clicking the bell toggles a `NotificationPanel` (React state, no page navigation): a right-aligned dropdown on desktop, a full-width inset panel on mobile that always stays inside the viewport.
- Each entry renders through a reusable `NotificationItem` component with **conditional Tailwind classes** (not dynamically generated class names) — unread items get a stronger background, bold title, and a blue indicator dot; read items use lighter text and no dot.
- The panel body is height-limited with `max-h-96 overflow-y-auto overflow-x-hidden`, so a long notification list scrolls inside the panel instead of the page.
- **Accessibility:** the bell has `aria-label="Open notifications"` with an `sr-only` label, and visible `focus-visible` ring states.
- **Sticky navbar:** already used `sticky top-0 backdrop-blur bg-white/90`; kept as-is and only its `z-index` was adjusted (see below) so it layers correctly with the new panel and modal.
### Z-index layering
 
To keep the modal always above the notification panel, and the panel always above the sticky navbar, the stacking order is:
 
```
Normal content  →  Sticky Navbar (z-40)  →  Notification Panel (z-50)  →  Modal Overlay (z-[60])
```
 
The mobile nav menu (which is part of the navbar itself) was adjusted to `z-30`/`z-40` so it stays below the notification panel and modal rather than competing with them.
 
### Three UI fixes
 
1. **Spacing/alignment fix** — `CourseCard`'s single full-width action button was replaced with a `flex flex-wrap` row (`min-w-[140px] flex-1` per button) so the new "View Details" button sits cleanly beside the existing button on wide cards and wraps to its own line on narrow ones, instead of overflowing or squeezing text.
2. **Responsive fix** — the notification dropdown used to be designed only as a right-aligned desktop dropdown; it's now `fixed inset-x-4` on mobile (`sm:absolute sm:right-0` on larger screens) so it can never overflow the screen edge on small devices.
3. **Overflow/positioning fix** — the course modal uses `w-[95%]` with `overflow-x-hidden` and `max-h-[90vh] overflow-y-auto`, preventing both horizontal overflow on narrow viewports and page-level scroll when the content is tall.
### Tailwind concepts used
 
- Utility-first refactor: repeated navbar icon-button classes (dark mode toggle, search, notification bell) were consolidated into a single `.icon-btn` component class in `src/index.css` via `@layer components`, cutting duplication without changing appearance.
- Conditional class strings (ternaries) instead of dynamic class name interpolation, so Tailwind's class scanner can always find the classes at build time.
- Responsive prefixes (`sm:`, `lg:`) for modal and panel sizing.
- Z-index utilities (`z-30` to `z-[60]`) for explicit stacking order.
- `focus-visible` utilities for keyboard-accessible focus rings on all new interactive elements.
### Accessibility improvements
 
- Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-label` + `sr-only` text on the close button, focus moved on open, `Escape` to close.
- Notification bell: `aria-label`, `aria-expanded`, `sr-only` text, visible focus ring.
- Notification panel: `role="dialog"` with `aria-label="Notifications"`.
### Responsive testing
 
Manually verified at 375px, 768px, 1024px, and 1440px: no horizontal overflow, correct notification panel positioning, modal sizing at each breakpoint, sticky navbar behavior, course card alignment, and text wrapping.
 
### Custom CSS
 
No custom CSS beyond Tailwind's `@layer components` was needed — every new UI element (modal, overlay, notification panel, badge, icon button) is built entirely from Tailwind utility classes.
 
---
 
## 📝 License
 
This project was built for educational purposes as part of a frontend training assignment.
 