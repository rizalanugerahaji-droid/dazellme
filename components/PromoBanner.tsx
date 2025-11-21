"use client"
import { useEffect, useState } from "react"

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(3600) // 1 jam countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (sec: number) => {
    const h = Math.floor(sec / 3600)
    const m = Math.floor((sec % 3600) / 60)
    const s = sec % 60
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold">🔥 Flash Sale is Live!</h2>
      <p className="mt-2 md:mt-0 text-lg font-mono bg-white text-pink-600 px-3 py-1 rounded">
        {formatTime(timeLeft)}
      </p>
    </div>
  )
}
