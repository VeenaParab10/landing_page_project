"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"   // ⭐ Add this

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()   // ⭐ initialize router

  const handleLogin = (e) => {
    e.preventDefault()

    // 👉 Your login API logic here
    // If login success:
    router.push("/")   // ⭐ Redirect to Home page
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5RUrG1jquX42-HPbQ9VIx48jfNTK8UYp1wJNlxOpuFp49ZPSCQo5HtdSHkff6D2fmM4&usqp=CAU')",
      }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 animate-fadeIn">

        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin}>   {/* ⭐ wrap with form */}

          {/* Email */}
          <div className="mb-4">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 bg-white/20 text-white rounded-lg outline-none border border-white/30 focus:border-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 bg-white/20 text-white rounded-lg outline-none border border-white/30 focus:border-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg mt-4 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-right mt-3">
          <Link href="#" className="text-white/80 hover:text-white text-sm">
            Forgot Password?
          </Link>
        </div>

        {/* Signup Redirect */}
        <div className="text-center mt-6 text-white">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-300 hover:text-blue-400 font-semibold">
            Sign Up
          </Link>
        </div>
        
        {/* Home Redirect */}
        <div className="text-center mt-3 text-white">
          <Link href="/" className="text-green-500 hover:text-green-400 font-semibold">
            ⟵ Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}
