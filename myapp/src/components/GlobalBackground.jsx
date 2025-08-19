import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

export default function GlobalBackground() {
  useEffect(() => {
    // Floating background particles (yoyo animation)
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
    <div className="fixed inset-0 w-full h-full bg-[#0a0a14] overflow-hidden -z-10">
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
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 200 Q 400 100, 800 200 T 1600 200"
          stroke="url(#grad1)"
          strokeWidth="1.5"
          fill="transparent"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </svg>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40 -z-10"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}

      {/* Futuristic Falling Lines */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
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
    </div>
  );
}
