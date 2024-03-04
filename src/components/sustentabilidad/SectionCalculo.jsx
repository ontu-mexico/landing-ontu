import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Testimonial } from "../HomeCare/Testimonial";
import { SiTrustpilot } from "react-icons/si";

export const SectionCalculo = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 px-10 w-full h-full ">
      <div className="flex flex-col max-w-[1240px] mx-auto justify-center items-center py-5  ">
        <h2 className="text-[30px] font-monts font-semibold lg:text-[38px]  text-black text-center mb-20 ">
          Conoce nuestras reseñas
        </h2>
        <Testimonial />
        <div className="flex justify-between mt-10 items-center ">
          <div className="lg:flex gap-10 items-center ">
            <p className="text-[18px] lg:text-[20px] flex mb-5 my-2 items-center">
              <span>
                Visitanos en <spam className="font-bold">Trustpilot</spam>
              </span>
              <spam className="font-bold text-[#007f4e] ml-2">
                <SiTrustpilot size={25} />
              </spam>
            </p>
            <Link
              to="https://es.trustpilot.com/review/ontu.mx?utm_medium=trustbox&utm_source=MicroReviewCount"
              className="bg-ontu/90 w-[230px] h-[48px] font-monts font-bold uppercase mx-auto  text-white hover:bg-white hover:text-ontu hover:border-2 hover:border-ontu hover:font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-center p-3 ml-7 "
            >
              Conocer más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
