// components/Contact.jsx

"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 min-h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBG0XL6rRCAly8mFjnTog8NfMY0HLPFz-Iw&s')",
      }}
    >
      {/* Light white overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      <div className="relative max-w-4xl mx-auto px-6 w-full">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Get in touch</h2>
          <p className="mt-2 text-gray-700">
            Interested in a demo or partnership? Send us a message.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo request submitted — replace this with real form logic.");
            }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              required
              name="name"
              placeholder="Your name"
              className="p-3 border rounded-lg bg-white/70 backdrop-blur-md"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email address"
              className="p-3 border rounded-lg bg-white/70 backdrop-blur-md"
            />
            <input
              name="company"
              placeholder="Company (optional)"
              className="p-3 border rounded-lg bg-white/70 backdrop-blur-md md:col-span-2"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="How can we help?"
              className="p-3 border rounded-lg bg-white/70 backdrop-blur-md md:col-span-2"
            />

            <button
              type="submit"
              className="mt-2 md:col-span-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-md"
            >
              Request Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
