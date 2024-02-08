import React, { useState } from "react";
import logo from "/src/assets/logo/logo_transparent_background.png";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };
  const [subMenuOpen, setubMenuOpen] = useState(false);
  const handleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <nav className="fixed bg-white w-full h-[90px] shadow-sm  text-black z-40 ">
      <div className=" h-[90px] bg-transparent text-black border-white lg:hover:h-[260px] lg:hover:border-b lg:hover:border-ontu lg:hover:bg-white hover:transition-all duration-700">
       <div className="flex items-center font-monts justify-around py-1 ">
        <div className="z-50 p-3 lg:w-auto w-full flex justify-between ">
          <Link to="">
            <img
              className="w-[100px] md:w-[130px] cursor-pointer "
              src={logo}
              alt="Logo"
            />
          </Link>
          <div className="cursor-pointer lg:text-white lg:hidden" onClick={handleNav}>
            {open ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
          </div>
        </div>
         {/* Nav Desktop */}
        <ul className="lg:flex hidden  items-center gap-8 font-monts text-[14px] text-black ">
            <NavLinks />     
        </ul>
       
        {/* Nav Mobile */}
        <ul
          className={`lg:hidden fixed top-0 h-full bottom-0 w-[70%] md:w-[50%] border-r border-ontu bg-white py-28 pl-4 duration-500 ${
            open ? "left-0 " : "left-[-100%]"
          } `}
        >
          <NavLinks />
        </ul>
      </div>
      </div>

    </nav>
  );
};
