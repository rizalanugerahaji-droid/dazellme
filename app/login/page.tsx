"use client"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100">
      {/* Bagian kiri (form login) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-12">
        {/* Branding */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow-sm">
            Dazzle Me ✨
          </h1>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            Masuk ke akun kamu dan nikmati belanja kosmetik yang mempesona 💖
          </p>
        </div>

        {/* Form login */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-pink-100 transition hover:shadow-xl">
          <LoginForm />
        </div>

        {/* Link ke register */}
        <div className="mt-6 text-sm text-gray-600">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-pink-600 font-medium hover:underline hover:text-pink-700 transition"
          >
            Daftar sekarang
          </a>
        </div>
      </div>

      {/* Bagian kanan (banner) */}
      <div className="hidden md:flex md:w-1/2 relative items-center justify-center">
        <img
          src="/yaa.png"
          alt="Dazzle Me Products"
          className="max-w-md rounded-2xl shadow-2xl relative z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-purple-600/40 rounded-l-3xl"></div>
      </div>
    </div>
  )
}
