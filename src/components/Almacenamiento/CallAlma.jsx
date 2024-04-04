import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FormContacto } from "../Formularios/FormContacto";

export const CallAlma = () => {
  return (
    <div className="w-full bg-white mt-10 px-4 mb-5">
      <div className="max-w-[1240px] mx-auto rounded-3xl flex flex-col md:flex-row  bg-blueOntu/10">
        <div className="flex flex-col justify-center font-monts py-8 md:w-1/3">
          <div className="ml-10  md:border-r md:border-gray-600">
            <h2 className="font-semibold  text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-none py-5 mr-3 ">
              <span className="text-gray-600">Solicita una asesoría </span>y
              deshazte de dudas
            </h2>
            <p className="text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-left mt-5 mr-5">
              Evita el formulario y contáctanos ahora
            </p>
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
              <span className="font-semibold text-blueOntu hover:text-gray-600 flex flex-row items-center">
                <Link to={""}>Contactar </Link>
                <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                  <FaArrowRight size={15} />
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-2/3">
          <div className="m-5 md:m-10 bg-white rounded-b-3xl md:rounded-l-none md:rounded-r-3xl px-4 ">
            <FormContacto />
          </div>
        </div>
      </div>
    </div>
  );
};
