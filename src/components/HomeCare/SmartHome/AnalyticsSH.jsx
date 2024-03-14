import React from "react";
import plomero from "/src/assets/SmartHome/home3.jpg";
import { useNavigate } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";

export const AnalyticsSH = () => {
  //Navegacion hacia el Stepper Estudio
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#E6E6E6] mt-10 px-4">
      <div className="max-w-[1740px] mx-auto grid md:grid-cols-2 ">
        <div className="">
          <img
            className="w-full bg-opacity-60 bg-clip-padding backdrop-blur-sm  "
            src={plomero}
            alt="Plomero"
            data-aos="fade-right"
          />
        </div>
        <div className=" flex flex-col justify-center font-monts px-10 py-8">
          <h2
            className="font-bold lg:text-4xl text-3xl leading-none text-blueOntu py-5 "
            data-aos="fade-down"
          >
            Elige la atmósfera perfecta para cada momento de tu vida
          </h2>
          <div className="h-[2px] w-[250px] lg:w-[350px] bg-[#F2C00C]"></div>
          <p className="text-[18px] py-10 mb-5 leading-relaxed ">
            En <m className="text-blueOntu font-semibold">Ontu </m>nos
            especializamos en la domótica también conocida como hogar
            inteligente, se refiere a la integración de tecnología en el hogar
            para automatizar y controlar diferentes sistemas y dispositivos.{" "}
            <m className="text-blueOntu font-semibold">Automatiza </m>y{" "}
            <m className="text-blueOntu font-semibold">controla </m> la
            iluminación, audio, video, redes de WiFi, telefonía y dispositivos
            de seguridad.
          </p>
          <div className="flex items-center"></div>
        </div>
      </div>
    </div>
  );
};
