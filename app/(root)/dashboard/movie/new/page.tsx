import { getServerSession } from "next-auth"
import NewMovieForm from "../components/form"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

const Movie = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/home")
  }

  return (
    <div>
      <NewMovieForm userId={session.user.id} />
    </div>
  )
}

export default Movie
