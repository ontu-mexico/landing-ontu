import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerCalderas } from "./BannerCalderas";
import { SectionCalderas } from "./SectionCalderas";
import { CardBeneficios } from "./CardBeneficios";
import { AcademiaAgua } from "./AcademiaAgua";
import { CallCalderas } from "./CallCalderas";
import { DiseñoCalderas } from "./DiseñoCalderas";
export const Calderas = () => {
  return (
    <main>
      <NavBar />
      <BannerCalderas />
      <SectionCalderas />
      <CardBeneficios />
      <DiseñoCalderas />
      <AcademiaAgua />
      <CallCalderas />
      <FooterCR />
    </main>
  );
};
