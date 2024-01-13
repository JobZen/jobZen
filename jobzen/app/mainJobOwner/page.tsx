"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar1/page';
import Footer from '../footer/page';

interface FreelancerCategory{
    category:string,
    image:string
}

interface Freelancer{
    id: Number,
    name: string,
    email: string,
    password: string,
    adress: string,
    phone: Number,
    image: Number,
    skills: string,
    aboutMe: string,
    experience: string,
    jobtitle: string,
}

interface Job{
    jobtitle:string,
    location:string,
    budget:number,
    image:string,
    role:string,
    description:string,
    qualification:string,
    createdAt:string,
    jobOwnerId:number,
    jobCategoryId:number,
}

function page() {
    const [freelancercategory, setFreelancercategory] = useState<FreelancerCategory[]>([]);
    const [freelancer,setFreelancer]=useState<Freelancer[]>([])
    const [job,setJob]=useState<Job[]>([])
    const [initialJobCount, setInitialJobCount] = useState(3);
    const [jobsForToday, setJobsForToday] = useState<Job[]>([]);
   
  


    useEffect(() => {
        axios
          .get('http://localhost:3000/freelancerCategories/freelancer-category')
          .then((res) => {
            const freelancercategory: FreelancerCategory[] = res.data;
            setFreelancercategory(freelancercategory);
          })
          .catch((err) => {
            console.log(err);
          });
          getAllFreelancer()
          getAllJob()
      }, []);

    const getAllFreelancer=()=>{
        axios
          .get('http://localhost:3000/freelancer/')
          .then((res) => {
            const Freelancer: Freelancer[] = res.data;
            setFreelancer(Freelancer);
          })
          .catch((err) => {
            console.log(err);
          });
    } 

    const getAllJob=()=>{
       axios
    .get('http://localhost:3000/job/job')
    .then((res) => {
      const allJobs: Job[] = res.data;
      setJob(allJobs);
      const today = new Date().toISOString().split('T')[0];
      const jobsToday = allJobs.filter((job) => job.createdAt.split('T')[0] === today);
      setJobsForToday(jobsToday);
    })
    .catch((err) => {
      console.log(err);
    });
    } 
  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
      
        return (
          <div className="flex">
            {[...Array(fullStars)].map((_, index) => (
              <span key={index} className="text-yellow-500">&#9733;</span>
            ))}
            {halfStar && <span className="text-yellow-500">&#9733;</span>}
            {[...Array(emptyStars)].map((_, index) => (
              <span key={`empty-${index}`} className="text-gray-500">&#9733;</span>
            ))}
          </div>
        );
      };

    

    return (

     <div>
        <Navbar/>
        <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[10cm]'>
        <h1 className='font-jockey-one text-bluefateh'>LATEST </h1>
        <h1 className='font-jockey-one text-blueghamek'>JOB OFFER</h1>
        </div>
        <div className='grid grid-cols-3 gap-16 mt-[1cm] mb-[1cm] ml-[16.5%] mr-[10%]'>
  {jobsForToday.slice(0, initialJobCount).map((element, i) => (
    // <div className='bg-bluefateh h-[10cm] w-[8cm] rounded-lg shadow-xl hover:scale-110'>
    //   <div className='flex items-center justify-center'>
    //     <img className='h-[4cm] w-[4cm] mb-[10px] mt-[10px] rounded-[20px]' src={element.image} alt="" />
    //   </div>
    //   <div className='flex items-center justify-center mb-[6px] mt-[6px]'>
    //     <h1 className='font-josefintext-blueghamek text-2xl bold'>{element.jobtitle}</h1>
    //   </div>
    //   <div className='flex items-center justify-center mb-[6px] mt-[6px]'>
    //     <h1 className='text-blueghamek text-xl'>{element.role}</h1>
    //   </div>
    //   <div className='flex items-center justify-center mb-[6px] mt-[6px]'>
    //     <h1 className='text-black text-xl'>{element.budget} TND /hr</h1>
    //   </div>
    //   <div className='flex items-center justify-center mb-[16px] mt-[16px]'>
    //     <button className='bg-blueghamek text-white font-bold py-2 px-4 rounded'>Apply</button>
    //   </div>
    //   <div className=''>
    //     <h1 className='text-grisss'>posted at:{(element.createdAt).split('T')[0]}</h1>
    //   </div>
      
    // </div>

    <div
      className="m-2 group px-10 py-5 bg-bluefateh/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-blueghamek z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
    >
      <img className="w-[5cm] rounded-[150px]" src={element.image} alt="" />

      <p className="cardtxt font-semibold text-blueghamek tracking-wider group-hover:text-white text-xl">
       {element.jobtitle}
      </p>
      <p className="blueberry font-semibold text-black text-xs">
      {element.role}
      </p>
      <div className="ordernow flex flex-row justify-between items-center w-full">
        <p className="ordernow-text text-blueghamek font-semibold group-hover:text-gray-800">
        {element.budget} TND /hr
        </p>
        <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-bluefateh bg-blueghamek shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
          APPLY
        </p>
      </div>
    </div>

    
  ))}
    
   </div>
   <div className="flex items-center justify-center  ">
  <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
    onClick={() => setInitialJobCount(initialJobCount + 3)}>
    <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
    <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
    <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
    <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
    <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
    <p className="z-10">LOAD MORE</p>
  </button>
</div>
<div className=" bg-[#172554] flex mb-[3cm] mt-[3cm] ml-[2cm] mr-[2cm]">
  
  <div className="w-1/2 flex items-center justify-start">
    <img
      src="https://th.bing.com/th/id/R.2a57b1b2b1436476315e0daf72e96025?rik=SRomhRzX4A59Zg&pid=ImgRaw&r=0"
      alt=""
      className="mx-auto brightness-[75%]"
    />
  </div>

  
  <div className="bg-[#172554] w-1/2 ">
    <p className="font-jockey-one text-bluefateh text-8xl font-bold mb-[0.5cm] mt-[2cm] ml-[1cm] mr-[1cm]">JOBZEN</p>
    <p className="font-jockey-one text-white text-8xl font-bold mb-[1cm] mt-[2cm] ml-[1cm] mr-[1cm]">Connecting IT Talent with Tomorrow's Opportunities</p>
    <p className="font-jockey-one text-bluefateh text-8xl font-bold mb-[1cm] mt-[2cm] ml-[1cm] mr-[1cm]">Join  US Today!</p>
   
  </div>
</div>


        <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>FIND TALENT BY </h1>
        <h1 className='font-jockey-one text-blueghamek'>SKILLS</h1>
        </div>
        <div className="flex justify-between ml-[10%] mr-[10%]">
        {freelancercategory.map((el, i) => (
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
      <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>BEST </h1>
        <h1 className='font-jockey-one text-blueghamek'>COMPANY</h1>
        </div>
    <div className='flex justify-between ml-[10%] mr-[10%]'>
      {freelancer.map((ele,i)=>{
return(
    
       <div >
        
        <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl hover:scale-110">
  <div >
  <div className='flex items-center justify-center'>
    <img className="relative mx-4 -mt-6 h-60 w-60 overflow-hidden rounded-xl border-solid border-2 border-blueghamek  " src={ele.image} alt="" />
  </div>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-blueghamek antialiased">
     {ele.name}
    </h5>
    <div >{ele.jobtitle}</div>
    <div className='flex items-center justify-center mr-[1.5cm]'>
    
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

       </div>)}
      )}
      </div>
      
  
<div className="max-w-screen-2xl mx-auto mb-[5cm] mt-[5cm]">

	<div id="default-carousel" className="relative  " data-carousel="static">
  
        <div className="overflow-hidden relative h-[20cm] rounded-lg sm:h- xl:h-120 2xl:h-144">
         
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/10/02072937/Freelancer-start.png" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                <p className='text-white'>malek</p>
            </div>
          
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://www.techprevue.com/wp-content/uploads/2015/02/how-to-become-a-freelancer.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                <p>malek</p>
            </div>
           
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                <p>malek</p>
            </div>
        </div>
     
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
   
        <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
        </button>
        <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden">Next</span>
            </span>
        </button>
    </div>

	
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>
<Footer/>
      </div>
      
  )
}

export default page

