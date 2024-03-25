import React, { useEffect } from "react";
import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import { PagSustentabilidad } from "../sustentabilidad/PagSustentabilidad";
import { CardInfo } from "../sustentabilidad/CardInfo";
import { useNavigate } from "react-router-dom";
import { Residencial } from "./Residencial";
import { SectionPanel } from "../sustentabilidad/SectionPanel";
import { SectionBeneficios } from "../sustentabilidad/SectionBeneficios";
import { FaArrowRight } from "react-icons/fa6";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
export const PanelesSolares = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  const navigate = useNavigate();
  return (
    <main>
      <NavBar />

      <PagSustentabilidad />
      <SectionPanel />

      <div className="w-full mb-10 px-5 mt-14 ">
        <div className="max-w-[1240px] mx-auto md:flex md:flex-wrap md:gap-5 bg-grayOntu/40 rounded-3xl">
          <div className="p-10 my-4 md:p-8 lg:p-12 lg:px-16  md:w-[343px] md:flex-grow lg:w-[443px] lg:flex-grow ">
            <h3 className="uppercase text-[12px] md:text-[13px] lg:text-[15px] mt-5 font-medium tracking-widest">
              Simulador de ahorro
            </h3>
            <h2
              className="font-monts text-left mt-2  lg:text-left text-black text-[28px] md:text-[32px]  lg:text-[36px] md:text-left leading-none font-semibold tracking-wide "
              data-aos="fade-up"
            >
              Esto es lo que podrías estar ahorrando
            </h2>

            <p
              className=" text-[14px] md:text-[16px]  lg:text-[18px]   mt-5 text-left leading-tight tracking-normal items-center  font-monts"
              data-aos="fade-up"
            >
              Simula el ahorro que podrías obtener en tu recibo de{" "}
              <m className="font-semibold text-ontu">CFE</m> si utilizaras
              Paneles Solares.
            </p>
          </div>
          {/* SLIDER */}
          <div className=" px-6 py-6 md:py-12 lg:px-10 flex md:w-[343px] md:flex-grow lg:w-[443px] lg:flex-grow justify-center  ">
            <Residencial />
          </div>
        </div>
      </div>
      {/* Boton */}
      <div className="flex w-full px-5 mb-5 justify-center items-center ">
        <div className="md:flex max-w-[1240px] mx-auto  md:justify-around w-full p-5 px-5 font-monts bg-grayOntu/40 rounded-3xl  ">
          <h2 className=" text-[28px] md:text-[32px]  lg:text-[36px] text-center md:text-left font-semibold tracking-wide">
            ¿Quieres saber como lograrlo?
          </h2>
          <div className="flex justify-between items-center mt-5 md:mt-0  ">
            <button
              onClick={() => navigate("/Estudio")}
              className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-white hover:border-2 hover:bg-gray-600 hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
            >
              Conocer más{" "}
              <m className="px-2">
                <FaArrowRight />
              </m>
            </button>
          </div>
        </div>
      </div>
      {/* CardInfo */}
      <CardInfo />

      <SectionBeneficios />
      <FooterCR />
    </main>
  );
};
