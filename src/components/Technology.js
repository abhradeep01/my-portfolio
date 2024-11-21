import React from 'react'

function Technology({icon,name}) {
  return (
    <div className="flex flex-col gap-1 items-center">
        <div className='shadow rounded shadow-slate-400 p-0.5'>
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            {name}
          </h4>
        </div>
    </div>
  )
}

export default Technology