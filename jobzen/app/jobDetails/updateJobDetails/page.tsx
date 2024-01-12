'use client'
import React , {useState} from 'react';
import Link from 'next/link';
import Navbar from '../../navBar/page';
import Footer from '../../footer/page';
import ReviewFreelancer from '../review/page';

const UpdateJobDetails = () => {
const [availabe, setAvailable] = useState(false)
  
const handleCheckboxChange = () => {
  setAvailable(!availabe);
};

  return (
    <div className='bg-white '>
      <Navbar />
      <div className='bg-white flex flex-col justify-center items-center h-screen'>
        <div className="container mx-auto pt-16 pb-0 items-center mr-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-12 ">
            <div className="bg-white mt-[20px] ">
                    <br/>
              <p className='text-Mona text-xl mt-6 mb-4'>Update Job Details</p>
              <hr className="my-2 mr-80 border-r-2 border-gray-900" />
                    <br/>
              <div className="mb-6">
                <label htmlFor="default-input" className="text-xl font-lato font-semibold mb-4">
                    Job Title
                    </label>
                    <input
                    type="text"
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                    </div>   
                    <div className="mb-6">
                <label htmlFor="default-input" className="text-xl font-lato font-semibold mb-4">
                    Rate
                    </label>
                    <input
                    type="text"
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                    </div>    
                    <div className="mb-6">
                <label htmlFor="default-input" className="text-xl font-lato font-semibold mb-4">
                    Describe the project
                    </label>
                    <textarea
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></textarea>
                    </div>  
                    <div className="mb-6">
                <label htmlFor="default-input" className="text-xl font-lato font-semibold mb-4">
                    Describe Freelancer role in this requested job
                    </label>
                    <textarea
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></textarea>
                    </div>  
                    <div className="mb-6">
                <label htmlFor="default-input" className="text-xl font-lato font-semibold mb-4">
                    Describe Freelancer Skills & Qualification for this requested job
                    </label>
                    <textarea
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></textarea>
                    </div>  
            </div>
            <div className="ml-1 flex items-center p-8">
              <div className="flex p-12 ">
                <div className="bg-[#D3E8F8] shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img src="https://shorturl.at/bkuJT" className="w-32 h-32 rounded-full mb-4 shrink-0" alt="CompanyProfile" />
                    <h1 className="text-xl font-bold">Flux Outdoor</h1>
                    <Link href={'/jobownerProfile'}>
                      <p className="font-jura text-[#267296] hover:text-base-[#267296] hover:font-semibold font-jura hover:underline">View Company's Profile</p>
                    </Link>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <Link href={'/jobDetails'}>
                        <button className="text-white hover:font-bold bg-[#267296] border-white shadow-2xl py-2 px-4 rounded">save Update</button>
                      </Link>
                    </div>
                    <br/>
                    <div className="flex items-center gap-2">
                    <a className="text-gray-500 hover:text-orange-600" aria-label="login" href={"/login"}
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                              </svg>
                              </a>
                        <a className="text-gray-500 hover:text-orange-600" aria-label="delete" href=""
                            target="_blank">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a className="text-gray-500 hover:text-orange-600" aria-label="reviews" href="/jobDetails/createReview"
                            target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                </svg>
                                </a>
                        <a className="text-gray-500 hover:text-orange-600" aria-label="messages" href="/jobDetails/messageJobDetails"
                            target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                      <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                      </svg>
                        </a>
                    </div>
                  </div>
                  <hr className="my-6 border-t border-[#267296]" />
                  <div className="flex flex-col">
                  <p className="font-jura text-[#267296]">Job title:</p>
                  <ul>
                    <li className="mb-4">
                      <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900"></label>
                      <input
                      type="text" id="small-input" placeholder="Enter job title here"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"/></li></ul>
                    <br/>
                    <p className="font-jura text-[#267296] ">Location:</p>
                    <ul>
                    <li className="mb-4">
                      <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900"></label>
                      <input
                      type="text" id="small-input" placeholder="Enter working location here"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"/></li></ul>
                    <br/>
                    <p className="font-jura text-[#267296] ">Date posted:</p>
                    <ul>
                    <li className="mb-4">
                      <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900"></label>
                      <input
                      type="text" id="small-input" placeholder="job posting date here"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"/></li></ul>
                    <Link href={'/jobDetails/review'}>
                      <p className="mt-4 md-1 text-[#267296] hover:text-base-[#267296] text-l hover:font-semibold font-jura hover:underline">Proceed to payement</p>
                    </Link>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
      <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          name='autoSaver'
          className='sr-only'
          checked={availabe}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            availabe ? 'bg-[#267296]' : 'bg-[#CCCCCC]'
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              availabe ? 'translate-x-6' : ''
            }`}
          ></span>
        </span>
        <span className={`label flex items-center text-sm font-medium ${
          availabe ? 'text-[#267296]' : 'text-gray-700'
        }`}>
          Is it availabe? <span className='pl-1'> {availabe ? 'Yes' : 'No'} </span>
        </span>
      </label>
      </div>
      <Footer/>
    </div>
  );
};

export default UpdateJobDetails;
