import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data/info.json';
function DropDownNav({showMenu}) {
  return (
    <div className={`transition-all ${showMenu?'fixed top-[4.1rem] right-2 z-20 text-white bg-blue-950 border border-gray-400 rounded-md  ':'hidden'}`}>
        <div className="flex flex-row gap-0.5 p-1">
            {
                data.navContent.map((item,index)=>(
                    <div className='border border-gray-300 rounded p-[0.25rem]'>
                        <Link 
                            key={index} 
                            to={item.path} 
                            children={item.text} 
                            className='text-base capitalize'
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DropDownNav