import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 pointer-events-none"></div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">We Build Digital Ecosystems That Convert.</h1>
          <p className="max-w-2xl text-lg sm:text-xl text-white/80">Not just clicks. Real growth through innovation, data, and community.</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#FF6B35] px-6 py-3 text-base font-semibold text-white shadow hover:shadow-orange-500/20 hover:brightness-110 transition">Let’s Work Together →</a>
            <a href="#services" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/90 hover:text-white hover:border-white transition">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
