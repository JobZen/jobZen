"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Nav from '../nav/page';
import Footer from '../footer/page';

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

function StarRating({ rating }: { rating: number }) {
  const fullStars: number = Math.floor(rating);
  const halfStar: boolean = rating % 1 !== 0;
  const emptyStars: number = 5 - fullStars - (halfStar ? 1 : 0);

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
}

function allcompanies() {
  const [jobowner, setJobowner] = useState<JobOwner[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/jobOwner/job-owner')
      .then((res) => {
        const JobOwner: JobOwner[] = res.data;
        setJobowner(JobOwner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCompanies = jobowner.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Nav/>
      <div className="bg-[#172554] h-[10cm] ">
        <div className=" ml-[16cm]">
          <h1 className="text-8xl text-[#172554]">.</h1>
          <div className="flex space-x-4">
            <h1 className="text-white font-BlackOps text-4xl mb-[1cm]">
              FIND YOUR DREAM{' '}
            </h1>
            <h1 className="text-bluefateh font-BlackOps text-4xl underline mb-[1cm]">
              {' '}
              COMPANIES
            </h1>
          </div>
          <h1 className="text-xl text-grisss mb-[1cm] ml-[3cm]">
            Find your next career at companies
          </h1>

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
      <div className='grid grid-cols-3 gap-[3cm] mt-[3cm] mb-[3cm] ml-[15%] mr-[10%]'>
        {filteredCompanies.map((ele, i) => (
          <div key={i}>
            <Link href={`/jobownerProfile/${ele.id}`}>
              <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl hover:scale-110">
                <div>
                  <div className="flex items-center justify-center">
                    <img
                      className="relative mx-4 -mt-6 h-60 w-60 overflow-hidden rounded-xl border-solid border-2 border-blueghamek  "
                      src={ele.image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-blueghamek antialiased">
                    {ele.name}
                  </h5>
                  <div>
                    <StarRating rating={ele.rating} />
                  </div>
                  <div className='flex items-center justify-center mr-[1.5cm]'>
                  <img className='w-[20px] h-[20]' src="https://th.bing.com/th/id/OIP.RJwgX7x98VNnkH02LQ0L-AHaHa?rs=1&pid=ImgDetMain" alt="" />
                  <p className="block font-sans text-xl font-light leading-relaxed text-inherit antialiased">
                    {ele.adress}
                  </p>
                </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blueghamek py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default allcompanies;
