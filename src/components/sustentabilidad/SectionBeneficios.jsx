import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import mobile from "/src/assets/image/beneficios2.png";
import desktop from "/src/assets/image/beneficios2.png";
import { FaArrowRight } from "react-icons/fa6";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
export const SectionBeneficios = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="w-full px-5 bg-white mb-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center bg-ontu2  rounded-3xl ">
        <div className="lg:w-1/2">
          <picture>
            <source media="(max-width: 640px )" srcSet={mobile} sizes="" />
            <source media="(min-width: 641px )" srcSet={desktop} sizes="" />
            <img className="rounded-3xl " src={mobile} alt="Beneficios" />
          </picture>
        </div>
        <div className=" flex flex-col px-10  text-left lg:w-1/2 ">
          <h3 className="uppercase  text-[12px] md:text-[13px] lg:text-[15px] mt-10 font-medium tracking-widest ">
            Beneficios de los Paneles Solares
          </h3>
          <h2
            className="font-monts lg:text-left text-left   text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-none mb-10 lg:mb-5 font-semibold  mt-2"
            data-aos="fade-up"
          >
            Conoce más sobre los beneficios de un sistema solar
          </h2>
          <div className="mb-10 font-monts lg:mt-5  " data-aos="fade-up">
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-left">
              Si estas aquí, es porque tienes interés en los beneficios que vas
              a tener con la instalación de tu sistema solar.
            </p>
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
              <span>Conoce más en nuestra</span>
              <span className="font-semibold px-2 hover:text-gray-600 flex flex-row items-center">
                <Link to={"/"}>Academia Solar </Link>
                <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                  <FaArrowRight size={15} />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
