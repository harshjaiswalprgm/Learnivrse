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
            img: "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Brand Identity & Positioning",
            desc: "Define who you are and make your mark."
          },
          {
            img: "https://images.pexels.com/photos/6517084/pexels-photo-6517084.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Product Discovery & Market Research",
            desc: "Understand your audience & market."
          },
          {
            img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "UI/UX & Digital Experiences",
            desc: "Websites, dApps, and gaming interfaces."
          },
          {
            img: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 mt-4">
        {["https://images.pexels.com/photos/5475755/pexels-photo-5475755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/8720619/pexels-photo-8720619.jpeg?auto=compress&cs=tinysrgb&w=800"].map(
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
  className="relative max-w-4xl w-full mx-auto mt-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl overflow-hidden group"
>
  {/* Image */}
  <img
    src="https://plus.unsplash.com/premium_vector-1683133603975-60193704cb08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
    alt="Leadership"
    className="rounded-2xl object-cover w-full h-[300px]" // 👈 height fixed, full width
  />
</div>

    </section>
  );
}
