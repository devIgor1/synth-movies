"use client"

import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps {
  type: string
  placeholder?: string
  name: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
}

export function Input({
  name,
  placeholder,
  register,
  type,
  rules,
  error,
}: InputProps) {
  return (
    <>
      <input
        className="outline-none bg-transparent text-pinkNeon caret-vhs w-full max-w-[600px] h-11"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && (
        <p className="text-red-500 text-lg md:text-xl text-center">{error}</p>
      )}
    </>
  )
}
