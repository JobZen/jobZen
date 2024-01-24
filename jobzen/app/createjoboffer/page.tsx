'use client'
import React , {useState,useEffect} from 'react';
import Link from 'next/link';
import Navbar from '../navjobowner/page';
import Footer from '../footer/page';
import axios from 'axios';
import Cookies from "js-cookie";


interface JobOwner{
  id:number,
  name:string,
  image:string
}

interface Job{
  id:number,
  jobtitle: string,
  location: string,
  budget: number,
  image: string,
  role: string,
  description: string,
  qualification: string,
  createdAt: string, 
  jobOwnerId: number,
  jobCategoryId: number,
  jobOwner:JobOwner
}

const CreateJobDetails = () => {
  const id = Cookies.get("id");
 
  
const [availabe, setAvailable] = useState<boolean>(false)
const [jobId,setJobId]=useState<number>()
const [jobtitle,setJobtitle]=useState<string>("")
const [location,setLocation]=useState<string>("")
const [budget,setBudget]=useState<number>()
const [role,setRole]=useState<string>("")
const [description,setDescription]=useState<string>("")
const [qualification,setQualification]=useState<string>("")
const [createdAt,setCreatedAt]=useState<string>("")
const [JobOwnerName,setJobOwnerName]=useState<string>("")
const [JobOwnerImage,setJobOwnerImage]=useState<string>("")
const [JobOwnerId,setJobOwnerId]=useState<number>()
const [JobCategoryId,setJobCategoryId]=useState<string>("")
const [url, setUrl] = useState<string>("");

const handleCreateJob = async (event:any) => {
  event.preventDefault()
  const createJob:any = {
    jobtitle: jobtitle,
    location: location,
    image: url,
    budget: budget,
    role: role,
    description: description,
    qualification: qualification,
    createdAt:createdAt,
    name:JobOwnerName,
    jobOwnerId:id
  };
    try {
      const create = await axios.post("http://localhost:3000/job/job", createJob);
      console.log("Job Post created successfully", create.data)
      alert("Job Post created successfully");
    } catch (error) {
      console.error('Error creating job post:', error);
      alert("Please try again.")
    }
  };

const handleCheckboxChange = () => {
  setAvailable(!availabe);
};


const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  try {
    if (!e.target.files || !e.target.files[0]) return;
    let url = e.target.files[0];
    if (!url) return;

    const formData = new FormData();
    formData.append("file", url);
    formData.append("upload_preset", "project");
    formData.append("cloud_name", "ds3tmq5iw");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/ds3tmq5iw/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const responseData = await response.json();
    setUrl(responseData.secure_url);
    console.log("url", responseData.secure_url);
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className='bg-white '>
      <Navbar />
      <div className='bg-white flex flex-col justify-center items-center h-screen'>
        <div className="container mx-auto pt-16 pb-0 items-center mr-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-12 ">
            <div className="bg-white">
                    <br/>
              <p className='text-Mona text-xl mt-6 mb-4'>Create Job Details</p>
              <hr className="my-2 mr-80 border-r-2 border-gray-900" />
                    <br/>
              <div className="mb-6">
                <label htmlFor="jobtitle" className="text-xl font-lato font-semibold mb-4">
                    Job Title
                    </label>
                    <input
                    type="text"
                    id="jobtitle"
                    placeholder="Enter job title here"
                    onChange={(e)=> setJobtitle(e.target.value)}
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"/>
                    </div>   
                    <div className="mb-6">
                <label htmlFor="budget" className="text-xl font-lato font-semibold mb-4">
                    Payement
                    </label>
                    <input
                    type="text"
                    id="budget"
                    placeholder='Enter the proposed salary here'
                    onChange={(e)=> setBudget(parseInt(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                    </div>    
                    <div className="mb-6">
                <label htmlFor="description" className="text-xl font-lato font-semibold mb-4">
                    Describe the project
                    </label>
                    <textarea
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder='describe the mission for Freelancer'
                    onChange={(e)=> setDescription(e.target.value)}
                    ></textarea>
                    </div>  
                    <div className="mb-6">
                <label htmlFor="role" className="text-xl font-lato font-semibold mb-4">
                    Describe Freelancer role in this requested job
                    </label>
                    <textarea
                    id="role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder='describe specific role here'
                    onChange={(e)=> setRole(e.target.value)}></textarea>
                    </div>  
                    <div className="mb-6">
                <label htmlFor="qualification" className="text-xl font-lato font-semibold mb-4">
                    Describe Freelancer Skills & Qualification for this requested job
                    </label>
                    <textarea
                    id="qualification"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder='describe the needed qualification for this job'
                    onChange={(e)=> setQualification(e.target.value)}></textarea>
                    </div>  
                    <div className="mb-6">
                <label htmlFor="qualification" className="text-xl font-lato font-semibold mb-4">
                    Location
                    </label>
                    <textarea
                    id="qualification"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder='describe the needed qualification for this job'
                    onChange={(e)=> setLocation(e.target.value)}></textarea>
                    </div> 
                    <div
                      onClick={() =>
                        document.getElementById("photoInput")?.click()
                      }
                    >
                      <button
                        className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[#267296] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#267296] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[white] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] "
                        onClick={() => uploadImage}
                      >
                        Upload New Image
                      </button>
                      <input
                        id="photoInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => uploadImage(e)}
                      />
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
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <Link href={'/'}>
                        <button className="text-white hover:font-bold bg-[#267296] border-white shadow-2xl py-2 px-4 rounded" onClick={(e)=>handleCreateJob(e)}>Create</button>
                      </Link>
                    </div>
      </div>
      <Footer />
    </div>
  );
};
export default CreateJobDetails;
