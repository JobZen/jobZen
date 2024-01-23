"use client";
import { useState } from "react";
import { FunctionComponent } from "react";
import axios from "axios";
import Link from "next/link";
import {useRouter}from 'next/navigation'
import Cookies from "js-cookie";

const Login: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false)
  const  [alertMsg, setAlertMsg] = useState("")
const router=useRouter()
  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    axios
      .post("http://localhost:3000/auth/freelancer/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        
        response.data.token
          ? (Cookies.set("token", response.data.token),
            Cookies.set("id", response.data.id),
            Cookies.set("role",response.data.role),
            router.push('/mainFreelancer')
            

            )
          : (console.log(response.data),setAlert(true)) ;
      })
      .catch((error) => console.log("error:", error));
  };

  return (
    <div className=" bg-malek min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
            <div className="absolute h-[43.37%] w-[99.87%] top-[56.63%] right-[0.13%] bottom-[0%] left-[0%] text-darkslategray">
              <div className="absolute h-[85.07%] w-[100.26%] top-[15.67%] right-[-0.13%] bottom-[-0.75%] left-[-0.13%] rounded-lg box-border border-[1px] border-solid border-silver" />

              <input
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="absolute h-[34.33%] w-[17.63%] top-[0%] right-[79.43%] bottom-[65.67%] left-[2.94%]  text-center text-smi-8">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
                <div className="absolute top-[0%] left-[5.55px] leading-[22.53px] inline-block w-[58px]">
                  Password
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[170px] text-black">
            <div className="relative w-[107.75px] h-[23px] overflow-hidden shrink-0">
              <div className="absolute top-[0%] left-[26.75px] leading-[22.53px]">
                Remember me
              </div>
              <div className="absolute h-[95.65%] w-[19.98%] top-[0.44%] right-[80.02%] bottom-[3.91%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gainsboro" />
                <img
                  className="absolute h-[34.71%] w-[54.55%] top-[32.64%] right-[22.73%] bottom-[32.65%] left-[22.73%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/new-shape@2x.png"
                />
              </div>
            </div>
            <div className="relative leading-[22.53px] font-medium text-darkslategray">
              Forgot Password?
            </div>
          </div>
          <div className="relative w-[380px] h-14 text-center text-white">
            <div
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-steelblue"
              onClick={handleLogin}
            >
              <button className="   bg-[#7c949e]  hover:bg-[#267296] absolute h-3/4 w-9/12 top-[12.5%] left-[12.5%] leading-[22.53px] flex items-center justify-center">
                CONTINUE
              </button>
            </div>
          </div>
        </div>
        <div className="absolute h-[2.47%] w-[32.17%] top-[84.99%] left-[34.02%] text-gray-300 text-center inline-block">
          <span className="font-zen-kaku-gothic-antique">New User?</span>
          <b>
            {` `}
            <span className="[text-decoration:underline]">SIGN UP HERE</span>
          </b>
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
<<<<<<< HEAD
        <span className="ml-2 text-white">
=======
        <span className="ml-2">
>>>>>>> 9f0da828415cea0efe0d6a714d0affb24a4c3a88
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
