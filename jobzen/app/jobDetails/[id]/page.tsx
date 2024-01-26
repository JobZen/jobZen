"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "../../navjobowner/page";
import Footer from "../../footer/page";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
interface JobOwner {
  id: number;
  name: string;
  image: string;
}

interface Job {
  id: number;
  jobtitle: string;
  location: string;
  budget: number;
  image: string;
  role: string;
  description: string;
  qualification: string;
  createdAt: string;
  jobowner: JobOwner;
}

const JobDetails = () => {
  const id = Cookies.get("id");
  const [chat, setChat] = useState<any[][]>([]);
  const [index, setIndex] = useState(0);

  const [job, setJob] = useState<Job>({
    id: 0,
    jobtitle: "",
    location: "",
    budget: 0,
    image: "",
    role: "",
    description: "",
    qualification: "",
    createdAt: "",
    jobowner: {
      id: 0,
      name: "",
      image: "",
    },
  });
  const [jobOwnerData, setJobOwnerData] = useState<JobOwner>({
    id: 0,
    name: "",
    image: "",
  });
  const [available, setAvailable] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const currentUrl = window.location.href;
    const ind = currentUrl.split("/");

    setIndex(parseInt(ind[ind.length - 1]));
  }, []);

  useEffect(() => {
    const getOnechat = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/jobMS/jj/${id}/${index}`
        );
        if (response.data[0].reciever) setChat(response.data[0].reciever);
        else setChat(response.data[0].sender);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    const getOneJob = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/job/job/${index}`
        );
        setJob(response.data);
        if (!response.data.available) setAvailable(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    getOneJob();
    getOnechat();
  }, [index]);

  const handleCheckboxChange = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/job/job/updateAvailability/${job.id}`,
        { available: !available }
      );
      setAvailable(!available);
    } catch (error) {
      console.error("Error updating job availability:", error);
    }
  };

  const PreviousPage = () => {
    const jobOwnerID = job.jobowner.id;
    setJobOwnerData({
      id: jobOwnerID,
      name: job.jobowner.name,
      image: job.jobowner.image,
    });
    router.push(`/listjobbycompany/${jobOwnerID}`);
  };
  return (
    <div className="bg-white ">
      <Navbar />
      <div className="bg-white flex flex-col justify-center items-center h-screen">
        <div className="container mx-auto py-16 pt-[5rem] items-center mr-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-4 ">
            <div className="bg-white mt-[200px]">
              <button
                className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
                title="Go Back"
                onClick={PreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  className="stroke-blue-300"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M11 6L5 12M5 12L11 18M5 12H19"
                  ></path>
                </svg>
              </button>
              <p className="text-Mona text-xl mt-6 mb-4">Job Details</p>
              <hr className="my-2 mr-80 border-r-2 border-gray-900" />
              <br />
              <img
                src={job.image}
                className="w-32 h-32 rounded-full mb-4 shrink-0"
                alt="Job Image"
              />
              <br />
              <h2 className="text-4xl font-lato font-semibold mb-4">
                {job.jobtitle}
              </h2>
              <h2 className="text-xl font-bold mt-6 mb-4">Payement</h2>
              <p className="text-[#959595] text-xl">
                {job.budget} TND / Hour (negociation accord to experience)
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">About the project</h2>
              <p className="text-gray-700">{job.description}</p>
              <h2 className="text-xl font-bold mt-6 mb-4">Your Role</h2>
              <div className="mb-6">
                <p className="mt-2">{job.role}</p>
              </div>
              <h2 className="text-xl font-bold mt-6 mb-4">
                Skills & Qualifications:
              </h2>
              <div className="mb-6 pl-6">
                <div className="mb-6">
                  <p className="mt-2 ml-[-19px]">{job.qualification}</p>
                </div>
              </div>
            </div>

            <div className="ml-1 flex items-center p-8">
              <div className="flex p-12 ">
                <div className="bg-[#D3E8F8] shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={job.jobowner.image}
                      className="w-32 h-32 rounded-full mb-4 shrink-0"
                      alt="CompanyProfile"
                    />
                    <h1 className="text-xl font-bold">{job.jobowner.name}</h1>

                    <div className="mt-6 flex gap-4">
                      <Link href={`/jobDetails/${job.id}/updateJobDetails`}>
                        <button className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[white] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#267296] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[white] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#267296] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] ">
                          Update details
                        </button>
                      </Link>
                    </div>
                    <div className="mt-6 flex gap-4">
                      <Link
                        href={{
                          pathname: `/chat/${chat}`,
                          query: {
                            id: index,
                          },
                        }}
                      >
                        <button className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[#267296] rounded-full overflow-hidden cursor-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#267296] items-center justify-center mr-0 py-full transition ease-in-out delay-150-pointer [font-family:'Montserrat-Bold',Helvetica] font hover:-translate-y-1 hover:bg-[white] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] ">
                          View Recrutement
                        </button>
                      </Link>
                    </div>
                    <div className="mt-6 "></div>
                  </div>
                  <hr className="my-6 border-t border-[#267296]" />
                  <div className="flex flex-col">
                    <p className="font-jura text-[#267296]">Job title:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">
                        {job.jobtitle}
                      </li>
                    </ul>
                    <br />
                    <p className="font-jura text-[#267296] ">Location:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">
                        {job.location}
                      </li>
                    </ul>
                    <br />
                    <p className="font-jura text-[#267296] ">Date posted:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">
                        {job.createdAt}
                      </li>
                    </ul>
                    <br />
                    <div className="flex flex-col items-center ml-[-7px]">
                      <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
                        <input
                          type="checkbox"
                          name="autoSaver"
                          className="sr-only"
                          checked={available}
                          onChange={handleCheckboxChange}
                        />
                        <span
                          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                            available ? "bg-[#267296]" : "bg-[#CCCCCC]"
                          }`}
                        >
                          <span
                            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                              available ? "translate-x-6" : ""
                            }`}
                          ></span>
                        </span>
                        <span
                          className={`label flex items-center text-sm font-medium ${
                            available ? "text-[#267296]" : "text-gray-700"
                          }`}
                        >
                          Is it available?{" "}
                          <span className="pl-1">
                            {" "}
                            {available ? "Yes" : "No"}{" "}
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;