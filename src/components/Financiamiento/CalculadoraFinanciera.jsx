import React from "react";

export const CalculadoraFinanciera = () => {
  return (
    <div className="w-full  px-4 bg-white">
      <div className="max-w-[1240px]  rounded-3xl mx-auto flex flex-col justify-center items-center px-10 text-center mb-5  ">
        <div>
          <div className="h-[2px] w-full flex justify-center mb-8">
            {" "}
            <hr className="border-[1.5px] border-[#F2C00C]  w-1/2 " />
          </div>

          <h2 className=" font-monts text-center text-[28px] md:text-[32px]  lg:text-[36px]  py-2 mb-5 text-black leading-none font-semibold tracking-wide">
            Calculadora Financiera
          </h2>
          <p className=" text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal   mb-16 font-monts text-center lg:mx-12   ">
            Estima tus mensualidades y ahorro según los plazos y tipo de
            solución.
          </p>
        </div>
        <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 rounded-3xl  px-5 md:px-30 h-[200px] "></div>
      </div>
    </div>
  );
};
