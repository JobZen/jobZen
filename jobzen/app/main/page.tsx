"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface JobCategory{
    category:string,
    image:string
}

interface JobOwner{
    name:string,
    email:string,
    password:string,
    adress:string,
    phone:number,
    image:string,
    rating:number,
    description:string
}

interface Job{
    jobtitle:string,
    location:string,
    budget:number,
    image:string,
    role:string,
    description:string,
    qualification:string,
    jobOwnerId:number,
    jobCategoryId:number,
}

function page() {
    const [jobcategory, setJobcategory] = useState<JobCategory[]>([]);
    const [jobowner,setJobowner]=useState<JobOwner[]>([])
    const [job,setJob]=useState<Job[]>([])
    useEffect(() => {
        axios
          .get('http://localhost:3000/jobCategory/jobCategory')
          .then((res) => {
            const JobCategory: JobCategory[] = res.data;
            setJobcategory(JobCategory);
          })
          .catch((err) => {
            console.log(err);
          });
          getAllJobOwner()
          getAllJob()
      }, []);

    const getAllJobOwner=()=>{
        axios
          .get('http://localhost:3000/jobOwner/job-owner')
          .then((res) => {
            const JobOwner: JobOwner[] = res.data;
            setJobowner(JobOwner);
          })
          .catch((err) => {
            console.log(err);
          });
    } 

    const getAllJob=()=>{
        axios
          .get('http://localhost:3000/job/job')
          .then((res) => {
            const Job: Job[] = res.data;
            setJob(Job);
          })
          .catch((err) => {
            console.log(err);
          });
    } 


    return (

     <div>
        <div className='flex space-x-2 text-8xl ml-[5%] mb-[1cm]'>
        <h1 className='font-jockey-one text-bluefateh'>LATEST </h1>
        <h1 className='font-jockey-one text-blueghamek'>JOB OFFER</h1>
        </div>
        <div className='flex justify-between ml-[10%] mr-[10%] '>
        {job.map((element,i)=>(
        <div className='bg-bluefateh h-[10cm] w-[8cm] rounded-lg shadow-xl'>
            <div className='flex items-center justify-center'>
            <img className='h-[4cm] w-[4cm]' src={element.image} alt="" />
            </div>
          <h1 className='text-blueghamek'>{element.jobtitle}</h1>
          <h1 className='text-blueghamek'>{element.role}</h1>
          <h1 className='text-black'>{element.budget} TND</h1>
          <button>Apply</button>
        </div>
        
        ))}
        </div>

        <div className='flex space-x-2 text-8xl ml-[5%] mb-[1cm]'>
        <h1 className='font-jockey-one text-bluefateh'>FIND A WORK BY </h1>
        <h1 className='font-jockey-one text-blueghamek'>CATEGORY</h1>
        </div>
        <div className="flex justify-between ml-[10%] mr-[10%]">
        {jobcategory.map((el, i) => (
          <div key={i} className="relative text-center ">
            <h1
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 hover:scale-125 "
            >
              {el.category}
            </h1>
            <img
              src={el.image}
              alt=""
              className="w-[8cm] h-[8cm] object-cover brightness-50	rounded-xl"
            />
          </div>
        ))}
      </div >
      <div className='flex space-x-2 text-8xl ml-[5%] mb-[2cm] mt-[4cm]'>
        <h1 className='font-jockey-one text-bluefateh'>BEST </h1>
        <h1 className='font-jockey-one text-blueghamek'>COMPANY</h1>
        </div>
    <div className='flex justify-between ml-[10%] mr-[10%]'>
      {jobowner.map((ele,i)=>(
       <div>
        
        <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl">
  <div >
  <div className='flex items-center justify-center'>
    <img className="relative mx-4 -mt-6 h-60 w-60 overflow-hidden rounded-xl border-solid border-2 border-blueghamek  " src={ele.image} alt="" />
  </div>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-blueghamek antialiased">
     {ele.name}
    </h5>
    <div className='flex items-center justify-center mr-[1.5cm]'>
    <img className='w-[20px] h-[20] ' src="https://th.bing.com/th/id/OIP.RJwgX7x98VNnkH02LQ0L-AHaHa?rs=1&pid=ImgDetMain" alt="" />
    <p className="block font-sans text-xl font-light leading-relaxed text-inherit antialiased">
    {ele.adress}
    </p>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blueghamek py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
        </div>

       </div>
      ))}
      </div>
      </div>
      
  )
}

export default page

