import React from "react";

export const BannerPE = () => {
  return (
    <div className="w-full pt-32 px-2 pb-10 ">
      <div className="max-w-[1240px]  mx-auto ">
        <div className=" flex flex-col justify-center items-center px-5 lg:px-32 text-center ">
          <h1 className="font-monts text-center text-[38px] md:text-[42px]  lg:text-[46px]  leading-none mb-5 lg:mb-0 font-semibold text-black  ">
            Energía limpia para tu
            <span className="text-ontu"> industria</span>
          </h1>

          <p className="text-[14px] md:text-[16px]  lg:text-[18px] leading-tight mt-5 font-monts text-center lg:mt-5 lg:px-10  ">
            Cumple con estándares ambientales, genera tu propia energía limpia
          </p>
        </div>
      </div>
    </div>
  );
};
