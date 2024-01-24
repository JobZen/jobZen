'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Link from 'next/link';
import Navbar from '../../navFreelancer/page';
import Footer from '../../footer/page';

interface JobOwner{
  id:number,
  name:string,
  image:string
}

interface Job{
  id:number,
  jobtitle:string,
  location:string,
  budget:number,
  image:string,
  role:string,
  description:string,
  qualification:string,
  createdAt:string,
  jobowner:JobOwner
}


const JobDetails = () => {
  const [job, setJob] = useState<Job>({
    id: 0,
    jobtitle: '',
    location: '',
    budget: 0,
    image: '',
    role: '',
    description: '',
    qualification: '',
    createdAt: '',
    jobowner: {
      id: 0,
      name: '',
      image: '',
    },
  });


useEffect(()=>{
 

  const getOneJob = async () => {
    var currentUrl = window.location.href;
    var ind=currentUrl.split("/")
    var index=ind[ind.length-1]
      try {
        const response = await axios.get(`http://localhost:3000/job/job/${index}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
    getOneJob()
  },[])

 

  return (
    <div className='bg-white '>
      <Navbar />
      <div className='bg-white flex flex-col justify-center items-center h-screen'>
        <div className="container mx-auto py-16 pt-[5rem] items-center mr-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-4 ">
            <div className="bg-white">
                    <br/>
              <p className='text-Mona'>Job Details</p>
              <h2 className="text-4xl font-lato font-semibold mb-4">{job.jobtitle}</h2>
              <h2 className="text-xl font-bold mt-6 mb-4">Payement</h2>
              <p className="text-[#959595] text-xl">{job.budget} TND / Hour (negociation accord to experience)</p>
              <h2 className="text-xl font-bold mt-6 mb-4">About the project</h2>
              <p className="text-gray-700">{job.description}</p>
              <h2 className="text-xl font-bold mt-6 mb-4">Your Role</h2>
              <div className="mb-6">
                <p className="mt-2">{job.role}</p>
              </div>
              <h2 className="text-xl font-bold mt-6 mb-4">Skills & Qualifications:</h2>
              <div className="mb-6 pl-6">
                <ul className="list-disc">
                  <li className="mt-2">{job.qualification}</li>
                </ul>
              </div>
              <b className='ml-1 font-jura text-2xl font-bold text-red-500'>Contact us to apply</b>
            </div>
            
            <div className="ml-1 flex items-center p-8">
              <div className="flex p-12 ">
                <div className="bg-[#D3E8F8] shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img src={job.jobowner.image} className="w-32 h-32 rounded-full mb-4 shrink-0"alt="CompanyProfile"/>
                    <h1 className="text-xl font-bold">{job.jobowner.name}</h1>
                                      <Link href={`/companydetails/${job.jobowner.id}`}>
                      <p className="mt-6 text-[#267296] hover:text-base-[#267296] hover:font-semibold font-jura hover:underline">View Company's Profile</p>
                    </Link>
                    <div className="mt-6 flex gap-4">
                      <Link href={`/chat/${job.jobowner.id}`}>
                        <button className="bg-[#267296] hover:bg-[#195571] text-white py-2 px-4 rounded">Message</button>
                      </Link>
                      
                    </div>
                   
                  </div>
                  <hr className="my-6 border-t border-[#267296]" />
                  <div className="flex flex-col">
                  <p className="font-jura text-[#267296]">Job title:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">{job.jobtitle}</li>
                    </ul>
                    <br/>
                    <p className="font-jura text-[#267296] ">Location:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">{job.location}</li>
                    </ul>
                    <br/>
                    <p className="font-jura text-[#267296] ">Date posted:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">{job.createdAt}</li>
                    </ul>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default JobDetails;
