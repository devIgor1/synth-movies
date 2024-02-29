"use client"

import { useState, useEffect } from "react"

const Vhs = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [alternateBackground, setAlternateBackground] = useState<boolean>(false)

  useEffect(() => {
    let redirectTimer: NodeJS.Timeout
    if (alternateBackground) {
      redirectTimer = setTimeout(() => {
        window.location.href = "/home"
      }, 2500)
    }

    return () => clearTimeout(redirectTimer)
  }, [alternateBackground])

  function handleChangeBackground() {
    setAlternateBackground(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main
      className={`w-full min-h-screen absolute bg-cover bg-center font-vhs ${
        alternateBackground ? "bg-the-countdown" : "bg-vhs-gif"
      }`}
    >
      <div className="absolute top-48 left-16">
        <button
          onClick={handleChangeBackground}
          className="text-4xl md:text-5xl text-white text-shadow hover:bg-gray-200 p-1"
        >
          PLAY &gt;
        </button>
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
