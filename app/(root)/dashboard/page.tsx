import Image from "next/image"
import Link from "next/link"
import { GiStarsStack } from "react-icons/gi"
import { BiSolidCameraMovie } from "react-icons/bi"
import { FaBackward } from "react-icons/fa"

const Dashboard = async () => {
  return (
    <div className="w-full min-h-screen bg-background-image bg-cover font-vhs">
      <div className="wrapper flex-center flex-col">
        <h1 className="text-white text-4xl md:text-5xl mb-7 md:mb-10">
          Dashboard
        </h1>
        <div>
          <Image
            src="/assets/images/dashboard-theme.png"
            alt="dashboard-image"
            width={905}
            height={100}
            className="shadow-2xl rounded-lg"
          />
          <div className="border border-pinkNeon w-full mt-2"></div>
          <section className="grid flex-col lg:grid-cols-2 mt-6 gap-14 w-full max-w-[905px]">
            <section>
              <Link
                href="/dashboard/favorites"
                className="bg-pinkNeon p-2 flex-center gap-4 rounded-lg shadow-2xl text-shadow border-2 border-black hover:scale-105 duration-300"
              >
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
                  My Movies{" "}
                </h1>
                <span className="text-yellow-400 shadow-black">
                  <GiStarsStack size={30} />
                </span>
              </Link>
            </section>
            <section className="">
              <Link
                href="/dashboard/new"
                className="bg-pinkNeon p-2 flex-center gap-4 rounded-lg shadow-2xl text-shadow border-2 border-black hover:scale-105 duration-300"
              >
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
                  Produce a new movie!
                </h1>
                <span className="text-yellow-400">
                  <BiSolidCameraMovie size={30} />
                </span>
              </Link>
            </section>
          </section>
        </div>
        <div className="mt-52 md:mt-20">
          <Link
            href="/home"
            className="text-white text-3xl md:text-5xl flex-center gap-5 flex-col hover:text-pinkNeon"
          >
            <FaBackward size={45} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
