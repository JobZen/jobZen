"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../../navjobowner/page";
import Footer from "../../../footer/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import Popup from "../../../popup/page";
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
  jobOwnerId: number;
  jobCategoryId: number;
  jobowner: JobOwner;
}

const UpdateJobDetails = () => {
  const [jobDetails, setJobDetails] = useState<Job | null>(null);
  const [jobId, setJobId] = useState<number>();
  const [jobtitle, setJobtitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [budget, setBudget] = useState<number>();
  const [role, setRole] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    var currentUrl = window.location.href;
    var ind = currentUrl.split("/");
    var index = ind[ind.length - 2];
    setJobId(parseInt(index));
    const getOneJob = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/job/job/${index}`
        );
        setJobDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    getOneJob();
  }, []);

  useEffect(() => {
    if (jobId === undefined || jobId === null) {
      console.error("Invalid jobId:", jobId);
      return;
    }

    axios
      .get(`http://localhost:3000/job/job/${jobId}`)
      .then((response) => {
        const data = response.data;
        if (data && data.length > 0) {
          const firstJob = data[0];
          const {
            location,
            budget,
            role,
            description,
            qualification,
            createdAt,
          } = firstJob;
          setJobDetails(firstJob);
          setLocation(location);
          setBudget(budget);
          setRole(role);
          setDescription(description);
          setQualification(qualification);
          setCreatedAt(createdAt);
        } else {
          console.error("No job found with jobId:", jobId);
        }
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
      });
  }, [jobId]);
  const router = useRouter();
  const handleUpdatedJob = async (event: any) => {
    event.preventDefault();
    const updateJob: any = {
      jobtitle: jobtitle ? jobtitle : jobDetails?.jobtitle,
      location: location ? location : jobDetails?.location,
      budget: budget ? budget : jobDetails?.budget,
      role: role ? role : jobDetails?.role,
      description: description ? description : jobDetails?.description,
      qualification: qualification ? qualification : jobDetails?.qualification,
      image: url ? url : jobDetails?.image,
    };
    console.log(updateJob);

    try {
      const update = await axios.put(
        `http://localhost:3000/job/job/${jobId}`,
        updateJob
      ); // put ${jobId} instead of 12
      const data = update.data;
      console.log("Profile updated successfully", data);
      setShowPopup(true);
    } catch (error) {
      console.error("Error updating existing job:", error);
      alert("Please try again.");
    }
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

  const handleClosePopup = () => {
    setShowPopup(false);
    // Assuming you have a route named '/freelancer/:id'
    router.push(`/jobDetails/${jobDetails?.id}`);
  };

  return (
    <div className="bg-white ">
      <Navbar />
      {showPopup && (
        <Popup onClose={handleClosePopup} onConfirm={handleClosePopup} />
      )}
      <div className="bg-white flex flex-col justify-center items-center h-screen">
        <div className="container mx-auto pt-16 pb-0 items-center mr-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-12 ">
            <div className="bg-white mt-[20px] ">
              <br />
              <p className="text-Mona text-xl mt-6 mb-4">Update Job Details</p>
              <hr className="my-2 mr-80 border-r-2 border-gray-900" />
              <br />
              {url ? (
                <img
                  src={url}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 "
                  alt="Preview"
                />
              ) : (
                <img
                  src={jobDetails?.image}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 "
                  alt="Profile Photo"
                />
              )}
              <br />
              <div className="mb-6">
                <label
                  htmlFor="jobtitle"
                  className="text-xl font-lato font-semibold mb-4"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobtitle"
                  onChange={(e) => setJobtitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="budget"
                  className="text-xl font-lato font-semibold mb-4"
                >
                  Payement
                </label>
                <input
                  type="text"
                  id="budget"
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="text-xl font-lato font-semibold mb-4"
                >
                  Describe the project
                </label>
                <textarea
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="text-xl font-lato font-semibold mb-4"
                >
                  Describe Freelancer role in this requested job
                </label>
                <textarea
                  id="role"
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="qualification"
                  className="text-xl font-lato font-semibold mb-4"
                >
                  Describe Freelancer Skills & Qualification for this requested
                  job
                </label>
                <textarea
                  id="qualification"
                  onChange={(e) => setQualification(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></textarea>
              </div>
            </div>
            <div className="ml-1 flex items-center p-8">
              <div className="flex p-12 ">
                <div className="bg-[#D3E8F8] shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={jobDetails?.jobowner.image}
                      className="w-32 h-32 rounded-full mb-4 shrink-0"
                      alt="CompanyProfile"
                    />

                    <h1 className="text-xl font-bold">
                      {jobDetails?.jobowner.name}
                    </h1>

                    <div
                      className="mt-[15px]"
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

                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <button
                        onClick={handleUpdatedJob}
                        className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[#267296] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#267296] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[white] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] "
                      >
                        save Update
                      </button>
                    </div>
                  </div>
                  <hr className="my-6 border-t border-[#267296]" />
                  <div className="flex flex-col">
                    <p className="font-jura text-[#267296] ">Location:</p>
                    <ul>
                      <li className="mb-4">
                        <label
                          htmlFor="location"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        ></label>
                        <input
                          type="text"
                          id="location"
                          placeholder="Enter working location here"
                          onChange={(e) => setLocation(e.target.value)}
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                        />
                      </li>
                    </ul>
                    <br />
                    <p className="font-jura text-[#267296] ">Date posted:</p>
                    <p className="font-bold font-lato text-black">
                      {jobDetails?.createdAt}
                    </p>
                    <Link href={"/jobDetails/review"}>
                      <p className="mt-4 md-1 text-[#267296] hover:text-base-[#267296] text-l hover:font-semibold font-jura hover:underline">
                        Proceed to payement
                      </p>
                    </Link>
                    <br />
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

export default UpdateJobDetails;
