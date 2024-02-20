"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between sm:justify-center p-4 bg-cyan-600">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer sm:hidden"
          />
        </Link>

        <ul className=" gap-24 hidden sm:flex   w-full items-center justify-center ">
          <li className="finger px-10">
            <Link className="finger" href="/">
              Home
            </Link>
          </li>
          <li className="finger px-10">
            <Link className="finger" href="/about">
              About
            </Link>
          </li>
          <li className="finger px-10">
            <Link className="finger" href="/portfolio">
              Portfolio
            </Link>
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
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden z-50 sticky   ${
          isMenuOpen ? "block " : "hidden"
        }`}
      >
        <div
          id="menu"
          className={` absolute flex-col items-center py-3  w-full  gap-2  bg-gray-100 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            onClick={toggleMenu}
            href="/"
            className="text-lg text-gray-700  w-full flex items-center justify-center  "
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            href="/about"
            className="text-lg text-gray-700 w-full flex items-center justify-center "
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            href="/portfolio"
            className="text-lg text-gray-700 w-full flex items-center justify-center "
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
