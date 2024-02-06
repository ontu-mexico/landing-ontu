import React from 'react';

export const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* Botton regresar */}
        <button 
        onClick={()=>handleClick()}
        className={`bg-white  w-[160px] h-[48px] text-slate-500 uppercase py-2 mb-8 rounded-full font-bold cursor-pointer border-2 border-slate-500 hover:bg-slate-900 hover:text-white transition duration-200 ease-in-out ${currentStep == 1 ? "opacity-50 cursor-not-allowed": ""}`}>
        Regresar
        </button>

        {/* Botton siguiente */}
        <button
        onClick={()=>handleClick("Siguiente")} 
        className='bg-ontu w-[160px] h-[48px] text-white uppercase py-2 mb-8 rounded-full font-bold cursor-pointer border-2 border-ontu hover:bg-white hover:text-ontu transition duration-200 ease-in-out'>
        {currentStep === steps.length -1 ? "Confirmar" : "Siguiente"}
        </button>
    </div>
  );
};
