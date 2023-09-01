import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const MySmallButton = ({
  title,
  link,
  icon,
  isSubmitBtn,
}: {
  title: string
  link?: string
  icon?: string
  isSubmitBtn: boolean
}) => {
  //
  return (
    <div>
      <a
        target='_blank'
        href={link || '/'}
        className='text-light-green hover:text-black font-medium text-md border hover:scale-110 px-8 py-2 border-light-green hover:border-light-green rounded-full transition duration-300 ease-in-out hover:bg-light-green inline-block'
      >
        <div className='flex items-center'>
          {icon === 'externalLinkAlt' && (
            <FontAwesomeIcon className='mr-3' icon={faExternalLinkAlt} />
          )}
          {icon === 'submit' && (
            <FontAwesomeIcon className='mr-3' icon={faPaperPlane} />
          )}
          {icon === 'github' && (
            <FontAwesomeIcon
              className='inline-block mr-3 text-xl'
              icon={faGithub}
            />
          )}
          {title}
        </div>
      </a>
    </div>
  )
}

export default MySmallButton
