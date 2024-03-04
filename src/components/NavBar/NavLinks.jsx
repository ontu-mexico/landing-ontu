import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeCare from "/src/assets/image/smartHome.jpg";

export const NavLinks = ({ progressPercentage }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  // Efecto del icono Down y Up

  const links = [
    {
      name: "Cuidado del Hogar",
      submenu: true,
      sublinks: [
        {
          Head: "Servicios",
          link: "/",
          sublink: [
            { name: "Electricidad", link: "/Electricidad" },
            { name: "Plomeria", link: "/Plomeria" },
            { name: "Hogar Inteligente", link: "/" },
          ],
        },
      ],
      img: homeCare,
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          {/** Nav Desktop */}
          <div className="px-3 text-left cursor-pointer group text-black hover:bg-slate-50 ">
            <h1
              className="py-3 lg:text-[12px] xl:text-[13px] text-[14px] flex justify-between items-center lg:pr-0 pr-5 font-monts font-semibold group text-center leading-relaxed  "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading();
              }}
            >
              {link.name}
              {/* Mobile Arrow  */}
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
            {link.submenu && (
              <div>
                <div className=" absolute top-30 hidden bg-white group-hover:lg:block hover:lg:block hover:transition-all duration-500 drop-shadow-xl ">
                  <span className="h-[2px] lg:block hidden lg:px-1 lg:bg-yellowOntu2  lg:animate-fade-right animate-duration-[3000ms] animate-delay-500" />
                  <div className="py-3 bg-white grid grid-cols-2 gap-6 w-[400px] ">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1
                          className="font-semibold flex mx-3 lg:text-[14px] xl:text-[14px]  text-ontu
                        "
                        >
                          <Link to={mysublinks.link}>{mysublinks.Head} </Link>
                        </h1>
                        {/** Sublinks */}
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-[12px] text-gray-900 my-3 mx-5 hover:text-ontu flex items-content-center items-center cursor-pointer">
                            <Link to={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                    <div className="w-[170px] justify-items-center">
                      <img className="" src={link.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/** Mobile menus */}
          <div className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks) => (
              <div>
                <div className="cursor-pointer ">
                  {/** Sublinks */}
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold text-[14px]  flex justify-between items-center lg:pr-0 pr-5 font-monts"
                  >
                    {slinks.Head}
                    <span className="inline lg:px-2 lg:ml:2 lg:hidden text-yellowOntu ">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up-outline"
                            : "chevron-down-outline"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "lg:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-2 pl-14 hover:text-ontu text-[13px]">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
