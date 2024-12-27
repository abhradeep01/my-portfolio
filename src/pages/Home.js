import React, { useEffect, useState } from 'react';
import HeaderProfile from './HeaderProfile';
import Main from './Main';
import axios from 'axios';
import Loader from '../components/Loader';

function Home({pageData}) {
  const [data,setData] = useState({});
  const[loading,setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchData = async() => {
      try{
        const res = await axios(`${process.env.REACT_APP_API_URL}`);
        setData(res.data);
        setLoading(false);
        console.log(res.data);
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
        <>
          <HeaderProfile header={data.header} platforms={data.platforms}/>
          <Main about={data.aboutData} skills={data.skillsData} projects={data.filterData}/>
        </>
      }
    </>

  )
}

export default Home;