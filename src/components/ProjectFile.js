import React from 'react'
import { File, GithubOutlined, Live } from './icons';

function ProjectFile({projectName,projectUi,technology=new Array([]),githubLink,liveLink}) {
  return (
    <div className="w-[25rem] flex flex-col gap-3 border border-slate-700 rounded-md bg-slate-800 shadow shadow-slate-800 p-1 x-sm:w-full">
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
        <div className="w-full flex flex-row justify-between self-end">
            <div className="w-[78%] flex flex-row flex-wrap gap-2">
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
            <div className='w-[20%] flex flex-col gap-1'>
                <a href={githubLink} target='_blank' rel='noreferrer' className='w-fit self-end'>
                    <GithubOutlined/>
                </a>
                <button className='bg-white p-0.5 w-fit h-fit rounded-sm self-end'>
                    <a href={liveLink} target='_blank' rel='noreferrer' className='flex flex-row text-base font-semibold'>
                        <span>Demo</span> <Live/>
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProjectFile;