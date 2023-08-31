'use client'
import { useState } from 'react'

const HorizontalCardModal = ({ modalOpen, setModalOpen }: any) => {
  // const [modalOpen, setModalOpen] = useState(false)
  return (
    <div
      className={`fixed inset-0 ${
        modalOpen ? 'flex' : 'hidden'
      } flex items-center justify-center z-50 h-screen w-screen `}
    >
      <div className='bg-zinc-900 rounded-lg overflow-hidden shadow-xl transform transition-all p-10 flex flex-col justify-center items-center'>
        <div className='container mx-auto'>
          <div className='bg-zinc-900 text-white mb-3'>
            <h2 className='text-2xl font-semibold text-light-green'>DESIGN</h2>
          </div>
          <div>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              hic blanditiis, ad reprehenderit facilis quas, porro culpa
              expedita doloribus temporibus voluptatem ullam similique? Nostrum,
              facilis ratione molestiae totam deserunt vero.
            </p>
            <button
              // onClick={onClose}
              className='mt-5 bg-light-green text-black px-4 py-2 rounded hover:bg-green-400'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCardModal
