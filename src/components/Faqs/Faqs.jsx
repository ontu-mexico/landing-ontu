import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerFaqs } from "./BannerFaqs";
import { FAQ } from "./FAQ";
import { Helmet } from "react-helmet-async";

export const Faqs = () => {
  return (
    <main>
      <Helmet>
        <title>Preguntas Frecuentes | Ontu</title>
        <meta name="description" content="Preguntas Frecuentes " />
        <meta
          name="Keywords"
          content="caldera de condensacion, paneles solares, caldera de condensacion o estanca, calderas de gas condensacion, caldera de condensacion gas natural"
        />
        <meta property="og:title" content="Preguntas Frecuentes | Ontu" />
        <meta property="og:description" content="Preguntas Frecuentes" />
        <meta
          property="og:url"
          content="https://www.ontu.mx/preguntas-frecuentes"
        />
        <meta
          property="og:image"
          content="https://www.ontu.mx/ontu_logo.png"
        />
        <link rel="canonical" href="https://www.ontu.mx/preguntas-frecuentes" />
      </Helmet>
      <NavBar />
      <BannerFaqs />
      <FAQ />
      <FooterCR />
    </main>
  );
};
