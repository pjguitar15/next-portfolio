import React from 'react'
import Image from 'next/image'
import Logo from './Logo'

const Footer = () => {
  return (
    <>
      <footer className='bg-zinc-950 text-white py-4 border-t-2 border-light-green'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <Logo />
          <ul className='flex space-x-4'>
            <li>
              <a href='#' className='hover:text-gray-300'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                My Work
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className='bg-zinc-950 py-4 text-white text-center'>
        <p>&copy; 2023 Phil Codes. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
