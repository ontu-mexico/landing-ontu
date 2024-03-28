import React from "react";
import instalaciones from "/src/assets/SmartHome/controlLuces.jpg";
import cerraduras from "/src/assets/SmartHome/cerraduras.jpg";
import persianas from "/src/assets/SmartHome/persianas.jpg";
import camaras from "/src/assets/SmartHome/camaras.jpg";

import { useNavigate } from "react-router-dom";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";

export const CardSH = () => {
  const navigate = useNavigate();
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="w-full px-5 bg-white mt-16 mb-16">
      <div
        className="max-w-[1240px] mx-auto bg-ontu2/50 flex items-center justify-center rounded-3xl 
      "
      >
        <div className=" px-5 py-5 mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-nonepy-0 font-semibold lg:mt-15 text-center mt-5">
              ¿Qué puedes volver inteligente?
            </h2>
            <div className="h-[2px] w-[300px] lg:w-[400px] bg-[#F2C00C]"></div>

            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-center mt-3">
              Esto solo es un vistazo, hay más
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {/**Card 1 */}
            <div className="p-4 sm:w-1/2 lg:w-1/4 mb-5 ">
              <div className="h-full rounded-3xl bg-white ">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={cerraduras}
                  alt="Cerraduras"
                />
                <div className="p-6 font-monts">
                  <h1 className="text-[24px] md:text-[24px] lg:text-[24px] tracking-wide leading-none font-semibold text-center mb-4 mt-2 ">
                    Cerraduras
                  </h1>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-4" />

                  <div className="flex justify-center items-center mt-5  ">
                    <button
                      onClick={() => navigate("")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 2 */}
            <div className="p-4 sm:w-1/2 lg:w-1/4 mb-5 ">
              <div className="h-full rounded-3xl bg-white">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={persianas}
                  alt="Instalación de llave"
                />
                <div className="p-6 font-monts">
                  <h1 className="text-[24px] md:text-[24px] lg:text-[24px] tracking-wide leading-none font-semibold text-center mb-4 mt-2 ">
                    Cortinas
                  </h1>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />

                  <div className="flex justify-center items-center mt-5  ">
                    <button
                      onClick={() => navigate("")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full  "
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 3 */}
            <div className="p-4 sm:w-1/2 lg:w-1/4 mb-5">
              <div className="h-full rounded-3xl bg-white ">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={camaras}
                  alt="Camaras"
                />
                <div className="p-6 font-monts">
                  <h1 className="text-[24px] md:text-[24px] lg:text-[24px] tracking-wide leading-none font-semibold text-center mb-4 mt-2 ">
                    Cámaras
                  </h1>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />
                  <div className="flex justify-center items-center mt-5  ">
                    <button
                      onClick={() => navigate("")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full  "
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 4 */}
            <div className="p-4 sm:w-1/2 lg:w-1/4 mb-5">
              <div className="h-full rounded-3xl bg-white ">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={instalaciones}
                  alt="Instalación de llave"
                />
                <div className="p-6 font-monts ">
                  <h1 className="text-[24px] md:text-[24px] lg:text-[24px] tracking-wide leading-none font-semibold text-center mb-4 mt-2 ">
                    Luces
                  </h1>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />
                  <div className="flex justify-center items-center mt-5  ">
                    <button
                      onClick={() => navigate("")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
