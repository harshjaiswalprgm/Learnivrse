import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ShowcaseSection() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="p-8 bg-white">
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            img: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww",
            title: "Brand Identity & Positioning",
            desc: "Define who you are and make your mark."
          },
          {
            img: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww",
            title: "Product Discovery & Market Research",
            desc: "Understand your audience & market."
          },
          {
            img: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww",
            title: "UI/UX & Digital Experiences",
            desc: "Websites, dApps, and gaming interfaces."
          },
          {
            img: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww",
            title: "Creative Development",
            desc: "Frontend, smart contracts, and integrations."
          }
        ].map((card, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="bg-gray-100 border border-black rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-700"
          >
            <div className="overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Three Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {["https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww"].map(
          (img, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              className="bg-gray-100 border border-black rounded-xl overflow-hidden flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={img}
                alt="Panel"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )
        )}
      </div>

      {/* Keyboard Section */}
      <div
        data-aos="fade-up"
        className="relative border border-black rounded-xl bg-gray-100 p-4 mt-4 overflow-hidden group"
      >
        <img
          src="https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHByb2plY3RzfGVufDB8fDB8fHww"
          alt="Keyboard"
          className="w-full rounded-xl object-cover"
        />
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer"></div>
      </div>
    </section>
  );
}
