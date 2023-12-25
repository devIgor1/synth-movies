"use client"

import { useEffect, useState } from "react"
import { MovieProps } from "@/app/types/movie.type"
import { useParams } from "next/navigation"
import { api } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<MovieProps>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadMovie() {
      await api
        .get("/api/movie", {
          params: {
            id,
          },
        })
        .then((response) => {
          setMovie(response.data)
          setLoading(false)
        })
        .catch(() => console.log("Movie not found!"))
    }
    loadMovie()
  }, [])

  if (loading) {
    return <h1>LOADING...</h1>
  }

  return (
    <div className="bg-specific-movie bg-center bg-cover bg-no-repeat min-h-screen w-full font-vhs">
      <div className="w-full h-24 p-4 border-b-2 border-white flex items-center ">
        <Link
          href="/home"
          className="px-[10px] hover:animate-   pulse text-center text-xl text-white hover:bg-white hover:text-pink-500"
        >
          <Image
            src="/assets/images/rewind-arrow.png"
            alt="rewind-arrow"
            width={60}
            height={50}
          />
          HOME
        </Link>
      </div>
      <div className="md:wrapper flex-center md:flex md:items-center md:justify-around flex-col md:flex-row bg-[#190713]/95 mt-2">
        <section>
          <div className="flex-center flex-col p-6">
            <Image
              src="/assets/images/homeLogo.png"
              alt="logo"
              width={120}
              height={90}
              className="w-24 md:w-[120px] animate-pulse"
            />
            <div className="w-full border border-[#7E448F]"></div>
            <h1 className="text-[#F9DB59] text-center text-4xl md:text-5xl mt-4">
              {movie?.title}
            </h1>
            <p className="text-[#f9DB59] text-xl md:text-2xl">
              {moment(movie?.release_date).format("LL")}
            </p>
            <div className="w-full flex items-center justify-normal gap-6 mt-10">
              <p className="text-pinkNeon text-lg md:text-xl">
                Gender: <span className="text-[#F9DB59]">{movie?.gender}</span>
              </p>
              <p className="text-pinkNeon text-lg md:text-xl">
                Director:{" "}
                <span className="text-[#F9DB59]">{movie?.director}</span>
              </p>
            </div>
            <div className="w-full my-3">
              <p className="text-pinkNeon text-lg md:text-xl">
                Duration:{" "}
                <span className="text-[#F9DB59]">{movie?.duration}</span>
              </p>
            </div>
          </div>
        </section>
        <section className="w-[350px] md:w-full max-w-[500px]">
          <img
            src={movie?.cover}
            alt="movie-cover"
            className="rounded-lg shadow-xl shadow-pinkNeon hover:animate-pulse"
          />
        </section>
      </div>
      <div className="flex-center flex-col wrapper bg-[#190713]/95">
        <h1 className="text-pinkNeon  text-lg md:text-xl mt-4">Description</h1>
        <p className="text-[#F9DB59] text-center text-lg md:text-xl">
          {movie?.description}
        </p>
      </div>
    </div>
  )
}

export default MovieDetails
