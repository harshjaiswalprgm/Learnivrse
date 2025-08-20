
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // Floating background particles
    gsap.to(".particle", {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a14] flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Gradient Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600 rounded-full blur-[150px] opacity-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Animated Circuit Line */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 0 200 Q 400 100, 800 200 T 1600 200"
          stroke="url(#grad1)"
          strokeWidth="1.5"
          fill="transparent"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
          style={{
            top: `${Math.random() * 90}vh`,
            left: `${Math.random() * 90}vw`,
          }}
        />
      ))}

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-20 max-w-3xl mx-auto">
        <motion.h2
          className="text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "Shaping the Future with Knowledge & Innovation"
        </motion.h2>
        <motion.p
          className="text-gray-400 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          An all-in-one platform designed for students, professionals, and
          dreamers. Learn from experts, practice with real projects, and unlock
          global opportunities.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* Black Button */}
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-900">
            Open App
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* White Button */}
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow">
            Discover More
          </button>
        </motion.div>
      </div>

      {/* Futuristic Falling Lines Animation */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-[2px] h-40 bg-gradient-to-b from-cyan-400 to-transparent opacity-70"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: [0, 600], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{ marginLeft: `${i * 60 - 300}px` }}
          />
        ))}
      </div>

    </section>
  );
}
