import React from 'react';
import Link from 'next/link';
import Search from '../search1/page';

interface TabPage {
  name: string;
  href: string;
}

const tabPages: TabPage[] = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
  return (
    <div className='top-0'>
      <nav className="bg-[#267296] w-full px-8 py-4">
      <div className="flex justify-center">
      <div className="w-full px-8 bg-white rounded-3xl flex items-center justify-between" style={{ maxWidth: '1400px' }}>
        <div className="flex w-full flex-wrap items-center justify-between h-[80px]">
          <div className='flex items-center space-x-12'>
            <Link href={'/'}>
              <img
                src="https://i.ibb.co/nQqdJ89/logo-transparent.png"
                className="w-20 h-20"
                alt="JobZen Logo"
              />
            </Link>
            <Search />
          </div>
          {tabPages.map((tabPage) => (
            <div className="mr-4 space-x-1" key={tabPage.name}>
              <Link href={tabPage.href}>
                <span className=" text-[#267296] hover:text-base-[#267296] hover:font-semibold font-jura hover:underline">{tabPage.name}</span>
              </Link>
            </div>
          ))}
          <div className="relative flex items-center space-x-4 ">
            
            <Link href={'/login '}>
              <p className=" text-[#267296] hover:text-base-[#267296] hover:font-semibold font-jura hover:underline">Login</p>
               </Link>
               <Link href={'/signup'}>
               <button
              type="submit"
              className="py-1 px-3 text-sm font-medium text-center text-white rounded-3xl bg-[#267296] sm:w-fit hover:bg-[#275469]  hover:text-white hover:focus:ring-4 focus:outline dark:focus:ring-primary-300 dark:bg-primary-600">
              Sign up
            </button>
             </Link>
          </div>
        </div>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
