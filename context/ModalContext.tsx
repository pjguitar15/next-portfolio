'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

interface ContextProps {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  modalTitle: string
  setModalTitle: Dispatch<SetStateAction<string>>
  modalDescription: string
  setModalDescription: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalTitle: '',
  setModalTitle: () => {},
  modalDescription: '',
  setModalDescription: () => {},
})

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalDescription, setModalDescription] = useState('')
  return (
    <GlobalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        modalTitle,
        setModalTitle,
        modalDescription,
        setModalDescription,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
