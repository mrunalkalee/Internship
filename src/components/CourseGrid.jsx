import { useEffect, useMemo, useState } from "react";
import { FiHeart, FiSearch } from "react-icons/fi";
import { categories, sortCourses } from "../data/courses.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import SearchBar from "./SearchBar.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import SortSelect from "./SortSelect.jsx";
import CourseCard from "./CourseCard.jsx";

const INITIAL_VISIBLE = 6;

export default function CourseGrid({
  courses,
  favoriteIds,
  isFavorite,
  onToggleFavorite,
  activeCategory,
  onCategoryChange,
}) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useLocalStorage("learnsphere-sort", "default");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = courses.filter((course) => {
      const matchesFavorites =
        activeCategory !== "Favorites" || favoriteIds.includes(course.id);

      const matchesCategory =
        activeCategory === "All" ||
        activeCategory === "Favorites" ||
        course.category === activeCategory;

      if (!normalizedQuery) {
        return matchesCategory && matchesFavorites;
      }

      const searchableText = [
        course.title,
        course.description,
        course.category,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = searchableText.includes(normalizedQuery);

      return matchesCategory && matchesFavorites && matchesQuery;
    });

    return sortCourses(filtered, sortBy);
  }, [courses, query, activeCategory, sortBy, favoriteIds]);

  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCourses.length;

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [query, activeCategory, sortBy]);

  const clearFilters = () => {
    setQuery("");
    onCategoryChange("All");
  };

  const hasActiveFilters =
    query.trim() !== "" || (activeCategory !== "All" && activeCategory !== "Favorites");

  const emptyMessage =
    activeCategory === "Favorites"
      ? {
          title: "No favorite courses yet",
          description:
            "Tap the heart icon on any course to save it here for quick access.",
        }
      : hasActiveFilters
        ? {
            title: "No courses found",
            description:
              "Try a different search term or category, or clear your filters.",
          }
        : {
            title: "No courses available",
            description: "Check back soon — new courses are added regularly.",
          };

  return (
    <section id="courses" className="container-app py-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">Explore Courses</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Find your next course by name or category.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
          <SearchBar value={query} onChange={setQuery} />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      <div className="mt-6">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onSelect={onCategoryChange}
        />
        {(query.trim() || activeCategory !== "All") && (
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>
        )}
      </div>

      {filteredCourses.length > 0 ? (
        <>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isFavorite={isFavorite(course.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + INITIAL_VISIBLE)}
                className="btn-secondary"
              >
                Show More ({filteredCourses.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 py-16 text-center dark:border-slate-700">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            {activeCategory === "Favorites" ? (
              <FiHeart size={28} className="text-slate-400 dark:text-slate-500" />
            ) : (
              <FiSearch size={28} className="text-slate-400 dark:text-slate-500" />
            )}
          </div>
          <p className="mt-4 font-heading text-lg font-semibold text-slate-700 dark:text-slate-200">
            {emptyMessage.title}
          </p>
          <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            {emptyMessage.description}
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="btn-primary mt-6"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </section>
  );
}
