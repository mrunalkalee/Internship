import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-md">
      <FiSearch
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for courses..."
        aria-label="Search for courses"
        className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm
          text-slate-700 shadow-sm transition-colors placeholder:text-slate-400
          focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100
          dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200
          dark:placeholder:text-slate-500 dark:focus:ring-brand-900"
      />
    </div>
  );
}
