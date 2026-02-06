import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo1 from "../assets/lo-1.jpg";
import logo2 from "../assets/lo-2.jpg";

const Navbar = ({ theme, settheme }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-white dark:bg-black
      text-black dark:text-white
      border-b border-neutral-300 dark:border-neutral-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={theme === "dark" ? logo2 : logo1}
            alt="logo"
            className="w-12 h-12"
          />
          <h1 className="text-lg lg:text-2xl font-bold">
            Time to Program
          </h1>
        </div>

        {/* PAGE NAMES – DESKTOP ONLY */}
        <ul className="nav-pages items-center gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="text-green-500 font-semibold"
                className="cursor-pointer hover:text-green-500 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          {theme === "dark" ? (
            <MdSunny
              onClick={() => settheme("light")}
              className="text-2xl cursor-pointer hover:text-yellow-400"
            />
          ) : (
            <FaMoon
              onClick={() => settheme("dark")}
              className="text-xl cursor-pointer hover:text-green-500"
            />
          )}

          {/* Hamburger (Mobile Only) */}
          <button
            className="hamburger-btn text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu bg-white dark:bg-black border-t border-neutral-300 dark:border-neutral-800">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  onClick={() => setOpen(false)}
                  activeClass="text-green-500 font-semibold"
                  className="cursor-pointer text-lg"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔐 GUARANTEED RESPONSIVE VISIBILITY */}
      <style>
        {`
          /* Desktop pages visible */
          .nav-pages {
            display: none;
          }

          /* Hamburger hidden on desktop */
          .hamburger-btn {
            display: block;
          }

          /* Mobile menu default hidden */
          .mobile-menu {
            display: block;
          }

          /* Laptop & Desktop */
          @media (min-width: 1024px) {
            .nav-pages {
              display: flex;
            }
            .hamburger-btn {
              display: none;
            }
            .mobile-menu {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;


