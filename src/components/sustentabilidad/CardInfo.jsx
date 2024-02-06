import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const CardInfo = () => {
  return (
    <div className="w-full py-10 px-4 bg-ontu3">
      <h2 className="lg:text-[42px] font-monts text-center font-semibold md:text-4x1 text-[28px] leading-none py-2 mb-5">
        ¡Tú decides cómo y cuándo comenzar a ahorrar!
      </h2>
      <p className="text-[16px] mb-10 font-monts text-center  text-ontu lg:mx-60 lg:font-medium lg:text-[20px]">
        De Ontu recibirás una instalación llave en mano para tu hogar o negocio
        con los mejores paneles solares del mercado y facilidades de pago. Tú
        decides cuándo dar el primer paso.
      </p>
      {/* Card 1 */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg text-center bg-white">
          <h2 className="text-[26px] font-monts text-ontu uppercase font-bold text-center py-8 ">
            Arrendamiento
          </h2>
          <div className="text-[15px] font-monts mb-10  ">
            <p className="text-[17px] font-monts mb-5 text-ontu border-b border-veryGreen py-2 ">
              Paga una renta cómoda y a la medida mensual
            </p>
            <p className="text-[15px] mb-5 py-2">
              Ontu se encarga del mantenimiento durante el periodo de
              arrendamiento. Puedes tomar la decisión de comprar el sistema en
              cualquier momento sin penalización.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg text-center bg-white">
          <h2 className="text-[26px] font-monts text-ontu uppercase font-bold text-center py-8 ">
            Pago de Contado
          </h2>
          <div className="text-[15px] font-monts mb-10  ">
            <p className="text-[17px] font-monts mb-5 border-b py-2 text-ontu border-veryGreen ">
              Paga en su totalidad el sistema y serás el propietario desde el
              primer minuto.
            </p>
            <p className="text-[15px] mb-5 py-2">
              Además podrás aplicar para diversos incentivos fiscales y obtener
              una póliza de mantenimiento para tu sistema con un precio
              preferencial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
