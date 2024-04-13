import { NavBar } from "../../NavBar/NavBar";
import { FooterCR } from "../../FooterCR";
import { AnalyticsSH } from "./AnalyticsSH";
import { CardSH } from "./CardSH";
import { CallSH } from "./CallSH";
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const SmartHome = () => {
  const navigate = useNavigate();

  //scroll
  const scrollToPackages = () => {
    const packagesSection = document.getElementById("paquetes");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Helmet>
        <title>Smart Home | Ontu</title>
        <meta
          name="description"
          content="Transforma tu hogar en un hogar inteligente."
        />
        <meta
          name="Keywords"
          content="hogar inteligente, dispositivos inteligentes para el hogar, interruptores inteligentes para hogar, dispositivos de hogar inteligente, smart home"
        />
      </Helmet>
      <NavBar />
      <div className="w-full">
        <div
          className="flex items-end justify-starth-[485px] bg-fixed  bg-parallaxSH bg-right-top
           lg:bg-center lg:bg-cover"
        >
          <div className="max-w-[750px] lg:max-w-[880px] mt-[80px]  lg:mt-[80px]">
            <div className="flex flex-col bg-opacity-80 bg-clip-padding backdrop-blur-sm  px-10  bg-white rounded-3xl m-10 md:m-12 lg:m-12 ">
              <h3 className="uppercase text-[12px] md:text-[13px] lg:text-[15px] mt-10 font-medium tracking-widest ">
                SMART HOME
              </h3>
              <hr className="border-[1.5px] border-[#F2C00C] mb-2 w-1/3 mt-1" />
              <h1 className="font-monts text-[38px] md:text-[42px] lg:text-[46px]  leading-none mb-5 lg:mb-0 font-semibold tracking-wide mt-2  ">
                <span className="text-ontu">Gestionar tu hogar </span>nunca
                había sido tan fácil
              </h1>
              <p className="text-[14px] md:text-[16px]  lg:text-[18px] mb-5 lg:mt-5 font-monts leading-tight font-normal flex flex-row items-center text-left">
                Personaliza tu sistema
              </p>
              <div className="flex justify-left items-center  ">
                <button
                  onClick={() => navigate("")}
                  className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase   text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                >
                  Contáctanos
                </button>
              </div>
              <p className="text-[14px] md:text-[16px]  lg:text-[18px]  mt-5 mb-10 font-monts leading-tight font-normal flex flex-row items-center text-left">
                <span className="hover:text-gray-600 font-semibold flex flex-row items-center">
                  <a href="#paquetes" onClick={scrollToPackages}>
                    Ver nuestros paquetes
                  </a>{" "}
                  <span className="text-[14px] md:text-[16px]  lg:text-[18px]  px-2">
                    <FaArrowRight />
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <AnalyticsSH />
      <CardSH />
      {/* Paquetes */}
      <section
        className="w-full flex items-center justify-center bg-white mb-16 "
        id="paquetes"
      >
        <div className="container px-5  mx-auto">
          <div className="text-center mb-12 font-monts flex flex-col justify-center items-center">
            <h2 className="lg:text-[22px] mb-3 font-monts font-medium text-[18px] text-blueOntu leading-none py-0 lg:mt-15 text-center "></h2>
            <h1 className="font-monts text-center md:text-[42px] lg:text-[46px] text-[38px] leading-none mb-5  font-semibold  ">
              Paquetes Populares
            </h1>
            <div className="h-[2px] w-[300px] lg:w-[400px]  bg-[#F2C00C]"></div>

            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  leading-tight tracking-normal text-center mt-3">
              Olvídate de hacer las cosas tú y permite que un profesional se
              encargue
            </p>
          </div>

          <div className="flex flex-wrap  ">
            {/**Card 1 */}

            <div className="p-4 w-full md:w-1/2 lg:w-1/3  ">
              <div className="flex flex-col text-center bg-transparent rounded-3xl shadow-lg ">
                <h2 className="text-[20px] md:text-[22px] lg:text-[26px] font-monts text-white bg-slate-600 rounded-t-3xl font-semibold text-center py-4">
                  Básico
                </h2>
                <div className="items-left bg-white rounded-b-3xl h-full  ">
                  <div className="mt-5 ">
                    <p className="leading-relaxed text-center ">
                      Seguridad básica para el hogar
                    </p>
                    <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                      <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                        Desde{" "}
                      </span>
                      $2950
                    </p>
                  </div>
                  <ul className="mt-8 space-y-2 px-6">
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      24/7 surveillance
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Control panel with touch screen
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Mobile app
                    </li>
                    <li className="flex items-center gap-3 text-grayOntu/90">
                      <span className="text-grayBlue" data-aos="fade-right">
                        <IoMdClose size={15} />
                      </span>
                      Video security
                    </li>
                    <li className="flex items-center gap-3 text-grayOntu/90">
                      <span className="text-grayBlue" data-aos="fade-right">
                        <IoMdClose size={15} />
                      </span>
                      Theft deterrence
                    </li>
                    <li className="flex items-center gap-3 text-grayOntu/90">
                      <span className="text-grayBlue" data-aos="fade-right">
                        <IoMdClose size={15} />
                      </span>
                      Voice control
                    </li>
                    <li className="flex items-center gap-3 text-grayOntu/90">
                      <span className="text-grayBlue" data-aos="fade-right">
                        <IoMdClose size={15} />
                      </span>
                      Stored video clips
                    </li>
                  </ul>
                  <div className="flex justify-center items-center mt-8 mb-8 ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Iniciar compra
                      <span className="px-2">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 2 */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/3  ">
              <div className="flex flex-col  text-center bg-transparent  rounded-3xl shadow-lg  lg:scale-[1.08]">
                <h2 className="text-[20px] md:text-[22px] lg:text-[26px] font-monts text-white bg-ontu/80 rounded-t-3xl font-semibold text-center py-4">
                  Prémium
                </h2>
                <div className="items-left bg-white rounded-b-3xl h-full  ">
                  <div className="mt-5 ">
                    <p className="leading-relaxed text-center ">
                      Seguridad y automatización
                    </p>
                    <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                      <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                        Desde{" "}
                      </span>
                      $3950
                    </p>
                  </div>
                  <ul className="mt-8 space-y-2 px-6">
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      24/7 surveillance
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Control panel with touch screen
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Mobile app
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Video security
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Theft deterrence
                    </li>
                    <li className="flex items-center gap-3 text-grayOntu/90">
                      <span className="text-grayBlue" data-aos="fade-right">
                        <IoMdClose size={15} />
                      </span>
                      Voice control
                    </li>
                    <li className="flex items-center gap-3 text-grayOntu/90">
                      <span className="text-grayBlue" data-aos="fade-right">
                        <IoMdClose size={15} />
                      </span>
                      Stored video clips
                    </li>
                  </ul>

                  <div className="flex justify-center items-center mt-8 mb-8 ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Iniciar compra
                      <span className="px-2">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/**Card 3 */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/3 ">
              <div className=" flex flex-col  text-center bg-transparent  rounded-3xl shadow-lg">
                <h2 className="text-[20px] md:text-[22px] lg:text-[26px] font-monts text-white bg-slate-600 rounded-t-3xl font-semibold text-center py-4">
                  Prémium Plus
                </h2>
                <div className="items-left bg-white rounded-b-3xl h-full  ">
                  <div className="mt-5 ">
                    <p className="leading-relaxed text-center ">
                      Protección completa
                    </p>
                    <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
                      <span className="text-[18px] mb-8 text-gray-500 font-medium ">
                        Desde{" "}
                      </span>
                      $7990
                    </p>
                  </div>
                  <ul className="mt-8 space-y-2 px-6">
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      24/7 surveillance
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Control panel with touch screen
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Mobile app
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Video security
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Theft deterrence
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Voice control
                    </li>
                    <li className="flex items-center text-left gap-3 font-semibold">
                      <span className="text-[#F2C00C]" data-aos="fade-right">
                        <FaCheck size={15} />
                      </span>
                      Stored video clips
                    </li>
                  </ul>
                  <div className="flex justify-center items-center mt-8 mb-8 ">
                    <button
                      onClick={() => navigate("/Estudio")}
                      className="bg-blueOntu w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
                    >
                      Iniciar compra
                      <span className="px-2">
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallSH />

      <FooterCR />
    </main>
  );
};
