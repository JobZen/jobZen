"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search1 from '../search1/page';



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
      <div className='bg-[#172554] h-[22cm]  '>

      <div className='ml-[3cm] '>
        <h1 className='text-[#172554] font-BlackOps text-3xl mb-[1cm]'>.</h1>
    <h1 className='text-white font-BlackOps text-8xl mb-[1cm] '>DISCOVER</h1>
    <h1 className='text-white font-BlackOps text-8xl mb-[1cm]'>MORE THAN</h1>
    <h1 className='text-bluefateh font-BlackOps text-8xl underline mb-[1cm]'>1000+ JOBS</h1>
    <div className=' mb-[1cm]'>
    <h1 className='text-grisss text-2xl leading-snug'>
        Great platform for the job seeker that searching 
    </h1>
    <h1 className='text-grisss text-2xl leading-snug'>
    for new career heights and passionate about startups.
    </h1>
    </div>

</div>
<div className='ml-[3cm] mb-[2cm]'>
  
<div className="w-[13cm] flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
      <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-gray-100 outline-none" type="text" placeholder="Search for job offer" />
      </div>
      <div className="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Search</span>
      </div>
      </div>
    

</div>

      <div className='flex justify-center bg-white shadow-xl rounded-[15px] mr-[13%] ml-[13%] '>
        <div className="flex space-x-3px-4 py-22 bg-white rounded-lg p-4">
          <div className="text-center w-full l-full ">
            <img className='mx-auto mb-6 w-[4cm] l-[4cm]' src="https://cdn-icons-png.flaticon.com/512/270/270013.png" alt="" />
            <h1 className='text-black text-4xl '>Create Account</h1>
            <h1 className='text-grisss text-2xl'>First, you have to create an account here</h1>
          </div>
          <div className="text-center w-full l-full ">
            <img  className='mx-auto mb-6 w-[4cm] l-[4cm]' src="https://cdn-icons-png.flaticon.com/512/7638/7638027.png" alt="" />
            <h1 className='text-black text-4xl'>Search work</h1>
            <h1 className='text-grisss text-2xl'>Search for the best freelance work here</h1>
          </div>
          <div className="text-center w-full l-full">
            <img className='mx-auto mb-6 w-[4cm] l-[4cm]' src="https://th.bing.com/th/id/R.21a357d3ec0ebf0f6e932211850a5120?rik=6Fvi3DuElDHY%2bw&riu=http%3a%2f%2fwww.softcreate.co.jp%2fcms%2fsc%2fimg%2fpower-apps%2fmerit3.png&ehk=snsy0re4p01auZY5khh846awdZ5qQQKpc8IGwK%2f2ZzQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <h1 className='text-black text-4xl '>Save and apply</h1>
            <h1 className='text-grisss text-2xl'>Apply or save and start your work</h1>
          </div>
        </div>
      </div>
      </div>
      <div className='mt-[8cm] ml-[1cm]'>
        <h1 className='text-4xl text-grisss mb-[1cm] '>company we helped grow</h1>
        <div className='flex space-x-10 ml-[3cm]'>
          <img className='h-[3cm] w-[7cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417431759_231763966677199_5653554093549890672_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hWnoDcHYd9UAX_VJfXc&_nc_oc=AQkUOzxbQBgBnpJARDCwQdNtU0Z3ipsugP7b1qaIzAXwStB6EBXhuQfkZxVlPdySBDA&_nc_ht=scontent.ftun9-1.fna&oh=00_AfAjZNWlT1oqwCA5LG7dGbHgBXvLf1uMfQgIQBVFPWmVRg&oe=65AB914A" alt="" />
          <img className='h-[3cm] w-[7cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417577798_231765153343747_8611348078106997068_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YfA7TelDY_kAX_ya66u&_nc_ht=scontent.ftun9-1.fna&oh=00_AfA4Xq8OQXp8BtfWXFZkDObMtQ0mAXd8UshkpBiNud2cCA&oe=65AB12D0" alt="" />
          <img className='h-[3cm] w-[7cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417444510_231765900010339_274947887996185958_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uuvIpkDWusoAX_XxalZ&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCb_R2XK5iNwm0M-1U9iHqVqE9i19KvqP0GF_qBbrm8Iw&oe=65AB1FF2" alt="" />
          <img className='h-[3cm] w-[7cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417368508_231766510010278_5213960803376632728_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=dXFxqDOPp3IAX_BU-GH&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDzWNhVsZRRq9OpCGHPN-PvlvH3utNqgsfB_dRWAFqIyw&oe=65AC0862" alt="" />
          <img className='h-[3cm] w-[7cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/418834089_231767446676851_2312434974819241847_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qbk4XetGLo4AX91x1yb&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDjKjUaSc9ORHvRqsPdDWeQqbZ-JvkNAKNdw2e7-UsL7Q&oe=65AA929C" alt="" />
        </div>
      </div>

      <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>EXPLORE</h1>
        <h1 className='font-jockey-one text-[#172554]'>CATEGORY</h1>
      </div>
      
      <div className="flex justify-between ml-[10%] mr-[10%]">
        {jobcategory.map((el, i) => (
          
          <div key={i} className="relative text-center ">
            <Link href={`/jobsbycategory/${el.id}`}>
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
      
    
      <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[6cm]'>
        <h1 className='font-jockey-one text-bluefateh'>LATEST </h1>
        <h1 className='font-jockey-one text-[#172554]'>JOB OFFER</h1>
      </div>
      <div className='grid grid-cols-2 gap-[3cm] mt-[1cm] mb-[1cm] ml-[15%] mr-[10%]'>
        {jobsForToday.slice(0, initialJobCount).map((element, i) => (
          <div className="w-[12cm] h-60 flex flex-col justify-center gap-4 bg-neutral-50 rounded-lg shadow p-4 hover:scale-110">
          <div className="flex gap-4">
            <img className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg" src={element.image} alt=''/>
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
          <div className="flex space-x-16 ml-[3cm]"> 
          <Link href={'/allcompanies'}>
    <button className="bg-white text-[#172554] hover:bg-[#172554] border-solid border-4 border-white hover:text-white text-6xl font-jockey-one transition duration-300 ease-in-out px-6 py-3 rounded-full">
        ALL<br /> COMPANIES
    </button>
         </Link>
         <Link href={'/alljobsoffers'}>
    <button className="bg-white text-[#172554] hover:bg-[#172554] border-solid border-4 border-white hover:text-white  text-6xl font-jockey-one transition duration-300 ease-in-out px-6 py-3 rounded-full">
        ALL<br /> JOBOFFER
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
          <Link href={`/jobownerProfile/${ele.id}`}>
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

    </div>
  );
}

export default page;
