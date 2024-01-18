"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import SideNavBar from '../../sideNavBar/page';

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

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="text-yellow-500">
          &#9733;
        </span>
      ))}
      {halfStar && <span className="text-yellow-500">&#9733;</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-500">
          &#9733;
        </span>
      ))}
    </div>
  );
};

const UserInfo = () => {
  const[id,setId]=useState(0)
  const [user, setUser] = useState<Freelancer | JobOwner | null>(null);
  const router= useRouter();

  useEffect(() => {
  var currentUrl = window.location.href;
  var ind=currentUrl.split("/")
  console.log(ind);

  var index=parseInt(ind[ind.length-1])
  setId(index)
    const fetchUser = async () => {
      axios.all([
        axios.get(`http://localhost:3000/jobOwner/job-owner/${index}`),
        axios.get(`http://localhost:3000/freelancer/${index}`),
      ])
      .then (axios.spread((freelancerRes,jobownerRes)=>{
        setUser(freelancerRes.data);
        setUser(jobownerRes.data)
      }))
     .catch((error)=>{
      console.error(error)
     })
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="p-4 sm:ml-64 ">
        <SideNavBar />
        {/* First row with three columns */}
        <div className="grid grid-cols-3 gap-4 mb-10 mt-10">
        </div>

        {/* User details*/}
        <div className=" font-sans">
          <div className="container mx-auto py-8 px-4 ">
            {user && (
              <div className="bg-white p-6 rounded-[25px] shadow-lg">
                <img
                  className="w-20 h-20 rounded-full"
                  src={user.image}
                  alt="user image"
                />
                <h1 className="text-3xl font-semibold">{user.name}</h1>
                {('jobtitle' in user) && (
                  <>
                    <p className="text-gray-600">{user.jobtitle}</p>
                    <hr className="my-4" />

                    <h2 className="text-xl font-semibold mb-2">About Freelancer</h2>
                    <p className="text-gray-700">{user.aboutMe}</p>

                    <h2 className="text-xl font-semibold mt-4 mb-2">Skills</h2>
                    <ul className="list-disc list-inside text-gray-700">
                      {user.skills.split(',').map((skill, index) => (
                        <li key={index}>{skill.trim()}</li>
                      ))}
                    </ul>
                    <h2 className="text-xl font-semibold mt-4 mb-2">Experience</h2>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">{user.jobtitle}</h3>
                      <p className="text-gray-700">{user.experience}</p>
                    </div>
                  </>
                )}
                {('description' in user) && (
                  <>
                    <h2 className="text-xl font-semibold mb-2">Company Bio</h2>
                    <p className="text-gray-700">{user.description}</p>

                    <h2 className="text-xl font-semibold mb-2">Company Rating</h2>
                    <StarRating rating={user.rating} />
                  </>
                )}

                <h2 className="text-xl font-semibold mt-4 mb-2">Contact information</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Email: {user.email}</li>
                  <li>Phone: {user.phone}</li>
                  <li>Address: {user.adress}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
