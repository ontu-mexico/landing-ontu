import React from "react";
import electrico from "/src/assets/electricidad/electricista.jpg";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const AnalyticsElec = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="w-full px-5 bg-white mb-10 mt-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center bg-grayOntu/30  rounded-3xl ">
        <div className="lg:w-1/2 w-full h-full object-cover ">
          <img
            className="w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none"
            src={electrico}
            alt="Electrico"
          />
        </div>
        <div className="flex flex-col px-10 text-left lg:w-1/2 ">
          <h3 className="uppercase  text-[12px] md:text-[13px] lg:text-[15px] mt-10 font-medium tracking-widest ">
            Conoce nuestros servicios
          </h3>
          <h2
            className="font-monts lg:text-left text-left  text-[28px] md:text-[32px]  lg:text-[36px]  leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-2"
            data-aos="fade-down"
          >
            Electricidad
          </h2>
          <div className="mb-10 font-monts lg:mt-5  " data-aos="fade-up">
            <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
              Nuestros servicios de electricidad para el hogar están diseñados
              para proporcionar soluciones seguras y eficientes para todas las
              necesidades eléctricas de tu hogar.
            </p>
            <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5">
              Desde instalaciones y reparaciones básicas hasta actualizaciones
              avanzadas para mejorar la eficiencia energética y la seguridad de
              tu hogar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
