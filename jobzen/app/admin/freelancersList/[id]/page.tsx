"use client";
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import SideNavBar from '../../sideNavBar/page';
import { MdKeyboardArrowUp } from 'react-icons/md';

interface Freelancer {
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


const Freelancer = ()=> {
  const [free, setfree] = useState<Freelancer>({
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [rowCount, setRowCount] = useState<number>(0);

  useEffect(() => {
        var currentUrl=window.location.href
        var ind=currentUrl.split("/")
        var index=ind[ind.length-1];

        const fetchFreelancer = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/freelancer/${index}`);
                setfree(response.data);
            } catch (error) {
                console.error('Error fetching freelancer data:', error);
            }
        };
        fetchFreelancer();
  }, [free.id]);

  const handleScrollUp = () => {
    setRowCount((prevCount) => prevCount + 1);
  };

  return (
      <div className="p-4 sm:ml-64">
        <SideNavBar />
        {/* First row with three columns */}
        <div className="grid grid-cols-3 gap-4 mb-10 mt-10">
        </div>

        {/* Freelancer details*/}
        <div className=" font-sans">
          <div className="container mx-auto py-8 px-4 mt-4" ref={containerRef}>
              <div className="bg-white p-6 rounded-lg mb-4 shadow-lg">
              {rowCount >= 10 && (
                <div
                className="fixed bottom-4 right-4 w-8 h-8 border-black hover:border-[#267296] hover:bg-white bg-[#267296] active:bg-[#2e667f] rounded-full border-4  text-black flex items-center justify-center transition duration-200"
                 onClick={() => {
                 setRowCount(0);
                 containerRef.current?.scrollIntoView({ behavior: 'smooth' });
                   }}>
                 <MdKeyboardArrowUp className="text-black hover:border-[#267296] hover:bg-white hover:text-[#267296] text-2xl" />
                 </div> )}
                <img
                  className="w-26 h-22 rounded-full max-w-[25%] mb-6"
                  src={free.image}
                  alt="Freelancer image"
                />
                <h1 className="text-4xl font-bold">{free.name}</h1>
                    <p className="text-gray-600 text-2xl">{free.jobtitle}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">About Freelancer</h2>
                    <p className="text-gray-700 text-2xl">{free.aboutMe}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Skills</h2>
                    <ul className="list-disc text-2xl list-inside text-gray-700">
                      {free.skills.split(',').map((skill, index) => (
                        <li key={index}>{skill.trim()}</li>
                      ))}
                    </ul>
                    <hr className="my-8" />
                    <h2 className="text-3xl font-semibold mb-6">Experience</h2>
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold">{free.jobtitle}</h3>
                      <p className="text-gray-700 text-xl">{free.experience}</p>
                      <hr className="my-8" />
                    </div>
                <h2 className="text-3xl font-semibold mb-6">Contact information</h2>
                <ul className="list-disc text-2xl mb-6 list-inside text-gray-700">
                  <li>Email: {free.email}</li>
                  <li>Phone: {free.phone}</li>
                  <li>Address: {free.adress}</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
  );
};

export default Freelancer;
