"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import SideNavBar from '../../sideNavBar/page';
import { MdChevronLeft} from 'react-icons/md';
import Link from 'next/link'

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

const Jobowner = () => {
  const [jobowner, setJobowner] = useState<JobOwner>({
    id:0,
    name:"",
    email:"",
    password:"",
    adress:"",
    phone:0,
    image:"",
    rating:0,
    description:""
});
  useEffect(() => {
    var currentUrl=window.location.href
    var ind=currentUrl.split("/")
    var index=ind[ind.length-1];

    const fetchJobowner = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/jobOwner/job-owner/${index}`);
          setJobowner(response.data);
      } catch (error) {
        console.error('Error fetching job owner data:', error);
      }
    };

    fetchJobowner();
  }, [jobowner.id]);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <SideNavBar />
        {/* First row with three columns */}
        <div className="grid grid-cols-3 gap-4 mb-10 mt-10">
        </div>
        <div className="">
            <div className="flex gap-4 mt-4 md:space-y-0 py-4 bg-white">
            <Link href="/admin/jobownersList">  
          <button
          className="flex transition ease-in-out delay-150 text-gray-700 bg-gray-200 border rounded-full border-gray-700  hover:scale-110 hover:bg-gray-300 hover:font-bold hover:text-black font-medium rounded-l text-sm px-5 py-2.5 me-2 mb-2 ml-6"
          >
          <MdChevronLeft className="transition ease-in-out delay-100 text-2xl mr-8 text-gray-700 bg-gray-200 border-gray-700  hover:scale-110 hover:bg-gray-300 hover:font-bold hover:text-black font-bold"/>
          Back to Job Owners list
          </button></Link>
          </div>
        </div>

        {/* User details*/}
        <div className=" font-sans">
          <div className="container mx-auto py-8 px-4 mt-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-30 h-30 rounded-full max-w-[25%] mb-6">
                <img
                  className="w-full h-full rounded-full"
                  src={jobowner.image}
                  alt="user image"
                />
                </div>
                <h1 className="text-4xl font-bold">{jobowner.name}</h1>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Company Bio</h2>
                    <p className="text-gray-700 text-2xl">{jobowner.description}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Company Rating</h2>
                    <StarRating rating={jobowner.rating} />
                    <hr className="my-8" />

                <h2 className="text-3xl font-semibold mb-6">Contact information</h2>
                <ul className="list-disc text-2xl list-inside text-gray-700">
                  <li>Email: {jobowner.email}</li>
                  <li>Phone: {jobowner.phone}</li>
                  <li>Address: {jobowner.adress}</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobowner;
