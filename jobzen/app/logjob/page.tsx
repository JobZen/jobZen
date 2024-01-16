
"use client"
import { useState } from "react";
import { FunctionComponent } from "react";
import axios from "axios";
import Link from "next/link";

const Login: FunctionComponent  = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    axios.post("http://localhost:3000/auth/jobowner/login", { email: email, password:password})
    .then((response) => console.log(response.data))
    .catch((error) => console.log("error:", error))
  }


  return (
    <div className="relative bg-[#267296] w-full h-[1020px] overflow-hidden text-left text-11xl text-white font-jura">
      <div className="absolute top-[0px] left-[0px] bg-steelblue w-[1422px] h-[1020px]" />
      <b className=" font-Jura absolute text-3xl top-[64px] left-[795px] leading-[40%] inline-block w-[98px] h-[13px]">
      <Link href={"/"} >HOME</Link> 
      </b>
      <b className=" font-Jura text-3xl absolute top-[63px] left-[954px] leading-[40%] inline-block w-[163px] h-[11px]">
      <Link href={"/about"} > ABOUT US</Link> 
      </b>
      <b className="font-Jura text-3xl absolute top-[66px] left-[1179px] leading-[40%] inline-block w-[197px] h-[11px]   ">
      <Link href={"/contact"} > CONTACT</Link> 
      </b>
      <div className="absolute top-[252px] left-[818px] w-[460px] h-[516px] overflow-hidden text-smi-8 text-black font-zen-kaku-gothic-antique">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset]" />
        </div>
        <div className="absolute top-[39.5px] left-[40px] flex flex-col items-start justify-start">
          <div className="relative leading-[22.53px] inline-block w-[125px]">
            WELCOME BACK
          </div>
          <div className="relative text-[25px] leading-[44px] font-medium">
            Log In to your Account
          </div>
        </div>
        <div className="absolute top-[123.5px] left-[39.5px] flex flex-col items-start justify-start gap-[16px] text-darkslategray">
          <div className="relative w-[380.5px] h-[154.5px] text-base">
            <div className="absolute h-[43.37%] w-[99.87%] top-[0%] right-[0%] bottom-[56.63%] left-[0.13%]">
            <div className="absolute h-[85.07%] w-[100.26%] top-[15.67%] right-[-0.13%] bottom-[-0.75%] left-[-0.13%] rounded-lg box-border border-[1px] border-solid border-silver" />
              <img
                className="absolute h-[23.88%] w-[4.21%] top-[46.27%] right-[2.11%] bottom-[29.85%] left-[93.68%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/exiconeye@2x.png"
              />
              <input className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100"
                 onChange={(e)=>setEmail(e.target.value)}
              />
                
             
              <div className="absolute h-[34.33%] w-[17.63%] top-[0%] right-[79.43%] bottom-[65.67%] left-[2.94%] overflow-hidden text-center text-smi-8">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
                <div className="absolute top-[0%] left-[5.55px] leading-[22.53px] inline-block w-[58px]">
                  Email
                </div>
              </div>
            </div>
            <div className="absolute h-[43.37%] w-[99.87%] top-[56.63%] right-[0.13%] bottom-[0%] left-[0%] text-darkslategray">
            <div className="absolute h-[85.07%] w-[100.26%] top-[15.67%] right-[-0.13%] bottom-[-0.75%] left-[-0.13%] rounded-lg box-border border-[1px] border-solid border-silver" />
         
              <input className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100"   type="password" 
              onChange={(e)=>setPassword(e.target.value)}
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
              <button className="   bg-[#7c949e]  hover:bg-[#267296] absolute h-3/4 w-9/12 top-[12.5%] left-[12.5%] leading-[22.53px] flex items-center justify-center"
              
              >
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
      <img
        className="absolute top-[0px] left-[-26px] rounded-tl-none rounded-tr-481xl rounded-br-481xl rounded-bl-none w-[782px] h-[1020px] object-cover"
        alt=""
        src="/image-6@2x.png"
      />
    </div>
  );
};

export default Login;
