import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Courses() {
  const categories = [
    "Computer Science",
    "Electronics & Communication",
    "Mechanical/Automobile",
    "Civil/Architecture",
    "Marketing & Management",
    "Personality Development",
  ];

  const courses = [
    { category: "Computer Science", title: "Machine Learning with Python", duration: "3 Months", live: true,  img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Computer Science", title: "Full Stack Web Development",    duration: "4 Months", live: true,  img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Computer Science", title: "Data Structure & Algorithms",   duration: "3 Months", live: true,  img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Computer Science", title: "Artificial Intelligence",       duration: "3 Months", live: true,  img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Computer Science", title: "Cyber Security",                duration: "3 Months", live: false, img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Computer Science", title: "Data Science",                  duration: "3 Months", live: true,  img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Electronics & Communication", title: "VLSI Design",        duration: "4 Months", live: true,  img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Mechanical/Automobile",       title: "Automobile Engineering", duration: "5 Months", live: true, img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    { category: "Civil/Architecture",          title: "Structural Engineering",  duration: "6 Months", live: false,img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" },
    // (you can append more items as needed)
  ];

  const [activeCategory, setActiveCategory] = useState("Computer Science");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCourses = useMemo(
    () => courses.filter((c) => c.category === activeCategory),
    [courses, activeCategory]
  );

  const wrapperRef = useRef(null);

  useEffect(() => {
    // Initialize AOS one time
    AOS.init({ duration: 700, easing: "ease-out-quart", once: true });

    // GSAP: section intro
    const ctx = gsap.context(() => {
      gsap.from(".prg-title", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".prg-subtitle", {
        opacity: 0,
        y: 18,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      });

      // GSAP: categories (stagger)
      gsap.from(".cat-chip", {
        opacity: 0,
        y: 16,
        stagger: 0.06,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cat-chip",
          start: "top 96%",
        },
      });

      // GSAP: cards on scroll (stagger each row)
      gsap.utils.toArray(".course-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          delay: (i % 6) * 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Floating blobs background
      gsap.to(".blob-1", {
        y: 30,
        x: 20,
        scale: 1.05,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".blob-2", {
        y: -25,
        x: -30,
        scale: 0.98,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const handleShowMore = () => setVisibleCount((v) => v + 6);

  return (
    <section
      ref={wrapperRef}
      className="
        relative w-full
        bg-gradient-to-b from-[#0a0f2c] via-[#0a0f2c]/50 to-[#f8fafc]
        pt-24 pb-20 overflow-hidden
      "
    >
      {/* smooth blend from dark hero */}
      <div className="pointer-events-none absolute -top-10 left-0 h-24 w-full bg-gradient-to-b from-[#0a0f2c] to-transparent" />

      {/* decorative blobs */}
      <div className="blob-1 absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="blob-2 absolute -right-20 top-48 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="prg-title text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Empower Your Career with World-Class Learning
        </h1>
        <p className="prg-subtitle mt-4 text-base sm:text-lg text-slate-300">
          Discover curated programs aligned with your interests and market needs—so you learn what truly
          moves your career forward.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-12">
        {/* Sidebar (desktop) */}
        <aside
          className="
            md:col-span-3 lg:col-span-3
            hidden md:block
            sticky top-24 self-start
          "
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
  key={cat}
  onClick={() => {
    setActiveCategory(cat);
    setVisibleCount(6);
  }}
  className={`
    w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-all duration-300
    ${active
      ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md"
      : "bg-slate-700/40 text-slate-200 hover:bg-slate-600/60 hover:text-white"}
  `}
>
  {cat}
</button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Mobile chips */}
        <div className="md:hidden md:col-span-0">
          <div className="no-scrollbar -mx-6 mb-2 flex gap-2 overflow-x-auto px-6">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`
                    cat-chip whitespace-nowrap rounded-full border px-4 py-2 text-sm transition
                    ${active
                      ? "border-indigo-500 bg-indigo-600 text-white"
                      : "border-white/20 bg-white/10 text-slate-200 hover:bg-white/20"}
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <main className="md:col-span-9">
          <div
            className="
              grid grid-cols-1 gap-6
              sm:grid-cols-2 lg:grid-cols-3
            "
          >
            {filteredCourses.slice(0, visibleCount).map((course, i) => (
              <article
                key={`${course.title}-${i}`}
                className="
                  course-card group overflow-hidden rounded-2xl border border-white/10
                  bg-white/70 backdrop-blur transition
                  hover:-translate-y-1 hover:shadow-2xl
                "
                data-aos="fade-up"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* live badge */}
                  {course.live && (
                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white shadow">
                      <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                      Live
                    </div>
                  )}

                  {/* gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0" />
                </div>

                <div className="p-4">
                  <span className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {course.category}
                  </span>

                  <h3 className="mt-2 line-clamp-2 text-lg font-bold text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-amber-600"
                    >
                      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 1.5a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {course.duration} Course
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href="#"
                      className="text-sm font-semibold text-amber-600 hover:text-amber-700"
                    >
                      Learn more →
                    </a>

                    <button
                      className="
                        rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white
                        transition hover:bg-slate-800
                      "
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Show more */}
          {visibleCount < filteredCourses.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleShowMore}
                className="
                  show-more-btn rounded-full bg-gradient-to-r from-indigo-600 to-violet-600
                  px-6 py-3 text-sm font-semibold text-white shadow-lg
                  transition hover:shadow-xl active:scale-95
                "
                data-aos="zoom-in"
              >
                Show More
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
