import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  const movies = await prisma.movie.findMany()

  return NextResponse.json(movies)
}
