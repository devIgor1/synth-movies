"use client"

import { Input } from "@/app/components/shared/Input"
import { SingleImageDropzone } from "@/app/components/shared/SingleImageDropzone"
import { useEdgeStore } from "@/lib/edgestore"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { MdLocalMovies } from "react-icons/md"
import { z } from "zod"

const schema = z.object({
  title: z.string().min(1, { message: "Title is required!" }),
  director: z.string().min(1, { message: "Director is required!" }),
  gender: z.string().min(1, { message: "Gender is required!" }),
  duration: z
    .string()
    .regex(/^(\d+h)?(\d+m)?$/i)
    .refine(
      (duration) => {
        return /^(\d+h)?(\d+m)?$/i.test(duration)
      },
      { message: "Invalid duration format. Use format like 2h30m or 2h or 30m" }
    ),
  description: z.string().min(1, { message: "Description is required!" }),
})

const New = () => {
  const [file, setFile] = useState<File>()
  const [urls, setUrls] = useState<{
    url: string
    thumbnailUrl: string | null
  }>()
  const { edgestore } = useEdgeStore()

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  async function handleFile(data: FormData) {
    if (file) {
      const res = await edgestore.movieImage.upload({ file })

      setUrls({
        url: res.url,
        thumbnailUrl: res.thumbnailUrl,
      })
    }

    console.log(data)
  }

  return (
    <div className="w-full min-h-screen bg-register-movie bg-center bg-cover font-vhs">
      <div className="p-5 lg:p-0 lg:pt-5 wrapper">
        <div className=" bg-newspaper border-2 border-black">
          <h1 className="text-center text-5xl flex-center gap-5 py-5">
            <MdLocalMovies size={30} />
            New Movie <MdLocalMovies size={30} />
          </h1>

          <div className="border-y-2 border-black flex flex-col flex-center">
            <div className="border-x-2 border-black">
              <label className="p-2 text-center w-full text-2xl font-bold">
                Movie Cover
              </label>
              <SingleImageDropzone
                width={200}
                height={200}
                value={file}
                onChange={(file) => {
                  setFile(file)
                }}
              />
            </div>
          </div>
          <form>
            <div className="flex items-center">
              <label className="p-2 h-13 max-h-13 text-2xl font-bold border-r-2 border-black">
                Title
              </label>
              <Input
                type="text"
                className="text-2xl text-black outline-none pl-2 w-full bg-transparent"
                name="title"
                register={register}
                error={errors.title?.message}
              />
            </div>
            <div className="border border-black"></div>
            <div className="flex items-center">
              <label className="p-2 h-13 max-h-13 text-2xl font-bold border-r-2 border-black">
                Director
              </label>
              <Input
                type="text"
                className="text-2xl text-black outline-none w-full pl-2 bg-transparent"
                name="director"
                register={register}
                error={errors.director?.message}
              />
            </div>
            <div className="border border-black"></div>
            <div className="flex flex-col lg:flex lg:flex-row">
              <div className="flex items-center">
                <label className="p-2 text-2xl h-13 max-h-13 font-bold border-black border-r-2">
                  Gender
                </label>
                <Input
                  type="text"
                  className="text-2xl text-black outline-none border-black pl-2 bg-transparent w-full"
                  name="gender"
                  register={register}
                  error={errors.gender?.message}
                />
              </div>
              <div className="block lg:hidden border border-black w-full"></div>
              <div className="flex items-center">
                <label className="p-2 text-2xl h-13 max-h-13 font-bold lg:border-l-2 w-full border-black border-r-2">
                  Duration
                </label>
                <Input
                  type="text"
                  className="text-2xl text-black outline-none border-black pl-2 bg-transparent"
                  name="duration"
                  register={register}
                  error={errors.duration?.message}
                  placeholder="e.g. 2h30m"
                />
              </div>
            </div>
            <div className="border border-black"></div>
            <div className="flex items-center">
              <label className="p-2 h-13 max-h-13 text-2xl font-bold border-r-2 border-black">
                Description
              </label>
              <Input
                className="text-2xl text-black outline-none pl-2 resize-none w-full bg-transparent"
                type="text"
                name="description"
                register={register}
                error={errors.description?.message}
              />
            </div>
            <div className="flex items-center border-b-2 border-black"></div>
            <div className="text-black text-2xl w-full flex-center">
              <button className="border-x-2 border-black p-4 hover:bg-zinc-200 duration-300">
                Be Famous!
              </button>
              <div className="bg-black text-white"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default New
