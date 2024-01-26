"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "../../navFreelancer/page";
import Footer from "../../footer/page";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import JobLocation from "../../map/page";

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

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-yellow-500 text-3xl">
          &#9733;
        </span>
      ))}
      {halfStar && <span className="text-yellow-500 text-3xl">&#9733;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-500 text-3xl">
          &#9733;
        </span>
      ))}
    </div>
  );
};

const JobOwnerProfile: React.FC = (): JSX.Element => {
  const [id, setId] = useState();
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

  useEffect(() => {
    var currentUrl = window.location.href;
    var ind = currentUrl.split("/");
    var index = ind[ind.length - 1];

    axios
      .get(`http://localhost:3000/jobOwner/job-owner/${index}`)
      .then((res) => {
        const jobOwner: JobOwner = res.data;
        setJobOwnerData(jobOwner);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (jobOwnerData?.adress) {
      const mapContainer = document.getElementById("map");
      if (!mapContainer) return;

      const map = L.map(mapContainer).setView(
        [
          parseFloat(jobOwnerData.adress.split(",")[0]),
          parseFloat(jobOwnerData.adress.split(",")[1]),
        ],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1440px] h-[800px] relative">
          <div className="absolute w-[1549px] h-[836px] top-[188px] left-[-109px]">
            <div className="absolute w-[1549px] h-[835px] top-0 left-0">
              <div className="absolute w-[272px] h-[562px] top-0 left-[160px] bg-[#a1e1fd4a] rounded-[42px] shadow-[0px_4px_4px_#00000040]" />
              <img
                className="rounded-3xl absolute w-[127px] h-[134px] top-[30px] left-[230px] bg-[url(/sdfsdfsdffsdfsdfdsfdsfsdfsdfds-1.png)] bg-cover bg-[50%_50%]"
                src={jobOwnerData.image}
                alt="Company photo or profile"
              />
              <div className="absolute w-[475px] h-[562px] top-[0px] left-[1070px]  bg-[black] rounded-[42px] overflow-hidden">
                <JobLocation jobOwnerAddress={jobOwnerData.adress} />
              </div>
              <Link href={`/listjobbycompany2/${jobOwnerData.id}`}>
                <button className="flex w-[176px] h-[56px] mt-[208px] ml-[208px] items-center justify-center px-[2px] py-[6px] relative bg-[#267296] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#267296] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[white] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] ">
                  Job List
                </button>
              </Link>
              <div className="absolute w-[114px] top-[290px] left-[233px]">
                <div className="flex items-center">
                  <StarRating rating={jobOwnerData.rating} />
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-[17px] h-[17px] mr-8 top-[360px] left-[214px]"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-[164px] top-[360px] left-[235px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] leading-[normal] absolute tracking-[0]">
                Address: <br />
                {jobOwnerData.adress}
              </div>

              <div className="absolute w-[5000px] top-[107px] left-[524px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
                {jobOwnerData.name}
              </div>
              <a
                className="absolute w-[275px] top-[342px] left-[528px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] underline"
                href={`mailto:${jobOwnerData.email}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {jobOwnerData.email}
              </a>
              <p className="absolute w-[531px] top-[196px] left-[526px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
                {jobOwnerData.description}
              </p>
              <div className="absolute w-[530px] top-[434px] left-[527px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
                {jobOwnerData.phone}
              </div>
              <div className="absolute w-[172px] h-[20px] top-[60px] left-[510px] [font-family:'Jockey_One-Regular',Helvetica] font-normal  text-[#91c6ef] text-[20px] text-center leading-[20px] whitespace-nowrap tracking-[0]">
                Company Name:
              </div>
              <div className="absolute w-[172px] h-[20px] top-[298px] left-[526px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-[#91c6ef] text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                Email:
              </div>
              <div className="absolute w-[172px] h-[20px] top-[386px] left-[527px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-[#91c6ef] text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                Phone Number:
              </div>
              <div className="absolute w-[172px] h-[20px] top-[151px] left-[524px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-[#91c6ef] text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
                Description:
              </div>
            </div>
            <div className="absolute w-[1503px] h-[139px] top-0 left-0"></div>
            <p className="w-[172px] h-[20px] top-[10px] left-[500px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-transparent text-[24px] text-center leading-[20px] whitespace-nowrap absolute tracking-[0]">
              <span className="text-[#91c6ef]">Company</span>
              <span className="text-[#384d6c]"> Profile</span>
            </p>
            <div className="absolute w-[105px] h-[28px] top-[-20px] left-[1226px]">
              <div className="absolute w-[105px] h-[28px] top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobOwnerProfile;
