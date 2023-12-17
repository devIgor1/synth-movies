"use client"

interface InputProps {
  type: string | any
  placeholder: string | any
  className: string
}

export function Input({ placeholder, type }: InputProps) {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className="outline-none bg-transparent text-white"
      />
    </>
  )
}
