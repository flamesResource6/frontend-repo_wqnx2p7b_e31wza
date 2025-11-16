import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white text-center">Training Moments</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.button key={i} onClick={() => setActive(src)} className="relative group overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ y: -4 }}>
              <img src={src} alt="Gallery" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.img src={active} alt="Full" className="max-h-[80vh] rounded-2xl shadow-2xl" initial={{ scale: 0.95 }} animate={{ scale: 1 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
