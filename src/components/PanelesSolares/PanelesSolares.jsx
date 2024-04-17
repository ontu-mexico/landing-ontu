import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Slider from "react-slider";
import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import { PagSustentabilidad } from "../sustentabilidad/PagSustentabilidad";
import { CardInfo } from "../sustentabilidad/CardInfo";
import { useNavigate } from "react-router-dom";
import { SectionPanel } from "../sustentabilidad/SectionPanel";
import { SectionBeneficios } from "../sustentabilidad/SectionBeneficios";
import { FaArrowRight } from "react-icons/fa6";
import "./slider.css";
//AOS
import "aos/dist/aos.css";

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
export const PanelesSolares = () => {
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
  return (
    <main>
      <Helmet>
        <title>Paneles Solares Hogar | Ontu</title>
        <meta
          name="description"
          content="Paneles solares para tu hogar. Energía limpia."
        />
        <meta
          name="Keywords"
          content="paneles solares,  paneles solares para casa, casas sustentables con paneles solares, paneles solares mexico"
        />
        <meta property="og:title" content="Paneles Solares Hogar | Ontu" />
        <meta
          property="og:description"
          content="Transforma tu hogar con energía sostenible con el uso paneles solares. Expertos en eficiencia y ahorro."
        />
        <meta property="og:url" content="https://www.ontu.mx/paneles-solares" />
        <meta property="og:image" content="https://www.ontu.mx/logo_ontu.png" />
        <link rel="canonical" href="https://www.ontu.mx/paneles-solares" />
      </Helmet>
      <NavBar />
      <PagSustentabilidad />
      <SectionPanel />

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

            <div className="flex flex-col items-start  gap-2 mt-5">
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
      {/* Boton */}
      <div className="flex w-full px-5 mb-5 justify-center items-center ">
        <div className="md:flex max-w-[1240px] mx-auto  md:justify-around w-full p-5 px-5 font-monts bg-grayOntu/30 rounded-3xl  ">
          <h2 className=" text-[28px] md:text-[32px]  lg:text-[36px] text-center md:text-left font-semibold tracking-wide">
            Solicita un estudio solar gratuito
          </h2>
          <div className="flex justify-between items-center mt-5 md:mt-0  ">
            <button
              onClick={() => navigate("/estudio-solar")}
              className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-white hover:border-2 hover:bg-gray-600 hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
            >
              Conocer más{" "}
              <span className="px-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* CardInfo */}
      <CardInfo />

      <SectionBeneficios />
      <FooterCR />
    </main>
  );
};
