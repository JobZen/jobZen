
"use client";
import { useState } from "react";
import { FunctionComponent } from "react";
import axios from "axios";
import Link from "next/link";
import {useRouter}from 'next/navigation'
import Cookies from "js-cookie";
import Popup from "../popupLogin/page"



const Login: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false)
  const  [alertMsg, setAlertMsg] = useState("")
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



const router=useRouter()


const handleClosePopup = () => {
  setShowPopup(false);
  router.push(`/mainFreelancer`);
};


  
  const handleLogin = async () => {
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post("http://localhost:3000/auth/jobowner/login", {
        email: email,
        password: password,
      });

      console.log(response.data);

      if (response.data.token) {
        // Successful login
        Cookies.set("token", response.data.token);
        Cookies.set("id", response.data.id);
        Cookies.set("role", response.data.role);
        setShowPopup(true); // Show success popup

        // Redirect after a delay (customize delay as needed)
        setTimeout(() => {
          router.push('/mainJobOwner');
        }, 2000); // Example: Navigate after 2 seconds
      } else {
        // Unsuccessful login
        console.log(response.data);
        setAlert(true);
        setAlertMsg("Invalid email or password");
        setErrorMessage("Incorrect email or password"); // Set error message
        // Don't show the popup for unsuccessful login
        // Remove the following line
        // setShowPopup(true);
      }
    } catch (error) {
      console.log("error:", error);
      setAlert(true);
      setAlertMsg("Error occurred during login");
      // Don't show the popup for errors
      // Remove the following line
      // setShowPopup(true);
    }
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
              handleLogin();
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
            <span className="mr-2 uppercase">Log in</span>
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
          {errorMessage && (
  <div className="text-red-500 mt-2">{errorMessage}</div>
)}
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
          Create an account?
          <p className="text-xs ml-2 text-blue-500 font-semibold">
        <Link href={"/signup"}>Sign up here</Link>  
          </p>
        </span>
      </p>
    </div>
  </div>
);
};  


export default Login;
