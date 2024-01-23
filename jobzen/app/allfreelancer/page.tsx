"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Nav from '../navjobowner/page';
import Footer from '../footer/page';
import Link from 'next/link';


interface Freelancer{
    id: Number,
    name: string,
    email: string,
    password: string,
    adress: string,
    phone: Number,
    image: Number,
    skills: string,
    aboutMe: string,
    experience: string,
    jobtitle: string,
}

function page() {
    const [freelancer,setFreelancer]=useState<Freelancer[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        axios
          .get('http://localhost:3000/freelancer/')
          .then((res) => {
            const Freelancer: Freelancer[] = res.data;
            setFreelancer(Freelancer);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };

      const filteredFreelancer = freelancer.filter((freelancer) =>
    freelancer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Nav/>
        <div className='bg-[#172554] h-[10cm] '>
      <div className=' ml-[16cm]'>
        <h1 className='text-8xl text-[#172554]'>.</h1>
        <div className='flex space-x-4 ml-[1cm]'>
        <h1 className='text-white font-BlackOps text-4xl mb-[1cm]'>FIND THE BEST IT  </h1>
        <h1 className='text-bluefateh font-BlackOps text-4xl underline mb-[1cm]'> TALENT</h1>
        </div>
        <h1 className='text-xl text-grisss mb-[1cm] ml-[6cm]'>Find talent </h1>
  
        <div className="w-[13cm] ml-[1cm] mt-[1cm] flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Search for company"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>
      
  
  </div>
      </div>
      <div className='flex justify-between ml-[20%] mr-[10%] mt-[2cm] grid grid-cols-2 gap-[3cm]'>
  {filteredFreelancer.map((ele, i) => {
    return (
      <div key={i} className="max-w-[400px]">
   
          <Link href={`/freelancerDetails/${ele.id}`}>
  <div className="profile-card w-full rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
    <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
      
        <img
          src={ele.image} 
          alt="Freelancer Avatar"
          className="w-[6cm] h-[5cm] border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
        />
    
    </div>
    <div className="headings *:text-center *:leading-4">
      <p className="text-4xl font-serif font-semibold text-[#434955] mb-[15px]">{ele.name}</p>
      <p className="text-xl font-semibold text-[#434955] mb-[30px]">{ele.jobtitle}</p>
    </div>
    <div className="w-full items-center justify-center flex">
      <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
        <li>
        <svg
    id="phone"
    viewBox="0 0 24 24"
    className="fill-stone-700 group-hover:fill-[#172554]"
    height="15"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
    ></path>
  </svg>
          <p className='text-xl'>{ele.phone}</p>
        </li>
        <li>
          <svg
            className="fill-stone-700 group-hover:fill-[#172554]"
            height="15"
            width="15"
            id="mail"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" fill="#231f20"></path>
            <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" fill="#231f20"></path>
          </svg>
          <p className='text-xl'>{ele.email}</p>
        </li>
        <li>
          <svg
            id="map"
            viewBox="0 0 16 16"
            className="fill-stone-700 group-hover:fill-[#172554]"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#444"></path>
          </svg>
          <p className='text-xl'>{ele.adress}</p>
        </li>
      </ul>
    </div>
    <hr
      className="w-full group-hover:h-5 h-3 bg-[#172554] group-hover:transition-all group-hover:duration-300 transition-all duration-300"
    />
  </div>
  </Link>
</div>
      
    );
  })}
</div>

      <Footer/>
    </div>
  )
}

export default page