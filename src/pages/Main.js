import React from 'react'
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
function Main({about,skills={},projects}) {
  console.log("skills:",skills);
  
  return (
    <div className="w-[80%] md:w-[90%] flex flex-col gap-16 x-sm:w-[98%] x-sm:px-2">
      <About aboutData={about}/>
      <div className={`w-full x-sm:px-2 flex flex-col gap-4`}>
        <div>
          <h3 className="text-xl font-bold text-green-600 capitalize">
            skills
          </h3>
        </div>
        <hr />
        <Skills
         heading={'frontend technologies i knew:'}
         data={skills.front}
        />
        <Skills 
          heading={'tools i used:'}
          data={skills.tools}
        />
        <Skills 
          heading={'framework and libraries i knew:'}
          data={skills.libs}
        />
        <Skills 
          heading={"backend technologies i'm learning right now:"}
          data={skills.learn}  
        />
      </div>
      {/* <Skills skillData={skills}/> */}
      <Projects projects={projects}/>
      <Contact/>
    </div>
  )
}

export default Main;