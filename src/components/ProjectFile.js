import React from 'react'
import { File, GithubOutlined } from './icons';

function ProjectFile({projectName,projectUi,technology=new Array([]),githubLink}) {
  return (
    <div className="w-96 flex flex-col gap-3 border border-slate-700 rounded-md bg-slate-800 shadow shadow-slate-800 p-2 x-sm:w-full">
        <div>
            <File/>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white">
                {projectName}
            </h3>
        </div>
        <div>
            <img src={projectUi} alt={projectName} />
        </div>
        <div className="w-full flex flex-row justify-between">
            <div className="w-[80%] flex flex-row flex-wrap gap-2">
                {
                    technology.map((item,index)=>(
                        <div>
                            <h5 className={"text-base font-semibold"} style={{
                                color:`${item.color}`
                            }}>
                                {item.text}
                            </h5>
                        </div>
                    ))
                }
            </div>
            <div className='w-fit'>
                <a href={githubLink} target='_blank' rel='noreferrer'>
                    <GithubOutlined/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectFile;