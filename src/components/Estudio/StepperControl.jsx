import React from 'react';

export const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around  mb-8'>
        {/* Botton regresar */}
        <button 
        onClick={()=>handleClick("Terminar")}
        className={ `bg-blueOntu2 font-monts  w-[160px] h-[48px] text-white uppercase py-2 mb-8 rounded-full font-bold cursor-pointer  hover:bg-white hover:text-blueOntu2 hover:border-2 hover:border-blueOntu2 hover:font-bold   active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all visible ${currentStep === steps.length -1 ? " invisible": ""}`}>
        No
        </button>

        {/* Botton siguiente */}
        <button
        onClick={()=>handleClick("Continuar")} 
        className='bg-ontu font-monts w-[160px] h-[48px] text-white uppercase py-2 mb-8 rounded-full font-bold cursor-pointer border-2 border-ontu hover:bg-white hover:text-ontu transition duration-200 ease-in-out'>
        {currentStep === steps.length -1 ? "Finalizar" : "Si"}
        </button>

    </div>
  );
};
