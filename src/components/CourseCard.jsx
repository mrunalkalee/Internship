import { progressBarStyles, statusStyles } from "../data/courses.js";

// Status badge styling uses a lookup object of complete, static Tailwind
// class strings (see data/courses.js) rather than building class names
// like `bg-${color}-500` at runtime — dynamic strings like that are not
// picked up by Tailwind's class scanner and silently produce no styles.
export default function CourseCard({ course, compact = false }) {
  const { title, description, category, image, progress, status } = course;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-40 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
          {category}
        </span>

        <h3 className="mt-3 font-heading text-base font-semibold text-slate-900">
          {title}
        </h3>

        {!compact && (
          <p className="mt-1.5 line-clamp-2 text-sm text-slate-500">
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
          >
            {status}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {progress}%
          </span>
        </div>

        {/* Progress bar: width is set via an inline style, since the
           percentage is fully dynamic data, not a class name. */}
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100"
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
