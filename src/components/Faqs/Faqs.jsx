import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer";
import { BannerFaqs } from "./BannerFaqs";
import { FAQ } from "./FAQ";

export const Faqs = () => {
  return (
    <main>
      <NavBar />
      <BannerFaqs />
      <FAQ />
      <Footer />
    </main>
  );
};
