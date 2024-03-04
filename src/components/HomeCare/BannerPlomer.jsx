import React from "react";

export const BannerPlomer = () => {
  return (
    <div className="flex items-center justify-center h-[480px] bg-fixed bg-parallax bg-cover">
      <div className="max-w-[640px] lg:max-w-[1150px] mx-auto ">
        <div
          className=" flex flex-col bg-opacity-60 bg-clip-padding backdrop-blur-sm justify-center items-center px-5 text-center bg-white"
          data-aos="fade-up"
        >
          <h2 className="lg:text-[24px] font-monts font-semibold text-blueOntu text-[20px] leading-none py-0 mb-3 lg:mt-15 md:text-center mt-10"></h2>
          <h1 className="font-monts text-center md:text-[42px] lg:text-[46px] text-[38px] leading-none mb-5 lg:mb-0 font-semibold  ">
            Plomería
          </h1>
          <div
            className="h-[1.5px] w-[300px] lg:w-[400px] lg:mt-2 bg-[#F2C00C]"
            data-aos="fade-right"
          ></div>
          <div className="ml-4 mr-4 mb-4">
            <p className="text-[16px] mt-5 font-monts text-center lg:mt-5 lg:w-[700px]">
              <span>Brindamos los mejores y más eficientes servicios de</span>
              <span className="font-bold"> plomería </span> con
              <span className="font-bold"> una garantía del 100%.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
