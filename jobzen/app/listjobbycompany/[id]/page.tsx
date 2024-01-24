"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Footer from '../../footer/page';
import Navbar from '../../navFreelancer/page';
import Navbar2 from '@/app/navjobowner/page';
import Cookies from 'js-cookie';


interface Job {
  id:number,
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
}
function page() {
const[jobbycompany,setJobcompany]=useState<Job[]>([])
const role=Cookies.get("role")
  
useEffect(() => {
  var currentUrl = window.location.href;
    var ind = currentUrl.split("/");
    var index = ind[ind.length - 1];
    axios
      .get(`http://localhost:3000/job/jobbycompany/${index}`)
      .then((res) => {
        const Jobbycompany: Job[] = res.data;
        setJobcompany(Jobbycompany);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {role==="freelancer"?<Navbar/>:<Navbar2/>}
            <div className='grid grid-cols-2 gap-[3cm] mt-[1cm] mb-[1cm] ml-[15%] mr-[10%]'>
        {jobbycompany.map((element, i) => (
           <Link href={`/jobdetails2/${element.id}`} key={element.id}>
          <div className="w-[12cm] h-60 flex flex-col justify-center gap-4 bg-neutral-50 rounded-lg shadow p-4 hover:scale-110">
          <div className="flex gap-4">
            <img className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg" alt="" src={element.image} />
            <div className="flex flex-col">
              <p className="text-xl font-bold">{element.jobtitle}</p>
              <span className="font-bold text-neutral-700 italic"></span>
              <p className="text-base line-clamp-3">
                {element.role}
              </p>
              <p className="text-lg">{element.budget} TND /hr</p>
              <p className="text-sm">posted at: {(element.createdAt).split('T')[0]}</p>
            </div>
          </div>
          
        </div>

        </Link>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default page