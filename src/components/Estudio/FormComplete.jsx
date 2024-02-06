import React from "react";
import { useNavigate } from 'react-router-dom'

export const FormComplete = () => {
    const navigate = useNavigate();
  return (
    <div className="container lg:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-ontu text-[45px] lg:text-[65px] ">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        </div>
        <div className="mt-3 text-xl font-monts font-bold uppercase text-ontu">
          ¡Felicidades!
        </div>
        <div className="text-medium font-monts font-normal text-gray-700">
          Tus datos han sido registrados con éxito, te enviamos un correo para darle
          seguimiento a tu solicitud.
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-veryGreen w-[220px] h-[48px] font-monts uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-veryDarkBlue rounded-full active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all mt-5 "
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
