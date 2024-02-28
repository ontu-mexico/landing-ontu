import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeCare from "/src/assets/image/smartHome.jpg";
import sustentabilidad from "/src/assets/image/panelSolarTecho.jpg";

export const NavLinks = ({ progressPercentage }) => {
  const [heading, setHeading] = useState("");
  // Efecto del icono Down y Up
  const handleNav = () => {
    setHeading(!heading);
  };

  const links = [
    {
      name: "Cuidado del Hogar",
      menu: true,
      sublinks: [
        { name: "Eléctricidad", link: "", icon: "" },
        { name: "Plomería", link: "" },
        { name: "Smart Home", link: "" },
      ],
      img: homeCare,
    },
    {
      name: "Sustentabilidad",
      menu: true,
      sublinks: [
        { name: "Paneles Solares", link: "/PanelesSolares" },
        { name: "Almacenamiento de Energía", link: "" },
        { name: "Calentamiento de Agua", link: "" },
        { name: "Ahorro de Agua", link: "" },
      ],
      img: sustentabilidad,
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          {/* Desktop menu */}

          <div className="px-3 text-left cursor-pointer group text-black hover:bg-slate-50 ">
            <h1
              className="py-4 lg:text-[12px] xl:text-[12px] text-[14px] flex justify-between items-center lg:pr-0 pr-5 font-monts font-semibold group text-center"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
              {/* Mobile Arrow */}
              <span className="inline lg:px-2 lg:ml:2 lg:hidden text-ontu ">
                <ion-icon
                  name={`${
                    heading === link.name
                      ? "chevron-up-outline"
                      : "chevron-down-outline"
                  }`}
                ></ion-icon>
              </span>
              {/* Desktop Arrow */}
              <span className="text-[14px] lg:block hidden lg:px-2 lg:ml-2 group-hover:rotate-180 group-hover:-mt-1 text-ontu transition-all duration-700 ease-in-out">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </h1>
            {/*Submenu Desktop*/}
            {link.menu && (
              <div className="absolute top-30  bg-white hidden group-hover:lg:block hover:lg:block hover:transition-all duration-500 drop-shadow-xl">
                <div className="grid grid-cols-2 gap-8 p-2 items-center ">
                  <div className="w-[220px]  ">
                    <span className="h-[2px] lg:block hidden lg:px-1 lg:bg-yellowOntu2  lg:animate-fade-right animate-duration-[3000ms] animate-delay-500" />
                    {link.sublinks.map((slink) => (
                      <li className="group text-sm text-gray-900 my-4 mx-2 hover:text-ontu flex items-content-center items-center cursor-pointer group">
                        {/* <span className="text-[10px] lg:block hidden lg:px-1 lg:mt-1 text-grayOntu  lg:animate-fade-right animate-duration-[3000ms] animate-delay-500">
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span> */}
                        <Link to={slink.link}>{slink.name} </Link>
                      </li>
                    ))}
                  </div>

                  <div className="w-[170px] justify-items-center">
                    <img className="" src={link.img} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*Submenu Mobile*/}

          <div
            className={`
          ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
          >
            <div>
              {link.sublinks.map((slink) => (
                <li className="py-3 lg:px-4 pl-6 text-[14px]">
                  <Link className="hover:text-ontu" to={slink.link}>
                    {slink.name}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
