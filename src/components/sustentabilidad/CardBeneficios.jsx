export const CardBeneficios = ({ icono, num, titleA, textA }) => {
  return (
    <article className="flex h-[175px] py-2 px-4 md:w-[343px] md:flex-grow font-monts">
      <div className="w-[100px] flex-none text-ontu2 lg-white content-center ">{icono}</div>
      <div className="pl-6 leading-none lg:leading-snug ">
        <p className=" font-bold text-[34px] mb-[18px] text-veryGreen ">{num}</p>
        <h2 className="font-bold mb-[18px]  cursor-pointer sm: text-[18px] uppercase text-veryGreen">
          {titleA}
        </h2>
        <p className="">{textA}</p>
      </div>
    </article>
  );
};
