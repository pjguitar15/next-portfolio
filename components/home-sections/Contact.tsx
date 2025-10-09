"use client";
import { useState, useRef } from 'react'
import Image from 'next/image'
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import { CalendarDaysIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | ''
    message: string
  }>({
    type: '',
    message: '',
  })

  const formRef = useRef<HTMLFormElement>(null)
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      })
      return
    }

    setIsLoading(true)

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey,
        )
        setStatus({
          type: 'success',
          message: "Thank you for your message! I'll get back to you soon.",
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email me directly.',
      })
    } finally {
      setIsLoading(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }

  const contactInfo = [
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Trece Martires City, Cavite',
      description: 'Available for remote work worldwide',
    },
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'philcobsuzuki@gmail.com',
      description: 'Drop me a line anytime',
    },
    {
      icon: GlobeAltIcon,
      label: 'Website',
      value: 'philcodes-portfolio.vercel.app',
      description: 'Check out my work',
    },
    {
      icon: CalendarDaysIcon,
      label: 'Response Time',
      value: 'Within 24 hours',
      description: "I'll get back to you quickly",
    },
  ]

  return (
    <section className='min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl lg:text-5xl font-bold text-zinc-100 mb-6'>
            Let's{' '}
            <span className='bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent'>
              Connect
            </span>
          </h1>
          <p className='text-xl text-zinc-400 max-w-3xl mx-auto'>
            I'm always interested in discussing new opportunities and exciting
            projects. Feel free to reach out if you'd like to collaborate.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Form */}
          <div className='order-2 lg:order-1'>
            <div className='bg-zinc-800/50 rounded-2xl shadow-xl p-8 border border-zinc-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold text-zinc-100 mb-2'>
                Send me a message
              </h2>
              <p className='text-zinc-400 mb-8'>
                I'd love to hear from you. Send me a message and I'll respond as
                soon as possible.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-zinc-300 mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className='w-full px-4 py-3 border border-zinc-600 bg-zinc-800 text-zinc-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                      placeholder='Your name'
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-zinc-300 mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className='w-full px-4 py-3 border border-zinc-600 bg-zinc-800 text-zinc-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                      placeholder='your.email@example.com'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-zinc-300 mb-2'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className='w-full px-4 py-3 border border-zinc-600 bg-zinc-800 text-zinc-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-zinc-300 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className='w-full px-4 py-3 border border-zinc-600 bg-zinc-800 text-zinc-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none'
                    placeholder='Tell me about your project, idea, or just say hello!'
                    required
                  />
                </div>

                {/* Status Messages */}
                {status.message && (
                  <div
                    className={`p-4 rounded-lg flex items-center gap-3 ${
                      status.type === 'success'
                        ? 'bg-teal-50 text-teal-800 border border-teal-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status.type === 'success' && (
                      <CheckCircleIcon className='w-5 h-5 flex-shrink-0' />
                    )}
                    <span className='text-sm'>{status.message}</span>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-teal-700 hover:to-cyan-700 focus:ring-4 focus:ring-teal-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isLoading ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className='w-5 h-5' />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Image */}
          <div className='order-1 lg:order-2 space-y-8'>
            {/* Profile Card */}
            <div className='bg-slate-800/50 rounded-2xl shadow-xl p-8 border border-slate-700 backdrop-blur-sm'>
              <div className='text-center mb-6'>
                <div className='relative w-32 h-32 mx-auto mb-4'>
                  <Image
                    src='/myphoto-enhanced.png'
                    alt='Philcob Josol'
                    fill
                    className='object-cover rounded-full border-4 border-teal-900/50'
                  />
                  <div className='absolute bottom-2 right-2 w-6 h-6 bg-teal-400 rounded-full border-2 border-slate-800'></div>
                </div>
                <h3 className='text-xl font-bold text-slate-100'>
                  Philcob Josol
                </h3>
                <p className='text-teal-400 font-medium'>Software Engineer</p>
                <p className='text-slate-400 text-sm mt-2'>
                  Available for new opportunities
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className='bg-slate-800/50 rounded-2xl shadow-xl p-8 border border-slate-700 backdrop-blur-sm'>
              <h3 className='text-xl font-bold text-slate-100 mb-6'>
                Get in Touch
              </h3>
              <div className='space-y-6'>
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-teal-800'>
                        <Icon className='w-6 h-6 text-teal-400' />
                      </div>
                      <div>
                        <h4 className='font-semibold text-slate-100'>
                          {item.label}
                        </h4>
                        <p className='text-teal-400 font-medium'>
                          {item.value}
                        </p>
                        <p className='text-slate-400 text-sm'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className='bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white'>
              <h3 className='text-xl font-bold mb-4'>Connect with me</h3>
              <p className='text-teal-100 mb-6'>
                Follow my journey and see my latest work
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/pjguitar15'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 group border border-slate-600'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
                <a
                  href='https://linkedin.com/in/philcob-josol'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 group border border-slate-600'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
