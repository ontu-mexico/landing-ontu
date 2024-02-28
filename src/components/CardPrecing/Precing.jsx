import React, { useState } from "react";

export const Precing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 179,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet. consectetur adipiscing elit.",
      green: "/src/assets/image/accepted.png",
      red: "/src/assets/image/refused.png",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 389,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet. consectetur adipiscing elit.",
      green: "/src/assets/image/accepted.png",
      red: "/src/assets/image/refused.png",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 549,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet. consectetur adipiscing elit.",
      green: "/src/assets/image/accepted.png",
      red: "/src/assets/image/refused.png",
    },
  ];
  return (
    <div className="font-monts md:px-14 p-4  mx-auto py-10 ">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl">Nuestros planes</h2>
        <p className="text-gray-500 md:w-1/3 mx-auto px-4">
          Un simple panorama de nuestros mejores planes y sus componentes.{" "}
        </p>
        {/* Toggle pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl ">Mensualidad</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? "bg-ontu ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl">Anualidad</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* Precing Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto ">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px px-4 rounded-lg shadow-xl"
          >
            {/* <div className="bg-gradient-to-b from-ontu/70 to-marineOntu/70"></div> */}
            <h3 className="text-3xl font-bold text-center">{pkg.name}</h3>
            <p className="text-gray-500 text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-ontu text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
              <span className="text-base text-gray-500 font-medium">
                / {isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="accepted" className="w-5 h-5" />
                Videos of lessons
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="accepted" className="w-5 h-5" />
                Homework check
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="accepted" className="w-5 h-5" />
                Additional practical task
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="accepted" className="w-5 h-5" />
                Monthly conferences
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="accepted" className="w-5 h-5" />
                Personal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="bg-ontu font-monts w-[160px] h-[40px] text-white uppercase py-2 mb-8 rounded-full cursor-pointer border-2 border-ontu hover:bg-white hover:text-ontu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
