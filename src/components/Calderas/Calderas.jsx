import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerCalderas } from "./BannerCalderas";
import { SectionCalderas } from "./SectionCalderas";
import { CardBeneficios } from "./CardBeneficios";
import { AcademiaAgua } from "./AcademiaAgua";
import { CallCalderas } from "./CallCalderas";
import { DiseñoCalderas } from "./DiseñoCalderas";
import { Helmet } from "react-helmet-async";
export const Calderas = () => {
  return (
    <main>
      <Helmet>
        <title>Calderas de Condensación | Ontu</title>
        <meta
          name="description"
          content="Eficiencia para calentar agua con calderas de condensación. "
        />
        <meta
          name="Keywords"
          content="caldera de condensacion, caldera de condensacion o estanca, calderas de gas condensacion, caldera de condensacion gas natural"
        />
        <meta property="og:title" content="Calderas de Condensación | Ontu" />
        <meta
          property="og:description"
          content="Eficiencia para calentar agua con calderas de condensación."
        />
        <meta
          property="og:url"
          content="https://www.ontu.mx/calderas-de-condensacion"
        />
        <meta
          property="og:image"
          content="https://www.ontu.mx/ontu_logo.png"
        />
        <link
          rel="canonical"
          href="https://www.ontu.mx/calderas-de-condensacion"
        />
      </Helmet>
      <NavBar />
      <BannerCalderas />
      <SectionCalderas />
      <CardBeneficios />
      <DiseñoCalderas />
      <AcademiaAgua />
      <CallCalderas />
      <FooterCR />
    </main>
  );
};
