import { motion } from 'framer-motion'

const logos = [
  'FinServe',
  'TechHub',
  'GrowthX',
  'DataCore',
  'SkyNet',
  'BlueWave',
]

export default function Partners() {
  return (
    <section id="partners" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white">Trusted by teams</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((l, i) => (
            <motion.div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-center font-semibold text-slate-600 dark:text-slate-300"
              whileHover={{ y: -4, scale: 1.02 }}>
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
