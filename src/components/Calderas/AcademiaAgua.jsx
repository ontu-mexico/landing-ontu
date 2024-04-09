import { Link } from "react-router-dom";
import React from "react";
import mobile from "/src/assets/calderas/funcionCal.jpg";
import desktop from "/src/assets/calderas/funcionCal.jpg";
import { FaArrowRight } from "react-icons/fa6";

export const AcademiaAgua = () => {
  return (
    <div className="w-full px-5 bg-white mb-16">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center  rounded-3xl ">
        <div className="lg:w-1/2">
          <picture>
            <source media="(max-width: 640px )" srcSet={mobile} sizes="" />
            <source media="(min-width: 641px )" srcSet={desktop} sizes="" />
            <img
              className="rounded-3xl md:h-[350px]"
              src={mobile}
              alt="Beneficios"
            />
          </picture>
        </div>
        <div className=" flex flex-col px-10  text-left lg:w-1/2 ">
          <h2 className="font-monts lg:text-left text-left   text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-none mb-10 lg:mb-5 font-semibold  mt-8 lg:mt-2">
            Conoce cómo funciona una caldera de condensación
          </h2>
          <div className="mb-10 font-monts lg:mt-5  ">
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-left">
              Un 108% de eficiencia probablemente es algo que suena extraño,
              aquí te explicamos cómo se logra eso.
            </p>
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-col md:flex-row items-left md:items-center leading-tight text-left mt-5  ">
              <span>Conoce más en nuestra</span>
              <span className="font-semibold md:px-2  hover:text-blueOntu flex flex-row items-center mt-2 md:mt-0">
                <Link to={""}>Academia del Agua </Link>
                <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2 ">
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
