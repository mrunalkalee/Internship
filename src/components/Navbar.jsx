import { useEffect, useState } from "react";
import { FiSearch, FiMenu, FiX, FiSun, FiMoon, FiBell } from "react-icons/fi";
import { notifications as initialNotifications } from "../data/notifications.js";
import NotificationPanel from "./NotificationPanel.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore Courses", href: "#courses" },
  { label: "My Learning", href: "#continue-learning" },
  { label: "Favorites", href: "#courses", category: "Favorites" },
  { label: "Profile", href: "#profile" },
];

export default function Navbar({ darkMode, onToggleDarkMode, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleNavClick = (link) => {
    if (link.category) {
      onNavigate?.(link.category);
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <nav className="container-app flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-heading text-sm font-bold text-white">
            LS
          </span>
          <span className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">
            LearnSphere
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => link.category && onNavigate?.(link.category)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleDarkMode}
            className="icon-btn"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            type="button"
            aria-label="Search courses"
            onClick={() => {
              document
                .getElementById("courses")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="icon-btn"
          >
            <FiSearch size={18} />
          </button>

          <div className="relative">
            <button
              type="button"
              aria-label="Open notifications"
              aria-expanded={isNotificationsOpen}
              onClick={() => setIsNotificationsOpen((prev) => !prev)}
              className="icon-btn relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              <FiBell size={18} />
              <span className="sr-only">Open notifications</span>
              {unreadCount > 0 && (
                <span
                  className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-none text-white"
                  aria-hidden="true"
                >
                  {unreadCount}
                </span>
              )}
            </button>
            {isNotificationsOpen && (
              <NotificationPanel
                notifications={notifications}
                onClose={() => setIsNotificationsOpen(false)}
              />
            )}
          </div>

          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-plum-100 font-heading text-sm font-semibold text-plum-700 dark:bg-plum-900/50 dark:text-plum-300"
            title="Student profile"
          >
            AS
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="relative">
            <button
              type="button"
              aria-label="Open notifications"
              aria-expanded={isNotificationsOpen}
              onClick={() => setIsNotificationsOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <FiBell size={20} />
              <span className="sr-only">Open notifications</span>
              {unreadCount > 0 && (
                <span
                  className="absolute right-0.5 top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-none text-white"
                  aria-hidden="true"
                >
                  {unreadCount}
                </span>
              )}
            </button>
            {isNotificationsOpen && (
              <NotificationPanel
                notifications={notifications}
                onClose={() => setIsNotificationsOpen(false)}
              />
            )}
          </div>
          <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-slate-900/40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-40 border-t border-slate-100 bg-white md:hidden dark:border-slate-800 dark:bg-slate-900">
            <ul className="container-app flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 flex items-center gap-3 border-t border-slate-100 px-3 pt-3 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"
                >
                  <FiSearch size={16} /> Search Courses
                </button>
                <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-plum-100 font-heading text-xs font-semibold text-plum-700 dark:bg-plum-900/50 dark:text-plum-300">
                  AS
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}