"use client"

import { MovieProps } from "@/app/types/movie.type"
import { api } from "@/lib/api"
import Link from "next/link"
import { RiDeleteBinLine } from "react-icons/ri"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  const router = useRouter()

  async function handleDeleteMovie() {
    try {
      await api.delete("/api/movie", {
        params: {
          id: movie.id,
        },
      })
      toast("Successfully deleted movie!", {
        style: {
          borderRadius: "10px",
          borderColor: "#EB139A",
          background: "#10021B",
          color: "#fff",
          fontFamily: "VHS",
          fontSize: "25px",
        },
      })
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <article className="w-full rounded-lg border-pinkNeon shadow-lg shadow-pinkNeon border-2 hover:scale-105 duration-300">
      <Link href={`/movie/${movie.id}`}>
        <img className="w-full rounded-lg" src={movie.cover} alt="movie" />
      </Link>
      <div className="flex items-center justify-between py-1 border-t-2 border-pinkNeon px-2">
        <h1 className="text-[#FDC580] font-bold">{movie.title}</h1>
        <div className="flex-center gap-3">
          <button
            onClick={handleDeleteMovie}
            className="text-white hover:text-red-700 duration-300"
          >
            <RiDeleteBinLine size={22} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
