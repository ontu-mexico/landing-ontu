import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { AnalyticsIndex } from "./AnalyticsIndex";
import { BannerIndex } from "./BannerIndex";
import { ServiciosIndex } from "./ServiciosIndex";
import { FormularioIndex } from "./FormularioIndex";
import { LogosEmpresas } from "./LogosEmpresas";
import { Helmet } from "react-helmet-async";

export const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Home | Ontu</title>
        <meta
          name="description"
          content="Transforma tu hogar o industria con energía sostenible. Expertos en eficiencia y ahorro."
        />
        <meta
          name="Keywords"
          content="paneles solares,  paneles solares para casa, casas sustentables con paneles solares, paneles solares para industrias, paneles solares mexico"
        />
      </Helmet>
      <NavBar />
      <BannerIndex />
      <AnalyticsIndex />
      <ServiciosIndex />
      <LogosEmpresas />
      <FormularioIndex />
      <FooterCR />
    </main>
  );
};
