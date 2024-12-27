import React from 'react'

function Technology({icon,name}) {
  return (
    <div className="flex flex-col gap-0.5 items-center">
      <div className='shadow-sm rounded shadow-slate-400 p-0.5 w-10'>
        <img src={icon} alt="" className='w-full aspect-square rounded'/>
      </div>
      <div>
        <h4 className="text-sm font-normal text-white">
          {name}
        </h4>
      </div>
    </div>
  )
}

export default Technology