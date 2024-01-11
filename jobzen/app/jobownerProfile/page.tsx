import React from "react";
import Navbar from "../navBar/page";
import Footer from "../footer/page";
import Link from "next/link";

const JobOwnerProfile: React.FC = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1440px] h-[800px] relative">
          <div className="absolute w-[1549px] h-[836px] top-[188px] left-[-109px]">
            <div className="absolute w-[1549px] h-[835px] top-0 left-0">
              <div className="absolute w-[272px] h-[562px] top-0 left-[160px] bg-[#a1e1fd4a] rounded-[42px] shadow-[0px_4px_4px_#00000040]" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-[17px] h-[17px] mr-8 top-[356px] left-[215px]"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>

              <div className="w-[164px] top-[356px] left-[236px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] leading-[normal] absolute tracking-[0]">
                Company Adress:
              </div>
              <div className="absolute w-[114px] top-[290px] left-[237px] [font-family:'Lato-Medium',Helvetica] font-medium text-[#384d6c] text-[14px] tracking-[0] leading-[normal]">
                {/* add .map method here */}
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>
              <div className="absolute w-[61px] top-[260px] left-[261px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
                Review:
              </div>

              <img
                className="absolute w-[127px] h-[134px] top-[30px] left-[229px] bg-[url(/sdfsdfsdffsdfsdfdsfdsfsdfsdfds-1.png)] bg-cover bg-[50%_50%]"
                src="https://icon-library.com/images/node-js-icon/node-js-icon-2.jpg"
              />
              <div className="absolute w-[133px] h-[40px] top-[203px] left-[226px] bg-[#267296] rounded-[15px] shadow-[0px_4px_4px_#00000040]" />
              <Link href={"/jobownerProfile/editjobownerProfile"}>
                <button className="absolute w-[120px] top-[210px] left-[236px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-white text-[24px] text-center tracking-[0] leading-[normal]">
                  Edit Profile
                </button>
              </Link>

              <div className="absolute w-[239px] h-[152px] top-[388px] left-[174px] bg-[#384d6c] rounded-[15px]" />
              <img
                className="absolute w-[220px] h-[137px] top-[395px] left-[184px] object-cover"
                alt="Map"
                src="map-1.png"
              />
            </div>
            <div className="absolute w-[85px] top-[108px] left-[522px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
              Flux
            </div>
            <a
              className="absolute w-[275px] top-[284px] left-[529px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal] underline"
              href="mailto:rahma.aliani@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              rahma.aliani@gmail.com
            </a>
            <p className="absolute w-[531px] top-[196px] left-[525px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
              this is a campany specialist in software devolopement
            </p>
            <div className="absolute w-[531px] top-[378px] left-[525px] [font-family:'Jura-Bold',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
              +216-71-717-777
            </div>

            <div className="w-[172px] h-[20px] top-[68px] left-[503px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-black text-[20px] text-center leading-[20px] whitespace-nowrap absolute tracking-[0]">
              Company Name
            </div>
            <div className="absolute w-[172px] h-[20px] top-[248px] left-[529px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
              Email
            </div>
            <div className="absolute w-[172px] h-[20px] top-[338px] left-[529px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
              Phone Number:
            </div>
            <div className="absolute w-[172px] h-[20px] top-[158px] left-[524px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
              Description
            </div>
            <img
              className="w-[146px] top-0 left-[519px] absolute h-px object-cover"
              alt="Vector"
              src="vector-75.svg"
            />
          </div>
          <div className="absolute w-[1503px] h-[139px] top-0 left-0"></div>
          <p className="w-[172px] h-[20px] top-[151px] left-[395px] [font-family:'Jockey_One-Regular',Helvetica] font-normal text-transparent text-[24px] text-center leading-[20px] whitespace-nowrap absolute tracking-[0]">
            <span className="text-[#91c6ef]">Company</span>
            <span className="text-[#384d6c]"> Profile</span>
          </p>
          <div className="absolute w-[105px] h-[28px] top-[140px] left-[1226px]">
            <div className="absolute w-[105px] h-[28px] top-0 left-0">
              <img
                className="w-[105px] top-[26px] left-0 absolute h-px object-cover"
                alt="Vector"
                src="vector-76.svg"
              />
              <Link href={"/jobDetails/messageJobDetails"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute w-[21px] h-[23px] top-[0px] left-[30px]"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </Link>
            </div>
            <Link href={"/login"}>
              <img
                className="absolute w-[21px] h-[19px] top-[0px] left-[60px]"
                alt="Shutdown"
                aria-label="log out"
                src="https://www.svgrepo.com/show/75291/shut-down.svg"
              />
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                clip-rule="evenodd"
              />
            </svg>
            <Link href="/jobDetails/createJobDetails">
              <button className="flex w-[176px] h-[56px] items-center justify-center mr-0 py-[8px] relative bg-[#267296] rounded-[8px] overflow-hidden border border-solid">
                <div className="relative w-fit [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap">
                  Post a job offer
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default JobOwnerProfile;
