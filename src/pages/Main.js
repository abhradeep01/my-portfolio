import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills';
function Main() {
  return (
    <div className="w-[80%] flex flex-col gap-16 x-sm:w-[98%]">
        <About/>
        <Skills/>
    </div>
  )
}

export default Main;