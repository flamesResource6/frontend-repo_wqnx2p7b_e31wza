import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/testimonials`)
      const data = await res.json()
      setItems(data)
    }
    load()
  }, [])

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white">What clients say</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-xl" whileHover={{ y: -6 }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1240C0] to-[#4a6ce6]" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 text-slate-700 dark:text-slate-300">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
