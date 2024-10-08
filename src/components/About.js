import React from 'react';
import data from '../data/info.json';
import { frontendTools, knownTech,learningTech, versionControl } from '../data/IconText';
import Technology from './Technology';
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
              Frontend Technologies I knew:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
            {knownTech.map((item,index)=>(
              <Technology
                key={index}
                icon={item.icon}
                name={item.text}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 x-sm:gap-3">
          <div>
            <h3 className="text-blue-500 text-lg font-semibold">
              Frontend Tools:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
            {frontendTools.map((item,index)=>(
              <Technology
                key={index}
                icon={item.icon}
                name={item.text}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 x-sm:gap-3">
          <div>
            <h3 className="text-blue-500 text-lg font-semibold">
              Version Control and Hosting:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
            {versionControl.map((item,index)=>(
              <Technology
                key={index}
                icon={item.icon}
                name={item.text}
              />
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
              <Technology
                key={index}
                icon={item.icon}
                name={item.text}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default About