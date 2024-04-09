import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer";
import { BannerFinanciamiento } from "./BannerFinanciamiento";
import { SolucionesFinancieras } from "./SolucionesFinancieras";
// import { CalculadoraFinanciera } from "./CalculadoraFinanciera";
import { CallAlma } from "../Almacenamiento/CallAlma";

export const Financiamiento = () => {
  return (
    <main>
      <NavBar />
      <BannerFinanciamiento />
      <SolucionesFinancieras />
      {/* <CalculadoraFinanciera /> */}
      <CallAlma />
      <Footer />
    </main>
  );
};
