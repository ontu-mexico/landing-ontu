import mobile from "/src/assets/calderas/caldera2.png";
import desktop from "/src/assets/calderas/caldera2.png";
import { useEffect } from "react";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa6";

export const SectionCalderas = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="w-full px-5 lg:pt-5 bg-white mb-16 mt-10">
      <div className="max-w-[1240px]  mx-auto flex flex-col lg:flex-row items-center  bg-white rounded-3xl  ">
        <div className="lg:w-1/2 justify-center items-center">
          <picture>
            <source media="(max-width: 640px )" srcSet={mobile} />
            <source media="(min-width: 641px rounded-3xl )" srcSet={desktop} />
            <img
              src={mobile}
              alt="Caldera"
              className="w-full h-[350px] rounded-3xl object-cover object-center"
            />
          </picture>
        </div>
        <div className=" flex flex-col  px-10  lg:w-1/2 ">
          <h2 className="font-monts text-left lg:text-left  text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-none mb-10 lg:mb-5 font-semibold  mt-8 lg:mt-2">
            ¿Qué industrias se pueden beneficiar de esta tecnología?
          </h2>
          <div className="mb-10 grid justimt-fy-items-start font-monts lg:mt-5 ">
            <ul className=" space-y-2 px-4 text-[12px] md:text-[14px] lg:text-[16px]">
              <li className="flex items-center gap-3    leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Agricultura
              </li>
              <li className="flex items-center gap-3     leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Alimentaria
              </li>
              <li className="flex items-center gap-3  leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Gimnasios y centros deportivos
              </li>
              <li className="flex items-center gap-3  leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Hospitalaria
              </li>
              <li className="flex items-center gap-3  leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Hotelería
              </li>
              <li className="flex items-center gap-3  leading-tight ">
                <span className="text-[#F2C00C]" data-aos="fade-right">
                  <FaCheck size={15} />
                </span>
                Residencial de alta demanda
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
