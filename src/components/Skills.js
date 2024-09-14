import React from 'react';
import Potrate from './Potrate';
import data from '../data/info.json';
function Skills() {
  return (
    <div className="">
        <div>
            <h2 className="text-xl font-bold text-green-600 capitalize py-2">
                Skills
            </h2>
        </div>
        <hr />
        <div className="w-full flex flex-col gap-4 py-4">
            <div>
                <h3 className='capitalize text-red-500 text-lg font-bold'>
                    <li>frontend development</li>
                </h3>
            </div>
            <div className="w-full flex flex-col gap-3">
                {
                    data.frontendDevelopment.map((item,index)=>(
                        <Potrate
                            heading={item.skill}
                            describe={item.describe}
                        />
                    ))
                }
            </div>
        </div>
        <div className="w-full flex flex-col gap-4 py-4">
            <div>
                <h3 className='capitalize text-red-500 text-lg font-bold'>
                    <li>Core Concepts & Tools</li>
                </h3>
            </div>
            <div className="w-full flex flex-col gap-3">
                {
                    data.coreConceptsTools.map((item,index)=>(
                        <Potrate
                            heading={item.skill}
                            describe={item.describe}
                        />
                    ))
                }
            </div>
        </div>
        
    </div>
  )
}

export default Skills