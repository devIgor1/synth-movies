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
        className="outline-none bg-transparent text-white caret-vhs"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 my-1">{error}</p>}
    </>
  )
}
