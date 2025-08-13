import React, { useState, useEffect } from "react";

const images = [
  "https://img.freepik.com/free-vector/flat-hand-drawn-coworking-space_52683-54823.jpg?w=740&q=80",
  "https://img.freepik.com/free-vector/hand-drawn-busy-office-illustration_23-2151051240.jpg?w=740&q=80",
  "https://img.freepik.com/premium-vector/flat-illsutration-modern-openplan-office-with-professionals-working-desks-stylish-workplace_120150-408.jpg?w=740&q=80",
  "https://img.freepik.com/premium-vector/flat-illsutration-modern-openplan-office-with-professionals-working-desks-stylish-workplace_120150-379.jpg?w=740&q=80",
  "https://img.freepik.com/premium-vector/flat-illsutration-modern-openplan-office-with-professionals-working-desks-stylish-workplace_120150-276.jpg?w=740&q=80"
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 text-center bg-transparent">
      {/* Text Content */}
      <div className="mb-6">
        <h4 className="text-xs text-purple-500 mb-2">
          SPECIAL OFFER FIRST CUSTOMER
        </h4>
        <h1 className="text-3xl font-bold leading-snug">
          Technology & education <br /> consulting service
        </h1>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          We’re a nonprofit with the mission to provide a free, world-class consultancy.
        </p>
      </div>

      {/* Image with wave clip path */}
      <div
        className="inline-block w-full max-w-5xl overflow-hidden"
        style={{
          clipPath:
            "path('M0,50 C150,0 350,100 500,50 C650,0 850,100 1000,50 L1000,500 L0,500 Z')"
        }}
      >
        <img
          src={images[currentIndex]}
          alt="Consulting"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
