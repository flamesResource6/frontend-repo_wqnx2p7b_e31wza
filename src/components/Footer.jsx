import { Facebook, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-extrabold text-slate-900 dark:text-white">Impact <span style={{ color: 'var(--ia-yellow)' }}>Avenue</span></div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Training. Coaching. Consultancy.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="grid gap-2">
            <a href="#services" className="hover:text-[color:var(--ia-blue)]">Services</a>
            <a href="#programs" className="hover:text-[color:var(--ia-blue)]">Training</a>
            <a href="#coaching" className="hover:text-[color:var(--ia-blue)]">Coaching</a>
            <a href="#consultancy" className="hover:text-[color:var(--ia-blue)]">Consultancy</a>
          </div>
          <div className="grid gap-2">
            <a href="#about" className="hover:text-[color:var(--ia-blue)]">About</a>
            <a href="#partners" className="hover:text-[color:var(--ia-blue)]">Partners</a>
            <a href="#testimonials" className="hover:text-[color:var(--ia-blue)]">Testimonials</a>
            <a href="#contact" className="hover:text-[color:var(--ia-blue)]">Contact</a>
          </div>
        </div>
        <div className="flex md:justify-end items-center gap-3">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><Facebook /></a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><Linkedin /></a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><Instagram /></a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Impact Avenue. All rights reserved.</div>
    </footer>
  )
}
