'use client'
import React , {useState,useEffect} from 'react';
import Link from 'next/link';
import Navbar from '../navBar/page';
import Footer from '../footer/page';
import axios from 'axios';

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
const [imgUrl, setImgUrl] = useState<string[]>([]);

const handleCreateJob = async (event:any) => {
  event.preventDefault()
  const createJob:any = {
    jobtitle: jobtitle,
    location: location,
    budget: budget,
    role: role,
    description: description,
    qualification: qualification,
    createdAt:createdAt,
    name:JobOwnerName,
    image:JobOwnerImage
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


const addProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'pa4ezjqw');

      axios
        .post('http://api.cloudinary.com/v1_1/dfsyqvvim/image/upload', formData)
        .then((res) => {
          console.log('secure', res.data.secure_url);
          setImgUrl([res.data.secure_url]);
          console.log('url', imgUrl);
        })
        .catch((err) => {
          console.log(formData);
          console.log(err);
        });
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
                    <div>
                    <label htmlFor="fileInput">Upload File:</label>
                   <input type="file" id="fileInput" onChange={(e) => addProduct(e)} />
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
