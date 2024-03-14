import React from "react";
import instalaciones from "/src/assets/SmartHome/controlLuces.jpg";
import temp from "/src/assets/SmartHome/controlTemp.jpg";
import persianas from "/src/assets/SmartHome/persianas.jpg";

import { useNavigate } from "react-router-dom";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export const CardSH = () => {
  const navigate = useNavigate();
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="flex items-center justify-center">
      <div className="container px-5 py-5 mx-auto">
        <div
          className="text-center mb-12 font-monts flex flex-col justify-center items-center"
          data-aos="fade-right"
        >
          <h2 className="lg:text-[22px] mb-3 font-monts font-medium text-[18px] text-blueOntu leading-none py-0 lg:mt-15 text-center mt-5">
            Nuestros
          </h2>
          <h1 className="font-monts text-center md:text-[42px] lg:text-[46px] text-[38px] leading-none mb-5  font-semibold  ">
            Servicios Ofrecidos
          </h1>
          <div
            className="h-[2px]  w-[300px] lg:w-[400px]  bg-[#F2C00C]"
            data-aos="fade-right"
          ></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {/**Card 1 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3 ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden"
              data-aos="fade-right"
            >
              <img
                className="lg:h-72 md:h-48 w-full object-cover object-center"
                src={instalaciones}
                alt="Instalación de llave"
              />
              <div className="p-6 hover:bg-blueOntu/90 hover:text-white transition duration-300 ease-in font-monts text-justify">
                <h1 className="text-[26px] font-semibold mb-3 border-b-2 border-[#F2C00C]">
                  Control de Iluminación
                </h1>
                <p className="leading-relaxed mb-5 ">
                  Crea y controla ambientes de iluminación para cada ocasión y
                  adaptados a tus necesidades. Aumenta el ahorro de energía de
                  tu espacio inteligente mediante la programación de horarios de
                  iluminación.
                </p>
                <ul className="mt-4 space-y-2 px-4">
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
                    Creación de escenas y ambientes personalizados
                  </li>
                </ul>
                <div className="flex items-center flex-wrap mt-6 justify-right">
                  <h5
                    onClick={() => navigate("/Estudio")}
                    className="uppercase cursor-pointer inline-flex text-center hover:font-bold text-[#F2C00C] hover:text-white font-semibold hover:animate-fade-right animate-duration-[1500ms] animate-ease-out"
                  >
                    Contratar
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/**Card 2 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3 ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden"
              data-aos="fade-right"
            >
              <img
                className="lg:h-72 md:h-48 w-full object-cover object-center"
                src={persianas}
                alt="Instalación de llave"
              />
              <div className="p-6  font-monts hover:bg-blueOntu/90 hover:text-white transition duration-300 ease-in  text-justify">
                <h1 className="text-[26px] font-semibold mb-3 border-b-2 border-[#F2C00C]">
                  Control de Persianas
                </h1>
                <p className="leading-relaxed mb-6">
                  Explora el lujo de la comodidad de Persianas automatizadas.
                  Nuestra exclusiva solución de persianas y cortinas
                  automatizadas está diseñada para ofrecerte un espacio elegante
                  con un toque de diseño único.
                </p>
                <ul className="mt-4 space-y-2 px-4">
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
                <div className="flex items-center flex-wrap mt-6 justify-right">
                  <h5
                    onClick={() => navigate("/Estudio")}
                    className="uppercase cursor-pointer inline-flex text-center hover:font-bold text-[#F2C00C] hover:text-white font-semibold hover:animate-fade-right animate-duration-[1500ms] animate-ease-out"
                  >
                    Contratar
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/**Card 3 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3 ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden"
              data-aos="fade-right"
            >
              <img
                className="lg:h-72 md:h-48 w-full object-cover object-center"
                src={temp}
                alt="Instalación de llave"
              />
              <div className="p-6  font-monts hover:bg-blueOntu/90 hover:text-white transition duration-300 ease-in  text-justify">
                <h1 className="text-[26px] font-semibold mb-3 border-b-2 border-[#F2C00C]">
                  Control de Temperatura
                </h1>
                <p className="leading-relaxed mb-10 ">
                  Logra la temperatura perfecta en cada uno de tus espacios
                  inteligentes, aumenta el ahorro de energía automatizando el
                  encendido y apagado de tu aire acondicionado o minisplit.
                </p>

                <ul className="mt-4 space-y-2 px-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Eficiencia energética
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Fácil configuración
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Clima optimizado 24/7
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Mejora en la calidad del aire
                  </li>
                </ul>
                <div className="flex items-center flex-wrap mt-6 justify-right">
                  <h5
                    onClick={() => navigate("/Estudio")}
                    className="uppercase cursor-pointer inline-flex text-center hover:font-bold text-[#F2C00C] hover:text-white font-semibold hover:animate-fade-right animate-duration-[1500ms] animate-ease-out"
                  >
                    Contratar
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
