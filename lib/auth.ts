import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialProvider from "next-auth/providers/credentials"

import prisma from "@/lib/db"

import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any),
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        name: { label: "Username", type: "text" },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Email or password must be provided")

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        if (!user || !user.hashedPassword) {
          throw new Error("User not found!")
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )
        if (!matchPassword) throw new Error("Invalid Password")

        return user
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  pages: {
    signIn: "/sign-in",
  },
}
