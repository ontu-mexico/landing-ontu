import React from "react";
import { useNavigate } from "react-router-dom";
//Animation
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

export const Precing = () => {
  const navigate = useNavigate();
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <section className="flex items-center justify-center bg-white">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
          <h2 className="lg:text-[22px] mb-3 font-monts font-medium text-[18px] text-blueOntu leading-none py-0 lg:mt-15 text-center mt-5"></h2>
          <h1 className="font-monts text-center md:text-[42px] lg:text-[46px] text-[38px] leading-none mb-5  font-semibold  ">
            Paquetes Populares
          </h1>
          <div className="h-[2px]  w-[300px] lg:w-[400px]  bg-[#F2C00C]"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {/**Card 1 */}

          <div className="p-4 sm:w-1/2 lg:w-1/3  ">
            <div className=" flex flex-col  my-4 text-center bg-transparent  mt-12 rounded-3xl shadow-lg ">
              <h2 className="text-[20px] md:text-[22px] lg:text-[26px] font-monts text-white bg-slate-600 rounded-t-3xl font-semibold text-center py-4">
                Básico
              </h2>
              <div className="items-left bg-white rounded-b-3xl h-full  ">
                <div className="mt-5 ">
                  <p className="leading-relaxed text-center ">
                    Seguridad básica para el hogar
                  </p>
                  <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                    <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                      Desde{" "}
                    </span>
                    $2950
                  </p>
                </div>
                <ul className="mt-8 space-y-2 px-4">
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    24/7 surveillance
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Control panel with touch screen
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
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
                <div className="flex justify-center items-center mt-8 mb-8 ">
                  <button
                    onClick={() => navigate("/Estudio")}
                    className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                  >
                    Iniciar compra
                    <m className="px-2">
                      <FaArrowRight />
                    </m>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**Card 2 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3  ">
            <div className=" flex flex-col  my-4 text-center bg-transparent  mt-12 rounded-3xl shadow-lg  scale-[1.05]">
              <h2 className="text-[20px] md:text-[22px] lg:text-[26px] font-monts text-white bg-slate-600 rounded-t-3xl font-semibold text-center py-4">
                Prémium
              </h2>
              <div className="items-left bg-white rounded-b-3xl h-full  ">
                <div className="mt-5 ">
                  <p className="leading-relaxed text-center ">
                    Seguridad y automatización
                  </p>
                  <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                    <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                      Desde{" "}
                    </span>
                    $3950
                  </p>
                </div>
                <ul className="mt-8 space-y-2 px-4">
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    24/7 surveillance
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Control panel with touch screen
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Mobile app
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Video security
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
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

                <div className="flex justify-center items-center mt-8 mb-8 ">
                  <button
                    onClick={() => navigate("/Estudio")}
                    className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                  >
                    Iniciar compra
                    <m className="px-2">
                      <FaArrowRight />
                    </m>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**Card 3 */}
          <div className="p-4 sm:w-1/2 lg:w-1/3 ">
            <div className=" flex flex-col  my-4 text-center bg-transparent  mt-12 rounded-3xl shadow-lg">
              <h2 className="text-[20px] md:text-[22px] lg:text-[26px] font-monts text-white bg-slate-600 rounded-t-3xl font-semibold text-center py-4">
                Prémium Plus
              </h2>
              <div className="items-left bg-white rounded-b-3xl h-full  ">
                <div className="mt-5 ">
                  <p className="leading-relaxed text-center ">
                    Protección completa
                  </p>
                  <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                    <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                      Desde{" "}
                    </span>
                    $7990
                  </p>
                </div>
                <ul className="mt-8 space-y-2 px-4">
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    24/7 surveillance
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Control panel with touch screen
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Mobile app
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Video security
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Theft deterrence
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Voice control
                  </li>
                  <li className="flex items-center text-left gap-3 font-semibold">
                    <span className="text-[#F2C00C]" data-aos="fade-right">
                      <FaCheck size={15} />
                    </span>
                    Stored video clips
                  </li>
                </ul>
                  <div className="flex justify-center items-center mt-8 mb-8 ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Iniciar compra
                      <m className="px-2">
                        <FaArrowRight />
                      </m>
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
