"use client"
import React, { useState } from 'react'
import Link from 'next/link';





function LandinPage() {
  const[show,setShow]=useState<boolean>(false)
  const[show1,setShow1]=useState<boolean>(false)


  return (
<div className='bg-malek h-screen flex flex-col'>
  <nav className="bg-transparent px-20 py-10">
    <div className="flex justify-center gap-96">
    <div className="mr-[5cm]" >
    
    <span className="ml-40"> 
  <Link href={"/home"}>
    <span className="font-jura text-white text-3xl hover:text-white hover:font-semibold hover:underline">HOME</span>
  </Link>
  </span>

  <span className="ml-40"> 
    <Link href={"/contactbeforelogin"}>
      <span className="font-jura text-white text-3xl hover:text-white hover:font-semibold hover:underline">CONTACT</span>
    </Link>
  </span>

  <span className="ml-40"> 
    <Link href={"/aboutbeforelogin"}>
      <span className="font-jura text-white text-3xl hover:text-white hover:font-semibold hover:underline">ABOUT</span>
    </Link>
  </span>
</div>

      
    </div>
    <div className="flex flex-col items-center justify-center h-full text-center  mb-[10cm] animate-pulse">
      <p className='font-bruno text-white text-9xl text-opacity-40 '>JOB ZEN</p>
      <p className='font-jolly-lodger text-white text-6xl text-opacity-40'>GATEWAY TO SUCCESS AWAITS!</p>
    </div>
  </nav>
  <div className='flex justify-center space-x-[15cm]  '>
  <div
      className={`bg-white bg-opacity-30 filter brightness-80 p-6 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 ${
        show ? 'scale-110' : 'scale-100'
      }`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <h1 className='text-white brightness-100 text-4xl font-jura'>FREELANCER</h1>
      {show && (
        <h1 className='text-white brightness-100 text-xl font-jura'>If you are searching for job offers</h1>
      )}
      <Link href={'/signup'}>
  <button className='bg-transparent text-white rounded border border-white py-2 px-4 mt-4 hover:bg-white hover:text-black transition duration-300'>
    Click here
  </button>
</Link>
    </div>


    <div
      className={`bg-white bg-opacity-30 filter brightness-80 p-6 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 ${
        show1 ? 'scale-110' : 'scale-100'
      }`}
      onMouseEnter={() => setShow1(true)}
      onMouseLeave={() => setShow1(false)}
    >
      <h1 className='text-white brightness-100 text-4xl font-jura'>JOBOWNER</h1>
      {show1 && (
        <h1 className='text-white brightness-100 text-xl font-jura'>If you are searching for talents</h1>
      )}
      <Link href={'/signup'}>
      <button className='bg-transparent text-white rounded border border-white py-2 px-4 mt-4 hover:bg-white hover:text-black transition duration-300'>
        Click here
      </button>
      </Link>
    </div>
    </div>
</div>

    
    
  )
}

export default LandinPage