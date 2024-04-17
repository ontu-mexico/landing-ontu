import { useNavigate } from "react-router-dom";
export const FormSesion = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full font-monts ">
      <p className=" lg:text-[22px] text-ontu mt-5 px-4 text-[18px] text-center font-medium ">
        ¡Bienvenido de nuevo!
      </p>

      <p className=" lg:text-[14px] text-gray-500 mt-1 px-4 mb-2 text-[14px] text-center ">
        Por favor ingresa tus datos.
      </p>
      <p className="ml-20  h-[1px] w-[300px]  bg-[#F2C00C] text-center"></p>

      <div className="p-8">
        <div className="mt-4">
          <label htmlFor="#" className="font-medium text-[14px]">
            Tu dirección de correo electrónico
          </label>
          <input
            type="email"
            className="w-full text-[14px] border-b-2 bg-transparent border-grayOntu p-1 "
            placeholder="your@email.com"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#" className="font-medium text-[14px]">
            Tu contraseña
          </label>
          <input
            type="password"
            className="w-full text-[14px] border-b-2 bg-transparent border-grayOntu p-1"
            placeholder="Máximo 10 caracteres"
            maxLength="10"
          />
        </div>

        <div className="flex justify-between mt-4 items-center">
          <div>
            <input type="checkbox" />
            <label
              className="ml-2 text-[13px] text-gray-700 hover:font-semibold "
              htmlFor=""
            >
              Recuérdame
            </label>
          </div>
          <button className="font-medium text-[13px] text-blueOntu hover:text-blueOntu hover:font-semibold">
            Olvide mi contraseña
          </button>
        </div>
        <div className="flex justify-center mt-8  ">
          <button
            onClick={() => navigate("/")}
            className="bg-ontu w-[230px] h-[48px] font-monts font-bold uppercase mx-auto  md:mx-0 text-white hover:bg-white hover:text-ontu hover:border-2 hover:border-ontu hover:font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all rounded-sm "
          >
            Iniciar Sesión
          </button>
        </div>
        <p
          onClick={() => navigate("/")}
          className=" lg:text-[18px] text-blueOntu font-semibold hover:font-bold mt-5 px-4 text-[18px] text-center cursor-pointer "
        >
          Regresar
        </p>
      </div>
    </div>
  );
};
