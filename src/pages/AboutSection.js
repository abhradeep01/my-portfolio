import React, { useEffect, useState } from 'react';
import data from '../data/staticData.json';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

function AboutSection({wdth}) {
  const [bio,setBio] = useState({});
  const [platforms,setPlatforms] = useState([]);
  //loading state
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await axios(`${process.env.REACT_APP_API_URL}/about`);
        setBio(res.data.aboutData);
        setPlatforms(res.data.platforms);
        setLoading(false);
      }catch(err){
        console.log(err);
      }
    }
    fetchData()
  },[])
  
  return (
    <>
    {
      loading?
      <Loader/>:
      <div className={'w-[80%] md:w-[90%] flex flex-row gap-4 mid-tab:flex-col-reverse x-sm:w-[98%] x-sm:px-2'}>
        <div className={"w-[50%] mid-tab:w-full flex flex-col gap-4"}>
          <div>
            <h2 className="text-xl font-bold text-green-600 capitalize">
              {'about me'}
            </h2>
          </div>
          <div>
            <p className="text-lg font-semibold">
              <span className="text-red-500">
                I'am {bio.name}
              </span>
              <span className="text-white m-1">
                {bio.describe}
              </span>
            </p>
          </div>
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
                      <div className='w-8 rounded-sm p-1' style={{backgroundColor:item.bgColor}} >
                        <img src={item.icon} alt="" className='w-full' />
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
        </div>
        <div className="w-1/2 mid-tab:flex mid-tab:w-full mid-tab:justify-center">
          <img src={bio.profilePhoto} alt="profile-photo"  className='aspect-[1/1] justify-self-end mid-tab::w-[62.5%]'/>
        </div>
      </div>
    }
    </>
    
  )
}

export default AboutSection;