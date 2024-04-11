import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerAlmacenamiento } from "./BannerAlmacenamiento";
import { CallAlma } from "./CallAlma";
import { SectionAlma } from "./SectionAlma";
import { ServiciosAlma } from "./ServiciosAlma";
import { BeneficiosAlma } from "./BeneficiosAlma";

export const Almacenamiento = () => {
  return (
    <main>
      <NavBar />
      <BannerAlmacenamiento />
      <SectionAlma />
      <ServiciosAlma />
      <BeneficiosAlma />
      <CallAlma />
      <FooterCR />
    </main>
  );
};
