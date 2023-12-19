import { useContext, useRef, MouseEvent } from "react"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { MdDashboard } from "react-icons/md"
import { signOut } from "next-auth/react"
import { ModalContext } from "../contexts/ModalContext"
import Link from "next/link"

export function Modal() {
  const { handleModalVisible } = useContext(ModalContext)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleModalClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleModalVisible()
    }
  }

  const handleLogoutUser = async () => {
    await signOut()
  }

  return (
    <div className="absolute w-full min-h-screen" onClick={handleModalClick}>
      <div
        ref={modalRef}
        className="absolute animate-pulse top-5 right-32 md:top-5 md:right-52 border border-white p-2 rounded-lg font-vhs max-w-[170px] h-32 flex-center flex-col text-white text-base md:text-xl"
      >
        <Link
          href="/dashboard"
          className="flex-center gap-3 hover:text-logoNeon hover:bg-white p-1"
        >
          Dashboard
          <MdDashboard />
        </Link>
        <button
          className="flex-center gap-3 hover:text-logoNeon hover:bg-white p-1"
          onClick={handleLogoutUser}
        >
          Logout
          <RiLogoutCircleRLine />
        </button>
      </div>
    </div>
  )
}
