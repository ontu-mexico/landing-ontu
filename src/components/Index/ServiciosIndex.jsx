import calderaI from "/src/assets/image/calderaIndustrial.jpg";
import calderaI2 from "/src/assets/image/caldera.jpg";
import panelI2 from "/src/assets/image/panelEstudio.jpg";
import panelH from "/src/assets/image/calderaIndustrial.jpg";
import panelH2 from "/src/assets/image/colocacionPanel.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export const ServiciosIndex = () => {
  return (
    <section className="w-full px-5 bg-white  ">
      <div
        className="max-w-[1240px] mx-auto bg-whiteflex items-center justify-center rounded-3xl 
      "
      >
        <div className=" px-5 py-5 mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-[32px] mb-6 lg:text-[36px] tracking-wide leading-none py-0 font-semibold lg:mt-15 text-center mt-5">
              Proyecto llave en mano acorde a tus necesidades
            </h2>
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
                  Sistemas de calderas de condensación para su próxima{" "}
                  <span className="text-ontu">Eco Industria</span>
                </h2>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                    Texto por definir
                  </p>
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5"></p>
                  <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                    <span className="font-semibold hover:text-blueOntu flex flex-row items-center text-gray-600">
                      <Link to={"/"}>Saber más</Link>
                      <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                        <FaArrowRight size={15} />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Paneles Solares Industriales */}
          <div className="w-full px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center  rounded-3xl ">
              <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
                <h1 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                  Sistemas de Paneles Solares para su próxima{" "}
                  <span className="text-ontu">Eco Industria</span>
                </h1>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                    Texto por definir
                  </p>
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5"></p>
                  <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                    <span className="font-semibold hover:text-blueOntu flex flex-row items-center">
                      <Link to={"/"}>Saber más</Link>
                      <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                        <FaArrowRight size={15} />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
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
            </div>
          </div>

          {/* Paneles Solares*/}
          <div className="w-full px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center rounded-3xl ">
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
              <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
                <h2 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                  Sistemas de Paneles Solares para su próxima{" "}
                  <span className="text-ontu">Eco Hogar</span>
                </h2>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                    Texto por definir
                  </p>
                  <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5"></p>
                  <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                    <span className="font-semibold hover:text-blueOntu flex flex-row items-center text-gray-600">
                      <Link to={"/"}>Saber más</Link>
                      <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                        <FaArrowRight size={15} />
                      </span>
                    </span>
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
