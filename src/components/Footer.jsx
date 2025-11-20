import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm opacity-80">Avanza Labs – Building Digital Impact.</div>
        <a href="#home" className="text-white/80 hover:text-white">Back to top ↑</a>
        <div className="text-xs opacity-60">© {new Date().getFullYear()} Avanza Labs • Privacy</div>
      </div>
    </footer>
  )
}
