import React, { useState } from "react";
import { Link } from "react-router-dom";
import aprende from "/src/assets/image/aprende.jpg";
import empresas from "/src/assets/image/empresa.jpg";

export const NavLinks2 = () => {
  const [heading, setHeading] = useState("");
  // Efecto del icono Down y Up
  const handleNav = () => {
    setHeading(!heading);
  };

  const links = [
    {
      name: "Aprende",
      menu: true,
      sublinks: [
        { name: "Academia Solar", link: "" },
        { name: "Academia del Agua", link: "" },
        { name: "Academia para el Hogar", link: "" },
      ],
      img: aprende,
    },
    {
      name: "Ontu para empresas",
      menu: true,
      sublinks: [
        { name: "Energía Limpia", link: "" },
        { name: "Calentamiento del Agua", link: "" },
      ],
      img: empresas,
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          {/* Desktop menu */}

          <div className="px-3 text-left cursor-pointer group text-black hover:bg-slate-50">
            <h1
              className="py-4 lg:text-[12px] xl:text-[12px] text-[14px] flex justify-between items-center lg:pr-0 pr-5 font-monts font-semibold group text-center"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
              {/* Desktop Arrow */}
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
              <div className="absolute top-22 bg-white hidden group-hover:lg:block hover:lg:block hover:transition-all duration-500 drop-shadow-xl  ">
                <div className="grid grid-cols-2 gap-8 p-2 items-center ">
                  <div className=" w-[220px]">
                  <span className="h-[2px] lg:block hidden lg:px-1 lg:bg-yellowOntu2  lg:animate-fade-right animate-duration-[3000ms] animate-delay-500" />
                    {link.sublinks.map((slink) => (
                      <li className="text-sm text-gray-900 my-4 px-2  ">
                        <Link className="hover:text-ontu" to={slink.link}>
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                  <div className="w-[170px] justify-items-center">
                    <img className="" src={link.img} alt="algo" />
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
