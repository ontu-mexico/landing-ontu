import { Link } from "react-router-dom";
import logo from "../assets/logo/ontu_logo.png";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  

  return (
    <div className="py-16 px-6 grid lg:grid-cols-3 gap-8 bg-white ">
      <div className="lg:mx-8">
        <img
          className="bg-white w-[150px] mx-auto lg:mx-0"
          src={logo}
          alt="Logo"
        />
        <div className="flex justify-between my-6 mx-6 lg:mx-0 lg:w-[150px]">
          <a
            href="https://www.facebook.com/profile.php?id=100076323696101"
            rel="Facebook"
          >
            <FaFacebook
              size={30}
              className="hover:scale-110 duration-75 cursor-pointer  hover:text-ontu"
            />
          </a>
          <a
            href="https://www.instagram.com/ontu.mx/"
            rel="Instagram"
          >
            <FaInstagram
              size={30}
              className="hover:scale-110 duration-75 cursor-pointer  hover:text-ontu"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/ontu"
            rel="Linkedin"
          >
            <FaLinkedinIn
              size={30}
              className="hover:scale-110 duration-75 cursor-pointer  hover:text-ontu"
            />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between font-monts lg:mx-8">
        <div>
          <h6 className="font-semibold uppercase font-monts mb-2 text-ontu">
            Legales
          </h6>
          <ul>
            <li className="py-2 text-sm hover:text-ontu">
              <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link>
            </li>
            {/* <li className="py-2 text-sm hover:text-ontu">
              <Link to="">Garantía de Felicidad</Link>
            </li> */}
            {/* <li className="py-2 text-sm hover:text-ontu">
              <Link to="">Pólitica de Cancelación</Link>
            </li> */}
            <li className="py-2 text-sm hover:text-ontu">
              <Link to="/terminos-de-uso">Términos y Condiciones</Link>
            </li>
          </ul>
        </div>
        <div className="mr-5">
          <h6 className="font-semibold uppercase font-monts mb-2 text-ontu">
            Empresa
          </h6>
          <ul>
            <li className="py-2 text-sm hover:text-ontu">
              <Link to="">Blog</Link>
            </li>
            <li className="py-2 text-sm hover:text-ontu">
              <Link to="/preguntas-frecuentes">FAQs</Link>
            </li>

            {/* <li className="py-2 text-sm hover:text-ontu">
              <Link to="">Estrategía de impacto</Link>
            </li> */}
          </ul>
        </div>
        <div>
          <h6 className="font-semibold uppercase font-monts mb-2 text-ontu">
            Equipo
          </h6>
          <ul>
            <li className="py-2 text-sm hover:text-ontu">
              <a href="">Instaladores Solares</a>
            </li>
            <li className="py-2 text-sm hover:text-ontu">
              <a href="">Profesionales del Hogar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
