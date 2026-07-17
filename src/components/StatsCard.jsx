export default function StatsCard({ icon: Icon, value, label, tint }) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover dark:border-slate-700 dark:bg-slate-800 dark:shadow-none dark:hover:border-slate-600">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${tint}`}
      >
        <Icon size={20} />
      </div>
      <p className="mt-4 font-heading text-3xl font-bold text-slate-900 dark:text-slate-100">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}
