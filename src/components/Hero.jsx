import React from 'react'

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-xs tracking-[0.25em] text-zinc-400">BASKARA©</p>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">KSHITIZ KUMAR</span>
            </h1>
            <p className="max-w-xl text-lg text-zinc-300">
              I’m Kshitiz Kumar — cybersecurity analyst & applied security engineer. I build resilient systems, pragmatic tools, and product-focused security integrations.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:bbruce670@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[#FFD400] px-6 py-3 font-semibold text-black shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition"
              >
                Get Started
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-3 font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition"
              >
                See Projects
              </a>
            </div>
            <div className="pt-2 text-sm text-zinc-400">
              <span className="mr-4">Faridabad, Haryana, India</span>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="underline decoration-zinc-600 hover:decoration-[#FFD400]">LinkedIn: Kshitiz Kumar</a>
            </div>
          </div>
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl bg-white/5 p-1 backdrop-blur md:h-80 md:w-80">
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-400" aria-hidden="true" />
            <span className="sr-only">Portrait of Kshitiz Kumar</span>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
