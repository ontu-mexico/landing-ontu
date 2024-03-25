import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Testimonial } from "../HomeCare/Testimonial";
import { SiTrustpilot } from "react-icons/si";
import { CardBlog } from "../Slider/CardBlog";
import { blogs } from "../Slider/data";

export const SectionCalculo = () => {
  // Carrusel
  const carouselBlogs = [...blogs, ...blogs];
  const navigate = useNavigate();

  // Estado para controlar la animación
  const [animationPaused, setAnimationPaused] = useState(false);

  // Función para detener la animación
  const handleAnimationPause = () => {
    setAnimationPaused(!animationPaused);
  };
  const handleMouseEnter = () => {
    setAnimationPaused(true); // Detiene la animación cuando el cursor entra al carrusel
  };

  const handleMouseLeave = () => {
    setAnimationPaused(false); // Reanuda la animación cuando el cursor sale del carrusel
  };

  return (
    <section className="py-10 px-16 w-full h-full bg-grayOntu/40 ">
      <div className="flex flex-col max-w-[1240px] mx-auto justify-start   ">
        <h2 className=" font-monts leading-none text-[28px] md:text-[32px]  lg:text-[36px]  text-left font-semibold tracking-wide mb-5 ">
          Conoce nuestras reseñas
        </h2>
        <p className="  text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left mb-10">
          Historias que cuentan la realidad de contratar Ontu
        </p>
        <div
          className="container "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden w-full">
            <div className="flex whitespace-nowrap">
              {carouselBlogs.map((blog, index) => (
                <CardBlog
                  blog={blog}
                  key={index}
                  animationPaused={animationPaused}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5 items-center ">
          <div className="lg:flex gap-10 items-center ">
            <p className="text-[12px] md:text-[14px]  lg:text-[16px]  leading-tight tracking-normal text-left flex  items-center">
              <span>
                Visítanos en <span className="font-bold">Trustpilot</span>
              </span>
              <span className="font-bold text-[#007f4e] ml-2">
                <SiTrustpilot size={25} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
