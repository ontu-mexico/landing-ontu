import { FaFileSignature } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import React, { useEffect } from "react";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";

export const SolucionesFinancieras = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-[1240px] bg-gray-50 rounded-3xl mx-auto flex flex-col justify-center items-center px-10 text-center mb-10  ">
        <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-2 md:gap-5 border border-gray-400 rounded-3xl  px-5 md:px-10 relative mb-10 mt-10 ">
          <h2 className="absolute  top-[-10px] left-8 bg-gray-50  px-2 py-1 text-gray-600 font-medium font-monts text-[20px] md:text-[22px] lg:text-[26px] leading-3 ">
            Soluciones Financieras
          </h2>
          {/* Arrendamiento */}
          <div className="w-full flex flex-col  bg-transparent  mt-10 mb-10 ">
            <div className="grid lg:grid-flow-col ">
              <div className="flex flex-col justify-center items-center  ">
                <h2 className="text-[18px] md:text-[18px] lg:text-[18px] font-monts text-white bg-slate-600 rounded-3xl lg:rounded-b-none font-semibold text-center p-2 h-full w-full lg:h-[50px] lg:w-[155px]">
                  Arrendamiento
                </h2>
                <div className="hidden lg:flex justify-center items-center h-[100px] w-[155px] bg-slate-600 p-5 rounded-b-3xl ">
                  <p className="text-white">
                    <FaFileSignature size={80} />
                  </p>
                </div>
              </div>
              {/* datos */}
              <div className="ml-5 ">
                <div className="grid justify-items-start font-monts  ">
                  <h3 className="mt-5 mb-5 text-left font-medium text-slate-600">
                    Plazos de hasta 60 meses
                  </h3>
                  <ul className=" space-y-2 text-[12px] md:text-[14px] ">
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Adquiere tu sistema al finalizar tu plazo.
                    </li>
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Deduce tus mensualidades.
                    </li>
                    <li className="flex items-center gap-3  leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Paga una mensualidad fija.
                    </li>
                    <li className="flex items-center gap-3  leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Olvídate del mantenimiento.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Al contado */}
          <div className="w-full flex flex-col  bg-transparent  md:mt-10 mb-10 ">
            <div className="grid lg:grid-flow-col ">
              <div className="flex flex-col justify-center items-center  ">
                <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl lg:rounded-b-none font-semibold text-center p-2 h-full w-full lg:h-[50px] lg:w-[155px]">
                  Al contado
                </h2>
                <div className="hidden lg:flex justify-center items-center h-[100px] w-[155px] bg-slate-600 p-5 rounded-b-3xl ">
                  <p className="text-white">
                    <FaMoneyBills size={80} />
                  </p>
                </div>
              </div>
              {/* datos */}
              <div className="md:col-span-0 ml-5 ">
                <div className="grid justify-items-start font-monts  ">
                  <h3 className="mt-5 mb-5 text-left font-medium text-slate-600">
                    Sin plazos
                  </h3>
                  <ul className=" space-y-2 text-[12px] md:text-[14px] ">
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Comienza tu ahorro desde el día 1.
                    </li>
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Recupera tu inversión de 2 a 4 años.
                    </li>
                    <li className="flex items-center gap-3  leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Beneficios fiscales aplicables.
                    </li>
                    <li className="flex items-center gap-3 text-transparent leading-tight ">
                      <span className="text-transparent" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Olvídate del mantenimiento.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Credito */}
          <div className="w-full flex flex-col text-center bg-transparent  mb-10 ">
            <div className="grid lg:grid-flow-col ">
              <div className="flex flex-col justify-center items-center  ">
                <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl lg:rounded-b-none font-semibold text-center p-2 h-full w-full lg:h-[50px] lg:w-[155px]">
                  Crédito
                </h2>
                <div className="hidden lg:flex justify-center items-center   h-[100px] w-[155px] bg-slate-600 p-5 rounded-b-3xl ">
                  <p className="text-white">
                    <FaRegCreditCard size={80} />
                  </p>
                </div>
              </div>
              {/* datos */}
              <div className="ml-5 ">
                <div className="grid justify-items-start font-monts  ">
                  <h3 className="mt-5 mb-5 text-left font-medium text-slate-600">
                    Plazos de hasta 24 meses
                  </h3>
                  <ul className=" space-y-2 text-[12px] md:text-[14px] ">
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Adquiere el sistema a crédito.
                    </li>
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Mensualidades fijas.
                    </li>
                    <li className="flex items-center gap-3  leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Sin penalización por terminación anticipada.
                    </li>
                    <li className="flex items-center gap-3  leading-tight text-transparent">
                      <span className="text-transparent" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Olvídate del mantenimiento.
                    </li>
                    <li className="flex items-center gap-3  leading-tight text-transparent">
                      <span className="text-transparent" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Olvídate del mantenimiento.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Ontu 0 */}
          <div className="w-full flex flex-col text-center bg-transparent  mb-10 ">
            <div className="grid lg:grid-flow-col ">
              <div className="flex flex-col justify-center items-center  ">
                <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl lg:rounded-b-none font-semibold text-center p-2 w-full h-full lg:h-[50px] lg:w-[155px]">
                  Ontu Cero
                </h2>
                <div className="hidden lg:flex justify-center items-center  h-[100px] w-[155px] bg-slate-600 p-5 rounded-b-3xl ">
                  <p className="text-white">
                    <FaCreativeCommonsZero size={80} />
                  </p>
                </div>
              </div>
              {/* datos */}
              <div className="ml-5 ">
                <div className="grid justify-items-start font-monts  ">
                  <h3 className="mt-5 mb-5 text-left font-medium text-slate-600">
                    Plazos de hasta 60 meses
                  </h3>
                  <ul className=" space-y-2 text-[12px] md:text-[14px] ">
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Plan cero inversión.
                    </li>
                    <li className="flex items-center gap-3     leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Olvida el mantenimiento.
                    </li>
                    <li className="flex items-center gap-3  leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Paga menos que tu recibo de luz actual.
                    </li>
                    <li className="flex items-center gap-3  leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Pagos mensuales fijos.
                    </li>
                    <li className="flex items-center gap-3  leading-tight ">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Adquiere tu sistema si lo deseas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
