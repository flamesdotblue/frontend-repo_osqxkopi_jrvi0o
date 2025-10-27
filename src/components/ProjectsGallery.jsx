import React from 'react'

const projects = [
  {
    title: 'Ark Surveillance',
    tag: 'Computer Vision / TensorFlow',
    desc:
      'Private AI surveillance prototype using TensorFlow for face recognition and local-first deployment.',
  },
  {
    title: 'Collegia',
    tag: 'Private AI / Guidance',
    desc:
      'Private AI server to ingest college data and guide freshers; deployed on AWS/local.',
  },
  {
    title: 'Phishing Detection System',
    tag: 'Python / Security',
    desc:
      'Multi-factor phishing classifier: domain reputation, SSL checks, content heuristics, Vulners CVE lookups.',
  },
  {
    title: 'E-Voting Prototype',
    tag: 'Research / UX',
    desc: 'Early research and mockups for a secure e-voting workflow.',
  },
  {
    title: 'Mobile App Pentest Samples',
    tag: 'Pentesting',
    desc: 'Reports and findings — in progress.',
  },
  {
    title: 'Windows Internals Experiments',
    tag: 'Systems / R&D',
    desc: 'Tooling and research notes.',
  },
]

function ProjectCard({ title, tag, desc }) {
  return (
    <article className="group rounded-2xl border border-zinc-200/10 bg-zinc-900 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-within:shadow-xl">
      <div
        aria-hidden="true"
        className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-700"
      />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{tag}</p>
      <p className="mt-3 text-sm text-zinc-300">{desc}</p>
    </article>
  )
}

export default function ProjectsGallery() {
  return (
    <section id="projects" aria-label="My Best Projects" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">My Best Projects</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              A selection of practical security work from AI surveillance to phishing detection and secure workflows.
            </p>
          </div>
          <a
            href="mailto:bbruce670@gmail.com"
            className="hidden rounded-full bg-[#FFD400] px-5 py-2 font-semibold text-black shadow hover:shadow-lg sm:inline-flex"
          >
            Get in touch
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
