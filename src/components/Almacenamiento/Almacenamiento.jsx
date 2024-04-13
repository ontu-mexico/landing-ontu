import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerAlmacenamiento } from "./BannerAlmacenamiento";
import { CallAlma } from "./CallAlma";
import { SectionAlma } from "./SectionAlma";
import { ServiciosAlma } from "./ServiciosAlma";
import { BeneficiosAlma } from "./BeneficiosAlma";
import { Helmet } from "react-helmet-async";

export const Almacenamiento = () => {
  return (
    <main>
      <Helmet>
        <title>Almacenamiento de Energía | Ontu</title>
        <meta name="description" content="Optimiza y Almacena tu Energía." />
        <meta
          name="Keywords"
          content="almacenamiento de energia. almacenamiento de energia solar, almacenamiento de energia electrica, almacenador de energia"
        />
      </Helmet>
      <NavBar />
      <BannerAlmacenamiento />
      <SectionAlma />
      <ServiciosAlma />
      <BeneficiosAlma />
      <CallAlma />
      <FooterCR />
    </main>
  );
};
