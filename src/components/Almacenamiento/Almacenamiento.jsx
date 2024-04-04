import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer";
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
      <Footer />
    </main>
  );
};
