import React from 'react';
import ProjectFile from './ProjectFile';
import { Link } from 'react-router-dom';
function Projects({wdth,projects=new Array([])}) {
  return (
    <div className={`${wdth?'w-[80%] md:w-[90%] x-sm:w-[98%] x-sm:px-2':'w-full'} flex flex-col gap-8`}>
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-green-600 capitalize">
              projects
            </h2>
          </div>
          <Link to={'/projects'} children={'all projects'} className='capitalize bg-white p-1 rounded-sm text-base font-semibold text-blue-700'/>
        </div>
        <hr />
        <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-6">
          {
            projects.map((item,index)=>(
              <ProjectFile
                key={index+1}
                projectName={item.projectName}
                projectUi={item.projectUi}
                technology={item.technologies}
                githubLink={item.github}
                liveLink={item.liveLink}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Projects;