import { FaFileSignature } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export const CardInfo = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-[1240px] bg-gray-50 rounded-3xl mx-auto flex flex-col justify-center items-center px-10 text-center mb-5  ">
        <div>
          <h2 className=" font-monts text-center text-[28px] md:text-[32px]  lg:text-[36px]  py-2 mb-5 text-black mt-20 leading-none font-semibold tracking-wide">
            ¡Tú decides cómo y cuándo comenzar a ahorrar!
          </h2>
          <p className=" text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal   mb-16 font-monts text-center lg:mx-12   ">
            De <m className="text-ontu font-medium">Ontu</m> recibirás una
            instalación llave en mano para tu hogar o negocio con los mejores
            paneles solares del mercado y facilidades de pago. Tú decides cuándo
            dar el primer paso.
          </p>
        </div>

        <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 border border-gray-400 rounded-3xl  px-5 md:px-30 relative ">
          <h2 className="absolute  top-[-10px] left-8 bg-gray-50  px-2 py-1 text-gray-600 font-medium font-monts text-[20px] md:text-[22px] lg:text-[26px] leading-3 ">
            Soluciones Financieras
          </h2>
          {/* Card 1 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  mt-12 hover:scale-[1.05] cursor-pointer ">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-monts text-white bg-slate-600 rounded-t-3xl font-bold text-center pt-5">
              Arrendamiento
            </h2>
            <div className="flex justify-center items-center  h-full w-full bg-slate-600 p-5 rounded-b-3xl ">
              <div className=" mb-2">
                <p className="text-white">
                  <FaFileSignature size={80} />
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  mt-12 hover:scale-[1.05] cursor-pointer ">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-monts text-white bg-slate-600 rounded-t-3xl font-bold text-center pt-5">
              Crédito
            </h2>
            <div className="flex justify-center items-center  h-full w-full bg-slate-600 p-5 rounded-b-3xl ">
              <div className=" mb-2">
                <p className="text-white">
                  <FaRegCreditCard size={80} />
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  mt-12 hover:scale-[1.05] cursor-pointer ">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-monts text-white bg-slate-600 rounded-t-3xl font-bold text-center pt-5">
              Ontu 0
            </h2>
            <div className="flex justify-center items-center  h-full w-full bg-slate-600 p-5 rounded-b-3xl ">
              <div className=" mb-2">
                <p className="text-white">
                  <FaCreativeCommonsZero size={80} />
                </p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  mt-12 hover:scale-[1.05] cursor-pointer ">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-monts text-white bg-slate-600 rounded-t-3xl font-bold text-center pt-5">
              Al contado
            </h2>
            <div className="flex justify-center items-center  h-full w-full bg-slate-600 p-5 rounded-b-3xl ">
              <div className=" mb-2">
                <p className="text-white">
                  <FaMoneyBills size={80} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 mb-16">
          <p className="mb-8 font-monts  text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal">
            Conoce más sobre nuestras soluciones financieras que tenemos para
            ti.
          </p>
          <button
            onClick={() => navigate("/Estudio")}
            className="bg-blueOntu w-[330px] h-[48px] font-monts font-bold uppercase mx-auto  md:mx-0 text-white  hover:text-white hover:border-2 hover:bg-gray-600 hover:font-bold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-3xl "
          >
            Ver Soluciones Financieras
          </button>
        </div>
      </div>
    </div>
  );
};
