//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export const CardBeneficios = ({ icono, num, titleA, textA }) => {
  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <article className="flex h-[185px] py-4 px-4 md:w-[343px] md:flex-grow font-monts bg-grayOntu/10">
      {/* <div className="w-[50px] flex-none  text-grayOntu lg-white px-2 py-1 justify-items-end ">
        {icono}
      </div> */}
      <div className="pl-2 leading-none lg:leading-snug " data-aos="fade-down">
        <p
          className=" font-bold text-[28px]  text-grayOntu mb-2 "
          data-aos="fade-down"
        >
          {num}
        </p>
        <h2 className="font-bold mb-[18px]  cursor-pointer text-[18px] uppercase text-ontu">
          {titleA}
        </h2>
        <p className="">{textA}</p>
      </div>
    </article>
  );
};
