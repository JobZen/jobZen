"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from '../../navFreelancer/page';
import Footer from '../../footer/page';

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
    const[jobbycateg,setJobbycateg]=useState<Job[]>([])

    useEffect(() => {
        var currentUrl = window.location.href;
        var ind=currentUrl.split("/")
        var index=ind[ind.length-1]
        axios
        .get(`http://localhost:3000/job/jobbycategory/${index}`)
        .then((res) => {
          const allJobs: Job[] = res.data;
          setJobbycateg(allJobs);
        })
        .catch((err) => {
          console.log(err);
        });
      }, [window.location.href]);
  return (
    <div>
                <Nav/>
     
        <div className='grid grid-cols-2 gap-[3cm] mt-[1cm] mb-[1cm] ml-[15%] mr-[10%]'>
        {jobbycateg.map((element, i) => (
          <div className="w-[12cm] h-60 flex flex-col justify-center gap-4 bg-neutral-50 rounded-lg shadow p-4 hover:scale-110">
          <div className="flex gap-4">
            <img className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg" src={element.image} />
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
          <button className=" hover:bg-indigo-700 bg-indigo-500 font-bold text-neutral-50 rounded p-2">
            APPLY
          </button>
        </div>
        
        ))}
      </div>
<Footer/>
    </div>
  )
}

export default page