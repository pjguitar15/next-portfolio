import React from 'react'
import Link from 'next/link'
import { CodeBracketIcon } from '@heroicons/react/24/solid'

const HorizontalCard = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className='flex flex-col md:flex-row-reverse bg-zinc-900 p-10 rounded-lg self-start cursor-pointer hover:bg-zinc-950 transition duration-300 ease-in-out hover:scale-105 gap-5 md:gap-0'>
      <div>
        <CodeBracketIcon className='w-12 h-12 md:w-8 md:h-8 text-light-green' />
      </div>
      <div>
        <h2 className='text-xl font-bold text-light-green capitalize mb-2 select-light-green'>
          {title}
        </h2>
        <p className='text-gray-400 mb-4 md:w-3/4 select-light-green'>
          {description}
        </p>
        <Link
          className='text-white font-semibold text-sm underline select-light-green'
          href='#'
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  )
}

export default HorizontalCard
