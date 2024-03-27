import React, { useState } from "react";
import { Link } from "react-router-dom";
import empresa from "/src/assets/image/empresa.jpg";
import sustentabilidad from "/src/assets/image/panelSolarTecho.jpg";
export const NavLinks2 = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  // Efecto del icono Down y Up

  const links = [
    {
      name: "Qué hacemos",
      submenu: true,
      sublinks: [
        {
          Head: "Sustentabilidad",
          link: "/",
          sublink: [
            { name: "Paneles Solares", link: "/PanelesSolares" },
            { name: "Almacenamiento de Energía", link: "" },
            { name: "Calentamiento de Agua", link: "" },
            { name: "Ahorro de Agua", link: "" },
          ],
        },
        {
          Head: "Ontu Empresas",
          link: "/",
          sublink: [
            { name: "Energía Limpia", link: "/" },
            { name: "Calentamiento del agua", link: "/" },
          ],
        },
      ],
      img: sustentabilidad,
    },
    {
      name: "Cómo lo hacemos",
      submenu: true,
      sublinks: [
        {
          Head: "Aprende",
          link: "/",
          sublink: [
            { name: "Academia Solar", link: "/" },
            { name: "Academia del Agua", link: "/" },
            { name: "Academia para el Hogar", link: "/" },
          ],
        },
        {
          Head: "Ontu",
          sublink: [
            { name: "FAQs", link: "/" },
            { name: "Estrategias de Impacto", link: "/" },
            { name: "Porque lo hacemos", link: "/" },
            { name: "Registro de Personal", link: "/Personal" },
          ],
        },
      ],
      img: empresa,
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          {/** Nav Desktop */}
          <div className="px-3 text-left cursor-pointer group text-black hover:bg-slate-50 ">
            <h1
              className="py-3 lg:text-[12px] xl:text-[13px] text-[14px] flex justify-between items-center lg:pr-0 pr-5 font-monts font-semibold group text-center leading-relaxed "
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
              <div className=" absolute top-30 hidden bg-white group-hover:lg:block hover:lg:block hover:transition-all duration-500 drop-shadow-xl ">
                <span className="h-[2px] lg:block hidden lg:px-1 lg:bg-yellowOntu2  lg:animate-fade-right animate-duration-[3000ms] animate-delay-500" />
                <div>
                  <div className="py-3 bg-white grid grid-cols-3 w-[650px]">
                    {link.sublinks.map((mysublinks, index2) => (
                      <div key={index2}>
                        <h1 className="font-semibold flex ml-3 lg:text-[14px] xl:text-[14px] text-ontu ">
                          <Link to={mysublinks.link}>{mysublinks.Head} </Link>
                        </h1>
                        {/** Sublinks */}
                        {mysublinks.sublink.map((slink, index3) => (
                          <li
                            key={index3}
                            className="text-[12px] text-gray-900 my-3 mx-4 hover:text-ontu flex items-content-center items-center cursor-pointer"
                          >
                            <Link to={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                    <div className="w-[190px] h-[150px] flex items-center ">
                      <img className="" src={link.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/** Mobile menus */}
          <div className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks, index4) => (
              <div key={index4}>
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
                    {slinks.sublink.map((slink, index5) => (
                      <li
                        key={index5}
                        className="py-2 pl-14 hover:text-ontu text-[13px]"
                      >
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
