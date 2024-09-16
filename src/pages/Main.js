import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills';
import Contact from '../components/Contact';
function Main() {
  return (
    <div className="w-[80%] flex flex-col gap-16 x-sm:w-[98%] x-sm:px-2">
        <About/>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default Main;