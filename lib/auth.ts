import CredentialProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text" },
      },
      async authorize(credentials, req): Promise<any> {
        const user = {
          username: "80sdev",
          email: "teste@teste.com",
          password: "123123",
        }

        return user
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.SECRET,
}
