import mobile from "/src/assets/image/panelSolarHome2.png";
import desktop from "/src/assets/image/panelSolarHome4.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
export const PagSustentabilidad = () => {
  const navigate = useNavigate();
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    //bg-[url('/src/assets/image/SFV_2.png')]
    <div className="w-full py-32 px-2 bg-grayOntu/10">
      <div className="max-w-[1240px] lg:max-w-[1150px] mx-auto ">
        <div
          className=" flex flex-col justify-center items-center px-5 text-center "
          data-aos="fade-up"
        >
          <h2 className="lg:text-[24px] font-monts font-semibold text-ontu text-[20px] leading-none py-0 mb-3 lg:mt-15 md:text-center mt-10">
            
          </h2>
          <h1 className="font-monts text-center md:text-[42px] lg:text-[46px] text-[38px] leading-none mb-5 lg:mb-0 font-semibold  ">
            Paneles solares
          </h1>
          <div
            className="h-[1.5px]  w-[300px] lg:w-[400px] lg:mt-2 bg-[#F2C00C]"
            data-aos="fade-right"
          ></div>

          <p className="text-[18px]  mt-5 font-monts text-center lg:mt-5 lg:w-[700px] lg:mb-2">
            Conoce los beneficios de el uso de paneles solares en tu hogar o
            negocio, además entérate de cuánto podrías estar ahorrando con el
            uso de energía limpia.
          </p>
        </div>
        <div className="" data-aos="fade-up">
          <picture>
            <source media="(max-width: 640px )" srcset={mobile} sizes="" />
            <source media="(min-width: 641px )" srcset={desktop} sizes="" />
            <img src={mobile} alt="Panel solar" />
          </picture>
        </div>
      </div>
    </div>
  );
};
