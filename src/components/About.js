import React from 'react';
import data from '../data/info.json';
import { knownTech,learningTech } from '../data/IconText';
function About({wdth}) {
  return (
    <div className={`${wdth?'w-[80%] x-sm:w-[98%] x-sm:px-2':'w-full'} flex flex-col gap-6 x-sm:w-[98%]`}>
        <div className="w-full flex flex-col gap-2">
          <div>
            <h2 className="text-xl font-bold text-green-600 capitalize">
              {data.about.heading}
            </h2>
          </div>
          <div>
            <p className="text-lg font-semibold">
              <span className="text-red-500">
                I'am {data.frontName+" Debnath"}
              </span>
              <span className="text-white m-1">
                {data.about.describe}
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
          <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
            {knownTech.map((item,index)=>(
              <div>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 x-sm:gap-3">
          <div>
            <h3 className='text-blue-500 text-lg font-semibold capitalize'>
              technologies i'm learning right now:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
            {learningTech.map((item,index)=>(
              <div>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default About