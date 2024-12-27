import React from 'react'
import { File, Live } from './icons';
import { IconButton } from '@mui/material';
import {Code} from '@mui/icons-material'

function ProjectFile({projectName,projectUi,technology=new Array([]),githubLink,liveLink}) {
  return (
    <div className="w-[23.6rem] relative flex flex-col gap-3 border border-slate-700 rounded-md bg-slate-800 shadow shadow-slate-800 mid-tab:w-[48%] min-tab:w-full p-1 x-sm:w-full">
        <div className='w-full flex flex-row items-center justify-between'>
            <IconButton>
                <File/>
            </IconButton>
            <IconButton href={githubLink} target='_blank' className='flex flex-row gap-0.5'>
                <Code sx={{color:'white'}} fontSize='medium'/> <span className='text-sm capitalize font-semibold text-white'> code</span>
            </IconButton>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white">
                {projectName}
            </h3>
        </div>
        <div className='w-full'>
            <img src={projectUi} alt={projectName} width={640} height={360} className='w-full aspect-[16/9]'/>
        </div>
        <div className="w-full flex flex-row justify-between self-end">
            <div className="w-[78%] flex flex-row flex-wrap gap-2">
                {
                    technology.map((item,index)=>(
                        <div className='rounded px-1' style={{border:`solid 1px ${item.color}`}}>
                            <h5 className={"text-base font-normal"} style={{
                                color:`${item.color}`
                            }}>
                                {item.text}
                            </h5>
                        </div>
                    ))
                }
            </div>
            <button className='bg-white p-0.5 w-fit h-fit rounded-sm'>
                <a href={liveLink} target='_blank' rel='noreferrer' className='flex flex-row text-base font-semibold'>
                    <span>Demo</span> <Live/>
                </a>
            </button>
        </div>
    </div>
  )
}

export default ProjectFile;