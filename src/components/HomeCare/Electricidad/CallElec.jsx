import React from "react";
import plomero from "/src/assets/electricidad/lamps.jpg";
import { useNavigate } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";

export const CallElec = () => {
  //Navegacion hacia el Stepper Estudio
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white mt-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 bg-grayOntu/20">
        <div className=" flex flex-col justify-center font-monts px-10 py-8">
          <h2
            className="font-bold lg:text-4xl text-3xl leading-none text-ontu py-5 "
            data-aos="fade-down"
          >
            Servicio rápido y eficiente
          </h2>
          <div className="h-[2px] w-[250px] lg:w-[350px] bg-[#F2C00C]"></div>
          <p className="text-[18px] py-10 mb-5 leading-relaxed ">
            ¡Solicita una Visita Técnica mediante whatsapp!
          </p>
          <div className="flex items-center">
            <span
              onClick={() => navigate("/")}
              className="text-[#25D366] cursor-pointer"
              data-aos="fade-right"
            >
              <RiWhatsappFill size={45} />
            </span>
            <span className="text-4xl font-semibold px-5">¡Contáctanos!</span>
          </div>
        </div>
        <div className="">
          <img
            className="w-full bg-opacity-60 bg-clip-padding backdrop-blur-sm  "
            src={plomero}
            alt="Plomero"
          />
        </div>
      </div>
    </div>
  );
};
