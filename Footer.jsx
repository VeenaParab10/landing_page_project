import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative mt-auto bg-cover bg-center border-t"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">

        <div>
          <strong className="text-gray-900 text-xl">GreenBin</strong>
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} GreenBin Inc.
          </p>
        </div>

        <div className="text-sm text-gray-900 font-medium flex flex-col gap-2">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>

      </div>
    </footer>
  );
}
