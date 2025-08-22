import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000]">
      <nav className="flex items-center justify-between bg-[#111] px-6 py-2 rounded-full shadow-lg gap-6">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-10 w-auto object-contain md:h-12 lg:h-14"
          />
        </div>

        {/* Links */}
        <ul className="flex gap-6 list-none m-0 p-0">
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
          className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#ffcc00] transition-colors duration-300"
        >
          glowlogics.in
        </a>
      </nav>
    </div>
  );
}
