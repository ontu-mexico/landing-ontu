import alberca2 from "/src/assets/calentamiento/alberca.jpg";
import residencial2 from "/src/assets/calentamiento/residencial.png";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export const ServiciosCalen = () => {
  return (
    <section className="w-full px-5 bg-white mt-10  ">
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

          {/* Residencial*/}
          <div className="w-full px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center rounded-3xl ">
              <div className="lg:w-1/2 object-cover  hidden lg:flex  ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={residencial2}
                    sizes=""
                  />
                  <source
                    media="(min-width: 641px )"
                    srcSet={residencial2}
                    sizes=""
                  />
                  <img
                    src={residencial2}
                    alt="Residencial"
                    className="w-full h-[300px] rounded-3xl object-cover object-center"
                  />
                </picture>
              </div>
              <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
                <h2 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                  Residencial
                </h2>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className="  text-[14px] md:text-[18px]  lg:text-[20px]  leading-tight tracking-normal text-left">
                    Reduce tu gasto de gas y calienta el agua de todo tu hogar
                    aprovechando el sol.
                  </p>
                </div>
                <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                  <span className="font-semibold hover:text-blueOntu flex flex-row items-center text-gray-600">
                    <Link to={""}>Solicita más información</Link>
                    <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                      <FaArrowRight size={15} />
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Alberca  */}
          <div className="w-full px-5 bg-white mb-16 mt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center  rounded-3xl ">
              <div className="flex flex-col mx-10 text-left lg:w-1/2 ">
                <h1 className="font-monts lg:text-left text-left text-[28px] md:text-[32px]  lg:text-[36px] leading-none mb-10 lg:mb-5 font-semibold tracking-wide mt-10 text-black  ">
                  Alberca
                </h1>
                <div className="mb-10 font-monts lg:mt-5  ">
                  <p className=" text-[14px] md:text-[18px]  lg:text-[20px]   leading-tight tracking-normal text-left">
                    Puedes disfrutar de tu alberca a temperaturas de confort sin
                    gastar miles en su calentamiento.
                  </p>
                  <p className="  text-[14px] md:text-[18px]  lg:text-[20px]   leading-tight tracking-normal text-left mt-5">
                    Te brindamos lo último en tecnología de calefacción solar
                    para albercas.
                  </p>
                </div>
                <p className=" text-[14px] md:text-[16px]  lg:text-[18px]  flex flex-row items-center leading-tight text-left mt-5  ">
                  <span className="font-semibold hover:text-blueOntu flex flex-row items-center text-gray-600 mb-10 md:mb-0">
                    <Link to={""}>Solicita más información</Link>
                    <span className="text-[16px] md:text-[18px] lg:text-[20px] px-2">
                      <FaArrowRight size={15} />
                    </span>
                  </span>
                </p>
              </div>
              <div className="lg:w-1/2 object-cover  hidden lg:flex  ">
                <picture>
                  <source
                    media="(max-width: 640px )"
                    srcSet={alberca2}
                    sizes=""
                  />
                  <source
                    media="(min-width: 641px )"
                    srcSet={alberca2}
                    sizes=""
                  />
                  <img
                    src={alberca2}
                    alt="Alberca"
                    className="w-full h-[300px] rounded-3xl object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
