import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import CaseStudy from './components/CaseStudy'
import Showcase from './components/Showcase'
import Team from './components/Team'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Intro />
        <Philosophy />
        <Services />
        <CaseStudy />
        <Showcase />
        <Team />
        <Why />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
