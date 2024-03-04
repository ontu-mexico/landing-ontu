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
    <div className="w-full bg-white mt-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[450px] mx-auto my-4 border-4 border-blueOntu"
          src={plomero}
          alt="Plomero"
        />
        <div className=" flex flex-col justify-center font-monts px-4">
          <h2
            className="font-semibold lg:text-3xl text-2xl leading-none text-blueOntu py-2 mb-5"
            data-aos="fade-down"
          >
            Somos especialistas en plomería en general
          </h2>
          <p className="text-[15px] mb-10 leading-relaxed ">
            En <m className="text-blueOntu font-medium">Ontu</m> somos plomeros
            profesionales con amplia experiencia en soluciones de desazolve de
            drenajes, reparación e instalación de tuberías hidráulicas y de gas,
            ensamblaje de accesorios, detección y reparación de fugas de agua,
            etc.
          </p>
          <h2
            className="font-semibold lg:text-3xl text-2xl leading-none text-blueOntu py-2 mb-5"
            data-aos="fade-down"
          >
            Servicios de plomería completamente garantizados
          </h2>
          <p className="text-[15px] mb-10 leading-relaxed ">
            Nuestros plomeros cuentan con el conocimiento y las habilidades para
            ofrecerle resultados insuperables.
          </p>
        </div>
      </div>
    </div>
  );
};
