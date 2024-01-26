"use client"
import React, { useEffect, useState , useRef} from 'react';
import axios from 'axios';
import SideNavBar from '../sideNavBar/page';
import { MdKeyboardArrowUp } from 'react-icons/md';
import Search from '../../search/page'
import Popup from 'reactjs-popup';

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
  const [jobCount, setJobCount] = useState<number>(0);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobCategories, setJobCategories] = useState<JobCategory[]>([]);
  const [jobOwners, setJobOwners] = useState<JobOwner[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rowCount, setRowCount] = useState<number>(0);
  const [Job, setJob] = React.useState<Job[]>([]);
const [refresh,setRefresh]=useState(false)
const [open, setOpen] = useState(false);
const closeModal = () => setOpen(false);



const handleDelete = async (jobId: number) => {
  try {
    await axios.delete(`http://localhost:3000/job/job/${jobId}`);
    setRefresh(!refresh)

  } catch (error) {
    console.error('Error deleting jobOwner:', error);
  }

};


const closePopup = () => {
  // Close the popup using the close method provided by the library
  close();
};







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
        setJobCount(jobsResponse.data.length);
      } catch (error) {
        console.error('Error fetching job owners or jobs:', error);
      }
    };

    fetchJobCategories();
    fetchJobOwnersAndJobs();
  }, [refresh]);

  useEffect(() => {
    if (rowCount >= 10 && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
      setRowCount(0);
    }
  }, [rowCount]);

  const handleScrollUp = () => {
    setRowCount((prevCount) => prevCount + 1);
  };

return (
    <>
<div className="p-4 sm:ml-64" >
<SideNavBar />
{/* First row with three columns */}
    <div className=" gap-4 mb-10 mt-10" ref={containerRef}>
    {rowCount >= 10 && (
  <div
    className="fixed bottom-4 right-4 w-8 h-8 border-black hover:border-[#267296] hover:bg-white bg-[#267296] active:bg-[#2e667f] rounded-full border-4  text-black flex items-center justify-center transition duration-200"
    onClick={() => {
      setRowCount(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
  >
    <MdKeyboardArrowUp className="text-black hover:border-[#267296] hover:bg-white hover:text-[#267296] text-2xl" />
  </div>
)}
      <div className="flex flex-col items-center justify-center h-24 rounded" >
        <p className="text-6xl text-black font-black">{jobCount}</p>
        <p className="text-2xl text-black">job posts</p>
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
      <table className="w-full text-sm text-left rtl:text-right  border-[#267296] border-b-4 border-4 bg-[#267296] ">
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
            <div
            className="flex items-center px-6 py-4 text-gray-900 "
          >
            {jobOwners.map((jobOwner) => (
              jobOwner.id === job.jobOwnerId && (
              <React.Fragment key={jobOwner.id}>
              <img
                className="w-10 h-10 rounded-full"
                src={jobOwner.image}
                alt="job owner image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold hover:text-bold">
                {jobOwner.name.length >10?`${jobOwner.name.slice(0,10)}...`
            :jobOwner.name}
                </div>
                <div className="font-normal text-gray-500 hover:text-bold">
                {jobOwner.email}
                </div>
              </div>
                  </React.Fragment>
              )))}
              </div>
      {jobOwners.map((jobOwner) => (
        jobOwner.id === Number(job.jobOwnerId) && (
      <td className="px-6 py-4 hover:text-bold">
      <StarRating rating={jobOwner.rating} />
      </td>
        )))}
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
              category.id === (job.jobCategoryId) && (
            <th
            key={category.id}
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
                {category.category.length > 10?`${category.category.slice(0,10)}...`
                :category.category}
                </div>
              </div>
              </th>
            )))}
            <td className="px-6 py-4 hover:text-bold">
            {job.createdAt}
            </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <a
              href={`/admin/jobsList/${job.id}`}
              className="transition ease-in-out delay-150 text-white bg-blue-500 border border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
               Job post details</a>
              </td>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              
              <Popup
    trigger={<button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center text-red-700 hover:text-white border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"> Delete job </button>}
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
              <p className="text-sm text-gray-500">Are you certain you wish to delete this job post? All of this post will be permanently erased. This action is irreversible.</p>              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => handleDelete(job.id)}>Delete</button>
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => {
              console.log('modal closed ');
              close();
            }} >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div> )}
      </Popup>
              
              
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