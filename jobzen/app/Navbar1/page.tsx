import React from 'react';
import Link from 'next/link';
import Search1 from '../search1/page';


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
    <div className='bg-white'>
      <div className='top-0'>
        <nav className="bg-malek rounded-bl-[300px] rounded-br-[300px] bg-cover h-[20cm] w-full px-8 py-4 relative ">
          <div className='absolute inset-0 flex flex-col items-start justify-center text-white font-bold space-y-4'>
            <div className="font-jolly-lodger text-8xl tracking-widest animate-pulse ml-[5%]">GATEWAY</div>
            <div className="font-jolly-lodger text-8xl tracking-widest animate-pulse ml-[5%]">TO</div>
            <div className='font-jolly-lodger text-8xl tracking-widest animate-pulse ml-[5%]'>SUCCESS</div>
            <div className="font-jolly-lodger text-8xl tracking-widest animate-pulse ml-[5%]">AWAITS !</div>
          </div>
          <div className="flex justify-center">
          <div className="w-full px-8 bg-white rounded-full flex items-center justify-between max-w-4xl">
              <div className="flex w-full flex-wrap items-center justify-between h-[100px] ">
                <div className='flex items-center space-x-12'>
                  <Link href={'/'}>
                    <img
                      src="https://i.ibb.co/nQqdJ89/logo-transparent.png"
                      className="w-20 h-20"
                      alt="JobZen Logo"
                    />
                  </Link>
                  <Search1 />
                </div>
                {tabPages.map((tabPage) => (
                  <div className="mr-4 " key={tabPage.name}>
                    <Link href={tabPage.href}>
                      <span className="font-jura text-xl text-[#267296]">{tabPage.name}</span>
                    </Link>
                  </div>
                ))}
                <div className="relative flex items-center space-x-4 ">
                  <Link href={'/login '}>
                    <p className="font-jura text-xl text-[#267296]">Login</p>
                  </Link>
                  <Link href={'/signup'}>
                    <button
                      type="submit"
                      className="py-1 px-3 text-xl font-jura text-center text-white rounded-3xl bg-[#267296] sm:w-fit hover:bg-[#275469]  hover:text-white hover:focus:ring-4 focus:outline dark:focus:ring-primary-300 dark:bg-primary-600">
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className='absolute z-20 flex top-[41rem] gap-5 ml-[131px]  ' >
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
    </div>
  );
};

export default Navbar;
