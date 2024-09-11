"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import "../app/globals.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "portfolio", "contact"];
      let currentSection = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionBottom
          ) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const handleScrollNav = () => {
      setScrolled(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`bg-zinc-900 text-white z-50 ${
        scrolled ? "fixed w-full" : ""
      }`}
    >
      <div className='container mx-auto flex items-center justify-between px-8 md:px-0'>
        <div>
          <Logo />
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
        <div className='hidden md:flex gap-8 lg:gap-4'>
          {["home", "about", "skills", "portfolio", "contact"].map(
            (section) => (
              <div
                key={section}
                className={`relative w-fit after:block mx-auto after:content-[''] after:absolute after:h-[3px] after:bg-light-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center py-4 ${
                  activeSection === section
                    ? "bg-light-green text-black font-semibold"
                    : ""
                }`}
              >
                <Link
                  href={`#${section}`}
                  className='block lg:inline-block lg:mt-0 mx-3'
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </div>
            )
          )}
        </div>
        {/* Mobile links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden lg:mt-4 lg:space-x-4 absolute left-0 top-0 h-screen w-full bg-zinc-900 z-10 px-8`}
        >
          <div className='flex flex-col container mx-auto'>
            <div className='w-full flex justify-end py-6'>
              <button
                onClick={toggleMenu}
                className='text-white focus:outline-none'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              </button>
            </div>
            <div className='flex flex-col'>
              {["home", "about", "skills", "portfolio", "contact"].map(
                (section) => (
                  <Link
                    key={section}
                    onClick={toggleMenu}
                    href={`#${section}`}
                    className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
