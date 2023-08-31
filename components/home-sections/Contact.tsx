'use client'
import { useState } from 'react'
import HeadingText from '../HeadingText'
import MySmallButton from '../MySmallButton'
import Image from 'next/image'

const Contact = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const handleContactForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    alert(nameInput)
  }
  return (
    <div className='bg-zinc-950' id='contact'>
      <div className='container mx-auto pt-20'>
        <HeadingText text={`Let's Talk`} emphasis='Talk' />
        <div className='lg:flex gap-5 mt-7'>
          <form
            onSubmit={handleContactForm}
            className='flex-1 flex flex-col gap-4 pb-20'
            action=''
          >
            <div className='flex flex-col'>
              <label className='text-white mb-2 text-sm font-semibold'>
                Name
              </label>
              <input
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className='bg-zinc-800 px-5 py-3 rounded'
                type='text'
                placeholder='Enter name'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-white mb-2 text-sm font-semibold'>
                Email
              </label>
              <input
                className='bg-zinc-800 px-5 py-3 rounded'
                type='text'
                placeholder='Enter your email'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-white mb-2 text-sm font-semibold'>
                Send a message
              </label>
              <textarea
                className='bg-zinc-800 px-5 py-3 rounded'
                placeholder='Enter your message'
                rows={4}
                cols={50}
              />
            </div>
            <div className='mt-3'>
              <MySmallButton title='Submit' icon='submit' isSubmitBtn={true} />
            </div>
          </form>
          <div className='flex items-end justify-end relative'>
            <div className='absolute top-20 right-10 lg:top-3 lg:right-0 bg-light-green lg:px-10 py-7 rounded-full'>
              <p className='text-xl font-semibold w-4/5 lg:w-2/3 text-center mx-auto'>
                Hello there, Thanks for dropping by!
              </p>
            </div>
            <div className='w-1/3 lg:w-2/3 z-10 ml-10 mr-auto lg:mr-0 lg:ml-auto'>
              <Image
                className='transform -scale-x-100 lg:scale-x-100'
                src='/myphoto.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
