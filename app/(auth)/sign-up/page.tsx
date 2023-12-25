"use client"

import { Input } from "@/app/components/shared/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Username is required!" })
    .max(10, { message: "Name should have a maximum of 10 characters." }),
  email: z.string().min(1, { message: "Email is required!" }),
  password: z
    .string()
    .min(1, { message: "Password is required!" })
    .min(6, { message: "Password should have a minimum of 6 characters." }),
})

type FormData = z.infer<typeof schema>

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const router = useRouter()

  async function handleRegisterUser(data: FormData) {
    const request = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })

    await request.json()

    if (!request.ok) {
      toast.error("Email Already Exists!", {
        style: {
          borderRadius: "10px",
          borderColor: "#EB139A",
          background: "#10021B",
          color: "#EB139A",
          fontFamily: "VHS",
          fontSize: "25px",
        },
      })
      return
    }

    router.push("/sign-in")
  }

  return (
    <div className="relative w-full min-h-screen bg-register-background bg-center bg-no-repeat flex-center font-vhs">
      <Link
        href="/home"
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
      <div className=" bg-registerForm flex-center p-10 border-2 border-white rounded-lg w-full max-w-[761px]">
        <form className="w-full" onSubmit={handleSubmit(handleRegisterUser)}>
          <div className="flex-center mb-8 animate-pulse">
            <h1 className="absolute text-5xl font-roadRage text-pinkNeon items-center text-center mx-auto">
              Register <br /> <span>Page</span>
            </h1>
            <Image
              className="relative -top-1 left-40"
              src="/assets/images/registerImage.png"
              alt="palm"
              width={98}
              height={85}
            />
          </div>
          <label className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg flex-center">
            Username:{" "}
            <Input
              type="text"
              name="name"
              register={register}
              error={errors.name?.message}
              className="outline-none bg-transparent text-pinkNeon caret-vhs w-full max-w-[600px] h-11"
            />
          </label>
          <label className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg flex-center">
            Email:{" "}
            <Input
              type="email"
              name="email"
              register={register}
              error={errors.email?.message}
              className="outline-none bg-transparent text-pinkNeon caret-vhs w-full max-w-[600px] h-11"
            />
          </label>
          <label className="text-white text-xl border-2 border-white p-2 mb-4 rounded-lg flex-center">
            Password:{" "}
            <Input
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
              className="outline-none bg-transparent text-pinkNeon caret-vhs w-full max-w-[600px] h-11"
            />
          </label>
          <button
            type="submit"
            className="border border-whiter rounded-lg bg-pinkNeon text-white font-bold text-center w-full p-2 hover:bg-pink-500 duration-300"
          >
            Sign Up
          </button>
          <div className="mt-4 text-white text-xl">
            <h1 className="text-center">
              Already have an account?
              <Link
                href="/sign-in"
                className="text-blueNeon animate-pulse hover:bg-white p-1 "
              >
                Login
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
