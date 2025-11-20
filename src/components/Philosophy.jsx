import React from 'react'
import { Sparkles, Target, HeartHandshake, LineChart, ShieldCheck, Users } from 'lucide-react'

const values = [
  { icon: Sparkles, label: 'Innovation' },
  { icon: LineChart, label: 'Results' },
  { icon: HeartHandshake, label: 'Collaboration' },
  { icon: ShieldCheck, label: 'Integrity' },
  { icon: Target, label: 'Continuous Learning' },
  { icon: Users, label: 'Client-Centric' },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-neutral-500">Our Core Philosophy</p>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Strategy With Soul</h3>
          <p className="mt-6 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">Purpose-led repositioning, authenticity over gimmicks, precision with purpose. We don’t chase trends — we build meaningful digital ecosystems that endure.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, label }) => (
            <div key={label} className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-6 backdrop-blur-sm transition transform hover:-translate-y-1 hover:shadow-lg">
              <Icon className="h-8 w-8 text-[#FF6B35]" />
              <p className="mt-3 font-medium text-neutral-900 dark:text-white">{label}</p>
              <div className="mt-2 h-1 w-8 bg-neutral-200 dark:bg-neutral-800 group-hover:bg-[#FF6B35] transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
