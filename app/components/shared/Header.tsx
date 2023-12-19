"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  const { status, data } = useSession()

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
            className=""
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
            <h1 className="hover:text-pinkNeon hover:animate-pulse hover:bg-white">
              {data.user?.name}
            </h1>
            <button
              onClick={() => signOut()}
              className="hover:text-pinkNeon hover:animate-pulse hover:bg-white"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
      <div className="border-b-2 border-pinkNeon"></div>
    </div>
  )
}

export default Header
