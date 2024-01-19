import React from 'react';
import Link from 'next/link';
import Search1 from '../search1/page';




const Navbar = () => {
  return (
    <div className='bg-[#172554]  '>
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
  
      </div>
      
    </div>
  );
};

export default Navbar;
