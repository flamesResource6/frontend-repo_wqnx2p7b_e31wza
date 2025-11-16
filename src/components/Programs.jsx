import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Programs() {
  const [programs, setPrograms] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/programs`)
      const data = await res.json()
      setPrograms(data)
    }
    load()
  }, [])

  const categories = ['All', 'Technical', 'Leadership', 'Soft Skills', 'Corporate Programs']
  const filtered = filter === 'All' ? programs : programs.filter((p) => p.category === filter)

  return (
    <section id="programs" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Training Programs</h2>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  filter === c
                    ? 'bg-[color:var(--ia-blue)] text-white border-transparent'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-xl"
              whileHover={{ y: -6 }}
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">{p.category}</div>
              <h3 className="mt-1 font-bold text-lg text-slate-900 dark:text-white">{p.name}</h3>
              <div className="text-sm mt-1 text-slate-600 dark:text-slate-300">Duration: {p.duration}</div>
              <p className="text-sm mt-3 text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-4 flex gap-3">
                <a href="#contact" className="px-4 py-2 rounded-lg text-slate-900 font-semibold" style={{ backgroundColor: 'var(--ia-yellow)' }}>
                  Enroll
                </a>
                <a href="#contact" className="px-4 py-2 rounded-lg bg-[color:var(--ia-blue)] text-white font-semibold">
                  More Info
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
