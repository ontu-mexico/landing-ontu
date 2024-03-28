import React from "react";

const CardLogos = ({ logo }) => {
  return (
    <div className="h-full w-[200px] bg-transparent m-2 flex-shrink-0 ">
      <div className="h-[80px] w-full items-center flex justify-center ">
        <img
          src={`/assets/logosEmpresas/ontu${logo.id}.jpg
          `}
          alt={`Empresa ${logo.empresa}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardLogos;
