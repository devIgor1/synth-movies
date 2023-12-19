import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import AuthProvider from "./components/providers/auth-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Synth Movies",
  description: "Generated by create next app",
  icons: {
    icon: "assets/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
