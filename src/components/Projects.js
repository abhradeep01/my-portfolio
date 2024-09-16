import React from 'react'
import data from '../data/info.json';
import ProjectFile from './ProjectFile';
function Projects({wdth}) {
  return (
    <div className={`${wdth?'w-[80%] x-sm:w-[98%] x-sm:px-2':'w-full'} flex flex-col gap-8`}>
        <div>
            <h2 className="text-xl font-bold text-green-600 capitalize">
              projects
            </h2>
        </div>
        <hr />
        <div className="w-full flex flex-row flex-wrap gap-8">
          {
            data.projects.map((item,index)=>(
              <ProjectFile
                key={index}
                projectName={item.projectName}
                projectUi={item.projectUi}
                technology={item.technologies}
                githubLink={item.github}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Projects;