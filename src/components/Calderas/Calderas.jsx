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
