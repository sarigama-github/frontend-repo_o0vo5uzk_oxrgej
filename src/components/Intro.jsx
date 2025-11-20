import React from 'react'

export default function Intro() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-widest text-neutral-500">Who We Are</p>
        <div className="mt-6 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-2xl md:text-3xl leading-relaxed text-neutral-900 dark:text-neutral-100">
              Avanza Labs is a forward-thinking digital marketing partner helping brands grow with creative, data-driven strategies. We craft measurable impact and lasting partnerships across Sri Lanka and the Maldives.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#FF6B35] pl-6 text-neutral-700 dark:text-neutral-300 text-lg italic">
              “Digital marketing is more than clicks and impressions. It’s about creating meaningful connections that inspire action.”
            </blockquote>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
