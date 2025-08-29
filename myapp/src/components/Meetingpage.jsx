import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MeetingPage() {
  useEffect(() => {
    // Video section animation
    gsap.from(".video-section", {
      scrollTrigger: {
        trigger: ".video-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
    });

    // Feature cards animation
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".feature-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Meeting with <span className="text-purple-600">AI-Powered Recording</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Effortlessly capture, transcribe, and analyze every meeting for improved
          productivity and clarity.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition">
          Start 30-day Free Trial
        </button>
      </section>

      {/* Video Section */}
     <section className="video-section flex justify-center items-center px-6 py-16">
  <div className="bg-white shadow-2xl rounded-2xl p-4 max-w-4xl w-full">
    <iframe
      className="rounded-xl w-full h-[400px]"
      src="https://www.youtube.com/embed/Tl80IK5NEyE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


      {/* Feature Section */}
      <section className="feature-section py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Discover the <span className="text-purple-600">Key Benefits</span> and Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Recording</h3>
            <p className="text-gray-600">
              AI records, transcribes, and analyzes meetings in real time.
            </p>
          </div>

          <div className="feature-card bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Summarization</h3>
            <p className="text-gray-600">
              Get quick summaries with key insights and follow-ups.
            </p>
          </div>

          <div className="feature-card bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Collaboration</h3>
            <p className="text-gray-600">
              Easily share recordings and insights with your team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
