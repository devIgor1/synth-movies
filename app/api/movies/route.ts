import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const movies = await prisma.movie.findMany()
    return NextResponse.json(movies, { status: 200 })
  } catch (error) {
    console.error(error)
  }
}
