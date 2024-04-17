import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo/white_logo_transparent_background.png";
import { FormPersonal } from "../Formularios/FormPersonal";
import { useNavigate } from "react-router-dom";

export const Personal = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="w-full h-[120px] justify-center object-center flex bg-ontu animate-fade-down animate-duration-[1500ms] animate-delay-100 animate-ease-in">
        <Link to="/">
          <img
            className="mt-[16px] h-[80px] w-[180px] lg:h-[75px] lg:w-[170px] animate-fade-downanimate-duration-[1500ms] animate-delay-200 animate-ease-in "
            src={logo}
            alt="Ontu"
          />
        </Link>
      </div>
      <div className="w-full flex  py-10 px-4 bg-white ">
        {/*Form */}
        <div className="max-w-[1240px] mx-auto bg-white border border-ontu animate-fade-up animate-duration-[1500ms] animate-delay-200 animate-ease-in ">
          <div className="flex items-center justify-center ">
            <div className="w-full font-monts">
              <p className=" lg:text-[24px] text-ontu mt-5 px-4 text-[20px] text-center font-medium ">
                Registro de Personal
              </p>
              <p className=" lg:text-[14px] text-gray-500 mt-1 px-4 mb-2 text-[14px] text-center ">
                Por favor ingresa los datos requeridos.
              </p>
              <div className="mx-16">
              <p className=" h-[1px] w-full bg-[#F2C00C] text-center"></p>
              </div>
              
              <div className="p-5">
                <FormPersonal />
              </div>
             <div className="mb-8">
             <p
                onClick={() => navigate("/")}
                className=" lg:text-[18px] text-blueOntu font-semibold hover:font-bold mt-5 px-4 text-[18px] text-center cursor-pointer "
              >
                Regresar
              </p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
