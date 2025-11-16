import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const stats = [
    { label: 'Trainees', value: '4,500+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years of Impact', value: '10+' },
  ]

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <motion.div
            className="absolute -left-6 -top-6 w-24 h-24 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #1240C0, #4a6ce6)' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1529336953121-4f5a6c2d5a25?q=80&w=1400&auto=format&fit=crop"
              alt="Training session"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Mission-driven learning that moves people forward
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            We equip professionals and organizations with the technical, leadership, and human skills
            to thrive. Our programs are practical, experiential, and tailored to your goals.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-white/50 dark:border-slate-700 text-center shadow">
                <motion.div
                  className="text-2xl md:text-3xl font-extrabold text-[color:var(--ia-blue)]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {s.value}
                </motion.div>
                <div className="text-xs uppercase tracking-wide mt-1 text-slate-600 dark:text-slate-300">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <a href="#services" className="mt-8 inline-flex items-center gap-2 text-[color:var(--ia-blue)] font-semibold">
            Explore what we do <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
