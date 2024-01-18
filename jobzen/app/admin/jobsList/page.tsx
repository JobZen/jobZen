"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNavBar from '../sideNavBar/page';

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
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

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

const JobsList = () => {
  const [jobCount, setJobCount] = useState<number | undefined>();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobCategories, setJobCategories] = useState<JobCategory[]>([]);
  const [jobOwners, setJobOwners] = useState<JobOwner[]>([]);

  useEffect(() => {
    const fetchJobCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jobCategory/jobCategory');
        setJobCategories(response.data);
      } catch (error) {
        console.error('Error fetching job categories:', error);
      }
    };

    const fetchJobOwnersAndJobs = async () => {
      try {
        const [ownersResponse, jobsResponse] = await Promise.all([
          axios.get('http://localhost:3000/jobOwner/job-owner'),
          axios.get('http://localhost:3000/job/job'),
        ]);

        setJobOwners(ownersResponse.data);
        setJobs(jobsResponse.data);
      } catch (error) {
        console.error('Error fetching job owners or jobs:', error);
      }
    };

    fetchJobCategories();
    fetchJobOwnersAndJobs();
  }, []);

return (
    <>
<div className="p-4 sm:ml-64">
<SideNavBar />
{/* First row with three columns */}
    <div className=" gap-4 mb-10 mt-10">
      <div className="flex flex-col items-center justify-center h-24 rounded">
        <p className="text-6xl text-black font-black">{jobCount || 0}</p>
        <p className="text-2xl text-black">job posts</p>
      </div>
    </div>

{/* drop navigation Action */}
    <div className="relative overflow-x-auto">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white">
        <label
          htmlFor="table-search"
          className="sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block pt-2 ps-10 text-sm border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
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
              className="px-6 py-3 bg-grey-500">
              Job Owner
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500">
              Rating
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500"
            >
              jobtitle
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500"
            >
              location
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
              Payement
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
              Job category
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
             Created At
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
             See Job post details
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
        {jobs.map((job) => (
          <tr key={job.id} 
            className="bg-white border-gray-400 hover:bg-[#91C7EF] group"
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
            {jobOwners.map((jobOwner, i) => (
              <React.Fragment key={jobOwner.id}>
              <img
                className="w-10 h-10 rounded-full"
                src={jobOwner.image}
                alt="job owner image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold hover:text-bold">
                {jobOwner.name}
                </div>
                <div className="font-normal text-gray-500 hover:text-bold">
                {jobOwner.email}
                </div>
              </div>
                  </React.Fragment>
                ))}
              </th>
      {jobOwners.map((jobOwner, i) => (
      <td className="px-6 py-4 hover:text-bold">
      <StarRating rating={jobOwner.rating} />
      </td>
      ))}
            <td className="px-6 py-4 hover:text-bold">
            {job.jobtitle}
            </td>
            <td className="px-6 py-4 hover:text-bold">
            {job.location}
            </td>
            <td className="px-6 py-4 hover:text-bold">
            {job.budget}
            </td>
            {jobCategories.map((category,i) => (
            <th
            key={i}
            scope="row"
            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
          >
              <img
                className="w-10 h-10 rounded-full"
                src={category.image}
                alt="job owner image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold hover:text-bold">
                {category.category}
                </div>
              </div>
              </th>
            ))}
            <td className="px-6 py-4 hover:text-bold">
            {job.createdAt}
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a
                href={`/admin/jobsList/${job.id}`}
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                className="font-medium hover:text-bold text-blue-600 hover:underline hover:font-extrabold"
              >
                Check Job Post details
              </a>
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a
                href="#"
                type="button"
                data-modal-target="editUserModal"
                data-modal-show="editUserModal"
                className="font-medium hover:text-bold text-red-600 hover:underline hover:font-extrabold"
              >
                Delete job post
              </a>
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

export default JobsList;