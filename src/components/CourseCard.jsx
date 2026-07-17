import { FiHeart } from "react-icons/fi";
import { progressBarStyles, statusStyles } from "../data/courses.js";

export default function CourseCard({
  course,
  compact = false,
  isFavorite = false,
  onToggleFavorite,
}) {
  const { id, title, description, category, image, progress, status } = course;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover dark:border-slate-700 dark:bg-slate-800 dark:shadow-none dark:hover:border-slate-600">
      <div className="relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-40 w-full object-cover"
        />
        {onToggleFavorite && (
          <button
            type="button"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(id)}
            className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-all duration-200 ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white/90 text-slate-500 hover:bg-white hover:text-red-500 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-red-400"
            }`}
          >
            <FiHeart size={16} className={isFavorite ? "fill-current" : ""} />
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
          {category}
        </span>

        <h3 className="mt-3 font-heading text-base font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>

        {!compact && (
          <p className="mt-1.5 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
          >
            {status}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {progress}%
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

        <button type="button" className="btn-primary mt-5 w-full">
          {status === "Completed"
            ? "View Certificate"
            : status === "Not Started"
              ? "Start Course"
              : "Continue Learning"}
        </button>
      </div>
    </article>
  );
}
