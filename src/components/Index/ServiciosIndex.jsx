import calderaI from "/src/assets/index/calderas.png";
import calderaI2 from "/src/assets/index/calderasM.png";
import panelI2 from "/src/assets/index/panelesIndustrialM.png";
import panelI from "/src/assets/index/panelesIndustrial.png";
import panelH from "/src/assets/index/panelesHogar.png";
import panelH2 from "/src/assets/index/panelesHogarM.png";
//import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSolarPanel } from "react-icons/fa6";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { TbSolarPanel2 } from "react-icons/tb";
export const ServiciosIndex = () => {
  //Navegacion
  //const navigate = useNavigate();
  return (
    <section className="w-full px-5 bg-white  ">
      <div
        className="max-w-[1240px] mx-auto bg-whiteflex items-center justify-center rounded-3xl 
      "
      >
        <div className=" px-5 py-5 mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="text-[28px] md:text-[32px] mb-6 lg:text-[36px] tracking-wide leading-none py-0 font-semibold lg:mt-15 text-center mt-5">
              Proyectos llave en mano acorde a tus necesidades
            </h2>
          </div>

          {/* Paneles Solares Industriales*/}
          <div className="w-full lg:px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] flex flex-col lg:flex-row items-center rounded-3xl ">
              <div className="lg:w-1/2 hidden lg:flex lg:justify-center ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={panelI}
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
                    className="w-full h-[300px]  rounded-3xl object-cover object-top"
                  />
                </picture>
              </div>
              <div className="flex lg:mx-5 text-left lg:w-1/2 ">
                <div className="flex">
                  <div className="lg:hidden flex justify-center mt-8 md:mt-5 mr-5 ">
                    <div className="flex justify-center items-center w-[80px] h-[80px]  border-2 border-ontu text-ontu  rounded-3xl py-2 ">
                      <p className="text-ontu">
                        <FaSolarPanel size={40} />
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-5 lg:mb-5 font-semibold tracking-wide mt-5  text-black  ">
                      Sistemas de paneles solares para su próxima{" "}
                      <span className="text-ontu">Eco Industria</span>
                    </h2>
                    <div className="mb-10 font-monts lg:mt-5  ">
                      <p className=" text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                        Soluciones eficientes para desafíos energéticos en tu
                        industria.
                      </p>
                      <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5"></p>
                      <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                        <span className="font-semibold hover:text-blueOntu flex flex-row items-center text-gray-600">
                          <Link to={"/paneles-solares"}>Saber más</Link>
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

          {/* Calderas  */}
          <div className="w-full lg:px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px]  flex flex-col lg:flex-row items-center  rounded-3xl ">
              <div className="flex flex-col lg:mx-5 text-left lg:w-1/2 ">
                <div className="flex">
                  <div className="lg:hidden flex justify-center mt-8 md:mt-5 mr-5 ">
                    <div className="flex justify-center items-center w-[80px] h-[80px]  border-2 border-ontu text-ontu  rounded-3xl py-2 ">
                      <p className="text-ontu">
                        <CgSmartHomeBoiler size={40} />
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-5 text-black  ">
                      Sistemas de calderas de condensación para su próxima{" "}
                      <span className="text-ontu">Eco Industria</span>
                    </h1>
                    <div className="mb-10 font-monts lg:mt-5  ">
                      <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                        Calentamos agua maximizando la eficiencia, minimizando
                        impacto.
                      </p>
                      <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5"></p>
                      <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                        <span className="font-semibold hover:text-blueOntu flex flex-row items-center">
                          <Link to={""}>Saber más</Link>
                          <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                            <FaArrowRight size={15} />
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 hidden lg:flex lg:justify-center ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={calderaI}
                    sizes=""
                  />
                  <source
                    media="(min-width: 641px )"
                    srcSet={calderaI2}
                    sizes=""
                  />
                  <img
                    src={calderaI2}
                    alt="Calderas"
                    className="w-full h-[300px] rounded-3xl object-cover object-top"
                  />
                </picture>
              </div>
            </div>
          </div>
          {/* Paneles Solares */}
          <div className="w-full lg:px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] flex flex-col lg:flex-row items-center rounded-3xl ">
              <div className="lg:w-1/2 hidden lg:flex lg:justify-center ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={panelH}
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
                    className="w-full h-[300px] rounded-3xl object-cover object-center"
                  />
                </picture>
              </div>
              <div className="flex flex-col lg:mx-5 text-left lg:w-1/2 ">
                <div className="flex">
                  <div className="lg:hidden flex justify-center mt-10 md:mt-5 mr-5 ">
                    <div className="flex justify-center items-center w-[80px] h-[80px]  border-2 border-ontu text-ontu  rounded-3xl py-2 ">
                      <p className="text-ontu">
                        <TbSolarPanel2 size={40} />
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                      Sistemas de paneles solares para su próximo{" "}
                      <span className="text-ontu">Eco Hogar</span>
                    </h2>
                    <div className="mb-10 font-monts lg:mt-5  ">
                      <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left">
                        Genera y consume tu propia energía con soluciones
                        energéticas eficientes.
                      </p>
                      <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mt-5"></p>
                      <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                        <span className="font-semibold hover:text-blueOntu flex flex-row items-center text-gray-600">
                          <Link to={"/paneles-solares"}>Saber más</Link>
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

          {/* Home Care */}
          <div className="flex w-full lg:px-5 mb-10 justify-center items-center ">
            <div className="flex flex-col max-w-[1240px] mx-auto justify-center items-center md:justify-around w-full p-5 px-5 font-monts bg-grayOntu/20 rounded-3xl ">
              <div className="w-[90px] h-[90px] mt-5 mb-4 bg-gray-600 rounded-3xl flex items-center justify-center">
                <p className="text-white">
                  <IoHome size={55} />
                </p>
              </div>
              <div className="mb-4">
                <h2 className=" text-[28px] md:text-[32px] lg:text-[36px] text-center md:text-left font-semibold tracking-wide">
                  Descubre una nueva forma de{" "}
                  <span className="text-ontu ">cuidar tu hogar</span> con Ontu.
                </h2>
              </div>

              <div className="flex justify-between items-center mt-5 mb-5 ">
                <p className=" text-[14px] md:text-[16px] lg:text-[18px]  flex flex-row items-center leading-tight text-left  ">
                  <span className="font-semibold hover:text-blueOntu flex flex-row items-center text-gray-600">
                    <Link to={"/home-care"}>Saber más</Link>
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
    </section>
  );
};
