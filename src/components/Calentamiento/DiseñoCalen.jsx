export const DiseñoCalen = () => {
  return (
    <div className="w-full mt-10 mb-16">
      <div className="px-5 md:px-14 ">
        <div className="flex items-center justify-start rounded-3xl w-full h-[480px] bg-fixed bg-parallaxDCal bg-top bg-cover ">
          <div className="flex flex-col bg-opacity-40 bg-clip-padding backdrop-blur-sm bg-blueOntu rounded-3xl w-full h-full">
            <div className="px-8 md:px-10 h-full flex flex-col justify-center items-center md:items-start">
              <div className="w-full">
                <h3 className="uppercase text-[12px] md:text-[13px] lg:text-[15px] mt-10 font-medium tracking-widest text-white ">
                  Diseño
                </h3>
                <hr className="border-[1.5px] border-[#F2C00C] mb-2 w-1/6 mt-1" />
              </div>

              <h1 className="font-monts text-[38px] md:text-[42px] lg:text-[46px] text-white leading-none mb-5 lg:mb-0 font-semibold tracking-wide mt-2  ">
                Es muy sencillo diseñar tu sistema
              </h1>
              <div className="w-full">
                <p className="text-[14px] md:text-[16px]  lg:text-[18px]  mt-5 mb-5 font-monts leading-tight font-medium flex flex-row items-center text-left text-white">
                  Con solo unas sencillas preguntas podremos comenzar.
                </p>
                <div className="flex justify-left  ">
                  <button className="bg-gray-600  w-[255px] h-[65px] md:w-[330px] md:h-[40px] font-monts flex items-center justify-center font-semibold uppercase   text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-gray-200 hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full ">
                    Comencemos con tu diseño
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
