import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const Accordion = ({ question, answer, searchTerm }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    // Determina si la pregunta o la respuesta coinciden parcialmente con el término de búsqueda
    const matchesPartialSearch =
      searchTerm.trim() === "" ||
      question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      answer.toLowerCase().includes(searchTerm.toLowerCase());

    // Si se ha realizado una búsqueda y hay coincidencia, abre el acordeón
    if (searchTerm && matchesPartialSearch) {
      setAccordionOpen(true);
    } else {
      setAccordionOpen(false);
    }
  }, [question, answer, searchTerm]);

  const toggleAccordion = () => {
    // Cambia el estado del acordeón al hacer clic en el botón
    setAccordionOpen((prevState) => !prevState);
  };

  return (
    <div className="font-monts px-4 border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full font-semibold text-left "
      >
        <span>{question}</span>
        {accordionOpen ? (
          <span className="transform origin-center  transition duration-200 ease-out text-gray-600">
            <IoIosArrowUp />
          </span>
        ) : (
          <span className="transform origin-center  transition duration-200 ease-out text-ontu">
            <IoIosArrowDown />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-left mt-2 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mb-3">{answer}</div>
      </div>
    </div>
  );
};
