import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export const Precing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 179,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet. consectetur adipiscing elit.",
      op1: "Videos of lessons",
      op2: "Homework check",
      op3: "Intrusion detection",
      op4: "Control panel with touch screen",
      op5: "Video security ",
      op6: "Theft deterrence",
      op7: "Voice control ",
      green: <FaCheck size={15} />,
      red: <IoMdClose size={15} />,
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 389,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet. consectetur adipiscing elit.",
      op1: "Videos of lessons",
      op2: "Homework check",
      op3: "Intrusion detection",
      op4: "Control panel with touch screen",
      op5: "Video security ",
      op6: "Theft deterrence",
      op7: "Voice control ",
      green: <FaCheck size={15} />,
      red: <IoMdClose size={15} />,
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 549,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet. consectetur adipiscing elit.",
      op1: "Videos of lessons",
      op2: "Homework check",
      op3: "Intrusion detection",
      op4: "Control panel with touch screen",
      op5: "Video security ",
      op6: "Theft deterrence",
      op7: "Voice control ",
      green: <FaCheck size={15} />,
    },
  ];
  return (
    <div className="font-monts md:px-14 p-4  mx-auto py-10 ">
      <div className="text-center">
        <div
          className="text-center mb-12 font-monts flex flex-col justify-center items-center"
          data-aos="fade-right"
        >
          <h1 className="font-monts text-center md:text-[42px] lg:text-[46px] text-[38px] leading-none mb-5  font-semibold  ">
            Nuestros planes
          </h1>
          <div
            className="h-[2px]  w-[300px] lg:w-[400px]  bg-[#F2C00C]"
            data-aos="fade-right"
          ></div>
        </div>
        {/* Toggle pricing
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
        </div> */}
      </div>

      {/* Precing Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto ">
        {packages.map((pkg, index) => (
          <div key={index} className="border py-10 md:px px-4  shadow-xl">
            {/* <div className="bg-gradient-to-b from-ontu/70 to-marineOntu/70"></div> */}
            <h3 className="text-3xl font-bold text-center">{pkg.name}</h3>
            <p className="text-gray-500 text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-blueOntu text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
              <span className="text-base text-gray-500 font-medium">
                / {isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex items-center gap-3">
              <p className="text-[#F2C00C]">{pkg.green}</p>
               {pkg.op1}
              </li>
              <li className="flex items-center gap-3">
                <p className="text-[#F2C00C]">{pkg.green}</p>
                {pkg.op2}
              </li>
              <li className="flex items-center gap-3">
              <p className="text-[#F2C00C]">{pkg.green}</p>
                {pkg.op3}
              </li>
              <li className="flex items-center gap-3">
              <p className="text-[#F2C00C]">{pkg.green}</p>
                {pkg.op4}
              </li>
              <li className="flex items-center gap-3">
              <p className="text-[#F2C00C]">{pkg.red}</p>
                {pkg.op5}
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="bg-blueOntu font-monts w-[160px] h-[40px] text-white  py-2 mb-8 cursor-pointer border-2 border-blueOntu hover:bg-white hover:text-blueOntu transition duration-200 ease-in-out mt-8 flex justify-center items-center outline-none">
                Contratar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
