import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

const testimonials = [
  {
    title: "Mein Business-Traumpartner",
    description: "Einfach konstante Action - von 1A Design bis hin zu Funnels und Ads.",
    user: "Liam O'Sullivan",
    followers: "Mehr als 120K Follower",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stats: [
      { label: "120 545 Webinar-Registrierungen" },
      { label: "0.54€ Cost-per-Registrant" }
    ]
  },
  {
    title: "Mein Business-Traumpartner",
    description: "Einfach konstante Action - von 1A Design bis hin zu Funnels und Ads.",
    user: "Nora Cardora",
    followers: "Mehr als 2 Millionen Follower",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    stats: [
      { label: "120 545 Webinar-Registrierungen" },
      { label: "0.54€ Cost-per-Registrant" }
    ]
  },
  {
    title: "Verkaufsgeschichten",
    description: "Entdecke die Geheimnisse erfolgreicher Verkaufsstrategien in unserem Podcast!",
    user: "Lila Montgomery",
    followers: "Mehr als 980K Follower",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    stats: [
      { label: "120 545 Webinar-Registrierungen" },
      { label: "0.54€ Cost-per-Registrant" }
    ]
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Ergebnisse, die Sie ebenfalls erreichen können...
        </h2>
        <p className="text-gray-400 mb-12">
          Doch überzeugen Sie sich am besten selbst und lassen Sie die Stimmen unserer
          langjährigen Partner für sich sprechen.
        </p>

        <div className="relative flex justify-center items-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 p-3 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <FaArrowLeft />
          </button>

          {/* Cards */}
          <div className="flex items-center gap-6 overflow-hidden">
            {testimonials.map((t, i) => {
              const position =
                (i - index + testimonials.length) % testimonials.length;
              let scale = position === 0 ? 1 : 0.9;
              let opacity = position === 0 ? 1 : 0.4;
              let zIndex = position === 0 ? 10 : 0;

              return (
                <motion.div
                  key={i}
                  className="bg-gray-800 rounded-2xl p-6 w-80 shadow-lg relative"
                  style={{
                    scale,
                    opacity,
                    zIndex,
                  }}
                  animate={{
                    x: (position - 1) * 320,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {/* Play Button for center card */}
                  {position === 0 && (
                    <div className="flex justify-center mb-4">
                      <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
                        <FaPlay />
                      </button>
                    </div>
                  )}

                  <h3 className="font-bold">{t.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{t.description}</p>

                  {/* User */}
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={t.image}
                      alt={t.user}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{t.user}</p>
                      <p className="text-xs text-gray-500">{t.followers}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {t.stats.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 rounded-full px-3 py-1"
                      >
                        {s.label}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 p-3 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Pagination */}
        <div className="mt-6 text-gray-400 text-sm">
          {String(index + 1).padStart(2, "0")} of {testimonials.length}
        </div>
      </div>
    </section>
  );
}
