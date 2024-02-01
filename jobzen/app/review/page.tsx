"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../navFreelancer/page";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "../footer/page";

const ReviewFreelancer = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const id = Cookies.get("id");
  useEffect(() => {
    axios
      .get("http://localhost:3000/review/job/review/" + id)
      .then((res) => {
        setReviews(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-24 mx-auto md:px-6 mb-[2cm] mt-[270px]">
        <section className="mb-32 text-center lg:text-left">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
            <div className="flex items-center lg:grid-cols-3"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-80 ">
                  {reviews.map((review, i) => (
                    <div
                      key={i}
                      className="relative w-[350px] z-9 bg-[#a1e1fd4a] ml-[-100px] block rounded-[42px] bg-opacity-80 backdrop-blur-md px-6 py-12 shadow-xl mt-[-8cm]"
                      style={{ overflow: "auto" }}
                    >
                      <div className="md:mb-8 lg:mb-0 mt-4 w-[100%]">
                        
                        <img
                          src={review.jobowner.image}
                          className="w-40 h-40 rounded-[35px] object-cover shadow-lg dark:shadow-black/20"
                          alt="image"
                        />
                      </div>
                      <div className="w-full max-w-[12cm]">
                        <h2 className="mt-4 mb-2 text-2xl font-bold text-primary">
                          {review.jobowner.name}
                        </h2>
                        <p className="mb-2 font-semibold text-[#267296]">
                          {review.freelancer.jobtitle}
                        </p>
                        <div className="mb-4 text-gray-800 overflow-wrap-break-word overflow-hidden">
                          {review.description}
                        </div>
                        <p className="mb-2 font-semibold text-[#267296]">
                          {review.createdAt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default ReviewFreelancer;
