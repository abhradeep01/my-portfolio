import React from 'react';
import Technology from './Technology';

function Skills({heading,data=new Array([])}) {
  return (
    <div className="w-full flex flex-col gap-1">
      <div>
        <h3 className="text-blue-500 text-lg font-semibold capitalize">
          {heading}
        </h3>
      </div>
      <div className="w-full flex flex-row gap-x-4 gap-y-3 flex-wrap x-sm:gap-x-4">
        {
          data.map((item,index)=>(
            <Technology
              key={index}
              icon={item.icon}
              name={item.text}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Skills;