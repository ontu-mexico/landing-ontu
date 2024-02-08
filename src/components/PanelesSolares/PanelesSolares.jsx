import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import Slider from "react-slider";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./slider.css";
import { PagSustentabilidad } from "../sustentabilidad/PagSustentabilidad";
import { CardInfo } from "../sustentabilidad/CardInfo";
import { CardBeneficosConteniner } from "../sustentabilidad/CardBeneficosConteniner";

const MIN = 600;
const MAX = 35000;

export const PanelesSolares = () => {
  // Control de valores del Slider
  const [values, setValues] = useState(MIN);

  console.log("values: ", values);
  //Navegacion hacia el Stepper Estudio
  const navigate = useNavigate();
  return (
    <main>
      <NavBar />

      <PagSustentabilidad />
      <div className="py-10 bg-blueOntu/5 w-full">
        {/* Info */}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 p-4">
          <div className="w-full first-line:flex flex-col p-4 my-4 rounded-lg ">
            <h2 className="text-[28px] font-monts text-blueOntu2 uppercase text-left py-8 lg:mt-20 lg:text-[42px] ">
              CALCULA TU AHORRO
            </h2>
            <div className="text-[15px] font-monts mb-10  ">
              <h2 className="lg:text-[42px] font-monts font-semibold md:text-4x1 text-[28px] leading-none py-2 mb-5">
                Estima el ahorro utilizando Paneles Solares
              </h2>
              <p className="text-[18px] mb-5 py-2">
                <span className="text-ontu font-bold">Ontu</span>{" "}
                <span>
                  se encarga del mantenimiento durante el periodo de
                  arrendamiento. Puedes tomar la decisión de comprar el sistema
                  en cualquier momento sin penalización.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white lg:p-10">
          <div className="text-[15px] font-monts  mt-10 ">
              <h2 className="text-gray-500 text-[26px] text-center">
                ¿Cuánto pagas actualmente?
              </h2>
              <div
                className={
                  "text-[26px] font-monts mb-5 py-2 text-gray-500 text-center "
                }
              >
                ${values} 
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
              <div className="flex font-monts justify-between text-marineOntu mt-5">
                <p>$600</p>
                <p>$35000</p>
              </div>
            </div>
            <div className="items-center justify-center mt-14">
            <h2 className="text-[26px] font-monts text-marineOntu uppercase text-center ">
                Lo que pagarías si tuvieras paneles solares
              </h2>
              <p className="text-marineOntu font-monts text-[42px] px-4 text-center">
                {" "}
                ${(values * 5) / 100}
              </p>
              
            </div>

            <div className="text-[15px] mt-5 font-monts mb-10 ">
              <h2 className="text-gray-900 text-xl text-center font-bold">
                ¿Quieres saber como lograrlo?
              </h2>
              <div className="flex justify-between mt-8 lg:justify-around">
                <button
                  onClick={() => navigate("/Estudio")}
                  className="bg-blueOntu2 w-[230px] h-[48px] font-monts font-bold uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-white hover:text-blueOntu2 hover:border-2 hover:border-blueOntu2 hover:font-bold rounded-full active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all "
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
