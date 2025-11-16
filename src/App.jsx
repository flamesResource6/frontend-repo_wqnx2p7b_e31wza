import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Programs from './components/Programs'
import Consultancy from './components/Consultancy'
import Coaching from './components/Coaching'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <style>{`
        :root { --ia-blue: #1240C0; --ia-yellow: #FFDE21; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Programs />
        <Consultancy />
        <Coaching />
        <Testimonials />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
