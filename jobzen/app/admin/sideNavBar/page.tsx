"use client"
import React , {useState} from "react";
import Link from "next/link";
import { MdChevronRight,MdKeyboardArrowDown , MdKeyboardArrowUp} from 'react-icons/md';



const SideNavBar = () => {
const[open,setOpen]=useState(true)
const [showJobLists, setShowJobLists] = useState(false);

const toggleJobLists = () => {
  setShowJobLists(!showJobLists);
};

const toggleSidebar = () => {
  setOpen(!open);
};

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 transition-all duration-300 ${open ? "w-64" : "w-20" }  h-screen sm:translate-x-0 bg-[#91C7EF]`}
      aria-label="Sidebar">

      <div className="flex absolute -right-3 top-7">
      <button
      className="flex items-center justify-center w-10 h-10 border-black hover:border-[#267296] hover:bg-brand-600/10  hover:bg-white bg-[#267296] active:bg-[#2e667f] rounded-full border-2  text-2xl text-black transition duration-200"
      aria-label="trigger">
        <MdChevronRight
        className={`text-black hover:border-[#267296] hover:bg-white hover:text-[#267296] ${open ? 'rotate-180' : ''}`}
        onClick={() => setOpen(!open)}/></button>
      </div>

      <div className="h-full px-3 py-8 overflow-y-auto top-11">
        <div className="flex items-center mb-10 space-y-4 font-medium">
        <img
       className={`mr-6 transition-all duration-300 ${open ? "w-24 h-24" : "h-14 w-14"}`}
       src="https://shorturl.at/auNQ2"
       alt="Admin Avatar"/>
        <h1 className={`font-jolly centre-items font-semibold text-2xl space-x-4 ${!open ? "opacity-0" : "opacity-100 transition-opacity"}`}>Admin</h1>
        </div>
        <ul className="space-y-8 font-medium">
        <li>
          <Link legacyBehavior href="/admin">
            <a className="flex items-center rounded-lg text-black hover:bg-[#267296] hover:text-white group transition duration-200" onClick={toggleJobLists}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
              </svg>
              {open && <span className="ms-3  text-2xl">Dashboard</span>}
              {open && (
                <MdKeyboardArrowDown
                  className={`text-black hover:border-[#267296] flex absolute -right-0.5  w-8 h-8 hover:bg-[#267296] hover:text-white rounded-full ${showJobLists ? 'rotate-180' : ''}`}
                  onClick={toggleJobLists}
                />
              )}
            </a>
          </Link>
          {showJobLists && (
            <ul className="ml-6 space-y-4 mt-4">
              <li>
                <Link legacyBehavior href="/admin/jobownersList">
                  <a className="flex items-center gap-4 rounded-lg text-black hover:bg-[#267296] hover:text-white group transition duration-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    {open && <span className="ms-3 text-xl">Job Owners</span>}
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/admin/freelancersList">
                  <a className="flex items-center gap-4 rounded-lg text-black hover:bg-[#267296] hover:text-white group transition duration-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    {open && <span className="ms-3 text-xl">Freelancers</span>}
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>
          <li>
          <Link legacyBehavior href="/admin/inbox">
            <a className="flex items-center gap-4 rounded-lg text-black hover:bg-[#267296] hover:text-white group transition duration-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                </svg>
                {open && <span className="ms-3 text-2xl">Inbox</span>}
                {open && <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium rounded-full bg-red-900 text-white">3</span>}
            </a>
            </Link>
         </li>

         <li>
            <Link legacyBehavior href="/admin/jobsList">
              <a className="flex items-center gap-4  rounded-lg text-black hover:bg-[#267296] hover:text-white group transition duration-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                {open && <span className="ms-3 text-2xl">Jobs</span>}
              </a>
            </Link>
          </li>

          <li>
            <Link legacyBehavior href="/admin/categoriesList">
              <a className="flex items-center gap-4  rounded-lg text-black hover:bg-[#267296] hover:text-white group transition duration-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                {open && <span className="ms-3 text-2xl">Jobs Categories</span>}
              </a>
            </Link>
          </li>

         <li>
         <Link legacyBehavior href="/login">
         <a className="flex items-center gap-4  rounded-lg text-black hover:bg-[#267296] hover:text-white group transition duration-200 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
              {open && <span className="ms-3 text-2xl">Sign out</span>}
            </a>
            </Link>
         </li>

        </ul>
      </div>
    </aside>
  );
};

export default SideNavBar;