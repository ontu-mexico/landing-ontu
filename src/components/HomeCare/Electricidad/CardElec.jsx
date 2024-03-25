import React from "react";
import instalaciones from "/src/assets/electricidad/lamparaTecho.jpg";
import calidad from "/src/assets/electricidad/lamparas2.jpg";
import reparaciones from "/src/assets/electricidad/cable3.jpg";

//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const CardElec = () => {
  const navigate = useNavigate();
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="w-full px-5 bg-white  mb-20 ">
      <div
        className="max-w-[1240px] mx-auto bg-ontu2/50 flex items-center justify-center rounded-3xl 
      "
      >
        <div className=" px-5 py-5 mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-nonepy-0 font-semibold lg:mt-15 text-center mt-5">
              ¿En qué te cubrimos?
            </h2>
            <div
              className="h-[2px] w-[300px] lg:w-[400px] bg-[#F2C00C]"
              data-aos="fade-right"
            ></div>

            <p className=" text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-center mt-3">
              Esto solo es un vistazo, hay más
            </p>
          </div>

          <div className="flex flex-wrap -m-4 ">
            {/**Card 1 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3  ">
              <div className="h-full rounded-3xl bg-white " data-aos="fade-up">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={instalaciones}
                  alt="Instalación electrica"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-2 ">
                    Instalaciones Eléctricas
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />
                  <p className="text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-center">
                    Contamos con el servicio de instalaciones en electricas para
                    el sector Residencial de baja y alta tensión.
                  </p>

                  <ul className="mt-4 space-y-2 pl-4 text-[12px] md:text-[14px] lg:text-[15px] ">
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Instalación de Alumbrado
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Interruptores de Cuchillas, Térmicos
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Tableros de Control
                    </li>
                  </ul>
                  <div className="flex justify-center items-center mt-8  ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 2 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3   ">
              <div className="h-full rounded-3xl bg-white " data-aos="fade-up">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={calidad}
                  alt="Calidad de la luz"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-2 ">
                    Calidad en la Iluminación
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />

                  <p className="text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-justify ">
                    Ofrecemos el servicio de calidad de la luz para que la
                    iluminación en un espacio determinado sea consistente y
                    adecuad.
                  </p>

                  <ul className="mt-4 space-y-2 px-4 text-[12px] md:text-[14px] lg:text-[15px]">
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Calibración de equipos
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Reemplazo de lámparas
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Detección de Fallas Eléctricas
                    </li>
                  </ul>
                  <div className="flex justify-center items-center mt-8  ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Solicitar Ontuman
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 3 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 ">
              <div className="h-full rounded-3xl bg-white " data-aos="fade-up">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={reparaciones}
                  alt="Mantenimiento eléctrico"
                />
                <div className="p-6  font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-2 ">
                    Mantenimiento Eléctrico
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />

                  <p className="text-[13px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left ">
                    Ofrecemos servicio de mantenimiento correctivo y preventivo
                    en las instalaciones electricas para detectar fallas.
                  </p>
                  <ul className="mt-4 space-y-2 px-4 text-[12px] md:text-[14px] lg:text-[15px]">
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Mantenimiento Correctivo
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Mantenimiento Preventivo
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Reparación de cortos circuitos
                    </li>
                  </ul>
                  <div className="flex justify-center items-center mt-8  ">
                    <button
                      onClick={() => navigate("/Estudio")}
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
      <div className="flex w-full px-20 mb-5 mt-20 justify-center items-center ">
        <h2 className=" font-monts leading-none text-[28px] md:text-[32px]  lg:text-[36px]  text-center font-semibold tracking-wide">
          Un buen mantenimiento eléctrico es clave para tu seguridad y comodidad
          en el hogar.
        </h2>
      </div>
    </section>
  );
};
