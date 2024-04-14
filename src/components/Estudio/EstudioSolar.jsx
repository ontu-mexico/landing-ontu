import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { FormEstudio } from "./FormEstudio";

export const EstudioSolar = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full h-[75px] bg-transparent mx-auto  "></div>
      <div className="w-full py-10 bg-blueOntu/5 ">
        <h2 className="mt-10 text-[38px] md:text-[42px]  lg:text-[46px] font-monts text-center font-semibold leading-none py-2 mb-5">
          Solicita tu Estudio Solar
        </h2>
        <p className="text-[16px] mb-10 font-monts text-center  text-black lg:mx-60 lg:font-medium lg:text-[20px]">
          Completa la siguiente información para comenzar con tu estudio
          personalizado.
        </p>
        <div className="lg:w-1/2 lg:mx-auto m-5 shadow-xl rounded-2xl  bg-white ">
          <div className="container horizontal mt-5">
            <FormEstudio />
          </div>
        </div>
      </div>
      <FooterCR />
    </main>
  );
};
