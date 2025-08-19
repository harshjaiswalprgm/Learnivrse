import { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WellnessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Scroll reveal animation
    gsap.fromTo(
      el.querySelectorAll(".gsap-animate"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white px-6 py-16"
    >
      {/* Inner container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="relative gsap-animate">
          <img
            src="https://img.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_335657-1854.jpg?w=740&q=80"
            alt="Happy family"
            className="rounded-3xl object-cover w-full h-[500px]"
          />

          {/* Floating card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                className="w-8 h-8 rounded-full border-2 border-white"
                alt=""
              />
            </div>
            <div>
              <span className="font-semibold text-sm">350+</span>
              <p className="text-xs text-gray-500">
                Join our active healthy community
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="gsap-animate text-black">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Where Smiles Blossom <br /> Into Stories
          </h2>
          <p className="text-gray-700 mt-4">
            Solace isn’t just a space to track your moods and progress, it’s a
            place where your well-being takes center stage. Here you can express
            yourself freely, track your journey, and witness those smiles blossom
            into stories that empower and inspire you.
          </p>

          {/* Button */}
          <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Read More <FaArrowRight />
          </button>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl shadow p-4 text-black">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3">
                🔒
              </div>
              <h4 className="font-semibold">Confidentiality</h4>
              <p className="text-sm text-gray-500">
                Your privacy is our priority. Discreet and secure space for your
                wellness journey.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow p-4 text-black">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-3">
                ♿
              </div>
              <h4 className="font-semibold">Accessibility</h4>
              <p className="text-sm text-gray-500">
                Designed for everyone, with features that make self-care easy
                and inclusive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
