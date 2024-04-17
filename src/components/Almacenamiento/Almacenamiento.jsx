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
        <meta property="og:title" content="Almacenamiento de Energía | Ontu" />
        <meta
          property="og:description"
          content="Optimiza y Almacena tu Energía."
        />
        <meta property="og:url" content="https://www.ontu.mx/" />
        <meta property="og:image" content="https://www.ontu.mx/logo_ontu-DO4XE2sa.png" />
        <link
          rel="canonical"
          href="https://www.ontu.mx/almacenamiento-de-energia"
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
