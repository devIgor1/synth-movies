"use client"

import { MovieProps } from "@/app/types/movie.type"
import { api } from "@/lib/api"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Content = () => {
  const [movies, setMovies] = useState<MovieProps[]>([])

  const router = useRouter()

  useEffect(() => {
    async function loadMovies() {
      await api
        .get("/api/movies")
        .then((response) => response.data)
        .then((response) => setMovies(response))
      router.refresh()
    }

    loadMovies()
  }, [])

  return (
    <>
      <div className="wrapper flex-center font-vhs">
        <div className="relative w-full max-w-[320px] md:max-w-[460px]">
          <div className="absolute inset-0 bg-pinkNeon animate-pulse rounded-3xl blur-md"></div>
        </div>
      </div>
      <div className="wrapper">
        <div className=" bg-[#040110] font-vhs rounded-lg w-full h-full">
          <h1 className="text-3xl text-white pinkNeon-text-shadow p-4">
            Latest Releases
          </h1>
          <div className="border-b-2 border-blueNeon  w-full"></div>

          <section className="w-full grid grid-cols-1 gap-9 md:gap-6 md:grid-cols-2 lg:grid-cols-4 p-5 rounded-lg">
            {movies.map((movie) => (
              <article
                key={movie.id}
                className="rounded-lg border-pinkNeon shadow-lg shadow-pinkNeon border-2 hover:scale-105 duration-300"
              >
                <Link href={`/movie/${movie.id}`}>
                  <img className="rounded-lg" src={movie.cover} alt="movie" />
                </Link>
                <div className="flex items-center justify-between py-3 border-t-2 border-pinkNeon px-2">
                  <h1 className="text-[#FDC580] font-bold">{movie.title}</h1>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}

export default Content
