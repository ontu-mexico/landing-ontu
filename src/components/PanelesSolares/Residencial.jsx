import React, { useEffect, useState } from "react";
import Slider from "react-slider";
import { useNavigate } from "react-router-dom";
import "./slider.css";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
//Animation number
import { useSpring, animated } from "react-spring";
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 400,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
//Slider
const MIN = 600;
const MAX = 35000;

export const Residencial = () => {
  // Control de valores del Slider
  const [values, setValues] = useState(MIN);

  //Animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  console.log("values: ", values);
  const navigate = useNavigate();
  return (
    <main>
      <div
        className="w-full flex justify-center flex-col p-10 md:p-7  rounded-3xl bg-white"
        data-aos="jump-in"
        x-data="{intersect:false}"
      >
        <div className="font-monts  ">
          <h3 className="mt-3 text-[12px] md:text-[13px] lg:text-[15px] tracking-widest text-left text-blueOntu font-medium ">
            Tu recibo CFE actual
          </h3>
          <div className="flex justify-between items-center">
            <p className=" text-[14px] md:text-[16px]  lg:text-[18px]   text-left text-black">
              ¿Cuánto pagas actualmente?
            </p>
            <div
              className={
                "  text-[14px] md:text-[16px]  lg:text-[18px]  font-monts  text-black text-center flex col-span-2 justify-center "
              }
            >
              <div className="">$</div> <div> {values}</div>
            </div>
          </div>
        </div>

        {/* SliderRange */}
        <div className="h-[20px] ">
          <Slider
            className={"slider"}
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
          />
          <div className="flex font-monts justify-between text-gray-500 mt-4 mb-5 font-light">
            <div
              className={
                "text-[13px] font-monts font-normal tracking-wide text-center flex justify-center "
              }
            >
              <div>$</div>
              <div className="">
                <Number n={600} />
              </div>
            </div>
            <div
              className={
                "text-[13px] font-monts font-normal tracking-wide  text-center flex justify-center "
              }
            >
              <div className="">$</div>
              <div className="">
                <Number n={35000} />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center font-monts justify-center mt-20">
          <h3 className="mt-3 text-[12px] md:text-[13px] lg:text-[15px] tracking-widest text-left text-blueOntu font-medium  ">
            Nuevo recibo CFE
          </h3>

          <div className="flex justify-between items-center  ">
            <p className="text-[14px] md:text-[16px] lg:text-[18px]  font-monts text-black  ">
              Lo que pagarías si utilizaras Paneles Solares:
            </p>
            <div
              className={
                "text-[16px] md:text-[18px] lg:text-[20px]  font-monts  flex col-span-2 justify-between text-blueOntu font-medium mr-2 lg:ml-3  my-2  "
              }
            >
              <div className="ml-5">$</div>
              <div id="resultado">
                {values <= 2500 ? (
                  <Number n={59} />
                ) : (
                  <Number n={(values * 5) / 100} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
