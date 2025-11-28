// components/Features.jsx
"use client";
import { FaRecycle, FaRoute, FaHandsHelping } from 'react-icons/fa'

const items = [
  {
    icon: FaRecycle,
    title: 'Smart Classification',
    desc: 'Image-based AI sorting for accurate disposal recommendations.',
  },
  {
    icon: FaRoute,
    title: 'Optimized Pickup',
    desc: 'AI route optimization lowers fuel and improves schedule adherence.',
  },
  {
    icon: FaHandsHelping,
    title: 'Community Rewards',
    desc: 'Incentivize recycling with points, badges and local pickup discounts.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop')",
      }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 animate-fadeIn">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Why GreenBin?</h2>
          <p className="mt-3 text-gray-700">
            Everything you need to run a smarter, greener waste program.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{it.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
