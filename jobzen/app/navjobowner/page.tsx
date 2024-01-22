import React from 'react';
import Link from 'next/link';
import DropNavbar from '../dropNavBarJobowner/page';


interface TabPage {
  name: string;
  href: string;
}

const tabPages: TabPage[] = [
  { name: 'Home', href: '/mainJobOwner' },
  { name: 'About us', href: '/aboutafterloginjobowner' },
  { name: 'Contact', href: '/contactafterloginjobowner' }
];

const Navbar = () => {
  return (
    <div className='top-0'>
      <nav className="bg-[#172554] w-full px-8 py-4">
      <div className="flex justify-center">
      <div className="w-full px-4 bg-white rounded-[50px] flex items-center justify-between" style={{ maxWidth: '1400px' }}>
        <div className="flex w-full flex-wrap items-center justify-between h-[80px]">
          <div className='flex items-center space-x-12'>
            <Link href={'/'}>
              <img
                src="https://i.ibb.co/nQqdJ89/logo-transparent.png"
                className="w-20 h-20"
                alt="JobZen Logo"
              />
            </Link>
           
          </div>
          {tabPages.map((tabPage) => (
            <div className="mr-4 space-x-1" key={tabPage.name}>
              <Link href={tabPage.href}>
                <span className=" text-[#172554] hover:text-base-[#172554] hover:font-semibold font-jura hover:underline">{tabPage.name}</span>
              </Link>
            </div>
          ))}
          <div className="relative flex items-center space-x-4 ">
            
            <DropNavbar/>
          </div>
          <div className="relative flex items-center space-x-4 ">
      
          </div>
        </div>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
