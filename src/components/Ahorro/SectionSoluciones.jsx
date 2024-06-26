export const SectionSoluciones = () => {
  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="max-w-[1240px] bg-gray-50 rounded-3xl mx-auto flex flex-col justify-center items-center px-10 text-center mb-10  ">
        <div>
          <h2 className=" font-monts text-center text-[28px] md:text-[32px]  lg:text-[36px]  py-2 mb-5 text-black mt-10 leading-none font-semibold tracking-wide">
            Soluciones sostenibles para la gestión del agua
          </h2>
        </div>

        <div className="w-full mx-auto grid md:grid-cols-3 lg:grid-cols-3 md:gap-5 border border-gray-400 rounded-3xl  px-5 md:px-10 relative mb-10 mt-10 ">
          <h2 className="absolute  top-[-10px] left-8 bg-gray-50  px-2 py-1 text-gray-600 font-medium font-monts text-[20px] md:text-[22px] lg:text-[26px] leading-3 ">
            Soluciones
          </h2>
          {/* Card 1 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  mt-12  md:mb-10">
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05]">
              Captación Pluvial
            </h2>
          </div>
          {/* Card 2 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  md:mt-12 md:mb-10 ">
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05]">
              Almacenamiento y Filtrado
            </h2>
          </div>
          {/* Card 3 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  md:mt-12 mb-10  ">
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05]">
              Uso y Reutilización
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
