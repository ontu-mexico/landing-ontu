import { Form } from "./Form";
import panelSolar from "/src/assets/image/panelesSolares.jpg"
export const FormCalculo = () => {
  return (
    <div className="w-full py-10 px-4 bg-ontu2 lg:border-gray-100">
      <h2 className="lg:text-[52px] font-monts text-center font-semibold md:text-4xl text-4xl leading-none  py-2 mb-5 text-black">
        ¡Comienza a ahorrar!
      </h2>
      {/*Form */}
      <div className="max-w-[1240px] mx-auto flex bg-white lg:border-2 justify-center items-center  ">
          <Form /> 
      </div>
    </div>
  );
};
