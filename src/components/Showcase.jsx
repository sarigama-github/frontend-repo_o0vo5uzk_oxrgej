import React from 'react'

const items = [
  { title: 'Editorial Strategy', type: 'Article Series' },
  { title: 'Social Content', type: 'Instagram Reels' },
  { title: 'Video Storytelling', type: 'Product Film' },
  { title: 'Brand Narrative', type: 'Web Copy' },
  { title: 'Campaign Microsite', type: 'Web Experience' },
  { title: 'Community Playbook', type: 'Guidelines' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">Creative & Strategy</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Showcase</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg transition">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-neutral-500">{it.type}</p>
                <h4 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-white">{it.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
