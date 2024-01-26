
"use client"
import React, { useState } from "react";
import axios from 'axios';  
import Navbar from "../aboutafterloginjobowner/page";
import Link from 'next/link';

const CreateReview= () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");


  
  const saveReview = async () => {
    try {
      const response = await axios.post('http://localhost:3000/review/review', {
        // freelancerId: "1",
        // ownerId: "1",
        rating,
        name:name,
        description: comment,  
      });
      console.log(response);
      
  
      console.log("Review saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving review:", error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="container my-20 mx-auto md:px-6 flex items-center justify-center">
        <section className="mb-32 text-center flex items-center justify-centert">
          <div className="py-12 md:px-12 ">
            <div className="container mx-auto xl:px-32">
              <div className="flex items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_5px_20px_-1px_rgba(0,0,0,0.07),0_12px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px]">
                    <div className="md:mb-12 lg:mb-0 mt-4 flex items-center justify-center">
                      <img
                        src="https://shorturl.at/bkuJT"
                        className="w-32 rounded-lg shadow-lg dark:shadow-black/20"
                        alt="image"
                      />
                    </div>
                    <h2 className="mt-4 mb-1 text-3xl font-bold text-primary">
                      Flux Outdoor
                    </h2>
                    <p className="mb-4 font-semibold text-[#267296]">
                      Data · Media and Streaming · Marketing and Advertising
                    </p>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Write your review on Freelancer works here..."
                      className="mb-6 h-32 p-2 border border-gray-300 rounded-md w-full"
                    />
                    {/* Star rating input */}
                    <div className="flex items-center mb-6 justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className={`w-5 h-5 text-primary ${
                            star <= (rating || 0) ? "text-yellow-500" : "text-gray-300"
                          } cursor-pointer`}
                          onClick={() => setRating(star)}
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="md:mb-12 lg:mb-0 mt-8 gap-4 space-x-4">
                      <button onClick={saveReview} className="bg-[#267296] hover:bg-[#195571] text-white py-2 px-4 rounded">
                        Save Review
                      </button>
                      <button className="text-[#267296] hover:font-bold bg-white border border-[#267296] py-2 px-4 rounded">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateReview;
