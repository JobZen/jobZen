"use client"
import React, { useState, useEffect } from "react";
import Navbar from '../navBar/page';
import Footer from '../footer/page';
import Popup from "../popUpBefore/page"
import Link from "next/link";
import { useRouter } from "next/navigation";



const Contact = () => {

  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);


  const openpopup=()=>{
    setShowPopup(true);

  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    openpopup();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Assuming you have a route named '/freelancer/:id'
    router.push(`/landingPage`);
  };
  return (
    <div className="bg-white">
      <Navbar />
      {showPopup && (
        <Popup onClose={handleClosePopup} onConfirm={handleClosePopup} />
      )}
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-8"   >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Your Full Name
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border"
                placeholder="write your first and last name here"
                required
              />
              <div>
              <label  htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="jobZen@WebSite.com"
              
                required
              />
            </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave your message here..."
              ></textarea>
            </div>
            <button
        
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#267296] w-[20px] h-[40px] sm:w-fit hover:bg-white hover:text-[#267296] hover:focus:ring-4 focus:outline dark:focus:ring-primary-300 dark:bg-primary-600"
              onClick={handleSubmit}
            >
              Send message
             
             
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
