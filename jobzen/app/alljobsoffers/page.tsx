"use client"
import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Nav from '../navFreelancer/page';
import Footer from '../footer/page';
import Link from 'next/link';



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



function alljobsoffer() {
    const [job, setJob] = useState<Job[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');


    useEffect(() => {
        axios
        .get('http://localhost:3000/job/job')
        .then((res) => {
          const allJobs: Job[] = res.data;
          setJob(allJobs);
        })
        .catch((err) => {
          console.log(err);
        });
      }, []);

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = job.filter((joboffer) =>
    joboffer.jobtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
        <Nav/>
        <div className='bg-[#172554] h-[10cm] '>
      <div className=' ml-[16cm]'>
        <h1 className='text-8xl text-[#172554]'>.</h1>
        <div className='flex space-x-4 ml-[1cm]'>
        <h1 className='text-white font-BlackOps text-4xl mb-[1cm]'>FIND YOUR DREAM </h1>
        <h1 className='text-bluefateh font-BlackOps text-4xl underline mb-[1cm]'> JOBS</h1>
        </div>
        <h1 className='text-xl text-grisss mb-[1cm] ml-[4cm]'>Find your next Jobs </h1>
  
        <div className="w-[13cm] ml-[1cm] mt-[1cm] flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Search for company"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>
      
  
  </div>
      </div>
        <div className='grid grid-cols-2 gap-[3cm] mt-[1cm] mb-[1cm] ml-[15%] mr-[10%]'>
        {filteredJobs.map((element, i) => (
           <Link href={`/jobdetails3/${element.id}`} key={element.id}>
          <div className="w-[12cm] h-60 flex flex-col justify-center gap-4 bg-neutral-50 rounded-lg shadow p-4 hover:scale-110">
          <div className="flex gap-4">
            <img className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg" alt="" src={element.image} />
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
            Show Details
          </button>
        </div>

        </Link>
        ))}
      </div>

        <Footer/>
    </div>
  )
}

export default alljobsoffer