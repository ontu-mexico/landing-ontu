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
    <div className="w-full pt-32 px-2 pb-10 ">
      <div className="max-w-[1240px]  mx-auto ">
        <div className=" flex flex-col justify-center items-center px-5 lg:px-32 text-center ">
          <h1 className="font-monts text-center text-[38px] md:text-[42px]  lg:text-[46px]  leading-none mb-5 lg:mb-0 font-semibold text-ontu ">
            Energía limpia <m className="text-black"> para tu hogar</m>
          </h1>

          <p className="text-[14px] md:text-[16px]  lg:text-[18px] leading-tight mt-5 font-monts text-center lg:mt-5 lg:px-10  ">
            Conoce los beneficios de el uso de paneles solares en tu hogar,
            conoce cuánto podrías estar ahorrando y súmate al cambio.
          </p>
        </div>
      </div>
    </div>
  );
};
