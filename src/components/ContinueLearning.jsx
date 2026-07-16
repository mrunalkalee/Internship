import CourseCard from "./CourseCard.jsx";

export default function ContinueLearning({ courses }) {
  const inProgressCourses = courses.filter(
    (course) => course.status === "In Progress"
  );

  if (inProgressCourses.length === 0) return null;

  return (
    <section id="continue-learning" className="bg-slate-50 py-12">
      <div className="container-app">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Continue Learning
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Pick up right where you left off.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inProgressCourses.map((course) => (
            <CourseCard key={course.id} course={course} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
