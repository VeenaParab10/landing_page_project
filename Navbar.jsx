"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          GreenBin
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="#features" className="hover:text-indigo-600">Features</Link>
          <Link href="/testimonials" className="hover:text-indigo-600">Testimonials</Link>
          <Link href="#contact" className="hover:text-indigo-600">Contact</Link>

          {/* Login / Signup Buttons */}
          <Link
            href="/login"
            className="px-4 py-2 text-sm border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/testimonials" onClick={() => setOpen(false)}>
                     Testimonials
            </Link>          
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* Mobile Login / Signup */}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg text-center"
          >
            Login
          </Link>

          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-indigo-600 text-white rounded-lg text-center"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
