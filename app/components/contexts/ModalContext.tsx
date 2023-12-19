"use client"

import { createContext, ReactNode, useState } from "react"
import { Modal } from "../shared/Modal"

interface ModalContextData {
  visible: boolean
  handleModalVisible: () => void
}

export const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState<boolean>(false)

  function handleModalVisible() {
    setVisible(!visible)
  }

  return (
    <ModalContext.Provider value={{ visible, handleModalVisible }}>
      {visible && <Modal />}
      {children}
    </ModalContext.Provider>
  )
}
