import Image from "next/image"
import { FC } from "react"

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="w-full min-h-screen bg-login-background bg-center bg-no-repeat flex-center font-vhs">
      <div className=" bg-loginForm flex-center p-10 border-2 border-white rounded-lg">
        <form>
          <div className="relative flex-center mb-8 animate-pulse">
            <h1 className="text-5xl font-roadRage text-blueNeon items-center mx-auto">
              Login Page
              <Image
                className="absolute -top-9 -left-8"
                src="/assets/images/palmtree.png"
                alt="palm"
                width={98}
                height={65}
              />
            </h1>
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
        </form>
      </div>
    </div>
  )
}

export default Page
