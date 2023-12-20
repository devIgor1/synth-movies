"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BiSolidDownArrow, BiSolidLeftArrow } from "react-icons/bi"
import { MdDashboard } from "react-icons/md"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { Modal } from "./Modal"

const Header = () => {
  const { status, data } = useSession()
  const [visible, setVisible] = useState<boolean>(false)
  const [arrowEffect, setArrowEffect] = useState<boolean>(false)

  function handleOpenModal() {
    setVisible(!visible)
  }

  async function handleLogoutUser() {
    await signOut()
  }

  return (
    <div className="w-full font-vhs">
      <nav className="md:mx-14 p-5 flex-between">
        <Link
          href="/"
          className="flex-center font-roadRage text-logoNeon hover:animate-pulse"
        >
          <h1 className=" md:text-5xl hidden lg:block">Synth Movies</h1>
          <Image
            src="/assets/images/homeLogo.png"
            alt="logo"
            width={120}
            height={90}
            className="w-24 md:w-[120px]"
          />
        </Link>
        {status === "unauthenticated" && (
          <div className="text-white text-2xl md:text-3xl">
            <Link
              href="/sign-in"
              className="hover:text-pinkNeon hover:animate-pulse hover:bg-white"
            >
              Login
            </Link>
            <span className="px-2 animate-pulse">|</span>
            <Link
              href="/sign-up"
              className="hover:text-pinkNeon hover:animate-pulse hover:bg-white"
            >
              Register
            </Link>
          </div>
        )}

        {status === "authenticated" && (
          <div className="text-white text-2xl md:text-3xl">
            {!visible ? (
              <button
                className="flex-center gap-4 active:text-logoNeon"
                onClick={handleOpenModal}
              >
                <span className="animate-pulse">
                  <BiSolidDownArrow />
                </span>
                <h1 className="animate-pulse">{data.user?.name}</h1>
              </button>
            ) : (
              <button
                className="flex-center gap-4 active:text-logoNeon"
                onClick={handleOpenModal}
              >
                <Modal />
                <span className="animate-pulse rotate-90">
                  <BiSolidDownArrow />
                </span>
                <h1 className="animate-pulse">{data.user?.name}</h1>
              </button>
            )}
          </div>
        )}
      </nav>
      <div className="border-b-2 border-pinkNeon"></div>
    </div>
  )
}

export default Header
