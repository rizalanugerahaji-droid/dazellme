"use client"
import { Button } from "@/components/ui/button"

export default function TopBanner() {
  return (
    <div className="bg-pink-50 text-pink-600 text-sm py-2 px-4 flex justify-center items-center">
      ✨ Road to 9.9 ✨ Up to 65% OFF · No Ongkir No Minimum · FREE 2 Beauties
      <Button className="ml-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs hover:bg-pink-600">
        Shop Now
      </Button>
    </div>
  )
}
