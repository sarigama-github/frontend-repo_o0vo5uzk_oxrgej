import React from 'react'
import { Rocket, BarChart3, Handshake } from 'lucide-react'

const points = [
  { icon: Rocket, title: 'Innovation First', desc: 'We prototype, test, and iterate to unlock advantage.' },
  { icon: BarChart3, title: 'Data That Drives Action', desc: 'Clarity turns into decisions, decisions into results.' },
  { icon: Handshake, title: 'Client-Centric Partnership', desc: 'Long-term value and shared ownership of outcomes.' },
]

export default function Why() {
  return (
    <section id="why" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-neutral-500">Why Avanza?</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg transition">
              <Icon className="h-8 w-8 text-[#FF6B35]" />
              <h4 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white">{title}</h4>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
