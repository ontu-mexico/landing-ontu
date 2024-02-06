import { useContext } from "react";
import { StepperContext } from "./context/StepperContext";

export const FormDatos = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <label htmlFor="#">Nombre</label>
          <input
            onChange={handleChange}
            value={userData["nombre"] || ""}
            name="nombre"
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
            onChange={handleChange}
            value={userData["apellido"] || ""}
            name="apellido"
            type="text"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="Ingresa tu apellido"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#">Teléfono</label>
          <input
            onChange={handleChange}
            value={userData["telefono"] || ""}
            name="telefono"
            type="tel"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="55-5555-5555"
            maxLength="10"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#">Email</label>
          <input
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            type="email"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="your@example.com"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="#">Ingresa tu código postal</label>
          <input
            onChange={handleChange}
            value={userData["codigo"] || ""}
            name="codigo"
            type="tel"
            className="w-full border-b-2 bg-transparent border-ontu p-2"
            placeholder="Código postal"
            maxLength="5"
          />
        </div>
      </div>
    </div>
  );
};
