import Header from "../components/shared/Header"
import { getCurrentUser } from "@/lib/session"

export default async function Home() {
  const user = await getCurrentUser()

  return (
    <main className="w-full h-full bg-background-image bg-no-repeat bg-center">
      <Header />
      <div className="max-w-5xl flex-center">
        <section className="text-white"></section>
      </div>
    </main>
  )
}
