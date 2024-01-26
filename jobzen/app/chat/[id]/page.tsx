"use client";

import Cookies from "js-cookie";
import { Message } from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import {useRouter}from 'next/navigation'
import Navbar2 from "../../navjobowner/page";
import Navbar from"../../navFreelancer/page"
import Footer from "../../footer/page"
import { useSearchParams } from "next/navigation";
interface Freelancer {
  id: number
  name: string
  email: string
  adress: string
  phone: string
  image: string
  skill: string,
  aboutMe: string,
  experience: string,
  jobtitle: string,
  createdAt: string
  updatedAt: string
}
interface  Jobowner {
  id: number
  name: string
  email: string
  adress: string
  phone: number
  image: string
  rating: number
  description: string,
  createdAt: string
  updatedAt:string
}
interface Message {
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  sender: number;
  reciever: number;
  him: boolean;
}
interface Person {

      id:number
      body: string
      createdAt : string
      updatedAt: string
      sender: number
      reciever: number
      jobowner: {
        id: number
        name: string
        email: string
        adress: string
        phone: number
        image: string
        rating: number
        description: string,
        createdAt: string
        updatedAt:string
      },
      freelancer: {
        id: number
        name: string
        email: string
        adress: string
        phone: string
        image: string
        skill: string,
        aboutMe: string,
        experience: string,
        jobtitle: string,
        createdAt: string
        updatedAt: string
      },
      job: {
        id: number,
        jobtitle: string
        location: string
        budget: number
        image: string
        role: string
        description: string
        qualification: string
        available: boolean
        createdAt: string
        updatedAt: string
        jobOwnerId: number
        jobCategoryId: number | null
      }
 

}



const socket = io("http://localhost:3004");
const Chat = () => {
  const role = Cookies.get("role");
  const id = Cookies.get("id");
  const [messages, setMessages] = useState<Message[] | []>([]);
  const [sorted, setSorted] = useState<Message[] | []>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [myMessage,setMyMessage]= useState<Person[] [] | []>([]);
  const [index , setIndex] = useState(0)
  const [chatOwner,setchatOwner]= useState<Freelancer | Jobowner >()
  const [chatReciever,setChatReciever]= useState<Freelancer | Jobowner >()
  const [send,setSend]=useState(false)
  const [job,setJob]= useState({})

  const sortByCreatedAt = (a: Message, b: Message) =>
    new Date(a.createdAt) - new Date(b.createdAt);

    const sortByCreatedAt1 = (a: Person, b: Person) =>
     new Date(b[b.length-1].createdAt)-new Date(a[a.length-1].createdAt) 

const route=useRouter()
const search=useSearchParams()
const params= new URLSearchParams(search.toString())
const jobbi=params.get("id")
  useEffect(() => {
    socket.connect()
    socket.on('recieve',(msg)=>{
      setSorted([...sorted,msg])
    },[])


    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = async(obj:any) => {
  socket.emit("send", obj);
  setSorted([...sorted,obj])
    setCurrentMessage("");
  };


  useEffect (()=> {
    const currentUrl = window.location.href;
    const ind = currentUrl.split("/");

    setIndex(parseInt(ind[ind.length - 1]))
  },[])


  useEffect(() => {
    console.log("sender :" , id , "reciever :" , index , "jobID :",jobbi)
    let req1;
    let req2;
    let req3;
    let req4;
    let req5;
    
    if ( role === "freelancer") {
      req1 = axios.get(`http://localhost:3000/freeMS/msg/${id}/${index}/${jobbi}`);
      req2 = axios.get(`http://localhost:3000/jobMS/msg/${index}/${id}/${jobbi}`);
      req3=axios.get(`http://localhost:3000/freeMS/msg/${id}/${jobbi}`)
      req4 = axios.get(`http://localhost:3000/freelancer/${id}`)
      req5 = axios.get (`http://localhost:3000/jobOwner//job-owner/${index}`)
  
    }
     else {
      req2 = axios.get(`http://localhost:3000/freeMS/msg/${index}/${id}/${jobbi}`);
      req1 = axios.get(`http://localhost:3000/jobMS/msg/${id}/${index}/${jobbi}`);
      req3 =axios.get(`http://localhost:3000/jobMS/msg/${id}/${jobbi}`)
      req5 = axios.get(`http://localhost:3000/freelancer/${index}`)
      req4 = axios.get (`http://localhost:3000/jobOwner//job-owner/${id}`)
    }
  

    axios
      .all([req1, req2,req3,req4,req5])
      .then(
        axios.spread((...res) => {
          res[1].data.forEach((element: { him: boolean }) => {
            element.him = true;
          });
          console.log(res[1].data);
          setSorted([...res[0].data,...res[1].data].sort(sortByCreatedAt))
        
          setMyMessage(res[2].data.sort(sortByCreatedAt1))
          setchatOwner(res[3].data)
          setChatReciever(res[4].data)

        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, [index,send,jobbi]);
  useEffect(()=> {
    axios.get('http://localhost:3000/job/jb/'+jobbi)
    .then((res)=> {setJob(res.data)})
    .catch((err)=>{console.error(err)})
  },[jobbi])
 
  console.log(job,'dddd')
  const handleClassName = (freelancerId:number,jobownerId:number) => {
   
    const isOn=" items-center border-b-2 border-l-4 border-blue-400"
    const isOff="px-2 justify-center items-center border-b-2"
    if (role==="freelancer" &&  jobownerId===index) {
     return isOn
    }
    else if (role!=="freelancer" && freelancerId===index)
   { return isOn }

   else return isOff
  }

const handleRoute = (freelancerId:number,jobownerId:number) => {
  if (role==="freelancer") {
    route.push(`/chat/${jobownerId}?id=${jobbi}`)
   }
 else
 route.push(`/chat/${freelancerId}?id=${jobbi}`)

}

function HandleDate(dateTimeString:string) {

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const dateTime = new Date(dateTimeString);

const day = dateTime.getDate();
const month = months[dateTime.getMonth()];
const hours = dateTime.getHours();
const minutes = dateTime.getMinutes();

const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

const period = hours < 12 ? 'AM' : 'PM';

const formattedDateTime = ` ${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period},${day} ${month}`;

return formattedDateTime;

}

function HandleDateMe(dateTimeString:string) {

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const dateTime = new Date(dateTimeString);

const day = dateTime.getDate();
const month = months[dateTime.getMonth()];
const hours = dateTime.getHours();
const minutes = dateTime.getMinutes();

const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

const period = hours < 12 ? 'AM' : 'PM';

const formattedDateTime = ` ${day} ${month},${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;

return formattedDateTime;

}
const handleSend = () => {
  if(role==="freelancer") {axios.post("http://localhost:3000/freeMS",{
    sender: id,
    reciever: index,
    body: currentMessage,
    idjob: jobbi
  })
  .then(()=> {console.log("the freelancer sended very cute message")
  sendMessage({
    sender: id,
    reciever: index,
    body: currentMessage,
    idjob: jobbi

  });setSend(!send)})
.catch((err)=>{console.log(err,'')})
}
  else
   {axios.post("http://localhost:3000/jobMS",{
    sender: id,
    reciever: index,
    body: currentMessage,
    idjob:jobbi
  })
.then(()=> {console.log("the jobowner sended very cute message")
 sendMessage({
  sender: id,
  reciever: index,
  body: currentMessage,
  idjob:jobbi
});setSend(!send)})
.catch((err)=>{console.log(err,'')})
}
}
console.log(sorted,'3asabkjjkhjka')
  return (
    <div>
    {role==="freelancer"?<Navbar />:<Navbar2/>}
    <div className="container mx-auto  shadow-lg rounded-lg mt-[3.5cm]">
    
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-2xl">WorkShop</div>
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
          {chatOwner?.name.slice(0,2).toUpperCase()}
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
           {myMessage.map((el,i)=>(
           <div key={i} className={handleClassName(el[el.length-1].freelancer.id,el[el.length-1].jobowner.id)+" flex flex-row py-4 px-2 cursor-pointer"} onClick={()=>{handleRoute(el[el.length-1].freelancer.id,el[el.length-1].jobowner.id)}}>
            <div className="w-1/4">
              <img
                src= {role==="freelancer"? el[el.length-1].jobowner.image:el[el.length-1].freelancer.image}
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">{role==="freelancer"?
               el[el.length-1].jobowner.name
               :
               el[el.length-1].freelancer.name}</div>
              <span className="text-gray-500">{role==="freelancer"?
              el[el.length-1].freelancer.updatedAt?
              el[el.length-1].jobowner.name+": "+ el[el.length-1].body
              :
               "you :"+ el[el.length-1].body
               :
               el[el.length-1].jobowner.updatedAt?
               el[el.length-1].freelancer.name+": "+ el[el.length-1].body
                :
                "you :"+ el[el.length-1].body}</span>
            </div>
            
          </div>))}
          
        
          </div>
       
        </div>
      
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5 overflow-y-auto max-h-[481px]">
          {sorted.map((message ,i)=>(<div key={i}> {message.him?  <div className="flex justify-start mb-4">
              <img
                src={chatReciever?.image}
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
              <div className="ml-2 py-2 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
               {message.body}
              </div>
              <span className="text-sm ml-[10px] font-normal text-gray-500 dark:text-gray-400">{HandleDate(message.createdAt)}</span>
            </div>:
             <div className="flex justify-end mb-4">
                  <span className="text-sm mr-[10px] font-normal text-gray-500 dark:text-gray-400">{HandleDateMe(message.createdAt)}</span>
              <div className="mr-2 py-2 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
               {message.body}
              </div>
          
              <img
                src={chatOwner?.image}
                className="object-cover h-8 w-8 rounded-full"
                alt=""
              />
            </div>}
            
            </div>))}
        
   
         

          </div>
          <div className="py-5">
            <input
              className=" bg-gray-300 py-3 px-3 rounded-xl w-[44rem]"
              type="text"
              onChange={(e)=>{setCurrentMessage(e.target.value)}}
              placeholder="type your message here..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 border border-blue-700 rounded-xl"
            onClick={()=>{handleSend()}}
            >
            Send
            </button>
          </div>
        </div>
        {/* <!-- end message --> */}
        <div className="w-2/5 border-l-2 px-5">
          <div className="flex flex-col">
            <div className="font-semibold text-xl py-4">{job?.jobtitle}</div>
            <img
              src={job?.image}
              className="object-cover rounded-xl h-64"
              alt=""
            />
            <div className="font-semibold py-4">Created 22 Jan 2024</div>
            <div className="font-light mb-[20px]">
           {role==="freelancer"? `Welcome ${chatOwner?.name}! We're thrilled to have you join our community of talented freelancers. Here, you'll find a wide range of exciting job opportunities that match your skills and expertise.`:` We're thrilled to have you on board ${chatOwner?.name}! Your journey to finding the perfect freelancers begins here.
            Our platform is designed to connect you with skilled professionals who can bring your projects to life.`}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Chat;
