import { FaCheck } from "react-icons/fa6";
import "aos/dist/aos.css";
import mobile from "/src/assets/almacenamiento/ontu_almacenamiento.jpeg";
import desktop from "/src/assets/almacenamiento/ontu_almacenamiento.jpeg";
import { useEffect } from "react";
//AOS
import AOS from "aos";

export const SectionAlma = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="w-full px-5 lg:pt-5 bg-white mb-16">
      <div className="max-w-[1240px]  mx-auto flex flex-col lg:flex-row items-center  bg-white rounded-3xl  ">
        <div className="lg:w-1/2">
          <picture>
            <source media="(max-width: 640px )" srcSet={mobile} />
            <source media="(min-width: 641px rounded-3xl )" srcSet={desktop} />
            <img className="lg:rounded-3xl" src={mobile} alt="Ontu Almacenamiento" />
          </picture>
        </div>
        <div className=" flex flex-col  px-10  lg:w-1/2 mt-5 ">
          <h2 className="font-monts text-left lg:text-left  text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-none mb-10 lg:mb-5 font-semibold  mt-2">
            Configura según tus necesidades:
          </h2>
          <div className="mb-10 grid justify-items-start font-monts lg:mt-5 ">
            <ul className=" space-y-2 px-4  text-[14px] md:text-[18px]  lg:text-[20px] ">
              <li className="flex items-center gap-3    leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Respalda tus necesidades energéticas.
              </li>
              <li className="flex items-center gap-3     leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Aíslate de la red.
              </li>
              <li className="flex items-center gap-3  leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Desplaza tu carga en tarifa horaria.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
