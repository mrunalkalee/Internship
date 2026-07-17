import { FiChevronDown } from "react-icons/fi";
import { sortOptions } from "../data/courses.js";

export default function SortSelect({ value, onChange }) {
  return (
    <div className="relative w-full sm:w-auto">
      <label htmlFor="course-sort" className="sr-only">
        Sort courses
      </label>
      <select
        id="course-sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm
          font-medium text-slate-700 shadow-sm transition-colors
          focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100
          dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:ring-brand-900"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FiChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}
