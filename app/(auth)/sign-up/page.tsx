import Image from "next/image"
import Link from "next/link"

const Register = () => {
  return (
    <div className="relative w-full min-h-screen bg-register-background bg-center bg-no-repeat flex-center font-vhs">
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
      <div className=" bg-loginForm flex-center p-10 border-2 border-white rounded-lg w-full max-w-[761px]">
        <form className="w-full">
          <div className="flex-center mb-8 animate-pulse">
            <h1 className="absolute text-5xl font-roadRage text-pinkNeon items-center text-center mx-auto">
              Register <br /> <span>Page</span>
            </h1>
            <Image
              className="relative -top-1 left-40"
              src="/assets/images/registerImage.png"
              alt="palm"
              width={98}
              height={85}
            />
          </div>
          <h2 className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg">
            Username:{" "}
            <input
              className="outline-none bg-transparent text-white caret-vhs"
              type="text"
            />
          </h2>
          <h2 className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg">
            Email:{" "}
            <input
              className="outline-none bg-transparent text-white caret-vhs"
              type="email"
            />
          </h2>
          <h2 className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg">
            Password:{" "}
            <input
              className="outline-none bg-transparent text-white caret-vhs"
              type="password"
            />
          </h2>
          <button className="border border-whiter rounded-lg bg-blueNeon text-white font-bold text-center w-full p-2 hover:bg-blue-300 duration-300">
            Sign Up
          </button>
          <div className="mt-4 text-white text-xl">
            <h1 className="text-center">
              Already have an account?
              <Link
                href="/sign-in"
                className="text-pinkNeon animate-pulse hover:bg-white p-1 "
              >
                Login
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
