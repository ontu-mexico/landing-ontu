import panel from '/src/assets/image/ontu_comercial.jpg'


export const SectionEstudio = () => {
  return (
    <div className="w-full bg-white py-9 px-2 ">
    <div className="max-w-[1240px] max-h-[320px] md:max-h-[300px] lg:max-h-[480px] lg:max-w-[1150px] mx-auto grid lg:grid-cols-2  ">
      <div className=" flex flex-col justify-center px-5  lg:justify-start">
        
        <h2 className="lg:text-[42px] font-monts font-semibold md:text-4x1 text-[34px] leading-none py-2 mb-5">
        Solicita tu Estudio Solar y Propuesta de Ahorro
        </h2>
        
        <p className="text-[18px] mb-10 font-monts lg:mr-5">
        Solicita tu estudio fotovoltaico personalizado de acuerdo a tus necesidades de forma gratuita. 
        Incorporaremos una propuesta en la que <span className='font-bold'>podrás ahorrar hasta un 98% en tu recibo CFE.</span>
        </p>
      </div>
      <div className=" lg:w-auto invisible lg:visible  ">
      <img className="lg:w-[480px] lg:h-[320px] lg:mx-auto " src={panel} alt="Ontu Panel Solar" />
      </div>
    </div>
  </div>
  );
};


