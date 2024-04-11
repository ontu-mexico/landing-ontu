import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerPE } from "./BannerPE";
import { SectionPE } from "./SectionPE";
import { CalculadoraPE } from "./CalculadoraPE";
import { SecitionBeneficios } from "./SecitionBeneficios";
import { SectionShield } from "./SectionShield";
import { CallFormPE } from "./CallFormPE";
import { CardInfo } from "../sustentabilidad/CardInfo";
import { SectionAcademia } from "./SectionAcademia";
//calculadora
import React, { useEffect, useState } from "react";
import Slider from "react-slider";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import "../PanelesSolares/slider.css";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
//formulario
import { Link } from "react-router-dom";
import { FormEmpresas } from "../Formularios/FormEmpresas";
//Slider
const MIN = 600;
const MAX = 35000;

//Animation number
import { useSpring, animated } from "react-spring";
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 400,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export const PanelesEmpresas = () => {
  // Control de valores del Slider
  const [values, setValues] = useState(MIN);
  const [actual, setActual] = useState(values);
  const [resultado, setResultado] = useState(0);
  const [ahorro, setAhorro] = useState(0);
  //Resultado
  useEffect(() => {
    //Obtien el valor actual
    setActual(values);
    // Calcular el resultado aquí
    const newResultado = values <= 2500 ? 59 : (values * 5) / 100;
    setResultado(newResultado);

    // Calcular el ahorro
    const newAhorro = (values - newResultado) * 150;
    setAhorro(newAhorro);
  }, [values]);

  const formattedActual = actual.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  const formattedResultado = resultado.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  const formattedAhorro = ahorro.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  console.log("values: ", values);
  const navigate = useNavigate();

  //scroll
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("formulario");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      <NavBar />
      <BannerPE />
      <SectionPE />
      {/* Calculadora */}
      <div className="w-full mb-10 px-5 mt-16 ">
        <div className="max-w-[1240px] mx-auto md:flex md:flex-wrap md:gap-5 bg-grayOntu/30 rounded-3xl">
          <div className="p-10 my-4 md:p-8 lg:p-12 lg:px-16  md:w-[343px] md:flex-grow lg:w-[443px] lg:flex-grow">
            <h3 className="uppercase text-[12px] md:text-[13px] lg:text-[15px] mt-5 font-medium tracking-widest">
              Simulador de ahorro
            </h3>
            <h2 className="font-monts text-left mt-2  lg:text-left text-black text-[28px] md:text-[32px]  lg:text-[36px] md:text-left leading-none font-semibold tracking-wide ">
              Esto es lo que podrías estar ahorrando
            </h2>

            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]   mt-5 text-left leading-tight tracking-normal items-center  font-monts">
              Simula el ahorro que podrías obtener en tu recibo bimestral de{" "}
              <span className="font-semibold text-ontu">CFE</span> si utilizaras
              Paneles Solares.
            </p>

            <div className="flex flex-col items-start gap-2 mt-5">
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-monts text-black ">
                  Tu ahorro a<span className="font-semibold "> 25 años</span>{" "}
                  sería:
                </p>
              </div>

              <div
                className={
                  "text-[29px] md:text-[27px] lg:text-[29px] font-monts  flex col-span-2  text-ontu font-bold   "
                }
              >
                {formattedAhorro}
              </div>
            </div>
            {/* Boton scroll */}
            <div className="flex  items-center mt-10 ">
              <p className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-white hover:border-2 hover:bg-gray-600 hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full ">
                <a href="#formulario" onClick={scrollToPackages}>
                  Contáctanos
                </a>

                <span className="px-2">
                  <FaArrowRight />
                </span>
              </p>
            </div>
          </div>
          {/* SLIDER */}
          <div className=" px-6 py-6 md:py-12 lg:px-10 flex md:w-[343px] md:flex-grow lg:w-[443px] lg:flex-grow justify-center  ">
            <div
              className="w-full flex justify-center flex-col p-10 md:p-7  rounded-3xl bg-white"
              data-aos="jump-in"
              x-data="{intersect:false}"
            >
              <div className="font-monts  ">
                <h3 className="mt-3 text-[12px] md:text-[13px] lg:text-[15px] tracking-widest text-left text-blueOntu font-medium ">
                  Tu recibo CFE actual
                </h3>
                <div className="flex justify-between items-center">
                  <p className=" text-[14px] md:text-[16px]  lg:text-[18px]   text-left text-black">
                    ¿Cuánto pagas actualmente?
                  </p>
                  <div
                    className={
                      "  text-[14px] md:text-[16px]  lg:text-[18px]  font-monts  text-black text-center flex col-span-2 justify-center "
                    }
                  >
                    {formattedActual}
                  </div>
                </div>
              </div>

              {/* SliderRange */}
              <div className="h-[20px] ">
                <Slider
                  className={"slider"}
                  onChange={setValues}
                  value={values}
                  min={MIN}
                  max={MAX}
                />
                <div className="flex font-monts justify-between text-gray-500 mt-4 mb-5 font-light">
                  <div
                    className={
                      "text-[13px] font-monts font-normal tracking-wide text-center flex justify-center "
                    }
                  >
                    <div>$</div>
                    <div className="">
                      <Number n={600} />
                    </div>
                  </div>
                  <div
                    className={
                      "text-[13px] font-monts font-normal tracking-wide  text-center flex justify-center "
                    }
                  >
                    <div className="">$</div>
                    <div className="">
                      <Number n={35000} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center font-monts justify-center mt-20">
                <h3 className="mt-3 text-[12px] md:text-[13px] lg:text-[15px] tracking-widest text-left text-blueOntu font-medium  ">
                  Nuevo recibo CFE
                </h3>

                <div className="flex justify-between items-center gap-1 ">
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] font-monts text-black  ">
                    Lo que pagarías si utilizaras Paneles Solares:
                  </p>
                  <div
                    className={
                      "text-[16px] md:text-[18px] lg:text-[20px]  font-monts  flex col-span-2 justify-between text-blueOntu font-medium mr-2 lg:ml-5  my-2  "
                    }
                  >
                    {formattedResultado}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardInfo />
      <SectionShield />
      <SecitionBeneficios />
      <SectionAcademia />
      {/* Formulario empresa */}
      <div className="w-full bg-white mt-10 px-4 mb-5" id="formulario">
        <div className="max-w-[1240px] mx-auto rounded-3xl flex flex-col md:flex-row  bg-blueOntu/10">
          <div className="flex flex-col justify-center font-monts py-8 md:w-1/3">
            <div className="ml-10  md:border-r md:border-gray-600">
              <h2 className="font-semibold  text-[28px] md:text-[32px]  lg:text-[36px] tracking-wide leading-none py-5 mr-3 ">
                <span className="text-gray-600">Solicita una asesoría </span>y
                deshazte de dudas
              </h2>
              <p className="text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-left mt-5 mr-5">
                Evita el formulario y contáctanos ahora
              </p>
              <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                <span className="font-semibold text-blueOntu hover:text-gray-600 flex flex-row items-center">
                  <Link to={""}>Contactar </Link>
                  <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                    <FaArrowRight size={15} />
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-2/3">
            <div className="m-5 md:m-10 bg-white rounded-b-3xl md:rounded-l-none md:rounded-r-3xl px-4 ">
              <FormEmpresas />
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </main>
  );
};
