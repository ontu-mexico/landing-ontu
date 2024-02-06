import React from 'react'
import { Header } from "./components/Header";
import { FooterCR } from "./components/FooterCR";
import { CardBeneficosConteniner } from "./components/sustentabilidad/CardBeneficosConteniner";
import { CardInfo } from "./components/sustentabilidad/CardInfo";
import { PagSustentabilidad } from "./components/sustentabilidad/PagSustentabilidad";
import { SectionCalculo } from "./components/sustentabilidad/SectionCalculo";

export const MainSustentabilidad = () => {
  return (
    <>
         <Header />
         <PagSustentabilidad />
         <CardInfo />
         <SectionCalculo />
         <CardBeneficosConteniner />
         <FooterCR />
    </>
  );
};

