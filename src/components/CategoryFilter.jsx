export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            aria-pressed={isActive}
            className={
              isActive
                ? "rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition-colors"
                : "rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
