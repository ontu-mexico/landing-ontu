import { Link } from "react-router-dom";
import mobile from "/src/assets/image/shield.png";
import desktop from "/src/assets/image/shield.png";
import { FaArrowRight } from "react-icons/fa6";

export const SectionShield = () => {
  return (
    <div className="w-full px-5 bg-white mb-16">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center bg-blueOntu/10  rounded-3xl  ">
        <div className="lg:w-1/2 flex justify-center">
          <picture>
            <source media="(max-width: 640px )" srcSet={mobile} sizes="" />
            <source media="(min-width: 641px )" srcSet={desktop} sizes="" />
            <img
              className="rounded-3xl h-[350px] "
              src={mobile}
              alt="Beneficios"
            />
          </picture>
        </div>
        <div className=" flex flex-col px-10  text-left lg:w-1/2 ">
          <h2 className="font-monts lg:text-left text-left   text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-none mb-10 lg:mb-5 font-semibold  mt-5">
            Ontu Shield
          </h2>
          <div className="mb-10 font-monts lg:mt-5  ">
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-left">
              Adquiere nuestra póliza de operación y mantenimiento para tu
              sistema.
            </p>
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-left mt-5">
              Obtén reportes personalizados sobre la producción de tu sistema,
              ahorro económico, impacto ambiental e historial desde la
              instalación de tu sistema.
            </p>
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
              <span className="font-semibold hover:text-blueOntu flex flex-row items-center">
                <Link to={""}>Solicita más información</Link>
                <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                  <FaArrowRight size={15} />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
