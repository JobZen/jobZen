"use client";
import { FunctionComponent } from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Popup from "../popupSignup/page"
import {useRouter}from 'next/navigation'

const Signup: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const router=useRouter()


  const handleClosePopup = () => {
    setShowPopup(false);
    router.push(`/login`);
  };

  const handleSignup = () => {
    if (!name || !password || !email || !address  || !phone) {
      // alert("fill up all the fields");
      return;
    }
    const obj = {
      name: name,
      password: password,
      email: email,
      adress: address,
      image:
        "https://gem.ec-nantes.fr/wp-content/uploads/2019/01/profil-vide.png",
        phone: phone,
    };
    console.log(obj);

    axios
      .post("http://localhost:3000/auth/jobowner/register", obj)
      .then((response) => {
        console.log(response.data);
        // alert("thank you for signing up")
        setShowPopup(true);
        setTimeout(() => {
          router.push('/logjob');
        }, 2000); 
      })


      .catch((error) => console.log("error:", error));
  };

  return (
    <div className="bg-malek min-h-screen flex flex-col items-center justify-center bg-gray-100">
        {showPopup && (
        <Popup onClose={handleClosePopup} onConfirm={handleClosePopup} />
      )}
      <div
        className="
        flex flex-col
        bg-white
        shadow-md
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        py-8
        rounded-3xl
        w-50
        max-w-md
      "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <div className="flex flex-col mb-5">
            <label className="mb-1 text-xs tracking-wide text-gray-600">
              Name:
            </label>

            <div className="relative">
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  absolute
                  left-0
                  top-0
                  h-full
                  w-10
                  text-gray-400
                "
              >
                {/* <i className="fas fa-user text-blue-500"></i> */}
              </div>

              <input
                className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-1 text-xs tracking-wide text-gray-600">
              E-Mail :
            </label>

            <div className="relative">
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  absolute
                  left-0
                  top-0
                  h-full
                  w-10
                  text-gray-400
                "
              >
                <i className="fas fa-at text-blue-500"></i>
              </div>

              <input
                className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-1 text-xs tracking-wide text-gray-600">
              Address:
            </label>

            <div className="relative">
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  absolute
                  left-0
                  top-0
                  h-full
                  w-10
                  text-gray-400
                "
              >
                <i className="fas fa-at text-blue-500"></i>
              </div>

              <input
                className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                placeholder="Enter your Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-1 text-xs tracking-wide text-gray-600">
              Phone number:
            </label>

            <div className="relative">
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  absolute
                  left-0
                  top-0
                  h-full
                  w-10
                  text-gray-400
                "
              >
                <i className="fas fa-at text-blue-500"></i>
              </div>

              <input
                id="email"
                type="email"
                name="email"
                className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                placeholder="Enter your Phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
      

          <div className="flex flex-col mb-6">
            <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
              Password:
            </label>

            <div className="relative">
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  absolute
                  left-0
                  top-0
                  h-full
                  w-10
                  text-gray-400
                "
              >
                <span>
                  <i className="fas fa-lock text-blue-500"></i>
                </span>
              </div>

              <input
                type="password"
                className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  rounded-2xl
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-blue-400
                "
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex w-full">
            <button
              onClick={() => {
                handleSignup();
              }}
              type="submit"
              className="
                flex
                mt-2
                items-center
                justify-center
                focus:outline-none
                text-white text-sm
                sm:text-base
                bg-blue-500
                hover:bg-blue-600
                rounded-2xl
                py-2
                w-full
                transition
                duration-150
                ease-in
              "
            >
              <span className="mr-2 uppercase">Sign Up</span>
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <p
          className="
          inline-flex
          items-center
          text-gray-700
          font-medium
          text-xs text-center
        "
        >
          <span className="text-white ml-2">
            You have an account?
            <p className="text-xs ml-2 text-blue-500 font-semibold">
             <Link href={"/logjob"}> Login here</Link>
            </p>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;