import plomero from "/src/assets/plomeria/ontu_plomero_.jpg";
import plomero2 from "/src/assets/plomeria/ontu_plomero.jpg";
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
    <div className="w-full px-5 bg-white mb-16 mt-16">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center bg-white  rounded-3xl ">
        <div className="lg:w-1/2 object-cover ">
          <picture>
            <source media="(max-width: 640px )" srcSet={plomero} sizes="" />
            <source media="(min-width: 641px )" srcSet={plomero2} sizes="" />
            <img
              src={plomero2}
              alt="Ontu Plomero"
              className="w-full h-full rounded-3xl"
            />
          </picture>
        </div>
        <div className="flex flex-col px-10 text-left lg:w-1/2 ">
          <h1 className="font-monts lg:text-left text-left text-[38px] md:text-[42px]  lg:text-[46px]  leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black uppercase ">
            Plomería
          </h1>
          <div className="mb-10 font-monts lg:mt-5  ">
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
