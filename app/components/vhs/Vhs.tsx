"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

const Vhs = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-vhs-gif bg-cover bg-center w-full min-h-screen absolute font-vhs">
      <div className="absolute top-48 left-16">
        <Link
          href="/home"
          className="text-4xl md:text-5xl text-white text-shadow hover:bg-gray-200 p-1"
        >
          PLAY &gt;
        </Link>
      </div>
      <div className="flex-center text-4xl md:text-7xl text-white text-shadow">
        Made by:{" "}
        <Link
          href="https://github.com/devIgor1"
          target="_blank"
          className="hover:bg-gray-200"
        >
          Igor
        </Link>
      </div>
      <div className="text-4xl md:text-5xl text-white text-shadow absolute bottom-48 left-16">
        <h1>
          PM{" "}
          {currentDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </h1>
        <h1>
          {currentDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </h1>
      </div>
    </main>
  )
}

export default Vhs
