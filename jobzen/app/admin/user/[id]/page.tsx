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
    var ind = currentUrl.split("/");
    console.log(ind);
  
    var index = parseInt(ind[ind.length - 1]);
    setId(index);
  
    const fetchUser = async () => {
      try {
        if (index ) {
          const freelancerRes = await axios.get(`http://localhost:3000/freelancer/${index}`);
          
          if (freelancerRes.data.jobtitle !== undefined) {
            setUser(freelancerRes.data);
            return; // Exit early after setting the user
          }
        }
  
        const jobownerRes = await axios.get(`http://localhost:3000/jobOwner/job-owner/${index}`);
  
        if (jobownerRes.data.description !== undefined) {
          setUser(jobownerRes.data);
        } else {
          console.error("Unexpected user type or invalid response");
        }
      } catch (error) {
        console.error(error);
      }
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
                <div className="w-30 h-30 rounded-full max-w-[25%] mb-6">
                <img
                  className="w-full h-full rounded-full"
                  src={user.image}
                  alt="user image"
                /></div>
                <h1 className="text-4xl font-bold">{user.name}</h1>
                {('jobtitle' in user) && (
                  <>
                    <p className="text-gray-600 text-2xl">{user.jobtitle}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">About Freelancer</h2>
                    <p className="text-gray-700 text-2xl">{user.aboutMe}</p>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Skills</h2>
                    <ul className="list-disc text-2xl list-inside text-gray-700">
                      {user.skills.split(',').map((skill, index) => (
                        <li key={index}>{skill.trim()}</li>
                      ))}
                    </ul>
                    <hr className="my-8" />

                    <h2 className="text-3xl font-semibold mb-6">Experience</h2>
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold">{user.jobtitle}</h3>
                      <p className="text-gray-700 text-xl">{user.experience}</p>
                      <hr className="my-8" />
                    </div>
                  </>
                )}
                {('description' in user) && (
                  <>
                    <h2 className="text-3xl font-semibold mb-6">Company Bio</h2>
                    <p className="text-gray-700 text-xl">{user.description}</p>

                    <h2 className="text-3xl font-semibold mb-6">Company Rating</h2>
                    <StarRating rating={user.rating} />
                  </>
                )}

                <h2 className="text-3xl font-semibold mb-6">Contact information</h2>
                <ul className="list-disc text-2xl list-inside text-gray-700">
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
