import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { progressBarStyles, statusStyles } from "../data/courses.js";

/**
 * Reusable course details modal.
 * Receives the selected course via props — it never stores or duplicates
 * course data itself, so it always reflects the single source of truth
 * in `src/data/courses.js`.
 */
export default function CourseDetailsModal({ course, onClose }) {
  const closeButtonRef = useRef(null);

  // Close on Escape, lock body scroll while open, and move focus to the
  // close button so keyboard users land somewhere sensible.
  useEffect(() => {
    if (!course) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const { title, description, category, image, progress, status } = course;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-details-title"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-[95%] overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-card-hover sm:max-w-2xl lg:max-w-3xl dark:bg-slate-800"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close course details"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm transition-all duration-200 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-95 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white"
        >
          <FiX size={18} />
          <span className="sr-only">Close course details</span>
        </button>

        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover sm:h-64"
        />

        <div className="p-6 sm:p-8">
          <span className="w-fit rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            {category}
          </span>

          <h2
            id="course-details-title"
            className="mt-3 font-heading text-xl font-semibold text-slate-900 sm:text-2xl dark:text-slate-100"
          >
            {title}
          </h2>

          <div className="mt-4 flex items-center justify-between">
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
            >
              {status}
            </span>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              {progress}% complete
            </span>
          </div>

          <div
            className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className={`h-full rounded-full transition-all duration-500 ${progressBarStyles[status]}`}
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            {description}
          </p>

          <button type="button" onClick={onClose} className="btn-primary mt-6 w-full sm:w-auto">
            {status === "Completed"
              ? "View Certificate"
              : status === "Not Started"
                ? "Start Course"
                : "Continue Learning"}
          </button>
        </div>
      </div>
    </div>
  );
}