"use client"
import Image from "next/image"

export default function BrandInfo() {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="/yaa.png"
          alt="Dazzle Me Logo"
          width={50}
          height={50}
        />
        <div>
          <p className="font-bold">DAZZLE ME</p>
          <p className="text-sm">Indonesia</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        DAZZLE ME encourages you to BRAVELY DISCOVER every different side of you
        through makeups. Together, let’s DAZZLE THE WORLD!
      </p>
      <p className="mt-3 font-medium">We dare if you dare!</p>
    </div>
  )
}