import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import ContinueLearning from "./components/ContinueLearning.jsx";
import CourseGrid from "./components/CourseGrid.jsx";
import Footer from "./components/Footer.jsx";
import { courses } from "./data/courses.js";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-25">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection courses={courses} />
        <ContinueLearning courses={courses} />
        <CourseGrid courses={courses} />
      </main>
      <Footer />
    </div>
  );
}
