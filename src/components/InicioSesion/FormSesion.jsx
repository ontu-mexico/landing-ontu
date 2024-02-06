import logo from "/src/assets/logo/logo_transparent_background.png";
export const FormSesion = () => {
  return (
    <div className="w-full font-monts ">
      <div className="justify-center object-center flex my-10 md:mb-30 lg:mb-10">
        <img
          className="h-[90px] w-[215px] lg:h-[105px] lg:w-[240px] "
          src={logo}
          alt="Ontu"
        />
      </div>

      <h2 className="lg:text-[38px] mt-2 md:mt-1 font-monts uppercase text-center font-semibold md:text-4xl text-3xl leading-none text-ontu">
        Bienvenido
      </h2>
      <p className="lg:text-lg text-gray-500 mt-4 px-4 text-base text-center ">
        <span className="text-ontu">¡Bienvenido de nuevo!</span>Por favor
        ingresa tus datos.
      </p>

      <div className="p-10">
        <div className="mt-4">
          <label htmlFor="#" className="font-medium text-lg">
            Email
          </label>
          <input
            type="email"
            className="w-full border-b-2 bg-transparent border-ontu p-2 "
            placeholder="your@example.com"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#" className="font-medium text-lg">
            Password
          </label>
          <input
            type="password"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="Máximo 10 caracteres"
            maxLength="10"
          />
        </div>

        <div className="flex justify-between mt-8 items-center">
          <div>
            <input type="checkbox" />
            <label className="ml-2 text-base text-gray-700" htmlFor="">
              Recordar sesión
            </label>
          </div>
          <button className="font-medium text-base text-veryGreen hover:text-veryDarkBlue">
            Olvide mi contraseña
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4 ">
          <button className="bg-veryGreen w-[220px] h-[48px] font-monts uppercase mx-auto text-white hover:bg-veryDarkBlue rounded-full  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all ">
            INICIAR SESIÓN
          </button>
          
        </div>
       
      </div>
    </div>
  );
};
