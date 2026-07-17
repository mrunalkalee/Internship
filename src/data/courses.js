// Sample course catalogue for LearnSphere.
// In a real product this would come from an API — here it powers
// search, category filters, and the "Continue Learning" section.

export const categories = [
  "All",
  "Development",
  "Cloud",
  "Design",
  "DevOps",
  "Favorites",
];

export const sortOptions = [
  { value: "default", label: "Default" },
  { value: "title-asc", label: "Title (A–Z)" },
  { value: "title-desc", label: "Title (Z–A)" },
  { value: "progress-high", label: "Progress (High to Low)" },
  { value: "progress-low", label: "Progress (Low to High)" },
  { value: "status", label: "Status" },
];

export const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the fundamentals of React and build modern, component-driven web apps.",
    category: "Development",
    image: "https://picsum.photos/seed/learnsphere-react/600/400",
    progress: 65,
    status: "In Progress",
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    description: "Deepen your understanding of closures, prototypes, and async patterns in JS.",
    category: "Development",
    image: "https://picsum.photos/seed/learnsphere-js/600/400",
    progress: 40,
    status: "In Progress",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    description: "Get hands-on with core AWS services and prepare for the certification exam.",
    category: "Cloud",
    image: "https://picsum.photos/seed/learnsphere-aws/600/400",
    progress: 100,
    status: "Completed",
  },
  {
    id: 4,
    title: "UI/UX Design Foundations",
    description: "Master the principles of user-centred design, wireframing, and prototyping.",
    category: "Design",
    image: "https://picsum.photos/seed/learnsphere-uiux/600/400",
    progress: 20,
    status: "In Progress",
  },
  {
    id: 5,
    title: "Docker & Kubernetes Essentials",
    description: "Containerize applications and orchestrate deployments with confidence.",
    category: "DevOps",
    image: "https://picsum.photos/seed/learnsphere-docker/600/400",
    progress: 0,
    status: "Not Started",
  },
  {
    id: 6,
    title: "Figma for Product Teams",
    description: "Design, prototype, and hand off polished interfaces using Figma.",
    category: "Design",
    image: "https://picsum.photos/seed/learnsphere-figma/600/400",
    progress: 100,
    status: "Completed",
  },
  {
    id: 7,
    title: "CI/CD Pipelines with GitHub Actions",
    description: "Automate testing and deployment workflows for modern software teams.",
    category: "DevOps",
    image: "https://picsum.photos/seed/learnsphere-cicd/600/400",
    progress: 0,
    status: "Not Started",
  },
  {
    id: 8,
    title: "Google Cloud Fundamentals",
    description: "Understand core GCP services for compute, storage, and networking.",
    category: "Cloud",
    image: "https://picsum.photos/seed/learnsphere-gcp/600/400",
    progress: 55,
    status: "In Progress",
  },
  {
    id: 9,
    title: "TypeScript for React Developers",
    description: "Add type safety to your React apps and catch bugs before they ship.",
    category: "Development",
    image: "https://picsum.photos/seed/learnsphere-ts/600/400",
    progress: 100,
    status: "Completed",
  },
];

// Complete, static Tailwind class strings — required so the class scanner
// picks them up (dynamic class names like `bg-${color}-500` won't work).
export const statusStyles = {
  Completed:
    "bg-success-100 text-success-700 border border-success-500/30 dark:bg-success-600/20 dark:text-success-400 dark:border-success-500/40",
  "In Progress":
    "bg-warning-100 text-warning-700 border border-warning-500/30 dark:bg-warning-600/20 dark:text-warning-400 dark:border-warning-500/40",
  "Not Started":
    "bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600",
};

const STATUS_ORDER = { "In Progress": 0, "Not Started": 1, Completed: 2 };

export function sortCourses(courses, sortBy) {
  const sorted = [...courses];

  switch (sortBy) {
    case "title-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "progress-high":
      return sorted.sort((a, b) => b.progress - a.progress);
    case "progress-low":
      return sorted.sort((a, b) => a.progress - b.progress);
    case "status":
      return sorted.sort(
        (a, b) => (STATUS_ORDER[a.status] ?? 99) - (STATUS_ORDER[b.status] ?? 99)
      );
    default:
      return sorted;
  }
}

export const progressBarStyles = {
  Completed: "bg-success-600",
  "In Progress": "bg-warning-500",
  "Not Started": "bg-slate-400",
};
