"use client"
import Image from "next/image"

export default function BestBanner() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="/tes.png" // pastikan file ada di folder /public
        alt="Best at Dazzle Me"
        width={1200}     // atur sesuai ukuran asli gambar
        height={400}     // tinggi proporsional agar tidak gepeng
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
