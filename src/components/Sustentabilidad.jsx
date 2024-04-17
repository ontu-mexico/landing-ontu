import { FooterCR } from "./FooterCR";

import { CardBeneficosConteniner } from "./sustentabilidad/CardBeneficosConteniner";
import { CardInfo } from "./sustentabilidad/CardInfo";
import { PagSustentabilidad } from "./sustentabilidad/PagSustentabilidad";
import { SectionCalculo } from "./sustentabilidad/SectionCalculo";
import { NavBar } from "./NavBar/NavBar";

export const Sustentabilidad = () => {
  return (
    <main>
     
      <NavBar />
      <PagSustentabilidad />
      <CardInfo />
      <SectionCalculo />
      <CardBeneficosConteniner />
      <FooterCR />
    </main>
  );
};
