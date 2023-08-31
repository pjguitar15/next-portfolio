// import React, { createContext, useContext, useState } from 'react'

// // fix
// // const ModalContext = createContext()

// export const useModalContext = () => {
//   return useContext(ModalContext)
// }

// export const ModalProvider = ({ children }: { children: any }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   return (
//     <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
//       {children}
//     </ModalContext.Provider>
//   )
// }
