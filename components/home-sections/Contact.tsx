'use client'
import { useState, useRef, useEffect } from 'react'
import HeadingText from '../HeadingText'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import LoadingAnimation from '../LoadingAnimation'

const Contact = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState('')
  const formRef = useRef<any>(null)
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!

  const handleContactForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!nameInput || !emailInput || !messageInput) {
      setErrorMessage('Please complete all the fields. Thank you!')
      setTimeout(() => {
        setErrorMessage('')
      }, 15000)
    } else {
      if (formRef.current) {
        setIsFormLoading(true)
        emailjs
          .sendForm(serviceId, templateId, formRef.current, publicKey)
          .then(
            (result) => {
              setFormSuccessMessage('Form has been submitted successfully!')
            },
            (error) => {
              setErrorMessage(error)
            }
          )
          .finally(() => {
            setIsFormLoading(false)
            setNameInput('')
            setEmailInput('')
            setMessageInput('')
            setTimeout(() => {
              setFormSuccessMessage('')
            }, 8000)
          })
      }
    }
  }
  return (
    <div className='bg-zinc-950' id='contact'>
      <div className='container mx-auto pt-20'>
        <HeadingText text={`Let's Talk`} emphasis='Talk' />
        <div className='lg:flex gap-5 mt-7'>
          <form
            ref={formRef}
            onSubmit={handleContactForm}
            className='flex-1 flex flex-col gap-4 pb-20'
            action=''
          >
            <div className='flex flex-col'>
              <label className='text-white mb-2 text-sm font-semibold'>
                Name
              </label>
              <input
                name='user_name'
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className='bg-zinc-800 px-5 py-3 rounded text-white'
                type='text'
                placeholder='Enter name'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-white mb-2 text-sm font-semibold'>
                Email
              </label>
              <input
                name='user_email'
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className='bg-zinc-800 px-5 py-3 rounded text-white'
                type='email'
                placeholder='Enter your email'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-white mb-2 text-sm font-semibold'>
                Send a message
              </label>
              <textarea
                name='message'
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className='bg-zinc-800 px-5 py-3 rounded text-white'
                placeholder='Enter your message'
                rows={4}
                cols={50}
              />
            </div>
            <h6 className='text-red-400'>{errorMessage}</h6>
            <h6 className='text-green-400'>{formSuccessMessage}</h6>
            <div className='mt-0'>
              <button
                disabled={isFormLoading ? true : false}
                type='submit'
                className='text-light-green hover:text-black font-medium text-md border hover:scale-110 px-8 py-2 border-light-green hover:border-light-green rounded-full transition duration-300 ease-in-out hover:bg-light-green inline-block disabled:opacity-50'
              >
                <div className='flex items-center'>
                  {isFormLoading ? (
                    <LoadingAnimation />
                  ) : (
                    <FontAwesomeIcon className='mr-3' icon={faPaperPlane} />
                  )}
                  Submit
                </div>
              </button>
            </div>
          </form>
          <div className='items-end justify-end relative hidden md:flex'>
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
