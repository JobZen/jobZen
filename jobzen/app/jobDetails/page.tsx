import Link from 'next/link';
import Navbar from '../navBar/page';
import Footer from '../footer/page';
import Update from './updateJobDetails/page';
import Message from './messageJobDetails/page'


const JobDetails = () => {

  return (
    <div className='bg-white '>
      <Navbar />
      <div className='bg-white flex flex-col justify-center items-center h-screen'>
        <div className="container mx-auto py-16 pt-[5rem] items-center mr-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 px-4 ">
            <div className="bg-white">
                    <br/>
              <p className='text-Mona'>Job Details</p>
              <h2 className="text-4xl font-lato font-semibold mb-4">Illustrator (Full-Time/Part-Time)</h2>
              <h2 className="text-xl font-bold mt-6 mb-4">Rate</h2>
              <p className="text-[#959595] text-xl">5 TND - 10 TND per hour (Negotiable based on experience)</p>
              <h2 className="text-xl font-bold mt-6 mb-4">About the project</h2>
              <p className="text-gray-700">We're diving into an exciting venture with the BorpaToken project, which revolves around the infamous Borpa meme. This project is all about blending two dynamic themes - Cromagnon and Futuristic - to create a vivid and engaging narrative. The Borpa mascot is central to our project; we integrate it into the crypto culture.</p>
              <h2 className="text-xl font-bold mt-6 mb-4">Your Role</h2>
              <div className="mb-6">
                <p className="mt-2">We're looking for someone who can capture the essence of the 'wojak' aesthetic vibe, adding a unique twist that aligns with our project's vision. Your illustrations will not only tell the story of Borpa but also captivate and engage our growing community.</p>
              </div>
              <h2 className="text-xl font-bold mt-6 mb-4">Skills & Qualifications:</h2>
              <div className="mb-6 pl-6">
                <ul className="list-disc">
                  <li className="mt-2">Proficiency in creating engaging, narrative-driven illustrations.</li>
                  <li className="mt-2">Ability to adapt and create within the 'wojak' aesthetic style.</li>
                  <li className="mt-2">Experience in crafting visuals for social media platforms.</li>
                  <li className="mt-2">Strong collaborative skills to work alongside our UI/UX designers and illustrators.</li>
                  <li className="mt-2">Deep knowledge of the internet or crypto culture, we are all about memes.</li>
                  <li className="mt-2">Knowledge or interest in motion design would be a significant plus.</li>
                </ul>
              </div>
              <b className='ml-1 font-jura text-2xl font-bold text-red-500'>Contact us to apply</b>
            </div>
            
            <div className="ml-1 flex items-center p-8">
              <div className="flex p-12 ">
                <div className="bg-[#D3E8F8] shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img src="https://cdn.dribbble.com/userupload/12278466/file/original-22c066a12054d052be813aed19ab83fd.com?resize=96x96" className="w-32 h-32 rounded-full mb-4 shrink-0" alt="CompanyProfile" />
                    <h1 className="text-xl font-bold">Flux Outdoor</h1>
                    <Link href={'/jobownerProfile'}>
                      <p className="font-jura text-[#267296] hover:text-base-[#267296] hover:font-semibold font-jura hover:underline">View Company's Profile</p>
                    </Link>
                    <div className="mt-6 flex gap-4">
                      <Link href={'/jobDetails/messageJobDetails'}>
                        <button className="bg-[#267296] hover:bg-[#195571] text-white py-2 px-4 rounded">Message</button>
                      </Link>
                      <Link href={'/jobDetails/updateJobDetails'}>
                        <button className="text-[#267296] hover:font-bold bg-white border-[#267296] py-2 px-4 rounded">
                          Update details
                          </button>
                          </Link>
                    </div>
                  </div>
                  <hr className="my-6 border-t border-[#267296]" />
                  <div className="flex flex-col">
                  <p className="font-jura text-[#267296]">Job title:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">Illustrator (Full-Time/Part-Time)</li>
                    </ul>
                    <br/>
                    <p className="font-jura text-[#267296] ">Location:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">London, United Kingdoms</li>
                    </ul>
                    <br/>
                    <p className="font-jura text-[#267296] ">Date posted:</p>
                    <ul>
                      <li className="mb-2 font-bold font-lato">Jan 03 , 2024</li>
                    </ul>
                    <br/>
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
