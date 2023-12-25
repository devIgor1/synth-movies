"use client"

import { useParams } from "next/navigation"

const MovieDetails = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Movie {id} details</h1>
    </div>
  )
}

export default MovieDetails
