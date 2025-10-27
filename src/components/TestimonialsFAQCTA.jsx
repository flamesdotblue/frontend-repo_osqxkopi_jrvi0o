import React, { useState } from 'react'

function Testimonial({ quote, author, role }) {
  return (
    <figure className="rounded-2xl border border-zinc-200/10 bg-white/5 p-6 shadow-sm">
      <blockquote className="text-zinc-200">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-zinc-400">— {author}, {role}</figcaption>
    </figure>
  )
}

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`
  return (
    <div className="rounded-xl border border-zinc-200/10 bg-zinc-900">
      <h3>
        <button
          id={buttonId}
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 p-4 text-left font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400]"
        >
          <span>{q}</span>
          <span aria-hidden="true" className="text-zinc-400">{open ? '−' : '+'}</span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`${open ? 'block' : 'hidden'} border-t border-zinc-200/10 p-4 text-zinc-300`}>
        {a}
      </div>
    </div>
  )
}

export default function TestimonialsFAQCTA() {
  return (
    <section aria-label="Testimonials and FAQ with CTA" className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">What People Say</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Testimonial
            quote="Reliable, security-minded, and product-focused. Kshitiz helped us harden critical flows without slowing delivery."
            author="Team Lead"
            role="Amro Cranes / Levithan"
          />
          <Testimonial
            quote="Thorough with OWASP remediation and pragmatic automation — a strong collaborator."
            author="Engineering Manager"
            role="Levithan Technologies"
          />
        </div>

        <div className="mt-16">
          <h3 className="mb-4 text-2xl font-semibold">FAQ</h3>
          <div className="grid gap-3">
            <FAQItem
              index={0}
              q="What services do you provide?"
              a="Security analysis, threat modeling, UX for security tooling, and integration of pragmatic detection pipelines."
            />
            <FAQItem
              index={1}
              q="What are typical timelines?"
              a="Small audits and prototypes: 1–2 weeks. Larger integrations and research: 3–6 weeks depending on scope."
            />
            <FAQItem
              index={2}
              q="Do you collaborate with product teams?"
              a="Yes — I work with PMs and engineers to align security with product goals and usability."
            />
            <FAQItem
              index={3}
              q="How do we start?"
              a="Email me at bbruce670@gmail.com with context and goals. We’ll outline scope, milestones, and a start date."
            />
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-[#FFD400] p-8 text-black shadow">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-extrabold">Let’s Whip Up Something Fun!</h3>
              <p className="mt-1 text-sm text-black/80">I’m available for security-focused collaborations and roles.</p>
            </div>
            <a
              href="mailto:bbruce670@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 font-semibold text-white shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFD400]"
            >
              Get Started — bbruce670@gmail.com
            </a>
          </div>
        </div>

        <footer className="mt-12 border-t border-zinc-200/10 pt-6 text-sm text-zinc-400">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Kshitiz Kumar — Cybersecurity Analyst</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-white underline decoration-zinc-600" href="mailto:bbruce670@gmail.com">Email</a>
              <a className="hover:text-white underline decoration-zinc-600" href="#projects">Projects</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
