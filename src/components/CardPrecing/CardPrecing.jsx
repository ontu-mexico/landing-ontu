import React, { useState } from "react";
import "./card.css";
// import "./jsCard.js";

export const CardPrecing = () => {
  const [selectMonto, setSelectMonto] = useState(true);
  console.log(selectMonto);

  return (
    <main className="font-monts flex flex-col items-center ">
      <div className="py-10 bg-blueOntu/5 w-full">
        <div className="m-4 flex flex-col justify-center items-center">
          <h2 className="md:text-5xl text-3xl">Nuestros planes</h2>
          <h1 className="mb-5">
            Planes y paquetes solares para cada presupuesto
          </h1>
          {/* <div className="m-2 text-gray-500 flex items-center   ">
            <label>Anualiadad </label>
            <div className="m-2">
              <input
                className="checkbox"
                onChange={() => {
                  setSelectMonto((prev) => !prev);
                }}
                type="checkbox"
              />
              <label className="sub" id="sub" >
                <div className="bg-white h-4 w-4 rounded-full"></div>
              </label>
            </div>
            <label> Mensualidad</label>
          </div> */}
        </div>
        <div className="lg:px-20 ">
          <div className="max-w-[1240px] grid md:grid-cols-3 gap-8 justify-center items-center ">
            <div className="bg-white rounded-md shadow-lg  items-center flex flex-col w-full">
              <ul className="m-10 flex flex-col items-center justify-around list-none pb-4">
                <li className="text-lg font-bold mb-2 uppercase text-blueOntu2">
                  Basic
                </li>
                <li
                  id="basic"
                  className="text-[28px] font-bold text-blueOntu2 pb-5"
                >
                  199.99 MXN
                </li>
                <li className="p-1 border-b border-gray-400">500 GB Storage</li>
                <li className="p-1 border-b border-gray-400">
                  2 Users Allowed
                </li>
                <li className="p-1 border-b border-gray-400">
                  Send up to 3 GB
                </li>
                <li>
                  <button className="bg-ontu font-monts w-[160px] h-[40px] text-white uppercase py-2 mb-8 rounded-full cursor-pointer border-2 border-ontu hover:bg-white hover:text-ontu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                    Learn More
                  </button>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-ontu/70 to-marineOntu/70 rounded-md shadow-lg items-center scale-110 w-full  ">
              <ul className="m-10 flex flex-col items-center justify-around list-none pb-4">
                <li className="text-lg font-bold mb-2 uppercase text-blueOntu2">
                  Professional
                </li>
                <li
                  id="professional"
                  className="text-[28px] font-bold text-blueOntu2 pb-5"
                >
                  249.99 MXN
                </li>
                <li className="p-1 border-b border-white">1 TB Storage</li>
                <li className="p-1 border-b border-white">5 Users Allowed</li>
                <li className="p-1 border-b border-white">Send up to 10 GB</li>
                <li>
                  <button className="bg-ontu font-monts w-[160px] h-[40px] text-white uppercase py-2 mb-8 rounded-full cursor-pointer border-2 border-ontu hover:bg-white hover:text-ontu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                    Learn More
                  </button>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-md shadow-lg  items-center w-full ">
              <ul className="m-10 flex flex-col items-center justify-around list-none pb-4">
                <li className="text-lg font-bold mb-2 uppercase text-blueOntu2">
                  Master
                </li>
                <li
                  id="master"
                  className="text-[28px] font-bold text-blueOntu2 pb-5"
                >
                  399.99 MXN
                </li>
                <li className="p-1 border-b border-gray-400">2 TB Storage</li>
                <li className="p-1 border-b border-gray-400">
                  10 Users Allowed
                </li>
                <li className="p-1 border-b border-gray-400">
                  Send up to 20 GB
                </li>
                <li>
                  <button className="bg-ontu font-monts w-[160px] h-[40px] text-white uppercase py-2 mb-8 rounded-full cursor-pointer border-2 border-ontu hover:bg-white hover:text-ontu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                    Learn More
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
