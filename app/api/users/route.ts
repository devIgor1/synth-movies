import prisma from "@/lib/db"

import bcrypt from "bcrypt"

import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const data = await request.json()
  const { username, email, password } = data
  console.log("ROUTE HANDLER", data)

  if (!username || !email || !password) {
    return NextResponse.json("Dados inválidos.", { status: 400 })
  }

  const isUserExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (isUserExists) {
    return NextResponse.json({ error: "E-mail já existente." }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      username,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
