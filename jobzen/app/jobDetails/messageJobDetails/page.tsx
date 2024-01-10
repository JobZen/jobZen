'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import Navbar from '../../navBar/page';
import Footer from '../../footer/page';

const MessageJobDetails = () => {
  return (
    <div>
        <Navbar />
    <div className="messanger p-4 bg-white h-screen overflow-hidden">
      <div className="flex">
        <div className="w-2/6 pt-3 bg-white border-r border-gray-200">
          <div className="search-box h-10 text-gray-500">
            <div className="flex justify-between px-5 border-b border-gray-200 pb-4">
              <form className="flex justify-center items-center">
                <i className="fa fa-search pr-2"></i>
                <input type="text" name="search" id="search" placeholder="Search" className="font-light focus:outline-none" />
              </form>
              <div>
              <button className="relative" title="Add Comment">
                <i className="fa fa-comment"></i>
                <i className="fa fa-plus absolute -top-2 text-sm"></i>
                </button>

              </div>
            </div>
          </div>

          <div className="user-list overflow-y-auto h-screen bg-white">
            {/* User list items */}
            {/* Replace the hardcoded user items with your dynamic user list */}
          </div>
        </div>

        <div className="w-4/6">
          <div className="bg-white user-info-header px-5 py-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" width="40" alt="User Avatar" />
                <h3 className="text-gray-400 text-md pl-4">Lupe Fiasco</h3>
              </div>
              <div>
                <i className="fa fa-comment text-purple-300"></i>
                <i className="fa fa-video text-gray-200 ml-3"></i>
                <i className="fa fa-phone text-gray-200 ml-3"></i>
              </div>
            </div>
          </div>

          <div className="message-area mt-4 px-4">
            {/* Chat messages */}
            {/* Replace the hardcoded chat messages with your dynamic messages */}
          </div>

          <div className="bg-gray-100 fixed bottom-0 w-full pl-4">
            <textarea className="w-full bg-gray-100 pt-3 h-12 focus:outline-none font-light" placeholder="Write a message"></textarea>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
 </div>
  );
};

export default MessageJobDetails;
