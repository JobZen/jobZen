"use client"
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Link from 'next/link';
import SideNavBar from '../sideNavBar/page';
import { MdKeyboardArrowUp } from 'react-icons/md';
import Search from '../../search/page'
import Freelancer from '@/app/freelancer/[id]/page';
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 

interface Freelancer {
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

const FreelancersList = () => {
const [freelancers, setFreelancers] = useState<Freelancer[]>([])
const [freelancerCount,setFreelancerCount]=useState<number | undefined>()

const [refresh,setRefresh]=useState<boolean>(false)
// const [showConf,setShowConf]=useState<boolean>(false)

const containerRef = useRef<HTMLDivElement>(null);
const [rowCount, setRowCount] = useState<number>(0);


const [freelancer, setfreelancer] = React.useState<Freelancer[]>([]);




const handleDelete = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3000/freelancer/${id}`);
    setRefresh(!refresh)

  } catch (error) {
    console.error('Error deleting freelancer:', error);
  }

};

useEffect(()=>{  
const getAllFreelancer = async () => {
  try {
    const response = await axios.get("http://localhost:3000/freelancer");
    const fetchedFreelancers: Freelancer[] = response.data;
    setFreelancers(fetchedFreelancers);
    setFreelancerCount(fetchedFreelancers.length);
  } catch (error) {
    console.error(error);
  }
};
getAllFreelancer()
},[refresh])

useEffect(() => {
  if (rowCount >= 10 && containerRef.current) {
    containerRef.current.scrollIntoView({ behavior: 'smooth' });
    setRowCount(0);
  }
}, [rowCount]);

const handleScrollUp = () => {
  setRowCount((prevCount) => prevCount + 1);
};




  const handleCancelClick = () => {
  
    return;
  }
  


  





return (
    <>
<div className="p-4 sm:ml-64" >
<SideNavBar />

    <div className=" gap-4 mb-10 mt-10" ref={containerRef}>
      <div className="flex flex-col items-center justify-center h-24 rounded">
      {rowCount >= 10 && (
            <div
              className="fixed bottom-4 right-4 w-8 h-8 border-black hover:border-[#267296] hover:bg-white bg-[#267296] active:bg-[#2e667f] rounded-full border-4  text-black flex items-center justify-center transition duration-200"
              onClick={() => {
                setRowCount(0);
                containerRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MdKeyboardArrowUp className="text-black hover:border-[#267296] hover:bg-white hover:text-[#267296] text-2xl" />
            </div>
          )}
        <p className="text-6xl text-black font-black">{freelancerCount || 0}</p>
        <p className="text-2xl text-black">Freelancers</p>
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
        {freelancers.map((freelancer) => (
          <tr key={freelancer.id} 
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
                src={freelancer.image}
                alt="user image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold hover:text-bold">
                {freelancer.name}
                </div>
                <div className="font-normal text-gray-500 hover:text-bold">
                {freelancer.email}
                </div>
              </div>
            </th>
            <td className="px-6 py-4 hover:text-bold">
            {freelancer.jobtitle}
            </td>
            <td className="px-6 py-4 hover:text-bold">
            {freelancer.phone}
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a
           href={`/admin/freelancersList/${freelancer.id}`}
            className="transition ease-in-out delay-150 text-white bg-blue-500 border border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Freelancer details</a>
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <div>
              <a
              href="#"
              type="button"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center text-red-700 hover:text-white border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
             
             <Popup
    trigger={<button className="ml-2"> Delete freelancer </button>}
    modal
    nested
  >
      {close => (
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

   

  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
       
      
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Delete account</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you certain you wish to delete this account? All of this data's account will be permanently erased. This action is irreversible.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => handleDelete(freelancer.id)}>Delete</button>
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
           onClick={() => {
              console.log('modal closed ');
              close();
            }}
             >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div> )}
      </Popup>
             </a>
              </div>
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

export default FreelancersList;