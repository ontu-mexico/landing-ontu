import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import { FormSesion } from "./FormSesion";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo/white_logo_transparent_background.png";

export const InicioSesion = () => {
  return (
    <main>
      <div className='w-full h-[120px] justify-center object-center flex bg-ontu animate-fade-down animate-duration-[1500ms] animate-delay-100 animate-ease-in'>
      <Link to="/">
        <img
          className="mt-[16px] h-[80px] w-[180px] lg:h-[75px] lg:w-[170px] animate-fade-downanimate-duration-[1500ms] animate-delay-200 animate-ease-in "
          src={logo}
          alt="Ontu" 
        />  
         </Link>

      </div>
      <div className="w-full flex py-10 px-4 bg-white ">
        {/*Form */}
        <div className="max-w-[1240px] mx-auto bg-white border border-ontu animate-fade-up animate-duration-[1500ms] animate-delay-200 animate-ease-in ">
          <div className=" w-[450px] flex items-center justify-center ">
            <FormSesion />
          </div>
          {/* <div className="z-20 hidden relative h-full w-1/2 lg:flex items-center justify-center lg:w-1/2 ">
            <div className=" w-60 h-60 bg-gradient-to-tr from-ontu to-ontu3 rounded-full animate-spin" />
            <div className=" w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0" />
          </div> */}
        </div>
      </div>
     
    </main>
  );
};
