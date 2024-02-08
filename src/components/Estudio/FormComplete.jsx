import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const FormComplete = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <div className="text-ontu text-[45px] lg:text-[65px] ">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
        </div>
        
        <div className="text-xl  font-normal text-gray-500 text-center">
          Tus datos han sido registrados con éxito, te enviamos un correo para
          darle seguimiento a tu solicitud.
        </div>
        <hr className="h-[3px] w-[350px] mt-5 md:w-[450px] lg:w-[550px] bg-gray-400" />
        <div className="mt-10 font-monts text-center">
          <p className="text-xl text-black">
            ¿Deseas agentar tu cita vía Calendly?
          </p>
          <button
            onClick={() => navigate("")}
            className="bg-blueOntu2 text-center font-monts w-[220px] h-[48px] text-white uppercase py-2 mb-2 rounded-full font-bold cursor-pointer  hover:bg-white hover:text-blueOntu2 hover:border-2 hover:border-blueOntu2 hover:font-bold   active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all visible mt-8"
          >
            Agendar cita
          </button>
        </div>
    <Link to="/PanelesSolares"><p className="font-monts py-5 hover:text-ontu text-xl">Regresar</p></Link>
      </div>
    </div>
  );
};
