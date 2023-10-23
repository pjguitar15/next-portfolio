import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link className='flex items-center' href='/'>
      <Image
        className='w-7 h-7'
        src='/mylogo.png'
        alt=''
        width={500}
        height={500}
      />
      <div className='text-white font-bold text-xl ml-3'>
        Phil <span className='text-light-green'>Codes</span>
      </div>
    </Link>
  )
}

export default Logo
