export const SecitionBeneficios = () => {
  return (
    <div className="w-full  px-4 bg-white">
      <div className="max-w-[1240px] bg-gray-50 rounded-3xl mx-auto flex flex-col justify-center items-center px-10 text-center mb-10  ">
        <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-2 md:gap-5 border border-gray-400 rounded-3xl  px-5 md:px-10 relative mb-10 mt-10 ">
          <h2 className="absolute  top-[-10px] left-8 bg-gray-50  px-2 py-1 text-gray-600 font-medium font-monts text-[20px] md:text-[22px] lg:text-[26px] leading-3 ">
            Beneficios Ontu Shield
          </h2>
          {/* Card 1 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  mt-12  ">
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05]">
              Garantía de Producción
            </h2>
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05] mt-5">
              Garantía Extendida*
            </h2>
          </div>
          {/* Card 2 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  md:mt-12 ">
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05]">
              Limpieza Paneles
            </h2>
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05] mt-5">
              Mantenimiento
            </h2>
          </div>
          {/* Card 3 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent  md:mb-10  ">
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05]">
              Gestión de Garantías
            </h2>
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05] mt-5">
              Monitoreo de Sistema
            </h2>
          </div>
          {/* Card 4 */}
          <div className="w-full flex flex-col  my-4 text-center bg-transparent   mb-10  ">
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05]">
              Monitoreo vs Robo*
            </h2>
            <h2 className="text-[18px] md:text-[20px] lg:text-[20px] font-monts text-white bg-slate-600 rounded-3xl font-semibold text-center p-2 hover:scale-[1.05] mt-5">
              Mantenimiento Correctivo
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
