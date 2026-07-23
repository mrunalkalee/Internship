// Sample notification feed for LearnSphere's Notification Center.
// In a real product this would come from an API — here it powers the
// bell button's unread count and the notification dropdown panel.

export const notifications = [
  {
    id: 1,
    title: "New course added",
    message: "\"TypeScript for React Developers\" is now available in Development.",
    time: "5m ago",
    read: false,
  },
  {
    id: 2,
    title: "Certificate ready",
    message: "Your certificate for AWS Cloud Practitioner is ready to download.",
    time: "1h ago",
    read: false,
  },
  {
    id: 3,
    title: "Course reminder",
    message: "You're 65% through React for Beginners — pick up where you left off.",
    time: "3h ago",
    read: false,
  },
  {
    id: 4,
    title: "Weekly progress summary",
    message: "You completed 4 lessons this week across 3 courses.",
    time: "1d ago",
    read: true,
  },
  {
    id: 5,
    title: "New badge earned",
    message: "You unlocked the \"Consistent Learner\" badge for a 5-day streak.",
    time: "2d ago",
    read: true,
  },
  {
    id: 6,
    title: "Course updated",
    message: "Docker & Kubernetes Essentials added two new lessons on Helm.",
    time: "3d ago",
    read: true,
  },
  {
    id: 7,
    title: "Instructor announcement",
    message: "A live Q&A for Advanced JavaScript Patterns is scheduled for Friday.",
    time: "4d ago",
    read: true,
  },
  {
    id: 8,
    title: "Course recommendation",
    message: "Based on your progress, you might like Google Cloud Fundamentals.",
    time: "5d ago",
    read: true,
  },
  {
    id: 9,
    title: "Profile updated",
    message: "Your learning preferences were updated successfully.",
    time: "1w ago",
    read: true,
  },
  {
    id: 10,
    title: "Welcome to LearnSphere",
    message: "Explore courses, track progress, and earn certificates — all in one place.",
    time: "2w ago",
    read: true,
  },
];