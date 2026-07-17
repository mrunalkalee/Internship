import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore Courses", href: "#courses" },
  { label: "My Learning", href: "#continue-learning" },
  { label: "Profile", href: "#profile" },
];

const socialLinks = [
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="container-app flex flex-col gap-10 py-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 font-heading text-xs font-bold text-white">
              LS
            </span>
            <span className="font-heading text-base font-semibold text-slate-900 dark:text-slate-100">
              LearnSphere
            </span>
          </a>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            A student learning dashboard for exploring courses, tracking
            progress, and earning certificates — all in one place.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Navigate
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Follow
            </p>
            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-brand-100 hover:text-brand-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-brand-900/40 dark:hover:text-brand-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-5 dark:border-slate-800">
        <p className="container-app text-center text-xs text-slate-400 md:text-left dark:text-slate-500">
          © 2026 LearnSphere. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
