import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore Courses", href: "#courses" },
  { label: "My Learning", href: "#continue-learning" },
  { label: "Profile", href: "#profile" },
];

export default function Navbar() {
  // Flexbox is used here to align the logo, links, and actions in one row
  // on desktop, and to stack the mobile panel below the bar.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="container-app flex h-16 items-center justify-between gap-4">
        {/* Logo / app name */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-heading text-sm font-bold text-white">
            LS
          </span>
          <span className="font-heading text-lg font-semibold text-slate-900">
            LearnSphere
          </span>
        </a>

        {/* Desktop links — hidden on mobile, shown from md breakpoint up */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions: search icon + avatar */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            aria-label="Search courses"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand-700"
          >
            <FiSearch size={18} />
          </button>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-plum-100 font-heading text-sm font-semibold text-plum-700"
            title="Student profile"
          >
            AS
          </div>
        </div>

        {/* Mobile menu toggle — hidden on desktop */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <ul className="container-app flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-1 flex items-center gap-3 border-t border-slate-100 px-3 pt-3">
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <FiSearch size={16} /> Search
              </button>
              <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-plum-100 font-heading text-xs font-semibold text-plum-700">
                AS
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
