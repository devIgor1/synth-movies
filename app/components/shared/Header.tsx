import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full font-vhs">
      <nav className="md:mx-14 p-5 flex-between">
        <Link href="/">
          <Image
            src="/assets/images/homeLogo.png"
            alt="logo"
            width={120}
            height={90}
            className="animate-pulse"
          />
        </Link>
        <div className="text-white text-2xl md:text-4xl">
          <Link href="/sign-in" className="hover:text-pinkNeon animate-pulse">
            Login
          </Link>
          <span className="px-2 animate-pulse">|</span>
          <Link href="/sign-out" className="hover:text-pinkNeon animate-pulse">
            Register
          </Link>
        </div>
      </nav>
      <div className="border-b-2 border-pinkNeon"></div>
    </div>
  )
}

export default Header
