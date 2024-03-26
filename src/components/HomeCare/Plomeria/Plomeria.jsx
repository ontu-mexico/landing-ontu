import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import { FooterCR } from "../../FooterCR";
import { BannerPlomer } from "./BannerPlomer";
import { CardPlomeria } from "./CardPlomeria";
import { Analytics } from "./Analytics";
import { CallPlomeria } from "./CallPlomeria";
export const Plomeria = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full">
        <BannerPlomer />
      </div>
      <Analytics />
      <CardPlomeria />
      <CallPlomeria />
      <FooterCR />
    </main>
  );
};