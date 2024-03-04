import React, { useEffect, useState } from "react";
import hombre from "/src/assets/image/hombre.jpg";
import mujer from "/src/assets/image/mujer.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
export const Testimonial = () => {
  const Testimonial_data = [
    {
      img: mujer,
      comentario:
        "Excelente servicio tanto de Paulina (quien me atendió por What’sApp) como del señor Jorge Linares, que ya me ayudó dos veces y las dos quedó todo como quería! Todo excelente y MUY amables ambos! Gracias!",
      testimonialName: "Maria Trejo",
      fecha: "21 de enero de 2023",
    },
    {
      img: hombre,
      comentario:
        "Hola, utilice sus servicios de plomeria, muy rapido y eficiente a un precio muy razonable, los recomiendo ampliamente",
      testimonialName: "Fernando Bustamante",
      fecha: "18 de enero de 2023",
    },
    {
      img: hombre,
      comentario:
        "Muy buen servicio por parte de los encargados en mantenimiento, muy bien hechos y cumplieron los horarios establecidos en todo momento. Sin duda mi primera opción de ahora en adelante.",
      testimonialName: "Erick Fraymann",
      fecha: "20 de diciembre de 2022",
    },
  ];
  const [current, setCurrent] = useState(0);
  //Cambiar comentarios
  const length = Testimonial_data.length;
  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <section
      className="flex h-full my-auto font-monts md:mx-20 lg:mx-48 justify-center items-center"
      data-aos="fade-up"
    >
      <div>
        {Testimonial_data.map(
          (item, index) =>
            index === current && (
              <div>
                <div className="pb-[20px] flex  items-start gap-4">
                  <span className="text-[#F2C00C] ">
                    <FaQuoteLeft size={40} />
                  </span>
                  <h2 className="text-xl font-medium">{item.comentario}</h2>
                </div>
                <div className="flex justify-between bg-ontu/90">
                  <div className="flex gap-4 items-center ">
                    <div className="mt-2 mb-2 ml-2">
                      <img
                        className="h-12 w-12 md:h-20 md:w-20 rounded-full border-4 border-white "
                        src={item.img}
                        alt="Testimonio"
                      />
                    </div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-[18px] lg:text-[20px] mt-2">
                        {item.testimonialName}
                      </h4>
                      <span className="text-white text-[12px] md:text-[14px] lg:text-[16px]">
                        {item.fecha}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <p
                      className="text-[#F2C00C] cursor-pointer hover:text-gray-800 hover:scale-[1.2] transition-all ease-in-out"
                      onClick={previous}
                    >
                      <IoIosArrowDropleftCircle size={40} />
                    </p>
                    <p
                      className="mr-5 text-[#F2C00C]  cursor-pointer hover:text-gray-800 hover:scale-[1.2] transition-all ease-in-out "
                      onClick={next}
                    >
                      <IoIosArrowDroprightCircle size={40} />
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};
