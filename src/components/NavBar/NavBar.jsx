import { useState } from "react";
import logo from "/src/assets/logo/ontu_logo.png";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { NavLinks2 } from "./NavLinks2";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };
  const [subMenuOpen, setubMenuOpen] = useState(false);
  const handleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  const handleClick = () => {
    window.open("https://portal.ontu.mx/login", "_blank");
  };

  return (
    <nav className="fixed w-full h-[75px] text-black z-40 bg-white lg:bg-opacity-80 lg:bg-clip-padding lg:backdrop-blur-sm animate-fade-down animate-duration-[1500ms]  animate-ease-in-out">
      <div className="flex items-center font-monts justify-around py-2 shadow-md  ">
        <div className="z-50 p-2 lg:w-auto w-full flex justify-between ">
          <Link to="/">
            <img
              className="w-[90px] md:w-[100px] cursor-pointer  "
              src={logo}
              alt="Logo"
            />
          </Link>
          <div
            className="cursor-pointer py-2 mr-2 lg:text-white lg:hidden"
            onClick={handleNav}
          >
            {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
        {/* Nav Desktop */}
        <ul className="lg:flex hidden items-center font-monts text-[14px] text-black  ">
          <NavLinks2 />

          <li>
            <Link
              to="/financiamiento"
              className="py-4 px-3 inline-block font-monts font-semibold lg:text-[12px] xl:text-[13px] text-[14px] hover:bg-slate-50 text-center leading-relaxed "
            >
              Financiamiento
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="lg:flex hidden items-center  ">
          <div className="text-ontu ">
            <div
              onClick={handleClick}
              className="h-8 w-8 ml-8 cursor-pointer flex justify-center items-center hover:text-gray-600 active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full"
            >
              <IoPersonCircle size={40} />
            </div>
            <div className="text-[12px]">
              <p
                onClick={handleClick}
                className="text-center cursor-pointer font-semibold hover:text-gray-600"
              >
                Acceso a Portal
              </p>
            </div>
          </div>
        </div>

        {/* Nav Mobile */}
        <ul
          className={`lg:hidden fixed top-0  bottom-0 w-[70%] md:w-[50%] border-r border-ontu bg-white py-28 pl-4 duration-500 h-screen ${
            open ? "left-0" : "-left-full "
          }`}
        >
          <NavLinks2 />
          <li className="hover:bg-slate-50">
            <Link
              to="/financiamiento"
              className="py-3 px-3 inline-block font-monts font-semibold lg:text-[12px] xl:text-[13px] text-[14px] leading-relaxed  "
            >
              Financiamiento
            </Link>
          </li>
          <NavLinks />
          <li className="hover:bg-slate-50 ">
            <p
              onClick={handleClick}
              className="py-3 px-3 inline-block font-monts font-bold text-[14px] text-ontu  leading-relaxed cursor-pointer  "
            >
              Acceso a Portal
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};
