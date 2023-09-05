'use client'
import { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '@/context/ModalContext'
import { CardData } from '../../../data/HorizontalCardsData'

const HorizontalCardModal = () => {
  const [moreDescription, setMoreDescription] = useState({
    slicedOne: '',
    slicedTwo: '',
  })
  const { isModalOpen, setIsModalOpen, modalTitle, modalDescription } =
    useGlobalContext()

  const modalRef = useRef<any>(null)

  const handleClose = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    console.log(CardData)
    CardData.forEach((item) => {
      console.log(item)
      const slicedOne = item.description.slice(0, item.description.length / 2)
      const slicedTwo = item.description.slice(item.description.length / 2)
      if (item.title === modalTitle) {
        setMoreDescription({ slicedOne, slicedTwo })
      }
      return ''
    })
  }, [modalTitle])

  useEffect(() => {
    console.log('use effect works')
    if (modalRef.current) {
      modalRef.current.focus()
    }
  }, [isModalOpen])

  const handleKeyDown = (event: any) => {
    if (event.key === 'Escape') {
      setIsModalOpen(false)
    }
  }
  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={modalRef}
      className={`fixed inset-0 ${
        isModalOpen ? 'flex' : 'hidden'
      } flex items-center justify-center z-50 h-screen w-screen bg-zinc-900 `}
    >
      <div className='transform transition-all p-5 md:p-10 lg:p-12 xl:p-28 flex flex-col justify-center items-center'>
        <div className='container mx-auto'>
          <div className='bg-zinc-900 text-white mb-3'>
            <h2 className='text-5xl mb-7 font-semibold text-light-green'>
              {modalTitle}
            </h2>
          </div>
          <div>
            <p className='text-white italic md:w-1/2 lg:w-2/5'>
              {modalDescription}
            </p>
            <div className='grid md:grid-cols-2 gap-6'>
              <p className='text-white mt-5 leading-7'>
                {moreDescription.slicedOne}
              </p>
              <p className='text-white mt-5 leading-7 hidden md:block'>
                {moreDescription.slicedTwo}
              </p>
            </div>
            <div className='hidden md:block bg-zinc-800 text-white mt-7 px-5 py-4 rounded w-2/4 lg:w-1/4 text-center mb-4'>
              Press <strong>escape</strong> key to close
            </div>
            <button
              onClick={handleClose}
              className='mt-6 md:mt-3 bg-light-green text-black px-4 py-2 rounded font-medium hover:bg-green-400'
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCardModal
