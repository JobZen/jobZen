
"use client"
import React, { useState , useEffect} from "react";
import axios from 'axios';  
import Navbar from "../../navjobowner/page";
import Footer from "../../footer/page";
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const CreateReview= () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [index , setIndex] = useState(0)
  const [freelancer, setFreelancer]=useState({})


  const route=useRouter()
const search=useSearchParams()
const params= new URLSearchParams(search.toString())


const jobbi=params.get("id")
  useEffect (()=> {
    const currentUrl = window.location.href;
    const ind = currentUrl.split("/");

    setIndex(parseInt(ind[ind.length - 1]))
  },[])


  useEffect (()=> {
    axios.get(`http://localhost:3000/freelancer/${index}`)
.then((res)=> {
  setFreelancer(res.data)
})
.catch((err)=> {console.error(err)})

  },[index])


  
  const saveReview = async () => {
    try {
      const response = await axios.post('http://localhost:3000/review/review', {
        freelancerId: index,
        ownerId: parseInt(jobbi),
      
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
                        src={freelancer?.image}
                        className="w-[200px] h-[200px] rounded-full shadow-lg dark:shadow-black/20"
                        alt="image"
                      />
                    </div>
                    <h2 className="mt-4 mb-1 text-3xl font-bold text-primary">
                    Review on {freelancer?.name}
                    </h2>
                    <p className="mb-4 font-semibold text-[#267296]">
                     {freelancer?.jobtitle}
                    </p>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Write your review on Freelancer works here..."
                      className="mb-6 h-32 p-2 border border-gray-300 rounded-md w-full"
                    />
                    
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
      <Footer/>
    </div>
  );
};

export default CreateReview;
