import React from 'react';
import Link from 'next/link';




const Navbar = () => {
  return (
    <div className='bg-malek  bg-no-repeat bg-cover bg-center '>
      <div className='top-0'>
        <nav className="   px-8 py-4 relative ">
          <div className="flex justify-center">
          <div className="w-full px-8 bg-white rounded-full flex items-center justify-between max-w-[35cm]">
              <div className="flex w-full flex-wrap items-center justify-between h-[100px] ">
                <div className='flex items-center space-x-12'>
                  <Link href={'/'}>
                    <img
                      src="https://i.ibb.co/nQqdJ89/logo-transparent.png"
                      className="w-20 h-20"
                    />
                  </Link>
                </div>
                <div className="relative flex items-center space-x-20 ">
                    <div  className="relative flex items-center space-x-20 mr-[4cm] ">
                    <Link href={"/home"}>
                      <span className="font-jura text-xl text-[#172554]">HOME</span>
                    </Link>
                 
                    <Link href={"/contact"}>
                      <span className="font-jura text-xl text-[#172554]">CONTACT</span>
                    </Link>
                
                    <Link href={"/about"}>
                      <span className="font-jura text-xl text-[#172554]">ABOUT</span>
                    </Link>
                    </div>

                  <Link href={'/login'}>
                    <p className="font-jura text-xl text-[#172554]">LOGIN</p>
                  </Link>
                  <Link href={'/landingPage'}>
                    <button
                      type="submit"
                      className="py-1 px-3 text-xl font-jura text-center text-white rounded-3xl bg-[#172554] sm:w-fit hover:bg-[#275469]  hover:text-white hover:focus:ring-4 focus:outline dark:focus:ring-primary-300 dark:bg-primary-600">
                      SIGN UP 
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className=' h-[17cm]  '>

<div className='ml-[3cm] '>
  <h1 className='text-[#172554] font-BlackOps text-3xl mb-[1cm]'>.</h1>
<h1 className='text-white font-BlackOps text-8xl mb-[1cm] '>DISCOVER</h1>
<h1 className='text-white font-BlackOps text-8xl mb-[1cm]'>MORE THAN</h1>
<h1 className='text-bluefateh font-BlackOps text-8xl underline mb-[1cm]'>1000+ JOBS</h1>
<div className=' mb-[1cm]'>
<h1 className='text-grisss text-2xl leading-snug'>
  Great platform for the job seeker that searching 
</h1>
<h1 className='text-grisss text-2xl leading-snug'>
for new career heights and passionate about startups.
</h1>
</div>

</div>

<div className='flex justify-center bg-white shadow-xl rounded-[15px] mr-[13%] ml-[13%] '>
  <div className="flex space-x-3px-4 py-22 bg-white rounded-lg p-4">
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
      </div>
      
    </div>
  );
};

export default Navbar;
