"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import SideNavBar from '../../sideNavBar/page';
import Jobowner from '../../jobownersList/[id]/page';

interface JobCategory {
  id:number,
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

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-yellow-500">
          &#9733;
        </span>
      ))}
      {halfStar && <span className="text-yellow-500">&#9733;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-500">
          &#9733;
        </span>
      ))}
    </div>
  );
};

const JobInfo = () => {
  const router = useRouter();
  const[id,setId]=useState<number>(0)
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobCategories, setJobCategories] = useState<JobCategory[]>([]);
  const [jobOwners, setJobOwners] = useState<JobOwner[]>([]);

  useEffect(() => {
    var currentUrl = window.location.href;
    var ind=currentUrl.split("/")
    console.log(ind);
  
    var index=parseInt(ind[ind.length-1])
    setId(index)

      const fetchJob = async () => {
      try {
    const jobRes = await axios.get(`http://localhost:3000/job/job/${index}`);
    setJobs([jobRes.data]);

    const jobcatRes = await axios.get(`http://localhost:3000/jobCategory/jobCategory/${index}`);
    setJobCategories([jobcatRes.data]);

    const jobownerRes = await axios.get(`http://localhost:3000/jobOwner/job-owner/${index}`);
    setJobOwners([jobownerRes.data]);
        } catch (error) {
          console.error(error);
        }
      };
      fetchJob();
    }, []);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <SideNavBar />
        {/* First row with three columns */}
        <div className="grid grid-cols-3 gap-4 mb-10 mt-10">
        </div>

        {/* User details*/}
        <div className="font-sans">
          <div className="container mx-auto py-8 px-4">
            {jobOwners.length > 0 && jobs.length > 0 && jobCategories.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-30 h-30 rounded-full max-w-[25%] mb-6">
               <img
                  className="w-full h-full"
                  src={jobs[0].image}
                  alt="company image"
                />
                </div>
                <h1 className="text-4xl font-bold">{jobs[0].jobtitle}</h1>
                <hr className="my-8" />
                {jobOwners.length > 0 && jobs.length > 0 && jobCategories.length > 0 && (
                  <>
                    <h2 className="text-3xl font-semibold mb-6">Working location:</h2>
                    <p className="text-gray-600 text-2xl">{jobs[0].location}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Payement</h2>
                    <p className="text-gray-700 text-2xl font-extrabold">{jobs[0].budget} TND / Hour (according to negociation)</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Role</h2>
                    <p className="text-gray-700 text-2xl">{jobs[0].role.trim()}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Description</h2>
                    <p className="text-gray-700 text-2xl">{jobs[0].description.trim()}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6 ">Qualification</h2>
                    <p className="text-gray-700 text-2xl">{jobs[0].qualification.trim()}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Creation Date:</h2>
                    <p className="text-gray-700 text-2xl ">{jobs[0].createdAt}</p>
                    <hr className="my-8" />
                  </>
                )}
                
                {jobOwners.length > 0 && jobs.length > 0 && jobCategories.length > 0 && (
                  <>
                  <h2 className="text-3xl font-semibold mb-6">Category information</h2>
                  <div className="flex items-center mb-2 space-x-4">
                    <img
                  className="w-20 h-20 rounded-full"
                  src={jobCategories[0].image}
                  alt="user image"
                />
                <h1 className="text-2xl font-semibold">{jobCategories[0].category}</h1>
                </div>
                <hr className="my-8" />
                  </>
                )}

                {jobOwners.length > 0 && jobs.length > 0 && jobCategories.length > 0 && (
                  <>
                              <h2 className="text-3xl font-semibold mb-6">Company information</h2>
                  <div className="flex items-center mb-2 space-x-4">
                    <img
                  className="w-20 h-20 rounded-full"
                  src={jobOwners[0].image}
                  alt="user image"
                />
                <h1 className="text-2xl font-semibold">{jobOwners[0].name}</h1>
                </div>
                <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-6"> Bio</h2>
                    <p className="text-gray-700 text-2xl">{jobOwners[0].description}</p>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-6">Rating</h2>
                    <StarRating rating={jobOwners[0].rating}/>
                    <hr className="my-8" />
                <h2 className="text-3xl font-semibold mt-4 mb-2">Contact information</h2>
                <ul className="list-disc text-2xl list-inside text-gray-700">
                  <li>Email: {jobOwners[0].email}</li>
                  <li>Phone: {jobOwners[0].phone}</li>
                  <li>Address: {jobOwners[0].adress}</li>
                </ul>
                </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInfo;
