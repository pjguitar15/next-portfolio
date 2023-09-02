import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  return (
    <>
      <footer className='bg-zinc-950 text-white py-7 border-t-2 border-light-green'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-start'>
          <div className='flex flex-col md:items-start sm:items-left w-full lg:w-auto'>
            <Logo />
            <p className='text-left mt-4 ms-0'>I build things for the web.</p>
          </div>
          <div className='flex flex-col pt-5 lg:pt-0 w-full lg:w-auto items-center lg:items-end'>
            <ul className='flex space-x-4'>
              <li>
                <Link href='/' className='hover:text-gray-300'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='#about' className='hover:text-gray-300'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#projects' className='hover:text-gray-300'>
                  Portfolio
                </Link>
              </li>
              <li>
                <a href='#contact' className='hover:text-gray-300'>
                  Contact
                </a>
              </li>
            </ul>
            <div className='flex mt-4 gap-5 lg:justify-end'>
              <a href='https://github.com/pjguitar15' target='_blank'>
                <FontAwesomeIcon
                  className='text-white text-2xl'
                  icon={faGithub}
                />
              </a>
              <a href='https://www.facebook.com/PhilcobSuzuki/' target='_blank'>
                <FontAwesomeIcon
                  className='text-white text-2xl'
                  icon={faFacebook}
                />
              </a>
              <a
                href='https://www.instagram.com/philcobsuzuki/'
                target='_blank'
              >
                <FontAwesomeIcon
                  className='text-white text-2xl'
                  icon={faInstagram}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-zinc-950 py-4 text-white text-center border-t-2 border-gray-700'>
        <p>&copy; {currentYear} Phil Codes. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
