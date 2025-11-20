import React from 'react'

const team = [
  { name: 'Ishanka', role: 'Co-founder & Strategist' },
  { name: 'Pasan', role: 'Co-founder & Growth' },
  { name: 'Ashan', role: 'Tech Lead' },
  { name: 'Sanodi', role: 'Content Strategist' },
  { name: 'Prathiba', role: 'Design Lead' },
  { name: 'Manjula', role: 'Video Producer' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-neutral-500">Meet Our Core Team</p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="group text-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition">
              <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-700 dark:to-neutral-900" />
              <h4 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-white">{m.name}</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{m.role}</p>
              <div className="opacity-0 group-hover:opacity-100 transition mt-3 text-sm text-neutral-500">Say hello: info@avanza.lk</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
