"use client"

import Header from "@/app/components/shared/Header"
import { IoIosSearch } from "react-icons/io"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MovieProps } from "@/app/types/movie.type"
import { api } from "@/lib/api"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Content = () => {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>("")


  useEffect(() => {
    async function fetchMovies() {
      await api.get("/api/movies").then((response) => {
        setMovies(response.data)
        setLoading(false)
      })
    }
    fetchMovies()
  }, [])

  return (
    <>
      <div className="wrapper flex-center font-vhs">
        <div className="relative w-full max-w-[320px] md:max-w-[460px]">
          <div className="absolute inset-0 bg-pinkNeon animate-pulse rounded-3xl blur-md"></div>
          <section className="relative text-white flex-center bg-gradient-to-t from-[#422a42] via-darkPurple to-darkPurple px-4 py-1 rounded-3xl">
            <input
              type="text"
              className="rounded-full p-2 bg-transparent w-full outline-none pl-4 text-xl text-white animate-pulse"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
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
          {loading ? (
            <div className="font-vhs w-full flex-center flex-col h-64 text-5xl text-white gap-6">
              <h1 className="animate-pulse duration-300 flex-center text-center">
                Loading Movies...
              </h1>
              <span className="animate-spin duration-300">
                <AiOutlineLoading3Quarters />
              </span>
            </div>
          ) : (
            <section className="w-full grid grid-cols-1 gap-9 md:gap-6 md:grid-cols-2 lg:grid-cols-4 p-5 rounded-lg">
              {movies
                .filter((movie) => {
                  return search.toLowerCase() === ""
                    ? movie
                    : movie.title.toLowerCase().includes(search)
                })

                .map((movie) => (
                  <article
                    key={movie.id}
                    className="rounded-lg border-pinkNeon shadow-lg shadow-pinkNeon border-2 hover:scale-105 duration-300"
                  >
                    <Link href={`/movie/${movie.id}`}>
                      <img
                        className="rounded-lg"
                        src={movie.cover}
                        alt="movie"
                      />
                    </Link>
                    <div className="flex items-center justify-between py-3 border-t-2 border-pinkNeon px-2">
                      <h1 className="text-[#FDC580] font-bold">
                        {movie.title}
                      </h1>
                    </div>
                  </article>
                ))}
            </section>
          )}
        </div>
      </div>
    </>
  )
}

export default Content
