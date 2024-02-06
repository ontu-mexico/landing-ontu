
//Ver el video para conectar el select a la DB si es necesario

export const Form = () => {
  // Que selecciono el usuario

  return (
    <div className="font-monts px-10 py-20 lg:w-[900px] lg:px-20">
      <h2 className="lg:text-[42px] font-monts text-center font-semibold md:text-4xl text-3xl leading-none text-ontu">
        Solicita tu estudio
      </h2>
      <p className=" text-gray-500 mt-4 px-4 text-base text-center mb-5 ">
        Ingresa los siguientes datos para comenzar tu estudio personalizado.
      </p>
      <div>
        <div>
          <label htmlFor="#">Nombre</label>
          <input
            type="text"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#" className="">
            Apellido
          </label>
          <input
            type="text"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="Ingresa tu apellido"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#">Teléfono</label>
          <input
            type="tel"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="55-5555-5555"
            maxLength="10"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#">Email</label>
          <input
            type="email"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="your@example.com"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#">Ingresa tu código postal</label>
          <input
            type="tel"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="Código postal"
            maxLength="5"
          />
        </div>

        <div className="mt-14 grid justify-items-center ">
            <button className="bg-veryGreen w-[220px] h-[48px] font-monts uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-veryDarkBlue rounded-full  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
              Solicitar Estudio
            </button>
          </div>
      </div>
    </div>
  );
};
