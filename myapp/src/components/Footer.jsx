import { FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lime-400 text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-start relative z-10">

        {/* Left: Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Contact</h4>
          <p className="text-base font-medium">Hi@thlearniverse.com</p>
          <p className="text-base font-medium">+62821-5949-5854</p>
        </div>

        {/* Middle: CTA */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">
            Got a project? Want to collaborate?
          </h4>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center justify-center mx-auto hover:bg-blue-700 transition">
            Discuss your project →
          </button>
        </div>

        {/* Right: Locations */}
        <div className="text-right">
          <h4 className="text-sm font-semibold"></h4>
          <p className="text-base font-medium">
            <br />

          </p>

          <h4 className="mt-4 text-sm font-semibold">Shree Narayana Tower, HSR Layout</h4>
          <p className="text-base font-medium">
            Outer Ring RdJakkasandra, 1st Block Koramangala<br />
            Bengaluru, Karnataka 560034
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-black relative z-10">
        <p className="text-sm">© Copyright 2024. ThLearniverse. All rights reserved.</p>
        <a href="#" className="text-sm underline">Terms & Conditions</a>
        <div className="flex space-x-4 text-xl">
          <a href="#"><FaBehance /></a>
          <a href="#"><FaDribbble /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      {/* Huge Background Text */}
      <h1 className="absolute bottom-0 left-0 w-full text-[15vw] md:text-[10vw] font-extrabold text-black opacity-20 text-center leading-none">
        ThLearniverse
      </h1>
    </footer>
  );
}
