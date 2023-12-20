import Header from "../components/shared/Header"
import { IoIosSearch } from "react-icons/io"

export default async function Home() {
  return (
    <main className="w-full h-full bg-background-image bg-no-repeat bg-center">
      <Header />
      <div className="wrapper flex-center font-vhs">
        <div className="relative w-full max-w-[320px] md:max-w-[460px]">
          <div className="absolute inset-0 bg-pinkNeon animate-pulse rounded-3xl blur-md"></div>
          <section className="relative text-white flex-center bg-gradient-to-t from-[#422a42] via-darkPurple to-darkPurple px-4 py-1 rounded-3xl">
            <input
              type="text"
              className="rounded-full p-2 bg-transparent w-full outline-none pl-4 text-xl text-white animate-pulse"
              placeholder="Search..."
            />
            <span className="cursor-pointer animate-pulse hover:scale-110 duration-300">
              <IoIosSearch size={34} />
            </span>
          </section>
        </div>
      </div>
    </main>
  )
}
