import Badge from '@/components/Badge'
import HeadingText from '@/components/HeadingText'
import React from 'react'

const loading = () => {
  return (
    <section className='bg-zinc-900 overflow-hidden pt-12 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row flex-col-reverse'>
          <div className='lg:w-7/12 flex flex-col justify-center items-center lg:items-start pt-8 pb-16 lg:py-36'>
            <div>
              <Badge title='Please wait for a moment' />
            </div>
            <div className='text-center lg:text-start'>
              <HeadingText
                text='The page is loading...'
                emphasis='loading...'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default loading
