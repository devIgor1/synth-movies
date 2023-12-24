import { authOptions } from "@/lib/auth"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "NOT AUTHORIZED!" }, { status: 401 })
    }

    const { title, description, director, gender, duration, cover, userId } =
      await request.json()

    const movie = await prisma.movie.create({
      data: {
        title,
        description,
        director,
        duration,
        gender,
        cover,
        userId: session.user.id,
      },
    })

    return NextResponse.json({ message: "MOVIE REGISTERED!", movie })
  } catch (error) {
    return console.log(error)
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ error: "NOT AUTHORIZED!" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("id")

  if (!userId) {
    NextResponse.json({ error: "Failed to delete movie" }), { status: 400 }
  }

  try {
    await prisma.movie.delete({
      where: {
        id: userId as string,
      },
    })

    return NextResponse.json({ message: "Movie deleted successfully" })
  } catch (error) {
    NextResponse.json({ error: "Failed to delete movie" }), { status: 400 }
  }

  return NextResponse.json({ ok: true })
}
