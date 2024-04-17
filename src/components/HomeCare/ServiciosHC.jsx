import plomero from "/src/assets/plomeria/ontu_promeria.jpg";
import plomero2 from "/src/assets/plomeria/ontu_promeria_.jpg";
import smart from "/src/assets/SmartHome/ontu_smart-home_.jpg";
import smart2 from "/src/assets/SmartHome/ontu_smart-home.jpg";
import electricidad from "/src/assets/electricidad/ontu_electricidad_lamparas.jpg";
import electricidad2 from "/src/assets/electricidad/ontu_electricidad_lamparas_.jpg";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdElectricBolt } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { SiSmartthings } from "react-icons/si";

export const ServiciosHC = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <main>
      {/* Electricidad */}
      <div className="w-full px-5 bg-white mb-16 mt-16">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center rounded-3xl ">
          <div className="lg:w-1/2 hidden lg:flex lg:justify-center  ">
            <picture>
              <source
                media="(max-width: 640px )"
                srcSet={electricidad}
                sizes=""
              />
              <source
                media="(min-width: 641px )"
                srcSet={electricidad2}
                sizes=""
              />
              <img
                src={electricidad2}
                alt="Ontu Electricidad"
                className="w-full h-[300px] rounded-3xl object-cover object-center"
              />
            </picture>
          </div>
          <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
            <div className="flex">
              <div className="lg:hidden flex justify-center mt-10 mr-5 ">
                <div className="flex justify-center items-center w-[80px] h-[80px]  border-2 border-ontu text-ontu  rounded-3xl py-2 ">
                  <p className="text-ontu">
                    <MdElectricBolt size={40} />
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <h1 className="font-monts lg:text-left text-left text-[38px] md:text-[42px]  lg:text-[46px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black uppercase ">
                  Electricidad
                </h1>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                    Nuestros servicios de electricidad para el hogar están
                    diseñados para proporcionar soluciones seguras y eficientes
                    para todas las necesidades eléctricas de tu hogar.
                  </p>
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5">
                    Desde instalaciones y reparaciones básicas hasta
                    actualizaciones avanzadas para mejorar la eficiencia
                    energética y la seguridad de tu hogar.
                  </p>
                  <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                    <span className="font-semibold hover:text-blueOntu flex flex-row items-center">
                      <Link to={"/electricidad"}>
                        Servicios de Electricidad
                      </Link>
                      <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                        <FaArrowRight size={15} />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plomeria */}
      <div className="w-full px-5 bg-white mb-16 mt-16">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center  rounded-3xl ">
          <div className="flex flex-col mx-5 lg:mx-10 text-left lg:w-1/2 ">
            <div className="flex">
              <div className="lg:hidden flex justify-center mt-10 mr-5 ">
                <div className="flex justify-center items-center w-[80px] h-[80px]  border-2 border-ontu text-ontu  rounded-3xl py-2 ">
                  <p className="text-ontu">
                    <BsTools size={40} />
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-monts lg:text-left text-left text-[38px] md:text-[42px]  lg:text-[46px]  leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black uppercase ">
                  Plomería
                </h1>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                    Nuestras soluciones de plomería para el hogar se enfocan en
                    ofrecer soluciones integrales y confiables para todas sus
                    necesidades relacionadas con tuberías, grifos, desagües y
                    más.
                  </p>
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5">
                    Ya sea que necesites reparar una fuga o instalar nuevas
                    tuberías, estamos aquí para ayudarte.
                  </p>
                  <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                    <span className="font-semibold hover:text-blueOntu flex flex-row items-center">
                      <Link to={"/plomeria"}>Servicios de Plomería</Link>
                      <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                        <FaArrowRight size={15} />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2  hidden lg:flex justify-center ">
            <picture>
              <source media="(max-width: 640px )" srcSet={plomero} sizes="" />
              <source media="(min-width: 641px )" srcSet={plomero2} sizes="" />
              <img
                src={plomero2}
                alt="Ontu Plomería"
                className="w-full h-[300px] rounded-3xl object-cover object-center"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* SmartHome */}

      <div className="w-full px-5 bg-white mb-16 mt-16">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center   rounded-3xl ">
          <div className="lg:w-1/2  hidden lg:flex justify-center  ">
            <picture>
              <source media="(max-width: 640px )" srcSet={smart} sizes="" />
              <source media="(min-width: 641px )" srcSet={smart2} sizes="" />
              <img
                src={smart2}
                alt="Ontu Smart Home"
                className="w-full h-[300px] rounded-3xl object-cover object-center"
              />
            </picture>
          </div>
          <div className="flex flex-col mx-5 lg:mx-10 text-left lg:w-1/2 ">
            <div className="flex">
              <div className="lg:hidden flex justify-center mt-10 mr-5 ">
                <div className="flex justify-center items-center w-[80px] h-[80px]  border-2 border-ontu text-ontu  rounded-3xl py-2 ">
                  <p className="text-ontu">
                    <SiSmartthings size={40} />
                  </p>
                </div>
              </div>
              <div>
                <h1 className="font-monts lg:text-left text-left text-[38px] md:text-[42px]  lg:text-[46px]  leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black uppercase  ">
                  Smart Home
                </h1>
                <div className="mb-10 font-monts lg:mt-5 ">
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                    ¿El objetivo de un hogar inteligente? Sencillo. Llegar a
                    casa controlar todo fácilmente mientras aumenta la
                    comodidad, seguridad y eficiencia de tu espacio vital.
                  </p>
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5">
                    Un sistema de hogar inteligente te permite controlar tus
                    luces, ver tus cámaras de CCTV, abrir o cerrar puertas, todo
                    desde tu celular.
                  </p>
                  <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                    <span className="font-semibold hover:text-blueOntu flex flex-row items-center">
                      <Link to={"/smart-home"}>Smart Home</Link>
                      <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                        <FaArrowRight size={15} />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-20 mb-16 mt-20 justify-center items-center ">
        <h5 className=" font-monts leading-none text-[20px] md:text-[22px] lg:text-[24px]  text-center font-semibold tracking-wide">
          No hagas tú, lo que un profesional puede hacer por ti, déjalo en
          nuestras manos.
        </h5>
      </div>
    </main>
  );
};
