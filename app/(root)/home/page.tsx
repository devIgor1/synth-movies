import Content from "@/app/components/shared/Content"
import Header from "@/app/components/shared/Header"
import prisma from "@/lib/db"

export default async function Home() {
  return (
    <div className="w-full min-h-screen bg-background-image bg-no-repeat bg-center">
      <Header />
      <Content />
    </div>
  )
}
