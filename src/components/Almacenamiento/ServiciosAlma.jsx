import calderaI from "/src/assets/image/calderaIndustrial.jpg";
import calderaI2 from "/src/assets/image/calderaIndustrial.jpg";
import panelI2 from "/src/assets/image/panelEstudio.jpg";
import panelH from "/src/assets/image/calderaIndustrial.jpg";
import panelH2 from "/src/assets/image/colocacionPanel.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ServiciosAlma = () => {
  return (
    <section className="w-full px-5 bg-white  ">
      <div
        className="max-w-[1240px] mx-auto bg-whiteflex items-center justify-center rounded-3xl 
    "
      >
        <div className="h-[2px] w-full flex justify-center">
          {" "}
          <hr className="border-[1.5px] border-[#F2C00C] mb-2 w-1/3 mt-1" />
        </div>

        <div className=" px-5 py-5 mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-[32px] mb-6 lg:text-[36px] tracking-wide leading-none py-0 font-semibold lg:mt-15 text-center mt-5">
              Soluciones
            </h2>
          </div>

          {/* Paneles Solares Industriales*/}
          <div className="w-full px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center rounded-3xl ">
              <div className="lg:w-1/2 object-cover ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={panelI2}
                    sizes=""
                  />
                  <source
                    media="(min-width: 641px )"
                    srcSet={panelI2}
                    sizes=""
                  />
                  <img
                    src={panelI2}
                    alt="Panel solar"
                    className="w-full h-full rounded-3xl"
                  />
                </picture>
              </div>
              <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
                <h2 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                  Comercial
                </h2>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[14px] md:text-[18px]  lg:text-[20px]  leading-tight tracking-normal text-left">
                    Garantiza la continuidad operativa y mantén un respaldo
                    energético en todo momento con un sistema de almacenamiento
                    inteligente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Paneles Solares  */}
          <div className="w-full px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center  rounded-3xl ">
              <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
                <h1 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                  Industrial
                </h1>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className=" text-[14px] md:text-[18px]  lg:text-[20px]   leading-tight tracking-normal text-left">
                    Garantiza la continuidad operativa y desplaza la carga en
                    los horarios que la tarifa resulta más cara.
                  </p>
                  <p className="  text-[14px] md:text-[18px]  lg:text-[20px]   leading-tight tracking-normal text-left mt-5">
                    Nuestros sistemas inteligentes te permiten mitigar los picos
                    energéticos y tener un consumo más estable.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 object-cover ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={panelH2}
                    sizes=""
                  />
                  <source
                    media="(min-width: 641px )"
                    srcSet={panelH2}
                    sizes=""
                  />
                  <img
                    src={panelH2}
                    alt="Panel solar"
                    className="w-full h-full rounded-3xl"
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Calderas */}
          <div className="w-full px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center rounded-3xl ">
              <div className="lg:w-1/2 object-cover ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={calderaI2}
                    sizes=""
                  />
                  <source
                    media="(min-width: 641px )"
                    srcSet={calderaI2}
                    sizes=""
                  />
                  <img
                    src={calderaI2}
                    alt="Panel solar"
                    className="w-full h-full rounded-3xl"
                  />
                </picture>
              </div>
              <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
                <h2 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                  Residencial
                </h2>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[14px] md:text-[18px]  lg:text-[20px]   leading-tight tracking-normal text-left">
                    Mantén un respaldo de energía en tu hogar y evita
                    intermitencias cuando exista un corte energético.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
