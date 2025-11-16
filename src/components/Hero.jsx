import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-50"
             style={{ background: 'radial-gradient(circle at 30% 30%, #1240C0, transparent 60%)' }} />
        <div className="absolute -bottom-24 -right-24 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-60"
             style={{ background: 'radial-gradient(circle at 70% 70%, #FFDE21, transparent 60%)' }} />
        <motion.div
          className="absolute left-10 top-24 w-24 h-24 rounded-2xl shadow-2xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ background: 'linear-gradient(135deg, #1240C0, #4a6ce6)' }}
        />
        <motion.div
          className="absolute right-24 bottom-24 w-16 h-16 rounded-full shadow-2xl"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          style={{ background: 'linear-gradient(135deg, #FFDE21, #ffd84a)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-[color:var(--ia-blue)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Jumpstart Your Next-Level Growth
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-200"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Training. Coaching. Consultancy.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="px-6 py-3 rounded-xl font-semibold text-slate-900 hover:shadow-xl transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--ia-yellow)' }}
            >
              Explore Trainings
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-white hover:shadow-xl transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--ia-blue)' }}
            >
              Book Consultation
            </a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px]">
          <motion.div
            className="absolute inset-0 rounded-3xl bg-white/70 dark:bg-slate-900/40 backdrop-blur border border-white/40 shadow-2xl"
            initial={{ rotateX: 12, rotateY: -12, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute inset-6 rounded-3xl"
            style={{ background: 'linear-gradient(180deg, #ffffffaa, #eaefffa0)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute left-10 top-10 right-10 bottom-10 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="rounded-2xl bg-white/80 dark:bg-slate-800/70 border border-white/50 dark:border-slate-700 shadow-xl"
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
