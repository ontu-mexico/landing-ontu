import React from "react";
import CardLogos from "../Slider/CardLogos";
import { logos } from "../Slider/data2";

export const LogosEmpresas = () => {
  //importar datos
  const carruselLogos = [...logos, ...logos];

  return (
    <section className=" px-16 w-full h-full bg-white mb-5">
      <div className="flex flex-col max-w-[1240px] mx-auto justify-center">
        <h2 className="font-monts leading-none text-[28px] md:text-[32px] lg:text-[36px] text-center font-semibold tracking-wide mt-6">
          Ellos ya están generando un impacto positivo
        </h2>

        <div className="container my-10">
          <div className="overflow-hidden w-full">
            <div className="flex whitespace-nowrap animate-scroll2">
              {carruselLogos.map((logo, index) => (
                <CardLogos key={index} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
