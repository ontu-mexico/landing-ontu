import { useContext, useState } from "react";
import Select from "react-select";
import { StepperContext } from "./context/StepperContext";
import recibo from "/src/assets/image/recibo-luz.jpg";

const espacio = [
  { label: "Si", value: "si" },
  { label: "No", value: "no" },
  { label: "No lo sé", value: "nose" },
];

export const FormEnergia = () => {
  const [isopen, setIsopen] = useState(false);

  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSelectChange = (value) => {
    console.log(value);
  };
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex justify-end ">
          <button
            className="text-marineOntu text-[32px] h-8 w-8 text-center font-bold cursor-pointer motion-safe:animate-bounce hover:text-gray-500  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
            onClick={() => setIsopen(true)}
          >
            <ion-icon name="help-circle-outline"></ion-icon>
          </button>
          {isopen && (
            /* Modal Imagen */
            <div className="fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
              <div className="bg-white p-1 rounded flex flex-col justify-end gap-5">
                <div className="flex justify-end ">
                  <button
                    onClick={() => setIsopen(false)}
                    className="bg-white text-[32px] rounded-full text-red-600 h-8 w-8 text-center cursor-pointer m-2 hover:text-veryDarkBlue  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                  >
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </button>
                </div>
                <img
                  className=" w-[450px] h-[220px] lg:w-[550px] lg:h-[320px] "
                  src={recibo}
                  alt="Recibo de Luz"
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="#">Ingresa tu número de servicio</label>
          <input
            onChange={handleChange}
            value={userData["servicio"] || ""}
            name="servicio"
            type="text"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="13 dígitos"
          />
        </div>
        <div>
          <label htmlFor="#">¿Cuánto fue lo último que pagaste?</label>
          <input
            onChange={handleChange}
            value={userData["pago"] || ""}
            name="pago"
            type="text"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="MXN"
          />
        </div>
        <div>
          <label htmlFor="#">¿Cuál es tu tarifa?</label>
          <input
            onChange={handleChange}
            value={userData["nombre"] || ""}
            name="nombre"
            type="text"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="Ingresa tarifa"
          />
        </div>
        <div className="mt-4 ">
          <label htmlFor="">¿Tienes espacio en un techo para paneles?</label>
          <Select
            className="mt-2 "
            defaultValue={{
              label: "Selecciona una opción",
              value: "empty",
            }}
            options={espacio}
            onChange={handleSelectChange}
          />
        </div>
      </div>
    </div>
  );
};
