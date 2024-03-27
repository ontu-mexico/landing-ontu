import React from "react";

const CardLogos = ({ logo }) => {
  return (
    <div className="h-full w-[200px] bg-transparent m-2 flex-shrink-0 ">
      <div className="h-[80px] w-full items-center flex justify-center ">
        <img
          src={
            logo.id === 1
              ? "https://static.wixstatic.com/media/c8a119_fae4cf79021044f0a34019046703aa8e~mv2.png/v1/fill/w_319,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c8a119_fae4cf79021044f0a34019046703aa8e~mv2.png"
              : logo.id === 2
              ? "data:image/png;base64,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"
              : logo.id === 4
              ? "data:image/png;base64,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"
              : logo.id === 4
              ? "data:image/png;base64,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"
              : logo.id === 6
              ? "data:image/png;base64,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"
              : logo.id === 3
              ? "https://static.wixstatic.com/media/c8a119_fae4cf79021044f0a34019046703aa8e~mv2.png/v1/fill/w_319,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c8a119_fae4cf79021044f0a34019046703aa8e~mv2.png"
              : "https://static.wixstatic.com/media/c8a119_fae4cf79021044f0a34019046703aa8e~mv2.png/v1/fill/w_319,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c8a119_fae4cf79021044f0a34019046703aa8e~mv2.png"
          }
          alt={`Empresa ${logo.empresa}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardLogos;
