"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BiSolidDownArrow } from "react-icons/bi"
import { Modal } from "./Modal"
import { PiUser } from "react-icons/pi"

const Header = () => {
  const { status, data } = useSession()
  const [visible, setVisible] = useState<boolean>(false)

  function handleOpenModal() {
    setVisible(!visible)
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
                <h1 className="animate-pulse flex-center gap-2">
                  {data.user?.name} <PiUser size={28} />
                </h1>
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
                <h1 className="animate-pulse flex-center gap-2">
                  {data.user?.name}
                  <span className="text-white">
                    <PiUser size={28} />
                  </span>
                </h1>
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
