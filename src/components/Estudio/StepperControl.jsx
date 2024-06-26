
export const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around  mb-8">
      {/* Botton regresar */}
      <button
        onClick={() => handleClick("Terminar")}
       
        className={`w-[150px] md:w-[180px] h-[40px] bg-slate-600 font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-slate-600 hover:border-2 hover:border-slate-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full mb-2  ${
          currentStep === steps.length - 1 ? " invisible" : "invisible"
        }`}
      >
        No
      </button>

      {/* Botton siguiente */}
      <button
        onClick={() => handleClick("Continuar")}
       
        className="bg-blueOntu w-[150px]  md:w-[180px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full mb-8"
      >
        {currentStep === steps.length - 1 ? "Finalizar" : "Si"}
      </button>
    </div>
  );
};
