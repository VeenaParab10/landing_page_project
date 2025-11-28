"use client";

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Smart waste management — <span className="text-indigo-600">GreenBin</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Automate classification, optimise pickups, and reduce landfill with AI-powered routing and recycling suggestions.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#features"
              className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex-1 animate-fadeIn">
          <div className="rounded-2xl shadow-xl overflow-hidden bg-white/70 backdrop-blur-md p-6 border">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ2vhLzIdtwpwXw90ZuWhngB-MdFsjD64CQ&s"
              alt="AI Sorting"
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">Automation for Cleaner Cities</h3>
              <p className="text-sm text-gray-700 mt-2">
                GreenBin is an AI-powered smart waste management platform designed to transform how communities, municipalities, and businesses manage waste.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.3s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.3s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
