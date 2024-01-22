"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import SideNavBar from '../sideNavBar/page';
import Search from '../../search/page'

interface Jobowner {
  id:number;
  name: string;
  email: string;
  password: string;
  adress: string;
  phone: number;
  image: string;
  rating: number;
  description: string;
}

const JobOwnersList = () => {
const [jobowners, setJobOwners] = useState<Jobowner[]>([])
const [jobownerCount,setJobownerCount]=useState<number | undefined>()

useEffect(()=>{
  const getAllJobOwners = async () => {
    try {
      const response = await axios.get("http://localhost:3000/jobOwner/job-owner");
      const fetchedJobowners: Jobowner[] = response.data;
      setJobOwners(fetchedJobowners);
      setJobownerCount(fetchedJobowners.length);
    } catch (error) {
      console.error(error);
    }
  };
  getAllJobOwners()
},[])


return (
    <>
<div className="p-4 sm:ml-64">
<SideNavBar />
{/* First row with three columns */}
    <div className=" gap-4 mb-10 mt-10">
      <div className="flex flex-col items-center justify-center h-24 rounded">
        <p className="text-6xl text-black font-black">{jobownerCount || 0}</p>
        <p className="text-2xl text-black">Job Owners</p>
      </div>
    </div>

{/* drop navigation Action */}
<div className="relative overflow-x-auto">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <Search/>
    </div>

{/* table starts here */}
      <table className="w-full text-sm text-left rtl:text-right  border-[#267296] border-b-4 border-4 bg-[#267296]">
        <thead className="text-xs text-white border-[#267296] uppercase border-b-4">
          <tr>
            <th scope="col"className="p-4 bg-">
              <div className="flex items-center ">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-all-search"
                  className="sr-only ">
                  checkbox
                </label>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500"
            >
              rating
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
              phone
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
              Profile
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {jobowners.map((jobowner) => (
          <tr key={jobowner.id} 
            className="bg-white border-gray-400 hover:bg-[#91C7EF] group transition duration-200 "
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-table-search-1"
                  className="sr-only"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <img
                className="w-16 h-16 rounded-full"
                src={jobowner.image}
                alt="company image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold hover:text-bold">
                {jobowner.name.length > 10
              ? `${jobowner.name.slice(0, 10)}...`
              : jobowner.name}
              </div>
                <div className="font-normal text-gray-500 hover:text-bold">
                {jobowner.email.length >15 ?`${jobowner.email.slice(0,15)}...`
                :jobowner.email}
                </div>
              </div>
            </th>
            <td className="px-6 py-4 hover:text-bold">
            {jobowner.description.length>50?`${jobowner.description.slice(0,50)}...`
            :jobowner.description}
            </td>
            <td className="px-6 py-4 hover:text-bold">
            {jobowner.rating}
            </td>
            <td className="px-6 py-4 hover:text-bold">
            {jobowner.phone}
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a
           href={`/admin/jobownersList/${jobowner.id}`}
            className="transition ease-in-out delay-150 text-white bg-blue-500 border border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Job owner details</a>
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a
              href="#"
              type="button"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center text-red-700 hover:text-white border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              <span className="ml-2">Delete Job owner</span></a>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</>

);
};

export default JobOwnersList;