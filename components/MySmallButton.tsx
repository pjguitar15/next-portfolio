import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const MySmallButton = ({
  title,
  link,
  icon,
}: {
  title: string
  link?: string
  icon?: string
}) => {
  return (
    <div>
      <a
        target='_blank'
        href={link || '/'}
        className='text-light-green hover:text-black font-medium text-md border hover:scale-110 px-8 py-2 border-light-green hover:border-light-green rounded-full transition duration-300 ease-in-out inline-block hover:bg-light-green'
      >
        {icon === 'externalLinkAlt' && (
          <FontAwesomeIcon className='mr-3' icon={faExternalLinkAlt} />
        )}
        {icon === 'submit' && (
          <FontAwesomeIcon className='mr-3' icon={faPaperPlane} />
        )}
        {icon === 'github' && (
          <Image
            className='w-5 h-5 inline-block mr-3'
            src='/logos/github-light-green.png'
            alt='test'
            width={500}
            height={500}
          />
        )}
        {title}
      </a>
    </div>
  )
}

export default MySmallButton
