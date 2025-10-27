import React from 'react'
import { Shield, Search, Palette, Layers } from 'lucide-react'

function ExpertiseCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-zinc-200/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:shadow-lg hover:bg-white/10">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD400]/20 text-[#111]"><Icon className="h-5 w-5 text-[#111]" aria-hidden="true" /></div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <section aria-label="About" className="relative bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About</h2>
            <p className="mt-6 text-zinc-300">
              I’m Kshitiz Kumar, a cybersecurity analyst currently interning at Levithan Technologies with hands-on experience in Burp Suite, OWASP Top 10 remediation, and government website projects. I’ve built Ark Surveillance (private AI surveillance prototype), Collegia (student guidance AI server), a Python-based phishing detection engine, and am actively studying mobile app pentesting and Windows internals. I balance product-focused security with pragmatic tooling to make systems safer and maintainable.
            </p>
            <p className="mt-4 text-zinc-300">
              Currently interning at Levithan Technologies; experienced with Burp Suite, OWASP Top 10 remediation, security automation, and threat intel tooling. I combine systems thinking and hands-on tooling to secure products from code to cloud.
            </p>
            <dl className="mt-6 grid gap-4 text-sm text-zinc-400 sm:grid-cols-2">
              <div>
                <dt className="font-medium text-zinc-300">Email</dt>
                <dd><a className="underline decoration-zinc-600 hover:decoration-[#FFD400]" href="mailto:bbruce670@gmail.com">bbruce670@gmail.com</a></dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-300">Location</dt>
                <dd>Faridabad, Haryana, India</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-200/10 bg-white/5 p-6 shadow-sm backdrop-blur">
              <div className="mx-auto h-40 w-full max-w-sm rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-700" aria-hidden="true" />
              <p className="sr-only">Rounded portrait card container</p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Expertise</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <ExpertiseCard
                  icon={Shield}
                  title="UI Design"
                  description="UX for security tooling"
                />
                <ExpertiseCard
                  icon={Search}
                  title="UX Research"
                  description="Evidence-driven usability insights"
                />
                <ExpertiseCard
                  icon={Palette}
                  title="Branding Design"
                  description="Security product branding"
                />
                <ExpertiseCard
                  icon={Layers}
                  title="Interaction Design"
                  description="Usable security workflows"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
