import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const brand = {
  blue: '#1240C0',
  yellow: '#FFDE21',
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'What We Do' },
  { href: '#programs', label: 'Training' },
  { href: '#consultancy', label: 'Consultancy' },
  { href: '#coaching', label: 'Coaching' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        elevated ? 'backdrop-blur bg-white/70 dark:bg-slate-900/70 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.yellow})` }}
            />
            <span className="font-extrabold tracking-tight text-xl text-slate-900 dark:text-white">
              Impact <span className="text-[color:var(--ia-yellow)]">Avenue</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-700 dark:text-slate-200 hover:text-[color:var(--ia-blue)] transition"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg bg-white/70 dark:bg-slate-800/70 hover:bg-white border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              className="py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-left"
            >
              {dark ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
