import React from "react";
import plomero from "/src/assets/SmartHome/home3.jpg";
import { useNavigate } from "react-router-dom";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AnalyticsSH = () => {
  //Navegacion hacia el Stepper Estudio
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white mt-10 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center bg-blueOntu/30  rounded-3xl ">
        <div className="lg:w-1/2 w-full h-full object-cover ">
          <img
            className="w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none"
            src={plomero}
            alt="Smart Home"
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
            Smart Home
          </h2>

          <div className="mb-10 font-monts lg:mt-5  " data-aos="fade-up">
            <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
              ¿El objetivo de un hogar inteligente? Sencillo. Llegar a casa
              controlar todo fácilmente mientras aumenta la comodidad, seguridad
              y eficiencia de tu espacio vital.
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
