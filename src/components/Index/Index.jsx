import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { AnalyticsIndex } from "./AnalyticsIndex";
import { BannerIndex } from "./BannerIndex";
import { ServiciosIndex } from "./ServiciosIndex";
import { FormularioIndex } from "./FormularioIndex";
import { LogosEmpresas } from "./LogosEmpresas";

export const Index = () => {
  return (
    <main>
      <NavBar />
      <BannerIndex />
      <AnalyticsIndex />
      <ServiciosIndex />
      <LogosEmpresas />
      <FormularioIndex />
      <FooterCR />
    </main>
  );
};
