import React, { useEffect, useState } from "react";
import { Clock } from "./Clock";
import { FaFacebook, FaLinkedinIn} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo1 from "/src/assets/SmartHome/UnderConstruction6.png";
import logo from "/src/assets/logo/white_logo_transparent_background.png";
import { useNavigate, Link } from "react-router-dom";


export const UnderConstruction = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("April 1, 2024").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //Stop Timer
        clearInterval(interval.current);
      } else {
        //Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <section className="w-auto min-h-screen flex justify-center items-center flex-col bg-ontu ">
        
      <div className="absolute flex flex-col items-center text-center  bg-white ">
      <div className="w-full bg-ontu flex justify-center">
        <img
          className=" h-[55px] w-[132px] lg:h-[75px] lg:w-[170px] animate-fade-downanimate-duration-[1500ms] animate-delay-200 animate-ease-in "
          src={logo}
          alt="Ontu" 
        /> 
        </div>
        <h3 className="mt-5 font-medium text-black">NUESTRO SITIO WEB ESTÁ EN CONSTRUCCIÓN</h3>
        <div>
          <img
            className="h-[120px] w-[280px] lg:h-[205px] lg:w-[450px] animate-fade-downanimate-duration-[1500ms] animate-delay-200 animate-ease-in  "
            src={logo1}
            alt="Ontu"
          />
        </div>
        {/* <h1 className="text-2xl m-5 font-monts uppercase font-bold mb-1 text-ontu">
          PRÓXIMAMENTE
        </h1> */}
        
        <div className="mb-4 ">
          <p className="font-semibold uppercase font-monts text-lg">
            FECHA DE LANZAMIENTO <span className="text-[#F2C00C] ">1 DE ABRIL</span>
          </p>
        </div>
        <div className="px-2">
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        </div>

       

        <div className="flex justify-between p-5 w-[250px]">
          
          <Link to="https://www.facebook.com/Ontumx-102507562279215/">
          <FaFacebook
            size={25}
            className="hover:scale-110 duration-75 cursor-pointer  hover:text-black text-grayOntu"
          />
          </Link>
          <Link to="https://www.instagram.com/ontu.mx/">
          <AiFillInstagram 
            size={25}
            className="hover:scale-110 duration-75 cursor-pointer  hover:text-black text-grayOntu"
          /></Link>
          <Link to="https://www.linkedin.com/company/ontu">
          <FaLinkedinIn
            size={25}
            className="hover:scale-110 duration-75 cursor-pointer  hover:text-black text-grayOntu"
          />
          </Link>
         
         
        </div>
        <div className="text-white bg-ontu text-center p-3 w-full">
          <p className="text-sm">
            © Copyright 2024 | ONTU S.A.P.I DE C.V. 
          </p>
        </div>
      </div>
    </section>
  );
};
