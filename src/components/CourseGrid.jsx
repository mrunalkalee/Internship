import { useMemo, useState } from "react";
import { categories } from "../data/courses.js";
import SearchBar from "./SearchBar.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import CourseCard from "./CourseCard.jsx";

export default function CourseGrid({ courses }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;

      if (!normalizedQuery) {
        return matchesCategory;
      }

      const searchableText = [
        course.title,
        course.description,
        course.category,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [courses, query, activeCategory]);

  return (
    <section id="courses" className="container-app py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">
            Explore Courses
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Find your next course by name or category.
          </p>
        </div>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-6">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />
        {(query.trim() || activeCategory !== "All") && (
          <p className="mt-3 text-sm text-slate-500">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>
        )}
      </div>

      {filteredCourses.length > 0 ? (
        // Grid: 1 course/row on mobile, 2/row on tablet, 3/row on desktop
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-16 text-center">
          <p className="font-heading text-lg font-semibold text-slate-700">
            No courses found.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Try a different search term or category.
          </p>
        </div>
      )}
    </section>
  );
}
