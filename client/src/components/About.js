import React from 'react';
import data from '../data/info.json';

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
    </div>
  )
}

export default About