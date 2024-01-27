"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface JobCategory {
  id:string,
  category: string;
  image: string;
}

interface JobOwner {
  id: number;
  name: string;
  email: string;
  password: string;
  adress: string;
  phone: number;
  image: string;
  rating: number;
  description: string;
}

interface Job {
  id:number,
  jobtitle: string;
  location: string;
  budget: number;
  image: string;
  role: string;
  description: string;
  qualification: string;
  createdAt: string;
  jobOwnerId: number;
  jobCategoryId: number;
}






function page() {
  const [jobcategory, setJobcategory] = useState<JobCategory[]>([]);
  const [jobowner, setJobowner] = useState<JobOwner[]>([]);
  const [job, setJob] = useState<Job[]>([]);
  const [initialJobCount, setInitialJobCount] = useState(4);
  const [jobsForToday, setJobsForToday] = useState<Job[]>([]);

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
    getAllJobOwner();
    getAllJob();
  }, []);

  const getAllJobOwner = () => {
    axios
      .get('http://localhost:3000/jobOwner/job-owner')
      .then((res) => {
        const JobOwner: JobOwner[] = res.data;
        setJobowner(JobOwner);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllJob = () => {
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
  };

  interface StarRatingProps {
    rating: number;
  }
  
  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars: number = Math.floor(rating);
    const halfStar: boolean = rating % 1 !== 0;
    const emptyStars: number = 5 - fullStars - (halfStar ? 1 : 0);
  
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
<div className='mt-[7cm]' >
  <img className="w-[35cm] h-[20cm] ml-[7cm] mt-[3cm] " src="https://th.bing.com/th/id/R.d3e239099baf87254265def37ae4c1ac?rik=OHq1uGXE5Z4dmw&riu=http%3a%2f%2fclipartmag.com%2fimages%2fanimated-globe-gif-24.gif&ehk=dlxCICv2kbw7jFqHvlD1mHTe9yXi%2f49K9MNU6FUR2GU%3d&risl=&pid=ImgRaw&r=0" alt="" />
<div className='ml-[19cm]'>
  <p className='font-bruno text-blueghamek text-6xl text-opacity-60 '>JOB ZEN</p>
      <p className='font-jolly-lodger text-blueghamek text-2xl text-opacity-60 ml-[1cm]'> Connecting Freelancers Above the Rest!</p>
      <Link href={'/landingPage'}>
         <button className="ml-[2cm] flex gap-3 cursor-pointer text-white text-2xl font-semibold bg-gradient-to-r from-bluefateh to-blueghamek px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-white hover:border-gray-800 hover:from-blueghamek hover:to-bluefateh">
JOIN US NOW
</button>
        </Link>
        </div>
      
</div>
      <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[5cm]'>
        <h1 className='font-jockey-one text-bluefateh'>EXPLORE</h1>
        <h1 className='font-jockey-one text-[#172554]'>CATEGORY</h1>
      </div>
      
      <div className="bg- malek flex justify-between ml-[10%] mr-[10%] gap-3">
        {jobcategory.map((el, i) => (
          
          <div key={i} className="relative text-center ">
            <Link href={`/landingPage`}>
            <h1
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 hover:scale-125 "
            >
              {el.category}
            </h1>
            </Link>
            <img
              src={el.image}
              alt=""
              className="w-[8cm] h-[8cm] object-cover brightness-50 rounded-xl"
            />
          </div>
        ))}
      </div>
      
    
      <div className=' flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[6cm]'>
        <h1 className='font-jockey-one text-bluefateh'>LATEST </h1>
        <h1 className='font-jockey-one text-[#172554]'>JOB OFFER</h1>
      </div>
      <div className='grid  grid-cols-2 gap-[3cm] mt-[1cm] mb-[1cm] ml-[15%] mr-[10%]'>
        {jobsForToday.slice(0, initialJobCount).map((element, i) => (
          <div className="w-[12cm] h-60 flex flex-col justify-center gap-4 bg-neutral-50 rounded-lg shadow p-4 hover:scale-110">
          <div className="flex gap-4">
            <img className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg" alt= "" src={element.image} />
            <div className="flex flex-col">
              <p className="text-xl font-bold">{element.jobtitle}</p>
              <span className="font-bold text-neutral-700 italic"></span>
              <p className="text-base line-clamp-3">
                {element.role}
              </p>
              <p className="text-lg">{element.budget} TND /hr</p>
              <p className="text-sm">posted at: {(element.createdAt).split('T')[0]}</p>
            </div>
          </div>
          <button className=" hover:bg-indigo-700 bg-indigo-500 font-bold text-neutral-50 rounded p-2">
            APPLY
          </button>
        </div>
        
        ))}
      </div>



   

      <div className="flex items-center justify-center  ">
        <Link href='/'>
          
            <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
              onClick={() => setInitialJobCount(initialJobCount + 3)}>
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">LOAD MORE</p>
            </button>
          
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center h-[25cm] bg-aloui   bg-no-repeat bg-cover bg-bottom mt-[3cm]">
     
     <div className="flex ">

 <div className="flex flex-col">
   <img 
     src="https://th.bing.com/th/id/OIP._IOk1nh31Zg6aiCrc3KJaAHaE8?rs=1&pid=ImgDetMain"
     alt="Hero image"
     className=" shadow-2xl rounded-2xl h-[8cm] w-[8cm] mb-[1cm] mt-[1cm] mr-[1cm] ml-[1cm]  hover:scale-110"
   />
   <img
     src="https://th.bing.com/th/id/R.2a57b1b2b1436476315e0daf72e96025?rik=SRomhRzX4A59Zg&pid=ImgRaw&r=0"
     alt="Hero image"
     className=" shadow-2xl rounded-2xl h-[8cm] w-[8cm] mb-[1cm] mt-[1cm] mr-[1cm] ml-[1cm]  hover:scale-110"
   />
  
 </div>


 <div className="flex justify-center items-center">
   <img
     src="https://th.bing.com/th/id/OIP.RGaXNtv5-PD4MukZRfjWhAHaE8?rs=1&pid=ImgDetMain"
     alt="Hero image"
     className="shadow-2xl rounded-2xl h-[8cm] w-[8cm] mb-[1cm] mt-[1cm] mr-[1cm] ml-[1cm]  hover:scale-110"
   />
 </div>


      
     </div>
    
     <div className="w-full md:w-1/2 p-8 md:p-16 text-center md:text-left ">
       <h1 className="text-4xl md:text-8xl font-bold text-white ml-[6cm]">JOBZEN</h1>
       <p className="text-xl md:text-4xl text-white mt-4 ml-[3cm]">GATEWAY TO SUCCESS AWAITS!</p>
       <p className="text-xl md:text-2xl text-white mt-4 ml-[3cm]">
       Discover your next career move or find the perfect freelancer effortlessly on our platform. Connecting talent with opportunities, our user-friendly website simplifies job hunting and freelancing. 
       </p>
       <div className="flex space-x-[4cm] ml-[2cm] mt-[3cm] "> 
         <Link href={'/landingPage'}>
         <button className="flex gap-3 cursor-pointer text-white text-2xl font-semibold bg-gradient-to-r from-bluefateh to-blueghamek px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-white hover:border-gray-800 hover:from-blueghamek hover:to-bluefateh">
         <svg fill="white" width="80px" height="80px" viewBox="-2 0 16 16" id="company-16px" xmlns="http://www.w3.org/2000/svg">
 <path id="Path_133" data-name="Path 133" d="M323.5-192h-9a1.5,1.5,0,0,0-1.5,1.5V-176h12v-14.5A1.5,1.5,0,0,0,323.5-192ZM318-177v-3h2v3Zm6,0h-3v-3.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v3.5h-3v-13.5a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Zm-8-12h2v2h-2Zm4,0h2v2h-2Zm-4,4h2v2h-2Zm4,0h2v2h-2Z" transform="translate(-313 192)"/>
</svg>
 ALL <br /> COMPANIES
</button>
        </Link>
        <Link href={'/landingPage'}>
        <button className="flex gap-3 cursor-pointer text-white text-2xl font-semibold bg-gradient-to-r from-bluefateh to-blueghamek px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-white hover:border-gray-800 hover:from-blueghamek hover:to-bluefateh">
        <svg fill="white" width="80px" height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>pc</title>
<path d="M1.844 5.281h18.688c1.031 0 1.875 0.813 1.875 1.844v11.938c0 1.031-0.844 1.906-1.875 1.906h-7.281v3.094h5.313c0.781 0 0.844 2.563 0.938 2.656h-16.594s0-2.656 0.938-2.656h5.313v-3.094h-7.313c-1.031 0-1.844-0.875-1.844-1.906v-11.938c0-1.031 0.813-1.844 1.844-1.844zM1.844 19.063h18.688v-11.938h-18.688v11.938z"></path>
</svg>
 ALL <br /> JOBOFFER
</button>
   </Link>
</div>
     </div>
  
   </div>
      
      <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>BEST </h1>
        <h1 className='font-jockey-one text-[#172554]'>COMPANY</h1>
      </div>
      <div className='flex justify-between ml-[10%] mr-[10%]'>
  {jobowner.map((ele, i) => {
    return (
      ele.rating >= 3 && (
        <div key={i}>
          <Link href={`/landingPage`}>
            <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl hover:scale-110">
              <div>
                <div className='flex items-center justify-center'>
                  <img className="relative mx-4 -mt-6 h-60 w-60 overflow-hidden rounded-xl border-solid border-2 border-blueghamek" src={ele.image} alt="" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-blueghamek antialiased">
                  {ele.name}
                </h5>
                <div><StarRating rating={ele.rating} /></div>
                <div className='flex items-center justify-center mr-[1.5cm]'>
                  <img className='w-[20px] h-[20]' src="https://th.bing.com/th/id/OIP.RJwgX7x98VNnkH02LQ0L-AHaHa?rs=1&pid=ImgDetMain" alt="" />
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
          </Link>
        </div>
      )
    );
  })}
</div>


<div className='mt-[5cm] ml-[1cm]'>
        <h1 className='text-4xl text-grisss mb-[1cm] '>company we helped grow</h1>
        <div className='flex space-x-10 ml-[2cm]'>
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417431759_231763966677199_5653554093549890672_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hWnoDcHYd9UAX_VJfXc&_nc_oc=AQkUOzxbQBgBnpJARDCwQdNtU0Z3ipsugP7b1qaIzAXwStB6EBXhuQfkZxVlPdySBDA&_nc_ht=scontent.ftun9-1.fna&oh=00_AfAjZNWlT1oqwCA5LG7dGbHgBXvLf1uMfQgIQBVFPWmVRg&oe=65AB914A" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417577798_231765153343747_8611348078106997068_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YfA7TelDY_kAX_ya66u&_nc_ht=scontent.ftun9-1.fna&oh=00_AfA4Xq8OQXp8BtfWXFZkDObMtQ0mAXd8UshkpBiNud2cCA&oe=65AB12D0" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417444510_231765900010339_274947887996185958_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uuvIpkDWusoAX_XxalZ&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCb_R2XK5iNwm0M-1U9iHqVqE9i19KvqP0GF_qBbrm8Iw&oe=65AB1FF2" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417368508_231766510010278_5213960803376632728_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=dXFxqDOPp3IAX_BU-GH&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDzWNhVsZRRq9OpCGHPN-PvlvH3utNqgsfB_dRWAFqIyw&oe=65AC0862" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/418834089_231767446676851_2312434974819241847_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qbk4XetGLo4AX91x1yb&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDjKjUaSc9ORHvRqsPdDWeQqbZ-JvkNAKNdw2e7-UsL7Q&oe=65AA929C" alt="" />
        </div>
      </div>



     
  




    </div>
  );
}

export default page;
