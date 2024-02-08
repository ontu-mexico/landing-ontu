import { CardBeneficios } from "./CardBeneficios";
import { BsCashCoin } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";

export const CardBeneficosConteniner = () => {
  return (
    <div className="w-full h-[710px] py-1 px-4 bg-blueOntu/5 md:h-[520px] lg:h-[500px] xl:h-[420px]">
      <h4 className="font-monts  text-ontu uppercase text-center lg:text-[42px] my-6 text-[26px]">
        Beneficios
      </h4>
      <div className="lg:max-w-[1240px] lg:mx-auto ">
      <section className=" justify-center mt-6 md:flex md:flex-wrap md:gap-10 font-monts lg:h-[280px] ">
        <CardBeneficios
        icono={<TbPigMoney size={100}/>}
          num="01"
          titleA="Ahorro"
          textA="Reduce tu gasto de energía al estar generando tu propia energía a través de un sistema fotovoltaico."
        />
        < CardBeneficios
          icono={<PiPlant size={100} />}
          num="02"
          titleA="Sustentabilidad"
          textA="Al estar generando energía a través de un sistema fotovoltaico estarás mitigando tu generación de CO2.."
        />
        <CardBeneficios
          icono={<BsCashCoin size={100} />}
          num="03"
          titleA="Beneficios Fiscales"
          textA="Accede a distintos beneficios, al tener un sistema fotovoltaico te abre la posibilidad de tener distintos incentivos fiscales."
        />
      </section>
      </div>
    </div>
  );
};
