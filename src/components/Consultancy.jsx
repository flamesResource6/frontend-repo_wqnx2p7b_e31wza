import { motion } from 'framer-motion'
import { Lightbulb, Settings } from 'lucide-react'

export default function Consultancy() {
  const items = [
    'Strategy & Roadmapping',
    'Business Transformation',
    'Performance Optimization',
    'Organizational Change',
  ]

  return (
    <section id="consultancy" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-white"
               style={{ background: 'linear-gradient(135deg, #FFDE21, #ffd84a)', color: '#1240C0' }}>
            <Lightbulb />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Consultancy Services</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            We partner with you to clarify strategy, streamline operations and deliver measurable
            results. Our consultants blend technical depth with people-centered change.
          </p>
          <ul className="mt-6 grid gap-2">
            {items.map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--ia-blue)' }} /> {t}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-6 inline-block px-6 py-3 rounded-xl bg-[color:var(--ia-blue)] text-white font-semibold shadow hover:-translate-y-0.5 transition">
            Request a Consultation
          </a>
        </div>
        <motion.div
          className="relative h-64 md:h-80"
          initial={{ rotate: -4, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 rounded-3xl bg-white/70 dark:bg-slate-800/60 border border-white/50 dark:border-slate-700 shadow-2xl" />
          <Settings className="absolute right-8 bottom-6" size={64} color="#1240C0" />
          <Lightbulb className="absolute left-8 top-6" size={64} color="#FFDE21" />
        </motion.div>
      </div>
    </section>
  )
}
