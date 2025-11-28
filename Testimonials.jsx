// app/testimonials/page.js
"use client";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi K.",
      role: "Municipal Manager",
      quote:
        "GreenBin reduced pickup costs by 30% and boosted recycling efficiency across the district.",
    },
    {
      name: "Meera S.",
      role: "Community Lead",
      quote:
        "Residents love the smart waste sorting feature. It has increased participation drastically!",
    },
    {
      name: "Amit P.",
      role: "Recycling Officer",
      quote:
        "AI-based waste classification improved our daily operations. Highly recommended!",
    },
  ];

  return (
    <section
      className="
        min-h-screen 
        py-20 px-6 
        bg-cover bg-center 
        flex items-center justify-center
        relative
      "
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(255,255,255,0.8), rgba(240,250,255,0.9)),
          url('https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600&auto=format&fit=crop')
        `,
      }}
    >
      <div className="max-w-6xl mx-auto p-10 rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg animate-fadeIn">
        
        <h1 className="text-4xl font-bold text-center text-indigo-700">
          What People Say About <span className="text-green-600">GreenBin</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                p-6 
                bg-white 
                shadow-md 
                rounded-xl 
                border 
                hover:shadow-xl 
                hover:-translate-y-1
                transition-all 
                duration-300
              "
            >
              <p className="text-gray-700 italic">“{item.quote}”</p>
              <h4 className="mt-4 font-semibold text-indigo-600">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
