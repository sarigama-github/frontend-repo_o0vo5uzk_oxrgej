import React from 'react'

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">Award-Winning</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Best Use of Digital in OTC Pharmaceuticals</h3>
            <div className="mt-6 space-y-4 text-neutral-700 dark:text-neutral-300">
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white">Challenge</h4>
                <p>Drive credible awareness and sustained engagement for an Ayurveda OTC brand in a cluttered market.</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white">Strategy</h4>
                <p>Community-first, credibility-led approach focused on education, partnerships with practitioners, and a content engine aligned to audience needs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white">Result</h4>
                <p>+70% engagement, 3x ROI, and category-leading sentiment uplift across target segments.</p>
              </div>
            </div>
            <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-[#FF6B35] px-6 py-3 text-base font-semibold text-white shadow hover:shadow-orange-500/20 hover:brightness-110 transition">View Full Case Study</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
