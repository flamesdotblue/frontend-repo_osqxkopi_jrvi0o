import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsGallery from './components/ProjectsGallery'
import TestimonialsFAQCTA from './components/TestimonialsFAQCTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <ProjectsGallery />
      <TestimonialsFAQCTA />
    </div>
  )
}

export default App
