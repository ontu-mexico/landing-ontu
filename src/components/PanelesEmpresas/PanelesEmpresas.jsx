import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer";
import { BannerPE } from "./BannerPE";
import { SectionPE } from "./SectionPE";
import { CalculadoraPE } from "./CalculadoraPE";
import { SecitionBeneficios } from "./SecitionBeneficios";
import { SectionShield } from "./SectionShield";
import { CallFormPE } from "./CallFormPE";
import { CardInfo } from "../sustentabilidad/CardInfo";
import { SectionAcademia } from "./SectionAcademia";

export const PanelesEmpresas = () => {
  return (
    <main>
      <NavBar />
      <BannerPE />
      <SectionPE />
      <CalculadoraPE />
      <CardInfo />
      <SectionShield />
      <SecitionBeneficios />
      <SectionAcademia />
      <CallFormPE />
      <Footer />
    </main>
  );
};
