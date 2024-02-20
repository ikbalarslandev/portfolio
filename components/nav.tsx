"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const path = usePathname();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between sm:justify-center px-4 py-6 bg-cyan-600">
      <Link href="/">
        <p className="p-2 bg-gray-400 absolute left-5 top-4 sm:hidden">Logo</p>
      </Link>

      <ul className=" gap-24 hidden sm:flex  ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>

      {/* hamburger icon */}
      <div className="md:hidden">
        <button
          id="menu-btn"
          className={` block hamburger  focus:outline-none ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          {path === "/" ? (
            <div>
              <span className="hamburger-top bg-white"></span>
              <span className="hamburger-middle bg-white"></span>
              <span className="hamburger-bottom bg-white"></span>
            </div>
          ) : (
            <div>
              <span className="hamburger-top bg-cyan-700"></span>
              <span className="hamburger-middle bg-cyan-700"></span>
              <span className="hamburger-bottom bg-cyan-700"></span>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
