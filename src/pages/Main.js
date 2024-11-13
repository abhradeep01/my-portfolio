import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
function Main() {
  return (
    <div className="w-[80%] md:w-[90%] flex flex-col gap-16 x-sm:w-[98%] x-sm:px-2">
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main;