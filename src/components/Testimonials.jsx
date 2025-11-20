import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500">What Clients Say</p>
        <blockquote className="mt-6 text-2xl md:text-3xl text-neutral-900 dark:text-white leading-relaxed">
          “Trusted by brands shaping the future of healthcare, tech, and lifestyle.”
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-6 opacity-70">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="h-10 w-28 rounded bg-neutral-200 dark:bg-neutral-800" />
          ))}
        </div>
      </div>
    </section>
  )
}
