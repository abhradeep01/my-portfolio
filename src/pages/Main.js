import React from 'react'
import About from '../components/About'
import data from '../data/info.json';
import { Css, Git, Github, Html, Js, Jsx, Tailwindcss, } from '../components/icons';
import Skills from '../components/Skills';

const icons = [
  <Html/>,
  <Css/>,
  <Tailwindcss/>,
  <Js/>,
  <Jsx/>,
  <Git/>,
  <Github/>
]
function Main() {
  return (
    <div className="w-[80%] flex flex-col gap-16 x-sm:w-[98%]">
        <About
          heading={data.about.heading}
          describe={data.about.describe}
          icons={icons}
        />
        <Skills/>
    </div>
  )
}

export default Main