import React from "react";
import instalaciones from "/src/assets/plomeria/water-plomeria.jpg";
import inodoro from "/src/assets/plomeria/inodoro.jpg";
import reparaciones from "/src/assets/plomeria/plumber.jpg";
import { useNavigate } from "react-router-dom";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

export const CardPlomeria = () => {
  const navigate = useNavigate();
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="w-full px-5 bg-white  mb-16">
      <div className="max-w-[1240px] mx-auto bg-ontu2/50 flex items-center justify-center rounded-3xl ">
        <div className="px-5 py-5 mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-nonepy-0 font-semibold lg:mt-15 text-center mt-5">
              ¿En qué te cubrimos?
            </h2>
            <div
              className="h-[2px] w-[300px] lg:w-[400px] bg-[#F2C00C]"
              data-aos="fade-right"
            ></div>

            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-center mt-3">
              Esto solo es un vistazo, hay más
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {/**Card 1 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 mb-5 ">
              <div className="h-full rounded-3xl bg-white ">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={instalaciones}
                  alt="Instalación de llave"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-4 mt-2 ">
                    Instalaciones
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-4" />
                  <p className="text-[13px] md:text-[14px]  lg:text-[16px]   leading-tight tracking-normal text-center md:text-left">
                    Contamos con el servicio de instalaciones en plomeria para
                    el sector Residencial con amplia experiencia y
                    profesionalismo.
                  </p>

                  <div className="flex justify-center items-center mt-8  ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full mb-2 "
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 2 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 mb-5 ">
              <div className="h-full rounded-3xl bg-white ">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={inodoro}
                  alt="Básicos del hogar"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-4 mt-2">
                    Básicos del Hogar
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-4" />
                  <p className="text-[13px] md:text-[14px]  lg:text-[16px]   leading-tight tracking-normal text-center md:text-left">
                    Ofrecemos el servicio de limpieza y desazolve del sistema de
                    drenaje para destapar o eliminar suciedad acumulada.
                  </p>

                  <div className="flex justify-center items-center mt-8  ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full mb-2"
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 3 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 mb-5 ">
              <div className="h-full rounded-3xl bg-white">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center  rounded-t-3xl"
                  src={reparaciones}
                  alt="Instalación de llave"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-4 mt-2 ">
                    Tuberías y Desagües
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-4" />
                  <p className="text-[13px] md:text-[14px]  lg:text-[16px]   leading-tight tracking-normal text-center md:text-left ">
                    Realizamos servicios de plomería en la Ciudad de México a un
                    bajo costo con excelente atención y calidad de servicio.
                  </p>

                  <div className="flex justify-center items-center mt-8  ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full mb-2 "
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
      <div className="flex w-full px-20 mb-5 mt-16 justify-center items-center ">
        <h2 className=" font-monts leading-nonetext-[20px] md:text-[22px] lg:text-[24px] text-center font-semibold tracking-wide">
          No permitas que una gota se convierta en una inundación, déjalo en
          manos profesionales.
        </h2>
      </div>
    </section>
  );
};
