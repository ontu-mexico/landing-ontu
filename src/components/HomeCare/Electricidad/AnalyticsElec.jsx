import React from "react";
import electricidad from "/src/assets/electricidad/electrician.jpg";
import electricidad2 from "/src/assets/electricidad/electrician2.jpg";
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
    <div className="w-full px-5 bg-white mb-16 mt-16">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center bg-white rounded-3xl ">
        <div className="lg:w-1/2 object-cover ">
          <picture>
            <source
              media="(max-width: 640px )"
              srcset={electricidad}
              sizes=""
            />
            <source
              media="(min-width: 641px )"
              srcset={electricidad2}
              sizes=""
            />
            <img
              src={electricidad2}
              alt="Electricidad"
              className="w-full h-full rounded-3xl"
            />
          </picture>
        </div>
        <div className="flex flex-col px-10 text-left lg:w-1/2 ">
          <h1 className="font-monts lg:text-left text-left text-[38px] md:text-[42px]  lg:text-[46px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black uppercase ">
            Electricidad
          </h1>
          <div className="mb-10 font-monts lg:mt-5">
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
