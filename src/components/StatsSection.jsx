import { FiBookOpen, FiCheckCircle, FiClock, FiAward } from "react-icons/fi";
import StatsCard from "./StatsCard.jsx";

export default function StatsSection({ courses }) {
  const total = courses.length;
  const completed = courses.filter((c) => c.status === "Completed").length;
  const inProgress = courses.filter((c) => c.status === "In Progress").length;
  const certificates = completed; // one certificate per completed course

  const stats = [
    {
      icon: FiBookOpen,
      value: total,
      label: "Total Courses",
      tint: "bg-brand-100 text-brand-700",
    },
    {
      icon: FiCheckCircle,
      value: completed,
      label: "Completed Courses",
      tint: "bg-success-100 text-success-700",
    },
    {
      icon: FiClock,
      value: inProgress,
      label: "Courses In Progress",
      tint: "bg-warning-100 text-warning-700",
    },
    {
      icon: FiAward,
      value: certificates,
      label: "Certificates Earned",
      tint: "bg-plum-100 text-plum-700",
    },
  ];

  return (
    <section className="container-app py-12">
      <h2 className="text-xl font-semibold sm:text-2xl">Learning Statistics</h2>
      <p className="mt-1 text-sm text-slate-500">
        A quick snapshot of where you stand today.
      </p>

      {/* Grid: 1 card/row on mobile, 2/row on tablet, 4/row on large screens */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
