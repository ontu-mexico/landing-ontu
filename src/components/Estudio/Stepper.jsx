import React, { useEffect, useState, useRef } from "react";

export const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    //actualizacion
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count == stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          complete: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          complete: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          complete: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    //crear objeto
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          complete: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displayStepes = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index != newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-ontu">
          <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "bg-ontu text-white font-bold border border-ontu": ""}`}>
            {/* Display numero */} 
            {step.complete ? (
                <span className="text-white font-bold text-xl">&#10003;</span>
            ):(index + 1) }
          </div>
          <div className={`absolute top-0 text-center mt-14 w-32 text-xs font-medium font-monts uppercase ${step.highlighted ? "text-black" : "text-gray-400"}`}>
            {/* Display descripcion */}
            {step.description}
          </div>
        </div>
        <div className={`flex-auto border-t-2 transi duration-500 ease-in-out ${step.complete ? "border-ontu": "border-gray-300" }`}>
          {/* Display line */}
        </div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displayStepes}
    </div>
  );
};
