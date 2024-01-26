"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Footer from "../../footer/page";
import Navbar from "../../navFreelancer/page";
import Cookies from "js-cookie";

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
  jobOwnerId: number;
  jobCategoryId: number;
  available: boolean;
}

function Page() {
  const [jobbycompany, setJobcompany] = useState<Job[]>([]);
  const [availableJobs, setAvailableJobs] = useState<Job[]>([]);
  const role = Cookies.get("role");
  const [selectedType, setSelectedType] = useState<string>("all"); // Default to 'all' jobs

  const toggleJobAvailability = async (
    jobId: number,
    currentAvailability: boolean
  ) => {
    try {
      await axios.patch(
        `http://localhost:3000/job/updateAvailability/${jobId}`,
        {
          available: !currentAvailability,
        }
      );
    } catch (error) {
      console.error("Error updating job availability:", error);
    }
  };

  useEffect(() => {
    var currentUrl = window.location.href;
    var ind = currentUrl.split("/");
    var index = ind[ind.length - 1];
    axios
      .get(`http://localhost:3000/job/jobbycompany/${index}`)
      .then((res) => {
        const allJobs: Job[] = res.data;
        setJobcompany(allJobs);

        const availableJobs = allJobs.filter((job) => job.available);
        setAvailableJobs(availableJobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredJobs =
    selectedType === "available"
      ? availableJobs
      : selectedType === "notAvailable"
      ? jobbycompany.filter((job) => !job.available)
      : jobbycompany;

  return (
    <div>
      <Navbar/>
      <center>
        <div className="flex justify-center gap-x-4">
          <button
            className={`flex w-[176px] h-[56px] mt-[10px] items-center justify-center px-[2px] py-[6px] relative bg-[white] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#267296] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[white] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#267296] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] ${
              selectedType === "notAvailable" ? "bg-[#267296]" : ""
            }`}
            onClick={() => setSelectedType("notAvailable")}
          >
            Not available Jobs
          </button>
          <button
            className={`flex w-[176px] h-[56px] mt-[10px] p-15 items-center justify-center px-[2px] py-[6px] relative bg-[#267296] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#267296] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[white] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] ${
              selectedType === "all" ? "bg-[#267296]" : ""
            }`}
            onClick={() => setSelectedType("all")}
          >
            All Jobs
          </button>
          <br />
          <button
            className={`flex w-[176px] h-[56px] mt-[10px] items-center justify-center px-[2px] py-[6px] relative bg-[white] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#267296] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[white] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#267296] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] ${
              selectedType === "available" ? "bg-[#267296]" : ""
            }`}
            onClick={() => setSelectedType("available")}
          >
            Available Jobs
          </button>
          <br />
        </div>
      </center>
      <div className="grid grid-cols-2 gap-[3cm] mt-[1cm] mb-[1cm] ml-[15%] mr-[10%]">
        {filteredJobs.map((element, i) => (
          <Link href={`/jobdetails2/${element.id}`} key={element.id}>
            <div
              className={`w-[12cm] h-60 flex flex-col justify-center gap-4 bg-neutral-50 rounded-lg shadow p-4 hover:scale-110 ${
                !element.available ? "opacity-40" : ""
              }`}
            >
              <div className="flex gap-4">
                <img
                  className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg"
                  alt=""
                  src={element.image}
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold">{element.jobtitle}</p>
                  <span className="font-bold text-neutral-700 italic"></span>
                  <p className="text-base line-clamp-3">{element.role}</p>
                  <p className="text-lg">{element.budget} TND /hr</p>
                  <p className="text-sm">
                    posted at: {element.createdAt.split("T")[0]}
                  </p>
                  <button
                    className={`${
                      element.available
                        ? ""
                        : " text-red-400 cursor-not-allowed"
                    } text-green-400 font-bold px-4 py-2 rounded`}
                    onClick={() =>
                      toggleJobAvailability(element.id, element.available)
                    }
                  >
                    {element.available ? " Available" : " Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
