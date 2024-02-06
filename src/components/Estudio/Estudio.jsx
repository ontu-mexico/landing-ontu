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
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = ["Datos Personales", "Energia Actual", "Completado"];
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
    direction === "Siguiente" ? newStep++ : newStep--;
    
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <main>
      <NavBar />
      <div className="w-full h-[100px]  bg-transparent mx-auto mb-8 "></div>
      <div className="lg:w-1/2 lg:mx-auto m-5 shadow-xl rounded-2xl  bg-white ">
        <div className="container horizontal mt-5">
          {/* Stepper */}
          <Stepper
          steps= {steps}
          currentStep={currentStep}
          />
    {/* Display Components */}
    <div className="my-10 p-10">
   <StepperContext.Provider value={{
    userData, 
    setUserData,
    finalData,
    setFinalData
   }} >
    {displayStep(currentStep)}
   </StepperContext.Provider>
    </div>

        </div>

        {/* Navegacion y control del Stepper */}
        {currentStep != steps.length &&
        <StepperControl
        handleClick ={handleClick}
        currentStep={currentStep}
        steps={steps}
         />}
      </div>

      <FooterCR />
    </main>
  );
};
