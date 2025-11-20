import React from 'react'
import { Menu } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Team', href: '#team' },
  { label: 'Why Avanza', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/10 dark:bg-neutral-900/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-white text-lg">
            Avanza Labs
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white shadow hover:shadow-orange-500/20 hover:brightness-110 transition">Let's Work Together →</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
