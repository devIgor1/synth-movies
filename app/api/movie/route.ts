import prisma from "@/lib/db"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: "NOT AUTHORIZED!" }, { status: 401 })
  }
  const { title, description, director, gender, duration, image, userId } =
    await request.json()

  try {
    await prisma.movie.create({
      data: {
        title,
        description,
        director,
        duration,
        gender,
        image,
        userId: userId,
      },
    })
    return NextResponse.json({ message: "MOVIE REGISTERED!" })
  } catch (error) {
    return NextResponse.json({ error: "ERROR!" }, { status: 401 })
  }
}
