import { useContext } from "react";
import Select from "react-select";
import { StepperContext } from "./context/StepperContext";

const calentador = [
    { label: "Depósito", value: "deposito" },
    { label: "Instantáneo", value: "instantaneo" },
    { label: "Rápida recuperación", value: "recuperacion" },
  ];
  const energia = [
    { label: "Gas LP", value: "gasLP" },
    { label: "Gas natural", value: "gasNatutal" },
  ];

  
export const FormEnergia = () => {

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
          <div className="mt-4">
            <label htmlFor="#">
              ¿Utilizas máquina lavavajillas o agua caliente para lavar trastes?
            </label>
            <div>
              <label className="px-2" htmlFor="">Si</label>
              <input
               onChange={handleChange}
               value={userData["si"] || ""}
               name="si"
               type="checkbox" />
              <label className="px-2" htmlFor="">No</label>
              <input 
               onChange={handleChange}
               value={userData["no"] || ""}
               name="no"
               type="checkbox" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="#">
              ¿Utilizas lavadora o agua caliente para lavar la ropa?
            </label>
            <div className="mt-1">
              <label className="px-2"  htmlFor="">Si</label>
              <input 
              onChange={handleChange}
              value={userData["si"] || ""}
              name="si"
              type="checkbox" />
              <label className="px-2" htmlFor="">No</label>
              <input 
              onChange={handleChange}
              value={userData["si"] || ""}
              name="si"
              type="checkbox" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="">Tipo de calentador actual </label>

            <Select
            className="mt-2"
              defaultValue={{
                label: "Selecciona una opción",
                value: "empty",
              }}
              options={calentador}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" >Fuente energética actual</label>
            <Select
            className="mt-2"
              defaultValue={{
                label: "Selecciona una opción",
                value: "empty",
              }}
              options={energia}
              onChange={handleSelectChange}
            />
          </div>
        </div>
    </div>
  );
};
