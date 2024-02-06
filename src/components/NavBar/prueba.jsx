import React from "react";
import { Link } from "react-router-dom";

export const prueba = () => {
    const links = [
        {
          name: "Cuidado del Hogar",
          submenu: true,
          sublinks: [
            {
              Head: "Electricidad",
              sublink: [
                { name: "Electricidad", link: "/" },
                { name: "Plomeria", link: "/" },
                { name: "Hogar Inteligente", link: "/" },
              ],
            },
          ],
        },
        { name: "Sustentabilidad" },
        { name: "Planes Financieros" },
        { name: "Aprende" },
        { name: "Ontu para empresas" },
      ];
    
      return (
        <>
          {links.map((link) => (
            <div>
              <div className="px-3 text-left md:cursor-pointer ">
                <h1 className="py-4 ">{link.name}</h1>
                {link.submenu && (
                  <div>
                    <div>
                      <div>
                        {link.sublinks.map((mysublinks) => (
                          <div>
                            <h1>{mysublinks.Head}</h1>
                            {mysublinks.sublink.map(slink=>(
                                <li>
                                    <Link to={slink.name} >{slink.name}</Link>
                                </li>
                            ))}
                          </div>
    
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
  );
};
