import React from 'react'
import Link from 'next/link'

const MySmallButton = ({ title, link }: { title: string; link: string }) => {
  return (
    <div>
      <Link
        href={link}
        className='text-light-green hover:text-black font-medium text-md border hover:scale-110 px-8 py-2 border-light-green hover:border-light-green rounded-full transition duration-300 ease-in-out inline-block hover:bg-light-green'
        passHref
      >
        {title}
      </Link>
    </div>
  )
}

export default MySmallButton
