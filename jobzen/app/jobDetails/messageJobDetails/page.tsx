'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navBar/page';
import Footer from '../../footer/page';


interface Message {
id: number;
body: string;
freelancerId: number;
jobOwnerId: number;
Freelancer: {
  name: string;
  image:string;
};
JobOwner: {
  name: string;
  image:string;
};
}

const MessageJobDetails = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http:/localhost:3000/messages/message/details');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex-1 container mx-auto">
        <section className="mb-32 h-full text-center lg:text-left">
            <table className="w-full">
              <tbody>
                {/* Row 1 : no operation needed */}
                <tr>
                  <td className="w-1/3  border-r-2 border-grey-300 p-2 border-b-2 border-l-2 rounded-lg">
                    <div className='flex justify-between items-center'>
                      <p className="font-bold text-s">List of Messages</p>
                      <button type="button" data-te-ripple-init data-te-ripple-color="light" className="flex rounded-3xl px-6 pb-2 pt-2.5 text-s font-bold leading-normal gap-1 text-black hover:text-[#267296] border-2">
                        <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 20 20"fill="currentColor"className="w-5 h-6">
                          <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd"/>
                          </svg>Compose</button></div></td>
                          
                  {/* Right Column */}
                  <td className="w-2/3 bg-grey-50 p-2 border-grey-300 border-b-2 border-r-2">
                    {/* Row 1 Content */}
                    <div className="flex justify-between items-center">
                      {/* {messages.JobOwner.image} */}
                      <div className="flex items-center">
                      <img className="w-8 h-8 rounded-full mr-2" src="https://shorturl.at/bkuJT" alt="JobOwner Avatar" />
                       {/* {messages.JobOwner.name} */}
                       <p className="font-medium">Flux Outdoor</p>
                       </div>
                       <div className="flex gap-2">
                       <a className="text-black hover:text-orange-600"aria-label="archive"href=""target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round"stroke-linejoin="round"d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
                          </svg></a>
                              <a className="text-black hover:text-orange-600"aria-label="report"href="/contact"target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                  </svg></a>
                        <a className="text-black hover:text-orange-600"aria-label="block" target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke-width="1.5"stroke="currentColor"className="w-6 h-6">
                            <path stroke-linecap="round"stroke-linejoin="round"d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/>
                            </svg></a>
                                <a className="text-orange-600 hover:bg-red-600 hover:text-white"
                                aria-label="messages"
                                // add function here
                                // href="/jobDetails/messageJ"
                                target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                    </svg></a>
                                  </div>
                                </div>
                        </td>
                      </tr>

                {/* Row 2 */}
                  {/* {messages.map ((messages)=>( */}
                  {/* inside tr add: key={messages.id} */}
                  <tr>
                  <td className="w-1/3 bg-grey-50 border-r-2 border-grey-300 p-2 border-b-2 border-l-2">
                    <div className="user-list bg-white">
                      <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer md-4">
                        <div className="pr-4">
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="checkbox-1" className="sr-only">
                            checkbox
                          </label>
                        </div>
                        {/* User Info with Image */}
                        <div className="flex items-center">
                          {/* {messages.Freelancer.image} */}
                          <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" width="50" alt="User Icon" />
                          <div className="pl-4">
                            {/* {messages.Freelancer.map} */}
                            <h3 className="text-[#267296] tex-md">Lupe Fiasco</h3>
                            <p className="text-sm text-gray-400 font-light overflow-hidden h-5">
                            I want to apply to your last job post, I got the needed qualification
                              {/* {message.body} */}
                            </p>
                          </div>
                        </div>
                      </div>
                  {/* ))} */}
                    </div>
                  </td>

                  {/* Right Column */}
                  <td className="w-2/3 bg-grey-50 p-2 border-b-2 border-r-2">
                    {/* Row 2 Content */}
                    {/* Chat messages */}
                    <div className="flex flex-col mb-4 gap-4 py-4">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                          <p className="text-gray-900 text-sm">Hey, how are you?</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">I'm good, thanks! How about you?</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                          <p className="text-gray-900 text-sm">I'm doing great, thanks for asking!</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat input */}
                    <div className="flex justify-center items-center w-full h-50">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg mr-4"
                        placeholder="Type a message..."
                      />
                      <button className="bg-[#267296] hover:bg-[#1e4253] text-white font-bold py-2 px-4 rounded">Send</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default MessageJobDetails;
