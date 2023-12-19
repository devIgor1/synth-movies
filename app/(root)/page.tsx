import Header from "../components/shared/Header"
import { Modal } from "../components/shared/Modal"

export default async function Home() {
  return (
    <main className="w-full h-full bg-background-image bg-no-repeat bg-center">
      <Header />
      <div className="max-w-5xl flex-center">
        <section className="text-white"></section>
      </div>
    </main>
  )
}
