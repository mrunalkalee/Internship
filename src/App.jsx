import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import ContinueLearning from "./components/ContinueLearning.jsx";
import CourseGrid from "./components/CourseGrid.jsx";
import CourseDetailsModal from "./components/CourseDetailsModal.jsx";
import Footer from "./components/Footer.jsx";
import { courses } from "./data/courses.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorage("learnsphere-theme", false);
  const [favoriteIds, setFavoriteIds] = useLocalStorage(
    "learnsphere-favorites",
    []
  );
  const [activeCategory, setActiveCategory] = useLocalStorage(
    "learnsphere-category",
    "All"
  );
  // Single modal instance shared by every CourseCard — holds only the
  // selected course, never a duplicate copy of the catalogue.
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const toggleFavorite = (courseId) => {
    setFavoriteIds((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const isFavorite = (courseId) => favoriteIds.includes(courseId);

  return (
    <div className="min-h-screen bg-neutral-25 dark:bg-slate-950">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onNavigate={(category) => setActiveCategory(category)}
      />
      <main>
        <HeroSection />
        <StatsSection courses={courses} favoriteCount={favoriteIds.length} />
        <ContinueLearning
          courses={courses}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          onViewDetails={setSelectedCourse}
        />
        <CourseGrid
          courses={courses}
          favoriteIds={favoriteIds}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onViewDetails={setSelectedCourse}
        />
      </main>
      <Footer />
      <CourseDetailsModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}