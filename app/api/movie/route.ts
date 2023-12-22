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
