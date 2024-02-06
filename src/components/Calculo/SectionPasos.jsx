import panelSolar from "/src/assets/image/colocacionPanel.jpg";

export const SectionPasos = () => {
  return (
    <div className="w-full py-10 px-4 bg-white">
      {/*Form */}
      <div className="max-w-[1240px] mx-auto shadow-2xl shadow-ontu/60 flex bg-white">
        <div className="hidden w-1/2 lg:flex lg:w-1/3 ">
          <img
            className="object-cover object-left"
            src={panelSolar}
            alt="Panel solar"
          />
        </div>
        <div className="w-[1240px] flex items-center justify-center lg:w-2/3 ">
          <div className="font-monts px-10 py-20 lg:w-[900px] lg:px-20">
            <h2 className="lg:text-[42px] font-monts text-center font-semibold md:text-4xl text-4xl leading-none py-2 mb-5 text-veryGreen">
              ¿Cómo funciona?
            </h2>
            <div>
              <article className="flex  lg:w-full py-2 px-4 md:w-[343px] md:flex-grow font-monts">
                <div className="w-16 h-16 aspect-square border-4 border-ontu rounded-full flex-none text-ontu2 lg-white justify-items-center   ">
                  <p className=" font-bold text-[26px] mb-[10px] mt-2  text-ontu text-center ">
                    01
                  </p>
                </div>
                <div className="pl-3 w-full ">
                  <h2 className="font-bold mb-[10px] sm: text-[18px] uppercase text-ontu md:text-[22px]">
                    Estudio y Calculo
                  </h2>
                  <p className="">
                    Realizamos un estudio de tu consumo y calculamos la cantidad
                    de paneles solares que requieres para tu inmueble.
                  </p>
                </div>
              </article>
              <article className="flex lg:w-full py-2 px-4 md:w-[343px] md:flex-grow font-monts">
                <div className="w-16 h-16 aspect-square border-4 border-ontu rounded-full flex-none text-ontu2 lg-white justify-items-center">
                  <p className=" font-bold text-[26px] mb-[10px] mt-2  text-ontu text-center ">
                    02
                  </p>
                </div>
                <div className="pl-3 w-full ">
                  <h2 className="font-bold mb-[10px] sm: text-[18px] uppercase text-ontu md:text-[22px]">
                    Asignación
                  </h2>
                  <p className="">
                    Te asignamos con un integrador calificado que se encargara
                    de cubrir tus necesidades de forma personalizada.
                  </p>
                </div>
              </article>
              <article className="flex lg:w-full py-2 px-4 md:w-[343px] md:flex-grow font-monts">
                <div className="w-16 h-16 aspect-square border-4 border-ontu rounded-full flex-none text-ontu2 lg-white justify-items-center">
                  <p className=" font-bold text-[26px] mb-[10px] mt-2  text-ontu text-center ">
                    03
                  </p>
                </div>
                <div className="pl-3 w-full ">
                  <h2 className="font-bold mb-[10px] sm: text-[18px] uppercase text-ontu md:text-[22px]">
                  Instalación
                  </h2>
                  <p className="">
                  El integrador llevará a cabo la instalación y gestión ante CFE para dejar tu sistema trabajando.
                  </p>
                </div>
              </article>
              <article className="flex lg:w-full py-2 px-4 md:w-[343px] md:flex-grow font-monts">
                <div className="w-16 h-16 aspect-square border-4 border-ontu rounded-full flex-none text-ontu2 lg-white justify-items-center">
                  <p className=" font-bold text-[26px] mb-[10px] mt-2  text-ontu text-center ">
                    04
                  </p>
                </div>
                <div className="pl-3 w-full ">
                  <h2 className="font-bold mb-[10px] sm: text-[18px] uppercase text-ontu md:text-[22px]">
                  Acompañamiento
                  </h2>
                  <p className="">
                  Estaremos a tu lado durante todo el proceso incluso una vez instalado el sistema seguiremos en contacto contigo.
                  </p>
                </div>
              </article>
              <article className="flex lg:w-full py-2 px-4 md:w-[343px] md:flex-grow font-monts">
                <div className="w-16 h-16 aspect-square border-4 border-ontu rounded-full flex-none text-ontu2 lg-white justify-items-center">
                  <p className=" font-bold text-[26px] mb-[10px] mt-2  text-ontu text-center ">
                    05
                  </p>
                </div>
                <div className="pl-3 w-full ">
                  <h2 className="font-bold mb-[10px] sm: text-[18px] uppercase text-ontu md:text-[22px]">
                    Ahorro
                  </h2>
                  <p className="">
                  Ahora solo es cuestión de ponerse cómodos y solo preocuparse por seguir ahorrando.
                  </p>
                </div>
              </article>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
