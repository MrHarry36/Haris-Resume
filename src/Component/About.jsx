import React from "react";
import About1 from "./About1";
import About2 from "./About2";
import Slider from "./Slider";
import Haris from "../Assets/assets/har1.jpg";
import { GoDeviceMobile } from "react-icons/go";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../Assets/assets/ost01.svg";
import logo1 from "../Assets/assets/ost02.svg";
import logo2 from "../Assets/assets/ost03.svg";
import logo3 from "../Assets/assets/ost04.svg";
import logo4 from "../Assets/assets/ost05.svg";
import logo5 from "../Assets/assets/ost001.svg";

export default function About() {
  return (
    <div className="container_flud">
      <div>
        <About1 data={{ head: "About Me" }} />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1  bg-white">
        <div className="lg:col-span-1 col-span-3 px-10">
          <img
            src={Haris}
            className="rounded-3xl lg:w-[25rem] lg:h-[25rem]  md:w-[80%] mx-auto my-10 "
          />
        </div>
        <div className="my-10 col-span-2">
          <div className="md:text-start text-center">
            <strong className="text-2xl text-[#dd2476]">Who am I?</strong>
          </div>
          <p className="text-xl  md:text-start text-center text-gray-500 py-5 ">
            I'm Creative Director and Web Developer from Pakistan, Dubai,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p className="text-xl  md:text-start text-center text-gray-500 ">
            My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </p>
          <div className="py-3">
            <div className=" md:text-start text-center">
              <strong className="text-2xl   text-[#dd2476]">
                Personal Info
              </strong>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="flex items-center py-5 ">
                <div className="text-2xl text-[#dd2476] bg-white px-2 py-2 rounded shadow mr-2">
                  <GoDeviceMobile />
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                    +92 321 9486846
                  </p>
                </div>
              </div>
              <div className="flex items-center py-5">
                <div className="text-2xl text-[#dd2476] bg-white px-2 py-2 rounded shadow mr-2">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                    Lahore,Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center py-5">
                <div className="text-2xl text-[#dd2476] bg-white px-2 py-2 rounded shadow mr-2">
                  <FiMail />
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                    harisnaseem830@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center py-5">
                <div className="text-2xl text-[#dd2476] bg-white px-2 py-2 rounded shadow mr-2">
                  <FaCalendarAlt />
                </div>
                <div>
                  <p className="text-gray-500">Date Of Birth</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                    Dec 31,1997
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold bg-white px-10">Who am i!</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <About2
          card={{
            log: logo,
            Color: "bg-[#FCF4FF]",
            title: "Ui/Ux Designer",
            para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          }}
        />
        <About2
          card={{
            log: logo1,
            title: "App Developement",
            Color: "bg-[#FEFAF0]",
            para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          }}
        />
        <About2
          card={{
            log: logo2,
            Color: "bg-[#FCF4FF]",
            title: "Photography",
            para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          }}
        />
        <About2
          card={{
            log: logo3,
            title: "Photogarphy",
            Color: "bg-[#FFF4F4]",
            para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          }}
        />
        <About2
          card={{
            log: logo4,
            title: "Menagement",
            Color: "bg-[#FFF4F4]",
            para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          }}
        />
        <About2
          card={{
            log: logo5,
            Color: "bg-[#F3FAFF]",
            title: "Web Developement",
            para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
          }}
        />
      </div>
      {/* <div><Slider /></div> */}
    </div>
  );
}
