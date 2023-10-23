'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export const LinkWithHover = () => {
  return ''
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutActive, setAboutActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        // Adjust the pixel value as needed
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (window.scrollY >= 1500 && window.scrollY <= 2323) {
        setAboutActive(true)
      } else {
        setAboutActive(false)
      }
      // 1566 to 2323 About
      // 2324 to Skills
      console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav
      className={`bg-zinc-900 text-white  z-50 ${scrolled && 'fixed w-full'}`}
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
          <div
            className={`relative w-fit after:block mx-auto after:content-[''] after:absolute after:h-[3px] after:bg-light-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center py-4`}
          >
            <Link className={`block lg:inline-block lg:mt-0 mx-3`} href={'/'}>
              Home
            </Link>
          </div>
          <div
            className={`relative w-fit after:block mx-auto after:content-[''] after:absolute after:h-[3px] after:bg-light-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center py-4 ${
              aboutActive && 'bg-light-green  text-black font-semibold'
            }`}
          >
            <a href='#about' className='block lg:inline-block lg:mt-0 mx-3'>
              About
            </a>
          </div>
          <div
            className={`relative w-fit after:block mx-auto after:content-[''] after:absolute after:h-[3px] after:bg-light-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center py-4`}
          >
            <a href='#projects' className='block lg:inline-block lg:mt-0 mx-3'>
              Portfolio
            </a>
          </div>
          <div
            className={`relative w-fit after:block mx-auto after:content-[''] after:absolute after:h-[3px] after:bg-light-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center py-4`}
          >
            <a href='#contact' className='block lg:inline-block lg:mt-0 mx-3'>
              Contact
            </a>
          </div>
        </div>
        {/* Mobile links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
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
              <div className='w-full text-center'>
                <a
                  onClick={toggleMenu}
                  href='/'
                  className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                >
                  Home
                </a>
                <a
                  onClick={toggleMenu}
                  href='#about'
                  className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                >
                  About
                </a>
                <a
                  onClick={toggleMenu}
                  href='#projects'
                  className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                >
                  Portfolio
                </a>
                <a
                  onClick={toggleMenu}
                  href='#contact'
                  className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
