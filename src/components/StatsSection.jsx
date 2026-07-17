import { FiBookOpen, FiCheckCircle, FiClock, FiHeart } from "react-icons/fi";
import StatsCard from "./StatsCard.jsx";

export default function StatsSection({ courses, favoriteCount = 0 }) {
  const total = courses.length;
  const completed = courses.filter((c) => c.status === "Completed").length;
  const inProgress = courses.filter((c) => c.status === "In Progress").length;
  const certificates = completed;

  const stats = [
    {
      icon: FiBookOpen,
      value: total,
      label: "Total Courses",
      tint: "bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300",
    },
    {
      icon: FiCheckCircle,
      value: completed,
      label: "Completed Courses",
      tint: "bg-success-100 text-success-700 dark:bg-success-600/20 dark:text-success-400",
    },
    {
      icon: FiClock,
      value: inProgress,
      label: "Courses In Progress",
      tint: "bg-warning-100 text-warning-700 dark:bg-warning-600/20 dark:text-warning-400",
    },
    {
      icon: FiHeart,
      value: favoriteCount,
      label: "Favorite Courses",
      tint: "bg-plum-100 text-plum-700 dark:bg-plum-900/40 dark:text-plum-300",
    },
  ];

  return (
    <section className="container-app py-12">
      <h2 className="text-xl font-semibold sm:text-2xl">Learning Statistics</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        A quick snapshot of where you stand today.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
