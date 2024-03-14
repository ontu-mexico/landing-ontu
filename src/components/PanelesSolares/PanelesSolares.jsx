import React, { useEffect, useState } from "react";
import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import { PagSustentabilidad } from "../sustentabilidad/PagSustentabilidad";
import { CardInfo } from "../sustentabilidad/CardInfo";
import { CardBeneficosConteniner } from "../sustentabilidad/CardBeneficosConteniner";
import { FaCheck } from "react-icons/fa6";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { Residencial } from "./Residencial";
import { Comercial } from "./Comercial";

export const PanelesSolares = () => {
  const [view, setView] = useState("residencial");
  // const [view, setView] = useState("residencial");
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <main>
      <NavBar />

      <PagSustentabilidad />
      <div className="w-full py-0">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="w-full flex flex-col p-4 my-4  lg:p-10  ">
            <div className="grid">
              <h2
                className="font-monts text-center text-black md:text-[40px] lg:text-[42px] text-[38px] lg:mb-0 leading-none py-2  font-semibold  "
                data-aos="fade-up"
              >
                Calcula tu ahorro
              </h2>
              <div
                className="h-[1.5px] w-full lg:mt-2 bg-[#F2C00C]"
                data-aos="fade-right"
              ></div>
              <ul className="mt-8 space-y-2 px-4">
                <li
                  className="text-[20px] items-center gap-3 mb-5 font-monts"
                  data-aos="fade-up"
                >
                  Con nuestra calculadora estima el ahorro que tendrías
                  utilizando Paneles Solares Ontu.
                </li>
                <li
                  className="flex first-letter:items-center text-[20px] gap-3 font-monts px-4 text-blueOntu font-medium"
                  data-aos="fade-up"
                >
                  Residencial:
                </li>
                <li
                  className="flex first-letter:items-center text-[18px] gap-3 font-monts px-4"
                  data-aos="fade-up"
                >
                  <span className="text-[#F2C00C] mt-2" data-aos="fade-right">
                    <FaCheck size={15} />
                  </span>
                  Obten un ahorro hasta del 98 % en su recibo de CFE.
                </li>
                <li
                  className="flex first-letter:items-center text-[18px] gap-3 font-monts px-4"
                  data-aos="fade-up"
                >
                  <span className="text-[#F2C00C] mt-2" data-aos="fade-right">
                    <FaCheck size={15} />
                  </span>
                  Fuente de energía ilimitada.
                </li>
                <li
                  className="flex first-letter:items-center text-[18px] gap-3 font-monts px-4"
                  data-aos="fade-up"
                >
                  <span className="text-[#F2C00C] mt-2" data-aos="fade-right">
                    <FaCheck size={15} />
                  </span>
                  Si tu consumo es menor a los $2,500 pesos pagarías solo $59
                  pesos en tu recibo de CFE.
                </li>
                <li
                  className="flex first-letter:items-center text-[20px] gap-3 font-monts px-4 text-blueOntu font-medium"
                  data-aos="fade-up"
                >
                  Comercial:
                </li>
                <li
                  className="flex first-letter:items-center text-[18px] gap-3 font-monts px-4"
                  data-aos="fade-up"
                >
                  <span className="text-[#F2C00C] mt-2" data-aos="fade-right">
                    <FaCheck size={15} />
                  </span>
                  Obten un ahorro hasta del ¿? % en su recibo de CFE.
                </li>
                <li
                  className="flex first-letter:items-center text-[18px] gap-3 font-monts px-4"
                  data-aos="fade-up"
                >
                  <span className="text-[#F2C00C] mt-2" data-aos="fade-right">
                    <FaCheck size={15} />
                  </span>
                  Contribuye al desarrollo sostenible.
                </li>
                <li
                  className="flex first-letter:items-center text-[18px] gap-3 font-monts px-4"
                  data-aos="fade-up"
                >
                  <span className="text-[#F2C00C] mt-2" data-aos="fade-right">
                    <FaCheck size={15} />
                  </span>
                  Si tu consumo es menor a los ¿? pesos pagarías solo ¿? pesos
                  en tu recibo de CFE.
                </li>
              </ul>
            </div>
          </div>
          {/* SLIDER */}
          <div className="w-full flex flex-col p-4 my-4">
            <div className="flex py-4 bg-grayOntu/50 text-center mt-5 rounded-full mb-5 m-auto ">
              <label htmlFor="" className="text-center px-10">
                <span
                  onClick={() => setView("residencial")}
                  className={`w-36 text-center rounded-full transition duration-200 ease-in-out cursor-pointer text-2xl px-5 m-3  p-1 ${
                    view === "residencial"
                      ? "bg-blueOntu text-white "
                      : "bg-gray-100 font-light"
                  }`}
                >
                  Residencial
                </span>
                <span
                  onClick={() => setView("comercial")}
                  className={`w-6 h-6 rounded-full transition duration-200 ease-in-out cursor-pointer text-2xl px-5 m-3 p-1 ${
                    view === "comercial"
                      ? "bg-blueOntu text-white "
                      : "bg-gray-100 font-light"
                  }`}
                >
                  Comercial
                </span>
              </label>{" "}
            </div>
            {view === "residencial" ? <Residencial /> : <Comercial />}
          </div>
        </div>
      </div>

      {/* CardInfo */}
      <CardInfo />
      <CardBeneficosConteniner />
      <FooterCR />
    </main>
  );
};
