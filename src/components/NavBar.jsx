import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo/logo_transparent_background.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between h-20 max-w-[1240px] item-center mx-auto px-4 ">
      <div className="py-4 px-3">
        <Link to={"/"}>
          <img className="w-[110px] md:w-[140px]" src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="hidden md:flex py-4 md:content-center  ">
        <li className="p-4 hover:text-ontu font-monts md:text-center md:text-sm lg:text-[16px] ">
          <Link to={"/"}>Cuidado del hogar</Link>
          {/* <div className="bg-red w-2 h-5">
            <ul className="">
              <li>
                <a href="#">hola</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
            </ul>
          </div> */}
        </li>
        <li className="p-4  hover:text-ontu font-monts md:text-center md:text-sm lg:text-[16px]">
          <Link to={"/Sustentabilidad"}>Sustentabilidad</Link>
        </li>
        <li className="p-4  hover:text-ontu font-monts md:text-center md:text-sm lg:text-[16px]">
          <Link to={"/"}>Planes Financieros</Link>
        </li>
        <li className="p-4  hover:text-ontu font-monts md:text-center md:text-sm lg:text-[16px]">
          <Link to={"/"}>Blog</Link>
        </li>
        <li className="p-4  hover:text-ontu font-monts md:text-center md:text-sm lg:text-[16px]">
          <Link to={"/"}>Ontu para Empresas</Link>
        </li>
        <li className="p-4 hover:text-gray-00 font-monts  text-ontu md:text-center md:text-sm lg:text-[16px] no-underline hover:underline">
          <Link to={"/InicioSesion"}>Iniciar Sesión</Link>
        </li>
      </ul>

      <div className="cursor-pointer block md:hidden py-5" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 w-[60%]  top-0 border-r border-r-ontu h-full bg-white ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <div className="item-center mt-6 ml-4 w-full">
          <Link to={"/"}>
            <img className="w-[150px] md:w-[100px]" src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="pt-12  p-4">
          <li className="p-4 border-b border-ontu font-monts hover:text-ontu ">
            <Link to={"/"}>Servicios</Link>
          </li>
          <li className="p-4 border-b border-ontu font-monts hover:text-ontu">
            <Link to={"/Sustentabilidad"}>Sustentabilidad</Link>
          </li>
          <li className="p-4 border-b border-ontu font-monts hover:text-ontu">
            <Link to={"/"}>Planes Financieros</Link>
          </li>
          <li className="p-4 border-b border-ontu font-monts hover:text-ontu">
            <Link to={"/"}>Blog</Link>
          </li>
          <li className="p-4 border-b hover:text-ontu  border-ontu font-monts">
            <Link to={"/"}>Ontu para Empresas</Link>
          </li>
          <li>
            <p className="p-4 px-4 text-center">
              <span className="sm:text-sm text-gray-500">
                ¿Ya eres cliente?{" "}
              </span>
              <span className=" text-ontu hover:text-gray-700 no-underline hover:underline">
                <Link to={"/InicioSesion"}>Iniciar Sesión</Link>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
