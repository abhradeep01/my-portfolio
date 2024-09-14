import React from 'react';
import data from '../data/info.json';

function About({heading,describe,icons = new Array([])}) {
  return (
    <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-2">
          <div>
            <h2 className="text-xl font-bold text-green-600 capitalize">
              {heading}
            </h2>
          </div>
          <div>
            <p className="text-lg font-semibold">
              <span className="text-red-500">
                I'am {data.frontName+" Debnath"}
              </span>
              <span className="text-white m-1">
                {describe}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 x-sm:gap-3">
          <div>
            <h3 className="text-blue-500 text-lg font-semibold">
              Technologies I knew:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-2 flex-wrap justify-between">
            {icons.map((item,index)=>(
              <div className='shadow shadow-white rounded-md' key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default About