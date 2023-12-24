import Link from "next/link"
import { RiDeleteBinLine } from "react-icons/ri"
import { GrEdit } from "react-icons/gr"
import { PiPopcornBold } from "react-icons/pi"
import { LuCupSoda } from "react-icons/lu"
import { IoCaretBackOutline } from "react-icons/io5"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const MyMovies = async () => {
  const session = await getServerSession(authOptions)

  const movies = await prisma.movie.findMany({
    where: {
      userId: session?.user.id,
    },
  })

  console.log(movies)

  return (
    <main className="w-full min-h-screen bg-my-movies bg-center bg-cover bg-no-repeat font-vhs">
      <Link
        href="/dashboard"
        className="text-white flex items-center text-3xl hover:underline p-2 mb-32"
      >
        <IoCaretBackOutline size={30} color="#EB139A" />
        Back to Dashboard
      </Link>
      <div className="wrapper">
        <div className="flex-center p-3 w-full flex-col">
          <div className="bg-darkPurple rounded-lg p-14 md:p-10 shadow-2xl shadow-pinkNeon  ">
            <div className="border-double border-4 border-blueNeon shadow-lg shadow-blueNeon rounded-lg relative">
              <div className="flex-center text-[#FCFCBB] bg-darkPurple gap-3 p-0 md:pb-2 absolute -top-9 left-6 md:-left-4">
                <span className="-rotate-12">
                  <LuCupSoda size={50} />
                </span>
                <h1 className="text-2xl md:text-5xl lg:text-5xl blue-text-shadow">
                  My Movies
                </h1>
                <span className="rotate-12">
                  <PiPopcornBold size={50} />
                </span>
              </div>
              <section className="w-full grid g grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-6 rounded-lg">
                {movies.map((movie) => (
                  <section
                    className="w-full rounded-lg border-pinkNeon shadow-lg shadow-pinkNeon border-2"
                    key={movie.id}
                  >
                    <Link href="/movie/:id">
                      <img
                        className="w-full rounded-lg"
                        src={movie.cover}
                        alt="movie"
                      />
                    </Link>
                    <div className="flex items-center justify-between py-3 border-t-2 border-pinkNeon px-2">
                      <h1 className="text-[#FDC580] font-bold">
                        {movie.title}
                      </h1>
                      <div className="flex-center gap-3">
                        <span className="text-white">
                          <RiDeleteBinLine size={22} />
                        </span>
                        <span className="text-white">
                          <GrEdit size={22} />
                        </span>
                      </div>
                    </div>
                  </section>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyMovies
