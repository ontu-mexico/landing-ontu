import { CardBeneficios } from "./CardBeneficios";
import { BsCashCoin } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { PiPlant } from "react-icons/pi";

export const CardBeneficosConteniner = () => {
  return (
    <div className="w-full h-[710px] py-1 px-4 bg-gray-100 md:h-[520px] lg:h-[540px] xl:h-[420px]">
      <h4 className="font-monts  text-ontu uppercase text-center font-bold my-6 text-[26px] lg:text-[36px]">
        Beneficios
      </h4>
      <section className="mt-6 md:flex md:flex-wrap md:gap-10 font-monts lg:h-[360px] ">
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
  );
};
