import { NavBar } from "./NavBar/NavBar";
import { SectionEstudio } from "./Calculo/SectionEstudio";
import { FooterCR } from "./FooterCR";
import { FormCalculo } from "./Calculo/FormCalculo";
import { SectionPasos } from "./Calculo/SectionPasos";

export const SolicitarCalculo = () => {
  return (
    <main>
      <NavBar />
      <SectionEstudio />
      <FormCalculo />
      <SectionPasos />
     <FooterCR /> 
    </main>
  );
};
