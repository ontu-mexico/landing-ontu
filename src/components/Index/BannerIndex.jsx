export const BannerIndex = () => {
  return (
    <div className="flex items-end justify-start h-[485px] bg-fixed bg-parallaxI bg-botton lg:bg-cover bg-button">
      <div className="max-w-[750px] lg:max-w-[860px]">
        <div className="flex flex-col bg-opacity-75 bg-clip-padding backdrop-blur-sm px-5 md:px-10  bg-white rounded-3xl m-10 md:m-14 lg:m-20">
          <h1 className="font-monts text-[38px] md:text-[42px] lg:text-[46px]  leading-none mb-5 lg:mb-0 font-semibold tracking-wide mt-12 ">
            <span className="text-ontu">Energía renovada, </span>
            <span>futuro </span>
            <span className="text-[30px] md:text-[42px] lg:text-[46px] ">
              descarbonizado.
            </span>
          </h1>

          <p className="text-[14px] md:text-[16px]  lg:text-[18px]  mt-5 mb-12 font-monts leading-tight font-normal flex flex-row items-center text-left">
            Desarrollamos proyectos que impactan de forma positiva al medio
            ambiente y a tu bolsillo.
          </p>
        </div>
      </div>
    </div>
  );
};
