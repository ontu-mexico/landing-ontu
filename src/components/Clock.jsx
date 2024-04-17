import React, { Fragment } from "react";

export const Clock = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) => {
  return (
    <Fragment>
      <section className="">
        <div className="relative flex justify-center items-center text-ontu ">
          <section className="text-center p-1 font-monts">
          <small className="uppercase lg:mx-5 m-4 font-semibold text-[12px] text-black">Días</small>  
          <p className="text-[38px] font-bold bg-ontu rounded-full h-20 w-20 py-3 text-white">{timerDays}</p>      
          </section>
             <section className="text-center p-1  font-monts">
          <small className="uppercase lg:m-3 m-2 font-semibold text-[12px] text-black">Horas</small>
            <p className="text-[38px] font-bold bg-ontu rounded-full h-20 w-20 py-3 text-white ">{timerHours}</p>
          </section>
             <section className="text-center p-1 font-monts">
          <small className="uppercase font-semibold text-[12px] text-black">Minutos</small>
            <p className="text-[38px] font-bold bg-ontu rounded-full h-20 w-20 py-3 text-white ">{timerMinutes}</p>   
          </section>
          <section className="text-center p-1  font-monts ">
          <small className="uppercase font-semibold text-[12px] text-black">Segundos</small>
            <p className="text-[38px] font-bold bg-ontu rounded-full h-20 w-20 py-3 text-white ">{timerSeconds}</p>    
          </section>

        </div>
      </section>
    </Fragment>
  );
};

Clock.defaultProps={
    timerDays:10,
    timerHours:10,
    timerMinutes:10,
    timerSeconds:10,
};