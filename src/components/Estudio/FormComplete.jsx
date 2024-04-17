import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const FormComplete = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="flex flex-col items-center PX-5">
        <div className="text-ontu text-[45px] lg:text-[65px] ">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
        </div>
        <div className="text-xl  tracking-normal  font-normal text-gray-500 text-center font-monts">
          Tus datos han sido registrados con éxito, te enviamos un correo para
          darle seguimiento a tu solicitud.
        </div>
        <hr className="h-[3px] w-[150px] mt-5 md:w-[250px] lg:w-[350px] bg-[#F2C00C]" />
        <div className="mt-10 font-monts text-center flex flex-col justify-center items-center">
          <p className="text-xl text-black">
            O si lo prefieres agenda una cita ahora.
          </p>
          <button
            onClick={() => navigate("")}
            className="bg-gray-600 w-[230px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-gray-600 hover:border-2 hover:border-gray-600 hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full mb-2 visible mt-8"
          >
            Agendar cita
          </button>
        </div>
        <Link to="/">
          <p className="font-monts py-5 hover:text-ontu text-xl hover:font-medium">
            Regresar
          </p>
        </Link>
      </div>
    </div>
  );
};
