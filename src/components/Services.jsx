import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'SEO', desc: 'Optimizing visibility so your audience finds you first.' },
  { title: 'PPC Advertising', desc: 'Performance-driven acquisition at scale.' },
  { title: 'Social Media Marketing', desc: 'Community-led growth with substance.' },
  { title: 'Content Marketing', desc: 'Editorial storytelling that builds trust.' },
  { title: 'Email Marketing', desc: 'Lifecycle journeys that nurture and convert.' },
  { title: 'Conversion Rate Optimization (CRO)', desc: 'Turn traffic into measurable revenue.' },
  { title: 'Analytics & Reporting', desc: 'Clarity from data. Decisions with confidence.' },
  { title: 'Website Development', desc: 'Fast, accessible, and SEO-ready sites.' },
  { title: 'Digital Content Creation', desc: 'Visuals that move people to action.' },
  { title: 'Video Production & Editing', desc: 'Stories told with cinematic precision.' },
  { title: 'Application Development', desc: 'Products that scale with your ambition.' },
  { title: 'Event Management', desc: 'Experiences that spark real connections.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">Under Our Roof</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Services</h3>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 hover:bg-white hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">{s.title}</h4>
                <span className="inline-block h-10 w-10 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] grid place-items-center font-bold">{String(i+1).padStart(2, '0')}</span>
              </div>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
