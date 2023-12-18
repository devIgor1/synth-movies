"use client"

import { Input } from "@/app/components/shared/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

  function handleLoginUser(data: FormData) {
    console.log(data)
  }

  return (
    <div className="relative w-full min-h-screen bg-login-background bg-center bg-no-repeat flex-center font-vhs">
      <Link
        href="/"
        className="absolute top-5 left-6 px-[10px] hover:animate-pulse text-center text-xl text-white hover:bg-white hover:text-black"
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
          <div className="flex-center mb-8 animate-pulse">
            <h1 className="absolute text-5xl font-roadRage text-blueNeon items-center mx-auto ">
              Login <br /> Page
            </h1>
            <Image
              className="relative -top-2 right-32"
              src="/assets/images/palmtree.png"
              alt="palm"
              width={98}
              height={65}
            />
          </div>
          <h2 className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg flex-center">
            Email:{" "}
            <Input
              type="text"
              name="email"
              register={register}
              error={errors.email?.message}
            />
          </h2>
          <h2 className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg flex-center">
            Password:{" "}
            <Input
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
          </h2>
          <button className="border border-whiter rounded-lg bg-pinkNeon text-white text-center w-full p-2 hover:bg-pink-500 duration-300">
            Login
          </button>
          <div className="mt-4 text-white text-xl">
            <h1 className="max-sm:text-center">
              Don't have an account? Don't waste more time and{" "}
              <Link
                href="/sign-up"
                className="text-blueNeon animate-pulse hover:bg-white p-1"
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
