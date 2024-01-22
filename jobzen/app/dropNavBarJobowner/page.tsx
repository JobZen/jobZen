"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const settings = [
  { name: "Account", href: "/jobownerProfile/1" },
  { name: "Messages", href: "/jobDetails/messageJobDetails" },
  { name: "Logout", href: "/home" },
];

const DropNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-flex items-center group">
      <button
        id="avatarButton"
        className="rounded-full p-1 focus:outline-none"
        onClick={() => handleToggle()}
      >
        <img
          className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          // {user.image}
          alt="User dropdown"
        />
      </button>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{
          opacity: isDropdownOpen ? 1 : 0,
          scaleY: isDropdownOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute origin-top-right z-10 w-[160px] h-[120px] left-[-77px] mt-[203px] -mr-[80px] bg-gradient-to-br from-[#267296] to-[#267296] divide-y divide-gray-200 rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-transparent active:scale-95 transition-all duration-150 ease-linear"
        aria-labelledby="options-menu"
      >
        {settings.map((setting, index) => (
          <Link href={setting.href} key={setting.name}>
            <motion.a
              className="block pl-6 pr-4 py-2 flex items-center text-white text-base font-medium hover:bg-transparent focus:outline-none"
              whileHover={{
                scale: 1.07,
                color: "#91c6EF",
                transition: { duration: 0.3 },
              }}
            >
              {index === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
              {index === 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
              )}
              {index === 2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
              )}
              {setting.name}
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default DropNavbar;
