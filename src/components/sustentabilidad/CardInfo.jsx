import { IoMdCheckmarkCircleOutline } from "react-icons/io";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export const CardInfo = () => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="w-full py-10 px-4 bg-white">
      <h2 className="lg:text-[40px] font-monts text-center font-semibold md:text-4x1 text-[28px] leading-none py-2 mb-5 text-black">
        ¡Tú decides cómo y cuándo comenzar a ahorrar!
      </h2>
      <p className="text-[16px] mb-10 font-monts text-center  text-gray-500 lg:mx-60 lg:font-medium lg:text-[20px]">
        De Ontu recibirás una instalación llave en mano para tu hogar o negocio
        con los mejores paneles solares del mercado y facilidades de pago. Tú
        decides cuándo dar el primer paso.
      </p>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 ">
        {/* Card 1 */}
        <div
          className="w-full  flex flex-col p-4 my-4  lg:p-10  text-left bg-white border border-blueOntu/50 "
          data-aos="fade-right"
        >
          <h2 className="text-[28px] font-monts text-blueOntu uppercase font-bold text-center py-2">
            Meses sin intereses
          </h2>
          <p className="text-[16px] font-monts text-center mb-3  mt-5">
            Adquiere tus paneles solares por arrendandamiento mensual.
          </p>
          <div className="text-[16px] mb-10 items-center font-monts ">
            <ul className="mt-4 space-y-2 px-4">
              <li className="font-semibold">Beneficios:</li>
              <li className="flex items-center gap-3">
                <div className="text-blueOntu mt-2 text-[25px]  ">
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                Pagos mensuales fijos
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blueOntu text-[25px]  ">
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                Ontu se encarga del mantenimiento durante el periodo de
                arrendamiento
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blueOntu text-[25px]  ">
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                Puedes comprar el sistema sin penalización en cualquier momento
              </li>
            </ul>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="w-full  flex flex-col p-4 my-4  lg:p-10  text-left bg-white border border-blueOntu/50"
          data-aos="fade-right"
        >
          <h2 className="text-[28px] font-monts text-blueOntu uppercase font-bold text-center py-2">
            Pago al contado
          </h2>
          <p className="text-[16px] font-monts text-center mb-3  mt-5">
            Paga tus paneles solares en un solo pago
          </p>
          <div className="text-[16px] mb-10 items-center font-monts ">
            <ul className="mt-4 space-y-2 px-4">
              <li className="font-semibold">Beneficios:</li>
              <li className="flex items-center gap-3">
                <div className="text-blueOntu mt-2 text-[25px]  ">
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                Podrás aplicar para diversos incentivos fiscales
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blueOntu text-[25px]  ">
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                Ahorrar hasta el 95% en tu factura avtual de CFE
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blueOntu text-[25px]  ">
                  <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                Ontu obtener una póliza de mantenimiento con precio preferencial
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
