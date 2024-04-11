import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { SectionCalculo } from "../sustentabilidad/SectionCalculo";
import { BannerHC } from "./BannerHC";
import { ServiciosHC } from "./ServiciosHC";

export const HomeCare = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full">
        <BannerHC />
      </div>
      <ServiciosHC />
      <SectionCalculo />
      <FooterCR />
    </main>
  );
};
