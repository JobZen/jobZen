"use client"
import React, { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "../../../navBar/page"
import Footer from "../../../footer/page";
import Link from "next/link";

interface FreelancerProfile {
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

const Update = () => {
  console.log("hi");
  
  const [id, setId] = useState(0);
  const [freelancerDetails, setFreelancerDetails] = useState<FreelancerProfile | null >(null)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [image, setImage] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [skills, setSkills] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [experienceTitle, setExperienceTitle] = useState("");
  const [experiencePeriod, setExperiencePeriod] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");
  const [free, setfree] = React.useState<FreelancerProfile>({
    id:0,
    name:"",
    email:"",
    password:"",
    adress:"",
    phone:0,
    image:"",
    skills:"",
    aboutMe:"",
    experience:"",
    jobtitle:"",
});

  useEffect(() => {
    var currentUrl=window.location.href
    var ind=currentUrl.split("/")
    var index= parseInt(ind[ind.length-2]);
    setId(index)

    const fetchFreelancer = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/freelancer/${index}`);
            setFreelancerDetails(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching freelancer data:', error);
        }
    };
    fetchFreelancer();
}, []);

  const handleUpdate = async (event:any) => {
    event.preventDefault();
    const updatedFreelancer :any ={
      id:id,
      name:name,
      email:email,
      password:password,
      adress:adress,
      phone:phone,
      image:image,
      skills:skills,
      aboutMe:aboutMe,
      experience:experienceTitle,
      jobtitle:jobtitle,
    }
    try {
      const response = await axios.put(
        `http://localhost:3000/freelancer/1`, updatedFreelancer, {
        }); //put ${id} instead of 1
        const data = response.data;
        console.log("Profile updated successfully",data);
        alert("Profile updated successfully")
      } catch (error){
        console.log("error updating freelancer profile",error)
        alert("Please try again")
      }
  ;
};
  return (
    <div>
      
      <Navbar />
      <div className="">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={freelancerDetails?.image}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4"
                    alt="Profile Photo"
                  />
                  <h1 className="text-xl border-gray-300 rounded-lg font-bold text-align-center">
                    <input
                      type="text"
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </h1>
                  <br />
                  <p className="text-gray-700">
                    <input
                      type="text"
                      placeholder="Your Job"
                      onChange={(e) => setJob(e.target.value)}
                    />
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button
                    onClick={handleUpdate}
                    className="bg-[#267296] font-bold hover:bg-white hover:text-[#267298] text-white py-2 px-4 rounded">
                      Save update
                    </button>
                    <Link  href={`/freelancer/${free.id}`}>
                    <button
                    className="border-solid border-2 hover:bg-grey-500 font-bold border-[#267296] text-[#267296] hover:font-bold py-2 px-4 rounded">
                      Cancel
                    </button>
                    </Link>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <input
                    type="text"
                    placeholder="skills"
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mt-6 mb-4">About Me</h2>
                <input
                  type="text"
                  placeholder="About Me"
                  onChange={(e) => setAboutMe(e.target.value)}
                  className="flex justify-between flex-wrap gap-2 w-full"
                />
                 <h2 className="text-xl font-bold mt-6 mb-4">Phone number</h2>
                <input
                  type="text"
                  placeholder="phone number"
                  onChange={(e) => setPhone(parseInt(e.target.value))}
                />
                <br/>
<h2 className="text-xl font-bold mt-6 mb-4">Email</h2>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Job Title</span>
                      <input
                    type="text"
                    placeholder="Enter your previous title here..."
                    onChange={(e) =>
                      setExperienceDescription(e.target.value)
                    }
                    style={{ width: "1000px" }}
                  />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Period</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your working period here..."
                    onChange={(e) =>
                      setExperiencePeriod(e.target.value)
                    }
                    style={{ width: "1000px" }}
                  />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Description</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your previous experience here..."
                    onChange={(e) =>
                      setExperienceDescription(e.target.value)
                    }
                    style={{ width: "1000px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>)
}
export default Update;
