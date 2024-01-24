"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbarjobowner/page';
import Footer from '../footer/page';
import Link from 'next/link';

interface FreelancerCategory{
    category:string,
    image:string
}

interface Freelancer{
    id: Number,
    name: string,
    email: string,
    password: string,
    adress: string,
    phone: Number,
    image: Number,
    skills: string,
    aboutMe: string,
    experience: string,
    jobtitle: string,
}



function page() {
    const [freelancercategory, setFreelancercategory] = useState<FreelancerCategory[]>([]);
    const [freelancer,setFreelancer]=useState<Freelancer[]>([])
  
    useEffect(() => {
        axios
          .get('http://localhost:3000/freelancerCategories/freelancer-category')
          .then((res) => {
            const freelancercategory: FreelancerCategory[] = res.data;
            setFreelancercategory(freelancercategory);
          })
          .catch((err) => {
            console.log(err);
          });
          getAllFreelancer()
          
      }, []);

      const getAllFreelancer = () => {
        axios
            .get('http://localhost:3000/freelancer/')
            .then((res) => {
                const sortedFreelancers = res.data.sort((a, b) => b.id - a.id);
                const latestFreelancers = sortedFreelancers.slice(0, 4);
                setFreelancer(latestFreelancers);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (

     <div>
        <Navbar/>
       

      
      <Link href="/createjoboffer">
      <button className='bg-[#172554] text-white mb-[1cm] mt-[9cm] ml-[40%] hover:bg-bluefateh  font-bold py-10 px-16 rounded-full shadow-md transform transition-transform hover:scale-105 text-xl'>
  CREATE A JOB OFFER
</button>

</Link>

        <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>FIND TALENT BY </h1>
        <h1 className='font-jockey-one text-[#172554]'>SKILLS</h1>
        </div>
        <div className="flex justify-between ml-[10%] mr-[10%]">
        {freelancercategory.map((el, i) => (
          <div key={i} className="relative text-center">
            <Link href={`/freelancerbycategory/${el.id}`}>
            <h1
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 hover:scale-125 "
            >
              {el.category}
            </h1>
            </Link>
            <img
              src={el.image}
              alt=""
              className="w-[8cm] h-[8cm] object-cover brightness-50	rounded-xl"
            />
          </div>
        ))}
      </div >
      <div className=" bg-[#172554] flex mb-[3cm] mt-[3cm] ml-[2cm] mr-[2cm]">
  
  <div className="w-1/2 flex items-center justify-start">
    <img
      src="https://th.bing.com/th/id/R.2a57b1b2b1436476315e0daf72e96025?rik=SRomhRzX4A59Zg&pid=ImgRaw&r=0"
      alt=""
      className="mx-auto brightness-[75%]"
    />
  </div>

  
  <div className="bg-gradient-to-br from-[#172554] to-[#267296] w-1/2 ">
          <p className="font-jockey-one text-bluefateh text-8xl font-bold mb-[0.5cm] mt-[2cm] ml-[1cm] mr-[1cm]">JOBZEN</p>
          <p className="font-jockey-one text-white text-8xl font-bold mb-[1cm] mt-[2cm] ml-[1cm] mr-[1cm]">Connecting IT Talent with Tomorrow's Opportunities</p>
          <div className="flex space-x-16 ml-[7cm]"> 
          <Link href={'/allfreelancer'}>
          <button
  className="cursor-pointer text-white font-bold relative text-2xl w-[6cm] h-[3cm] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
>
        ALL<br /> FREELANCER
    </button>
         </Link>
       
</div>

        </div>
</div>
      <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>BEST </h1>
        <h1 className='font-jockey-one text-[#172554]'>TALENT</h1>
        </div>
        <div className='flex justify-between ml-[20%] mr-[10%] mt-[2cm] grid grid-cols-2 gap-[3cm]'>
      {freelancer.map((ele,i)=>{
return(
  
  <div key={i} className="max-w-[400px]">
   
          <Link href={`/freelancerDetails/${ele.id}`}>
  <div className="profile-card w-full rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
    <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
      
        <img
          src={ele.image} 
          alt="Freelancer Avatar"
          className="w-[6cm] h-[5cm] border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
        />
    
    </div>
    <div className="headings *:text-center *:leading-4">
      <p className="text-4xl font-serif font-semibold text-[#434955] mb-[15px]">{ele.name}</p>
      <p className="text-xl font-semibold text-[#434955] mb-[30px]">{ele.jobtitle}</p>
    </div>
    <div className="w-full items-center justify-center flex">
      <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
        <li>
        <svg
    id="phone"
    viewBox="0 0 24 24"
    className="fill-stone-700 group-hover:fill-[#172554]"
    height="15"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
    ></path>
  </svg>
          <p className='text-xl'>{ele.phone}</p>
        </li>
        <li>
          <svg
            className="fill-stone-700 group-hover:fill-[#172554]"
            height="15"
            width="15"
            id="mail"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" fill="#231f20"></path>
            <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" fill="#231f20"></path>
          </svg>
          <p className='text-xl'>{ele.email}</p>
        </li>
        <li>
          <svg
            id="map"
            viewBox="0 0 16 16"
            className="fill-stone-700 group-hover:fill-[#172554]"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#444"></path>
          </svg>
          <p className='text-xl'>{ele.adress}</p>
        </li>
      </ul>
    </div>
    <hr
      className="w-full group-hover:h-5 h-3 bg-[#172554] group-hover:transition-all group-hover:duration-300 transition-all duration-300"
    />
  </div>
  </Link>
</div>

       )}
      )}
      </div>
      
  
      <div className='mt-[8cm] ml-[1cm]'>
        <h1 className='text-4xl text-grisss mb-[1cm] '>company we helped grow</h1>
        <div className='flex space-x-10 ml-[2cm]'>
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417431759_231763966677199_5653554093549890672_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=hWnoDcHYd9UAX_VJfXc&_nc_oc=AQkUOzxbQBgBnpJARDCwQdNtU0Z3ipsugP7b1qaIzAXwStB6EBXhuQfkZxVlPdySBDA&_nc_ht=scontent.ftun9-1.fna&oh=00_AfAjZNWlT1oqwCA5LG7dGbHgBXvLf1uMfQgIQBVFPWmVRg&oe=65AB914A" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417577798_231765153343747_8611348078106997068_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YfA7TelDY_kAX_ya66u&_nc_ht=scontent.ftun9-1.fna&oh=00_AfA4Xq8OQXp8BtfWXFZkDObMtQ0mAXd8UshkpBiNud2cCA&oe=65AB12D0" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417444510_231765900010339_274947887996185958_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uuvIpkDWusoAX_XxalZ&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCb_R2XK5iNwm0M-1U9iHqVqE9i19KvqP0GF_qBbrm8Iw&oe=65AB1FF2" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/417368508_231766510010278_5213960803376632728_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=dXFxqDOPp3IAX_BU-GH&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDzWNhVsZRRq9OpCGHPN-PvlvH3utNqgsfB_dRWAFqIyw&oe=65AC0862" alt="" />
          <img className='h-[4cm] w-[8cm]' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/418834089_231767446676851_2312434974819241847_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qbk4XetGLo4AX91x1yb&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDjKjUaSc9ORHvRqsPdDWeQqbZ-JvkNAKNdw2e7-UsL7Q&oe=65AA929C" alt="" />
        </div>
      </div>
<Footer/>
      </div>
      
  )
}

export default page

