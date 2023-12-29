import prisma from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const movies = await prisma.movie.findMany()

  return NextResponse.json(movies)
}
