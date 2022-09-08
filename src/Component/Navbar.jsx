import React from "react";
import { BsMoonStars, BsList, BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io";
import { FiCodesandbox } from "react-icons/fi";
import { RiPagesLine, RiContactsBookLine } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import Img1 from "../Assets/assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative container_flud flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:block lg:static  lg:justify-start">
            <img src={Img1} alt="" className="w-32 bg-transparent"/>
            <button
              className="text-black flex items-center justify-between cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="bg-[#dd2476]  px-2 py-2 text-xl rounded-full text-white">
                <BsList />
              </div>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-between lg:w-auto w-full lg:flex-row list-none lg:ml-auto border">
              <Link to="/">
                <li className="py-2 pr-4 pl-4 mx-2 flex items-center lg:justify-between justify-start text-lg lg:text-white bg-white rounded lg:bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-[#dd2476]">
                  <div className="mr-2">
                    <AiOutlineHome />
                  </div>
                  <a href="">Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li className="py-2 pr-4 pl-4 mx-2 flex items-center bg-white lg:justify-between justify-start text-lg lg:hover:text-white rounded hover:text-[#dd2476] lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                  <div className="mr-2">
                    <BsPerson />
                  </div>
                  <a href="">About</a>
                </li>
              </Link>
              <Link to="/resume">
                <li className="py-2 pr-4 pl-4 mx-2 flex items-center bg-white lg:justify-between justify-start text-lg lg:hover:text-white hover:text-[#dd2476] rounded lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                  <div className="mr-2">
                    <RiPagesLine />
                  </div>
                  <a href="">Resume</a>
                </li>
              </Link>
              <Link to="/work">
                <li className="py-2 pr-4 pl-4 mx-2 flex items-center bg-white lg:justify-between justify-start hover:text-[#dd2476] text-lg lg:hover:text-white lg:hover:bg-gradient-to-r from-[#fa5225] to-[#dd2476] rounded">
                  <div className="mr-2">
                    <FiCodesandbox />
                  </div>
                  <a href="">Works</a>
                </li>
              </Link>
              <Link to="/blog">
                <li className="py-2 pr-4 pl-4 mx-2 flex items-center bg-white lg:justify-between justify-start text-lg lg:hover:text-white hover:text-[#dd2476] rounded lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                  <div className="mr-2">
                    <FaBloggerB />
                  </div>
                  <a href="">Blog</a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="py-2 pr-4 pl-4 mx-2 flex items-center bg-white lg:justify-between justify-start text-lg lg:hover:text-white hover:text-[#dd2476] rounded lg:hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476]">
                  <div className="mr-2">
                    <RiContactsBookLine />
                  </div>
                  <a href="">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
