"use client"

import { ModalContext } from "../contexts/ModalContext"
import { useContext, useRef, MouseEvent } from "react"

export function Modal() {
  const { handleModalVisible } = useContext(ModalContext)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleModalClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleModalVisible()
    }
  }

  return (
    <div className="bg-white">
      <h1 className="text-black text-3xl">Modal</h1>
    </div>
  )
}
