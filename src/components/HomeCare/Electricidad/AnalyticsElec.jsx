import React from "react";
import electrico from "/src/assets/electricidad/electricista2.jpg";
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
    <div className="w-full bg-white mt-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[250px] mx-auto my-4 border-4 border-ontu"
          src={electrico}
          alt="Electrico"
        />
        <div className=" flex flex-col justify-center font-monts px-4">
          <h2
            className="font-semibold lg:text-3xl text-2xl leading-none text-ontu py-2 mb-5"
            data-aos="fade-down"
          >
            Contamos con Técnicos Profesionales en Soluciones Electricas
          </h2>
          <p className="text-[15px] mb-10 leading-relaxed ">
            En <m className="text-ontu font-medium">Ontu </m>nuestra principal
            función es adaptar los circuitos de energía eléctrica e integrarlos
            en un sistema seguro y práctico para los usuarios.
          </p>
          <h2
            className="font-semibold lg:text-3xl text-2xl leading-none text-ontu py-2 mb-5"
            data-aos="fade-down"
          >
            Brindamos soluciones efectivas en Electricidad
          </h2>
          <p className="text-[15px] mb-10 leading-relaxed ">
            Contamos con un amplio conocimiento y experiencia en instalaciones
            de media y baja tensión, instalaciones escenográficas, redes de
            corriente regulada, tierras físicas.
          </p>
        </div>
      </div>
    </div>
  );
};
