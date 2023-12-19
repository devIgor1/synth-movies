"use client"

import { Input } from "@/app/components/shared/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

const schema = z.object({
  email: z.string().min(1, { message: "Email is required!" }),
  password: z.string().min(6, { message: "Password is required!" }),
})

type FormData = z.infer<typeof schema>

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const router = useRouter()

  let timeout = 1000

  async function handleLoginUser(data: FormData) {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    })

    setTimeout(() => {
      router.push("/")
    }, timeout)
  }

  return (
    <div className="relative w-full min-h-screen bg-login-background bg-center bg-no-repeat flex-center font-vhs">
      <Link
        href="/"
        className="absolute top-5 left-6 px-[10px] hover:animate-pulse text-center text-xl text-white hover:bg-white hover:text-pink-500"
      >
        <Image
          src="/assets/images/rewind-arrow.png"
          alt="rewind-arrow"
          width={60}
          height={50}
        />
        HOME
      </Link>
      <div className=" bg-loginForm flex-center p-10 border-2 border-white rounded-lg">
        <form onSubmit={handleSubmit(handleLoginUser)}>
          <div className="flex-center mb-8">
            <h1 className="absolute text-5xl font-roadRage text-blueNeon items-center mx-auto ">
              Login <br /> Page
            </h1>
            <Image
              className="relative -top-2 right-32 animate-pulse"
              src="/assets/images/palmtree.png"
              alt="palm"
              width={98}
              height={65}
            />
          </div>
          <label className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg flex-center">
            Email:{" "}
            <Input
              type="text"
              name="email"
              register={register}
              error={errors.email?.message}
            />
          </label>
          <label className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg flex-center">
            Password:{" "}
            <Input
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
          </label>
          <button
            type="submit"
            className="border border-whiter rounded-lg bg-blueNeon text-white text-center w-full p-2 hover:bg-blue-300 duration-300"
          >
            Login
          </button>
          <div className="mt-4 text-white text-xl">
            <h1 className="max-sm:text-center">
              Don't have an account? Don't waste more time and{" "}
              <Link
                href="/sign-up"
                className="text-pinkNeon animate-pulse hover:bg-white p-1"
              >
                register
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
