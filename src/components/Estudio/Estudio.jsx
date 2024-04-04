import React, { useState } from "react";
import { StepperContext } from "./context/StepperContext";
import { Stepper } from "./Stepper";
import { StepperControl } from "./StepperControl";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { FormDatos } from "./FormDatos";
import { FormEnergia } from "./FormEnergia";
import { FormComplete } from "./FormComplete";

export const Estudio = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Datos Personales", "Energía Actual", "Completado"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FormDatos />;
      case 2:
        return <FormEnergia />;
      case 3:
        return <FormComplete />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "Continuar") {
      newStep++;
    } else if (direction === "Retroceder") {
      newStep--;
    } else if (direction === "Terminar") {
      newStep = 3; // Establecer el paso en 3 (Completado)
    }

    // Asegúrate de que el nuevo paso esté dentro de los límites
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <main>
      <NavBar />
      <div className="w-full h-[75px] bg-transparent mx-auto  "></div>
      <div className="w-full py-10 bg-blueOntu/5 ">
        <h2 className="mt-10 text-[38px] md:text-[42px]  lg:text-[46px] font-monts text-center font-semibold leading-none py-2 mb-5">
          Solicita tu Estudio Solar
        </h2>
        <p className="text-[16px] mb-10 font-monts text-center  text-black lg:mx-60 lg:font-medium lg:text-[20px]">
          Completa la siguiente información para comenzar con tu estudio
          personalizado.
        </p>
        <div className="lg:w-1/2 lg:mx-auto m-5 shadow-xl rounded-2xl  bg-white ">
          <div className="container horizontal mt-5">
            {/* Stepper */}
            <Stepper steps={steps} currentStep={currentStep} />
            {/* Display Components */}
            <div className="my-10 p-10">
              <StepperContext.Provider
                value={{
                  userData,
                  setUserData,
                  finalData,
                  setFinalData,
                }}
              >
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>
          </div>

          {/* Navegacion y control del Stepper */}
          {currentStep != steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>
      </div>
      <FooterCR />
    </main>
  );
};
