import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-5 z-[1000] w-full px-4 md:left-1/2 md:-translate-x-1/2 md:max-w-6xl">

      <nav className="flex items-center justify-between bg-[#2b2828]  px-6 py-2 rounded-full shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/lightlogo.png"
            alt="Company Logo"
            className="h-10 w-auto object-contain md:h-12 lg:h-14"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
          <li>
            <a
              href="#about"
              className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#programs"
              className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
            >
              Resources
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#111] rounded-xl shadow-lg py-4 px-6">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#about"
                className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#programs"
                className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
}
