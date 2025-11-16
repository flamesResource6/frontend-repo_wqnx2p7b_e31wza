import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Kofi A.',
    role: 'Senior Engineer',
    quote: 'My coach helped me clarify priorities and lead with confidence.',
  },
  {
    name: 'Esi B.',
    role: 'Team Lead',
    quote: 'Our sessions improved team trust and delivery speed within weeks.',
  },
]

export default function Coaching() {
  return (
    <section id="coaching" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Coaching & Leadership</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            One-on-one and team coaching tailored to your goals. We focus on clarity, accountability and
            real-world practice to accelerate growth.
          </p>
          <ul className="mt-6 grid gap-2">
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[color:var(--ia-blue)]" /> Executive Coaching</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[color:var(--ia-blue)]" /> One-on-One Coaching</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[color:var(--ia-blue)]" /> Team Coaching</li>
            <li className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[color:var(--ia-blue)]" /> Leadership Mentoring</li>
          </ul>
        </div>
        <div className="grid gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-xl"
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            >
              <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
              <p className="mt-2 text-slate-700 dark:text-slate-300">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
