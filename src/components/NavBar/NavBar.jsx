import React, { useState } from "react";
import logo from "/src/assets/logo/logo_transparent_background.png";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { NavLinks2 } from "./NavLinks2";

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
    <nav className="fixed w-full h-[75px] text-black z-40 bg-white lg:bg-opacity-80 lg:bg-clip-padding lg:backdrop-blur-sm">
      <div className="flex items-center font-monts justify-around py-2  ">
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
          <NavLinks />
          <li>
            <Link
              to="/"
              className="py-4 px-3 inline-block font-monts font-semibold lg:text-[12px] xl:text-[12px] text-[14px] hover:bg-slate-50 text-center "
            >
              Planes Financieros
            </Link>
          </li>
          <NavLinks2 />
          <li>
            <Link
              to="/InicioSesion"
              className="py-4 px-3 inline-block font-monts font-bold lg:text-[12px] xl:text-[12px] text-[14px] hover:bg-slate-50 text-ontu text-center"
            >
              Acceso a Clientes
            </Link>
          </li>
        </ul>
        <div></div>

        {/* Nav Mobile */}
        <ul
          className={`lg:hidden fixed top-0 h-full bottom-0 w-[70%] md:w-[50%] border-r border-ontu bg-white py-28 pl-4 duration-500 ${
            open ? "left-0 " : "left-[-100%]"
          } `}
        >
          <NavLinks />
          <li className="hover:bg-slate-50">
            <Link
              to="/"
              className="py-3 px-3 inline-block font-monts font-semibold text-[14px]   "
            >
              Planes Financieros
            </Link>
          </li>
          <NavLinks2 />

          <li className="hover:bg-slate-50 ">
            <Link
              to="/InicioSesion"
              className="py-3 px-3 inline-block font-monts font-bold text-[14px] text-ontu   "
            >
              Acceso a Clientes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
