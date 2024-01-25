"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../../navjobowner/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import Footer from "../../../footer/page";
import Popup from "../../../popup/page"

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

const EditJobOwnerProfile = (): JSX.Element => {
  const [url, setUrl] = useState<string>("");
  console.log(url);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [adress, setAdress] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [jobOwnerData, setJobOwnerData] = useState<JobOwner>({
    id: 0,
    name: "",
    email: "",
    password: "",
    adress: "",
    phone: 0,
    image: "",
    rating: 0,
    description: "",
  });
  console.log(jobOwnerData);

  const router = useRouter();

  useEffect(() => {
    var currentUrl = window.location.href;
    var ind = currentUrl.split("/");
    console.log(ind);

    var index = parseInt(ind[ind.length - 2]);
    setId(index);
    const fetchJobOwnerData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/jobOwner/job-owner/${index}`
        );
        const data = await response.json();
        console.log(data);

        setJobOwnerData(data);
        setUrl(data.image);
      } catch (error) {
        console.error("Error fetching job owner data:", error);
      }
    };

    fetchJobOwnerData();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/jobOwner/job-owner/${id}`,
        {
          email: email ? email : jobOwnerData.email,
          phone: phoneNumber ? parseInt(phoneNumber) : jobOwnerData.phone,
          name: companyName ? companyName : jobOwnerData.name,
          adress: adress ? adress : jobOwnerData.adress,
          description: description ? description : jobOwnerData.description,
          password: password ? password : jobOwnerData.password,
          image: url,
        }
      );

      console.log(response);
      setShowPopup(true);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Assuming you have a route named '/freelancer/:id'
    router.push(`/jobownerProfile/${jobOwnerData.id}`);
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
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
     
      {showPopup && (
        <Popup onClose={handleClosePopup} onConfirm={handleClosePopup} />
      )}
      <div className="bg-[#ffffff] flex flex-row justify-center w-full">
        <div className="bg-[#ffffff] overflow-hidden w-[1440px] h-[1024px] relative">
          <div className="absolute w-[1578px] h-[449px] top-[577px] left-[-69px]">
            <div className="w-[1044px] h-[88px] left-[339px] absolute top-0">
              <div className="w-[121px] left-[2px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#384d6c] text-[16px] tracking-[0] leading-[normal] absolute top-0">
                Email Address
              </div>
              <div className="absolute w-[497px] h-[52px] top-[36px] left-0 bg-[#ffffff] rounded-[8px] border border-solid border-gray-300">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=" absolute w-[28px] h-[28px] top-[10px] left-[6px]"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <input
                    type="email"
                    className="focus:outline-none appearance-none bg-transparent w-full h-full px-10 "
                    placeholder="Enter Email Address "
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="absolute w-[131px] top-0 left-[543px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#384d6c] text-[16px] tracking-[0] leading-[normal]">
                Phone Number
              </div>
              <div className="absolute w-[497px] h-[52px] top-[36px] left-[543px] bg-[#ffffff] rounded-[8px] border border-solid border-gray-300">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=" absolute w-[28px] h-[28px] top-[10px] left-[1px]"
                  >
                    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                    <path
                      fillRule="evenodd"
                      d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="tel"
                    className="focus:outline-none appearance-none bg-transparent w-full h-full px-10"
                    placeholder="Enter Phone Number"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1011px] h-[169px] top-[142px] left-[219px]">
            <div className="absolute w-[1011px] h-[169px] top-0 left-0">
              <p className="w-[169px] h-[20px] top-[-2px] left-[60px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-transparent text-[24px] text-center leading-[20px] absolute tracking-[0]">
                <span className="text-[#91c6ef]">Company</span>
              </p>
              <p className="w-[169px] h-[20px] top-[1px] left-[150px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-transparent text-[24px] text-center leading-[20px] absolute tracking-[0]">
                <span className="text-[#384d6c]"> Profile</span>
              </p>

              <div className="absolute w-[501px] h-[114px] top-[49px] left-[18px]">
                <div className="absolute w-[501px] h-[105px] top-0 left-0">
                  <div className="w-[179px] top-[15px] left-[170px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#384d6c] text-[20px] leading-[normal] absolute tracking-[0]">
                    Company Name
                  </div>
                  <div className="absolute w-[214px] top-[47px] left-[170px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#384d6c] text-[20px] tracking-[0] leading-[normal]">
                    {jobOwnerData.name}
                  </div>

                  <div className="absolute w-[344px] top-[82px] left-[170px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-gray-500 text-[16px] tracking-[0] leading-[normal]">
                    {jobOwnerData.adress}
                  </div>
                </div>
                <img
                  className="absolute rounded-3xl w-[127px] h-[134px] top-[-5px] left-[27px] bg-[url(/sdfsdfsdffsdfsdfdsfdsfsdfsdfds-1.png)] bg-cover bg-[50%_50%]"
                  src={url} alt=""
                />
              </div>
              <div className="flex w-[408px] h-[66px] items-center gap-[56px] absolute top-[103px] left-[601px]">
                <button
                  className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[#267296] rounded-[8px] overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#267296] items-center justify-center mr-0 py-[8px] transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[white] hover:scale-110 relative bg-[#267296] rounded-[8px] overflow-hidden border border-solid "
                  onClick={() => document.getElementById("photoInput")?.click()}
                >
                  Upload New Photo
                </button>
                <input
                  id="photoInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => uploadImage(e)}
                />
                <button
                  className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[white] rounded-[8px] overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#267296] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[white] items-center justify-center mr-0 py-[8px] transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#267296] hover:scale-110 relative bg-[#267296] rounded-[8px] overflow-hidden border border-solid "
                  onClick={handleUpdate}
                >
                  Save Update
                </button>
              </div>
            </div>
          </div>
          <div className="absolute w-[1052px] h-[192px] top-[333px] left-[272px]">
            <div className="absolute w-[154px] top-0 left-[2px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#384d6c] text-[16px] tracking-[0] leading-[normal]">
              Company Name
            </div>
            <div className="absolute w-[497px] h-[52px] top-[36px] left-0 bg-[#ffffff] rounded-[8px] border border-solid border-gray-300">
              <div className="absolute top-[15px] left-[18px] [font-family:'Montserrat-Italic',Helvetica] font-normal italic text-[#000000] text-[16px] tracking-[0] leading-[normal]">
                <input
                  type="text"
                  className="focus:outline-none appearance-none bg-transparent w-full h-full px-6"
                  placeholder="Enter Company Name"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="absolute w-[121px] top-0 left-[543px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#384d6c] text-[16px] tracking-[0] leading-[normal]">
              Address
            </div>
            <div className="absolute w-[497px] h-[52px] top-[36px] left-[543px] bg-[#ffffff] rounded-[8px] border border-solid border-gray-300">
              <div className="absolute top-[15px] left-[22px] [font-family:'Montserrat-Italic',Helvetica] font-normal italic text-[#000000] text-[16px] tracking-[0] leading-[normal]">
                <input
                  type="text"
                  className="focus:outline-none appearance-none bg-transparent w-full h-full px-6"
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setAdress(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="absolute w-[121px] top-[104px] left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#384d6c] text-[16px] tracking-[0] leading-[normal]">
              Description
            </div>
            <div className="absolute w-[497px] h-[52px] top-[140px] left-[2px] bg-[#ffffff] rounded-[8px] border border-solid border-gray-300">
              <p className="absolute top-[15px] left-[16px] [font-family:'Montserrat-Italic',Helvetica] font-normal italic text-[#000000] text-[16px] tracking-[0] leading-[normal]">
                <input
                  type="text"
                  className="focus:outline-none appearance-none bg-transparent w-full h-full px-6"
                  placeholder="Enter Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </p>
            </div>
            <div className="absolute w-[121px] top-[104px] left-[542px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#384d6c] text-[16px] tracking-[0] leading-[normal]">
              Password
            </div>
            <div className="absolute w-[497px] h-[52px] top-[140px] left-[543px] bg-[#ffffff] rounded-[8px] border border-solid border-gray-300">
              <div className="absolute top-[15px] left-[22px] [font-family:'Montserrat-Italic',Helvetica] font-normal italic text-[#000000] text-[16px] tracking-[0] leading-[normal]">
                <input
                  type="password"
                  className="focus:outline-none appearance-none bg-transparent w-full h-full px-6"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditJobOwnerProfile;
