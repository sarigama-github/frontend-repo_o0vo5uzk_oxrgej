import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500">Start a Conversation</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Let’s Work Together</h3>
            <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li>📞 Sri Lanka: +94 71 0405565 | +94 77 5041031</li>
              <li>🌍 Maldives: +960 9298070</li>
              <li>✉️ info@avanza.lk</li>
            </ul>
          </div>
          <form className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 grid gap-4">
            <input type="text" placeholder="Name" className="w-full rounded-md px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" />
            <input type="email" placeholder="Email" className="w-full rounded-md px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" />
            <textarea rows="5" placeholder="Message" className="w-full rounded-md px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"></textarea>
            <button type="button" className="inline-flex justify-center rounded-full bg-[#FF6B35] px-6 py-3 text-base font-semibold text-white shadow hover:shadow-orange-500/20 hover:brightness-110 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
