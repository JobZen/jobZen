"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import SideNavBar from '../sideNavBar/page';
import Search from '../../search/page'
import { MdChevronLeft} from 'react-icons/md';

interface Reclamation {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  reply?: string;
}

const Messages = () => {
  const [reclamation, setReclamation] = useState<Reclamation[]>([]);
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);
  const [mess, setMess] = useState({ id: 0, name: "",email:"", message: "", createdAt: "", reply:""});
  const [refresh , setRefresh]= useState (true)
  const [messCount,setMessCount]=useState<number>(0)
  const [replyMessage, setReplyMessage] = useState<string | undefined>();
  
useEffect(() => {
  axios.get("http://localhost:3000/contactUs/get")
    .then((response) => {
      const Data: [] = response.data;
      setReclamation(Data);
      setMessCount(Data.length);
    })
    .catch((error) => {
      console.log(error);
    });
}, [refresh]);

const handleReply = async (e: any) => {
  e.preventDefault();
  try {
    const replyData: Reclamation = {
      id: mess.id || 0,
      name: mess.name,
      email: mess.email,
      message: mess.message,
      createdAt: mess.createdAt,
      reply: replyMessage,
    };
    console.log('Reply data:', replyData);
    await axios.post<Reclamation>(`http://localhost:3000/contactUs/addReply`, replyData);
    console.log('Reply sent successfully');

    // Update the mess state with the new reply
    setMess((prevMess) => ({ ...prevMess, reply: replyMessage || "" }));

    setReplyMessage('');
    setRefresh(!refresh);
  } catch (error) {
    console.error('Error sending reply:', error);
  }
};
  

const handleDelete = async (id:number) => {
  try {
    await axios.delete(`http://localhost:3000/contactUs/delete/${id}`);
    setRefresh(!refresh);
  } catch (err) {
    console.log(err);
  }
};

const Msg = (id: number, name: string, email: string, message: string, createdAt: string) => {
  setSelectedMessageId(id);
  const selectedMessage = reclamation.find((el) => el.id === id);
  setMess((prevMess) => ({
    ...prevMess,
    id,
    name,
    email,
    message,
    createdAt,
    reply: selectedMessage?.reply || "",
  }));
};

return (
    <>
<div className="p-4 sm:ml-64">
<SideNavBar />
{/* First row with three columns */}
    <div className=" gap-4 mb-10 mt-10">
      <div className="flex flex-col items-center justify-center h-24 rounded">
        <p className="text-6xl text-black font-black">{messCount}</p>
        <p className="text-2xl text-black">Received Messages</p>
      </div>
    </div>

{/* drop navigation Action */}
<div className="relative overflow-x-auto mt-10 mb-10 mr-10">
<div className="flex gap-4 mt-4 md:space-y-0 py-4 bg-white">
            <Link href="/admin">  
          <button
          className="flex transition ease-in-out delay-150 text-gray-700 bg-gray-200 border rounded-full border-gray-700  hover:scale-110 hover:bg-gray-300 hover:font-bold hover:text-black font-medium rounded-l text-sm px-5 py-2.5 me-2 mb-2 ml-6"
          >
          <MdChevronLeft className="transition ease-in-out delay-100 text-2xl mr-8 text-gray-700 bg-gray-200 border-gray-700  hover:scale-110 hover:bg-gray-300 hover:font-bold hover:text-black font-bold"/>
          Back to Dashboard
          </button></Link>
          </div>
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <Search/>
    </div>

{/* messages starts here */}
<div className="flex-1 container mx-auto border-t-1">
        <section className="mb-32 h-full text-center lg:text-left">
            <table className="w-full">
              <tbody>
                {/* Row 1 : no operation needed */}
                <tr>
                  <td className="w-1/3  border-r-2 border-grey-300 p-2 border-b-2 border-l-2 rounded-lg">
                    <div className='flex justify-between items-center'>
                      <p className="font-bold text-s">List of Messages</p>
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
                                <a className="text-orange-600 hover:bg-red-600 hover:text-white" aria-label="delete" target="_blank" onClick={() => handleDelete(mess.id)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                    </svg></a>
                                  </div>
                       </div>
                  </td>
                          
                  {/* Right Column */}
                  <td className="w-2/3 bg-grey-50 p-2 border-grey-300 border-b-2 border-r-2">
                    {/* Row 1 Content */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                       <p className="font-medium">{mess.name}</p>
                       </div>
                        </div>
                        </td>
                      </tr>

                {/* Row 2 */}
                  <tr>
                  <td className="w-1/3 bg-grey-50 border-r-2 border-grey-300 p-2 border-b-2 border-l-2">
                    <div className="user-list bg-white">
                    {reclamation.map((el=>(
                      <div key={el.id} className="flex hover:bg-blue-100 transition px-5 py-3 hover:cursor-pointer md-4"
                      onClick={() => {Msg(el.id, el.email, el.name, el.message,el.createdAt);}}>
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
                        <div className="flex items-center">
                          <div className="pl-4 flex-grow">
                             <div className="flex items-center justify-between">
                                <h3 className="text-[#267296] font-semibold tex-md">{el.name}</h3>
                              <p className="text-xs text-gray-500">
                              {new Date(el.createdAt).toLocaleDateString([], { year: 'numeric', month: 'numeric', day: 'numeric' })}
                                   </p>
                                  </div>
                                    <p className="text-sm text-gray-400 font-light overflow-hidden h-5">
                                       {el.message}
                                       </p>
                                         </div>
                              </div>
                      </div>
                    )))}
                    </div>
                  </td>

                  {/* Right Column */}
                  <td className="w-2/3 bg-grey-50 p-2 border-b-2 border-r-2">
                    {/* Row 2 Content */}
                    {/* Chat messages */}
                    {/* message details : shows when we click: */}
                    {selectedMessageId !== null && (
                      <div className="flex flex-col mb-4 gap-4 py-4">
                               <div className="flex justify-between">
                                  <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                                    <div className="flex justify-between">
                                    <p className="text-gray-900 text-sm">{mess && mess.message}</p>
                                  </div>
                                  <p className="flex text-xs text-gray-500 justify-end">
                                {new Date(mess.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                              </p>
                          </div>
                          </div>
                          {/* reply part here: */}
                        {mess.reply && (
                      <div className="flex justify-end">
                        <div className="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                          <p className="text-white text-sm">{mess.reply}</p>
                        </div>
                      </div>
                      )}
                    </div>
                    )}
                    {/* Chat input */}
                    <div className="flex justify-center items-center w-full h-50">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg mr-4"
                        placeholder="Type a message..."
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                      />
                      <button className="bg-[#267296] hover:bg-[#1e4253] text-white font-bold py-2 px-4 rounded"
                      onClick={handleReply}>Send</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
        </section>
      </div>
    </div>
  </div>
</>

);
};

export default Messages;