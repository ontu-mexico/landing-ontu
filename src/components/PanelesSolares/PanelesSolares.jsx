import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import Slider from "react-slider";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./slider.css";

const MIN = 100;
const MAX = 12000;

export const PanelesSolares = () => {
// Control de valores del Slider 
  const [values, setValues] = useState([MIN, MAX]);
  console.log("values: ", values);
//Navegacion hacia el Stepper Estudio
  const navigate = useNavigate();
  return (
    <main>
      <NavBar />
      <div className="h-[100px]  bg-transparent "></div>
      <div className="py-10 bg-ontu4 w-full">
        {/* Info */}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 p-4">
          <div className="w-full first-line:flex flex-col p-4 my-4 rounded-lg ">
            <h2 className="text-[26px] font-monts text-ontu uppercase font-bold text-left py-8 ">
              CALCULA TU AHORRO
            </h2>
            <div className="text-[15px] font-monts mb-10  ">
              <h2 className="lg:text-[42px] font-monts font-semibold md:text-4x1 text-[28px] leading-none py-2 mb-5">
                Energía limpia para tu hogar o negocio
              </h2>
              <p className="text-[15px] mb-5 py-2">
                Ontu se encarga del mantenimiento durante el periodo de
                arrendamiento. Puedes tomar la decisión de comprar el sistema en
                cualquier momento sin penalización.
              </p>
            </div>
          </div>
          {/* SliderRange */}
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white lg:p-10">
            <h2 className="text-xl font-monts text-ontu uppercase text-left py-8 font-bold">
              Gasto con paneles
            </h2>
            <span className="text-ontu font-bold text-[42px]">
              {" "}
              ${values[1] - values[0]}
            </span>

            <div className="h-[20px] ">
              <Slider
                className={"slider"}
                onChange={setValues}
                value={values}
                min={MIN}
                max={MAX}
              />
            </div>

            <div className="text-[15px] font-monts mb-5 mt-10 ">
              <h2 className="text-gray-500 text-xl">Gasto sin Paneles</h2>
              <div
                className={"text-[25px] font-monts mb-5 py-2 text-gray-500 "}
              >
                ${values[0]} - ${values[1]}
              </div>
            </div>

            <div className="text-[15px] font-monts mb-10 ">
              <h2 className="text-gray-500 text-xl text-center font-bold">Quiero saber como lograrlo</h2>
              
              <div className="flex justify-between mt-8 lg:justify-around"
              >
                 <button
              onClick={() => navigate("/Estudio")}
              className="bg-veryGreen w-[150px] h-[48px] font-monts uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-veryDarkBlue rounded-full active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all "
            >
              SI
            </button>
            <button
              onClick={() => navigate("/SolicitarEstudio")}
              className="bg-veryGreen w-[150px] h-[48px] font-monts uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-veryDarkBlue rounded-full active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all "
            >
              No
            </button>
              
              </div>
            </div>

           
          </div>
        </div>
      </div>

      <FooterCR />
    </main>
  );
};
