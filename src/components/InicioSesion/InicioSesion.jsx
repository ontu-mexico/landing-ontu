import { FooterCR } from "../FooterCR";
import { NavBar } from "../NavBar/NavBar";
import { FormSesion } from "./FormSesion";
import logo from "/src/assets/logo/logo_transparent_background.png";

export const InicioSesion = () => {
  return (
    <main>
      <NavBar />
      <div className='w-full h-[80px]  bg-transparent '></div>
      <div className="w-full py-10 px-4 bg-ontu4">
        {/*Form */}
      
        <div className="max-w-[1240px] mx-auto flex bg-white h-screen ">
          <div className="w-[1240px] flex items-center justify-center lg:w-1/2 ">
            <FormSesion />
          </div>
          <div className="z-20 hidden relative h-full w-1/2 lg:flex items-center justify-center lg:w-1/2 ">
            <div className=" w-60 h-60 bg-gradient-to-tr from-ontu to-ontu3 rounded-full animate-spin" />
            <div className=" w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0" />
          </div>
        </div>
      </div>
      <FooterCR />
    </main>
  );
};
