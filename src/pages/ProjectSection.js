import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProjectFile from '../components/ProjectFile';
import Loader from '../components/Loader';

function ProjectSection() {
    //projects hook 
    const [projects,setProjects] = useState([]);
    //loading state
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
      const fetchData = async () =>{
        try{
          const res = await axios(`${process.env.REACT_APP_API_URL}/projects`);
          setProjects(res.data);
          //setloading
          setLoading(false);
        }catch(err){
          console.log(err);
        }
      }
      fetchData();
  },[]);
  console.log(projects);

  return (
  <>
  {
    loading?
    <Loader />:
    <div className={`w-[80%] md:w-[90%] x-sm:w-[98%] x-sm:px-2 flex flex-col gap-4`}>
      <div>
        <h2 className="text-xl font-medium text-green-600 capitalize text-center">
          my projects
        </h2>
      </div>
      <hr />
      <div className="w-full flex flex-row flex-wrap gap-x-4 gap-y-6">
        {
          projects.map((item,index)=>(
            <ProjectFile
              key={index+1}
              projectName={item.projectName}
              projectUi={item.projectUi}
              technology={item.technologies}
              githubLink={item.github}
              liveLink={item.liveLink}
            />
          ))
        }
      </div>
    </div>
  }
  </>
  )
}

export default ProjectSection