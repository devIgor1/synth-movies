import { RiLogoutCircleRLine } from "react-icons/ri"
import { MdDashboard } from "react-icons/md"
import { signOut } from "next-auth/react"
import Link from "next/link"

export function Modal() {
  const handleLogoutUser = async () => {
    await signOut()
  }

  return (
    <div className="animate-pulse border border-white p-2 rounded-lg font-vhs max-w-[170px] flex-center flex-col text-white text-base md:text-xl">
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
  )
}
