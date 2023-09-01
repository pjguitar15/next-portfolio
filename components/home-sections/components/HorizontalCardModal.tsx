'use client'
import { useGlobalContext } from '@/context/ModalContext'

const HorizontalCardModal = () => {
  const { isModalOpen, setIsModalOpen, modalTitle, modalDescription } =
    useGlobalContext()
  const handleClose = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div
      className={`fixed inset-0 ${
        isModalOpen ? 'flex' : 'hidden'
      } flex items-center justify-center z-50 h-screen w-screen bg-zinc-900 `}
    >
      <div className='transform transition-all p-10 flex flex-col justify-center items-center'>
        <div className='container mx-auto'>
          <div className='bg-zinc-900 text-white mb-3'>
            <h2 className='text-2xl font-semibold text-light-green'>
              {modalTitle}
            </h2>
          </div>
          <div>
            <p className='text-white'>{modalDescription}</p>
            <button
              onClick={handleClose}
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
