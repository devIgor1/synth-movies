import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const Login = () => {
  return (
    <div className="relative w-full min-h-screen bg-login-background bg-center bg-no-repeat flex-center font-vhs">
      <Link
        href="/"
        className="absolute top-5 left-6 px-[10px] hover:animate-pulse text-center text-xl text-white hover:bg-white hover:text-black"
      >
        <Image
          src="/assets/images/rewind-arrow.png"
          alt="rewind-arrow"
          width={60}
          height={50}
        />
        HOME
      </Link>
      <div className=" bg-loginForm flex-center p-10 border-2 border-white rounded-lg">
        <form>
          <div className="flex-center mb-8 animate-pulse">
            <h1 className="absolute text-5xl font-roadRage text-blueNeon items-center mx-auto">
              Login Page
            </h1>
            <Image
              className="relative -top-2 right-44"
              src="/assets/images/palmtree.png"
              alt="palm"
              width={98}
              height={65}
            />
          </div>
          <h2 className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg">
            Login:{" "}
            <input
              className="outline-none bg-transparent text-white caret-vhs"
              type="text"
            />
          </h2>
          <h2 className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg">
            Password:{" "}
            <input
              className="outline-none bg-transparent text-white caret-vhs"
              type="password"
            />
          </h2>
          <button className="border border-whiter rounded-lg bg-pinkNeon text-white text-center w-full p-2 hover:bg-pink-500 duration-300">
            Login
          </button>
          <div className="mt-4 text-white text-xl">
            <h1 className="max-sm:text-center">
              Don't have an account? Don't waste more time and{" "}
              <Link
                href="/register"
                className="text-blueNeon animate-pulse hover:bg-white p-1"
              >
                register
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
