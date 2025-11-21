"use client"
import { Dispatch, SetStateAction } from "react"

interface TabsSectionProps {
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

export default function TabsSection({ active, setActive }: TabsSectionProps) {
  const tabs = ["Home", "Products", "Promo"]
  return (
    <div className="flex justify-center gap-8 border-b mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`py-2 border-b-2 ${
            active === tab
              ? "border-pink-500 text-pink-500 font-semibold"
              : "border-transparent text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
