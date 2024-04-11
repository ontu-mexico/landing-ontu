import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerCalentamiento } from "./BannerCalentamiento";
import { CallCalen } from "./CallCalen";
import { ServiciosCalen } from "./ServiciosCalen";
import { DiseñoCalen } from "./DiseñoCalen";

export const Calentamiento = () => {
  return (
    <main>
      <NavBar />
      <BannerCalentamiento />
      <ServiciosCalen />
      <DiseñoCalen/>
      <CallCalen />
      <FooterCR />
    </main>
  );
};
