"use client"
import React, { useEffect, useState ,useRef } from 'react';
import axios from 'axios';
import SideNavBar from './sideNavBar/page';
import {MdKeyboardArrowUp} from 'react-icons/md';
import Search from '../search/page'

interface JobOwner {
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

interface Freelancer{
  id:number,
  name:string,
  email:string,
  password:string,
  adress:string,
  phone:number,
  image:string,
  skills:string,
  aboutMe:string,
  experience:string,
  jobtitle:string,
}

const Dashboard = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [freelancerCount,setFreelancerCount]=useState<number>(0)
  const [jobOwners, setJobOwners] = useState<JobOwner[]>([]);
  const [jobownerCount,setjobownerCount]=useState<number>(0)
  const [userCount,setUserCount]=useState<number>(0)
  const [rowCount, setRowCount] = useState<number>(0)

  const containerRef = useRef<HTMLTableElement>(null)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const freelancerResponse = await axios.get("http://localhost:3000/freelancer");
        const freelancers: Freelancer[] = freelancerResponse.data;
        setFreelancerCount(freelancers.length);
        setFreelancers(freelancers);

        const jobOwnerResponse = await axios.get("http://localhost:3000/jobOwner/job-owner");
        const jobOwners: JobOwner[] = jobOwnerResponse.data;
        setjobownerCount(jobOwners.length);
        setJobOwners(jobOwners);

        setUserCount(freelancers.length + jobOwners.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const isFreelancer = (user: Freelancer | JobOwner): user is Freelancer => {
    return (user as Freelancer).jobtitle !== undefined && (user as Freelancer).id !== undefined;
  };
  
  const isJobOwner = (user: Freelancer | JobOwner): user is JobOwner => {
    return (user as JobOwner).description !== undefined && (user as JobOwner).id !== undefined;
  };
  
  useEffect(() => {
    if (rowCount === 10 && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [rowCount]);

  const handleScrollUp = () => {
    setRowCount((prevCount) => prevCount + 1);
  };

return (
    <>
<div className="p-4 gap-2 sm:ml-64" ref={containerRef}>
<SideNavBar />
{/* First row with three columns */}
    <div className="grid grid-cols-3 gap-4 mb-10 mt-10">
      <div className="flex flex-col items-center justify-center h-24 rounded">
        <p className="text-6xl text-black font-black">{freelancerCount}</p>
        <p className="text-2xl text-black">Freelancers</p>
      </div>

      <div className="flex flex-col items-center justify-center h-24 rounded border-l-4 border-r-4">
        <p className="text-6xl text-black font-black">{jobownerCount}</p>
        <p className="text-2xl text-black">JobOwners</p>
      </div>

      <div className="flex flex-col items-center justify-center h-24 rounded">
        <p className="text-6xl text-black font-black">{userCount}</p>
        <p className="text-2xl text-black">Total users</p>
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
              Role
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
        {[...freelancers, ...jobOwners].map((user) => (
          <tr key={user.id}
            className="bg-white border-gray-400 hover:bg-[#91C7EF] group transition duration-200 "
            onWheel={handleScrollUp}>
                {rowCount >= 10 && (
                <div
                className="fixed bottom-4 right-4 w-8 h-8 border-black hover:border-white hover:bg-white bg-[#267296] active:bg-[#2e667f] rounded-full border-4  text-black flex items-center justify-center transition duration-200"
                onClick={() => {
                   setRowCount(0);
                    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}>
          <MdKeyboardArrowUp className="text-black hover:border-[#267296] hover:bg-white hover:text-[#267296] text-2xl" />
                    </div>)}
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
                src={user.image}
                alt="user image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold hover:text-bold">
                {user.name}
                </div>
                <div className="font-normal text-gray-500 hover:text-bold">
                {user.email}
                </div>
              </div>
            </th>
            <td className="px-6 py-4 hover:text-bold">
            {isFreelancer(user)
  ? user.jobtitle
  : isJobOwner(user)
  ? user.description && user.description.length > 50 // Add null check here
    ? `${user.description.slice(0, 50)}...`
    : user.description // Return user.description if it exists
  : ''}
            </td>
            <td className="px-6 py-4 hover:text-bold">
            {user.phone}
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
            <a
            href={`/admin/user/${isFreelancer(user) ? user.id : isJobOwner(user) ? user.id : ''}`}
            className="transition ease-in-out delay-150 text-white bg-blue-500 border border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            User details</a>
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a
              href="#"
              type="button"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center text-red-700 hover:text-white border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              <span className="ml-2">Delete user</span></a>
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

export default Dashboard;