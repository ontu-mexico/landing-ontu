import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export const BannerHC = () => {
  return (
    <div className="flex items-center justify-start h-[480px] bg-fixed bg-parallaxHC1 bg-cover bg-bottom">
      <div className="max-w-[750px] lg:max-w-[850px] ">
        <div className="flex flex-col bg-opacity-80 bg-clip-padding backdrop-blur-sm  px-10  bg-white rounded-3xl  m-8 mt-16 md:m-5 lg:mx-16">
          <h3 className="uppercase text-[12px] md:text-[13px] lg:text-[15px] mt-10 font-medium tracking-widest ">
            Home Care
          </h3>
          <hr className="border-[1.5px] border-[#F2C00C] mb-2 w-1/4 mt-1" />
          <h1 className="font-monts text-[38px] md:text-[42px] lg:text-[46px]  leading-none mb-5 lg:mb-0 font-semibold tracking-wide mt-2  ">
            <m className="text-ontu">Eficiencia</m> para los puntos clave de tu
            hogar
          </h1>

          <p className="text-[14px] md:text-[16px]  lg:text-[18px]  mt-5 mb-10 font-monts leading-tight font-normal flex flex-row items-center text-left">
            <span className="hover:text-gray-600 font-semibold flex flex-row items-center">
              <Link to={""}>Solicitar más información </Link>{" "}
              <span className="text-[14px] md:text-[16px]  lg:text-[18px]  px-2">
                <FaArrowRight />
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
