import React from "react";
import { useNavigate } from "react-router-dom";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export const Precing = () => {
  const navigate = useNavigate();
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="flex items-center justify-center bg-slate-100/50">
      <div className="container px-5 py-5 mx-auto">
        <div
          className="text-center mb-12 font-monts flex flex-col justify-center items-center"
          data-aos="fade-right"
        >
          <h2 className="lg:text-[22px] mb-3 font-monts font-medium text-[18px] text-blueOntu leading-none py-0 lg:mt-15 text-center mt-5"></h2>
          <h1 className="font-monts text-center md:text-[42px] lg:text-[46px] text-[38px] leading-none mb-5  font-semibold  ">
            Paquetes
          </h1>
          <div
            className="h-[2px]  w-[300px] lg:w-[400px]  bg-[#F2C00C]"
            data-aos="fade-right"
          ></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {/**Card 1 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3  ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden shadow-lg"
              data-aos="fade-down"
            >
              <div className="p-6  font-monts flex flex-col items-center">
                <h1 className="text-[26px] font-semibold text-center mb-3 border-b-2 border-[#F2C00C]">
                  Paquete Básico
                </h1>
                <p className="leading-relaxed text-center ">
                  Seguridad básica para el hogar
                </p>
                <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                  <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                    Desde{" "}
                  </span>
                  $2950
                </p>

                <ul className="mt-8 space-y-2 px-4">
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    24/7 surveillance
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Control panel with touch screen
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Mobile app
                  </li>
                  <li className="flex items-center gap-3 text-grayOntu/90">
                    <span className="text-grayBlue" data-aos="fade-right">
                      <IoMdClose size={15} />
                    </span>
                    Video security
                  </li>
                  <li className="flex items-center gap-3 text-grayOntu/90">
                    <span className="text-grayBlue" data-aos="fade-right">
                      <IoMdClose size={15} />
                    </span>
                    Theft deterrence
                  </li>
                  <li className="flex items-center gap-3 text-grayOntu/90">
                    <span className="text-grayBlue" data-aos="fade-right">
                      <IoMdClose size={15} />
                    </span>
                    Voice control
                  </li>
                  <li className="flex items-center gap-3 text-grayOntu/90">
                    <span className="text-grayBlue" data-aos="fade-right">
                      <IoMdClose size={15} />
                    </span>
                    Stored video clips
                  </li>
                </ul>
                <div className="w-full mx-auto flex items-center justify-center">
                  <button className="bg-blueOntu font-monts w-[160px] h-[40px] text-white  py-2 mb-8 cursor-pointer border-2 border-blueOntu hover:bg-white hover:text-blueOntu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                    Contratar
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**Card 2 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3 ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden shadow-lg "
              data-aos="fade-down"
            >
              <div className="p-6  font-monts flex flex-col items-center">
                <h1 className="text-[26px] font-semibold text-center mb-3 border-b-2 border-[#F2C00C]">
                  Paquete Prémium
                </h1>
                <p className="leading-relaxed text-center ">
                  Protección completa para el hogar
                </p>
                <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                  <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                    Desde{" "}
                  </span>
                  $3950
                </p>

                <ul className="mt-8 space-y-2 px-4">
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    24/7 surveillance
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Control panel with touch screen
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Mobile app
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Video security
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Theft deterrence
                  </li>
                  <li className="flex items-center gap-3 text-grayOntu/90">
                    <span className="text-grayBlue" data-aos="fade-right">
                      <IoMdClose size={15} />
                    </span>
                    Voice control
                  </li>
                  <li className="flex items-center gap-3 text-grayOntu/90">
                    <span className="text-grayBlue" data-aos="fade-right">
                      <IoMdClose size={15} />
                    </span>
                    Stored video clips
                  </li>
                </ul>
                <div className="w-full mx-auto flex items-center justify-center">
                  <button className="bg-blueOntu font-monts w-[160px] h-[40px] text-white  py-2 mb-8 cursor-pointer border-2 border-blueOntu hover:bg-white hover:text-blueOntu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                    Contratar
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**Card 3 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3 ">
            <div
              className="h-full border-2 border-grayOntu border-opacity-60 rounded-sm overflow-x-hidden shadow-lg "
              data-aos="fade-down"
            >
              <div className="p-6  font-monts flex flex-col items-center">
                <h1 className="text-[26px] font-semibold text-center mb-3 border-b-2 border-[#F2C00C]">
                  Paquete Prémium Plus
                </h1>
                <p className="leading-relaxed text-center ">
                  Seguridad y automatización
                </p>
                <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                  <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                    Desde{" "}
                  </span>
                  $5550
                </p>

                <ul className="mt-8 space-y-2 px-4">
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    24/7 surveillance
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Control panel with touch screen
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Mobile app
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Video security
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Theft deterrence
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Voice control
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Stored video clips
                  </li>
                </ul>
                <div className="w-full mx-auto flex items-center justify-center">
                  <button className="bg-blueOntu font-monts w-[160px] h-[40px] text-white  py-2 mb-8 cursor-pointer border-2 border-blueOntu hover:bg-white hover:text-blueOntu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                    Contratar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
