import React from "react";
import logo from "../assets/logo/logo_transparent_background.png";
import {
  
  FaFacebook,
  FaLinkedinIn ,
  FaInstagram,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


export const Footer = () => {
  return (
     
    <div className="py-16 px-6 grid lg:grid-cols-3 gap-8 bg-white ">
      <div className="lg:mx-8" >
      <img className="bg-white w-[150px] mx-auto lg:mx-0" src={logo} alt="Logo" />
      <div className="flex justify-between my-6 mx-6 lg:mx-0 lg:w-[150px]">
        {/* < IoLogoWhatsapp size={30} className="hover:scale-110 duration-75 cursor-pointer hover:text-ontu" /> */}
        < FaFacebook size={30} className="hover:scale-110 duration-75 cursor-pointer  hover:text-ontu" /> 
        < FaLinkedinIn  size={30} className="hover:scale-110 duration-75 cursor-pointer  hover:text-ontu" /> 
        < FaInstagram size={30} className="hover:scale-110 duration-75 cursor-pointer  hover:text-ontu" /> 
      </div>
      </div>
      <div className="lg:col-span-2 flex justify-between font-monts lg:mx-8">
        <div>
            <h6 className="font-bold uppercase font-monts mb-2 text-ontu">Legales</h6>
            <ul>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Aviso de Privacidad</a></li>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Garantía de Felicidad</a></li>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Pólitica de Cancelación</a></li>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Términos y Condiciones</a></li>
            </ul>
        </div>
        <div>
            <h6 className="font-bold uppercase font-monts mb-2 text-ontu">Empresa</h6>
            <ul>
                <li className="py-2 text-sm hover:text-ontu"><a href="">FAQs</a></li>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Blog</a></li>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Estrategía de impacto</a></li>
            </ul>
        </div>
        <div>
            <h6 className="font-bold uppercase font-monts mb-2 text-ontu">Equipo</h6>
            <ul>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Instaladores Solares</a></li>
                <li className="py-2 text-sm hover:text-ontu"><a href="">Profesionales del Hogar</a></li>
                
            </ul>
        </div>
      </div>
      
    </div>
  );
};
