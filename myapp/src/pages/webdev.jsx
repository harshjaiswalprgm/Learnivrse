import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebDevCourse() {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section ref={addToRefs} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Web Development Mastery 2025
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Learn HTML, CSS, JavaScript, React, and GSAP animations by building
          20+ real-world projects. From beginner to advanced level.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all">
          Enroll Now - $79
        </button>
      </section>

      {/* What You'll Learn */}
      <section
        ref={addToRefs}
        className="grid md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-2xl shadow-md"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Build responsive websites from scratch</li>
            <li>Master React.js and TailwindCSS</li>
            <li>Add animations with GSAP & Framer Motion</li>
            <li>Understand backend basics with Node.js</li>
          </ul>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901760.jpg"
            alt="Web Development"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Course Content */}
      <section ref={addToRefs} className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Course Content</h2>
        <div className="space-y-4">
          {[
            "Introduction to Web Development",
            "HTML & CSS Fundamentals",
            "JavaScript Essentials",
            "React & Component Design",
            "GSAP Animation & Interactions",
            "Final Project: Build a Portfolio Website",
          ].map((topic, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar */}
      <aside
        ref={addToRefs}
        className="mt-12 bg-gray-100 p-6 rounded-2xl shadow-lg md:w-1/3"
      >
        <h3 className="text-xl font-semibold mb-4">Course Info</h3>
        <p>⏰ Duration: 3 Months</p>
        <p>📅 Start Date: 1st Sept 2025</p>
        <p>👩‍🎓 Students Enrolled: 8,542</p>
        <p>📈 Skill Level: Beginner to Advanced</p>
      </aside>
    </div>
  );
}
