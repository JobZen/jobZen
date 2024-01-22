import React from 'react';
import Link from 'next/link';
import DropNavbar from '../dropNavBarFreelancer/page';


interface TabPage {
  name: string;
  href: string;
}

const tabPages: TabPage[] = [
  { name: 'Home', href: '/mainFreelancer' },
  { name: 'About us', href: '/aboutafterloginfreelancer' },
  { name: 'Contact', href: '/contactafterloginfreelancer' }
];

const Navbar = () => {
  return (
    <div className='top-0'>
      <nav className="bg-gradient-to-br from-[#172554] to-[#267296] w-full px-8 py-4">
      <div className="flex justify-center">
      <div className="w-full px-4 bg-white rounded-[50px] flex items-center justify-between" style={{ maxWidth: '1400px' }}>
        <div className="flex w-full flex-wrap items-center justify-between h-[80px]">
          <div className='flex items-center space-x-12'>
            <Link href={'/'}>
              <img
                src="https://media.discordapp.net/attachments/1169316305036398694/1198991023255339229/newLogo.png?ex=65c0ea68&is=65ae7568&hm=4a9c3a99a2385fcb4c2333716485d5fce9b7428b2b855bdebe21c0bdce736e31&=&format=webp&quality=lossless&width=454&height=437"
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
