import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certification from '../components/Certification'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Certification/>
      <Contact/>
    </div>
  )
}

export default Home
