import React from "react";

export const AnalyticsIndex = () => {
  return (
    <div className="w-full bg-white mt-10 px-4 mb-5">
      <div className="max-w-[1240px] mx-auto rounded-3xl flex flex-col md:flex-row  bg-white">
        <div className="flex flex-col justify-center font-monts py-8 md:w-1/3">
          <div className="ml-10 md:border-r-2 md:border-[#F2C00C]">
            <h2 className="font-semibold  text-[28px] md:text-[31px]  lg:text-[34x] tracking-wide leading-none py-5 ">
              <span>Vamos a lo</span>
              <span className="text-gray-600 uppercase"> Grande</span>
            </h2>
            <h2 className="font-semibold  text-[28px] md:text-[31px]  lg:text-[34x] tracking-wide leading-none  ">
              Vamos lejos
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:w-2/3">
          <div className="m-5 md:m-10 bg-white rounded-b-3xl md:rounded-l-none md:rounded-r-3xl px-4 flex flex-col font-monts ">
            <h4 className=" text-[24px] md:text-[26px] lg:text-[28px] mb-10 tracking-wide leading-none font-medium ">
              Sin medición, la mejora es imposible.
            </h4>
            <div className="flex flex-wrap gap-5 justify-between">
              <div>
                <h3 className="text-[12px] md:text-[13px] lg:text-[15px] leading-snug tracking-wide">
                  Reducción total de CO2
                </h3>
                <h3 className=" text-[28px] md:text-[32px]  lg:text-[36px] text-ontu font-semibold">
                  1,000
                </h3>
              </div>
              <div>
                <h3 className="text-[12px] md:text-[13px] lg:text-[15px] leading-snug tracking-wide">
                  Capacidad Instalada
                </h3>
                <h3 className=" text-[28px] md:text-[32px]  lg:text-[36px] text-ontu font-semibold">
                  1,000
                </h3>
              </div>
              <div>
                <h3 className="text-[12px] md:text-[13px] lg:text-[15px] leading-snug tracking-wide">
                  Equivalente en árboles
                </h3>
                <h3 className=" text-[28px] md:text-[32px]  lg:text-[36px] text-ontu font-semibold">
                  1,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
