import React from 'react';
import data from '../data/info.json';
import { platforms } from '../data/IconText';
import { Link } from 'react-router-dom';

function About({wdth}) {
  return (
    <div className={wdth?'w-[80%] md:w-[90%] flex flex-row gap-4 mid-tab:flex-col-reverse x-sm:w-[98%] x-sm:px-2':'w-full x-sm:w-[98%]'}>
        <div className={wdth?"w-[50%] mid-tab:w-full flex flex-col gap-4":"w-full flex flex-col gap-2"}>
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
          {wdth?
            <>
              <div className="w-full flex flex-col gap-1.5">
                <div>
                  <h3 className="text-base font-semibold capitalize text-blue-500">
                    connect with me:
                  </h3>
                </div>
                <div className="w-full flex flex-row flex-wrap gap-4">
                  {
                    platforms.map((item,index)=>(
                      <Link key={index} to={item.link} target='_blank' >
                        <button className='flex flex-row items-center gap-1 bg-white rounded-sm p-0.5'>
                          <div className='w-8'>
                            {item.icon}
                          </div>
                          <div className='text-base font-semibold'>
                            {item.text}
                          </div>
                        </button>
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-row items-center gap-1'>
                <h3 className="text-sm font-medium capitalize text-white">my github account: </h3>  
                <span className=""><Link to={data.gitAccount} target='_blank' children={'click here'} className='text-red-400 underline underline-offset-2 capitalize font-semibold'/></span>
              </div>
            </>:
            null
          }
        </div>
        {
          wdth?
          <div className="w-1/2 mid-tab:flex mid-tab:w-full mid-tab:justify-center">
            <img src={data.profilePhoto} alt="profile-photo"  className='aspect-[1/1] justify-self-end mid-tab::w-[62.5%]'/>
          </div>:
          null
        }
    </div>
  )
}

export default About;