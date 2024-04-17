import { NavBar } from "../../NavBar/NavBar";
import { FooterCR } from "../../FooterCR";
import { AnalyticsSH } from "./AnalyticsSH";
import { CardSH } from "./CardSH";
import { CallSH } from "./CallSH";
import { FaArrowRight } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

export const SmartHome = () => {
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
        <meta property="og:title" content="Smart Home | Ontu" />
        <meta
          property="og:description"
          content="Transforma tu hogar en un hogar inteligente."
        />
        <meta property="og:url" content="https://www.ontu.mx/smart-home" />
        <meta property="og:image" content="https://www.ontu.mx/logo_ontu-DO4XE2sa.png" />
        <link rel="canonical" href="https://www.ontu.mx/smart-home" />
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
                <p className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase   text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full ">
                  <a href="https://wa.me/message/U4TRG3Z6J2GBO1">Contáctanos</a>
                </p>
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
        </div>
      </section>
      <CallSH />

      <FooterCR />
    </main>
  );
};
