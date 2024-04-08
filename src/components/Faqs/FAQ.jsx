import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { RiCustomerServiceFill } from "react-icons/ri";
import { RiToolsFill } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const questions = [
  {
    id: 1,
    category: "Clientes",
    question: "¿Qué es Ontu?",
    answer:
      "Ontu es una plataforma enfocada en facilitar la contratación de servicios de mantenimiento y la implementación de paneles solares en un inmueble de una manera sencilla, segura y garantizada.",
  },
  {
    id: 2,
    category: "Clientes",
    question: "¿Por qué eliminaron mi cuenta?",
    answer:
      "Uno de los principales objetivos es crear una comunidad basada en la honestidad y el respeto, si tu cuenta fue eliminada es porque violaste alguno de nuestros Términos y Condiciones. En este caso no hay algo que se pueda hacer al respecto.",
  },
  {
    id: 3,
    category: "Ontuman",
    question: "¿Cuál es su cobertura de instalación?",
    answer: "Cobertura para instalación de paneles solares EDOMEX",
  },
  {
    id: 4,
    category: "Servicios",
    question: "¿Cuál es su horario de servicio?",
    answer:
      "Lunes a Sábado: 08:00 hrs a 19:00 hrs. Domingo: 09:00 hrs a 15:00 hrs",
  },
  {
    id: 5,
    category: "Servicios",
    question: "¿Puedo reservar un servicio para el mismo día?",
    answer:
      "Ontu esta creado para ser eficiente y flexible, sin embargo no podemos atender reservas con menos de 12 horas de anticipación, para poder brindarte el servicio que mereces requerimos de mínimo 12 hrs para prepararnos y siempre estará sujeto a disponibilidad de personal.",
  },
  {
    id: 6,
    category: "Servicios",
    question: "¿Cuál es su cobertura de instalación para paneles solares?",
    answer: "Cobertura para instalación de paneles solares Republica Mexicana",
  },
  {
    id: 7,
    category: "Servicios",
    question:
      "¿Cuál es su cobertura de instalación para servoicios de mantenimiento?",
    answer:
      "Cobertura para servicios de mantenimiento es: la Ciudad de México y el Estado de México.",
  },
];

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(""); // Estado para el filtro de categoría
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterQuestions(term, categoryFilter); // Aplicar filtro también por categoría
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category); // Actualizar el estado del filtro de categoría
    filterQuestions(searchTerm, category); // Aplicar filtro por categoría
  };

  const filterQuestions = (term, category) => {
    const filteredResults = questions.filter(
      (q) =>
        (q.question.toLowerCase().includes(term.toLowerCase()) ||
          q.answer.toLowerCase().includes(term.toLowerCase())) &&
        (category === "" || q.category.toLowerCase() === category.toLowerCase()) // Aplicar filtro por categoría si se ha seleccionado
    );
    setFilteredQuestions(filteredResults);
  };

  return (
    <div className="container px-5 pl-8 mb-5 lg:max-w-[900px]">
      <div className="grid grid-flow-col gap-5 mb-5 font-monts text-[12px] md:px-40 lg:px-48">
        {/* Botones de categoría */}
        {/* <button onClick={() => handleCategoryFilter("")}>Todos</button> */}
        <button
          className={
            categoryFilter === "clientes"
              ? " border border-ontu text-ontu flex flex-col items-center rounded-xl py-2"
              : "bg-gray-100 flex flex-col items-center py-2 rounded-2xl text-grayOntu"
          }
          onClick={() => handleCategoryFilter("clientes")}
        >
          <span>
            <RiCustomerServiceFill size={35} />
          </span>
          <span
            className={
              categoryFilter === "clientes"
                ? "text-black font-semibold "
                : "font-normal "
            }
          >
            Clientes
          </span>
        </button>
        <button
          className={
            categoryFilter === "servicios"
              ? " border border-ontu text-ontu flex flex-col items-center rounded-xl py-2"
              : "bg-gray-100 flex flex-col items-center py-2 rounded-2xl text-grayOntu"
          }
          onClick={() => handleCategoryFilter("servicios")}
        >
          <span>
            <RiToolsFill size={35} />
          </span>
          <span
            className={
              categoryFilter === "servicios"
                ? "text-black font-semibold "
                : "font-normal "
            }
          >
            Servicios
          </span>
        </button>
        <button
          className={
            categoryFilter === "ontuman"
              ? " border border-ontu text-ontu flex flex-col items-center rounded-xl py-2"
              : "bg-gray-100 flex flex-col items-center py-2 rounded-2xl text-grayOntu"
          }
          onClick={() => handleCategoryFilter("ontuman")}
        >
          <span>
            <MdOutlineManageAccounts size={35} />
          </span>
          <span
            className={
              categoryFilter === "ontuman"
                ? "text-black font-semibold "
                : "font-normal "
            }
          >
            Ontuman
          </span>
        </button>
      </div>
      <div className="mb-5">
        <div
          className={`flex items-center mb-2 ${
            searchVisible ? "justify-end" : ""
          }`}
        >
          {/* Muestra el input de búsqueda según el estado de búsqueda visible */}
          <input
            type="text"
            className={`border p-2 w-full transition-all duration-700 ease-in-out delay-100    ${
              searchVisible ? "" : "opacity-0"
            }`}
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ visibility: searchVisible ? "visible " : "hidden" }}
          />
          <p
            className="hover:text-blueOntu cursor-pointer p-2 text-gray-400"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <HiMiniMagnifyingGlass size={30} />
          </p>
        </div>

        {/* Mostrar el span solo cuando searchTerm no esté vacío */}
        {searchTerm && (
          <p className="mb-5">
            <span className="text-[12px]">Resultados para: </span>
            <span className="font-semibold">{searchTerm}</span>
          </p>
        )}
      </div>

      <div className="grid gap-6">
        {filteredQuestions.map((q) => (
          <Accordion
            key={q.id}
            question={q.question}
            answer={q.answer}
            searchTerm={searchTerm}
          />
        ))}
      </div>
      <div
        className="flex items-center justify-center my-5 hover:text-ontu cursor-pointer"
        onClick={() => handleCategoryFilter("")}
      >
        {" "}
        <p>Ver todo</p>
      </div>
    </div>
  );
};
