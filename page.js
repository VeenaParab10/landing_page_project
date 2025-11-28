
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20">
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
