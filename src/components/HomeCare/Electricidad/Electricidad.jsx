import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import { BannerElec } from "./BannerElec";
import { AnalyticsElec } from "./AnalyticsElec";
import { CardElec } from "./CardElec";
import { CallElec } from "./CallElec";
import { FooterCR } from "../../FooterCR";

export const Electricidad = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full">
        <BannerElec />
      </div>
      <AnalyticsElec />
      <CardElec />
      <CallElec />
      <FooterCR />
    </main>
  );
};
