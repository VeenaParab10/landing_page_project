"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = (e) => {
    e.preventDefault()
    setLoading(true)

    // Fake success (you can replace this with real API later)
    setTimeout(() => {
      alert("Signup successful! Redirecting to login page...")
      router.push("/login")   // redirect to login page
    }, 1000)
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
          Create an Account
        </h1>

        <form onSubmit={handleSignup}>
          {/* Username */}
          <div className="mb-4">
            <label className="text-white font-medium">Username</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-3 bg-white/20 text-white rounded-lg outline-none border border-white/30 focus:border-blue-400"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 bg-white/20 text-white rounded-lg outline-none border border-white/30 focus:border-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg mt-4 shadow-lg disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Login Redirect */}
        <div className="text-center mt-6 text-white">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-300 hover:text-blue-400 font-semibold">
            Login
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
