import { getServerSession } from "next-auth"
import Vhs from "../components/vhs/Vhs"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/home")
  }

  return (
    <>
      <Vhs />
    </>
  )
}
