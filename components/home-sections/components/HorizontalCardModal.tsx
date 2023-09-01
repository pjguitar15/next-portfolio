'use client'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '@/context/ModalContext'
import { CardData } from '../../../data/HorizontalCardsData'

const HorizontalCardModal = () => {
  const [moreDescription, setMoreDescription] = useState({
    slicedOne: '',
    slicedTwo: '',
  })
  const { isModalOpen, setIsModalOpen, modalTitle, modalDescription } =
    useGlobalContext()
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
  return (
    <div
      className={`fixed inset-0 ${
        isModalOpen ? 'flex' : 'hidden'
      } flex items-center justify-center z-50 h-screen w-screen bg-zinc-900 `}
    >
      <div className='transform transition-all p-10 flex flex-col justify-center items-center'>
        <div className='container mx-auto'>
          <div className='bg-zinc-900 text-white mb-3'>
            <h2 className='text-5xl mb-7 font-semibold text-light-green'>
              {modalTitle}
            </h2>
          </div>
          <div>
            <p className='text-white italic'>{modalDescription}</p>
            <div className='grid grid-cols-2 gap-6'>
              <p className='text-white mt-5 leading-7 text-justify'>
                {moreDescription.slicedOne}
              </p>
              <p className='text-white mt-5 leading-7 text-justify'>
                {moreDescription.slicedTwo}
              </p>
            </div>
            <button
              onClick={handleClose}
              className='mt-7 bg-light-green text-black px-4 py-2 rounded font-medium hover:bg-green-400'
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
