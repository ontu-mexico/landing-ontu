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
    <section className="w-full px-5 bg-white mt-10 mb-20">
      <div
        className="max-w-[1240px] mx-auto bg-ontu2/80 flex items-center justify-center rounded-3xl 
      "
      >
        <div className=" px-5 py-5 mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-nonepy-0 font-semibold lg:mt-15 text-center mt-5">
              ¿Qué puedes volver inteligente?
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
            <div className="p-4 sm:w-1/2 lg:w-1/4 ">
              <div className="h-full rounded-3xl bg-white " data-aos="fade-up">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={cerraduras}
                  alt="Cerraduras"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[24px] lg:text-[24px] tracking-wide leading-none font-semibold text-center mb-2 ">
                    Cerraduras
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />

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
            <div className="p-4 sm:w-1/2 lg:w-1/4 ">
              <div className="h-full rounded-3xl bg-white" data-aos="fade-up">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={persianas}
                  alt="Instalación de llave"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-2 ">
                    Cortinas
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />
                  <p className="text-[14px] md:text-[16px]  lg:text-[17px]  leading-tight tracking-normal text-justify">
                    Explora el lujo de la comodidad de cortinas automatizadas.
                    Nuestra exclusiva solución de cortinas automatizadas está
                    diseñada para ofrecerte un espacio elegante con un toque de
                    diseño único en tu hogar.
                  </p>
                  <ul className="mt-4 space-y-2 pl-4 text-[12px] md:text-[14px] lg:text-[15px] ">
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Ambientes personalizados
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Aprovechamientode la luz solar
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Control a través de tu dispositivo móvil
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
            <div className="p-4 sm:w-1/2 lg:w-1/4 ">
              <div className="h-full rounded-3xl bg-white " data-aos="fade-up">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={camaras}
                  alt="Camaras"
                />
                <div className="p-6 font-monts">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-2 ">
                    Cámaras
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />
                  <p className="text-[14px] md:text-[16px]  lg:text-[17px]  leading-tight tracking-normal text-justify ">
                    Ofrecemos las mejores cámaras de videovigilancia y las
                    timbres de vídeo. Para detecta amenazas reales con una
                    calidad de vídeo inigualable, tecnología resistente a la
                    intemperie y alertas de movimiento.
                  </p>
                  <ul className="mt-4 space-y-2 pl-4 text-[12px] md:text-[14px] lg:text-[15px] ">
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Supervisión y monitoreo en tiempo real
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Recopilación de prueba
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Control de acceso
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Seguridad
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
            {/**Card 4 */}
            <div className="p-4 sm:w-1/2 lg:w-1/4 ">
              <div className="h-full rounded-3xl bg-white " data-aos="fade-up">
                <img
                  className="lg:h-72 md:h-48 w-full object-cover object-center rounded-t-3xl"
                  src={instalaciones}
                  alt="Instalación de llave"
                />
                <div className="p-6 font-monts ">
                  <h2 className="text-[24px] md:text-[26px] lg:text-[28px] tracking-wide leading-none font-semibold text-center mb-2 ">
                    Luces
                  </h2>
                  <hr className="border-[1.5px] border-[#F2C00C] mb-2" />
                  <p className="text-[14px] md:text-[16px]  lg:text-[17px]  leading-tight tracking-normal text-justify ">
                    Crea y controla ambientes de iluminación para cada ocasión y
                    adaptados a tus necesidades. Aumenta el ahorro de energía de
                    tu espacio inteligente mediante la programación de horarios
                    de iluminación.
                  </p>
                  <ul className="mt-4 space-y-2 pl-4 text-[12px] md:text-[14px] lg:text-[15px] ">
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Nivel de iluminación programable
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Simulación de presencia
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Creación de escenas y ambientes
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
    </section>
  );
};
