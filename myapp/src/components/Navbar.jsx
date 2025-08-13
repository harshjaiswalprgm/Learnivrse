import React from "react";
import { FaRocket } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000]">
      <nav className="flex items-center justify-between bg-[#111] px-4 py-2 rounded-full shadow-lg gap-5">
        {/* Logo */}
        <div className="bg-white text-black w-[35px] h-[35px] rounded-full flex items-center justify-center">
          <FaRocket size={18} />
        </div>

        {/* Links */}
        <ul className="flex gap-5 list-none m-0 p-0">
          <li>
            <a
              href="#about"
              className="text-white text-sm font-medium hover:text-[#ffcc00] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#programs"
              className="text-white text-sm font-medium hover:text-[#ffcc00] transition-colors duration-300"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white text-sm font-medium hover:text-[#ffcc00] transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="text-white text-sm font-medium hover:text-[#ffcc00] transition-colors duration-300"
            >
              Resources
            </a>
          </li>
        </ul>

        {/* Button */}
        <a
          href="https://glowlogics.in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-[#ffcc00] transition-colors duration-300"
        >
          glowlogics.in
        </a>
      </nav>
    </div>
  );
}
