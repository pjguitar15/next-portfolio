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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        // Adjust the pixel value as needed
        setScrolled(true)
      } else {
        setScrolled(false)
      }
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
      className={`bg-zinc-900 text-white py-5 z-50 ${
        scrolled && 'fixed w-full'
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
          <a href='#' className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'>
            Home
          </a>
          <a
            href='#about'
            className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
          >
            About
          </a>
          <a
            href='#projects'
            className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
          >
            Portfolio
          </a>
          <a href='#' className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'>
            Contact
          </a>
        </div>
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
                  href='#'
                  className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                >
                  About
                </a>
                <a
                  href='#'
                  className='block lg:inline-block mt-2 lg:mt-0 lg:ml-4'
                >
                  Portfolio
                </a>
                <a
                  href='#'
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
