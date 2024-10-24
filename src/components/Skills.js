import React from 'react';
import Potrate from './Potrate';
import data from '../data/info.json';
import { frameworkLibs, frontendTechnology, learningTech, tools } from '../data/IconText';
import Technology from './Technology';
function Skills({wdth}) {
  return (
    <div className={`${wdth?'w-[80%] x-sm:w-[98%] x-sm:px-2':'w-full'} flex flex-col gap-3`}>
        <div>
            <h2 className="text-xl font-bold text-green-600 capitalize">
                Skills
            </h2>
        </div>
        <hr />
        <div className="w-full flex flex-col gap-4">
            <div>
                <h3 className="text-blue-500 text-lg font-semibold">
                  Frontend Technologies I knew:
                </h3>
            </div>
            <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
                {frontendTechnology.map((item,index)=>(
                  <Technology
                    key={index}
                    icon={item.icon}
                    name={item.text}
                  />
                ))}
            </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h3 className="text-blue-500 text-lg font-semibold">
              Framework and Libraries I Knew:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
            {frameworkLibs.map((item,index)=>(
              <Technology
                key={index}
                icon={item.icon}
                name={item.text}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h3 className="text-blue-500 text-lg font-semibold">
            Tools I Used:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-12 flex-wrap x-sm:gap-6">
            {tools.map((item,index)=>(
              <Technology
                key={index}
                icon={item.icon}
                name={item.text}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h3 className='text-blue-500 text-lg font-semibold capitalize'>
              backend technologies i'm learning right now:
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

export default Skills