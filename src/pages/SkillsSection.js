import React, { useEffect, useState } from 'react';
import Technology from '../components/Technology';
import axios from 'axios';
import Loader from '../components/Loader';


function SkillsSection({wdth}) {
  const [tech,setTech] = useState([]);
  const [tools,setTools] = useState([]);
  const [libs,setLibs] = useState([]);
  const [learn,setLearn] = useState([]);
  //loading state
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    //fetch data
    const fetchData = async () =>{
      try{
        const res = await axios(`${process.env.REACT_APP_API_URL}/skills`);
        const data = res.data;
        console.log(data);
        setTech(data.front);
        setTools(data.tools);
        setLibs(data.libs);
        setLearn(data.learn);
        //set loading
        setLoading(false);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[]);

  
  return (
    <>
    {
      loading?
      <Loader/>:
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
          <div className="w-full flex flex-row gap-x-6 gap-y-4 flex-wrap x-sm:gap-6">
            {
              tech.map((item,index)=>(
                <Technology
                  key={index}
                  icon={item.icon}
                  name={item.text}
                />
              ))
            }
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h3 className="text-blue-500 text-lg font-semibold">
              Framework and Libraries I Knew:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-x-6 gap-y-5 flex-wrap x-sm:gap-6">
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
            <h3 className="text-blue-500 text-lg font-semibold">
              Tools I Used:
            </h3>
          </div>
          <div className="w-full flex flex-row gap-x-6 gap-y-5 flex-wrap x-sm:gap-6">
            {libs.map((item,index)=>(
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
          <div className="w-full flex flex-row gap-x-6 gap-y-5 flex-wrap x-sm:gap-6">
            {learn.map((item,index)=>(
              <Technology
                key={index}
                icon={item.icon}
                name={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default SkillsSection;