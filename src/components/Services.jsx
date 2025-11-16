import { motion } from 'framer-motion'
import { Cpu, Users, Compass, Wrench } from 'lucide-react'

const items = [
  {
    title: 'Technical Training',
    icon: Cpu,
    desc: 'Networking, AI and hands-on technical upskilling for modern teams.',
  },
  {
    title: 'Leadership Development',
    icon: Users,
    desc: 'Build leaders who inspire, communicate, and execute with clarity.',
  },
  { title: 'Coaching', icon: Compass, desc: 'Executive, one-on-one and team coaching for sustainable growth.' },
  { title: 'IT Consultancy', icon: Wrench, desc: 'Strategy, transformation and performance optimization.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white">
          What We Do
        </h2>
        <p className="text-center mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Practical, high-impact learning experiences with measurable outcomes.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-xl"
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 16 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                   style={{ background: 'linear-gradient(135deg, #1240C0, #4a6ce6)', color: 'white' }}>
                {<item.icon />}
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{item.desc}</p>
              <a href="#programs" className="inline-block mt-4 text-[color:var(--ia-blue)] font-semibold">Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
