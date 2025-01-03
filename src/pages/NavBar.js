import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/staticData.json';
import { IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Close, Menu } from '@mui/icons-material';

const navContent = [
  {
    "path":"/about",
    "text":"about me"
  },
  {
    "path":"/skill",
    "text":"skills"
  },
  {
    "path":"/projects",
    "text":"projects"
  },
  {
    "path":"/contact",
    "text":"contact"
  }
];

function NavBar() {
  //drop down menu
  const [dropDown,setDropDown] = useState(false);
  
  return (
    <>
      {/* navbr  */}
      <div className="sticky top-0 right-0 left-0 z-10 w-full h-16 flex flex-row justify-around items-center bg-cyan-700 x-sm:justify-between mid-tab:justify-between mid-tab:px-8 x-sm:px-2">
        <div className='w-9'>
          <Link to={'/'}>
            <img src={data.logoPath} alt="portfolio logo" className='rounded-md'/>
          </Link>
        </div>
        <div className="w-1/2 flex flex-row justify-around min-tab:hidden">
          {navContent.map((item,index)=>(
            <div key={index}>
              <Link to={item.path} children={item.text} className='text-base text-white font-semibold capitalize hover:underline underline-offset-4 hover:duration-75' />
            </div>
          ))}
        </div>
        <div className="hidden min-tab:block">
          <IconButton onClick={()=>setDropDown(!dropDown)}>
            {
              dropDown?
              <Close fontSize='large' sx={{color:'white'}}/>:
              <Menu fontSize='large' sx={{color:'white'}} className={dropDown?'rotate-90':'rotate-0'}/>
            }
          </IconButton>
        </div>
      </div>
      {/* drop down menu  */}
      <div className={`transition-all ${dropDown?'fixed flex-row gap-0.5 p-1 top-[4.1rem] right-2 z-20 text-white bg-blue-950 border border-gray-400 rounded-md':null}`} style={dropDown?{display:'flex'}:{display:'none'}}>
        {
          navContent.map((item,index)=>(
            <div className='border border-gray-300 rounded p-[0.25rem]' onClick={()=>setDropDown(!dropDown)}>
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
    </>
  )
}

export default NavBar;