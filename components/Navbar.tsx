"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import '../app/globals.css'
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: UserIcon },
    { name: 'Skills', href: '/skills', icon: CogIcon },
    { name: 'Projects', href: '/projects', icon: BriefcaseIcon },
    { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg'
          : 'bg-zinc-950/90 backdrop-blur-sm'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-1'>
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-teal-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 mr-2 ${
                        isActive(item.href)
                          ? 'text-teal-400'
                          : 'text-gray-500 group-hover:text-gray-300'
                      }`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors duration-200'
            >
              {menuOpen ? (
                <XMarkIcon className='block h-6 w-6' />
              ) : (
                <Bars3Icon className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className='md:hidden animate-fade-in'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800'>
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-teal-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mr-3 ${
                      isActive(item.href)
                        ? 'text-teal-400'
                        : 'text-gray-500 group-hover:text-gray-300'
                    }`}
                  />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
