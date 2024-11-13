import React from 'react'
import data from '../data/info.json';
import { platforms } from '../data/IconText';


function HeaderProfile() {
  return (
    <div className="w-[80%] flex flex-row justify-between mid-tab:gap-4 pt-2 pb-4 md:w-[90%] mid-tab:flex-col-reverse x-sm:w-[98%] x-sm:flex-col-reverse x-sm:px-2">
        <div className="w-1/2 flex items-center mid-tab:w-full x-sm:w-full">
          <div className="flex flex-col gap-6 x-sm:gap-4">
            <div>
              <span className='text-orange-400 text-lg font-semibold'>
                Hey, I'm 
              </span>
              <span className='text-green-400 ml-2 text-xl font-bold'>
                {data.frontName}
              </span>
            </div>  
            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                {data.occupency}
              </h3>
            </div>
            <div>
              <h4 className='text-lg font-semibold text-lime-400'>
                {data.tagline}
              </h4>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div>
                <h4 className="text-white capitalize text-base font-semibold">
                  connect with me: 
                </h4>
              </div>
              <div className="w-full flex flex-row gap-4 flex-wrap">
                {platforms.map((item,index)=>(
                  <button className='flex flex-row items-center gap-1 bg-white rounded p-1'>
                    <div className='w-8'>
                      {item.icon}
                    </div>
                    <div>
                      <a href={item.link} target='_blank' rel="noreferrer noreferrer" className='text-base font-semibold'>
                        {item.text}
                      </a>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 mid-tab:w-full x-sm:w-full mid-tab:flex mid-tab:justify-center">
          <img src={data.profilePhoto} alt="profile-photo" className='rounded-sm' />
        </div>
    </div>
  )
}

export default HeaderProfile;