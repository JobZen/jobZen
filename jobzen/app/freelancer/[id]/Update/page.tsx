"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../navFreelancer/page";
import Footer from "../../../footer/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Popup from "../../../popup/page";

interface FreelancerProfile {
  id: number;
  name: string;
  email: string;
  password: string;
  adress: string;
  phone: number;
  image: string;
  skills: string;
  aboutMe: string;
  experience: string;
  jobtitle: string;
}

const Update = () => {
  console.log("hi");

  const [url, setUrl] = useState<string>("");
  console.log(url);
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [skills, setSkills] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [experienceTitle, setExperienceTitle] = useState("");
  const [free, setFree] = React.useState<FreelancerProfile>({
    id: 0,
    name: "",
    email: "",
    password: "",
    adress: "",
    phone: 0,
    image: "",
    skills: "",
    aboutMe: "",
    experience: "",
    jobtitle: "",
  });
  const router = useRouter();
  useEffect(() => {
    var currentUrl = window.location.href;
    var ind = currentUrl.split("/");
    var index = parseInt(ind[ind.length - 2]);
    setId(index);

    const fetchFreelancer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/freelancer/${index}`
        );
        setFree(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching freelancer data:", error);
      }
    };
    fetchFreelancer();
  }, []);

  const handleUpdate = async (event: any) => {
    event.preventDefault();
    const updatedFreelancer: any = {
      name: name ? name : free.name,
      email: email ? email : free.email,
      password: password ? password : free.password,
      adress: adress ? adress : free.adress,
      phone: phone ? phone : free.phone,
      image: url ? url : free.image,
      skills: skills ? skills : free.skills,
      aboutMe: aboutMe ? aboutMe : free.aboutMe,
      experience: experienceTitle ? experienceTitle : free.experience,
      jobtitle: jobtitle ? jobtitle : free.jobtitle,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/freelancer/${id}`,
        updatedFreelancer,
        {}
      ); //put ${id} instead of 1
      const data = response.data;
      console.log("Profile updated successfully", data);
      setShowPopup(true);
    } catch (error) {
      console.log("error updating freelancer profile", error);
      alert("Please try again");
    }
  };
  const handleClosePopup = () => {
    setShowPopup(false);
    // Assuming you have a route named '/freelancer/:id'
    router.push(`/freelancer/${free.id}`);
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
    <div>
      <Navbar />
      {showPopup && (
        <Popup onClose={handleClosePopup} onConfirm={handleClosePopup} />
      )}
      <div className="bg-white min-h-screen">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-[#a1e1fd4a] shadow-xl rounded-[42px] p-6 h-[827px]">
                <div className="flex flex-col items-center">
                  {url ? (
                    <img
                      src={url}
                      className="w-32 h-32 rounded-full mb-4 object-cover border-4 "
                      alt="Preview"
                    />
                  ) : (
                    <img
                      src={free.image}
                      className="w-32 h-32 rounded-full mb-4 object-cover border-4 "
                      alt="Profile Photo"
                    />
                  )}
                  <h1 className="text-xl font-bold text-center mb-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-[#a1e1fd4a]-300 p-2 rounded-full mb-4"
                    />
                  </h1>
                  <p className="text-gray-700 w-full">
                    <input
                      type="text"
                      placeholder="Enter your Job here"
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="w-full border border-[#a1e1fd4a]-300 p-2 rounded-full mb-4"
                    />
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={handleUpdate}
                      className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[white] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#267296] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[white] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#267296] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] "
                    >
                      Save Updates
                    </button>
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
                    <Link href={`/freelancer/${free?.id || ""}`}>
                      <button className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[white] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#267296] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[white] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#267296] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-solid ">
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
                    placeholder="Enter your new skills here..."
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full border border-[#a1e1fd4a]-300 p-2 rounded-full mb-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white  shadow-xl rounded-[42px] p-6">
                <h2 className="text-xl font-bold mt-6 mb-4">About Me</h2>
                <input
                  type="text"
                  placeholder="Describe yourself"
                  onChange={(e) => setAboutMe(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold mt-6 mb-4">Phone Number</h2>
                <input
                  type="text"
                  placeholder="Enter your new phone number here..."
                  onChange={(e) => setPhone(parseInt(e.target.value))}
                  className="w-full border border-gray-300 p-2 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold mt-6 mb-4">Email</h2>
                <input
                  type="text"
                  placeholder="Enter your new Email here..."
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold mt-6 mb-4">Address</h2>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Enter your new Address here..."
                    onChange={(e) => setAdress(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-full mb-4"
                  />
                </div>
                <h2 className="text-xl font-bold mt-6 mb-4">Password</h2>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Enter your new password here..."
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-full mb-4"
                  />
                </div>
                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Enter your previous experience here..."
                    onChange={(e) => setExperienceTitle(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded-full mb-4"
                  />
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
export default Update;
