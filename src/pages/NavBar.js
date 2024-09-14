import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/info.json';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DropDownNav from '../components/DropDownNav';
function NavBar() {
  const [dropDown,setDropDown] = useState(false);
  return (
    <>
      <div className="sticky top-0 right-0 left-0 z-10 w-full h-16 flex flex-row justify-around items-center bg-yellow-700 x-sm:justify-between x-sm:px-2">
        <div className='w-9'>
            <Link to={'/'}>
              <img src={data.logoPath} alt="portfolio logo" className='rounded-md'/>
            </Link>
        </div>
        <div className="w-1/2 flex flex-row justify-around x-sm:hidden">
          {data.navContent.map((item,index)=>(
            <div>
              <Link key={index} to={item.path} children={item.text} className='text-base text-white font-semibold capitalize hover:underline underline-offset-4 hover:duration-75' />
            </div>
          ))}
        </div>
        <div className="hidden x-sm:inline">
          <IconButton onClick={()=>setDropDown(!dropDown)}>
            <MenuIcon fontSize='large' sx={{color:'white'}} className={dropDown?'rotate-90':'rotate-0'}/>
          </IconButton>
        </div>
      </div>
      <DropDownNav showMenu={dropDown}/>
    </>
  )
}

export default NavBar;