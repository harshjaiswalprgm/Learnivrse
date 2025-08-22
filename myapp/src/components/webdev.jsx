import React from "react";

const CoursesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold">Python for Everybody Specialization</h1>
        <p className="mt-2 text-lg text-gray-600">
          Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze,
          and visualize data.
        </p>

        <div className="mt-6 flex flex-wrap gap-6 items-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700">
            Enroll for Free
          </button>
          <p className="text-gray-500">1,828,558 already enrolled</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 bg-white shadow-md rounded-xl p-6">
          <div>
            <p className="font-semibold">5 course series</p>
            <p className="text-sm text-gray-500">In-depth knowledge</p>
          </div>
          <div>
            <p className="font-semibold">⭐ 4.8</p>
            <p className="text-sm text-gray-500">216,702 reviews</p>
          </div>
          <div>
            <p className="font-semibold">Beginner level</p>
            <p className="text-sm text-gray-500">No prior experience</p>
          </div>
          <div>
            <p className="font-semibold">Flexible schedule</p>
            <p className="text-sm text-gray-500">2 months, 10hrs/week</p>
          </div>
          <div>
            <p className="font-semibold">Degree pathway</p>
            <p className="text-sm text-gray-500">Build towards a degree</p>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold">What you’ll learn</h2>
          <p className="mt-2 text-gray-600">
            This Specialization builds on the success of the Python for Everybody course
            and introduces fundamental programming concepts including data structures,
            APIs, and databases. In the Capstone Project, you’ll design and create
            applications for data retrieval, processing, and visualization.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Database Design", "Data Structures", "Databases", "SQL", "Python Programming", "Web Scraping", "Data Collection"].map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-200 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER PREP */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Prepare for a career as a Python Developer</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Learn in-demand skills from university and industry experts</li>
              <li>✔ Hands-on projects and practical knowledge</li>
              <li>✔ Deep understanding of key concepts</li>
              <li>✔ Earn a certificate from University of Michigan</li>
            </ul>
            <a href="#" className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
              Explore this role →
            </a>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <p className="text-2xl font-bold">₹681,505</p>
            <p className="text-sm text-gray-500">Median entry-level salary (India)</p>
            <p className="mt-4 text-2xl font-bold">27,028</p>
            <p className="text-sm text-gray-500">Job openings for Python Developers</p>
          </div>
        </div>
      </section>

      {/* EXTRA CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold">Open new doors with Coursera Plus</h3>
          <p className="mt-2 text-gray-600">Access 10,000+ world-class courses & job-ready programs</p>
          <a href="#" className="text-blue-600 font-semibold mt-3 inline-block">Learn more →</a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold">Advance your career with an online degree</h3>
          <p className="mt-2 text-gray-600">Earn a degree from world-class universities, 100% online.</p>
          <a href="#" className="text-blue-600 font-semibold mt-3 inline-block">Explore degrees →</a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold">Join 3,400+ companies using Coursera</h3>
          <p className="mt-2 text-gray-600">Upskill your employees to excel in the digital economy</p>
          <a href="#" className="text-blue-600 font-semibold mt-3 inline-block">Learn more →</a>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
