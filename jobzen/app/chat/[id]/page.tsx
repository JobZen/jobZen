"use client";

import Cookies from "js-cookie";
import { Message } from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";
import io from "socket.io-client";

interface Message {
  id: number;
  body: string;
  createdAt: Date;
  updatedAt: string;
  sender: number;
  reciever: number;
  him: boolean;
}
const socket = io("http://localhost:3000");
const Chat = () => {
  const role = Cookies.get("role");
  const id = Cookies.get("id");
  const [messages, setMessages] = useState<Message[] | []>([]);
  const [sender, setSender] = useState<Message[] | []>([]);
  const [reciever, setReciever] = useState<Message[] | []>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sortByCreatedAt = (a: Message, b: Message) =>
    new Date(a.createdAt) - new Date(b.createdAt);

  const sorted = [...sender, ...reciever].sort(sortByCreatedAt);

  useEffect (()=>{


  },[])

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", currentMessage);
    setCurrentMessage("");
  };

  useEffect(() => {
    var currentUrl = window.location.href;
    var ind = currentUrl.split("/");
    let req1;
    let req2;
    let req3;
    let req4;

    var index = parseInt(ind[ind.length - 1]);
    if (role === "freelancer") {
      req1 = axios.get(`http://localhost:3000/freeMS/msg/${id}/${index}`);
      req2 = axios.get(`http://localhost:3000/jobMS/msg/${index}/${id}`);
      req3=axios.get(`http://localhost:3000/freeMS/msg/${id}`)
      req4=axios.get(`http://localhost:3000/freeMS/msg1/${id}`)
     
    } else {
      req2 = axios.get(`http://localhost:3000/freeMS/msg/${index}/${id}`);
      req1 = axios.get(`http://localhost:3000/jobMS/msg/${id}/${index}`);
      req3=axios.get(` http://localhost:3000/jobMS/msg/${id}`)
      req4=axios.get(` http://localhost:3000/jobMS/msg1/${id}`)
    }

    axios
      .all([req1, req2,req3,req4])
      .then(
        axios.spread((...res) => {
          res[1].data.forEach((element: { him: boolean }) => {
            element.him = true;
          });
          console.log(res[1].data);
          setSender(res[0].data);
          setReciever(res[1].data);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
   
    <div className="container mx-auto shadow-lg rounded-lg">
    
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-2xl">GoingChat</div>
        <div className="w-1/2">
          <input
            type="text"
            name=""
            id=""
            placeholder="search IRL"
            className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
          />
        </div>
        <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
          RA
        </div>
      </div>
    
      <div className="flex flex-row justify-between bg-white">
      
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
       
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
        
         <div className="flex flex-col mt-5 overflow-y-auto max-h-[481px]">

          <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Luis1994</div>
              <span className="text-gray-500">Pick me at 9:00 Am</span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/otT2199XwI8/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Everest Trip 2021</div>
              <span className="text-gray-500">Hi Sam, Welcome</span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">MERN Stack</div>
              <span className="text-gray-500">Lusi : Thanks Everyone</span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Javascript Indonesia</div>
              <span className="text-gray-500">
                Evan : some one can fix this
              </span>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Javascript Indonesia</div>
              <span className="text-gray-500">
                Evan : some one can fix this
              </span>
            </div>
          </div>

          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Javascript Indonesia</div>
              <span className="text-gray-500">
                Evan : some one can fix this
              </span>
            </div>
          </div>
          </div>
       
        </div>
      
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5 overflow-y-auto max-h-[481px]">
          {sorted.map((message ,i)=>(<div key={i}> {message.him?  <div className="flex justify-start mb-4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
              <div className="ml-2 py-2 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
               {message.body}
              </div>
            </div>: <div className="flex justify-end mb-4">
              <div className="mr-2 py-2 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
               {message.body}
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>}</div>))}
        
   
         

          </div>
          <div className="py-5">
            <input
              className=" bg-gray-300 py-3 px-3 rounded-xl w-[44rem]"
              type="text"
              placeholder="type your message here..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded-xl">
  Send
</button>
          </div>
        </div>
        {/* <!-- end message --> */}
        <div className="w-2/5 border-l-2 px-5">
          <div className="flex flex-col">
            <div className="font-semibold text-xl py-4">Mern Stack Group</div>
            <img
              src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
              className="object-cover rounded-xl h-64"
              alt=""
            />
            <div className="font-semibold py-4">Created 22 Sep 2021</div>
            <div className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              perspiciatis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
