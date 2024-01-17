"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar1/page';
import Footer from '../footer/page';

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

interface Job{
    jobtitle:string,
    location:string,
    budget:number,
    image:string,
    role:string,
    description:string,
    qualification:string,
    createdAt:string,
    jobOwnerId:number,
    jobCategoryId:number,
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

    const getAllFreelancer=()=>{
        axios
          .get('http://localhost:3000/freelancer/')
          .then((res) => {
            const Freelancer: Freelancer[] = res.data;
            setFreelancer(Freelancer);
          })
          .catch((err) => {
            console.log(err);
          });
    } 


    return (

     <div>
        <Navbar/>
        <div className='bg-[#172554] h-[22cm] '>
      <div className='ml-[3cm] '>
        <h1 className='text-[#172554] font-BlackOps text-3xl mb-[1cm]'>.</h1>
    <h1 className='text-white font-BlackOps text-8xl mb-[1cm] '>DISCOVER</h1>
    <h1 className='text-white font-BlackOps text-8xl mb-[1cm]'>MORE THAN</h1>
    <h1 className='text-bluefateh font-BlackOps text-8xl underline mb-[1cm]'>10000+ TALENT</h1>
    <div className=' mb-[1cm]'>
    <h1 className='text-grisss text-2xl leading-snug'>
        Great platform for IT companies  searching 
    </h1>
    <h1 className='text-grisss text-2xl leading-snug'>
    for the best talent and to hire freelancer.
    </h1>
    </div>

</div>
<div className='ml-[3cm] mb-[2cm]'>
  
<div className="w-[13cm] flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
      <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-gray-100 outline-none" type="text" placeholder="Search for Talent" />
      </div>
      <div className="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Search</span>
      </div>
      </div>


</div>
      <div className='flex justify-center bg-white shadow-xl rounded-[15px] mr-[13%] ml-[13%] '>
        <div className="flex space-x-32 bg-white rounded-lg p-4">
          <div className="text-center w-full l-full ">
            <img className='mx-auto mb-6 w-[4cm] l-[4cm]' src="https://cdn-icons-png.flaticon.com/512/270/270013.png" alt="" />
            <h1 className='text-black text-4xl '>Create Account</h1>
            <h1 className='text-grisss text-2xl'>First, you have to create an account here</h1>
          </div>
          <div className="text-center w-full l-full ">
            <img  className='mx-auto mb-6 w-[4cm] l-[4cm]' src="https://cdn-icons-png.flaticon.com/512/7638/7638027.png" alt="" />
            <h1 className='text-black text-4xl'>Search work</h1>
            <h1 className='text-grisss text-2xl'>Search for the best freelance work here</h1>
          </div>
          <div className="text-center w-full l-full">
            <img className='mx-auto mb-6 w-[4cm] l-[4cm]' src="https://th.bing.com/th/id/R.21a357d3ec0ebf0f6e932211850a5120?rik=6Fvi3DuElDHY%2bw&riu=http%3a%2f%2fwww.softcreate.co.jp%2fcms%2fsc%2fimg%2fpower-apps%2fmerit3.png&ehk=snsy0re4p01auZY5khh846awdZ5qQQKpc8IGwK%2f2ZzQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <h1 className='text-black text-4xl '>Save and apply</h1>
            <h1 className='text-grisss text-2xl'>Apply or save and start your work</h1>
          </div>
        </div>
      </div>
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
       
 



        <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>FIND TALENT BY </h1>
        <h1 className='font-jockey-one text-blueghamek'>SKILLS</h1>
        </div>
        <div className="flex justify-between ml-[10%] mr-[10%]">
        {freelancercategory.map((el, i) => (
          <div key={i} className="relative text-center ">
            <h1
              className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 hover:scale-125 "
            >
              {el.category}
            </h1>
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

  
  <div className="bg-[#172554] w-1/2 ">
    <p className="font-jockey-one text-bluefateh text-8xl font-bold mb-[0.5cm] mt-[2cm] ml-[1cm] mr-[1cm]">JOBZEN</p>
    <p className="font-jockey-one text-white text-8xl font-bold mb-[1cm] mt-[2cm] ml-[1cm] mr-[1cm]">Connecting IT Talent with Tomorrow's Opportunities</p>
    <p className="font-jockey-one text-bluefateh text-8xl font-bold mb-[1cm] mt-[2cm] ml-[1cm] mr-[1cm]">Join  US Today!</p>
   
  </div>
</div>
      <div className='flex space-x-2 text-8xl ml-[5%] mb-[3cm] mt-[3cm]'>
        <h1 className='font-jockey-one text-bluefateh'>BEST </h1>
        <h1 className='font-jockey-one text-blueghamek'>TALENT</h1>
        </div>
    <div className='flex justify-between ml-[10%] mr-[10%]'>
      {freelancer.map((ele,i)=>{
return(
    
       <div >
        
        <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-2xl hover:scale-110">
  <div >
  <div className='flex items-center justify-center'>
    <img className="relative mx-4 -mt-6 h-60 w-60 overflow-hidden rounded-xl border-solid border-2 border-blueghamek  " src={ele.image} alt="" />
  </div>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-blueghamek antialiased">
     {ele.name}
    </h5>
    <div >{ele.jobtitle}</div>
    <div className='flex items-center justify-center mr-[1.5cm]'>
    
    <p className="block font-sans text-xl font-light leading-relaxed text-inherit antialiased">
    {ele.adress}
    </p>
    </div>
    
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blueghamek py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
        </div>

       </div>)}
      )}
      </div>
      
  
<div className="max-w-screen-2xl mx-auto mb-[5cm] mt-[5cm]">

	<div id="default-carousel" className="relative  " data-carousel="static">
  
        <div className="overflow-hidden relative h-[20cm] rounded-lg sm:h- xl:h-120 2xl:h-144">
         
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/10/02072937/Freelancer-start.png" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                <p className='text-white'>malek</p>
            </div>
          
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://www.techprevue.com/wp-content/uploads/2015/02/how-to-become-a-freelancer.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                <p>malek</p>
            </div>
           
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                <p>malek</p>
            </div>
        </div>
     
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
   
        <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
        </button>
        <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden">Next</span>
            </span>
        </button>
    </div>

	
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>
<Footer/>
      </div>
      
  )
}

export default page

