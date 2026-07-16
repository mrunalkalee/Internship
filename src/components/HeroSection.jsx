import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section id="home" className="bg-hero-radial bg-white">
      <div className="container-app flex flex-col items-center gap-10 py-14 md:flex-row md:py-20">
        {/* Text content — stacks above the illustration on mobile,
           sits beside it from md breakpoint up */}
        <div className="flex-1 text-center md:text-left">
          <p className="section-eyebrow">Student Dashboard</p>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Welcome Back, Student!
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-slate-600 md:mx-0">
            Continue learning and achieve your goals. Your next milestone is
            closer than you think.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href="#courses" className="btn-primary">
              Explore Courses <FiArrowRight />
            </a>
            <a href="#continue-learning" className="btn-secondary">
              Resume Learning
            </a>
          </div>
        </div>

        {/* Signature illustration: a stylised progress ring made of the
           three course-status colours, standing in for "learning momentum" */}
        <div className="flex flex-1 items-center justify-center">
          <svg
            viewBox="0 0 320 320"
            className="h-56 w-56 sm:h-72 sm:w-72"
            role="img"
            aria-label="Illustration of a circular course progress ring"
          >
            <circle cx="160" cy="160" r="130" fill="#eef1ff" />
            <circle
              cx="160"
              cy="160"
              r="104"
              fill="none"
              stroke="#e0e4ff"
              strokeWidth="20"
            />
            <circle
              cx="160"
              cy="160"
              r="104"
              fill="none"
              stroke="#4a4bfb"
              strokeWidth="20"
              strokeLinecap="round"
              strokeDasharray="653.5"
              strokeDashoffset="196"
              transform="rotate(-90 160 160)"
            />
            <circle
              cx="160"
              cy="160"
              r="104"
              fill="none"
              stroke="#a63fb4"
              strokeWidth="20"
              strokeLinecap="round"
              strokeDasharray="653.5"
              strokeDashoffset="588"
              transform="rotate(70 160 160)"
              opacity="0.85"
            />
            <text
              x="160"
              y="152"
              textAnchor="middle"
              className="font-heading"
              fontSize="46"
              fontWeight="700"
              fill="#1e1b4b"
            >
              70%
            </text>
            <text
              x="160"
              y="182"
              textAnchor="middle"
              fontSize="15"
              fill="#64748b"
            >
              this week&apos;s goal
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
