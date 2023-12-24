import Header from "@/app/components/shared/Header"
import { IoIosSearch } from "react-icons/io"
import Link from "next/link"
import prisma from "@/lib/db"
import MovieCard from "../dashboard/my-movies/components/card"

export default async function Home() {
  const movies = await prisma.movie.findMany()

  return (
    <div className="w-full min-h-screen bg-background-image bg-no-repeat bg-center">
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
      <div className="wrapper">
        <div className=" bg-[#040110] font-vhs rounded-lg w-full h-full">
          <h1 className="text-3xl text-white pinkNeon-text-shadow p-4">
            Latest Releases
          </h1>
          <div className="border-b-2 border-blueNeon  w-full"></div>
          <section className="w-full grid grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-4 p-5 rounded-lg">
            {movies.map((movie) => (
              <article className="w-full rounded-lg border-pinkNeon shadow-lg shadow-pinkNeon border-2 hover:scale-105 duration-300">
                <Link href={`/movie/${movie.id}`}>
                  <img
                    className="w-full rounded-lg"
                    src={movie.cover}
                    alt="movie"
                  />
                </Link>
                <div className="flex items-center justify-between py-3 border-t-2 border-pinkNeon px-2">
                  <h1 className="text-[#FDC580] font-bold">{movie.title}</h1>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}
