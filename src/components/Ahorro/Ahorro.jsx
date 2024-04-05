import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer";
import { BannerAhorro } from "./BannerAhorro";
import { SectionSoluciones } from "./SectionSoluciones";
import { SectionBeneficios } from "./SectionBeneficios";
import { AcademiaAhorro } from "./AcademiaAhorro";
import { CallAlma } from "../Almacenamiento/CallAlma";
export const Ahorro = () => {
  return (
    <main>
      <NavBar />
      <BannerAhorro />
      <SectionSoluciones />
      <SectionBeneficios />
      <AcademiaAhorro />
      <CallAlma />
      <Footer />
    </main>
  );
};
