import { CardBeneficios } from "./CardBeneficios";
import { BsCashCoin } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import React, { useEffect } from "react";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export const CardBeneficosConteniner = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="w-full h-[710px] py-10 px-4 bg-white md:h-[520px] lg:h-[500px] xl:h-[420px]">
      <div className="flex flex-col justify-center items-center px-5">
        <h4 className="font-monts font-semibold text-black text-center  md:text-[38px] lg:text-[40px] text-[38px] leading-none mb-5 lg:mb-0 ">
          Beneficios
        </h4>
        <div
          className="h-[2px] w-[300px] lg:w-[400px] lg:mt-2 bg-[#F2C00C]"
          data-aos="fade-right"
        ></div>
      </div>

      <div className="lg:max-w-[1240px] lg:mx-auto ">
        <section className=" justify-center mt-6 md:flex md:flex-wrap md:gap-10 font-monts lg:h-[280px] ">
          <CardBeneficios
            icono={<TbPigMoney size={38} />}
            num="01"
            titleA="Ahorro"
            textA="Reduce tu gasto de energía al estar generando tu propia energía a través de un sistema fotovoltaico."
          />
          <CardBeneficios
            icono={<PiPlant size={38} />}
            num="02"
            titleA="Sustentabilidad"
            textA="Al estar generando energía a través de un sistema fotovoltaico estarás mitigando tu generación de CO2."
          />
          <CardBeneficios
            icono={<BsCashCoin size={35} />}
            num="03"
            titleA="Beneficios Fiscales"
            textA="Accede a distintos beneficios, al tener un sistema fotovoltaico te abre la posibilidad de tener distintos incentivos fiscales."
          />
        </section>
      </div>
    </div>
  );
};
