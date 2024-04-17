import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerFaqs } from "./BannerFaqs";
import { FAQ } from "./FAQ";

export const Faqs = () => {
  return (
    <main>
      <NavBar />
      <BannerFaqs />
      <FAQ />
      <FooterCR />
    </main>
  );
};
