import React from "react";
import plomero from "/src/assets/plomeria/plomero2.jpg";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Analytics = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="w-full px-5 bg-white mb-10 mt-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center bg-blueOntu/30  rounded-3xl ">
        <div className="lg:w-1/2 w-full h-full object-cover ">
          <img
            className="w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none"
            src={plomero}
            alt="Plomero"
          />
        </div>
        <div className="flex flex-col px-10 text-left lg:w-1/2 ">
          <h3 className="uppercase  text-[12px] md:text-[13px] lg:text-[15px] mt-10 font-medium tracking-widest ">
            Conoce nuestros servicios
          </h3>
          <h2
            className="font-monts lg:text-left text-left  text-[28px] md:text-[32px]  lg:text-[36px]  leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-2 text-blueOntu "
            data-aos="fade-down"
          >
            Plomería
          </h2>
          <div className="mb-10 font-monts lg:mt-5  " data-aos="fade-up">
            <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
              Nuestras soluciones de plomería para el hogar se enfocan en
              ofrecer soluciones integrales y confiables para todas sus
              necesidades relacionadas con tuberías, grifos, desagües y más.
            </p>
            <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5">
              Ya sea que necesites reparar una fuga o instalar nuevas tuberías,
              estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
