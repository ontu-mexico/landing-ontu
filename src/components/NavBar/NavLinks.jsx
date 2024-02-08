import React, { useState } from "react";
import { Link } from "react-router-dom";
export const NavLinks = () => {
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
        { name: "Eléctricidad", link: ""   },
        { name: "Plomería", link: "" },
        { name: "Hogar Inteligente", link: "" },
      ],
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
    },
    {
      name: "Planes Financieros",
      menu: true,
      sublinks: [
        { name: "Arrendamiento Solar", link: "" },
        { name: "Crédito Solar", link: "" },
        { name: "Pago de Contado", link: "" },
      ],
    },
    {
      name: "Aprende",
      menu: true,
      sublinks: [
        { name: "Academia Solar", link: "" },
        { name: "Academia del Agua", link: "" },
        { name: "Academia para el Hogar", link: "" },
      ],
    },
    {
      name: "Ontu para empresas",
      menu: true,
      sublinks: [
        { name: "Energía limpia", link: "" },
        { name: "Calentamiento del Agua", link: "" },
      ],
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          {/* Desktop menu */}
    
            <div className="px-3 text-left cursor-pointer group text-black">
              <h1
                className="py-4 lg:text-[12px] xl:text-[12px] text-[14px] flex justify-between items-center lg:pr-0 pr-5 font-monts font-semibold group"
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
                        ? "chevron-down-outline"
                        : "chevron-up-outline"
                    }`}
                  ></ion-icon>
                </span>
                {/* Desktop Arrow */}
                <span className="text-[14px] lg:block hidden lg:px-2 lg:ml-2 group-hover:rotate-180 group-hover:-mt-1 text-ontu">
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </h1>
             {/*Submenu Desktop*/}
            {link.menu && (
               
              <div className="absolute top-22 bg-white hidden group-hover:lg:block hover:lg:block hover:transition-all duration-700 ">
                <div className=" lg:p-1">
                  <div className="lg:py-0.5 bg-ontu4">
                  
                  </div>
                {link.sublinks.map((slink) => (

                  <li className="text-sm text-gray-900 my-4 px-2  ">
                    <Link className="hover:text-ontu" to={slink.link}>
                      {slink.name}
                    </Link>
                  </li>
                ))}
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
