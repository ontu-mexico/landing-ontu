import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import { FooterCR } from "../../FooterCR";
import { BannerSH } from "./BannerSH";
import { AnalyticsSH } from "./AnalyticsSH";
import { CardSH } from "./CardSH";
import { CallSH } from "./CallSH";
import { Precing } from "./Precing";
import { SectionCalculo } from "../../sustentabilidad/SectionCalculo";
export const SmartHome = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full">
        <BannerSH />
      </div>
      <AnalyticsSH />
      <CardSH />
      <Precing />
      <CallSH />
      <SectionCalculo />
      <FooterCR />
    </main>
  );
};
