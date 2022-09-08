import React from "react";
import Haris from "../Assets/assets/logo.jpg";
import Imgbut from "../Assets/assets/ost5.png"
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin } from "react-icons/bs";
export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="py-10">
        <img src={Haris} alt="" className="rounded-full w-60 h-60" />
        <h1 className="text-center font-semibold text-4xl py-2">
          M.Haris Naseem
        </h1>
        <p className="text-center text-gray-400 text-xl py-1">Web Developer</p>
        <div className="flex  items-center justify-center">
          <div className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
            <BsFacebook className="text-xl hover:text-white text-blue-700" />
          </div>
          <div className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
            <BsTwitter className="text-xl hover:text-white text-blue-500" />
          </div>
          <div className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
            <BsPinterest className="text-xl hover:text-white text-red-700" />
          </div>
          <div className="bg-white rounded m-2 p-2 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
            <BsLinkedin className="text-xl hover:text-white text-blue-900" />
          </div>
        </div>
        <div className="flex items-center justify-evenly rounded-full bg-gradient-to-r from-[#fa5252] to-[#dd2476] ">
            <div className=""><img src={Imgbut} alt="" /></div>
        <button className="flex items-center text-white text-2xl py-3 rounded ">
            Download CV
        </button>
        </div>
      </div>
    </div>
  );
}
