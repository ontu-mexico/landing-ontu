import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import Slider from "react-slider";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./slider.css";
import { PagSustentabilidad } from "../sustentabilidad/PagSustentabilidad";
import { CardInfo } from "../sustentabilidad/CardInfo";
import { CardBeneficosConteniner } from "../sustentabilidad/CardBeneficosConteniner";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
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
//Slider
const MIN = 600;
const MAX = 35000;

export const PanelesSolares = () => {
  // Control de valores del Slider
  const [values, setValues] = useState(MIN);
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  console.log("values: ", values);
  //Navegacion hacia el Stepper Estudio
  const navigate = useNavigate();
  return (
    <main>
      <NavBar />

      <PagSustentabilidad />
      <div className=" w-full  py-10 " x-data="{intersect:false}">
        <h2
          className="font-monts text-center text-ontu md:text-[42px] lg:text-[46px] text-[38px] lg:mb-5 leading-none py-2  font-semibold  "
          data-aos="fade-up"
        >
          Calcula tu ahorro
        </h2>
        {/* Info */}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 p-4">
          <div className="w-full first-line:flex flex-col p-4 my-4  ">
            <div className="text-[15px] font-monts mb-10 text-center lg:text-start ">
              <h2
                className="lg:text-[42px]  font-monts font-semibold md:text-4x1 text-[28px] leading-none py-2 mb-5 "
                data-aos="fade-right"
              >
                Estima el ahorro utilizando Paneles Solares
              </h2>
              <p className="text-[18px] mb-5 py-2" data-aos="fade-up">
                <span className=" text-ontu font-bold">Ontu</span>{" "}
                <span>
                  se encarga del mantenimiento durante el periodo de
                  arrendamiento. Puedes tomar la decisión de comprar el sistema
                  en cualquier momento sin penalización.
                </span>
              </p>
            </div>
          </div>

          <div
            className="w-full flex flex-col p-4 shadow-md  lg:p-10 border border-ontu bg-white"
            data-aos="fade-up"
          >
            <div className="text-[15px] font-monts  mt-4 ">
              <h1 className="text-center text-blueOntu font-medium ">
                Tu recibo CFE actual
              </h1>
              <h2 className="text-[26px] text-center text-black">
                ¿Cuánto pagas actualmente?
              </h2>
              <div
                className={
                  "text-[26px] font-monts mb-5 py-2 text-black text-center flex col-span-2 justify-center "
                }
              >
                <div>$</div> <div className=" px-2 "> {values}</div>
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
              <div className="flex font-monts justify-between text-ontu mt-7 text-[16px] font-light">
                <div
                  className={
                    "text-[16px] font-monts font-medium text-center flex justify-center "
                  }
                >
                  <div>$</div>
                  <div className="px-1 font-medium">
                    <Number n={600} />
                  </div>
                </div>
                <div
                  className={
                    "text-[16px] font-monts font-medium text-center flex justify-center "
                  }
                >
                  <div>$</div>
                  <div className="px-1 font-medium">
                    <Number n={35000} />
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center justify-center mt-14">
              <h1 className="text-center text-blueOntu font-medium ">
                Nuevo recibo CFE
              </h1>
              <h2 className="text-[26px] font-monts text-black  text-center ">
                Lo que pagarías si tuvieras paneles solares
              </h2>
              <div
                className={
                  "text-[26px] font-monts mb-5 py-2 text-center flex col-span-2 justify-center "
                }
              >
                <div className="text-blueOntu font-monts text-[42px]  text-center">
                  {" "}
                  $
                </div>
                <div className="text-blueOntu font-monts text-[42px] px-2 text-center">
                  <Number n={(values * 5) / 100} />
                </div>
              </div>
            </div>

            <div className="text-[15px] mt-5 font-monts mb-10 ">
              <h2 className="text-gray-900 text-xl text-center font-bold">
                ¿Quieres saber como lograrlo?
              </h2>
              <div className="flex justify-between mt-8 lg:justify-around md:justify-center">
                <button
                  onClick={() => navigate("/Estudio")}
                  className="bg-blueOntu w-[230px] h-[48px] font-monts font-bold uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-white hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all "
                >
                  Conocer más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CardInfo */}
      <CardInfo />
      <CardBeneficosConteniner />
      <FooterCR />
    </main>
  );
};
