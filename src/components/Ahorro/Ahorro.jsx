import { Helmet } from "react-helmet-async";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { BannerAhorro } from "./BannerAhorro";
import { SectionSoluciones } from "./SectionSoluciones";
import { SectionBeneficios } from "./SectionBeneficios";
import { AcademiaAhorro } from "./AcademiaAhorro";
import { CallAlma } from "../Almacenamiento/CallAlma";
export const Ahorro = () => {
  return (
    <main>
      <Helmet>
        <title>Ahorro de Agua| Ontu</title>
        <meta
          name="description"
          content="Soluciones sostenibles para la gestión del agua."
        />
        <meta
          name="Keywords"
          content="ahorro de agua, formas de ahorrar agua
          "
        />
      </Helmet>
      <NavBar />
      <BannerAhorro />
      <SectionSoluciones />
      <SectionBeneficios />
      <AcademiaAhorro />
      <CallAlma />
      <FooterCR />
    </main>
  );
};
