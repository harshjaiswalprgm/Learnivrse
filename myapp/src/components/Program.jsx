import React, { useState } from "react";

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
    {
      category: "Computer Science",
      title: "Machine Learning with Python",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Computer Science",
      title: "Full Stack Web Development",
      duration: "4 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Computer Science",
      title: "Data Structure & Algorithms",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Computer Science",
      title: "Artificial Intelligence",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Computer Science",
      title: "Cyber Security",
      duration: "3 Months",
      live: false,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Computer Science",
      title: "Data Science",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
      {
      category: "Computer Science",
      title: "Data Science",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
      {
      category: "Computer Science",
      title: "Data Science",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
      {
      category: "Computer Science",
      title: "Data Science",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
      {
      category: "Computer Science",
      title: "Data Science",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
      {
      category: "Computer Science",
      title: "Data Science",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
      {
      category: "Computer Science",
      title: "Data Science",
      duration: "3 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },

    {
      category: "Electronics & Communication",
      title: "VLSI Design",
      duration: "4 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Mechanical/Automobile",
      title: "Automobile Engineering",
      duration: "5 Months",
      live: true,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Civil/Architecture",
      title: "Structural Engineering",
      duration: "6 Months",
      live: false,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Civil/Architecture",
      title: "Structural Engineering",
      duration: "6 Months",
      live: false,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Civil/Architecture",
      title: "Structural Engineering",
      duration: "6 Months",
      live: false,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },
    {
      category: "Civil/Architecture",
      title: "Structural Engineering",
      duration: "6 Months",
      live: false,
      img: "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1755151881~exp=1755155481~hmac=4c329f487cbae2eff352b8208318ceb23022843a4511b91048ca18b97eb0c217&w=740",
    },

  ];

  const [activeCategory, setActiveCategory] = useState("Computer Science");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCourses = courses.filter(
    (course) => course.category === activeCategory
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div style={{ backgroundColor: "#f9fafb", padding: "50px 0" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
          Empower Your Career with World-Class Learning
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>
          Discover a curated selection of programs designed to match your interests, career aspirations, and industry trends — so you learn exactly what matters most for your future success.
        </p>
      </div>

      {/* Main Content Wrapper */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
        }}
      >
        {/* Sidebar Categories */}
        <div style={{ flex: "1", maxWidth: "250px" }}>
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(6); // reset to 6 when category changes
              }}
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "10px",
                backgroundColor: activeCategory === cat ? "#eef2ff" : "#fff",
                color: activeCategory === cat ? "#4f46e5" : "#000",
                fontWeight: activeCategory === cat ? "bold" : "normal",
                cursor: "pointer",
              }}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Course Cards */}
        <div
          style={{
            flex: "3",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredCourses.slice(0, visibleCount).map((course, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                backgroundColor: "#fff",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={course.img}
                alt={course.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "16px" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                    fontSize: "12px",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    marginBottom: "8px",
                  }}
                >
                  {course.category}
                </span>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "6px",
                    fontWeight: "bold",
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    marginBottom: "8px",
                  }}
                >
                  {course.duration} Course
                </p>
                {course.live && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.85rem",
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    🔴 Live
                  </span>
                )}
                <a
                  href="#"
                  style={{
                    color: "#f59e0b",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {visibleCount < filteredCourses.length && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={handleShowMore}
            style={{
              backgroundColor: "#4f46e5",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
