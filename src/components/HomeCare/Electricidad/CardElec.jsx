import React from "react";
import instalaciones from "/src/assets/electricidad/lamparaTecho.jpg";
import arreglar from "/src/assets/electricidad/arreglar.jpg";
import reparaciones from "/src/assets/electricidad/cable.jpg";
import { useNavigate } from "react-router-dom";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";

export const CardElec = () => {
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
          <h2 className="lg:text-[22px] mb-3 font-monts font-medium text-[18px] text-ontu leading-none py-0 lg:mt-15 text-center mt-5">
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
          <div className="p-4 sm:w-1/2  ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden"
              data-aos="fade-right"
            >
              <img
                className="lg:h-72 md:h-48 w-full object-cover object-center"
                src={instalaciones}
                alt="Instalación de llave"
              />
              <div className="p-6 hover:bg-ontu/90 hover:text-white transition duration-300 ease-in font-monts">
                <h1 className="text-[26px] font-semibold mb-3 border-b-2 border-[#F2C00C]">
                  Instalaciones Eléctricas
                </h1>
                <p className="leading-relaxed ">
                  Contamos con el servicio de instalaciones en electricas para
                  el sector Residencial de baja y alta tensión.
                </p>
                <h5></h5>
                <ul className="mt-4 space-y-2 px-4">
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
                    Instalación de Cableado de Distribución y Alimentación
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Tableros de Control
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
          <div className="p-4 sm:w-1/2  ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden"
              data-aos="fade-right"
            >
              <img
                className="lg:h-72 md:h-48 w-full object-cover object-center"
                src={reparaciones}
                alt="Instalación de llave"
              />
              <div className="p-6 hover:bg-ontu/90 hover:text-white transition duration-300 ease-in font-monts">
                <h1 className="text-[26px] font-semibold mb-3 border-b-2 border-[#F2C00C]">
                  Mantenimiento
                </h1>
                <p className="leading-relaxed ">
                  Ofrecemos servicio de mantenimiento correctivo y preventivo en
                  las instalaciones electricas para detectar fallas.
                </p>
                <h5></h5>
                <ul className="mt-4 space-y-2 px-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Variaciones de Voltaje
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Mantenimiento correctivo y preventivo
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Detección de Fallas Eléctricas
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Reparación de cortos circuitos.
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
          {/* <div className="p-4 sm:w-1/2 lg:w-1/3 ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden"
              data-aos="fade-right"
            >
              <img
                className="lg:h-72 md:h-48 w-full object-cover object-center"
                src={reparaciones}
                alt="Instalación de llave"
              />
              <div className="p-6 hover:bg-ontu/90 hover:text-white transition duration-300 ease-in font-monts">
                <h1 className="text-[26px] font-semibold mb-3 border-b-2 border-[#F2C00C]">
                  Servicio de fontanería
                </h1>
                <p className="leading-relaxed ">
                  Realizamos servicios de fontanería en la Ciudad de México a un
                  bajo costo con excelente atención y calidad de servicio.
                </p>
                <h5></h5>
                <ul className="mt-4 space-y-2 px-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Lavado de Cisternas
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Instalación en líneas del gas
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Reparación en líneas del gas{" "}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Plomería Integral
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
          </div> */}
        </div>
      </div>
    </section>
  );
};
