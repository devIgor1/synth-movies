"use client"

import { useEffect, useState } from "react"
import { MovieProps } from "@/app/types/movie.type"
import { useParams } from "next/navigation"
import { api } from "@/lib/api"
import Image from "next/image"

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
  }, [id])

  if (loading) {
    return <h1>LOADING...</h1>
  }

  return <div className="bg-[#0B0353] min-h-screen w-full"></div>
}

export default MovieDetails
