import React from "react";
import { useNavigate } from "react-router-dom";

export const SectionCalculo = () => {
  const navigate = useNavigate();
  return (
    <section className="mb-5 px-10 w-full h-[480px] lg:h-[250px] md:h-[250px] bg-white">
      <div className="sm:flex max-w-[1240px] mx-auto p-2  ">
        <div className="flex-1 py-6 lg:mx-4 justify-center ">
          <h2 className="text-[30px] font-monts font-bold lg:text-[38px] leading-snug text-ontu text-center lg:text-right lg:mx-8">
            Calcula cuánto podrías estar ahorrando con energía limpia
          </h2>
        </div>
        <div className="flex-1 pt-6 font-monts  ">
          <p className="text-[15px] lg:text-[18px] mb-8">
            <span>
              {" "}
              Solicita tu estudio fotovoltaico personalizado de acuerdo a tus
              necesidades de forma gratuita. Incorporaremos una propuesta en la
              que
            </span>{" "}
            <span className="font-bold">
              {" "}
              podrás ahorrar hasta un 98% en tu recibo CFE.
            </span>
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => navigate("/Estudio")}
              className="bg-veryGreen w-[220px] h-[48px] font-monts uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-veryDarkBlue rounded-full  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all "
            >
              CALCULAR AHORRO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
