import React from 'react';
import Link from 'next/link';

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
    <nav className="bg-transparent px-20 py-10">
      <div className="flex justify-center gap-96">
        {tabPages.map((tabPage) => (
          <div className="mr-4" key={tabPage.name}>
            <Link href={tabPage.name}>
              <span className="font-jura text-black text-3xl hover:text-black hover:font-semibold hover:underline">{tabPage.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  </div>
);
};

export default Navbar;
